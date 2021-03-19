// ad_css_selectors.js -  Brian Chivers, 3/19/2021
// This file contains the CSS Selectors to identify ads
//
// Originally, this file contained most of the CSS selectors from:
//        https://easylist.to/
// that were used by AdBlocker.  
//
// After some experimentation, the selectors below were chosen to 
// identify unique ads the best.
const adCssSelectors =  [
    ".ad--desktop",
    ".ad",
    "iframe[src][width]",
    "div > iframe",
    "iframe[scrolling]",
    "iframe[src]",
]

if (typeof module === "object") {
    module.exports = adCssSelectors;
    }