/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// StudyModule.js, Brian Chivers 3/19/2021
// This module starts all the WebScience modules, which collect
// data for this study
import * as PageText from './ArticleContents.js'
import * as Advertisements from './Advertisements.js'
import * as PageNav from './PageNav.js'
import * as PageNavSensitive from './PageNavSensitive.js'
import * as webScience from "@mozilla/web-science";
import {sensitiveDomains, destinationDomains} from './domains'

export function initialize (rally, is_dev_mode) {
  // Set UserSurvey
  webScience.userSurvey.setSurvey({surveyUrl:"https://stanfordgsb.qualtrics.com/jfe/form/SV_5i37rPJXmLD1VDn",
  reminderInterval:60,
  reminderTitle:"Consent Survey Reminder",
  reminderMessage:"Please complete the consent survey!",
  reminderIcon:"",
  popupIcon:"",
  surveyCompletionUrl:"http://stanford-news-study.su.domains/" 
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

 

  // Start Advertisements Module
  Advertisements.startMeasurement({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  })
}
