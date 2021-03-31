/**
 * This module measures advertisement info on news pages
 *
 * Brian Chivers, 3/19/2021
 * @module WebScience.Measurements.Advertisements
 */

import * as WebScience from './WebScience.js'

const debugLog = WebScience.Utilities.Debugging.getDebuggingLog('Measurements.Advertisements');

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

  storage = await new WebScience.Utilities.Storage.KeyValueStorage('WebScience.Measurements.Advertisements')

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new WebScience.Utilities.Storage.Counter('WebScience.Measurements.Advertisements.nextPageId')).initialize()

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
    runAt: 'document_idle'
  })

  // Handle page depth events
  WebScience.Utilities.Messaging.registerListener('WebScience.advertisements', async (adInfo, sender, sendResponse) => {
    let pageId = await nextPageIdCounter.getAndIncrement()
    adInfo.url = WebScience.Utilities.Matching.normalizeUrl(sender.url)
    adInfo.tabId = sender.tab.id
    for (var listener of listeners) { listener(adInfo) }
    storage.set(pageId.toString(), adInfo)
    debugLog(JSON.stringify(adInfo))
  }, {
      type: 'string',
      url: 'string',
      ads: 'object'
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
