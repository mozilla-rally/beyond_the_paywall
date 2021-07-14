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
    // Grab surveyUserID and set it in data
    let surveyUserID = await webScience.userSurvey.getSurveyId()
    output = {
      "type" : 'WebScience.pageNavSensitive',
      "userId" : ''+surveyUserID,
      "domain" : fullURLtoBaseURL(pageData.url),
      "visitDuration":  pageData.pageVisitStopTime-pageData.pageVisitStartTime,
      "visitStartDate": formatDate(pageData.pageVisitStartTime),
      "visitStartHour": new Date(pageData.pageVisitStartTime).getHours(),

    }
    
    // If dev mode, set data locally. Otherwise, ping rally.
    if (is_dev_mode){
      // PageID here is a unique key for local key-value storage
      let pageId = "WebScience.PageNavSensitive."+pageData.pageId.toString()
      console.log({[pageId]:output})
    } else {
      rally.sendPing("page-nav-sensitive", output);
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

/**
 * Function: formatDate
 *  This function formats the timestamp to YYYY-MM-DD
 * @param {string} date -timestamp
 * returns a string, the date formatted YYYY-MM-DD
 */
 function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}