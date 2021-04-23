/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNav
 */

import * as WebScience from './WebScience.js'

const debugLog = WebScience.Utilities.Debugging.getDebuggingLog('Measurements.PageNav')

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

  WebScience.Measurements.PageNavigation.onPageData.addListener((pageData) => {
    let pageId = "WebScience.PageNav."+pageData.pageId.toString()

    browser.storage.local.set({[pageId]:pageData})
    debugLog(JSON.stringify(pageData))
  }, {
    matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
  });
}

