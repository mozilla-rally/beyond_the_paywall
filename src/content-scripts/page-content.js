/**
 * Content script to extract url, title, and text from a page
 * @module WebScience.Measurements.content-scripts.page-content
 */
// Function encapsulation to maintain unique variable scope for each content script

//Brian Chivers, 3/19/2021
// This content script is slightly modified (maybe not even at all) by Princeton's script
// This version grabs the URL, title, and text from a page to save

const pageContent = function () {
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
  
      // Parse (a clone of) the document using the injected readability script
      let documentClone = document.cloneNode(true);
      let pageContent = new Readability(documentClone).parse();
  
      sendPageContentToBackground(pageContent);

}
// Wait for pageManager load
if ("pageManager" in window)
  pageContent();
else {
    if(!("pageManagerHasLoaded" in window))
        window.pageManagerHasLoaded = [];
    window.pageManagerHasLoaded.push(pageContent);
}