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
    ".trc_rbox",
    ".trc_rbox_div",
    ".advertisment",
    ".advads_ad_widget-1",
    ".advads_ad_widget-2",
    ".advads_ad_widget-3",
    ".advads_ad_widget-4",
    ".advads_ad_widget-5",
    ".advads_ad_widget-6",
    ".sam_ad",
    ".widget_sp_image",
    ".trc_related_container",
    ".ctpl-duplicated-ad",
    ".advert-wide",
    ".advert-tall",
    ".advert-box",
    ".tnt-ads",
    ".advertisement-content"
]

if (typeof module === "object") {
    module.exports = adCssSelectors;
    }