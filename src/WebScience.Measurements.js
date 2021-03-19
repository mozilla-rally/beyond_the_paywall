// Convenience ES6 module re-exports to assemble the WebScience.Measurements namespace

// Brian Chivers - 3/19/2021
// This is copied from the Princeton Study, with some modules commented out
// And the advertisements module added
import * as PageNavigation from "./WebScience/Measurements/PageNavigation.js"
export { PageNavigation }

import * as LinkExposure from "./WebScience/Measurements/LinkExposure.js"
export { LinkExposure }

import * as ArticleContents from "./WebScience/Measurements/ArticleContents.js"
export { ArticleContents }

import * as Advertisements from "./WebScience/Measurements/Advertisements.js"
export { Advertisements }

//import * as SocialMediaLinkSharing from "../WebScience/Measurements/SocialMediaLinkSharing.js"
//export { SocialMediaLinkSharing }

//import * as AggregateStatistics from "../WebScience/Measurements/AggregateStatistics.js"
//export { AggregateStatistics }

import * as PageDepth from "./WebScience/Measurements/PageDepth.js"
export { PageDepth }
