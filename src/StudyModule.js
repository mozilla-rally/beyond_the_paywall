/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// StudyModule.js, Brian Chivers 3/19/2021
// This module starts all the WebScience modules, which collect
// data for this study
import * as PageText from './ArticleContents.js'
import * as Advertisements from './Advertisements.js'
import * as PageNav from './PageNav.js'
import {destinationDomains} from './domains'

export function initialize () {
   // Start Article Contents Module
   PageText.startMeasurement({
    domains: destinationDomains
  })
  PageNav.startMeasurement({
    domains: destinationDomains
  })

 

  // Start Advertisements Module
  Advertisements.startMeasurement({
    domains: destinationDomains
  })
}
