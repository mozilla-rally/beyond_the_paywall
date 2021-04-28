/**
 * This module measures advertisement info on news pages
 *
 * Brian Chivers, 3/19/2021
 * @module WebScience.Measurements.Advertisements
 */

import * as WebScience from './WebScience.js'

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
let storage = null
let initialized = false

let listeners = []

/**
 * Start an advertisements study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
export async function startMeasurement ({
  domains = []
}) {
  if (initialized) {
    return
  }
  
  initialized = true
  await WebScience.Utilities.PageManager.initialize();

  // Build the URL matching set for content scripts
  let contentScriptMatches = WebScience.Utilities.Matching.domainsToMatchPatterns(domains, true);

  // Register the content script for measuring advertisement info
  // The CSS selectors file is needed to find ads on the page
  await browser.contentScripts.register ({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/ad_css_selectors.js'
      },
      {
        file: '/src/content-scripts/page-ads.js'
      }
      ],
    runAt: 'document_start'
  })

  // Handle page depth events
  WebScience.Utilities.Messaging.onMessage.addListener( async (adInfo, sender, sendResponse) => {
    let surveyStatus  = await WebScience.Utilities.UserSurvey.getSurveyStatus()
    if (surveyStatus=="completed"){
      let pageId = "WebScience.Advertisements."+adInfo.pageId
      adInfo.url = WebScience.Utilities.Matching.normalizeUrl(sender.url)
      adInfo.tabId = sender.tab.id
      let userID = await WebScience.Utilities.UserSurvey.getSurveyId()
      adInfo['userID'] = ''+userID
      browser.storage.local.set({[pageId]:adInfo})
    } else {
      console.log("Survey not completed")
    }
  }, {
    type: 'WebScience.advertisements',
    schema:{
      pageId:'string',
      type: 'string',
      url: 'string',
      ads: 'object',
      body: 'object',
      context:'object'
    }
  }
  )
}

/* Utilities */

/**
 * Retrieve the study data as an object. Note that this could be very
 * slow if there is a large volume of study data.
 * @returns {(Object|null)} - The study data, or `null` if no data
 * could be retrieved.
 */
export async function getStudyDataAsObject () {
  if (storage != null) {
    return await storage.getContentsAsObject()
  }
  return null
}

export function registerListener(listener) {
    listeners.push(listener)
}
