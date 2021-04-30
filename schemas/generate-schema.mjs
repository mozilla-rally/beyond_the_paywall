/**
 * Generates the measurements schema for Rally Study 01.
 */
 import fs from "fs";
 import path from "path";
 import { fileURLToPath } from "url";
 import { sharedEventProperties, 
    advertisementRequiredEvents, advertisementEventProperties,
    articleContentRequiredEvents, articleContentEventProperties,
    pageNavRequiredEvents, pageNavEventProperties } from "./measurements.config.mjs";
 
 const __dirname = path.dirname(fileURLToPath(import.meta.url));
 
 const advertisement = {
   "$schema": "http://json-schema.org/draft-04/schema#",
   "$comment": "Please do not edit this schema by hand. Generate it instead by running npm run build:schema.",
   "mozPipelineMetadata": {
     "expiration_policy": {
       "delete_after_days": 90
     }
   },
   "type": "object",
   "properties": {
     ...sharedEventProperties,
     ...advertisementEventProperties
   },
   "required": [ ...advertisementRequiredEvents ]
 }
  
 const articleContent = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "$comment": "Please do not edit this schema by hand. Generate it instead by running npm run build:schema.",
    "mozPipelineMetadata": {
      "expiration_policy": {
        "delete_after_days": 90
      }
    },
    "type": "object",
    "properties": {
      ...sharedEventProperties,
      ...articleContentEventProperties
    },
    "required": [ ...articleContentRequiredEvents ]
  }
   
 const pageNav = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "$comment": "Please do not edit this schema by hand. Generate it instead by running npm run build:schema.",
    "mozPipelineMetadata": {
      "expiration_policy": {
        "delete_after_days": 90
      }
    },
    "type": "object",
    "properties": {
      ...sharedEventProperties,
      ...pageNavEventProperties
    },
    "required": [ ...pageNavRequiredEvents ]
  }
   
 const ad_output = JSON.stringify(advertisement, null, 2);
 fs.writeFileSync(path.join(__dirname, "/advertisement.1.schema.json"), ad_output);
 console.log(`generated new advertisement.1.schema.json file in ${__dirname}`);
    
 const articleContent_output = JSON.stringify(articleContent, null, 2);
 fs.writeFileSync(path.join(__dirname, "/articleContent.1.schema.json"), articleContent_output);
 console.log(`generated new articleContent.1.schema.json file in ${__dirname}`);
    
 const pageNav_output = JSON.stringify(pageNav, null, 2);
 fs.writeFileSync(path.join(__dirname, "/pageNav.1.schema.json"), pageNav_output);
 console.log(`generated new pageNav.1.schema.json file in ${__dirname}`);