# Data Schema

## WebScience.Measurements.arcticleContent

```json
{
  "text": "string",
  "title": "string",
  "type": "string",
  "url": "string",
  "tabId": "int",
  "context": {
    "timestamp": "timestamp",
    "referrer": "string"
  }
}
```

* "text": The text of the news article
* "title": The title of the news article
* "type": "WebScience.Measurements.articleContent" - this is always the same for the event listener
* "url": The URL of the news article
* "tabId" : An integer represented the tab this article was opened in
* "context"
  * "timestamp": The time the article was opened
  * "referrer": The URL that referred the user to this article

## WebScience.Measurements.Advertisements

```json
{
  "ads":[
    {
     "id": "string",
     "tag": "string",
     "height": int,
     "width": int,
     "clientHeight": int,
     "clientWidth": int,
    }
   ],
  "body": {
    "clientHeight": int,
    "clientWidth": int
  },
  "type": "string",
  "url": "string",
  "tabId": "int",
  "context": {
    "timestamp": "timestamp",
    "referrer": "string"
  }
}
```

* "ads": A list of advertisement objects with the following information:
  * "id": The ID of the HTML tag, if present
  * "tag": The type of HTML tag
  * "height": The height attribute of the HTML tag
  * "width": The width attribute of the HTML tag
  * "clientHeight": The calculated height of the HTML element
  * "clientWidth": The calculated width of the HTML element
* "body": An object with the following information:
  * "clientHeight": The calculated height of the body tag of the webpage
  * "clientWidth": The calculated width of the body tag of the webpage
* "type": "WebScience.advertisements" - this is always the same for the event listener
* "url": The URL of the news article
* "tabId" : An integer represented the tab this article was opened in
* "context"
  * "timestamp": The time the article was opened
  * "referrer": The URL that referred the user to this article
