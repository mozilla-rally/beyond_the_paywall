// Convenience ES6 module re-exports to assemble the WebScience.Utilities namespace

// Note that the order of module imports matters, since utility
// modules can depend on other utility modules

// Brian Chivers - 3/19/2021
// This is copied from the Princeton Study, with some modules commented out
// And the advertisements module added

import * as Debugging from './WebScience/Utilities/Debugging.js'
import * as Storage from './WebScience/Utilities/Storage.js'
import * as Messaging from './WebScience/Utilities/Messaging.js'
import * as Idle from './WebScience/Utilities/Idle.js'
import * as Matching from './WebScience/Utilities/Matching.js'
import * as PageEvents from './WebScience/Utilities/PageEvents.js'
import * as LinkResolution from './WebScience/Utilities/LinkResolution.js'


export { Debugging }
export { Storage }
export { Messaging }
export { Idle }
export { Matching }
export { PageEvents }
export { LinkResolution }
