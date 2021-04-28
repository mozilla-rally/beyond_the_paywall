/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNav
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
      browser.storage.local.set({[pageId]:pageData})
    } else {
      console.log("Survey not completed")
    }
  }, {
    matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
  });
}

