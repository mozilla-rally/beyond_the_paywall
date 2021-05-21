# The Schemas Directory

This directory contains schemas of the data sent to Mozilla Rally's servers. 

# How do I change a schema to add, remove, or change a data point?

 1. Edit the details of the change in `measurement.config.mjs`.  
 2. Run `node generate-schema.mjs` to rebuild the `<event>.schema.json` files
 3. Using the extension, create an example file, and manually overwrite the `<event>-example.json`.
 4. Validate the changes match using [this website](https://www.jsonschemavalidator.net/).


# Important files in this directory

## `generate-schema.mjs` 

This file builds all the <event>.schema.json files.  It reads from `measurements.config.mjs`, and builds out these individual schema files.  You can run the build process by running `node schemas/generate-schema.mjs`.  Feel free to edit this if you need a structural change in the schemas.
  
## `measurement.config.mjs`

This file contains the metadata that is put into <event>.schema.json.  In general, it has:
  * Shared event properties
  * Required properties for specific event types
  * Other properties per event type

If you were to add/delete a field, you should edit this file, and run the `generate-schema.mjs` script to regenerate the schemas.

## `<event>.schema.json` and `<event>-example.json`

The `<event>.schema.json` are created systematically by `generate-schema.mjs`, and the `<event>-example.json` files are created manually from testing.

You can use [this website](https://www.jsonschemavalidator.net/) to validate that the schema you created and the example you provided are a match.

