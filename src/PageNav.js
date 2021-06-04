/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNav
 */

import * as WebScience from './WebScience.js'

let initialized = false

/**
 * Start a page nav study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {Object} rally - The Mozilla Rally object, initialized in background.js
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

  //Handles PageNavigation callbacks
  WebScience.Measurements.PageNavigation.onPageData.addListener(async (pageData) => {
    //Get Survey Status
    let surveyStatus  = await WebScience.Utilities.UserSurvey.getSurveyStatus()
    // If survey is completed
    if (surveyStatus=="completed"){
      // The pageID here is a unique key to be used for local key-value storage
      let pageId = "WebScience.PageNav."+pageData.pageId.toString()
      //Grab surveyUserID and set it in JSON
      let surveyUserID = await WebScience.Utilities.UserSurvey.getSurveyId()
      pageData['userID'] = ''+surveyUserID
      //Set the type to match other collection modules
      pageData['type'] = 'WebScience.pageNav'

      // Trim the referrer down to domain only
      trimmedReferrer = fullURLminusQueryString(pageData.referrer)
      delete pageData.referrer
      pageData['referrer'] = trimmedReferrer

      //Change pageId to visitId for clarity
      pageData['visitId'] = pageData.pageId
      delete pageData.pageId
      //If we're in dev mode, store locally. Otherwise, ping rally.
      if (is_dev_mode){
        browser.storage.local.set({[pageId]:pageData})
      } else {
        rally.sendPing("pageNav", pageData);
      }
    } else {
      console.log("Survey not completed")
    }
  }, {
    matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
  });
}


/**
 * Function: fullURLminusQueryString
 *  This function removes the query string from a URL
 * @param {string} urlString -a URL as a string
 * returns a string, the URL without the query string
 */
 function fullURLminusQueryString(urlString){
  if(urlString){
    return urlString.split(/[?#]/)[0];
  } else{
    return urlString;
  }

}
