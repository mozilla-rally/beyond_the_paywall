/**
 * Content script to extract url, title, and text from a page
 * @module WebScience.Measurements.content-scripts.page-ads
 */
// Function encapsulation to maintain unique variable scope for each content script

// workerIds is defined by injected code

(
    async function () {

      console.log(document.body)//.getBoundingClientRect())

      /**
       * @constant
       * How often (in milliseconds) to check maximum page scroll depth
       */
      const updateInterval = 100000;
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
              body: {height: document.body.clientHeight,
                    width: document.body.clientWidth},
              ads: ads,
              context: {
                timestamp: Date.now(),
                referrer: ''+document.referrer,
              }
          });
      }

      var ads = [];

      function parseDocumentForAds (evt) {

        // Grab all elements using CSS selectors, and filter out only DIVs and Iframes
        let current_ads = [];
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
                    current_ads.push(this_ad)
                  }  
                }
              }
            }
          } catch(err) {
            console.log(err)
          }
        }

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
        sendAdsToBackground(document,unique_ads)
      }

      function findAds (evt) {
        current_ad_length = ads.length
        console.log("Current ads length: "+current_ad_length)
        var intervalId = setInterval(parseDocumentForAds, updateInterval);
        if (ads.length != current_ad_length){
          current_ad_length = ads.length;
          console.log("Current ads length: "+current_ad_length)
          clearInterval(intervalId);
          var intervalId = setInterval(parseDocumentForAds, updateInterval);
        } else {
          console.log("Interval has stopped")
        }
      }
      // Set an interval to check the scroll depth
      window.addEventListener ("load", parseDocumentForAds, false);
      //window.addEventListener ("unload", sendAdsToBackground(document,ads), false);


    }
  )();