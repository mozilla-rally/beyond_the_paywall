/**
 * Content script to extract url, title, and text from a page
 * @module WebScience.Measurements.content-scripts.page-ads
 */
// Function encapsulation to maintain unique variable scope for each content script

// workerIds is defined by injected code

(
    async function () {
      /**
       * @constant
       * How often (in milliseconds) to check maximum page scroll depth
       */
      const updateInterval = 1500;
      const retryAttempts = 3;
      /**
       * Send page content to a background script (e.g., a classifier)
       * @param {string} document - HTML doc for href and referrer
       * @param {Object} ads - The advertisment info
       * @returns {void}
       */
      function sendAdsToBackground(document, ads) {
          browser.runtime.sendMessage({
              type: "WebScience.advertisements",
              url : document.location.href,
              body: {clientHeight: document.body.clientHeight,
                    clientWidth: document.body.clientWidth},
              ads: ads,
              context: {
                timestamp: Date.now(),
                referrer: ''+document.referrer,
              }

          });
          data_sent=true;
      }

      var ads = [];
      var ad_length = [];
      var parsed = false;
      var data_sent = false;

      function parseDocumentForAds (evt) {
        console.log("parsing doc!")
        // Grab all elements using CSS selectors, and filter out only DIVs and Iframes
        let current_ads = [];
        let working_css_selectors = [];
        for (var i = 0; i < adCssSelectors.length; ++i) {
          try {
            let ad = document.querySelectorAll(adCssSelectors[i]);
            if(ad.length !== 0) {
              //console.log(ad)
              for (var j = 0; j < ad.length; ++j) {
                this_ad = ad[j]
                //console.log(this_ad.getBoundingClientRect())
                if(this_ad.tagName=="DIV" || this_ad.tagName=="IFRAME") {
                  if(this_ad.clientHeight!=0 && this_ad.clientWidth!=0 ){
                    working_css_selectors.push(adCssSelectors[i])
                    current_ads.push(this_ad)
                  }  
                }
              }
            }
          } catch(err) {
            console.log(err)
          }
        }
        //console.log(working_css_selectors)

        // Go through list, and pull out only elements that are not parents
        let children = [];
        for (var i = 0; i < current_ads.length; ++i) {
          let is_parent=false;
          this_ad = current_ads[i];
          for (var j = 0; j < current_ads.length; ++j) {
            ad_to_compare = current_ads[j];
            if(ad_to_compare!==this_ad){
              if(this_ad.contains(ad_to_compare)){
                is_parent=true;
              }
            }
          }
          if (!is_parent){
            children.push(this_ad)
          }
        }

        //Go through child elements, and pull data
        let ad_data = [];
        for (var i = 0; i < children.length; ++i) {
          this_ad = children[i];
          ad_data.push({id: this_ad.id,
            tag: this_ad.tagName,
            clientHeight: this_ad.clientHeight,
            clientWidth: this_ad.clientWidth,
            height: this_ad.height,
            width: this_ad.width
            })
        }
        
        unique_ads = ad_data.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
        ads = unique_ads;
        ad_length.push(unique_ads.length);
        if (parsed==false){
          parsed = true;
        }
        console.log(children);
        console.log("done parsing doc")
      }

      function findAds (evt) {

        function intervalFunc(evt) {
          parseDocumentForAds(evt);
          // if we've retried retryAttempt times
          // And the last retryAttempt lengths are the same
          // Stop the script and send the data.
          if(ad_length.length>retryAttempts && 
            ad_length.slice(Math.max(ad_length.length - retryAttempts, 1)).every((val, ind, arr) => val === arr[0])){
            clearInterval(intervalId)
            sendAdsToBackground(document, ads)
          }
        }
        intervalId = setInterval(intervalFunc, updateInterval);
        
      }

      function unload (evt){
        if (parsed==false){
          parseDocumentForAds(evt);
        }
        if(data_sent==false){
          sendAdsToBackground(document, ads)
        }
      }

      // Set an interval to check the scroll depth
      window.addEventListener ("load", findAds, false);
      window.addEventListener ("unload", unload, false);


    }
  )();