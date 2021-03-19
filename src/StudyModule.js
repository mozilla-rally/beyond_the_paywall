/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

//StudyModule.js, Brian Chivers 3/19/2021
// This module starts all the WebScience modules, which collect
// data for this study
import * as WebScience from "./WebScience.js"

export function initialize() {
    // Grab all domains
    var studyPaths = WebScience.Utilities.Matching.getStudyPaths();

    // Configure navigation collection
    WebScience.Measurements.PageNavigation.runStudy({
        domains: studyPaths.destinationPaths,
        trackUserAttention: true
    });

    // Configure link exposure collection
    WebScience.Utilities.LinkResolution.initialize();
    WebScience.Measurements.LinkExposure.runStudy({
        domains: studyPaths.destinationPaths,
        privateWindows : false,
    });

    // Start Page Depth module
    WebScience.Measurements.PageDepth.runStudy({
        domains: studyPaths.destinationPaths,
    });

    // Start Article Contents Module
    WebScience.Measurements.ArticleContents.runStudy({
        domains: studyPaths.destinationPaths,
    });

    //Start Advertisements Module
    WebScience.Measurements.Advertisements.runStudy({
        domains: studyPaths.destinationPaths,
    });
}
