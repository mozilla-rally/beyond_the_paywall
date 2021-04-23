/**
 * Content script to extract url, title, and text from a page
 * @module WebScience.Measurements.content-scripts.page-content
 */
// Function encapsulation to maintain unique variable scope for each content script

//Brian Chivers, 3/19/2021
// This content script is slightly modified (maybe not even at all) by Princeton's script
// This version grabs the URL, title, and text from a page to save
const pageContent = function () {

      const pageManager = window.webScience.pageManager;

      /**
       * Send page content to a background script (e.g., a classifier)
       * @param {string} workerId - id of the background worker
       * @param {Object} pageContent - parsed page content
       * @returns {void}
       */
      function sendPageContentToBackground(pageContent) {
          browser.runtime.sendMessage({
              type: "WebScience.articleContent",
              pageId: pageManager.pageId,
              url : document.location.href,
              title : pageContent.title,
              text : pageContent.textContent,
              context: {
                timestamp: Date.now(),
                referrer: document.referrer,
              }
          });
      }
      console.log("getting page content!")
      // Parse (a clone of) the document using the injected readability script
      const documentClone = document.cloneNode(true); 
      const article = (new Readability(documentClone)).parse();
      
      console.log(documentClone)
      sendPageContentToBackground(article);

}

// Wait for pageManager load
if (("webScience" in window) && ("pageManager" in window.webScience)) {
  console.log("page manager in in window")
  pageContent();
}
else {
  console.log("page manager not in in window")
  if(!("pageManagerHasLoaded" in window)) {
      window.pageManagerHasLoaded = [];
      console.log("page manager queue")
  }
  window.pageManagerHasLoaded.push(pageContent);
  console.log("pushed page manager queue")
}