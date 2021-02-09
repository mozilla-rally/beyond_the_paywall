/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import * as WebScience from "./WebScience.js"

export function initialize() {
    var studyPaths = WebScience.Utilities.Matching.getStudyPaths();
    console.debug("study paths:");
    console.debug(studyPaths)
}
