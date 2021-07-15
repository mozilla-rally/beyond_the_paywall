# The Source Code!

This directory contains the source code for the extension.  This is where you would make changes to the extension.  

# How should I edit this code?

This code is structured at two levels - the background scripts, and the content scripts.  The content scripts do work on the content of a page, and the background scripts handle the backend of storing data.

If you're looking to change or edit a field of data:
  1. Look for your modules `.js` file, and determine if the change can be made in the event listener
  2. If you need to change the way this field is collected, you may need to edit the content script in the `/content-scripts`. Note that some of the content scripts are from [WebScience](https://github.com/mozilla-rally/web-science), and so those will not be editable.

Once your edit has been made, run the extension locally (instructions in README.md of the base dir of this repo).  Check the data in `about:debugging`, and make sure the changes appear.  You might have to edit the field description in the `/schemas` directory.

# Description of files

## `/content-scripts`

This directory contains content-scripts, which are the only scripts that can act on the page-level.  Background scripts register these content scripts to run on certain webpages, and background scripts add Listener events to capture data sent back from content scripts.

Currently (5/11/21), the extension has one custom content script in use, and that's `page-ads.js`.  The other content scripts come from Mozilla's `web-science` repo.

## `/web-science`

This directory contains a copy of Mozilla's [Web Science repository](https://github.com/mozilla-rally/web-science). I've found it difficult and time consuming to update the extension code to interface with this directory, and so that's why it is saved here as a point-in-time clone.

## `Advertisements.js`

This file runs the content script to collect advertisement data, and has the logic for the listener to save that data locally (or to rally via `rally.ping`).

## `ArticleContents.js`

This file interfaces with Web Science's `PageText` module to obtains page text data.  It simply uses a listener to capture the data from Mozilla's module, and save it.

## `PageNav.js`

Similar to `ArticleContents.js`,  this file interfaces with Web Science's `PageNavigation` module.  A listener is defined here to save data from that module.


## `PageNavSensitive.js`

This module performs exactly the same as `PageNav.js`, but strips the URL to it's base for sensitive sites.  For example, a Facebook URL might have identifying information, so this module will save it as `facebook.com`.

## `StudyModule.js`

This file is called by `background.js`, and starts all of the collection modules.  It also defines the domains used by each module.  If you were to add/remove collection modules, this is where you'd call them.

## `WebScience.*.js`

These files are used to call Mozilla's WebScience module.  It's basically some clever importing/exporting to buffer the syntax changes for using WebScience.

## `ad_css_selectors`

This list of CSS selectors used by the `Advertisements.js` module to search for ads.  It was derived from [EasyList](https://easylist.to/), which is used by AdBlocker. This list can now be found in `content-scripts/page-ads.js`

## `background.js`

This file is the start of the entire extension. It initilaizes Rally information, and then calls `StudyModule.js` to start collection.

## `domains.js`

This file contains lists of domains used by the various modules.  Currently, there are two domain lists:

* `sensitiveDomains` - used by the `PageNavSentitive` module
* `destinationDomains` - Used for all other collection modules.


