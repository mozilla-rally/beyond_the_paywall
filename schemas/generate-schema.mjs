/**
 * Generates the measurements schema for Rally Study 01.
 */
 import fs from "fs";
 import path from "path";
 import { fileURLToPath } from "url";
 import { sharedEventProperties, advertisementEventProperties, articleContentEventProperties, 
    pageNavEventProperties, requiredEvents } from "./measurements.config.mjs";
 
 const __dirname = path.dirname(fileURLToPath(import.meta.url));
 
 const boilerplate = {
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
     ...advertisementEventProperties,
     ...articleContentEventProperties,
     ...pageNavEventProperties
   },
   "required": [ ...requiredEvents ]
 }
   
 const output = JSON.stringify(boilerplate, null, 2);
 fs.writeFileSync(path.join(__dirname, "/measurements.1.schema.json"), output);
 console.log(`generated new measurements.1.schema.json file in ${__dirname}`);