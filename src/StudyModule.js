/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// StudyModule.js, Brian Chivers 3/19/2021
// This module starts all the WebScience modules, which collect
// data for this study
import * as PageText from "./ArticleContents.js"
import * as Advertisements from "./Advertisements.js"
import * as Lottery from "./Lottery.js"
import * as PageNav from "./PageNav.js"
import * as PageNavSensitive from "./PageNavSensitive.js"
import * as TotalTiming from "./TotalTiming.js"
import * as webScience from "@mozilla/web-science";
import {sensitiveDomains, destinationDomains} from "./domains"

export function initialize (rally, is_dev_mode) {
  // Set UserSurvey
  webScience.userSurvey.setSurvey({surveyUrl:"https://stanfordgsb.qualtrics.com/jfe/form/SV_5i37rPJXmLD1VDn",
  reminderInterval:86400, //This should be a day, in seconds
  reminderTitle: "Rally survey available",
  reminderMessage:"Please complete the Introductory Survey! Click the Stanford logo in the toolbar to continue.",
  reminderIcon:"",
  popupIcon:"",
  surveyCompletionUrl:"http://stanford-news-study.su.domains/",
  popupPromptMessage: "You are currently participating in the Beyond the Paywall study.  Please answer a few survey questions for this study. Clicking Continue will take you to Stanford's survey.",
  popupNoPromptMessage: "You are currently participating in the Beyond the Paywall Study. If you would like to hide this icon, right click and select \"Remove from Toolbar\"."
})

   // Start Article Contents Module
   PageText.startMeasurement({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  })
  //Start PageNav module
  PageNav.startMeasurement({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  })
  // Start PageNavSensitive module
  PageNavSensitive.startMeasurement({
    domains: sensitiveDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  })
  // Start PageNavSensitive module
  TotalTiming.startMeasurement({
    rally: rally,
    is_dev_mode: is_dev_mode
  })
 

  // Start Advertisements Module
  Advertisements.startMeasurement({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  })

  // Start Lottery Module
  Lottery.checkWinner({
    rally: rally,
    is_dev_mode: is_dev_mode
  })
    Lottery.redeemCode({
    rally: rally,
    is_dev_mode: is_dev_mode
  })
  
}