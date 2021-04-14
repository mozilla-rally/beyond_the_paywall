/**
 * This module stores Article Contents from pages
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.ArticleContents
 */

import * as WebScience from './WebScience.js'

const debugLog = WebScience.Utilities.Debugging.getDebuggingLog('Measurements.ArticleContents')

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
let storage = null
let initialized = false

let listeners = []

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
  await WebScience.Utilities.PageManager.initialize();
  storage = await new WebScience.Utilities.Storage.KeyValueStorage('WebScience.Measurements.ArticleContents')

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new WebScience.Utilities.Storage.Counter('WebScience.Measurements.ArticleContents.nextPageId')).initialize()

  // Build the URL matching set for content scripts
  let contentScriptMatches = domainsToMatchPatternsWithPath(domains, true)

  // Register the content script for storing Article Contents
  await browser.contentScripts.register({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/content-scripts/Readability.js'
      },
      {
        file: '/src/content-scripts/page-content.js'
      }
    ],
    runAt: 'document_idle'
  })

  // Handle page depth events
  WebScience.Utilities.Messaging.registerListener('WebScience.articleContent', async (articleContents, sender, sendResponse) => {
    console.log(articleContents)
    let pageId = await nextPageIdCounter.getAndIncrement()
    articleContents.url = WebScience.Utilities.Matching.normalizeUrl(sender.url)
    articleContents.tabId = sender.tab.id
    for (let listener of listeners) { listener(articleContents) }
    storage.set(pageId.toString(), articleContents)
    debugLog(JSON.stringify(articleContents))
  }, {
    pageId:'string',
    type: 'string',
    url: 'string',
    title: 'string',
    text: 'string'
  })
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
    return null;
}

export function registerListener (listener) {
    listeners.push(listener)
}

/**
 * This is a copy from web-science matching.js
 * But it adds a /* to the end, so that it only matches domains with paths
 * i.e. matches sfchronicle.com/path/to/article
 * Doesn't match sfchronicle.com (I don't want the text contents of the homepage)
 * 
 * Generates a set of match patterns for a set of domains. The match patterns will use the special
 * "*" wildcard scheme (matching "http", "https", "ws", and "wss") and the special "/*" wildcard
 * path (matching any path).
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string[]} Match patterns for the domains in the set.
 */
function domainsToMatchPatternsWithPath(domains, matchSubdomains = true) {
  return domains.map(domain => { return `*://${matchSubdomains ? "*." : ""}${domain}/*/*` });
}
