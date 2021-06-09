export const sharedEventProperties = {
    "type": {
      "type": "string",
      "description": "the type of event recorded. Either WebScience.advertisements, WebScience.articleContents, WebScience.pageNav, or WebScience.pageNavSensitive",
      "enum": ["WebScience.advertisements", "WebScience.articleContents","WebScience.pageNav", "WebScience.pageNavSensitive","WebScience.totalTiming"]
    },
    "userId": {
        "type": "string",
        "description": "a unique ID associated with a participant."
    }
}


export const advertisementRequiredEvents = [
  "type", "visitId", "userID","body"
]

export const articleContentRequiredEvents = [
  "type", "visitId", "userID","url","title","textContent"
]

export const pageNavRequiredEvents = [
  "type","visitId","userID","url", "referrer","pageVisitStartTime","pageVisitStopTime",
  "attentionDuration","audioDuration","attentionAndAudioDuration","maxRelativeScrollDepth"
]

export const pageNavSensitiveRequiredEvents = [
  "type","userID","domain", "pageVisitStartTime","pageVisitStopTime"
]


export const totalTimingRequiredEvents = [
  "type","userID","pageVisitStartTime","pageVisitStopTime","attentionDuration"
]

export const advertisementEventProperties = {
  "visitId": {
    "type": "string",
    "description": "a unique ID associated with a page visit."
    },
    "body": {
        "type": "object",
        "description": "This object contains two properties listed below about the <body> tag of the page.  This is needed to normalize the size of advertisments against full page size.",
        "properties":{
          "body.clientHeight": {
            "type": "integer",
            "description": "The calculated height in pixels of the <body> tag"
          },
        "body.clientWidth": {
            "type": "integer",
            "description": "The calculated width in pixels of the <body> tag"
          }
        }
      },
    "ads": {
        "type": "array",
        "description": "This array contains an object per advertisement found",
        "properties":{
          "ads.id": {
            "type": "string",
            "description": "The ID of the ad, if listed in the HTML element"
          },
          "ads.tag": {
            "type": "string",
            "description": "The HTML tag type that the ad was in"
          },
          "ads.clientHeight": {
            "type": "integer",
            "description": "The calculated height of the ad HTML element in pixels"
          },
          "ads.clientWidth": {
            "type": "integer",
            "description": "The calculated width of the ad HTML element in pixels"
          },
          "ads.height": {
            "type": "string",
            "description": "The height of the HTML element, as listed in it's style attributes"
          },
          "ads.width": {
            "type": "string",
            "description": "The width of the HTML element, as listed in it's style attributes"
          }
        }
      },
      "tabId": {
        "type": "integer",
        "description": "The ID of the tab this data was collected from"
      },
      "url": {
        "type": "string",
        "description": "The URL of the page visited"
      }
}

export const articleContentEventProperties = {
  "visitId": {
    "type": "string",
    "description": "a unique ID associated with a page visit."
    },
    "title": {
        "type": "string",
        "description": "the contents of the title element in the head of the page"
      },
    "textContent": {
        "type": "string",
        "description": "The text contents of the article on the page."
      },
      "url": {
        "type": "string",
        "description": "The URL of the page visited"
      }
}

export const pageNavEventProperties = {
  "visitId": {
    "type": "string",
    "description": "a unique ID associated with a page visit."
    },
    "referrer": {
      "type":"string",
      "description": "The page that referred the user to the current page"
    },
    "pageVisitStartTime": {
        "type": "integer",
        "description": "unix timestamp (in ms) of the page visit start"
      },
      "pageVisitStopTime": {
        "type": "integer",
        "description": "unix timestamp (in ms) of the page visit end. NOTE: this field will not necessarily represent the page visit stop time, just the largest time value at the time of the event creation. For a given page id, look for the largest value of pageVisitStopTime to get more accurate information."
      },
      "attentionDuration": {
        "type": "integer",
        "description": "duration (in ms) that the page was in attentive view"
      },
      "audioDuration": {
        "type": "integer",
        "description": "duration (in ms) that audio was playing on the page"
      },
      "attentionAndAudioDuration": {
        "type": "integer",
        "description": "duration (in ms) that audio was playing on the page and the page was in attentive view"
      },
      "maxRelativeScrollDepth": {
        "type": "number",
        "description": "The largest depth reach on the page, as a proportion of the total page height"
      },
      "url": {
        "type": "string",
        "description": "The URL of the page visited"
      }
}

export const pageNavSensitiveEventProperties = {
  "pageVisitStartTime": {
      "type": "integer",
      "description": "unix timestamp (in ms) of the page visit start"
    },
    "pageVisitStopTime": {
      "type": "integer",
      "description": "unix timestamp (in ms) of the page visit end. NOTE: this field will not necessarily represent the page visit stop time, just the largest time value at the time of the event creation. For a given page id, look for the largest value of pageVisitStopTime to get more accurate information."
    },
    "domain": {
      "type": "string",
      "description": "The URL of the page visited.  This URL has been stripped to only include the domain"
    }
}

export const totalTimingEventProperties = {
    "pageVisitStartTime": {
        "type": "integer",
        "description": "unix timestamp (in ms) of the page visit start"
      },
      "pageVisitStopTime": {
        "type": "integer",
        "description": "unix timestamp (in ms) of the page visit end. NOTE: this field will not necessarily represent the page visit stop time, just the largest time value at the time of the event creation. For a given page id, look for the largest value of pageVisitStopTime to get more accurate information."
      },
      "attentionDuration": {
        "type": "integer",
        "description": "duration (in ms) that the page was in attentive view"
      }
}