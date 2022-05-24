/**
 * A module to alert users if they have won a regularly running lottery.
 *
 * ## User Experience
 *  * On a daily basis, this module will call an external API to check 
 *    if a user is among the winners of a weekly lottery draw.
 *      * If they are a winner and they have not yet redeemed their code, 
 *        a redemption code will be pulled.
 *      * If they are a winner, but they have already redeemed their code, 
 *        nothing will be returned.
 *      * If they are not a winner, nothing will be returned.
 *  * If the user is a winner and they have not yet redeemed their code, 
 *    a "Notification" will pop up on the right side of the screen and the
 *    "browserAction" for the Beyond the Rally extension will be replaced.
 *    The new "browserAction" icon will be a dollar sign and the resulting
 *    pop-up for this will feature the redemption code, instructions on
 *    how to redeem, and a large button labeled "Redeemed".
 *  * When the user clicks the "Redeemed" button to indicate that the
 *    redemption code has been redeemed, two events happen:
 *      * A different external API is called that indicates to our "database"
 *        that the code has been redeemed by the participant
 *      * A listener is alerted that the code has been redeemed, which turns off
 *        the "Notification" and "browserAction" for the day, returning things
 *        to normal.
 * 
 * Mason Jiang, 2/2/2022
 */

import * as webScience from "@mozilla/web-science";
 
let initialized = false

/**
 * Call API
 * @param {string} userID - The ID of the user.
 * @param {string} action - Which action to execute ("fetch" or "update")
 */
async function callAPI( userID, action ) {
  let url;
  if (action == "fetch") {
    url = "https://oz6ke1zh2h.execute-api.us-west-2.amazonaws.com/default/gjmartin-rally"
  } else if (action == "update") {
    url = "https://oz6ke1zh2h.execute-api.us-west-2.amazonaws.com/default/gjmartin-rally-redeem"
  } else {
    console.error("action is invalid")
  }

  const response = await fetch(url, { // fetch results or update status from API
    method: "POST", //
    body: JSON.stringify({"userID":userID})
  });

  if (!response.ok) { // there was an error
    const message = "An error has occured: " + response.status;
    console.error(message)
    return message
  }

  const results = await response.json(); // fetch JSON
  console.debug(action + " executed")
  return results;
}


/**
 * Set a key-value pair in storage.
 * @param {string} key - The key to use in the storage area.
 * @param {*} value - The value to store in the storage area for the key.
 */
async function set(key, value) {
    await browser.storage.local.set({ [key]: value });
}

/**
 * Set the browser action popup to the survey's no prompt page.
 * @private
 */
function setPopupToNoPromptPage() {
    browser.browserAction.setIcon({path: "dist/browser-action-assets/icon.png"});
    browser.browserAction.setPopup({
        popup: browser.runtime.getURL("dist/browser-action-assets/userSurvey.popupNoPrompt.html")
    });
}

/**
 * Check if user is a lottery winner and if so, notify.
 * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
 * @param {Boolean} is_dev_mode - Changes storage location based on whether this is dev mode or not
 */
export async function checkWinner ({
  rally: rally,
  is_dev_mode: is_dev_mode
}) {
  // If this module has already been initialized, don't do it again
  if (initialized) {
    console.debug("already")
    return
  }
  initialized = true

  // Set Objects and Parameters
  const surveyUserID = await webScience.userSurvey.getSurveyId() // the User ID
  console.debug("The UserID is " + surveyUserID)

  const lottery_interval = 1440; // how often lottery results checked (in minutes)
  const lottery_delay = 0.5; // when the lottery results are first checked (in minutes)
  console.debug("Lottery will be checked every " + lottery_interval + " minutes")
  const lotteryAlarm = "lottery-alarm"; // name of lottery alarm
  const winnerNotification = "winner-notification"; // name of winner notification
  browser.alarms.create(lotteryAlarm, {periodInMinutes: lottery_interval, delayInMinutes: lottery_delay}); // create alarm for checking lottery results

  browser.alarms.onAlarm.addListener(function(alarm) { // check lottery results when alarm goes off
    if (alarm.name == lotteryAlarm) {
      // Run Fetch
      callAPI( surveyUserID, "fetch" ).then(lotteryresults => {
        if (lotteryresults["statusCode"] !== 200) { // there was an error
          console.error("There was an error!")
        } else if (lotteryresults["data"]["isWinner"]) { // the user is a winner
          console.debug(surveyUserID + " is a winner!")

          // Set Redeem Code
          const redeemCode = lotteryresults["data"]["giftCode"]
          set("redeemCode", redeemCode)
          console.debug("The redeem code is " + redeemCode)
          
          // Set Redeem Status
          const redeemed = lotteryresults["data"]["redeemed"]

          // Send Alerts
          if (!redeemed) { // user has not yet redeemed code
            // Set up Notification alert
            browser.notifications.create(winnerNotification, {
              "type": "basic",
              "title": "Beyond the Paywall Lottery",
              "message": "Congratulations, you have won! Click the \"Beyond the Paywall\" extension icon for more details.",
            });
            console.debug("Notification launched");

            // Set up browserAction alert
            browser.browserAction.setIcon({path: "dist/browser-action-assets/dollar.png"}); // change extension logo from Stanford icon to dollar sign
            browser.browserAction.setPopup({popup: "dist/browser-action-assets/lotterypopup.html"}); // change popup to HTML page
            console.debug("browserAction launched")
          } else { // user already redeemed code
            console.debug("User already redeeemed code")
          }
          
        } else { // the user did not win
          console.debug(surveyUserID + " did not win.")
        }
      });
    } else {
      console.debug("Different alarm called")
    }
  });
}

/**
 * Updates user redemption status via external API and turns off alerts after "Redeemed" button used.
 * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
 * @param {Boolean} is_dev_mode - Changes storage location based on whether this is dev mode or not
 */
export async function redeemCode ({
  rally: rally,
  is_dev_mode: is_dev_mode
}) {
  // // If this module has already been initialized, don't do it again
  // if (initialized) {
  //   return
  // }
  // initialized = true

  // Handle redeemed callback
  webScience.messaging.onMessage.addListener( async () => {
    const surveyUserID = await webScience.userSurvey.getSurveyId() // the User ID
    console.debug("User redeemed code");
    await callAPI( surveyUserID, "update" ); // edit redemption status via API
    setPopupToNoPromptPage(); // restore browserAction to default
    console.debug("browserAction restored to default")
    await browser.notifications.clear("winner-notification"); // clear Notification
    console.debug("Notification cleared")
  }, { type: "WebScience.redeemed" })

}

