/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNavSensitive
 */

import * as WebScience from './WebScience.js'

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
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

  WebScience.Measurements.PageNavigation.onPageData.addListener(async (pageData) => {
    let surveyStatus  = await WebScience.Utilities.UserSurvey.getSurveyStatus()
    if (surveyStatus=="completed"){
      let pageId = "WebScience.PageNav."+pageData.pageId.toString()
      let userID = await WebScience.Utilities.UserSurvey.getSurveyId()
      pageData['userID'] = ''+userID

      trimmedURL = fullURLtoBaseURL(pageData.url)
      delete pageData.url
      pageData['url'] = trimmedURL

      trimmedReferrer = fullURLtoBaseURL(pageData.referrer)
      delete pageData.referrer
      pageData['referrer'] = trimmedReferrer
      
      pageData['type'] = 'WebScience.pageNav'
      browser.storage.local.set({[pageId]:pageData})
    } else {
      console.log("Survey not completed")
    }
  }, {
    matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
  });
}

function fullURLtoBaseURL(urlString){
  var pathArray = urlString.split( '/' );
  var protocol = pathArray[0];
  var host = pathArray[2];
  var url = protocol + '//' + host;

  return url
}
