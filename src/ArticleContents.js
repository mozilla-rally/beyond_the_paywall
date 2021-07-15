/**
 * This code gets text content from Articles, based on WebScience's PageText module
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageText
 */

 import * as webScience from "@mozilla/web-science";
 
 let initialized = false
 
 /**
  * Start an article contents study.
  * @param {Object} options - A set of options for the study.
  * @param {string[]} [options.domains=[]] - The domains of interest for the study.
  * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
  * @param {Boolean} is_dev_mode - Determines where to store data
  */
 export async function startMeasurement ({
     domains = [],
     rally: rally,
     is_dev_mode: is_dev_mode
 }) {
   // If this module has been initialized, don't do it again
   if (initialized){
     return   
   }
   initialized = true
 
   // Handle onTextParsed event callbacks
   webScience.pageText.onTextParsed.addListener(async (pageData) => {
    const surveyUserID = await webScience.userSurvey.getSurveyId()
    const output = {
      "type" : "WebScience.articleContents",
      "visitId" : pageData.pageId,
      "userId" :  ""+surveyUserID,
      "url" : pageData.url,
      "title" : pageData.title,
      "textContent" : pageData.textContent
    }
    // If its dev mode, save locally.  Otherwise, ping rally
    if ( is_dev_mode ){
      //pageID here is used as a unique key for local key/value storage
      const pageId = "WebScience.ArticleContents."+pageData.pageId
      console.log({[pageId]:output})
    } else {
      rally.sendPing("article-content", output);
    }
   }, {
     matchPatterns: webScience.matching.domainsToMatchPatterns(domains)
   });
 }
 
 