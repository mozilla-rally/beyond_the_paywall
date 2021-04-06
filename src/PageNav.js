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

  storage = await new WebScience.Utilities.Storage.KeyValueStorage('WebScience.Measurements.PageNav')

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new WebScience.Utilities.Storage.Counter('WebScience.Measurements.PageNav.nextPageId')).initialize()

  WebScience.Measurements.PageNavigation.onPageData.addListener(async (pageData) => {
    let pageId = await nextPageIdCounter.getAndIncrement()
    console.log("Recevied page data: ")
    console.log(pageData)
    console.log(storage)

    storage.set(pageId.toString(), pageData)
    debugLog(JSON.stringify(pageData))
  }, {
    matchPatterns: WebScience.Utilities.Matching.domainsToMatchPatterns(domains)
  });
}

