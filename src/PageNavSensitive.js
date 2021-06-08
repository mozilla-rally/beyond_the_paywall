/**
 * This is clone of PageNav.js, but for sensitive sites
 * It strips the URL down to it's base for websites who's URL's might contain identifying info
 * i.e. facebook, twitter, etc
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNavSensitive
 */

 import * as webScience from "@mozilla/web-science";


let initialized = false

/**
 * Start a sensitive page nav study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {Object} rally - The Mozilla Rally object initialized in background.js
 * @param {Boolean} is_dev_mode - Determines where to store data
 */
export async function startMeasurement ({
    domains = [],
    rally: rally,
    is_dev_mode: is_dev_mode
}) {

  // If already initialized, don't do it again
  if (initialized){
    return   
  }
  initialized = true

  //Handles onPageData callbacks
  webScience.pageNavigation.onPageData.addListener(async (pageData) => {
    // Get survey status
    let surveyStatus  = await webScience.userSurvey.getSurveyStatus()
    // If Completed
    if (surveyStatus=="completed"){
      // PageID here is a unique key for local key-value storage
      let pageId = "WebScience.PageNavSensitive."+pageData.pageId.toString()
      // Grab surveyUserID and set it in data
      let surveyUserID = await webScience.userSurvey.getSurveyId()
      pageData['userID'] = ''+surveyUserID
      
      //Trim "url" to its base URL
      trimmedURL = fullURLtoBaseURL(pageData.url)
      delete pageData.url
      pageData['url'] = trimmedURL

      //delete unnecessary fields for yellow list
      delete pageData.referrer
      delete pageData.attentionDuration
      delete pageData.audioDuration
      delete pageData.attentionAndAudioDuration
      delete pageData.maxRelativeScrollDepth
      delete pageData.privateWindow
      
      //Set page type to match other collection modules
      pageData['type'] = 'WebScience.pageNavSensitive'

      //Change pageId to visitId for clarity
      pageData['visitId'] = pageData.pageId
      delete pageData.pageId
      // If dev mode, set data locally. Otherwise, ping rally.
      if (is_dev_mode){
        browser.storage.local.set({[pageId]:pageData})
      } else {
        rally.sendPing("pageNavSensitive", pageData);
      }
    } else {
      console.log("Survey not completed")
    }
  }, {
    matchPatterns: webScience.matching.domainsToMatchPatterns(domains)
  });
}


/**
 * Function: fullURLtoBaseURL
 *  This function splits a URL and returns it's base
 * @param {string} urlString -a URL as a string
 * returns a string, the base URL
 */
function fullURLtoBaseURL(urlString){
  if(urlString){
    var pathArray = urlString.split( '/' );
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = protocol + '//' + host;

    return url
  } else {
    return urlString
  }
}
