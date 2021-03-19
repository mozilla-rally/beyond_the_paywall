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