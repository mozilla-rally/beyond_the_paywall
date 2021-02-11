var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

createCommonjsModule(function (module, exports) {
(function (global, factory) {
  {
    factory(module);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function (module) {

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const CORE_ADDON_ID = "rally-core@mozilla.org";
const SIGNUP_URL = "https://mozilla-rally.github.io/core-addon/";

class Rally {
  /**
   * Initialize the Rally library.
   *
   * @param {String} keyId
   *        The id of the key used to encrypt outgoing data.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the outgoing data.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   * @param {Boolean} enableDevMode
   *        Whether or not to initialize Rally.js in developer mode.
   *        In this mode we ignore problems when communicating with
   *        core add-on.
   */
  async initialize(keyId, key, enableDevMode) {
    console.debug("Rally.initialize");

    this._validateEncryptionKey(keyId, key);

    this._keyId = keyId;
    this._key = key;
    this._enableDevMode = Boolean(enableDevMode);

    let hasRally = await this._checkRallyCore().then(() => {
      console.debug("Rally.initialize - Found the Core Add-on.");
      return true;
    }).catch(async () => {
      // We did not find the Rally Core Add-on. But maybe we
      // are in developer mode. Do not trigger the sign-up flow
      // if that's the case.
      if (this._enableDevMode) {
        console.warn("Rally.initialize - Executing in developer mode.");
        return true;
      }

      // The Core Add-on was not found and we're not in developer
      // mode.
      await browser.tabs.create({ url: SIGNUP_URL });
      return false;
    });

    if (!hasRally) {
      throw new Error("Rally.initialize - Initialization failed.");
    }

    // Listen for incoming messages from the Core addon.
    browser.runtime.onMessageExternal.addListener(
      (m, s) => this._handleExternalMessage(m, s));

    // We went through the whole init process, it's now safe
    // to use the Rally public APIs.
    this._initialized = true;
  }

  /**
   * Check if the Core addon is installed.
   *
   * @returns {Promise} resolved if the core addon was found and
   *          communication was successful, rejected otherwise.
   */
  async _checkRallyCore() {
    try {
      const msg = {
        type: "core-check",
        data: {}
      };
      let response =
        await browser.runtime.sendMessage(CORE_ADDON_ID, msg, {});

      if (!response
          || response.type !== "core-check-response"
          || response.data.enrolled !== true) {
        throw new Error(`Rally._checkRallyCore - unexpected response returned ${response}`);
      }
    } catch (ex) {
      throw new Error("Rally._checkRallyCore - core addon not found");
    }
  }

  /**
   * Handles messages coming in from external addons.
   *
   * @param {Object} message
   *        The payload of the message.
   * @param {runtime.MessageSender} sender
   *        An object containing informations about who sent
   *        the message.
   * @returns {Promise} The response to the received message.
   *          It can be resolved with a value that is sent to the
   *          `sender`.
   */
  _handleExternalMessage(message, sender) {
    // We only expect messages coming from the core addon.
    if (sender.id != CORE_ADDON_ID) {
      return Promise.reject(
        new Error(`Rally._handleExternalMessage - unexpected sender ${sender.id}`));
    }

    switch (message.type) {
      case "uninstall":
        return browser.management.uninstallSelf({showConfirmDialog: false});
      default:
        return Promise.reject(
          new Error(`Rally._handleExternalMessage - unexpected message type ${message.type}`));
    }
  }

  /**
   * Validate the provided encryption keys.
   *
   * @param {String} keyId
   *        The id of the key used to encrypt outgoing data.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the outgoing data.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   *
   * @throws {Error} if either the key id or the JWK key object are
   *         invalid.
   */
  _validateEncryptionKey(keyId, key) {
    if (typeof keyId !== "string") {
      throw new Error(`Rally._validateEncryptionKey - Invalid encryption key id ${keyId}`);
    }

    if (typeof key !== "object") {
      throw new Error(`Rally._validateEncryptionKey - Invalid encryption key ${key}`);
    }
  }

  /**
   * Submit an encrypted ping through the Rally Core addon.
   *
   * @param {String} payloadType
   *        The type of the encrypted payload. This will define the
   *        `schemaName` of the ping.
   * @param {Object} payload
   *        A JSON-serializable payload to be sent with the ping.
   */
  async sendPing(payloadType, payload) {
    if (!this._initialized) {
      console.error("Rally.sendPing - Not initialzed, call `initialize()`");
      return;
    }

    // When in developer mode, dump the payload to the console.
    if (this._enableDevMode) {
      console.log(
        `Rally.sendPing - Developer mode. ${payloadType} will not be submitted`,
        payload
      );
      return;
    }

    // Wrap everything in a try block, as we don't really want
    // data collection to be the culprit of a bug hindering user
    // experience.
    try {
      // The unique identifier of the study can be used as the
      // namespace, in order to make sure data is routed to the
      // proper analysis sandbox.
      const studyName = browser.runtime.id;

      // This function may be mistakenly called while init has not
      // finished. Let's be safe and check for key validity again.
      this._validateEncryptionKey(this._keyId, this._key);

      const msg = {
        type: "telemetry-ping",
        data: {
          payloadType: payloadType,
          payload: payload,
          namespace: studyName,
          keyId: this._keyId,
          key: this._key
        }
      };
      await browser.runtime.sendMessage(CORE_ADDON_ID, msg, {});
    } catch (ex) {
      console.error(`Rally.sendPing - error while sending ${payloadType}`, ex);
    }
  }
}

/**
 * This module provides utilities for logging debugging events.
 * The module currently just outputs events with `console.debug`.
 * It should eventually support debugging via Telemetry.
 * 
 * @module WebScience.Utilities.Debugging
 */

/**
 * Create a debugging logger, a function that logs debugging events (as strings).
 * @param {string} moduleName - A name that uniquely identifies the module
 * generating the debugging events.
 * @returns {function(string)} - A debugging logger.
 */
function getDebuggingLog(moduleName) {
    return ((text) => {
        console.debug("WebScience." + moduleName + ": " + text);
    });
}

/*!
    localForage -- Offline Storage, Improved
    Version 1.9.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
var localforage;
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.localforage = f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
},{}],2:[function(_dereq_,module,exports){
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
},{"2":2}],4:[function(_dereq_,module,exports){

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();
localforage = localforage_js;

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

function getSerializerPromise(localForageInstance) {
    if (getSerializerPromise.result) {
        return getSerializerPromise.result;
    }
    if (!localForageInstance || typeof localForageInstance.getSerializer !== 'function') {
        return Promise.reject(new Error('localforage.getSerializer() was not available! ' + 'localforage v1.4+ is required!'));
    }
    getSerializerPromise.result = localForageInstance.getSerializer();
    return getSerializerPromise.result;
}



function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function getItemKeyValue(key, callback) {
    var localforageInstance = this;
    var promise = localforageInstance.getItem(key).then(function (value) {
        return {
            key: key,
            value: value
        };
    });
    executeCallback(promise, callback);
    return promise;
}

function getIDBKeyRange() {
    /* global IDBKeyRange, webkitIDBKeyRange, mozIDBKeyRange */
    if (typeof IDBKeyRange !== 'undefined') {
        return IDBKeyRange;
    }
    if (typeof webkitIDBKeyRange !== 'undefined') {
        return webkitIDBKeyRange;
    }
    if (typeof mozIDBKeyRange !== 'undefined') {
        return mozIDBKeyRange;
    }
}

var idbKeyRange = getIDBKeyRange();

function startsWith(prefix, callback) {
    var localforageInstance = this;
    var promise = new Promise(function (resolve, reject) {
        localforageInstance.ready().then(function () {
            // Thanks https://hacks.mozilla.org/2014/06/breaking-the-borders-of-indexeddb/
            var dbInfo = localforageInstance._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);

            var keyRangeValue = idbKeyRange.bound(prefix, prefix + 'uffff', false, false);

            var result = {};
            var req = store.openCursor(keyRangeValue);
            req.onsuccess = function () /*event*/{
                var cursor = req.result; // event.target.result;

                if (cursor) {
                    var value = cursor.value;
                    if (value === undefined) {
                        value = null;
                    }

                    result[cursor.key] = value;

                    cursor.continue();
                } else {
                    resolve(result);
                }
            };

            req.onerror = function () /*event*/{
                reject(req.error);
            };
        }).catch(reject);
    });
    executeCallback(promise, callback);
    return promise;
}

function keysStartingWith(prefix, callback) {
    var localforageInstance = this;
    var promise = new Promise(function (resolve, reject) {
        localforageInstance.ready().then(function () {
            // Thanks https://hacks.mozilla.org/2014/06/breaking-the-borders-of-indexeddb/
            var dbInfo = localforageInstance._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);

            var keyRangeValue = idbKeyRange.bound(prefix, prefix + 'uffff', false, false);

            var result = [];

            if (typeof store.getAllKeys === 'function') {
                var req = store.getAllKeys(keyRangeValue);
                req.onsuccess = function () /*event*/{
                    resolve(req.result);
                };

                req.onerror = function () /*event*/{
                    reject(req.error);
                };
            } else {
                var _req = store.openCursor(keyRangeValue);
                _req.onsuccess = function () /*event*/{
                    var cursor = _req.result; // event.target.result;

                    if (cursor) {
                        result.push(cursor.key);

                        cursor.continue();
                    } else {
                        resolve(result);
                    }
                };

                _req.onerror = function () /*event*/{
                    reject(_req.error);
                };
            }
        }).catch(reject);
    });
    executeCallback(promise, callback);
    return promise;
}

function startsWith$1(prefix, callback) {
    var localforageInstance = this;
    var promise = new Promise(function (resolve, reject) {
        localforageInstance.ready().then(function () {
            return getSerializerPromise(localforageInstance);
        }).then(function (serializer) {
            var dbInfo = localforageInstance._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE (key LIKE ?)', [prefix + '%'], function (t, results) {

                    var result = {};

                    var rows = results.rows;
                    for (var i = 0, len = rows.length; i < len; i++) {
                        var item = rows.item(i);
                        var value = item.value;

                        // Check to see if this is serialized content we need to
                        // unpack.
                        if (value) {
                            value = serializer.deserialize(value);
                        }

                        result[item.key] = value;
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        }).catch(reject);
    });
    executeCallback(promise, callback);
    return promise;
}

function keysStartingWith$1(prefix, callback) {
    var localforageInstance = this;
    var promise = new Promise(function (resolve, reject) {
        localforageInstance.ready().then(function () {
            var dbInfo = localforageInstance._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT key FROM ' + dbInfo.storeName + ' WHERE (key LIKE ?)', [prefix + '%'], function (t, results) {

                    var result = [];

                    var rows = results.rows;
                    for (var i = 0, len = rows.length; i < len; i++) {
                        var item = rows.item(i);

                        result.push(item.key);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        }).catch(reject);
    });
    executeCallback(promise, callback);
    return promise;
}

function startsWith$2(prefix, callback) {
    var localforageInstance = this;
    var promise = new Promise(function (resolve, reject) {
        localforageInstance.keys().then(function (keys) {

            var itemPromises = [];

            var prefixLength = prefix.length;
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];

                if (key.slice(0, prefixLength) === prefix) {
                    itemPromises.push(getItemKeyValue.call(localforageInstance, key));
                }
            }

            Promise.all(itemPromises).then(function (keyValuePairs) {
                var result = {};
                for (var i = 0, len = keyValuePairs.length; i < len; i++) {
                    var keyValuePair = keyValuePairs[i];

                    result[keyValuePair.key] = keyValuePair.value;
                }
                resolve(result);
            }).catch(reject);
        }).catch(reject);
    });
    executeCallback(promise, callback);
    return promise;
}

function keysStartingWith$2(prefix, callback) {
    var localforageInstance = this;
    var promise = new Promise(function (resolve, reject) {
        localforageInstance.keys().then(function (keys) {

            var result = [];

            var prefixLength = prefix.length;
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];

                if (key.slice(0, prefixLength) === prefix) {
                    result.push(key);
                }
            }

            resolve(result);
        }).catch(reject);
    });
    executeCallback(promise, callback);
    return promise;
}

function localforageStartsWith(prefix, callback) {
    var localforageInstance = this;
    var currentDriver = localforageInstance.driver();

    if (currentDriver === localforageInstance.INDEXEDDB) {
        return startsWith.call(localforageInstance, prefix, callback);
    } else if (currentDriver === localforageInstance.WEBSQL) {
        return startsWith$1.call(localforageInstance, prefix, callback);
    } else {
        return startsWith$2.call(localforageInstance, prefix, callback);
    }
}

function localforageKeysStartingWith(prefix, callback) {
    var localforageInstance = this;
    var currentDriver = localforageInstance.driver();

    if (currentDriver === localforageInstance.INDEXEDDB) {
        return keysStartingWith.call(localforageInstance, prefix, callback);
    } else if (currentDriver === localforageInstance.WEBSQL) {
        return keysStartingWith$1.call(localforageInstance, prefix, callback);
    } else {
        return keysStartingWith$2.call(localforageInstance, prefix, callback);
    }
}

function extendPrototype(localforage$$1) {
    var localforagePrototype = Object.getPrototypeOf(localforage$$1);
    if (localforagePrototype) {
        localforagePrototype.startsWith = localforageStartsWith;
        localforagePrototype.keysStartingWith = localforageKeysStartingWith;
    }
}

extendPrototype(localforage);

/**
 * This module provides convenient storage abstractions. Implementing storage in
 * a utility module, rather than directly calling browser storage APIs, avoids code
 * duplication and allows us to swap out the underlying storage implementation if
 * needed (e.g., switching from localforage to Dexie, or directly using browser
 * storage APIs).
 *
 * @module WebScience.Utilities.Storage
 */
/**
 * Class for a key-value storage area, where the key is a string and the value can have
 * any of a number of basic types.
 */
class KeyValueStorage {
    /**
     * Create a key-value storage area. Note that, because creating a storage area
     * requires asynchronous calls (which cannot happen in a constructor), the
     * storage area will not be setup until a subsequent call to `initialize()`.
     * @param {string} storageAreaName - A name that uniquely identifies the storage area.
     * @example var exampleStorage = await (new KeyValueStorage("exampleName")).initialize();
     */
    constructor(storageAreaName) {
        this.storageAreaName = storageAreaName;
        this.storageInstance = null;
    }

    /**
     * Complete creation of the storage area. Returns itself for convenience.
     * @returns {Object} The key-value storage area.
     */
    async initialize() {
        if(!KeyValueStorage.localForageInitialized) {
            await localforage.config({
                driver: [localforage.INDEXEDDB,
                        localforage.WEBSQL,
                        localforage.LOCALSTORAGE],
            });
            KeyValueStorage.localForageInitialized = true;
        }
        this.storageInstance = localforage.createInstance( { name: this.storageAreaName } );
        return this;
    }

    /**
     * Get a value from storage.
     * @param {string} key - The key to use in the storage area.
     * @returns {Promise<Array>|Promise<ArrayBuffer>|Promise<Blob>|Promise<Float32Array>|Promise<Float64Array>|
     * Promise<Int8Array>|Promise<Int16Array>|Promise<Int32Array>|Promise<Number>|Promise<Object>|Promise<Uint8Array>|
     * Promise<Uint8ClampedArray>|Promise<Uint16Array>|Promise<Uint32Array>|Promise<string>} The value in the
     * storage area for the key, or `null` if the key is not in storage.
     */
    async get(key) {
        return await this.storageInstance.getItem(key);
    }

    /**
     * Set a value in storage.
     * @param {string} key - The key to use in the storage area.
     * @param {(Array|ArrayBuffer|Blob|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|
     * Number|Object|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|string)} value - The value
     * to store in the storage area for the key.
     */
    async set(key, value) {
        await this.storageInstance.setItem(key, value);
    }

    /**
     * Create an object where with a property-value pair for each key-value pair in the storage area.
     * Note that this could be slow and consume excessive memory if the storage area contains a lot
     * of data.
     * @returns {Promise<Object>} An object that reflects the content in the storage area.
     */
    async getContentsAsObject() {
        var output = { };
        await this.storageInstance.iterate((value, key, iterationNumber) => {
            output[key] = value;
        });
        return output;
    }

    /**
     * @callback iterator
     * @param {(Array|ArrayBuffer|Blob|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|
     * Number|Object|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|string)} value
     * @param {string} key
     * @param {number} iterationNumber
     */
    /**
     * Iterate over all the entries in the storage area. Note that iteration
     * will stop if `callback` returns anything non-`undefined`.
     *
     * As long as we're using LocalForage, this is easy and presumably not
     * memory-intensive, as long as the callback isn't storing all of the entires.
     * @param {iterator} callback - function called on each key-value pair
     * @returns {Promise}
     */
    iterate(callback) {
        return this.storageInstance.iterate(callback);
    }

    async keysStartingWith(keyPrefix) {
        return this.storageInstance.keysStartingWith(keyPrefix);
    }

    async startsWith(keyPrefix) {
        return this.storageInstance.startsWith(keyPrefix);
    }
}

KeyValueStorage.localForageInitialized = false; // workaround for static class variable

/** Class for maintaining persistent counters (e.g., unique IDs). */
class Counter {
    /**
     * Create a persistent counter. Note that, because creating a counter
     * requires asynchronous calls (which cannot happen in a constructor),
     * the counter will not be setup until a subsequent call to `initialize()`.
     * @param {string} counterName - A name that uniquely identifies the counter.
     * @example var exampleCounter = await (new Counter("exampleName")).initialize();
     */
    constructor(counterName) {
        this.counterName = counterName;
        this.counterValue = 0;
    }

    /**
     * Complete creation of the persistent counter. Returns itself for convenience.
     * @returns {Object} The persistent counter.
     */
    async initialize() {
        if(Counter.storage == null)
            Counter.storage = await (new KeyValueStorage("WebScience.Utilities.Storage.Counter")).initialize();
        var initialCounterValue = await Counter.storage.get(this.counterName);
        if(initialCounterValue != null)
            this.counterValue = initialCounterValue;
        else
            await Counter.storage.set(this.counterName, this.counterValue);
        return this;
    }

    /**
     * Get the current value of the counter. The value is cached in memory, which allows
     * this function to be synchronous.
     * @returns {number} The current value of the counter.
     */
    get() {
        return this.counterValue;
    }

    async incrementByAndGet(incValue) {
        var currentCounterValue = (this.counterValue = this.counterValue + incValue);
        await Counter.storage.set(this.counterName, this.counterValue);
        return currentCounterValue;
    }

    /**
     * Increment the value of the counter and return the incremented value.
     * The cached counter value is synchronously incremented; the stored
     * counter value is asynchronously incremented.
     * @returns {Promise<number>} - The counter value after incrementing.
     */
    async incrementAndGet() {
        // Saving the current counter value to avoid race conditions during
        // the asynchronous save to storage
        var currentCounterValue = (this.counterValue = this.counterValue + 1);
        await Counter.storage.set(this.counterName, this.counterValue);
        return currentCounterValue;
    }

    /**
     * Increment the value of the counter and return the value prior to
     * incrementing. Identical to the Promise returned by
     * `counter.incrementAndGet().then(value => return value - 1)`.
     * @returns {Promise<number>} - The counter value before incrementing.
     */
    async getAndIncrement() {
        var ret = await this.increment() - 1;
        return ret;
    }

    /**
     * Increment the value of the counter, ignoring the value. Identical to
     * the Promise returned by `counter.incrementAndGet.then(value => return)`.
     */
    async increment() {
        return await this.incrementAndGet();
    }

    async getAndReset() {
        var currentCounterValue = this.counterValue;
        this.counterValue = 0;
        await Counter.storage.set(this.counterName, this.counterValue);
        return currentCounterValue;
    }

    /**
     * Create an object with a property-value pair for each counter name-value pair.
     * @returns {Promise<Object>} An object that reflects the set of counters.
     */
    static async getContentsAsObject() {
        return await Counter.storage.getContentsAsObject();
    }
}

function normalizeUrl(url) {
    var urlObj = new URL(url);
    var normalizedUrl = (urlObj.protocol ? urlObj.protocol : "https:") + 
                        "//" + urlObj.hostname + 
                        (urlObj.pathname ? urlObj.pathname : "");
    return normalizedUrl;
}

// Workaround for static class variable
Counter.storage = null;

// Prevents IndexedDB data from getting deleted without user intervention
// Ignoring the promise resolution because we still want to use storage
// even if Firefox won't guarantee persistence
navigator.storage.persist();

/**
 * This module provides a convenience wrapper around `browser.runtime.onMessage`,
 * routing messages to the right listener(s) based on the message type.
 * Message types are defined as strings, and a message must be an object with a
 * type property to be handled correctly.
 * @module WebScience.Utilities.Messaging
 */

const debugLog = getDebuggingLog("Utilities.Messaging");

/**
 * A Map that stores message listeners. The keys are message types and the values
 * are Sets of message listeners.
 * @private
 * @const {Map<string,Set<function>>}
 */
const messageRouter = new Map();

/**
 * A Map that stores message schemas. The keys are message types and the values
 * are schemas.
 * @private
 * @const {Map<string,Object>}
 */
const messageSchemas = new Map();

/**
 * Whether the module's `browser.runtime.onMessage` listener has been registered.
 * @private
 * @type {boolean}
 * @default
 */
var initialized = false;

/**
 * A listener for `browser.runtime.onMessage` that routes messages to the right
 * listener(s) based on message type. See the documentation for `browser.runtime.onMessage`
 * for detail on the parameters.
 * @returns {Promise} - An optional response to the message.
 * @private
 */
function browserRuntimeListener(message, sender, sendResponse) {
    var messageListeners;
    var messageSchema;
    var browserRuntimeReturnValue;
    // If the message is not in an expected format or does not have at least
    // one registered listener, ignore it.
    if ((message == null) ||
        (typeof message !== "object") ||
        !("type" in message) ||
        (typeof message.type !== "string") ||
        ((messageListeners = messageRouter.get(message.type)) === undefined)) {
        debugLog("Unexpected browser.runtime message: " + JSON.stringify(message));
        return;
    }
    // If there is a schema registered for this message type, check the message against the schema
    if((messageSchema = messageSchemas.get(message.type)) !== undefined) {
        for(var field in messageSchema) {
            if (!(field in message) || (typeof message[field] != messageSchema[field])) {
                debugLog("Mismatch between message and schema: " + JSON.stringify(message));
                return;
            }
        }
    }
    for (const messageListener of messageListeners) {
        var messageListenerReturnValue = messageListener(message, sender, sendResponse);
        if ((messageListenerReturnValue !== undefined) && (browserRuntimeReturnValue !== undefined))
            debugLog("Multiple listener return values for message type " + message.type);
        browserRuntimeReturnValue = messageListenerReturnValue;
    }
    return browserRuntimeReturnValue;
}

/**
 * Registers a message listener.
 * @param {string} messageType - The type of message that triggers the listener function.
 * @param {function} messageListener - The listener function, which receives the same
 * parameters as if it had been called by `browser.runtime.onMessage`, and that can
 * return the same values as a listener to `browser.runtime.onMessage`.
 * @param {object} [messageSchema] - An optional schema to register for the message type.
 */
function registerListener(messageType, messageListener, messageSchema) {
    if (!initialized) {
        initialized = true;
        browser.runtime.onMessage.addListener(browserRuntimeListener);
    }

    var messageListeners = messageRouter.get(messageType);
    if (messageListeners === undefined) {
        messageListeners = new Set();
        messageRouter.set(messageType, messageListeners);
    }
    messageListeners.add(messageListener);

    if(messageSchema !== undefined)
        registerSchema(messageType, messageSchema);
}

/**
 * Registers a message schema.
 * @param {string} messageType - The type of message that must follow the schema.
 * @param {Object} messageSchema - An object where each field has a value that is
 * a built-in type string.
 */
function registerSchema(messageType, messageSchema) {
    if(messageSchemas.has(messageType))
        debugLog("Multiple schemas for message type " + messageType);
    messageSchemas.set(messageType, messageSchema);
}

/**
 * This module enables registering browser idle state listeners with
 * varying detection intervals. The module is needed because the
 * WebExtensions `idle` API currently only supports one detection
 * interval per extension.
 * 
 * The implementation of this module combines the WebExtensions `idle`
 * API and `setTimeout`. It configures the `idle` API to use the
 * minimum idle detection interval with `idle.setDetectionInterval()`,
 * registers a listener for the `idle.onStateChanged` event, and then
 * uses `setTimeout` after the browser goes idle to notify idle state
 * listeners with detection intervals greater than the minimum. If there
 * are any pending idle notification timeouts when the browser goes
 * active, those timeouts are cleared.
 * 
 * Some implementation quirks to be aware of for use and future
 * development:
 * 
 *   * This module depends on configuring the detection interval
 *     for the `idle` API to its minimum value. Any subsequent changes to
 *     the idle state detection interval in the `idle` API will result in
 *     unpredictable behavior.
 * 
 *   * Idle state events generated by this module are not guaranteed to
 *     reflect idle state transitions (e.g., a listener might receive
 *     `"active"` followed by `"active"`). We might want to implement this
 *     guarantee eventually.
 * 
 *   * Because the browser idle state resets with each browser session,
 *     it is not a problem that timeouts do not persist between browser
 *     sessions.
 * 
 *   * The module does not directly interact with the Firefox
 *     [`nsIdleService`](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIdleService),
 *     even though it supports varying idle state detection intervals, in
 *     order to minimize privileged extension code.
 * 
 * @module WebScience.Utilities.Idle
 */

/**
 * The minimum idle state detection interval (in seconds) supported by
 * the `idle` API.
 * @private
 * @const {number}
 */
const minimumIdleStateDetectionIntervalInSeconds = 15;

/**
 * Whether we have configured  configured the idle state detection
 * interval, cached the idle state, and registered the idle state
 * listener.
 * @private
 * @type {boolean}
 * @default
 */
var initialized$1 = false;

/**
 * An estimate of the time (in milliseconds since the epoch) when the
 * browser last entered an idle state. Generated by subtracting the
 * idle state detection interval (converted to milliseconds) from the
 * time the browser last fired an idle state notification.
 * @private
 * @type {boolean}
 * @default
 */
var lastIdleTime = -1;

/**
 * A cached copy of the browser's current idle state. This caching enables
 * synchronous checking of the current idle state.
 * @private
 * @type {string}
 * @default
 */
var currentIdleState = "active";

/**
 * A Map that stores browser idle state listeners. The keys are
 * detection intervals in seconds and the values are Sets of
 * browser idle state listeners.
 * @private
 * @const {Map<number,Set<function>>}
 */
const idleStateListeners = new Map();

/**
 * A Map that stores browser idle state timeouts. The keys are
 * detection intervals in seconds and the values are `timeoutID`
 * values from `setTimeout()`.
 * @private
 * @const {Map<number,number>}
 */
const idleStateTimeouts = new Map();

/**
 * Configure the idle state detection interval, cache the idle state,
 * and register the idle state listener.
 * @private
 */
async function initialize() {
    if(initialized$1)
        return;
    initialized$1 = true;
    browser.idle.setDetectionInterval(minimumIdleStateDetectionIntervalInSeconds);
    currentIdleState = await browser.idle.queryState(minimumIdleStateDetectionIntervalInSeconds);
    if(currentIdleState === "idle")
        lastIdleTime = Date.now() - (minimumIdleStateDetectionIntervalInSeconds * 1000);
    browser.idle.onStateChanged.addListener(idleOnStateChangedListener);
}

/**
 * Determine whether the browser has been idle for a specified time.
 * This function is synchronous, unlike `idle.queryState`. Note that,
 * if an idle state listener has not been registered, this function
 * will always return the default value of active state.
 * @param {number} detectionIntervalInSeconds - The detection interval
 * to use
 */
function queryState(detectionIntervalInSeconds) {
    if(currentIdleState !== "idle")
        return currentIdleState;

    if(Date.now() >= (lastIdleTime + (detectionIntervalInSeconds * 1000)))
        return "idle";

    return "active";    
}

/**
 * A listener for `idle.onStateChanged` that supports notifying
 * idle state listeners with varying detection intervals.
 * @private
 */
function idleOnStateChangedListener(newState) {
    currentIdleState = newState;

    // If the browser idle state transitions to non-idle...
    if(newState !== "idle") {
        // Cancel any pending notification timeouts and forget the timeout IDs
        for(const idleStateTimeoutID of idleStateTimeouts.values())
            clearTimeout(idleStateTimeoutID);
        idleStateTimeouts.clear();

        // Notify all the idle state listeners
        for(const idleStateListenerSet of idleStateListeners.values())
            for(const idleStateListener of idleStateListenerSet)
                idleStateListener(newState.repeat(1));
        return;
    }

    // If the browser idle state transitions to idle...

    // Remember an estimate of when the browser last went into idle state
    lastIdleTime = Date.now() - (minimumIdleStateDetectionIntervalInSeconds * 1000);

    // Set timeouts for all the idle state listeners
    for(const [detectionIntervalInSeconds, idleStateListenersWithDetectionInterval] of idleStateListeners)
        scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds);
}

/**
 * Schedule a timeout for a set of idle state listeners.
 * @param {Set<function>} idleStateListenersWithDetectionInterval - The set of idle state listeners.
 * @param {number} detectionIntervalInSeconds - The idle state detection interval (in seconds) for this set of listeners.
 * @returns {number} The timeout ID for the scheduled timeout.
 * @private
 */
function scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds) {
    // Determine how long to delay before firing the listeners
    // If the delay is negative, set it to 0 (i.e., fire as soon as possible)
    var delayTime = Math.max(lastIdleTime + (detectionIntervalInSeconds * 1000) - Date.now(), 0);
    var timeoutId = setTimeout(function() {
        for(const idleStateListener of idleStateListenersWithDetectionInterval)
            idleStateListener("idle");
    }, delayTime);
    idleStateTimeouts.set(detectionIntervalInSeconds, timeoutId);
}

/**
 * Register a listener function for browser idle state.
 * @param {function} idleStateListener - The listener function.
 * The function will receive the same `idle.IdleState` parameter
 * as if it had subscribed to idle state events with
 * `browser.idle.onStateChanged.addListener`.
 * @param {number} detectionIntervalInSeconds - The detection
 * interval for firing the idle state listener. Note that this
 * time in measured in seconds because that is how the `idle`
 * API is implemented, even though most times in the library
 * are measured in milliseconds.
 */
async function registerIdleStateListener(idleStateListener, detectionIntervalInSeconds) {
    await initialize();

    // If we already have at least one idle state listener with this
    // detection interval, add the new listener to the Set of listeners
    // and we're done
    var idleStateListenersWithDetectionInterval = idleStateListeners.get(detectionIntervalInSeconds);
    if(idleStateListenersWithDetectionInterval !== undefined) {
        idleStateListenersWithDetectionInterval.add(idleStateListener);
        return;
    }

    // Create a Set for listeners with this detection interval, including
    // this idle state listener
    idleStateListenersWithDetectionInterval = idleStateListeners.set(detectionIntervalInSeconds, (new Set()).add(idleStateListener));

    // If we're in idle state, and we have been in the state for less time
    // than the detection interval for this listener (i.e., the listener
    // should still receive a state change notification), schedule a
    // notification
    if((currentIdleState === "idle") && (Date.now() < (lastIdleTime + detectionIntervalInSeconds * 1000)))
        scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds);
}

const destinationDomains = [
    "cnn.com",
    "sfchronicle.com",
    "yourbigsky.com",
    "northpimanews.com"
];

/**
 * This module provides utilities for matching URLs against domain names.
 * 
 * @module WebScience.Utilities.Matching
 */

/** 
 * Class for testing whether a URL matches a set of domains.
 * Currently implemented with the native RegExp over the full URL, which gives good performance.
 * We might be able to speed this up by parsing the URL and then only matching domains.
 */
class UrlMatcher {
    /**
     * Create a URL matcher.
     * @param {string[]} domains - The set of domains to match against.
     * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
     */
    constructor(domains, matchSubdomains = true) {
        this.regExp = new RegExp(createUrlRegexString(domains, matchSubdomains), "i");
    }

    /**
     * Test whether a URL matches a domain in the set of domains.
     * @param {string} url - The URL to test.
     */
    testUrl(url) {
        return this.regExp.test(url);
    }
}

/**
 * Generate a regular expression string for matching a URL against a set of domains.
 * Will match http and https protocols. Currently case sensitive.
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string} A regular expression string.
 */
function createUrlRegexString(domains, matchSubdomains = true) {
    var urlMatchRE = "^(?:http|https)://" + (matchSubdomains ? "(?:[A-Za-z0-9\\-]+\\.)*" : "") + "(?:";
    for (const domain of domains)
        urlMatchRE = urlMatchRE + domain.replace(/\./g, "\\.") + "|";
    urlMatchRE = urlMatchRE.substring(0, urlMatchRE.length - 1) + ")(?:$|(/|\\?).*)";    return urlMatchRE;
}

/**
 * Generate an array of match patterns for matching a URL against a set of domains.
 * Will match http and https protocols.
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string[]} An array of match patterns.
 */
function createUrlMatchPatternArray(domains, matchSubdomains = true) {
    var matchPatterns = [ ];
    for (const domain of domains) {
        matchPatterns.push("http://" + ( matchSubdomains ? "*." : "" ) + domain + "/*");
        matchPatterns.push("https://" + ( matchSubdomains ? "*." : "" ) + domain + "/*");
    }
    return matchPatterns;
}

function getStudyPaths() {
    var studyPaths = {};
    studyPaths.domains = new UrlMatcher(destinationDomains);
    studyPaths.paths = {};
    studyPaths.destinationPaths = destinationDomains;
    return studyPaths;
}


//export function getAdFilters() {
//    return adCssSelectors;
//}

/** 
 * This module provides a research abstraction over browser events related to
 * webpage loading and user attention. The abstraction consists of the following
 * events:
 *   * Page Visit Start - the browser has started to load a webpage in a tab
 *   * Page Attention Start - the user has shifted attention to a tab
 *   * Page Attention Stop - the user has shifted attention from a tab
 *   * Page Visit Stop - the browser has unloaded a webpage from a tab
 *   
 * Attention is defined as satisfying all of the following conditions:
 *   * The tab is the active tab in its browser window
 *   * The window containing the tab is the current browser window
 *   * The current browser window has focus in the operating system
 *   * (Optional) The user has provided input to the browser within the last N seconds
 *   
 * If the user's attention is on a tab and the tab closes, the sequence of events
 * will be Page Attention Stop -> Page Visit Stop. The timestamp is syncronized for
 * the events.
 *
 * If the user's attention is on a tab and the page in the tab changes, the sequence
 * of events will be Page Attention Stop -> Page Visit Stop -> Page Visit Start ->
 * Page Attention Start. The timestamp is syncronized for the events.
 *
 * The page visit and attention events are implemented in one module in order to
 * guarantee the ordering of events.
 *
 * Represented as a finite-state automaton, the research abstraction consists of
 * the following states and transitions.  
 * ```   
 *        Page Attention Start <----------------------> Page Attention Stop  
 *                  ^                                              |  
 *                  |                                              |  
 *                  |                                              V  
 *   Page Visit Start -------------------------------------------> Page Visit Stop  
 * ```   
 * Note that this module depends on the idle API, which has a couple quirks in Firefox:
 *   * There is a five-second interval when polling idle status from the operating
 *     system.
 *   * Depending on the platform, the idle API reports either time since user input to
 *     the browser or time since user input to the operating system.
 *
 * The polling interval coarsens the timing of page attention events related to idle state.
 * As long as the polling interval is relatively short in comparison to the idle threshold,
 * that should not be an issue.
 * 
 * The platform-specific meaning of idle state should also not be an issue. There is only a
 * difference between the two meanings of idle state when the user is providing input to
 * another application; if the user is providing input to the browser, or is not providing
 * input at all, the two meanings are identical. In the scenario where the user is providing
 * input to another application, the browser will lose focus in the operating system; this
 * module will detect that with the windows API and fire a page attention stop (if needed).
 * 
 * Some known limitations to be aware of:
 *   * The module does not currently filter tab-level content by protocol or content type. We
 *     might want to revisit this. Filtering by protocol is easy—the module already tracks
 *     whether a tab contains content loaded via HTTP or HTTPS. Filtering by content type is
 *     more difficult. We might be able to accomplish that by using `webRequest.onHeadersReceived`
 *     to start page visits and checking the `Content-Type` header, though we'd still have to handle
 *     tabs that are open when the module initializes, and we'd miss pages that rely on MIME type
 *     sniffing.
 *   * When the module initializes, there isn't a good way to get the referrers for open
 *     tabs without either delaying initialization or risking a race condition. The
 *     referrers for pages open when the module initializes are currently set to `""`.
 * 
 * And some implementation quirks to be aware of for future development on this module:
 *   * The `tabs.onCreated` event appears to consistently fire before the `windows.onCreated`
 *     event, so this module listens to the `tabs.onCreated` event to get an earlier view of
 *     window details. The module assumes that a `tabs.onCreated` event with a positive tab
 *     ID is for a `"normal"` or `"popup"` window type.
 *   * Non-browser windows do not appear in the results of `windows.getAll()`, and calling
 *     `windows.get()` on a non-browser window throws an error. Switching focus to a non-
 *     browser window will, however, fire the `windows.onFocusChanged` event. The module
 *     assumes that if `windows.onFocusChanged` fires with an unknown window, that window
 *     is a non-browser window.
 *   * The module assumes that valid tab IDs and window IDs are always >= 0.
 *   * The module assumes that, if there was a `webRequest.onBeforeSendHeaders` event before a
 *     `tabs.onUpdated` event with the same tab ID and URL, the web request matches the tab
 *     update. This assumption is needed to match referrers to new pages in tabs.
 *   * The module listens for `tabs.onAttached` to track tab movement between windows. It does
 *     not listen for `tabs.onDetached` so that tabs remain associated with valid windows and
 *     because it's likely the user is just moving the tab within the tab strip in a window.
 *     
 * @module WebScience.Utilities.PageEvents
 */

/**
 * The threshold N (in seconds) for determining whether the browser has the user's attention.
 * @private
 * @constant {number}
 * @default
 */
const idleThreshold = 15;

/**
 * Whether to consider user input in determining attention state.
 * @private
 * @constant {boolean}
 * @default
 */
const considerUserInputForAttention = true;

/**
 * A listener function for page visit start events.
 * @callback pageVisitStartListener
 * @param {Object} details - Additional information about the page visit start event.
 * @param {number} details.tabId - The tab containing the page, unique to the browsing session.
 * @param {number} details.windowId - The window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @param {string} details.url - The URL of the page loading in the tab.
 * @param {string} details.referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @param {number} details.timeStamp - The time when the underlying browser event fired.
 */

/**
 * Additional information about a page visit start event listener function.
 * @typedef {Object} PageVisitStartListenerDetails
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 * @property {pageVisitStartListener} listener - The listener function.
 */

/**
 * The set of listener details for page visit start events.
 * @private
 * @constant {Set<PageVisitStartListenerDetails>}
 */
const pageVisitStartListenerSet = new Set();

/** 
 * Register a listener function that will be notified about page visit start events.
 * @param {pageVisitStartListener} pageVisitStartListener - The listener function.
 * @param {boolean} [notifyAboutCurrentPages=true] - Whether the listener should be fired for the currently open set of pages.
 * @param {boolean} [privateWindows=false] - Whether the listener should be fired for events in private windows.
 * @param {number} [timeStamp=Date.now()] - The time to use if the listener should be fired for the currently open set of pages.
 */
async function registerPageVisitStartListener(pageVisitStartListener, notifyAboutCurrentPages = true, privateWindows = false, timeStamp = Date.now()) {
    initialize$1();
    pageVisitStartListenerSet.add({
        listener: pageVisitStartListener,
        privateWindows: privateWindows
    });
    if(notifyAboutCurrentPages)
        notifyPageVisitStartListenerAboutCurrentPages(pageVisitStartListener, privateWindows, timeStamp);
}

/** 
 * Notify page visit start listeners about a page visit start event.
 * @private
 * @param {number} tabId - The tab containing the page, unique to the browsing session.
 * @param {number} windowId - The window containing the page, unique to the browsing session.
 * @param {string} url - The URL of the page loading in the tab.
 * @param {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @param {boolean} privateWindow - Whether the event is in a private window.
 * @param {number} [timeStamp=Date.now()] - The time when the underlying browser event fired.
 */
function notifyPageVisitStartListeners(tabId, windowId, url, referrer, privateWindow, timeStamp = Date.now()) {
    for (const pageVisitStartListenerDetails of pageVisitStartListenerSet)
        if(!privateWindow || pageVisitStartListenerDetails.privateWindows)
            pageVisitStartListenerDetails.listener({
                tabId,
                windowId,
                url: url.repeat(1), // copy the string in case a listener modifies it
                referrer: referrer.repeat(1),
                privateWindow,
                timeStamp
            });
}

/**
 * Notify a page visit start listener about the current set of open pages. Useful for when
 * a listener is registered in the middle of a browsing session (e.g., because the extension
 * was just installed or the user just gave consent).
 * @private
 * @param {pageVisitStartListener} pageVisitStartListener - The listener.
 * @param {boolean} privateWindows - Whether to notify the listener about pages in private
 * windows.
 * @param {number} timeStamp - The time when the listener was registered.
 */
async function notifyPageVisitStartListenerAboutCurrentPages(pageVisitStartListener, privateWindows, timeStamp) {
    // Load the tabs from the tab state cache to avoid inconsistencies
    for (const [tabId, tabDetails] of tabState)
        if(!tabDetails.privateWindow || privateWindows)
            pageVisitStartListener({
                tabId: tabId,
                windowId: tabDetails.windowId,
                url: tabDetails.url.repeat(1), // copy the string in case a listener modifies it
                referrer: tabDetails.referrer.repeat(1),
                privateWindow: tabDetails.privateWindow,
                timeStamp: timeStamp
            });
}

/**
 * A listener function for page visit stop events.
 * @callback pageVisitStopListener
 * @param {Object} details - Additional information about the page visit stop event.
 * @param {number} details.tabId - The tab containing the page, unique to the browsing session.
 * @param {number} details.windowId - The window containing the page, unique to the browsing session.
 * @param {number} details.timeStamp - The time when the underlying browser event fired.
 */

/**
 * Additional information about a page visit start stop listener function.
 * @typedef {Object} PageVisitStopListenerDetails
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 * @property {pageVisitStopListener} listener - The listener function.
 */

/**
 * The set of listener details for page visit stop events.
 * @private
 * @constant {Set<PageVisitStopListenerDetails>}
 */
const pageVisitStopListenerSet = new Set();

/**
 * Register a listener function that will be notified about page visit stop events.
 * @param {pageVisitStopListener} pageVisitStopListener - The listener function.
 * @param {boolean} [privateWindows=false] - Whether the listener should be fired for events in private windows.
 */
function registerPageVisitStopListener(pageVisitStopListener, privateWindows = false) {
    initialize$1();
    pageVisitStopListenerSet.add({
        listener: pageVisitStopListener,
        privateWindows: privateWindows
    });
}

/** 
 * Notify page visit stop listeners about a page visit stop event.
 * @private
 * @param {number} tabId - The tab containing the page, unique to the browsing session.
 * @param {number} windowId - The window containing the page, unique to the browsing session.
 * @param {boolean} privateWindow - Whether the event is in a private window.
 * @param {number} [timeStamp=Date.now()] - The time when the underlying browser event fired.
 */
function notifyPageVisitStopListeners(tabId, windowId, privateWindow, timeStamp = Date.now()) {
    for (const pageVisitStopListenerDetails of pageVisitStopListenerSet)
        if(!privateWindow || pageVisitStopListenerDetails.privateWindows)
            pageVisitStopListenerDetails.listener({ tabId, windowId, timeStamp });
}

/**
 * A listener function for page attention start events.
 * @callback pageAttentionStartListener
 * @param {Object} details - Additional information about the page attention start event.
 * @param {number} details.tabId - The tab containing the page, unique to the browsing session.
 * @param {number} details.windowId - The window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @param {number} details.timeStamp - The time when the underlying browser event fired.
 */

/**
 * Additional information about a page attention start event listener function.
 * @typedef {Object} PageAttentionStartListenerDetails
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 * @property {pageAttentionStartListener} listener - The listener function.
 */

/**
 * The set of listener details for page attention start events.
 * @private
 * @constant {Set<PageAttentionStartListenerDetails>}
 */
const pageAttentionStartListenerSet = new Set();

/** 
 * Register a listener function that will be notified about page attention start events.
 * @param {pageAttentionStartListener} pageAttentionStartListener - The listener function. 
 * @param {boolean} [notifyAboutCurrentPages=true] - Whether the listener should be fired
 * for the page that currently has attention (if there is one).
 * @param {boolean} [privateWindows=false] - Whether the listener should be fired for events in private windows.
 * @param {number} [timeStamp=Date.now()] - The time to use if the listener should be fired
 * for the page that currently has attention (if there is one).
 */
async function registerPageAttentionStartListener(pageAttentionStartListener, notifyAboutCurrentPageAttention = true, privateWindows = false, timeStamp = Date.now()) {
    initialize$1();
    pageAttentionStartListenerSet.add({
        listener: pageAttentionStartListener,
        privateWindows: privateWindows
    });
    if(notifyAboutCurrentPageAttention)
        notifyPageAttentionStartListenerAboutCurrentPageAttention(pageAttentionStartListener, privateWindows, timeStamp);
}

/** 
 * Notify page attention start listeners and content scripts about a page attention start event.
 * @private
 * @param {number} tabId - The tab containing the page, unique to the browsing session.
 * @param {number} windowId - The window containing the page, unique to the browsing session.
 * @param {boolean} privateWindow - Whether the event is in a private window.
 * @param {number} [timeStamp=Date.now()] - The time when the underlying browser event fired.
 */
function notifyPageAttentionStartListeners(tabId, windowId, privateWindow, timeStamp = Date.now()) {
    for (const pageAttentionStartListenerDetails of pageAttentionStartListenerSet)
        if(!privateWindow || pageAttentionStartListenerDetails.privateWindows)
            pageAttentionStartListenerDetails.listener({ tabId, windowId, timeStamp });
}

/**
 * Notify a page attention start listener about the currently active tab in the currently
 * focused window (if there is such a tab). Useful for when a listener is registered in the
 * middle of a browsing session (e.g., because the extension was just installed or the user
 * just gave consent).
 * @private
 * @param {pageAttentionStartListener} pageAttentionStartListener - The listener.
 * @param {boolean} privateWindows - Whether to notify the listener if the page with
 attention is in a private window.
 * @param {number} timeStamp - The time when the listener was registered.
 */
async function notifyPageAttentionStartListenerAboutCurrentPageAttention(pageAttentionStartListener, privateWindows, timeStamp) {
    // If there is no active tab or no focused window, there is no notification to provide
    if((currentActiveTab < 0) || (currentFocusedWindow < 0))
        return;

    // If the module should consider user input and the browser is inactive, there is no notification to provide
    if(!browserIsActive)
        return;

    // If the listener should not receive notifications about private windows and this is a private window
    // according to the window state cache, there is no notification to provide
    if(!privateWindows && isPrivateWindow(currentFocusedWindow))
        return;
    
    // Otherwise, notify the listener
    pageAttentionStartListener({
        tabId: currentActiveTab,
        windowId: currentFocusedWindow,
        timeStamp: timeStamp
    });
}

/**
 * A listener function for page attention stop events.
 * @callback pageAttentionStopListener
 * @param {Object} details - Additional information about the page attention stop event.
 * @param {number} details.tabId - The tab containing the page, unique to the browsing session.
 * @param {number} details.windowId - The window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @param {number} details.timeStamp - The time when the underlying browser event fired.
 */

/**
 * Additional information about a page attention stop event listener function.
 * @typedef {Object} PageAttentionStopListenerDetails
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 * @property {pageAttentionStartListener} listener - The listener function.
 */

/**
 * The set of listener details for page attention stop events.
 * @private
 * @constant {Set<PageAttentionStopListenerDetails>}
 */
const pageAttentionStopListenerSet = new Set();

/** 
 * Register a listener function that will be notified about page attention stop events.
 * @param {pageAttentionStopListener} pageAttentionStopListener - The listener function. 
 */
async function registerPageAttentionStopListener(pageAttentionStopListener, privateWindows = false) {
    initialize$1();
    pageAttentionStopListenerSet.add({
        listener: pageAttentionStopListener,
        privateWindows: privateWindows
    });
}

/** 
 * Notify page attention stop listeners and content scripts about a page attention stop event.
 * @private
 * @param {number} tabId - The tab containing the page, unique to the browsing session.
 * @param {number} windowId - The window containing the page, unique to the browsing session.
 * @param {boolean} privateWindow - Whether the event is in a private window.
 * @param {number} [timeStamp=Date.now()] - The time when the underlying browser event fired.
 */
function notifyPageAttentionStopListeners(tabId, windowId, privateWindow, timeStamp = Date.now()) {
    for (const pageAttentionStopListenerDetails of pageAttentionStopListenerSet)
        if(!privateWindow || pageAttentionStopListenerDetails.privateWindows)
            pageAttentionStopListenerDetails.listener({
                tabId: tabId,
                windowId: windowId,
                timeStamp: timeStamp
            });
}

/**
 * The currently active tab in the currently focused browsing window. Has the value -1
 * if there is no such tab. 
 * @private
 * @type {number}
 * @default
 */
var currentActiveTab = -1;

/**
 * The currently focused browsing window. Has the value -1 if there is no such window. 
 * @private
 * @type {number}
 * @default
 */
var currentFocusedWindow = -1;

/**
 * Checks for the following conditions:
 *   * The tab is the currently active tab in the currently focused window.
 *   * The window is the currently focused window.
 *   * The browser is active (i.e., not idle), if the module is configured to
 *     consider user input in determining the attention state.
 * @private
 * @param {number} tabId - The tab to check.
 * @param {number} windowId - The window to check.
 */
function checkForAttention(tabId, windowId) {
    return ((currentActiveTab == tabId) && (currentFocusedWindow == windowId) && (browserIsActive ));
}

/**
 * @typedef {Object} WindowDetails
 * @property {string} type - The type of window. This string can have the
 * same values as `windows.WindowType` (`"normal"`, `"popup"`, `"panel"`, and
 * `"devtools"`), plus the value `"normalorpopup"` if we don't yet know which
 * of the two types the window is.
 * @property {number} activeTab - The ID of the active tab in the window,
 * or -1 if there is no active tab.
 * @property {boolean} privacy - Whether the window is a private window. Values
 * are `"normal"` for a non-private window, `"private"` for a private window,
 * and `"unknown"` if the window's privacy status is unknown.
 */

/**
 * A Map that tracks the current state of browser windows. We need this cached
 * state to avoid asynchronous queries when the focused window changes. The
 * keys are tab IDs and the values are WindowDetails objects.
 * @private
 * @const {Map<number,WindowDetails>}
 * @default
 */
const windowState = new Map();

/**
 * Update the window state cache with new information about a window. If
 * we already know more specific information about the window than
 * the new information, ignore the new information.
 * @private
 * @param {number} windowId - The window ID.
 * @param {WindowDetails} windowDetails - The new information about the
 * window.
 */
function updateWindowState(windowId, {
    type = "unknown",
    activeTab,
    privacy = "unknown"
}) {
    var windowDetails = windowState.get(windowId);

    // If we don't have any cached state on the window, save
    // what we know now and be done
    if(windowDetails === undefined) {
        windowState.set(windowId, {
            type: type,
            activeTab: (activeTab !== undefined) ? activeTab : -1,
            privacy: privacy
        });
        return;
    }

    // If the update has more information about the window type
    // than the cached window details, update the cached window
    // type
    if((type !== "unknown") &&
        ((windowDetails.type === "unknown") ||
        (type !== "normalorpopup") && (windowDetails.type === "normalorpopup")))
        windowDetails.type = type;

    // If the update has an active tab ID, update the cached
    // active tab ID
    if(activeTab !== undefined)
        windowDetails.activeTab = activeTab;

    // If the update has more information about the window
    // privacy property than the cached window details,
    // update the cached window privacy property
    if((privacy !== "unknown") && (windowDetails.privacy === "unknown"))
        windowDetails.privacy = privacy;
}

/**
 * Look up the privacy property of a window in the cached window state.
 * If the cached window state does not include the window or the window
 * privacy property is unknown (neither of which should happen!), assume
 * it's a normal window.
 * @private
 * @param {number} windowId - The window ID.
 * @param {WindowDetails} [windowDetails] - The WindowDetails object
 * for the window, if it's already been retrieved.
 * @returns {boolean} Whether the window is a private window.
 */
function isPrivateWindow(windowId, windowDetails) {
    if(windowDetails === undefined)
        windowDetails = windowState.get(windowId);
    return (windowDetails !== undefined) ? (windowDetails.privacy === "private") : false;
}

/**
 * @typedef {Object} TabDetails
 * @property {string} url - The URL loaded in the tab.
 * @property {string} referrer - The referrer URL for the tab, or `""` if
 * there is no referrer.
 * @property {boolean} privateWindow - Whether the tab is in a private window.
 * @property {number} windowId - The ID of the window containing the tab.
 * @property {boolean} isWebContent - Whether the tab contains ordinary web
 * content (i.e., a URL starting with `"http://"` or `"https://"`).
 */

/**
 * A Map that tracks the current state of browser tabs. We need this cached
 * state to avoid inconsistencies when registering a page visit start listener
 * and to filter notifications for tabs that don't contain ordinary webpages.
 * The keys are tab IDs and the values are TabDetails objects.
 * @private
 * @const {Map<number,TabDetails>}
 * @default
 */
const tabState = new Map();

/**
 * Update the tab state cache with new information about a tab. Any
 * existing information about the tab is replaced.
 * @private
 * @param {number} tabId - The tab ID.
 * @param {string} url - The URL loaded in the tab.
 * @param {string} referrer - The referrer URL for the tab, or `""` if
 * there is no referrer.
 * @param {string} privateWindow - Whether the tab is in a private
 * window.
 * @param {string} windowId - The ID of the window containing the tab.
 */
function updateTabState(tabId, url, referrer, privateWindow, windowId) {
    // If the URL parses successfully and has an HTTP or HTTPS protocol,
    // consider it web content
    var isWebContent;
    try {
        var parsedUrl = new URL(url);
        if((parsedUrl.protocol === "http:") || (parsedUrl.protocol === "https:"))
            isWebContent = true;
    }
    catch {
        isWebContent = false;
    }

    tabState.set(tabId, { url, referrer, privateWindow, windowId, isWebContent });
}

/**
 * @typedef {Object} WebRequestDetails
 * @property {string} url - The URL for the request.
 * @property {string} referrer - The value of the `Referer` HTTP header for
 * the request or `""` if there is no header.
 */

/**
 * A Map that tracks tab-level web requests. We need this cached state to match
 * referrers to page loads. The keys are tab IDs and the values are
 * WebRequestDetails objects.
 * @private
 * @const {Map<number,WebRequestDetails>}
 * @default
 */
const webRequestCache = new Map();

/**
 * Whether the browser is active or idle. Ignored if the module is configured to
 * not consider user input when determining the attention state.
 * @private
 * @type {boolean}
 * @default
 */
var browserIsActive = false;

/**
 * Whether the module is in the process of configuring browser event handlers
 * and caching initial state.
 * @private
 * @type {boolean}
 */
var initializing = false;

/**
 * Whether the module has started configuring browser event handlers and caching
 * initial state.
 * @private
 * @type {boolean}
 */
var initialized$2 = false;

/**
 * Configure browser event handlers and cache initial state. Runs only once.
 * @private
 */
async function initialize$1() {
    if(initialized$2 || initializing)
        return;
    initializing = true;

    // Configure event listeners
    // Note that we have to call Idle.registerIdleStateListener before we call
    // Idle.queryState, so this comes before caching the initial state

    // Handle tab-level web requests
    browser.webRequest.onBeforeSendHeaders.addListener(details => {
        // Ignore requests that aren't associated with browsing tabs
        if(details.tabId < 0)
            return;
        // Get the referrer URL from the request headers
        var referrer = "";
        for(const requestHeader of details.requestHeaders)
            if((requestHeader.name.toLowerCase() === "referer") && ("value" in requestHeader))
                referrer = requestHeader.value;
        webRequestCache.set(details.tabId, {
            url: details.url,
            referrer
        });
    }, {
        urls: [ "<all_urls>" ],
        types: [ "main_frame" ]
    },
    [ "requestHeaders" ]);

    // Handle when the webpage in a tab changes
    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if(!initialized$2)
            return;
        var timeStamp = Date.now();

        // Ignore changes that do not involve the URL
        if (!("url" in changeInfo))
            return;

        // Try to get the referrer from the web request cache and consume
        // the most recent entry in the web request cache
        var referrer = "";
        var webRequestDetails;
        if((webRequestDetails = webRequestCache.get(tabId)) !== undefined) {
            if(webRequestDetails.url === changeInfo.url)
                referrer = webRequestDetails.referrer;
            webRequestCache.delete(tabId);
        }

        // Update the tab state cache
        updateTabState(tabId, changeInfo.url, referrer, tab.incognito, tab.windowId);

        // If this is the active tab and focused window, and (optionally) the browser is active, end the attention span
        var hasAttention = checkForAttention(tabId, tab.windowId);
        if (hasAttention)
            notifyPageAttentionStopListeners(currentActiveTab, currentFocusedWindow, tab.incognito, timeStamp);

        // End the page visit
        notifyPageVisitStopListeners(tabId, tab.windowId, tab.incognito, timeStamp);
        
        // Start the page visit
        notifyPageVisitStartListeners(tabId, tab.windowId, changeInfo.url, referrer, tab.incognito, timeStamp);

        // If this is the active tab and focused window, and (optionally) the browser is active, start an attention span
        if (hasAttention)
            notifyPageAttentionStartListeners(currentActiveTab, currentFocusedWindow, tab.incognito, timeStamp);
    });

    // Handle when a tab closes
    browser.tabs.onRemoved.addListener((tabId, removeInfo) => {
        if(!initialized$2)
            return;
        var timeStamp = Date.now();

        // We don't have to update the window state here, because either there is
        // another tab in the window that will become active (and tabs.onActivated
        // will fire), or there is no other tab in the window so the window closes
        // (and windows.onRemoved will fire)

        // If we have cached state for this tab, drop it
        tabState.delete(tabId);
        webRequestCache.delete(tabId);

        // Get the window privacy property from the cached window state
        var windowPrivacy = isPrivateWindow(removeInfo.windowId);

        // If this is the active tab and focused window, and (optionally) the browser is active, end the attention span
        if(checkForAttention(tabId, removeInfo.windowId))
            notifyPageAttentionStopListeners(currentActiveTab, currentFocusedWindow, windowPrivacy, timeStamp);
        
        // If this is the active tab, forget it
        if(currentActiveTab == tabId)
            currentActiveTab = -1;

        // End the page visit
        notifyPageVisitStopListeners(tabId, removeInfo.windowId, windowPrivacy, timeStamp);
    });

    // Handle when the active tab in a window changes
    browser.tabs.onActivated.addListener(activeInfo => {
        if(!initialized$2)
            return;
        var timeStamp = Date.now();

        // If this is a non-browser tab, ignore it
        if((activeInfo.tabId == browser.tabs.TAB_ID_NONE) || (activeInfo.tabId < 0) ||
            (activeInfo.windowId < 0))
            return;

        // Update the window state cache with the new
        // active tab ID
        updateWindowState(activeInfo.windowId, {
            activeTab: activeInfo.tabId
        });
        
        // If there isn't a focused window, or the tab update is not in the focused window, ignore it
        if((currentFocusedWindow < 0) || (activeInfo.windowId != currentFocusedWindow))
            return;

        // Get the window privacy property from the window state cache
        var windowPrivacy = isPrivateWindow(activeInfo.windowId);    

        // If the browser is active or (optionally) we are not considering user input,
        // first end the attention span if there is an active tab in the focused window,
        // then start a new attention span
        if((browserIsActive || !considerUserInputForAttention)) {
            if((currentActiveTab >= 0) && (currentFocusedWindow >= 0))
                notifyPageAttentionStopListeners(currentActiveTab, currentFocusedWindow, windowPrivacy, timeStamp);
            notifyPageAttentionStartListeners(activeInfo.tabId, currentFocusedWindow, windowPrivacy, timeStamp);
        }
        
        // Remember the new active tab
        currentActiveTab = activeInfo.tabId;
    });

    // Handle when a window is created
    browser.windows.onCreated.addListener(createdWindow => {
        if(!initialized$2)
            return;
        
        // If this appears to be a non-browsing window, ignore
        // the event
        if(!("id" in createdWindow) || createdWindow.id < 0)
            return;

        // Update the window state cache with the window's type and
        // privacy property
        updateWindowState(createdWindow.id, {
            type: ("type" in createdWindow) ? createdWindow.type : "unknown",
            privacy: createdWindow.incognito ? "private" : "normal"
        });
    });

    // Handle when a tab is created
    // This event appears to consistently fire before window.onCreated
    browser.tabs.onCreated.addListener(tab => {
        if(!initialized$2)
            return;
        
        // If there is a tab or window ID indicating a non-browser tab or
        // window, ignore the event
        // This shouldn't happen!
        if(!("id" in tab) || tab.id < 0 || !("windowId" in tab) || tab.windowId < 0)
            return;
        
        // Update the window state cache with the window's privacy
        // property and, since we know this is a browsing window based
        // on the tab ID, the "normalorpopup" window type
        // While we might now know this is the active tab in the window,
        // the tabs.onActivated event will separately fire
        updateWindowState(tab.windowId, {
            type: "normalorpopup",
            privacy: tab.incognito ? "private" : "normal"
        });
    });

    // Handle when a tab is moved between windows
    // We are not listening for tabs.onDetached because we want tabs
    // to be associated with valid windows, and because it's likely
    // the user is just moving the tab within the tab strip in a
    // window
    browser.tabs.onAttached.addListener((tabId, attachInfo) => {
        // If this tab is in the tab state cache,
        // update the cache
        var tabDetails = tabState.get(tabId);
        if(tabDetails !== undefined)
            tabDetails.windowId = attachInfo.newWindowId;
    });

    // Handle when a window is removed
    browser.windows.onRemoved.addListener(windowId => {
        if(!initialized$2)
            return;
        
        // If we have cached state for this window, drop it
        if(windowState.has(windowId))
            windowState.delete(windowId);
    });

    // Handle when the focused window changes
    browser.windows.onFocusChanged.addListener(windowId => {
        if(!initialized$2)
            return;
        var timeStamp = Date.now();

        // If the browser is active or (optionally) we are not considering user input, and if
        // if there is an active tab in a focused window, end the attention span
        if((browserIsActive || !considerUserInputForAttention) && ((currentActiveTab >= 0) && (currentFocusedWindow >= 0)))
            notifyPageAttentionStopListeners(currentActiveTab, currentFocusedWindow, isPrivateWindow(currentFocusedWindow), timeStamp);

        // If the browser has lost focus in the operating system, remember 
        // tab ID = -1 and window ID = -1, and do not start a new attention span
        // Note that this check should happen before the browser.windows.get await below,
        // because quick sequential events can cause the browser.windows.onFocusChanged
        // listener to run again before the await resolves and trigger errors if currentActiveTab
        // and currentFocusedWindow are not set properly
        if (windowId == browser.windows.WINDOW_ID_NONE) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // Get information about the focused window from the cached window state
        var focusedWindowDetails = windowState.get(windowId);

        // If we haven't seen this window before, that means it's not a browser window,
        // so remember tab ID = -1 and window ID -1, and do not start a new attention span
        if(focusedWindowDetails === undefined) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // If the new window is not a browser window, remember tab ID = -1 and window ID = -1,
        // and do not start a new attention span
        if((focusedWindowDetails.type !== "normal") && (focusedWindowDetails.type !== "popup") && (focusedWindowDetails.type !== "normalorpopup")) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // Otherwise, remember the new active tab and focused window, and if the browser is active
        // or (optionally) we are not considering user input, start a new attention span
        currentActiveTab = focusedWindowDetails.activeTab;
        currentFocusedWindow = windowId;
        if(browserIsActive || !considerUserInputForAttention)
            notifyPageAttentionStartListeners(currentActiveTab, currentFocusedWindow, isPrivateWindow(windowId, focusedWindowDetails), timeStamp);
    });
    
    // Handle when the browser activity state changes
    // This listener abstracts the browser activity state into two categories: active and inactive
    // Active means the user has recently provided input to the browser, inactive means any other
    // state (regardless of whether a screensaver or lock screen is enabled)
    {
        await registerIdleStateListener(newState => {
            if(!initialized$2)
                return;
            var timeStamp = Date.now();

            // If the browser is not transitioning between active and inactive states, ignore the event
            if((browserIsActive) == (newState === "active"))
                return;
            
            // Remember the flipped browser activity state
            browserIsActive = !browserIsActive;

            // If there isn't an active tab in a focused window, we don't need to send attention events
            if((currentActiveTab < 0) || (currentFocusedWindow < 0))
                return;
            
            // Get the window privacy property from the cached window state
            var windowPrivacy = isPrivateWindow(currentFocusedWindow);

            // Send an attention start event (if the browser is transitioning to active) or an
            // attention stop event (if the browser is transitioning to inactive)
            if(browserIsActive)
                notifyPageAttentionStartListeners(currentActiveTab, currentFocusedWindow, windowPrivacy,  timeStamp);
            else
                notifyPageAttentionStopListeners(currentActiveTab, currentFocusedWindow, windowPrivacy, timeStamp);
        }, idleThreshold);
    }

    // Get and remember the browser idle state
    browserIsActive = (queryState(idleThreshold) === "active");
    
    // Get and remember the browser window and tab state
    var openWindows = await browser.windows.getAll({
        populate: true,
        windowTypes: [ "normal", "popup", "panel", "devtools" ]
    });
    for(const openWindow of openWindows) {
        // If the window doesn't have a window ID, ignore it
        // This shouldn't happen, but checking anyway since
        // the id property is optional in the windows.Window
        // type
        if(!("id" in openWindow))
            continue;
        // Iterate the tabs in the window to cache tab state
        // and find the active tab in the window
        var activeTabInOpenWindow = -1;
        if("tabs" in openWindow)
            for(const tab of openWindow.tabs) {
                if(tab.active)
                    activeTabInOpenWindow = tab.id;
                updateTabState(tab.id, tab.url, "", openWindow.incognito, openWindow.id);
            }
        updateWindowState(openWindow.id, {
            type: openWindow.type,
            activeTab: activeTabInOpenWindow,
            privacy: openWindow.incognito ? "private" : "normal"
        });

        // If this is the focused window and it is a normal or popup
        // window, remember the window ID and active tab ID (if any)
        // If there is no focused window, or the focused window isn't
        // a normal or popup window, this block will not run and we
        // will retain the default values of tab ID = -1 and window
        // ID = -1
        if((openWindow.focused) && ((openWindow.type === "normal") || (openWindow.type === "popup"))) {
            currentFocusedWindow = openWindow.id;
            currentActiveTab = activeTabInOpenWindow;
        }
    }

    initializing = false;
    initialized$2 = true;
}

const shortDomains = [
// Google news
"news.google.com/articles",
"goo.gl",
"t.co",
"0rz.tw",
"126.am",
"1l2.us",
"1link.in",
"1tk.us",
"1un.fr",
"1url.com",
"1url.cz",
"1-url.net",
"1u.ro",
"1.usa.gov",
"1wb2.net",
"20ft.net",
"2ad.in",
"2big.at",
"2chap.it",
"2doc.net",
"2fear.com",
"2.gp",
"2.ht",
"2long.cc",
"2.ly",
"2pl.us",
"2su.de",
"2tu.us",
"2ty.in",
"2u.xf.cz",
"2wsb.tv",
"2ze.us",
"301.to",
"301url.com",
"307.to",
"3.ly",
"3ra.be",
"3x.si",
"49rs.me",
"4i.ae",
"4ms.me",
"4.nbcny.com",
"4sq.com",
"4url.cc",
"4view.me",
"5-11.co",
"53eig.ht",
"5em.cz",
"5rr.it",
"5url.net",
"5.wews.com",
"5z8.info",
"6fr.ru",
"6g6.eu",
"6url.com",
"76.gd",
"77.ai",
"7fth.cc",
"7gen.us",
"7li.in",
"7.ly",
"7ny.tv",
"7vd.cn",
"8u.cz",
"944.la",
"98.to",
"9mp.com",
"a0.fr",
"a2a.me",
"a2n.eu",
"aa.cx",
"aarp.us",
"abbr.com",
"abbr.sk",
"abc11.tv",
"abc13.co",
"abcn.ws",
"abc.tv",
"abcurl.net",
"abe5.com",
"access.im",
"accura.cc",
"acosm.in",
"action.me",
"ad5.eu",
"ad7.biz",
"adage.com",
"adb.ug",
"adcraft.co",
"adcrun.ch",
"add.vc",
"adfa.st",
"adflav.com",
"adf.ly",
"adfly.fr",
"adjix.com",
"adli.pw",
"ad-med.cz",
"adnews.ms",
"adobe.ly",
"adv.li",
"advmo.us",
"ad.vu",
"adweek.it",
"aexp.co",
"a-fr.is",
"afx.cc",
"a.gd",
"a.gg",
"agileit.co",
"ahwd.tv",
"aje.me",
"ajn.me",
"aka.gr",
"alil.in",
"alj.am",
"all.fuseurl.com",
"al.st",
"alturl.com",
"amcurl.com",
"#amzn.com",
"amzn.com",
"#amzn.to",
"amzn.to",
"andr.tv",
"a.nf",
"ann.cr",
"any.gs",
"aofb.us",
"aol.it",
"apadv.co",
"apl.tv",
"apne.ws",
"appsumo.com",
"aqva.pl",
"ara.tv",
"arcnct.co",
"ares.tl",
"argusne.ws",
"ar.gy",
"arm.in",
"arsn.al",
"arst.ch",
"asa.na",
"asos.to",
"asso.in",
"at.cmt.com",
"atmlb.com",
"at.mrmule.com",
"at.mtv.com",
"at.pw.org",
"att-msg.com",
"atu.ca",
"au.ms",
"aurls.info",
"autode.sk",
"avc.lu",
"avlne.ws",
"awe.sm",
"a.wish.org",
"ayl.lv",
"ayt.fr",
"azali.fr",
"azc.cc",
"azqq.com",
"b00.fr",
"b23.ru",
"b2l.me",
"b54.in",
"b65.com",
"b65.us",
"bacn.me",
"baid.us",
"basno.com",
"bbc.in",
"bbry.lv",
"bbt.gs",
"bbyurl.us",
"bcene.ws",
"bcool.bz",
"bcove.me",
"bc.vc",
"beam.to",
"beats.is",
"bee4.biz",
"beebe.in",
"be.net",
"bf10.co",
"bfpne.ws",
"b-gat.es",
"bgl.me",
"b.globe.com",
"bgr.co",
"bhpho.to",
"bible.us",
"bigtbl.com",
"bim.im",
"#binged.it",
"binged.it",
"bit.do",
"bit.ly",
"bitly.com",
"bitly.is",
"bitw.in",
"bizj.us",
"bkite.com",
"blap.net",
"blbrd.co",
"blbrd.com",
"blck.by",
"ble.ac",
"ble.pl",
"blippr.com",
"blip.tv",
"bln.kr",
"bloat.me",
"bloom.bg",
"blu.cc",
"boi.re",
"bonapp.it",
"bonefi.sh",
"bon.no",
"bor.com",
"bo.st",
"bote.me",
"bougn.at",
"bourn.co",
"b.qr.ae",
"br4.in",
"brad.mn",
"bravo.ly",
"brby.co",
"brd.rs",
"b.rian.cc",
"brk.to",
"brzu.net",
"bsa.ly",
"bsl.io",
"bsun.md",
"bt.io",
"budurl.com",
"buff.ly",
"buk.me",
"bull.hn",
"bul.lu",
"burnurl.com",
"buswk.co",
"buzurl.com",
"buzztap.com",
"bxl.me",
"bzfd.it",
"bzh.me",
"cachor.ro",
"campl.us",
"canurl.com",
"canva.link",
"capi.tl",
"captl1.co",
"captur.in",
"cart.mn",
"cbc.sh",
"cble.co",
"cbsloc.al",
"cbsn.ws",
"cbsprt.co",
"cbs.so",
"cbug.cc",
"cc.cc",
"ccj.im",
"cd4.me",
"cdpn.io",
"cdtr.co",
"cektkp.com",
"cesar.mn",
"cf2.me",
"cf6.co",
"cf97.co",
"cf.ly",
"chbr.gr",
"chic.ag",
"chil.is",
"chilp.it",
"chi.mg",
"chipr.es",
"chip.tl",
"chn.ge",
"cho.ba",
"chopd.it",
"chpt.me",
"chrg.rs",
"chrma.co",
"chroni.cl",
"chs.mx",
"chzb.gr",
"cin.ci",
"cinemagr.am",
"cjb.net",
"cjky.it",
"clck.ru",
"cld.me",
"cle.clinic",
"clema.cc",
"cliccami.info",
"clickthru.ca",
"cli.gs",
"clikk.in",
"clipurl.us",
"clk.my",
"cl.lk",
"cl.ly",
"cln.me",
"cloaky.de",
"clop.in",
"cloudup.com",
"clp.ly",
"clrlv.rs",
"cmpbell.com",
"cmsa.me",
"cmsc.re",
"cn86.org",
"cnb.cx",
"cnet.co",
"cnn.it",
"cnnmon.ie",
"cntx.me",
"coge.la",
"cog.gd",
"c-o.in",
"cokeurl.com",
"con.st",
"conta.cc",
"contnt.ly",
"cook.ba",
"copy.bz",
"cort.as",
"cosm.ag",
"cot.ag",
"couic.fr",
"cpo.st",
"cptl1.co",
"cpwr.it",
"crks.me",
"crowdspring.co",
"cr.tl",
"crtv.mk",
"crum.pl",
"c.shamekh.ws",
"cs.pn",
"ctt.ec",
"ctvr.us",
"ctx.ly",
"cuda.co",
"cudder.it",
"cultm.ac",
"cultr.me",
"curio.us",
"curl.im",
"cur.lv",
"cus.tm",
"cut.by",
"cuthut.com",
"cut.pe",
"cut.sk",
"cutt.eu",
"cutt.us",
"cutu.me",
"cuturl.com",
"cuturls.com",
"cybr.fr",
"cyonix.to",
"d75.eu",
"daa.pl",
"dai.ly",
"dailym.ai",
"dakd.me",
"dalaila.ma",
"dallasne.ws",
"datl.in",
"dbl.chz.gr",
"dbron.co",
"db.tt",
"dcdr.me",
"dd.ma",
"ddp.net",
"ddut.ch",
"deadsp.in",
"dealspl.us",
"decenturl.com",
"deck.ly",
"dell.to",
"del.ly",
"demgoverno.rs",
"dems.me",
"depot.ly",
"derf.me",
"desert.sn",
"detne.ws",
"df4.us",
"df9.net",
"dfl8.me",
"dft.ba",
"dger.at",
"dhurl.org",
"diddy.it",
"digbig.com",
"di.gg",
"digg.com",
"digipills.com",
"digs.by",
"discvr.co",
"di.sn",
"disq.us",
"dis.tl",
"dld.bz",
"dlrshv.es",
"dlvr.it",
"d.me",
"dmreg.co",
"dnain.fo",
"dn.vc",
"do.co",
"doiop.com",
"doi.org",
"dolp.cc",
"do.my",
"dopen.us",
"dopice.sk",
"dpo.st",
"d.pr",
"dragd.is",
"drbl.in",
"droid.ws",
"drop.io",
"droz.me",
"drpln.gs",
"drp.ly",
"dr.tl",
"drudge.tw",
"dsc.tv",
"ds.pn",
"dspy.me",
"dtdg.co",
"dthin.gs",
"durl.me",
"durl.us",
"dv.gd",
"dvlr.it",
"dwarfurl.com",
"dyo.gs",
"e37.eu",
"eam.me",
"easyuri.com",
"easyurl.net",
"eca.sh",
"eclurl.com",
"econ.st",
"ecoti.ms",
"ecra.se",
"ecrea.tv",
"edut.to",
"eepurl.com",
"eezurl.com",
"eff.org",
"elegantthem.es",
"elitedai.ly",
"elq.to",
"ely.re",
"emc.im",
"encosia.me",
"engt.co",
"entm.ag",
"enva.to",
"eoc.cc",
"eonli.ne",
"eqbot.com",
"erax.cz",
"erw.cz",
"es.pn",
"essn.tl",
"#etsy.me",
"et.tv",
"eweri.com",
"ewerl.com",
"ex9.co",
"exm.nr",
"extr.tv",
"ezurl.cc",
"ezurl.eu",
"fa.by",
"#facebook.appstore.com",
"faceto.us",
"fandan.co",
"fandw.me",
"fatc.co",
"fav.me",
"#fb.me",
"fb.me",
"fb.nbcsports.com",
"fbshare.me",
"#fbuy.me",
"fcnews.tv",
"feedzil.la",
"ffce.bz",
"fff.re",
"fff.to",
"fff.wf",
"ff.im",
"fhurl.com",
"fileshar.es",
"filoops.info",
"filz.fr",
"find.beer",
"fire.to",
"firsturl.de",
"firsturl.net",
"fitm.ag",
"flic.kr",
"flingk.com",
"flip.it",
"flne.ws",
"flq.us",
"fltr.tv",
"flwr.pt",
"fly2.ws",
"fm2.me",
"fnk.es",
"foak.co",
"foe.hn",
"followedu.com",
"folu.me",
"fon.gs",
"font.me",
"forr.st",
"for.tn",
"foxs.pt",
"fox.tv",
"foxyurl.com",
"frc.vc",
"freak.to",
"freepr.es",
"freze.it",
"fro.gy",
"f-st.co",
"ftcy.co",
"fun.ly",
"funni.ly",
"fur.ly",
"fuseurl.com",
"fus.in",
"fuzzy.to",
"fwd4.me",
"fwdurl.net",
"fwib.net",
"fxn.ws",
"fxs.pt",
"fzy.co",
"g00.me",
"g8l.us",
"ga.co",
"gap.us",
"gates.ly",
"gathr.us",
"gaw.kr",
"gbpg.net",
"g.co and",
"georiot.co",
"getf.ly",
"getm.pt",
"get.sh",
"get-shorty.com",
"get-url.com",
"geturl.us",
"gg.gg",
"gi.vc",
"gizmo.do",
"gkurl.us",
"gl.am",
"glbn.ca",
"glmr.me",
"glpo.st",
"glsen.us",
"go2.me",
"go.9nl.com",
"go.brit.co",
"go.fox59.com",
"gog.li",
"gohe.at",
"gohsn.co",
"go.ign.com",
"gokev.in",
"golinks.co",
"golmao.com",
"go.me",
"go.nasa.gov",
"good.ly",
"goo.gl",
"goo.lu",
"go.ostp.gov",
"goshrink.com",
"go.shr.lc",
"gossipcop.com",
"gossi.pr",
"go.to",
"gotom.tg",
"go.unl.edu",
"go.usa.gov",
"gowal.la",
"gplus.to",
"gqm.ag",
"grab.by",
"grdns.co",
"grem.io",
"gri.ms",
"grindr.me",
"grnol.co",
"grnpc.org",
"g.ro.lt",
"gr.pn",
"grz.cm",
"gtg.lu",
"gtr.bz",
"gu.com",
"guiama.is",
"gurl.es",
"hadej.co",
"hailo.to",
"hao.jp",
"hatne.ws",
"hbspk.co",
"hclte.ch",
"hefr.in",
"hellotxt.com",
"hex.io",
"hg.tv",
"hide.my",
"hiderefer.com",
"hip.mu",
"hit.my",
"hjkl.fr",
"hmm.ph",
"hndiary.com",
"hopclicks.com",
"hop.im",
"hops.me",
"hops.to",
"hotredirect.com",
"hotshorturl.com",
"hou.li",
"hp.nu",
"hpstm.tc",
"hrc.io",
"hrd.cm",
"href.in",
"href.li",
"hrld.us",
"hrvd.me",
"hrv.st",
"hsblinks.com",
"ht.ly",
"htrne.ws",
"htxt.it",
"htz.li",
"hub.am",
"hubs.ly",
"huff.lv",
"huff.to",
"hugeurl.com",
"hulu.com",
"hulu.tv",
"hurl.it",
"hurl.me",
"hurl.no",
"hurl.ws",
"hyperurl.co",
"hyv.ee",
"i0rz.tw",
"i-2.co",
"i99.cz",
"icanhaz.com",
"icio.us",
"icit.fr",
"ick.li",
"icks.ro",
"icont.ac",
"icp-c.com",
"idek.net",
"id.tl",
"ihg.co",
"iiiii.in",
"ikr.me",
"iky.fr",
"ilix.in",
"illin.is",
"img.ly",
"ind.pn",
"indy.st",
"in.flux.com",
"info.ms",
"inst.cr",
"intel.ly",
"into.tv",
"intuit.me",
"invent.ge",
"inv.lv",
"iplogger.com",
"iplogger.org",
"ir.pe",
"irt.me",
"iscool.net",
"is.gd",
"isra.li",
"it2.in",
"ithacajr.nl",
"ithem.es",
"itm.im",
"ito.mx",
"itseo.org",
"itsh.bo",
"itsjust.in",
"its.my",
"itsy.it",
"itv.co",
"ity.im",
"ivill.ag",
"ix.lt",
"ix.sk",
"j2j.de",
"jcp.is",
"jcrew.co",
"jdem.cz",
"j.gs",
"jieb.be",
"jijr.com",
"jmorr.is",
"j.mp",
"jmsbrd.co",
"journ.us",
"jp22.net",
"jpm.com",
"jqw.de",
"jr.ly",
"jrnl.ie",
"jshen.me",
"js.is",
"j.st",
"just.as",
"k2ne.ws",
"k6.kz",
"kabbage.io",
"kare11.tv",
"kask.us",
"kcitp.me",
"kck.st",
"kel.by",
"ketkp.in",
"ke-we.net",
"kfd.pl",
"kiro.tv",
"kisa.ch",
"kissa.be",
"kiss.ly",
"kl.am",
"klck.me",
"klou.tt",
"kng5.tv",
"kng.ht",
"knot.ly",
"konrath.co",
"kore.us",
"korta.nu",
"kots.nu",
"kp.cc",
"kr3w.de",
"krat.si",
"kratsi.cz",
"krod.cz",
"krunchd.com",
"krz.ch",
"kstp.mn",
"ktie.tv",
"ktimes.co",
"ktlane.ws",
"ktzr.us",
"kuc.cz",
"kunzi.me",
"k.vu",
"kxb.me",
"kxk.me",
"L9.fr",
"l9k.net",
"laco.st",
"lands.to",
"lat.ms",
"lc.cx",
"lc-s.co",
"lcut.in",
"leafne.ws",
"letop10.",
"l.hh.de",
"libero.it",
"lick.my",
"lien.li",
"lien.pl",
"lifehac.kr",
"liip.to",
"liltext.com",
"lin.cr",
"lin.io",
"linkbee.com",
"linkbun.ch",
"linkee.com",
"linkgap.com",
"linkn.co",
"linkslice.com",
"linkto.im",
"link.wnep.com",
"link.zip.net",
"linxfix.de",
"listn.to",
"liteurl.net",
"liurl.cn",
"livemixtap.es",
"livesi.de",
"livestre.am",
"livingsoci.al",
"lix.in",
"l-k.be",
"lk.ht",
"llu.ch",
"lnch.co",
"lnk.by",
"lnk.co",
"lnkd.in",
"lnk.direct",
"lnk.gd",
"lnk.in",
"lnk.ly",
"lnk.ms",
"lnks.fr",
"lnk.sk",
"lnkurl.com",
"lnky.fr",
"lnp.sn",
"ln-s.net",
"ln-s.ru",
"logo.tv",
"lohud.us",
"longrep.ly",
"loopt.us",
"lost.in",
"low.es",
"lp25.fr",
"lplza.co",
"l.pr",
"l-r.tv",
"lru.jp",
"ls.ly",
"lts.cr",
"lt.tl",
"lurl.no",
"lu.to",
"Lvvk.com",
"lx.im",
"m1.io",
"m1p.fr",
"m3mi.com",
"macrumo.rs",
"macte.ch",
"mad.ly",
"make.my",
"mapq.st",
"marie.cl",
"mash.to",
"mavrev.com",
"mbist.ro",
"mcaf.ee",
"mcd.to",
"mcstr.net",
"mctr.st",
"mdl29.net",
"mdtm.pl",
"mediate.com",
"mee.bo",
"meetu.ps",
"mefi.us",
"memurl.com",
"merky.de",
"metamark.net",
"mic.fr",
"michael.ph",
"might.ly",
"migre.me",
"min2.me",
"min.dj",
"minilien.com",
"minilink.org",
"miniurl.com",
"minu.me",
"minurl.fr",
"min.us",
"mitne.ws",
"mi.tt",
"mke.me",
"mklnd.com",
"mkt.com",
"mktplc.org",
"mlan.co",
"mlks.co",
"mln.im",
"mlsp.co",
"mmf.cc",
"mmflint.me",
"moby.to",
"mojo.ly",
"money.us",
"monster.me",
"moourl.com",
"moph.ie",
"more.sh",
"movie.ps",
"movi.es",
"mph.to",
"mrkt.rs",
"mrmn.org",
"mrte.ch",
"msft.it",
"msg.sg",
"mstr.cd",
"mths.be",
"mtln.us",
"m.tri.be",
"muo.fm",
"murl.kz",
"mut.lu",
"mv2.me",
"mvp.to",
"mwne.ws",
"mydesert.co",
"myfonts.us",
"myloc.me",
"mypict.me",
"mysp.ac",
"mysp.in",
"myurl.in",
"myurl.si",
"my.yoplait.com",
"mz.cm,",
"mzl.la",
"name.social",
"nanoref.com",
"nanourl.se",
"natl.re",
"nature.ly",
"nbcchi.com",
"nbc.co",
"nbcnews.to",
"nbcny.com",
"nbco.ly",
"nbc.to",
"nblo.gs",
"nbx.ch",
"ncane.com",
"nca.st",
"ndurl.com",
"ne1.net",
"neo.ly",
"net46.net",
"net.ms",
"netnet.me",
"netshortcut.com",
"newsday.com",
"newser.me",
"newspr.es",
"newsy.com",
"nfz.me",
"nicou.ch",
"niel.sn",
"nie.mn",
"nig.gr",
"ning.it",
"ni.to",
"nixle.us",
"njour.nl",
"#nmem.ag",
"nm.ly",
"nn.nf",
"nod2.me",
"noip.co",
"nokia.ly",
"notlong.com",
"not.my",
"nov.io",
"nowth.is",
"n.pr",
"nq.st",
"nrdry.net",
"nsfw.in",
"nssn.co",
"ntbx.co",
"nutshellurl.com",
"nxg.is",
"nxy.in",
"nydn.us",
"nym.ag",
"nyob.co",
"nyp.st",
"nyti.ms",
"nyv.me",
"nzh.tw",
"oads.co",
"oboeyasui.com",
"oc1.us",
"occip.it and 360.io",
"o.ea.com",
"ofa.bo",
"offur.com",
"ofl.me",
"ohdev.in",
"oink.com",
"okok.fr",
"o.ly",
"omf.gd",
"omgf.ac",
"om.ly",
"omoikane.net",
"on.11alive.com",
"on9news.tv",
"on-ajc.com",
"on.app.com",
"on.azcentral.com",
"on.bofa.com",
"on.cc.com",
"on.cnn.com",
"on.ea.com",
"onecent.us",
"#on.fb.me",
"on.fearnet.com",
"on.flatoday.com",
"onforb.es",
"on.ft.com",
"on.hln.tv",
"onion.com",
"on.jconline.com",
"on.ksdk.com",
"on.kthv.com",
"on.life.com",
"on.mash.to",
"on.mgmadv.com",
"on.mktw.net",
"onmsnbc.co",
"on.msnbc.com",
"on-msn.com",
"on.natgeo.com",
"on.news10.net",
"on.nfib.com",
"on.pier1.com",
"on.pnj.com",
"onsaas.info",
"on.si.com",
"on.sugarsca.pe",
"on.tdo.com",
"on.thec-l.com",
"on.thegrio.com",
"on.thekitc.hn",
"on.today.com",
"onvb.co",
"on.ventrachicago.com",
"on.vh1.com",
"on.wbir.com",
"on.wcsh6.com",
"on.wfmy.com",
"on.wgrz.com",
"on.wkyc.com",
"on.wlbz2.com",
"on.wltx.com",
"on.wmaz.com",
"on.wnep.com",
"on.wsj.com",
"on.wtsp.com",
"on.wusa9.com",
"on.wzzm.com",
"ooqx.com",
"opb.is",
"optimize.ly",
"orcl.so",
"oreil.ly",
"orgcns.org",
"orz.se",
"oshko.sh",
"osky.co",
"otak.hu",
"oua.be",
"ou.af",
"ou.gd",
"#owl.li",
"#ow.ly",
"ow.ly",
"o-x.fr",
"oxyz.info",
"p4k.in",
"p6l.org",
"p8g.tw",
"pack.rs",
"pape.rs",
"parky.tv",
"parton.ly",
"parv.us",
"past.is",
"patch.com",
"paulding.net",
"pbli.sh",
"pck.rs",
"pco.lt",
"pdh.co",
"pduda.mobi",
"peachp.it",
"peaurl.com",
"pendek.in",
"pep.si",
"perez.ly",
"petsmartsocial.com",
"pewrsr.ch",
"pge.sx",
"phillips.to",
"ph.ly",
"phtshp.us",
"pic.gd",
"pich.in",
"picplz.com",
"picz.us",
"piff.me",
"piko.me",
"pinews.co",
"ping.fm",
"pin.st",
"pi.pe",
"pitch.pe",
"piurl.com",
"pl.an",
"plated.me",
"pli.gs",
"plots.fr",
"plumurl.com",
"plurl.me",
"p.ly",
"pm.wu.cz",
"pndo.ly",
"pngr.it",
"pninja.co",
"pnt.me",
"pocket.co",
"pojonews.co",
"politi.co",
"poll.fm",
"pop.ly",
"poprl.com",
"pops.ci",
"po.st",
"post.cr",
"postdispat.ch",
"posted.at",
"p.ost.im",
"post.ly",
"powells.us",
"ppche.ro",
"ppfr.it",
"pp.gg",
"ppst.me",
"ppt.cc",
"ppt.li",
"p.pw",
"prejit.cz",
"press.sn",
"prettylinkpro.com",
"prez.is",
"pri.vc",
"prnt.in",
"prn.to",
"profile.to",
"pt2.me",
"ptab.it",
"ptiturl.com",
"ptm.ro",
"ptrani.me",
"publun.ch",
"pub.vitrue.com",
"puke.it",
"pulse.me",
"pulsene.ws",
"puri.na",
"pw2.ro",
"pwire.at",
"py6.ru",
"pysper.com",
"qbn.ru",
"q.gs",
"qik.li",
"qkme.me",
"qlnk.net",
"qoiob.com",
"qqc.co",
"qr.ae",
"qr.cx",
"qr.net",
"qrtag.fr",
"qte.me",
"quickurl.co.uk",
"qurl.com",
"qurlyq.com",
"qu.tc",
"quu.nu",
"qux.in",
"qvc.co",
"qxp.cz",
"qxp.sk",
"qy.fi",
"qz.com",
"r29.co",
"r29.us",
"r8t.us",
"rach.tv",
"racked.cc",
"raven.im",
"rb6.co",
"rb6.me",
"rbl.ms",
"rcknr.io",
"rclk.ly",
"rdd.me",
"rde.me",
"rd.io",
"rdz.me",
"read.bi",
"readthis.ca",
"reallytinyurl.com",
"rebrick.it",
"redd.it",
"redir.ec",
"redirects.ca",
"redir.fr",
"redirx.com",
"redu.it",
"ref.so",
"reise.lc",
"relink.fr",
"relyt.us",
"rem.ax",
"re.pn",
"retwedia.com",
"retwt.me",
"reut.rs",
"revolver2.com",
"rfi.my",
"rhjr.net",
"rickroll.it",
"r.im",
"ri.ms",
"ringcentr.al",
"ringit.us",
"rivva.de",
"riz.cz",
"riz.gd",
"rly.cc",
"rnc.ag",
"rnk.me",
"rnkpr.com",
"rockcenter.co",
"rock.li",
"rod.gs",
"roflc.at",
"rol.la",
"rol.st",
"rpplfr.me",
"rsmonkey.com",
"rt2.ca",
"rt.nu",
"rt.se",
"rubyurl.com",
"ru.ly",
"rurl.org",
"ruv.me",
"rwjf.ws",
"rww.to",
"rww.tw",
"s3nt.com",
"s4c.in",
"s7y.us",
"safelinks.ru",
"safe.mn",
"safm.co",
"sagyap.tk",
"sai.ly",
"sameurl.com",
"sarcas.ms",
"sbn.to",
"sbux.co",
"sched.co",
"sch.mp",
"scifri.me",
"scoble.it",
"sc.org",
"scri.bi",
"scrnch.me",
"scty.asia",
"sdtk.fm",
"sdu.sk",
"sdut.us",
"s.dv.nu",
"seati.ms",
"secret.ly",
"sed.cx",
"seeme.at",
"see.sc",
"segue.se",
"selnd.com",
"selz.co",
"send.gd",
"seph.me",
"ser.bz",
"setd.es",
"sewat.ch",
"sforce.co",
"sftlyr.com",
"sfu.ca",
"sfy.co",
"sgfnow.co",
"sgizmo.com",
"sgk.mn",
"s.gnoss.us",
"shadyurl.com",
"shar.as",
"shar.es",
"s.hbr.org",
"shebpr.es",
"shim.net",
"shink.de",
"sho.pe",
"shorl.com",
"short.cc",
"shortenurl.com",
"shorten.ws",
"shorterlink.com",
"short.ie",
"shortio.com",
"shortlinks.co.uk",
"shortly.nl",
"shortna.me",
"shortn.me",
"short.pk",
"shortquik.com",
"shortr.me",
"short.to",
"shorturl.com",
"shortz.me",
"shoturl.us",
"shout.to",
"show.my",
"shpws.me",
"shredu",
"shredurl.com",
"shrinkify.com",
"shrinkr.com",
"shrinkster.com",
"shrinkurl.us",
"shrten.com",
"shrt.fr",
"shrt.in",
"shrtl.com",
"shrtn.com",
"shrtnd.com",
"shrt.st",
"shrt.ws",
"shrunkin.com",
"sh.st",
"shurl.net",
"shw.me",
"shy.si",
"shz.am",
"sicax.net",
"signon.org",
"simp.ly",
"simurl.com",
"simurl.net",
"simurl.org",
"simurl.us",
"sina.lt",
"sitelutions.com",
"siteo.us",
"sk.gy",
"skl.sh",
"skroc.pl",
"skr.sk",
"sk.ype.ms",
"slate.me",
"slidesha.re",
"slki.ru",
"sl.ly",
"smallr.com",
"smallr.net",
"smart.cr",
"smarturl.it",
"smashed.by",
"sm.drpepper.com",
"smf.is",
"smfu.in",
"smgm.us",
"smith.gl",
"smll.co",
"smq.tc",
"smsh.me",
"smurl.com",
"smurl.name",
"snadr.it",
"snd.sc",
"sn.im",
"snipie.com",
"snip.ly",
"snipr.com",
"snipurl.com",
"snkr.me",
"snow.sh",
"sns.mx",
"snsw.us",
"snurl.com",
"sn.vc",
"s.nyt.com",
"social.bestbuy.com",
"social.jcp.com",
"social.vzw.com",
"social.zune.net",
"sockroll.com",
"soc.li",
"some.ly",
"song.ly",
"soo.gd",
"s.osky.co",
"soup.ps",
"sp2.ro",
"spdr.mn",
"spe.com",
"spedr.com",
"spn.sr",
"spon.de",
"sportsgrid.com",
"spoti.fi",
"spr.ly",
"sptnkne.ws",
"sq6.ru",
"sqrl.it",
"squ.re",
"sqze.it",
"s.rlp.de",
"srnk.net",
"srs.li",
"ssl.gs",
"st8.fm",
"stan4d.us",
"stargaz.tt",
"starstar.to",
"starturl.com",
"statigr.am",
"stickurl.com",
"stjr.nl",
"stks.co",
"stlra.ms",
"stonet.co",
"stpmvt.com",
"striking.ly",
"stry.me",
"sturly.com",
"styleite.com",
"subar.us",
"suntm.es",
"su.pr",
"sups.us",
"surl.co.uk",
"s-url.fr",
"surl.hu",
"surl.it",
"surl.me",
"sux.cz",
"svy.mk",
"s.whcc.com",
"sy.pe",
"tabzi.com",
"ta.gd",
"takemyfile.com",
"tau.pe",
"tbd.ly",
"tbf.me",
"t.cn",
"t.co",
"tcrn.ch",
"tdjt.cz",
"techme.me",
"techpin.io",
"techre.vu",
"tek.io",
"tempo.ai",
"tgr.me",
"tgr.ph",
"tgt.bz",
"th8.us",
"thd.co",
"theatln.tc",
"thebea.st",
"thebraiser.com",
"thecow.me",
"thecp.me",
"thedc.com",
"thedrum.com",
"thekitc.hn",
"thesa.us",
"thesent.nl",
"theso.co",
"thetim.es",
"thkp.gs",
"thkpr.gs",
"thndr.it",
"thr.cm",
"thrdl.es",
"thrl.st",
"tighturl.com",
"tilt.tc",
"ti.me",
"timesurl.at",
"timmil.es",
"tini.cc",
"tiniuri.com",
"tini.us",
"tin.li",
"tinyarro.ws",
"tinyarrows.com",
"tiny.cc",
"tinylink.com",
"tinylink.in",
"tiny.lt",
"tiny.ly",
"tiny.ms",
"tiny.pl",
"tinypl.us",
"tinysong.com",
"tinytw.it",
"tinyuri.ca",
"tinyurl.com",
"tinyurl.hu",
"tixsu.com",
"tk.",
"tkt.ly",
"tldis.it",
"tldr.sk",
"tl.gd",
"t.lh.com",
"tllg.net",
"tlrk.it",
"tmblr.co",
"tmi.me",
"t-mo.co",
"tmoutchi.us",
"tmout.us",
"tmvs.tv",
"tmz.me",
"tnat.in",
"tncr.ws",
"tnij.org",
"tnne.ws",
"tnw.to",
"tny.com",
"tny.cz",
"to.",
"To8.cc",
"togoto.us",
"tohle.de",
"to.je",
"tolu.na",
"to.ly",
"tommyjo.hn",
"toms.sh",
"to.pbs.org",
"tota2.com",
"totc.us",
"to.vg",
"toysr.us",
"tpm.ly",
"tpmr.com",
"tprk.us",
"tptq.com",
"tr5.in",
"traceurl.com",
"trackurl.it",
"tra.kz",
"trcb.me",
"trck.me",
"trg.li",
"trib.al",
"trib.in",
"trick.ly",
"trii.us",
"tr.im",
"trim.li",
"trkr.ws",
"trkurl.com",
"tr.my",
"trndbl.co",
"trn.st",
"troni.me",
"trumpink.lt",
"trunc.it",
"truncurl.com",
"tsort.us",
"tspne.ws",
"t.st",
"tsta.rs",
"t.uber.com",
"tubeurl.com",
"tumblr.com",
"turo.us",
"t.usnews.com",
"tvnews.co",
"tw0.us",
"tw1.us",
"tw2.us",
"tw5.us",
"tw6.us",
"tw8.us",
"tw9.us",
"twa.lk",
"tw.appstore.com",
"twaud.io",
"tweetburner.com",
"tweetl.com",
"tweet.me",
"tweez.me",
"twet.fr",
"twhite.me",
"twhub.com",
"twi.gy",
"twi.im",
"twip.us",
"twirl.at",
"twit.ac",
"twitclicks.com",
"twitpic.com",
"twitterurl.net",
"twitterurl.org",
"twitthis.com",
"twittu.ms",
"twiturl.de",
"twitzap.com",
"twlr.me",
"twl.sh",
"twlv.net",
"tw.medicalexpress.com",
"tw.nbcsports.com",
"twrt.me",
"twtr.to",
"twtr.us",
"twurl.cc",
"twurl.nl",
"txex.es",
"txt.bo",
"u76.org",
"uafly.co",
"uapp.ly",
"ub0.cc",
"u.bb",
"uby.es",
"ucam.me",
"ucla.in",
"ug.cz",
"uiop.me",
"ulimit.com",
"ulmt.in",
"ulu.lu",
"u.mavrev.com",
"umurl.us",
"unfaker.it",
"uninews.us",
"uni.vi",
"unlc.us",
"untp.beer",
"untp.it",
"u.nu",
"unvrs.al",
"updating.me",
"u.pw",
"upwr.me",
"upzat.com",
"ur1.ca",
"urbanup.com",
"urbn.cc",
"urbo.co",
"urizy.com",
"url2.fr",
"url360.me",
"url4.eu",
"url5.org",
"url.ag",
"urlao.com",
"url.az",
"urlbee.com",
"urlborg.com",
"urlbrief.com",
"urlcorta.es",
"url.co.uk",
"urlcover.com",
"urlcut.com",
"urlcutter.com",
"urlenco.de",
"urlg.info",
"url.go.it",
"urlhawk.com",
"url.ie",
"url.inc-x.eu",
"urlin.it",
"urli.nl",
"urlkiss.com",
"url.lotpatrol.com",
"urloo.com",
"urlpire.com",
"urls.fr",
"urlshorteningservicefortwitter.com",
"urls.im",
"urltea.com",
"urlu.ms",
"urlvi.b",
"urlvi.be",
"urlx.ie",
"ur.ly",
"urlz.at",
"urlzen.com",
"urlz.fr",
"urub.us",
"usanet.tv",
"usat.ly",
"use.my",
"uservoice.com",
"ussoc.cr",
"ustre.am",
"utfg.sk",
"u.to",
"uverse.us",
"uxm.ag",
"v1m.net",
"v5.gd",
"vaaa.fr",
"vado.it",
"valv.im",
"vaza.me",
"vb.ly",
"vbly.us",
"vd55.com",
"vdirect.com",
"verd.in",
"vevo.ly",
"v.gd",
"vgn.am",
"vgn.me",
"v.ht",
"via.me",
"viddy.it",
"viigo.im",
"vi.ly",
"virg.co",
"virg.in",
"virl.com",
"vl.am",
"vm.lc",
"vnty.fr",
"vnty.us",
"voizle.com",
"volu.sn",
"vov.li",
"vox.com",
"vrge.co",
"vrl.ht",
"vrsn.cc",
"vsb.li",
"vsll.eu",
"vt802.us",
"vtc.es",
"vult.re",
"vur.me",
"vv.vg",
"v.zite.com",
"vz.to",
"vzturl.com",
"w0r.me",
"w1p.fr",
"w33.us",
"w34.us",
"w3t.org",
"w55.de",
"wa9.la",
"waa.ai",
"walmarturl.com",
"wapo.st",
"wapurl.co.uk",
"washex.am",
"wb1.eu",
"wbtrnd.co",
"wbur.fm",
"web99.eu",
"webalias.com",
"wed.li",
"welcome.to",
"wervirg.in",
"we.tl",
"wet.pt",
"wfp.to",
"wfts.tv",
"w.fullsail.edu",
"wh.gov",
"wideo.fr",
"widg.me",
"wigs.ly",
"win.gs",
"wipi.es",
"wire.ms",
"wis.ms",
"with.me",
"wjf.im",
"wj.la",
"wkrg.com",
"woo.ly",
"wpbeg.in",
"wp.me",
"wp.mu",
"wpo.st",
"wrd.cm",
"wrdm.ag",
"›.ws",
"wsm.co",
"wtc.la",
"wthms.co",
"wu.cz",
"ww7.fr",
"wwd.us",
"wwy.me",
"wwz.rs",
"wxch.nl",
"x10.mx",
"x2c.eu",
"x2c.eumx",
"xav.cc",
"xbx.ms",
"x.co",
"xeeurl.com",
"xgd.in",
"x.hypem.com",
"xib.me",
"xil.in",
"xl8.eu",
"xlinkz.info",
"xlurl.de",
"xn--1ci.ws",
"xn--3fi.ws",
"xn--5gi.ws",
"xn--9gi.ws",
"xn--bih.ws",
"xn--cwg.ws",
"xn--egi.ws",
"xn--fwg.ws",
"xn--hgi.ws",
"xn--l3h.ws",
"xn--odi.ws",
"xn--ogi.ws",
"xn--rei.ws",
"x.nu",
"xn--vgi.ws",
"xoe.cz",
"xr.com",
"xrl.in",
"xrl.us",
"xrt.me",
"xrx.sm",
"x.se",
"xt3.me",
"xtu.me",
"xua.me",
"xub.me",
"x.up.com",
"xurl.es",
"xurl.jp",
"xurls.co",
"x.vu",
"xxsurl.de",
"xzb.cc",
"yagoa.fr",
"yagoa.me",
"y.ahoo.it",
"yatuc.com",
"yau.sh",
"yeca.eu",
"yect.com",
"ye.pe",
"yep.it",
"ye-s.com",
"yfrog.com",
"yhoo.it",
"yiyd.com",
"yogh.me",
"yon.ir",
"youfap.me",
"yourls.org",
"#youtu.be",
"youtu.be",
"ysear.ch",
"yu2.it",
"yuarel.com",
"yyv.co",
"z0p.de",
"z9.fr",
"zagat.bz",
"zagg.to",
"zan.gy",
"zapit.nu",
"zapt.in",
"zapwow.me",
"zd.net",
"zeek.ir",
"ziglr.us",
"zi.ma",
"zi.me",
"zi.mu",
"zi.pe",
"zip.li",
"zipmyurl.com",
"zip.net",
"zite.to",
"zkrat.me",
"zkr.cz",
"zkrt.cz",
"zoodl.com",
"zootit.com",
"zoo.tl",
"zpag.es",
"z.pe",
"zpr.io",
"zSMS.net",
"zti.me",
"zud.me",
"zurl.ws",
"zxq.net",
"zyva.org",
"zzang.kr",
"zzb.bz",
"zz.gd"
];

const ampCacheDomains = ["cdn.ampproject.org", "amp.cloudflare.com", "bing-amp.com"];

/**
* Module for resolving a short url
* @module WebScience.Utilities.LinkResolution
*/


const fetchTimeoutMs = 5000;
let initialized$3 = false;
// promisesByUrl is a mapping from a url to resolve and the resolve objects associated with it
let promisesByUrl = new Map();
// trackedUrls is a set for which the headers are observed
let trackedUrls = new Set();
// urlByRedirectedUrl is a mapping from a redirected url to url that redirected to it
// recursively traversing this mapping will get the redirect chain associated with an initial url
let urlByRedirectedUrl = new Map();

/**
* Function to resolve a given url to the final url that it points to
* @param {string} url - URL to resolve
* @returns {Promise.Object} - An object containing the destination url
*/
function resolveUrl(url) {
 if (!initialized$3) {
   return Promise.reject("module not initialized");
 }
 let urlResolutionPromise = new Promise(function (resolve, reject) {
   // store the resolve function in promisesByUrl. This function will be invoked when the 
   // url is resolved
   let resolves = promisesByUrl.get(url) || [];
   if (!resolves || !resolves.length) {
     promisesByUrl.set(url, resolves);
   }
   resolves.push({
     resolve: resolve,
     reject: reject
   });
   trackedUrls.add(url);
   // fetch this url
   fetchWithTimeout(url, {
     redirect: 'manual',
     headers: {
       /* With a browser User-Agent header, the response of news.google.com link shim is a HTML document that eventually redirects to the actual news page.
       This actual news link is not part of the HTTP response reader. However, using a non-browser User-Agent like curl the response header
       contains the redirected location. */
       'User-Agent': url.includes("news.google.com") ? 'curl/7.10.6 (i386-redhat-linux-gnu) libcurl/7.10.6 OpenSSL/0.9.7a ipv6 zlib/1.1.4' : ''
     }
   }, fetchTimeoutMs);
 });
 return urlResolutionPromise;
}

/**
* Listener for https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
* @param {Object} details contains details of the request
*/
function responseHeaderListener(details) {
 // Continue only if this url is relevant for link resolution
 if (!trackedUrls.has(details.url)) {
   return;
 }

 // The location field in response header indicates the redirected URL
 // The response header from onHeadersReceived is an array of objects, one of which possibly
 // contains a field with name location (case insensitive).
 let redirectedURLLocation = details.responseHeaders.find(obj => {
   return obj.name.toUpperCase() === "LOCATION";
 });

 // if the location field in response header contains a new url
 if (redirectedURLLocation != null && (redirectedURLLocation.value != details.url)) {
   let nexturl = redirectedURLLocation.value;
   // Create a link between the next url and the initial url
   urlByRedirectedUrl.set(nexturl, details.url);
   // Add the next url so that we process it during the next onHeadersReceived
   trackedUrls.add(nexturl);
   // Send fetch request to the next url
   fetchWithTimeout(nexturl, {
     redirect: 'manual',
     headers: {
       'User-Agent': ''
     }
   }, fetchTimeoutMs);
 } else { // url is not redirected
   if (urlByRedirectedUrl.has(details.url)) {
     // backtrack urlByRedirectedUrl to get to the promise object that corresponds to this
     let url = details.url;
     while (urlByRedirectedUrl.has(url)) {
       let temp = url;
       url = urlByRedirectedUrl.get(url);
       urlByRedirectedUrl.delete(temp);
       trackedUrls.delete(temp);
     }
     // url now contains the initial url. Now, resolve the corresponding promises
     if (url && promisesByUrl.has(url)) {
       let resolves = promisesByUrl.get(url) || [];
       let resolveObj = {
         source: url,
         dest: details.url
       };
       for (var i = 0; i < resolves.length; i++) {
         var r = resolves[i].resolve;
         r(resolveObj);
       }
       promisesByUrl.delete(url);
     }
   }
 }
}

/**
* Listener for https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
* @param {Object} responseDetails - Contains details of the error
*/
function trackError(responseDetails) {
 let url = responseDetails.url;
 if (promisesByUrl.has(url)) {
   let resolves = promisesByUrl.get(url) || [];
   for (let i = 0; i < resolves.length; i++) {
     let r = resolves[i].reject;
     r(responseDetails.error);
   }
   promisesByUrl.delete(url);
 }
}

/**
* Initializes the link resolution module by setting up listeners for onHeadersReceived event
* @returns {void} Nothing
*/
function initialize$2() {
 initialized$3 = true;
 browser.webRequest.onHeadersReceived.addListener(responseHeaderListener, {
   urls: ["<all_urls>"]
 }, ["responseHeaders"]);
 browser.webRequest.onErrorOccurred.addListener(trackError, {
   urls: ["<all_urls>"]
 });
}

/**
* Returns a list of short domains that the link resolution module can resolve
* @returns {String[]} Array of domains
*/
function getShortDomains() {
 return shortDomains;
}

/**
* Returns a list of amp cache domains
* @returns {String[]} Array of domains
*/
function getAmpCacheDomains() {
 return ampCacheDomains;
}

/**
* Fetch API doesn't provide a native timeout option. This function uses AbortController to
* timeout fetch requests.
* @param {string} url - resource to fetch
* @param {Object} init - fetch initialization
* @param {number} timeout - timeout in ms for fetch requests
*/
function fetchWithTimeout(url, init, timeout) {
 const controller = new AbortController();
 init.signal = controller.signal;
 fetch(url, init);
 setTimeout(() => controller.abort(), timeout);
}

/**
 * LinkExposure module is used to run studies that track user's exposure
 * to content from known news domains
 * @module WebScience.Measurements.LinkExposure
 */

const debugLog$1 = getDebuggingLog("Measurements.LinkExposure");

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
var storage = null;

var numUntrackedUrlsByThreshold = {};

var visibilityThresholds = [1000, 3000, 5000, 10000]; // match to CS values
/**
 * @name LinkExposure.runStudy starts the LinkExposure study.
 * @param {String[]} domains - Array of domains to track 
 * @param {boolean} privateWindows - If true then the study works in private windows
 * @param {string} domainsCategory - Category of the domains to track
 */
async function runStudy({
    domains = [],
    privateWindows = false,
    domainsCategory = "news",
}) {

    // store private windows preference in the storage
    await browser.storage.local.set({ "WebScience.Measurements.LinkExposure.privateWindows": privateWindows }); 
    storage = await (new KeyValueStorage("WebScience.Measurements.LinkExposure")).initialize();
    // Use a unique identifier for each webpage the user visits that has a matching domain
    var nextLinkExposureIdCounter = await (new Counter("WebScience.Measurements.LinkExposure.nextPageId")).initialize();
    let shortDomains = getShortDomains();
    let ampCacheDomains = getAmpCacheDomains();
    let domainPattern = createUrlRegexString(domains);
    let shortDomainPattern = createUrlRegexString(shortDomains);
    let ampCacheDomainPattern = createUrlRegexString(ampCacheDomains);
    for (var visThreshold of visibilityThresholds) {
        numUntrackedUrlsByThreshold[visThreshold] = await (new Counter("WebScience.Measurements.LinkExposure.numUntrackedUrls" + visThreshold)).initialize();
    }
    const ampCacheMatcher = new RegExp(ampCacheDomainPattern);
    const shortDomainMatcher = new RegExp(shortDomainPattern);
    const urlMatcher = new RegExp(domainPattern);
    await browser.storage.local.set({domainRegex: urlMatcher, shortDomainRegex: shortDomainMatcher, ampDomainRegex : ampCacheMatcher});

    // Add the content script for checking links on pages
    await browser.contentScripts.register({
        matches: ["*://*/*"],
        js: [{
            file: "/WebScience/Measurements/content-scripts/utils.js"
        },
            {
                file: "/WebScience/Measurements/content-scripts/linkExposure.js"
            }
        ],
        runAt: "document_idle"
    });

    // Listen for LinkExposure messages from content script
    registerListener("WebScience.linkExposure", (exposureInfo, sender, sendResponse) => {
        if (!("tab" in sender)) {
            debugLog$1("Warning: unexpected link exposure update");
            return;
        }
        var untrackedInfo = exposureInfo.numUntrackedUrls;
        for (var visThreshold in untrackedInfo) {
            numUntrackedUrlsByThreshold[visThreshold].incrementByAndGet(untrackedInfo[visThreshold]);
        }
        exposureInfo.exposureEvents.forEach(async exposureEvent => {
            exposureEvent.isShortenedUrl = shortDomainMatcher.test(exposureEvent.originalUrl);
            exposureEvent.resolutionSucceded = true;
            exposureEvent.metadata = exposureInfo.metadata;
            // resolvedUrl is valid only for urls from short domains
            exposureEvent.resolvedUrl = undefined;
            exposureEvent.metadata.domainCategory = domainsCategory;
            if (exposureEvent.isShortenedUrl) {
                let promise = resolveUrl(exposureEvent.originalUrl);
                promise.then(async function (result) {
                    if (urlMatcher.test(result.dest)) {
                        exposureEvent.resolvedUrl = result.dest;
                    }
                }, function (error) {
                    exposureEvent.error = error.message;
                    exposureEvent.resolutionSucceded = false;
                }).finally(async function () {
                    if (!exposureEvent.resolutionSucceded || exposureEvent.resolvedUrl !== undefined)
                        await createLinkExposureRecord(exposureEvent, nextLinkExposureIdCounter);
                });
            } else {
                await createLinkExposureRecord(exposureEvent, nextLinkExposureIdCounter);
            }
        });

    }, {
        type: "string",
        metadata: "object"
    });

    registerPageAttentionStartListener(pageAttentionStart, true, privateWindows);
    registerPageAttentionStopListener(pageAttentionStop, privateWindows);

}

function pageAttentionStart({url, referrer, tabId, timeStamp}) {
    browser.tabs.sendMessage(tabId, {
        attentionChange: "gain", 
        timeStamp: timeStamp}).catch( (err) => { return; } );
}
function pageAttentionStop({url, referrer, tabId, timeStamp}) {
    browser.tabs.sendMessage(tabId, {
        attentionChange: "lose", 
        timeStamp: timeStamp}).catch( (err) => { return; } );
}

/**
 * 
 * @param {LinkExposureEvent} exposureEvent link exposure event to store
 * @param {string} LinkExposureEvent.originalUrl - link exposed to
 * @param {string} LinkExposureEvent.resolvedUrl - optional field which is set if the isShortenedUrl and resolutionSucceeded are true
 * @param {boolean} LinkExposureEvent.resolutionSucceded - true if link resolution succeeded
 * @param {boolean} LinkExposureEvent.isShortenedUrl - true if link matches short domains
 * @param {number} LinkExposureEvent.firstSeen - timestamp when the link is first seen
 * @param {number} LinkExposureEvent.duration - milliseconds of link exposure
 * @param {Object} LinkExposureEvent.size - width and height of links
 * @param {Counter} nextLinkExposureIdCounter counter object
 */
async function createLinkExposureRecord(exposureEvent, nextLinkExposureIdCounter) {
    exposureEvent.type = "linkExposure";
    exposureEvent.url = (exposureEvent.isShortenedUrl && exposureEvent.resolutionSucceded ?
                         normalizeUrl(exposureEvent.resolvedUrl) :
                         normalizeUrl(exposureEvent.originalUrl));
    exposureEvent.laterVisited = false;
    exposureEvent.laterShared = false;
    //debugLog("storing " + JSON.stringify(exposureEvent));
    var key = exposureEvent.url + " " + await nextLinkExposureIdCounter.getAndIncrement();
    storage.set(key, exposureEvent);
}

async function logVisit(url) {
    var prevExposures = await storage.startsWith(url);
    var hasPrevExposures = false;
    for (var key in prevExposures) {
        hasPrevExposures = true;
        prevExposures[key].laterVisited = true;
        await storage.set(key, prevExposures[key]);
    }
    return (hasPrevExposures);
}

/**
 * This module measures scroll depth for webpages on specific domains.
 * 
 * Note: we will likely replace this module when we update the
 * PageNavigation and PageEvents modules.
 * 
 * @module WebScience.Measurements.PageDepth
 */

const debugLog$2 = getDebuggingLog("Measurements.PageDepth");

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
var storage$1 = null;
var initialized$4 = false;

var listeners = [];

/**
 * Start a page depth study. Note that only one study is supported per extension.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function runStudy$1({
    domains = [ ]
}) {

    if(initialized$4)
        return;    
    initialized$4 = true;

    storage$1 = await (new KeyValueStorage("WebScience.Measurements.PageDepth")).initialize();

    // Use a unique identifier for each webpage the user visits that has a matching domain
    var nextPageIdCounter = await (new Counter("WebScience.Measurements.PageDepth.nextPageId")).initialize();

    // Build the URL matching set for content scripts
    var contentScriptMatches = createUrlMatchPatternArray(domains, true);

    // Register the content script for measuring maximum scroll depth
    await browser.contentScripts.register({
        matches: contentScriptMatches,
        js: [{
            file: "/WebScience/Measurements/content-scripts/pageDepth.js"
        }]
    });

    // Handle page depth events
    registerListener("WebScience.pageDepth", async (depthInfo, sender, sendResponse) => {
        var pageId = await nextPageIdCounter.getAndIncrement();
        depthInfo.url = normalizeUrl(sender.url);
        depthInfo.tabId = sender.tab.id;
        for (var listener of listeners) { listener(depthInfo); }
        storage$1.set(pageId.toString(), depthInfo);
        debugLog$2(JSON.stringify(depthInfo));
    }, {
        type: "string",
        maxRelativeScrollDepth: "number",
        loadTime: "number"
    });
}

function registerListener$1(listener) {
    listeners.push(listener);
}

const debugLog$3 = getDebuggingLog("Measurements.PageNavigation");

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
var storage$2 = null;
var currentTabInfo = null;
var urlMatcher = null;

var untrackedPageVisits = null;

async function depthResults(result) {
    if (result.maxRelativeScrollDepth == null) return;
    if (currentTabInfo[result.tabId] && currentTabInfo[result.tabId].url == result.url) {
        currentTabInfo[result.tabId].scrollDepth = result.maxRelativeScrollDepth;
    }
    else {
        if (!urlMatcher.testUrl(result.url)) { return; }
        await storage$2.startsWith(result.url).then((prevVisits) => {
            for (let key in prevVisits) {
                if (prevVisits[key].tabId == result.tabId) {
                    prevVisits[key].scrollDepth = result.maxRelativeScrollDepth;
                    storage$2.set(key, prevVisits[key]);
                    return;
                }
            }
        });
    }

}

/**
 * Start a navigation study. Note that only one study is supported per extension.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {boolean} [options.trackUserAttention=false] - Whether to track user
 * attention during the study.
 * @param {boolean} [options.privateWindows=false] - Whether to measure pages in
 * private windows.
 */
async function runStudy$2({
    domains = [ ],
    trackUserAttention = false,
    privateWindows = false
}) {

    storage$2 = await (new KeyValueStorage("WebScience.Measurements.PageNavigation")).initialize();

    urlMatcher = new UrlMatcher(domains);

    untrackedPageVisits = await (new Counter("WebScience.Measurements.PageNavigation.untrackedPageVisits")).initialize();

    registerListener$1(depthResults);

    // Listen for metadata of the visited pages from content script
    // Use a unique identifier for each webpage the user visits that has a matching domain
    var nextPageIdCounter = await (new Counter("WebScience.Measurements.PageNavigation.nextPageId")).initialize();

    // Keep track of information about pages with matching domains that are currently loaded into a tab
    // If a tab ID is in this object, the page currently contained in that tab has a matching domain
    // Note that this is currently implemented with an object, we might want to switch it to a Map
    currentTabInfo = {};

    // listen metadata messages from content scripts
    // Handle when a page visit starts
    async function pageVisitStartListener({ url, referrer, tabId, timeStamp }) {

        // If the URL does not match the study domains, ignore the page visit start
        if (!urlMatcher.testUrl(url)) {
            untrackedPageVisits.incrementAndGet();
            return;
        }
        url = normalizeUrl(url);

        // If we are already tracking a page in this tab, ignore the page visit start
        // This shouldn't happen!
        if (tabId in currentTabInfo) {
            debugLog$3("Warning: page start event for tab that already has a page");
            return;
        }


        // Otherwise, remember the page visit start and increment the page counter
        currentTabInfo[tabId] = {
            pageId: nextPageIdCounter.get(),
            url,
            tabId,
            referrer,
            visitStart: timeStamp,
            visitEnd: -1,
            attentionDuration: 0,
            attentionSpanCount: 0,
            attentionSpanStarts: [ ],
            attentionSpanEnds: [ ],
            classification: { },
            scrollDepth: -1,
            prevExposed: false, // will check after storing this
            laterShared: false
        };
        var prevExposed = await logVisit(url);
        currentTabInfo[tabId].prevExposed = prevExposed;
        debugLog$3("pageVisitStartListener: " + JSON.stringify(currentTabInfo[tabId]));
        await nextPageIdCounter.increment();
    }
    // Handle when a page visit stops
    async function pageVisitStopListener({tabId, timeStamp}) {
        
        // If we are not tracking a page in this tab, ignore the page visit stop
        if(!(tabId in currentTabInfo))
            return;

        // Otherwise create a copy of what we have remembered about the page visit,
        // remove the page from the current set of tracked pages, and save the copy
        // to storage
        var tabInfoToSave = Object.assign({}, currentTabInfo[tabId]);
        tabInfoToSave.visitEnd = timeStamp;
        delete currentTabInfo[tabId];
        tabInfoToSave.type = "pageVisit";
        if (tabInfoToSave.attentionDuration < 1000) return;

        debugLog$3("pageVisitStopListener: " + JSON.stringify(tabInfoToSave));

        // Store the final set of information for the page
        storage$2.set(tabInfoToSave.url + " " + tabInfoToSave.pageId.toString(), tabInfoToSave);
    }
    var inAttentionSpan = false;
    var startOfCurrentAttentionSpan = -1;

    // Handle when a page attention span starts
    function pageAttentionStartListener({tabId, timeStamp}) {
        // If we have not remembered the page receiving attention, the page does not have a matching
        // domain, so ignore the page attention start event
        if(!(tabId in currentTabInfo)) {
            return;
        }

        // Remember the start of the attention span
        inAttentionSpan = true;
        startOfCurrentAttentionSpan = timeStamp;
        debugLog$3("pageAttentionStartListener: " + JSON.stringify(currentTabInfo[tabId]));
    }
    // Handle when a page attention span ends
    function pageAttentionStopListener({tabId, timeStamp}) {
        // If we have not remembered the page receiving attention, the page does not have a matching
        // domain, so ignore the page attention stop event
        if(!(tabId in currentTabInfo))
            return;

        // If we are not currently in an attention span, ignore the page attention stop event
        // This should not happen!
        if(!inAttentionSpan) {
            debugLog$3("Warning: unexpected page attention stop");
            return;
        }

        // Remember the end of the attention span
        currentTabInfo[tabId].attentionDuration = 
            currentTabInfo[tabId].attentionDuration + 
            (timeStamp - startOfCurrentAttentionSpan);
        currentTabInfo[tabId].attentionSpanCount = 
            currentTabInfo[tabId].attentionSpanCount + 1;
        currentTabInfo[tabId].attentionSpanStarts.push(startOfCurrentAttentionSpan);
        currentTabInfo[tabId].attentionSpanEnds.push(timeStamp);

        inAttentionSpan = false;
        startOfCurrentAttentionSpan = -1;
        debugLog$3("pageAttentionStopListener: " + JSON.stringify(currentTabInfo[tabId]));
    }
    // Register the page visit listeners and, if needed for the study, the page attention listeners
    // Use a timestamp to synchronize initial page visit and page attention times

    var timeStamp = Date.now();
    registerPageVisitStartListener(pageVisitStartListener, true, privateWindows, timeStamp);
    registerPageVisitStopListener(pageVisitStopListener, privateWindows);
    if(trackUserAttention) {
        registerPageAttentionStartListener(pageAttentionStartListener, true, privateWindows, timeStamp);
        registerPageAttentionStopListener(pageAttentionStopListener, privateWindows);
    }

    // Build the URL matching set for content scripts
    createUrlMatchPatternArray(domains, true);

    // Store whether the Navigation study is running in private windows in extension
    // local storage, so that it is available to content scripts
    await browser.storage.local.set({ "WebScience.Measurements.PageNavigation.privateWindows": privateWindows });
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function initialize$3() {
    var studyPaths = getStudyPaths();
    console.debug("study paths:");
    console.debug(studyPaths);

    // Configure navigation collection
    runStudy$2({
        domains: studyPaths.destinationPaths,
        trackUserAttention: true
    });

    // Configure link exposure collection
    initialize$2();
    runStudy({
        domains: studyPaths.destinationPaths,
        privateWindows : false,
    });

    runStudy$1({
        domains: studyPaths.destinationPaths,
    });
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const rally = new Rally();
rally.initialize(
  // A sample key id used for encrypting data.
  "sample-invalid-key-id",
  // A sample *valid* JWK object for the encryption.
  {
    "kty":"EC",
    "crv":"P-256",
    "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
    "kid":"Public key used in JWS spec Appendix A.3 example"
  },
  // The following constant is automatically provided by
  // the build system.
  true,
).then(resolve => {
  // Initialize the study and start it.
  // Example: initialize the example module.
  initialize$3();
}, reject =>{
  // Do not start the study in this case. Something
  // went wrong.
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvQG1vemlsbGEvcmFsbHkvcmFsbHkuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvRGVidWdnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL2xvY2FsZm9yYWdlLmVzNi5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9sb2NhbGZvcmFnZS1zdGFydHN3aXRoLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL1N0b3JhZ2UuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTWVzc2FnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL0lkbGUuanMiLCIuLi9zcmMvZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9NYXRjaGluZy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9QYWdlRXZlbnRzLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL3Nob3J0ZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9hbXBjYWNoZWRvbWFpbnMuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTGlua1Jlc29sdXRpb24uanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvTGlua0V4cG9zdXJlLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL1BhZ2VEZXB0aC5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9QYWdlTmF2aWdhdGlvbi5qcyIsIi4uL3NyYy9FeGFtcGxlTW9kdWxlLmpzIiwiLi4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC43LjAgLSBUdWUgTm92IDEwIDIwMjAgMjA6MjQ6MDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKHR5cGVvZiBicm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihicm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuICAgIGNvbnN0IFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORyA9IFwiUmV0dXJuaW5nIGEgUHJvbWlzZSBpcyB0aGUgcHJlZmVycmVkIHdheSB0byBzZW5kIGEgcmVwbHkgZnJvbSBhbiBvbk1lc3NhZ2Uvb25NZXNzYWdlRXh0ZXJuYWwgbGlzdGVuZXIsIGFzIHRoZSBzZW5kUmVzcG9uc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHNwZWNzIChTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvcnVudGltZS9vbk1lc3NhZ2UpXCI7IC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImkxOG5cIjoge1xuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkbGVcIjoge1xuICAgICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0aW9uXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhSZXNvbHZlZEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgY3JlYXRlZCBieSB0aGUgd3JhcHBlZCBhc3luYyBmdW5jdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhSZXNvbHZlZEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgY3JlYXRlZCBieSB0aGUgd3JhcHBlZCBhc3luYyBmdW5jdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7IC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgICAqL1xuXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfTsgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAgICpcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7IC8vIEtlZXAgdHJhY2sgaWYgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgaGFzIGJlZW4gbG9nZ2VkIGF0IGxlYXN0IG9uY2UuXG5cblxuICAgICAgbGV0IGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IGZhbHNlO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICovXG5cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZiAoIWxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcsIG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICAgICAgICAgICAgICBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUgIT0gXCJvYmplY3RcIiB8fCAhY2hyb21lIHx8ICFjaHJvbWUucnVudGltZSB8fCAhY2hyb21lLnJ1bnRpbWUuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgICB9IC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG5cblxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcclxuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xyXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cclxuXHJcbmNvbnN0IENPUkVfQURET05fSUQgPSBcInJhbGx5LWNvcmVAbW96aWxsYS5vcmdcIjtcclxuY29uc3QgU0lHTlVQX1VSTCA9IFwiaHR0cHM6Ly9tb3ppbGxhLXJhbGx5LmdpdGh1Yi5pby9jb3JlLWFkZG9uL1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFsbHkge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgdGhlIFJhbGx5IGxpYnJhcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5SWRcclxuICAgKiAgICAgICAgVGhlIGlkIG9mIHRoZSBrZXkgdXNlZCB0byBlbmNyeXB0IG91dGdvaW5nIGRhdGEuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGtleVxyXG4gICAqICAgICAgICBUaGUgSlNPTiBXZWIgS2V5IChKV0spIHVzZWQgdG8gZW5jcnlwdCB0aGUgb3V0Z29pbmcgZGF0YS5cclxuICAgKiAgICAgICAgU2VlIHRoZSBSRkMgNzUxNyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxN1xyXG4gICAqICAgICAgICBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbi4gRm9yIGV4YW1wbGU6XHJcbiAgICpcclxuICAgKiAgICAgICAge1xyXG4gICAqICAgICAgICAgIFwia3R5XCI6XCJFQ1wiLFxyXG4gICAqICAgICAgICAgIFwiY3J2XCI6XCJQLTI1NlwiLFxyXG4gICAqICAgICAgICAgIFwieFwiOlwiZjgzT0ozRDJ4RjFCZzh2dWI5dExlMWdITXpWNzZlOFR1czl1UEh2UlZFVVwiLFxyXG4gICAqICAgICAgICAgIFwieVwiOlwieF9GRXpSdTltMzZITE5fdHVlNjU5TE5wWFc2cEN5U3Rpa1lqS0lXSTVhMFwiLFxyXG4gICAqICAgICAgICAgIFwia2lkXCI6XCJQdWJsaWMga2V5IHVzZWQgaW4gSldTIHNwZWMgQXBwZW5kaXggQS4zIGV4YW1wbGVcIlxyXG4gICAqICAgICAgICB9XHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBlbmFibGVEZXZNb2RlXHJcbiAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRvIGluaXRpYWxpemUgUmFsbHkuanMgaW4gZGV2ZWxvcGVyIG1vZGUuXHJcbiAgICogICAgICAgIEluIHRoaXMgbW9kZSB3ZSBpZ25vcmUgcHJvYmxlbXMgd2hlbiBjb21tdW5pY2F0aW5nIHdpdGhcclxuICAgKiAgICAgICAgY29yZSBhZGQtb24uXHJcbiAgICovXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZShrZXlJZCwga2V5LCBlbmFibGVEZXZNb2RlKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwiUmFsbHkuaW5pdGlhbGl6ZVwiKTtcclxuXHJcbiAgICB0aGlzLl92YWxpZGF0ZUVuY3J5cHRpb25LZXkoa2V5SWQsIGtleSk7XHJcblxyXG4gICAgdGhpcy5fa2V5SWQgPSBrZXlJZDtcclxuICAgIHRoaXMuX2tleSA9IGtleTtcclxuICAgIHRoaXMuX2VuYWJsZURldk1vZGUgPSBCb29sZWFuKGVuYWJsZURldk1vZGUpO1xyXG5cclxuICAgIGxldCBoYXNSYWxseSA9IGF3YWl0IHRoaXMuX2NoZWNrUmFsbHlDb3JlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJSYWxseS5pbml0aWFsaXplIC0gRm91bmQgdGhlIENvcmUgQWRkLW9uLlwiKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KS5jYXRjaChhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIFdlIGRpZCBub3QgZmluZCB0aGUgUmFsbHkgQ29yZSBBZGQtb24uIEJ1dCBtYXliZSB3ZVxyXG4gICAgICAvLyBhcmUgaW4gZGV2ZWxvcGVyIG1vZGUuIERvIG5vdCB0cmlnZ2VyIHRoZSBzaWduLXVwIGZsb3dcclxuICAgICAgLy8gaWYgdGhhdCdzIHRoZSBjYXNlLlxyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlRGV2TW9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlJhbGx5LmluaXRpYWxpemUgLSBFeGVjdXRpbmcgaW4gZGV2ZWxvcGVyIG1vZGUuXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgQ29yZSBBZGQtb24gd2FzIG5vdCBmb3VuZCBhbmQgd2UncmUgbm90IGluIGRldmVsb3BlclxyXG4gICAgICAvLyBtb2RlLlxyXG4gICAgICBhd2FpdCBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBTSUdOVVBfVVJMIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWhhc1JhbGx5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbGx5LmluaXRpYWxpemUgLSBJbml0aWFsaXphdGlvbiBmYWlsZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgaW5jb21pbmcgbWVzc2FnZXMgZnJvbSB0aGUgQ29yZSBhZGRvbi5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcihcclxuICAgICAgKG0sIHMpID0+IHRoaXMuX2hhbmRsZUV4dGVybmFsTWVzc2FnZShtLCBzKSk7XHJcblxyXG4gICAgLy8gV2Ugd2VudCB0aHJvdWdoIHRoZSB3aG9sZSBpbml0IHByb2Nlc3MsIGl0J3Mgbm93IHNhZmVcclxuICAgIC8vIHRvIHVzZSB0aGUgUmFsbHkgcHVibGljIEFQSXMuXHJcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgQ29yZSBhZGRvbiBpcyBpbnN0YWxsZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gcmVzb2x2ZWQgaWYgdGhlIGNvcmUgYWRkb24gd2FzIGZvdW5kIGFuZFxyXG4gICAqICAgICAgICAgIGNvbW11bmljYXRpb24gd2FzIHN1Y2Nlc3NmdWwsIHJlamVjdGVkIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhc3luYyBfY2hlY2tSYWxseUNvcmUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogXCJjb3JlLWNoZWNrXCIsXHJcbiAgICAgICAgZGF0YToge31cclxuICAgICAgfVxyXG4gICAgICBsZXQgcmVzcG9uc2UgPVxyXG4gICAgICAgIGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShDT1JFX0FERE9OX0lELCBtc2csIHt9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2VcclxuICAgICAgICAgIHx8IHJlc3BvbnNlLnR5cGUgIT09IFwiY29yZS1jaGVjay1yZXNwb25zZVwiXHJcbiAgICAgICAgICB8fCByZXNwb25zZS5kYXRhLmVucm9sbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSYWxseS5fY2hlY2tSYWxseUNvcmUgLSB1bmV4cGVjdGVkIHJlc3BvbnNlIHJldHVybmVkICR7cmVzcG9uc2V9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbGx5Ll9jaGVja1JhbGx5Q29yZSAtIGNvcmUgYWRkb24gbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBtZXNzYWdlcyBjb21pbmcgaW4gZnJvbSBleHRlcm5hbCBhZGRvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVxyXG4gICAqICAgICAgICBUaGUgcGF5bG9hZCBvZiB0aGUgbWVzc2FnZS5cclxuICAgKiBAcGFyYW0ge3J1bnRpbWUuTWVzc2FnZVNlbmRlcn0gc2VuZGVyXHJcbiAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9ucyBhYm91dCB3aG8gc2VudFxyXG4gICAqICAgICAgICB0aGUgbWVzc2FnZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIHJlc3BvbnNlIHRvIHRoZSByZWNlaXZlZCBtZXNzYWdlLlxyXG4gICAqICAgICAgICAgIEl0IGNhbiBiZSByZXNvbHZlZCB3aXRoIGEgdmFsdWUgdGhhdCBpcyBzZW50IHRvIHRoZVxyXG4gICAqICAgICAgICAgIGBzZW5kZXJgLlxyXG4gICAqL1xyXG4gIF9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyKSB7XHJcbiAgICAvLyBXZSBvbmx5IGV4cGVjdCBtZXNzYWdlcyBjb21pbmcgZnJvbSB0aGUgY29yZSBhZGRvbi5cclxuICAgIGlmIChzZW5kZXIuaWQgIT0gQ09SRV9BRERPTl9JRCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgbmV3IEVycm9yKGBSYWxseS5faGFuZGxlRXh0ZXJuYWxNZXNzYWdlIC0gdW5leHBlY3RlZCBzZW5kZXIgJHtzZW5kZXIuaWR9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJ1bmluc3RhbGxcIjpcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5tYW5hZ2VtZW50LnVuaW5zdGFsbFNlbGYoe3Nob3dDb25maXJtRGlhbG9nOiBmYWxzZX0pO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgIG5ldyBFcnJvcihgUmFsbHkuX2hhbmRsZUV4dGVybmFsTWVzc2FnZSAtIHVuZXhwZWN0ZWQgbWVzc2FnZSB0eXBlICR7bWVzc2FnZS50eXBlfWApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBlbmNyeXB0aW9uIGtleXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5SWRcclxuICAgKiAgICAgICAgVGhlIGlkIG9mIHRoZSBrZXkgdXNlZCB0byBlbmNyeXB0IG91dGdvaW5nIGRhdGEuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGtleVxyXG4gICAqICAgICAgICBUaGUgSlNPTiBXZWIgS2V5IChKV0spIHVzZWQgdG8gZW5jcnlwdCB0aGUgb3V0Z29pbmcgZGF0YS5cclxuICAgKiAgICAgICAgU2VlIHRoZSBSRkMgNzUxNyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxN1xyXG4gICAqICAgICAgICBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbi4gRm9yIGV4YW1wbGU6XHJcbiAgICpcclxuICAgKiAgICAgICAge1xyXG4gICAqICAgICAgICAgIFwia3R5XCI6XCJFQ1wiLFxyXG4gICAqICAgICAgICAgIFwiY3J2XCI6XCJQLTI1NlwiLFxyXG4gICAqICAgICAgICAgIFwieFwiOlwiZjgzT0ozRDJ4RjFCZzh2dWI5dExlMWdITXpWNzZlOFR1czl1UEh2UlZFVVwiLFxyXG4gICAqICAgICAgICAgIFwieVwiOlwieF9GRXpSdTltMzZITE5fdHVlNjU5TE5wWFc2cEN5U3Rpa1lqS0lXSTVhMFwiLFxyXG4gICAqICAgICAgICAgIFwia2lkXCI6XCJQdWJsaWMga2V5IHVzZWQgaW4gSldTIHNwZWMgQXBwZW5kaXggQS4zIGV4YW1wbGVcIlxyXG4gICAqICAgICAgICB9XHJcbiAgICpcclxuICAgKiBAdGhyb3dzIHtFcnJvcn0gaWYgZWl0aGVyIHRoZSBrZXkgaWQgb3IgdGhlIEpXSyBrZXkgb2JqZWN0IGFyZVxyXG4gICAqICAgICAgICAgaW52YWxpZC5cclxuICAgKi9cclxuICBfdmFsaWRhdGVFbmNyeXB0aW9uS2V5KGtleUlkLCBrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yga2V5SWQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSYWxseS5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5IC0gSW52YWxpZCBlbmNyeXB0aW9uIGtleSBpZCAke2tleUlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmFsbHkuX3ZhbGlkYXRlRW5jcnlwdGlvbktleSAtIEludmFsaWQgZW5jcnlwdGlvbiBrZXkgJHtrZXl9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJtaXQgYW4gZW5jcnlwdGVkIHBpbmcgdGhyb3VnaCB0aGUgUmFsbHkgQ29yZSBhZGRvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXlsb2FkVHlwZVxyXG4gICAqICAgICAgICBUaGUgdHlwZSBvZiB0aGUgZW5jcnlwdGVkIHBheWxvYWQuIFRoaXMgd2lsbCBkZWZpbmUgdGhlXHJcbiAgICogICAgICAgIGBzY2hlbWFOYW1lYCBvZiB0aGUgcGluZy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxyXG4gICAqICAgICAgICBBIEpTT04tc2VyaWFsaXphYmxlIHBheWxvYWQgdG8gYmUgc2VudCB3aXRoIHRoZSBwaW5nLlxyXG4gICAqL1xyXG4gIGFzeW5jIHNlbmRQaW5nKHBheWxvYWRUeXBlLCBwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSYWxseS5zZW5kUGluZyAtIE5vdCBpbml0aWFsemVkLCBjYWxsIGBpbml0aWFsaXplKClgXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBpbiBkZXZlbG9wZXIgbW9kZSwgZHVtcCB0aGUgcGF5bG9hZCB0byB0aGUgY29uc29sZS5cclxuICAgIGlmICh0aGlzLl9lbmFibGVEZXZNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBSYWxseS5zZW5kUGluZyAtIERldmVsb3BlciBtb2RlLiAke3BheWxvYWRUeXBlfSB3aWxsIG5vdCBiZSBzdWJtaXR0ZWRgLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdyYXAgZXZlcnl0aGluZyBpbiBhIHRyeSBibG9jaywgYXMgd2UgZG9uJ3QgcmVhbGx5IHdhbnRcclxuICAgIC8vIGRhdGEgY29sbGVjdGlvbiB0byBiZSB0aGUgY3VscHJpdCBvZiBhIGJ1ZyBoaW5kZXJpbmcgdXNlclxyXG4gICAgLy8gZXhwZXJpZW5jZS5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgc3R1ZHkgY2FuIGJlIHVzZWQgYXMgdGhlXHJcbiAgICAgIC8vIG5hbWVzcGFjZSwgaW4gb3JkZXIgdG8gbWFrZSBzdXJlIGRhdGEgaXMgcm91dGVkIHRvIHRoZVxyXG4gICAgICAvLyBwcm9wZXIgYW5hbHlzaXMgc2FuZGJveC5cclxuICAgICAgY29uc3Qgc3R1ZHlOYW1lID0gYnJvd3Nlci5ydW50aW1lLmlkO1xyXG5cclxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBtYXkgYmUgbWlzdGFrZW5seSBjYWxsZWQgd2hpbGUgaW5pdCBoYXMgbm90XHJcbiAgICAgIC8vIGZpbmlzaGVkLiBMZXQncyBiZSBzYWZlIGFuZCBjaGVjayBmb3Iga2V5IHZhbGlkaXR5IGFnYWluLlxyXG4gICAgICB0aGlzLl92YWxpZGF0ZUVuY3J5cHRpb25LZXkodGhpcy5fa2V5SWQsIHRoaXMuX2tleSk7XHJcblxyXG4gICAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZWxlbWV0cnktcGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBheWxvYWRUeXBlOiBwYXlsb2FkVHlwZSxcclxuICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgICBuYW1lc3BhY2U6IHN0dWR5TmFtZSxcclxuICAgICAgICAgIGtleUlkOiB0aGlzLl9rZXlJZCxcclxuICAgICAgICAgIGtleTogdGhpcy5fa2V5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShDT1JFX0FERE9OX0lELCBtc2csIHt9KTtcclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFJhbGx5LnNlbmRQaW5nIC0gZXJyb3Igd2hpbGUgc2VuZGluZyAke3BheWxvYWRUeXBlfWAsIGV4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyB1dGlsaXRpZXMgZm9yIGxvZ2dpbmcgZGVidWdnaW5nIGV2ZW50cy5cbiAqIFRoZSBtb2R1bGUgY3VycmVudGx5IGp1c3Qgb3V0cHV0cyBldmVudHMgd2l0aCBgY29uc29sZS5kZWJ1Z2AuXG4gKiBJdCBzaG91bGQgZXZlbnR1YWxseSBzdXBwb3J0IGRlYnVnZ2luZyB2aWEgVGVsZW1ldHJ5LlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLkRlYnVnZ2luZ1xuICovXG5cbi8qKlxuICogV2hldGhlciB0byBsb2cgZGVidWdnaW5nIGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBkZWJ1ZyA9IGZhbHNlO1xuXG4vKiogRW5hYmxlIGxvZ2dpbmcgZm9yIGRlYnVnZ2luZyBldmVudHMuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRGVidWdnaW5nKCkge1xuICAgIGRlYnVnID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dpbmcgbG9nZ2VyLCBhIGZ1bmN0aW9uIHRoYXQgbG9ncyBkZWJ1Z2dpbmcgZXZlbnRzIChhcyBzdHJpbmdzKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVOYW1lIC0gQSBuYW1lIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgbW9kdWxlXG4gKiBnZW5lcmF0aW5nIHRoZSBkZWJ1Z2dpbmcgZXZlbnRzLlxuICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZyl9IC0gQSBkZWJ1Z2dpbmcgbG9nZ2VyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVidWdnaW5nTG9nKG1vZHVsZU5hbWUpIHtcbiAgICByZXR1cm4gKCh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJXZWJTY2llbmNlLlwiICsgbW9kdWxlTmFtZSArIFwiOiBcIiArIHRleHQpO1xuICAgIH0pO1xufSIsIi8qIVxuICAgIGxvY2FsRm9yYWdlIC0tIE9mZmxpbmUgU3RvcmFnZSwgSW1wcm92ZWRcbiAgICBWZXJzaW9uIDEuOS4wXG4gICAgaHR0cHM6Ly9sb2NhbGZvcmFnZS5naXRodWIuaW8vbG9jYWxGb3JhZ2VcbiAgICAoYykgMjAxMy0yMDE3IE1vemlsbGEsIEFwYWNoZSBMaWNlbnNlIDIuMFxuKi9cbmV4cG9ydCB2YXIgbG9jYWxmb3JhZ2U7XG4oZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5sb2NhbGZvcmFnZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyAoZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLCBmKX12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbnZhciBNdXRhdGlvbiA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG52YXIgc2NoZWR1bGVEcmFpbjtcblxue1xuICBpZiAoTXV0YXRpb24pIHtcbiAgICB2YXIgY2FsbGVkID0gMDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb24obmV4dFRpY2spO1xuICAgIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5kYXRhID0gKGNhbGxlZCA9ICsrY2FsbGVkICUgMik7XG4gICAgfTtcbiAgfSBlbHNlIGlmICghZ2xvYmFsLnNldEltbWVkaWF0ZSAmJiB0eXBlb2YgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjaGFubmVsID0gbmV3IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCgpO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbmV4dFRpY2s7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgnZG9jdW1lbnQnIGluIGdsb2JhbCAmJiAnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5leHRUaWNrKCk7XG5cbiAgICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgc2NyaXB0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRFbCk7XG4gICAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICAgIH07XG4gICAgICBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KG5leHRUaWNrLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciBkcmFpbmluZztcbnZhciBxdWV1ZSA9IFtdO1xuLy9uYW1lZCBuZXh0VGljayBmb3IgbGVzcyBjb25mdXNpbmcgc3RhY2sgdHJhY2VzXG5mdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgaSwgb2xkUXVldWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChsZW4pIHtcbiAgICBvbGRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgIG9sZFF1ZXVlW2ldKCk7XG4gICAgfVxuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltbWVkaWF0ZTtcbmZ1bmN0aW9uIGltbWVkaWF0ZSh0YXNrKSB7XG4gIGlmIChxdWV1ZS5wdXNoKHRhc2spID09PSAxICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlRHJhaW4oKTtcbiAgfVxufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGltbWVkaWF0ZSA9IF9kZXJlcV8oMSk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBJTlRFUk5BTCgpIHt9XG5cbnZhciBoYW5kbGVycyA9IHt9O1xuXG52YXIgUkVKRUNURUQgPSBbJ1JFSkVDVEVEJ107XG52YXIgRlVMRklMTEVEID0gWydGVUxGSUxMRUQnXTtcbnZhciBQRU5ESU5HID0gWydQRU5ESU5HJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdGhpcy5zdGF0ZSA9IFBFTkRJTkc7XG4gIHRoaXMucXVldWUgPSBbXTtcbiAgdGhpcy5vdXRjb21lID0gdm9pZCAwO1xuICBpZiAocmVzb2x2ZXIgIT09IElOVEVSTkFMKSB7XG4gICAgc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHRoaXMsIHJlc29sdmVyKTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEIHx8XG4gICAgdHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKElOVEVSTkFMKTtcbiAgaWYgKHRoaXMuc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICB2YXIgcmVzb2x2ZXIgPSB0aGlzLnN0YXRlID09PSBGVUxGSUxMRUQgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG4gICAgdW53cmFwKHByb21pc2UsIHJlc29sdmVyLCB0aGlzLm91dGNvbWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucXVldWUucHVzaChuZXcgUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5mdW5jdGlvbiBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSBvbkZ1bGZpbGxlZDtcbiAgICB0aGlzLmNhbGxGdWxmaWxsZWQgPSB0aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZDtcbiAgfVxuICBpZiAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSBvblJlamVjdGVkO1xuICAgIHRoaXMuY2FsbFJlamVjdGVkID0gdGhpcy5vdGhlckNhbGxSZWplY3RlZDtcbiAgfVxufVxuUXVldWVJdGVtLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGhhbmRsZXJzLnJlc29sdmUodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdW53cmFwKHRoaXMucHJvbWlzZSwgdGhpcy5vbkZ1bGZpbGxlZCwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGhhbmRsZXJzLnJlamVjdCh0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25SZWplY3RlZCwgdmFsdWUpO1xufTtcblxuZnVuY3Rpb24gdW53cmFwKHByb21pc2UsIGZ1bmMsIHZhbHVlKSB7XG4gIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldHVyblZhbHVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gcHJvbWlzZSkge1xuICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCByZXNvbHZlIHByb21pc2Ugd2l0aCBpdHNlbGYnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgcmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmhhbmRsZXJzLnJlc29sdmUgPSBmdW5jdGlvbiAoc2VsZiwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKGdldFRoZW4sIHZhbHVlKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHNlbGYsIHJlc3VsdC52YWx1ZSk7XG4gIH1cbiAgdmFyIHRoZW5hYmxlID0gcmVzdWx0LnZhbHVlO1xuXG4gIGlmICh0aGVuYWJsZSkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICBzZWxmLm91dGNvbWUgPSB2YWx1ZTtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBzZWxmLnF1ZXVlW2ldLmNhbGxGdWxmaWxsZWQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5oYW5kbGVycy5yZWplY3QgPSBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcbiAgc2VsZi5zdGF0ZSA9IFJFSkVDVEVEO1xuICBzZWxmLm91dGNvbWUgPSBlcnJvcjtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIGxlbiA9IHNlbGYucXVldWUubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgc2VsZi5xdWV1ZVtpXS5jYWxsUmVqZWN0ZWQoZXJyb3IpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufTtcblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgLy8gTWFrZSBzdXJlIHdlIG9ubHkgYWNjZXNzIHRoZSBhY2Nlc3NvciBvbmNlIGFzIHJlcXVpcmVkIGJ5IHRoZSBzcGVjXG4gIHZhciB0aGVuID0gb2JqICYmIG9iai50aGVuO1xuICBpZiAob2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcHB5VGhlbigpIHtcbiAgICAgIHRoZW4uYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKSB7XG4gIC8vIEVpdGhlciBmdWxmaWxsLCByZWplY3Qgb3IgcmVqZWN0IHdpdGggZXJyb3JcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBvbkVycm9yKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlamVjdChzZWxmLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN1Y2Nlc3ModmFsdWUpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgaGFuZGxlcnMucmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlUb1Vud3JhcCgpIHtcbiAgICB0aGVuYWJsZShvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRyeVRvVW53cmFwKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBvbkVycm9yKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5Q2F0Y2goZnVuYywgdmFsdWUpIHtcbiAgdmFyIG91dCA9IHt9O1xuICB0cnkge1xuICAgIG91dC52YWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgIG91dC5zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBvdXQuc3RhdHVzID0gJ2Vycm9yJztcbiAgICBvdXQudmFsdWUgPSBlO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cblByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG5mdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIHRoaXMpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGhhbmRsZXJzLnJlc29sdmUobmV3IHRoaXMoSU5URVJOQUwpLCB2YWx1ZSk7XG59XG5cblByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcbiAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCByZWFzb24pO1xufVxuXG5Qcm9taXNlLmFsbCA9IGFsbDtcbmZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcmFibGUpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYW4gYXJyYXknKSk7XG4gIH1cblxuICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XG4gIH1cblxuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciByZXNvbHZlZCA9IDA7XG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBhbGxSZXNvbHZlcihpdGVyYWJsZVtpXSwgaSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIGFsbFJlc29sdmVyKHZhbHVlLCBpKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmVGcm9tQWxsLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZyb21BbGwob3V0VmFsdWUpIHtcbiAgICAgIHZhbHVlc1tpXSA9IG91dFZhbHVlO1xuICAgICAgaWYgKCsrcmVzb2x2ZWQgPT09IGxlbiAmJiAhY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUHJvbWlzZS5yYWNlID0gcmFjZTtcbmZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIGkgPSAtMTtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHJlc29sdmVyKGl0ZXJhYmxlW2ldKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbiAgZnVuY3Rpb24gcmVzb2x2ZXIodmFsdWUpIHtcbiAgICBzZWxmLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxufSx7XCIxXCI6MX1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xuaWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICBnbG9iYWwuUHJvbWlzZSA9IF9kZXJlcV8oMik7XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCIyXCI6Mn1dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldElEQigpIHtcbiAgICAvKiBnbG9iYWwgaW5kZXhlZERCLHdlYmtpdEluZGV4ZWREQixtb3pJbmRleGVkREIsT0luZGV4ZWREQixtc0luZGV4ZWREQiAqL1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdlYmtpdEluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWJraXRJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3pJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbW96SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgT0luZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBPSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbXNJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbXNJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbnZhciBpZGIgPSBnZXRJREIoKTtcblxuZnVuY3Rpb24gaXNJbmRleGVkREJWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBJbml0aWFsaXplIEluZGV4ZWREQjsgZmFsbCBiYWNrIHRvIHZlbmRvci1wcmVmaXhlZCB2ZXJzaW9uc1xuICAgICAgICAvLyBpZiBuZWVkZWQuXG4gICAgICAgIGlmICghaWRiIHx8ICFpZGIub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIG1pbWljIFBvdWNoREIgaGVyZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgdGVzdCBmb3Igb3BlbkRhdGFiYXNlIGJlY2F1c2UgSUUgTW9iaWxlIGlkZW50aWZpZXMgaXRzZWxmXG4gICAgICAgIC8vIGFzIFNhZmFyaS4gT2ggdGhlIGx1bHouLi5cbiAgICAgICAgdmFyIGlzU2FmYXJpID0gdHlwZW9mIG9wZW5EYXRhYmFzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgLyhTYWZhcml8aVBob25lfGlQYWR8aVBvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9CbGFja0JlcnJ5Ly50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5cbiAgICAgICAgdmFyIGhhc0ZldGNoID0gdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nICYmIGZldGNoLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlJykgIT09IC0xO1xuXG4gICAgICAgIC8vIFNhZmFyaSA8MTAuMSBkb2VzIG5vdCBtZWV0IG91ciByZXF1aXJlbWVudHMgZm9yIElEQiBzdXBwb3J0XG4gICAgICAgIC8vIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvaXNzdWVzLzU1NzIpLlxuICAgICAgICAvLyBTYWZhcmkgMTAuMSBzaGlwcGVkIHdpdGggZmV0Y2gsIHdlIGNhbiB1c2UgdGhhdCB0byBkZXRlY3QgaXQuXG4gICAgICAgIC8vIE5vdGU6IHRoaXMgY3JlYXRlcyBpc3N1ZXMgd2l0aCBgd2luZG93LmZldGNoYCBwb2x5ZmlsbHMgYW5kXG4gICAgICAgIC8vIG92ZXJyaWRlczsgc2VlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UvaXNzdWVzLzg1NlxuICAgICAgICByZXR1cm4gKCFpc1NhZmFyaSB8fCBoYXNGZXRjaCkgJiYgdHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgLy8gc29tZSBvdXRkYXRlZCBpbXBsZW1lbnRhdGlvbnMgb2YgSURCIHRoYXQgYXBwZWFyIG9uIFNhbXN1bmdcbiAgICAgICAgLy8gYW5kIEhUQyBBbmRyb2lkIGRldmljZXMgPDQuNCBhcmUgbWlzc2luZyBJREJLZXlSYW5nZVxuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8xMjhcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMjcyXG4gICAgICAgIHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbi8vIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBuYXRpdmUgQmxvYiBjb25zdHJ1Y3Rvci4gKGkuZS5cbi8vIG9sZCBRdFdlYktpdCB2ZXJzaW9ucywgYXQgbGVhc3QpLlxuZnVuY3Rpb24gY3JlYXRlQmxvYihwYXJ0cywgcHJvcGVydGllcykge1xuICAgIC8qIGdsb2JhbCBCbG9iQnVpbGRlcixNU0Jsb2JCdWlsZGVyLE1vekJsb2JCdWlsZGVyLFdlYktpdEJsb2JCdWlsZGVyICovXG4gICAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IocGFydHMsIHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOiB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDogdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogV2ViS2l0QmxvYkJ1aWxkZXI7XG4gICAgICAgIHZhciBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQocGFydHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IocHJvcGVydGllcy50eXBlKTtcbiAgICB9XG59XG5cbi8vIFRoaXMgaXMgQ29tbW9uSlMgYmVjYXVzZSBsaWUgaXMgYW4gZXh0ZXJuYWwgZGVwZW5kZW5jeSwgc28gUm9sbHVwXG4vLyBjYW4ganVzdCBpZ25vcmUgaXQuXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gSW4gdGhlIFwibm9wcm9taXNlc1wiIGJ1aWxkIHRoaXMgd2lsbCBqdXN0IHRocm93IGlmIHlvdSBkb24ndCBoYXZlXG4gICAgLy8gYSBnbG9iYWwgcHJvbWlzZSBvYmplY3QsIGJ1dCBpdCB3b3VsZCB0aHJvdyBhbnl3YXkgbGF0ZXIuXG4gICAgX2RlcmVxXygzKTtcbn1cbnZhciBQcm9taXNlJDEgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlcnJvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2VbXCJjYXRjaFwiXShlcnJvckNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAgICAvLyBDYXN0IHRoZSBrZXkgdG8gYSBzdHJpbmcsIGFzIHRoYXQncyBhbGwgd2UgY2FuIHNldCBhcyBhIGtleS5cbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGtleSArICcgdXNlZCBhcyBhIGtleSwgYnV0IGl0IGlzIG5vdCBhIHN0cmluZy4nKTtcbiAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FsbGJhY2soKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgfVxufVxuXG4vLyBTb21lIGNvZGUgb3JpZ2luYWxseSBmcm9tIGFzeW5jX3N0b3JhZ2UuanMgaW5cbi8vIFtHYWlhXShodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS1iMmcvZ2FpYSkuXG5cbnZhciBERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFID0gJ2xvY2FsLWZvcmFnZS1kZXRlY3QtYmxvYi1zdXBwb3J0JztcbnZhciBzdXBwb3J0c0Jsb2JzID0gdm9pZCAwO1xudmFyIGRiQ29udGV4dHMgPSB7fTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8vIFRyYW5zYWN0aW9uIE1vZGVzXG52YXIgUkVBRF9PTkxZID0gJ3JlYWRvbmx5JztcbnZhciBSRUFEX1dSSVRFID0gJ3JlYWR3cml0ZSc7XG5cbi8vIFRyYW5zZm9ybSBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYXJyYXkgYnVmZmVyLCBiZWNhdXNlIG90aGVyd2lzZVxuLy8gd2VpcmQgc3R1ZmYgaGFwcGVucyB3aGVuIHlvdSB0cnkgdG8gd29yayB3aXRoIHRoZSBiaW5hcnkgc3RyaW5nIGRpcmVjdGx5LlxuLy8gSXQgaXMga25vd24uXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5Njc2NDcvIChjb250aW51ZXMgb24gbmV4dCBsaW5lKVxuLy8gZW5jb2RlLWRlY29kZS1pbWFnZS13aXRoLWJhc2U2NC1icmVha3MtaW1hZ2UgKDIwMTMtMDQtMjEpXG5mdW5jdGlvbiBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihiaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYmluLmxlbmd0aDtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cblxuLy9cbi8vIEJsb2JzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGFsbCB2ZXJzaW9ucyBvZiBJbmRleGVkREIsIG5vdGFibHlcbi8vIENocm9tZSA8MzcgYW5kIEFuZHJvaWQgPDUuIEluIHRob3NlIHZlcnNpb25zLCBzdG9yaW5nIGEgYmxvYiB3aWxsIHRocm93LlxuLy9cbi8vIFZhcmlvdXMgb3RoZXIgYmxvYiBidWdzIGV4aXN0IGluIENocm9tZSB2MzctNDIgKGluY2x1c2l2ZSkuXG4vLyBEZXRlY3RpbmcgdGhlbSBpcyBleHBlbnNpdmUgYW5kIGNvbmZ1c2luZyB0byB1c2VycywgYW5kIENocm9tZSAzNy00MlxuLy8gaXMgYXQgdmVyeSBsb3cgdXNhZ2Ugd29ybGR3aWRlLCBzbyB3ZSBkbyBhIGhhY2t5IHVzZXJBZ2VudCBjaGVjayBpbnN0ZWFkLlxuLy9cbi8vIGNvbnRlbnQtdHlwZSBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00MDgxMjBcbi8vIDQwNCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc5MTZcbi8vIEZpbGVSZWFkZXIgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3ODM2XG4vL1xuLy8gQ29kZSBib3Jyb3dlZCBmcm9tIFBvdWNoREIuIFNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvbm9kZV9tb2R1bGVzL3BvdWNoZGItYWRhcHRlci1pZGIvc3JjL2Jsb2JTdXBwb3J0LmpzXG4vL1xuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgdHhuID0gaWRiLnRyYW5zYWN0aW9uKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUsIFJFQURfV1JJVEUpO1xuICAgICAgICB2YXIgYmxvYiA9IGNyZWF0ZUJsb2IoWycnXSk7XG4gICAgICAgIHR4bi5vYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKS5wdXQoYmxvYiwgJ2tleScpO1xuXG4gICAgICAgIHR4bi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB0cmFuc2FjdGlvbiBhYm9ydHMgbm93IGl0cyBkdWUgdG8gbm90IGJlaW5nIGFibGUgdG9cbiAgICAgICAgICAgIC8vIHdyaXRlIHRvIHRoZSBkYXRhYmFzZSwgbGlrZWx5IGR1ZSB0byB0aGUgZGlzayBiZWluZyBmdWxsXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHhuLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZENocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRFZGdlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLy8pO1xuICAgICAgICAgICAgLy8gTVMgRWRnZSBwcmV0ZW5kcyB0byBiZSBDaHJvbWUgNDI6XG4gICAgICAgICAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2hoODY5MzAxJTI4dj12cy44NSUyOS5hc3B4XG4gICAgICAgICAgICByZXNvbHZlKG1hdGNoZWRFZGdlIHx8ICFtYXRjaGVkQ2hyb21lIHx8IHBhcnNlSW50KG1hdGNoZWRDaHJvbWVbMV0sIDEwKSA+PSA0Myk7XG4gICAgICAgIH07XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZXJyb3IsIHNvIGFzc3VtZSB1bnN1cHBvcnRlZFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydChpZGIpIHtcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQmxvYnMgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoc3VwcG9ydHNCbG9icyk7XG4gICAgfVxuICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydFdpdGhvdXRDYWNoaW5nKGlkYikudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc3VwcG9ydHNCbG9icyA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNCbG9icztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2RlZmVyUmVhZGluZXNzKGRiSW5mbykge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIENyZWF0ZSBhIGRlZmVycmVkIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZGF0YWJhc2Ugb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IHt9O1xuXG4gICAgZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgLy8gRW5xdWV1ZSB0aGUgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucHVzaChkZWZlcnJlZE9wZXJhdGlvbik7XG5cbiAgICAvLyBDaGFpbiBpdHMgcHJvbWlzZSB0byB0aGUgZGF0YWJhc2UgcmVhZGluZXNzLlxuICAgIGlmICghZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgZGJDb250ZXh0LmRiUmVhZHkgPSBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGJDb250ZXh0LmRiUmVhZHkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfYWR2YW5jZVJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBEZXF1ZXVlIGEgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucG9wKCk7XG5cbiAgICAvLyBSZXNvbHZlIGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVqZWN0IGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdChlcnIpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdXBncmFkZU5lZWRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSB8fCBjcmVhdGVEYkNvbnRleHQoKTtcblxuICAgICAgICBpZiAoZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pO1xuICAgICAgICAgICAgICAgIGRiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYkluZm8uZGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRiQXJncyA9IFtkYkluZm8ubmFtZV07XG5cbiAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIGRiQXJncy5wdXNoKGRiSW5mby52ZXJzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGVucmVxID0gaWRiLm9wZW4uYXBwbHkoaWRiLCBkYkFyZ3MpO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRiID0gb3BlbnJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9sZFZlcnNpb24gPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgd2hlbiBzdXBwb3J0IGZvciBibG9iIHNoaW1zIHdhcyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ0NvbnN0cmFpbnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRhdGFiYXNlIFwiJyArIGRiSW5mby5uYW1lICsgJ1wiJyArICcgaGFzIGJlZW4gdXBncmFkZWQgZnJvbSB2ZXJzaW9uICcgKyBlLm9sZFZlcnNpb24gKyAnIHRvIHZlcnNpb24gJyArIGUubmV3VmVyc2lvbiArICcsIGJ1dCB0aGUgc3RvcmFnZSBcIicgKyBkYkluZm8uc3RvcmVOYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBkZWZhdWx0VmVyc2lvbikge1xuICAgIGlmICghZGJJbmZvLmRiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpc05ld1N0b3JlID0gIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgIHZhciBpc0Rvd25ncmFkZSA9IGRiSW5mby52ZXJzaW9uIDwgZGJJbmZvLmRiLnZlcnNpb247XG4gICAgdmFyIGlzVXBncmFkZSA9IGRiSW5mby52ZXJzaW9uID4gZGJJbmZvLmRiLnZlcnNpb247XG5cbiAgICBpZiAoaXNEb3duZ3JhZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gaXMgbm90IHRoZSBkZWZhdWx0IG9uZVxuICAgICAgICAvLyB0aGVuIHdhcm4gZm9yIGltcG9zc2libGUgZG93bmdyYWRlLlxuICAgICAgICBpZiAoZGJJbmZvLnZlcnNpb24gIT09IGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyBcIiBjYW4ndCBiZSBkb3duZ3JhZGVkIGZyb20gdmVyc2lvbiBcIiArIGRiSW5mby5kYi52ZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBkYkluZm8udmVyc2lvbiArICcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxpZ24gdGhlIHZlcnNpb25zIHRvIHByZXZlbnQgZXJyb3JzLlxuICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmIChpc1VwZ3JhZGUgfHwgaXNOZXdTdG9yZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgbmV3IHRoZW4gaW5jcmVtZW50IHRoZSB2ZXJzaW9uIChpZiBuZWVkZWQpLlxuICAgICAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhbiBcInVwZ3JhZGVuZWVkZWRcIiBldmVudCB3aGljaCBpcyByZXF1aXJlZFxuICAgICAgICAvLyBmb3IgY3JlYXRpbmcgYSBzdG9yZS5cbiAgICAgICAgaWYgKGlzTmV3U3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbmNWZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgaWYgKGluY1ZlcnNpb24gPiBkYkluZm8udmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gaW5jVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZW5jb2RlIGEgYmxvYiBmb3IgaW5kZXhlZGRiIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0IGJsb2JzXG5mdW5jdGlvbiBfZW5jb2RlQmxvYihibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJ0b2EoZS50YXJnZXQucmVzdWx0IHx8ICcnKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIF9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlNjQsXG4gICAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iKTtcbiAgICB9KTtcbn1cblxuLy8gZGVjb2RlIGFuIGVuY29kZWQgYmxvYlxuZnVuY3Rpb24gX2RlY29kZUJsb2IoZW5jb2RlZEJsb2IpIHtcbiAgICB2YXIgYXJyYXlCdWZmID0gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihlbmNvZGVkQmxvYi5kYXRhKSk7XG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2FycmF5QnVmZl0sIHsgdHlwZTogZW5jb2RlZEJsb2IudHlwZSB9KTtcbn1cblxuLy8gaXMgdGhpcyBvbmUgb2Ygb3VyIGZhbmN5IGVuY29kZWQgYmxvYnM/XG5mdW5jdGlvbiBfaXNFbmNvZGVkQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I7XG59XG5cbi8vIFNwZWNpYWxpemUgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIGJ5IG1ha2luZyBpdCBkZXBlbmRlbnRcbi8vIG9uIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbnMuIFRodXMsIHRoZSBkcml2ZXIgd2lsbCBiZSBhY3R1YWxseVxuLy8gcmVhZHkgd2hlbiBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQgKGRlZmF1bHQpICphbmQqIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4vLyBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZSAoaW5pdGlhdGVkIGJ5IHNvbWUgb3RoZXIgaW5zdGFuY2VzKS5cbmZ1bmN0aW9uIF9mdWxseVJlYWR5KGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLl9pbml0UmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbc2VsZi5fZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmIChkYkNvbnRleHQgJiYgZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkNvbnRleHQuZGJSZWFkeTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBUcnkgdG8gZXN0YWJsaXNoIGEgbmV3IGRiIGNvbm5lY3Rpb24gdG8gcmVwbGFjZSB0aGVcbi8vIGN1cnJlbnQgb25lIHdoaWNoIGlzIGJyb2tlbiAoaS5lLiBleHBlcmllbmNpbmdcbi8vIEludmFsaWRTdGF0ZUVycm9yIHdoaWxlIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24pLlxuZnVuY3Rpb24gX3RyeVJlY29ubmVjdChkYkluZm8pIHtcbiAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcblxuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICBpZiAoZm9yYWdlLl9kYkluZm8uZGIpIHtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGJJbmZvLmRiID0gbnVsbDtcblxuICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbykpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXRlc3QgZGIgcmVmZXJlbmNlXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGRiIHdhcyB1cGdyYWRlZFxuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgfVxuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuXG4vLyBGRiBkb2Vzbid0IGxpa2UgUHJvbWlzZXMgKG1pY3JvLXRhc2tzKSBhbmQgSUREQiBzdG9yZSBvcGVyYXRpb25zLFxuLy8gc28gd2UgaGF2ZSB0byBkbyBpdCB3aXRoIGNhbGxiYWNrc1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcykge1xuICAgIGlmIChyZXRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0cmllcyA9IDE7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHR4ID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsIG1vZGUpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCB0eCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChyZXRyaWVzID4gMCAmJiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJyB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJyAmJiAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSkgJiYgZGJJbmZvLnZlcnNpb24gPD0gZGJJbmZvLmRiLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGRiIHZlcnNpb24sIHRvIGNyZWF0ZSB0aGUgbmV3IE9iamVjdFN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYkluZm8uZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RyeVJlY29ubmVjdChkYkluZm8pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVtcImNhdGNoXCJdKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUnVubmluZyBsb2NhbEZvcmFnZXMgc2hhcmluZyBhIGRhdGFiYXNlLlxuICAgICAgICBmb3JhZ2VzOiBbXSxcbiAgICAgICAgLy8gU2hhcmVkIGRhdGFiYXNlLlxuICAgICAgICBkYjogbnVsbCxcbiAgICAgICAgLy8gRGF0YWJhc2UgcmVhZGluZXNzIChwcm9taXNlKS5cbiAgICAgICAgZGJSZWFkeTogbnVsbCxcbiAgICAgICAgLy8gRGVmZXJyZWQgb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uczogW11cbiAgICB9O1xufVxuXG4vLyBPcGVuIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIGRhdGFiYXNlO1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIC4uLm9yIGNyZWF0ZSBhIG5ldyBjb250ZXh0LlxuICAgIGlmICghZGJDb250ZXh0KSB7XG4gICAgICAgIGRiQ29udGV4dCA9IGNyZWF0ZURiQ29udGV4dCgpO1xuICAgICAgICAvLyBSZWdpc3RlciB0aGUgbmV3IGNvbnRleHQgaW4gdGhlIGdsb2JhbCBjb250YWluZXIuXG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGl0c2VsZiBhcyBhIHJ1bm5pbmcgbG9jYWxGb3JhZ2UgaW4gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAgICBkYkNvbnRleHQuZm9yYWdlcy5wdXNoKHNlbGYpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gd2l0aCB0aGUgc3BlY2lhbGl6ZWQgb25lLlxuICAgIGlmICghc2VsZi5faW5pdFJlYWR5KSB7XG4gICAgICAgIHNlbGYuX2luaXRSZWFkeSA9IHNlbGYucmVhZHk7XG4gICAgICAgIHNlbGYucmVhZHkgPSBfZnVsbHlSZWFkeTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgaW5pdGlhbGl6YXRpb24gc3RhdGVzIG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgaW5pdFByb21pc2VzID0gW107XG5cbiAgICBmdW5jdGlvbiBpZ25vcmVFcnJvcnMoKSB7XG4gICAgICAgIC8vIERvbid0IGhhbmRsZSBlcnJvcnMgaGVyZSxcbiAgICAgICAgLy8ganVzdCBtYWtlcyBzdXJlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRiQ29udGV4dC5mb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBkYkNvbnRleHQuZm9yYWdlc1tqXTtcbiAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgaXRzZWxmLi4uXG4gICAgICAgICAgICBpbml0UHJvbWlzZXMucHVzaChmb3JhZ2UuX2luaXRSZWFkeSgpW1wiY2F0Y2hcIl0oaWdub3JlRXJyb3JzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXMuc2xpY2UoMCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBjb25uZWN0aW9uIHByb2Nlc3Mgb25seSB3aGVuXG4gICAgLy8gYWxsIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICByZXR1cm4gUHJvbWlzZSQxLmFsbChpbml0UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGI7XG4gICAgICAgIC8vIEdldCB0aGUgY29ubmVjdGlvbiBvciBvcGVuIGEgbmV3IG9uZSB3aXRob3V0IHVwZ3JhZGUuXG4gICAgICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgc2VsZi5fZGVmYXVsdENvbmZpZy52ZXJzaW9uKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgLy8gU2hhcmUgdGhlIGZpbmFsIGNvbm5lY3Rpb24gYW1vbmdzdCByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBmb3JhZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1trXTtcbiAgICAgICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxmIGlzIGFscmVhZHkgdXAtdG8tZGF0ZS5cbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IGRiSW5mby5kYjtcbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gZGJJbmZvLnZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIHN0b3JlZCBpbiBkYXRhYmFzZS5cbmZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFsdWUsIGN1cnNvci5rZXksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGl0ZXJhdG9yIGNhbGxiYWNrIHJldHVybnMgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKG5vbi1gdW5kZWZpbmVkYCkgdmFsdWUsIHRoZW4gd2Ugc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpdGVyYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGJJbmZvO1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBpZiAodG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydChkYkluZm8uZGIpLnRoZW4oZnVuY3Rpb24gKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZW5jb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlYXNvbiB3ZSBkb24ndCBfc2F2ZV8gbnVsbCBpcyBiZWNhdXNlIElFIDEwIGRvZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHN1cHBvcnQgc2F2aW5nIHRoZSBgbnVsbGAgdHlwZSBpbiBJbmRleGVkREIuIEhvd1xuICAgICAgICAgICAgICAgICAgICAvLyBpcm9uaWMsIGdpdmVuIHRoZSBidWcgYmVsb3chXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzE2MVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzdCB0byB1bmRlZmluZWQgc28gdGhlIHZhbHVlIHBhc3NlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2svcHJvbWlzZSBpcyB0aGUgc2FtZSBhcyB3aGF0IG9uZSB3b3VsZCBnZXQgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiBgZ2V0SXRlbSgpYCBsYXRlci4gVGhpcyBsZWFkcyB0byBzb21lIHdlaXJkbmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKHNldEl0ZW0oJ2ZvbycsIHVuZGVmaW5lZCkgd2lsbCByZXR1cm4gYG51bGxgKSwgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBteSBmYXVsdCBsb2NhbFN0b3JhZ2UgaXMgb3VyIGJhc2VsaW5lIGFuZCB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdlaXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHVzZSBhIEdydW50IHRhc2sgdG8gbWFrZSB0aGlzIHNhZmUgZm9yIElFIGFuZCBzb21lXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnNpb25zIG9mIEFuZHJvaWQgKGluY2x1ZGluZyB0aG9zZSB1c2VkIGJ5IENvcmRvdmEpLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxseSBJRSB3b24ndCBsaWtlIGAuZGVsZXRlKClgIGFuZCB3aWxsIGluc2lzdCBvblxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBgWydkZWxldGUnXSgpYCwgYnV0IHdlIGhhdmUgYSBidWlsZCBzdGVwIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4ZXMgdGhpcyBmb3IgdXMgbm93LlxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmVbXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2lsbCBiZSBhbHNvIGJlIGFib3J0ZWQgaWYgd2UndmUgZXhjZWVkZWQgb3VyIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5KG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkdmFuY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZXJlIHdlcmVuJ3QgZW5vdWdoIGtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdGhlIGZpcnN0IGtleSwgcmV0dXJuIGl0IGlmIHRoYXQncyB3aGF0IHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3YW50ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGFzayB0aGUgY3Vyc29yIHRvIHNraXAgYWhlYWQgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGhlcmUsIHdlJ3ZlIGdvdCB0aGUgbnRoIGtleS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyhjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2Uob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlzQ3VycmVudERiID0gb3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUgJiYgc2VsZi5fZGJJbmZvLmRiO1xuXG4gICAgICAgIHZhciBkYlByb21pc2UgPSBpc0N1cnJlbnREYiA/IFByb21pc2UkMS5yZXNvbHZlKHNlbGYuX2RiSW5mby5kYikgOiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yYWdlc1tpXS5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wREJQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIuZGVsZXRlRGF0YWJhc2Uob3B0aW9ucy5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IHJlcS5vbmJsb2NrZWQgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BEQlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9mb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoX2ZvcmFnZS5fZGJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMob3B0aW9ucy5zdG9yZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3VmVyc2lvbiA9IGRiLnZlcnNpb24gKyAxO1xuXG4gICAgICAgICAgICAgICAgX2RlZmVyUmVhZGluZXNzKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8udmVyc2lvbiA9IG5ld1ZlcnNpb247XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyb3BPYmplY3RQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIub3BlbihvcHRpb25zLm5hbWUsIG5ld1ZlcnNpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmRlbGV0ZU9iamVjdFN0b3JlKG9wdGlvbnMuc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkcm9wT2JqZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ZvcmFnZTIgPSBmb3JhZ2VzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ZvcmFnZTIuX2RiSW5mby5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoX2ZvcmFnZTIuX2RiSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9yZWplY3RSZWFkaW5lc3Mob3B0aW9ucywgZXJyKSB8fCBQcm9taXNlJDEucmVzb2x2ZSgpKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgYXN5bmNTdG9yYWdlID0ge1xuICAgIF9kcml2ZXI6ICdhc3luY1N0b3JhZ2UnLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlLFxuICAgIF9zdXBwb3J0OiBpc0luZGV4ZWREQlZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSxcbiAgICBnZXRJdGVtOiBnZXRJdGVtLFxuICAgIHNldEl0ZW06IHNldEl0ZW0sXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAga2V5OiBrZXksXG4gICAga2V5czoga2V5cyxcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZVxufTtcblxuZnVuY3Rpb24gaXNXZWJTUUxWYWxpZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9wZW5EYXRhYmFzZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLy8gU2FkbHksIHRoZSBiZXN0IHdheSB0byBzYXZlIGJpbmFyeSBkYXRhIGluIFdlYlNRTC9sb2NhbFN0b3JhZ2UgaXMgc2VyaWFsaXppbmdcbi8vIGl0IHRvIEJhc2U2NCwgc28gdGhpcyBpcyBob3cgd2Ugc3RvcmUgaXQgdG8gcHJldmVudCB2ZXJ5IHN0cmFuZ2UgZXJyb3JzIHdpdGggbGVzc1xuLy8gdmVyYm9zZSB3YXlzIG9mIGJpbmFyeSA8LT4gc3RyaW5nIGRhdGEgc3RvcmFnZS5cbnZhciBCQVNFX0NIQVJTID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG52YXIgQkxPQl9UWVBFX1BSRUZJWCA9ICd+fmxvY2FsX2ZvcmFnZV90eXBlfic7XG52YXIgQkxPQl9UWVBFX1BSRUZJWF9SRUdFWCA9IC9efn5sb2NhbF9mb3JhZ2VfdHlwZX4oW15+XSspfi87XG5cbnZhciBTRVJJQUxJWkVEX01BUktFUiA9ICdfX2xmc2NfXzonO1xudmFyIFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCA9IFNFUklBTElaRURfTUFSS0VSLmxlbmd0aDtcblxuLy8gT01HIHRoZSBzZXJpYWxpemF0aW9ucyFcbnZhciBUWVBFX0FSUkFZQlVGRkVSID0gJ2FyYmYnO1xudmFyIFRZUEVfQkxPQiA9ICdibG9iJztcbnZhciBUWVBFX0lOVDhBUlJBWSA9ICdzaTA4JztcbnZhciBUWVBFX1VJTlQ4QVJSQVkgPSAndWkwOCc7XG52YXIgVFlQRV9VSU5UOENMQU1QRURBUlJBWSA9ICd1aWM4JztcbnZhciBUWVBFX0lOVDE2QVJSQVkgPSAnc2kxNic7XG52YXIgVFlQRV9JTlQzMkFSUkFZID0gJ3NpMzInO1xudmFyIFRZUEVfVUlOVDE2QVJSQVkgPSAndXIxNic7XG52YXIgVFlQRV9VSU5UMzJBUlJBWSA9ICd1aTMyJztcbnZhciBUWVBFX0ZMT0FUMzJBUlJBWSA9ICdmbDMyJztcbnZhciBUWVBFX0ZMT0FUNjRBUlJBWSA9ICdmbDY0JztcbnZhciBUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCA9IFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCArIFRZUEVfQVJSQVlCVUZGRVIubGVuZ3RoO1xuXG52YXIgdG9TdHJpbmckMSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpIHtcbiAgICAvLyBGaWxsIHRoZSBzdHJpbmcgaW50byBhIEFycmF5QnVmZmVyLlxuICAgIHZhciBidWZmZXJMZW5ndGggPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAqIDAuNzU7XG4gICAgdmFyIGxlbiA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBpO1xuICAgIHZhciBwID0gMDtcbiAgICB2YXIgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDFdID09PSAnPScpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIGlmIChzZXJpYWxpemVkU3RyaW5nW3NlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCk7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBlbmNvZGVkMSA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2ldKTtcbiAgICAgICAgZW5jb2RlZDIgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgMV0pO1xuICAgICAgICBlbmNvZGVkMyA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAyXSk7XG4gICAgICAgIGVuY29kZWQ0ID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDNdKTtcblxuICAgICAgICAvKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4gICAgICAgIGJ5dGVzW3ArK10gPSBlbmNvZGVkMSA8PCAyIHwgZW5jb2RlZDIgPj4gNDtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMiAmIDE1KSA8PCA0IHwgZW5jb2RlZDMgPj4gMjtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMyAmIDMpIDw8IDYgfCBlbmNvZGVkNCAmIDYzO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xufVxuXG4vLyBDb252ZXJ0cyBhIGJ1ZmZlciB0byBhIHN0cmluZyB0byBzdG9yZSwgc2VyaWFsaXplZCwgaW4gdGhlIGJhY2tlbmRcbi8vIHN0b3JhZ2UgbGlicmFyeS5cbmZ1bmN0aW9uIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikge1xuICAgIC8vIGJhc2U2NC1hcnJheWJ1ZmZlclxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGJhc2U2NFN0cmluZyA9ICcnO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTWyhieXRlc1tpXSAmIDMpIDw8IDQgfCBieXRlc1tpICsgMV0gPj4gNF07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTWyhieXRlc1tpICsgMV0gJiAxNSkgPDwgMiB8IGJ5dGVzW2kgKyAyXSA+PiA2XTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmIChieXRlcy5sZW5ndGggJSAzID09PSAyKSB7XG4gICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDEpICsgJz0nO1xuICAgIH0gZWxzZSBpZiAoYnl0ZXMubGVuZ3RoICUgMyA9PT0gMSkge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyaW5nKDAsIGJhc2U2NFN0cmluZy5sZW5ndGggLSAyKSArICc9PSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NFN0cmluZztcbn1cblxuLy8gU2VyaWFsaXplIGEgdmFsdWUsIGFmdGVyd2FyZHMgZXhlY3V0aW5nIGEgY2FsbGJhY2sgKHdoaWNoIHVzdWFsbHlcbi8vIGluc3RydWN0cyB0aGUgYHNldEl0ZW0oKWAgY2FsbGJhY2svcHJvbWlzZSB0byBiZSBleGVjdXRlZCkuIFRoaXMgaXMgaG93XG4vLyB3ZSBzdG9yZSBiaW5hcnkgZGF0YSB3aXRoIGxvY2FsU3RvcmFnZS5cbmZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gJyc7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlVHlwZSA9IHRvU3RyaW5nJDEuY2FsbCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2Fubm90IHVzZSBgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcmAgb3Igc3VjaCBoZXJlLCBhcyB0aGVzZVxuICAgIC8vIGNoZWNrcyBmYWlsIHdoZW4gcnVubmluZyB0aGUgdGVzdHMgdXNpbmcgY2FzcGVyLmpzLi4uXG4gICAgLy9cbiAgICAvLyBUT0RPOiBTZWUgd2h5IHRob3NlIHRlc3RzIGZhaWwgYW5kIHVzZSBhIGJldHRlciBzb2x1dGlvbi5cbiAgICBpZiAodmFsdWUgJiYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyB8fCB2YWx1ZS5idWZmZXIgJiYgdG9TdHJpbmckMS5jYWxsKHZhbHVlLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmluYXJ5IGFycmF5cyB0byBhIHN0cmluZyBhbmQgcHJlZml4IHRoZSBzdHJpbmcgd2l0aFxuICAgICAgICAvLyBhIHNwZWNpYWwgbWFya2VyLlxuICAgICAgICB2YXIgYnVmZmVyO1xuICAgICAgICB2YXIgbWFya2VyID0gU0VSSUFMSVpFRF9NQVJLRVI7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfQVJSQVlCVUZGRVI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgPSB2YWx1ZS5idWZmZXI7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UOEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQ4QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDE2QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQxNkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfRkxPQVQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfRkxPQVQ2NEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgdHlwZSBmb3IgQmluYXJ5QXJyYXknKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhtYXJrZXIgKyBidWZmZXJUb1N0cmluZyhidWZmZXIpKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgIC8vIENvbnZlciB0aGUgYmxvYiB0byBhIGJpbmFyeUFycmF5IGFuZCB0aGVuIHRvIGEgc3RyaW5nLlxuICAgICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBwcmVmaXggZm9yIHRoZSBibG9iIHR5cGUuXG4gICAgICAgICAgICB2YXIgc3RyID0gQkxPQl9UWVBFX1BSRUZJWCArIHZhbHVlLnR5cGUgKyAnficgKyBidWZmZXJUb1N0cmluZyh0aGlzLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKFNFUklBTElaRURfTUFSS0VSICsgVFlQRV9CTE9CICsgc3RyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IGNvbnZlcnQgdmFsdWUgaW50byBhIEpTT04gc3RyaW5nOiBcIiwgdmFsdWUpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gRGVzZXJpYWxpemUgZGF0YSB3ZSd2ZSBpbnNlcnRlZCBpbnRvIGEgdmFsdWUgY29sdW1uL2ZpZWxkLiBXZSBwbGFjZVxuLy8gc3BlY2lhbCBtYXJrZXJzIGludG8gb3VyIHN0cmluZ3MgdG8gbWFyayB0aGVtIGFzIGVuY29kZWQ7IHRoaXMgaXNuJ3Rcbi8vIGFzIG5pY2UgYXMgYSBtZXRhIGZpZWxkLCBidXQgaXQncyB0aGUgb25seSBzYW5lIHRoaW5nIHdlIGNhbiBkbyB3aGlsc3Rcbi8vIGtlZXBpbmcgbG9jYWxTdG9yYWdlIHN1cHBvcnQgaW50YWN0LlxuLy9cbi8vIE9mdGVudGltZXMgdGhpcyB3aWxsIGp1c3QgZGVzZXJpYWxpemUgSlNPTiBjb250ZW50LCBidXQgaWYgd2UgaGF2ZSBhXG4vLyBzcGVjaWFsIG1hcmtlciAoU0VSSUFMSVpFRF9NQVJLRVIsIGRlZmluZWQgYWJvdmUpLCB3ZSB3aWxsIGV4dHJhY3Rcbi8vIHNvbWUga2luZCBvZiBhcnJheWJ1ZmZlci9iaW5hcnkgZGF0YS90eXBlZCBhcnJheSBvdXQgb2YgdGhlIHN0cmluZy5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgLy8gSWYgd2UgaGF2ZW4ndCBtYXJrZWQgdGhpcyBzdHJpbmcgYXMgYmVpbmcgc3BlY2lhbGx5IHNlcmlhbGl6ZWQgKGkuZS5cbiAgICAvLyBzb21ldGhpbmcgb3RoZXIgdGhhbiBzZXJpYWxpemVkIEpTT04pLCB3ZSBjYW4ganVzdCByZXR1cm4gaXQgYW5kIGJlXG4gICAgLy8gZG9uZSB3aXRoIGl0LlxuICAgIGlmICh2YWx1ZS5zdWJzdHJpbmcoMCwgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKSAhPT0gU0VSSUFMSVpFRF9NQVJLRVIpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBkZWFscyB3aXRoIGRlc2VyaWFsaXppbmcgc29tZSBraW5kIG9mIEJsb2Igb3JcbiAgICAvLyBUeXBlZEFycmF5LiBGaXJzdCB3ZSBzZXBhcmF0ZSBvdXQgdGhlIHR5cGUgb2YgZGF0YSB3ZSdyZSBkZWFsaW5nXG4gICAgLy8gd2l0aCBmcm9tIHRoZSBkYXRhIGl0c2VsZi5cbiAgICB2YXIgc2VyaWFsaXplZFN0cmluZyA9IHZhbHVlLnN1YnN0cmluZyhUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCk7XG4gICAgdmFyIHR5cGUgPSB2YWx1ZS5zdWJzdHJpbmcoU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RILCBUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCk7XG5cbiAgICB2YXIgYmxvYlR5cGU7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgYmxvYiB0eXBlIHNlcmlhbGl6YXRpb24gc3RyYXRlZ3kuXG4gICAgLy8gREJzIGNyZWF0ZWQgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBsb2NhbEZvcmFnZSB3aWxsIHNpbXBseSBub3QgaGF2ZSB0aGUgYmxvYiB0eXBlLlxuICAgIGlmICh0eXBlID09PSBUWVBFX0JMT0IgJiYgQkxPQl9UWVBFX1BSRUZJWF9SRUdFWC50ZXN0KHNlcmlhbGl6ZWRTdHJpbmcpKSB7XG4gICAgICAgIHZhciBtYXRjaGVyID0gc2VyaWFsaXplZFN0cmluZy5tYXRjaChCTE9CX1RZUEVfUFJFRklYX1JFR0VYKTtcbiAgICAgICAgYmxvYlR5cGUgPSBtYXRjaGVyWzFdO1xuICAgICAgICBzZXJpYWxpemVkU3RyaW5nID0gc2VyaWFsaXplZFN0cmluZy5zdWJzdHJpbmcobWF0Y2hlclswXS5sZW5ndGgpO1xuICAgIH1cbiAgICB2YXIgYnVmZmVyID0gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZyk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIHJpZ2h0IHR5cGUgYmFzZWQgb24gdGhlIGNvZGUvdHlwZSBzZXQgZHVyaW5nXG4gICAgLy8gc2VyaWFsaXphdGlvbi5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBUWVBFX0FSUkFZQlVGRkVSOlxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgY2FzZSBUWVBFX0JMT0I6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBibG9iVHlwZSB9KTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDhBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UOENMQU1QRURBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDE2QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDE2QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfSU5UMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9GTE9BVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfRkxPQVQ2NEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rb3duIHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG59XG5cbnZhciBsb2NhbGZvcmFnZVNlcmlhbGl6ZXIgPSB7XG4gICAgc2VyaWFsaXplOiBzZXJpYWxpemUsXG4gICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplLFxuICAgIHN0cmluZ1RvQnVmZmVyOiBzdHJpbmdUb0J1ZmZlcixcbiAgICBidWZmZXJUb1N0cmluZzogYnVmZmVyVG9TdHJpbmdcbn07XG5cbi8qXG4gKiBJbmNsdWRlcyBjb2RlIGZyb206XG4gKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHQuZXhlY3V0ZVNxbCgnQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIGtleSB1bmlxdWUsIHZhbHVlKScsIFtdLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG59XG5cbi8vIE9wZW4gdGhlIFdlYlNRTCBkYXRhYmFzZSAoYXV0b21hdGljYWxseSBjcmVhdGVzIG9uZSBpZiBvbmUgZGlkbid0XG4vLyBwcmV2aW91c2x5IGV4aXN0KSwgdXNpbmcgYW55IG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG5mdW5jdGlvbiBfaW5pdFN0b3JhZ2UkMShvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYkluZm8gPSB7XG4gICAgICAgIGRiOiBudWxsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gdHlwZW9mIG9wdGlvbnNbaV0gIT09ICdzdHJpbmcnID8gb3B0aW9uc1tpXS50b1N0cmluZygpIDogb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYkluZm9Qcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIE9wZW4gdGhlIGRhdGFiYXNlOyB0aGUgb3BlbkRhdGFiYXNlIEFQSSB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gY3JlYXRlIGl0IGZvciB1cyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGJJbmZvLmRiID0gb3BlbkRhdGFiYXNlKGRiSW5mby5uYW1lLCBTdHJpbmcoZGJJbmZvLnZlcnNpb24pLCBkYkluZm8uZGVzY3JpcHRpb24sIGRiSW5mby5zaXplKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBvdXIga2V5L3ZhbHVlIHRhYmxlIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZGJJbmZvLnNlcmlhbGl6ZXIgPSBsb2NhbGZvcmFnZVNlcmlhbGl6ZXI7XG4gICAgcmV0dXJuIGRiSW5mb1Byb21pc2U7XG59XG5cbmZ1bmN0aW9uIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCBzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdC5leGVjdXRlU3FsKHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gZXJyb3IuU1lOVEFYX0VSUikge1xuICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgbmFtZSBGUk9NIHNxbGl0ZV9tYXN0ZXIgJyArIFwiV0hFUkUgdHlwZT0ndGFibGUnIEFORCBuYW1lID0gP1wiLCBbZGJJbmZvLnN0b3JlTmFtZV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzLnJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YWJsZSBpcyBtaXNzaW5nICh3YXMgZGVsZXRlZClcbiAgICAgICAgICAgICAgICAgICAgLy8gcmUtY3JlYXRlIGl0IHRhYmxlIGFuZCByZXRyeVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHQsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sodCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSwgZXJyb3JDYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW0kMShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSBrZXkgPSA/IExJTUlUIDEnLCBba2V5XSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50IHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5wYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGUkMShpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuXG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93cyA9IHJlc3VsdHMucm93cztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHJvd3MubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcm93cy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBpdGVtLmtleSwgaSArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2b2lkKDApIHByZXZlbnRzIHByb2JsZW1zIHdpdGggcmVkZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiBgdW5kZWZpbmVkYC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gX3NldEl0ZW0oa2V5LCB2YWx1ZSwgY2FsbGJhY2ssIHJldHJpZXNMZWZ0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGUgbG9jYWxTdG9yYWdlIEFQSSBkb2Vzbid0IHJldHVybiB1bmRlZmluZWQgdmFsdWVzIGluIGFuXG4gICAgICAgICAgICAvLyBcImV4cGVjdGVkXCIgd2F5LCBzbyB1bmRlZmluZWQgaXMgYWx3YXlzIGNhc3QgdG8gbnVsbCBpbiBhbGxcbiAgICAgICAgICAgIC8vIGRyaXZlcnMuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5zZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdJTlNFUlQgT1IgUkVQTEFDRSBJTlRPICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyAnICsgJyhrZXksIHZhbHVlKSBWQUxVRVMgKD8sID8pJywgW2tleSwgdmFsdWVdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdHJhbnNhY3Rpb24gZmFpbGVkOyBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gc2VlIGlmIGl0J3MgYSBxdW90YSBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcWxFcnJvci5jb2RlID09PSBzcWxFcnJvci5RVU9UQV9FUlIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSByZWplY3QgdGhlIGNhbGxiYWNrIG91dHJpZ2h0IGZvciBub3csIGJ1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgd29ydGggdHJ5aW5nIHRvIHJlLXJ1biB0aGUgdHJhbnNhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbiBpZiB0aGUgdXNlciBhY2NlcHRzIHRoZSBwcm9tcHQgdG8gdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9yZSBzdG9yYWdlIG9uIFNhZmFyaSwgdGhpcyBlcnJvciB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmUgY2FsbGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIHJlLXJ1biB0aGUgdHJhbnNhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXNMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF9zZXRJdGVtLmFwcGx5KHNlbGYsIFtrZXksIG9yaWdpbmFsVmFsdWUsIGNhbGxiYWNrLCByZXRyaWVzTGVmdCAtIDFdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW0kMShrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBfc2V0SXRlbS5hcHBseSh0aGlzLCBba2V5LCB2YWx1ZSwgY2FsbGJhY2ssIDFdKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0RFTEVURSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSBrZXkgPSA/JywgW2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIERlbGV0ZXMgZXZlcnkgaXRlbSBpbiB0aGUgdGFibGUuXG4vLyBUT0RPOiBGaW5kIG91dCBpZiB0aGlzIHJlc2V0cyB0aGUgQVVUT19JTkNSRU1FTlQgbnVtYmVyLlxuZnVuY3Rpb24gY2xlYXIkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0RFTEVURSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gRG9lcyBhIHNpbXBsZSBgQ09VTlQoa2V5KWAgdG8gZ2V0IHRoZSBudW1iZXIgb2YgaXRlbXMgc3RvcmVkIGluXG4vLyBsb2NhbEZvcmFnZS5cbmZ1bmN0aW9uIGxlbmd0aCQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIC8vIEFoaGgsIFNRTCBtYWtlcyB0aGlzIG9uZSBzb29vb29vIGVhc3kuXG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgQ09VTlQoa2V5KSBhcyBjIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLml0ZW0oMCkuYztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJldHVybiB0aGUga2V5IGxvY2F0ZWQgYXQga2V5IGluZGV4IFg7IGVzc2VudGlhbGx5IGdldHMgdGhlIGtleSBmcm9tIGFcbi8vIGBXSEVSRSBpZCA9ID9gLiBUaGlzIGlzIHRoZSBtb3N0IGVmZmljaWVudCB3YXkgSSBjYW4gdGhpbmsgdG8gaW1wbGVtZW50XG4vLyB0aGlzIHJhcmVseS11c2VkIChpbiBteSBleHBlcmllbmNlKSBwYXJ0IG9mIHRoZSBBUEksIGJ1dCBpdCBjYW4gc2VlbVxuLy8gaW5jb25zaXN0ZW50LCBiZWNhdXNlIHdlIGRvIGBJTlNFUlQgT1IgUkVQTEFDRSBJTlRPYCBvbiBgc2V0SXRlbSgpYCwgc29cbi8vIHRoZSBJRCBvZiBlYWNoIGtleSB3aWxsIGNoYW5nZSBldmVyeSB0aW1lIGl0J3MgdXBkYXRlZC4gUGVyaGFwcyBhIHN0b3JlZFxuLy8gcHJvY2VkdXJlIGZvciB0aGUgYHNldEl0ZW0oKWAgU1FMIHdvdWxkIHNvbHZlIHRoaXMgcHJvYmxlbT9cbi8vIFRPRE86IERvbid0IGNoYW5nZSBJRCBvbiBgc2V0SXRlbSgpYC5cbmZ1bmN0aW9uIGtleSQxKG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSBpZCA9ID8gTElNSVQgMScsIFtuICsgMV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MubGVuZ3RoID8gcmVzdWx0cy5yb3dzLml0ZW0oMCkua2V5IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXlzKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvd2ViZGF0YWJhc2UvI2RhdGFiYXNlc1xuLy8gPiBUaGVyZSBpcyBubyB3YXkgdG8gZW51bWVyYXRlIG9yIGRlbGV0ZSB0aGUgZGF0YWJhc2VzIGF2YWlsYWJsZSBmb3IgYW4gb3JpZ2luIGZyb20gdGhpcyBBUEkuXG5mdW5jdGlvbiBnZXRBbGxTdG9yZU5hbWVzKGRiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgbmFtZSBGUk9NIHNxbGl0ZV9tYXN0ZXIgJyArIFwiV0hFUkUgdHlwZT0ndGFibGUnIEFORCBuYW1lIDw+ICdfX1dlYktpdERhdGFiYXNlSW5mb1RhYmxlX18nXCIsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZU5hbWVzID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzLnB1c2gocmVzdWx0cy5yb3dzLml0ZW0oaSkubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRiOiBkYixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lczogc3RvcmVOYW1lc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2UkMShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGRiO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gY3VycmVudENvbmZpZy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBkYiByZWZlcmVuY2Ugb2YgdGhlIGN1cnJlbnQgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBkYiA9IHNlbGYuX2RiSW5mby5kYjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGIgPSBvcGVuRGF0YWJhc2Uob3B0aW9ucy5uYW1lLCAnJywgJycsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gZHJvcCBhbGwgZGF0YWJhc2UgdGFibGVzXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnZXRBbGxTdG9yZU5hbWVzKGRiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXM6IFtvcHRpb25zLnN0b3JlTmFtZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAob3BlcmF0aW9uSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJvcFRhYmxlKHN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnRFJPUCBUQUJMRSBJRiBFWElTVFMgJyArIHN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3BlcmF0aW9uSW5mby5zdG9yZU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25zLnB1c2goZHJvcFRhYmxlKG9wZXJhdGlvbkluZm8uc3RvcmVOYW1lc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZSQxLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgd2ViU1FMU3RvcmFnZSA9IHtcbiAgICBfZHJpdmVyOiAnd2ViU1FMU3RvcmFnZScsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UkMSxcbiAgICBfc3VwcG9ydDogaXNXZWJTUUxWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUkMSxcbiAgICBnZXRJdGVtOiBnZXRJdGVtJDEsXG4gICAgc2V0SXRlbTogc2V0SXRlbSQxLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0kMSxcbiAgICBjbGVhcjogY2xlYXIkMSxcbiAgICBsZW5ndGg6IGxlbmd0aCQxLFxuICAgIGtleToga2V5JDEsXG4gICAga2V5czoga2V5cyQxLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlJDFcbn07XG5cbmZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlVmFsaWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmICdzZXRJdGVtJyBpbiBsb2NhbFN0b3JhZ2UgJiZcbiAgICAgICAgLy8gaW4gSUU4IHR5cGVvZiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSA9PT0gJ29iamVjdCdcbiAgICAgICAgISFsb2NhbFN0b3JhZ2Uuc2V0SXRlbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRLZXlQcmVmaXgob3B0aW9ucywgZGVmYXVsdENvbmZpZykge1xuICAgIHZhciBrZXlQcmVmaXggPSBvcHRpb25zLm5hbWUgKyAnLyc7XG5cbiAgICBpZiAob3B0aW9ucy5zdG9yZU5hbWUgIT09IGRlZmF1bHRDb25maWcuc3RvcmVOYW1lKSB7XG4gICAgICAgIGtleVByZWZpeCArPSBvcHRpb25zLnN0b3JlTmFtZSArICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGtleVByZWZpeDtcbn1cblxuLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIHRocm93cyB3aGVuIHNhdmluZyBhbiBpdGVtXG5mdW5jdGlvbiBjaGVja0lmTG9jYWxTdG9yYWdlVGhyb3dzKCkge1xuICAgIHZhciBsb2NhbFN0b3JhZ2VUZXN0S2V5ID0gJ19sb2NhbGZvcmFnZV9zdXBwb3J0X3Rlc3QnO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlVGVzdEtleSwgdHJ1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXkpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIHVzYWJsZSBhbmQgYWxsb3dzIHRvIHNhdmUgYW4gaXRlbVxuLy8gVGhpcyBtZXRob2QgY2hlY2tzIGlmIGxvY2FsU3RvcmFnZSBpcyB1c2FibGUgaW4gU2FmYXJpIFByaXZhdGUgQnJvd3Npbmdcbi8vIG1vZGUsIG9yIGluIGFueSBvdGhlciBjYXNlIHdoZXJlIHRoZSBhdmFpbGFibGUgcXVvdGEgZm9yIGxvY2FsU3RvcmFnZVxuLy8gaXMgMCBhbmQgdGhlcmUgd2Fzbid0IGFueSBzYXZlZCBpdGVtcyB5ZXQuXG5mdW5jdGlvbiBfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSB7XG4gICAgcmV0dXJuICFjaGVja0lmTG9jYWxTdG9yYWdlVGhyb3dzKCkgfHwgbG9jYWxTdG9yYWdlLmxlbmd0aCA+IDA7XG59XG5cbi8vIENvbmZpZyB0aGUgbG9jYWxTdG9yYWdlIGJhY2tlbmQsIHVzaW5nIG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG5mdW5jdGlvbiBfaW5pdFN0b3JhZ2UkMihvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYkluZm8gPSB7fTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYkluZm8ua2V5UHJlZml4ID0gX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKTtcblxuICAgIGlmICghX2lzTG9jYWxTdG9yYWdlVXNhYmxlKCkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZWplY3QoKTtcbiAgICB9XG5cbiAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgZGJJbmZvLnNlcmlhbGl6ZXIgPSBsb2NhbGZvcmFnZVNlcmlhbGl6ZXI7XG5cbiAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbn1cblxuLy8gUmVtb3ZlIGFsbCBrZXlzIGZyb20gdGhlIGRhdGFzdG9yZSwgZWZmZWN0aXZlbHkgZGVzdHJveWluZyBhbGwgZGF0YSBpblxuLy8gdGhlIGFwcCdzIGtleS92YWx1ZSBzdG9yZSFcbmZ1bmN0aW9uIGNsZWFyJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBzZWxmLl9kYkluZm8ua2V5UHJlZml4O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJldHJpZXZlIGFuIGl0ZW0gZnJvbSB0aGUgc3RvcmUuIFVubGlrZSB0aGUgb3JpZ2luYWwgYXN5bmNfc3RvcmFnZVxuLy8gbGlicmFyeSBpbiBHYWlhLCB3ZSBkb24ndCBtb2RpZnkgcmV0dXJuIHZhbHVlcyBhdCBhbGwuIElmIGEga2V5J3MgdmFsdWVcbi8vIGlzIGB1bmRlZmluZWRgLCB3ZSBwYXNzIHRoYXQgdmFsdWUgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuZnVuY3Rpb24gZ2V0SXRlbSQyKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSk7XG5cbiAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgIC8vIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0LiBJZiByZXN1bHQgaXNuJ3QgdHJ1dGh5LCB0aGUga2V5XG4gICAgICAgIC8vIGlzIGxpa2VseSB1bmRlZmluZWQgYW5kIHdlJ2xsIHBhc3MgaXQgc3RyYWlnaHQgdG8gdGhlXG4gICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIEl0ZXJhdGUgb3ZlciBhbGwgaXRlbXMgaW4gdGhlIHN0b3JlLlxuZnVuY3Rpb24gaXRlcmF0ZSQyKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gZGJJbmZvLmtleVByZWZpeDtcbiAgICAgICAgdmFyIGtleVByZWZpeExlbmd0aCA9IGtleVByZWZpeC5sZW5ndGg7XG4gICAgICAgIHZhciBsZW5ndGggPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuXG4gICAgICAgIC8vIFdlIHVzZSBhIGRlZGljYXRlZCBpdGVyYXRvciBpbnN0ZWFkIG9mIHRoZSBgaWAgdmFyaWFibGUgYmVsb3dcbiAgICAgICAgLy8gc28gb3RoZXIga2V5cyB3ZSBmZXRjaCBpbiBsb2NhbFN0b3JhZ2UgYXJlbid0IGNvdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIGBpdGVyYXRpb25OdW1iZXJgIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgYGl0ZXJhdGUoKWBcbiAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNlZTogZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDM1I2Rpc2N1c3Npb25fcjM4MDYxNTMwXG4gICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGEgcmVzdWx0IHdhcyBmb3VuZCwgcGFyc2UgaXQgZnJvbSB0aGUgc2VyaWFsaXplZFxuICAgICAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZVxuICAgICAgICAgICAgLy8ga2V5IGlzIGxpa2VseSB1bmRlZmluZWQgYW5kIHdlJ2xsIHBhc3MgaXQgc3RyYWlnaHRcbiAgICAgICAgICAgIC8vIHRvIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSA9IGl0ZXJhdG9yKHZhbHVlLCBrZXkuc3Vic3RyaW5nKGtleVByZWZpeExlbmd0aCksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFNhbWUgYXMgbG9jYWxTdG9yYWdlJ3Mga2V5KCkgbWV0aG9kLCBleGNlcHQgdGFrZXMgYSBjYWxsYmFjay5cbmZ1bmN0aW9uIGtleSQyKG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmtleShuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHByZWZpeCBmcm9tIHRoZSBrZXksIGlmIGEga2V5IGlzIGZvdW5kLlxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciBsZW5ndGggPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChpdGVtS2V5LmluZGV4T2YoZGJJbmZvLmtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goaXRlbUtleS5zdWJzdHJpbmcoZGJJbmZvLmtleVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU3VwcGx5IHRoZSBudW1iZXIgb2Yga2V5cyBpbiB0aGUgZGF0YXN0b3JlIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbmZ1bmN0aW9uIGxlbmd0aCQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZSwgbmljZSBhbmQgc2ltcGxlLlxuZnVuY3Rpb24gcmVtb3ZlSXRlbSQyKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFNldCBhIGtleSdzIHZhbHVlIGFuZCBydW4gYW4gb3B0aW9uYWwgY2FsbGJhY2sgb25jZSB0aGUgdmFsdWUgaXMgc2V0LlxuLy8gVW5saWtlIEdhaWEncyBpbXBsZW1lbnRhdGlvbiwgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgdmFsdWUsXG4vLyBpbiBjYXNlIHlvdSB3YW50IHRvIG9wZXJhdGUgb24gdGhhdCB2YWx1ZSBvbmx5IGFmdGVyIHlvdSdyZSBzdXJlIGl0XG4vLyBzYXZlZCwgb3Igc29tZXRoaW5nIGxpa2UgdGhhdC5cbmZ1bmN0aW9uIHNldEl0ZW0kMihrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdW5kZWZpbmVkIHZhbHVlcyB0byBudWxsLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3JpZ2luYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZSBjYXBhY2l0eSBleGNlZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIHNwZWNpZmljIGVycm9yL2V2ZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHwgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlJDIob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zLm5hbWUgKyAnLycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKF9nZXRLZXlQcmVmaXgob3B0aW9ucywgc2VsZi5fZGVmYXVsdENvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChrZXlQcmVmaXgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgbG9jYWxTdG9yYWdlV3JhcHBlciA9IHtcbiAgICBfZHJpdmVyOiAnbG9jYWxTdG9yYWdlV3JhcHBlcicsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UkMixcbiAgICBfc3VwcG9ydDogaXNMb2NhbFN0b3JhZ2VWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUkMixcbiAgICBnZXRJdGVtOiBnZXRJdGVtJDIsXG4gICAgc2V0SXRlbTogc2V0SXRlbSQyLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0kMixcbiAgICBjbGVhcjogY2xlYXIkMixcbiAgICBsZW5ndGg6IGxlbmd0aCQyLFxuICAgIGtleToga2V5JDIsXG4gICAga2V5czoga2V5cyQyLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlJDJcbn07XG5cbnZhciBzYW1lVmFsdWUgPSBmdW5jdGlvbiBzYW1lVmFsdWUoeCwgeSkge1xuICAgIHJldHVybiB4ID09PSB5IHx8IHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicgJiYgaXNOYU4oeCkgJiYgaXNOYU4oeSk7XG59O1xuXG52YXIgaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgc2VhcmNoRWxlbWVudCkge1xuICAgIHZhciBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIGlmIChzYW1lVmFsdWUoYXJyYXlbaV0sIHNlYXJjaEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vLyBEcml2ZXJzIGFyZSBzdG9yZWQgaGVyZSB3aGVuIGBkZWZpbmVEcml2ZXIoKWAgaXMgY2FsbGVkLlxuLy8gVGhleSBhcmUgc2hhcmVkIGFjcm9zcyBhbGwgaW5zdGFuY2VzIG9mIGxvY2FsRm9yYWdlLlxudmFyIERlZmluZWREcml2ZXJzID0ge307XG5cbnZhciBEcml2ZXJTdXBwb3J0ID0ge307XG5cbnZhciBEZWZhdWx0RHJpdmVycyA9IHtcbiAgICBJTkRFWEVEREI6IGFzeW5jU3RvcmFnZSxcbiAgICBXRUJTUUw6IHdlYlNRTFN0b3JhZ2UsXG4gICAgTE9DQUxTVE9SQUdFOiBsb2NhbFN0b3JhZ2VXcmFwcGVyXG59O1xuXG52YXIgRGVmYXVsdERyaXZlck9yZGVyID0gW0RlZmF1bHREcml2ZXJzLklOREVYRUREQi5fZHJpdmVyLCBEZWZhdWx0RHJpdmVycy5XRUJTUUwuX2RyaXZlciwgRGVmYXVsdERyaXZlcnMuTE9DQUxTVE9SQUdFLl9kcml2ZXJdO1xuXG52YXIgT3B0aW9uYWxEcml2ZXJNZXRob2RzID0gWydkcm9wSW5zdGFuY2UnXTtcblxudmFyIExpYnJhcnlNZXRob2RzID0gWydjbGVhcicsICdnZXRJdGVtJywgJ2l0ZXJhdGUnLCAna2V5JywgJ2tleXMnLCAnbGVuZ3RoJywgJ3JlbW92ZUl0ZW0nLCAnc2V0SXRlbSddLmNvbmNhdChPcHRpb25hbERyaXZlck1ldGhvZHMpO1xuXG52YXIgRGVmYXVsdENvbmZpZyA9IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZHJpdmVyOiBEZWZhdWx0RHJpdmVyT3JkZXIuc2xpY2UoKSxcbiAgICBuYW1lOiAnbG9jYWxmb3JhZ2UnLFxuICAgIC8vIERlZmF1bHQgREIgc2l6ZSBpcyBfSlVTVCBVTkRFUl8gNU1CLCBhcyBpdCdzIHRoZSBoaWdoZXN0IHNpemVcbiAgICAvLyB3ZSBjYW4gdXNlIHdpdGhvdXQgYSBwcm9tcHQuXG4gICAgc2l6ZTogNDk4MDczNixcbiAgICBzdG9yZU5hbWU6ICdrZXl2YWx1ZXBhaXJzJyxcbiAgICB2ZXJzaW9uOiAxLjBcbn07XG5cbmZ1bmN0aW9uIGNhbGxXaGVuUmVhZHkobG9jYWxGb3JhZ2VJbnN0YW5jZSwgbGlicmFyeU1ldGhvZCkge1xuICAgIGxvY2FsRm9yYWdlSW5zdGFuY2VbbGlicmFyeU1ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbEZvcmFnZUluc3RhbmNlW2xpYnJhcnlNZXRob2RdLmFwcGx5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIF9hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgaWYgKGFyZykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2tleSBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KGFyZ1tfa2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtfa2V5XSA9IGFyZ1tfa2V5XS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbn1cblxudmFyIExvY2FsRm9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvY2FsRm9yYWdlKG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsRm9yYWdlKTtcblxuICAgICAgICBmb3IgKHZhciBkcml2ZXJUeXBlS2V5IGluIERlZmF1bHREcml2ZXJzKSB7XG4gICAgICAgICAgICBpZiAoRGVmYXVsdERyaXZlcnMuaGFzT3duUHJvcGVydHkoZHJpdmVyVHlwZUtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyID0gRGVmYXVsdERyaXZlcnNbZHJpdmVyVHlwZUtleV07XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXIuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICB0aGlzW2RyaXZlclR5cGVLZXldID0gZHJpdmVyTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byB3YWl0IGZvciB0aGUgcHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgZHJpdmVycyBjYW4gYmUgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbiBhIGJsb2NraW5nIG1hbm5lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmluZURyaXZlcihkcml2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb25maWcgPSBleHRlbmQoe30sIERlZmF1bHRDb25maWcpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBleHRlbmQoe30sIHRoaXMuX2RlZmF1bHRDb25maWcsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kcml2ZXJTZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0RHJpdmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGJJbmZvID0gbnVsbDtcblxuICAgICAgICB0aGlzLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgdGhpcy5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlcilbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGFueSBjb25maWcgdmFsdWVzIGZvciBsb2NhbEZvcmFnZTsgY2FuIGJlIGNhbGxlZCBhbnl0aW1lIGJlZm9yZVxuICAgIC8vIHRoZSBmaXJzdCBBUEkgY2FsbCAoZS5nLiBgZ2V0SXRlbWAsIGBzZXRJdGVtYCkuXG4gICAgLy8gV2UgbG9vcCB0aHJvdWdoIG9wdGlvbnMgc28gd2UgZG9uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGNvbmZpZ1xuICAgIC8vIHZhbHVlcy5cblxuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmNvbmZpZyA9IGZ1bmN0aW9uIGNvbmZpZyhvcHRpb25zKSB7XG4gICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGFyZ3VtZW50IGlzIGFuIG9iamVjdCwgd2UgdXNlIGl0IHRvIHNldCB2YWx1ZXMuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgcmV0dXJuIGVpdGhlciBhIHNwZWNpZmllZCBjb25maWcgdmFsdWUgb3IgYWxsXG4gICAgICAgIC8vIGNvbmZpZyB2YWx1ZXMuXG4gICAgICAgIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIElmIGxvY2FsZm9yYWdlIGlzIHJlYWR5IGFuZCBmdWxseSBpbml0aWFsaXplZCwgd2UgY2FuJ3Qgc2V0XG4gICAgICAgICAgICAvLyBhbnkgbmV3IGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBJbnN0ZWFkLCB3ZSByZXR1cm4gYW4gZXJyb3IuXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiQ2FuJ3QgY2FsbCBjb25maWcoKSBhZnRlciBsb2NhbGZvcmFnZSBcIiArICdoYXMgYmVlbiB1c2VkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gJ3N0b3JlTmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tpXSA9IG9wdGlvbnNbaV0ucmVwbGFjZSgvXFxXL2csICdfJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09ICd2ZXJzaW9uJyAmJiB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRGF0YWJhc2UgdmVyc2lvbiBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFmdGVyIGFsbCBjb25maWcgb3B0aW9ucyBhcmUgc2V0IGFuZFxuICAgICAgICAgICAgLy8gdGhlIGRyaXZlciBvcHRpb24gaXMgdXNlZCwgdHJ5IHNldHRpbmcgaXRcbiAgICAgICAgICAgIGlmICgnZHJpdmVyJyBpbiBvcHRpb25zICYmIG9wdGlvbnMuZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWdbb3B0aW9uc107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFVzZWQgdG8gZGVmaW5lIGEgY3VzdG9tIGRyaXZlciwgc2hhcmVkIGFjcm9zcyBhbGwgaW5zdGFuY2VzIG9mXG4gICAgLy8gbG9jYWxGb3JhZ2UuXG5cblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kZWZpbmVEcml2ZXIgPSBmdW5jdGlvbiBkZWZpbmVEcml2ZXIoZHJpdmVyT2JqZWN0LCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlck9iamVjdC5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGlhbmNlRXJyb3IgPSBuZXcgRXJyb3IoJ0N1c3RvbSBkcml2ZXIgbm90IGNvbXBsaWFudDsgc2VlICcgKyAnaHR0cHM6Ly9tb3ppbGxhLmdpdGh1Yi5pby9sb2NhbEZvcmFnZS8jZGVmaW5lZHJpdmVyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBIGRyaXZlciBuYW1lIHNob3VsZCBiZSBkZWZpbmVkIGFuZCBub3Qgb3ZlcmxhcCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIGxpYnJhcnktZGVmaW5lZCwgZGVmYXVsdCBkcml2ZXJzLlxuICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0Ll9kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kcyA9IExpYnJhcnlNZXRob2RzLmNvbmNhdCgnX2luaXRTdG9yYWdlJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRyaXZlck1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlck1ldGhvZE5hbWUgPSBkcml2ZXJNZXRob2RzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHByb3BlcnR5IGlzIHRoZXJlLFxuICAgICAgICAgICAgICAgICAgICAvLyBpdCBzaG91bGQgYmUgYSBtZXRob2QgZXZlbiB3aGVuIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1JlcXVpcmVkID0gIWluY2x1ZGVzKE9wdGlvbmFsRHJpdmVyTWV0aG9kcywgZHJpdmVyTWV0aG9kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaXNSZXF1aXJlZCB8fCBkcml2ZXJPYmplY3RbZHJpdmVyTWV0aG9kTmFtZV0pICYmIHR5cGVvZiBkcml2ZXJPYmplY3RbZHJpdmVyTWV0aG9kTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChjb21wbGlhbmNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzID0gZnVuY3Rpb24gY29uZmlndXJlTWlzc2luZ01ldGhvZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3RvcnkgPSBmdW5jdGlvbiBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3RvcnkobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kTmFtZSArICcgaXMgbm90IGltcGxlbWVudGVkIGJ5IHRoZSBjdXJyZW50IGRyaXZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9sZW4gPSBPcHRpb25hbERyaXZlck1ldGhvZHMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25hbERyaXZlck1ldGhvZCA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kc1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyaXZlck9iamVjdFtvcHRpb25hbERyaXZlck1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcml2ZXJPYmplY3Rbb3B0aW9uYWxEcml2ZXJNZXRob2RdID0gbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5KG9wdGlvbmFsRHJpdmVyTWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25maWd1cmVNaXNzaW5nTWV0aG9kcygpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNldERyaXZlclN1cHBvcnQgPSBmdW5jdGlvbiBzZXREcml2ZXJTdXBwb3J0KHN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ1JlZGVmaW5pbmcgTG9jYWxGb3JhZ2UgZHJpdmVyOiAnICsgZHJpdmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0gPSBkcml2ZXJPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgIERyaXZlclN1cHBvcnRbZHJpdmVyTmFtZV0gPSBzdXBwb3J0O1xuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCB1c2UgYSB0aGVuLCBzbyB0aGF0IHdlIGNhbiBkZWZpbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJpdmVycyB0aGF0IGhhdmUgc2ltcGxlIF9zdXBwb3J0IG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gYSBibG9ja2luZyBtYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoJ19zdXBwb3J0JyBpbiBkcml2ZXJPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyaXZlck9iamVjdC5fc3VwcG9ydCAmJiB0eXBlb2YgZHJpdmVyT2JqZWN0Ll9zdXBwb3J0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcml2ZXJPYmplY3QuX3N1cHBvcnQoKS50aGVuKHNldERyaXZlclN1cHBvcnQsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJTdXBwb3J0KCEhZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldERyaXZlclN1cHBvcnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZHJpdmVyID0gZnVuY3Rpb24gZHJpdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJpdmVyIHx8IG51bGw7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5nZXREcml2ZXIgPSBmdW5jdGlvbiBnZXREcml2ZXIoZHJpdmVyTmFtZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGdldERyaXZlclByb21pc2UgPSBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA/IFByb21pc2UkMS5yZXNvbHZlKERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSA6IFByb21pc2UkMS5yZWplY3QobmV3IEVycm9yKCdEcml2ZXIgbm90IGZvdW5kLicpKTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKGdldERyaXZlclByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIGdldERyaXZlclByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5nZXRTZXJpYWxpemVyID0gZnVuY3Rpb24gZ2V0U2VyaWFsaXplcihjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VyaWFsaXplclByb21pc2UgPSBQcm9taXNlJDEucmVzb2x2ZShsb2NhbGZvcmFnZVNlcmlhbGl6ZXIpO1xuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHNlcmlhbGl6ZXJQcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVyUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gc2VsZi5fZHJpdmVyU2V0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3JlYWR5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBzZWxmLl9pbml0RHJpdmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9yZWFkeTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnNldERyaXZlciA9IGZ1bmN0aW9uIHNldERyaXZlcihkcml2ZXJzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFpc0FycmF5KGRyaXZlcnMpKSB7XG4gICAgICAgICAgICBkcml2ZXJzID0gW2RyaXZlcnNdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1cHBvcnRlZERyaXZlcnMgPSB0aGlzLl9nZXRTdXBwb3J0ZWREcml2ZXJzKGRyaXZlcnMpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldERyaXZlclRvQ29uZmlnKCkge1xuICAgICAgICAgICAgc2VsZi5fY29uZmlnLmRyaXZlciA9IHNlbGYuZHJpdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRlbmRTZWxmV2l0aERyaXZlcihkcml2ZXIpIHtcbiAgICAgICAgICAgIHNlbGYuX2V4dGVuZChkcml2ZXIpO1xuICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcblxuICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBzZWxmLl9pbml0U3RvcmFnZShzZWxmLl9jb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3JlYWR5O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdERyaXZlcihzdXBwb3J0ZWREcml2ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RHJpdmVySW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJpdmVyUHJvbWlzZUxvb3AoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RHJpdmVySW5kZXggPCBzdXBwb3J0ZWREcml2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBzdXBwb3J0ZWREcml2ZXJzW2N1cnJlbnREcml2ZXJJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJpdmVySW5kZXgrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0RHJpdmVyKGRyaXZlck5hbWUpLnRoZW4oZXh0ZW5kU2VsZldpdGhEcml2ZXIpW1wiY2F0Y2hcIl0oZHJpdmVyUHJvbWlzZUxvb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdObyBhdmFpbGFibGUgc3RvcmFnZSBtZXRob2QgZm91bmQuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZHJpdmVyU2V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkcml2ZXJQcm9taXNlTG9vcCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXJlIG1pZ2h0IGJlIGEgZHJpdmVyIGluaXRpYWxpemF0aW9uIGluIHByb2dyZXNzXG4gICAgICAgIC8vIHNvIHdhaXQgZm9yIGl0IHRvIGZpbmlzaCBpbiBvcmRlciB0byBhdm9pZCBhIHBvc3NpYmxlXG4gICAgICAgIC8vIHJhY2UgY29uZGl0aW9uIHRvIHNldCBfZGJJbmZvXG4gICAgICAgIHZhciBvbGREcml2ZXJTZXREb25lID0gdGhpcy5fZHJpdmVyU2V0ICE9PSBudWxsID8gdGhpcy5fZHJpdmVyU2V0W1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG4gICAgICAgIH0pIDogUHJvbWlzZSQxLnJlc29sdmUoKTtcblxuICAgICAgICB0aGlzLl9kcml2ZXJTZXQgPSBvbGREcml2ZXJTZXREb25lLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBzdXBwb3J0ZWREcml2ZXJzWzBdO1xuICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0RHJpdmVyKGRyaXZlck5hbWUpLnRoZW4oZnVuY3Rpb24gKGRyaXZlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RyaXZlciA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5faW5pdERyaXZlciA9IGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdObyBhdmFpbGFibGUgc3RvcmFnZSBtZXRob2QgZm91bmQuJyk7XG4gICAgICAgICAgICBzZWxmLl9kcml2ZXJTZXQgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9kcml2ZXJTZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3ModGhpcy5fZHJpdmVyU2V0LCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXJTZXQ7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zdXBwb3J0cyA9IGZ1bmN0aW9uIHN1cHBvcnRzKGRyaXZlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuICEhRHJpdmVyU3VwcG9ydFtkcml2ZXJOYW1lXTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl9leHRlbmQgPSBmdW5jdGlvbiBfZXh0ZW5kKGxpYnJhcnlNZXRob2RzQW5kUHJvcGVydGllcykge1xuICAgICAgICBleHRlbmQodGhpcywgbGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl9nZXRTdXBwb3J0ZWREcml2ZXJzID0gZnVuY3Rpb24gX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycykge1xuICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHJpdmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHMoZHJpdmVyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWREcml2ZXJzLnB1c2goZHJpdmVyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZERyaXZlcnM7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5ID0gZnVuY3Rpb24gX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpIHtcbiAgICAgICAgLy8gQWRkIGEgc3R1YiBmb3IgZWFjaCBkcml2ZXIgQVBJIG1ldGhvZCB0aGF0IGRlbGF5cyB0aGUgY2FsbCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyBkcml2ZXIgbWV0aG9kIHVudGlsIGxvY2FsRm9yYWdlIGlzIHJlYWR5LiBUaGVzZSBzdHVic1xuICAgICAgICAvLyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBkcml2ZXIgbWV0aG9kcyBhcyBzb29uIGFzIHRoZSBkcml2ZXIgaXNcbiAgICAgICAgLy8gbG9hZGVkLCBzbyB0aGVyZSBpcyBubyBwZXJmb3JtYW5jZSBpbXBhY3QuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBMaWJyYXJ5TWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2FsbFdoZW5SZWFkeSh0aGlzLCBMaWJyYXJ5TWV0aG9kc1tpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2Uob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IExvY2FsRm9yYWdlKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTG9jYWxGb3JhZ2U7XG59KCk7XG5cbi8vIFRoZSBhY3R1YWwgbG9jYWxGb3JhZ2Ugb2JqZWN0IHRoYXQgd2UgZXhwb3NlIGFzIGEgbW9kdWxlIG9yIHZpYSBhXG4vLyBnbG9iYWwuIEl0J3MgZXh0ZW5kZWQgYnkgcHVsbGluZyBpbiBvbmUgb2Ygb3VyIG90aGVyIGxpYnJhcmllcy5cblxuXG52YXIgbG9jYWxmb3JhZ2VfanMgPSBuZXcgTG9jYWxGb3JhZ2UoKTtcbmxvY2FsZm9yYWdlID0gbG9jYWxmb3JhZ2VfanM7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYWxmb3JhZ2VfanM7XG5cbn0se1wiM1wiOjN9XX0se30sWzRdKSg0KVxufSk7XG4iLCJpbXBvcnQgeyBsb2NhbGZvcmFnZSB9IGZyb20gJy4vbG9jYWxmb3JhZ2UuZXM2LmpzJztcblxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplclByb21pc2UobG9jYWxGb3JhZ2VJbnN0YW5jZSkge1xuICAgIGlmIChnZXRTZXJpYWxpemVyUHJvbWlzZS5yZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldFNlcmlhbGl6ZXJQcm9taXNlLnJlc3VsdDtcbiAgICB9XG4gICAgaWYgKCFsb2NhbEZvcmFnZUluc3RhbmNlIHx8IHR5cGVvZiBsb2NhbEZvcmFnZUluc3RhbmNlLmdldFNlcmlhbGl6ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignbG9jYWxmb3JhZ2UuZ2V0U2VyaWFsaXplcigpIHdhcyBub3QgYXZhaWxhYmxlISAnICsgJ2xvY2FsZm9yYWdlIHYxLjQrIGlzIHJlcXVpcmVkIScpKTtcbiAgICB9XG4gICAgZ2V0U2VyaWFsaXplclByb21pc2UucmVzdWx0ID0gbG9jYWxGb3JhZ2VJbnN0YW5jZS5nZXRTZXJpYWxpemVyKCk7XG4gICAgcmV0dXJuIGdldFNlcmlhbGl6ZXJQcm9taXNlLnJlc3VsdDtcbn1cblxuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SXRlbUtleVZhbHVlKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBsb2NhbGZvcmFnZUluc3RhbmNlLmdldEl0ZW0oa2V5KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXRJREJLZXlSYW5nZSgpIHtcbiAgICAvKiBnbG9iYWwgSURCS2V5UmFuZ2UsIHdlYmtpdElEQktleVJhbmdlLCBtb3pJREJLZXlSYW5nZSAqL1xuICAgIGlmICh0eXBlb2YgSURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBJREJLZXlSYW5nZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3ZWJraXRJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdlYmtpdElEQktleVJhbmdlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1veklEQktleVJhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbW96SURCS2V5UmFuZ2U7XG4gICAgfVxufVxuXG52YXIgaWRiS2V5UmFuZ2UgPSBnZXRJREJLZXlSYW5nZSgpO1xuXG5mdW5jdGlvbiBzdGFydHNXaXRoKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoYW5rcyBodHRwczovL2hhY2tzLm1vemlsbGEub3JnLzIwMTQvMDYvYnJlYWtpbmctdGhlLWJvcmRlcnMtb2YtaW5kZXhlZGRiL1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuX2RiSW5mbztcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IGRiSW5mby5kYi50cmFuc2FjdGlvbihkYkluZm8uc3RvcmVOYW1lLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShkYkluZm8uc3RvcmVOYW1lKTtcblxuICAgICAgICAgICAgdmFyIGtleVJhbmdlVmFsdWUgPSBpZGJLZXlSYW5nZS5ib3VuZChwcmVmaXgsIHByZWZpeCArICd1ZmZmZicsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKGtleVJhbmdlVmFsdWUpO1xuICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDsgLy8gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2N1cnNvci5rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzU3RhcnRpbmdXaXRoKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoYW5rcyBodHRwczovL2hhY2tzLm1vemlsbGEub3JnLzIwMTQvMDYvYnJlYWtpbmctdGhlLWJvcmRlcnMtb2YtaW5kZXhlZGRiL1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuX2RiSW5mbztcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IGRiSW5mby5kYi50cmFuc2FjdGlvbihkYkluZm8uc3RvcmVOYW1lLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShkYkluZm8uc3RvcmVOYW1lKTtcblxuICAgICAgICAgICAgdmFyIGtleVJhbmdlVmFsdWUgPSBpZGJLZXlSYW5nZS5ib3VuZChwcmVmaXgsIHByZWZpeCArICd1ZmZmZicsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdG9yZS5nZXRBbGxLZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldEFsbEtleXMoa2V5UmFuZ2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBfcmVxID0gc3RvcmUub3BlbkN1cnNvcihrZXlSYW5nZVZhbHVlKTtcbiAgICAgICAgICAgICAgICBfcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IF9yZXEucmVzdWx0OyAvLyBldmVudC50YXJnZXQucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnNvci5rZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBfcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChfcmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgkMShwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U2VyaWFsaXplclByb21pc2UobG9jYWxmb3JhZ2VJbnN0YW5jZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBsb2NhbGZvcmFnZUluc3RhbmNlLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIChrZXkgTElLRSA/KScsIFtwcmVmaXggKyAnJSddLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93cyA9IHJlc3VsdHMucm93cztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvd3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcm93cy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50IHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtLmtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXNTdGFydGluZ1dpdGgkMShwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIChrZXkgTElLRSA/KScsIFtwcmVmaXggKyAnJSddLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcm93cyA9IHJlc3VsdHMucm93cztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvd3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcm93cy5pdGVtKGkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzdGFydHNXaXRoJDIocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuXG4gICAgICAgICAgICB2YXIgaXRlbVByb21pc2VzID0gW107XG5cbiAgICAgICAgICAgIHZhciBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoMCwgcHJlZml4TGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Qcm9taXNlcy5wdXNoKGdldEl0ZW1LZXlWYWx1ZS5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoaXRlbVByb21pc2VzKS50aGVuKGZ1bmN0aW9uIChrZXlWYWx1ZVBhaXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlWYWx1ZVBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZVBhaXIgPSBrZXlWYWx1ZVBhaXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXlWYWx1ZVBhaXIua2V5XSA9IGtleVZhbHVlUGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzU3RhcnRpbmdXaXRoJDIocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIHZhciBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoMCwgcHJlZml4TGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gbG9jYWxmb3JhZ2VTdGFydHNXaXRoKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnREcml2ZXIgPSBsb2NhbGZvcmFnZUluc3RhbmNlLmRyaXZlcigpO1xuXG4gICAgaWYgKGN1cnJlbnREcml2ZXIgPT09IGxvY2FsZm9yYWdlSW5zdGFuY2UuSU5ERVhFRERCKSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwgcHJlZml4LCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50RHJpdmVyID09PSBsb2NhbGZvcmFnZUluc3RhbmNlLldFQlNRTCkge1xuICAgICAgICByZXR1cm4gc3RhcnRzV2l0aCQxLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwgcHJlZml4LCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGgkMi5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxmb3JhZ2VLZXlzU3RhcnRpbmdXaXRoKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnREcml2ZXIgPSBsb2NhbGZvcmFnZUluc3RhbmNlLmRyaXZlcigpO1xuXG4gICAgaWYgKGN1cnJlbnREcml2ZXIgPT09IGxvY2FsZm9yYWdlSW5zdGFuY2UuSU5ERVhFRERCKSB7XG4gICAgICAgIHJldHVybiBrZXlzU3RhcnRpbmdXaXRoLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwgcHJlZml4LCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50RHJpdmVyID09PSBsb2NhbGZvcmFnZUluc3RhbmNlLldFQlNRTCkge1xuICAgICAgICByZXR1cm4ga2V5c1N0YXJ0aW5nV2l0aCQxLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwgcHJlZml4LCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtleXNTdGFydGluZ1dpdGgkMi5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXh0ZW5kUHJvdG90eXBlKGxvY2FsZm9yYWdlJCQxKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGxvY2FsZm9yYWdlJCQxKTtcbiAgICBpZiAobG9jYWxmb3JhZ2VQcm90b3R5cGUpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VQcm90b3R5cGUuc3RhcnRzV2l0aCA9IGxvY2FsZm9yYWdlU3RhcnRzV2l0aDtcbiAgICAgICAgbG9jYWxmb3JhZ2VQcm90b3R5cGUua2V5c1N0YXJ0aW5nV2l0aCA9IGxvY2FsZm9yYWdlS2V5c1N0YXJ0aW5nV2l0aDtcbiAgICB9XG59XG5cbnZhciBleHRlbmRQcm90b3R5cGVSZXN1bHQgPSBleHRlbmRQcm90b3R5cGUobG9jYWxmb3JhZ2UpO1xuXG5leHBvcnQgeyBsb2NhbGZvcmFnZVN0YXJ0c1dpdGgsIGxvY2FsZm9yYWdlS2V5c1N0YXJ0aW5nV2l0aCwgZXh0ZW5kUHJvdG90eXBlLCBleHRlbmRQcm90b3R5cGVSZXN1bHQsIHN0YXJ0c1dpdGgkMiBhcyBzdGFydHNXaXRoR2VuZXJpYywga2V5c1N0YXJ0aW5nV2l0aCQyIGFzIGtleXNTdGFydGluZ1dpdGhHZW5lcmljIH07XG5leHBvcnQgeyBsb2NhbGZvcmFnZSB9XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGNvbnZlbmllbnQgc3RvcmFnZSBhYnN0cmFjdGlvbnMuIEltcGxlbWVudGluZyBzdG9yYWdlIGluXG4gKiBhIHV0aWxpdHkgbW9kdWxlLCByYXRoZXIgdGhhbiBkaXJlY3RseSBjYWxsaW5nIGJyb3dzZXIgc3RvcmFnZSBBUElzLCBhdm9pZHMgY29kZVxuICogZHVwbGljYXRpb24gYW5kIGFsbG93cyB1cyB0byBzd2FwIG91dCB0aGUgdW5kZXJseWluZyBzdG9yYWdlIGltcGxlbWVudGF0aW9uIGlmXG4gKiBuZWVkZWQgKGUuZy4sIHN3aXRjaGluZyBmcm9tIGxvY2FsZm9yYWdlIHRvIERleGllLCBvciBkaXJlY3RseSB1c2luZyBicm93c2VyXG4gKiBzdG9yYWdlIEFQSXMpLlxuICpcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuU3RvcmFnZVxuICovXG5cbi8vIEN1cnJlbnRseSBpbXBsZW1lbnRlZCB3aXRoIGxvY2FsZm9yYWdlXG5pbXBvcnQgeyBsb2NhbGZvcmFnZUtleXNTdGFydGluZ1dpdGgsIGxvY2FsZm9yYWdlIH0gZnJvbSBcIi4uL2RlcGVuZGVuY2llcy9sb2NhbGZvcmFnZS1zdGFydHN3aXRoLmpzXCJcblxuZXhwb3J0IHZhciBzdG9yYWdlSW5zdGFuY2VzID0gW107XG4vKipcbiAqIENsYXNzIGZvciBhIGtleS12YWx1ZSBzdG9yYWdlIGFyZWEsIHdoZXJlIHRoZSBrZXkgaXMgYSBzdHJpbmcgYW5kIHRoZSB2YWx1ZSBjYW4gaGF2ZVxuICogYW55IG9mIGEgbnVtYmVyIG9mIGJhc2ljIHR5cGVzLlxuICovXG5leHBvcnQgY2xhc3MgS2V5VmFsdWVTdG9yYWdlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBrZXktdmFsdWUgc3RvcmFnZSBhcmVhLiBOb3RlIHRoYXQsIGJlY2F1c2UgY3JlYXRpbmcgYSBzdG9yYWdlIGFyZWFcbiAgICAgKiByZXF1aXJlcyBhc3luY2hyb25vdXMgY2FsbHMgKHdoaWNoIGNhbm5vdCBoYXBwZW4gaW4gYSBjb25zdHJ1Y3RvciksIHRoZVxuICAgICAqIHN0b3JhZ2UgYXJlYSB3aWxsIG5vdCBiZSBzZXR1cCB1bnRpbCBhIHN1YnNlcXVlbnQgY2FsbCB0byBgaW5pdGlhbGl6ZSgpYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZUFyZWFOYW1lIC0gQSBuYW1lIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqIEBleGFtcGxlIHZhciBleGFtcGxlU3RvcmFnZSA9IGF3YWl0IChuZXcgS2V5VmFsdWVTdG9yYWdlKFwiZXhhbXBsZU5hbWVcIikpLmluaXRpYWxpemUoKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlQXJlYU5hbWUpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlQXJlYU5hbWUgPSBzdG9yYWdlQXJlYU5hbWU7XG4gICAgICAgIHRoaXMuc3RvcmFnZUluc3RhbmNlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZSBjcmVhdGlvbiBvZiB0aGUgc3RvcmFnZSBhcmVhLiBSZXR1cm5zIGl0c2VsZiBmb3IgY29udmVuaWVuY2UuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGtleS12YWx1ZSBzdG9yYWdlIGFyZWEuXG4gICAgICovXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYoIUtleVZhbHVlU3RvcmFnZS5sb2NhbEZvcmFnZUluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBhd2FpdCBsb2NhbGZvcmFnZS5jb25maWcoe1xuICAgICAgICAgICAgICAgIGRyaXZlcjogW2xvY2FsZm9yYWdlLklOREVYRUREQixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZm9yYWdlLldFQlNRTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZm9yYWdlLkxPQ0FMU1RPUkFHRV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEtleVZhbHVlU3RvcmFnZS5sb2NhbEZvcmFnZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JhZ2VJbnN0YW5jZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKCB7IG5hbWU6IHRoaXMuc3RvcmFnZUFyZWFOYW1lIH0gKTtcbiAgICAgICAgc3RvcmFnZUluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB2YWx1ZSBmcm9tIHN0b3JhZ2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdXNlIGluIHRoZSBzdG9yYWdlIGFyZWEuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk+fFByb21pc2U8QXJyYXlCdWZmZXI+fFByb21pc2U8QmxvYj58UHJvbWlzZTxGbG9hdDMyQXJyYXk+fFByb21pc2U8RmxvYXQ2NEFycmF5PnxcbiAgICAgKiBQcm9taXNlPEludDhBcnJheT58UHJvbWlzZTxJbnQxNkFycmF5PnxQcm9taXNlPEludDMyQXJyYXk+fFByb21pc2U8TnVtYmVyPnxQcm9taXNlPE9iamVjdD58UHJvbWlzZTxVaW50OEFycmF5PnxcbiAgICAgKiBQcm9taXNlPFVpbnQ4Q2xhbXBlZEFycmF5PnxQcm9taXNlPFVpbnQxNkFycmF5PnxQcm9taXNlPFVpbnQzMkFycmF5PnxQcm9taXNlPHN0cmluZz59IFRoZSB2YWx1ZSBpbiB0aGVcbiAgICAgKiBzdG9yYWdlIGFyZWEgZm9yIHRoZSBrZXksIG9yIGBudWxsYCBpZiB0aGUga2V5IGlzIG5vdCBpbiBzdG9yYWdlLlxuICAgICAqL1xuICAgIGFzeW5jIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZUluc3RhbmNlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSB2YWx1ZSBpbiBzdG9yYWdlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHVzZSBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqIEBwYXJhbSB7KEFycmF5fEFycmF5QnVmZmVyfEJsb2J8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheXxJbnQ4QXJyYXl8SW50MTZBcnJheXxJbnQzMkFycmF5fFxuICAgICAqIE51bWJlcnxPYmplY3R8VWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxzdHJpbmcpfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICAgICAqIHRvIHN0b3JlIGluIHRoZSBzdG9yYWdlIGFyZWEgZm9yIHRoZSBrZXkuXG4gICAgICovXG4gICAgYXN5bmMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlSW5zdGFuY2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gb2JqZWN0IHdoZXJlIHdpdGggYSBwcm9wZXJ0eS12YWx1ZSBwYWlyIGZvciBlYWNoIGtleS12YWx1ZSBwYWlyIGluIHRoZSBzdG9yYWdlIGFyZWEuXG4gICAgICogTm90ZSB0aGF0IHRoaXMgY291bGQgYmUgc2xvdyBhbmQgY29uc3VtZSBleGNlc3NpdmUgbWVtb3J5IGlmIHRoZSBzdG9yYWdlIGFyZWEgY29udGFpbnMgYSBsb3RcbiAgICAgKiBvZiBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCB0aGF0IHJlZmxlY3RzIHRoZSBjb250ZW50IGluIHRoZSBzdG9yYWdlIGFyZWEuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0Q29udGVudHNBc09iamVjdCgpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHsgfTtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlSW5zdGFuY2UuaXRlcmF0ZSgodmFsdWUsIGtleSwgaXRlcmF0aW9uTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBvdXRwdXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAY2FsbGJhY2sgaXRlcmF0b3JcbiAgICAgKiBAcGFyYW0geyhBcnJheXxBcnJheUJ1ZmZlcnxCbG9ifEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXl8SW50OEFycmF5fEludDE2QXJyYXl8SW50MzJBcnJheXxcbiAgICAgKiBOdW1iZXJ8T2JqZWN0fFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8c3RyaW5nKX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZXJhdGlvbk51bWJlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIGVudHJpZXMgaW4gdGhlIHN0b3JhZ2UgYXJlYS4gTm90ZSB0aGF0IGl0ZXJhdGlvblxuICAgICAqIHdpbGwgc3RvcCBpZiBgY2FsbGJhY2tgIHJldHVybnMgYW55dGhpbmcgbm9uLWB1bmRlZmluZWRgLlxuICAgICAqXG4gICAgICogQXMgbG9uZyBhcyB3ZSdyZSB1c2luZyBMb2NhbEZvcmFnZSwgdGhpcyBpcyBlYXN5IGFuZCBwcmVzdW1hYmx5IG5vdFxuICAgICAqIG1lbW9yeS1pbnRlbnNpdmUsIGFzIGxvbmcgYXMgdGhlIGNhbGxiYWNrIGlzbid0IHN0b3JpbmcgYWxsIG9mIHRoZSBlbnRpcmVzLlxuICAgICAqIEBwYXJhbSB7aXRlcmF0b3J9IGNhbGxiYWNrIC0gZnVuY3Rpb24gY2FsbGVkIG9uIGVhY2gga2V5LXZhbHVlIHBhaXJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBpdGVyYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5pdGVyYXRlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBhc3luYyBrZXlzU3RhcnRpbmdXaXRoKGtleVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlSW5zdGFuY2Uua2V5c1N0YXJ0aW5nV2l0aChrZXlQcmVmaXgpO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0c1dpdGgoa2V5UHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5zdGFydHNXaXRoKGtleVByZWZpeCk7XG4gICAgfVxufVxuXG5LZXlWYWx1ZVN0b3JhZ2UubG9jYWxGb3JhZ2VJbml0aWFsaXplZCA9IGZhbHNlOyAvLyB3b3JrYXJvdW5kIGZvciBzdGF0aWMgY2xhc3MgdmFyaWFibGVcblxuLyoqIENsYXNzIGZvciBtYWludGFpbmluZyBwZXJzaXN0ZW50IGNvdW50ZXJzIChlLmcuLCB1bmlxdWUgSURzKS4gKi9cbmV4cG9ydCBjbGFzcyBDb3VudGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwZXJzaXN0ZW50IGNvdW50ZXIuIE5vdGUgdGhhdCwgYmVjYXVzZSBjcmVhdGluZyBhIGNvdW50ZXJcbiAgICAgKiByZXF1aXJlcyBhc3luY2hyb25vdXMgY2FsbHMgKHdoaWNoIGNhbm5vdCBoYXBwZW4gaW4gYSBjb25zdHJ1Y3RvciksXG4gICAgICogdGhlIGNvdW50ZXIgd2lsbCBub3QgYmUgc2V0dXAgdW50aWwgYSBzdWJzZXF1ZW50IGNhbGwgdG8gYGluaXRpYWxpemUoKWAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvdW50ZXJOYW1lIC0gQSBuYW1lIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyB0aGUgY291bnRlci5cbiAgICAgKiBAZXhhbXBsZSB2YXIgZXhhbXBsZUNvdW50ZXIgPSBhd2FpdCAobmV3IENvdW50ZXIoXCJleGFtcGxlTmFtZVwiKSkuaW5pdGlhbGl6ZSgpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvdW50ZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuY291bnRlck5hbWUgPSBjb3VudGVyTmFtZTtcbiAgICAgICAgdGhpcy5jb3VudGVyVmFsdWUgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXBsZXRlIGNyZWF0aW9uIG9mIHRoZSBwZXJzaXN0ZW50IGNvdW50ZXIuIFJldHVybnMgaXRzZWxmIGZvciBjb252ZW5pZW5jZS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGVyc2lzdGVudCBjb3VudGVyLlxuICAgICAqL1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmKENvdW50ZXIuc3RvcmFnZSA9PSBudWxsKVxuICAgICAgICAgICAgQ291bnRlci5zdG9yYWdlID0gYXdhaXQgKG5ldyBLZXlWYWx1ZVN0b3JhZ2UoXCJXZWJTY2llbmNlLlV0aWxpdGllcy5TdG9yYWdlLkNvdW50ZXJcIikpLmluaXRpYWxpemUoKTtcbiAgICAgICAgdmFyIGluaXRpYWxDb3VudGVyVmFsdWUgPSBhd2FpdCBDb3VudGVyLnN0b3JhZ2UuZ2V0KHRoaXMuY291bnRlck5hbWUpO1xuICAgICAgICBpZihpbml0aWFsQ291bnRlclZhbHVlICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJWYWx1ZSA9IGluaXRpYWxDb3VudGVyVmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF3YWl0IENvdW50ZXIuc3RvcmFnZS5zZXQodGhpcy5jb3VudGVyTmFtZSwgdGhpcy5jb3VudGVyVmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNvdW50ZXIuIFRoZSB2YWx1ZSBpcyBjYWNoZWQgaW4gbWVtb3J5LCB3aGljaCBhbGxvd3NcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIHRvIGJlIHN5bmNocm9ub3VzLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb3VudGVyLlxuICAgICAqL1xuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlclZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGluY3JlbWVudEJ5QW5kR2V0KGluY1ZhbHVlKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q291bnRlclZhbHVlID0gKHRoaXMuY291bnRlclZhbHVlID0gdGhpcy5jb3VudGVyVmFsdWUgKyBpbmNWYWx1ZSk7XG4gICAgICAgIGF3YWl0IENvdW50ZXIuc3RvcmFnZS5zZXQodGhpcy5jb3VudGVyTmFtZSwgdGhpcy5jb3VudGVyVmFsdWUpO1xuICAgICAgICByZXR1cm4gY3VycmVudENvdW50ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVyIGFuZCByZXR1cm4gdGhlIGluY3JlbWVudGVkIHZhbHVlLlxuICAgICAqIFRoZSBjYWNoZWQgY291bnRlciB2YWx1ZSBpcyBzeW5jaHJvbm91c2x5IGluY3JlbWVudGVkOyB0aGUgc3RvcmVkXG4gICAgICogY291bnRlciB2YWx1ZSBpcyBhc3luY2hyb25vdXNseSBpbmNyZW1lbnRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSAtIFRoZSBjb3VudGVyIHZhbHVlIGFmdGVyIGluY3JlbWVudGluZy5cbiAgICAgKi9cbiAgICBhc3luYyBpbmNyZW1lbnRBbmRHZXQoKSB7XG4gICAgICAgIC8vIFNhdmluZyB0aGUgY3VycmVudCBjb3VudGVyIHZhbHVlIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyBkdXJpbmdcbiAgICAgICAgLy8gdGhlIGFzeW5jaHJvbm91cyBzYXZlIHRvIHN0b3JhZ2VcbiAgICAgICAgdmFyIGN1cnJlbnRDb3VudGVyVmFsdWUgPSAodGhpcy5jb3VudGVyVmFsdWUgPSB0aGlzLmNvdW50ZXJWYWx1ZSArIDEpO1xuICAgICAgICBhd2FpdCBDb3VudGVyLnN0b3JhZ2Uuc2V0KHRoaXMuY291bnRlck5hbWUsIHRoaXMuY291bnRlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDb3VudGVyVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciBhbmQgcmV0dXJuIHRoZSB2YWx1ZSBwcmlvciB0b1xuICAgICAqIGluY3JlbWVudGluZy4gSWRlbnRpY2FsIHRvIHRoZSBQcm9taXNlIHJldHVybmVkIGJ5XG4gICAgICogYGNvdW50ZXIuaW5jcmVtZW50QW5kR2V0KCkudGhlbih2YWx1ZSA9PiByZXR1cm4gdmFsdWUgLSAxKWAuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gLSBUaGUgY291bnRlciB2YWx1ZSBiZWZvcmUgaW5jcmVtZW50aW5nLlxuICAgICAqL1xuICAgIGFzeW5jIGdldEFuZEluY3JlbWVudCgpIHtcbiAgICAgICAgdmFyIHJldCA9IGF3YWl0IHRoaXMuaW5jcmVtZW50KCkgLSAxO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgdmFsdWUgb2YgdGhlIGNvdW50ZXIsIGlnbm9yaW5nIHRoZSB2YWx1ZS4gSWRlbnRpY2FsIHRvXG4gICAgICogdGhlIFByb21pc2UgcmV0dXJuZWQgYnkgYGNvdW50ZXIuaW5jcmVtZW50QW5kR2V0LnRoZW4odmFsdWUgPT4gcmV0dXJuKWAuXG4gICAgICovXG4gICAgYXN5bmMgaW5jcmVtZW50KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5pbmNyZW1lbnRBbmRHZXQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBbmRSZXNldCgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDb3VudGVyVmFsdWUgPSB0aGlzLmNvdW50ZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5jb3VudGVyVmFsdWUgPSAwO1xuICAgICAgICBhd2FpdCBDb3VudGVyLnN0b3JhZ2Uuc2V0KHRoaXMuY291bnRlck5hbWUsIHRoaXMuY291bnRlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDb3VudGVyVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB3aXRoIGEgcHJvcGVydHktdmFsdWUgcGFpciBmb3IgZWFjaCBjb3VudGVyIG5hbWUtdmFsdWUgcGFpci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3QgdGhhdCByZWZsZWN0cyB0aGUgc2V0IG9mIGNvdW50ZXJzLlxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBnZXRDb250ZW50c0FzT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgQ291bnRlci5zdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVcmwodXJsKSB7XG4gICAgdmFyIHVybE9iaiA9IG5ldyBVUkwodXJsKTtcbiAgICB2YXIgbm9ybWFsaXplZFVybCA9ICh1cmxPYmoucHJvdG9jb2wgPyB1cmxPYmoucHJvdG9jb2wgOiBcImh0dHBzOlwiKSArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvL1wiICsgdXJsT2JqLmhvc3RuYW1lICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAodXJsT2JqLnBhdGhuYW1lID8gdXJsT2JqLnBhdGhuYW1lIDogXCJcIik7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRVcmw7XG59XG5cbi8vIFdvcmthcm91bmQgZm9yIHN0YXRpYyBjbGFzcyB2YXJpYWJsZVxuQ291bnRlci5zdG9yYWdlID0gbnVsbDtcblxuLy8gUHJldmVudHMgSW5kZXhlZERCIGRhdGEgZnJvbSBnZXR0aW5nIGRlbGV0ZWQgd2l0aG91dCB1c2VyIGludGVydmVudGlvblxuLy8gSWdub3JpbmcgdGhlIHByb21pc2UgcmVzb2x1dGlvbiBiZWNhdXNlIHdlIHN0aWxsIHdhbnQgdG8gdXNlIHN0b3JhZ2Vcbi8vIGV2ZW4gaWYgRmlyZWZveCB3b24ndCBndWFyYW50ZWUgcGVyc2lzdGVuY2Vcbm5hdmlnYXRvci5zdG9yYWdlLnBlcnNpc3QoKTsiLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgY29udmVuaWVuY2Ugd3JhcHBlciBhcm91bmQgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgLFxuICogcm91dGluZyBtZXNzYWdlcyB0byB0aGUgcmlnaHQgbGlzdGVuZXIocykgYmFzZWQgb24gdGhlIG1lc3NhZ2UgdHlwZS5cbiAqIE1lc3NhZ2UgdHlwZXMgYXJlIGRlZmluZWQgYXMgc3RyaW5ncywgYW5kIGEgbWVzc2FnZSBtdXN0IGJlIGFuIG9iamVjdCB3aXRoIGFcbiAqIHR5cGUgcHJvcGVydHkgdG8gYmUgaGFuZGxlZCBjb3JyZWN0bHkuXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLk1lc3NhZ2luZ1xuICovXG5cbmltcG9ydCAqIGFzIERlYnVnZ2luZyBmcm9tIFwiLi9EZWJ1Z2dpbmcuanNcIlxuXG5jb25zdCBkZWJ1Z0xvZyA9IERlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2coXCJVdGlsaXRpZXMuTWVzc2FnaW5nXCIpO1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgc3RvcmVzIG1lc3NhZ2UgbGlzdGVuZXJzLiBUaGUga2V5cyBhcmUgbWVzc2FnZSB0eXBlcyBhbmQgdGhlIHZhbHVlc1xuICogYXJlIFNldHMgb2YgbWVzc2FnZSBsaXN0ZW5lcnMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8c3RyaW5nLFNldDxmdW5jdGlvbj4+fVxuICovXG5jb25zdCBtZXNzYWdlUm91dGVyID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgc3RvcmVzIG1lc3NhZ2Ugc2NoZW1hcy4gVGhlIGtleXMgYXJlIG1lc3NhZ2UgdHlwZXMgYW5kIHRoZSB2YWx1ZXNcbiAqIGFyZSBzY2hlbWFzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPHN0cmluZyxPYmplY3Q+fVxuICovXG5jb25zdCBtZXNzYWdlU2NoZW1hcyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBtb2R1bGUncyBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAgbGlzdGVuZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4vKipcbiAqIEEgbGlzdGVuZXIgZm9yIGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYCB0aGF0IHJvdXRlcyBtZXNzYWdlcyB0byB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyKHMpIGJhc2VkIG9uIG1lc3NhZ2UgdHlwZS4gU2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWBcbiAqIGZvciBkZXRhaWwgb24gdGhlIHBhcmFtZXRlcnMuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBBbiBvcHRpb25hbCByZXNwb25zZSB0byB0aGUgbWVzc2FnZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJyb3dzZXJSdW50aW1lTGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICB2YXIgbWVzc2FnZUxpc3RlbmVycztcbiAgICB2YXIgbWVzc2FnZVNjaGVtYTtcbiAgICB2YXIgYnJvd3NlclJ1bnRpbWVSZXR1cm5WYWx1ZTtcbiAgICAvLyBJZiB0aGUgbWVzc2FnZSBpcyBub3QgaW4gYW4gZXhwZWN0ZWQgZm9ybWF0IG9yIGRvZXMgbm90IGhhdmUgYXQgbGVhc3RcbiAgICAvLyBvbmUgcmVnaXN0ZXJlZCBsaXN0ZW5lciwgaWdub3JlIGl0LlxuICAgIGlmICgobWVzc2FnZSA9PSBudWxsKSB8fFxuICAgICAgICAodHlwZW9mIG1lc3NhZ2UgIT09IFwib2JqZWN0XCIpIHx8XG4gICAgICAgICEoXCJ0eXBlXCIgaW4gbWVzc2FnZSkgfHxcbiAgICAgICAgKHR5cGVvZiBtZXNzYWdlLnR5cGUgIT09IFwic3RyaW5nXCIpIHx8XG4gICAgICAgICgobWVzc2FnZUxpc3RlbmVycyA9IG1lc3NhZ2VSb3V0ZXIuZ2V0KG1lc3NhZ2UudHlwZSkpID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGRlYnVnTG9nKFwiVW5leHBlY3RlZCBicm93c2VyLnJ1bnRpbWUgbWVzc2FnZTogXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzY2hlbWEgcmVnaXN0ZXJlZCBmb3IgdGhpcyBtZXNzYWdlIHR5cGUsIGNoZWNrIHRoZSBtZXNzYWdlIGFnYWluc3QgdGhlIHNjaGVtYVxuICAgIGlmKChtZXNzYWdlU2NoZW1hID0gbWVzc2FnZVNjaGVtYXMuZ2V0KG1lc3NhZ2UudHlwZSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yKHZhciBmaWVsZCBpbiBtZXNzYWdlU2NoZW1hKSB7XG4gICAgICAgICAgICBpZiAoIShmaWVsZCBpbiBtZXNzYWdlKSB8fCAodHlwZW9mIG1lc3NhZ2VbZmllbGRdICE9IG1lc3NhZ2VTY2hlbWFbZmllbGRdKSkge1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nKFwiTWlzbWF0Y2ggYmV0d2VlbiBtZXNzYWdlIGFuZCBzY2hlbWE6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IG1lc3NhZ2VMaXN0ZW5lciBvZiBtZXNzYWdlTGlzdGVuZXJzKSB7XG4gICAgICAgIHZhciBtZXNzYWdlTGlzdGVuZXJSZXR1cm5WYWx1ZSA9IG1lc3NhZ2VMaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgICAgIGlmICgobWVzc2FnZUxpc3RlbmVyUmV0dXJuVmFsdWUgIT09IHVuZGVmaW5lZCkgJiYgKGJyb3dzZXJSdW50aW1lUmV0dXJuVmFsdWUgIT09IHVuZGVmaW5lZCkpXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcIk11bHRpcGxlIGxpc3RlbmVyIHJldHVybiB2YWx1ZXMgZm9yIG1lc3NhZ2UgdHlwZSBcIiArIG1lc3NhZ2UudHlwZSk7XG4gICAgICAgIGJyb3dzZXJSdW50aW1lUmV0dXJuVmFsdWUgPSBtZXNzYWdlTGlzdGVuZXJSZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGJyb3dzZXJSdW50aW1lUmV0dXJuVmFsdWU7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgbWVzc2FnZSBsaXN0ZW5lci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlVHlwZSAtIFRoZSB0eXBlIG9mIG1lc3NhZ2UgdGhhdCB0cmlnZ2VycyB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXNzYWdlTGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24sIHdoaWNoIHJlY2VpdmVzIHRoZSBzYW1lXG4gKiBwYXJhbWV0ZXJzIGFzIGlmIGl0IGhhZCBiZWVuIGNhbGxlZCBieSBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAsIGFuZCB0aGF0IGNhblxuICogcmV0dXJuIHRoZSBzYW1lIHZhbHVlcyBhcyBhIGxpc3RlbmVyIHRvIGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWVzc2FnZVNjaGVtYV0gLSBBbiBvcHRpb25hbCBzY2hlbWEgdG8gcmVnaXN0ZXIgZm9yIHRoZSBtZXNzYWdlIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKG1lc3NhZ2VUeXBlLCBtZXNzYWdlTGlzdGVuZXIsIG1lc3NhZ2VTY2hlbWEpIHtcbiAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihicm93c2VyUnVudGltZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZUxpc3RlbmVycyA9IG1lc3NhZ2VSb3V0ZXIuZ2V0KG1lc3NhZ2VUeXBlKTtcbiAgICBpZiAobWVzc2FnZUxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIG1lc3NhZ2VSb3V0ZXIuc2V0KG1lc3NhZ2VUeXBlLCBtZXNzYWdlTGlzdGVuZXJzKTtcbiAgICB9XG4gICAgbWVzc2FnZUxpc3RlbmVycy5hZGQobWVzc2FnZUxpc3RlbmVyKTtcblxuICAgIGlmKG1lc3NhZ2VTY2hlbWEgIT09IHVuZGVmaW5lZClcbiAgICAgICAgcmVnaXN0ZXJTY2hlbWEobWVzc2FnZVR5cGUsIG1lc3NhZ2VTY2hlbWEpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIG1lc3NhZ2Ugc2NoZW1hLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VUeXBlIC0gVGhlIHR5cGUgb2YgbWVzc2FnZSB0aGF0IG11c3QgZm9sbG93IHRoZSBzY2hlbWEuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVNjaGVtYSAtIEFuIG9iamVjdCB3aGVyZSBlYWNoIGZpZWxkIGhhcyBhIHZhbHVlIHRoYXQgaXNcbiAqIGEgYnVpbHQtaW4gdHlwZSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjaGVtYShtZXNzYWdlVHlwZSwgbWVzc2FnZVNjaGVtYSkge1xuICAgIGlmKG1lc3NhZ2VTY2hlbWFzLmhhcyhtZXNzYWdlVHlwZSkpXG4gICAgICAgIGRlYnVnTG9nKFwiTXVsdGlwbGUgc2NoZW1hcyBmb3IgbWVzc2FnZSB0eXBlIFwiICsgbWVzc2FnZVR5cGUpO1xuICAgIG1lc3NhZ2VTY2hlbWFzLnNldChtZXNzYWdlVHlwZSwgbWVzc2FnZVNjaGVtYSk7XG59IiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBlbmFibGVzIHJlZ2lzdGVyaW5nIGJyb3dzZXIgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMgd2l0aFxuICogdmFyeWluZyBkZXRlY3Rpb24gaW50ZXJ2YWxzLiBUaGUgbW9kdWxlIGlzIG5lZWRlZCBiZWNhdXNlIHRoZVxuICogV2ViRXh0ZW5zaW9ucyBgaWRsZWAgQVBJIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIG9uZSBkZXRlY3Rpb25cbiAqIGludGVydmFsIHBlciBleHRlbnNpb24uXG4gKiBcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIG1vZHVsZSBjb21iaW5lcyB0aGUgV2ViRXh0ZW5zaW9ucyBgaWRsZWBcbiAqIEFQSSBhbmQgYHNldFRpbWVvdXRgLiBJdCBjb25maWd1cmVzIHRoZSBgaWRsZWAgQVBJIHRvIHVzZSB0aGVcbiAqIG1pbmltdW0gaWRsZSBkZXRlY3Rpb24gaW50ZXJ2YWwgd2l0aCBgaWRsZS5zZXREZXRlY3Rpb25JbnRlcnZhbCgpYCxcbiAqIHJlZ2lzdGVycyBhIGxpc3RlbmVyIGZvciB0aGUgYGlkbGUub25TdGF0ZUNoYW5nZWRgIGV2ZW50LCBhbmQgdGhlblxuICogdXNlcyBgc2V0VGltZW91dGAgYWZ0ZXIgdGhlIGJyb3dzZXIgZ29lcyBpZGxlIHRvIG5vdGlmeSBpZGxlIHN0YXRlXG4gKiBsaXN0ZW5lcnMgd2l0aCBkZXRlY3Rpb24gaW50ZXJ2YWxzIGdyZWF0ZXIgdGhhbiB0aGUgbWluaW11bS4gSWYgdGhlcmVcbiAqIGFyZSBhbnkgcGVuZGluZyBpZGxlIG5vdGlmaWNhdGlvbiB0aW1lb3V0cyB3aGVuIHRoZSBicm93c2VyIGdvZXNcbiAqIGFjdGl2ZSwgdGhvc2UgdGltZW91dHMgYXJlIGNsZWFyZWQuXG4gKiBcbiAqIFNvbWUgaW1wbGVtZW50YXRpb24gcXVpcmtzIHRvIGJlIGF3YXJlIG9mIGZvciB1c2UgYW5kIGZ1dHVyZVxuICogZGV2ZWxvcG1lbnQ6XG4gKiBcbiAqICAgKiBUaGlzIG1vZHVsZSBkZXBlbmRzIG9uIGNvbmZpZ3VyaW5nIHRoZSBkZXRlY3Rpb24gaW50ZXJ2YWxcbiAqICAgICBmb3IgdGhlIGBpZGxlYCBBUEkgdG8gaXRzIG1pbmltdW0gdmFsdWUuIEFueSBzdWJzZXF1ZW50IGNoYW5nZXMgdG9cbiAqICAgICB0aGUgaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWwgaW4gdGhlIGBpZGxlYCBBUEkgd2lsbCByZXN1bHQgaW5cbiAqICAgICB1bnByZWRpY3RhYmxlIGJlaGF2aW9yLlxuICogXG4gKiAgICogSWRsZSBzdGF0ZSBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoaXMgbW9kdWxlIGFyZSBub3QgZ3VhcmFudGVlZCB0b1xuICogICAgIHJlZmxlY3QgaWRsZSBzdGF0ZSB0cmFuc2l0aW9ucyAoZS5nLiwgYSBsaXN0ZW5lciBtaWdodCByZWNlaXZlXG4gKiAgICAgYFwiYWN0aXZlXCJgIGZvbGxvd2VkIGJ5IGBcImFjdGl2ZVwiYCkuIFdlIG1pZ2h0IHdhbnQgdG8gaW1wbGVtZW50IHRoaXNcbiAqICAgICBndWFyYW50ZWUgZXZlbnR1YWxseS5cbiAqIFxuICogICAqIEJlY2F1c2UgdGhlIGJyb3dzZXIgaWRsZSBzdGF0ZSByZXNldHMgd2l0aCBlYWNoIGJyb3dzZXIgc2Vzc2lvbixcbiAqICAgICBpdCBpcyBub3QgYSBwcm9ibGVtIHRoYXQgdGltZW91dHMgZG8gbm90IHBlcnNpc3QgYmV0d2VlbiBicm93c2VyXG4gKiAgICAgc2Vzc2lvbnMuXG4gKiBcbiAqICAgKiBUaGUgbW9kdWxlIGRvZXMgbm90IGRpcmVjdGx5IGludGVyYWN0IHdpdGggdGhlIEZpcmVmb3hcbiAqICAgICBbYG5zSWRsZVNlcnZpY2VgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvVGVjaC9YUENPTS9SZWZlcmVuY2UvSW50ZXJmYWNlL25zSUlkbGVTZXJ2aWNlKSxcbiAqICAgICBldmVuIHRob3VnaCBpdCBzdXBwb3J0cyB2YXJ5aW5nIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFscywgaW5cbiAqICAgICBvcmRlciB0byBtaW5pbWl6ZSBwcml2aWxlZ2VkIGV4dGVuc2lvbiBjb2RlLlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLklkbGVcbiAqL1xuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsIChpbiBzZWNvbmRzKSBzdXBwb3J0ZWQgYnlcbiAqIHRoZSBgaWRsZWAgQVBJLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7bnVtYmVyfVxuICovXG5jb25zdCBtaW5pbXVtSWRsZVN0YXRlRGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgPSAxNTtcblxuLyoqXG4gKiBXaGV0aGVyIHdlIGhhdmUgY29uZmlndXJlZCAgY29uZmlndXJlZCB0aGUgaWRsZSBzdGF0ZSBkZXRlY3Rpb25cbiAqIGludGVydmFsLCBjYWNoZWQgdGhlIGlkbGUgc3RhdGUsIGFuZCByZWdpc3RlcmVkIHRoZSBpZGxlIHN0YXRlXG4gKiBsaXN0ZW5lci5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4vKipcbiAqIEFuIGVzdGltYXRlIG9mIHRoZSB0aW1lIChpbiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoKSB3aGVuIHRoZVxuICogYnJvd3NlciBsYXN0IGVudGVyZWQgYW4gaWRsZSBzdGF0ZS4gR2VuZXJhdGVkIGJ5IHN1YnRyYWN0aW5nIHRoZVxuICogaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWwgKGNvbnZlcnRlZCB0byBtaWxsaXNlY29uZHMpIGZyb20gdGhlXG4gKiB0aW1lIHRoZSBicm93c2VyIGxhc3QgZmlyZWQgYW4gaWRsZSBzdGF0ZSBub3RpZmljYXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgbGFzdElkbGVUaW1lID0gLTE7XG5cbi8qKlxuICogQSBjYWNoZWQgY29weSBvZiB0aGUgYnJvd3NlcidzIGN1cnJlbnQgaWRsZSBzdGF0ZS4gVGhpcyBjYWNoaW5nIGVuYWJsZXNcbiAqIHN5bmNocm9ub3VzIGNoZWNraW5nIG9mIHRoZSBjdXJyZW50IGlkbGUgc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge3N0cmluZ31cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBjdXJyZW50SWRsZVN0YXRlID0gXCJhY3RpdmVcIjtcblxuLyoqXG4gKiBBIE1hcCB0aGF0IHN0b3JlcyBicm93c2VyIGlkbGUgc3RhdGUgbGlzdGVuZXJzLiBUaGUga2V5cyBhcmVcbiAqIGRldGVjdGlvbiBpbnRlcnZhbHMgaW4gc2Vjb25kcyBhbmQgdGhlIHZhbHVlcyBhcmUgU2V0cyBvZlxuICogYnJvd3NlciBpZGxlIHN0YXRlIGxpc3RlbmVycy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxudW1iZXIsU2V0PGZ1bmN0aW9uPj59XG4gKi9cbmNvbnN0IGlkbGVTdGF0ZUxpc3RlbmVycyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBBIE1hcCB0aGF0IHN0b3JlcyBicm93c2VyIGlkbGUgc3RhdGUgdGltZW91dHMuIFRoZSBrZXlzIGFyZVxuICogZGV0ZWN0aW9uIGludGVydmFscyBpbiBzZWNvbmRzIGFuZCB0aGUgdmFsdWVzIGFyZSBgdGltZW91dElEYFxuICogdmFsdWVzIGZyb20gYHNldFRpbWVvdXQoKWAuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLG51bWJlcj59XG4gKi9cbmNvbnN0IGlkbGVTdGF0ZVRpbWVvdXRzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIENvbmZpZ3VyZSB0aGUgaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWwsIGNhY2hlIHRoZSBpZGxlIHN0YXRlLFxuICogYW5kIHJlZ2lzdGVyIHRoZSBpZGxlIHN0YXRlIGxpc3RlbmVyLlxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZihpbml0aWFsaXplZClcbiAgICAgICAgcmV0dXJuO1xuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBicm93c2VyLmlkbGUuc2V0RGV0ZWN0aW9uSW50ZXJ2YWwobWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKTtcbiAgICBjdXJyZW50SWRsZVN0YXRlID0gYXdhaXQgYnJvd3Nlci5pZGxlLnF1ZXJ5U3RhdGUobWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKTtcbiAgICBpZihjdXJyZW50SWRsZVN0YXRlID09PSBcImlkbGVcIilcbiAgICAgICAgbGFzdElkbGVUaW1lID0gRGF0ZS5ub3coKSAtIChtaW5pbXVtSWRsZVN0YXRlRGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgKiAxMDAwKTtcbiAgICBicm93c2VyLmlkbGUub25TdGF0ZUNoYW5nZWQuYWRkTGlzdGVuZXIoaWRsZU9uU3RhdGVDaGFuZ2VkTGlzdGVuZXIpO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBicm93c2VyIGhhcyBiZWVuIGlkbGUgZm9yIGEgc3BlY2lmaWVkIHRpbWUuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHN5bmNocm9ub3VzLCB1bmxpa2UgYGlkbGUucXVlcnlTdGF0ZWAuIE5vdGUgdGhhdCxcbiAqIGlmIGFuIGlkbGUgc3RhdGUgbGlzdGVuZXIgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQsIHRoaXMgZnVuY3Rpb25cbiAqIHdpbGwgYWx3YXlzIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhY3RpdmUgc3RhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgLSBUaGUgZGV0ZWN0aW9uIGludGVydmFsXG4gKiB0byB1c2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RhdGUoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpIHtcbiAgICBpZihjdXJyZW50SWRsZVN0YXRlICE9PSBcImlkbGVcIilcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJZGxlU3RhdGU7XG5cbiAgICBpZihEYXRlLm5vdygpID49IChsYXN0SWRsZVRpbWUgKyAoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgKiAxMDAwKSkpXG4gICAgICAgIHJldHVybiBcImlkbGVcIjtcblxuICAgIHJldHVybiBcImFjdGl2ZVwiOyAgICBcbn1cblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZvciBgaWRsZS5vblN0YXRlQ2hhbmdlZGAgdGhhdCBzdXBwb3J0cyBub3RpZnlpbmdcbiAqIGlkbGUgc3RhdGUgbGlzdGVuZXJzIHdpdGggdmFyeWluZyBkZXRlY3Rpb24gaW50ZXJ2YWxzLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaWRsZU9uU3RhdGVDaGFuZ2VkTGlzdGVuZXIobmV3U3RhdGUpIHtcbiAgICBjdXJyZW50SWRsZVN0YXRlID0gbmV3U3RhdGU7XG5cbiAgICAvLyBJZiB0aGUgYnJvd3NlciBpZGxlIHN0YXRlIHRyYW5zaXRpb25zIHRvIG5vbi1pZGxlLi4uXG4gICAgaWYobmV3U3RhdGUgIT09IFwiaWRsZVwiKSB7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgcGVuZGluZyBub3RpZmljYXRpb24gdGltZW91dHMgYW5kIGZvcmdldCB0aGUgdGltZW91dCBJRHNcbiAgICAgICAgZm9yKGNvbnN0IGlkbGVTdGF0ZVRpbWVvdXRJRCBvZiBpZGxlU3RhdGVUaW1lb3V0cy52YWx1ZXMoKSlcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZGxlU3RhdGVUaW1lb3V0SUQpO1xuICAgICAgICBpZGxlU3RhdGVUaW1lb3V0cy5jbGVhcigpO1xuXG4gICAgICAgIC8vIE5vdGlmeSBhbGwgdGhlIGlkbGUgc3RhdGUgbGlzdGVuZXJzXG4gICAgICAgIGZvcihjb25zdCBpZGxlU3RhdGVMaXN0ZW5lclNldCBvZiBpZGxlU3RhdGVMaXN0ZW5lcnMudmFsdWVzKCkpXG4gICAgICAgICAgICBmb3IoY29uc3QgaWRsZVN0YXRlTGlzdGVuZXIgb2YgaWRsZVN0YXRlTGlzdGVuZXJTZXQpXG4gICAgICAgICAgICAgICAgaWRsZVN0YXRlTGlzdGVuZXIobmV3U3RhdGUucmVwZWF0KDEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBicm93c2VyIGlkbGUgc3RhdGUgdHJhbnNpdGlvbnMgdG8gaWRsZS4uLlxuXG4gICAgLy8gUmVtZW1iZXIgYW4gZXN0aW1hdGUgb2Ygd2hlbiB0aGUgYnJvd3NlciBsYXN0IHdlbnQgaW50byBpZGxlIHN0YXRlXG4gICAgbGFzdElkbGVUaW1lID0gRGF0ZS5ub3coKSAtIChtaW5pbXVtSWRsZVN0YXRlRGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgKiAxMDAwKTtcblxuICAgIC8vIFNldCB0aW1lb3V0cyBmb3IgYWxsIHRoZSBpZGxlIHN0YXRlIGxpc3RlbmVyc1xuICAgIGZvcihjb25zdCBbZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMsIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbF0gb2YgaWRsZVN0YXRlTGlzdGVuZXJzKVxuICAgICAgICBzY2hlZHVsZUlkbGVTdGF0ZVRpbWVvdXQoaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsLCBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG59XG5cbi8qKlxuICogU2NoZWR1bGUgYSB0aW1lb3V0IGZvciBhIHNldCBvZiBpZGxlIHN0YXRlIGxpc3RlbmVycy5cbiAqIEBwYXJhbSB7U2V0PGZ1bmN0aW9uPn0gaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsIC0gVGhlIHNldCBvZiBpZGxlIHN0YXRlIGxpc3RlbmVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAtIFRoZSBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbCAoaW4gc2Vjb25kcykgZm9yIHRoaXMgc2V0IG9mIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSB0aW1lb3V0IElEIGZvciB0aGUgc2NoZWR1bGVkIHRpbWVvdXQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzY2hlZHVsZUlkbGVTdGF0ZVRpbWVvdXQoaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsLCBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcykge1xuICAgIC8vIERldGVybWluZSBob3cgbG9uZyB0byBkZWxheSBiZWZvcmUgZmlyaW5nIHRoZSBsaXN0ZW5lcnNcbiAgICAvLyBJZiB0aGUgZGVsYXkgaXMgbmVnYXRpdmUsIHNldCBpdCB0byAwIChpLmUuLCBmaXJlIGFzIHNvb24gYXMgcG9zc2libGUpXG4gICAgdmFyIGRlbGF5VGltZSA9IE1hdGgubWF4KGxhc3RJZGxlVGltZSArIChkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAqIDEwMDApIC0gRGF0ZS5ub3coKSwgMCk7XG4gICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvcihjb25zdCBpZGxlU3RhdGVMaXN0ZW5lciBvZiBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwpXG4gICAgICAgICAgICBpZGxlU3RhdGVMaXN0ZW5lcihcImlkbGVcIik7XG4gICAgfSwgZGVsYXlUaW1lKTtcbiAgICBpZGxlU3RhdGVUaW1lb3V0cy5zZXQoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMsIHRpbWVvdXRJZCk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgYnJvd3NlciBpZGxlIHN0YXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaWRsZVN0YXRlTGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBUaGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRoZSBzYW1lIGBpZGxlLklkbGVTdGF0ZWAgcGFyYW1ldGVyXG4gKiBhcyBpZiBpdCBoYWQgc3Vic2NyaWJlZCB0byBpZGxlIHN0YXRlIGV2ZW50cyB3aXRoXG4gKiBgYnJvd3Nlci5pZGxlLm9uU3RhdGVDaGFuZ2VkLmFkZExpc3RlbmVyYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAtIFRoZSBkZXRlY3Rpb25cbiAqIGludGVydmFsIGZvciBmaXJpbmcgdGhlIGlkbGUgc3RhdGUgbGlzdGVuZXIuIE5vdGUgdGhhdCB0aGlzXG4gKiB0aW1lIGluIG1lYXN1cmVkIGluIHNlY29uZHMgYmVjYXVzZSB0aGF0IGlzIGhvdyB0aGUgYGlkbGVgXG4gKiBBUEkgaXMgaW1wbGVtZW50ZWQsIGV2ZW4gdGhvdWdoIG1vc3QgdGltZXMgaW4gdGhlIGxpYnJhcnlcbiAqIGFyZSBtZWFzdXJlZCBpbiBtaWxsaXNlY29uZHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcklkbGVTdGF0ZUxpc3RlbmVyKGlkbGVTdGF0ZUxpc3RlbmVyLCBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcykge1xuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcblxuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhdCBsZWFzdCBvbmUgaWRsZSBzdGF0ZSBsaXN0ZW5lciB3aXRoIHRoaXNcbiAgICAvLyBkZXRlY3Rpb24gaW50ZXJ2YWwsIGFkZCB0aGUgbmV3IGxpc3RlbmVyIHRvIHRoZSBTZXQgb2YgbGlzdGVuZXJzXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmVcbiAgICB2YXIgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsID0gaWRsZVN0YXRlTGlzdGVuZXJzLmdldChkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG4gICAgaWYoaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsLmFkZChpZGxlU3RhdGVMaXN0ZW5lcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBTZXQgZm9yIGxpc3RlbmVycyB3aXRoIHRoaXMgZGV0ZWN0aW9uIGludGVydmFsLCBpbmNsdWRpbmdcbiAgICAvLyB0aGlzIGlkbGUgc3RhdGUgbGlzdGVuZXJcbiAgICBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwgPSBpZGxlU3RhdGVMaXN0ZW5lcnMuc2V0KGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzLCAobmV3IFNldCgpKS5hZGQoaWRsZVN0YXRlTGlzdGVuZXIpKTtcblxuICAgIC8vIElmIHdlJ3JlIGluIGlkbGUgc3RhdGUsIGFuZCB3ZSBoYXZlIGJlZW4gaW4gdGhlIHN0YXRlIGZvciBsZXNzIHRpbWVcbiAgICAvLyB0aGFuIHRoZSBkZXRlY3Rpb24gaW50ZXJ2YWwgZm9yIHRoaXMgbGlzdGVuZXIgKGkuZS4sIHRoZSBsaXN0ZW5lclxuICAgIC8vIHNob3VsZCBzdGlsbCByZWNlaXZlIGEgc3RhdGUgY2hhbmdlIG5vdGlmaWNhdGlvbiksIHNjaGVkdWxlIGFcbiAgICAvLyBub3RpZmljYXRpb25cbiAgICBpZigoY3VycmVudElkbGVTdGF0ZSA9PT0gXCJpZGxlXCIpICYmIChEYXRlLm5vdygpIDwgKGxhc3RJZGxlVGltZSArIGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCkpKVxuICAgICAgICBzY2hlZHVsZUlkbGVTdGF0ZVRpbWVvdXQoaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsLCBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG59IiwiZXhwb3J0IGNvbnN0IGRlc3RpbmF0aW9uRG9tYWlucyA9IFtcbiAgICBcImNubi5jb21cIixcbiAgICBcInNmY2hyb25pY2xlLmNvbVwiLFxuICAgIFwieW91cmJpZ3NreS5jb21cIixcbiAgICBcIm5vcnRocGltYW5ld3MuY29tXCJcbl0iLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHV0aWxpdGllcyBmb3IgbWF0Y2hpbmcgVVJMcyBhZ2FpbnN0IGRvbWFpbiBuYW1lcy5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5NYXRjaGluZ1xuICovXG5pbXBvcnQgeyBkZXN0aW5hdGlvbkRvbWFpbnMgfSBmcm9tIFwiLi4vLi4vZG9tYWlucy5qc1wiXG5cbi8qKiBcbiAqIENsYXNzIGZvciB0ZXN0aW5nIHdoZXRoZXIgYSBVUkwgbWF0Y2hlcyBhIHNldCBvZiBkb21haW5zLlxuICogQ3VycmVudGx5IGltcGxlbWVudGVkIHdpdGggdGhlIG5hdGl2ZSBSZWdFeHAgb3ZlciB0aGUgZnVsbCBVUkwsIHdoaWNoIGdpdmVzIGdvb2QgcGVyZm9ybWFuY2UuXG4gKiBXZSBtaWdodCBiZSBhYmxlIHRvIHNwZWVkIHRoaXMgdXAgYnkgcGFyc2luZyB0aGUgVVJMIGFuZCB0aGVuIG9ubHkgbWF0Y2hpbmcgZG9tYWlucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFVybE1hdGNoZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIFVSTCBtYXRjaGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGRvbWFpbnMgLSBUaGUgc2V0IG9mIGRvbWFpbnMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaFN1YmRvbWFpbnM9dHJ1ZV0gLSBXaGV0aGVyIHRvIG1hdGNoIHN1YmRvbWFpbnMgb2YgZG9tYWlucyBpbiB0aGUgc2V0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5yZWdFeHAgPSBuZXcgUmVnRXhwKGNyZWF0ZVVybFJlZ2V4U3RyaW5nKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyksIFwiaVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IHdoZXRoZXIgYSBVUkwgbWF0Y2hlcyBhIGRvbWFpbiBpbiB0aGUgc2V0IG9mIGRvbWFpbnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgdG8gdGVzdC5cbiAgICAgKi9cbiAgICB0ZXN0VXJsKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdFeHAudGVzdCh1cmwpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcgZm9yIG1hdGNoaW5nIGEgVVJMIGFnYWluc3QgYSBzZXQgb2YgZG9tYWlucy5cbiAqIFdpbGwgbWF0Y2ggaHR0cCBhbmQgaHR0cHMgcHJvdG9jb2xzLiBDdXJyZW50bHkgY2FzZSBzZW5zaXRpdmUuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIC0gVGhlIHNldCBvZiBkb21haW5zIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaFN1YmRvbWFpbnM9dHJ1ZV0gLSBXaGV0aGVyIHRvIG1hdGNoIHN1YmRvbWFpbnMgb2YgZG9tYWlucyBpbiB0aGUgc2V0LlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsUmVnZXhTdHJpbmcoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zID0gdHJ1ZSkge1xuICAgIHZhciB1cmxNYXRjaFJFID0gXCJeKD86aHR0cHxodHRwcyk6Ly9cIiArIChtYXRjaFN1YmRvbWFpbnMgPyBcIig/OltBLVphLXowLTlcXFxcLV0rXFxcXC4pKlwiIDogXCJcIikgKyBcIig/OlwiO1xuICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpXG4gICAgICAgIHVybE1hdGNoUkUgPSB1cmxNYXRjaFJFICsgZG9tYWluLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpICsgXCJ8XCI7XG4gICAgdXJsTWF0Y2hSRSA9IHVybE1hdGNoUkUuc3Vic3RyaW5nKDAsIHVybE1hdGNoUkUubGVuZ3RoIC0gMSkgKyBcIikoPzokfCgvfFxcXFw/KS4qKVwiOyAgXCIpKD86JHwvLiopXCI7XG4gICAgcmV0dXJuIHVybE1hdGNoUkU7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgbWF0Y2ggcGF0dGVybnMgZm9yIG1hdGNoaW5nIGEgVVJMIGFnYWluc3QgYSBzZXQgb2YgZG9tYWlucy5cbiAqIFdpbGwgbWF0Y2ggaHR0cCBhbmQgaHR0cHMgcHJvdG9jb2xzLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZG9tYWlucyAtIFRoZSBzZXQgb2YgZG9tYWlucyB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgbWF0Y2ggcGF0dGVybnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMgPSB0cnVlKSB7XG4gICAgdmFyIG1hdGNoUGF0dGVybnMgPSBbIF07XG4gICAgZm9yIChjb25zdCBkb21haW4gb2YgZG9tYWlucykge1xuICAgICAgICBtYXRjaFBhdHRlcm5zLnB1c2goXCJodHRwOi8vXCIgKyAoIG1hdGNoU3ViZG9tYWlucyA/IFwiKi5cIiA6IFwiXCIgKSArIGRvbWFpbiArIFwiLypcIik7XG4gICAgICAgIG1hdGNoUGF0dGVybnMucHVzaChcImh0dHBzOi8vXCIgKyAoIG1hdGNoU3ViZG9tYWlucyA/IFwiKi5cIiA6IFwiXCIgKSArIGRvbWFpbiArIFwiLypcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaFBhdHRlcm5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R1ZHlQYXRocygpIHtcbiAgICB2YXIgc3R1ZHlQYXRocyA9IHt9O1xuICAgIHN0dWR5UGF0aHMuZG9tYWlucyA9IG5ldyBVcmxNYXRjaGVyKGRlc3RpbmF0aW9uRG9tYWlucyk7XG4gICAgc3R1ZHlQYXRocy5wYXRocyA9IHt9XG4gICAgc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzID0gZGVzdGluYXRpb25Eb21haW5zO1xuICAgIHJldHVybiBzdHVkeVBhdGhzO1xufVxuXG5cbi8vZXhwb3J0IGZ1bmN0aW9uIGdldEFkRmlsdGVycygpIHtcbi8vICAgIHJldHVybiBhZENzc1NlbGVjdG9ycztcbi8vfVxuIiwiLyoqIFxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSByZXNlYXJjaCBhYnN0cmFjdGlvbiBvdmVyIGJyb3dzZXIgZXZlbnRzIHJlbGF0ZWQgdG9cbiAqIHdlYnBhZ2UgbG9hZGluZyBhbmQgdXNlciBhdHRlbnRpb24uIFRoZSBhYnN0cmFjdGlvbiBjb25zaXN0cyBvZiB0aGUgZm9sbG93aW5nXG4gKiBldmVudHM6XG4gKiAgICogUGFnZSBWaXNpdCBTdGFydCAtIHRoZSBicm93c2VyIGhhcyBzdGFydGVkIHRvIGxvYWQgYSB3ZWJwYWdlIGluIGEgdGFiXG4gKiAgICogUGFnZSBBdHRlbnRpb24gU3RhcnQgLSB0aGUgdXNlciBoYXMgc2hpZnRlZCBhdHRlbnRpb24gdG8gYSB0YWJcbiAqICAgKiBQYWdlIEF0dGVudGlvbiBTdG9wIC0gdGhlIHVzZXIgaGFzIHNoaWZ0ZWQgYXR0ZW50aW9uIGZyb20gYSB0YWJcbiAqICAgKiBQYWdlIFZpc2l0IFN0b3AgLSB0aGUgYnJvd3NlciBoYXMgdW5sb2FkZWQgYSB3ZWJwYWdlIGZyb20gYSB0YWJcbiAqICAgXG4gKiBBdHRlbnRpb24gaXMgZGVmaW5lZCBhcyBzYXRpc2Z5aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgICogVGhlIHRhYiBpcyB0aGUgYWN0aXZlIHRhYiBpbiBpdHMgYnJvd3NlciB3aW5kb3dcbiAqICAgKiBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHRhYiBpcyB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICogICAqIFRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93IGhhcyBmb2N1cyBpbiB0aGUgb3BlcmF0aW5nIHN5c3RlbVxuICogICAqIChPcHRpb25hbCkgVGhlIHVzZXIgaGFzIHByb3ZpZGVkIGlucHV0IHRvIHRoZSBicm93c2VyIHdpdGhpbiB0aGUgbGFzdCBOIHNlY29uZHNcbiAqICAgXG4gKiBJZiB0aGUgdXNlcidzIGF0dGVudGlvbiBpcyBvbiBhIHRhYiBhbmQgdGhlIHRhYiBjbG9zZXMsIHRoZSBzZXF1ZW5jZSBvZiBldmVudHNcbiAqIHdpbGwgYmUgUGFnZSBBdHRlbnRpb24gU3RvcCAtPiBQYWdlIFZpc2l0IFN0b3AuIFRoZSB0aW1lc3RhbXAgaXMgc3luY3Jvbml6ZWQgZm9yXG4gKiB0aGUgZXZlbnRzLlxuICpcbiAqIElmIHRoZSB1c2VyJ3MgYXR0ZW50aW9uIGlzIG9uIGEgdGFiIGFuZCB0aGUgcGFnZSBpbiB0aGUgdGFiIGNoYW5nZXMsIHRoZSBzZXF1ZW5jZVxuICogb2YgZXZlbnRzIHdpbGwgYmUgUGFnZSBBdHRlbnRpb24gU3RvcCAtPiBQYWdlIFZpc2l0IFN0b3AgLT4gUGFnZSBWaXNpdCBTdGFydCAtPlxuICogUGFnZSBBdHRlbnRpb24gU3RhcnQuIFRoZSB0aW1lc3RhbXAgaXMgc3luY3Jvbml6ZWQgZm9yIHRoZSBldmVudHMuXG4gKlxuICogVGhlIHBhZ2UgdmlzaXQgYW5kIGF0dGVudGlvbiBldmVudHMgYXJlIGltcGxlbWVudGVkIGluIG9uZSBtb2R1bGUgaW4gb3JkZXIgdG9cbiAqIGd1YXJhbnRlZSB0aGUgb3JkZXJpbmcgb2YgZXZlbnRzLlxuICpcbiAqIFJlcHJlc2VudGVkIGFzIGEgZmluaXRlLXN0YXRlIGF1dG9tYXRvbiwgdGhlIHJlc2VhcmNoIGFic3RyYWN0aW9uIGNvbnNpc3RzIG9mXG4gKiB0aGUgZm9sbG93aW5nIHN0YXRlcyBhbmQgdHJhbnNpdGlvbnMuICBcbiAqIGBgYCAgIFxuICogICAgICAgIFBhZ2UgQXR0ZW50aW9uIFN0YXJ0IDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiBQYWdlIEF0dGVudGlvbiBTdG9wICBcbiAqICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcbiAqICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcbiAqICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWICBcbiAqICAgUGFnZSBWaXNpdCBTdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiBQYWdlIFZpc2l0IFN0b3AgIFxuICogYGBgICAgXG4gKiBOb3RlIHRoYXQgdGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgaWRsZSBBUEksIHdoaWNoIGhhcyBhIGNvdXBsZSBxdWlya3MgaW4gRmlyZWZveDpcbiAqICAgKiBUaGVyZSBpcyBhIGZpdmUtc2Vjb25kIGludGVydmFsIHdoZW4gcG9sbGluZyBpZGxlIHN0YXR1cyBmcm9tIHRoZSBvcGVyYXRpbmdcbiAqICAgICBzeXN0ZW0uXG4gKiAgICogRGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybSwgdGhlIGlkbGUgQVBJIHJlcG9ydHMgZWl0aGVyIHRpbWUgc2luY2UgdXNlciBpbnB1dCB0b1xuICogICAgIHRoZSBicm93c2VyIG9yIHRpbWUgc2luY2UgdXNlciBpbnB1dCB0byB0aGUgb3BlcmF0aW5nIHN5c3RlbS5cbiAqXG4gKiBUaGUgcG9sbGluZyBpbnRlcnZhbCBjb2Fyc2VucyB0aGUgdGltaW5nIG9mIHBhZ2UgYXR0ZW50aW9uIGV2ZW50cyByZWxhdGVkIHRvIGlkbGUgc3RhdGUuXG4gKiBBcyBsb25nIGFzIHRoZSBwb2xsaW5nIGludGVydmFsIGlzIHJlbGF0aXZlbHkgc2hvcnQgaW4gY29tcGFyaXNvbiB0byB0aGUgaWRsZSB0aHJlc2hvbGQsXG4gKiB0aGF0IHNob3VsZCBub3QgYmUgYW4gaXNzdWUuXG4gKiBcbiAqIFRoZSBwbGF0Zm9ybS1zcGVjaWZpYyBtZWFuaW5nIG9mIGlkbGUgc3RhdGUgc2hvdWxkIGFsc28gbm90IGJlIGFuIGlzc3VlLiBUaGVyZSBpcyBvbmx5IGFcbiAqIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIG1lYW5pbmdzIG9mIGlkbGUgc3RhdGUgd2hlbiB0aGUgdXNlciBpcyBwcm92aWRpbmcgaW5wdXQgdG9cbiAqIGFub3RoZXIgYXBwbGljYXRpb247IGlmIHRoZSB1c2VyIGlzIHByb3ZpZGluZyBpbnB1dCB0byB0aGUgYnJvd3Nlciwgb3IgaXMgbm90IHByb3ZpZGluZ1xuICogaW5wdXQgYXQgYWxsLCB0aGUgdHdvIG1lYW5pbmdzIGFyZSBpZGVudGljYWwuIEluIHRoZSBzY2VuYXJpbyB3aGVyZSB0aGUgdXNlciBpcyBwcm92aWRpbmdcbiAqIGlucHV0IHRvIGFub3RoZXIgYXBwbGljYXRpb24sIHRoZSBicm93c2VyIHdpbGwgbG9zZSBmb2N1cyBpbiB0aGUgb3BlcmF0aW5nIHN5c3RlbTsgdGhpc1xuICogbW9kdWxlIHdpbGwgZGV0ZWN0IHRoYXQgd2l0aCB0aGUgd2luZG93cyBBUEkgYW5kIGZpcmUgYSBwYWdlIGF0dGVudGlvbiBzdG9wIChpZiBuZWVkZWQpLlxuICogXG4gKiBTb21lIGtub3duIGxpbWl0YXRpb25zIHRvIGJlIGF3YXJlIG9mOlxuICogICAqIFRoZSBtb2R1bGUgZG9lcyBub3QgY3VycmVudGx5IGZpbHRlciB0YWItbGV2ZWwgY29udGVudCBieSBwcm90b2NvbCBvciBjb250ZW50IHR5cGUuIFdlXG4gKiAgICAgbWlnaHQgd2FudCB0byByZXZpc2l0IHRoaXMuIEZpbHRlcmluZyBieSBwcm90b2NvbCBpcyBlYXN54oCUdGhlIG1vZHVsZSBhbHJlYWR5IHRyYWNrc1xuICogICAgIHdoZXRoZXIgYSB0YWIgY29udGFpbnMgY29udGVudCBsb2FkZWQgdmlhIEhUVFAgb3IgSFRUUFMuIEZpbHRlcmluZyBieSBjb250ZW50IHR5cGUgaXNcbiAqICAgICBtb3JlIGRpZmZpY3VsdC4gV2UgbWlnaHQgYmUgYWJsZSB0byBhY2NvbXBsaXNoIHRoYXQgYnkgdXNpbmcgYHdlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWRgXG4gKiAgICAgdG8gc3RhcnQgcGFnZSB2aXNpdHMgYW5kIGNoZWNraW5nIHRoZSBgQ29udGVudC1UeXBlYCBoZWFkZXIsIHRob3VnaCB3ZSdkIHN0aWxsIGhhdmUgdG8gaGFuZGxlXG4gKiAgICAgdGFicyB0aGF0IGFyZSBvcGVuIHdoZW4gdGhlIG1vZHVsZSBpbml0aWFsaXplcywgYW5kIHdlJ2QgbWlzcyBwYWdlcyB0aGF0IHJlbHkgb24gTUlNRSB0eXBlXG4gKiAgICAgc25pZmZpbmcuXG4gKiAgICogV2hlbiB0aGUgbW9kdWxlIGluaXRpYWxpemVzLCB0aGVyZSBpc24ndCBhIGdvb2Qgd2F5IHRvIGdldCB0aGUgcmVmZXJyZXJzIGZvciBvcGVuXG4gKiAgICAgdGFicyB3aXRob3V0IGVpdGhlciBkZWxheWluZyBpbml0aWFsaXphdGlvbiBvciByaXNraW5nIGEgcmFjZSBjb25kaXRpb24uIFRoZVxuICogICAgIHJlZmVycmVycyBmb3IgcGFnZXMgb3BlbiB3aGVuIHRoZSBtb2R1bGUgaW5pdGlhbGl6ZXMgYXJlIGN1cnJlbnRseSBzZXQgdG8gYFwiXCJgLlxuICogXG4gKiBBbmQgc29tZSBpbXBsZW1lbnRhdGlvbiBxdWlya3MgdG8gYmUgYXdhcmUgb2YgZm9yIGZ1dHVyZSBkZXZlbG9wbWVudCBvbiB0aGlzIG1vZHVsZTpcbiAqICAgKiBUaGUgYHRhYnMub25DcmVhdGVkYCBldmVudCBhcHBlYXJzIHRvIGNvbnNpc3RlbnRseSBmaXJlIGJlZm9yZSB0aGUgYHdpbmRvd3Mub25DcmVhdGVkYFxuICogICAgIGV2ZW50LCBzbyB0aGlzIG1vZHVsZSBsaXN0ZW5zIHRvIHRoZSBgdGFicy5vbkNyZWF0ZWRgIGV2ZW50IHRvIGdldCBhbiBlYXJsaWVyIHZpZXcgb2ZcbiAqICAgICB3aW5kb3cgZGV0YWlscy4gVGhlIG1vZHVsZSBhc3N1bWVzIHRoYXQgYSBgdGFicy5vbkNyZWF0ZWRgIGV2ZW50IHdpdGggYSBwb3NpdGl2ZSB0YWJcbiAqICAgICBJRCBpcyBmb3IgYSBgXCJub3JtYWxcImAgb3IgYFwicG9wdXBcImAgd2luZG93IHR5cGUuXG4gKiAgICogTm9uLWJyb3dzZXIgd2luZG93cyBkbyBub3QgYXBwZWFyIGluIHRoZSByZXN1bHRzIG9mIGB3aW5kb3dzLmdldEFsbCgpYCwgYW5kIGNhbGxpbmdcbiAqICAgICBgd2luZG93cy5nZXQoKWAgb24gYSBub24tYnJvd3NlciB3aW5kb3cgdGhyb3dzIGFuIGVycm9yLiBTd2l0Y2hpbmcgZm9jdXMgdG8gYSBub24tXG4gKiAgICAgYnJvd3NlciB3aW5kb3cgd2lsbCwgaG93ZXZlciwgZmlyZSB0aGUgYHdpbmRvd3Mub25Gb2N1c0NoYW5nZWRgIGV2ZW50LiBUaGUgbW9kdWxlXG4gKiAgICAgYXNzdW1lcyB0aGF0IGlmIGB3aW5kb3dzLm9uRm9jdXNDaGFuZ2VkYCBmaXJlcyB3aXRoIGFuIHVua25vd24gd2luZG93LCB0aGF0IHdpbmRvd1xuICogICAgIGlzIGEgbm9uLWJyb3dzZXIgd2luZG93LlxuICogICAqIFRoZSBtb2R1bGUgYXNzdW1lcyB0aGF0IHZhbGlkIHRhYiBJRHMgYW5kIHdpbmRvdyBJRHMgYXJlIGFsd2F5cyA+PSAwLlxuICogICAqIFRoZSBtb2R1bGUgYXNzdW1lcyB0aGF0LCBpZiB0aGVyZSB3YXMgYSBgd2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzYCBldmVudCBiZWZvcmUgYVxuICogICAgIGB0YWJzLm9uVXBkYXRlZGAgZXZlbnQgd2l0aCB0aGUgc2FtZSB0YWIgSUQgYW5kIFVSTCwgdGhlIHdlYiByZXF1ZXN0IG1hdGNoZXMgdGhlIHRhYlxuICogICAgIHVwZGF0ZS4gVGhpcyBhc3N1bXB0aW9uIGlzIG5lZWRlZCB0byBtYXRjaCByZWZlcnJlcnMgdG8gbmV3IHBhZ2VzIGluIHRhYnMuXG4gKiAgICogVGhlIG1vZHVsZSBsaXN0ZW5zIGZvciBgdGFicy5vbkF0dGFjaGVkYCB0byB0cmFjayB0YWIgbW92ZW1lbnQgYmV0d2VlbiB3aW5kb3dzLiBJdCBkb2VzXG4gKiAgICAgbm90IGxpc3RlbiBmb3IgYHRhYnMub25EZXRhY2hlZGAgc28gdGhhdCB0YWJzIHJlbWFpbiBhc3NvY2lhdGVkIHdpdGggdmFsaWQgd2luZG93cyBhbmRcbiAqICAgICBiZWNhdXNlIGl0J3MgbGlrZWx5IHRoZSB1c2VyIGlzIGp1c3QgbW92aW5nIHRoZSB0YWIgd2l0aGluIHRoZSB0YWIgc3RyaXAgaW4gYSB3aW5kb3cuXG4gKiAgICAgXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLlBhZ2VFdmVudHNcbiAqL1xuXG5pbXBvcnQgKiBhcyBJZGxlIGZyb20gXCIuL0lkbGUuanNcIlxuXG4vKipcbiAqIFRoZSB0aHJlc2hvbGQgTiAoaW4gc2Vjb25kcykgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGhlIGJyb3dzZXIgaGFzIHRoZSB1c2VyJ3MgYXR0ZW50aW9uLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3QgaWRsZVRocmVzaG9sZCA9IDE1O1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgdXNlciBpbnB1dCBpbiBkZXRlcm1pbmluZyBhdHRlbnRpb24gc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3QgY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24gPSB0cnVlO1xuXG4vKipcbiAqIEEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnRzLlxuICogQGNhbGxiYWNrIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy53aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogTm90ZSB0aGF0IHRhYnMgY2FuIHN1YnNlcXVlbnRseSBtb3ZlIGJldHdlZW4gd2luZG93cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXRhaWxzLnVybCAtIFRoZSBVUkwgb2YgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLlxuICogQHBhcmFtIHtzdHJpbmd9IGRldGFpbHMucmVmZXJyZXIgLSBUaGUgcmVmZXJyZXIgVVJMIGZvciB0aGUgcGFnZSBsb2FkaW5nIGluIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSB2aXNpdCBzdGFydCBldmVudCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHByb3BlcnR5IHtwYWdlVmlzaXRTdGFydExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBzZXQgb2YgbGlzdGVuZXIgZGV0YWlscyBmb3IgcGFnZSB2aXNpdCBzdGFydCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtTZXQ8UGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHM+fVxuICovXG5jb25zdCBwYWdlVmlzaXRTdGFydExpc3RlbmVyU2V0ID0gbmV3IFNldCgpO1xuXG4vKiogXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50cy5cbiAqIEBwYXJhbSB7cGFnZVZpc2l0U3RhcnRMaXN0ZW5lcn0gcGFnZVZpc2l0U3RhcnRMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdGlmeUFib3V0Q3VycmVudFBhZ2VzPXRydWVdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciB0aGUgY3VycmVudGx5IG9wZW4gc2V0IG9mIHBhZ2VzLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJpdmF0ZVdpbmRvd3M9ZmFsc2VdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB0byB1c2UgaWYgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgdGhlIGN1cnJlbnRseSBvcGVuIHNldCBvZiBwYWdlcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZVZpc2l0U3RhcnRMaXN0ZW5lcihwYWdlVmlzaXRTdGFydExpc3RlbmVyLCBub3RpZnlBYm91dEN1cnJlbnRQYWdlcyA9IHRydWUsIHByaXZhdGVXaW5kb3dzID0gZmFsc2UsIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lclNldC5hZGQoe1xuICAgICAgICBsaXN0ZW5lcjogcGFnZVZpc2l0U3RhcnRMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG4gICAgaWYobm90aWZ5QWJvdXRDdXJyZW50UGFnZXMpXG4gICAgICAgIG5vdGlmeVBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJBYm91dEN1cnJlbnRQYWdlcyhwYWdlVmlzaXRTdGFydExpc3RlbmVyLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbn1cblxuLyoqIFxuICogTm90aWZ5IHBhZ2UgdmlzaXQgc3RhcnQgbGlzdGVuZXJzIGFib3V0IGEgcGFnZSB2aXNpdCBzdGFydCBldmVudC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgb2YgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZmVycmVyIC0gVGhlIHJlZmVycmVyIFVSTCBmb3IgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLCBvciBgXCJcImAgaWZcbiAqIHRoZXJlIGlzIG5vIHJlZmVycmVyLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgZXZlbnQgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5mdW5jdGlvbiBub3RpZnlQYWdlVmlzaXRTdGFydExpc3RlbmVycyh0YWJJZCwgd2luZG93SWQsIHVybCwgcmVmZXJyZXIsIHByaXZhdGVXaW5kb3csIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJTZXQpXG4gICAgICAgIGlmKCFwcml2YXRlV2luZG93IHx8IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzLnByaXZhdGVXaW5kb3dzKVxuICAgICAgICAgICAgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIHRhYklkLFxuICAgICAgICAgICAgICAgIHdpbmRvd0lkLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLnJlcGVhdCgxKSwgLy8gY29weSB0aGUgc3RyaW5nIGluIGNhc2UgYSBsaXN0ZW5lciBtb2RpZmllcyBpdFxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiByZWZlcnJlci5yZXBlYXQoMSksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZVdpbmRvdyxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pO1xufVxuXG4vKipcbiAqIE5vdGlmeSBhIHBhZ2UgdmlzaXQgc3RhcnQgbGlzdGVuZXIgYWJvdXQgdGhlIGN1cnJlbnQgc2V0IG9mIG9wZW4gcGFnZXMuIFVzZWZ1bCBmb3Igd2hlblxuICogYSBsaXN0ZW5lciBpcyByZWdpc3RlcmVkIGluIHRoZSBtaWRkbGUgb2YgYSBicm93c2luZyBzZXNzaW9uIChlLmcuLCBiZWNhdXNlIHRoZSBleHRlbnNpb25cbiAqIHdhcyBqdXN0IGluc3RhbGxlZCBvciB0aGUgdXNlciBqdXN0IGdhdmUgY29uc2VudCkuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtwYWdlVmlzaXRTdGFydExpc3RlbmVyfSBwYWdlVmlzaXRTdGFydExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBhYm91dCBwYWdlcyBpbiBwcml2YXRlXG4gKiB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIGxpc3RlbmVyIHdhcyByZWdpc3RlcmVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBub3RpZnlQYWdlVmlzaXRTdGFydExpc3RlbmVyQWJvdXRDdXJyZW50UGFnZXMocGFnZVZpc2l0U3RhcnRMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCkge1xuICAgIC8vIExvYWQgdGhlIHRhYnMgZnJvbSB0aGUgdGFiIHN0YXRlIGNhY2hlIHRvIGF2b2lkIGluY29uc2lzdGVuY2llc1xuICAgIGZvciAoY29uc3QgW3RhYklkLCB0YWJEZXRhaWxzXSBvZiB0YWJTdGF0ZSlcbiAgICAgICAgaWYoIXRhYkRldGFpbHMucHJpdmF0ZVdpbmRvdyB8fCBwcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIHRhYklkOiB0YWJJZCxcbiAgICAgICAgICAgICAgICB3aW5kb3dJZDogdGFiRGV0YWlscy53aW5kb3dJZCxcbiAgICAgICAgICAgICAgICB1cmw6IHRhYkRldGFpbHMudXJsLnJlcGVhdCgxKSwgLy8gY29weSB0aGUgc3RyaW5nIGluIGNhc2UgYSBsaXN0ZW5lciBtb2RpZmllcyBpdFxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiB0YWJEZXRhaWxzLnJlZmVycmVyLnJlcGVhdCgxKSxcbiAgICAgICAgICAgICAgICBwcml2YXRlV2luZG93OiB0YWJEZXRhaWxzLnByaXZhdGVXaW5kb3csXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pO1xufVxuXG4vKipcbiAqIEEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHBhZ2UgdmlzaXQgc3RvcCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZVZpc2l0U3RvcExpc3RlbmVyXG4gKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyAtIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhZ2UgdmlzaXQgc3RvcCBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy53aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgdmlzaXQgc3RhcnQgc3RvcCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcHJvcGVydHkge3BhZ2VWaXNpdFN0b3BMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgc2V0IG9mIGxpc3RlbmVyIGRldGFpbHMgZm9yIHBhZ2UgdmlzaXQgc3RvcCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtTZXQ8UGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lclNldCA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIHZpc2l0IHN0b3AgZXZlbnRzLlxuICogQHBhcmFtIHtwYWdlVmlzaXRTdG9wTGlzdGVuZXJ9IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByaXZhdGVXaW5kb3dzPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZVZpc2l0U3RvcExpc3RlbmVyKHBhZ2VWaXNpdFN0b3BMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSkge1xuICAgIGluaXRpYWxpemUoKTtcbiAgICBwYWdlVmlzaXRTdG9wTGlzdGVuZXJTZXQuYWRkKHtcbiAgICAgICAgbGlzdGVuZXI6IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG59XG5cbi8qKiBcbiAqIE5vdGlmeSBwYWdlIHZpc2l0IHN0b3AgbGlzdGVuZXJzIGFib3V0IGEgcGFnZSB2aXNpdCBzdG9wIGV2ZW50LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSBldmVudCBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmeVBhZ2VWaXNpdFN0b3BMaXN0ZW5lcnModGFiSWQsIHdpbmRvd0lkLCBwcml2YXRlV2luZG93LCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgZm9yIChjb25zdCBwYWdlVmlzaXRTdG9wTGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lclNldClcbiAgICAgICAgaWYoIXByaXZhdGVXaW5kb3cgfHwgcGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlscy5wcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoeyB0YWJJZCwgd2luZG93SWQsIHRpbWVTdGFtcCB9KTtcbn1cblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMud2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIE5vdGUgdGhhdCB0YWJzIGNhbiBzdWJzZXF1ZW50bHkgbW92ZSBiZXR3ZWVuIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcHJvcGVydHkge3BhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBzZXQgb2YgbGlzdGVuZXIgZGV0YWlscyBmb3IgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnRzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7U2V0PFBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyU2V0ID0gbmV3IFNldCgpO1xuXG4vKiogXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudHMuXG4gKiBAcGFyYW0ge3BhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyfSBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi4gXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RpZnlBYm91dEN1cnJlbnRQYWdlcz10cnVlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZFxuICogZm9yIHRoZSBwYWdlIHRoYXQgY3VycmVudGx5IGhhcyBhdHRlbnRpb24gKGlmIHRoZXJlIGlzIG9uZSkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcml2YXRlV2luZG93cz1mYWxzZV0gLSBXaGV0aGVyIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWQgZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHRvIHVzZSBpZiB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkXG4gKiBmb3IgdGhlIHBhZ2UgdGhhdCBjdXJyZW50bHkgaGFzIGF0dGVudGlvbiAoaWYgdGhlcmUgaXMgb25lKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIocGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIsIG5vdGlmeUFib3V0Q3VycmVudFBhZ2VBdHRlbnRpb24gPSB0cnVlLCBwcml2YXRlV2luZG93cyA9IGZhbHNlLCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyU2V0LmFkZCh7XG4gICAgICAgIGxpc3RlbmVyOiBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG4gICAgaWYobm90aWZ5QWJvdXRDdXJyZW50UGFnZUF0dGVudGlvbilcbiAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJBYm91dEN1cnJlbnRQYWdlQXR0ZW50aW9uKHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbn1cblxuLyoqIFxuICogTm90aWZ5IHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGxpc3RlbmVycyBhbmQgY29udGVudCBzY3JpcHRzIGFib3V0IGEgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIGV2ZW50IGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuZnVuY3Rpb24gbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKHRhYklkLCB3aW5kb3dJZCwgcHJpdmF0ZVdpbmRvdywgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGZvciAoY29uc3QgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyU2V0KVxuICAgICAgICBpZighcHJpdmF0ZVdpbmRvdyB8fCBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHMucHJpdmF0ZVdpbmRvd3MpXG4gICAgICAgICAgICBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoeyB0YWJJZCwgd2luZG93SWQsIHRpbWVTdGFtcCB9KTtcbiAgICBpZihub3RpZnlDb250ZW50U2NyaXB0c0Fib3V0UGFnZUF0dGVudGlvbiAmJiAoIXByaXZhdGVXaW5kb3cgfHwgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uKSlcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RhcnRcIiB9KTtcbn1cblxuLyoqXG4gKiBOb3RpZnkgYSBwYWdlIGF0dGVudGlvbiBzdGFydCBsaXN0ZW5lciBhYm91dCB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgaW4gdGhlIGN1cnJlbnRseVxuICogZm9jdXNlZCB3aW5kb3cgKGlmIHRoZXJlIGlzIHN1Y2ggYSB0YWIpLiBVc2VmdWwgZm9yIHdoZW4gYSBsaXN0ZW5lciBpcyByZWdpc3RlcmVkIGluIHRoZVxuICogbWlkZGxlIG9mIGEgYnJvd3Npbmcgc2Vzc2lvbiAoZS5nLiwgYmVjYXVzZSB0aGUgZXh0ZW5zaW9uIHdhcyBqdXN0IGluc3RhbGxlZCBvciB0aGUgdXNlclxuICoganVzdCBnYXZlIGNvbnNlbnQpLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7cGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJ9IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBpZiB0aGUgcGFnZSB3aXRoXG4gYXR0ZW50aW9uIGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyQWJvdXRDdXJyZW50UGFnZUF0dGVudGlvbihwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCkge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIGFjdGl2ZSB0YWIgb3Igbm8gZm9jdXNlZCB3aW5kb3csIHRoZXJlIGlzIG5vIG5vdGlmaWNhdGlvbiB0byBwcm92aWRlXG4gICAgaWYoKGN1cnJlbnRBY3RpdmVUYWIgPCAwKSB8fCAoY3VycmVudEZvY3VzZWRXaW5kb3cgPCAwKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gSWYgdGhlIG1vZHVsZSBzaG91bGQgY29uc2lkZXIgdXNlciBpbnB1dCBhbmQgdGhlIGJyb3dzZXIgaXMgaW5hY3RpdmUsIHRoZXJlIGlzIG5vIG5vdGlmaWNhdGlvbiB0byBwcm92aWRlXG4gICAgaWYoY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24gJiYgIWJyb3dzZXJJc0FjdGl2ZSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gSWYgdGhlIGxpc3RlbmVyIHNob3VsZCBub3QgcmVjZWl2ZSBub3RpZmljYXRpb25zIGFib3V0IHByaXZhdGUgd2luZG93cyBhbmQgdGhpcyBpcyBhIHByaXZhdGUgd2luZG93XG4gICAgLy8gYWNjb3JkaW5nIHRvIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUsIHRoZXJlIGlzIG5vIG5vdGlmaWNhdGlvbiB0byBwcm92aWRlXG4gICAgaWYoIXByaXZhdGVXaW5kb3dzICYmIGlzUHJpdmF0ZVdpbmRvdyhjdXJyZW50Rm9jdXNlZFdpbmRvdykpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICAvLyBPdGhlcndpc2UsIG5vdGlmeSB0aGUgbGlzdGVuZXJcbiAgICBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcih7XG4gICAgICAgIHRhYklkOiBjdXJyZW50QWN0aXZlVGFiLFxuICAgICAgICB3aW5kb3dJZDogY3VycmVudEZvY3VzZWRXaW5kb3csXG4gICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wXG4gICAgfSk7XG59XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lclxuICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHMgLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLndpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBOb3RlIHRoYXQgdGFicyBjYW4gc3Vic2VxdWVudGx5IG1vdmUgYmV0d2VlbiB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlsc1xuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwcm9wZXJ0eSB7cGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIHNldCBvZiBsaXN0ZW5lciBkZXRhaWxzIGZvciBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge1NldDxQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJTZXQgPSBuZXcgU2V0KCk7XG5cbi8qKiBcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRzLlxuICogQHBhcmFtIHtwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyfSBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLiBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyLCBwcml2YXRlV2luZG93cyA9IGZhbHNlKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJTZXQuYWRkKHtcbiAgICAgICAgbGlzdGVuZXI6IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIsXG4gICAgICAgIHByaXZhdGVXaW5kb3dzOiBwcml2YXRlV2luZG93c1xuICAgIH0pO1xufVxuXG4vKiogXG4gKiBOb3RpZnkgcGFnZSBhdHRlbnRpb24gc3RvcCBsaXN0ZW5lcnMgYW5kIGNvbnRlbnQgc2NyaXB0cyBhYm91dCBhIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIGV2ZW50IGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuZnVuY3Rpb24gbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnModGFiSWQsIHdpbmRvd0lkLCBwcml2YXRlV2luZG93LCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgZm9yIChjb25zdCBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscyBvZiBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyU2V0KVxuICAgICAgICBpZighcHJpdmF0ZVdpbmRvdyB8fCBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscy5wcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJEZXRhaWxzLmxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICB0YWJJZDogdGFiSWQsXG4gICAgICAgICAgICAgICAgd2luZG93SWQ6IHdpbmRvd0lkLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wXG4gICAgICAgICAgICB9KTtcbiAgICBpZihub3RpZnlDb250ZW50U2NyaXB0c0Fib3V0UGFnZUF0dGVudGlvbiAmJiAoIXByaXZhdGVXaW5kb3cgfHwgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uKSlcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RvcFwiIH0pO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0cyBpbiBub24tcHJpdmF0ZSB3aW5kb3dzIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXRlIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgbm90aWZ5Q29udGVudFNjcmlwdHNBYm91dFBhZ2VBdHRlbnRpb24gPSBmYWxzZTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHMgaW4gcHJpdmF0ZSB3aW5kb3dzIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXRlIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uID0gZmFsc2U7XG5cbi8qKlxuICogU2V0IHdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0cyBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICogQ29udGVudCBzY3JpcHRzIHdpbGwgcmVjZWl2ZSB0aGUgbWVzc2FnZSBgeyB0eXBlOiBcIldlYlNjaWVuY2UucGFnZUF0dGVudGlvblN0YXJ0XCIgfWBcbiAqIHdoZW4gdGhlIHBhZ2UgZ2FpbnMgYXR0ZW50aW9uLCBhbmQgd2lsbCByZWNlaXZlIHRoZSBtZXNzYWdlIGB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RvcFwiIH1gXG4gKiB3aGVuIHRoZSBwYWdlIGxvc2VzIGF0dGVudGlvbi4gVGhpcyBtb2R1bGUgZG9lcyBub3QgcHJvdmlkZSBub3RpZmljYXRpb25zXG4gKiB0byBjb250ZW50IHNjcmlwdHMgYWJvdXQgcGFnZSB2aXNpdCBzdGF0ZSBjaGFuZ2VzLCBiZWNhdXNlIGNvbnRlbnQgc2NyaXB0c1xuICogY2FuIG9ic2VydmUgdGhvc2UgZGlyZWN0bHkgYW5kIHRoZXJlIGlzIGEgcG9zc2libGUgcmFjZSBjb25kaXRpb24gd2l0aCBjbG9zaW5nIGEgcGFnZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbm90aWZpY2F0aW9uU2V0dGluZyAtIFdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0c1xuICogYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RhdGUgY2hhbmdlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UGFnZUF0dGVudGlvbkNvbnRlbnRTY3JpcHRNZXNzYWdlcyhub3RpZmljYXRpb25TZXR0aW5nLCBwcml2YXRlV2luZG93cyA9IGZhbHNlKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIG5vdGlmeUNvbnRlbnRTY3JpcHRzQWJvdXRQYWdlQXR0ZW50aW9uID0gbm90aWZpY2F0aW9uU2V0dGluZztcbiAgICBub3RpZnlDb250ZW50U2NyaXB0c0luUHJpdmF0ZVdpbmRvd3NBYm91dFBhZ2VBdHRlbnRpb24gPSBwcml2YXRlV2luZG93cztcbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgaW4gdGhlIGN1cnJlbnRseSBmb2N1c2VkIGJyb3dzaW5nIHdpbmRvdy4gSGFzIHRoZSB2YWx1ZSAtMVxuICogaWYgdGhlcmUgaXMgbm8gc3VjaCB0YWIuIFxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG52YXIgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBicm93c2luZyB3aW5kb3cuIEhhcyB0aGUgdmFsdWUgLTEgaWYgdGhlcmUgaXMgbm8gc3VjaCB3aW5kb3cuIFxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG52YXIgY3VycmVudEZvY3VzZWRXaW5kb3cgPSAtMTtcblxuLyoqXG4gKiBDaGVja3MgZm9yIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICAgKiBUaGUgdGFiIGlzIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiBpbiB0aGUgY3VycmVudGx5IGZvY3VzZWQgd2luZG93LlxuICogICAqIFRoZSB3aW5kb3cgaXMgdGhlIGN1cnJlbnRseSBmb2N1c2VkIHdpbmRvdy5cbiAqICAgKiBUaGUgYnJvd3NlciBpcyBhY3RpdmUgKGkuZS4sIG5vdCBpZGxlKSwgaWYgdGhlIG1vZHVsZSBpcyBjb25maWd1cmVkIHRvXG4gKiAgICAgY29uc2lkZXIgdXNlciBpbnB1dCBpbiBkZXRlcm1pbmluZyB0aGUgYXR0ZW50aW9uIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IHRvIGNoZWNrLlxuICovXG5mdW5jdGlvbiBjaGVja0ZvckF0dGVudGlvbih0YWJJZCwgd2luZG93SWQpIHtcbiAgICByZXR1cm4gKChjdXJyZW50QWN0aXZlVGFiID09IHRhYklkKSAmJiAoY3VycmVudEZvY3VzZWRXaW5kb3cgPT0gd2luZG93SWQpICYmIChjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbiA/IGJyb3dzZXJJc0FjdGl2ZSA6IHRydWUpKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXaW5kb3dEZXRhaWxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdy4gVGhpcyBzdHJpbmcgY2FuIGhhdmUgdGhlXG4gKiBzYW1lIHZhbHVlcyBhcyBgd2luZG93cy5XaW5kb3dUeXBlYCAoYFwibm9ybWFsXCJgLCBgXCJwb3B1cFwiYCwgYFwicGFuZWxcImAsIGFuZFxuICogYFwiZGV2dG9vbHNcImApLCBwbHVzIHRoZSB2YWx1ZSBgXCJub3JtYWxvcnBvcHVwXCJgIGlmIHdlIGRvbid0IHlldCBrbm93IHdoaWNoXG4gKiBvZiB0aGUgdHdvIHR5cGVzIHRoZSB3aW5kb3cgaXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWN0aXZlVGFiIC0gVGhlIElEIG9mIHRoZSBhY3RpdmUgdGFiIGluIHRoZSB3aW5kb3csXG4gKiBvciAtMSBpZiB0aGVyZSBpcyBubyBhY3RpdmUgdGFiLlxuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YWN5IC0gV2hldGhlciB0aGUgd2luZG93IGlzIGEgcHJpdmF0ZSB3aW5kb3cuIFZhbHVlc1xuICogYXJlIGBcIm5vcm1hbFwiYCBmb3IgYSBub24tcHJpdmF0ZSB3aW5kb3csIGBcInByaXZhdGVcImAgZm9yIGEgcHJpdmF0ZSB3aW5kb3csXG4gKiBhbmQgYFwidW5rbm93blwiYCBpZiB0aGUgd2luZG93J3MgcHJpdmFjeSBzdGF0dXMgaXMgdW5rbm93bi5cbiAqL1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgdHJhY2tzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGJyb3dzZXIgd2luZG93cy4gV2UgbmVlZCB0aGlzIGNhY2hlZFxuICogc3RhdGUgdG8gYXZvaWQgYXN5bmNocm9ub3VzIHF1ZXJpZXMgd2hlbiB0aGUgZm9jdXNlZCB3aW5kb3cgY2hhbmdlcy4gVGhlXG4gKiBrZXlzIGFyZSB0YWIgSURzIGFuZCB0aGUgdmFsdWVzIGFyZSBXaW5kb3dEZXRhaWxzIG9iamVjdHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFdpbmRvd0RldGFpbHM+fVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3Qgd2luZG93U3RhdGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogVXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUgd2l0aCBuZXcgaW5mb3JtYXRpb24gYWJvdXQgYSB3aW5kb3cuIElmXG4gKiB3ZSBhbHJlYWR5IGtub3cgbW9yZSBzcGVjaWZpYyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZG93IHRoYW5cbiAqIHRoZSBuZXcgaW5mb3JtYXRpb24sIGlnbm9yZSB0aGUgbmV3IGluZm9ybWF0aW9uLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgSUQuXG4gKiBAcGFyYW0ge1dpbmRvd0RldGFpbHN9IHdpbmRvd0RldGFpbHMgLSBUaGUgbmV3IGluZm9ybWF0aW9uIGFib3V0IHRoZVxuICogd2luZG93LlxuICovXG5mdW5jdGlvbiB1cGRhdGVXaW5kb3dTdGF0ZSh3aW5kb3dJZCwge1xuICAgIHR5cGUgPSBcInVua25vd25cIixcbiAgICBhY3RpdmVUYWIsXG4gICAgcHJpdmFjeSA9IFwidW5rbm93blwiXG59KSB7XG4gICAgdmFyIHdpbmRvd0RldGFpbHMgPSB3aW5kb3dTdGF0ZS5nZXQod2luZG93SWQpO1xuXG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbnkgY2FjaGVkIHN0YXRlIG9uIHRoZSB3aW5kb3csIHNhdmVcbiAgICAvLyB3aGF0IHdlIGtub3cgbm93IGFuZCBiZSBkb25lXG4gICAgaWYod2luZG93RGV0YWlscyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHdpbmRvd1N0YXRlLnNldCh3aW5kb3dJZCwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogKGFjdGl2ZVRhYiAhPT0gdW5kZWZpbmVkKSA/IGFjdGl2ZVRhYiA6IC0xLFxuICAgICAgICAgICAgcHJpdmFjeTogcHJpdmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cGRhdGUgaGFzIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmRvdyB0eXBlXG4gICAgLy8gdGhhbiB0aGUgY2FjaGVkIHdpbmRvdyBkZXRhaWxzLCB1cGRhdGUgdGhlIGNhY2hlZCB3aW5kb3dcbiAgICAvLyB0eXBlXG4gICAgaWYoKHR5cGUgIT09IFwidW5rbm93blwiKSAmJlxuICAgICAgICAoKHdpbmRvd0RldGFpbHMudHlwZSA9PT0gXCJ1bmtub3duXCIpIHx8XG4gICAgICAgICh0eXBlICE9PSBcIm5vcm1hbG9ycG9wdXBcIikgJiYgKHdpbmRvd0RldGFpbHMudHlwZSA9PT0gXCJub3JtYWxvcnBvcHVwXCIpKSlcbiAgICAgICAgd2luZG93RGV0YWlscy50eXBlID0gdHlwZTtcblxuICAgIC8vIElmIHRoZSB1cGRhdGUgaGFzIGFuIGFjdGl2ZSB0YWIgSUQsIHVwZGF0ZSB0aGUgY2FjaGVkXG4gICAgLy8gYWN0aXZlIHRhYiBJRFxuICAgIGlmKGFjdGl2ZVRhYiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB3aW5kb3dEZXRhaWxzLmFjdGl2ZVRhYiA9IGFjdGl2ZVRhYjtcblxuICAgIC8vIElmIHRoZSB1cGRhdGUgaGFzIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmRvd1xuICAgIC8vIHByaXZhY3kgcHJvcGVydHkgdGhhbiB0aGUgY2FjaGVkIHdpbmRvdyBkZXRhaWxzLFxuICAgIC8vIHVwZGF0ZSB0aGUgY2FjaGVkIHdpbmRvdyBwcml2YWN5IHByb3BlcnR5XG4gICAgaWYoKHByaXZhY3kgIT09IFwidW5rbm93blwiKSAmJiAod2luZG93RGV0YWlscy5wcml2YWN5ID09PSBcInVua25vd25cIikpXG4gICAgICAgIHdpbmRvd0RldGFpbHMucHJpdmFjeSA9IHByaXZhY3k7XG59XG5cbi8qKlxuICogTG9vayB1cCB0aGUgcHJpdmFjeSBwcm9wZXJ0eSBvZiBhIHdpbmRvdyBpbiB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZS5cbiAqIElmIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlIGRvZXMgbm90IGluY2x1ZGUgdGhlIHdpbmRvdyBvciB0aGUgd2luZG93XG4gKiBwcml2YWN5IHByb3BlcnR5IGlzIHVua25vd24gKG5laXRoZXIgb2Ygd2hpY2ggc2hvdWxkIGhhcHBlbiEpLCBhc3N1bWVcbiAqIGl0J3MgYSBub3JtYWwgd2luZG93LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgSUQuXG4gKiBAcGFyYW0ge1dpbmRvd0RldGFpbHN9IFt3aW5kb3dEZXRhaWxzXSAtIFRoZSBXaW5kb3dEZXRhaWxzIG9iamVjdFxuICogZm9yIHRoZSB3aW5kb3csIGlmIGl0J3MgYWxyZWFkeSBiZWVuIHJldHJpZXZlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSB3aW5kb3cgaXMgYSBwcml2YXRlIHdpbmRvdy5cbiAqL1xuZnVuY3Rpb24gaXNQcml2YXRlV2luZG93KHdpbmRvd0lkLCB3aW5kb3dEZXRhaWxzKSB7XG4gICAgaWYod2luZG93RGV0YWlscyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB3aW5kb3dEZXRhaWxzID0gd2luZG93U3RhdGUuZ2V0KHdpbmRvd0lkKTtcbiAgICByZXR1cm4gKHdpbmRvd0RldGFpbHMgIT09IHVuZGVmaW5lZCkgPyAod2luZG93RGV0YWlscy5wcml2YWN5ID09PSBcInByaXZhdGVcIikgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUYWJEZXRhaWxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsIC0gVGhlIFVSTCBsb2FkZWQgaW4gdGhlIHRhYi5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSByZWZlcnJlciBVUkwgZm9yIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSB0YWIgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSBJRCBvZiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHRhYi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNXZWJDb250ZW50IC0gV2hldGhlciB0aGUgdGFiIGNvbnRhaW5zIG9yZGluYXJ5IHdlYlxuICogY29udGVudCAoaS5lLiwgYSBVUkwgc3RhcnRpbmcgd2l0aCBgXCJodHRwOi8vXCJgIG9yIGBcImh0dHBzOi8vXCJgKS5cbiAqL1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgdHJhY2tzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGJyb3dzZXIgdGFicy4gV2UgbmVlZCB0aGlzIGNhY2hlZFxuICogc3RhdGUgdG8gYXZvaWQgaW5jb25zaXN0ZW5jaWVzIHdoZW4gcmVnaXN0ZXJpbmcgYSBwYWdlIHZpc2l0IHN0YXJ0IGxpc3RlbmVyXG4gKiBhbmQgdG8gZmlsdGVyIG5vdGlmaWNhdGlvbnMgZm9yIHRhYnMgdGhhdCBkb24ndCBjb250YWluIG9yZGluYXJ5IHdlYnBhZ2VzLlxuICogVGhlIGtleXMgYXJlIHRhYiBJRHMgYW5kIHRoZSB2YWx1ZXMgYXJlIFRhYkRldGFpbHMgb2JqZWN0cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxudW1iZXIsVGFiRGV0YWlscz59XG4gKiBAZGVmYXVsdFxuICovXG5jb25zdCB0YWJTdGF0ZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHRhYiBzdGF0ZSBjYWNoZSB3aXRoIG5ldyBpbmZvcm1hdGlvbiBhYm91dCBhIHRhYi4gQW55XG4gKiBleGlzdGluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGFiIGlzIHJlcGxhY2VkLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgSUQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCBsb2FkZWQgaW4gdGhlIHRhYi5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSByZWZlcnJlciBVUkwgZm9yIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIHRhYiBpcyBpbiBhIHByaXZhdGVcbiAqIHdpbmRvdy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB3aW5kb3dJZCAtIFRoZSBJRCBvZiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHRhYi5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlVGFiU3RhdGUodGFiSWQsIHVybCwgcmVmZXJyZXIsIHByaXZhdGVXaW5kb3csIHdpbmRvd0lkKSB7XG4gICAgLy8gSWYgdGhlIFVSTCBwYXJzZXMgc3VjY2Vzc2Z1bGx5IGFuZCBoYXMgYW4gSFRUUCBvciBIVFRQUyBwcm90b2NvbCxcbiAgICAvLyBjb25zaWRlciBpdCB3ZWIgY29udGVudFxuICAgIHZhciBpc1dlYkNvbnRlbnQ7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcbiAgICAgICAgaWYoKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiKSB8fCAocGFyc2VkVXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiKSlcbiAgICAgICAgICAgIGlzV2ViQ29udGVudCA9IHRydWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgaXNXZWJDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGFiU3RhdGUuc2V0KHRhYklkLCB7IHVybCwgcmVmZXJyZXIsIHByaXZhdGVXaW5kb3csIHdpbmRvd0lkLCBpc1dlYkNvbnRlbnQgfSk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2ViUmVxdWVzdERldGFpbHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIGZvciB0aGUgcmVxdWVzdC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSB2YWx1ZSBvZiB0aGUgYFJlZmVyZXJgIEhUVFAgaGVhZGVyIGZvclxuICogdGhlIHJlcXVlc3Qgb3IgYFwiXCJgIGlmIHRoZXJlIGlzIG5vIGhlYWRlci5cbiAqL1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgdHJhY2tzIHRhYi1sZXZlbCB3ZWIgcmVxdWVzdHMuIFdlIG5lZWQgdGhpcyBjYWNoZWQgc3RhdGUgdG8gbWF0Y2hcbiAqIHJlZmVycmVycyB0byBwYWdlIGxvYWRzLiBUaGUga2V5cyBhcmUgdGFiIElEcyBhbmQgdGhlIHZhbHVlcyBhcmVcbiAqIFdlYlJlcXVlc3REZXRhaWxzIG9iamVjdHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFdlYlJlcXVlc3REZXRhaWxzPn1cbiAqIEBkZWZhdWx0XG4gKi9cbmNvbnN0IHdlYlJlcXVlc3RDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBicm93c2VyIGlzIGFjdGl2ZSBvciBpZGxlLiBJZ25vcmVkIGlmIHRoZSBtb2R1bGUgaXMgY29uZmlndXJlZCB0b1xuICogbm90IGNvbnNpZGVyIHVzZXIgaW5wdXQgd2hlbiBkZXRlcm1pbmluZyB0aGUgYXR0ZW50aW9uIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGJyb3dzZXJJc0FjdGl2ZSA9IGZhbHNlO1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlIG1vZHVsZSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjb25maWd1cmluZyBicm93c2VyIGV2ZW50IGhhbmRsZXJzXG4gKiBhbmQgY2FjaGluZyBpbml0aWFsIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG52YXIgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cbi8qKlxuICogV2hldGhlciB0aGUgbW9kdWxlIGhhcyBzdGFydGVkIGNvbmZpZ3VyaW5nIGJyb3dzZXIgZXZlbnQgaGFuZGxlcnMgYW5kIGNhY2hpbmdcbiAqIGluaXRpYWwgc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4vKipcbiAqIENvbmZpZ3VyZSBicm93c2VyIGV2ZW50IGhhbmRsZXJzIGFuZCBjYWNoZSBpbml0aWFsIHN0YXRlLiBSdW5zIG9ubHkgb25jZS5cbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYoaW5pdGlhbGl6ZWQgfHwgaW5pdGlhbGl6aW5nKVxuICAgICAgICByZXR1cm47XG4gICAgaW5pdGlhbGl6aW5nID0gdHJ1ZTtcblxuICAgIC8vIENvbmZpZ3VyZSBldmVudCBsaXN0ZW5lcnNcbiAgICAvLyBOb3RlIHRoYXQgd2UgaGF2ZSB0byBjYWxsIElkbGUucmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lciBiZWZvcmUgd2UgY2FsbFxuICAgIC8vIElkbGUucXVlcnlTdGF0ZSwgc28gdGhpcyBjb21lcyBiZWZvcmUgY2FjaGluZyB0aGUgaW5pdGlhbCBzdGF0ZVxuXG4gICAgLy8gSGFuZGxlIHRhYi1sZXZlbCB3ZWIgcmVxdWVzdHNcbiAgICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbiAgICAgICAgLy8gSWdub3JlIHJlcXVlc3RzIHRoYXQgYXJlbid0IGFzc29jaWF0ZWQgd2l0aCBicm93c2luZyB0YWJzXG4gICAgICAgIGlmKGRldGFpbHMudGFiSWQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBHZXQgdGhlIHJlZmVycmVyIFVSTCBmcm9tIHRoZSByZXF1ZXN0IGhlYWRlcnNcbiAgICAgICAgdmFyIHJlZmVycmVyID0gXCJcIjtcbiAgICAgICAgZm9yKGNvbnN0IHJlcXVlc3RIZWFkZXIgb2YgZGV0YWlscy5yZXF1ZXN0SGVhZGVycylcbiAgICAgICAgICAgIGlmKChyZXF1ZXN0SGVhZGVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJyZWZlcmVyXCIpICYmIChcInZhbHVlXCIgaW4gcmVxdWVzdEhlYWRlcikpXG4gICAgICAgICAgICAgICAgcmVmZXJyZXIgPSByZXF1ZXN0SGVhZGVyLnZhbHVlO1xuICAgICAgICB3ZWJSZXF1ZXN0Q2FjaGUuc2V0KGRldGFpbHMudGFiSWQsIHtcbiAgICAgICAgICAgIHVybDogZGV0YWlscy51cmwsXG4gICAgICAgICAgICByZWZlcnJlclxuICAgICAgICB9KTtcbiAgICB9LCB7XG4gICAgICAgIHVybHM6IFsgXCI8YWxsX3VybHM+XCIgXSxcbiAgICAgICAgdHlwZXM6IFsgXCJtYWluX2ZyYW1lXCIgXVxuICAgIH0sXG4gICAgWyBcInJlcXVlc3RIZWFkZXJzXCIgXSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgd2VicGFnZSBpbiBhIHRhYiBjaGFuZ2VzXG4gICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIElnbm9yZSBjaGFuZ2VzIHRoYXQgZG8gbm90IGludm9sdmUgdGhlIFVSTFxuICAgICAgICBpZiAoIShcInVybFwiIGluIGNoYW5nZUluZm8pKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIFRyeSB0byBnZXQgdGhlIHJlZmVycmVyIGZyb20gdGhlIHdlYiByZXF1ZXN0IGNhY2hlIGFuZCBjb25zdW1lXG4gICAgICAgIC8vIHRoZSBtb3N0IHJlY2VudCBlbnRyeSBpbiB0aGUgd2ViIHJlcXVlc3QgY2FjaGVcbiAgICAgICAgdmFyIHJlZmVycmVyID0gXCJcIjtcbiAgICAgICAgdmFyIHdlYlJlcXVlc3REZXRhaWxzO1xuICAgICAgICBpZigod2ViUmVxdWVzdERldGFpbHMgPSB3ZWJSZXF1ZXN0Q2FjaGUuZ2V0KHRhYklkKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYod2ViUmVxdWVzdERldGFpbHMudXJsID09PSBjaGFuZ2VJbmZvLnVybClcbiAgICAgICAgICAgICAgICByZWZlcnJlciA9IHdlYlJlcXVlc3REZXRhaWxzLnJlZmVycmVyO1xuICAgICAgICAgICAgd2ViUmVxdWVzdENhY2hlLmRlbGV0ZSh0YWJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRhYiBzdGF0ZSBjYWNoZVxuICAgICAgICB1cGRhdGVUYWJTdGF0ZSh0YWJJZCwgY2hhbmdlSW5mby51cmwsIHJlZmVycmVyLCB0YWIuaW5jb2duaXRvLCB0YWIud2luZG93SWQpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgKG9wdGlvbmFsbHkpIHRoZSBicm93c2VyIGlzIGFjdGl2ZSwgZW5kIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICB2YXIgaGFzQXR0ZW50aW9uID0gY2hlY2tGb3JBdHRlbnRpb24odGFiSWQsIHRhYi53aW5kb3dJZCk7XG4gICAgICAgIGlmIChoYXNBdHRlbnRpb24pXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgdGFiLmluY29nbml0bywgdGltZVN0YW1wKTtcblxuICAgICAgICAvLyBFbmQgdGhlIHBhZ2UgdmlzaXRcbiAgICAgICAgbm90aWZ5UGFnZVZpc2l0U3RvcExpc3RlbmVycyh0YWJJZCwgdGFiLndpbmRvd0lkLCB0YWIuaW5jb2duaXRvLCB0aW1lU3RhbXApO1xuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgdGhlIHBhZ2UgdmlzaXRcbiAgICAgICAgbm90aWZ5UGFnZVZpc2l0U3RhcnRMaXN0ZW5lcnModGFiSWQsIHRhYi53aW5kb3dJZCwgY2hhbmdlSW5mby51cmwsIHJlZmVycmVyLCB0YWIuaW5jb2duaXRvLCB0aW1lU3RhbXApO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgKG9wdGlvbmFsbHkpIHRoZSBicm93c2VyIGlzIGFjdGl2ZSwgc3RhcnQgYW4gYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYgKGhhc0F0dGVudGlvbilcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgdGFiLmluY29nbml0bywgdGltZVN0YW1wKTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgdGFiIGNsb3Nlc1xuICAgIGJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCByZW1vdmVJbmZvKSA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byB1cGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBoZXJlLCBiZWNhdXNlIGVpdGhlciB0aGVyZSBpc1xuICAgICAgICAvLyBhbm90aGVyIHRhYiBpbiB0aGUgd2luZG93IHRoYXQgd2lsbCBiZWNvbWUgYWN0aXZlIChhbmQgdGFicy5vbkFjdGl2YXRlZFxuICAgICAgICAvLyB3aWxsIGZpcmUpLCBvciB0aGVyZSBpcyBubyBvdGhlciB0YWIgaW4gdGhlIHdpbmRvdyBzbyB0aGUgd2luZG93IGNsb3Nlc1xuICAgICAgICAvLyAoYW5kIHdpbmRvd3Mub25SZW1vdmVkIHdpbGwgZmlyZSlcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGNhY2hlZCBzdGF0ZSBmb3IgdGhpcyB0YWIsIGRyb3AgaXRcbiAgICAgICAgdGFiU3RhdGUuZGVsZXRlKHRhYklkKTtcbiAgICAgICAgd2ViUmVxdWVzdENhY2hlLmRlbGV0ZSh0YWJJZCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgcHJpdmFjeSBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlXG4gICAgICAgIHZhciB3aW5kb3dQcml2YWN5ID0gaXNQcml2YXRlV2luZG93KHJlbW92ZUluZm8ud2luZG93SWQpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgKG9wdGlvbmFsbHkpIHRoZSBicm93c2VyIGlzIGFjdGl2ZSwgZW5kIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZihjaGVja0ZvckF0dGVudGlvbih0YWJJZCwgcmVtb3ZlSW5mby53aW5kb3dJZCkpXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgd2luZG93UHJpdmFjeSwgdGltZVN0YW1wKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIsIGZvcmdldCBpdFxuICAgICAgICBpZihjdXJyZW50QWN0aXZlVGFiID09IHRhYklkKVxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuXG4gICAgICAgIC8vIEVuZCB0aGUgcGFnZSB2aXNpdFxuICAgICAgICBub3RpZnlQYWdlVmlzaXRTdG9wTGlzdGVuZXJzKHRhYklkLCByZW1vdmVJbmZvLndpbmRvd0lkLCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIGFjdGl2ZSB0YWIgaW4gYSB3aW5kb3cgY2hhbmdlc1xuICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhY3RpdmVJbmZvID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbm9uLWJyb3dzZXIgdGFiLCBpZ25vcmUgaXRcbiAgICAgICAgaWYoKGFjdGl2ZUluZm8udGFiSWQgPT0gYnJvd3Nlci50YWJzLlRBQl9JRF9OT05FKSB8fCAoYWN0aXZlSW5mby50YWJJZCA8IDApIHx8XG4gICAgICAgICAgICAoYWN0aXZlSW5mby53aW5kb3dJZCA8IDApKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgd2luZG93IHN0YXRlIGNhY2hlIHdpdGggdGhlIG5ld1xuICAgICAgICAvLyBhY3RpdmUgdGFiIElEXG4gICAgICAgIHVwZGF0ZVdpbmRvd1N0YXRlKGFjdGl2ZUluZm8ud2luZG93SWQsIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogYWN0aXZlSW5mby50YWJJZFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZXJlIGlzbid0IGEgZm9jdXNlZCB3aW5kb3csIG9yIHRoZSB0YWIgdXBkYXRlIGlzIG5vdCBpbiB0aGUgZm9jdXNlZCB3aW5kb3csIGlnbm9yZSBpdFxuICAgICAgICBpZigoY3VycmVudEZvY3VzZWRXaW5kb3cgPCAwKSB8fCAoYWN0aXZlSW5mby53aW5kb3dJZCAhPSBjdXJyZW50Rm9jdXNlZFdpbmRvdykpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgcHJpdmFjeSBwcm9wZXJ0eSBmcm9tIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGVcbiAgICAgICAgdmFyIHdpbmRvd1ByaXZhY3kgPSBpc1ByaXZhdGVXaW5kb3coYWN0aXZlSW5mby53aW5kb3dJZCk7ICAgIFxuXG4gICAgICAgIC8vIElmIHRoZSBicm93c2VyIGlzIGFjdGl2ZSBvciAob3B0aW9uYWxseSkgd2UgYXJlIG5vdCBjb25zaWRlcmluZyB1c2VyIGlucHV0LFxuICAgICAgICAvLyBmaXJzdCBlbmQgdGhlIGF0dGVudGlvbiBzcGFuIGlmIHRoZXJlIGlzIGFuIGFjdGl2ZSB0YWIgaW4gdGhlIGZvY3VzZWQgd2luZG93LFxuICAgICAgICAvLyB0aGVuIHN0YXJ0IGEgbmV3IGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmKChicm93c2VySXNBY3RpdmUgfHwgIWNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uKSkge1xuICAgICAgICAgICAgaWYoKGN1cnJlbnRBY3RpdmVUYWIgPj0gMCkgJiYgKGN1cnJlbnRGb2N1c2VkV2luZG93ID49IDApKVxuICAgICAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKGFjdGl2ZUluZm8udGFiSWQsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW1lbWJlciB0aGUgbmV3IGFjdGl2ZSB0YWJcbiAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IGFjdGl2ZUluZm8udGFiSWQ7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHdpbmRvdyBpcyBjcmVhdGVkXG4gICAgYnJvd3Nlci53aW5kb3dzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcihjcmVhdGVkV2luZG93ID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyBhcHBlYXJzIHRvIGJlIGEgbm9uLWJyb3dzaW5nIHdpbmRvdywgaWdub3JlXG4gICAgICAgIC8vIHRoZSBldmVudFxuICAgICAgICBpZighKFwiaWRcIiBpbiBjcmVhdGVkV2luZG93KSB8fCBjcmVhdGVkV2luZG93LmlkIDwgMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZSB3aXRoIHRoZSB3aW5kb3cncyB0eXBlIGFuZFxuICAgICAgICAvLyBwcml2YWN5IHByb3BlcnR5XG4gICAgICAgIHVwZGF0ZVdpbmRvd1N0YXRlKGNyZWF0ZWRXaW5kb3cuaWQsIHtcbiAgICAgICAgICAgIHR5cGU6IChcInR5cGVcIiBpbiBjcmVhdGVkV2luZG93KSA/IGNyZWF0ZWRXaW5kb3cudHlwZSA6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgcHJpdmFjeTogY3JlYXRlZFdpbmRvdy5pbmNvZ25pdG8gPyBcInByaXZhdGVcIiA6IFwibm9ybWFsXCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHRhYiBpcyBjcmVhdGVkXG4gICAgLy8gVGhpcyBldmVudCBhcHBlYXJzIHRvIGNvbnNpc3RlbnRseSBmaXJlIGJlZm9yZSB3aW5kb3cub25DcmVhdGVkXG4gICAgYnJvd3Nlci50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRhYiBvciB3aW5kb3cgSUQgaW5kaWNhdGluZyBhIG5vbi1icm93c2VyIHRhYiBvclxuICAgICAgICAvLyB3aW5kb3csIGlnbm9yZSB0aGUgZXZlbnRcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIVxuICAgICAgICBpZighKFwiaWRcIiBpbiB0YWIpIHx8IHRhYi5pZCA8IDAgfHwgIShcIndpbmRvd0lkXCIgaW4gdGFiKSB8fCB0YWIud2luZG93SWQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUgd2l0aCB0aGUgd2luZG93J3MgcHJpdmFjeVxuICAgICAgICAvLyBwcm9wZXJ0eSBhbmQsIHNpbmNlIHdlIGtub3cgdGhpcyBpcyBhIGJyb3dzaW5nIHdpbmRvdyBiYXNlZFxuICAgICAgICAvLyBvbiB0aGUgdGFiIElELCB0aGUgXCJub3JtYWxvcnBvcHVwXCIgd2luZG93IHR5cGVcbiAgICAgICAgLy8gV2hpbGUgd2UgbWlnaHQgbm93IGtub3cgdGhpcyBpcyB0aGUgYWN0aXZlIHRhYiBpbiB0aGUgd2luZG93LFxuICAgICAgICAvLyB0aGUgdGFicy5vbkFjdGl2YXRlZCBldmVudCB3aWxsIHNlcGFyYXRlbHkgZmlyZVxuICAgICAgICB1cGRhdGVXaW5kb3dTdGF0ZSh0YWIud2luZG93SWQsIHtcbiAgICAgICAgICAgIHR5cGU6IFwibm9ybWFsb3Jwb3B1cFwiLFxuICAgICAgICAgICAgcHJpdmFjeTogdGFiLmluY29nbml0byA/IFwicHJpdmF0ZVwiIDogXCJub3JtYWxcIlxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgdGFiIGlzIG1vdmVkIGJldHdlZW4gd2luZG93c1xuICAgIC8vIFdlIGFyZSBub3QgbGlzdGVuaW5nIGZvciB0YWJzLm9uRGV0YWNoZWQgYmVjYXVzZSB3ZSB3YW50IHRhYnNcbiAgICAvLyB0byBiZSBhc3NvY2lhdGVkIHdpdGggdmFsaWQgd2luZG93cywgYW5kIGJlY2F1c2UgaXQncyBsaWtlbHlcbiAgICAvLyB0aGUgdXNlciBpcyBqdXN0IG1vdmluZyB0aGUgdGFiIHdpdGhpbiB0aGUgdGFiIHN0cmlwIGluIGFcbiAgICAvLyB3aW5kb3dcbiAgICBicm93c2VyLnRhYnMub25BdHRhY2hlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGF0dGFjaEluZm8pID0+IHtcbiAgICAgICAgLy8gSWYgdGhpcyB0YWIgaXMgaW4gdGhlIHRhYiBzdGF0ZSBjYWNoZSxcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBjYWNoZVxuICAgICAgICB2YXIgdGFiRGV0YWlscyA9IHRhYlN0YXRlLmdldCh0YWJJZCk7XG4gICAgICAgIGlmKHRhYkRldGFpbHMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRhYkRldGFpbHMud2luZG93SWQgPSBhdHRhY2hJbmZvLm5ld1dpbmRvd0lkO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSB3aW5kb3cgaXMgcmVtb3ZlZFxuICAgIGJyb3dzZXIud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIod2luZG93SWQgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGNhY2hlZCBzdGF0ZSBmb3IgdGhpcyB3aW5kb3csIGRyb3AgaXRcbiAgICAgICAgaWYod2luZG93U3RhdGUuaGFzKHdpbmRvd0lkKSlcbiAgICAgICAgICAgIHdpbmRvd1N0YXRlLmRlbGV0ZSh3aW5kb3dJZCk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgZm9jdXNlZCB3aW5kb3cgY2hhbmdlc1xuICAgIGJyb3dzZXIud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcih3aW5kb3dJZCA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgaXMgYWN0aXZlIG9yIChvcHRpb25hbGx5KSB3ZSBhcmUgbm90IGNvbnNpZGVyaW5nIHVzZXIgaW5wdXQsIGFuZCBpZlxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBhY3RpdmUgdGFiIGluIGEgZm9jdXNlZCB3aW5kb3csIGVuZCB0aGUgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoKGJyb3dzZXJJc0FjdGl2ZSB8fCAhY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24pICYmICgoY3VycmVudEFjdGl2ZVRhYiA+PSAwKSAmJiAoY3VycmVudEZvY3VzZWRXaW5kb3cgPj0gMCkpKVxuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIGlzUHJpdmF0ZVdpbmRvdyhjdXJyZW50Rm9jdXNlZFdpbmRvdyksIHRpbWVTdGFtcCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgaGFzIGxvc3QgZm9jdXMgaW4gdGhlIG9wZXJhdGluZyBzeXN0ZW0sIHJlbWVtYmVyIFxuICAgICAgICAvLyB0YWIgSUQgPSAtMSBhbmQgd2luZG93IElEID0gLTEsIGFuZCBkbyBub3Qgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgdGhlIGJyb3dzZXIud2luZG93cy5nZXQgYXdhaXQgYmVsb3csXG4gICAgICAgIC8vIGJlY2F1c2UgcXVpY2sgc2VxdWVudGlhbCBldmVudHMgY2FuIGNhdXNlIHRoZSBicm93c2VyLndpbmRvd3Mub25Gb2N1c0NoYW5nZWRcbiAgICAgICAgLy8gbGlzdGVuZXIgdG8gcnVuIGFnYWluIGJlZm9yZSB0aGUgYXdhaXQgcmVzb2x2ZXMgYW5kIHRyaWdnZXIgZXJyb3JzIGlmIGN1cnJlbnRBY3RpdmVUYWJcbiAgICAgICAgLy8gYW5kIGN1cnJlbnRGb2N1c2VkV2luZG93IGFyZSBub3Qgc2V0IHByb3Blcmx5XG4gICAgICAgIGlmICh3aW5kb3dJZCA9PSBicm93c2VyLndpbmRvd3MuV0lORE9XX0lEX05PTkUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGZvY3VzZWQgd2luZG93IGZyb20gdGhlIGNhY2hlZCB3aW5kb3cgc3RhdGVcbiAgICAgICAgdmFyIGZvY3VzZWRXaW5kb3dEZXRhaWxzID0gd2luZG93U3RhdGUuZ2V0KHdpbmRvd0lkKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlbid0IHNlZW4gdGhpcyB3aW5kb3cgYmVmb3JlLCB0aGF0IG1lYW5zIGl0J3Mgbm90IGEgYnJvd3NlciB3aW5kb3csXG4gICAgICAgIC8vIHNvIHJlbWVtYmVyIHRhYiBJRCA9IC0xIGFuZCB3aW5kb3cgSUQgLTEsIGFuZCBkbyBub3Qgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoZm9jdXNlZFdpbmRvd0RldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuICAgICAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSAtMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBuZXcgd2luZG93IGlzIG5vdCBhIGJyb3dzZXIgd2luZG93LCByZW1lbWJlciB0YWIgSUQgPSAtMSBhbmQgd2luZG93IElEID0gLTEsXG4gICAgICAgIC8vIGFuZCBkbyBub3Qgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoKGZvY3VzZWRXaW5kb3dEZXRhaWxzLnR5cGUgIT09IFwibm9ybWFsXCIpICYmIChmb2N1c2VkV2luZG93RGV0YWlscy50eXBlICE9PSBcInBvcHVwXCIpICYmIChmb2N1c2VkV2luZG93RGV0YWlscy50eXBlICE9PSBcIm5vcm1hbG9ycG9wdXBcIikpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHJlbWVtYmVyIHRoZSBuZXcgYWN0aXZlIHRhYiBhbmQgZm9jdXNlZCB3aW5kb3csIGFuZCBpZiB0aGUgYnJvd3NlciBpcyBhY3RpdmVcbiAgICAgICAgLy8gb3IgKG9wdGlvbmFsbHkpIHdlIGFyZSBub3QgY29uc2lkZXJpbmcgdXNlciBpbnB1dCwgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IGZvY3VzZWRXaW5kb3dEZXRhaWxzLmFjdGl2ZVRhYjtcbiAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSB3aW5kb3dJZDtcbiAgICAgICAgaWYoYnJvd3NlcklzQWN0aXZlIHx8ICFjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbilcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgaXNQcml2YXRlV2luZG93KHdpbmRvd0lkLCBmb2N1c2VkV2luZG93RGV0YWlscyksIHRpbWVTdGFtcCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIGJyb3dzZXIgYWN0aXZpdHkgc3RhdGUgY2hhbmdlc1xuICAgIC8vIFRoaXMgbGlzdGVuZXIgYWJzdHJhY3RzIHRoZSBicm93c2VyIGFjdGl2aXR5IHN0YXRlIGludG8gdHdvIGNhdGVnb3JpZXM6IGFjdGl2ZSBhbmQgaW5hY3RpdmVcbiAgICAvLyBBY3RpdmUgbWVhbnMgdGhlIHVzZXIgaGFzIHJlY2VudGx5IHByb3ZpZGVkIGlucHV0IHRvIHRoZSBicm93c2VyLCBpbmFjdGl2ZSBtZWFucyBhbnkgb3RoZXJcbiAgICAvLyBzdGF0ZSAocmVnYXJkbGVzcyBvZiB3aGV0aGVyIGEgc2NyZWVuc2F2ZXIgb3IgbG9jayBzY3JlZW4gaXMgZW5hYmxlZClcbiAgICBpZihjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbikge1xuICAgICAgICBhd2FpdCBJZGxlLnJlZ2lzdGVySWRsZVN0YXRlTGlzdGVuZXIobmV3U3RhdGUgPT4ge1xuICAgICAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBpcyBub3QgdHJhbnNpdGlvbmluZyBiZXR3ZWVuIGFjdGl2ZSBhbmQgaW5hY3RpdmUgc3RhdGVzLCBpZ25vcmUgdGhlIGV2ZW50XG4gICAgICAgICAgICBpZigoYnJvd3NlcklzQWN0aXZlKSA9PSAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGZsaXBwZWQgYnJvd3NlciBhY3Rpdml0eSBzdGF0ZVxuICAgICAgICAgICAgYnJvd3NlcklzQWN0aXZlID0gIWJyb3dzZXJJc0FjdGl2ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYW4gYWN0aXZlIHRhYiBpbiBhIGZvY3VzZWQgd2luZG93LCB3ZSBkb24ndCBuZWVkIHRvIHNlbmQgYXR0ZW50aW9uIGV2ZW50c1xuICAgICAgICAgICAgaWYoKGN1cnJlbnRBY3RpdmVUYWIgPCAwKSB8fCAoY3VycmVudEZvY3VzZWRXaW5kb3cgPCAwKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCB0aGUgd2luZG93IHByaXZhY3kgcHJvcGVydHkgZnJvbSB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZVxuICAgICAgICAgICAgdmFyIHdpbmRvd1ByaXZhY3kgPSBpc1ByaXZhdGVXaW5kb3coY3VycmVudEZvY3VzZWRXaW5kb3cpO1xuXG4gICAgICAgICAgICAvLyBTZW5kIGFuIGF0dGVudGlvbiBzdGFydCBldmVudCAoaWYgdGhlIGJyb3dzZXIgaXMgdHJhbnNpdGlvbmluZyB0byBhY3RpdmUpIG9yIGFuXG4gICAgICAgICAgICAvLyBhdHRlbnRpb24gc3RvcCBldmVudCAoaWYgdGhlIGJyb3dzZXIgaXMgdHJhbnNpdGlvbmluZyB0byBpbmFjdGl2ZSlcbiAgICAgICAgICAgIGlmKGJyb3dzZXJJc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHdpbmRvd1ByaXZhY3ksICB0aW1lU3RhbXApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICB9LCBpZGxlVGhyZXNob2xkKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgYW5kIHJlbWVtYmVyIHRoZSBicm93c2VyIGlkbGUgc3RhdGVcbiAgICBpZihjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbilcbiAgICAgICAgYnJvd3NlcklzQWN0aXZlID0gKElkbGUucXVlcnlTdGF0ZShpZGxlVGhyZXNob2xkKSA9PT0gXCJhY3RpdmVcIik7XG4gICAgXG4gICAgLy8gR2V0IGFuZCByZW1lbWJlciB0aGUgYnJvd3NlciB3aW5kb3cgYW5kIHRhYiBzdGF0ZVxuICAgIHZhciBvcGVuV2luZG93cyA9IGF3YWl0IGJyb3dzZXIud2luZG93cy5nZXRBbGwoe1xuICAgICAgICBwb3B1bGF0ZTogdHJ1ZSxcbiAgICAgICAgd2luZG93VHlwZXM6IFsgXCJub3JtYWxcIiwgXCJwb3B1cFwiLCBcInBhbmVsXCIsIFwiZGV2dG9vbHNcIiBdXG4gICAgfSk7XG4gICAgZm9yKGNvbnN0IG9wZW5XaW5kb3cgb2Ygb3BlbldpbmRvd3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIHdpbmRvdyBkb2Vzbid0IGhhdmUgYSB3aW5kb3cgSUQsIGlnbm9yZSBpdFxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBjaGVja2luZyBhbnl3YXkgc2luY2VcbiAgICAgICAgLy8gdGhlIGlkIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoZSB3aW5kb3dzLldpbmRvd1xuICAgICAgICAvLyB0eXBlXG4gICAgICAgIGlmKCEoXCJpZFwiIGluIG9wZW5XaW5kb3cpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIHRhYnMgaW4gdGhlIHdpbmRvdyB0byBjYWNoZSB0YWIgc3RhdGVcbiAgICAgICAgLy8gYW5kIGZpbmQgdGhlIGFjdGl2ZSB0YWIgaW4gdGhlIHdpbmRvd1xuICAgICAgICB2YXIgYWN0aXZlVGFiSW5PcGVuV2luZG93ID0gLTE7XG4gICAgICAgIGlmKFwidGFic1wiIGluIG9wZW5XaW5kb3cpXG4gICAgICAgICAgICBmb3IoY29uc3QgdGFiIG9mIG9wZW5XaW5kb3cudGFicykge1xuICAgICAgICAgICAgICAgIGlmKHRhYi5hY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluT3BlbldpbmRvdyA9IHRhYi5pZDtcbiAgICAgICAgICAgICAgICB1cGRhdGVUYWJTdGF0ZSh0YWIuaWQsIHRhYi51cmwsIFwiXCIsIG9wZW5XaW5kb3cuaW5jb2duaXRvLCBvcGVuV2luZG93LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdXBkYXRlV2luZG93U3RhdGUob3BlbldpbmRvdy5pZCwge1xuICAgICAgICAgICAgdHlwZTogb3BlbldpbmRvdy50eXBlLFxuICAgICAgICAgICAgYWN0aXZlVGFiOiBhY3RpdmVUYWJJbk9wZW5XaW5kb3csXG4gICAgICAgICAgICBwcml2YWN5OiBvcGVuV2luZG93LmluY29nbml0byA/IFwicHJpdmF0ZVwiIDogXCJub3JtYWxcIlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmb2N1c2VkIHdpbmRvdyBhbmQgaXQgaXMgYSBub3JtYWwgb3IgcG9wdXBcbiAgICAgICAgLy8gd2luZG93LCByZW1lbWJlciB0aGUgd2luZG93IElEIGFuZCBhY3RpdmUgdGFiIElEIChpZiBhbnkpXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGZvY3VzZWQgd2luZG93LCBvciB0aGUgZm9jdXNlZCB3aW5kb3cgaXNuJ3RcbiAgICAgICAgLy8gYSBub3JtYWwgb3IgcG9wdXAgd2luZG93LCB0aGlzIGJsb2NrIHdpbGwgbm90IHJ1biBhbmQgd2VcbiAgICAgICAgLy8gd2lsbCByZXRhaW4gdGhlIGRlZmF1bHQgdmFsdWVzIG9mIHRhYiBJRCA9IC0xIGFuZCB3aW5kb3dcbiAgICAgICAgLy8gSUQgPSAtMVxuICAgICAgICBpZigob3BlbldpbmRvdy5mb2N1c2VkKSAmJiAoKG9wZW5XaW5kb3cudHlwZSA9PT0gXCJub3JtYWxcIikgfHwgKG9wZW5XaW5kb3cudHlwZSA9PT0gXCJwb3B1cFwiKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gb3BlbldpbmRvdy5pZDtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSBhY3RpdmVUYWJJbk9wZW5XaW5kb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG59IiwiZXhwb3J0IGNvbnN0IHNob3J0RG9tYWlucyA9IFtcbi8vIEdvb2dsZSBuZXdzXG5cIm5ld3MuZ29vZ2xlLmNvbS9hcnRpY2xlc1wiLFxuXCJnb28uZ2xcIixcblwidC5jb1wiLFxuXCIwcnoudHdcIixcblwiMTI2LmFtXCIsXG5cIjFsMi51c1wiLFxuXCIxbGluay5pblwiLFxuXCIxdGsudXNcIixcblwiMXVuLmZyXCIsXG5cIjF1cmwuY29tXCIsXG5cIjF1cmwuY3pcIixcblwiMS11cmwubmV0XCIsXG5cIjF1LnJvXCIsXG5cIjEudXNhLmdvdlwiLFxuXCIxd2IyLm5ldFwiLFxuXCIyMGZ0Lm5ldFwiLFxuXCIyYWQuaW5cIixcblwiMmJpZy5hdFwiLFxuXCIyY2hhcC5pdFwiLFxuXCIyZG9jLm5ldFwiLFxuXCIyZmVhci5jb21cIixcblwiMi5ncFwiLFxuXCIyLmh0XCIsXG5cIjJsb25nLmNjXCIsXG5cIjIubHlcIixcblwiMnBsLnVzXCIsXG5cIjJzdS5kZVwiLFxuXCIydHUudXNcIixcblwiMnR5LmluXCIsXG5cIjJ1LnhmLmN6XCIsXG5cIjJ3c2IudHZcIixcblwiMnplLnVzXCIsXG5cIjMwMS50b1wiLFxuXCIzMDF1cmwuY29tXCIsXG5cIjMwNy50b1wiLFxuXCIzLmx5XCIsXG5cIjNyYS5iZVwiLFxuXCIzeC5zaVwiLFxuXCI0OXJzLm1lXCIsXG5cIjRpLmFlXCIsXG5cIjRtcy5tZVwiLFxuXCI0Lm5iY255LmNvbVwiLFxuXCI0c3EuY29tXCIsXG5cIjR1cmwuY2NcIixcblwiNHZpZXcubWVcIixcblwiNS0xMS5jb1wiLFxuXCI1M2VpZy5odFwiLFxuXCI1ZW0uY3pcIixcblwiNXJyLml0XCIsXG5cIjV1cmwubmV0XCIsXG5cIjUud2V3cy5jb21cIixcblwiNXo4LmluZm9cIixcblwiNmZyLnJ1XCIsXG5cIjZnNi5ldVwiLFxuXCI2dXJsLmNvbVwiLFxuXCI3Ni5nZFwiLFxuXCI3Ny5haVwiLFxuXCI3ZnRoLmNjXCIsXG5cIjdnZW4udXNcIixcblwiN2xpLmluXCIsXG5cIjcubHlcIixcblwiN255LnR2XCIsXG5cIjd2ZC5jblwiLFxuXCI4dS5jelwiLFxuXCI5NDQubGFcIixcblwiOTgudG9cIixcblwiOW1wLmNvbVwiLFxuXCJhMC5mclwiLFxuXCJhMmEubWVcIixcblwiYTJuLmV1XCIsXG5cImFhLmN4XCIsXG5cImFhcnAudXNcIixcblwiYWJici5jb21cIixcblwiYWJici5za1wiLFxuXCJhYmMxMS50dlwiLFxuXCJhYmMxMy5jb1wiLFxuXCJhYmNuLndzXCIsXG5cImFiYy50dlwiLFxuXCJhYmN1cmwubmV0XCIsXG5cImFiZTUuY29tXCIsXG5cImFjY2Vzcy5pbVwiLFxuXCJhY2N1cmEuY2NcIixcblwiYWNvc20uaW5cIixcblwiYWN0aW9uLm1lXCIsXG5cImFkNS5ldVwiLFxuXCJhZDcuYml6XCIsXG5cImFkYWdlLmNvbVwiLFxuXCJhZGIudWdcIixcblwiYWRjcmFmdC5jb1wiLFxuXCJhZGNydW4uY2hcIixcblwiYWRkLnZjXCIsXG5cImFkZmEuc3RcIixcblwiYWRmbGF2LmNvbVwiLFxuXCJhZGYubHlcIixcblwiYWRmbHkuZnJcIixcblwiYWRqaXguY29tXCIsXG5cImFkbGkucHdcIixcblwiYWQtbWVkLmN6XCIsXG5cImFkbmV3cy5tc1wiLFxuXCJhZG9iZS5seVwiLFxuXCJhZHYubGlcIixcblwiYWR2bW8udXNcIixcblwiYWQudnVcIixcblwiYWR3ZWVrLml0XCIsXG5cImFleHAuY29cIixcblwiYS1mci5pc1wiLFxuXCJhZnguY2NcIixcblwiYS5nZFwiLFxuXCJhLmdnXCIsXG5cImFnaWxlaXQuY29cIixcblwiYWh3ZC50dlwiLFxuXCJhamUubWVcIixcblwiYWpuLm1lXCIsXG5cImFrYS5nclwiLFxuXCJhbGlsLmluXCIsXG5cImFsai5hbVwiLFxuXCJhbGwuZnVzZXVybC5jb21cIixcblwiYWwuc3RcIixcblwiYWx0dXJsLmNvbVwiLFxuXCJhbWN1cmwuY29tXCIsXG5cIiNhbXpuLmNvbVwiLFxuXCJhbXpuLmNvbVwiLFxuXCIjYW16bi50b1wiLFxuXCJhbXpuLnRvXCIsXG5cImFuZHIudHZcIixcblwiYS5uZlwiLFxuXCJhbm4uY3JcIixcblwiYW55LmdzXCIsXG5cImFvZmIudXNcIixcblwiYW9sLml0XCIsXG5cImFwYWR2LmNvXCIsXG5cImFwbC50dlwiLFxuXCJhcG5lLndzXCIsXG5cImFwcHN1bW8uY29tXCIsXG5cImFxdmEucGxcIixcblwiYXJhLnR2XCIsXG5cImFyY25jdC5jb1wiLFxuXCJhcmVzLnRsXCIsXG5cImFyZ3VzbmUud3NcIixcblwiYXIuZ3lcIixcblwiYXJtLmluXCIsXG5cImFyc24uYWxcIixcblwiYXJzdC5jaFwiLFxuXCJhc2EubmFcIixcblwiYXNvcy50b1wiLFxuXCJhc3NvLmluXCIsXG5cImF0LmNtdC5jb21cIixcblwiYXRtbGIuY29tXCIsXG5cImF0Lm1ybXVsZS5jb21cIixcblwiYXQubXR2LmNvbVwiLFxuXCJhdC5wdy5vcmdcIixcblwiYXR0LW1zZy5jb21cIixcblwiYXR1LmNhXCIsXG5cImF1Lm1zXCIsXG5cImF1cmxzLmluZm9cIixcblwiYXV0b2RlLnNrXCIsXG5cImF2Yy5sdVwiLFxuXCJhdmxuZS53c1wiLFxuXCJhd2Uuc21cIixcblwiYS53aXNoLm9yZ1wiLFxuXCJheWwubHZcIixcblwiYXl0LmZyXCIsXG5cImF6YWxpLmZyXCIsXG5cImF6Yy5jY1wiLFxuXCJhenFxLmNvbVwiLFxuXCJiMDAuZnJcIixcblwiYjIzLnJ1XCIsXG5cImIybC5tZVwiLFxuXCJiNTQuaW5cIixcblwiYjY1LmNvbVwiLFxuXCJiNjUudXNcIixcblwiYmFjbi5tZVwiLFxuXCJiYWlkLnVzXCIsXG5cImJhc25vLmNvbVwiLFxuXCJiYmMuaW5cIixcblwiYmJyeS5sdlwiLFxuXCJiYnQuZ3NcIixcblwiYmJ5dXJsLnVzXCIsXG5cImJjZW5lLndzXCIsXG5cImJjb29sLmJ6XCIsXG5cImJjb3ZlLm1lXCIsXG5cImJjLnZjXCIsXG5cImJlYW0udG9cIixcblwiYmVhdHMuaXNcIixcblwiYmVlNC5iaXpcIixcblwiYmVlYmUuaW5cIixcblwiYmUubmV0XCIsXG5cImJmMTAuY29cIixcblwiYmZwbmUud3NcIixcblwiYi1nYXQuZXNcIixcblwiYmdsLm1lXCIsXG5cImIuZ2xvYmUuY29tXCIsXG5cImJnci5jb1wiLFxuXCJiaHBoby50b1wiLFxuXCJiaWJsZS51c1wiLFxuXCJiaWd0YmwuY29tXCIsXG5cImJpbS5pbVwiLFxuXCIjYmluZ2VkLml0XCIsXG5cImJpbmdlZC5pdFwiLFxuXCJiaXQuZG9cIixcblwiYml0Lmx5XCIsXG5cImJpdGx5LmNvbVwiLFxuXCJiaXRseS5pc1wiLFxuXCJiaXR3LmluXCIsXG5cImJpemoudXNcIixcblwiYmtpdGUuY29tXCIsXG5cImJsYXAubmV0XCIsXG5cImJsYnJkLmNvXCIsXG5cImJsYnJkLmNvbVwiLFxuXCJibGNrLmJ5XCIsXG5cImJsZS5hY1wiLFxuXCJibGUucGxcIixcblwiYmxpcHByLmNvbVwiLFxuXCJibGlwLnR2XCIsXG5cImJsbi5rclwiLFxuXCJibG9hdC5tZVwiLFxuXCJibG9vbS5iZ1wiLFxuXCJibHUuY2NcIixcblwiYm9pLnJlXCIsXG5cImJvbmFwcC5pdFwiLFxuXCJib25lZmkuc2hcIixcblwiYm9uLm5vXCIsXG5cImJvci5jb21cIixcblwiYm8uc3RcIixcblwiYm90ZS5tZVwiLFxuXCJib3Vnbi5hdFwiLFxuXCJib3Vybi5jb1wiLFxuXCJiLnFyLmFlXCIsXG5cImJyNC5pblwiLFxuXCJicmFkLm1uXCIsXG5cImJyYXZvLmx5XCIsXG5cImJyYnkuY29cIixcblwiYnJkLnJzXCIsXG5cImIucmlhbi5jY1wiLFxuXCJicmsudG9cIixcblwiYnJ6dS5uZXRcIixcblwiYnNhLmx5XCIsXG5cImJzbC5pb1wiLFxuXCJic3VuLm1kXCIsXG5cImJ0LmlvXCIsXG5cImJ1ZHVybC5jb21cIixcblwiYnVmZi5seVwiLFxuXCJidWsubWVcIixcblwiYnVsbC5oblwiLFxuXCJidWwubHVcIixcblwiYnVybnVybC5jb21cIixcblwiYnVzd2suY29cIixcblwiYnV6dXJsLmNvbVwiLFxuXCJidXp6dGFwLmNvbVwiLFxuXCJieGwubWVcIixcblwiYnpmZC5pdFwiLFxuXCJiemgubWVcIixcblwiY2FjaG9yLnJvXCIsXG5cImNhbXBsLnVzXCIsXG5cImNhbnVybC5jb21cIixcblwiY2FudmEubGlua1wiLFxuXCJjYXBpLnRsXCIsXG5cImNhcHRsMS5jb1wiLFxuXCJjYXB0dXIuaW5cIixcblwiY2FydC5tblwiLFxuXCJjYmMuc2hcIixcblwiY2JsZS5jb1wiLFxuXCJjYnNsb2MuYWxcIixcblwiY2Jzbi53c1wiLFxuXCJjYnNwcnQuY29cIixcblwiY2JzLnNvXCIsXG5cImNidWcuY2NcIixcblwiY2MuY2NcIixcblwiY2NqLmltXCIsXG5cImNkNC5tZVwiLFxuXCJjZHBuLmlvXCIsXG5cImNkdHIuY29cIixcblwiY2VrdGtwLmNvbVwiLFxuXCJjZXNhci5tblwiLFxuXCJjZjIubWVcIixcblwiY2Y2LmNvXCIsXG5cImNmOTcuY29cIixcblwiY2YubHlcIixcblwiY2hici5nclwiLFxuXCJjaGljLmFnXCIsXG5cImNoaWwuaXNcIixcblwiY2hpbHAuaXRcIixcblwiY2hpLm1nXCIsXG5cImNoaXByLmVzXCIsXG5cImNoaXAudGxcIixcblwiY2huLmdlXCIsXG5cImNoby5iYVwiLFxuXCJjaG9wZC5pdFwiLFxuXCJjaHB0Lm1lXCIsXG5cImNocmcucnNcIixcblwiY2hybWEuY29cIixcblwiY2hyb25pLmNsXCIsXG5cImNocy5teFwiLFxuXCJjaHpiLmdyXCIsXG5cImNpbi5jaVwiLFxuXCJjaW5lbWFnci5hbVwiLFxuXCJjamIubmV0XCIsXG5cImNqa3kuaXRcIixcblwiY2xjay5ydVwiLFxuXCJjbGQubWVcIixcblwiY2xlLmNsaW5pY1wiLFxuXCJjbGVtYS5jY1wiLFxuXCJjbGljY2FtaS5pbmZvXCIsXG5cImNsaWNrdGhydS5jYVwiLFxuXCJjbGkuZ3NcIixcblwiY2xpa2suaW5cIixcblwiY2xpcHVybC51c1wiLFxuXCJjbGsubXlcIixcblwiY2wubGtcIixcblwiY2wubHlcIixcblwiY2xuLm1lXCIsXG5cImNsb2FreS5kZVwiLFxuXCJjbG9wLmluXCIsXG5cImNsb3VkdXAuY29tXCIsXG5cImNscC5seVwiLFxuXCJjbHJsdi5yc1wiLFxuXCJjbXBiZWxsLmNvbVwiLFxuXCJjbXNhLm1lXCIsXG5cImNtc2MucmVcIixcblwiY244Ni5vcmdcIixcblwiY25iLmN4XCIsXG5cImNuZXQuY29cIixcblwiY25uLml0XCIsXG5cImNubm1vbi5pZVwiLFxuXCJjbnR4Lm1lXCIsXG5cImNvZ2UubGFcIixcblwiY29nLmdkXCIsXG5cImMtby5pblwiLFxuXCJjb2tldXJsLmNvbVwiLFxuXCJjb24uc3RcIixcblwiY29udGEuY2NcIixcblwiY29udG50Lmx5XCIsXG5cImNvb2suYmFcIixcblwiY29weS5ielwiLFxuXCJjb3J0LmFzXCIsXG5cImNvc20uYWdcIixcblwiY290LmFnXCIsXG5cImNvdWljLmZyXCIsXG5cImNwby5zdFwiLFxuXCJjcHRsMS5jb1wiLFxuXCJjcHdyLml0XCIsXG5cImNya3MubWVcIixcblwiY3Jvd2RzcHJpbmcuY29cIixcblwiY3IudGxcIixcblwiY3J0di5ta1wiLFxuXCJjcnVtLnBsXCIsXG5cImMuc2hhbWVraC53c1wiLFxuXCJjcy5wblwiLFxuXCJjdHQuZWNcIixcblwiY3R2ci51c1wiLFxuXCJjdHgubHlcIixcblwiY3VkYS5jb1wiLFxuXCJjdWRkZXIuaXRcIixcblwiY3VsdG0uYWNcIixcblwiY3VsdHIubWVcIixcblwiY3VyaW8udXNcIixcblwiY3VybC5pbVwiLFxuXCJjdXIubHZcIixcblwiY3VzLnRtXCIsXG5cImN1dC5ieVwiLFxuXCJjdXRodXQuY29tXCIsXG5cImN1dC5wZVwiLFxuXCJjdXQuc2tcIixcblwiY3V0dC5ldVwiLFxuXCJjdXR0LnVzXCIsXG5cImN1dHUubWVcIixcblwiY3V0dXJsLmNvbVwiLFxuXCJjdXR1cmxzLmNvbVwiLFxuXCJjeWJyLmZyXCIsXG5cImN5b25peC50b1wiLFxuXCJkNzUuZXVcIixcblwiZGFhLnBsXCIsXG5cImRhaS5seVwiLFxuXCJkYWlseW0uYWlcIixcblwiZGFrZC5tZVwiLFxuXCJkYWxhaWxhLm1hXCIsXG5cImRhbGxhc25lLndzXCIsXG5cImRhdGwuaW5cIixcblwiZGJsLmNoei5nclwiLFxuXCJkYnJvbi5jb1wiLFxuXCJkYi50dFwiLFxuXCJkY2RyLm1lXCIsXG5cImRkLm1hXCIsXG5cImRkcC5uZXRcIixcblwiZGR1dC5jaFwiLFxuXCJkZWFkc3AuaW5cIixcblwiZGVhbHNwbC51c1wiLFxuXCJkZWNlbnR1cmwuY29tXCIsXG5cImRlY2subHlcIixcblwiZGVsbC50b1wiLFxuXCJkZWwubHlcIixcblwiZGVtZ292ZXJuby5yc1wiLFxuXCJkZW1zLm1lXCIsXG5cImRlcG90Lmx5XCIsXG5cImRlcmYubWVcIixcblwiZGVzZXJ0LnNuXCIsXG5cImRldG5lLndzXCIsXG5cImRmNC51c1wiLFxuXCJkZjkubmV0XCIsXG5cImRmbDgubWVcIixcblwiZGZ0LmJhXCIsXG5cImRnZXIuYXRcIixcblwiZGh1cmwub3JnXCIsXG5cImRpZGR5Lml0XCIsXG5cImRpZ2JpZy5jb21cIixcblwiZGkuZ2dcIixcblwiZGlnZy5jb21cIixcblwiZGlnaXBpbGxzLmNvbVwiLFxuXCJkaWdzLmJ5XCIsXG5cImRpc2N2ci5jb1wiLFxuXCJkaS5zblwiLFxuXCJkaXNxLnVzXCIsXG5cImRpcy50bFwiLFxuXCJkbGQuYnpcIixcblwiZGxyc2h2LmVzXCIsXG5cImRsdnIuaXRcIixcblwiZC5tZVwiLFxuXCJkbXJlZy5jb1wiLFxuXCJkbmFpbi5mb1wiLFxuXCJkbi52Y1wiLFxuXCJkby5jb1wiLFxuXCJkb2lvcC5jb21cIixcblwiZG9pLm9yZ1wiLFxuXCJkb2xwLmNjXCIsXG5cImRvLm15XCIsXG5cImRvcGVuLnVzXCIsXG5cImRvcGljZS5za1wiLFxuXCJkcG8uc3RcIixcblwiZC5wclwiLFxuXCJkcmFnZC5pc1wiLFxuXCJkcmJsLmluXCIsXG5cImRyb2lkLndzXCIsXG5cImRyb3AuaW9cIixcblwiZHJvei5tZVwiLFxuXCJkcnBsbi5nc1wiLFxuXCJkcnAubHlcIixcblwiZHIudGxcIixcblwiZHJ1ZGdlLnR3XCIsXG5cImRzYy50dlwiLFxuXCJkcy5wblwiLFxuXCJkc3B5Lm1lXCIsXG5cImR0ZGcuY29cIixcblwiZHRoaW4uZ3NcIixcblwiZHVybC5tZVwiLFxuXCJkdXJsLnVzXCIsXG5cImR2LmdkXCIsXG5cImR2bHIuaXRcIixcblwiZHdhcmZ1cmwuY29tXCIsXG5cImR5by5nc1wiLFxuXCJlMzcuZXVcIixcblwiZWFtLm1lXCIsXG5cImVhc3l1cmkuY29tXCIsXG5cImVhc3l1cmwubmV0XCIsXG5cImVjYS5zaFwiLFxuXCJlY2x1cmwuY29tXCIsXG5cImVjb24uc3RcIixcblwiZWNvdGkubXNcIixcblwiZWNyYS5zZVwiLFxuXCJlY3JlYS50dlwiLFxuXCJlZHV0LnRvXCIsXG5cImVlcHVybC5jb21cIixcblwiZWV6dXJsLmNvbVwiLFxuXCJlZmYub3JnXCIsXG5cImVsZWdhbnR0aGVtLmVzXCIsXG5cImVsaXRlZGFpLmx5XCIsXG5cImVscS50b1wiLFxuXCJlbHkucmVcIixcblwiZW1jLmltXCIsXG5cImVuY29zaWEubWVcIixcblwiZW5ndC5jb1wiLFxuXCJlbnRtLmFnXCIsXG5cImVudmEudG9cIixcblwiZW9jLmNjXCIsXG5cImVvbmxpLm5lXCIsXG5cImVxYm90LmNvbVwiLFxuXCJlcmF4LmN6XCIsXG5cImVydy5jelwiLFxuXCJlcy5wblwiLFxuXCJlc3NuLnRsXCIsXG5cIiNldHN5Lm1lXCIsXG5cImV0LnR2XCIsXG5cImV3ZXJpLmNvbVwiLFxuXCJld2VybC5jb21cIixcblwiZXg5LmNvXCIsXG5cImV4bS5uclwiLFxuXCJleHRyLnR2XCIsXG5cImV6dXJsLmNjXCIsXG5cImV6dXJsLmV1XCIsXG5cImZhLmJ5XCIsXG5cIiNmYWNlYm9vay5hcHBzdG9yZS5jb21cIixcblwiZmFjZXRvLnVzXCIsXG5cImZhbmRhbi5jb1wiLFxuXCJmYW5kdy5tZVwiLFxuXCJmYXRjLmNvXCIsXG5cImZhdi5tZVwiLFxuXCIjZmIubWVcIixcblwiZmIubWVcIixcblwiZmIubmJjc3BvcnRzLmNvbVwiLFxuXCJmYnNoYXJlLm1lXCIsXG5cIiNmYnV5Lm1lXCIsXG5cImZjbmV3cy50dlwiLFxuXCJmZWVkemlsLmxhXCIsXG5cImZmY2UuYnpcIixcblwiZmZmLnJlXCIsXG5cImZmZi50b1wiLFxuXCJmZmYud2ZcIixcblwiZmYuaW1cIixcblwiZmh1cmwuY29tXCIsXG5cImZpbGVzaGFyLmVzXCIsXG5cImZpbG9vcHMuaW5mb1wiLFxuXCJmaWx6LmZyXCIsXG5cImZpbmQuYmVlclwiLFxuXCJmaXJlLnRvXCIsXG5cImZpcnN0dXJsLmRlXCIsXG5cImZpcnN0dXJsLm5ldFwiLFxuXCJmaXRtLmFnXCIsXG5cImZsaWMua3JcIixcblwiZmxpbmdrLmNvbVwiLFxuXCJmbGlwLml0XCIsXG5cImZsbmUud3NcIixcblwiZmxxLnVzXCIsXG5cImZsdHIudHZcIixcblwiZmx3ci5wdFwiLFxuXCJmbHkyLndzXCIsXG5cImZtMi5tZVwiLFxuXCJmbmsuZXNcIixcblwiZm9hay5jb1wiLFxuXCJmb2UuaG5cIixcblwiZm9sbG93ZWR1LmNvbVwiLFxuXCJmb2x1Lm1lXCIsXG5cImZvbi5nc1wiLFxuXCJmb250Lm1lXCIsXG5cImZvcnIuc3RcIixcblwiZm9yLnRuXCIsXG5cImZveHMucHRcIixcblwiZm94LnR2XCIsXG5cImZveHl1cmwuY29tXCIsXG5cImZyYy52Y1wiLFxuXCJmcmVhay50b1wiLFxuXCJmcmVlcHIuZXNcIixcblwiZnJlemUuaXRcIixcblwiZnJvLmd5XCIsXG5cImYtc3QuY29cIixcblwiZnRjeS5jb1wiLFxuXCJmdW4ubHlcIixcblwiZnVubmkubHlcIixcblwiZnVyLmx5XCIsXG5cImZ1c2V1cmwuY29tXCIsXG5cImZ1cy5pblwiLFxuXCJmdXp6eS50b1wiLFxuXCJmd2Q0Lm1lXCIsXG5cImZ3ZHVybC5uZXRcIixcblwiZndpYi5uZXRcIixcblwiZnhuLndzXCIsXG5cImZ4cy5wdFwiLFxuXCJmenkuY29cIixcblwiZzAwLm1lXCIsXG5cImc4bC51c1wiLFxuXCJnYS5jb1wiLFxuXCJnYXAudXNcIixcblwiZ2F0ZXMubHlcIixcblwiZ2F0aHIudXNcIixcblwiZ2F3LmtyXCIsXG5cImdicGcubmV0XCIsXG5cImcuY28gYW5kXCIsXG5cImdlb3Jpb3QuY29cIixcblwiZ2V0Zi5seVwiLFxuXCJnZXRtLnB0XCIsXG5cImdldC5zaFwiLFxuXCJnZXQtc2hvcnR5LmNvbVwiLFxuXCJnZXQtdXJsLmNvbVwiLFxuXCJnZXR1cmwudXNcIixcblwiZ2cuZ2dcIixcblwiZ2kudmNcIixcblwiZ2l6bW8uZG9cIixcblwiZ2t1cmwudXNcIixcblwiZ2wuYW1cIixcblwiZ2xibi5jYVwiLFxuXCJnbG1yLm1lXCIsXG5cImdscG8uc3RcIixcblwiZ2xzZW4udXNcIixcblwiZ28yLm1lXCIsXG5cImdvLjlubC5jb21cIixcblwiZ28uYnJpdC5jb1wiLFxuXCJnby5mb3g1OS5jb21cIixcblwiZ29nLmxpXCIsXG5cImdvaGUuYXRcIixcblwiZ29oc24uY29cIixcblwiZ28uaWduLmNvbVwiLFxuXCJnb2tldi5pblwiLFxuXCJnb2xpbmtzLmNvXCIsXG5cImdvbG1hby5jb21cIixcblwiZ28ubWVcIixcblwiZ28ubmFzYS5nb3ZcIixcblwiZ29vZC5seVwiLFxuXCJnb28uZ2xcIixcblwiZ29vLmx1XCIsXG5cImdvLm9zdHAuZ292XCIsXG5cImdvc2hyaW5rLmNvbVwiLFxuXCJnby5zaHIubGNcIixcblwiZ29zc2lwY29wLmNvbVwiLFxuXCJnb3NzaS5wclwiLFxuXCJnby50b1wiLFxuXCJnb3RvbS50Z1wiLFxuXCJnby51bmwuZWR1XCIsXG5cImdvLnVzYS5nb3ZcIixcblwiZ293YWwubGFcIixcblwiZ3BsdXMudG9cIixcblwiZ3FtLmFnXCIsXG5cImdyYWIuYnlcIixcblwiZ3JkbnMuY29cIixcblwiZ3JlbS5pb1wiLFxuXCJncmkubXNcIixcblwiZ3JpbmRyLm1lXCIsXG5cImdybm9sLmNvXCIsXG5cImdybnBjLm9yZ1wiLFxuXCJnLnJvLmx0XCIsXG5cImdyLnBuXCIsXG5cImdyei5jbVwiLFxuXCJndGcubHVcIixcblwiZ3RyLmJ6XCIsXG5cImd1LmNvbVwiLFxuXCJndWlhbWEuaXNcIixcblwiZ3VybC5lc1wiLFxuXCJoYWRlai5jb1wiLFxuXCJoYWlsby50b1wiLFxuXCJoYW8uanBcIixcblwiaGF0bmUud3NcIixcblwiaGJzcGsuY29cIixcblwiaGNsdGUuY2hcIixcblwiaGVmci5pblwiLFxuXCJoZWxsb3R4dC5jb21cIixcblwiaGV4LmlvXCIsXG5cImhnLnR2XCIsXG5cImhpZGUubXlcIixcblwiaGlkZXJlZmVyLmNvbVwiLFxuXCJoaXAubXVcIixcblwiaGl0Lm15XCIsXG5cImhqa2wuZnJcIixcblwiaG1tLnBoXCIsXG5cImhuZGlhcnkuY29tXCIsXG5cImhvcGNsaWNrcy5jb21cIixcblwiaG9wLmltXCIsXG5cImhvcHMubWVcIixcblwiaG9wcy50b1wiLFxuXCJob3RyZWRpcmVjdC5jb21cIixcblwiaG90c2hvcnR1cmwuY29tXCIsXG5cImhvdS5saVwiLFxuXCJocC5udVwiLFxuXCJocHN0bS50Y1wiLFxuXCJocmMuaW9cIixcblwiaHJkLmNtXCIsXG5cImhyZWYuaW5cIixcblwiaHJlZi5saVwiLFxuXCJocmxkLnVzXCIsXG5cImhydmQubWVcIixcblwiaHJ2LnN0XCIsXG5cImhzYmxpbmtzLmNvbVwiLFxuXCJodC5seVwiLFxuXCJodHJuZS53c1wiLFxuXCJodHh0Lml0XCIsXG5cImh0ei5saVwiLFxuXCJodWIuYW1cIixcblwiaHVicy5seVwiLFxuXCJodWZmLmx2XCIsXG5cImh1ZmYudG9cIixcblwiaHVnZXVybC5jb21cIixcblwiaHVsdS5jb21cIixcblwiaHVsdS50dlwiLFxuXCJodXJsLml0XCIsXG5cImh1cmwubWVcIixcblwiaHVybC5ub1wiLFxuXCJodXJsLndzXCIsXG5cImh5cGVydXJsLmNvXCIsXG5cImh5di5lZVwiLFxuXCJpMHJ6LnR3XCIsXG5cImktMi5jb1wiLFxuXCJpOTkuY3pcIixcblwiaWNhbmhhei5jb21cIixcblwiaWNpby51c1wiLFxuXCJpY2l0LmZyXCIsXG5cImljay5saVwiLFxuXCJpY2tzLnJvXCIsXG5cImljb250LmFjXCIsXG5cImljcC1jLmNvbVwiLFxuXCJpZGVrLm5ldFwiLFxuXCJpZC50bFwiLFxuXCJpaGcuY29cIixcblwiaWlpaWkuaW5cIixcblwiaWtyLm1lXCIsXG5cImlreS5mclwiLFxuXCJpbGl4LmluXCIsXG5cImlsbGluLmlzXCIsXG5cImltZy5seVwiLFxuXCJpbmQucG5cIixcblwiaW5keS5zdFwiLFxuXCJpbi5mbHV4LmNvbVwiLFxuXCJpbmZvLm1zXCIsXG5cImluc3QuY3JcIixcblwiaW50ZWwubHlcIixcblwiaW50by50dlwiLFxuXCJpbnR1aXQubWVcIixcblwiaW52ZW50LmdlXCIsXG5cImludi5sdlwiLFxuXCJpcGxvZ2dlci5jb21cIixcblwiaXBsb2dnZXIub3JnXCIsXG5cImlyLnBlXCIsXG5cImlydC5tZVwiLFxuXCJpc2Nvb2wubmV0XCIsXG5cImlzLmdkXCIsXG5cImlzcmEubGlcIixcblwiaXQyLmluXCIsXG5cIml0aGFjYWpyLm5sXCIsXG5cIml0aGVtLmVzXCIsXG5cIml0bS5pbVwiLFxuXCJpdG8ubXhcIixcblwiaXRzZW8ub3JnXCIsXG5cIml0c2guYm9cIixcblwiaXRzanVzdC5pblwiLFxuXCJpdHMubXlcIixcblwiaXRzeS5pdFwiLFxuXCJpdHYuY29cIixcblwiaXR5LmltXCIsXG5cIml2aWxsLmFnXCIsXG5cIml4Lmx0XCIsXG5cIml4LnNrXCIsXG5cImoyai5kZVwiLFxuXCJqY3AuaXNcIixcblwiamNyZXcuY29cIixcblwiamRlbS5jelwiLFxuXCJqLmdzXCIsXG5cImppZWIuYmVcIixcblwiamlqci5jb21cIixcblwiam1vcnIuaXNcIixcblwiai5tcFwiLFxuXCJqbXNicmQuY29cIixcblwiam91cm4udXNcIixcblwianAyMi5uZXRcIixcblwianBtLmNvbVwiLFxuXCJqcXcuZGVcIixcblwianIubHlcIixcblwianJubC5pZVwiLFxuXCJqc2hlbi5tZVwiLFxuXCJqcy5pc1wiLFxuXCJqLnN0XCIsXG5cImp1c3QuYXNcIixcblwiazJuZS53c1wiLFxuXCJrNi5relwiLFxuXCJrYWJiYWdlLmlvXCIsXG5cImthcmUxMS50dlwiLFxuXCJrYXNrLnVzXCIsXG5cImtjaXRwLm1lXCIsXG5cImtjay5zdFwiLFxuXCJrZWwuYnlcIixcblwia2V0a3AuaW5cIixcblwia2Utd2UubmV0XCIsXG5cImtmZC5wbFwiLFxuXCJraXJvLnR2XCIsXG5cImtpc2EuY2hcIixcblwia2lzc2EuYmVcIixcblwia2lzcy5seVwiLFxuXCJrbC5hbVwiLFxuXCJrbGNrLm1lXCIsXG5cImtsb3UudHRcIixcblwia25nNS50dlwiLFxuXCJrbmcuaHRcIixcblwia25vdC5seVwiLFxuXCJrb25yYXRoLmNvXCIsXG5cImtvcmUudXNcIixcblwia29ydGEubnVcIixcblwia290cy5udVwiLFxuXCJrcC5jY1wiLFxuXCJrcjN3LmRlXCIsXG5cImtyYXQuc2lcIixcblwia3JhdHNpLmN6XCIsXG5cImtyb2QuY3pcIixcblwia3J1bmNoZC5jb21cIixcblwia3J6LmNoXCIsXG5cImtzdHAubW5cIixcblwia3RpZS50dlwiLFxuXCJrdGltZXMuY29cIixcblwia3RsYW5lLndzXCIsXG5cImt0enIudXNcIixcblwia3VjLmN6XCIsXG5cImt1bnppLm1lXCIsXG5cImsudnVcIixcblwia3hiLm1lXCIsXG5cImt4ay5tZVwiLFxuXCJMOS5mclwiLFxuXCJsOWsubmV0XCIsXG5cImxhY28uc3RcIixcblwibGFuZHMudG9cIixcblwibGF0Lm1zXCIsXG5cImxjLmN4XCIsXG5cImxjLXMuY29cIixcblwibGN1dC5pblwiLFxuXCJsZWFmbmUud3NcIixcblwibGV0b3AxMC5cIixcblwibC5oaC5kZVwiLFxuXCJsaWJlcm8uaXRcIixcblwibGljay5teVwiLFxuXCJsaWVuLmxpXCIsXG5cImxpZW4ucGxcIixcblwibGlmZWhhYy5rclwiLFxuXCJsaWlwLnRvXCIsXG5cImxpbHRleHQuY29tXCIsXG5cImxpbi5jclwiLFxuXCJsaW4uaW9cIixcblwibGlua2JlZS5jb21cIixcblwibGlua2J1bi5jaFwiLFxuXCJsaW5rZWUuY29tXCIsXG5cImxpbmtnYXAuY29tXCIsXG5cImxpbmtuLmNvXCIsXG5cImxpbmtzbGljZS5jb21cIixcblwibGlua3RvLmltXCIsXG5cImxpbmsud25lcC5jb21cIixcblwibGluay56aXAubmV0XCIsXG5cImxpbnhmaXguZGVcIixcblwibGlzdG4udG9cIixcblwibGl0ZXVybC5uZXRcIixcblwibGl1cmwuY25cIixcblwibGl2ZW1peHRhcC5lc1wiLFxuXCJsaXZlc2kuZGVcIixcblwibGl2ZXN0cmUuYW1cIixcblwibGl2aW5nc29jaS5hbFwiLFxuXCJsaXguaW5cIixcblwibC1rLmJlXCIsXG5cImxrLmh0XCIsXG5cImxsdS5jaFwiLFxuXCJsbmNoLmNvXCIsXG5cImxuay5ieVwiLFxuXCJsbmsuY29cIixcblwibG5rZC5pblwiLFxuXCJsbmsuZGlyZWN0XCIsXG5cImxuay5nZFwiLFxuXCJsbmsuaW5cIixcblwibG5rLmx5XCIsXG5cImxuay5tc1wiLFxuXCJsbmtzLmZyXCIsXG5cImxuay5za1wiLFxuXCJsbmt1cmwuY29tXCIsXG5cImxua3kuZnJcIixcblwibG5wLnNuXCIsXG5cImxuLXMubmV0XCIsXG5cImxuLXMucnVcIixcblwibG9nby50dlwiLFxuXCJsb2h1ZC51c1wiLFxuXCJsb25ncmVwLmx5XCIsXG5cImxvb3B0LnVzXCIsXG5cImxvc3QuaW5cIixcblwibG93LmVzXCIsXG5cImxwMjUuZnJcIixcblwibHBsemEuY29cIixcblwibC5wclwiLFxuXCJsLXIudHZcIixcblwibHJ1LmpwXCIsXG5cImxzLmx5XCIsXG5cImx0cy5jclwiLFxuXCJsdC50bFwiLFxuXCJsdXJsLm5vXCIsXG5cImx1LnRvXCIsXG5cIkx2dmsuY29tXCIsXG5cImx4LmltXCIsXG5cIm0xLmlvXCIsXG5cIm0xcC5mclwiLFxuXCJtM21pLmNvbVwiLFxuXCJtYWNydW1vLnJzXCIsXG5cIm1hY3RlLmNoXCIsXG5cIm1hZC5seVwiLFxuXCJtYWtlLm15XCIsXG5cIm1hcHEuc3RcIixcblwibWFyaWUuY2xcIixcblwibWFzaC50b1wiLFxuXCJtYXZyZXYuY29tXCIsXG5cIm1iaXN0LnJvXCIsXG5cIm1jYWYuZWVcIixcblwibWNkLnRvXCIsXG5cIm1jc3RyLm5ldFwiLFxuXCJtY3RyLnN0XCIsXG5cIm1kbDI5Lm5ldFwiLFxuXCJtZHRtLnBsXCIsXG5cIm1lZGlhdGUuY29tXCIsXG5cIm1lZS5ib1wiLFxuXCJtZWV0dS5wc1wiLFxuXCJtZWZpLnVzXCIsXG5cIm1lbXVybC5jb21cIixcblwibWVya3kuZGVcIixcblwibWV0YW1hcmsubmV0XCIsXG5cIm1pYy5mclwiLFxuXCJtaWNoYWVsLnBoXCIsXG5cIm1pZ2h0Lmx5XCIsXG5cIm1pZ3JlLm1lXCIsXG5cIm1pbjIubWVcIixcblwibWluLmRqXCIsXG5cIm1pbmlsaWVuLmNvbVwiLFxuXCJtaW5pbGluay5vcmdcIixcblwibWluaXVybC5jb21cIixcblwibWludS5tZVwiLFxuXCJtaW51cmwuZnJcIixcblwibWluLnVzXCIsXG5cIm1pdG5lLndzXCIsXG5cIm1pLnR0XCIsXG5cIm1rZS5tZVwiLFxuXCJta2xuZC5jb21cIixcblwibWt0LmNvbVwiLFxuXCJta3RwbGMub3JnXCIsXG5cIm1sYW4uY29cIixcblwibWxrcy5jb1wiLFxuXCJtbG4uaW1cIixcblwibWxzcC5jb1wiLFxuXCJtbWYuY2NcIixcblwibW1mbGludC5tZVwiLFxuXCJtb2J5LnRvXCIsXG5cIm1vam8ubHlcIixcblwibW9uZXkudXNcIixcblwibW9uc3Rlci5tZVwiLFxuXCJtb291cmwuY29tXCIsXG5cIm1vcGguaWVcIixcblwibW9yZS5zaFwiLFxuXCJtb3ZpZS5wc1wiLFxuXCJtb3ZpLmVzXCIsXG5cIm1waC50b1wiLFxuXCJtcmt0LnJzXCIsXG5cIm1ybW4ub3JnXCIsXG5cIm1ydGUuY2hcIixcblwibXNmdC5pdFwiLFxuXCJtc2cuc2dcIixcblwibXN0ci5jZFwiLFxuXCJtdGhzLmJlXCIsXG5cIm10bG4udXNcIixcblwibS50cmkuYmVcIixcblwibXVvLmZtXCIsXG5cIm11cmwua3pcIixcblwibXV0Lmx1XCIsXG5cIm12Mi5tZVwiLFxuXCJtdnAudG9cIixcblwibXduZS53c1wiLFxuXCJteWRlc2VydC5jb1wiLFxuXCJteWZvbnRzLnVzXCIsXG5cIm15bG9jLm1lXCIsXG5cIm15cGljdC5tZVwiLFxuXCJteXNwLmFjXCIsXG5cIm15c3AuaW5cIixcblwibXl1cmwuaW5cIixcblwibXl1cmwuc2lcIixcblwibXkueW9wbGFpdC5jb21cIixcblwibXouY20sXCIsXG5cIm16bC5sYVwiLFxuXCJuYW1lLnNvY2lhbFwiLFxuXCJuYW5vcmVmLmNvbVwiLFxuXCJuYW5vdXJsLnNlXCIsXG5cIm5hdGwucmVcIixcblwibmF0dXJlLmx5XCIsXG5cIm5iY2NoaS5jb21cIixcblwibmJjLmNvXCIsXG5cIm5iY25ld3MudG9cIixcblwibmJjbnkuY29tXCIsXG5cIm5iY28ubHlcIixcblwibmJjLnRvXCIsXG5cIm5ibG8uZ3NcIixcblwibmJ4LmNoXCIsXG5cIm5jYW5lLmNvbVwiLFxuXCJuY2Euc3RcIixcblwibmR1cmwuY29tXCIsXG5cIm5lMS5uZXRcIixcblwibmVvLmx5XCIsXG5cIm5ldDQ2Lm5ldFwiLFxuXCJuZXQubXNcIixcblwibmV0bmV0Lm1lXCIsXG5cIm5ldHNob3J0Y3V0LmNvbVwiLFxuXCJuZXdzZGF5LmNvbVwiLFxuXCJuZXdzZXIubWVcIixcblwibmV3c3ByLmVzXCIsXG5cIm5ld3N5LmNvbVwiLFxuXCJuZnoubWVcIixcblwibmljb3UuY2hcIixcblwibmllbC5zblwiLFxuXCJuaWUubW5cIixcblwibmlnLmdyXCIsXG5cIm5pbmcuaXRcIixcblwibmkudG9cIixcblwibml4bGUudXNcIixcblwibmpvdXIubmxcIixcblwiI25tZW0uYWdcIixcblwibm0ubHlcIixcblwibm4ubmZcIixcblwibm9kMi5tZVwiLFxuXCJub2lwLmNvXCIsXG5cIm5va2lhLmx5XCIsXG5cIm5vdGxvbmcuY29tXCIsXG5cIm5vdC5teVwiLFxuXCJub3YuaW9cIixcblwibm93dGguaXNcIixcblwibi5wclwiLFxuXCJucS5zdFwiLFxuXCJucmRyeS5uZXRcIixcblwibnNmdy5pblwiLFxuXCJuc3NuLmNvXCIsXG5cIm50YnguY29cIixcblwibnV0c2hlbGx1cmwuY29tXCIsXG5cIm54Zy5pc1wiLFxuXCJueHkuaW5cIixcblwibnlkbi51c1wiLFxuXCJueW0uYWdcIixcblwibnlvYi5jb1wiLFxuXCJueXAuc3RcIixcblwibnl0aS5tc1wiLFxuXCJueXYubWVcIixcblwibnpoLnR3XCIsXG5cIm9hZHMuY29cIixcblwib2JvZXlhc3VpLmNvbVwiLFxuXCJvYzEudXNcIixcblwib2NjaXAuaXQgYW5kIDM2MC5pb1wiLFxuXCJvLmVhLmNvbVwiLFxuXCJvZmEuYm9cIixcblwib2ZmdXIuY29tXCIsXG5cIm9mbC5tZVwiLFxuXCJvaGRldi5pblwiLFxuXCJvaW5rLmNvbVwiLFxuXCJva29rLmZyXCIsXG5cIm8ubHlcIixcblwib21mLmdkXCIsXG5cIm9tZ2YuYWNcIixcblwib20ubHlcIixcblwib21vaWthbmUubmV0XCIsXG5cIm9uLjExYWxpdmUuY29tXCIsXG5cIm9uOW5ld3MudHZcIixcblwib24tYWpjLmNvbVwiLFxuXCJvbi5hcHAuY29tXCIsXG5cIm9uLmF6Y2VudHJhbC5jb21cIixcblwib24uYm9mYS5jb21cIixcblwib24uY2MuY29tXCIsXG5cIm9uLmNubi5jb21cIixcblwib24uZWEuY29tXCIsXG5cIm9uZWNlbnQudXNcIixcblwiI29uLmZiLm1lXCIsXG5cIm9uLmZlYXJuZXQuY29tXCIsXG5cIm9uLmZsYXRvZGF5LmNvbVwiLFxuXCJvbmZvcmIuZXNcIixcblwib24uZnQuY29tXCIsXG5cIm9uLmhsbi50dlwiLFxuXCJvbmlvbi5jb21cIixcblwib24uamNvbmxpbmUuY29tXCIsXG5cIm9uLmtzZGsuY29tXCIsXG5cIm9uLmt0aHYuY29tXCIsXG5cIm9uLmxpZmUuY29tXCIsXG5cIm9uLm1hc2gudG9cIixcblwib24ubWdtYWR2LmNvbVwiLFxuXCJvbi5ta3R3Lm5ldFwiLFxuXCJvbm1zbmJjLmNvXCIsXG5cIm9uLm1zbmJjLmNvbVwiLFxuXCJvbi1tc24uY29tXCIsXG5cIm9uLm5hdGdlby5jb21cIixcblwib24ubmV3czEwLm5ldFwiLFxuXCJvbi5uZmliLmNvbVwiLFxuXCJvbi5waWVyMS5jb21cIixcblwib24ucG5qLmNvbVwiLFxuXCJvbnNhYXMuaW5mb1wiLFxuXCJvbi5zaS5jb21cIixcblwib24uc3VnYXJzY2EucGVcIixcblwib24udGRvLmNvbVwiLFxuXCJvbi50aGVjLWwuY29tXCIsXG5cIm9uLnRoZWdyaW8uY29tXCIsXG5cIm9uLnRoZWtpdGMuaG5cIixcblwib24udG9kYXkuY29tXCIsXG5cIm9udmIuY29cIixcblwib24udmVudHJhY2hpY2Fnby5jb21cIixcblwib24udmgxLmNvbVwiLFxuXCJvbi53YmlyLmNvbVwiLFxuXCJvbi53Y3NoNi5jb21cIixcblwib24ud2ZteS5jb21cIixcblwib24ud2dyei5jb21cIixcblwib24ud2t5Yy5jb21cIixcblwib24ud2xiejIuY29tXCIsXG5cIm9uLndsdHguY29tXCIsXG5cIm9uLndtYXouY29tXCIsXG5cIm9uLnduZXAuY29tXCIsXG5cIm9uLndzai5jb21cIixcblwib24ud3RzcC5jb21cIixcblwib24ud3VzYTkuY29tXCIsXG5cIm9uLnd6em0uY29tXCIsXG5cIm9vcXguY29tXCIsXG5cIm9wYi5pc1wiLFxuXCJvcHRpbWl6ZS5seVwiLFxuXCJvcmNsLnNvXCIsXG5cIm9yZWlsLmx5XCIsXG5cIm9yZ2Nucy5vcmdcIixcblwib3J6LnNlXCIsXG5cIm9zaGtvLnNoXCIsXG5cIm9za3kuY29cIixcblwib3Rhay5odVwiLFxuXCJvdWEuYmVcIixcblwib3UuYWZcIixcblwib3UuZ2RcIixcblwiI293bC5saVwiLFxuXCIjb3cubHlcIixcblwib3cubHlcIixcblwiby14LmZyXCIsXG5cIm94eXouaW5mb1wiLFxuXCJwNGsuaW5cIixcblwicDZsLm9yZ1wiLFxuXCJwOGcudHdcIixcblwicGFjay5yc1wiLFxuXCJwYXBlLnJzXCIsXG5cInBhcmt5LnR2XCIsXG5cInBhcnRvbi5seVwiLFxuXCJwYXJ2LnVzXCIsXG5cInBhc3QuaXNcIixcblwicGF0Y2guY29tXCIsXG5cInBhdWxkaW5nLm5ldFwiLFxuXCJwYmxpLnNoXCIsXG5cInBjay5yc1wiLFxuXCJwY28ubHRcIixcblwicGRoLmNvXCIsXG5cInBkdWRhLm1vYmlcIixcblwicGVhY2hwLml0XCIsXG5cInBlYXVybC5jb21cIixcblwicGVuZGVrLmluXCIsXG5cInBlcC5zaVwiLFxuXCJwZXJlei5seVwiLFxuXCJwZXRzbWFydHNvY2lhbC5jb21cIixcblwicGV3cnNyLmNoXCIsXG5cInBnZS5zeFwiLFxuXCJwaGlsbGlwcy50b1wiLFxuXCJwaC5seVwiLFxuXCJwaHRzaHAudXNcIixcblwicGljLmdkXCIsXG5cInBpY2guaW5cIixcblwicGljcGx6LmNvbVwiLFxuXCJwaWN6LnVzXCIsXG5cInBpZmYubWVcIixcblwicGlrby5tZVwiLFxuXCJwaW5ld3MuY29cIixcblwicGluZy5mbVwiLFxuXCJwaW4uc3RcIixcblwicGkucGVcIixcblwicGl0Y2gucGVcIixcblwicGl1cmwuY29tXCIsXG5cInBsLmFuXCIsXG5cInBsYXRlZC5tZVwiLFxuXCJwbGkuZ3NcIixcblwicGxvdHMuZnJcIixcblwicGx1bXVybC5jb21cIixcblwicGx1cmwubWVcIixcblwicC5seVwiLFxuXCJwbS53dS5jelwiLFxuXCJwbmRvLmx5XCIsXG5cInBuZ3IuaXRcIixcblwicG5pbmphLmNvXCIsXG5cInBudC5tZVwiLFxuXCJwb2NrZXQuY29cIixcblwicG9qb25ld3MuY29cIixcblwicG9saXRpLmNvXCIsXG5cInBvbGwuZm1cIixcblwicG9wLmx5XCIsXG5cInBvcHJsLmNvbVwiLFxuXCJwb3BzLmNpXCIsXG5cInBvLnN0XCIsXG5cInBvc3QuY3JcIixcblwicG9zdGRpc3BhdC5jaFwiLFxuXCJwb3N0ZWQuYXRcIixcblwicC5vc3QuaW1cIixcblwicG9zdC5seVwiLFxuXCJwb3dlbGxzLnVzXCIsXG5cInBwY2hlLnJvXCIsXG5cInBwZnIuaXRcIixcblwicHAuZ2dcIixcblwicHBzdC5tZVwiLFxuXCJwcHQuY2NcIixcblwicHB0LmxpXCIsXG5cInAucHdcIixcblwicHJlaml0LmN6XCIsXG5cInByZXNzLnNuXCIsXG5cInByZXR0eWxpbmtwcm8uY29tXCIsXG5cInByZXouaXNcIixcblwicHJpLnZjXCIsXG5cInBybnQuaW5cIixcblwicHJuLnRvXCIsXG5cInByb2ZpbGUudG9cIixcblwicHQyLm1lXCIsXG5cInB0YWIuaXRcIixcblwicHRpdHVybC5jb21cIixcblwicHRtLnJvXCIsXG5cInB0cmFuaS5tZVwiLFxuXCJwdWJsdW4uY2hcIixcblwicHViLnZpdHJ1ZS5jb21cIixcblwicHVrZS5pdFwiLFxuXCJwdWxzZS5tZVwiLFxuXCJwdWxzZW5lLndzXCIsXG5cInB1cmkubmFcIixcblwicHcyLnJvXCIsXG5cInB3aXJlLmF0XCIsXG5cInB5Ni5ydVwiLFxuXCJweXNwZXIuY29tXCIsXG5cInFibi5ydVwiLFxuXCJxLmdzXCIsXG5cInFpay5saVwiLFxuXCJxa21lLm1lXCIsXG5cInFsbmsubmV0XCIsXG5cInFvaW9iLmNvbVwiLFxuXCJxcWMuY29cIixcblwicXIuYWVcIixcblwicXIuY3hcIixcblwicXIubmV0XCIsXG5cInFydGFnLmZyXCIsXG5cInF0ZS5tZVwiLFxuXCJxdWlja3VybC5jby51a1wiLFxuXCJxdXJsLmNvbVwiLFxuXCJxdXJseXEuY29tXCIsXG5cInF1LnRjXCIsXG5cInF1dS5udVwiLFxuXCJxdXguaW5cIixcblwicXZjLmNvXCIsXG5cInF4cC5jelwiLFxuXCJxeHAuc2tcIixcblwicXkuZmlcIixcblwicXouY29tXCIsXG5cInIyOS5jb1wiLFxuXCJyMjkudXNcIixcblwicjh0LnVzXCIsXG5cInJhY2gudHZcIixcblwicmFja2VkLmNjXCIsXG5cInJhdmVuLmltXCIsXG5cInJiNi5jb1wiLFxuXCJyYjYubWVcIixcblwicmJsLm1zXCIsXG5cInJja25yLmlvXCIsXG5cInJjbGsubHlcIixcblwicmRkLm1lXCIsXG5cInJkZS5tZVwiLFxuXCJyZC5pb1wiLFxuXCJyZHoubWVcIixcblwicmVhZC5iaVwiLFxuXCJyZWFkdGhpcy5jYVwiLFxuXCJyZWFsbHl0aW55dXJsLmNvbVwiLFxuXCJyZWJyaWNrLml0XCIsXG5cInJlZGQuaXRcIixcblwicmVkaXIuZWNcIixcblwicmVkaXJlY3RzLmNhXCIsXG5cInJlZGlyLmZyXCIsXG5cInJlZGlyeC5jb21cIixcblwicmVkdS5pdFwiLFxuXCJyZWYuc29cIixcblwicmVpc2UubGNcIixcblwicmVsaW5rLmZyXCIsXG5cInJlbHl0LnVzXCIsXG5cInJlbS5heFwiLFxuXCJyZS5wblwiLFxuXCJyZXR3ZWRpYS5jb21cIixcblwicmV0d3QubWVcIixcblwicmV1dC5yc1wiLFxuXCJyZXZvbHZlcjIuY29tXCIsXG5cInJmaS5teVwiLFxuXCJyaGpyLm5ldFwiLFxuXCJyaWNrcm9sbC5pdFwiLFxuXCJyLmltXCIsXG5cInJpLm1zXCIsXG5cInJpbmdjZW50ci5hbFwiLFxuXCJyaW5naXQudXNcIixcblwicml2dmEuZGVcIixcblwicml6LmN6XCIsXG5cInJpei5nZFwiLFxuXCJybHkuY2NcIixcblwicm5jLmFnXCIsXG5cInJuay5tZVwiLFxuXCJybmtwci5jb21cIixcblwicm9ja2NlbnRlci5jb1wiLFxuXCJyb2NrLmxpXCIsXG5cInJvZC5nc1wiLFxuXCJyb2ZsYy5hdFwiLFxuXCJyb2wubGFcIixcblwicm9sLnN0XCIsXG5cInJwcGxmci5tZVwiLFxuXCJyc21vbmtleS5jb21cIixcblwicnQyLmNhXCIsXG5cInJ0Lm51XCIsXG5cInJ0LnNlXCIsXG5cInJ1Ynl1cmwuY29tXCIsXG5cInJ1Lmx5XCIsXG5cInJ1cmwub3JnXCIsXG5cInJ1di5tZVwiLFxuXCJyd2pmLndzXCIsXG5cInJ3dy50b1wiLFxuXCJyd3cudHdcIixcblwiczNudC5jb21cIixcblwiczRjLmluXCIsXG5cInM3eS51c1wiLFxuXCJzYWZlbGlua3MucnVcIixcblwic2FmZS5tblwiLFxuXCJzYWZtLmNvXCIsXG5cInNhZ3lhcC50a1wiLFxuXCJzYWkubHlcIixcblwic2FtZXVybC5jb21cIixcblwic2FyY2FzLm1zXCIsXG5cInNibi50b1wiLFxuXCJzYnV4LmNvXCIsXG5cInNjaGVkLmNvXCIsXG5cInNjaC5tcFwiLFxuXCJzY2lmcmkubWVcIixcblwic2NvYmxlLml0XCIsXG5cInNjLm9yZ1wiLFxuXCJzY3JpLmJpXCIsXG5cInNjcm5jaC5tZVwiLFxuXCJzY3R5LmFzaWFcIixcblwic2R0ay5mbVwiLFxuXCJzZHUuc2tcIixcblwic2R1dC51c1wiLFxuXCJzLmR2Lm51XCIsXG5cInNlYXRpLm1zXCIsXG5cInNlY3JldC5seVwiLFxuXCJzZWQuY3hcIixcblwic2VlbWUuYXRcIixcblwic2VlLnNjXCIsXG5cInNlZ3VlLnNlXCIsXG5cInNlbG5kLmNvbVwiLFxuXCJzZWx6LmNvXCIsXG5cInNlbmQuZ2RcIixcblwic2VwaC5tZVwiLFxuXCJzZXIuYnpcIixcblwic2V0ZC5lc1wiLFxuXCJzZXdhdC5jaFwiLFxuXCJzZm9yY2UuY29cIixcblwic2Z0bHlyLmNvbVwiLFxuXCJzZnUuY2FcIixcblwic2Z5LmNvXCIsXG5cInNnZm5vdy5jb1wiLFxuXCJzZ2l6bW8uY29tXCIsXG5cInNnay5tblwiLFxuXCJzLmdub3NzLnVzXCIsXG5cInNoYWR5dXJsLmNvbVwiLFxuXCJzaGFyLmFzXCIsXG5cInNoYXIuZXNcIixcblwicy5oYnIub3JnXCIsXG5cInNoZWJwci5lc1wiLFxuXCJzaGltLm5ldFwiLFxuXCJzaGluay5kZVwiLFxuXCJzaG8ucGVcIixcblwic2hvcmwuY29tXCIsXG5cInNob3J0LmNjXCIsXG5cInNob3J0ZW51cmwuY29tXCIsXG5cInNob3J0ZW4ud3NcIixcblwic2hvcnRlcmxpbmsuY29tXCIsXG5cInNob3J0LmllXCIsXG5cInNob3J0aW8uY29tXCIsXG5cInNob3J0bGlua3MuY28udWtcIixcblwic2hvcnRseS5ubFwiLFxuXCJzaG9ydG5hLm1lXCIsXG5cInNob3J0bi5tZVwiLFxuXCJzaG9ydC5wa1wiLFxuXCJzaG9ydHF1aWsuY29tXCIsXG5cInNob3J0ci5tZVwiLFxuXCJzaG9ydC50b1wiLFxuXCJzaG9ydHVybC5jb21cIixcblwic2hvcnR6Lm1lXCIsXG5cInNob3R1cmwudXNcIixcblwic2hvdXQudG9cIixcblwic2hvdy5teVwiLFxuXCJzaHB3cy5tZVwiLFxuXCJzaHJlZHVcIixcblwic2hyZWR1cmwuY29tXCIsXG5cInNocmlua2lmeS5jb21cIixcblwic2hyaW5rci5jb21cIixcblwic2hyaW5rc3Rlci5jb21cIixcblwic2hyaW5rdXJsLnVzXCIsXG5cInNocnRlbi5jb21cIixcblwic2hydC5mclwiLFxuXCJzaHJ0LmluXCIsXG5cInNocnRsLmNvbVwiLFxuXCJzaHJ0bi5jb21cIixcblwic2hydG5kLmNvbVwiLFxuXCJzaHJ0LnN0XCIsXG5cInNocnQud3NcIixcblwic2hydW5raW4uY29tXCIsXG5cInNoLnN0XCIsXG5cInNodXJsLm5ldFwiLFxuXCJzaHcubWVcIixcblwic2h5LnNpXCIsXG5cInNoei5hbVwiLFxuXCJzaWNheC5uZXRcIixcblwic2lnbm9uLm9yZ1wiLFxuXCJzaW1wLmx5XCIsXG5cInNpbXVybC5jb21cIixcblwic2ltdXJsLm5ldFwiLFxuXCJzaW11cmwub3JnXCIsXG5cInNpbXVybC51c1wiLFxuXCJzaW5hLmx0XCIsXG5cInNpdGVsdXRpb25zLmNvbVwiLFxuXCJzaXRlby51c1wiLFxuXCJzay5neVwiLFxuXCJza2wuc2hcIixcblwic2tyb2MucGxcIixcblwic2tyLnNrXCIsXG5cInNrLnlwZS5tc1wiLFxuXCJzbGF0ZS5tZVwiLFxuXCJzbGlkZXNoYS5yZVwiLFxuXCJzbGtpLnJ1XCIsXG5cInNsLmx5XCIsXG5cInNtYWxsci5jb21cIixcblwic21hbGxyLm5ldFwiLFxuXCJzbWFydC5jclwiLFxuXCJzbWFydHVybC5pdFwiLFxuXCJzbWFzaGVkLmJ5XCIsXG5cInNtLmRycGVwcGVyLmNvbVwiLFxuXCJzbWYuaXNcIixcblwic21mdS5pblwiLFxuXCJzbWdtLnVzXCIsXG5cInNtaXRoLmdsXCIsXG5cInNtbGwuY29cIixcblwic21xLnRjXCIsXG5cInNtc2gubWVcIixcblwic211cmwuY29tXCIsXG5cInNtdXJsLm5hbWVcIixcblwic25hZHIuaXRcIixcblwic25kLnNjXCIsXG5cInNuLmltXCIsXG5cInNuaXBpZS5jb21cIixcblwic25pcC5seVwiLFxuXCJzbmlwci5jb21cIixcblwic25pcHVybC5jb21cIixcblwic25rci5tZVwiLFxuXCJzbm93LnNoXCIsXG5cInNucy5teFwiLFxuXCJzbnN3LnVzXCIsXG5cInNudXJsLmNvbVwiLFxuXCJzbi52Y1wiLFxuXCJzLm55dC5jb21cIixcblwic29jaWFsLmJlc3RidXkuY29tXCIsXG5cInNvY2lhbC5qY3AuY29tXCIsXG5cInNvY2lhbC52encuY29tXCIsXG5cInNvY2lhbC56dW5lLm5ldFwiLFxuXCJzb2Nrcm9sbC5jb21cIixcblwic29jLmxpXCIsXG5cInNvbWUubHlcIixcblwic29uZy5seVwiLFxuXCJzb28uZ2RcIixcblwicy5vc2t5LmNvXCIsXG5cInNvdXAucHNcIixcblwic3AyLnJvXCIsXG5cInNwZHIubW5cIixcblwic3BlLmNvbVwiLFxuXCJzcGVkci5jb21cIixcblwic3BuLnNyXCIsXG5cInNwb24uZGVcIixcblwic3BvcnRzZ3JpZC5jb21cIixcblwic3BvdGkuZmlcIixcblwic3ByLmx5XCIsXG5cInNwdG5rbmUud3NcIixcblwic3E2LnJ1XCIsXG5cInNxcmwuaXRcIixcblwic3F1LnJlXCIsXG5cInNxemUuaXRcIixcblwicy5ybHAuZGVcIixcblwic3Juay5uZXRcIixcblwic3JzLmxpXCIsXG5cInNzbC5nc1wiLFxuXCJzdDguZm1cIixcblwic3RhbjRkLnVzXCIsXG5cInN0YXJnYXoudHRcIixcblwic3RhcnN0YXIudG9cIixcblwic3RhcnR1cmwuY29tXCIsXG5cInN0YXRpZ3IuYW1cIixcblwic3RpY2t1cmwuY29tXCIsXG5cInN0anIubmxcIixcblwic3Rrcy5jb1wiLFxuXCJzdGxyYS5tc1wiLFxuXCJzdG9uZXQuY29cIixcblwic3RwbXZ0LmNvbVwiLFxuXCJzdHJpa2luZy5seVwiLFxuXCJzdHJ5Lm1lXCIsXG5cInN0dXJseS5jb21cIixcblwic3R5bGVpdGUuY29tXCIsXG5cInN1YmFyLnVzXCIsXG5cInN1bnRtLmVzXCIsXG5cInN1LnByXCIsXG5cInN1cHMudXNcIixcblwic3VybC5jby51a1wiLFxuXCJzLXVybC5mclwiLFxuXCJzdXJsLmh1XCIsXG5cInN1cmwuaXRcIixcblwic3VybC5tZVwiLFxuXCJzdXguY3pcIixcblwic3Z5Lm1rXCIsXG5cInMud2hjYy5jb21cIixcblwic3kucGVcIixcblwidGFiemkuY29tXCIsXG5cInRhLmdkXCIsXG5cInRha2VteWZpbGUuY29tXCIsXG5cInRhdS5wZVwiLFxuXCJ0YmQubHlcIixcblwidGJmLm1lXCIsXG5cInQuY25cIixcblwidC5jb1wiLFxuXCJ0Y3JuLmNoXCIsXG5cInRkanQuY3pcIixcblwidGVjaG1lLm1lXCIsXG5cInRlY2hwaW4uaW9cIixcblwidGVjaHJlLnZ1XCIsXG5cInRlay5pb1wiLFxuXCJ0ZW1wby5haVwiLFxuXCJ0Z3IubWVcIixcblwidGdyLnBoXCIsXG5cInRndC5ielwiLFxuXCJ0aDgudXNcIixcblwidGhkLmNvXCIsXG5cInRoZWF0bG4udGNcIixcblwidGhlYmVhLnN0XCIsXG5cInRoZWJyYWlzZXIuY29tXCIsXG5cInRoZWNvdy5tZVwiLFxuXCJ0aGVjcC5tZVwiLFxuXCJ0aGVkYy5jb21cIixcblwidGhlZHJ1bS5jb21cIixcblwidGhla2l0Yy5oblwiLFxuXCJ0aGVzYS51c1wiLFxuXCJ0aGVzZW50Lm5sXCIsXG5cInRoZXNvLmNvXCIsXG5cInRoZXRpbS5lc1wiLFxuXCJ0aGtwLmdzXCIsXG5cInRoa3ByLmdzXCIsXG5cInRobmRyLml0XCIsXG5cInRoci5jbVwiLFxuXCJ0aHJkbC5lc1wiLFxuXCJ0aHJsLnN0XCIsXG5cInRpZ2h0dXJsLmNvbVwiLFxuXCJ0aWx0LnRjXCIsXG5cInRpLm1lXCIsXG5cInRpbWVzdXJsLmF0XCIsXG5cInRpbW1pbC5lc1wiLFxuXCJ0aW5pLmNjXCIsXG5cInRpbml1cmkuY29tXCIsXG5cInRpbmkudXNcIixcblwidGluLmxpXCIsXG5cInRpbnlhcnJvLndzXCIsXG5cInRpbnlhcnJvd3MuY29tXCIsXG5cInRpbnkuY2NcIixcblwidGlueWxpbmsuY29tXCIsXG5cInRpbnlsaW5rLmluXCIsXG5cInRpbnkubHRcIixcblwidGlueS5seVwiLFxuXCJ0aW55Lm1zXCIsXG5cInRpbnkucGxcIixcblwidGlueXBsLnVzXCIsXG5cInRpbnlzb25nLmNvbVwiLFxuXCJ0aW55dHcuaXRcIixcblwidGlueXVyaS5jYVwiLFxuXCJ0aW55dXJsLmNvbVwiLFxuXCJ0aW55dXJsLmh1XCIsXG5cInRpeHN1LmNvbVwiLFxuXCJ0ay5cIixcblwidGt0Lmx5XCIsXG5cInRsZGlzLml0XCIsXG5cInRsZHIuc2tcIixcblwidGwuZ2RcIixcblwidC5saC5jb21cIixcblwidGxsZy5uZXRcIixcblwidGxyay5pdFwiLFxuXCJ0bWJsci5jb1wiLFxuXCJ0bWkubWVcIixcblwidC1tby5jb1wiLFxuXCJ0bW91dGNoaS51c1wiLFxuXCJ0bW91dC51c1wiLFxuXCJ0bXZzLnR2XCIsXG5cInRtei5tZVwiLFxuXCJ0bmF0LmluXCIsXG5cInRuY3Iud3NcIixcblwidG5pai5vcmdcIixcblwidG5uZS53c1wiLFxuXCJ0bncudG9cIixcblwidG55LmNvbVwiLFxuXCJ0bnkuY3pcIixcblwidG8uXCIsXG5cIlRvOC5jY1wiLFxuXCJ0b2dvdG8udXNcIixcblwidG9obGUuZGVcIixcblwidG8uamVcIixcblwidG9sdS5uYVwiLFxuXCJ0by5seVwiLFxuXCJ0b21teWpvLmhuXCIsXG5cInRvbXMuc2hcIixcblwidG8ucGJzLm9yZ1wiLFxuXCJ0b3RhMi5jb21cIixcblwidG90Yy51c1wiLFxuXCJ0by52Z1wiLFxuXCJ0b3lzci51c1wiLFxuXCJ0cG0ubHlcIixcblwidHBtci5jb21cIixcblwidHByay51c1wiLFxuXCJ0cHRxLmNvbVwiLFxuXCJ0cjUuaW5cIixcblwidHJhY2V1cmwuY29tXCIsXG5cInRyYWNrdXJsLml0XCIsXG5cInRyYS5relwiLFxuXCJ0cmNiLm1lXCIsXG5cInRyY2subWVcIixcblwidHJnLmxpXCIsXG5cInRyaWIuYWxcIixcblwidHJpYi5pblwiLFxuXCJ0cmljay5seVwiLFxuXCJ0cmlpLnVzXCIsXG5cInRyLmltXCIsXG5cInRyaW0ubGlcIixcblwidHJrci53c1wiLFxuXCJ0cmt1cmwuY29tXCIsXG5cInRyLm15XCIsXG5cInRybmRibC5jb1wiLFxuXCJ0cm4uc3RcIixcblwidHJvbmkubWVcIixcblwidHJ1bXBpbmsubHRcIixcblwidHJ1bmMuaXRcIixcblwidHJ1bmN1cmwuY29tXCIsXG5cInRzb3J0LnVzXCIsXG5cInRzcG5lLndzXCIsXG5cInQuc3RcIixcblwidHN0YS5yc1wiLFxuXCJ0LnViZXIuY29tXCIsXG5cInR1YmV1cmwuY29tXCIsXG5cInR1bWJsci5jb21cIixcblwidHVyby51c1wiLFxuXCJ0LnVzbmV3cy5jb21cIixcblwidHZuZXdzLmNvXCIsXG5cInR3MC51c1wiLFxuXCJ0dzEudXNcIixcblwidHcyLnVzXCIsXG5cInR3NS51c1wiLFxuXCJ0dzYudXNcIixcblwidHc4LnVzXCIsXG5cInR3OS51c1wiLFxuXCJ0d2EubGtcIixcblwidHcuYXBwc3RvcmUuY29tXCIsXG5cInR3YXVkLmlvXCIsXG5cInR3ZWV0YnVybmVyLmNvbVwiLFxuXCJ0d2VldGwuY29tXCIsXG5cInR3ZWV0Lm1lXCIsXG5cInR3ZWV6Lm1lXCIsXG5cInR3ZXQuZnJcIixcblwidHdoaXRlLm1lXCIsXG5cInR3aHViLmNvbVwiLFxuXCJ0d2kuZ3lcIixcblwidHdpLmltXCIsXG5cInR3aXAudXNcIixcblwidHdpcmwuYXRcIixcblwidHdpdC5hY1wiLFxuXCJ0d2l0Y2xpY2tzLmNvbVwiLFxuXCJ0d2l0cGljLmNvbVwiLFxuXCJ0d2l0dGVydXJsLm5ldFwiLFxuXCJ0d2l0dGVydXJsLm9yZ1wiLFxuXCJ0d2l0dGhpcy5jb21cIixcblwidHdpdHR1Lm1zXCIsXG5cInR3aXR1cmwuZGVcIixcblwidHdpdHphcC5jb21cIixcblwidHdsci5tZVwiLFxuXCJ0d2wuc2hcIixcblwidHdsdi5uZXRcIixcblwidHcubWVkaWNhbGV4cHJlc3MuY29tXCIsXG5cInR3Lm5iY3Nwb3J0cy5jb21cIixcblwidHdydC5tZVwiLFxuXCJ0d3RyLnRvXCIsXG5cInR3dHIudXNcIixcblwidHd1cmwuY2NcIixcblwidHd1cmwubmxcIixcblwidHhleC5lc1wiLFxuXCJ0eHQuYm9cIixcblwidTc2Lm9yZ1wiLFxuXCJ1YWZseS5jb1wiLFxuXCJ1YXBwLmx5XCIsXG5cInViMC5jY1wiLFxuXCJ1LmJiXCIsXG5cInVieS5lc1wiLFxuXCJ1Y2FtLm1lXCIsXG5cInVjbGEuaW5cIixcblwidWcuY3pcIixcblwidWlvcC5tZVwiLFxuXCJ1bGltaXQuY29tXCIsXG5cInVsbXQuaW5cIixcblwidWx1Lmx1XCIsXG5cInUubWF2cmV2LmNvbVwiLFxuXCJ1bXVybC51c1wiLFxuXCJ1bmZha2VyLml0XCIsXG5cInVuaW5ld3MudXNcIixcblwidW5pLnZpXCIsXG5cInVubGMudXNcIixcblwidW50cC5iZWVyXCIsXG5cInVudHAuaXRcIixcblwidS5udVwiLFxuXCJ1bnZycy5hbFwiLFxuXCJ1cGRhdGluZy5tZVwiLFxuXCJ1LnB3XCIsXG5cInVwd3IubWVcIixcblwidXB6YXQuY29tXCIsXG5cInVyMS5jYVwiLFxuXCJ1cmJhbnVwLmNvbVwiLFxuXCJ1cmJuLmNjXCIsXG5cInVyYm8uY29cIixcblwidXJpenkuY29tXCIsXG5cInVybDIuZnJcIixcblwidXJsMzYwLm1lXCIsXG5cInVybDQuZXVcIixcblwidXJsNS5vcmdcIixcblwidXJsLmFnXCIsXG5cInVybGFvLmNvbVwiLFxuXCJ1cmwuYXpcIixcblwidXJsYmVlLmNvbVwiLFxuXCJ1cmxib3JnLmNvbVwiLFxuXCJ1cmxicmllZi5jb21cIixcblwidXJsY29ydGEuZXNcIixcblwidXJsLmNvLnVrXCIsXG5cInVybGNvdmVyLmNvbVwiLFxuXCJ1cmxjdXQuY29tXCIsXG5cInVybGN1dHRlci5jb21cIixcblwidXJsZW5jby5kZVwiLFxuXCJ1cmxnLmluZm9cIixcblwidXJsLmdvLml0XCIsXG5cInVybGhhd2suY29tXCIsXG5cInVybC5pZVwiLFxuXCJ1cmwuaW5jLXguZXVcIixcblwidXJsaW4uaXRcIixcblwidXJsaS5ubFwiLFxuXCJ1cmxraXNzLmNvbVwiLFxuXCJ1cmwubG90cGF0cm9sLmNvbVwiLFxuXCJ1cmxvby5jb21cIixcblwidXJscGlyZS5jb21cIixcblwidXJscy5mclwiLFxuXCJ1cmxzaG9ydGVuaW5nc2VydmljZWZvcnR3aXR0ZXIuY29tXCIsXG5cInVybHMuaW1cIixcblwidXJsdGVhLmNvbVwiLFxuXCJ1cmx1Lm1zXCIsXG5cInVybHZpLmJcIixcblwidXJsdmkuYmVcIixcblwidXJseC5pZVwiLFxuXCJ1ci5seVwiLFxuXCJ1cmx6LmF0XCIsXG5cInVybHplbi5jb21cIixcblwidXJsei5mclwiLFxuXCJ1cnViLnVzXCIsXG5cInVzYW5ldC50dlwiLFxuXCJ1c2F0Lmx5XCIsXG5cInVzZS5teVwiLFxuXCJ1c2Vydm9pY2UuY29tXCIsXG5cInVzc29jLmNyXCIsXG5cInVzdHJlLmFtXCIsXG5cInV0Zmcuc2tcIixcblwidS50b1wiLFxuXCJ1dmVyc2UudXNcIixcblwidXhtLmFnXCIsXG5cInYxbS5uZXRcIixcblwidjUuZ2RcIixcblwidmFhYS5mclwiLFxuXCJ2YWRvLml0XCIsXG5cInZhbHYuaW1cIixcblwidmF6YS5tZVwiLFxuXCJ2Yi5seVwiLFxuXCJ2Ymx5LnVzXCIsXG5cInZkNTUuY29tXCIsXG5cInZkaXJlY3QuY29tXCIsXG5cInZlcmQuaW5cIixcblwidmV2by5seVwiLFxuXCJ2LmdkXCIsXG5cInZnbi5hbVwiLFxuXCJ2Z24ubWVcIixcblwidi5odFwiLFxuXCJ2aWEubWVcIixcblwidmlkZHkuaXRcIixcblwidmlpZ28uaW1cIixcblwidmkubHlcIixcblwidmlyZy5jb1wiLFxuXCJ2aXJnLmluXCIsXG5cInZpcmwuY29tXCIsXG5cInZsLmFtXCIsXG5cInZtLmxjXCIsXG5cInZudHkuZnJcIixcblwidm50eS51c1wiLFxuXCJ2b2l6bGUuY29tXCIsXG5cInZvbHUuc25cIixcblwidm92LmxpXCIsXG5cInZveC5jb21cIixcblwidnJnZS5jb1wiLFxuXCJ2cmwuaHRcIixcblwidnJzbi5jY1wiLFxuXCJ2c2IubGlcIixcblwidnNsbC5ldVwiLFxuXCJ2dDgwMi51c1wiLFxuXCJ2dGMuZXNcIixcblwidnVsdC5yZVwiLFxuXCJ2dXIubWVcIixcblwidnYudmdcIixcblwidi56aXRlLmNvbVwiLFxuXCJ2ei50b1wiLFxuXCJ2enR1cmwuY29tXCIsXG5cIncwci5tZVwiLFxuXCJ3MXAuZnJcIixcblwidzMzLnVzXCIsXG5cInczNC51c1wiLFxuXCJ3M3Qub3JnXCIsXG5cInc1NS5kZVwiLFxuXCJ3YTkubGFcIixcblwid2FhLmFpXCIsXG5cIndhbG1hcnR1cmwuY29tXCIsXG5cIndhcG8uc3RcIixcblwid2FwdXJsLmNvLnVrXCIsXG5cIndhc2hleC5hbVwiLFxuXCJ3YjEuZXVcIixcblwid2J0cm5kLmNvXCIsXG5cIndidXIuZm1cIixcblwid2ViOTkuZXVcIixcblwid2ViYWxpYXMuY29tXCIsXG5cIndlZC5saVwiLFxuXCJ3ZWxjb21lLnRvXCIsXG5cIndlcnZpcmcuaW5cIixcblwid2UudGxcIixcblwid2V0LnB0XCIsXG5cIndmcC50b1wiLFxuXCJ3ZnRzLnR2XCIsXG5cIncuZnVsbHNhaWwuZWR1XCIsXG5cIndoLmdvdlwiLFxuXCJ3aWRlby5mclwiLFxuXCJ3aWRnLm1lXCIsXG5cIndpZ3MubHlcIixcblwid2luLmdzXCIsXG5cIndpcGkuZXNcIixcblwid2lyZS5tc1wiLFxuXCJ3aXMubXNcIixcblwid2l0aC5tZVwiLFxuXCJ3amYuaW1cIixcblwid2oubGFcIixcblwid2tyZy5jb21cIixcblwid29vLmx5XCIsXG5cIndwYmVnLmluXCIsXG5cIndwLm1lXCIsXG5cIndwLm11XCIsXG5cIndwby5zdFwiLFxuXCJ3cmQuY21cIixcblwid3JkbS5hZ1wiLFxuXCLigLoud3NcIixcblwid3NtLmNvXCIsXG5cInd0Yy5sYVwiLFxuXCJ3dGhtcy5jb1wiLFxuXCJ3dS5jelwiLFxuXCJ3dzcuZnJcIixcblwid3dkLnVzXCIsXG5cInd3eS5tZVwiLFxuXCJ3d3oucnNcIixcblwid3hjaC5ubFwiLFxuXCJ4MTAubXhcIixcblwieDJjLmV1XCIsXG5cIngyYy5ldW14XCIsXG5cInhhdi5jY1wiLFxuXCJ4YngubXNcIixcblwieC5jb1wiLFxuXCJ4ZWV1cmwuY29tXCIsXG5cInhnZC5pblwiLFxuXCJ4Lmh5cGVtLmNvbVwiLFxuXCJ4aWIubWVcIixcblwieGlsLmluXCIsXG5cInhsOC5ldVwiLFxuXCJ4bGlua3ouaW5mb1wiLFxuXCJ4bHVybC5kZVwiLFxuXCJ4bi0tMWNpLndzXCIsXG5cInhuLS0zZmkud3NcIixcblwieG4tLTVnaS53c1wiLFxuXCJ4bi0tOWdpLndzXCIsXG5cInhuLS1iaWgud3NcIixcblwieG4tLWN3Zy53c1wiLFxuXCJ4bi0tZWdpLndzXCIsXG5cInhuLS1md2cud3NcIixcblwieG4tLWhnaS53c1wiLFxuXCJ4bi0tbDNoLndzXCIsXG5cInhuLS1vZGkud3NcIixcblwieG4tLW9naS53c1wiLFxuXCJ4bi0tcmVpLndzXCIsXG5cIngubnVcIixcblwieG4tLXZnaS53c1wiLFxuXCJ4b2UuY3pcIixcblwieHIuY29tXCIsXG5cInhybC5pblwiLFxuXCJ4cmwudXNcIixcblwieHJ0Lm1lXCIsXG5cInhyeC5zbVwiLFxuXCJ4LnNlXCIsXG5cInh0My5tZVwiLFxuXCJ4dHUubWVcIixcblwieHVhLm1lXCIsXG5cInh1Yi5tZVwiLFxuXCJ4LnVwLmNvbVwiLFxuXCJ4dXJsLmVzXCIsXG5cInh1cmwuanBcIixcblwieHVybHMuY29cIixcblwieC52dVwiLFxuXCJ4eHN1cmwuZGVcIixcblwieHpiLmNjXCIsXG5cInlhZ29hLmZyXCIsXG5cInlhZ29hLm1lXCIsXG5cInkuYWhvby5pdFwiLFxuXCJ5YXR1Yy5jb21cIixcblwieWF1LnNoXCIsXG5cInllY2EuZXVcIixcblwieWVjdC5jb21cIixcblwieWUucGVcIixcblwieWVwLml0XCIsXG5cInllLXMuY29tXCIsXG5cInlmcm9nLmNvbVwiLFxuXCJ5aG9vLml0XCIsXG5cInlpeWQuY29tXCIsXG5cInlvZ2gubWVcIixcblwieW9uLmlyXCIsXG5cInlvdWZhcC5tZVwiLFxuXCJ5b3VybHMub3JnXCIsXG5cIiN5b3V0dS5iZVwiLFxuXCJ5b3V0dS5iZVwiLFxuXCJ5c2Vhci5jaFwiLFxuXCJ5dTIuaXRcIixcblwieXVhcmVsLmNvbVwiLFxuXCJ5eXYuY29cIixcblwiejBwLmRlXCIsXG5cIno5LmZyXCIsXG5cInphZ2F0LmJ6XCIsXG5cInphZ2cudG9cIixcblwiemFuLmd5XCIsXG5cInphcGl0Lm51XCIsXG5cInphcHQuaW5cIixcblwiemFwd293Lm1lXCIsXG5cInpkLm5ldFwiLFxuXCJ6ZWVrLmlyXCIsXG5cInppZ2xyLnVzXCIsXG5cInppLm1hXCIsXG5cInppLm1lXCIsXG5cInppLm11XCIsXG5cInppLnBlXCIsXG5cInppcC5saVwiLFxuXCJ6aXBteXVybC5jb21cIixcblwiemlwLm5ldFwiLFxuXCJ6aXRlLnRvXCIsXG5cInprcmF0Lm1lXCIsXG5cInprci5jelwiLFxuXCJ6a3J0LmN6XCIsXG5cInpvb2RsLmNvbVwiLFxuXCJ6b290aXQuY29tXCIsXG5cInpvby50bFwiLFxuXCJ6cGFnLmVzXCIsXG5cInoucGVcIixcblwienByLmlvXCIsXG5cInpTTVMubmV0XCIsXG5cInp0aS5tZVwiLFxuXCJ6dWQubWVcIixcblwienVybC53c1wiLFxuXCJ6eHEubmV0XCIsXG5cInp5dmEub3JnXCIsXG5cInp6YW5nLmtyXCIsXG5cInp6Yi5ielwiLFxuXCJ6ei5nZFwiXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGFtcENhY2hlRG9tYWlucyA9IFtcImNkbi5hbXBwcm9qZWN0Lm9yZ1wiLCBcImFtcC5jbG91ZGZsYXJlLmNvbVwiLCBcImJpbmctYW1wLmNvbVwiXTsiLCIvKipcbiogTW9kdWxlIGZvciByZXNvbHZpbmcgYSBzaG9ydCB1cmxcbiogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvblxuKi9cbmltcG9ydCB7XG4gZ2V0RGVidWdnaW5nTG9nXG59IGZyb20gJy4vRGVidWdnaW5nLmpzJztcbmltcG9ydCB7XG4gc2hvcnREb21haW5zXG59IGZyb20gJy4uL2RlcGVuZGVuY2llcy9zaG9ydGRvbWFpbnMuanMnO1xuaW1wb3J0IHtcbiBhbXBDYWNoZURvbWFpbnNcbn0gZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2FtcGNhY2hlZG9tYWlucy5qcyc7XG5jb25zdCBkZWJ1Z0xvZyA9IGdldERlYnVnZ2luZ0xvZyhcIlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvblwiKTtcblxuXG5jb25zdCBmZXRjaFRpbWVvdXRNcyA9IDUwMDA7XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbi8vIHByb21pc2VzQnlVcmwgaXMgYSBtYXBwaW5nIGZyb20gYSB1cmwgdG8gcmVzb2x2ZSBhbmQgdGhlIHJlc29sdmUgb2JqZWN0cyBhc3NvY2lhdGVkIHdpdGggaXRcbmxldCBwcm9taXNlc0J5VXJsID0gbmV3IE1hcCgpO1xuLy8gdHJhY2tlZFVybHMgaXMgYSBzZXQgZm9yIHdoaWNoIHRoZSBoZWFkZXJzIGFyZSBvYnNlcnZlZFxubGV0IHRyYWNrZWRVcmxzID0gbmV3IFNldCgpO1xuLy8gdXJsQnlSZWRpcmVjdGVkVXJsIGlzIGEgbWFwcGluZyBmcm9tIGEgcmVkaXJlY3RlZCB1cmwgdG8gdXJsIHRoYXQgcmVkaXJlY3RlZCB0byBpdFxuLy8gcmVjdXJzaXZlbHkgdHJhdmVyc2luZyB0aGlzIG1hcHBpbmcgd2lsbCBnZXQgdGhlIHJlZGlyZWN0IGNoYWluIGFzc29jaWF0ZWQgd2l0aCBhbiBpbml0aWFsIHVybFxubGV0IHVybEJ5UmVkaXJlY3RlZFVybCA9IG5ldyBNYXAoKTtcblxuLyoqXG4qIEZ1bmN0aW9uIHRvIHJlc29sdmUgYSBnaXZlbiB1cmwgdG8gdGhlIGZpbmFsIHVybCB0aGF0IGl0IHBvaW50cyB0b1xuKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIHJlc29sdmVcbiogQHJldHVybnMge1Byb21pc2UuT2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBkZXN0aW5hdGlvbiB1cmxcbiovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVVybCh1cmwpIHtcbiBpZiAoIWluaXRpYWxpemVkKSB7XG4gICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJtb2R1bGUgbm90IGluaXRpYWxpemVkXCIpO1xuIH1cbiBsZXQgdXJsUmVzb2x1dGlvblByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAvLyBzdG9yZSB0aGUgcmVzb2x2ZSBmdW5jdGlvbiBpbiBwcm9taXNlc0J5VXJsLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBcbiAgIC8vIHVybCBpcyByZXNvbHZlZFxuICAgbGV0IHJlc29sdmVzID0gcHJvbWlzZXNCeVVybC5nZXQodXJsKSB8fCBbXTtcbiAgIGlmICghcmVzb2x2ZXMgfHwgIXJlc29sdmVzLmxlbmd0aCkge1xuICAgICBwcm9taXNlc0J5VXJsLnNldCh1cmwsIHJlc29sdmVzKTtcbiAgIH1cbiAgIHJlc29sdmVzLnB1c2goe1xuICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICByZWplY3Q6IHJlamVjdFxuICAgfSk7XG4gICB0cmFja2VkVXJscy5hZGQodXJsKTtcbiAgIC8vIGZldGNoIHRoaXMgdXJsXG4gICBmZXRjaFdpdGhUaW1lb3V0KHVybCwge1xuICAgICByZWRpcmVjdDogJ21hbnVhbCcsXG4gICAgIGhlYWRlcnM6IHtcbiAgICAgICAvKiBXaXRoIGEgYnJvd3NlciBVc2VyLUFnZW50IGhlYWRlciwgdGhlIHJlc3BvbnNlIG9mIG5ld3MuZ29vZ2xlLmNvbSBsaW5rIHNoaW0gaXMgYSBIVE1MIGRvY3VtZW50IHRoYXQgZXZlbnR1YWxseSByZWRpcmVjdHMgdG8gdGhlIGFjdHVhbCBuZXdzIHBhZ2UuXG4gICAgICAgVGhpcyBhY3R1YWwgbmV3cyBsaW5rIGlzIG5vdCBwYXJ0IG9mIHRoZSBIVFRQIHJlc3BvbnNlIHJlYWRlci4gSG93ZXZlciwgdXNpbmcgYSBub24tYnJvd3NlciBVc2VyLUFnZW50IGxpa2UgY3VybCB0aGUgcmVzcG9uc2UgaGVhZGVyXG4gICAgICAgY29udGFpbnMgdGhlIHJlZGlyZWN0ZWQgbG9jYXRpb24uICovXG4gICAgICAgJ1VzZXItQWdlbnQnOiB1cmwuaW5jbHVkZXMoXCJuZXdzLmdvb2dsZS5jb21cIikgPyAnY3VybC83LjEwLjYgKGkzODYtcmVkaGF0LWxpbnV4LWdudSkgbGliY3VybC83LjEwLjYgT3BlblNTTC8wLjkuN2EgaXB2NiB6bGliLzEuMS40JyA6ICcnXG4gICAgIH1cbiAgIH0sIGZldGNoVGltZW91dE1zKTtcbiB9KTtcbiByZXR1cm4gdXJsUmVzb2x1dGlvblByb21pc2U7XG59XG5cbi8qKlxuKiBMaXN0ZW5lciBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvd2ViUmVxdWVzdC9vbkhlYWRlcnNSZWNlaXZlZFxuKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyBjb250YWlucyBkZXRhaWxzIG9mIHRoZSByZXF1ZXN0XG4qL1xuZnVuY3Rpb24gcmVzcG9uc2VIZWFkZXJMaXN0ZW5lcihkZXRhaWxzKSB7XG4gLy8gQ29udGludWUgb25seSBpZiB0aGlzIHVybCBpcyByZWxldmFudCBmb3IgbGluayByZXNvbHV0aW9uXG4gaWYgKCF0cmFja2VkVXJscy5oYXMoZGV0YWlscy51cmwpKSB7XG4gICByZXR1cm47XG4gfVxuXG4gLy8gVGhlIGxvY2F0aW9uIGZpZWxkIGluIHJlc3BvbnNlIGhlYWRlciBpbmRpY2F0ZXMgdGhlIHJlZGlyZWN0ZWQgVVJMXG4gLy8gVGhlIHJlc3BvbnNlIGhlYWRlciBmcm9tIG9uSGVhZGVyc1JlY2VpdmVkIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIG9uZSBvZiB3aGljaCBwb3NzaWJseVxuIC8vIGNvbnRhaW5zIGEgZmllbGQgd2l0aCBuYW1lIGxvY2F0aW9uIChjYXNlIGluc2Vuc2l0aXZlKS5cbiBsZXQgcmVkaXJlY3RlZFVSTExvY2F0aW9uID0gZGV0YWlscy5yZXNwb25zZUhlYWRlcnMuZmluZChvYmogPT4ge1xuICAgcmV0dXJuIG9iai5uYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiTE9DQVRJT05cIjtcbiB9KTtcblxuIC8vIGlmIHRoZSBsb2NhdGlvbiBmaWVsZCBpbiByZXNwb25zZSBoZWFkZXIgY29udGFpbnMgYSBuZXcgdXJsXG4gaWYgKHJlZGlyZWN0ZWRVUkxMb2NhdGlvbiAhPSBudWxsICYmIChyZWRpcmVjdGVkVVJMTG9jYXRpb24udmFsdWUgIT0gZGV0YWlscy51cmwpKSB7XG4gICBsZXQgbmV4dHVybCA9IHJlZGlyZWN0ZWRVUkxMb2NhdGlvbi52YWx1ZTtcbiAgIC8vIENyZWF0ZSBhIGxpbmsgYmV0d2VlbiB0aGUgbmV4dCB1cmwgYW5kIHRoZSBpbml0aWFsIHVybFxuICAgdXJsQnlSZWRpcmVjdGVkVXJsLnNldChuZXh0dXJsLCBkZXRhaWxzLnVybCk7XG4gICAvLyBBZGQgdGhlIG5leHQgdXJsIHNvIHRoYXQgd2UgcHJvY2VzcyBpdCBkdXJpbmcgdGhlIG5leHQgb25IZWFkZXJzUmVjZWl2ZWRcbiAgIHRyYWNrZWRVcmxzLmFkZChuZXh0dXJsKTtcbiAgIC8vIFNlbmQgZmV0Y2ggcmVxdWVzdCB0byB0aGUgbmV4dCB1cmxcbiAgIGZldGNoV2l0aFRpbWVvdXQobmV4dHVybCwge1xuICAgICByZWRpcmVjdDogJ21hbnVhbCcsXG4gICAgIGhlYWRlcnM6IHtcbiAgICAgICAnVXNlci1BZ2VudCc6ICcnXG4gICAgIH1cbiAgIH0sIGZldGNoVGltZW91dE1zKTtcbiB9IGVsc2UgeyAvLyB1cmwgaXMgbm90IHJlZGlyZWN0ZWRcbiAgIGlmICh1cmxCeVJlZGlyZWN0ZWRVcmwuaGFzKGRldGFpbHMudXJsKSkge1xuICAgICAvLyBiYWNrdHJhY2sgdXJsQnlSZWRpcmVjdGVkVXJsIHRvIGdldCB0byB0aGUgcHJvbWlzZSBvYmplY3QgdGhhdCBjb3JyZXNwb25kcyB0byB0aGlzXG4gICAgIGxldCB1cmwgPSBkZXRhaWxzLnVybDtcbiAgICAgd2hpbGUgKHVybEJ5UmVkaXJlY3RlZFVybC5oYXModXJsKSkge1xuICAgICAgIGxldCB0ZW1wID0gdXJsO1xuICAgICAgIHVybCA9IHVybEJ5UmVkaXJlY3RlZFVybC5nZXQodXJsKTtcbiAgICAgICB1cmxCeVJlZGlyZWN0ZWRVcmwuZGVsZXRlKHRlbXApO1xuICAgICAgIHRyYWNrZWRVcmxzLmRlbGV0ZSh0ZW1wKTtcbiAgICAgfVxuICAgICAvLyB1cmwgbm93IGNvbnRhaW5zIHRoZSBpbml0aWFsIHVybC4gTm93LCByZXNvbHZlIHRoZSBjb3JyZXNwb25kaW5nIHByb21pc2VzXG4gICAgIGlmICh1cmwgJiYgcHJvbWlzZXNCeVVybC5oYXModXJsKSkge1xuICAgICAgIGxldCByZXNvbHZlcyA9IHByb21pc2VzQnlVcmwuZ2V0KHVybCkgfHwgW107XG4gICAgICAgbGV0IHJlc29sdmVPYmogPSB7XG4gICAgICAgICBzb3VyY2U6IHVybCxcbiAgICAgICAgIGRlc3Q6IGRldGFpbHMudXJsXG4gICAgICAgfTtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc29sdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICB2YXIgciA9IHJlc29sdmVzW2ldLnJlc29sdmU7XG4gICAgICAgICByKHJlc29sdmVPYmopO1xuICAgICAgIH1cbiAgICAgICBwcm9taXNlc0J5VXJsLmRlbGV0ZSh1cmwpO1xuICAgICB9XG4gICB9XG4gfVxufVxuXG4vKipcbiogTGlzdGVuZXIgZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3dlYlJlcXVlc3Qvb25FcnJvck9jY3VycmVkXG4qIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZURldGFpbHMgLSBDb250YWlucyBkZXRhaWxzIG9mIHRoZSBlcnJvclxuKi9cbmZ1bmN0aW9uIHRyYWNrRXJyb3IocmVzcG9uc2VEZXRhaWxzKSB7XG4gbGV0IHVybCA9IHJlc3BvbnNlRGV0YWlscy51cmw7XG4gaWYgKHByb21pc2VzQnlVcmwuaGFzKHVybCkpIHtcbiAgIGxldCByZXNvbHZlcyA9IHByb21pc2VzQnlVcmwuZ2V0KHVybCkgfHwgW107XG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc29sdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgIGxldCByID0gcmVzb2x2ZXNbaV0ucmVqZWN0O1xuICAgICByKHJlc3BvbnNlRGV0YWlscy5lcnJvcik7XG4gICB9XG4gICBwcm9taXNlc0J5VXJsLmRlbGV0ZSh1cmwpO1xuIH1cbn1cblxuLyoqXG4qIEluaXRpYWxpemVzIHRoZSBsaW5rIHJlc29sdXRpb24gbW9kdWxlIGJ5IHNldHRpbmcgdXAgbGlzdGVuZXJzIGZvciBvbkhlYWRlcnNSZWNlaXZlZCBldmVudFxuKiBAcmV0dXJucyB7dm9pZH0gTm90aGluZ1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuIGluaXRpYWxpemVkID0gdHJ1ZTtcbiBsZXQgaGVhZGVyTGlzdGVuZXIgPSBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQuYWRkTGlzdGVuZXIocmVzcG9uc2VIZWFkZXJMaXN0ZW5lciwge1xuICAgdXJsczogW1wiPGFsbF91cmxzPlwiXVxuIH0sIFtcInJlc3BvbnNlSGVhZGVyc1wiXSk7XG4gbGV0IGVycm9yTGlzdGVuZXIgPSBicm93c2VyLndlYlJlcXVlc3Qub25FcnJvck9jY3VycmVkLmFkZExpc3RlbmVyKHRyYWNrRXJyb3IsIHtcbiAgIHVybHM6IFtcIjxhbGxfdXJscz5cIl1cbiB9KTtcbn1cblxuLyoqXG4qIFJldHVybnMgYSBsaXN0IG9mIHNob3J0IGRvbWFpbnMgdGhhdCB0aGUgbGluayByZXNvbHV0aW9uIG1vZHVsZSBjYW4gcmVzb2x2ZVxuKiBAcmV0dXJucyB7U3RyaW5nW119IEFycmF5IG9mIGRvbWFpbnNcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hvcnREb21haW5zKCkge1xuIHJldHVybiBzaG9ydERvbWFpbnM7XG59XG5cbi8qKlxuKiBSZXR1cm5zIGEgbGlzdCBvZiBhbXAgY2FjaGUgZG9tYWluc1xuKiBAcmV0dXJucyB7U3RyaW5nW119IEFycmF5IG9mIGRvbWFpbnNcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW1wQ2FjaGVEb21haW5zKCkge1xuIHJldHVybiBhbXBDYWNoZURvbWFpbnM7XG59XG5cbi8qKlxuKiBGZXRjaCBBUEkgZG9lc24ndCBwcm92aWRlIGEgbmF0aXZlIHRpbWVvdXQgb3B0aW9uLiBUaGlzIGZ1bmN0aW9uIHVzZXMgQWJvcnRDb250cm9sbGVyIHRvXG4qIHRpbWVvdXQgZmV0Y2ggcmVxdWVzdHMuXG4qIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSByZXNvdXJjZSB0byBmZXRjaFxuKiBAcGFyYW0ge09iamVjdH0gaW5pdCAtIGZldGNoIGluaXRpYWxpemF0aW9uXG4qIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IC0gdGltZW91dCBpbiBtcyBmb3IgZmV0Y2ggcmVxdWVzdHNcbiovXG5mdW5jdGlvbiBmZXRjaFdpdGhUaW1lb3V0KHVybCwgaW5pdCwgdGltZW91dCkge1xuIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gaW5pdC5zaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiBmZXRjaCh1cmwsIGluaXQpO1xuIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCB0aW1lb3V0KTtcbn0iLCIvKipcbiAqIExpbmtFeHBvc3VyZSBtb2R1bGUgaXMgdXNlZCB0byBydW4gc3R1ZGllcyB0aGF0IHRyYWNrIHVzZXIncyBleHBvc3VyZVxuICogdG8gY29udGVudCBmcm9tIGtub3duIG5ld3MgZG9tYWluc1xuICogQG1vZHVsZSBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmVcbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTGlua1Jlc29sdXRpb24gZnJvbSBcIi4uL1V0aWxpdGllcy9MaW5rUmVzb2x1dGlvbi5qc1wiXG5pbXBvcnQgKiBhcyBNYXRjaGluZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01hdGNoaW5nLmpzXCJcbmltcG9ydCAqIGFzIE1lc3NhZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01lc3NhZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBQYWdlRXZlbnRzIGZyb20gXCIuLi9VdGlsaXRpZXMvUGFnZUV2ZW50cy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmVcIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xuXG52YXIgbnVtVW50cmFja2VkVXJsc0J5VGhyZXNob2xkID0ge307XG5cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG52YXIgdmlzaWJpbGl0eVRocmVzaG9sZHMgPSBbMTAwMCwgMzAwMCwgNTAwMCwgMTAwMDBdOyAvLyBtYXRjaCB0byBDUyB2YWx1ZXNcbi8qKlxuICogQG5hbWUgTGlua0V4cG9zdXJlLnJ1blN0dWR5IHN0YXJ0cyB0aGUgTGlua0V4cG9zdXJlIHN0dWR5LlxuICogQHBhcmFtIHtTdHJpbmdbXX0gZG9tYWlucyAtIEFycmF5IG9mIGRvbWFpbnMgdG8gdHJhY2sgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gSWYgdHJ1ZSB0aGVuIHRoZSBzdHVkeSB3b3JrcyBpbiBwcml2YXRlIHdpbmRvd3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb21haW5zQ2F0ZWdvcnkgLSBDYXRlZ29yeSBvZiB0aGUgZG9tYWlucyB0byB0cmFja1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbXSxcbiAgICBwcml2YXRlV2luZG93cyA9IGZhbHNlLFxuICAgIGRvbWFpbnNDYXRlZ29yeSA9IFwibmV3c1wiLFxufSkge1xuXG4gICAgLy8gc3RvcmUgcHJpdmF0ZSB3aW5kb3dzIHByZWZlcmVuY2UgaW4gdGhlIHN0b3JhZ2VcbiAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmUucHJpdmF0ZVdpbmRvd3NcIjogcHJpdmF0ZVdpbmRvd3MgfSk7IFxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlXCIpKS5pbml0aWFsaXplKCk7XG4gICAgLy8gVXNlIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggd2VicGFnZSB0aGUgdXNlciB2aXNpdHMgdGhhdCBoYXMgYSBtYXRjaGluZyBkb21haW5cbiAgICB2YXIgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLm5leHRQYWdlSWRcIikpLmluaXRpYWxpemUoKTtcbiAgICBsZXQgc2hvcnREb21haW5zID0gTGlua1Jlc29sdXRpb24uZ2V0U2hvcnREb21haW5zKCk7XG4gICAgbGV0IGFtcENhY2hlRG9tYWlucyA9IExpbmtSZXNvbHV0aW9uLmdldEFtcENhY2hlRG9tYWlucygpO1xuICAgIGxldCBkb21haW5QYXR0ZXJuID0gTWF0Y2hpbmcuY3JlYXRlVXJsUmVnZXhTdHJpbmcoZG9tYWlucyk7XG4gICAgbGV0IHNob3J0RG9tYWluUGF0dGVybiA9IE1hdGNoaW5nLmNyZWF0ZVVybFJlZ2V4U3RyaW5nKHNob3J0RG9tYWlucyk7XG4gICAgbGV0IGFtcENhY2hlRG9tYWluUGF0dGVybiA9IE1hdGNoaW5nLmNyZWF0ZVVybFJlZ2V4U3RyaW5nKGFtcENhY2hlRG9tYWlucyk7XG4gICAgZm9yICh2YXIgdmlzVGhyZXNob2xkIG9mIHZpc2liaWxpdHlUaHJlc2hvbGRzKSB7XG4gICAgICAgIG51bVVudHJhY2tlZFVybHNCeVRocmVzaG9sZFt2aXNUaHJlc2hvbGRdID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmUubnVtVW50cmFja2VkVXJsc1wiICsgdmlzVGhyZXNob2xkKSkuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBhbXBDYWNoZU1hdGNoZXIgPSBuZXcgUmVnRXhwKGFtcENhY2hlRG9tYWluUGF0dGVybik7XG4gICAgY29uc3Qgc2hvcnREb21haW5NYXRjaGVyID0gbmV3IFJlZ0V4cChzaG9ydERvbWFpblBhdHRlcm4pO1xuICAgIGNvbnN0IHVybE1hdGNoZXIgPSBuZXcgUmVnRXhwKGRvbWFpblBhdHRlcm4pO1xuICAgIGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoe2RvbWFpblJlZ2V4OiB1cmxNYXRjaGVyLCBzaG9ydERvbWFpblJlZ2V4OiBzaG9ydERvbWFpbk1hdGNoZXIsIGFtcERvbWFpblJlZ2V4IDogYW1wQ2FjaGVNYXRjaGVyfSk7XG5cbiAgICAvLyBBZGQgdGhlIGNvbnRlbnQgc2NyaXB0IGZvciBjaGVja2luZyBsaW5rcyBvbiBwYWdlc1xuICAgIGF3YWl0IGJyb3dzZXIuY29udGVudFNjcmlwdHMucmVnaXN0ZXIoe1xuICAgICAgICBtYXRjaGVzOiBbXCIqOi8vKi8qXCJdLFxuICAgICAgICBqczogW3tcbiAgICAgICAgICAgIGZpbGU6IFwiL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL2NvbnRlbnQtc2NyaXB0cy91dGlscy5qc1wiXG4gICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogXCIvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL2xpbmtFeHBvc3VyZS5qc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJ1bkF0OiBcImRvY3VtZW50X2lkbGVcIlxuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIGZvciBMaW5rRXhwb3N1cmUgbWVzc2FnZXMgZnJvbSBjb250ZW50IHNjcmlwdFxuICAgIE1lc3NhZ2luZy5yZWdpc3Rlckxpc3RlbmVyKFwiV2ViU2NpZW5jZS5saW5rRXhwb3N1cmVcIiwgKGV4cG9zdXJlSW5mbywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCEoXCJ0YWJcIiBpbiBzZW5kZXIpKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhcIldhcm5pbmc6IHVuZXhwZWN0ZWQgbGluayBleHBvc3VyZSB1cGRhdGVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVudHJhY2tlZEluZm8gPSBleHBvc3VyZUluZm8ubnVtVW50cmFja2VkVXJscztcbiAgICAgICAgZm9yICh2YXIgdmlzVGhyZXNob2xkIGluIHVudHJhY2tlZEluZm8pIHtcbiAgICAgICAgICAgIG51bVVudHJhY2tlZFVybHNCeVRocmVzaG9sZFt2aXNUaHJlc2hvbGRdLmluY3JlbWVudEJ5QW5kR2V0KHVudHJhY2tlZEluZm9bdmlzVGhyZXNob2xkXSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3N1cmVJbmZvLmV4cG9zdXJlRXZlbnRzLmZvckVhY2goYXN5bmMgZXhwb3N1cmVFdmVudCA9PiB7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50LmlzU2hvcnRlbmVkVXJsID0gc2hvcnREb21haW5NYXRjaGVyLnRlc3QoZXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCk7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCA9IHRydWU7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50Lm1ldGFkYXRhID0gZXhwb3N1cmVJbmZvLm1ldGFkYXRhO1xuICAgICAgICAgICAgLy8gcmVzb2x2ZWRVcmwgaXMgdmFsaWQgb25seSBmb3IgdXJscyBmcm9tIHNob3J0IGRvbWFpbnNcbiAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50Lm1ldGFkYXRhLmRvbWFpbkNhdGVnb3J5ID0gZG9tYWluc0NhdGVnb3J5O1xuICAgICAgICAgICAgaWYgKGV4cG9zdXJlRXZlbnQuaXNTaG9ydGVuZWRVcmwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IExpbmtSZXNvbHV0aW9uLnJlc29sdmVVcmwoZXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybE1hdGNoZXIudGVzdChyZXN1bHQuZGVzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwgPSByZXN1bHQuZGVzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBleHBvc3VyZUV2ZW50LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCB8fCBleHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVMaW5rRXhwb3N1cmVSZWNvcmQoZXhwb3N1cmVFdmVudCwgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUxpbmtFeHBvc3VyZVJlY29yZChleHBvc3VyZUV2ZW50LCBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIG1ldGFkYXRhOiBcIm9iamVjdFwiXG4gICAgfSk7XG5cbiAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIocGFnZUF0dGVudGlvblN0YXJ0LCB0cnVlLCBwcml2YXRlV2luZG93cyk7XG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIocGFnZUF0dGVudGlvblN0b3AsIHByaXZhdGVXaW5kb3dzKTtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG5cbn1cblxuZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0YXJ0KHt1cmwsIHJlZmVycmVyLCB0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhdHRlbnRpb25DaGFuZ2U6IFwiZ2FpblwiLCBcbiAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXB9KS5jYXRjaCggKGVycikgPT4geyByZXR1cm47IH0gKTtcbn1cbmZ1bmN0aW9uIHBhZ2VBdHRlbnRpb25TdG9wKHt1cmwsIHJlZmVycmVyLCB0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhdHRlbnRpb25DaGFuZ2U6IFwibG9zZVwiLCBcbiAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXB9KS5jYXRjaCggKGVycikgPT4geyByZXR1cm47IH0gKTtcbn1cblxuXG4vKiBVdGlsaXRpZXMgKi9cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgc3R1ZHkgZGF0YSBhcyBhbiBvYmplY3QuIE5vdGUgdGhhdCB0aGlzIGNvdWxkIGJlIHZlcnlcbiAqIHNsb3cgaWYgdGhlcmUgaXMgYSBsYXJnZSB2b2x1bWUgb2Ygc3R1ZHkgZGF0YS5cbiAqIEByZXR1cm5zIHsoT2JqZWN0fG51bGwpfSAtIFRoZSBzdHVkeSBkYXRhLCBvciBgbnVsbGAgaWYgbm8gZGF0YVxuICogY291bGQgYmUgcmV0cmlldmVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3R1ZHlEYXRhQXNPYmplY3QoKSB7XG4gICAgaWYoc3RvcmFnZSAhPSBudWxsKVxuICAgICAgICByZXR1cm4gYXdhaXQgc3RvcmFnZS5nZXRDb250ZW50c0FzT2JqZWN0KCk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGVzdHMgd2hldGhlciBhIGdpdmVuIG9iamVjdCBpcyBlbXB0eVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIE9iamVjdCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgZW1wdHlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gICAgcmV0dXJuICFvYmogfHwgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0xpbmtFeHBvc3VyZUV2ZW50fSBleHBvc3VyZUV2ZW50IGxpbmsgZXhwb3N1cmUgZXZlbnQgdG8gc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBMaW5rRXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCAtIGxpbmsgZXhwb3NlZCB0b1xuICogQHBhcmFtIHtzdHJpbmd9IExpbmtFeHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsIC0gb3B0aW9uYWwgZmllbGQgd2hpY2ggaXMgc2V0IGlmIHRoZSBpc1Nob3J0ZW5lZFVybCBhbmQgcmVzb2x1dGlvblN1Y2NlZWRlZCBhcmUgdHJ1ZVxuICogQHBhcmFtIHtib29sZWFufSBMaW5rRXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgLSB0cnVlIGlmIGxpbmsgcmVzb2x1dGlvbiBzdWNjZWVkZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gTGlua0V4cG9zdXJlRXZlbnQuaXNTaG9ydGVuZWRVcmwgLSB0cnVlIGlmIGxpbmsgbWF0Y2hlcyBzaG9ydCBkb21haW5zXG4gKiBAcGFyYW0ge251bWJlcn0gTGlua0V4cG9zdXJlRXZlbnQuZmlyc3RTZWVuIC0gdGltZXN0YW1wIHdoZW4gdGhlIGxpbmsgaXMgZmlyc3Qgc2VlblxuICogQHBhcmFtIHtudW1iZXJ9IExpbmtFeHBvc3VyZUV2ZW50LmR1cmF0aW9uIC0gbWlsbGlzZWNvbmRzIG9mIGxpbmsgZXhwb3N1cmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBMaW5rRXhwb3N1cmVFdmVudC5zaXplIC0gd2lkdGggYW5kIGhlaWdodCBvZiBsaW5rc1xuICogQHBhcmFtIHtDb3VudGVyfSBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyIGNvdW50ZXIgb2JqZWN0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxpbmtFeHBvc3VyZVJlY29yZChleHBvc3VyZUV2ZW50LCBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyKSB7XG4gICAgZXhwb3N1cmVFdmVudC50eXBlID0gXCJsaW5rRXhwb3N1cmVcIjtcbiAgICBleHBvc3VyZUV2ZW50LnVybCA9IChleHBvc3VyZUV2ZW50LmlzU2hvcnRlbmVkVXJsICYmIGV4cG9zdXJlRXZlbnQucmVzb2x1dGlvblN1Y2NlZGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLm5vcm1hbGl6ZVVybChleHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5ub3JtYWxpemVVcmwoZXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCkpO1xuICAgIGV4cG9zdXJlRXZlbnQubGF0ZXJWaXNpdGVkID0gZmFsc2U7XG4gICAgZXhwb3N1cmVFdmVudC5sYXRlclNoYXJlZCA9IGZhbHNlO1xuICAgIC8vZGVidWdMb2coXCJzdG9yaW5nIFwiICsgSlNPTi5zdHJpbmdpZnkoZXhwb3N1cmVFdmVudCkpO1xuICAgIHZhciBrZXkgPSBleHBvc3VyZUV2ZW50LnVybCArIFwiIFwiICsgYXdhaXQgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlci5nZXRBbmRJbmNyZW1lbnQoKTtcbiAgICBzdG9yYWdlLnNldChrZXksIGV4cG9zdXJlRXZlbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcmVBbmRSZXNldFVudHJhY2tlZEV4cG9zdXJlc0NvdW50KCkge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgICB2YXIgdW50cmFja2VkT2JqID0geyB0eXBlOiBcIm51bVVudHJhY2tlZFVybHNcIiwgdW50cmFja2VkQ291bnRzOiB7fX07XG4gICAgICAgIGZvciAodmFyIHZpc1RocmVzaG9sZCBvZiB2aXNpYmlsaXR5VGhyZXNob2xkcykge1xuICAgICAgICAgICAgdW50cmFja2VkT2JqLnVudHJhY2tlZENvdW50c1t2aXNUaHJlc2hvbGRdID0ge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdmlzVGhyZXNob2xkLFxuICAgICAgICAgICAgICAgIG51bVVudHJhY2tlZDogYXdhaXQgbnVtVW50cmFja2VkVXJsc0J5VGhyZXNob2xkW3Zpc1RocmVzaG9sZF0uZ2V0QW5kUmVzZXQoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS51bnRyYWNrZWRVcmxzQ291bnRcIiwgdW50cmFja2VkT2JqKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dWaXNpdCh1cmwpIHtcbiAgICB2YXIgcHJldkV4cG9zdXJlcyA9IGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aCh1cmwpO1xuICAgIHZhciBoYXNQcmV2RXhwb3N1cmVzID0gZmFsc2U7XG4gICAgZm9yICh2YXIga2V5IGluIHByZXZFeHBvc3VyZXMpIHtcbiAgICAgICAgaGFzUHJldkV4cG9zdXJlcyA9IHRydWU7XG4gICAgICAgIHByZXZFeHBvc3VyZXNba2V5XS5sYXRlclZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChrZXksIHByZXZFeHBvc3VyZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiAoaGFzUHJldkV4cG9zdXJlcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dTaGFyZSh1cmwpIHtcbiAgICB2YXIgcHJldkV4cG9zdXJlcyA9IGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aCh1cmwpO1xuICAgIHZhciBoYXNQcmV2RXhwb3N1cmVzID0gZmFsc2U7XG4gICAgZm9yICh2YXIga2V5IGluIHByZXZFeHBvc3VyZXMpIHtcbiAgICAgICAgaGFzUHJldkV4cG9zdXJlcyA9IHRydWU7XG4gICAgICAgIHByZXZFeHBvc3VyZXNba2V5XS5sYXRlclNoYXJlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KGtleSwgcHJldkV4cG9zdXJlc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1ByZXZFeHBvc3VyZXM7XG59IiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBtZWFzdXJlcyBzY3JvbGwgZGVwdGggZm9yIHdlYnBhZ2VzIG9uIHNwZWNpZmljIGRvbWFpbnMuXG4gKiBcbiAqIE5vdGU6IHdlIHdpbGwgbGlrZWx5IHJlcGxhY2UgdGhpcyBtb2R1bGUgd2hlbiB3ZSB1cGRhdGUgdGhlXG4gKiBQYWdlTmF2aWdhdGlvbiBhbmQgUGFnZUV2ZW50cyBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aFxuICovXG5cbmltcG9ydCAqIGFzIERlYnVnZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL0RlYnVnZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gXCIuLi9VdGlsaXRpZXMvU3RvcmFnZS5qc1wiXG5pbXBvcnQgKiBhcyBNYXRjaGluZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01hdGNoaW5nLmpzXCJcbmltcG9ydCAqIGFzIE1lc3NhZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01lc3NhZ2luZy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIk1lYXN1cmVtZW50cy5QYWdlRGVwdGhcIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbnZhciBsaXN0ZW5lcnMgPSBbXTtcblxuLyoqXG4gKiBTdGFydCBhIHBhZ2UgZGVwdGggc3R1ZHkuIE5vdGUgdGhhdCBvbmx5IG9uZSBzdHVkeSBpcyBzdXBwb3J0ZWQgcGVyIGV4dGVuc2lvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbIF1cbn0pIHtcblxuICAgIGlmKGluaXRpYWxpemVkKVxuICAgICAgICByZXR1cm47ICAgIFxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0UGFnZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoLm5leHRQYWdlSWRcIikpLmluaXRpYWxpemUoKTtcblxuICAgIC8vIEJ1aWxkIHRoZSBVUkwgbWF0Y2hpbmcgc2V0IGZvciBjb250ZW50IHNjcmlwdHNcbiAgICB2YXIgY29udGVudFNjcmlwdE1hdGNoZXMgPSBNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCB0cnVlKTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjb250ZW50IHNjcmlwdCBmb3IgbWVhc3VyaW5nIG1heGltdW0gc2Nyb2xsIGRlcHRoXG4gICAgYXdhaXQgYnJvd3Nlci5jb250ZW50U2NyaXB0cy5yZWdpc3Rlcih7XG4gICAgICAgIG1hdGNoZXM6IGNvbnRlbnRTY3JpcHRNYXRjaGVzLFxuICAgICAgICBqczogW3tcbiAgICAgICAgICAgIGZpbGU6IFwiL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL2NvbnRlbnQtc2NyaXB0cy9wYWdlRGVwdGguanNcIlxuICAgICAgICB9XVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHBhZ2UgZGVwdGggZXZlbnRzXG4gICAgTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIoXCJXZWJTY2llbmNlLnBhZ2VEZXB0aFwiLCBhc3luYyAoZGVwdGhJbmZvLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICB2YXIgcGFnZUlkID0gYXdhaXQgbmV4dFBhZ2VJZENvdW50ZXIuZ2V0QW5kSW5jcmVtZW50KCk7XG4gICAgICAgIGRlcHRoSW5mby51cmwgPSBTdG9yYWdlLm5vcm1hbGl6ZVVybChzZW5kZXIudXJsKTtcbiAgICAgICAgZGVwdGhJbmZvLnRhYklkID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7IGxpc3RlbmVyKGRlcHRoSW5mbyk7IH1cbiAgICAgICAgc3RvcmFnZS5zZXQocGFnZUlkLnRvU3RyaW5nKCksIGRlcHRoSW5mbyk7XG4gICAgICAgIGRlYnVnTG9nKEpTT04uc3RyaW5naWZ5KGRlcHRoSW5mbykpO1xuICAgIH0sIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbWF4UmVsYXRpdmVTY3JvbGxEZXB0aDogXCJudW1iZXJcIixcbiAgICAgICAgbG9hZFRpbWU6IFwibnVtYmVyXCJcbiAgICB9KTtcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0KCkge1xuICAgIGlmKHN0b3JhZ2UgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn0iLCJcbi8qKlxuICogVGhpcyBtb2R1bGUgbWVhc3VyZXMgbmF2aWdhdGlvbiB0byBhbmQgYXR0ZW50aW9uIHRvIHdlYnBhZ2VzIG9uIHNwZWNpZmljIGRvbWFpbnMuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb25cbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTWF0Y2hpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NYXRjaGluZy5qc1wiXG5pbXBvcnQgKiBhcyBQYWdlRXZlbnRzIGZyb20gXCIuLi9VdGlsaXRpZXMvUGFnZUV2ZW50cy5qc1wiXG5pbXBvcnQgKiBhcyBMaW5rRXhwb3N1cmUgZnJvbSBcIi4vTGlua0V4cG9zdXJlLmpzXCJcbmltcG9ydCAqIGFzIFBhZ2VEZXB0aCBmcm9tIFwiLi9QYWdlRGVwdGguanNcIlxuXG5cblxuY29uc3QgZGVidWdMb2cgPSBEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nKFwiTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uXCIpO1xuXG4vKipcbiAqIEEgS2V5VmFsdWVTdG9yYWdlIG9iamVjdCBmb3IgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0dWR5LlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzdG9yYWdlID0gbnVsbDtcbnZhciBjdXJyZW50VGFiSW5mbyA9IG51bGw7XG52YXIgdXJsTWF0Y2hlciA9IG51bGw7XG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuY29uc3QgcmVjZW50VmlzaXRUaHJlc2hvbGQgPSAzMDAwO1xuXG52YXIgdW50cmFja2VkUGFnZVZpc2l0cyA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlcHRoUmVzdWx0cyhyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0Lm1heFJlbGF0aXZlU2Nyb2xsRGVwdGggPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSWRdICYmIGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJZF0udXJsID09IHJlc3VsdC51cmwpIHtcbiAgICAgICAgY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklkXS5zY3JvbGxEZXB0aCA9IHJlc3VsdC5tYXhSZWxhdGl2ZVNjcm9sbERlcHRoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCF1cmxNYXRjaGVyLnRlc3RVcmwocmVzdWx0LnVybCkpIHsgcmV0dXJuOyB9XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aChyZXN1bHQudXJsKS50aGVuKChwcmV2VmlzaXRzKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJldlZpc2l0cykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2VmlzaXRzW2tleV0udGFiSWQgPT0gcmVzdWx0LnRhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZWaXNpdHNba2V5XS5zY3JvbGxEZXB0aCA9IHJlc3VsdC5tYXhSZWxhdGl2ZVNjcm9sbERlcHRoO1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldChrZXksIHByZXZWaXNpdHNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKipcbiAqIFN0YXJ0IGEgbmF2aWdhdGlvbiBzdHVkeS4gTm90ZSB0aGF0IG9ubHkgb25lIHN0dWR5IGlzIHN1cHBvcnRlZCBwZXIgZXh0ZW5zaW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBIHNldCBvZiBvcHRpb25zIGZvciB0aGUgc3R1ZHkuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy5kb21haW5zPVtdXSAtIFRoZSBkb21haW5zIG9mIGludGVyZXN0IGZvciB0aGUgc3R1ZHkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWNrVXNlckF0dGVudGlvbj1mYWxzZV0gLSBXaGV0aGVyIHRvIHRyYWNrIHVzZXJcbiAqIGF0dGVudGlvbiBkdXJpbmcgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcml2YXRlV2luZG93cz1mYWxzZV0gLSBXaGV0aGVyIHRvIG1lYXN1cmUgcGFnZXMgaW5cbiAqIHByaXZhdGUgd2luZG93cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blN0dWR5KHtcbiAgICBkb21haW5zID0gWyBdLFxuICAgIHRyYWNrVXNlckF0dGVudGlvbiA9IGZhbHNlLFxuICAgIHByaXZhdGVXaW5kb3dzID0gZmFsc2Vcbn0pIHtcblxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb25cIikpLmluaXRpYWxpemUoKTtcblxuICAgIHVybE1hdGNoZXIgPSBuZXcgTWF0Y2hpbmcuVXJsTWF0Y2hlcihkb21haW5zKTtcblxuICAgIHVudHJhY2tlZFBhZ2VWaXNpdHMgPSBhd2FpdCAobmV3IFN0b3JhZ2UuQ291bnRlcihcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnVudHJhY2tlZFBhZ2VWaXNpdHNcIikpLmluaXRpYWxpemUoKTtcblxuICAgIFBhZ2VEZXB0aC5yZWdpc3Rlckxpc3RlbmVyKGRlcHRoUmVzdWx0cyk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIG1ldGFkYXRhIG9mIHRoZSB2aXNpdGVkIHBhZ2VzIGZyb20gY29udGVudCBzY3JpcHRcbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0UGFnZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24ubmV4dFBhZ2VJZFwiKSkuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBpbmZvcm1hdGlvbiBhYm91dCBwYWdlcyB3aXRoIG1hdGNoaW5nIGRvbWFpbnMgdGhhdCBhcmUgY3VycmVudGx5IGxvYWRlZCBpbnRvIGEgdGFiXG4gICAgLy8gSWYgYSB0YWIgSUQgaXMgaW4gdGhpcyBvYmplY3QsIHRoZSBwYWdlIGN1cnJlbnRseSBjb250YWluZWQgaW4gdGhhdCB0YWIgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgY3VycmVudGx5IGltcGxlbWVudGVkIHdpdGggYW4gb2JqZWN0LCB3ZSBtaWdodCB3YW50IHRvIHN3aXRjaCBpdCB0byBhIE1hcFxuICAgIGN1cnJlbnRUYWJJbmZvID0ge31cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAvLyBsaXN0ZW4gbWV0YWRhdGEgbWVzc2FnZXMgZnJvbSBjb250ZW50IHNjcmlwdHNcbiAgICAvLyBIYW5kbGUgd2hlbiBhIHBhZ2UgdmlzaXQgc3RhcnRzXG4gICAgYXN5bmMgZnVuY3Rpb24gcGFnZVZpc2l0U3RhcnRMaXN0ZW5lcih7IHVybCwgcmVmZXJyZXIsIHRhYklkLCB0aW1lU3RhbXAgfSkge1xuXG4gICAgICAgIC8vIElmIHRoZSBVUkwgZG9lcyBub3QgbWF0Y2ggdGhlIHN0dWR5IGRvbWFpbnMsIGlnbm9yZSB0aGUgcGFnZSB2aXNpdCBzdGFydFxuICAgICAgICBpZiAoIXVybE1hdGNoZXIudGVzdFVybCh1cmwpKSB7XG4gICAgICAgICAgICB1bnRyYWNrZWRQYWdlVmlzaXRzLmluY3JlbWVudEFuZEdldCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IFN0b3JhZ2Uubm9ybWFsaXplVXJsKHVybCk7XG5cbiAgICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgdHJhY2tpbmcgYSBwYWdlIGluIHRoaXMgdGFiLCBpZ25vcmUgdGhlIHBhZ2UgdmlzaXQgc3RhcnRcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIVxuICAgICAgICBpZiAodGFiSWQgaW4gY3VycmVudFRhYkluZm8pIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiV2FybmluZzogcGFnZSBzdGFydCBldmVudCBmb3IgdGFiIHRoYXQgYWxyZWFkeSBoYXMgYSBwYWdlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHJlbWVtYmVyIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGFuZCBpbmNyZW1lbnQgdGhlIHBhZ2UgY291bnRlclxuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0gPSB7XG4gICAgICAgICAgICBwYWdlSWQ6IG5leHRQYWdlSWRDb3VudGVyLmdldCgpLFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgdGFiSWQsXG4gICAgICAgICAgICByZWZlcnJlcixcbiAgICAgICAgICAgIHZpc2l0U3RhcnQ6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgIHZpc2l0RW5kOiAtMSxcbiAgICAgICAgICAgIGF0dGVudGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgYXR0ZW50aW9uU3BhbkNvdW50OiAwLFxuICAgICAgICAgICAgYXR0ZW50aW9uU3BhblN0YXJ0czogWyBdLFxuICAgICAgICAgICAgYXR0ZW50aW9uU3BhbkVuZHM6IFsgXSxcbiAgICAgICAgICAgIGNsYXNzaWZpY2F0aW9uOiB7IH0sXG4gICAgICAgICAgICBzY3JvbGxEZXB0aDogLTEsXG4gICAgICAgICAgICBwcmV2RXhwb3NlZDogZmFsc2UsIC8vIHdpbGwgY2hlY2sgYWZ0ZXIgc3RvcmluZyB0aGlzXG4gICAgICAgICAgICBsYXRlclNoYXJlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHByZXZFeHBvc2VkID0gYXdhaXQgTGlua0V4cG9zdXJlLmxvZ1Zpc2l0KHVybCk7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5wcmV2RXhwb3NlZCA9IHByZXZFeHBvc2VkO1xuICAgICAgICBkZWJ1Z0xvZyhcInBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhYkluZm9bdGFiSWRdKSk7XG4gICAgICAgIGF3YWl0IG5leHRQYWdlSWRDb3VudGVyLmluY3JlbWVudCgpO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHBhZ2UgdmlzaXQgc3RvcHNcbiAgICBhc3luYyBmdW5jdGlvbiBwYWdlVmlzaXRTdG9wTGlzdGVuZXIoe3RhYklkLCB0aW1lU3RhbXB9KSB7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSBhcmUgbm90IHRyYWNraW5nIGEgcGFnZSBpbiB0aGlzIHRhYiwgaWdub3JlIHRoZSBwYWdlIHZpc2l0IHN0b3BcbiAgICAgICAgaWYoISh0YWJJZCBpbiBjdXJyZW50VGFiSW5mbykpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGNyZWF0ZSBhIGNvcHkgb2Ygd2hhdCB3ZSBoYXZlIHJlbWVtYmVyZWQgYWJvdXQgdGhlIHBhZ2UgdmlzaXQsXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgcGFnZSBmcm9tIHRoZSBjdXJyZW50IHNldCBvZiB0cmFja2VkIHBhZ2VzLCBhbmQgc2F2ZSB0aGUgY29weVxuICAgICAgICAvLyB0byBzdG9yYWdlXG4gICAgICAgIHZhciB0YWJJbmZvVG9TYXZlID0gT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFRhYkluZm9bdGFiSWRdKTtcbiAgICAgICAgdGFiSW5mb1RvU2F2ZS52aXNpdEVuZCA9IHRpbWVTdGFtcDtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRUYWJJbmZvW3RhYklkXTtcbiAgICAgICAgdGFiSW5mb1RvU2F2ZS50eXBlID0gXCJwYWdlVmlzaXRcIjtcbiAgICAgICAgaWYgKHRhYkluZm9Ub1NhdmUuYXR0ZW50aW9uRHVyYXRpb24gPCAxMDAwKSByZXR1cm47XG5cbiAgICAgICAgZGVidWdMb2coXCJwYWdlVmlzaXRTdG9wTGlzdGVuZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkodGFiSW5mb1RvU2F2ZSkpO1xuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBmaW5hbCBzZXQgb2YgaW5mb3JtYXRpb24gZm9yIHRoZSBwYWdlXG4gICAgICAgIHN0b3JhZ2Uuc2V0KHRhYkluZm9Ub1NhdmUudXJsICsgXCIgXCIgKyB0YWJJbmZvVG9TYXZlLnBhZ2VJZC50b1N0cmluZygpLCB0YWJJbmZvVG9TYXZlKTtcbiAgICB9O1xuXG4gICAgdmFyIGluQXR0ZW50aW9uU3BhbiA9IGZhbHNlO1xuICAgIHZhciBzdGFydE9mQ3VycmVudEF0dGVudGlvblNwYW4gPSAtMTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgcGFnZSBhdHRlbnRpb24gc3BhbiBzdGFydHNcbiAgICBmdW5jdGlvbiBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcih7dGFiSWQsIHRpbWVTdGFtcH0pIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBub3QgcmVtZW1iZXJlZCB0aGUgcGFnZSByZWNlaXZpbmcgYXR0ZW50aW9uLCB0aGUgcGFnZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmdcbiAgICAgICAgLy8gZG9tYWluLCBzbyBpZ25vcmUgdGhlIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50XG4gICAgICAgIGlmKCEodGFiSWQgaW4gY3VycmVudFRhYkluZm8pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1lbWJlciB0aGUgc3RhcnQgb2YgdGhlIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGluQXR0ZW50aW9uU3BhbiA9IHRydWU7XG4gICAgICAgIHN0YXJ0T2ZDdXJyZW50QXR0ZW50aW9uU3BhbiA9IHRpbWVTdGFtcDtcbiAgICAgICAgZGVidWdMb2coXCJwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcjogXCIgKyBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFiSW5mb1t0YWJJZF0pKTtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSBwYWdlIGF0dGVudGlvbiBzcGFuIGVuZHNcbiAgICBmdW5jdGlvbiBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyKHt0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vdCByZW1lbWJlcmVkIHRoZSBwYWdlIHJlY2VpdmluZyBhdHRlbnRpb24sIHRoZSBwYWdlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZ1xuICAgICAgICAvLyBkb21haW4sIHNvIGlnbm9yZSB0aGUgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudFxuICAgICAgICBpZighKHRhYklkIGluIGN1cnJlbnRUYWJJbmZvKSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBJZiB3ZSBhcmUgbm90IGN1cnJlbnRseSBpbiBhbiBhdHRlbnRpb24gc3BhbiwgaWdub3JlIHRoZSBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4hXG4gICAgICAgIGlmKCFpbkF0dGVudGlvblNwYW4pIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiV2FybmluZzogdW5leHBlY3RlZCBwYWdlIGF0dGVudGlvbiBzdG9wXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGVuZCBvZiB0aGUgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvbkR1cmF0aW9uID0gXG4gICAgICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0uYXR0ZW50aW9uRHVyYXRpb24gKyBcbiAgICAgICAgICAgICh0aW1lU3RhbXAgLSBzdGFydE9mQ3VycmVudEF0dGVudGlvblNwYW4pO1xuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0uYXR0ZW50aW9uU3BhbkNvdW50ID0gXG4gICAgICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0uYXR0ZW50aW9uU3BhbkNvdW50ICsgMTtcbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5TdGFydHMucHVzaChzdGFydE9mQ3VycmVudEF0dGVudGlvblNwYW4pO1xuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0uYXR0ZW50aW9uU3BhbkVuZHMucHVzaCh0aW1lU3RhbXApO1xuXG4gICAgICAgIGluQXR0ZW50aW9uU3BhbiA9IGZhbHNlO1xuICAgICAgICBzdGFydE9mQ3VycmVudEF0dGVudGlvblNwYW4gPSAtMTtcbiAgICAgICAgZGVidWdMb2coXCJwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYWJJbmZvW3RhYklkXSkpO1xuICAgIH07XG5cbiAgICAvLyBSZWdpc3RlciB0aGUgcGFnZSB2aXNpdCBsaXN0ZW5lcnMgYW5kLCBpZiBuZWVkZWQgZm9yIHRoZSBzdHVkeSwgdGhlIHBhZ2UgYXR0ZW50aW9uIGxpc3RlbmVyc1xuICAgIC8vIFVzZSBhIHRpbWVzdGFtcCB0byBzeW5jaHJvbml6ZSBpbml0aWFsIHBhZ2UgdmlzaXQgYW5kIHBhZ2UgYXR0ZW50aW9uIHRpbWVzXG5cbiAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZVZpc2l0U3RhcnRMaXN0ZW5lcihwYWdlVmlzaXRTdGFydExpc3RlbmVyLCB0cnVlLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbiAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZVZpc2l0U3RvcExpc3RlbmVyKHBhZ2VWaXNpdFN0b3BMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MpO1xuICAgIGlmKHRyYWNrVXNlckF0dGVudGlvbikge1xuICAgICAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIocGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIsIHRydWUsIHByaXZhdGVXaW5kb3dzLCB0aW1lU3RhbXApO1xuICAgICAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyLCBwcml2YXRlV2luZG93cyk7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIFVSTCBtYXRjaGluZyBzZXQgZm9yIGNvbnRlbnQgc2NyaXB0c1xuICAgIHZhciBjb250ZW50U2NyaXB0TWF0Y2hlcyA9IE1hdGNoaW5nLmNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5KGRvbWFpbnMsIHRydWUpO1xuXG4gICAgLy8gU3RvcmUgd2hldGhlciB0aGUgTmF2aWdhdGlvbiBzdHVkeSBpcyBydW5uaW5nIGluIHByaXZhdGUgd2luZG93cyBpbiBleHRlbnNpb25cbiAgICAvLyBsb2NhbCBzdG9yYWdlLCBzbyB0aGF0IGl0IGlzIGF2YWlsYWJsZSB0byBjb250ZW50IHNjcmlwdHNcbiAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi5wcml2YXRlV2luZG93c1wiOiBwcml2YXRlV2luZG93cyB9KTtcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0KCkge1xuICAgIGlmKHN0b3JhZ2UgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcmVBbmRSZXNldFVudHJhY2tlZFZpc2l0c0NvdW50KCkge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnVudHJhY2tlZFZpc2l0Q291bnRcIiwgXG4gICAgICAgICAgICB7dHlwZTogXCJ1bnRyYWNrZWRWaXNpdENvdW50XCIsXG4gICAgICAgICAgICAgbnVtVW50cmFja2VkVmlzaXRzOiBhd2FpdCB1bnRyYWNrZWRQYWdlVmlzaXRzLmdldEFuZFJlc2V0KClcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ1NoYXJlKHVybCkge1xuICAgIGlmICghdXJsTWF0Y2hlci50ZXN0VXJsKHVybCkpIHsgcmV0dXJuOyB9IC8vIGlmIGl0J3Mgbm90IGEgdHJhY2tlZCB1cmwsIGl0IGRlZmluaXRlbHkgaXNuJ3QgaW4gb3VyIGRhdGFiYXNlXG5cbiAgICB2YXIgcHJldlZpc2l0UmVmZXJyZXIgPSBudWxsO1xuXG4gICAgLy8gU2VhcmNoIGluLW1lbW9yeSBwYWdlc1xuICAgIGZvciAobGV0IHBhZ2VJZCBpbiBjdXJyZW50VGFiSW5mbyl7XG4gICAgICAgIHZhciBwYWdlVmlzaXQgPSBjdXJyZW50VGFiSW5mb1twYWdlSWRdO1xuICAgICAgICBpZiAodXJsID09IHBhZ2VWaXNpdC51cmwpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWJJbmZvW3BhZ2VJZF0ubGF0ZXJTaGFyZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFwcmV2VmlzaXRSZWZlcnJlcikgcHJldlZpc2l0UmVmZXJyZXIgPSBwYWdlVmlzaXQucmVmZXJyZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggcHJldmlvdXNseS1zdG9yZWQgcGFnZXNcbiAgICB2YXIgYmVzdFJlZmVycmVyID0ge3RzOiAwLCByZWZlcnJlcjogXCJcIn1cbiAgICBhd2FpdCBzdG9yYWdlLnN0YXJ0c1dpdGgodXJsKS50aGVuKChwcmV2VmlzaXRzKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcmV2VmlzaXRzKSB7XG4gICAgICAgICAgICBpZiAocHJldlZpc2l0c1trZXldLnZpc2l0U3RhcnQgPiBiZXN0UmVmZXJyZXIudHMpIHtcbiAgICAgICAgICAgICAgICBiZXN0UmVmZXJyZXIudHMgPSBwcmV2VmlzaXRzW2tleV0udmlzaXRTdGFydFxuICAgICAgICAgICAgICAgIGJlc3RSZWZlcnJlci5yZWZlcnJlciA9IHByZXZWaXNpdHNba2V5XS5yZWZlcnJlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldlZpc2l0c1trZXldLmxhdGVyU2hhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0KGtleSwgcHJldlZpc2l0c1trZXldKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFwcmV2VmlzaXRSZWZlcnJlcikgcHJldlZpc2l0UmVmZXJyZXIgPSBiZXN0UmVmZXJyZXIucmVmZXJyZXI7XG4gICAgcmV0dXJuIFtwcmV2VmlzaXRSZWZlcnJlcl07XG59IiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5pbXBvcnQgKiBhcyBXZWJTY2llbmNlIGZyb20gXCIuL1dlYlNjaWVuY2UuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICB2YXIgc3R1ZHlQYXRocyA9IFdlYlNjaWVuY2UuVXRpbGl0aWVzLk1hdGNoaW5nLmdldFN0dWR5UGF0aHMoKTtcbiAgICBjb25zb2xlLmRlYnVnKFwic3R1ZHkgcGF0aHM6XCIpO1xuICAgIGNvbnNvbGUuZGVidWcoc3R1ZHlQYXRocylcblxuICAgIC8vIENvbmZpZ3VyZSBuYXZpZ2F0aW9uIGNvbGxlY3Rpb25cbiAgICBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi5ydW5TdHVkeSh7XG4gICAgICAgIGRvbWFpbnM6IHN0dWR5UGF0aHMuZGVzdGluYXRpb25QYXRocyxcbiAgICAgICAgdHJhY2tVc2VyQXR0ZW50aW9uOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBDb25maWd1cmUgbGluayBleHBvc3VyZSBjb2xsZWN0aW9uXG4gICAgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTGlua1Jlc29sdXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5ydW5TdHVkeSh7XG4gICAgICAgIGRvbWFpbnM6IHN0dWR5UGF0aHMuZGVzdGluYXRpb25QYXRocyxcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3MgOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aC5ydW5TdHVkeSh7XG4gICAgICAgIGRvbWFpbnM6IHN0dWR5UGF0aHMuZGVzdGluYXRpb25QYXRocyxcbiAgICB9KTtcbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcblxuaW1wb3J0IFJhbGx5IGZyb20gXCJAbW96aWxsYS9yYWxseVwiO1xuXG4vLyBFeGFtcGxlOiBpbXBvcnQgYSBtb2R1bGUuXG5pbXBvcnQge1xuICBpbml0aWFsaXplIGFzIGV4YW1wbGVJbml0aWFsaXplXG59IGZyb20gJy4vRXhhbXBsZU1vZHVsZSc7XG5cbmNvbnN0IHJhbGx5ID0gbmV3IFJhbGx5KCk7XG5yYWxseS5pbml0aWFsaXplKFxuICAvLyBBIHNhbXBsZSBrZXkgaWQgdXNlZCBmb3IgZW5jcnlwdGluZyBkYXRhLlxuICBcInNhbXBsZS1pbnZhbGlkLWtleS1pZFwiLFxuICAvLyBBIHNhbXBsZSAqdmFsaWQqIEpXSyBvYmplY3QgZm9yIHRoZSBlbmNyeXB0aW9uLlxuICB7XG4gICAgXCJrdHlcIjpcIkVDXCIsXG4gICAgXCJjcnZcIjpcIlAtMjU2XCIsXG4gICAgXCJ4XCI6XCJmODNPSjNEMnhGMUJnOHZ1Yjl0TGUxZ0hNelY3NmU4VHVzOXVQSHZSVkVVXCIsXG4gICAgXCJ5XCI6XCJ4X0ZFelJ1OW0zNkhMTl90dWU2NTlMTnBYVzZwQ3lTdGlrWWpLSVdJNWEwXCIsXG4gICAgXCJraWRcIjpcIlB1YmxpYyBrZXkgdXNlZCBpbiBKV1Mgc3BlYyBBcHBlbmRpeCBBLjMgZXhhbXBsZVwiXG4gIH0sXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnQgaXMgYXV0b21hdGljYWxseSBwcm92aWRlZCBieVxuICAvLyB0aGUgYnVpbGQgc3lzdGVtLlxuICBfX0VOQUJMRV9ERVZFTE9QRVJfTU9ERV9fLFxuKS50aGVuKHJlc29sdmUgPT4ge1xuICAvLyBJbml0aWFsaXplIHRoZSBzdHVkeSBhbmQgc3RhcnQgaXQuXG4gIC8vIEV4YW1wbGU6IGluaXRpYWxpemUgdGhlIGV4YW1wbGUgbW9kdWxlLlxuICBleGFtcGxlSW5pdGlhbGl6ZSgpO1xufSwgcmVqZWN0ID0+e1xuICAvLyBEbyBub3Qgc3RhcnQgdGhlIHN0dWR5IGluIHRoaXMgY2FzZS4gU29tZXRoaW5nXG4gIC8vIHdlbnQgd3JvbmcuXG59KTtcbiJdLCJuYW1lcyI6WyJ0aGlzIiwiRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6ZSIsIklkbGUucmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lciIsIklkbGUucXVlcnlTdGF0ZSIsImRlYnVnTG9nIiwiU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UiLCJTdG9yYWdlLkNvdW50ZXIiLCJMaW5rUmVzb2x1dGlvbi5nZXRTaG9ydERvbWFpbnMiLCJMaW5rUmVzb2x1dGlvbi5nZXRBbXBDYWNoZURvbWFpbnMiLCJNYXRjaGluZy5jcmVhdGVVcmxSZWdleFN0cmluZyIsIk1lc3NhZ2luZy5yZWdpc3Rlckxpc3RlbmVyIiwiTGlua1Jlc29sdXRpb24ucmVzb2x2ZVVybCIsIlBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciIsIlBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyIiwiU3RvcmFnZS5ub3JtYWxpemVVcmwiLCJzdG9yYWdlIiwicnVuU3R1ZHkiLCJNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheSIsInJlZ2lzdGVyTGlzdGVuZXIiLCJNYXRjaGluZy5VcmxNYXRjaGVyIiwiUGFnZURlcHRoLnJlZ2lzdGVyTGlzdGVuZXIiLCJMaW5rRXhwb3N1cmUubG9nVmlzaXQiLCJQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZVZpc2l0U3RhcnRMaXN0ZW5lciIsIlBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlVmlzaXRTdG9wTGlzdGVuZXIiLCJXZWJTY2llbmNlLlV0aWxpdGllcy5NYXRjaGluZy5nZXRTdHVkeVBhdGhzIiwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24ucnVuU3R1ZHkiLCJXZWJTY2llbmNlLlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvbi5pbml0aWFsaXplIiwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLnJ1blN0dWR5IiwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoLnJ1blN0dWR5IiwiZXhhbXBsZUluaXRpYWxpemUiXSwibWFwcGlu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QUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQTJCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9B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O0FBQ1IsY0FBYztBQUNkLE9BQU87QUFDUCxVQUFVO0FBQ1YsU0FBUztBQUNULFFBQVE7QUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsYUFBYTtBQUNiLFVBQVU7QUFDVixTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULGFBQWE7QUFDYixRQUFRO0FBQ1IsU0FBUztBQUNULFFBQVE7QUFDUixRQUFRO0FBQ1IsYUFBYTtBQUNiLFNBQVM7QUFDVCxTQUFTO0FBQ1QsUUFBUTtBQUNSLFNBQVM7QUFDVCxVQUFVO0FBQ1YsV0FBVztBQUNYLFVBQVU7QUFDVixPQUFPO0FBQ1AsUUFBUTtBQUNSLFVBQVU7QUFDVixRQUFRO0FBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxVQUFVO0FBQ1YsUUFBUTtBQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsYUFBYTtBQUNiLFNBQVM7QUFDVCxTQUFTO0FBQ1QsVUFBVTtBQUNWLFNBQVM7QUFDVCxXQUFXO0FBQ1gsV0FBVztBQUNYLFFBQVE7QUFDUixjQUFjO0FBQ2QsY0FBYztBQUNkLE9BQU87QUFDUCxRQUFRO0FBQ1IsWUFBWTtBQUNaLE9BQU87QUFDUCxTQUFTO0FBQ1QsUUFBUTtBQUNSLGFBQWE7QUFDYixVQUFVO0FBQ1YsUUFBUTtBQUNSLFFBQVE7QUFDUixXQUFXO0FBQ1gsU0FBUztBQUNULFlBQVk7QUFDWixRQUFRO0FBQ1IsU0FBUztBQUNULFFBQVE7QUFDUixRQUFRO0FBQ1IsVUFBVTtBQUNWLE9BQU87QUFDUCxPQUFPO0FBQ1AsUUFBUTtBQUNSLFFBQVE7QUFDUixVQUFVO0FBQ1YsU0FBUztBQUNULE1BQU07QUFDTixTQUFTO0FBQ1QsVUFBVTtBQUNWLFVBQVU7QUFDVixNQUFNO0FBQ04sV0FBVztBQUNYLFVBQVU7QUFDVixVQUFVO0FBQ1YsU0FBUztBQUNULFFBQVE7QUFDUixPQUFPO0FBQ1AsU0FBUztBQUNULFVBQVU7QUFDVixPQUFPO0FBQ1AsTUFBTTtBQUNOLFNBQVM7QUFDVCxTQUFT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
