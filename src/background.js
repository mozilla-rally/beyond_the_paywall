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
  "sample-invalid-key-id",
  // A sample *valid* JWK object for the encryption.
  {
    "kty":"EC",
    "crv":"P-256",
    "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
    "kid":"Public key used in JWS spec Appendix A.3 example"
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