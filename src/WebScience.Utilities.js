// Convenience ES6 module re-exports to assemble the WebScience.Utilities namespace

// Note that the order of module imports matters, since utility
// modules can depend on other utility modules


// Brian Chivers - 3/19/2021
// This is copied from the Princeton Study, with some modules commented out
// And the advertisements module added

import * as Debugging from "./WebScience/Utilities/Debugging.js"
export { Debugging }

import * as Storage from "./WebScience/Utilities/Storage.js"
export { Storage }

import * as Messaging from "./WebScience/Utilities/Messaging.js"
export { Messaging }

import * as Idle from "./WebScience/Utilities/Idle.js"
export { Idle }

import * as Matching from "./WebScience/Utilities/Matching.js"
export { Matching }

//import * as Scheduling from "../WebScience/Utilities/Scheduling.js"
//export { Scheduling }

import * as PageEvents from "./WebScience/Utilities/PageEvents.js"
export { PageEvents }

import * as LinkResolution from "./WebScience/Utilities/LinkResolution.js"
export { LinkResolution }

//import * as UserSurvey from "../WebScience/Utilities/UserSurvey.js"
//export { UserSurvey }

//import * as SocialMediaActivity from "../WebScience/Utilities/SocialMediaActivity.js"
//export { SocialMediaActivity }

//import * as DataAnalysis from "../WebScience/Utilities/DataAnalysis.js"
//export { DataAnalysis }

//import * as Readability from "../WebScience/Utilities/Readability.js"
//export { Readability }

//import * as Consent from "../WebScience/Utilities/Consent.js"
//export { Consent }
