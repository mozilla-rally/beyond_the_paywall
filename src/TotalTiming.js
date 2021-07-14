/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNav
 */

 import * as webScience from "@mozilla/web-science";

let initialized = false

/**
 * Start a page nav study.
 * @param {Object} options - A set of options for the study.
 * @param {Object} rally - The Mozilla Rally object, initialized in background.js
 * @param {Boolean} is_dev_mode - Determines where to store data
 */
export async function startMeasurement ({
    rally: rally,
    is_dev_mode: is_dev_mode
}) {
  // If this module has been initialized, don't do it again
  if (initialized){
    return   
  }
  initialized = true

  //Handles PageNavigation callbacks
  webScience.pageNavigation.onPageData.addListener(async (pageData) => {
    //Grab surveyUserID and set it in JSON
    let surveyUserID = await webScience.userSurvey.getSurveyId()
    //Create sparse output object
    output = {
      "userId": ''+surveyUserID, 
      "type":'WebScience.totalTiming',
      "visitDuration":  pageData.pageVisitStopTime-pageData.pageVisitStartTime,
      "visitStartDate": formatDate(pageData.pageVisitStartTime),
      "visitStartHour": new Date(pageData.pageVisitStartTime).getHours(),
      "attentionDuration":pageData.attentionDuration
    }
    //If we're in dev mode, store locally. Otherwise, ping rally.
    if (is_dev_mode){
      // The pageID here is a unique key to be used for local key-value storage
      let pageId = "WebScience.TotalTiming."+pageData.pageId.toString()
      console.log({[pageId]:output})
    } else {
      rally.sendPing("totalTiming", output);
    }
  }, {
    matchPatterns: ['<all_urls>']
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