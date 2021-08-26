/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


// Copied from Mozilla Rally's study template
//Lightly modified by Brian Chivers for Greg Martin's experiment

import "webextension-polyfill";

import { Rally } from "@mozilla/rally";

// Import the study module, which does all the work
import {
  initialize 
} from "./StudyModule";

// Initialize the Rally object
const rally = new Rally();
const DEV_MODE = __ENABLE_DEVELOPER_MODE__;
rally.initialize(
  // A sample key id used for encrypting data.
  "sgsb-beyond-the-paywall",
  // A sample *valid* JWK object for the encryption.
  {
    "crv": "P-256",
    "kid": "sgsb-beyond-the-paywall",
    "kty": "EC",
    "x": "sA0TUNoyo8jGrZgIFa4_8XKYL70GdjH0jniSmGtTw4w",
    "y": "YQwnO-ExsKc8c-fUSkqZ-ud11Ds2XkEYJGoR4-926Fw"
  },
  // The following constant is automatically provided by
  // the build system.
  __ENABLE_DEVELOPER_MODE__,  
  stateChangeCallback
).then(resolve => {
  // Initialize the study and start it.
  initialize(rally, DEV_MODE);
}, reject =>{
  // Do not start the study in this case. Something
  // went wrong.
});

function stateChangeCallback(newState) {
  console.log(newState);
}