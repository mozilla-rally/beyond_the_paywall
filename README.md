# Study: Demand for Local News Source
This repository contains the extension code for Greg Martin's study to be hosted by Mozilla Rally.

## What's in this repo?

* `/dist` 
    *  This directory contains the compiled extension code - you shouldn't edit this.  It is created with `npm run build`.
* `/schemas`
    * This directory contains files that outline the data being sent to Mozilla's servers, and examples of that data.
* `/src`
    * This directory contains the source code for this extension
* `/tests/integration`
    * This directory would contain integration tests
    * It's currently (as of 5/11/21) just the template scripts
*   `/web-ext-artifacts`
    * This directory contains a compiled version of the code for the integration tests
    * **This copy is not maintained and is out-of-date**
* `manifest.json`
    * This file contains important permission information, as well as the location of the background script to run
* `package.json`
    * This file contains important information about dependant packages and npm scripts

## How do I run this extension locally?

* Start by cloning this repository
* You might need the Firefox nightly build, which can be downloaded [here](http://nightly.mozilla.org)
* You'll also need to install [`node`](https://nodejs.org/en/download/) and [`npm`](https://www.npmjs.com/get-npm) locally.  
* In the root directory of the repo, run `npm install` to install all dependency packages
* In the root directory of the repo, run `npm run build` and ensure there are no errors
* Once you've built the package without errors, you can run `npm run watch` to start the extension.  A version of Firefox with the extension should start automatically.
    * In `about:debugging`, you should see your extension under "This Firefox"
    * If you click "Inspect", you'll be guided to a debugging site for your extension
    * The data should be available under Storage >  Extension Storage > moz-extension://......
    * If you want to dump the current data, type `let data = await browser.storage.local.get()` in the debugging console, and then print the `data` variable. You can copy the object from there

Note: These instructions are written for a MacOSX user. They'll likely be very similar for a Linux user, but not for Windows.
