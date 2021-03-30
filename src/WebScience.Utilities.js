// Convenience ES6 module re-exports to assemble the WebScience.Utilities namespace

// Note that the order of module imports matters, since utility
// modules can depend on other utility modules

// Brian Chivers - 3/19/2021
// This is copied from the Princeton Study, with some modules commented out
// And the advertisements module added

import * as Debugging from './web-science/dist/debugging.js'
import * as Storage from './web-science/dist/storage.js'
import * as Messaging from './web-science/dist/messaging.js'
import * as Idle from './web-science/dist/idle.js'
import * as Matching from './web-science/dist/matching.js'
import * as PageEvents from './web-science/dist/pageManager.js'
import * as LinkResolution from './web-science/dist/linkResolution.js'


export { Debugging }
export { Storage }
export { Messaging }
export { Idle }
export { Matching }
export { PageEvents }
export { LinkResolution }
