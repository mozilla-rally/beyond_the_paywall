/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageText
 */

 import * as WebScience from './WebScience.js'
 
 /**
  * A KeyValueStorage object for data associated with the study.
  * @type {Object}
  * @private
  */
 let storage = null
 let initialized = false
 
 /**
  * Start an article contents study.
  * @param {Object} options - A set of options for the study.
  * @param {string[]} [options.domains=[]] - The domains of interest for the study.
  */
 export async function startMeasurement ({
     domains = []
 }) {
 
   if (initialized){
     return   
   }
   initialized = true
 
   WebScience.Measurements.PageText.onTextParsed.addListener(async (pageData) => {
    let surveyStatus  = await WebScience.Utilities.UserSurvey.getSurveyStatus()
    if (surveyStatus=="completed"){
      pageData['type'] = "WebScience.pageNav"
      let pageId = "WebScience.ArticleContents."+pageData.pageId
      let userID = await WebScience.Utilities.UserSurvey.getSurveyId()
      pageData['userID'] = ''+userID
      delete pageData.content
      browser.storage.local.set({[pageId]:pageData})
    } else {
      console.log("Survey not completed")
    }
   }, {
     matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
   });
 }
 
 