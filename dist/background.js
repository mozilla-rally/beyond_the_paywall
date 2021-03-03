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

/**
 * Generate an array of match patterns for matching a URL against a set of domains.
 * Will match http and https protocols.
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string[]} An array of match patterns.
 */
function createUrlMatchPatternArrayWithPath(domains, matchSubdomains = true) {
    var matchPatterns = [ ];
    for (const domain of domains) {
        matchPatterns.push("http://" + ( matchSubdomains ? "*." : "" ) + domain + "/*/*");
        matchPatterns.push("https://" + ( matchSubdomains ? "*." : "" ) + domain + "/*/*");
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
            file: "/src/WebScience/Measurements/content-scripts/utils.js"
        },
            {
                file: "/src/WebScience/Measurements/content-scripts/linkExposure.js"
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
            file: "/src/WebScience/Measurements/content-scripts/pageDepth.js"
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

/**
 * This module measures scroll depth for webpages on specific domains.
 * 
 * Note: we will likely replace this module when we update the
 * PageNavigation and PageEvents modules.
 * 
 * @module WebScience.Measurements.ArticleContents
 */

const debugLog$3 = getDebuggingLog("Measurements.ArticleContents");

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
var storage$2 = null;
var initialized$5 = false;

var listeners$1 = [];

/**
 * Start an article contents study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function runStudy$2({
    domains = [ ]
}) {

    if(initialized$5)
        return;    
    initialized$5 = true;

    storage$2 = await (new KeyValueStorage("WebScience.Measurements.ArticleContents")).initialize();

    // Use a unique identifier for each webpage the user visits that has a matching domain
    var nextPageIdCounter = await (new Counter("WebScience.Measurements.ArticleContents.nextPageId")).initialize();

    // Build the URL matching set for content scripts
    var contentScriptMatches = createUrlMatchPatternArrayWithPath(domains, true);

    // Register the content script for measuring maximum scroll depth
    await browser.contentScripts.register({
        matches: contentScriptMatches,
        js: [
        {
            file: "/src/WebScience/Measurements/content-scripts/Readability.js"
        },
        {
            file: "/src/WebScience/Measurements/content-scripts/page-content.js"
        }
        ],
        runAt: "document_idle"
    });

    // Handle page depth events
    registerListener("WebScience.articleContent", async (depthInfo, sender, sendResponse) => {
        var pageId = await nextPageIdCounter.getAndIncrement();
        depthInfo.url = normalizeUrl(sender.url);
        depthInfo.tabId = sender.tab.id;
        for (var listener of listeners$1) { listener(depthInfo); }
        storage$2.set(pageId.toString(), depthInfo);
        debugLog$3(JSON.stringify(depthInfo));
    }, {
        type: "string",
        url : "string",
        title : "string",
        text : "string"
    });
}

function registerListener$2(listener) {
    listeners$1.push(listener);
}

const debugLog$4 = getDebuggingLog("Measurements.PageNavigation");

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
var storage$3 = null;
var currentTabInfo = null;
var urlMatcher = null;

const recentVisitThreshold = 3000;

var untrackedPageVisits = null;

/**
 * Callback function for article contents result
 * @param {Object} result result object
 */
async function contentResults(result) {
    if (currentTabInfo[result.tabID] && currentTabInfo[result.tabID].url == result.url) {
        currentTabInfo[result.tabID].contents[result.name] = result.contents;
    } 
    if (!urlMatcher.testUrl(result.url)) { 
        return;
    }
    await storage$3.startsWith(result.url).then(async (prevVisits) => {
        for (let key in prevVisits) {
            if (prevVisits[key].tabId == result.tabId && 
                Math.abs(result.timestamp - prevVisits[key].visitStart) < recentVisitThreshold) {
                prevVisits[key].contents[result.name] = result.contents;
                await storage$3.set(key, prevVisits[key]);
            }
        }
    });
}
async function depthResults(result) {
    if (result.maxRelativeScrollDepth == null) return;
    if (currentTabInfo[result.tabId] && currentTabInfo[result.tabId].url == result.url) {
        currentTabInfo[result.tabId].scrollDepth = result.maxRelativeScrollDepth;
    }
    else {
        if (!urlMatcher.testUrl(result.url)) { return; }
        await storage$3.startsWith(result.url).then((prevVisits) => {
            for (let key in prevVisits) {
                if (prevVisits[key].tabId == result.tabId) {
                    prevVisits[key].scrollDepth = result.maxRelativeScrollDepth;
                    storage$3.set(key, prevVisits[key]);
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
async function runStudy$3({
    domains = [ ],
    trackUserAttention = false,
    privateWindows = false
}) {

    storage$3 = await (new KeyValueStorage("WebScience.Measurements.PageNavigation")).initialize();

    urlMatcher = new UrlMatcher(domains);

    untrackedPageVisits = await (new Counter("WebScience.Measurements.PageNavigation.untrackedPageVisits")).initialize();

    registerListener$1(depthResults);
    registerListener$2(contentResults);

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
            debugLog$4("Warning: page start event for tab that already has a page");
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
            scrollDepth: -1,
            prevExposed: false, // will check after storing this
            laterShared: false
        };
        var prevExposed = await logVisit(url);
        currentTabInfo[tabId].prevExposed = prevExposed;
        debugLog$4("pageVisitStartListener: " + JSON.stringify(currentTabInfo[tabId]));
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

        debugLog$4("pageVisitStopListener: " + JSON.stringify(tabInfoToSave));

        // Store the final set of information for the page
        storage$3.set(tabInfoToSave.url + " " + tabInfoToSave.pageId.toString(), tabInfoToSave);
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
        debugLog$4("pageAttentionStartListener: " + JSON.stringify(currentTabInfo[tabId]));
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
            debugLog$4("Warning: unexpected page attention stop");
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
        debugLog$4("pageAttentionStopListener: " + JSON.stringify(currentTabInfo[tabId]));
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

/**
 * This module measures scroll depth for webpages on specific domains.
 * 
 * Note: we will likely replace this module when we update the
 * PageNavigation and PageEvents modules.
 * 
 * @module WebScience.Measurements.Advertisements
 */

const debugLog$5 = getDebuggingLog("Measurements.Advertisements");

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
var storage$4 = null;
var initialized$6 = false;

var listeners$2 = [];

/**
 * Start an advertisements study. 
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function runStudy$4({
    domains = [ ]
}) {

    if(initialized$6)
        return;    
    initialized$6 = true;

    storage$4 = await (new KeyValueStorage("WebScience.Measurements.Advertisements")).initialize();

    // Use a unique identifier for each webpage the user visits that has a matching domain
    var nextPageIdCounter = await (new Counter("WebScience.Measurements.Advertisements.nextPageId")).initialize();

    // Build the URL matching set for content scripts
    var contentScriptMatches = createUrlMatchPatternArray(domains, true);

    // Register the content script for measuring maximum scroll depth
    await browser.contentScripts.register({
        matches: contentScriptMatches,
        js: [
        {
            file: "/src/ad_css_selectors.js"
        },
        {
            file: "/src/WebScience/Measurements/content-scripts/page-ads.js"
        }
        ],
        runAt: "document_idle"
    });

    // Handle page depth events
    registerListener("WebScience.advertisements", async (depthInfo, sender, sendResponse) => {
        var pageId = await nextPageIdCounter.getAndIncrement();
        depthInfo.url = normalizeUrl(sender.url);
        depthInfo.tabId = sender.tab.id;
        for (var listener of listeners$2) { listener(depthInfo); }
        storage$4.set(pageId.toString(), depthInfo);
        debugLog$5(JSON.stringify(depthInfo));
    }, {
        type: "string",
        url : "string",
        ads : "object",
    });
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function initialize$3() {
    var studyPaths = getStudyPaths();
    console.debug("study paths:");
    console.debug(studyPaths);

    // Configure navigation collection
    runStudy$3({
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

    runStudy$2({
        domains: studyPaths.destinationPaths,
    });

    runStudy$4({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvQG1vemlsbGEvcmFsbHkvcmFsbHkuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvRGVidWdnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL2xvY2FsZm9yYWdlLmVzNi5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9sb2NhbGZvcmFnZS1zdGFydHN3aXRoLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL1N0b3JhZ2UuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTWVzc2FnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL0lkbGUuanMiLCIuLi9zcmMvZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9NYXRjaGluZy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9QYWdlRXZlbnRzLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL3Nob3J0ZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9hbXBjYWNoZWRvbWFpbnMuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTGlua1Jlc29sdXRpb24uanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvTGlua0V4cG9zdXJlLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL1BhZ2VEZXB0aC5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9BcnRpY2xlQ29udGVudHMuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvUGFnZU5hdmlnYXRpb24uanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvQWR2ZXJ0aXNlbWVudHMuanMiLCIuLi9zcmMvRXhhbXBsZU1vZHVsZS5qcyIsIi4uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuNy4wIC0gVHVlIE5vdiAxMCAyMDIwIDIwOjI0OjA0ICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0eXBlb2YgYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcbiAgICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdGlvblxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pOyAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxuXG5cbiAgICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgY2hyb21lICE9IFwib2JqZWN0XCIgfHwgIWNocm9tZSB8fCAhY2hyb21lLnJ1bnRpbWUgfHwgIWNocm9tZS5ydW50aW1lLmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gICAgfSAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBicm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXHJcblxyXG5jb25zdCBDT1JFX0FERE9OX0lEID0gXCJyYWxseS1jb3JlQG1vemlsbGEub3JnXCI7XHJcbmNvbnN0IFNJR05VUF9VUkwgPSBcImh0dHBzOi8vbW96aWxsYS1yYWxseS5naXRodWIuaW8vY29yZS1hZGRvbi9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbGx5IHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZSBSYWxseSBsaWJyYXJ5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleUlkXHJcbiAgICogICAgICAgIFRoZSBpZCBvZiB0aGUga2V5IHVzZWQgdG8gZW5jcnlwdCBvdXRnb2luZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlcclxuICAgKiAgICAgICAgVGhlIEpTT04gV2ViIEtleSAoSldLKSB1c2VkIHRvIGVuY3J5cHQgdGhlIG91dGdvaW5nIGRhdGEuXHJcbiAgICogICAgICAgIFNlZSB0aGUgUkZDIDc1MTcgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc1MTdcclxuICAgKiAgICAgICAgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uIEZvciBleGFtcGxlOlxyXG4gICAqXHJcbiAgICogICAgICAgIHtcclxuICAgKiAgICAgICAgICBcImt0eVwiOlwiRUNcIixcclxuICAgKiAgICAgICAgICBcImNydlwiOlwiUC0yNTZcIixcclxuICAgKiAgICAgICAgICBcInhcIjpcImY4M09KM0QyeEYxQmc4dnViOXRMZTFnSE16Vjc2ZThUdXM5dVBIdlJWRVVcIixcclxuICAgKiAgICAgICAgICBcInlcIjpcInhfRkV6UnU5bTM2SExOX3R1ZTY1OUxOcFhXNnBDeVN0aWtZaktJV0k1YTBcIixcclxuICAgKiAgICAgICAgICBcImtpZFwiOlwiUHVibGljIGtleSB1c2VkIGluIEpXUyBzcGVjIEFwcGVuZGl4IEEuMyBleGFtcGxlXCJcclxuICAgKiAgICAgICAgfVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlRGV2TW9kZVxyXG4gICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0byBpbml0aWFsaXplIFJhbGx5LmpzIGluIGRldmVsb3BlciBtb2RlLlxyXG4gICAqICAgICAgICBJbiB0aGlzIG1vZGUgd2UgaWdub3JlIHByb2JsZW1zIHdoZW4gY29tbXVuaWNhdGluZyB3aXRoXHJcbiAgICogICAgICAgIGNvcmUgYWRkLW9uLlxyXG4gICAqL1xyXG4gIGFzeW5jIGluaXRpYWxpemUoa2V5SWQsIGtleSwgZW5hYmxlRGV2TW9kZSkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIlJhbGx5LmluaXRpYWxpemVcIik7XHJcblxyXG4gICAgdGhpcy5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5KGtleUlkLCBrZXkpO1xyXG5cclxuICAgIHRoaXMuX2tleUlkID0ga2V5SWQ7XHJcbiAgICB0aGlzLl9rZXkgPSBrZXk7XHJcbiAgICB0aGlzLl9lbmFibGVEZXZNb2RlID0gQm9vbGVhbihlbmFibGVEZXZNb2RlKTtcclxuXHJcbiAgICBsZXQgaGFzUmFsbHkgPSBhd2FpdCB0aGlzLl9jaGVja1JhbGx5Q29yZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKFwiUmFsbHkuaW5pdGlhbGl6ZSAtIEZvdW5kIHRoZSBDb3JlIEFkZC1vbi5cIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSkuY2F0Y2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBXZSBkaWQgbm90IGZpbmQgdGhlIFJhbGx5IENvcmUgQWRkLW9uLiBCdXQgbWF5YmUgd2VcclxuICAgICAgLy8gYXJlIGluIGRldmVsb3BlciBtb2RlLiBEbyBub3QgdHJpZ2dlciB0aGUgc2lnbi11cCBmbG93XHJcbiAgICAgIC8vIGlmIHRoYXQncyB0aGUgY2FzZS5cclxuICAgICAgaWYgKHRoaXMuX2VuYWJsZURldk1vZGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJSYWxseS5pbml0aWFsaXplIC0gRXhlY3V0aW5nIGluIGRldmVsb3BlciBtb2RlLlwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIENvcmUgQWRkLW9uIHdhcyBub3QgZm91bmQgYW5kIHdlJ3JlIG5vdCBpbiBkZXZlbG9wZXJcclxuICAgICAgLy8gbW9kZS5cclxuICAgICAgYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogU0lHTlVQX1VSTCB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFoYXNSYWxseSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYWxseS5pbml0aWFsaXplIC0gSW5pdGlhbGl6YXRpb24gZmFpbGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIGluY29taW5nIG1lc3NhZ2VzIGZyb20gdGhlIENvcmUgYWRkb24uXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIoXHJcbiAgICAgIChtLCBzKSA9PiB0aGlzLl9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UobSwgcykpO1xyXG5cclxuICAgIC8vIFdlIHdlbnQgdGhyb3VnaCB0aGUgd2hvbGUgaW5pdCBwcm9jZXNzLCBpdCdzIG5vdyBzYWZlXHJcbiAgICAvLyB0byB1c2UgdGhlIFJhbGx5IHB1YmxpYyBBUElzLlxyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIENvcmUgYWRkb24gaXMgaW5zdGFsbGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9IHJlc29sdmVkIGlmIHRoZSBjb3JlIGFkZG9uIHdhcyBmb3VuZCBhbmRcclxuICAgKiAgICAgICAgICBjb21tdW5pY2F0aW9uIHdhcyBzdWNjZXNzZnVsLCByZWplY3RlZCBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgYXN5bmMgX2NoZWNrUmFsbHlDb3JlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbXNnID0ge1xyXG4gICAgICAgIHR5cGU6IFwiY29yZS1jaGVja1wiLFxyXG4gICAgICAgIGRhdGE6IHt9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJlc3BvbnNlID1cclxuICAgICAgICBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoQ09SRV9BRERPTl9JRCwgbXNnLCB7fSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlXHJcbiAgICAgICAgICB8fCByZXNwb25zZS50eXBlICE9PSBcImNvcmUtY2hlY2stcmVzcG9uc2VcIlxyXG4gICAgICAgICAgfHwgcmVzcG9uc2UuZGF0YS5lbnJvbGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUmFsbHkuX2NoZWNrUmFsbHlDb3JlIC0gdW5leHBlY3RlZCByZXNwb25zZSByZXR1cm5lZCAke3Jlc3BvbnNlfWApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYWxseS5fY2hlY2tSYWxseUNvcmUgLSBjb3JlIGFkZG9uIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgbWVzc2FnZXMgY29taW5nIGluIGZyb20gZXh0ZXJuYWwgYWRkb25zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VcclxuICAgKiAgICAgICAgVGhlIHBheWxvYWQgb2YgdGhlIG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIHtydW50aW1lLk1lc3NhZ2VTZW5kZXJ9IHNlbmRlclxyXG4gICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbnMgYWJvdXQgd2hvIHNlbnRcclxuICAgKiAgICAgICAgdGhlIG1lc3NhZ2UuXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSByZXNwb25zZSB0byB0aGUgcmVjZWl2ZWQgbWVzc2FnZS5cclxuICAgKiAgICAgICAgICBJdCBjYW4gYmUgcmVzb2x2ZWQgd2l0aCBhIHZhbHVlIHRoYXQgaXMgc2VudCB0byB0aGVcclxuICAgKiAgICAgICAgICBgc2VuZGVyYC5cclxuICAgKi9cclxuICBfaGFuZGxlRXh0ZXJuYWxNZXNzYWdlKG1lc3NhZ2UsIHNlbmRlcikge1xyXG4gICAgLy8gV2Ugb25seSBleHBlY3QgbWVzc2FnZXMgY29taW5nIGZyb20gdGhlIGNvcmUgYWRkb24uXHJcbiAgICBpZiAoc2VuZGVyLmlkICE9IENPUkVfQURET05fSUQpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgIG5ldyBFcnJvcihgUmFsbHkuX2hhbmRsZUV4dGVybmFsTWVzc2FnZSAtIHVuZXhwZWN0ZWQgc2VuZGVyICR7c2VuZGVyLmlkfWApKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIFwidW5pbnN0YWxsXCI6XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIubWFuYWdlbWVudC51bmluc3RhbGxTZWxmKHtzaG93Q29uZmlybURpYWxvZzogZmFsc2V9KTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICBuZXcgRXJyb3IoYFJhbGx5Ll9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UgLSB1bmV4cGVjdGVkIG1lc3NhZ2UgdHlwZSAke21lc3NhZ2UudHlwZX1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgZW5jcnlwdGlvbiBrZXlzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleUlkXHJcbiAgICogICAgICAgIFRoZSBpZCBvZiB0aGUga2V5IHVzZWQgdG8gZW5jcnlwdCBvdXRnb2luZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlcclxuICAgKiAgICAgICAgVGhlIEpTT04gV2ViIEtleSAoSldLKSB1c2VkIHRvIGVuY3J5cHQgdGhlIG91dGdvaW5nIGRhdGEuXHJcbiAgICogICAgICAgIFNlZSB0aGUgUkZDIDc1MTcgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc1MTdcclxuICAgKiAgICAgICAgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uIEZvciBleGFtcGxlOlxyXG4gICAqXHJcbiAgICogICAgICAgIHtcclxuICAgKiAgICAgICAgICBcImt0eVwiOlwiRUNcIixcclxuICAgKiAgICAgICAgICBcImNydlwiOlwiUC0yNTZcIixcclxuICAgKiAgICAgICAgICBcInhcIjpcImY4M09KM0QyeEYxQmc4dnViOXRMZTFnSE16Vjc2ZThUdXM5dVBIdlJWRVVcIixcclxuICAgKiAgICAgICAgICBcInlcIjpcInhfRkV6UnU5bTM2SExOX3R1ZTY1OUxOcFhXNnBDeVN0aWtZaktJV0k1YTBcIixcclxuICAgKiAgICAgICAgICBcImtpZFwiOlwiUHVibGljIGtleSB1c2VkIGluIEpXUyBzcGVjIEFwcGVuZGl4IEEuMyBleGFtcGxlXCJcclxuICAgKiAgICAgICAgfVxyXG4gICAqXHJcbiAgICogQHRocm93cyB7RXJyb3J9IGlmIGVpdGhlciB0aGUga2V5IGlkIG9yIHRoZSBKV0sga2V5IG9iamVjdCBhcmVcclxuICAgKiAgICAgICAgIGludmFsaWQuXHJcbiAgICovXHJcbiAgX3ZhbGlkYXRlRW5jcnlwdGlvbktleShrZXlJZCwga2V5KSB7XHJcbiAgICBpZiAodHlwZW9mIGtleUlkICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmFsbHkuX3ZhbGlkYXRlRW5jcnlwdGlvbktleSAtIEludmFsaWQgZW5jcnlwdGlvbiBrZXkgaWQgJHtrZXlJZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJhbGx5Ll92YWxpZGF0ZUVuY3J5cHRpb25LZXkgLSBJbnZhbGlkIGVuY3J5cHRpb24ga2V5ICR7a2V5fWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3VibWl0IGFuIGVuY3J5cHRlZCBwaW5nIHRocm91Z2ggdGhlIFJhbGx5IENvcmUgYWRkb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF5bG9hZFR5cGVcclxuICAgKiAgICAgICAgVGhlIHR5cGUgb2YgdGhlIGVuY3J5cHRlZCBwYXlsb2FkLiBUaGlzIHdpbGwgZGVmaW5lIHRoZVxyXG4gICAqICAgICAgICBgc2NoZW1hTmFtZWAgb2YgdGhlIHBpbmcuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcclxuICAgKiAgICAgICAgQSBKU09OLXNlcmlhbGl6YWJsZSBwYXlsb2FkIHRvIGJlIHNlbnQgd2l0aCB0aGUgcGluZy5cclxuICAgKi9cclxuICBhc3luYyBzZW5kUGluZyhwYXlsb2FkVHlwZSwgcGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiUmFsbHkuc2VuZFBpbmcgLSBOb3QgaW5pdGlhbHplZCwgY2FsbCBgaW5pdGlhbGl6ZSgpYFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gaW4gZGV2ZWxvcGVyIG1vZGUsIGR1bXAgdGhlIHBheWxvYWQgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICBpZiAodGhpcy5fZW5hYmxlRGV2TW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgUmFsbHkuc2VuZFBpbmcgLSBEZXZlbG9wZXIgbW9kZS4gJHtwYXlsb2FkVHlwZX0gd2lsbCBub3QgYmUgc3VibWl0dGVkYCxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXcmFwIGV2ZXJ5dGhpbmcgaW4gYSB0cnkgYmxvY2ssIGFzIHdlIGRvbid0IHJlYWxseSB3YW50XHJcbiAgICAvLyBkYXRhIGNvbGxlY3Rpb24gdG8gYmUgdGhlIGN1bHByaXQgb2YgYSBidWcgaGluZGVyaW5nIHVzZXJcclxuICAgIC8vIGV4cGVyaWVuY2UuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHN0dWR5IGNhbiBiZSB1c2VkIGFzIHRoZVxyXG4gICAgICAvLyBuYW1lc3BhY2UsIGluIG9yZGVyIHRvIG1ha2Ugc3VyZSBkYXRhIGlzIHJvdXRlZCB0byB0aGVcclxuICAgICAgLy8gcHJvcGVyIGFuYWx5c2lzIHNhbmRib3guXHJcbiAgICAgIGNvbnN0IHN0dWR5TmFtZSA9IGJyb3dzZXIucnVudGltZS5pZDtcclxuXHJcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gbWF5IGJlIG1pc3Rha2VubHkgY2FsbGVkIHdoaWxlIGluaXQgaGFzIG5vdFxyXG4gICAgICAvLyBmaW5pc2hlZC4gTGV0J3MgYmUgc2FmZSBhbmQgY2hlY2sgZm9yIGtleSB2YWxpZGl0eSBhZ2Fpbi5cclxuICAgICAgdGhpcy5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5KHRoaXMuX2tleUlkLCB0aGlzLl9rZXkpO1xyXG5cclxuICAgICAgY29uc3QgbXNnID0ge1xyXG4gICAgICAgIHR5cGU6IFwidGVsZW1ldHJ5LXBpbmdcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwYXlsb2FkVHlwZTogcGF5bG9hZFR5cGUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgbmFtZXNwYWNlOiBzdHVkeU5hbWUsXHJcbiAgICAgICAgICBrZXlJZDogdGhpcy5fa2V5SWQsXHJcbiAgICAgICAgICBrZXk6IHRoaXMuX2tleVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoQ09SRV9BRERPTl9JRCwgbXNnLCB7fSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBSYWxseS5zZW5kUGluZyAtIGVycm9yIHdoaWxlIHNlbmRpbmcgJHtwYXlsb2FkVHlwZX1gLCBleCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgdXRpbGl0aWVzIGZvciBsb2dnaW5nIGRlYnVnZ2luZyBldmVudHMuXG4gKiBUaGUgbW9kdWxlIGN1cnJlbnRseSBqdXN0IG91dHB1dHMgZXZlbnRzIHdpdGggYGNvbnNvbGUuZGVidWdgLlxuICogSXQgc2hvdWxkIGV2ZW50dWFsbHkgc3VwcG9ydCBkZWJ1Z2dpbmcgdmlhIFRlbGVtZXRyeS5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5EZWJ1Z2dpbmdcbiAqL1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gbG9nIGRlYnVnZ2luZyBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgZGVidWcgPSBmYWxzZTtcblxuLyoqIEVuYWJsZSBsb2dnaW5nIGZvciBkZWJ1Z2dpbmcgZXZlbnRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURlYnVnZ2luZygpIHtcbiAgICBkZWJ1ZyA9IHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnaW5nIGxvZ2dlciwgYSBmdW5jdGlvbiB0aGF0IGxvZ3MgZGVidWdnaW5nIGV2ZW50cyAoYXMgc3RyaW5ncykuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlTmFtZSAtIEEgbmFtZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIG1vZHVsZVxuICogZ2VuZXJhdGluZyB0aGUgZGVidWdnaW5nIGV2ZW50cy5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcpfSAtIEEgZGVidWdnaW5nIGxvZ2dlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlYnVnZ2luZ0xvZyhtb2R1bGVOYW1lKSB7XG4gICAgcmV0dXJuICgodGV4dCkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiV2ViU2NpZW5jZS5cIiArIG1vZHVsZU5hbWUgKyBcIjogXCIgKyB0ZXh0KTtcbiAgICB9KTtcbn0iLCIvKiFcbiAgICBsb2NhbEZvcmFnZSAtLSBPZmZsaW5lIFN0b3JhZ2UsIEltcHJvdmVkXG4gICAgVmVyc2lvbiAxLjkuMFxuICAgIGh0dHBzOi8vbG9jYWxmb3JhZ2UuZ2l0aHViLmlvL2xvY2FsRm9yYWdlXG4gICAgKGMpIDIwMTMtMjAxNyBNb3ppbGxhLCBBcGFjaGUgTGljZW5zZSAyLjBcbiovXG5leHBvcnQgdmFyIGxvY2FsZm9yYWdlO1xuKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcubG9jYWxmb3JhZ2UgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgKGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIiwgZil9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG52YXIgTXV0YXRpb24gPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxudmFyIHNjaGVkdWxlRHJhaW47XG5cbntcbiAgaWYgKE11dGF0aW9uKSB7XG4gICAgdmFyIGNhbGxlZCA9IDA7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKG5leHRUaWNrKTtcbiAgICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQuZGF0YSA9IChjYWxsZWQgPSArK2NhbGxlZCAlIDIpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoIWdsb2JhbC5zZXRJbW1lZGlhdGUgJiYgdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG5leHRUaWNrO1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0VGljaygpO1xuXG4gICAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHNjcmlwdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWwpO1xuICAgICAgICBzY3JpcHRFbCA9IG51bGw7XG4gICAgICB9O1xuICAgICAgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChuZXh0VGljaywgMCk7XG4gICAgfTtcbiAgfVxufVxuXG52YXIgZHJhaW5pbmc7XG52YXIgcXVldWUgPSBbXTtcbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGksIG9sZFF1ZXVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAobGVuKSB7XG4gICAgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBvbGRRdWV1ZVtpXSgpO1xuICAgIH1cbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICBpZiAocXVldWUucHVzaCh0YXNrKSA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBzY2hlZHVsZURyYWluKCk7XG4gIH1cbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBpbW1lZGlhdGUgPSBfZGVyZXFfKDEpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gSU5URVJOQUwoKSB7fVxuXG52YXIgaGFuZGxlcnMgPSB7fTtcblxudmFyIFJFSkVDVEVEID0gWydSRUpFQ1RFRCddO1xudmFyIEZVTEZJTExFRCA9IFsnRlVMRklMTEVEJ107XG52YXIgUEVORElORyA9IFsnUEVORElORyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHRoaXMuc3RhdGUgPSBQRU5ESU5HO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMub3V0Y29tZSA9IHZvaWQgMDtcbiAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZSh0aGlzLCByZXNvbHZlcik7XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCB8fFxuICAgIHR5cGVvZiBvblJlamVjdGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihJTlRFUk5BTCk7XG4gIGlmICh0aGlzLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgdmFyIHJlc29sdmVyID0gdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEID8gb25GdWxmaWxsZWQgOiBvblJlamVjdGVkO1xuICAgIHVud3JhcChwcm9taXNlLCByZXNvbHZlciwgdGhpcy5vdXRjb21lKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2gobmV3IFF1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuZnVuY3Rpb24gUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gb25GdWxmaWxsZWQ7XG4gICAgdGhpcy5jYWxsRnVsZmlsbGVkID0gdGhpcy5vdGhlckNhbGxGdWxmaWxsZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5vblJlamVjdGVkID0gb25SZWplY3RlZDtcbiAgICB0aGlzLmNhbGxSZWplY3RlZCA9IHRoaXMub3RoZXJDYWxsUmVqZWN0ZWQ7XG4gIH1cbn1cblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZXNvbHZlKHRoaXMucHJvbWlzZSwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25GdWxmaWxsZWQsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZWplY3QodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB1bndyYXAodGhpcy5wcm9taXNlLCB0aGlzLm9uUmVqZWN0ZWQsIHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIHVud3JhcChwcm9taXNlLCBmdW5jLCB2YWx1ZSkge1xuICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuVmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IHByb21pc2UpIHtcbiAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5oYW5kbGVycy5yZXNvbHZlID0gZnVuY3Rpb24gKHNlbGYsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaChnZXRUaGVuLCB2YWx1ZSk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChzZWxmLCByZXN1bHQudmFsdWUpO1xuICB9XG4gIHZhciB0aGVuYWJsZSA9IHJlc3VsdC52YWx1ZTtcblxuICBpZiAodGhlbmFibGUpIHtcbiAgICBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgc2VsZi5vdXRjb21lID0gdmFsdWU7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB2YXIgbGVuID0gc2VsZi5xdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgc2VsZi5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59O1xuaGFuZGxlcnMucmVqZWN0ID0gZnVuY3Rpb24gKHNlbGYsIGVycm9yKSB7XG4gIHNlbGYuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgc2VsZi5vdXRjb21lID0gZXJyb3I7XG4gIHZhciBpID0gLTE7XG4gIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHNlbGYucXVldWVbaV0uY2FsbFJlamVjdGVkKGVycm9yKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5cbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGFjY2VzcyB0aGUgYWNjZXNzb3Igb25jZSBhcyByZXF1aXJlZCBieSB0aGUgc3BlY1xuICB2YXIgdGhlbiA9IG9iaiAmJiBvYmoudGhlbjtcbiAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXBweVRoZW4oKSB7XG4gICAgICB0aGVuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSkge1xuICAvLyBFaXRoZXIgZnVsZmlsbCwgcmVqZWN0IG9yIHJlamVjdCB3aXRoIGVycm9yXG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gb25FcnJvcih2YWx1ZSkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBoYW5kbGVycy5yZWplY3Qoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdWNjZXNzKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlc29sdmUoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9VbndyYXAoKSB7XG4gICAgdGhlbmFibGUob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0cnlUb1Vud3JhcCk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgb25FcnJvcihyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGZ1bmMsIHZhbHVlKSB7XG4gIHZhciBvdXQgPSB7fTtcbiAgdHJ5IHtcbiAgICBvdXQudmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICBvdXQuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgb3V0LnN0YXR1cyA9ICdlcnJvcic7XG4gICAgb3V0LnZhbHVlID0gZTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5Qcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBoYW5kbGVycy5yZXNvbHZlKG5ldyB0aGlzKElOVEVSTkFMKSwgdmFsdWUpO1xufVxuXG5Qcm9taXNlLnJlamVjdCA9IHJlamVjdDtcbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG4gIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbn1cblxuUHJvbWlzZS5hbGwgPSBhbGw7XG5mdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgcmVzb2x2ZWQgPSAwO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgYWxsUmVzb2x2ZXIoaXRlcmFibGVbaV0sIGkpO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xuICBmdW5jdGlvbiBhbGxSZXNvbHZlcih2YWx1ZSwgaSkge1xuICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlRnJvbUFsbCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlc29sdmVGcm9tQWxsKG91dFZhbHVlKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvdXRWYWx1ZTtcbiAgICAgIGlmICgrK3Jlc29sdmVkID09PSBsZW4gJiYgIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblByb21pc2UucmFjZSA9IHJhY2U7XG5mdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICByZXNvbHZlcihpdGVyYWJsZVtpXSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIHJlc29sdmVyKHZhbHVlKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbn0se1wiMVwiOjF9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbmlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBfZGVyZXFfKDIpO1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiMlwiOjJ9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRJREIoKSB7XG4gICAgLyogZ2xvYmFsIGluZGV4ZWREQix3ZWJraXRJbmRleGVkREIsbW96SW5kZXhlZERCLE9JbmRleGVkREIsbXNJbmRleGVkREIgKi9cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3ZWJraXRJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Via2l0SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW96SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1vekluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIE9JbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gT0luZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1zSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1zSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG52YXIgaWRiID0gZ2V0SURCKCk7XG5cbmZ1bmN0aW9uIGlzSW5kZXhlZERCVmFsaWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBJbmRleGVkREI7IGZhbGwgYmFjayB0byB2ZW5kb3ItcHJlZml4ZWQgdmVyc2lvbnNcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICBpZiAoIWlkYiB8fCAhaWRiLm9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaW1pYyBQb3VjaERCIGhlcmU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIHRlc3QgZm9yIG9wZW5EYXRhYmFzZSBiZWNhdXNlIElFIE1vYmlsZSBpZGVudGlmaWVzIGl0c2VsZlxuICAgICAgICAvLyBhcyBTYWZhcmkuIE9oIHRoZSBsdWx6Li4uXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IHR5cGVvZiBvcGVuRGF0YWJhc2UgIT09ICd1bmRlZmluZWQnICYmIC8oU2FmYXJpfGlQaG9uZXxpUGFkfGlQb2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQmxhY2tCZXJyeS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xuXG4gICAgICAgIHZhciBoYXNGZXRjaCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZXRjaC50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZScpICE9PSAtMTtcblxuICAgICAgICAvLyBTYWZhcmkgPDEwLjEgZG9lcyBub3QgbWVldCBvdXIgcmVxdWlyZW1lbnRzIGZvciBJREIgc3VwcG9ydFxuICAgICAgICAvLyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2lzc3Vlcy81NTcyKS5cbiAgICAgICAgLy8gU2FmYXJpIDEwLjEgc2hpcHBlZCB3aXRoIGZldGNoLCB3ZSBjYW4gdXNlIHRoYXQgdG8gZGV0ZWN0IGl0LlxuICAgICAgICAvLyBOb3RlOiB0aGlzIGNyZWF0ZXMgaXNzdWVzIHdpdGggYHdpbmRvdy5mZXRjaGAgcG9seWZpbGxzIGFuZFxuICAgICAgICAvLyBvdmVycmlkZXM7IHNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlL2lzc3Vlcy84NTZcbiAgICAgICAgcmV0dXJuICghaXNTYWZhcmkgfHwgaGFzRmV0Y2gpICYmIHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIC8vIHNvbWUgb3V0ZGF0ZWQgaW1wbGVtZW50YXRpb25zIG9mIElEQiB0aGF0IGFwcGVhciBvbiBTYW1zdW5nXG4gICAgICAgIC8vIGFuZCBIVEMgQW5kcm9pZCBkZXZpY2VzIDw0LjQgYXJlIG1pc3NpbmcgSURCS2V5UmFuZ2VcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTI4XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzI3MlxuICAgICAgICB0eXBlb2YgSURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4vLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgICAvKiBnbG9iYWwgQmxvYkJ1aWxkZXIsTVNCbG9iQnVpbGRlcixNb3pCbG9iQnVpbGRlcixXZWJLaXRCbG9iQnVpbGRlciAqL1xuICAgIHBhcnRzID0gcGFydHMgfHwgW107XG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBCdWlsZGVyID0gdHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IEJsb2JCdWlsZGVyIDogdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6IHR5cGVvZiBNb3pCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNb3pCbG9iQnVpbGRlciA6IFdlYktpdEJsb2JCdWlsZGVyO1xuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBCdWlsZGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYXBwZW5kKHBhcnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHByb3BlcnRpZXMudHlwZSk7XG4gICAgfVxufVxuXG4vLyBUaGlzIGlzIENvbW1vbkpTIGJlY2F1c2UgbGllIGlzIGFuIGV4dGVybmFsIGRlcGVuZGVuY3ksIHNvIFJvbGx1cFxuLy8gY2FuIGp1c3QgaWdub3JlIGl0LlxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEluIHRoZSBcIm5vcHJvbWlzZXNcIiBidWlsZCB0aGlzIHdpbGwganVzdCB0aHJvdyBpZiB5b3UgZG9uJ3QgaGF2ZVxuICAgIC8vIGEgZ2xvYmFsIHByb21pc2Ugb2JqZWN0LCBidXQgaXQgd291bGQgdGhyb3cgYW55d2F5IGxhdGVyLlxuICAgIF9kZXJlcV8oMyk7XG59XG52YXIgUHJvbWlzZSQxID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4oY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZXJyb3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlW1wiY2F0Y2hcIl0oZXJyb3JDYWxsYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gICAgLy8gQ2FzdCB0aGUga2V5IHRvIGEgc3RyaW5nLCBhcyB0aGF0J3MgYWxsIHdlIGNhbiBzZXQgYXMgYSBrZXkuXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihrZXkgKyAnIHVzZWQgYXMgYSBrZXksIGJ1dCBpdCBpcyBub3QgYSBzdHJpbmcuJyk7XG4gICAgICAgIGtleSA9IFN0cmluZyhrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGdldENhbGxiYWNrKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbn1cblxuLy8gU29tZSBjb2RlIG9yaWdpbmFsbHkgZnJvbSBhc3luY19zdG9yYWdlLmpzIGluXG4vLyBbR2FpYV0oaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEtYjJnL2dhaWEpLlxuXG52YXIgREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSA9ICdsb2NhbC1mb3JhZ2UtZGV0ZWN0LWJsb2Itc3VwcG9ydCc7XG52YXIgc3VwcG9ydHNCbG9icyA9IHZvaWQgMDtcbnZhciBkYkNvbnRleHRzID0ge307XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vLyBUcmFuc2FjdGlvbiBNb2Rlc1xudmFyIFJFQURfT05MWSA9ICdyZWFkb25seSc7XG52YXIgUkVBRF9XUklURSA9ICdyZWFkd3JpdGUnO1xuXG4vLyBUcmFuc2Zvcm0gYSBiaW5hcnkgc3RyaW5nIHRvIGFuIGFycmF5IGJ1ZmZlciwgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIHdlaXJkIHN0dWZmIGhhcHBlbnMgd2hlbiB5b3UgdHJ5IHRvIHdvcmsgd2l0aCB0aGUgYmluYXJ5IHN0cmluZyBkaXJlY3RseS5cbi8vIEl0IGlzIGtub3duLlxuLy8gRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0OTY3NjQ3LyAoY29udGludWVzIG9uIG5leHQgbGluZSlcbi8vIGVuY29kZS1kZWNvZGUtaW1hZ2Utd2l0aC1iYXNlNjQtYnJlYWtzLWltYWdlICgyMDEzLTA0LTIxKVxuZnVuY3Rpb24gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYmluKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJpbi5sZW5ndGg7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gYmluLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5cbi8vXG4vLyBCbG9icyBhcmUgbm90IHN1cHBvcnRlZCBpbiBhbGwgdmVyc2lvbnMgb2YgSW5kZXhlZERCLCBub3RhYmx5XG4vLyBDaHJvbWUgPDM3IGFuZCBBbmRyb2lkIDw1LiBJbiB0aG9zZSB2ZXJzaW9ucywgc3RvcmluZyBhIGJsb2Igd2lsbCB0aHJvdy5cbi8vXG4vLyBWYXJpb3VzIG90aGVyIGJsb2IgYnVncyBleGlzdCBpbiBDaHJvbWUgdjM3LTQyIChpbmNsdXNpdmUpLlxuLy8gRGV0ZWN0aW5nIHRoZW0gaXMgZXhwZW5zaXZlIGFuZCBjb25mdXNpbmcgdG8gdXNlcnMsIGFuZCBDaHJvbWUgMzctNDJcbi8vIGlzIGF0IHZlcnkgbG93IHVzYWdlIHdvcmxkd2lkZSwgc28gd2UgZG8gYSBoYWNreSB1c2VyQWdlbnQgY2hlY2sgaW5zdGVhZC5cbi8vXG4vLyBjb250ZW50LXR5cGUgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDA4MTIwXG4vLyA0MDQgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3OTE2XG4vLyBGaWxlUmVhZGVyIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzgzNlxuLy9cbi8vIENvZGUgYm9ycm93ZWQgZnJvbSBQb3VjaERCLiBTZWU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL25vZGVfbW9kdWxlcy9wb3VjaGRiLWFkYXB0ZXItaWRiL3NyYy9ibG9iU3VwcG9ydC5qc1xuLy9cbmZ1bmN0aW9uIF9jaGVja0Jsb2JTdXBwb3J0V2l0aG91dENhY2hpbmcoaWRiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIHR4biA9IGlkYi50cmFuc2FjdGlvbihERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFLCBSRUFEX1dSSVRFKTtcbiAgICAgICAgdmFyIGJsb2IgPSBjcmVhdGVCbG9iKFsnJ10pO1xuICAgICAgICB0eG4ub2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSkucHV0KGJsb2IsICdrZXknKTtcblxuICAgICAgICB0eG4ub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gYWJvcnRzIG5vdyBpdHMgZHVlIHRvIG5vdCBiZWluZyBhYmxlIHRvXG4gICAgICAgICAgICAvLyB3cml0ZSB0byB0aGUgZGF0YWJhc2UsIGxpa2VseSBkdWUgdG8gdGhlIGRpc2sgYmVpbmcgZnVsbFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHR4bi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcbiAgICAgICAgICAgIC8vIE1TIEVkZ2UgcHJldGVuZHMgdG8gYmUgQ2hyb21lIDQyOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9oaDg2OTMwMSUyOHY9dnMuODUlMjkuYXNweFxuICAgICAgICAgICAgcmVzb2x2ZShtYXRjaGVkRWRnZSB8fCAhbWF0Y2hlZENocm9tZSB8fCBwYXJzZUludChtYXRjaGVkQ2hyb21lWzFdLCAxMCkgPj0gNDMpO1xuICAgICAgICB9O1xuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yLCBzbyBhc3N1bWUgdW5zdXBwb3J0ZWRcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnQoaWRiKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Jsb2JzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKHN1cHBvcnRzQmxvYnMpO1xuICAgIH1cbiAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN1cHBvcnRzQmxvYnMgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQmxvYnM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBDcmVhdGUgYSBkZWZlcnJlZCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSB7fTtcblxuICAgIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIC8vIEVucXVldWUgdGhlIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnB1c2goZGVmZXJyZWRPcGVyYXRpb24pO1xuXG4gICAgLy8gQ2hhaW4gaXRzIHByb21pc2UgdG8gdGhlIGRhdGFiYXNlIHJlYWRpbmVzcy5cbiAgICBpZiAoIWRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYkNvbnRleHQuZGJSZWFkeSA9IGRiQ29udGV4dC5kYlJlYWR5LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVzb2x2ZSBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlKCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycikge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIERlcXVldWUgYSBkZWZlcnJlZCBvcGVyYXRpb24uXG4gICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0gZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wb3AoKTtcblxuICAgIC8vIFJlamVjdCBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZWplY3QoZXJyKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHVwZ3JhZGVOZWVkZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gfHwgY3JlYXRlRGJDb250ZXh0KCk7XG5cbiAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgICAgICAgICBkYkluZm8uZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGJJbmZvLmRiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYkFyZ3MgPSBbZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBkYkFyZ3MucHVzaChkYkluZm8udmVyc2lvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3BlbnJlcSA9IGlkYi5vcGVuLmFwcGx5KGlkYiwgZGJBcmdzKTtcblxuICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgb3BlbnJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IG9wZW5yZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vbGRWZXJzaW9uIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHdoZW4gc3VwcG9ydCBmb3IgYmxvYiBzaGltcyB3YXMgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdDb25zdHJhaW50RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyAnIGhhcyBiZWVuIHVwZ3JhZGVkIGZyb20gdmVyc2lvbiAnICsgZS5vbGRWZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBlLm5ld1ZlcnNpb24gKyAnLCBidXQgdGhlIHN0b3JhZ2UgXCInICsgZGJJbmZvLnN0b3JlTmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5yZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKG9wZW5yZXEucmVzdWx0KTtcbiAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKGRiSW5mbyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbykge1xuICAgIHJldHVybiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHRydWUpO1xufVxuXG5mdW5jdGlvbiBfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgZGVmYXVsdFZlcnNpb24pIHtcbiAgICBpZiAoIWRiSW5mby5kYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaXNOZXdTdG9yZSA9ICFkYkluZm8uZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhkYkluZm8uc3RvcmVOYW1lKTtcbiAgICB2YXIgaXNEb3duZ3JhZGUgPSBkYkluZm8udmVyc2lvbiA8IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIHZhciBpc1VwZ3JhZGUgPSBkYkluZm8udmVyc2lvbiA+IGRiSW5mby5kYi52ZXJzaW9uO1xuXG4gICAgaWYgKGlzRG93bmdyYWRlKSB7XG4gICAgICAgIC8vIElmIHRoZSB2ZXJzaW9uIGlzIG5vdCB0aGUgZGVmYXVsdCBvbmVcbiAgICAgICAgLy8gdGhlbiB3YXJuIGZvciBpbXBvc3NpYmxlIGRvd25ncmFkZS5cbiAgICAgICAgaWYgKGRiSW5mby52ZXJzaW9uICE9PSBkZWZhdWx0VmVyc2lvbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZGF0YWJhc2UgXCInICsgZGJJbmZvLm5hbWUgKyAnXCInICsgXCIgY2FuJ3QgYmUgZG93bmdyYWRlZCBmcm9tIHZlcnNpb24gXCIgKyBkYkluZm8uZGIudmVyc2lvbiArICcgdG8gdmVyc2lvbiAnICsgZGJJbmZvLnZlcnNpb24gKyAnLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsaWduIHRoZSB2ZXJzaW9ucyB0byBwcmV2ZW50IGVycm9ycy5cbiAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoaXNVcGdyYWRlIHx8IGlzTmV3U3RvcmUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHN0b3JlIGlzIG5ldyB0aGVuIGluY3JlbWVudCB0aGUgdmVyc2lvbiAoaWYgbmVlZGVkKS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYW4gXCJ1cGdyYWRlbmVlZGVkXCIgZXZlbnQgd2hpY2ggaXMgcmVxdWlyZWRcbiAgICAgICAgLy8gZm9yIGNyZWF0aW5nIGEgc3RvcmUuXG4gICAgICAgIGlmIChpc05ld1N0b3JlKSB7XG4gICAgICAgICAgICB2YXIgaW5jVmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uICsgMTtcbiAgICAgICAgICAgIGlmIChpbmNWZXJzaW9uID4gZGJJbmZvLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBkYkluZm8udmVyc2lvbiA9IGluY1ZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGVuY29kZSBhIGJsb2IgZm9yIGluZGV4ZWRkYiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBibG9ic1xuZnVuY3Rpb24gX2VuY29kZUJsb2IoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBiYXNlNjQgPSBidG9hKGUudGFyZ2V0LnJlc3VsdCB8fCAnJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBfX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YTogYmFzZTY0LFxuICAgICAgICAgICAgICAgIHR5cGU6IGJsb2IudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoYmxvYik7XG4gICAgfSk7XG59XG5cbi8vIGRlY29kZSBhbiBlbmNvZGVkIGJsb2JcbmZ1bmN0aW9uIF9kZWNvZGVCbG9iKGVuY29kZWRCbG9iKSB7XG4gICAgdmFyIGFycmF5QnVmZiA9IF9iaW5TdHJpbmdUb0FycmF5QnVmZmVyKGF0b2IoZW5jb2RlZEJsb2IuZGF0YSkpO1xuICAgIHJldHVybiBjcmVhdGVCbG9iKFthcnJheUJ1ZmZdLCB7IHR5cGU6IGVuY29kZWRCbG9iLnR5cGUgfSk7XG59XG5cbi8vIGlzIHRoaXMgb25lIG9mIG91ciBmYW5jeSBlbmNvZGVkIGJsb2JzP1xuZnVuY3Rpb24gX2lzRW5jb2RlZEJsb2IodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuX19sb2NhbF9mb3JhZ2VfZW5jb2RlZF9ibG9iO1xufVxuXG4vLyBTcGVjaWFsaXplIHRoZSBkZWZhdWx0IGByZWFkeSgpYCBmdW5jdGlvbiBieSBtYWtpbmcgaXQgZGVwZW5kZW50XG4vLyBvbiB0aGUgY3VycmVudCBkYXRhYmFzZSBvcGVyYXRpb25zLiBUaHVzLCB0aGUgZHJpdmVyIHdpbGwgYmUgYWN0dWFsbHlcbi8vIHJlYWR5IHdoZW4gaXQncyBiZWVuIGluaXRpYWxpemVkIChkZWZhdWx0KSAqYW5kKiB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuLy8gb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UgKGluaXRpYXRlZCBieSBzb21lIG90aGVyIGluc3RhbmNlcykuXG5mdW5jdGlvbiBfZnVsbHlSZWFkeShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5faW5pdFJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW3NlbGYuX2RiSW5mby5uYW1lXTtcblxuICAgICAgICBpZiAoZGJDb250ZXh0ICYmIGRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGJDb250ZXh0LmRiUmVhZHk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gVHJ5IHRvIGVzdGFibGlzaCBhIG5ldyBkYiBjb25uZWN0aW9uIHRvIHJlcGxhY2UgdGhlXG4vLyBjdXJyZW50IG9uZSB3aGljaCBpcyBicm9rZW4gKGkuZS4gZXhwZXJpZW5jaW5nXG4vLyBJbnZhbGlkU3RhdGVFcnJvciB3aGlsZSBjcmVhdGluZyBhIHRyYW5zYWN0aW9uKS5cbmZ1bmN0aW9uIF90cnlSZWNvbm5lY3QoZGJJbmZvKSB7XG4gICAgX2RlZmVyUmVhZGluZXNzKGRiSW5mbyk7XG5cbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG4gICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgaWYgKGZvcmFnZS5fZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRiSW5mby5kYiA9IG51bGw7XG5cbiAgICByZXR1cm4gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiO1xuICAgICAgICBpZiAoX2lzVXBncmFkZU5lZWRlZChkYkluZm8pKSB7XG4gICAgICAgICAgICAvLyBSZW9wZW4gdGhlIGRhdGFiYXNlIGZvciB1cGdyYWRpbmcuXG4gICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYjtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAvLyBzdG9yZSB0aGUgbGF0ZXN0IGRiIHJlZmVyZW5jZVxuICAgICAgICAvLyBpbiBjYXNlIHRoZSBkYiB3YXMgdXBncmFkZWRcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yYWdlc1tpXS5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIH1cbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cblxuLy8gRkYgZG9lc24ndCBsaWtlIFByb21pc2VzIChtaWNyby10YXNrcykgYW5kIElEREIgc3RvcmUgb3BlcmF0aW9ucyxcbi8vIHNvIHdlIGhhdmUgdG8gZG8gaXQgd2l0aCBjYWxsYmFja3NcbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zYWN0aW9uKGRiSW5mbywgbW9kZSwgY2FsbGJhY2ssIHJldHJpZXMpIHtcbiAgICBpZiAocmV0cmllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHJpZXMgPSAxO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHZhciB0eCA9IGRiSW5mby5kYi50cmFuc2FjdGlvbihkYkluZm8uc3RvcmVOYW1lLCBtb2RlKTtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdHgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAocmV0cmllcyA+IDAgJiYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdJbnZhbGlkU3RhdGVFcnJvcicgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJykpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghZGJJbmZvLmRiIHx8IGVyci5uYW1lID09PSAnTm90Rm91bmRFcnJvcicgJiYgIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpICYmIGRiSW5mby52ZXJzaW9uIDw9IGRiSW5mby5kYi52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBkYiB2ZXJzaW9uLCB0byBjcmVhdGUgdGhlIG5ldyBPYmplY3RTdG9yZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZW9wZW4gdGhlIGRhdGFiYXNlIGZvciB1cGdyYWRpbmcuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90cnlSZWNvbm5lY3QoZGJJbmZvKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcyAtIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGJDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFJ1bm5pbmcgbG9jYWxGb3JhZ2VzIHNoYXJpbmcgYSBkYXRhYmFzZS5cbiAgICAgICAgZm9yYWdlczogW10sXG4gICAgICAgIC8vIFNoYXJlZCBkYXRhYmFzZS5cbiAgICAgICAgZGI6IG51bGwsXG4gICAgICAgIC8vIERhdGFiYXNlIHJlYWRpbmVzcyAocHJvbWlzZSkuXG4gICAgICAgIGRiUmVhZHk6IG51bGwsXG4gICAgICAgIC8vIERlZmVycmVkIG9wZXJhdGlvbnMgb24gdGhlIGRhdGFiYXNlLlxuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbnM6IFtdXG4gICAgfTtcbn1cblxuLy8gT3BlbiB0aGUgSW5kZXhlZERCIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3Rcbi8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZShvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYkluZm8gPSB7XG4gICAgICAgIGRiOiBudWxsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBjb250ZXh0IG9mIHRoZSBkYXRhYmFzZTtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyAuLi5vciBjcmVhdGUgYSBuZXcgY29udGV4dC5cbiAgICBpZiAoIWRiQ29udGV4dCkge1xuICAgICAgICBkYkNvbnRleHQgPSBjcmVhdGVEYkNvbnRleHQoKTtcbiAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIG5ldyBjb250ZXh0IGluIHRoZSBnbG9iYWwgY29udGFpbmVyLlxuICAgICAgICBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSA9IGRiQ29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBpdHNlbGYgYXMgYSBydW5uaW5nIGxvY2FsRm9yYWdlIGluIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gICAgZGJDb250ZXh0LmZvcmFnZXMucHVzaChzZWxmKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIHdpdGggdGhlIHNwZWNpYWxpemVkIG9uZS5cbiAgICBpZiAoIXNlbGYuX2luaXRSZWFkeSkge1xuICAgICAgICBzZWxmLl9pbml0UmVhZHkgPSBzZWxmLnJlYWR5O1xuICAgICAgICBzZWxmLnJlYWR5ID0gX2Z1bGx5UmVhZHk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIGluaXRpYWxpemF0aW9uIHN0YXRlcyBvZiB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMuXG4gICAgdmFyIGluaXRQcm9taXNlcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gaWdub3JlRXJyb3JzKCkge1xuICAgICAgICAvLyBEb24ndCBoYW5kbGUgZXJyb3JzIGhlcmUsXG4gICAgICAgIC8vIGp1c3QgbWFrZXMgc3VyZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYkNvbnRleHQuZm9yYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgZm9yYWdlID0gZGJDb250ZXh0LmZvcmFnZXNbal07XG4gICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHdhaXQgZm9yIGl0c2VsZi4uLlxuICAgICAgICAgICAgaW5pdFByb21pc2VzLnB1c2goZm9yYWdlLl9pbml0UmVhZHkoKVtcImNhdGNoXCJdKGlnbm9yZUVycm9ycykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHNuYXBzaG90IG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzLnNsaWNlKDApO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgY29ubmVjdGlvbiBwcm9jZXNzIG9ubHkgd2hlblxuICAgIC8vIGFsbCB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMgYXJlbid0IHBlbmRpbmcuXG4gICAgcmV0dXJuIFByb21pc2UkMS5hbGwoaW5pdFByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiO1xuICAgICAgICAvLyBHZXQgdGhlIGNvbm5lY3Rpb24gb3Igb3BlbiBhIG5ldyBvbmUgd2l0aG91dCB1cGdyYWRlLlxuICAgICAgICByZXR1cm4gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiO1xuICAgICAgICBpZiAoX2lzVXBncmFkZU5lZWRlZChkYkluZm8sIHNlbGYuX2RlZmF1bHRDb25maWcudmVyc2lvbikpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgICAgIC8vIFNoYXJlIHRoZSBmaW5hbCBjb25uZWN0aW9uIGFtb25nc3QgcmVsYXRlZCBsb2NhbEZvcmFnZXMuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZm9yYWdlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNba107XG4gICAgICAgICAgICBpZiAoZm9yYWdlICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VsZiBpcyBhbHJlYWR5IHVwLXRvLWRhdGUuXG4gICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBkYkluZm8uZGI7XG4gICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8udmVyc2lvbiA9IGRiSW5mby52ZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW0oa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5nZXQoa2V5KTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0VuY29kZWRCbG9iKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBzdG9yZWQgaW4gZGF0YWJhc2UuXG5mdW5jdGlvbiBpdGVyYXRlKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbkN1cnNvcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlcmF0aW9uTnVtYmVyID0gMTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0VuY29kZWRCbG9iKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9kZWNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yKHZhbHVlLCBjdXJzb3Iua2V5LCBpdGVyYXRpb25OdW1iZXIrKyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpdGVyYXRvciBjYWxsYmFjayByZXR1cm5zIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChub24tYHVuZGVmaW5lZGApIHZhbHVlLCB0aGVuIHdlIHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaXRlcmF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JbXCJjb250aW51ZVwiXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGRiSW5mbztcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgaWYgKHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnQoZGJJbmZvLmRiKS50aGVuKGZ1bmN0aW9uIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYlN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2VuY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZWFzb24gd2UgZG9uJ3QgX3NhdmVfIG51bGwgaXMgYmVjYXVzZSBJRSAxMCBkb2VzXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBzdXBwb3J0IHNhdmluZyB0aGUgYG51bGxgIHR5cGUgaW4gSW5kZXhlZERCLiBIb3dcbiAgICAgICAgICAgICAgICAgICAgLy8gaXJvbmljLCBnaXZlbiB0aGUgYnVnIGJlbG93IVxuICAgICAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8xNjFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhc3QgdG8gdW5kZWZpbmVkIHNvIHRoZSB2YWx1ZSBwYXNzZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrL3Byb21pc2UgaXMgdGhlIHNhbWUgYXMgd2hhdCBvbmUgd291bGQgZ2V0IG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgYGdldEl0ZW0oKWAgbGF0ZXIuIFRoaXMgbGVhZHMgdG8gc29tZSB3ZWlyZG5lc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChzZXRJdGVtKCdmb28nLCB1bmRlZmluZWQpIHdpbGwgcmV0dXJuIGBudWxsYCksIGJ1dFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3QgbXkgZmF1bHQgbG9jYWxTdG9yYWdlIGlzIG91ciBiYXNlbGluZSBhbmQgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3ZWlyZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSB1c2UgYSBHcnVudCB0YXNrIHRvIG1ha2UgdGhpcyBzYWZlIGZvciBJRSBhbmQgc29tZVxuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJzaW9ucyBvZiBBbmRyb2lkIChpbmNsdWRpbmcgdGhvc2UgdXNlZCBieSBDb3Jkb3ZhKS5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm9ybWFsbHkgSUUgd29uJ3QgbGlrZSBgLmRlbGV0ZSgpYCBhbmQgd2lsbCBpbnNpc3Qgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgYFsnZGVsZXRlJ10oKWAsIGJ1dCB3ZSBoYXZlIGEgYnVpbGQgc3RlcCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeGVzIHRoaXMgZm9yIHVzIG5vdy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlW1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdpbGwgYmUgYWxzbyBiZSBhYm9ydGVkIGlmIHdlJ3ZlIGV4Y2VlZGVkIG91ciBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlLlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbGVhcihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5jb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleShuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChuIDwgMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZHZhbmNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBtZWFucyB0aGVyZSB3ZXJlbid0IGVub3VnaCBrZXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRoZSBmaXJzdCBrZXksIHJldHVybiBpdCBpZiB0aGF0J3Mgd2hhdCB0aGV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2FudGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWR2YW5jZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBhc2sgdGhlIGN1cnNvciB0byBza2lwIGFoZWFkIG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuYWR2YW5jZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHdlIGdldCBoZXJlLCB3ZSd2ZSBnb3QgdGhlIG50aCBrZXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5LZXlDdXJzb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpc0N1cnJlbnREYiA9IG9wdGlvbnMubmFtZSA9PT0gY3VycmVudENvbmZpZy5uYW1lICYmIHNlbGYuX2RiSW5mby5kYjtcblxuICAgICAgICB2YXIgZGJQcm9taXNlID0gaXNDdXJyZW50RGIgPyBQcm9taXNlJDEucmVzb2x2ZShzZWxmLl9kYkluZm8uZGIpIDogX2dldE9yaWdpbmFsQ29ubmVjdGlvbihvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG4gICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvcmFnZXNbaV0uX2RiSW5mby5kYiA9IGRiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgX2RlZmVyUmVhZGluZXNzKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJvcERCUHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gaWRiLmRlbGV0ZURhdGFiYXNlKG9wdGlvbnMubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSByZXEub25ibG9ja2VkID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkcm9wREJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UuX2RiSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9yZWplY3RSZWFkaW5lc3Mob3B0aW9ucywgZXJyKSB8fCBQcm9taXNlJDEucmVzb2x2ZSgpKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKG9wdGlvbnMuc3RvcmVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZlcnNpb24gPSBkYi52ZXJzaW9uICsgMTtcblxuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBuZXdWZXJzaW9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wT2JqZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gaWRiLm9wZW4ob3B0aW9ucy5uYW1lLCBuZXdWZXJzaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5kZWxldGVPYmplY3RTdG9yZShvcHRpb25zLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcE9iamVjdFByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm9yYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9mb3JhZ2UyID0gZm9yYWdlc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JhZ2UyLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UyLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIGFzeW5jU3RvcmFnZSA9IHtcbiAgICBfZHJpdmVyOiAnYXN5bmNTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSxcbiAgICBfc3VwcG9ydDogaXNJbmRleGVkREJWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gICAgY2xlYXI6IGNsZWFyLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGtleToga2V5LFxuICAgIGtleXM6IGtleXMsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2Vcbn07XG5cbmZ1bmN0aW9uIGlzV2ViU1FMVmFsaWQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvcGVuRGF0YWJhc2UgPT09ICdmdW5jdGlvbic7XG59XG5cbi8vIFNhZGx5LCB0aGUgYmVzdCB3YXkgdG8gc2F2ZSBiaW5hcnkgZGF0YSBpbiBXZWJTUUwvbG9jYWxTdG9yYWdlIGlzIHNlcmlhbGl6aW5nXG4vLyBpdCB0byBCYXNlNjQsIHNvIHRoaXMgaXMgaG93IHdlIHN0b3JlIGl0IHRvIHByZXZlbnQgdmVyeSBzdHJhbmdlIGVycm9ycyB3aXRoIGxlc3Ncbi8vIHZlcmJvc2Ugd2F5cyBvZiBiaW5hcnkgPC0+IHN0cmluZyBkYXRhIHN0b3JhZ2UuXG52YXIgQkFTRV9DSEFSUyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxudmFyIEJMT0JfVFlQRV9QUkVGSVggPSAnfn5sb2NhbF9mb3JhZ2VfdHlwZX4nO1xudmFyIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVggPSAvXn5+bG9jYWxfZm9yYWdlX3R5cGV+KFtefl0rKX4vO1xuXG52YXIgU0VSSUFMSVpFRF9NQVJLRVIgPSAnX19sZnNjX186JztcbnZhciBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEggPSBTRVJJQUxJWkVEX01BUktFUi5sZW5ndGg7XG5cbi8vIE9NRyB0aGUgc2VyaWFsaXphdGlvbnMhXG52YXIgVFlQRV9BUlJBWUJVRkZFUiA9ICdhcmJmJztcbnZhciBUWVBFX0JMT0IgPSAnYmxvYic7XG52YXIgVFlQRV9JTlQ4QVJSQVkgPSAnc2kwOCc7XG52YXIgVFlQRV9VSU5UOEFSUkFZID0gJ3VpMDgnO1xudmFyIFRZUEVfVUlOVDhDTEFNUEVEQVJSQVkgPSAndWljOCc7XG52YXIgVFlQRV9JTlQxNkFSUkFZID0gJ3NpMTYnO1xudmFyIFRZUEVfSU5UMzJBUlJBWSA9ICdzaTMyJztcbnZhciBUWVBFX1VJTlQxNkFSUkFZID0gJ3VyMTYnO1xudmFyIFRZUEVfVUlOVDMyQVJSQVkgPSAndWkzMic7XG52YXIgVFlQRV9GTE9BVDMyQVJSQVkgPSAnZmwzMic7XG52YXIgVFlQRV9GTE9BVDY0QVJSQVkgPSAnZmw2NCc7XG52YXIgVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEggPSBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEggKyBUWVBFX0FSUkFZQlVGRkVSLmxlbmd0aDtcblxudmFyIHRvU3RyaW5nJDEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKSB7XG4gICAgLy8gRmlsbCB0aGUgc3RyaW5nIGludG8gYSBBcnJheUJ1ZmZlci5cbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGggKiAwLjc1O1xuICAgIHZhciBsZW4gPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgaTtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDJdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpO1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgZW5jb2RlZDEgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpXSk7XG4gICAgICAgIGVuY29kZWQyID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDFdKTtcbiAgICAgICAgZW5jb2RlZDMgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgMl0pO1xuICAgICAgICBlbmNvZGVkNCA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAzXSk7XG5cbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLy8gQ29udmVydHMgYSBidWZmZXIgdG8gYSBzdHJpbmcgdG8gc3RvcmUsIHNlcmlhbGl6ZWQsIGluIHRoZSBiYWNrZW5kXG4vLyBzdG9yYWdlIGxpYnJhcnkuXG5mdW5jdGlvbiBidWZmZXJUb1N0cmluZyhidWZmZXIpIHtcbiAgICAvLyBiYXNlNjQtYXJyYXlidWZmZXJcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIHZhciBiYXNlNjRTdHJpbmcgPSAnJztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAvKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1soYnl0ZXNbaV0gJiAzKSA8PCA0IHwgYnl0ZXNbaSArIDFdID4+IDRdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1soYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpICsgMl0gPj4gNl07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZXMubGVuZ3RoICUgMyA9PT0gMikge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyaW5nKDAsIGJhc2U2NFN0cmluZy5sZW5ndGggLSAxKSArICc9JztcbiAgICB9IGVsc2UgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDEpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMikgKyAnPT0nO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjRTdHJpbmc7XG59XG5cbi8vIFNlcmlhbGl6ZSBhIHZhbHVlLCBhZnRlcndhcmRzIGV4ZWN1dGluZyBhIGNhbGxiYWNrICh3aGljaCB1c3VhbGx5XG4vLyBpbnN0cnVjdHMgdGhlIGBzZXRJdGVtKClgIGNhbGxiYWNrL3Byb21pc2UgdG8gYmUgZXhlY3V0ZWQpLiBUaGlzIGlzIGhvd1xuLy8gd2Ugc3RvcmUgYmluYXJ5IGRhdGEgd2l0aCBsb2NhbFN0b3JhZ2UuXG5mdW5jdGlvbiBzZXJpYWxpemUodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9ICcnO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSB0b1N0cmluZyQxLmNhbGwodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENhbm5vdCB1c2UgYHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXJgIG9yIHN1Y2ggaGVyZSwgYXMgdGhlc2VcbiAgICAvLyBjaGVja3MgZmFpbCB3aGVuIHJ1bm5pbmcgdGhlIHRlc3RzIHVzaW5nIGNhc3Blci5qcy4uLlxuICAgIC8vXG4gICAgLy8gVE9ETzogU2VlIHdoeSB0aG9zZSB0ZXN0cyBmYWlsIGFuZCB1c2UgYSBiZXR0ZXIgc29sdXRpb24uXG4gICAgaWYgKHZhbHVlICYmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScgfHwgdmFsdWUuYnVmZmVyICYmIHRvU3RyaW5nJDEuY2FsbCh2YWx1ZS5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSkge1xuICAgICAgICAvLyBDb252ZXJ0IGJpbmFyeSBhcnJheXMgdG8gYSBzdHJpbmcgYW5kIHByZWZpeCB0aGUgc3RyaW5nIHdpdGhcbiAgICAgICAgLy8gYSBzcGVjaWFsIG1hcmtlci5cbiAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgdmFyIG1hcmtlciA9IFNFUklBTElaRURfTUFSS0VSO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICBidWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0FSUkFZQlVGRkVSO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWUuYnVmZmVyO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UOEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UOENMQU1QRURBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQxNkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0ZMT0FUMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDY0QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0ZMT0FUNjRBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHR5cGUgZm9yIEJpbmFyeUFycmF5JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sobWFya2VyICsgYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAvLyBDb252ZXIgdGhlIGJsb2IgdG8gYSBiaW5hcnlBcnJheSBhbmQgdGhlbiB0byBhIHN0cmluZy5cbiAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgcHJlZml4IGZvciB0aGUgYmxvYiB0eXBlLlxuICAgICAgICAgICAgdmFyIHN0ciA9IEJMT0JfVFlQRV9QUkVGSVggKyB2YWx1ZS50eXBlICsgJ34nICsgYnVmZmVyVG9TdHJpbmcodGhpcy5yZXN1bHQpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhTRVJJQUxJWkVEX01BUktFUiArIFRZUEVfQkxPQiArIHN0cik7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBjb252ZXJ0IHZhbHVlIGludG8gYSBKU09OIHN0cmluZzogXCIsIHZhbHVlKTtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERlc2VyaWFsaXplIGRhdGEgd2UndmUgaW5zZXJ0ZWQgaW50byBhIHZhbHVlIGNvbHVtbi9maWVsZC4gV2UgcGxhY2Vcbi8vIHNwZWNpYWwgbWFya2VycyBpbnRvIG91ciBzdHJpbmdzIHRvIG1hcmsgdGhlbSBhcyBlbmNvZGVkOyB0aGlzIGlzbid0XG4vLyBhcyBuaWNlIGFzIGEgbWV0YSBmaWVsZCwgYnV0IGl0J3MgdGhlIG9ubHkgc2FuZSB0aGluZyB3ZSBjYW4gZG8gd2hpbHN0XG4vLyBrZWVwaW5nIGxvY2FsU3RvcmFnZSBzdXBwb3J0IGludGFjdC5cbi8vXG4vLyBPZnRlbnRpbWVzIHRoaXMgd2lsbCBqdXN0IGRlc2VyaWFsaXplIEpTT04gY29udGVudCwgYnV0IGlmIHdlIGhhdmUgYVxuLy8gc3BlY2lhbCBtYXJrZXIgKFNFUklBTElaRURfTUFSS0VSLCBkZWZpbmVkIGFib3ZlKSwgd2Ugd2lsbCBleHRyYWN0XG4vLyBzb21lIGtpbmQgb2YgYXJyYXlidWZmZXIvYmluYXJ5IGRhdGEvdHlwZWQgYXJyYXkgb3V0IG9mIHRoZSBzdHJpbmcuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgbWFya2VkIHRoaXMgc3RyaW5nIGFzIGJlaW5nIHNwZWNpYWxseSBzZXJpYWxpemVkIChpLmUuXG4gICAgLy8gc29tZXRoaW5nIG90aGVyIHRoYW4gc2VyaWFsaXplZCBKU09OKSwgd2UgY2FuIGp1c3QgcmV0dXJuIGl0IGFuZCBiZVxuICAgIC8vIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodmFsdWUuc3Vic3RyaW5nKDAsIFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCkgIT09IFNFUklBTElaRURfTUFSS0VSKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVhbHMgd2l0aCBkZXNlcmlhbGl6aW5nIHNvbWUga2luZCBvZiBCbG9iIG9yXG4gICAgLy8gVHlwZWRBcnJheS4gRmlyc3Qgd2Ugc2VwYXJhdGUgb3V0IHRoZSB0eXBlIG9mIGRhdGEgd2UncmUgZGVhbGluZ1xuICAgIC8vIHdpdGggZnJvbSB0aGUgZGF0YSBpdHNlbGYuXG4gICAgdmFyIHNlcmlhbGl6ZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHJpbmcoVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuICAgIHZhciB0eXBlID0gdmFsdWUuc3Vic3RyaW5nKFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCwgVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuXG4gICAgdmFyIGJsb2JUeXBlO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIGJsb2IgdHlwZSBzZXJpYWxpemF0aW9uIHN0cmF0ZWd5LlxuICAgIC8vIERCcyBjcmVhdGVkIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgbG9jYWxGb3JhZ2Ugd2lsbCBzaW1wbHkgbm90IGhhdmUgdGhlIGJsb2IgdHlwZS5cbiAgICBpZiAodHlwZSA9PT0gVFlQRV9CTE9CICYmIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgudGVzdChzZXJpYWxpemVkU3RyaW5nKSkge1xuICAgICAgICB2YXIgbWF0Y2hlciA9IHNlcmlhbGl6ZWRTdHJpbmcubWF0Y2goQkxPQl9UWVBFX1BSRUZJWF9SRUdFWCk7XG4gICAgICAgIGJsb2JUeXBlID0gbWF0Y2hlclsxXTtcbiAgICAgICAgc2VyaWFsaXplZFN0cmluZyA9IHNlcmlhbGl6ZWRTdHJpbmcuc3Vic3RyaW5nKG1hdGNoZXJbMF0ubGVuZ3RoKTtcbiAgICB9XG4gICAgdmFyIGJ1ZmZlciA9IHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSByaWdodCB0eXBlIGJhc2VkIG9uIHRoZSBjb2RlL3R5cGUgc2V0IGR1cmluZ1xuICAgIC8vIHNlcmlhbGl6YXRpb24uXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRV9BUlJBWUJVRkZFUjpcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIGNhc2UgVFlQRV9CTE9COlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogYmxvYlR5cGUgfSk7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDhBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfRkxPQVQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUNjRBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua293biB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufVxuXG52YXIgbG9jYWxmb3JhZ2VTZXJpYWxpemVyID0ge1xuICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZSxcbiAgICBzdHJpbmdUb0J1ZmZlcjogc3RyaW5nVG9CdWZmZXIsXG4gICAgYnVmZmVyVG9TdHJpbmc6IGJ1ZmZlclRvU3RyaW5nXG59O1xuXG4vKlxuICogSW5jbHVkZXMgY29kZSBmcm9tOlxuICpcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoJ0NSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyAnICsgJyhpZCBJTlRFR0VSIFBSSU1BUlkgS0VZLCBrZXkgdW5pcXVlLCB2YWx1ZSknLCBbXSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xufVxuXG4vLyBPcGVuIHRoZSBXZWJTUUwgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlJDEob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge1xuICAgICAgICBkYjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IHR5cGVvZiBvcHRpb25zW2ldICE9PSAnc3RyaW5nJyA/IG9wdGlvbnNbaV0udG9TdHJpbmcoKSA6IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGJJbmZvUHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBPcGVuIHRoZSBkYXRhYmFzZTsgdGhlIG9wZW5EYXRhYmFzZSBBUEkgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIGNyZWF0ZSBpdCBmb3IgdXMgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiSW5mby5kYiA9IG9wZW5EYXRhYmFzZShkYkluZm8ubmFtZSwgU3RyaW5nKGRiSW5mby52ZXJzaW9uKSwgZGJJbmZvLmRlc2NyaXB0aW9uLCBkYkluZm8uc2l6ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgb3VyIGtleS92YWx1ZSB0YWJsZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGRiSW5mby5zZXJpYWxpemVyID0gbG9jYWxmb3JhZ2VTZXJpYWxpemVyO1xuICAgIHJldHVybiBkYkluZm9Qcm9taXNlO1xufVxuXG5mdW5jdGlvbiB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHQuZXhlY3V0ZVNxbChzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IGVycm9yLlNZTlRBWF9FUlIpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA9ID9cIiwgW2RiSW5mby5zdG9yZU5hbWVdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0cy5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGFibGUgaXMgbWlzc2luZyAod2FzIGRlbGV0ZWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlLWNyZWF0ZSBpdCB0YWJsZSBhbmQgcmV0cnlcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrKHQsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sIGVycm9yQ2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPyBMSU1JVCAxJywgW2tleV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MubGVuZ3RoID8gcmVzdWx0cy5yb3dzLml0ZW0oMCkudmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudCB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlJDEoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcblxuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSByb3dzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gdW5wYWNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgaXRlbS5rZXksIGkgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm9pZCgwKSBwcmV2ZW50cyBwcm9ibGVtcyB3aXRoIHJlZGVmaW5pdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgYHVuZGVmaW5lZGAuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrLCByZXRyaWVzTGVmdCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhlIGxvY2FsU3RvcmFnZSBBUEkgZG9lc24ndCByZXR1cm4gdW5kZWZpbmVkIHZhbHVlcyBpbiBhblxuICAgICAgICAgICAgLy8gXCJleHBlY3RlZFwiIHdheSwgc28gdW5kZWZpbmVkIGlzIGFsd2F5cyBjYXN0IHRvIG51bGwgaW4gYWxsXG4gICAgICAgICAgICAvLyBkcml2ZXJzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoa2V5LCB2YWx1ZSkgVkFMVUVTICg/LCA/KScsIFtrZXksIHZhbHVlXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3JpZ2luYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRyYW5zYWN0aW9uIGZhaWxlZDsgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHNlZSBpZiBpdCdzIGEgcXVvdGEgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3FsRXJyb3IuY29kZSA9PT0gc3FsRXJyb3IuUVVPVEFfRVJSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgcmVqZWN0IHRoZSBjYWxsYmFjayBvdXRyaWdodCBmb3Igbm93LCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdvcnRoIHRyeWluZyB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHVzZXIgYWNjZXB0cyB0aGUgcHJvbXB0IHRvIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgc3RvcmFnZSBvbiBTYWZhcmksIHRoaXMgZXJyb3Igd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWVzTGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfc2V0SXRlbS5hcHBseShzZWxmLCBba2V5LCBvcmlnaW5hbFZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQgLSAxXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtJDEoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gX3NldEl0ZW0uYXBwbHkodGhpcywgW2tleSwgdmFsdWUsIGNhbGxiYWNrLCAxXSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0kMShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPycsIFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEZWxldGVzIGV2ZXJ5IGl0ZW0gaW4gdGhlIHRhYmxlLlxuLy8gVE9ETzogRmluZCBvdXQgaWYgdGhpcyByZXNldHMgdGhlIEFVVE9fSU5DUkVNRU5UIG51bWJlci5cbmZ1bmN0aW9uIGNsZWFyJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIERvZXMgYSBzaW1wbGUgYENPVU5UKGtleSlgIHRvIGdldCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHN0b3JlZCBpblxuLy8gbG9jYWxGb3JhZ2UuXG5mdW5jdGlvbiBsZW5ndGgkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAvLyBBaGhoLCBTUUwgbWFrZXMgdGhpcyBvbmUgc29vb29vbyBlYXN5LlxuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIENPVU5UKGtleSkgYXMgYyBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5pdGVtKDApLmM7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZXR1cm4gdGhlIGtleSBsb2NhdGVkIGF0IGtleSBpbmRleCBYOyBlc3NlbnRpYWxseSBnZXRzIHRoZSBrZXkgZnJvbSBhXG4vLyBgV0hFUkUgaWQgPSA/YC4gVGhpcyBpcyB0aGUgbW9zdCBlZmZpY2llbnQgd2F5IEkgY2FuIHRoaW5rIHRvIGltcGxlbWVudFxuLy8gdGhpcyByYXJlbHktdXNlZCAoaW4gbXkgZXhwZXJpZW5jZSkgcGFydCBvZiB0aGUgQVBJLCBidXQgaXQgY2FuIHNlZW1cbi8vIGluY29uc2lzdGVudCwgYmVjYXVzZSB3ZSBkbyBgSU5TRVJUIE9SIFJFUExBQ0UgSU5UT2Agb24gYHNldEl0ZW0oKWAsIHNvXG4vLyB0aGUgSUQgb2YgZWFjaCBrZXkgd2lsbCBjaGFuZ2UgZXZlcnkgdGltZSBpdCdzIHVwZGF0ZWQuIFBlcmhhcHMgYSBzdG9yZWRcbi8vIHByb2NlZHVyZSBmb3IgdGhlIGBzZXRJdGVtKClgIFNRTCB3b3VsZCBzb2x2ZSB0aGlzIHByb2JsZW0/XG4vLyBUT0RPOiBEb24ndCBjaGFuZ2UgSUQgb24gYHNldEl0ZW0oKWAuXG5mdW5jdGlvbiBrZXkkMShuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUgaWQgPSA/IExJTUlUIDEnLCBbbiArIDFdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLmtleSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2gocmVzdWx0cy5yb3dzLml0ZW0oaSkua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5cyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dlYmRhdGFiYXNlLyNkYXRhYmFzZXNcbi8vID4gVGhlcmUgaXMgbm8gd2F5IHRvIGVudW1lcmF0ZSBvciBkZWxldGUgdGhlIGRhdGFiYXNlcyBhdmFpbGFibGUgZm9yIGFuIG9yaWdpbiBmcm9tIHRoaXMgQVBJLlxuZnVuY3Rpb24gZ2V0QWxsU3RvcmVOYW1lcyhkYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA8PiAnX19XZWJLaXREYXRhYmFzZUluZm9UYWJsZV9fJ1wiLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVOYW1lcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lcy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXM6IHN0b3JlTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlJDEob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBkYjtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm5hbWUgPT09IGN1cnJlbnRDb25maWcubmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgZGIgcmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAgICAgICAgZGIgPSBzZWxmLl9kYkluZm8uZGI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRiID0gb3BlbkRhdGFiYXNlKG9wdGlvbnMubmFtZSwgJycsICcnLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIGRyb3AgYWxsIGRhdGFiYXNlIHRhYmxlc1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2V0QWxsU3RvcmVOYW1lcyhkYikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBbb3B0aW9ucy5zdG9yZU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKG9wZXJhdGlvbkluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyb3BUYWJsZShzdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ0RST1AgVEFCTEUgSUYgRVhJU1RTICcgKyBzdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9wZXJhdGlvbkluZm8uc3RvcmVOYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9ucy5wdXNoKGRyb3BUYWJsZShvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UkMS5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIHdlYlNRTFN0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ3dlYlNRTFN0b3JhZ2UnLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDEsXG4gICAgX3N1cHBvcnQ6IGlzV2ViU1FMVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlJDEsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSQxLFxuICAgIHNldEl0ZW06IHNldEl0ZW0kMSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDEsXG4gICAgY2xlYXI6IGNsZWFyJDEsXG4gICAgbGVuZ3RoOiBsZW5ndGgkMSxcbiAgICBrZXk6IGtleSQxLFxuICAgIGtleXM6IGtleXMkMSxcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZSQxXG59O1xuXG5mdW5jdGlvbiBpc0xvY2FsU3RvcmFnZVZhbGlkKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiAnc2V0SXRlbScgaW4gbG9jYWxTdG9yYWdlICYmXG4gICAgICAgIC8vIGluIElFOCB0eXBlb2YgbG9jYWxTdG9yYWdlLnNldEl0ZW0gPT09ICdvYmplY3QnXG4gICAgICAgICEhbG9jYWxTdG9yYWdlLnNldEl0ZW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIGRlZmF1bHRDb25maWcpIHtcbiAgICB2YXIga2V5UHJlZml4ID0gb3B0aW9ucy5uYW1lICsgJy8nO1xuXG4gICAgaWYgKG9wdGlvbnMuc3RvcmVOYW1lICE9PSBkZWZhdWx0Q29uZmlnLnN0b3JlTmFtZSkge1xuICAgICAgICBrZXlQcmVmaXggKz0gb3B0aW9ucy5zdG9yZU5hbWUgKyAnLyc7XG4gICAgfVxuICAgIHJldHVybiBrZXlQcmVmaXg7XG59XG5cbi8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSB0aHJvd3Mgd2hlbiBzYXZpbmcgYW4gaXRlbVxuZnVuY3Rpb24gY2hlY2tJZkxvY2FsU3RvcmFnZVRocm93cygpIHtcbiAgICB2YXIgbG9jYWxTdG9yYWdlVGVzdEtleSA9ICdfbG9jYWxmb3JhZ2Vfc3VwcG9ydF90ZXN0JztcblxuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXksIHRydWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyB1c2FibGUgYW5kIGFsbG93cyB0byBzYXZlIGFuIGl0ZW1cbi8vIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGluIFNhZmFyaSBQcml2YXRlIEJyb3dzaW5nXG4vLyBtb2RlLCBvciBpbiBhbnkgb3RoZXIgY2FzZSB3aGVyZSB0aGUgYXZhaWxhYmxlIHF1b3RhIGZvciBsb2NhbFN0b3JhZ2Vcbi8vIGlzIDAgYW5kIHRoZXJlIHdhc24ndCBhbnkgc2F2ZWQgaXRlbXMgeWV0LlxuZnVuY3Rpb24gX2lzTG9jYWxTdG9yYWdlVXNhYmxlKCkge1xuICAgIHJldHVybiAhY2hlY2tJZkxvY2FsU3RvcmFnZVRocm93cygpIHx8IGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwO1xufVxuXG4vLyBDb25maWcgdGhlIGxvY2FsU3RvcmFnZSBiYWNrZW5kLCB1c2luZyBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlJDIob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge307XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGJJbmZvLmtleVByZWZpeCA9IF9nZXRLZXlQcmVmaXgob3B0aW9ucywgc2VsZi5fZGVmYXVsdENvbmZpZyk7XG5cbiAgICBpZiAoIV9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJDEucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgIGRiSW5mby5zZXJpYWxpemVyID0gbG9jYWxmb3JhZ2VTZXJpYWxpemVyO1xuXG4gICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG59XG5cbi8vIFJlbW92ZSBhbGwga2V5cyBmcm9tIHRoZSBkYXRhc3RvcmUsIGVmZmVjdGl2ZWx5IGRlc3Ryb3lpbmcgYWxsIGRhdGEgaW5cbi8vIHRoZSBhcHAncyBrZXkvdmFsdWUgc3RvcmUhXG5mdW5jdGlvbiBjbGVhciQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gc2VsZi5fZGJJbmZvLmtleVByZWZpeDtcblxuICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZXRyaWV2ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLiBVbmxpa2UgdGhlIG9yaWdpbmFsIGFzeW5jX3N0b3JhZ2Vcbi8vIGxpYnJhcnkgaW4gR2FpYSwgd2UgZG9uJ3QgbW9kaWZ5IHJldHVybiB2YWx1ZXMgYXQgYWxsLiBJZiBhIGtleSdzIHZhbHVlXG4vLyBpcyBgdW5kZWZpbmVkYCwgd2UgcGFzcyB0aGF0IHZhbHVlIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbmZ1bmN0aW9uIGdldEl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuXG4gICAgICAgIC8vIElmIGEgcmVzdWx0IHdhcyBmb3VuZCwgcGFyc2UgaXQgZnJvbSB0aGUgc2VyaWFsaXplZFxuICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlIGtleVxuICAgICAgICAvLyBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0IHRvIHRoZVxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIGluIHRoZSBzdG9yZS5cbmZ1bmN0aW9uIGl0ZXJhdGUkMihpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGRiSW5mby5rZXlQcmVmaXg7XG4gICAgICAgIHZhciBrZXlQcmVmaXhMZW5ndGggPSBrZXlQcmVmaXgubGVuZ3RoO1xuICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcblxuICAgICAgICAvLyBXZSB1c2UgYSBkZWRpY2F0ZWQgaXRlcmF0b3IgaW5zdGVhZCBvZiB0aGUgYGlgIHZhcmlhYmxlIGJlbG93XG4gICAgICAgIC8vIHNvIG90aGVyIGtleXMgd2UgZmV0Y2ggaW4gbG9jYWxTdG9yYWdlIGFyZW4ndCBjb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBgaXRlcmF0aW9uTnVtYmVyYCBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGBpdGVyYXRlKClgXG4gICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICAvL1xuICAgICAgICAvLyBTZWU6IGdpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQzNSNkaXNjdXNzaW9uX3IzODA2MTUzMFxuICAgICAgICB2YXIgaXRlcmF0aW9uTnVtYmVyID0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgICAgIC8vIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0LiBJZiByZXN1bHQgaXNuJ3QgdHJ1dGh5LCB0aGVcbiAgICAgICAgICAgIC8vIGtleSBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0XG4gICAgICAgICAgICAvLyB0byB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPSBpdGVyYXRvcih2YWx1ZSwga2V5LnN1YnN0cmluZyhrZXlQcmVmaXhMZW5ndGgpLCBpdGVyYXRpb25OdW1iZXIrKyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTYW1lIGFzIGxvY2FsU3RvcmFnZSdzIGtleSgpIG1ldGhvZCwgZXhjZXB0IHRha2VzIGEgY2FsbGJhY2suXG5mdW5jdGlvbiBrZXkkMihuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5rZXkobik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcmVmaXggZnJvbSB0aGUga2V5LCBpZiBhIGtleSBpcyBmb3VuZC5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoaXRlbUtleS5pbmRleE9mKGRiSW5mby5rZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGl0ZW1LZXkuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFN1cHBseSB0aGUgbnVtYmVyIG9mIGtleXMgaW4gdGhlIGRhdGFzdG9yZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBsZW5ndGgkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgc3RvcmUsIG5pY2UgYW5kIHNpbXBsZS5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTZXQgYSBrZXkncyB2YWx1ZSBhbmQgcnVuIGFuIG9wdGlvbmFsIGNhbGxiYWNrIG9uY2UgdGhlIHZhbHVlIGlzIHNldC5cbi8vIFVubGlrZSBHYWlhJ3MgaW1wbGVtZW50YXRpb24sIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIHZhbHVlLFxuLy8gaW4gY2FzZSB5b3Ugd2FudCB0byBvcGVyYXRlIG9uIHRoYXQgdmFsdWUgb25seSBhZnRlciB5b3UncmUgc3VyZSBpdFxuLy8gc2F2ZWQsIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQuXG5mdW5jdGlvbiBzZXRJdGVtJDIoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDb252ZXJ0IHVuZGVmaW5lZCB2YWx1ZXMgdG8gbnVsbC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5zZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UgY2FwYWNpdHkgZXhjZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBzcGVjaWZpYyBlcnJvci9ldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8IGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQyKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucy5uYW1lICsgJy8nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoa2V5UHJlZml4KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIGxvY2FsU3RvcmFnZVdyYXBwZXIgPSB7XG4gICAgX2RyaXZlcjogJ2xvY2FsU3RvcmFnZVdyYXBwZXInLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDIsXG4gICAgX3N1cHBvcnQ6IGlzTG9jYWxTdG9yYWdlVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlJDIsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSQyLFxuICAgIHNldEl0ZW06IHNldEl0ZW0kMixcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDIsXG4gICAgY2xlYXI6IGNsZWFyJDIsXG4gICAgbGVuZ3RoOiBsZW5ndGgkMixcbiAgICBrZXk6IGtleSQyLFxuICAgIGtleXM6IGtleXMkMixcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZSQyXG59O1xuXG52YXIgc2FtZVZhbHVlID0gZnVuY3Rpb24gc2FtZVZhbHVlKHgsIHkpIHtcbiAgICByZXR1cm4geCA9PT0geSB8fCB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICYmIGlzTmFOKHgpICYmIGlzTmFOKHkpO1xufTtcblxudmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHNlYXJjaEVsZW1lbnQpIHtcbiAgICB2YXIgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBpZiAoc2FtZVZhbHVlKGFycmF5W2ldLCBzZWFyY2hFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLy8gRHJpdmVycyBhcmUgc3RvcmVkIGhlcmUgd2hlbiBgZGVmaW5lRHJpdmVyKClgIGlzIGNhbGxlZC5cbi8vIFRoZXkgYXJlIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZiBsb2NhbEZvcmFnZS5cbnZhciBEZWZpbmVkRHJpdmVycyA9IHt9O1xuXG52YXIgRHJpdmVyU3VwcG9ydCA9IHt9O1xuXG52YXIgRGVmYXVsdERyaXZlcnMgPSB7XG4gICAgSU5ERVhFRERCOiBhc3luY1N0b3JhZ2UsXG4gICAgV0VCU1FMOiB3ZWJTUUxTdG9yYWdlLFxuICAgIExPQ0FMU1RPUkFHRTogbG9jYWxTdG9yYWdlV3JhcHBlclxufTtcblxudmFyIERlZmF1bHREcml2ZXJPcmRlciA9IFtEZWZhdWx0RHJpdmVycy5JTkRFWEVEREIuX2RyaXZlciwgRGVmYXVsdERyaXZlcnMuV0VCU1FMLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLkxPQ0FMU1RPUkFHRS5fZHJpdmVyXTtcblxudmFyIE9wdGlvbmFsRHJpdmVyTWV0aG9kcyA9IFsnZHJvcEluc3RhbmNlJ107XG5cbnZhciBMaWJyYXJ5TWV0aG9kcyA9IFsnY2xlYXInLCAnZ2V0SXRlbScsICdpdGVyYXRlJywgJ2tleScsICdrZXlzJywgJ2xlbmd0aCcsICdyZW1vdmVJdGVtJywgJ3NldEl0ZW0nXS5jb25jYXQoT3B0aW9uYWxEcml2ZXJNZXRob2RzKTtcblxudmFyIERlZmF1bHRDb25maWcgPSB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGRyaXZlcjogRGVmYXVsdERyaXZlck9yZGVyLnNsaWNlKCksXG4gICAgbmFtZTogJ2xvY2FsZm9yYWdlJyxcbiAgICAvLyBEZWZhdWx0IERCIHNpemUgaXMgX0pVU1QgVU5ERVJfIDVNQiwgYXMgaXQncyB0aGUgaGlnaGVzdCBzaXplXG4gICAgLy8gd2UgY2FuIHVzZSB3aXRob3V0IGEgcHJvbXB0LlxuICAgIHNpemU6IDQ5ODA3MzYsXG4gICAgc3RvcmVOYW1lOiAna2V5dmFsdWVwYWlycycsXG4gICAgdmVyc2lvbjogMS4wXG59O1xuXG5mdW5jdGlvbiBjYWxsV2hlblJlYWR5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIGxpYnJhcnlNZXRob2QpIHtcbiAgICBsb2NhbEZvcmFnZUluc3RhbmNlW2xpYnJhcnlNZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBsb2NhbEZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXS5hcHBseShsb2NhbEZvcmFnZUluc3RhbmNlLCBfYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGlmIChhcmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9rZXkgaW4gYXJnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShhcmdbX2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV0uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtfa2V5XSA9IGFyZ1tfa2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG59XG5cbnZhciBMb2NhbEZvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2NhbEZvcmFnZShvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbEZvcmFnZSk7XG5cbiAgICAgICAgZm9yICh2YXIgZHJpdmVyVHlwZUtleSBpbiBEZWZhdWx0RHJpdmVycykge1xuICAgICAgICAgICAgaWYgKERlZmF1bHREcml2ZXJzLmhhc093blByb3BlcnR5KGRyaXZlclR5cGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlciA9IERlZmF1bHREcml2ZXJzW2RyaXZlclR5cGVLZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdGhpc1tkcml2ZXJUeXBlS2V5XSA9IGRyaXZlck5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIURlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IGRyaXZlcnMgY2FuIGJlIGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gYSBibG9ja2luZyBtYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVEcml2ZXIoZHJpdmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0gZXh0ZW5kKHt9LCBEZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gZXh0ZW5kKHt9LCB0aGlzLl9kZWZhdWx0Q29uZmlnLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdERyaXZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RiSW5mbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCk7XG4gICAgICAgIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgIH1cblxuICAgIC8vIFNldCBhbnkgY29uZmlnIHZhbHVlcyBmb3IgbG9jYWxGb3JhZ2U7IGNhbiBiZSBjYWxsZWQgYW55dGltZSBiZWZvcmVcbiAgICAvLyB0aGUgZmlyc3QgQVBJIGNhbGwgKGUuZy4gYGdldEl0ZW1gLCBgc2V0SXRlbWApLlxuICAgIC8vIFdlIGxvb3AgdGhyb3VnaCBvcHRpb25zIHNvIHdlIGRvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBjb25maWdcbiAgICAvLyB2YWx1ZXMuXG5cblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jb25maWcgPSBmdW5jdGlvbiBjb25maWcob3B0aW9ucykge1xuICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBhcmd1bWVudCBpcyBhbiBvYmplY3QsIHdlIHVzZSBpdCB0byBzZXQgdmFsdWVzLlxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIHJldHVybiBlaXRoZXIgYSBzcGVjaWZpZWQgY29uZmlnIHZhbHVlIG9yIGFsbFxuICAgICAgICAvLyBjb25maWcgdmFsdWVzLlxuICAgICAgICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBJZiBsb2NhbGZvcmFnZSBpcyByZWFkeSBhbmQgZnVsbHkgaW5pdGlhbGl6ZWQsIHdlIGNhbid0IHNldFxuICAgICAgICAgICAgLy8gYW55IG5ldyBjb25maWd1cmF0aW9uIHZhbHVlcy4gSW5zdGVhZCwgd2UgcmV0dXJuIGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkNhbid0IGNhbGwgY29uZmlnKCkgYWZ0ZXIgbG9jYWxmb3JhZ2UgXCIgKyAnaGFzIGJlZW4gdXNlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09ICdzdG9yZU5hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbaV0gPSBvcHRpb25zW2ldLnJlcGxhY2UoL1xcVy9nLCAnXycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpID09PSAndmVyc2lvbicgJiYgdHlwZW9mIG9wdGlvbnNbaV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0RhdGFiYXNlIHZlcnNpb24gbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZnRlciBhbGwgY29uZmlnIG9wdGlvbnMgYXJlIHNldCBhbmRcbiAgICAgICAgICAgIC8vIHRoZSBkcml2ZXIgb3B0aW9uIGlzIHVzZWQsIHRyeSBzZXR0aW5nIGl0XG4gICAgICAgICAgICBpZiAoJ2RyaXZlcicgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmRyaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnW29wdGlvbnNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVc2VkIHRvIGRlZmluZSBhIGN1c3RvbSBkcml2ZXIsIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZlxuICAgIC8vIGxvY2FsRm9yYWdlLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZGVmaW5lRHJpdmVyID0gZnVuY3Rpb24gZGVmaW5lRHJpdmVyKGRyaXZlck9iamVjdCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXJPYmplY3QuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxpYW5jZUVycm9yID0gbmV3IEVycm9yKCdDdXN0b20gZHJpdmVyIG5vdCBjb21wbGlhbnQ7IHNlZSAnICsgJ2h0dHBzOi8vbW96aWxsYS5naXRodWIuaW8vbG9jYWxGb3JhZ2UvI2RlZmluZWRyaXZlcicpO1xuXG4gICAgICAgICAgICAgICAgLy8gQSBkcml2ZXIgbmFtZSBzaG91bGQgYmUgZGVmaW5lZCBhbmQgbm90IG92ZXJsYXAgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyBsaWJyYXJ5LWRlZmluZWQsIGRlZmF1bHQgZHJpdmVycy5cbiAgICAgICAgICAgICAgICBpZiAoIWRyaXZlck9iamVjdC5fZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChjb21wbGlhbmNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck1ldGhvZHMgPSBMaWJyYXJ5TWV0aG9kcy5jb25jYXQoJ19pbml0U3RvcmFnZScpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2ROYW1lID0gZHJpdmVyTWV0aG9kc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyB0aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGEgbWV0aG9kIGV2ZW4gd2hlbiBvcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZXF1aXJlZCA9ICFpbmNsdWRlcyhPcHRpb25hbERyaXZlck1ldGhvZHMsIGRyaXZlck1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGlzUmVxdWlyZWQgfHwgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdKSAmJiB0eXBlb2YgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjb25maWd1cmVNaXNzaW5nTWV0aG9kcyA9IGZ1bmN0aW9uIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5ID0gZnVuY3Rpb24gbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5KG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdNZXRob2QgJyArIG1ldGhvZE5hbWUgKyAnIGlzIG5vdCBpbXBsZW1lbnRlZCBieSB0aGUgY3VycmVudCBkcml2ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxEcml2ZXJNZXRob2QgPSBPcHRpb25hbERyaXZlck1ldGhvZHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3Rbb3B0aW9uYWxEcml2ZXJNZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSA9IG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShvcHRpb25hbERyaXZlck1ldGhvZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uZmlndXJlTWlzc2luZ01ldGhvZHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXREcml2ZXJTdXBwb3J0ID0gZnVuY3Rpb24gc2V0RHJpdmVyU3VwcG9ydChzdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdSZWRlZmluaW5nIExvY2FsRm9yYWdlIGRyaXZlcjogJyArIGRyaXZlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID0gZHJpdmVyT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICBEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdID0gc3VwcG9ydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgdXNlIGEgdGhlbiwgc28gdGhhdCB3ZSBjYW4gZGVmaW5lXG4gICAgICAgICAgICAgICAgICAgIC8vIGRyaXZlcnMgdGhhdCBoYXZlIHNpbXBsZSBfc3VwcG9ydCBtZXRob2RzXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCdfc3VwcG9ydCcgaW4gZHJpdmVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcml2ZXJPYmplY3QuX3N1cHBvcnQgJiYgdHlwZW9mIGRyaXZlck9iamVjdC5fc3VwcG9ydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KCkudGhlbihzZXREcml2ZXJTdXBwb3J0LCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCghIWRyaXZlck9iamVjdC5fc3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJTdXBwb3J0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRyaXZlciA9IGZ1bmN0aW9uIGRyaXZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlciB8fCBudWxsO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0RHJpdmVyID0gZnVuY3Rpb24gZ2V0RHJpdmVyKGRyaXZlck5hbWUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBnZXREcml2ZXJQcm9taXNlID0gRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0gPyBQcm9taXNlJDEucmVzb2x2ZShEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkgOiBQcm9taXNlJDEucmVqZWN0KG5ldyBFcnJvcignRHJpdmVyIG5vdCBmb3VuZC4nKSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhnZXREcml2ZXJQcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBnZXREcml2ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0U2VyaWFsaXplciA9IGZ1bmN0aW9uIGdldFNlcmlhbGl6ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZXJQcm9taXNlID0gUHJvbWlzZSQxLnJlc29sdmUobG9jYWxmb3JhZ2VTZXJpYWxpemVyKTtcbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhzZXJpYWxpemVyUHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplclByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHNlbGYuX2RyaXZlclNldC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9yZWFkeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gc2VsZi5faW5pdERyaXZlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zZXREcml2ZXIgPSBmdW5jdGlvbiBzZXREcml2ZXIoZHJpdmVycywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaXNBcnJheShkcml2ZXJzKSkge1xuICAgICAgICAgICAgZHJpdmVycyA9IFtkcml2ZXJzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gdGhpcy5fZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXREcml2ZXJUb0NvbmZpZygpIHtcbiAgICAgICAgICAgIHNlbGYuX2NvbmZpZy5kcml2ZXIgPSBzZWxmLmRyaXZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kU2VsZldpdGhEcml2ZXIoZHJpdmVyKSB7XG4gICAgICAgICAgICBzZWxmLl9leHRlbmQoZHJpdmVyKTtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG5cbiAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gc2VsZi5faW5pdFN0b3JhZ2Uoc2VsZi5fY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9yZWFkeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudERyaXZlckluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyaXZlclByb21pc2VMb29wKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudERyaXZlckluZGV4IDwgc3VwcG9ydGVkRHJpdmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1tjdXJyZW50RHJpdmVySW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyaXZlckluZGV4Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERyaXZlcihkcml2ZXJOYW1lKS50aGVuKGV4dGVuZFNlbGZXaXRoRHJpdmVyKVtcImNhdGNoXCJdKGRyaXZlclByb21pc2VMb29wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIHN0b3JhZ2UgbWV0aG9kIGZvdW5kLicpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9kcml2ZXJTZXQgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJpdmVyUHJvbWlzZUxvb3AoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGVyZSBtaWdodCBiZSBhIGRyaXZlciBpbml0aWFsaXphdGlvbiBpbiBwcm9ncmVzc1xuICAgICAgICAvLyBzbyB3YWl0IGZvciBpdCB0byBmaW5pc2ggaW4gb3JkZXIgdG8gYXZvaWQgYSBwb3NzaWJsZVxuICAgICAgICAvLyByYWNlIGNvbmRpdGlvbiB0byBzZXQgX2RiSW5mb1xuICAgICAgICB2YXIgb2xkRHJpdmVyU2V0RG9uZSA9IHRoaXMuX2RyaXZlclNldCAhPT0gbnVsbCA/IHRoaXMuX2RyaXZlclNldFtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuICAgICAgICB9KSA6IFByb21pc2UkMS5yZXNvbHZlKCk7XG5cbiAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gb2xkRHJpdmVyU2V0RG9uZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1swXTtcbiAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERyaXZlcihkcml2ZXJOYW1lKS50aGVuKGZ1bmN0aW9uIChkcml2ZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9kcml2ZXIgPSBkcml2ZXIuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgIHNlbGYuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuX2luaXREcml2ZXIgPSBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIHN0b3JhZ2UgbWV0aG9kIGZvdW5kLicpO1xuICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fZHJpdmVyU2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHRoaXMuX2RyaXZlclNldCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJpdmVyU2V0O1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc3VwcG9ydHMgPSBmdW5jdGlvbiBzdXBwb3J0cyhkcml2ZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiAhIURyaXZlclN1cHBvcnRbZHJpdmVyTmFtZV07XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZXh0ZW5kID0gZnVuY3Rpb24gX2V4dGVuZChsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIGxpYnJhcnlNZXRob2RzQW5kUHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZ2V0U3VwcG9ydGVkRHJpdmVycyA9IGZ1bmN0aW9uIF9nZXRTdXBwb3J0ZWREcml2ZXJzKGRyaXZlcnMpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRlZERyaXZlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRyaXZlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyc1tpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzKGRyaXZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkRHJpdmVycy5wdXNoKGRyaXZlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWREcml2ZXJzO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSA9IGZ1bmN0aW9uIF93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKSB7XG4gICAgICAgIC8vIEFkZCBhIHN0dWIgZm9yIGVhY2ggZHJpdmVyIEFQSSBtZXRob2QgdGhhdCBkZWxheXMgdGhlIGNhbGwgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgZHJpdmVyIG1ldGhvZCB1bnRpbCBsb2NhbEZvcmFnZSBpcyByZWFkeS4gVGhlc2Ugc3R1YnNcbiAgICAgICAgLy8gd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZHJpdmVyIG1ldGhvZHMgYXMgc29vbiBhcyB0aGUgZHJpdmVyIGlzXG4gICAgICAgIC8vIGxvYWRlZCwgc28gdGhlcmUgaXMgbm8gcGVyZm9ybWFuY2UgaW1wYWN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gTGlicmFyeU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxXaGVuUmVhZHkodGhpcywgTGlicmFyeU1ldGhvZHNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhbEZvcmFnZShvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvY2FsRm9yYWdlO1xufSgpO1xuXG4vLyBUaGUgYWN0dWFsIGxvY2FsRm9yYWdlIG9iamVjdCB0aGF0IHdlIGV4cG9zZSBhcyBhIG1vZHVsZSBvciB2aWEgYVxuLy8gZ2xvYmFsLiBJdCdzIGV4dGVuZGVkIGJ5IHB1bGxpbmcgaW4gb25lIG9mIG91ciBvdGhlciBsaWJyYXJpZXMuXG5cblxudmFyIGxvY2FsZm9yYWdlX2pzID0gbmV3IExvY2FsRm9yYWdlKCk7XG5sb2NhbGZvcmFnZSA9IGxvY2FsZm9yYWdlX2pzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2FsZm9yYWdlX2pzO1xuXG59LHtcIjNcIjozfV19LHt9LFs0XSkoNClcbn0pO1xuIiwiaW1wb3J0IHsgbG9jYWxmb3JhZ2UgfSBmcm9tICcuL2xvY2FsZm9yYWdlLmVzNi5qcyc7XG5cbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZXJQcm9taXNlKGxvY2FsRm9yYWdlSW5zdGFuY2UpIHtcbiAgICBpZiAoZ2V0U2VyaWFsaXplclByb21pc2UucmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXJpYWxpemVyUHJvbWlzZS5yZXN1bHQ7XG4gICAgfVxuICAgIGlmICghbG9jYWxGb3JhZ2VJbnN0YW5jZSB8fCB0eXBlb2YgbG9jYWxGb3JhZ2VJbnN0YW5jZS5nZXRTZXJpYWxpemVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2xvY2FsZm9yYWdlLmdldFNlcmlhbGl6ZXIoKSB3YXMgbm90IGF2YWlsYWJsZSEgJyArICdsb2NhbGZvcmFnZSB2MS40KyBpcyByZXF1aXJlZCEnKSk7XG4gICAgfVxuICAgIGdldFNlcmlhbGl6ZXJQcm9taXNlLnJlc3VsdCA9IGxvY2FsRm9yYWdlSW5zdGFuY2UuZ2V0U2VyaWFsaXplcigpO1xuICAgIHJldHVybiBnZXRTZXJpYWxpemVyUHJvbWlzZS5yZXN1bHQ7XG59XG5cblxuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1LZXlWYWx1ZShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5nZXRJdGVtKGtleSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0SURCS2V5UmFuZ2UoKSB7XG4gICAgLyogZ2xvYmFsIElEQktleVJhbmdlLCB3ZWJraXRJREJLZXlSYW5nZSwgbW96SURCS2V5UmFuZ2UgKi9cbiAgICBpZiAodHlwZW9mIElEQktleVJhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gSURCS2V5UmFuZ2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2Via2l0SURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3ZWJraXRJREJLZXlSYW5nZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtb3pJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG1veklEQktleVJhbmdlO1xuICAgIH1cbn1cblxudmFyIGlkYktleVJhbmdlID0gZ2V0SURCS2V5UmFuZ2UoKTtcblxuZnVuY3Rpb24gc3RhcnRzV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGFua3MgaHR0cHM6Ly9oYWNrcy5tb3ppbGxhLm9yZy8yMDE0LzA2L2JyZWFraW5nLXRoZS1ib3JkZXJzLW9mLWluZGV4ZWRkYi9cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBsb2NhbGZvcmFnZUluc3RhbmNlLl9kYkluZm87XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBkYkluZm8uZGIudHJhbnNhY3Rpb24oZGJJbmZvLnN0b3JlTmFtZSwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBrZXlSYW5nZVZhbHVlID0gaWRiS2V5UmFuZ2UuYm91bmQocHJlZml4LCBwcmVmaXggKyAndWZmZmYnLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbkN1cnNvcihrZXlSYW5nZVZhbHVlKTtcbiAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7IC8vIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtjdXJzb3Iua2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5c1N0YXJ0aW5nV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGFua3MgaHR0cHM6Ly9oYWNrcy5tb3ppbGxhLm9yZy8yMDE0LzA2L2JyZWFraW5nLXRoZS1ib3JkZXJzLW9mLWluZGV4ZWRkYi9cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBsb2NhbGZvcmFnZUluc3RhbmNlLl9kYkluZm87XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBkYkluZm8uZGIudHJhbnNhY3Rpb24oZGJJbmZvLnN0b3JlTmFtZSwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBrZXlSYW5nZVZhbHVlID0gaWRiS2V5UmFuZ2UuYm91bmQocHJlZml4LCBwcmVmaXggKyAndWZmZmYnLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmUuZ2V0QWxsS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5nZXRBbGxLZXlzKGtleVJhbmdlVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlcSA9IHN0b3JlLm9wZW5DdXJzb3Ioa2V5UmFuZ2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgX3JlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSBfcmVxLnJlc3VsdDsgLy8gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJzb3Iua2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgX3JlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoX3JlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzdGFydHNXaXRoJDEocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFNlcmlhbGl6ZXJQcm9taXNlKGxvY2FsZm9yYWdlSW5zdGFuY2UpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChzZXJpYWxpemVyKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSAoa2V5IExJS0UgPyknLCBbcHJlZml4ICsgJyUnXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3dzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudCB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbaXRlbS5rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzU3RhcnRpbmdXaXRoJDEocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSAoa2V5IExJS0UgPyknLCBbcHJlZml4ICsgJyUnXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3dzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRzV2l0aCQyKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2Uua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcblxuICAgICAgICAgICAgdmFyIGl0ZW1Qcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUHJvbWlzZXMucHVzaChnZXRJdGVtS2V5VmFsdWUuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKGl0ZW1Qcm9taXNlcykudGhlbihmdW5jdGlvbiAoa2V5VmFsdWVQYWlycykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5VmFsdWVQYWlycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5VmFsdWVQYWlyID0ga2V5VmFsdWVQYWlyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5VmFsdWVQYWlyLmtleV0gPSBrZXlWYWx1ZVBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5c1N0YXJ0aW5nV2l0aCQyKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2Uua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZm9yYWdlU3RhcnRzV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50RHJpdmVyID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5kcml2ZXIoKTtcblxuICAgIGlmIChjdXJyZW50RHJpdmVyID09PSBsb2NhbGZvcmFnZUluc3RhbmNlLklOREVYRUREQikge1xuICAgICAgICByZXR1cm4gc3RhcnRzV2l0aC5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERyaXZlciA9PT0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5XRUJTUUwpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGgkMS5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoJDIuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZm9yYWdlS2V5c1N0YXJ0aW5nV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50RHJpdmVyID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5kcml2ZXIoKTtcblxuICAgIGlmIChjdXJyZW50RHJpdmVyID09PSBsb2NhbGZvcmFnZUluc3RhbmNlLklOREVYRUREQikge1xuICAgICAgICByZXR1cm4ga2V5c1N0YXJ0aW5nV2l0aC5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERyaXZlciA9PT0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5XRUJTUUwpIHtcbiAgICAgICAgcmV0dXJuIGtleXNTdGFydGluZ1dpdGgkMS5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrZXlzU3RhcnRpbmdXaXRoJDIuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4dGVuZFByb3RvdHlwZShsb2NhbGZvcmFnZSQkMSkge1xuICAgIHZhciBsb2NhbGZvcmFnZVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihsb2NhbGZvcmFnZSQkMSk7XG4gICAgaWYgKGxvY2FsZm9yYWdlUHJvdG90eXBlKSB7XG4gICAgICAgIGxvY2FsZm9yYWdlUHJvdG90eXBlLnN0YXJ0c1dpdGggPSBsb2NhbGZvcmFnZVN0YXJ0c1dpdGg7XG4gICAgICAgIGxvY2FsZm9yYWdlUHJvdG90eXBlLmtleXNTdGFydGluZ1dpdGggPSBsb2NhbGZvcmFnZUtleXNTdGFydGluZ1dpdGg7XG4gICAgfVxufVxuXG52YXIgZXh0ZW5kUHJvdG90eXBlUmVzdWx0ID0gZXh0ZW5kUHJvdG90eXBlKGxvY2FsZm9yYWdlKTtcblxuZXhwb3J0IHsgbG9jYWxmb3JhZ2VTdGFydHNXaXRoLCBsb2NhbGZvcmFnZUtleXNTdGFydGluZ1dpdGgsIGV4dGVuZFByb3RvdHlwZSwgZXh0ZW5kUHJvdG90eXBlUmVzdWx0LCBzdGFydHNXaXRoJDIgYXMgc3RhcnRzV2l0aEdlbmVyaWMsIGtleXNTdGFydGluZ1dpdGgkMiBhcyBrZXlzU3RhcnRpbmdXaXRoR2VuZXJpYyB9O1xuZXhwb3J0IHsgbG9jYWxmb3JhZ2UgfVxuIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBjb252ZW5pZW50IHN0b3JhZ2UgYWJzdHJhY3Rpb25zLiBJbXBsZW1lbnRpbmcgc3RvcmFnZSBpblxuICogYSB1dGlsaXR5IG1vZHVsZSwgcmF0aGVyIHRoYW4gZGlyZWN0bHkgY2FsbGluZyBicm93c2VyIHN0b3JhZ2UgQVBJcywgYXZvaWRzIGNvZGVcbiAqIGR1cGxpY2F0aW9uIGFuZCBhbGxvd3MgdXMgdG8gc3dhcCBvdXQgdGhlIHVuZGVybHlpbmcgc3RvcmFnZSBpbXBsZW1lbnRhdGlvbiBpZlxuICogbmVlZGVkIChlLmcuLCBzd2l0Y2hpbmcgZnJvbSBsb2NhbGZvcmFnZSB0byBEZXhpZSwgb3IgZGlyZWN0bHkgdXNpbmcgYnJvd3NlclxuICogc3RvcmFnZSBBUElzKS5cbiAqXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2VcbiAqL1xuXG4vLyBDdXJyZW50bHkgaW1wbGVtZW50ZWQgd2l0aCBsb2NhbGZvcmFnZVxuaW1wb3J0IHsgbG9jYWxmb3JhZ2VLZXlzU3RhcnRpbmdXaXRoLCBsb2NhbGZvcmFnZSB9IGZyb20gXCIuLi9kZXBlbmRlbmNpZXMvbG9jYWxmb3JhZ2Utc3RhcnRzd2l0aC5qc1wiXG5cbmV4cG9ydCB2YXIgc3RvcmFnZUluc3RhbmNlcyA9IFtdO1xuLyoqXG4gKiBDbGFzcyBmb3IgYSBrZXktdmFsdWUgc3RvcmFnZSBhcmVhLCB3aGVyZSB0aGUga2V5IGlzIGEgc3RyaW5nIGFuZCB0aGUgdmFsdWUgY2FuIGhhdmVcbiAqIGFueSBvZiBhIG51bWJlciBvZiBiYXNpYyB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEtleVZhbHVlU3RvcmFnZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEga2V5LXZhbHVlIHN0b3JhZ2UgYXJlYS4gTm90ZSB0aGF0LCBiZWNhdXNlIGNyZWF0aW5nIGEgc3RvcmFnZSBhcmVhXG4gICAgICogcmVxdWlyZXMgYXN5bmNocm9ub3VzIGNhbGxzICh3aGljaCBjYW5ub3QgaGFwcGVuIGluIGEgY29uc3RydWN0b3IpLCB0aGVcbiAgICAgKiBzdG9yYWdlIGFyZWEgd2lsbCBub3QgYmUgc2V0dXAgdW50aWwgYSBzdWJzZXF1ZW50IGNhbGwgdG8gYGluaXRpYWxpemUoKWAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VBcmVhTmFtZSAtIEEgbmFtZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKiBAZXhhbXBsZSB2YXIgZXhhbXBsZVN0b3JhZ2UgPSBhd2FpdCAobmV3IEtleVZhbHVlU3RvcmFnZShcImV4YW1wbGVOYW1lXCIpKS5pbml0aWFsaXplKCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZUFyZWFOYW1lKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZUFyZWFOYW1lID0gc3RvcmFnZUFyZWFOYW1lO1xuICAgICAgICB0aGlzLnN0b3JhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGxldGUgY3JlYXRpb24gb2YgdGhlIHN0b3JhZ2UgYXJlYS4gUmV0dXJucyBpdHNlbGYgZm9yIGNvbnZlbmllbmNlLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBrZXktdmFsdWUgc3RvcmFnZSBhcmVhLlxuICAgICAqL1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmKCFLZXlWYWx1ZVN0b3JhZ2UubG9jYWxGb3JhZ2VJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgYXdhaXQgbG9jYWxmb3JhZ2UuY29uZmlnKHtcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZS5JTkRFWEVEREIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGZvcmFnZS5XRUJTUUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGZvcmFnZS5MT0NBTFNUT1JBR0VdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBLZXlWYWx1ZVN0b3JhZ2UubG9jYWxGb3JhZ2VJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9yYWdlSW5zdGFuY2UgPSBsb2NhbGZvcmFnZS5jcmVhdGVJbnN0YW5jZSggeyBuYW1lOiB0aGlzLnN0b3JhZ2VBcmVhTmFtZSB9ICk7XG4gICAgICAgIHN0b3JhZ2VJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgdmFsdWUgZnJvbSBzdG9yYWdlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHVzZSBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PnxQcm9taXNlPEFycmF5QnVmZmVyPnxQcm9taXNlPEJsb2I+fFByb21pc2U8RmxvYXQzMkFycmF5PnxQcm9taXNlPEZsb2F0NjRBcnJheT58XG4gICAgICogUHJvbWlzZTxJbnQ4QXJyYXk+fFByb21pc2U8SW50MTZBcnJheT58UHJvbWlzZTxJbnQzMkFycmF5PnxQcm9taXNlPE51bWJlcj58UHJvbWlzZTxPYmplY3Q+fFByb21pc2U8VWludDhBcnJheT58XG4gICAgICogUHJvbWlzZTxVaW50OENsYW1wZWRBcnJheT58UHJvbWlzZTxVaW50MTZBcnJheT58UHJvbWlzZTxVaW50MzJBcnJheT58UHJvbWlzZTxzdHJpbmc+fSBUaGUgdmFsdWUgaW4gdGhlXG4gICAgICogc3RvcmFnZSBhcmVhIGZvciB0aGUga2V5LCBvciBgbnVsbGAgaWYgdGhlIGtleSBpcyBub3QgaW4gc3RvcmFnZS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgdmFsdWUgaW4gc3RvcmFnZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB1c2UgaW4gdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKiBAcGFyYW0geyhBcnJheXxBcnJheUJ1ZmZlcnxCbG9ifEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXl8SW50OEFycmF5fEludDE2QXJyYXl8SW50MzJBcnJheXxcbiAgICAgKiBOdW1iZXJ8T2JqZWN0fFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8c3RyaW5nKX0gdmFsdWUgLSBUaGUgdmFsdWVcbiAgICAgKiB0byBzdG9yZSBpbiB0aGUgc3RvcmFnZSBhcmVhIGZvciB0aGUga2V5LlxuICAgICAqL1xuICAgIGFzeW5jIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZUluc3RhbmNlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB3aGVyZSB3aXRoIGEgcHJvcGVydHktdmFsdWUgcGFpciBmb3IgZWFjaCBrZXktdmFsdWUgcGFpciBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGNvdWxkIGJlIHNsb3cgYW5kIGNvbnN1bWUgZXhjZXNzaXZlIG1lbW9yeSBpZiB0aGUgc3RvcmFnZSBhcmVhIGNvbnRhaW5zIGEgbG90XG4gICAgICogb2YgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3QgdGhhdCByZWZsZWN0cyB0aGUgY29udGVudCBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqL1xuICAgIGFzeW5jIGdldENvbnRlbnRzQXNPYmplY3QoKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB7IH07XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZUluc3RhbmNlLml0ZXJhdGUoKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcikgPT4ge1xuICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGNhbGxiYWNrIGl0ZXJhdG9yXG4gICAgICogQHBhcmFtIHsoQXJyYXl8QXJyYXlCdWZmZXJ8QmxvYnxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5fEludDhBcnJheXxJbnQxNkFycmF5fEludDMyQXJyYXl8XG4gICAgICogTnVtYmVyfE9iamVjdHxVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fHN0cmluZyl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVyYXRpb25OdW1iZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBzdG9yYWdlIGFyZWEuIE5vdGUgdGhhdCBpdGVyYXRpb25cbiAgICAgKiB3aWxsIHN0b3AgaWYgYGNhbGxiYWNrYCByZXR1cm5zIGFueXRoaW5nIG5vbi1gdW5kZWZpbmVkYC5cbiAgICAgKlxuICAgICAqIEFzIGxvbmcgYXMgd2UncmUgdXNpbmcgTG9jYWxGb3JhZ2UsIHRoaXMgaXMgZWFzeSBhbmQgcHJlc3VtYWJseSBub3RcbiAgICAgKiBtZW1vcnktaW50ZW5zaXZlLCBhcyBsb25nIGFzIHRoZSBjYWxsYmFjayBpc24ndCBzdG9yaW5nIGFsbCBvZiB0aGUgZW50aXJlcy5cbiAgICAgKiBAcGFyYW0ge2l0ZXJhdG9yfSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxlZCBvbiBlYWNoIGtleS12YWx1ZSBwYWlyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgaXRlcmF0ZShjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlSW5zdGFuY2UuaXRlcmF0ZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgYXN5bmMga2V5c1N0YXJ0aW5nV2l0aChrZXlQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZUluc3RhbmNlLmtleXNTdGFydGluZ1dpdGgoa2V5UHJlZml4KTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydHNXaXRoKGtleVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlSW5zdGFuY2Uuc3RhcnRzV2l0aChrZXlQcmVmaXgpO1xuICAgIH1cbn1cblxuS2V5VmFsdWVTdG9yYWdlLmxvY2FsRm9yYWdlSW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gd29ya2Fyb3VuZCBmb3Igc3RhdGljIGNsYXNzIHZhcmlhYmxlXG5cbi8qKiBDbGFzcyBmb3IgbWFpbnRhaW5pbmcgcGVyc2lzdGVudCBjb3VudGVycyAoZS5nLiwgdW5pcXVlIElEcykuICovXG5leHBvcnQgY2xhc3MgQ291bnRlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGVyc2lzdGVudCBjb3VudGVyLiBOb3RlIHRoYXQsIGJlY2F1c2UgY3JlYXRpbmcgYSBjb3VudGVyXG4gICAgICogcmVxdWlyZXMgYXN5bmNocm9ub3VzIGNhbGxzICh3aGljaCBjYW5ub3QgaGFwcGVuIGluIGEgY29uc3RydWN0b3IpLFxuICAgICAqIHRoZSBjb3VudGVyIHdpbGwgbm90IGJlIHNldHVwIHVudGlsIGEgc3Vic2VxdWVudCBjYWxsIHRvIGBpbml0aWFsaXplKClgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudGVyTmFtZSAtIEEgbmFtZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIGNvdW50ZXIuXG4gICAgICogQGV4YW1wbGUgdmFyIGV4YW1wbGVDb3VudGVyID0gYXdhaXQgKG5ldyBDb3VudGVyKFwiZXhhbXBsZU5hbWVcIikpLmluaXRpYWxpemUoKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb3VudGVyTmFtZSkge1xuICAgICAgICB0aGlzLmNvdW50ZXJOYW1lID0gY291bnRlck5hbWU7XG4gICAgICAgIHRoaXMuY291bnRlclZhbHVlID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZSBjcmVhdGlvbiBvZiB0aGUgcGVyc2lzdGVudCBjb3VudGVyLiBSZXR1cm5zIGl0c2VsZiBmb3IgY29udmVuaWVuY2UuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHBlcnNpc3RlbnQgY291bnRlci5cbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xuICAgICAgICBpZihDb3VudGVyLnN0b3JhZ2UgPT0gbnVsbClcbiAgICAgICAgICAgIENvdW50ZXIuc3RvcmFnZSA9IGF3YWl0IChuZXcgS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuU3RvcmFnZS5Db3VudGVyXCIpKS5pbml0aWFsaXplKCk7XG4gICAgICAgIHZhciBpbml0aWFsQ291bnRlclZhbHVlID0gYXdhaXQgQ291bnRlci5zdG9yYWdlLmdldCh0aGlzLmNvdW50ZXJOYW1lKTtcbiAgICAgICAgaWYoaW5pdGlhbENvdW50ZXJWYWx1ZSAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5jb3VudGVyVmFsdWUgPSBpbml0aWFsQ291bnRlclZhbHVlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBhd2FpdCBDb3VudGVyLnN0b3JhZ2Uuc2V0KHRoaXMuY291bnRlck5hbWUsIHRoaXMuY291bnRlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb3VudGVyLiBUaGUgdmFsdWUgaXMgY2FjaGVkIGluIG1lbW9yeSwgd2hpY2ggYWxsb3dzXG4gICAgICogdGhpcyBmdW5jdGlvbiB0byBiZSBzeW5jaHJvbm91cy5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY291bnRlci5cbiAgICAgKi9cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBpbmNyZW1lbnRCeUFuZEdldChpbmNWYWx1ZSkge1xuICAgICAgICB2YXIgY3VycmVudENvdW50ZXJWYWx1ZSA9ICh0aGlzLmNvdW50ZXJWYWx1ZSA9IHRoaXMuY291bnRlclZhbHVlICsgaW5jVmFsdWUpO1xuICAgICAgICBhd2FpdCBDb3VudGVyLnN0b3JhZ2Uuc2V0KHRoaXMuY291bnRlck5hbWUsIHRoaXMuY291bnRlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDb3VudGVyVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciBhbmQgcmV0dXJuIHRoZSBpbmNyZW1lbnRlZCB2YWx1ZS5cbiAgICAgKiBUaGUgY2FjaGVkIGNvdW50ZXIgdmFsdWUgaXMgc3luY2hyb25vdXNseSBpbmNyZW1lbnRlZDsgdGhlIHN0b3JlZFxuICAgICAqIGNvdW50ZXIgdmFsdWUgaXMgYXN5bmNocm9ub3VzbHkgaW5jcmVtZW50ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gLSBUaGUgY291bnRlciB2YWx1ZSBhZnRlciBpbmNyZW1lbnRpbmcuXG4gICAgICovXG4gICAgYXN5bmMgaW5jcmVtZW50QW5kR2V0KCkge1xuICAgICAgICAvLyBTYXZpbmcgdGhlIGN1cnJlbnQgY291bnRlciB2YWx1ZSB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nXG4gICAgICAgIC8vIHRoZSBhc3luY2hyb25vdXMgc2F2ZSB0byBzdG9yYWdlXG4gICAgICAgIHZhciBjdXJyZW50Q291bnRlclZhbHVlID0gKHRoaXMuY291bnRlclZhbHVlID0gdGhpcy5jb3VudGVyVmFsdWUgKyAxKTtcbiAgICAgICAgYXdhaXQgQ291bnRlci5zdG9yYWdlLnNldCh0aGlzLmNvdW50ZXJOYW1lLCB0aGlzLmNvdW50ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q291bnRlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgdmFsdWUgb2YgdGhlIGNvdW50ZXIgYW5kIHJldHVybiB0aGUgdmFsdWUgcHJpb3IgdG9cbiAgICAgKiBpbmNyZW1lbnRpbmcuIElkZW50aWNhbCB0byB0aGUgUHJvbWlzZSByZXR1cm5lZCBieVxuICAgICAqIGBjb3VudGVyLmluY3JlbWVudEFuZEdldCgpLnRoZW4odmFsdWUgPT4gcmV0dXJuIHZhbHVlIC0gMSlgLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IC0gVGhlIGNvdW50ZXIgdmFsdWUgYmVmb3JlIGluY3JlbWVudGluZy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRBbmRJbmNyZW1lbnQoKSB7XG4gICAgICAgIHZhciByZXQgPSBhd2FpdCB0aGlzLmluY3JlbWVudCgpIC0gMTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVyLCBpZ25vcmluZyB0aGUgdmFsdWUuIElkZW50aWNhbCB0b1xuICAgICAqIHRoZSBQcm9taXNlIHJldHVybmVkIGJ5IGBjb3VudGVyLmluY3JlbWVudEFuZEdldC50aGVuKHZhbHVlID0+IHJldHVybilgLlxuICAgICAqL1xuICAgIGFzeW5jIGluY3JlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5jcmVtZW50QW5kR2V0KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QW5kUmVzZXQoKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q291bnRlclZhbHVlID0gdGhpcy5jb3VudGVyVmFsdWU7XG4gICAgICAgIHRoaXMuY291bnRlclZhbHVlID0gMDtcbiAgICAgICAgYXdhaXQgQ291bnRlci5zdG9yYWdlLnNldCh0aGlzLmNvdW50ZXJOYW1lLCB0aGlzLmNvdW50ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q291bnRlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBhIHByb3BlcnR5LXZhbHVlIHBhaXIgZm9yIGVhY2ggY291bnRlciBuYW1lLXZhbHVlIHBhaXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHRoYXQgcmVmbGVjdHMgdGhlIHNldCBvZiBjb3VudGVycy5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgZ2V0Q29udGVudHNBc09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IENvdW50ZXIuc3RvcmFnZS5nZXRDb250ZW50c0FzT2JqZWN0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVXJsKHVybCkge1xuICAgIHZhciB1cmxPYmogPSBuZXcgVVJMKHVybCk7XG4gICAgdmFyIG5vcm1hbGl6ZWRVcmwgPSAodXJsT2JqLnByb3RvY29sID8gdXJsT2JqLnByb3RvY29sIDogXCJodHRwczpcIikgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLy9cIiArIHVybE9iai5ob3N0bmFtZSArIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHVybE9iai5wYXRobmFtZSA/IHVybE9iai5wYXRobmFtZSA6IFwiXCIpO1xuICAgIHJldHVybiBub3JtYWxpemVkVXJsO1xufVxuXG4vLyBXb3JrYXJvdW5kIGZvciBzdGF0aWMgY2xhc3MgdmFyaWFibGVcbkNvdW50ZXIuc3RvcmFnZSA9IG51bGw7XG5cbi8vIFByZXZlbnRzIEluZGV4ZWREQiBkYXRhIGZyb20gZ2V0dGluZyBkZWxldGVkIHdpdGhvdXQgdXNlciBpbnRlcnZlbnRpb25cbi8vIElnbm9yaW5nIHRoZSBwcm9taXNlIHJlc29sdXRpb24gYmVjYXVzZSB3ZSBzdGlsbCB3YW50IHRvIHVzZSBzdG9yYWdlXG4vLyBldmVuIGlmIEZpcmVmb3ggd29uJ3QgZ3VhcmFudGVlIHBlcnNpc3RlbmNlXG5uYXZpZ2F0b3Iuc3RvcmFnZS5wZXJzaXN0KCk7IiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYCxcbiAqIHJvdXRpbmcgbWVzc2FnZXMgdG8gdGhlIHJpZ2h0IGxpc3RlbmVyKHMpIGJhc2VkIG9uIHRoZSBtZXNzYWdlIHR5cGUuXG4gKiBNZXNzYWdlIHR5cGVzIGFyZSBkZWZpbmVkIGFzIHN0cmluZ3MsIGFuZCBhIG1lc3NhZ2UgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCBhXG4gKiB0eXBlIHByb3BlcnR5IHRvIGJlIGhhbmRsZWQgY29ycmVjdGx5LlxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5NZXNzYWdpbmdcbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4vRGVidWdnaW5nLmpzXCJcblxuY29uc3QgZGVidWdMb2cgPSBEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nKFwiVXRpbGl0aWVzLk1lc3NhZ2luZ1wiKTtcblxuLyoqXG4gKiBBIE1hcCB0aGF0IHN0b3JlcyBtZXNzYWdlIGxpc3RlbmVycy4gVGhlIGtleXMgYXJlIG1lc3NhZ2UgdHlwZXMgYW5kIHRoZSB2YWx1ZXNcbiAqIGFyZSBTZXRzIG9mIG1lc3NhZ2UgbGlzdGVuZXJzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPHN0cmluZyxTZXQ8ZnVuY3Rpb24+Pn1cbiAqL1xuY29uc3QgbWVzc2FnZVJvdXRlciA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBBIE1hcCB0aGF0IHN0b3JlcyBtZXNzYWdlIHNjaGVtYXMuIFRoZSBrZXlzIGFyZSBtZXNzYWdlIHR5cGVzIGFuZCB0aGUgdmFsdWVzXG4gKiBhcmUgc2NoZW1hcy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxzdHJpbmcsT2JqZWN0Pn1cbiAqL1xuY29uc3QgbWVzc2FnZVNjaGVtYXMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogV2hldGhlciB0aGUgbW9kdWxlJ3MgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgIGxpc3RlbmVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZvciBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAgdGhhdCByb3V0ZXMgbWVzc2FnZXMgdG8gdGhlIHJpZ2h0XG4gKiBsaXN0ZW5lcihzKSBiYXNlZCBvbiBtZXNzYWdlIHR5cGUuIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgXG4gKiBmb3IgZGV0YWlsIG9uIHRoZSBwYXJhbWV0ZXJzLlxuICogQHJldHVybnMge1Byb21pc2V9IC0gQW4gb3B0aW9uYWwgcmVzcG9uc2UgdG8gdGhlIG1lc3NhZ2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBicm93c2VyUnVudGltZUxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgdmFyIG1lc3NhZ2VMaXN0ZW5lcnM7XG4gICAgdmFyIG1lc3NhZ2VTY2hlbWE7XG4gICAgdmFyIGJyb3dzZXJSdW50aW1lUmV0dXJuVmFsdWU7XG4gICAgLy8gSWYgdGhlIG1lc3NhZ2UgaXMgbm90IGluIGFuIGV4cGVjdGVkIGZvcm1hdCBvciBkb2VzIG5vdCBoYXZlIGF0IGxlYXN0XG4gICAgLy8gb25lIHJlZ2lzdGVyZWQgbGlzdGVuZXIsIGlnbm9yZSBpdC5cbiAgICBpZiAoKG1lc3NhZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiKSB8fFxuICAgICAgICAhKFwidHlwZVwiIGluIG1lc3NhZ2UpIHx8XG4gICAgICAgICh0eXBlb2YgbWVzc2FnZS50eXBlICE9PSBcInN0cmluZ1wiKSB8fFxuICAgICAgICAoKG1lc3NhZ2VMaXN0ZW5lcnMgPSBtZXNzYWdlUm91dGVyLmdldChtZXNzYWdlLnR5cGUpKSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBkZWJ1Z0xvZyhcIlVuZXhwZWN0ZWQgYnJvd3Nlci5ydW50aW1lIG1lc3NhZ2U6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2NoZW1hIHJlZ2lzdGVyZWQgZm9yIHRoaXMgbWVzc2FnZSB0eXBlLCBjaGVjayB0aGUgbWVzc2FnZSBhZ2FpbnN0IHRoZSBzY2hlbWFcbiAgICBpZigobWVzc2FnZVNjaGVtYSA9IG1lc3NhZ2VTY2hlbWFzLmdldChtZXNzYWdlLnR5cGUpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcih2YXIgZmllbGQgaW4gbWVzc2FnZVNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKCEoZmllbGQgaW4gbWVzc2FnZSkgfHwgKHR5cGVvZiBtZXNzYWdlW2ZpZWxkXSAhPSBtZXNzYWdlU2NoZW1hW2ZpZWxkXSkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZyhcIk1pc21hdGNoIGJldHdlZW4gbWVzc2FnZSBhbmQgc2NoZW1hOiBcIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBtZXNzYWdlTGlzdGVuZXIgb2YgbWVzc2FnZUxpc3RlbmVycykge1xuICAgICAgICB2YXIgbWVzc2FnZUxpc3RlbmVyUmV0dXJuVmFsdWUgPSBtZXNzYWdlTGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xuICAgICAgICBpZiAoKG1lc3NhZ2VMaXN0ZW5lclJldHVyblZhbHVlICE9PSB1bmRlZmluZWQpICYmIChicm93c2VyUnVudGltZVJldHVyblZhbHVlICE9PSB1bmRlZmluZWQpKVxuICAgICAgICAgICAgZGVidWdMb2coXCJNdWx0aXBsZSBsaXN0ZW5lciByZXR1cm4gdmFsdWVzIGZvciBtZXNzYWdlIHR5cGUgXCIgKyBtZXNzYWdlLnR5cGUpO1xuICAgICAgICBicm93c2VyUnVudGltZVJldHVyblZhbHVlID0gbWVzc2FnZUxpc3RlbmVyUmV0dXJuVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBicm93c2VyUnVudGltZVJldHVyblZhbHVlO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIG1lc3NhZ2UgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVR5cGUgLSBUaGUgdHlwZSBvZiBtZXNzYWdlIHRoYXQgdHJpZ2dlcnMgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbWVzc2FnZUxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLCB3aGljaCByZWNlaXZlcyB0aGUgc2FtZVxuICogcGFyYW1ldGVycyBhcyBpZiBpdCBoYWQgYmVlbiBjYWxsZWQgYnkgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgLCBhbmQgdGhhdCBjYW5cbiAqIHJldHVybiB0aGUgc2FtZSB2YWx1ZXMgYXMgYSBsaXN0ZW5lciB0byBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAuXG4gKiBAcGFyYW0ge29iamVjdH0gW21lc3NhZ2VTY2hlbWFdIC0gQW4gb3B0aW9uYWwgc2NoZW1hIHRvIHJlZ2lzdGVyIGZvciB0aGUgbWVzc2FnZSB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihtZXNzYWdlVHlwZSwgbWVzc2FnZUxpc3RlbmVyLCBtZXNzYWdlU2NoZW1hKSB7XG4gICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYnJvd3NlclJ1bnRpbWVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2VMaXN0ZW5lcnMgPSBtZXNzYWdlUm91dGVyLmdldChtZXNzYWdlVHlwZSk7XG4gICAgaWYgKG1lc3NhZ2VMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXNzYWdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBtZXNzYWdlUm91dGVyLnNldChtZXNzYWdlVHlwZSwgbWVzc2FnZUxpc3RlbmVycyk7XG4gICAgfVxuICAgIG1lc3NhZ2VMaXN0ZW5lcnMuYWRkKG1lc3NhZ2VMaXN0ZW5lcik7XG5cbiAgICBpZihtZXNzYWdlU2NoZW1hICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJlZ2lzdGVyU2NoZW1hKG1lc3NhZ2VUeXBlLCBtZXNzYWdlU2NoZW1hKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBtZXNzYWdlIHNjaGVtYS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlVHlwZSAtIFRoZSB0eXBlIG9mIG1lc3NhZ2UgdGhhdCBtdXN0IGZvbGxvdyB0aGUgc2NoZW1hLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VTY2hlbWEgLSBBbiBvYmplY3Qgd2hlcmUgZWFjaCBmaWVsZCBoYXMgYSB2YWx1ZSB0aGF0IGlzXG4gKiBhIGJ1aWx0LWluIHR5cGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTY2hlbWEobWVzc2FnZVR5cGUsIG1lc3NhZ2VTY2hlbWEpIHtcbiAgICBpZihtZXNzYWdlU2NoZW1hcy5oYXMobWVzc2FnZVR5cGUpKVxuICAgICAgICBkZWJ1Z0xvZyhcIk11bHRpcGxlIHNjaGVtYXMgZm9yIG1lc3NhZ2UgdHlwZSBcIiArIG1lc3NhZ2VUeXBlKTtcbiAgICBtZXNzYWdlU2NoZW1hcy5zZXQobWVzc2FnZVR5cGUsIG1lc3NhZ2VTY2hlbWEpO1xufSIsIi8qKlxuICogVGhpcyBtb2R1bGUgZW5hYmxlcyByZWdpc3RlcmluZyBicm93c2VyIGlkbGUgc3RhdGUgbGlzdGVuZXJzIHdpdGhcbiAqIHZhcnlpbmcgZGV0ZWN0aW9uIGludGVydmFscy4gVGhlIG1vZHVsZSBpcyBuZWVkZWQgYmVjYXVzZSB0aGVcbiAqIFdlYkV4dGVuc2lvbnMgYGlkbGVgIEFQSSBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBvbmUgZGV0ZWN0aW9uXG4gKiBpbnRlcnZhbCBwZXIgZXh0ZW5zaW9uLlxuICogXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtb2R1bGUgY29tYmluZXMgdGhlIFdlYkV4dGVuc2lvbnMgYGlkbGVgXG4gKiBBUEkgYW5kIGBzZXRUaW1lb3V0YC4gSXQgY29uZmlndXJlcyB0aGUgYGlkbGVgIEFQSSB0byB1c2UgdGhlXG4gKiBtaW5pbXVtIGlkbGUgZGV0ZWN0aW9uIGludGVydmFsIHdpdGggYGlkbGUuc2V0RGV0ZWN0aW9uSW50ZXJ2YWwoKWAsXG4gKiByZWdpc3RlcnMgYSBsaXN0ZW5lciBmb3IgdGhlIGBpZGxlLm9uU3RhdGVDaGFuZ2VkYCBldmVudCwgYW5kIHRoZW5cbiAqIHVzZXMgYHNldFRpbWVvdXRgIGFmdGVyIHRoZSBicm93c2VyIGdvZXMgaWRsZSB0byBub3RpZnkgaWRsZSBzdGF0ZVxuICogbGlzdGVuZXJzIHdpdGggZGV0ZWN0aW9uIGludGVydmFscyBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0uIElmIHRoZXJlXG4gKiBhcmUgYW55IHBlbmRpbmcgaWRsZSBub3RpZmljYXRpb24gdGltZW91dHMgd2hlbiB0aGUgYnJvd3NlciBnb2VzXG4gKiBhY3RpdmUsIHRob3NlIHRpbWVvdXRzIGFyZSBjbGVhcmVkLlxuICogXG4gKiBTb21lIGltcGxlbWVudGF0aW9uIHF1aXJrcyB0byBiZSBhd2FyZSBvZiBmb3IgdXNlIGFuZCBmdXR1cmVcbiAqIGRldmVsb3BtZW50OlxuICogXG4gKiAgICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiBjb25maWd1cmluZyB0aGUgZGV0ZWN0aW9uIGludGVydmFsXG4gKiAgICAgZm9yIHRoZSBgaWRsZWAgQVBJIHRvIGl0cyBtaW5pbXVtIHZhbHVlLiBBbnkgc3Vic2VxdWVudCBjaGFuZ2VzIHRvXG4gKiAgICAgdGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsIGluIHRoZSBgaWRsZWAgQVBJIHdpbGwgcmVzdWx0IGluXG4gKiAgICAgdW5wcmVkaWN0YWJsZSBiZWhhdmlvci5cbiAqIFxuICogICAqIElkbGUgc3RhdGUgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGlzIG1vZHVsZSBhcmUgbm90IGd1YXJhbnRlZWQgdG9cbiAqICAgICByZWZsZWN0IGlkbGUgc3RhdGUgdHJhbnNpdGlvbnMgKGUuZy4sIGEgbGlzdGVuZXIgbWlnaHQgcmVjZWl2ZVxuICogICAgIGBcImFjdGl2ZVwiYCBmb2xsb3dlZCBieSBgXCJhY3RpdmVcImApLiBXZSBtaWdodCB3YW50IHRvIGltcGxlbWVudCB0aGlzXG4gKiAgICAgZ3VhcmFudGVlIGV2ZW50dWFsbHkuXG4gKiBcbiAqICAgKiBCZWNhdXNlIHRoZSBicm93c2VyIGlkbGUgc3RhdGUgcmVzZXRzIHdpdGggZWFjaCBicm93c2VyIHNlc3Npb24sXG4gKiAgICAgaXQgaXMgbm90IGEgcHJvYmxlbSB0aGF0IHRpbWVvdXRzIGRvIG5vdCBwZXJzaXN0IGJldHdlZW4gYnJvd3NlclxuICogICAgIHNlc3Npb25zLlxuICogXG4gKiAgICogVGhlIG1vZHVsZSBkb2VzIG5vdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBGaXJlZm94XG4gKiAgICAgW2Buc0lkbGVTZXJ2aWNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL1RlY2gvWFBDT00vUmVmZXJlbmNlL0ludGVyZmFjZS9uc0lJZGxlU2VydmljZSksXG4gKiAgICAgZXZlbiB0aG91Z2ggaXQgc3VwcG9ydHMgdmFyeWluZyBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbHMsIGluXG4gKiAgICAgb3JkZXIgdG8gbWluaW1pemUgcHJpdmlsZWdlZCBleHRlbnNpb24gY29kZS5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5JZGxlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWluaW11bSBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbCAoaW4gc2Vjb25kcykgc3VwcG9ydGVkIGJ5XG4gKiB0aGUgYGlkbGVgIEFQSS5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge251bWJlcn1cbiAqL1xuY29uc3QgbWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzID0gMTU7XG5cbi8qKlxuICogV2hldGhlciB3ZSBoYXZlIGNvbmZpZ3VyZWQgIGNvbmZpZ3VyZWQgdGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uXG4gKiBpbnRlcnZhbCwgY2FjaGVkIHRoZSBpZGxlIHN0YXRlLCBhbmQgcmVnaXN0ZXJlZCB0aGUgaWRsZSBzdGF0ZVxuICogbGlzdGVuZXIuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBBbiBlc3RpbWF0ZSBvZiB0aGUgdGltZSAoaW4gbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCkgd2hlbiB0aGVcbiAqIGJyb3dzZXIgbGFzdCBlbnRlcmVkIGFuIGlkbGUgc3RhdGUuIEdlbmVyYXRlZCBieSBzdWJ0cmFjdGluZyB0aGVcbiAqIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsIChjb252ZXJ0ZWQgdG8gbWlsbGlzZWNvbmRzKSBmcm9tIHRoZVxuICogdGltZSB0aGUgYnJvd3NlciBsYXN0IGZpcmVkIGFuIGlkbGUgc3RhdGUgbm90aWZpY2F0aW9uLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGxhc3RJZGxlVGltZSA9IC0xO1xuXG4vKipcbiAqIEEgY2FjaGVkIGNvcHkgb2YgdGhlIGJyb3dzZXIncyBjdXJyZW50IGlkbGUgc3RhdGUuIFRoaXMgY2FjaGluZyBlbmFibGVzXG4gKiBzeW5jaHJvbm91cyBjaGVja2luZyBvZiB0aGUgY3VycmVudCBpZGxlIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAZGVmYXVsdFxuICovXG52YXIgY3VycmVudElkbGVTdGF0ZSA9IFwiYWN0aXZlXCI7XG5cbi8qKlxuICogQSBNYXAgdGhhdCBzdG9yZXMgYnJvd3NlciBpZGxlIHN0YXRlIGxpc3RlbmVycy4gVGhlIGtleXMgYXJlXG4gKiBkZXRlY3Rpb24gaW50ZXJ2YWxzIGluIHNlY29uZHMgYW5kIHRoZSB2YWx1ZXMgYXJlIFNldHMgb2ZcbiAqIGJyb3dzZXIgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFNldDxmdW5jdGlvbj4+fVxuICovXG5jb25zdCBpZGxlU3RhdGVMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQSBNYXAgdGhhdCBzdG9yZXMgYnJvd3NlciBpZGxlIHN0YXRlIHRpbWVvdXRzLiBUaGUga2V5cyBhcmVcbiAqIGRldGVjdGlvbiBpbnRlcnZhbHMgaW4gc2Vjb25kcyBhbmQgdGhlIHZhbHVlcyBhcmUgYHRpbWVvdXRJRGBcbiAqIHZhbHVlcyBmcm9tIGBzZXRUaW1lb3V0KClgLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPG51bWJlcixudW1iZXI+fVxuICovXG5jb25zdCBpZGxlU3RhdGVUaW1lb3V0cyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBDb25maWd1cmUgdGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsLCBjYWNoZSB0aGUgaWRsZSBzdGF0ZSxcbiAqIGFuZCByZWdpc3RlciB0aGUgaWRsZSBzdGF0ZSBsaXN0ZW5lci5cbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYoaW5pdGlhbGl6ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgYnJvd3Nlci5pZGxlLnNldERldGVjdGlvbkludGVydmFsKG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG4gICAgY3VycmVudElkbGVTdGF0ZSA9IGF3YWl0IGJyb3dzZXIuaWRsZS5xdWVyeVN0YXRlKG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG4gICAgaWYoY3VycmVudElkbGVTdGF0ZSA9PT0gXCJpZGxlXCIpXG4gICAgICAgIGxhc3RJZGxlVGltZSA9IERhdGUubm93KCkgLSAobWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCk7XG4gICAgYnJvd3Nlci5pZGxlLm9uU3RhdGVDaGFuZ2VkLmFkZExpc3RlbmVyKGlkbGVPblN0YXRlQ2hhbmdlZExpc3RlbmVyKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYnJvd3NlciBoYXMgYmVlbiBpZGxlIGZvciBhIHNwZWNpZmllZCB0aW1lLlxuICogVGhpcyBmdW5jdGlvbiBpcyBzeW5jaHJvbm91cywgdW5saWtlIGBpZGxlLnF1ZXJ5U3RhdGVgLiBOb3RlIHRoYXQsXG4gKiBpZiBhbiBpZGxlIHN0YXRlIGxpc3RlbmVyIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLCB0aGlzIGZ1bmN0aW9uXG4gKiB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgb2YgYWN0aXZlIHN0YXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzIC0gVGhlIGRldGVjdGlvbiBpbnRlcnZhbFxuICogdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0YXRlKGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKSB7XG4gICAgaWYoY3VycmVudElkbGVTdGF0ZSAhPT0gXCJpZGxlXCIpXG4gICAgICAgIHJldHVybiBjdXJyZW50SWRsZVN0YXRlO1xuXG4gICAgaWYoRGF0ZS5ub3coKSA+PSAobGFzdElkbGVUaW1lICsgKGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCkpKVxuICAgICAgICByZXR1cm4gXCJpZGxlXCI7XG5cbiAgICByZXR1cm4gXCJhY3RpdmVcIjsgICAgXG59XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmb3IgYGlkbGUub25TdGF0ZUNoYW5nZWRgIHRoYXQgc3VwcG9ydHMgbm90aWZ5aW5nXG4gKiBpZGxlIHN0YXRlIGxpc3RlbmVycyB3aXRoIHZhcnlpbmcgZGV0ZWN0aW9uIGludGVydmFscy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlkbGVPblN0YXRlQ2hhbmdlZExpc3RlbmVyKG5ld1N0YXRlKSB7XG4gICAgY3VycmVudElkbGVTdGF0ZSA9IG5ld1N0YXRlO1xuXG4gICAgLy8gSWYgdGhlIGJyb3dzZXIgaWRsZSBzdGF0ZSB0cmFuc2l0aW9ucyB0byBub24taWRsZS4uLlxuICAgIGlmKG5ld1N0YXRlICE9PSBcImlkbGVcIikge1xuICAgICAgICAvLyBDYW5jZWwgYW55IHBlbmRpbmcgbm90aWZpY2F0aW9uIHRpbWVvdXRzIGFuZCBmb3JnZXQgdGhlIHRpbWVvdXQgSURzXG4gICAgICAgIGZvcihjb25zdCBpZGxlU3RhdGVUaW1lb3V0SUQgb2YgaWRsZVN0YXRlVGltZW91dHMudmFsdWVzKCkpXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWRsZVN0YXRlVGltZW91dElEKTtcbiAgICAgICAgaWRsZVN0YXRlVGltZW91dHMuY2xlYXIoKTtcblxuICAgICAgICAvLyBOb3RpZnkgYWxsIHRoZSBpZGxlIHN0YXRlIGxpc3RlbmVyc1xuICAgICAgICBmb3IoY29uc3QgaWRsZVN0YXRlTGlzdGVuZXJTZXQgb2YgaWRsZVN0YXRlTGlzdGVuZXJzLnZhbHVlcygpKVxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkbGVTdGF0ZUxpc3RlbmVyIG9mIGlkbGVTdGF0ZUxpc3RlbmVyU2V0KVxuICAgICAgICAgICAgICAgIGlkbGVTdGF0ZUxpc3RlbmVyKG5ld1N0YXRlLnJlcGVhdCgxKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYnJvd3NlciBpZGxlIHN0YXRlIHRyYW5zaXRpb25zIHRvIGlkbGUuLi5cblxuICAgIC8vIFJlbWVtYmVyIGFuIGVzdGltYXRlIG9mIHdoZW4gdGhlIGJyb3dzZXIgbGFzdCB3ZW50IGludG8gaWRsZSBzdGF0ZVxuICAgIGxhc3RJZGxlVGltZSA9IERhdGUubm93KCkgLSAobWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCk7XG5cbiAgICAvLyBTZXQgdGltZW91dHMgZm9yIGFsbCB0aGUgaWRsZSBzdGF0ZSBsaXN0ZW5lcnNcbiAgICBmb3IoY29uc3QgW2RldGVjdGlvbkludGVydmFsSW5TZWNvbmRzLCBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWxdIG9mIGlkbGVTdGF0ZUxpc3RlbmVycylcbiAgICAgICAgc2NoZWR1bGVJZGxlU3RhdGVUaW1lb3V0KGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xufVxuXG4vKipcbiAqIFNjaGVkdWxlIGEgdGltZW91dCBmb3IgYSBzZXQgb2YgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge1NldDxmdW5jdGlvbj59IGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCAtIFRoZSBzZXQgb2YgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgLSBUaGUgaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWwgKGluIHNlY29uZHMpIGZvciB0aGlzIHNldCBvZiBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgdGltZW91dCBJRCBmb3IgdGhlIHNjaGVkdWxlZCB0aW1lb3V0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2NoZWR1bGVJZGxlU3RhdGVUaW1lb3V0KGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpIHtcbiAgICAvLyBEZXRlcm1pbmUgaG93IGxvbmcgdG8gZGVsYXkgYmVmb3JlIGZpcmluZyB0aGUgbGlzdGVuZXJzXG4gICAgLy8gSWYgdGhlIGRlbGF5IGlzIG5lZ2F0aXZlLCBzZXQgaXQgdG8gMCAoaS5lLiwgZmlyZSBhcyBzb29uIGFzIHBvc3NpYmxlKVxuICAgIHZhciBkZWxheVRpbWUgPSBNYXRoLm1heChsYXN0SWRsZVRpbWUgKyAoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgKiAxMDAwKSAtIERhdGUubm93KCksIDApO1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IoY29uc3QgaWRsZVN0YXRlTGlzdGVuZXIgb2YgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsKVxuICAgICAgICAgICAgaWRsZVN0YXRlTGlzdGVuZXIoXCJpZGxlXCIpO1xuICAgIH0sIGRlbGF5VGltZSk7XG4gICAgaWRsZVN0YXRlVGltZW91dHMuc2V0KGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzLCB0aW1lb3V0SWQpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGJyb3dzZXIgaWRsZSBzdGF0ZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGlkbGVTdGF0ZUxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogVGhlIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSB0aGUgc2FtZSBgaWRsZS5JZGxlU3RhdGVgIHBhcmFtZXRlclxuICogYXMgaWYgaXQgaGFkIHN1YnNjcmliZWQgdG8gaWRsZSBzdGF0ZSBldmVudHMgd2l0aFxuICogYGJyb3dzZXIuaWRsZS5vblN0YXRlQ2hhbmdlZC5hZGRMaXN0ZW5lcmAuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgLSBUaGUgZGV0ZWN0aW9uXG4gKiBpbnRlcnZhbCBmb3IgZmlyaW5nIHRoZSBpZGxlIHN0YXRlIGxpc3RlbmVyLiBOb3RlIHRoYXQgdGhpc1xuICogdGltZSBpbiBtZWFzdXJlZCBpbiBzZWNvbmRzIGJlY2F1c2UgdGhhdCBpcyBob3cgdGhlIGBpZGxlYFxuICogQVBJIGlzIGltcGxlbWVudGVkLCBldmVuIHRob3VnaCBtb3N0IHRpbWVzIGluIHRoZSBsaWJyYXJ5XG4gKiBhcmUgbWVhc3VyZWQgaW4gbWlsbGlzZWNvbmRzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lcihpZGxlU3RhdGVMaXN0ZW5lciwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplKCk7XG5cbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYXQgbGVhc3Qgb25lIGlkbGUgc3RhdGUgbGlzdGVuZXIgd2l0aCB0aGlzXG4gICAgLy8gZGV0ZWN0aW9uIGludGVydmFsLCBhZGQgdGhlIG5ldyBsaXN0ZW5lciB0byB0aGUgU2V0IG9mIGxpc3RlbmVyc1xuICAgIC8vIGFuZCB3ZSdyZSBkb25lXG4gICAgdmFyIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCA9IGlkbGVTdGF0ZUxpc3RlbmVycy5nZXQoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xuICAgIGlmKGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbC5hZGQoaWRsZVN0YXRlTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgU2V0IGZvciBsaXN0ZW5lcnMgd2l0aCB0aGlzIGRldGVjdGlvbiBpbnRlcnZhbCwgaW5jbHVkaW5nXG4gICAgLy8gdGhpcyBpZGxlIHN0YXRlIGxpc3RlbmVyXG4gICAgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsID0gaWRsZVN0YXRlTGlzdGVuZXJzLnNldChkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcywgKG5ldyBTZXQoKSkuYWRkKGlkbGVTdGF0ZUxpc3RlbmVyKSk7XG5cbiAgICAvLyBJZiB3ZSdyZSBpbiBpZGxlIHN0YXRlLCBhbmQgd2UgaGF2ZSBiZWVuIGluIHRoZSBzdGF0ZSBmb3IgbGVzcyB0aW1lXG4gICAgLy8gdGhhbiB0aGUgZGV0ZWN0aW9uIGludGVydmFsIGZvciB0aGlzIGxpc3RlbmVyIChpLmUuLCB0aGUgbGlzdGVuZXJcbiAgICAvLyBzaG91bGQgc3RpbGwgcmVjZWl2ZSBhIHN0YXRlIGNoYW5nZSBub3RpZmljYXRpb24pLCBzY2hlZHVsZSBhXG4gICAgLy8gbm90aWZpY2F0aW9uXG4gICAgaWYoKGN1cnJlbnRJZGxlU3RhdGUgPT09IFwiaWRsZVwiKSAmJiAoRGF0ZS5ub3coKSA8IChsYXN0SWRsZVRpbWUgKyBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAqIDEwMDApKSlcbiAgICAgICAgc2NoZWR1bGVJZGxlU3RhdGVUaW1lb3V0KGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xufSIsImV4cG9ydCBjb25zdCBkZXN0aW5hdGlvbkRvbWFpbnMgPSBbXG4gICAgXCJjbm4uY29tXCIsXG4gICAgXCJzZmNocm9uaWNsZS5jb21cIixcbiAgICBcInlvdXJiaWdza3kuY29tXCIsXG4gICAgXCJub3J0aHBpbWFuZXdzLmNvbVwiXG5dIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyB1dGlsaXRpZXMgZm9yIG1hdGNoaW5nIFVSTHMgYWdhaW5zdCBkb21haW4gbmFtZXMuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmdcbiAqL1xuaW1wb3J0IHsgZGVzdGluYXRpb25Eb21haW5zIH0gZnJvbSBcIi4uLy4uL2RvbWFpbnMuanNcIlxuXG4vKiogXG4gKiBDbGFzcyBmb3IgdGVzdGluZyB3aGV0aGVyIGEgVVJMIG1hdGNoZXMgYSBzZXQgb2YgZG9tYWlucy5cbiAqIEN1cnJlbnRseSBpbXBsZW1lbnRlZCB3aXRoIHRoZSBuYXRpdmUgUmVnRXhwIG92ZXIgdGhlIGZ1bGwgVVJMLCB3aGljaCBnaXZlcyBnb29kIHBlcmZvcm1hbmNlLlxuICogV2UgbWlnaHQgYmUgYWJsZSB0byBzcGVlZCB0aGlzIHVwIGJ5IHBhcnNpbmcgdGhlIFVSTCBhbmQgdGhlbiBvbmx5IG1hdGNoaW5nIGRvbWFpbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcmxNYXRjaGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBVUkwgbWF0Y2hlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIC0gVGhlIHNldCBvZiBkb21haW5zIHRvIG1hdGNoIGFnYWluc3QuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMucmVnRXhwID0gbmV3IFJlZ0V4cChjcmVhdGVVcmxSZWdleFN0cmluZyhkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMpLCBcImlcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdCB3aGV0aGVyIGEgVVJMIG1hdGNoZXMgYSBkb21haW4gaW4gdGhlIHNldCBvZiBkb21haW5zLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHRlc3QuXG4gICAgICovXG4gICAgdGVzdFVybCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnRXhwLnRlc3QodXJsKTtcbiAgICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGZvciBtYXRjaGluZyBhIFVSTCBhZ2FpbnN0IGEgc2V0IG9mIGRvbWFpbnMuXG4gKiBXaWxsIG1hdGNoIGh0dHAgYW5kIGh0dHBzIHByb3RvY29scy4gQ3VycmVudGx5IGNhc2Ugc2Vuc2l0aXZlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZG9tYWlucyAtIFRoZSBzZXQgb2YgZG9tYWlucyB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybFJlZ2V4U3RyaW5nKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyA9IHRydWUpIHtcbiAgICB2YXIgdXJsTWF0Y2hSRSA9IFwiXig/Omh0dHB8aHR0cHMpOi8vXCIgKyAobWF0Y2hTdWJkb21haW5zID8gXCIoPzpbQS1aYS16MC05XFxcXC1dK1xcXFwuKSpcIiA6IFwiXCIpICsgXCIoPzpcIjtcbiAgICBmb3IgKGNvbnN0IGRvbWFpbiBvZiBkb21haW5zKVxuICAgICAgICB1cmxNYXRjaFJFID0gdXJsTWF0Y2hSRSArIGRvbWFpbi5yZXBsYWNlKC9cXC4vZywgXCJcXFxcLlwiKSArIFwifFwiO1xuICAgIHVybE1hdGNoUkUgPSB1cmxNYXRjaFJFLnN1YnN0cmluZygwLCB1cmxNYXRjaFJFLmxlbmd0aCAtIDEpICsgXCIpKD86JHwoL3xcXFxcPykuKilcIjsgIFwiKSg/OiR8Ly4qKVwiO1xuICAgIHJldHVybiB1cmxNYXRjaFJFO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGFycmF5IG9mIG1hdGNoIHBhdHRlcm5zIGZvciBtYXRjaGluZyBhIFVSTCBhZ2FpbnN0IGEgc2V0IG9mIGRvbWFpbnMuXG4gKiBXaWxsIG1hdGNoIGh0dHAgYW5kIGh0dHBzIHByb3RvY29scy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGRvbWFpbnMgLSBUaGUgc2V0IG9mIGRvbWFpbnMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW21hdGNoU3ViZG9tYWlucz10cnVlXSAtIFdoZXRoZXIgdG8gbWF0Y2ggc3ViZG9tYWlucyBvZiBkb21haW5zIGluIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IG9mIG1hdGNoIHBhdHRlcm5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXkoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zID0gdHJ1ZSkge1xuICAgIHZhciBtYXRjaFBhdHRlcm5zID0gWyBdO1xuICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHtcbiAgICAgICAgbWF0Y2hQYXR0ZXJucy5wdXNoKFwiaHR0cDovL1wiICsgKCBtYXRjaFN1YmRvbWFpbnMgPyBcIiouXCIgOiBcIlwiICkgKyBkb21haW4gKyBcIi8qXCIpO1xuICAgICAgICBtYXRjaFBhdHRlcm5zLnB1c2goXCJodHRwczovL1wiICsgKCBtYXRjaFN1YmRvbWFpbnMgPyBcIiouXCIgOiBcIlwiICkgKyBkb21haW4gKyBcIi8qXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hQYXR0ZXJucztcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBhcnJheSBvZiBtYXRjaCBwYXR0ZXJucyBmb3IgbWF0Y2hpbmcgYSBVUkwgYWdhaW5zdCBhIHNldCBvZiBkb21haW5zLlxuICogV2lsbCBtYXRjaCBodHRwIGFuZCBodHRwcyBwcm90b2NvbHMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIC0gVGhlIHNldCBvZiBkb21haW5zIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaFN1YmRvbWFpbnM9dHJ1ZV0gLSBXaGV0aGVyIHRvIG1hdGNoIHN1YmRvbWFpbnMgb2YgZG9tYWlucyBpbiB0aGUgc2V0LlxuICogQHJldHVybnMge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBtYXRjaCBwYXR0ZXJucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5V2l0aFBhdGgoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zID0gdHJ1ZSkge1xuICAgIHZhciBtYXRjaFBhdHRlcm5zID0gWyBdO1xuICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHtcbiAgICAgICAgbWF0Y2hQYXR0ZXJucy5wdXNoKFwiaHR0cDovL1wiICsgKCBtYXRjaFN1YmRvbWFpbnMgPyBcIiouXCIgOiBcIlwiICkgKyBkb21haW4gKyBcIi8qLypcIik7XG4gICAgICAgIG1hdGNoUGF0dGVybnMucHVzaChcImh0dHBzOi8vXCIgKyAoIG1hdGNoU3ViZG9tYWlucyA/IFwiKi5cIiA6IFwiXCIgKSArIGRvbWFpbiArIFwiLyovKlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoUGF0dGVybnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHVkeVBhdGhzKCkge1xuICAgIHZhciBzdHVkeVBhdGhzID0ge307XG4gICAgc3R1ZHlQYXRocy5kb21haW5zID0gbmV3IFVybE1hdGNoZXIoZGVzdGluYXRpb25Eb21haW5zKTtcbiAgICBzdHVkeVBhdGhzLnBhdGhzID0ge31cbiAgICBzdHVkeVBhdGhzLmRlc3RpbmF0aW9uUGF0aHMgPSBkZXN0aW5hdGlvbkRvbWFpbnM7XG4gICAgcmV0dXJuIHN0dWR5UGF0aHM7XG59XG5cblxuLy9leHBvcnQgZnVuY3Rpb24gZ2V0QWRGaWx0ZXJzKCkge1xuLy8gICAgcmV0dXJuIGFkQ3NzU2VsZWN0b3JzO1xuLy99XG4iLCIvKiogXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIHJlc2VhcmNoIGFic3RyYWN0aW9uIG92ZXIgYnJvd3NlciBldmVudHMgcmVsYXRlZCB0b1xuICogd2VicGFnZSBsb2FkaW5nIGFuZCB1c2VyIGF0dGVudGlvbi4gVGhlIGFic3RyYWN0aW9uIGNvbnNpc3RzIG9mIHRoZSBmb2xsb3dpbmdcbiAqIGV2ZW50czpcbiAqICAgKiBQYWdlIFZpc2l0IFN0YXJ0IC0gdGhlIGJyb3dzZXIgaGFzIHN0YXJ0ZWQgdG8gbG9hZCBhIHdlYnBhZ2UgaW4gYSB0YWJcbiAqICAgKiBQYWdlIEF0dGVudGlvbiBTdGFydCAtIHRoZSB1c2VyIGhhcyBzaGlmdGVkIGF0dGVudGlvbiB0byBhIHRhYlxuICogICAqIFBhZ2UgQXR0ZW50aW9uIFN0b3AgLSB0aGUgdXNlciBoYXMgc2hpZnRlZCBhdHRlbnRpb24gZnJvbSBhIHRhYlxuICogICAqIFBhZ2UgVmlzaXQgU3RvcCAtIHRoZSBicm93c2VyIGhhcyB1bmxvYWRlZCBhIHdlYnBhZ2UgZnJvbSBhIHRhYlxuICogICBcbiAqIEF0dGVudGlvbiBpcyBkZWZpbmVkIGFzIHNhdGlzZnlpbmcgYWxsIG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICAgKiBUaGUgdGFiIGlzIHRoZSBhY3RpdmUgdGFiIGluIGl0cyBicm93c2VyIHdpbmRvd1xuICogICAqIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgdGFiIGlzIHRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93XG4gKiAgICogVGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3cgaGFzIGZvY3VzIGluIHRoZSBvcGVyYXRpbmcgc3lzdGVtXG4gKiAgICogKE9wdGlvbmFsKSBUaGUgdXNlciBoYXMgcHJvdmlkZWQgaW5wdXQgdG8gdGhlIGJyb3dzZXIgd2l0aGluIHRoZSBsYXN0IE4gc2Vjb25kc1xuICogICBcbiAqIElmIHRoZSB1c2VyJ3MgYXR0ZW50aW9uIGlzIG9uIGEgdGFiIGFuZCB0aGUgdGFiIGNsb3NlcywgdGhlIHNlcXVlbmNlIG9mIGV2ZW50c1xuICogd2lsbCBiZSBQYWdlIEF0dGVudGlvbiBTdG9wIC0+IFBhZ2UgVmlzaXQgU3RvcC4gVGhlIHRpbWVzdGFtcCBpcyBzeW5jcm9uaXplZCBmb3JcbiAqIHRoZSBldmVudHMuXG4gKlxuICogSWYgdGhlIHVzZXIncyBhdHRlbnRpb24gaXMgb24gYSB0YWIgYW5kIHRoZSBwYWdlIGluIHRoZSB0YWIgY2hhbmdlcywgdGhlIHNlcXVlbmNlXG4gKiBvZiBldmVudHMgd2lsbCBiZSBQYWdlIEF0dGVudGlvbiBTdG9wIC0+IFBhZ2UgVmlzaXQgU3RvcCAtPiBQYWdlIFZpc2l0IFN0YXJ0IC0+XG4gKiBQYWdlIEF0dGVudGlvbiBTdGFydC4gVGhlIHRpbWVzdGFtcCBpcyBzeW5jcm9uaXplZCBmb3IgdGhlIGV2ZW50cy5cbiAqXG4gKiBUaGUgcGFnZSB2aXNpdCBhbmQgYXR0ZW50aW9uIGV2ZW50cyBhcmUgaW1wbGVtZW50ZWQgaW4gb25lIG1vZHVsZSBpbiBvcmRlciB0b1xuICogZ3VhcmFudGVlIHRoZSBvcmRlcmluZyBvZiBldmVudHMuXG4gKlxuICogUmVwcmVzZW50ZWQgYXMgYSBmaW5pdGUtc3RhdGUgYXV0b21hdG9uLCB0aGUgcmVzZWFyY2ggYWJzdHJhY3Rpb24gY29uc2lzdHMgb2ZcbiAqIHRoZSBmb2xsb3dpbmcgc3RhdGVzIGFuZCB0cmFuc2l0aW9ucy4gIFxuICogYGBgICAgXG4gKiAgICAgICAgUGFnZSBBdHRlbnRpb24gU3RhcnQgPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+IFBhZ2UgQXR0ZW50aW9uIFN0b3AgIFxuICogICAgICAgICAgICAgICAgICBeICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFxuICogICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFxuICogICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYgIFxuICogICBQYWdlIFZpc2l0IFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+IFBhZ2UgVmlzaXQgU3RvcCAgXG4gKiBgYGAgICBcbiAqIE5vdGUgdGhhdCB0aGlzIG1vZHVsZSBkZXBlbmRzIG9uIHRoZSBpZGxlIEFQSSwgd2hpY2ggaGFzIGEgY291cGxlIHF1aXJrcyBpbiBGaXJlZm94OlxuICogICAqIFRoZXJlIGlzIGEgZml2ZS1zZWNvbmQgaW50ZXJ2YWwgd2hlbiBwb2xsaW5nIGlkbGUgc3RhdHVzIGZyb20gdGhlIG9wZXJhdGluZ1xuICogICAgIHN5c3RlbS5cbiAqICAgKiBEZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtLCB0aGUgaWRsZSBBUEkgcmVwb3J0cyBlaXRoZXIgdGltZSBzaW5jZSB1c2VyIGlucHV0IHRvXG4gKiAgICAgdGhlIGJyb3dzZXIgb3IgdGltZSBzaW5jZSB1c2VyIGlucHV0IHRvIHRoZSBvcGVyYXRpbmcgc3lzdGVtLlxuICpcbiAqIFRoZSBwb2xsaW5nIGludGVydmFsIGNvYXJzZW5zIHRoZSB0aW1pbmcgb2YgcGFnZSBhdHRlbnRpb24gZXZlbnRzIHJlbGF0ZWQgdG8gaWRsZSBzdGF0ZS5cbiAqIEFzIGxvbmcgYXMgdGhlIHBvbGxpbmcgaW50ZXJ2YWwgaXMgcmVsYXRpdmVseSBzaG9ydCBpbiBjb21wYXJpc29uIHRvIHRoZSBpZGxlIHRocmVzaG9sZCxcbiAqIHRoYXQgc2hvdWxkIG5vdCBiZSBhbiBpc3N1ZS5cbiAqIFxuICogVGhlIHBsYXRmb3JtLXNwZWNpZmljIG1lYW5pbmcgb2YgaWRsZSBzdGF0ZSBzaG91bGQgYWxzbyBub3QgYmUgYW4gaXNzdWUuIFRoZXJlIGlzIG9ubHkgYVxuICogZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28gbWVhbmluZ3Mgb2YgaWRsZSBzdGF0ZSB3aGVuIHRoZSB1c2VyIGlzIHByb3ZpZGluZyBpbnB1dCB0b1xuICogYW5vdGhlciBhcHBsaWNhdGlvbjsgaWYgdGhlIHVzZXIgaXMgcHJvdmlkaW5nIGlucHV0IHRvIHRoZSBicm93c2VyLCBvciBpcyBub3QgcHJvdmlkaW5nXG4gKiBpbnB1dCBhdCBhbGwsIHRoZSB0d28gbWVhbmluZ3MgYXJlIGlkZW50aWNhbC4gSW4gdGhlIHNjZW5hcmlvIHdoZXJlIHRoZSB1c2VyIGlzIHByb3ZpZGluZ1xuICogaW5wdXQgdG8gYW5vdGhlciBhcHBsaWNhdGlvbiwgdGhlIGJyb3dzZXIgd2lsbCBsb3NlIGZvY3VzIGluIHRoZSBvcGVyYXRpbmcgc3lzdGVtOyB0aGlzXG4gKiBtb2R1bGUgd2lsbCBkZXRlY3QgdGhhdCB3aXRoIHRoZSB3aW5kb3dzIEFQSSBhbmQgZmlyZSBhIHBhZ2UgYXR0ZW50aW9uIHN0b3AgKGlmIG5lZWRlZCkuXG4gKiBcbiAqIFNvbWUga25vd24gbGltaXRhdGlvbnMgdG8gYmUgYXdhcmUgb2Y6XG4gKiAgICogVGhlIG1vZHVsZSBkb2VzIG5vdCBjdXJyZW50bHkgZmlsdGVyIHRhYi1sZXZlbCBjb250ZW50IGJ5IHByb3RvY29sIG9yIGNvbnRlbnQgdHlwZS4gV2VcbiAqICAgICBtaWdodCB3YW50IHRvIHJldmlzaXQgdGhpcy4gRmlsdGVyaW5nIGJ5IHByb3RvY29sIGlzIGVhc3nigJR0aGUgbW9kdWxlIGFscmVhZHkgdHJhY2tzXG4gKiAgICAgd2hldGhlciBhIHRhYiBjb250YWlucyBjb250ZW50IGxvYWRlZCB2aWEgSFRUUCBvciBIVFRQUy4gRmlsdGVyaW5nIGJ5IGNvbnRlbnQgdHlwZSBpc1xuICogICAgIG1vcmUgZGlmZmljdWx0LiBXZSBtaWdodCBiZSBhYmxlIHRvIGFjY29tcGxpc2ggdGhhdCBieSB1c2luZyBgd2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZGBcbiAqICAgICB0byBzdGFydCBwYWdlIHZpc2l0cyBhbmQgY2hlY2tpbmcgdGhlIGBDb250ZW50LVR5cGVgIGhlYWRlciwgdGhvdWdoIHdlJ2Qgc3RpbGwgaGF2ZSB0byBoYW5kbGVcbiAqICAgICB0YWJzIHRoYXQgYXJlIG9wZW4gd2hlbiB0aGUgbW9kdWxlIGluaXRpYWxpemVzLCBhbmQgd2UnZCBtaXNzIHBhZ2VzIHRoYXQgcmVseSBvbiBNSU1FIHR5cGVcbiAqICAgICBzbmlmZmluZy5cbiAqICAgKiBXaGVuIHRoZSBtb2R1bGUgaW5pdGlhbGl6ZXMsIHRoZXJlIGlzbid0IGEgZ29vZCB3YXkgdG8gZ2V0IHRoZSByZWZlcnJlcnMgZm9yIG9wZW5cbiAqICAgICB0YWJzIHdpdGhvdXQgZWl0aGVyIGRlbGF5aW5nIGluaXRpYWxpemF0aW9uIG9yIHJpc2tpbmcgYSByYWNlIGNvbmRpdGlvbi4gVGhlXG4gKiAgICAgcmVmZXJyZXJzIGZvciBwYWdlcyBvcGVuIHdoZW4gdGhlIG1vZHVsZSBpbml0aWFsaXplcyBhcmUgY3VycmVudGx5IHNldCB0byBgXCJcImAuXG4gKiBcbiAqIEFuZCBzb21lIGltcGxlbWVudGF0aW9uIHF1aXJrcyB0byBiZSBhd2FyZSBvZiBmb3IgZnV0dXJlIGRldmVsb3BtZW50IG9uIHRoaXMgbW9kdWxlOlxuICogICAqIFRoZSBgdGFicy5vbkNyZWF0ZWRgIGV2ZW50IGFwcGVhcnMgdG8gY29uc2lzdGVudGx5IGZpcmUgYmVmb3JlIHRoZSBgd2luZG93cy5vbkNyZWF0ZWRgXG4gKiAgICAgZXZlbnQsIHNvIHRoaXMgbW9kdWxlIGxpc3RlbnMgdG8gdGhlIGB0YWJzLm9uQ3JlYXRlZGAgZXZlbnQgdG8gZ2V0IGFuIGVhcmxpZXIgdmlldyBvZlxuICogICAgIHdpbmRvdyBkZXRhaWxzLiBUaGUgbW9kdWxlIGFzc3VtZXMgdGhhdCBhIGB0YWJzLm9uQ3JlYXRlZGAgZXZlbnQgd2l0aCBhIHBvc2l0aXZlIHRhYlxuICogICAgIElEIGlzIGZvciBhIGBcIm5vcm1hbFwiYCBvciBgXCJwb3B1cFwiYCB3aW5kb3cgdHlwZS5cbiAqICAgKiBOb24tYnJvd3NlciB3aW5kb3dzIGRvIG5vdCBhcHBlYXIgaW4gdGhlIHJlc3VsdHMgb2YgYHdpbmRvd3MuZ2V0QWxsKClgLCBhbmQgY2FsbGluZ1xuICogICAgIGB3aW5kb3dzLmdldCgpYCBvbiBhIG5vbi1icm93c2VyIHdpbmRvdyB0aHJvd3MgYW4gZXJyb3IuIFN3aXRjaGluZyBmb2N1cyB0byBhIG5vbi1cbiAqICAgICBicm93c2VyIHdpbmRvdyB3aWxsLCBob3dldmVyLCBmaXJlIHRoZSBgd2luZG93cy5vbkZvY3VzQ2hhbmdlZGAgZXZlbnQuIFRoZSBtb2R1bGVcbiAqICAgICBhc3N1bWVzIHRoYXQgaWYgYHdpbmRvd3Mub25Gb2N1c0NoYW5nZWRgIGZpcmVzIHdpdGggYW4gdW5rbm93biB3aW5kb3csIHRoYXQgd2luZG93XG4gKiAgICAgaXMgYSBub24tYnJvd3NlciB3aW5kb3cuXG4gKiAgICogVGhlIG1vZHVsZSBhc3N1bWVzIHRoYXQgdmFsaWQgdGFiIElEcyBhbmQgd2luZG93IElEcyBhcmUgYWx3YXlzID49IDAuXG4gKiAgICogVGhlIG1vZHVsZSBhc3N1bWVzIHRoYXQsIGlmIHRoZXJlIHdhcyBhIGB3ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnNgIGV2ZW50IGJlZm9yZSBhXG4gKiAgICAgYHRhYnMub25VcGRhdGVkYCBldmVudCB3aXRoIHRoZSBzYW1lIHRhYiBJRCBhbmQgVVJMLCB0aGUgd2ViIHJlcXVlc3QgbWF0Y2hlcyB0aGUgdGFiXG4gKiAgICAgdXBkYXRlLiBUaGlzIGFzc3VtcHRpb24gaXMgbmVlZGVkIHRvIG1hdGNoIHJlZmVycmVycyB0byBuZXcgcGFnZXMgaW4gdGFicy5cbiAqICAgKiBUaGUgbW9kdWxlIGxpc3RlbnMgZm9yIGB0YWJzLm9uQXR0YWNoZWRgIHRvIHRyYWNrIHRhYiBtb3ZlbWVudCBiZXR3ZWVuIHdpbmRvd3MuIEl0IGRvZXNcbiAqICAgICBub3QgbGlzdGVuIGZvciBgdGFicy5vbkRldGFjaGVkYCBzbyB0aGF0IHRhYnMgcmVtYWluIGFzc29jaWF0ZWQgd2l0aCB2YWxpZCB3aW5kb3dzIGFuZFxuICogICAgIGJlY2F1c2UgaXQncyBsaWtlbHkgdGhlIHVzZXIgaXMganVzdCBtb3ZpbmcgdGhlIHRhYiB3aXRoaW4gdGhlIHRhYiBzdHJpcCBpbiBhIHdpbmRvdy5cbiAqICAgICBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuUGFnZUV2ZW50c1xuICovXG5cbmltcG9ydCAqIGFzIElkbGUgZnJvbSBcIi4vSWRsZS5qc1wiXG5cbi8qKlxuICogVGhlIHRocmVzaG9sZCBOIChpbiBzZWNvbmRzKSBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgYnJvd3NlciBoYXMgdGhlIHVzZXIncyBhdHRlbnRpb24uXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5jb25zdCBpZGxlVGhyZXNob2xkID0gMTU7XG5cbi8qKlxuICogV2hldGhlciB0byBjb25zaWRlciB1c2VyIGlucHV0IGluIGRldGVybWluaW5nIGF0dGVudGlvbiBzdGF0ZS5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG5jb25zdCBjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbiA9IHRydWU7XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgcGFnZSB2aXNpdCBzdGFydCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lclxuICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHMgLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLndpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBOb3RlIHRoYXQgdGFicyBjYW4gc3Vic2VxdWVudGx5IG1vdmUgYmV0d2VlbiB3aW5kb3dzLlxuICogQHBhcmFtIHtzdHJpbmd9IGRldGFpbHMudXJsIC0gVGhlIFVSTCBvZiB0aGUgcGFnZSBsb2FkaW5nIGluIHRoZSB0YWIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGV0YWlscy5yZWZlcnJlciAtIFRoZSByZWZlcnJlciBVUkwgZm9yIHRoZSBwYWdlIGxvYWRpbmcgaW4gdGhlIHRhYiwgb3IgYFwiXCJgIGlmXG4gKiB0aGVyZSBpcyBubyByZWZlcnJlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHR5cGVkZWYge09iamVjdH0gUGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcHJvcGVydHkge3BhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIHNldCBvZiBsaXN0ZW5lciBkZXRhaWxzIGZvciBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge1NldDxQYWdlVmlzaXRTdGFydExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJTZXQgPSBuZXcgU2V0KCk7XG5cbi8qKiBcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnRzLlxuICogQHBhcmFtIHtwYWdlVmlzaXRTdGFydExpc3RlbmVyfSBwYWdlVmlzaXRTdGFydExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbbm90aWZ5QWJvdXRDdXJyZW50UGFnZXM9dHJ1ZV0gLSBXaGV0aGVyIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWQgZm9yIHRoZSBjdXJyZW50bHkgb3BlbiBzZXQgb2YgcGFnZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcml2YXRlV2luZG93cz1mYWxzZV0gLSBXaGV0aGVyIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWQgZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHRvIHVzZSBpZiB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciB0aGUgY3VycmVudGx5IG9wZW4gc2V0IG9mIHBhZ2VzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJQYWdlVmlzaXRTdGFydExpc3RlbmVyKHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIsIG5vdGlmeUFib3V0Q3VycmVudFBhZ2VzID0gdHJ1ZSwgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSwgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGluaXRpYWxpemUoKTtcbiAgICBwYWdlVmlzaXRTdGFydExpc3RlbmVyU2V0LmFkZCh7XG4gICAgICAgIGxpc3RlbmVyOiBwYWdlVmlzaXRTdGFydExpc3RlbmVyLFxuICAgICAgICBwcml2YXRlV2luZG93czogcHJpdmF0ZVdpbmRvd3NcbiAgICB9KTtcbiAgICBpZihub3RpZnlBYm91dEN1cnJlbnRQYWdlcylcbiAgICAgICAgbm90aWZ5UGFnZVZpc2l0U3RhcnRMaXN0ZW5lckFib3V0Q3VycmVudFBhZ2VzKHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzLCB0aW1lU3RhbXApO1xufVxuXG4vKiogXG4gKiBOb3RpZnkgcGFnZSB2aXNpdCBzdGFydCBsaXN0ZW5lcnMgYWJvdXQgYSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCBvZiB0aGUgcGFnZSBsb2FkaW5nIGluIHRoZSB0YWIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJyZXIgLSBUaGUgcmVmZXJyZXIgVVJMIGZvciB0aGUgcGFnZSBsb2FkaW5nIGluIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSBldmVudCBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmeVBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJzKHRhYklkLCB3aW5kb3dJZCwgdXJsLCByZWZlcnJlciwgcHJpdmF0ZVdpbmRvdywgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGZvciAoY29uc3QgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHMgb2YgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lclNldClcbiAgICAgICAgaWYoIXByaXZhdGVXaW5kb3cgfHwgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHMucHJpdmF0ZVdpbmRvd3MpXG4gICAgICAgICAgICBwYWdlVmlzaXRTdGFydExpc3RlbmVyRGV0YWlscy5saXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgdGFiSWQsXG4gICAgICAgICAgICAgICAgd2luZG93SWQsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwucmVwZWF0KDEpLCAvLyBjb3B5IHRoZSBzdHJpbmcgaW4gY2FzZSBhIGxpc3RlbmVyIG1vZGlmaWVzIGl0XG4gICAgICAgICAgICAgICAgcmVmZXJyZXI6IHJlZmVycmVyLnJlcGVhdCgxKSxcbiAgICAgICAgICAgICAgICBwcml2YXRlV2luZG93LFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcFxuICAgICAgICAgICAgfSk7XG59XG5cbi8qKlxuICogTm90aWZ5IGEgcGFnZSB2aXNpdCBzdGFydCBsaXN0ZW5lciBhYm91dCB0aGUgY3VycmVudCBzZXQgb2Ygb3BlbiBwYWdlcy4gVXNlZnVsIGZvciB3aGVuXG4gKiBhIGxpc3RlbmVyIGlzIHJlZ2lzdGVyZWQgaW4gdGhlIG1pZGRsZSBvZiBhIGJyb3dzaW5nIHNlc3Npb24gKGUuZy4sIGJlY2F1c2UgdGhlIGV4dGVuc2lvblxuICogd2FzIGp1c3QgaW5zdGFsbGVkIG9yIHRoZSB1c2VyIGp1c3QgZ2F2ZSBjb25zZW50KS5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3BhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJ9IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGFib3V0IHBhZ2VzIGluIHByaXZhdGVcbiAqIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG5vdGlmeVBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJBYm91dEN1cnJlbnRQYWdlcyhwYWdlVmlzaXRTdGFydExpc3RlbmVyLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKSB7XG4gICAgLy8gTG9hZCB0aGUgdGFicyBmcm9tIHRoZSB0YWIgc3RhdGUgY2FjaGUgdG8gYXZvaWQgaW5jb25zaXN0ZW5jaWVzXG4gICAgZm9yIChjb25zdCBbdGFiSWQsIHRhYkRldGFpbHNdIG9mIHRhYlN0YXRlKVxuICAgICAgICBpZighdGFiRGV0YWlscy5wcml2YXRlV2luZG93IHx8IHByaXZhdGVXaW5kb3dzKVxuICAgICAgICAgICAgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgICAgICAgICAgIHdpbmRvd0lkOiB0YWJEZXRhaWxzLndpbmRvd0lkLFxuICAgICAgICAgICAgICAgIHVybDogdGFiRGV0YWlscy51cmwucmVwZWF0KDEpLCAvLyBjb3B5IHRoZSBzdHJpbmcgaW4gY2FzZSBhIGxpc3RlbmVyIG1vZGlmaWVzIGl0XG4gICAgICAgICAgICAgICAgcmVmZXJyZXI6IHRhYkRldGFpbHMucmVmZXJyZXIucmVwZWF0KDEpLFxuICAgICAgICAgICAgICAgIHByaXZhdGVXaW5kb3c6IHRhYkRldGFpbHMucHJpdmF0ZVdpbmRvdyxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcFxuICAgICAgICAgICAgfSk7XG59XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgcGFnZSB2aXNpdCBzdG9wIGV2ZW50cy5cbiAqIEBjYWxsYmFjayBwYWdlVmlzaXRTdG9wTGlzdGVuZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSB2aXNpdCBzdG9wIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLndpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSB2aXNpdCBzdGFydCBzdG9wIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHR5cGVkZWYge09iamVjdH0gUGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlsc1xuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwcm9wZXJ0eSB7cGFnZVZpc2l0U3RvcExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBzZXQgb2YgbGlzdGVuZXIgZGV0YWlscyBmb3IgcGFnZSB2aXNpdCBzdG9wIGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge1NldDxQYWdlVmlzaXRTdG9wTGlzdGVuZXJEZXRhaWxzPn1cbiAqL1xuY29uc3QgcGFnZVZpc2l0U3RvcExpc3RlbmVyU2V0ID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHBhZ2UgdmlzaXQgc3RvcCBldmVudHMuXG4gKiBAcGFyYW0ge3BhZ2VWaXNpdFN0b3BMaXN0ZW5lcn0gcGFnZVZpc2l0U3RvcExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJpdmF0ZVdpbmRvd3M9ZmFsc2VdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQYWdlVmlzaXRTdG9wTGlzdGVuZXIocGFnZVZpc2l0U3RvcExpc3RlbmVyLCBwcml2YXRlV2luZG93cyA9IGZhbHNlKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lclNldC5hZGQoe1xuICAgICAgICBsaXN0ZW5lcjogcGFnZVZpc2l0U3RvcExpc3RlbmVyLFxuICAgICAgICBwcml2YXRlV2luZG93czogcHJpdmF0ZVdpbmRvd3NcbiAgICB9KTtcbn1cblxuLyoqIFxuICogTm90aWZ5IHBhZ2UgdmlzaXQgc3RvcCBsaXN0ZW5lcnMgYWJvdXQgYSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIGV2ZW50IGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuZnVuY3Rpb24gbm90aWZ5UGFnZVZpc2l0U3RvcExpc3RlbmVycyh0YWJJZCwgd2luZG93SWQsIHByaXZhdGVXaW5kb3csIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHMgb2YgcGFnZVZpc2l0U3RvcExpc3RlbmVyU2V0KVxuICAgICAgICBpZighcHJpdmF0ZVdpbmRvdyB8fCBwYWdlVmlzaXRTdG9wTGlzdGVuZXJEZXRhaWxzLnByaXZhdGVXaW5kb3dzKVxuICAgICAgICAgICAgcGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlscy5saXN0ZW5lcih7IHRhYklkLCB3aW5kb3dJZCwgdGltZVN0YW1wIH0pO1xufVxuXG4vKipcbiAqIEEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50cy5cbiAqIEBjYWxsYmFjayBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lclxuICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHMgLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy53aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogTm90ZSB0aGF0IHRhYnMgY2FuIHN1YnNlcXVlbnRseSBtb3ZlIGJldHdlZW4gd2luZG93cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyRGV0YWlsc1xuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwcm9wZXJ0eSB7cGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIHNldCBvZiBsaXN0ZW5lciBkZXRhaWxzIGZvciBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtTZXQ8UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJEZXRhaWxzPn1cbiAqL1xuY29uc3QgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJTZXQgPSBuZXcgU2V0KCk7XG5cbi8qKiBcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50cy5cbiAqIEBwYXJhbSB7cGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJ9IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdGlmeUFib3V0Q3VycmVudFBhZ2VzPXRydWVdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkXG4gKiBmb3IgdGhlIHBhZ2UgdGhhdCBjdXJyZW50bHkgaGFzIGF0dGVudGlvbiAoaWYgdGhlcmUgaXMgb25lKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByaXZhdGVXaW5kb3dzPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgdG8gdXNlIGlmIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWRcbiAqIGZvciB0aGUgcGFnZSB0aGF0IGN1cnJlbnRseSBoYXMgYXR0ZW50aW9uIChpZiB0aGVyZSBpcyBvbmUpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciwgbm90aWZ5QWJvdXRDdXJyZW50UGFnZUF0dGVudGlvbiA9IHRydWUsIHByaXZhdGVXaW5kb3dzID0gZmFsc2UsIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJTZXQuYWRkKHtcbiAgICAgICAgbGlzdGVuZXI6IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLFxuICAgICAgICBwcml2YXRlV2luZG93czogcHJpdmF0ZVdpbmRvd3NcbiAgICB9KTtcbiAgICBpZihub3RpZnlBYm91dEN1cnJlbnRQYWdlQXR0ZW50aW9uKVxuICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckFib3V0Q3VycmVudFBhZ2VBdHRlbnRpb24ocGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzLCB0aW1lU3RhbXApO1xufVxuXG4vKiogXG4gKiBOb3RpZnkgcGFnZSBhdHRlbnRpb24gc3RhcnQgbGlzdGVuZXJzIGFuZCBjb250ZW50IHNjcmlwdHMgYWJvdXQgYSBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgZXZlbnQgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5mdW5jdGlvbiBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcnModGFiSWQsIHdpbmRvd0lkLCBwcml2YXRlV2luZG93LCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgZm9yIChjb25zdCBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHMgb2YgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJTZXQpXG4gICAgICAgIGlmKCFwcml2YXRlV2luZG93IHx8IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyRGV0YWlscy5wcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyRGV0YWlscy5saXN0ZW5lcih7IHRhYklkLCB3aW5kb3dJZCwgdGltZVN0YW1wIH0pO1xuICAgIGlmKG5vdGlmeUNvbnRlbnRTY3JpcHRzQWJvdXRQYWdlQXR0ZW50aW9uICYmICghcHJpdmF0ZVdpbmRvdyB8fCBub3RpZnlDb250ZW50U2NyaXB0c0luUHJpdmF0ZVdpbmRvd3NBYm91dFBhZ2VBdHRlbnRpb24pKVxuICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdHlwZTogXCJXZWJTY2llbmNlLnBhZ2VBdHRlbnRpb25TdGFydFwiIH0pO1xufVxuXG4vKipcbiAqIE5vdGlmeSBhIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGxpc3RlbmVyIGFib3V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiBpbiB0aGUgY3VycmVudGx5XG4gKiBmb2N1c2VkIHdpbmRvdyAoaWYgdGhlcmUgaXMgc3VjaCBhIHRhYikuIFVzZWZ1bCBmb3Igd2hlbiBhIGxpc3RlbmVyIGlzIHJlZ2lzdGVyZWQgaW4gdGhlXG4gKiBtaWRkbGUgb2YgYSBicm93c2luZyBzZXNzaW9uIChlLmcuLCBiZWNhdXNlIHRoZSBleHRlbnNpb24gd2FzIGp1c3QgaW5zdGFsbGVkIG9yIHRoZSB1c2VyXG4gKiBqdXN0IGdhdmUgY29uc2VudCkuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcn0gcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGlmIHRoZSBwYWdlIHdpdGhcbiBhdHRlbnRpb24gaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJBYm91dEN1cnJlbnRQYWdlQXR0ZW50aW9uKHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKSB7XG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYWN0aXZlIHRhYiBvciBubyBmb2N1c2VkIHdpbmRvdywgdGhlcmUgaXMgbm8gbm90aWZpY2F0aW9uIHRvIHByb3ZpZGVcbiAgICBpZigoY3VycmVudEFjdGl2ZVRhYiA8IDApIHx8IChjdXJyZW50Rm9jdXNlZFdpbmRvdyA8IDApKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBJZiB0aGUgbW9kdWxlIHNob3VsZCBjb25zaWRlciB1c2VyIGlucHV0IGFuZCB0aGUgYnJvd3NlciBpcyBpbmFjdGl2ZSwgdGhlcmUgaXMgbm8gbm90aWZpY2F0aW9uIHRvIHByb3ZpZGVcbiAgICBpZihjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbiAmJiAhYnJvd3NlcklzQWN0aXZlKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBJZiB0aGUgbGlzdGVuZXIgc2hvdWxkIG5vdCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYWJvdXQgcHJpdmF0ZSB3aW5kb3dzIGFuZCB0aGlzIGlzIGEgcHJpdmF0ZSB3aW5kb3dcbiAgICAvLyBhY2NvcmRpbmcgdG8gdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZSwgdGhlcmUgaXMgbm8gbm90aWZpY2F0aW9uIHRvIHByb3ZpZGVcbiAgICBpZighcHJpdmF0ZVdpbmRvd3MgJiYgaXNQcml2YXRlV2luZG93KGN1cnJlbnRGb2N1c2VkV2luZG93KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIC8vIE90aGVyd2lzZSwgbm90aWZ5IHRoZSBsaXN0ZW5lclxuICAgIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyKHtcbiAgICAgICAgdGFiSWQ6IGN1cnJlbnRBY3RpdmVUYWIsXG4gICAgICAgIHdpbmRvd0lkOiBjdXJyZW50Rm9jdXNlZFdpbmRvdyxcbiAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXBcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50cy5cbiAqIEBjYWxsYmFjayBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyXG4gKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyAtIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMud2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIE5vdGUgdGhhdCB0YWJzIGNhbiBzdWJzZXF1ZW50bHkgbW92ZSBiZXR3ZWVuIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJEZXRhaWxzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHByb3BlcnR5IHtwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgc2V0IG9mIGxpc3RlbmVyIGRldGFpbHMgZm9yIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7U2V0PFBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJEZXRhaWxzPn1cbiAqL1xuY29uc3QgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lclNldCA9IG5ldyBTZXQoKTtcblxuLyoqIFxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgbm90aWZpZWQgYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudHMuXG4gKiBAcGFyYW0ge3BhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJ9IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uIFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzID0gZmFsc2UpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lclNldC5hZGQoe1xuICAgICAgICBsaXN0ZW5lcjogcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG59XG5cbi8qKiBcbiAqIE5vdGlmeSBwYWdlIGF0dGVudGlvbiBzdG9wIGxpc3RlbmVycyBhbmQgY29udGVudCBzY3JpcHRzIGFib3V0IGEgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgZXZlbnQgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5mdW5jdGlvbiBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyh0YWJJZCwgd2luZG93SWQsIHByaXZhdGVXaW5kb3csIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJTZXQpXG4gICAgICAgIGlmKCFwcml2YXRlV2luZG93IHx8IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJEZXRhaWxzLnByaXZhdGVXaW5kb3dzKVxuICAgICAgICAgICAgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIHRhYklkOiB0YWJJZCxcbiAgICAgICAgICAgICAgICB3aW5kb3dJZDogd2luZG93SWQsXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pO1xuICAgIGlmKG5vdGlmeUNvbnRlbnRTY3JpcHRzQWJvdXRQYWdlQXR0ZW50aW9uICYmICghcHJpdmF0ZVdpbmRvdyB8fCBub3RpZnlDb250ZW50U2NyaXB0c0luUHJpdmF0ZVdpbmRvd3NBYm91dFBhZ2VBdHRlbnRpb24pKVxuICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdHlwZTogXCJXZWJTY2llbmNlLnBhZ2VBdHRlbnRpb25TdG9wXCIgfSk7XG59XG5cbi8qKlxuICogV2hldGhlciB0byBub3RpZnkgY29udGVudCBzY3JpcHRzIGluIG5vbi1wcml2YXRlIHdpbmRvd3MgYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RhdGUgY2hhbmdlcy5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBub3RpZnlDb250ZW50U2NyaXB0c0Fib3V0UGFnZUF0dGVudGlvbiA9IGZhbHNlO1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0cyBpbiBwcml2YXRlIHdpbmRvd3MgYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RhdGUgY2hhbmdlcy5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBub3RpZnlDb250ZW50U2NyaXB0c0luUHJpdmF0ZVdpbmRvd3NBYm91dFBhZ2VBdHRlbnRpb24gPSBmYWxzZTtcblxuLyoqXG4gKiBTZXQgd2hldGhlciB0byBub3RpZnkgY29udGVudCBzY3JpcHRzIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXRlIGNoYW5nZXMuXG4gKiBDb250ZW50IHNjcmlwdHMgd2lsbCByZWNlaXZlIHRoZSBtZXNzYWdlIGB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RhcnRcIiB9YFxuICogd2hlbiB0aGUgcGFnZSBnYWlucyBhdHRlbnRpb24sIGFuZCB3aWxsIHJlY2VpdmUgdGhlIG1lc3NhZ2UgYHsgdHlwZTogXCJXZWJTY2llbmNlLnBhZ2VBdHRlbnRpb25TdG9wXCIgfWBcbiAqIHdoZW4gdGhlIHBhZ2UgbG9zZXMgYXR0ZW50aW9uLiBUaGlzIG1vZHVsZSBkb2VzIG5vdCBwcm92aWRlIG5vdGlmaWNhdGlvbnNcbiAqIHRvIGNvbnRlbnQgc2NyaXB0cyBhYm91dCBwYWdlIHZpc2l0IHN0YXRlIGNoYW5nZXMsIGJlY2F1c2UgY29udGVudCBzY3JpcHRzXG4gKiBjYW4gb2JzZXJ2ZSB0aG9zZSBkaXJlY3RseSBhbmQgdGhlcmUgaXMgYSBwb3NzaWJsZSByYWNlIGNvbmRpdGlvbiB3aXRoIGNsb3NpbmcgYSBwYWdlLlxuICogQHBhcmFtIHtib29sZWFufSBub3RpZmljYXRpb25TZXR0aW5nIC0gV2hldGhlciB0byBub3RpZnkgY29udGVudCBzY3JpcHRzXG4gKiBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRQYWdlQXR0ZW50aW9uQ29udGVudFNjcmlwdE1lc3NhZ2VzKG5vdGlmaWNhdGlvblNldHRpbmcsIHByaXZhdGVXaW5kb3dzID0gZmFsc2UpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgbm90aWZ5Q29udGVudFNjcmlwdHNBYm91dFBhZ2VBdHRlbnRpb24gPSBub3RpZmljYXRpb25TZXR0aW5nO1xuICAgIG5vdGlmeUNvbnRlbnRTY3JpcHRzSW5Qcml2YXRlV2luZG93c0Fib3V0UGFnZUF0dGVudGlvbiA9IHByaXZhdGVXaW5kb3dzO1xufVxuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiBpbiB0aGUgY3VycmVudGx5IGZvY3VzZWQgYnJvd3Npbmcgd2luZG93LiBIYXMgdGhlIHZhbHVlIC0xXG4gKiBpZiB0aGVyZSBpcyBubyBzdWNoIHRhYi4gXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBjdXJyZW50QWN0aXZlVGFiID0gLTE7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIGJyb3dzaW5nIHdpbmRvdy4gSGFzIHRoZSB2YWx1ZSAtMSBpZiB0aGVyZSBpcyBubyBzdWNoIHdpbmRvdy4gXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBjdXJyZW50Rm9jdXNlZFdpbmRvdyA9IC0xO1xuXG4vKipcbiAqIENoZWNrcyBmb3IgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogICAqIFRoZSB0YWIgaXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIGluIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB3aW5kb3cuXG4gKiAgICogVGhlIHdpbmRvdyBpcyB0aGUgY3VycmVudGx5IGZvY3VzZWQgd2luZG93LlxuICogICAqIFRoZSBicm93c2VyIGlzIGFjdGl2ZSAoaS5lLiwgbm90IGlkbGUpLCBpZiB0aGUgbW9kdWxlIGlzIGNvbmZpZ3VyZWQgdG9cbiAqICAgICBjb25zaWRlciB1c2VyIGlucHV0IGluIGRldGVybWluaW5nIHRoZSBhdHRlbnRpb24gc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgdG8gY2hlY2suXG4gKi9cbmZ1bmN0aW9uIGNoZWNrRm9yQXR0ZW50aW9uKHRhYklkLCB3aW5kb3dJZCkge1xuICAgIHJldHVybiAoKGN1cnJlbnRBY3RpdmVUYWIgPT0gdGFiSWQpICYmIChjdXJyZW50Rm9jdXNlZFdpbmRvdyA9PSB3aW5kb3dJZCkgJiYgKGNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uID8gYnJvd3NlcklzQWN0aXZlIDogdHJ1ZSkpO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdpbmRvd0RldGFpbHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlIC0gVGhlIHR5cGUgb2Ygd2luZG93LiBUaGlzIHN0cmluZyBjYW4gaGF2ZSB0aGVcbiAqIHNhbWUgdmFsdWVzIGFzIGB3aW5kb3dzLldpbmRvd1R5cGVgIChgXCJub3JtYWxcImAsIGBcInBvcHVwXCJgLCBgXCJwYW5lbFwiYCwgYW5kXG4gKiBgXCJkZXZ0b29sc1wiYCksIHBsdXMgdGhlIHZhbHVlIGBcIm5vcm1hbG9ycG9wdXBcImAgaWYgd2UgZG9uJ3QgeWV0IGtub3cgd2hpY2hcbiAqIG9mIHRoZSB0d28gdHlwZXMgdGhlIHdpbmRvdyBpcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhY3RpdmVUYWIgLSBUaGUgSUQgb2YgdGhlIGFjdGl2ZSB0YWIgaW4gdGhlIHdpbmRvdyxcbiAqIG9yIC0xIGlmIHRoZXJlIGlzIG5vIGFjdGl2ZSB0YWIuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhY3kgLSBXaGV0aGVyIHRoZSB3aW5kb3cgaXMgYSBwcml2YXRlIHdpbmRvdy4gVmFsdWVzXG4gKiBhcmUgYFwibm9ybWFsXCJgIGZvciBhIG5vbi1wcml2YXRlIHdpbmRvdywgYFwicHJpdmF0ZVwiYCBmb3IgYSBwcml2YXRlIHdpbmRvdyxcbiAqIGFuZCBgXCJ1bmtub3duXCJgIGlmIHRoZSB3aW5kb3cncyBwcml2YWN5IHN0YXR1cyBpcyB1bmtub3duLlxuICovXG5cbi8qKlxuICogQSBNYXAgdGhhdCB0cmFja3MgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYnJvd3NlciB3aW5kb3dzLiBXZSBuZWVkIHRoaXMgY2FjaGVkXG4gKiBzdGF0ZSB0byBhdm9pZCBhc3luY2hyb25vdXMgcXVlcmllcyB3aGVuIHRoZSBmb2N1c2VkIHdpbmRvdyBjaGFuZ2VzLiBUaGVcbiAqIGtleXMgYXJlIHRhYiBJRHMgYW5kIHRoZSB2YWx1ZXMgYXJlIFdpbmRvd0RldGFpbHMgb2JqZWN0cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxudW1iZXIsV2luZG93RGV0YWlscz59XG4gKiBAZGVmYXVsdFxuICovXG5jb25zdCB3aW5kb3dTdGF0ZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZSB3aXRoIG5ldyBpbmZvcm1hdGlvbiBhYm91dCBhIHdpbmRvdy4gSWZcbiAqIHdlIGFscmVhZHkga25vdyBtb3JlIHNwZWNpZmljIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3aW5kb3cgdGhhblxuICogdGhlIG5ldyBpbmZvcm1hdGlvbiwgaWdub3JlIHRoZSBuZXcgaW5mb3JtYXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBJRC5cbiAqIEBwYXJhbSB7V2luZG93RGV0YWlsc30gd2luZG93RGV0YWlscyAtIFRoZSBuZXcgaW5mb3JtYXRpb24gYWJvdXQgdGhlXG4gKiB3aW5kb3cuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVdpbmRvd1N0YXRlKHdpbmRvd0lkLCB7XG4gICAgdHlwZSA9IFwidW5rbm93blwiLFxuICAgIGFjdGl2ZVRhYixcbiAgICBwcml2YWN5ID0gXCJ1bmtub3duXCJcbn0pIHtcbiAgICB2YXIgd2luZG93RGV0YWlscyA9IHdpbmRvd1N0YXRlLmdldCh3aW5kb3dJZCk7XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFueSBjYWNoZWQgc3RhdGUgb24gdGhlIHdpbmRvdywgc2F2ZVxuICAgIC8vIHdoYXQgd2Uga25vdyBub3cgYW5kIGJlIGRvbmVcbiAgICBpZih3aW5kb3dEZXRhaWxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2luZG93U3RhdGUuc2V0KHdpbmRvd0lkLCB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgYWN0aXZlVGFiOiAoYWN0aXZlVGFiICE9PSB1bmRlZmluZWQpID8gYWN0aXZlVGFiIDogLTEsXG4gICAgICAgICAgICBwcml2YWN5OiBwcml2YWN5XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVwZGF0ZSBoYXMgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZG93IHR5cGVcbiAgICAvLyB0aGFuIHRoZSBjYWNoZWQgd2luZG93IGRldGFpbHMsIHVwZGF0ZSB0aGUgY2FjaGVkIHdpbmRvd1xuICAgIC8vIHR5cGVcbiAgICBpZigodHlwZSAhPT0gXCJ1bmtub3duXCIpICYmXG4gICAgICAgICgod2luZG93RGV0YWlscy50eXBlID09PSBcInVua25vd25cIikgfHxcbiAgICAgICAgKHR5cGUgIT09IFwibm9ybWFsb3Jwb3B1cFwiKSAmJiAod2luZG93RGV0YWlscy50eXBlID09PSBcIm5vcm1hbG9ycG9wdXBcIikpKVxuICAgICAgICB3aW5kb3dEZXRhaWxzLnR5cGUgPSB0eXBlO1xuXG4gICAgLy8gSWYgdGhlIHVwZGF0ZSBoYXMgYW4gYWN0aXZlIHRhYiBJRCwgdXBkYXRlIHRoZSBjYWNoZWRcbiAgICAvLyBhY3RpdmUgdGFiIElEXG4gICAgaWYoYWN0aXZlVGFiICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHdpbmRvd0RldGFpbHMuYWN0aXZlVGFiID0gYWN0aXZlVGFiO1xuXG4gICAgLy8gSWYgdGhlIHVwZGF0ZSBoYXMgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZG93XG4gICAgLy8gcHJpdmFjeSBwcm9wZXJ0eSB0aGFuIHRoZSBjYWNoZWQgd2luZG93IGRldGFpbHMsXG4gICAgLy8gdXBkYXRlIHRoZSBjYWNoZWQgd2luZG93IHByaXZhY3kgcHJvcGVydHlcbiAgICBpZigocHJpdmFjeSAhPT0gXCJ1bmtub3duXCIpICYmICh3aW5kb3dEZXRhaWxzLnByaXZhY3kgPT09IFwidW5rbm93blwiKSlcbiAgICAgICAgd2luZG93RGV0YWlscy5wcml2YWN5ID0gcHJpdmFjeTtcbn1cblxuLyoqXG4gKiBMb29rIHVwIHRoZSBwcml2YWN5IHByb3BlcnR5IG9mIGEgd2luZG93IGluIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlLlxuICogSWYgdGhlIGNhY2hlZCB3aW5kb3cgc3RhdGUgZG9lcyBub3QgaW5jbHVkZSB0aGUgd2luZG93IG9yIHRoZSB3aW5kb3dcbiAqIHByaXZhY3kgcHJvcGVydHkgaXMgdW5rbm93biAobmVpdGhlciBvZiB3aGljaCBzaG91bGQgaGFwcGVuISksIGFzc3VtZVxuICogaXQncyBhIG5vcm1hbCB3aW5kb3cuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBJRC5cbiAqIEBwYXJhbSB7V2luZG93RGV0YWlsc30gW3dpbmRvd0RldGFpbHNdIC0gVGhlIFdpbmRvd0RldGFpbHMgb2JqZWN0XG4gKiBmb3IgdGhlIHdpbmRvdywgaWYgaXQncyBhbHJlYWR5IGJlZW4gcmV0cmlldmVkLlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHdpbmRvdyBpcyBhIHByaXZhdGUgd2luZG93LlxuICovXG5mdW5jdGlvbiBpc1ByaXZhdGVXaW5kb3cod2luZG93SWQsIHdpbmRvd0RldGFpbHMpIHtcbiAgICBpZih3aW5kb3dEZXRhaWxzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHdpbmRvd0RldGFpbHMgPSB3aW5kb3dTdGF0ZS5nZXQod2luZG93SWQpO1xuICAgIHJldHVybiAod2luZG93RGV0YWlscyAhPT0gdW5kZWZpbmVkKSA/ICh3aW5kb3dEZXRhaWxzLnByaXZhY3kgPT09IFwicHJpdmF0ZVwiKSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRhYkRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIGxvYWRlZCBpbiB0aGUgdGFiLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlZmVycmVyIC0gVGhlIHJlZmVycmVyIFVSTCBmb3IgdGhlIHRhYiwgb3IgYFwiXCJgIGlmXG4gKiB0aGVyZSBpcyBubyByZWZlcnJlci5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIHRhYiBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIElEIG9mIHRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgdGFiLlxuICogQHByb3BlcnR5IHtib29sZWFufSBpc1dlYkNvbnRlbnQgLSBXaGV0aGVyIHRoZSB0YWIgY29udGFpbnMgb3JkaW5hcnkgd2ViXG4gKiBjb250ZW50IChpLmUuLCBhIFVSTCBzdGFydGluZyB3aXRoIGBcImh0dHA6Ly9cImAgb3IgYFwiaHR0cHM6Ly9cImApLlxuICovXG5cbi8qKlxuICogQSBNYXAgdGhhdCB0cmFja3MgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYnJvd3NlciB0YWJzLiBXZSBuZWVkIHRoaXMgY2FjaGVkXG4gKiBzdGF0ZSB0byBhdm9pZCBpbmNvbnNpc3RlbmNpZXMgd2hlbiByZWdpc3RlcmluZyBhIHBhZ2UgdmlzaXQgc3RhcnQgbGlzdGVuZXJcbiAqIGFuZCB0byBmaWx0ZXIgbm90aWZpY2F0aW9ucyBmb3IgdGFicyB0aGF0IGRvbid0IGNvbnRhaW4gb3JkaW5hcnkgd2VicGFnZXMuXG4gKiBUaGUga2V5cyBhcmUgdGFiIElEcyBhbmQgdGhlIHZhbHVlcyBhcmUgVGFiRGV0YWlscyBvYmplY3RzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPG51bWJlcixUYWJEZXRhaWxzPn1cbiAqIEBkZWZhdWx0XG4gKi9cbmNvbnN0IHRhYlN0YXRlID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgdGFiIHN0YXRlIGNhY2hlIHdpdGggbmV3IGluZm9ybWF0aW9uIGFib3V0IGEgdGFiLiBBbnlcbiAqIGV4aXN0aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0YWIgaXMgcmVwbGFjZWQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBJRC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIGxvYWRlZCBpbiB0aGUgdGFiLlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZmVycmVyIC0gVGhlIHJlZmVycmVyIFVSTCBmb3IgdGhlIHRhYiwgb3IgYFwiXCJgIGlmXG4gKiB0aGVyZSBpcyBubyByZWZlcnJlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgdGFiIGlzIGluIGEgcHJpdmF0ZVxuICogd2luZG93LlxuICogQHBhcmFtIHtzdHJpbmd9IHdpbmRvd0lkIC0gVGhlIElEIG9mIHRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgdGFiLlxuICovXG5mdW5jdGlvbiB1cGRhdGVUYWJTdGF0ZSh0YWJJZCwgdXJsLCByZWZlcnJlciwgcHJpdmF0ZVdpbmRvdywgd2luZG93SWQpIHtcbiAgICAvLyBJZiB0aGUgVVJMIHBhcnNlcyBzdWNjZXNzZnVsbHkgYW5kIGhhcyBhbiBIVFRQIG9yIEhUVFBTIHByb3RvY29sLFxuICAgIC8vIGNvbnNpZGVyIGl0IHdlYiBjb250ZW50XG4gICAgdmFyIGlzV2ViQ29udGVudDtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBpZigocGFyc2VkVXJsLnByb3RvY29sID09PSBcImh0dHA6XCIpIHx8IChwYXJzZWRVcmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpKVxuICAgICAgICAgICAgaXNXZWJDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICBpc1dlYkNvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0YWJTdGF0ZS5zZXQodGFiSWQsIHsgdXJsLCByZWZlcnJlciwgcHJpdmF0ZVdpbmRvdywgd2luZG93SWQsIGlzV2ViQ29udGVudCB9KTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXZWJSZXF1ZXN0RGV0YWlsc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgZm9yIHRoZSByZXF1ZXN0LlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlZmVycmVyIC0gVGhlIHZhbHVlIG9mIHRoZSBgUmVmZXJlcmAgSFRUUCBoZWFkZXIgZm9yXG4gKiB0aGUgcmVxdWVzdCBvciBgXCJcImAgaWYgdGhlcmUgaXMgbm8gaGVhZGVyLlxuICovXG5cbi8qKlxuICogQSBNYXAgdGhhdCB0cmFja3MgdGFiLWxldmVsIHdlYiByZXF1ZXN0cy4gV2UgbmVlZCB0aGlzIGNhY2hlZCBzdGF0ZSB0byBtYXRjaFxuICogcmVmZXJyZXJzIHRvIHBhZ2UgbG9hZHMuIFRoZSBrZXlzIGFyZSB0YWIgSURzIGFuZCB0aGUgdmFsdWVzIGFyZVxuICogV2ViUmVxdWVzdERldGFpbHMgb2JqZWN0cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxudW1iZXIsV2ViUmVxdWVzdERldGFpbHM+fVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3Qgd2ViUmVxdWVzdENhY2hlID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgYWN0aXZlIG9yIGlkbGUuIElnbm9yZWQgaWYgdGhlIG1vZHVsZSBpcyBjb25maWd1cmVkIHRvXG4gKiBub3QgY29uc2lkZXIgdXNlciBpbnB1dCB3aGVuIGRldGVybWluaW5nIHRoZSBhdHRlbnRpb24gc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgYnJvd3NlcklzQWN0aXZlID0gZmFsc2U7XG5cbi8qKlxuICogV2hldGhlciB0aGUgbW9kdWxlIGlzIGluIHRoZSBwcm9jZXNzIG9mIGNvbmZpZ3VyaW5nIGJyb3dzZXIgZXZlbnQgaGFuZGxlcnNcbiAqIGFuZCBjYWNoaW5nIGluaXRpYWwgc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbnZhciBpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBtb2R1bGUgaGFzIHN0YXJ0ZWQgY29uZmlndXJpbmcgYnJvd3NlciBldmVudCBoYW5kbGVycyBhbmQgY2FjaGluZ1xuICogaW5pdGlhbCBzdGF0ZS5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbi8qKlxuICogQ29uZmlndXJlIGJyb3dzZXIgZXZlbnQgaGFuZGxlcnMgYW5kIGNhY2hlIGluaXRpYWwgc3RhdGUuIFJ1bnMgb25seSBvbmNlLlxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZihpbml0aWFsaXplZCB8fCBpbml0aWFsaXppbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBpbml0aWFsaXppbmcgPSB0cnVlO1xuXG4gICAgLy8gQ29uZmlndXJlIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBoYXZlIHRvIGNhbGwgSWRsZS5yZWdpc3RlcklkbGVTdGF0ZUxpc3RlbmVyIGJlZm9yZSB3ZSBjYWxsXG4gICAgLy8gSWRsZS5xdWVyeVN0YXRlLCBzbyB0aGlzIGNvbWVzIGJlZm9yZSBjYWNoaW5nIHRoZSBpbml0aWFsIHN0YXRlXG5cbiAgICAvLyBIYW5kbGUgdGFiLWxldmVsIHdlYiByZXF1ZXN0c1xuICAgIGJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzLmFkZExpc3RlbmVyKGRldGFpbHMgPT4ge1xuICAgICAgICAvLyBJZ25vcmUgcmVxdWVzdHMgdGhhdCBhcmVuJ3QgYXNzb2NpYXRlZCB3aXRoIGJyb3dzaW5nIHRhYnNcbiAgICAgICAgaWYoZGV0YWlscy50YWJJZCA8IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIEdldCB0aGUgcmVmZXJyZXIgVVJMIGZyb20gdGhlIHJlcXVlc3QgaGVhZGVyc1xuICAgICAgICB2YXIgcmVmZXJyZXIgPSBcIlwiO1xuICAgICAgICBmb3IoY29uc3QgcmVxdWVzdEhlYWRlciBvZiBkZXRhaWxzLnJlcXVlc3RIZWFkZXJzKVxuICAgICAgICAgICAgaWYoKHJlcXVlc3RIZWFkZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInJlZmVyZXJcIikgJiYgKFwidmFsdWVcIiBpbiByZXF1ZXN0SGVhZGVyKSlcbiAgICAgICAgICAgICAgICByZWZlcnJlciA9IHJlcXVlc3RIZWFkZXIudmFsdWU7XG4gICAgICAgIHdlYlJlcXVlc3RDYWNoZS5zZXQoZGV0YWlscy50YWJJZCwge1xuICAgICAgICAgICAgdXJsOiBkZXRhaWxzLnVybCxcbiAgICAgICAgICAgIHJlZmVycmVyXG4gICAgICAgIH0pO1xuICAgIH0sIHtcbiAgICAgICAgdXJsczogWyBcIjxhbGxfdXJscz5cIiBdLFxuICAgICAgICB0eXBlczogWyBcIm1haW5fZnJhbWVcIiBdXG4gICAgfSxcbiAgICBbIFwicmVxdWVzdEhlYWRlcnNcIiBdKTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIHRoZSB3ZWJwYWdlIGluIGEgdGFiIGNoYW5nZXNcbiAgICBicm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gSWdub3JlIGNoYW5nZXMgdGhhdCBkbyBub3QgaW52b2x2ZSB0aGUgVVJMXG4gICAgICAgIGlmICghKFwidXJsXCIgaW4gY2hhbmdlSW5mbykpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gVHJ5IHRvIGdldCB0aGUgcmVmZXJyZXIgZnJvbSB0aGUgd2ViIHJlcXVlc3QgY2FjaGUgYW5kIGNvbnN1bWVcbiAgICAgICAgLy8gdGhlIG1vc3QgcmVjZW50IGVudHJ5IGluIHRoZSB3ZWIgcmVxdWVzdCBjYWNoZVxuICAgICAgICB2YXIgcmVmZXJyZXIgPSBcIlwiO1xuICAgICAgICB2YXIgd2ViUmVxdWVzdERldGFpbHM7XG4gICAgICAgIGlmKCh3ZWJSZXF1ZXN0RGV0YWlscyA9IHdlYlJlcXVlc3RDYWNoZS5nZXQodGFiSWQpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZih3ZWJSZXF1ZXN0RGV0YWlscy51cmwgPT09IGNoYW5nZUluZm8udXJsKVxuICAgICAgICAgICAgICAgIHJlZmVycmVyID0gd2ViUmVxdWVzdERldGFpbHMucmVmZXJyZXI7XG4gICAgICAgICAgICB3ZWJSZXF1ZXN0Q2FjaGUuZGVsZXRlKHRhYklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFiIHN0YXRlIGNhY2hlXG4gICAgICAgIHVwZGF0ZVRhYlN0YXRlKHRhYklkLCBjaGFuZ2VJbmZvLnVybCwgcmVmZXJyZXIsIHRhYi5pbmNvZ25pdG8sIHRhYi53aW5kb3dJZCk7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgYWN0aXZlIHRhYiBhbmQgZm9jdXNlZCB3aW5kb3csIGFuZCAob3B0aW9uYWxseSkgdGhlIGJyb3dzZXIgaXMgYWN0aXZlLCBlbmQgdGhlIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIHZhciBoYXNBdHRlbnRpb24gPSBjaGVja0ZvckF0dGVudGlvbih0YWJJZCwgdGFiLndpbmRvd0lkKTtcbiAgICAgICAgaWYgKGhhc0F0dGVudGlvbilcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB0YWIuaW5jb2duaXRvLCB0aW1lU3RhbXApO1xuXG4gICAgICAgIC8vIEVuZCB0aGUgcGFnZSB2aXNpdFxuICAgICAgICBub3RpZnlQYWdlVmlzaXRTdG9wTGlzdGVuZXJzKHRhYklkLCB0YWIud2luZG93SWQsIHRhYi5pbmNvZ25pdG8sIHRpbWVTdGFtcCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTdGFydCB0aGUgcGFnZSB2aXNpdFxuICAgICAgICBub3RpZnlQYWdlVmlzaXRTdGFydExpc3RlbmVycyh0YWJJZCwgdGFiLndpbmRvd0lkLCBjaGFuZ2VJbmZvLnVybCwgcmVmZXJyZXIsIHRhYi5pbmNvZ25pdG8sIHRpbWVTdGFtcCk7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgYWN0aXZlIHRhYiBhbmQgZm9jdXNlZCB3aW5kb3csIGFuZCAob3B0aW9uYWxseSkgdGhlIGJyb3dzZXIgaXMgYWN0aXZlLCBzdGFydCBhbiBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZiAoaGFzQXR0ZW50aW9uKVxuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB0YWIuaW5jb2duaXRvLCB0aW1lU3RhbXApO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSB0YWIgY2xvc2VzXG4gICAgYnJvd3Nlci50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQsIHJlbW92ZUluZm8pID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBXZSBkb24ndCBoYXZlIHRvIHVwZGF0ZSB0aGUgd2luZG93IHN0YXRlIGhlcmUsIGJlY2F1c2UgZWl0aGVyIHRoZXJlIGlzXG4gICAgICAgIC8vIGFub3RoZXIgdGFiIGluIHRoZSB3aW5kb3cgdGhhdCB3aWxsIGJlY29tZSBhY3RpdmUgKGFuZCB0YWJzLm9uQWN0aXZhdGVkXG4gICAgICAgIC8vIHdpbGwgZmlyZSksIG9yIHRoZXJlIGlzIG5vIG90aGVyIHRhYiBpbiB0aGUgd2luZG93IHNvIHRoZSB3aW5kb3cgY2xvc2VzXG4gICAgICAgIC8vIChhbmQgd2luZG93cy5vblJlbW92ZWQgd2lsbCBmaXJlKVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgY2FjaGVkIHN0YXRlIGZvciB0aGlzIHRhYiwgZHJvcCBpdFxuICAgICAgICB0YWJTdGF0ZS5kZWxldGUodGFiSWQpO1xuICAgICAgICB3ZWJSZXF1ZXN0Q2FjaGUuZGVsZXRlKHRhYklkKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHdpbmRvdyBwcml2YWN5IHByb3BlcnR5IGZyb20gdGhlIGNhY2hlZCB3aW5kb3cgc3RhdGVcbiAgICAgICAgdmFyIHdpbmRvd1ByaXZhY3kgPSBpc1ByaXZhdGVXaW5kb3cocmVtb3ZlSW5mby53aW5kb3dJZCk7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgYWN0aXZlIHRhYiBhbmQgZm9jdXNlZCB3aW5kb3csIGFuZCAob3B0aW9uYWxseSkgdGhlIGJyb3dzZXIgaXMgYWN0aXZlLCBlbmQgdGhlIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmKGNoZWNrRm9yQXR0ZW50aW9uKHRhYklkLCByZW1vdmVJbmZvLndpbmRvd0lkKSlcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgYWN0aXZlIHRhYiwgZm9yZ2V0IGl0XG4gICAgICAgIGlmKGN1cnJlbnRBY3RpdmVUYWIgPT0gdGFiSWQpXG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gLTE7XG5cbiAgICAgICAgLy8gRW5kIHRoZSBwYWdlIHZpc2l0XG4gICAgICAgIG5vdGlmeVBhZ2VWaXNpdFN0b3BMaXN0ZW5lcnModGFiSWQsIHJlbW92ZUluZm8ud2luZG93SWQsIHdpbmRvd1ByaXZhY3ksIHRpbWVTdGFtcCk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgYWN0aXZlIHRhYiBpbiBhIHdpbmRvdyBjaGFuZ2VzXG4gICAgYnJvd3Nlci50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFjdGl2ZUluZm8gPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBub24tYnJvd3NlciB0YWIsIGlnbm9yZSBpdFxuICAgICAgICBpZigoYWN0aXZlSW5mby50YWJJZCA9PSBicm93c2VyLnRhYnMuVEFCX0lEX05PTkUpIHx8IChhY3RpdmVJbmZvLnRhYklkIDwgMCkgfHxcbiAgICAgICAgICAgIChhY3RpdmVJbmZvLndpbmRvd0lkIDwgMCkpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUgd2l0aCB0aGUgbmV3XG4gICAgICAgIC8vIGFjdGl2ZSB0YWIgSURcbiAgICAgICAgdXBkYXRlV2luZG93U3RhdGUoYWN0aXZlSW5mby53aW5kb3dJZCwge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBhY3RpdmVJbmZvLnRhYklkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYSBmb2N1c2VkIHdpbmRvdywgb3IgdGhlIHRhYiB1cGRhdGUgaXMgbm90IGluIHRoZSBmb2N1c2VkIHdpbmRvdywgaWdub3JlIGl0XG4gICAgICAgIGlmKChjdXJyZW50Rm9jdXNlZFdpbmRvdyA8IDApIHx8IChhY3RpdmVJbmZvLndpbmRvd0lkICE9IGN1cnJlbnRGb2N1c2VkV2luZG93KSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBHZXQgdGhlIHdpbmRvdyBwcml2YWN5IHByb3BlcnR5IGZyb20gdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZVxuICAgICAgICB2YXIgd2luZG93UHJpdmFjeSA9IGlzUHJpdmF0ZVdpbmRvdyhhY3RpdmVJbmZvLndpbmRvd0lkKTsgICAgXG5cbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgaXMgYWN0aXZlIG9yIChvcHRpb25hbGx5KSB3ZSBhcmUgbm90IGNvbnNpZGVyaW5nIHVzZXIgaW5wdXQsXG4gICAgICAgIC8vIGZpcnN0IGVuZCB0aGUgYXR0ZW50aW9uIHNwYW4gaWYgdGhlcmUgaXMgYW4gYWN0aXZlIHRhYiBpbiB0aGUgZm9jdXNlZCB3aW5kb3csXG4gICAgICAgIC8vIHRoZW4gc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoKGJyb3dzZXJJc0FjdGl2ZSB8fCAhY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24pKSB7XG4gICAgICAgICAgICBpZigoY3VycmVudEFjdGl2ZVRhYiA+PSAwKSAmJiAoY3VycmVudEZvY3VzZWRXaW5kb3cgPj0gMCkpXG4gICAgICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHdpbmRvd1ByaXZhY3ksIHRpbWVTdGFtcCk7XG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcnMoYWN0aXZlSW5mby50YWJJZCwgY3VycmVudEZvY3VzZWRXaW5kb3csIHdpbmRvd1ByaXZhY3ksIHRpbWVTdGFtcCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBuZXcgYWN0aXZlIHRhYlxuICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gYWN0aXZlSW5mby50YWJJZDtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgd2luZG93IGlzIGNyZWF0ZWRcbiAgICBicm93c2VyLndpbmRvd3Mub25DcmVhdGVkLmFkZExpc3RlbmVyKGNyZWF0ZWRXaW5kb3cgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGlzIGFwcGVhcnMgdG8gYmUgYSBub24tYnJvd3Npbmcgd2luZG93LCBpZ25vcmVcbiAgICAgICAgLy8gdGhlIGV2ZW50XG4gICAgICAgIGlmKCEoXCJpZFwiIGluIGNyZWF0ZWRXaW5kb3cpIHx8IGNyZWF0ZWRXaW5kb3cuaWQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgd2luZG93IHN0YXRlIGNhY2hlIHdpdGggdGhlIHdpbmRvdydzIHR5cGUgYW5kXG4gICAgICAgIC8vIHByaXZhY3kgcHJvcGVydHlcbiAgICAgICAgdXBkYXRlV2luZG93U3RhdGUoY3JlYXRlZFdpbmRvdy5pZCwge1xuICAgICAgICAgICAgdHlwZTogKFwidHlwZVwiIGluIGNyZWF0ZWRXaW5kb3cpID8gY3JlYXRlZFdpbmRvdy50eXBlIDogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICBwcml2YWN5OiBjcmVhdGVkV2luZG93LmluY29nbml0byA/IFwicHJpdmF0ZVwiIDogXCJub3JtYWxcIlxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgdGFiIGlzIGNyZWF0ZWRcbiAgICAvLyBUaGlzIGV2ZW50IGFwcGVhcnMgdG8gY29uc2lzdGVudGx5IGZpcmUgYmVmb3JlIHdpbmRvdy5vbkNyZWF0ZWRcbiAgICBicm93c2VyLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKHRhYiA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdGFiIG9yIHdpbmRvdyBJRCBpbmRpY2F0aW5nIGEgbm9uLWJyb3dzZXIgdGFiIG9yXG4gICAgICAgIC8vIHdpbmRvdywgaWdub3JlIHRoZSBldmVudFxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4hXG4gICAgICAgIGlmKCEoXCJpZFwiIGluIHRhYikgfHwgdGFiLmlkIDwgMCB8fCAhKFwid2luZG93SWRcIiBpbiB0YWIpIHx8IHRhYi53aW5kb3dJZCA8IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZSB3aXRoIHRoZSB3aW5kb3cncyBwcml2YWN5XG4gICAgICAgIC8vIHByb3BlcnR5IGFuZCwgc2luY2Ugd2Uga25vdyB0aGlzIGlzIGEgYnJvd3Npbmcgd2luZG93IGJhc2VkXG4gICAgICAgIC8vIG9uIHRoZSB0YWIgSUQsIHRoZSBcIm5vcm1hbG9ycG9wdXBcIiB3aW5kb3cgdHlwZVxuICAgICAgICAvLyBXaGlsZSB3ZSBtaWdodCBub3cga25vdyB0aGlzIGlzIHRoZSBhY3RpdmUgdGFiIGluIHRoZSB3aW5kb3csXG4gICAgICAgIC8vIHRoZSB0YWJzLm9uQWN0aXZhdGVkIGV2ZW50IHdpbGwgc2VwYXJhdGVseSBmaXJlXG4gICAgICAgIHVwZGF0ZVdpbmRvd1N0YXRlKHRhYi53aW5kb3dJZCwge1xuICAgICAgICAgICAgdHlwZTogXCJub3JtYWxvcnBvcHVwXCIsXG4gICAgICAgICAgICBwcml2YWN5OiB0YWIuaW5jb2duaXRvID8gXCJwcml2YXRlXCIgOiBcIm5vcm1hbFwiXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSB0YWIgaXMgbW92ZWQgYmV0d2VlbiB3aW5kb3dzXG4gICAgLy8gV2UgYXJlIG5vdCBsaXN0ZW5pbmcgZm9yIHRhYnMub25EZXRhY2hlZCBiZWNhdXNlIHdlIHdhbnQgdGFic1xuICAgIC8vIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB2YWxpZCB3aW5kb3dzLCBhbmQgYmVjYXVzZSBpdCdzIGxpa2VseVxuICAgIC8vIHRoZSB1c2VyIGlzIGp1c3QgbW92aW5nIHRoZSB0YWIgd2l0aGluIHRoZSB0YWIgc3RyaXAgaW4gYVxuICAgIC8vIHdpbmRvd1xuICAgIGJyb3dzZXIudGFicy5vbkF0dGFjaGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgYXR0YWNoSW5mbykgPT4ge1xuICAgICAgICAvLyBJZiB0aGlzIHRhYiBpcyBpbiB0aGUgdGFiIHN0YXRlIGNhY2hlLFxuICAgICAgICAvLyB1cGRhdGUgdGhlIGNhY2hlXG4gICAgICAgIHZhciB0YWJEZXRhaWxzID0gdGFiU3RhdGUuZ2V0KHRhYklkKTtcbiAgICAgICAgaWYodGFiRGV0YWlscyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGFiRGV0YWlscy53aW5kb3dJZCA9IGF0dGFjaEluZm8ubmV3V2luZG93SWQ7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHdpbmRvdyBpcyByZW1vdmVkXG4gICAgYnJvd3Nlci53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcih3aW5kb3dJZCA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlIGhhdmUgY2FjaGVkIHN0YXRlIGZvciB0aGlzIHdpbmRvdywgZHJvcCBpdFxuICAgICAgICBpZih3aW5kb3dTdGF0ZS5oYXMod2luZG93SWQpKVxuICAgICAgICAgICAgd2luZG93U3RhdGUuZGVsZXRlKHdpbmRvd0lkKTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIHRoZSBmb2N1c2VkIHdpbmRvdyBjaGFuZ2VzXG4gICAgYnJvd3Nlci53aW5kb3dzLm9uRm9jdXNDaGFuZ2VkLmFkZExpc3RlbmVyKHdpbmRvd0lkID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBpcyBhY3RpdmUgb3IgKG9wdGlvbmFsbHkpIHdlIGFyZSBub3QgY29uc2lkZXJpbmcgdXNlciBpbnB1dCwgYW5kIGlmXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGFjdGl2ZSB0YWIgaW4gYSBmb2N1c2VkIHdpbmRvdywgZW5kIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZigoYnJvd3NlcklzQWN0aXZlIHx8ICFjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbikgJiYgKChjdXJyZW50QWN0aXZlVGFiID49IDApICYmIChjdXJyZW50Rm9jdXNlZFdpbmRvdyA+PSAwKSkpXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgaXNQcml2YXRlV2luZG93KGN1cnJlbnRGb2N1c2VkV2luZG93KSwgdGltZVN0YW1wKTtcblxuICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBoYXMgbG9zdCBmb2N1cyBpbiB0aGUgb3BlcmF0aW5nIHN5c3RlbSwgcmVtZW1iZXIgXG4gICAgICAgIC8vIHRhYiBJRCA9IC0xIGFuZCB3aW5kb3cgSUQgPSAtMSwgYW5kIGRvIG5vdCBzdGFydCBhIG5ldyBhdHRlbnRpb24gc3BhblxuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSB0aGUgYnJvd3Nlci53aW5kb3dzLmdldCBhd2FpdCBiZWxvdyxcbiAgICAgICAgLy8gYmVjYXVzZSBxdWljayBzZXF1ZW50aWFsIGV2ZW50cyBjYW4gY2F1c2UgdGhlIGJyb3dzZXIud2luZG93cy5vbkZvY3VzQ2hhbmdlZFxuICAgICAgICAvLyBsaXN0ZW5lciB0byBydW4gYWdhaW4gYmVmb3JlIHRoZSBhd2FpdCByZXNvbHZlcyBhbmQgdHJpZ2dlciBlcnJvcnMgaWYgY3VycmVudEFjdGl2ZVRhYlxuICAgICAgICAvLyBhbmQgY3VycmVudEZvY3VzZWRXaW5kb3cgYXJlIG5vdCBzZXQgcHJvcGVybHlcbiAgICAgICAgaWYgKHdpbmRvd0lkID09IGJyb3dzZXIud2luZG93cy5XSU5ET1dfSURfTk9ORSkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuICAgICAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSAtMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZm9jdXNlZCB3aW5kb3cgZnJvbSB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZVxuICAgICAgICB2YXIgZm9jdXNlZFdpbmRvd0RldGFpbHMgPSB3aW5kb3dTdGF0ZS5nZXQod2luZG93SWQpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmVuJ3Qgc2VlbiB0aGlzIHdpbmRvdyBiZWZvcmUsIHRoYXQgbWVhbnMgaXQncyBub3QgYSBicm93c2VyIHdpbmRvdyxcbiAgICAgICAgLy8gc28gcmVtZW1iZXIgdGFiIElEID0gLTEgYW5kIHdpbmRvdyBJRCAtMSwgYW5kIGRvIG5vdCBzdGFydCBhIG5ldyBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZihmb2N1c2VkV2luZG93RGV0YWlscyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50Rm9jdXNlZFdpbmRvdyA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIG5ldyB3aW5kb3cgaXMgbm90IGEgYnJvd3NlciB3aW5kb3csIHJlbWVtYmVyIHRhYiBJRCA9IC0xIGFuZCB3aW5kb3cgSUQgPSAtMSxcbiAgICAgICAgLy8gYW5kIGRvIG5vdCBzdGFydCBhIG5ldyBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZigoZm9jdXNlZFdpbmRvd0RldGFpbHMudHlwZSAhPT0gXCJub3JtYWxcIikgJiYgKGZvY3VzZWRXaW5kb3dEZXRhaWxzLnR5cGUgIT09IFwicG9wdXBcIikgJiYgKGZvY3VzZWRXaW5kb3dEZXRhaWxzLnR5cGUgIT09IFwibm9ybWFsb3Jwb3B1cFwiKSkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuICAgICAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSAtMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmVtZW1iZXIgdGhlIG5ldyBhY3RpdmUgdGFiIGFuZCBmb2N1c2VkIHdpbmRvdywgYW5kIGlmIHRoZSBicm93c2VyIGlzIGFjdGl2ZVxuICAgICAgICAvLyBvciAob3B0aW9uYWxseSkgd2UgYXJlIG5vdCBjb25zaWRlcmluZyB1c2VyIGlucHV0LCBzdGFydCBhIG5ldyBhdHRlbnRpb24gc3BhblxuICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gZm9jdXNlZFdpbmRvd0RldGFpbHMuYWN0aXZlVGFiO1xuICAgICAgICBjdXJyZW50Rm9jdXNlZFdpbmRvdyA9IHdpbmRvd0lkO1xuICAgICAgICBpZihicm93c2VySXNBY3RpdmUgfHwgIWNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uKVxuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCBpc1ByaXZhdGVXaW5kb3cod2luZG93SWQsIGZvY3VzZWRXaW5kb3dEZXRhaWxzKSwgdGltZVN0YW1wKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgYnJvd3NlciBhY3Rpdml0eSBzdGF0ZSBjaGFuZ2VzXG4gICAgLy8gVGhpcyBsaXN0ZW5lciBhYnN0cmFjdHMgdGhlIGJyb3dzZXIgYWN0aXZpdHkgc3RhdGUgaW50byB0d28gY2F0ZWdvcmllczogYWN0aXZlIGFuZCBpbmFjdGl2ZVxuICAgIC8vIEFjdGl2ZSBtZWFucyB0aGUgdXNlciBoYXMgcmVjZW50bHkgcHJvdmlkZWQgaW5wdXQgdG8gdGhlIGJyb3dzZXIsIGluYWN0aXZlIG1lYW5zIGFueSBvdGhlclxuICAgIC8vIHN0YXRlIChyZWdhcmRsZXNzIG9mIHdoZXRoZXIgYSBzY3JlZW5zYXZlciBvciBsb2NrIHNjcmVlbiBpcyBlbmFibGVkKVxuICAgIGlmKGNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uKSB7XG4gICAgICAgIGF3YWl0IElkbGUucmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lcihuZXdTdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIGlzIG5vdCB0cmFuc2l0aW9uaW5nIGJldHdlZW4gYWN0aXZlIGFuZCBpbmFjdGl2ZSBzdGF0ZXMsIGlnbm9yZSB0aGUgZXZlbnRcbiAgICAgICAgICAgIGlmKChicm93c2VySXNBY3RpdmUpID09IChuZXdTdGF0ZSA9PT0gXCJhY3RpdmVcIikpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZW1lbWJlciB0aGUgZmxpcHBlZCBicm93c2VyIGFjdGl2aXR5IHN0YXRlXG4gICAgICAgICAgICBicm93c2VySXNBY3RpdmUgPSAhYnJvd3NlcklzQWN0aXZlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpc24ndCBhbiBhY3RpdmUgdGFiIGluIGEgZm9jdXNlZCB3aW5kb3csIHdlIGRvbid0IG5lZWQgdG8gc2VuZCBhdHRlbnRpb24gZXZlbnRzXG4gICAgICAgICAgICBpZigoY3VycmVudEFjdGl2ZVRhYiA8IDApIHx8IChjdXJyZW50Rm9jdXNlZFdpbmRvdyA8IDApKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgcHJpdmFjeSBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlXG4gICAgICAgICAgICB2YXIgd2luZG93UHJpdmFjeSA9IGlzUHJpdmF0ZVdpbmRvdyhjdXJyZW50Rm9jdXNlZFdpbmRvdyk7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgYW4gYXR0ZW50aW9uIHN0YXJ0IGV2ZW50IChpZiB0aGUgYnJvd3NlciBpcyB0cmFuc2l0aW9uaW5nIHRvIGFjdGl2ZSkgb3IgYW5cbiAgICAgICAgICAgIC8vIGF0dGVudGlvbiBzdG9wIGV2ZW50IChpZiB0aGUgYnJvd3NlciBpcyB0cmFuc2l0aW9uaW5nIHRvIGluYWN0aXZlKVxuICAgICAgICAgICAgaWYoYnJvd3NlcklzQWN0aXZlKVxuICAgICAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgd2luZG93UHJpdmFjeSwgIHRpbWVTdGFtcCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHdpbmRvd1ByaXZhY3ksIHRpbWVTdGFtcCk7XG4gICAgICAgIH0sIGlkbGVUaHJlc2hvbGQpO1xuICAgIH1cblxuICAgIC8vIEdldCBhbmQgcmVtZW1iZXIgdGhlIGJyb3dzZXIgaWRsZSBzdGF0ZVxuICAgIGlmKGNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uKVxuICAgICAgICBicm93c2VySXNBY3RpdmUgPSAoSWRsZS5xdWVyeVN0YXRlKGlkbGVUaHJlc2hvbGQpID09PSBcImFjdGl2ZVwiKTtcbiAgICBcbiAgICAvLyBHZXQgYW5kIHJlbWVtYmVyIHRoZSBicm93c2VyIHdpbmRvdyBhbmQgdGFiIHN0YXRlXG4gICAgdmFyIG9wZW5XaW5kb3dzID0gYXdhaXQgYnJvd3Nlci53aW5kb3dzLmdldEFsbCh7XG4gICAgICAgIHBvcHVsYXRlOiB0cnVlLFxuICAgICAgICB3aW5kb3dUeXBlczogWyBcIm5vcm1hbFwiLCBcInBvcHVwXCIsIFwicGFuZWxcIiwgXCJkZXZ0b29sc1wiIF1cbiAgICB9KTtcbiAgICBmb3IoY29uc3Qgb3BlbldpbmRvdyBvZiBvcGVuV2luZG93cykge1xuICAgICAgICAvLyBJZiB0aGUgd2luZG93IGRvZXNuJ3QgaGF2ZSBhIHdpbmRvdyBJRCwgaWdub3JlIGl0XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiwgYnV0IGNoZWNraW5nIGFueXdheSBzaW5jZVxuICAgICAgICAvLyB0aGUgaWQgcHJvcGVydHkgaXMgb3B0aW9uYWwgaW4gdGhlIHdpbmRvd3MuV2luZG93XG4gICAgICAgIC8vIHR5cGVcbiAgICAgICAgaWYoIShcImlkXCIgaW4gb3BlbldpbmRvdykpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aGUgdGFicyBpbiB0aGUgd2luZG93IHRvIGNhY2hlIHRhYiBzdGF0ZVxuICAgICAgICAvLyBhbmQgZmluZCB0aGUgYWN0aXZlIHRhYiBpbiB0aGUgd2luZG93XG4gICAgICAgIHZhciBhY3RpdmVUYWJJbk9wZW5XaW5kb3cgPSAtMTtcbiAgICAgICAgaWYoXCJ0YWJzXCIgaW4gb3BlbldpbmRvdylcbiAgICAgICAgICAgIGZvcihjb25zdCB0YWIgb2Ygb3BlbldpbmRvdy50YWJzKSB7XG4gICAgICAgICAgICAgICAgaWYodGFiLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiSW5PcGVuV2luZG93ID0gdGFiLmlkO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRhYlN0YXRlKHRhYi5pZCwgdGFiLnVybCwgXCJcIiwgb3BlbldpbmRvdy5pbmNvZ25pdG8sIG9wZW5XaW5kb3cuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB1cGRhdGVXaW5kb3dTdGF0ZShvcGVuV2luZG93LmlkLCB7XG4gICAgICAgICAgICB0eXBlOiBvcGVuV2luZG93LnR5cGUsXG4gICAgICAgICAgICBhY3RpdmVUYWI6IGFjdGl2ZVRhYkluT3BlbldpbmRvdyxcbiAgICAgICAgICAgIHByaXZhY3k6IG9wZW5XaW5kb3cuaW5jb2duaXRvID8gXCJwcml2YXRlXCIgOiBcIm5vcm1hbFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGZvY3VzZWQgd2luZG93IGFuZCBpdCBpcyBhIG5vcm1hbCBvciBwb3B1cFxuICAgICAgICAvLyB3aW5kb3csIHJlbWVtYmVyIHRoZSB3aW5kb3cgSUQgYW5kIGFjdGl2ZSB0YWIgSUQgKGlmIGFueSlcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gZm9jdXNlZCB3aW5kb3csIG9yIHRoZSBmb2N1c2VkIHdpbmRvdyBpc24ndFxuICAgICAgICAvLyBhIG5vcm1hbCBvciBwb3B1cCB3aW5kb3csIHRoaXMgYmxvY2sgd2lsbCBub3QgcnVuIGFuZCB3ZVxuICAgICAgICAvLyB3aWxsIHJldGFpbiB0aGUgZGVmYXVsdCB2YWx1ZXMgb2YgdGFiIElEID0gLTEgYW5kIHdpbmRvd1xuICAgICAgICAvLyBJRCA9IC0xXG4gICAgICAgIGlmKChvcGVuV2luZG93LmZvY3VzZWQpICYmICgob3BlbldpbmRvdy50eXBlID09PSBcIm5vcm1hbFwiKSB8fCAob3BlbldpbmRvdy50eXBlID09PSBcInBvcHVwXCIpKSkge1xuICAgICAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSBvcGVuV2luZG93LmlkO1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IGFjdGl2ZVRhYkluT3BlbldpbmRvdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemluZyA9IGZhbHNlO1xuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbn0iLCJleHBvcnQgY29uc3Qgc2hvcnREb21haW5zID0gW1xuLy8gR29vZ2xlIG5ld3NcblwibmV3cy5nb29nbGUuY29tL2FydGljbGVzXCIsXG5cImdvby5nbFwiLFxuXCJ0LmNvXCIsXG5cIjByei50d1wiLFxuXCIxMjYuYW1cIixcblwiMWwyLnVzXCIsXG5cIjFsaW5rLmluXCIsXG5cIjF0ay51c1wiLFxuXCIxdW4uZnJcIixcblwiMXVybC5jb21cIixcblwiMXVybC5jelwiLFxuXCIxLXVybC5uZXRcIixcblwiMXUucm9cIixcblwiMS51c2EuZ292XCIsXG5cIjF3YjIubmV0XCIsXG5cIjIwZnQubmV0XCIsXG5cIjJhZC5pblwiLFxuXCIyYmlnLmF0XCIsXG5cIjJjaGFwLml0XCIsXG5cIjJkb2MubmV0XCIsXG5cIjJmZWFyLmNvbVwiLFxuXCIyLmdwXCIsXG5cIjIuaHRcIixcblwiMmxvbmcuY2NcIixcblwiMi5seVwiLFxuXCIycGwudXNcIixcblwiMnN1LmRlXCIsXG5cIjJ0dS51c1wiLFxuXCIydHkuaW5cIixcblwiMnUueGYuY3pcIixcblwiMndzYi50dlwiLFxuXCIyemUudXNcIixcblwiMzAxLnRvXCIsXG5cIjMwMXVybC5jb21cIixcblwiMzA3LnRvXCIsXG5cIjMubHlcIixcblwiM3JhLmJlXCIsXG5cIjN4LnNpXCIsXG5cIjQ5cnMubWVcIixcblwiNGkuYWVcIixcblwiNG1zLm1lXCIsXG5cIjQubmJjbnkuY29tXCIsXG5cIjRzcS5jb21cIixcblwiNHVybC5jY1wiLFxuXCI0dmlldy5tZVwiLFxuXCI1LTExLmNvXCIsXG5cIjUzZWlnLmh0XCIsXG5cIjVlbS5jelwiLFxuXCI1cnIuaXRcIixcblwiNXVybC5uZXRcIixcblwiNS53ZXdzLmNvbVwiLFxuXCI1ejguaW5mb1wiLFxuXCI2ZnIucnVcIixcblwiNmc2LmV1XCIsXG5cIjZ1cmwuY29tXCIsXG5cIjc2LmdkXCIsXG5cIjc3LmFpXCIsXG5cIjdmdGguY2NcIixcblwiN2dlbi51c1wiLFxuXCI3bGkuaW5cIixcblwiNy5seVwiLFxuXCI3bnkudHZcIixcblwiN3ZkLmNuXCIsXG5cIjh1LmN6XCIsXG5cIjk0NC5sYVwiLFxuXCI5OC50b1wiLFxuXCI5bXAuY29tXCIsXG5cImEwLmZyXCIsXG5cImEyYS5tZVwiLFxuXCJhMm4uZXVcIixcblwiYWEuY3hcIixcblwiYWFycC51c1wiLFxuXCJhYmJyLmNvbVwiLFxuXCJhYmJyLnNrXCIsXG5cImFiYzExLnR2XCIsXG5cImFiYzEzLmNvXCIsXG5cImFiY24ud3NcIixcblwiYWJjLnR2XCIsXG5cImFiY3VybC5uZXRcIixcblwiYWJlNS5jb21cIixcblwiYWNjZXNzLmltXCIsXG5cImFjY3VyYS5jY1wiLFxuXCJhY29zbS5pblwiLFxuXCJhY3Rpb24ubWVcIixcblwiYWQ1LmV1XCIsXG5cImFkNy5iaXpcIixcblwiYWRhZ2UuY29tXCIsXG5cImFkYi51Z1wiLFxuXCJhZGNyYWZ0LmNvXCIsXG5cImFkY3J1bi5jaFwiLFxuXCJhZGQudmNcIixcblwiYWRmYS5zdFwiLFxuXCJhZGZsYXYuY29tXCIsXG5cImFkZi5seVwiLFxuXCJhZGZseS5mclwiLFxuXCJhZGppeC5jb21cIixcblwiYWRsaS5wd1wiLFxuXCJhZC1tZWQuY3pcIixcblwiYWRuZXdzLm1zXCIsXG5cImFkb2JlLmx5XCIsXG5cImFkdi5saVwiLFxuXCJhZHZtby51c1wiLFxuXCJhZC52dVwiLFxuXCJhZHdlZWsuaXRcIixcblwiYWV4cC5jb1wiLFxuXCJhLWZyLmlzXCIsXG5cImFmeC5jY1wiLFxuXCJhLmdkXCIsXG5cImEuZ2dcIixcblwiYWdpbGVpdC5jb1wiLFxuXCJhaHdkLnR2XCIsXG5cImFqZS5tZVwiLFxuXCJham4ubWVcIixcblwiYWthLmdyXCIsXG5cImFsaWwuaW5cIixcblwiYWxqLmFtXCIsXG5cImFsbC5mdXNldXJsLmNvbVwiLFxuXCJhbC5zdFwiLFxuXCJhbHR1cmwuY29tXCIsXG5cImFtY3VybC5jb21cIixcblwiI2Ftem4uY29tXCIsXG5cImFtem4uY29tXCIsXG5cIiNhbXpuLnRvXCIsXG5cImFtem4udG9cIixcblwiYW5kci50dlwiLFxuXCJhLm5mXCIsXG5cImFubi5jclwiLFxuXCJhbnkuZ3NcIixcblwiYW9mYi51c1wiLFxuXCJhb2wuaXRcIixcblwiYXBhZHYuY29cIixcblwiYXBsLnR2XCIsXG5cImFwbmUud3NcIixcblwiYXBwc3Vtby5jb21cIixcblwiYXF2YS5wbFwiLFxuXCJhcmEudHZcIixcblwiYXJjbmN0LmNvXCIsXG5cImFyZXMudGxcIixcblwiYXJndXNuZS53c1wiLFxuXCJhci5neVwiLFxuXCJhcm0uaW5cIixcblwiYXJzbi5hbFwiLFxuXCJhcnN0LmNoXCIsXG5cImFzYS5uYVwiLFxuXCJhc29zLnRvXCIsXG5cImFzc28uaW5cIixcblwiYXQuY210LmNvbVwiLFxuXCJhdG1sYi5jb21cIixcblwiYXQubXJtdWxlLmNvbVwiLFxuXCJhdC5tdHYuY29tXCIsXG5cImF0LnB3Lm9yZ1wiLFxuXCJhdHQtbXNnLmNvbVwiLFxuXCJhdHUuY2FcIixcblwiYXUubXNcIixcblwiYXVybHMuaW5mb1wiLFxuXCJhdXRvZGUuc2tcIixcblwiYXZjLmx1XCIsXG5cImF2bG5lLndzXCIsXG5cImF3ZS5zbVwiLFxuXCJhLndpc2gub3JnXCIsXG5cImF5bC5sdlwiLFxuXCJheXQuZnJcIixcblwiYXphbGkuZnJcIixcblwiYXpjLmNjXCIsXG5cImF6cXEuY29tXCIsXG5cImIwMC5mclwiLFxuXCJiMjMucnVcIixcblwiYjJsLm1lXCIsXG5cImI1NC5pblwiLFxuXCJiNjUuY29tXCIsXG5cImI2NS51c1wiLFxuXCJiYWNuLm1lXCIsXG5cImJhaWQudXNcIixcblwiYmFzbm8uY29tXCIsXG5cImJiYy5pblwiLFxuXCJiYnJ5Lmx2XCIsXG5cImJidC5nc1wiLFxuXCJiYnl1cmwudXNcIixcblwiYmNlbmUud3NcIixcblwiYmNvb2wuYnpcIixcblwiYmNvdmUubWVcIixcblwiYmMudmNcIixcblwiYmVhbS50b1wiLFxuXCJiZWF0cy5pc1wiLFxuXCJiZWU0LmJpelwiLFxuXCJiZWViZS5pblwiLFxuXCJiZS5uZXRcIixcblwiYmYxMC5jb1wiLFxuXCJiZnBuZS53c1wiLFxuXCJiLWdhdC5lc1wiLFxuXCJiZ2wubWVcIixcblwiYi5nbG9iZS5jb21cIixcblwiYmdyLmNvXCIsXG5cImJocGhvLnRvXCIsXG5cImJpYmxlLnVzXCIsXG5cImJpZ3RibC5jb21cIixcblwiYmltLmltXCIsXG5cIiNiaW5nZWQuaXRcIixcblwiYmluZ2VkLml0XCIsXG5cImJpdC5kb1wiLFxuXCJiaXQubHlcIixcblwiYml0bHkuY29tXCIsXG5cImJpdGx5LmlzXCIsXG5cImJpdHcuaW5cIixcblwiYml6ai51c1wiLFxuXCJia2l0ZS5jb21cIixcblwiYmxhcC5uZXRcIixcblwiYmxicmQuY29cIixcblwiYmxicmQuY29tXCIsXG5cImJsY2suYnlcIixcblwiYmxlLmFjXCIsXG5cImJsZS5wbFwiLFxuXCJibGlwcHIuY29tXCIsXG5cImJsaXAudHZcIixcblwiYmxuLmtyXCIsXG5cImJsb2F0Lm1lXCIsXG5cImJsb29tLmJnXCIsXG5cImJsdS5jY1wiLFxuXCJib2kucmVcIixcblwiYm9uYXBwLml0XCIsXG5cImJvbmVmaS5zaFwiLFxuXCJib24ubm9cIixcblwiYm9yLmNvbVwiLFxuXCJiby5zdFwiLFxuXCJib3RlLm1lXCIsXG5cImJvdWduLmF0XCIsXG5cImJvdXJuLmNvXCIsXG5cImIucXIuYWVcIixcblwiYnI0LmluXCIsXG5cImJyYWQubW5cIixcblwiYnJhdm8ubHlcIixcblwiYnJieS5jb1wiLFxuXCJicmQucnNcIixcblwiYi5yaWFuLmNjXCIsXG5cImJyay50b1wiLFxuXCJicnp1Lm5ldFwiLFxuXCJic2EubHlcIixcblwiYnNsLmlvXCIsXG5cImJzdW4ubWRcIixcblwiYnQuaW9cIixcblwiYnVkdXJsLmNvbVwiLFxuXCJidWZmLmx5XCIsXG5cImJ1ay5tZVwiLFxuXCJidWxsLmhuXCIsXG5cImJ1bC5sdVwiLFxuXCJidXJudXJsLmNvbVwiLFxuXCJidXN3ay5jb1wiLFxuXCJidXp1cmwuY29tXCIsXG5cImJ1enp0YXAuY29tXCIsXG5cImJ4bC5tZVwiLFxuXCJiemZkLml0XCIsXG5cImJ6aC5tZVwiLFxuXCJjYWNob3Iucm9cIixcblwiY2FtcGwudXNcIixcblwiY2FudXJsLmNvbVwiLFxuXCJjYW52YS5saW5rXCIsXG5cImNhcGkudGxcIixcblwiY2FwdGwxLmNvXCIsXG5cImNhcHR1ci5pblwiLFxuXCJjYXJ0Lm1uXCIsXG5cImNiYy5zaFwiLFxuXCJjYmxlLmNvXCIsXG5cImNic2xvYy5hbFwiLFxuXCJjYnNuLndzXCIsXG5cImNic3BydC5jb1wiLFxuXCJjYnMuc29cIixcblwiY2J1Zy5jY1wiLFxuXCJjYy5jY1wiLFxuXCJjY2ouaW1cIixcblwiY2Q0Lm1lXCIsXG5cImNkcG4uaW9cIixcblwiY2R0ci5jb1wiLFxuXCJjZWt0a3AuY29tXCIsXG5cImNlc2FyLm1uXCIsXG5cImNmMi5tZVwiLFxuXCJjZjYuY29cIixcblwiY2Y5Ny5jb1wiLFxuXCJjZi5seVwiLFxuXCJjaGJyLmdyXCIsXG5cImNoaWMuYWdcIixcblwiY2hpbC5pc1wiLFxuXCJjaGlscC5pdFwiLFxuXCJjaGkubWdcIixcblwiY2hpcHIuZXNcIixcblwiY2hpcC50bFwiLFxuXCJjaG4uZ2VcIixcblwiY2hvLmJhXCIsXG5cImNob3BkLml0XCIsXG5cImNocHQubWVcIixcblwiY2hyZy5yc1wiLFxuXCJjaHJtYS5jb1wiLFxuXCJjaHJvbmkuY2xcIixcblwiY2hzLm14XCIsXG5cImNoemIuZ3JcIixcblwiY2luLmNpXCIsXG5cImNpbmVtYWdyLmFtXCIsXG5cImNqYi5uZXRcIixcblwiY2preS5pdFwiLFxuXCJjbGNrLnJ1XCIsXG5cImNsZC5tZVwiLFxuXCJjbGUuY2xpbmljXCIsXG5cImNsZW1hLmNjXCIsXG5cImNsaWNjYW1pLmluZm9cIixcblwiY2xpY2t0aHJ1LmNhXCIsXG5cImNsaS5nc1wiLFxuXCJjbGlray5pblwiLFxuXCJjbGlwdXJsLnVzXCIsXG5cImNsay5teVwiLFxuXCJjbC5sa1wiLFxuXCJjbC5seVwiLFxuXCJjbG4ubWVcIixcblwiY2xvYWt5LmRlXCIsXG5cImNsb3AuaW5cIixcblwiY2xvdWR1cC5jb21cIixcblwiY2xwLmx5XCIsXG5cImNscmx2LnJzXCIsXG5cImNtcGJlbGwuY29tXCIsXG5cImNtc2EubWVcIixcblwiY21zYy5yZVwiLFxuXCJjbjg2Lm9yZ1wiLFxuXCJjbmIuY3hcIixcblwiY25ldC5jb1wiLFxuXCJjbm4uaXRcIixcblwiY25ubW9uLmllXCIsXG5cImNudHgubWVcIixcblwiY29nZS5sYVwiLFxuXCJjb2cuZ2RcIixcblwiYy1vLmluXCIsXG5cImNva2V1cmwuY29tXCIsXG5cImNvbi5zdFwiLFxuXCJjb250YS5jY1wiLFxuXCJjb250bnQubHlcIixcblwiY29vay5iYVwiLFxuXCJjb3B5LmJ6XCIsXG5cImNvcnQuYXNcIixcblwiY29zbS5hZ1wiLFxuXCJjb3QuYWdcIixcblwiY291aWMuZnJcIixcblwiY3BvLnN0XCIsXG5cImNwdGwxLmNvXCIsXG5cImNwd3IuaXRcIixcblwiY3Jrcy5tZVwiLFxuXCJjcm93ZHNwcmluZy5jb1wiLFxuXCJjci50bFwiLFxuXCJjcnR2Lm1rXCIsXG5cImNydW0ucGxcIixcblwiYy5zaGFtZWtoLndzXCIsXG5cImNzLnBuXCIsXG5cImN0dC5lY1wiLFxuXCJjdHZyLnVzXCIsXG5cImN0eC5seVwiLFxuXCJjdWRhLmNvXCIsXG5cImN1ZGRlci5pdFwiLFxuXCJjdWx0bS5hY1wiLFxuXCJjdWx0ci5tZVwiLFxuXCJjdXJpby51c1wiLFxuXCJjdXJsLmltXCIsXG5cImN1ci5sdlwiLFxuXCJjdXMudG1cIixcblwiY3V0LmJ5XCIsXG5cImN1dGh1dC5jb21cIixcblwiY3V0LnBlXCIsXG5cImN1dC5za1wiLFxuXCJjdXR0LmV1XCIsXG5cImN1dHQudXNcIixcblwiY3V0dS5tZVwiLFxuXCJjdXR1cmwuY29tXCIsXG5cImN1dHVybHMuY29tXCIsXG5cImN5YnIuZnJcIixcblwiY3lvbml4LnRvXCIsXG5cImQ3NS5ldVwiLFxuXCJkYWEucGxcIixcblwiZGFpLmx5XCIsXG5cImRhaWx5bS5haVwiLFxuXCJkYWtkLm1lXCIsXG5cImRhbGFpbGEubWFcIixcblwiZGFsbGFzbmUud3NcIixcblwiZGF0bC5pblwiLFxuXCJkYmwuY2h6LmdyXCIsXG5cImRicm9uLmNvXCIsXG5cImRiLnR0XCIsXG5cImRjZHIubWVcIixcblwiZGQubWFcIixcblwiZGRwLm5ldFwiLFxuXCJkZHV0LmNoXCIsXG5cImRlYWRzcC5pblwiLFxuXCJkZWFsc3BsLnVzXCIsXG5cImRlY2VudHVybC5jb21cIixcblwiZGVjay5seVwiLFxuXCJkZWxsLnRvXCIsXG5cImRlbC5seVwiLFxuXCJkZW1nb3Zlcm5vLnJzXCIsXG5cImRlbXMubWVcIixcblwiZGVwb3QubHlcIixcblwiZGVyZi5tZVwiLFxuXCJkZXNlcnQuc25cIixcblwiZGV0bmUud3NcIixcblwiZGY0LnVzXCIsXG5cImRmOS5uZXRcIixcblwiZGZsOC5tZVwiLFxuXCJkZnQuYmFcIixcblwiZGdlci5hdFwiLFxuXCJkaHVybC5vcmdcIixcblwiZGlkZHkuaXRcIixcblwiZGlnYmlnLmNvbVwiLFxuXCJkaS5nZ1wiLFxuXCJkaWdnLmNvbVwiLFxuXCJkaWdpcGlsbHMuY29tXCIsXG5cImRpZ3MuYnlcIixcblwiZGlzY3ZyLmNvXCIsXG5cImRpLnNuXCIsXG5cImRpc3EudXNcIixcblwiZGlzLnRsXCIsXG5cImRsZC5ielwiLFxuXCJkbHJzaHYuZXNcIixcblwiZGx2ci5pdFwiLFxuXCJkLm1lXCIsXG5cImRtcmVnLmNvXCIsXG5cImRuYWluLmZvXCIsXG5cImRuLnZjXCIsXG5cImRvLmNvXCIsXG5cImRvaW9wLmNvbVwiLFxuXCJkb2kub3JnXCIsXG5cImRvbHAuY2NcIixcblwiZG8ubXlcIixcblwiZG9wZW4udXNcIixcblwiZG9waWNlLnNrXCIsXG5cImRwby5zdFwiLFxuXCJkLnByXCIsXG5cImRyYWdkLmlzXCIsXG5cImRyYmwuaW5cIixcblwiZHJvaWQud3NcIixcblwiZHJvcC5pb1wiLFxuXCJkcm96Lm1lXCIsXG5cImRycGxuLmdzXCIsXG5cImRycC5seVwiLFxuXCJkci50bFwiLFxuXCJkcnVkZ2UudHdcIixcblwiZHNjLnR2XCIsXG5cImRzLnBuXCIsXG5cImRzcHkubWVcIixcblwiZHRkZy5jb1wiLFxuXCJkdGhpbi5nc1wiLFxuXCJkdXJsLm1lXCIsXG5cImR1cmwudXNcIixcblwiZHYuZ2RcIixcblwiZHZsci5pdFwiLFxuXCJkd2FyZnVybC5jb21cIixcblwiZHlvLmdzXCIsXG5cImUzNy5ldVwiLFxuXCJlYW0ubWVcIixcblwiZWFzeXVyaS5jb21cIixcblwiZWFzeXVybC5uZXRcIixcblwiZWNhLnNoXCIsXG5cImVjbHVybC5jb21cIixcblwiZWNvbi5zdFwiLFxuXCJlY290aS5tc1wiLFxuXCJlY3JhLnNlXCIsXG5cImVjcmVhLnR2XCIsXG5cImVkdXQudG9cIixcblwiZWVwdXJsLmNvbVwiLFxuXCJlZXp1cmwuY29tXCIsXG5cImVmZi5vcmdcIixcblwiZWxlZ2FudHRoZW0uZXNcIixcblwiZWxpdGVkYWkubHlcIixcblwiZWxxLnRvXCIsXG5cImVseS5yZVwiLFxuXCJlbWMuaW1cIixcblwiZW5jb3NpYS5tZVwiLFxuXCJlbmd0LmNvXCIsXG5cImVudG0uYWdcIixcblwiZW52YS50b1wiLFxuXCJlb2MuY2NcIixcblwiZW9ubGkubmVcIixcblwiZXFib3QuY29tXCIsXG5cImVyYXguY3pcIixcblwiZXJ3LmN6XCIsXG5cImVzLnBuXCIsXG5cImVzc24udGxcIixcblwiI2V0c3kubWVcIixcblwiZXQudHZcIixcblwiZXdlcmkuY29tXCIsXG5cImV3ZXJsLmNvbVwiLFxuXCJleDkuY29cIixcblwiZXhtLm5yXCIsXG5cImV4dHIudHZcIixcblwiZXp1cmwuY2NcIixcblwiZXp1cmwuZXVcIixcblwiZmEuYnlcIixcblwiI2ZhY2Vib29rLmFwcHN0b3JlLmNvbVwiLFxuXCJmYWNldG8udXNcIixcblwiZmFuZGFuLmNvXCIsXG5cImZhbmR3Lm1lXCIsXG5cImZhdGMuY29cIixcblwiZmF2Lm1lXCIsXG5cIiNmYi5tZVwiLFxuXCJmYi5tZVwiLFxuXCJmYi5uYmNzcG9ydHMuY29tXCIsXG5cImZic2hhcmUubWVcIixcblwiI2ZidXkubWVcIixcblwiZmNuZXdzLnR2XCIsXG5cImZlZWR6aWwubGFcIixcblwiZmZjZS5ielwiLFxuXCJmZmYucmVcIixcblwiZmZmLnRvXCIsXG5cImZmZi53ZlwiLFxuXCJmZi5pbVwiLFxuXCJmaHVybC5jb21cIixcblwiZmlsZXNoYXIuZXNcIixcblwiZmlsb29wcy5pbmZvXCIsXG5cImZpbHouZnJcIixcblwiZmluZC5iZWVyXCIsXG5cImZpcmUudG9cIixcblwiZmlyc3R1cmwuZGVcIixcblwiZmlyc3R1cmwubmV0XCIsXG5cImZpdG0uYWdcIixcblwiZmxpYy5rclwiLFxuXCJmbGluZ2suY29tXCIsXG5cImZsaXAuaXRcIixcblwiZmxuZS53c1wiLFxuXCJmbHEudXNcIixcblwiZmx0ci50dlwiLFxuXCJmbHdyLnB0XCIsXG5cImZseTIud3NcIixcblwiZm0yLm1lXCIsXG5cImZuay5lc1wiLFxuXCJmb2FrLmNvXCIsXG5cImZvZS5oblwiLFxuXCJmb2xsb3dlZHUuY29tXCIsXG5cImZvbHUubWVcIixcblwiZm9uLmdzXCIsXG5cImZvbnQubWVcIixcblwiZm9yci5zdFwiLFxuXCJmb3IudG5cIixcblwiZm94cy5wdFwiLFxuXCJmb3gudHZcIixcblwiZm94eXVybC5jb21cIixcblwiZnJjLnZjXCIsXG5cImZyZWFrLnRvXCIsXG5cImZyZWVwci5lc1wiLFxuXCJmcmV6ZS5pdFwiLFxuXCJmcm8uZ3lcIixcblwiZi1zdC5jb1wiLFxuXCJmdGN5LmNvXCIsXG5cImZ1bi5seVwiLFxuXCJmdW5uaS5seVwiLFxuXCJmdXIubHlcIixcblwiZnVzZXVybC5jb21cIixcblwiZnVzLmluXCIsXG5cImZ1enp5LnRvXCIsXG5cImZ3ZDQubWVcIixcblwiZndkdXJsLm5ldFwiLFxuXCJmd2liLm5ldFwiLFxuXCJmeG4ud3NcIixcblwiZnhzLnB0XCIsXG5cImZ6eS5jb1wiLFxuXCJnMDAubWVcIixcblwiZzhsLnVzXCIsXG5cImdhLmNvXCIsXG5cImdhcC51c1wiLFxuXCJnYXRlcy5seVwiLFxuXCJnYXRoci51c1wiLFxuXCJnYXcua3JcIixcblwiZ2JwZy5uZXRcIixcblwiZy5jbyBhbmRcIixcblwiZ2VvcmlvdC5jb1wiLFxuXCJnZXRmLmx5XCIsXG5cImdldG0ucHRcIixcblwiZ2V0LnNoXCIsXG5cImdldC1zaG9ydHkuY29tXCIsXG5cImdldC11cmwuY29tXCIsXG5cImdldHVybC51c1wiLFxuXCJnZy5nZ1wiLFxuXCJnaS52Y1wiLFxuXCJnaXptby5kb1wiLFxuXCJna3VybC51c1wiLFxuXCJnbC5hbVwiLFxuXCJnbGJuLmNhXCIsXG5cImdsbXIubWVcIixcblwiZ2xwby5zdFwiLFxuXCJnbHNlbi51c1wiLFxuXCJnbzIubWVcIixcblwiZ28uOW5sLmNvbVwiLFxuXCJnby5icml0LmNvXCIsXG5cImdvLmZveDU5LmNvbVwiLFxuXCJnb2cubGlcIixcblwiZ29oZS5hdFwiLFxuXCJnb2hzbi5jb1wiLFxuXCJnby5pZ24uY29tXCIsXG5cImdva2V2LmluXCIsXG5cImdvbGlua3MuY29cIixcblwiZ29sbWFvLmNvbVwiLFxuXCJnby5tZVwiLFxuXCJnby5uYXNhLmdvdlwiLFxuXCJnb29kLmx5XCIsXG5cImdvby5nbFwiLFxuXCJnb28ubHVcIixcblwiZ28ub3N0cC5nb3ZcIixcblwiZ29zaHJpbmsuY29tXCIsXG5cImdvLnNoci5sY1wiLFxuXCJnb3NzaXBjb3AuY29tXCIsXG5cImdvc3NpLnByXCIsXG5cImdvLnRvXCIsXG5cImdvdG9tLnRnXCIsXG5cImdvLnVubC5lZHVcIixcblwiZ28udXNhLmdvdlwiLFxuXCJnb3dhbC5sYVwiLFxuXCJncGx1cy50b1wiLFxuXCJncW0uYWdcIixcblwiZ3JhYi5ieVwiLFxuXCJncmRucy5jb1wiLFxuXCJncmVtLmlvXCIsXG5cImdyaS5tc1wiLFxuXCJncmluZHIubWVcIixcblwiZ3Jub2wuY29cIixcblwiZ3JucGMub3JnXCIsXG5cImcucm8ubHRcIixcblwiZ3IucG5cIixcblwiZ3J6LmNtXCIsXG5cImd0Zy5sdVwiLFxuXCJndHIuYnpcIixcblwiZ3UuY29tXCIsXG5cImd1aWFtYS5pc1wiLFxuXCJndXJsLmVzXCIsXG5cImhhZGVqLmNvXCIsXG5cImhhaWxvLnRvXCIsXG5cImhhby5qcFwiLFxuXCJoYXRuZS53c1wiLFxuXCJoYnNway5jb1wiLFxuXCJoY2x0ZS5jaFwiLFxuXCJoZWZyLmluXCIsXG5cImhlbGxvdHh0LmNvbVwiLFxuXCJoZXguaW9cIixcblwiaGcudHZcIixcblwiaGlkZS5teVwiLFxuXCJoaWRlcmVmZXIuY29tXCIsXG5cImhpcC5tdVwiLFxuXCJoaXQubXlcIixcblwiaGprbC5mclwiLFxuXCJobW0ucGhcIixcblwiaG5kaWFyeS5jb21cIixcblwiaG9wY2xpY2tzLmNvbVwiLFxuXCJob3AuaW1cIixcblwiaG9wcy5tZVwiLFxuXCJob3BzLnRvXCIsXG5cImhvdHJlZGlyZWN0LmNvbVwiLFxuXCJob3RzaG9ydHVybC5jb21cIixcblwiaG91LmxpXCIsXG5cImhwLm51XCIsXG5cImhwc3RtLnRjXCIsXG5cImhyYy5pb1wiLFxuXCJocmQuY21cIixcblwiaHJlZi5pblwiLFxuXCJocmVmLmxpXCIsXG5cImhybGQudXNcIixcblwiaHJ2ZC5tZVwiLFxuXCJocnYuc3RcIixcblwiaHNibGlua3MuY29tXCIsXG5cImh0Lmx5XCIsXG5cImh0cm5lLndzXCIsXG5cImh0eHQuaXRcIixcblwiaHR6LmxpXCIsXG5cImh1Yi5hbVwiLFxuXCJodWJzLmx5XCIsXG5cImh1ZmYubHZcIixcblwiaHVmZi50b1wiLFxuXCJodWdldXJsLmNvbVwiLFxuXCJodWx1LmNvbVwiLFxuXCJodWx1LnR2XCIsXG5cImh1cmwuaXRcIixcblwiaHVybC5tZVwiLFxuXCJodXJsLm5vXCIsXG5cImh1cmwud3NcIixcblwiaHlwZXJ1cmwuY29cIixcblwiaHl2LmVlXCIsXG5cImkwcnoudHdcIixcblwiaS0yLmNvXCIsXG5cImk5OS5jelwiLFxuXCJpY2FuaGF6LmNvbVwiLFxuXCJpY2lvLnVzXCIsXG5cImljaXQuZnJcIixcblwiaWNrLmxpXCIsXG5cImlja3Mucm9cIixcblwiaWNvbnQuYWNcIixcblwiaWNwLWMuY29tXCIsXG5cImlkZWsubmV0XCIsXG5cImlkLnRsXCIsXG5cImloZy5jb1wiLFxuXCJpaWlpaS5pblwiLFxuXCJpa3IubWVcIixcblwiaWt5LmZyXCIsXG5cImlsaXguaW5cIixcblwiaWxsaW4uaXNcIixcblwiaW1nLmx5XCIsXG5cImluZC5wblwiLFxuXCJpbmR5LnN0XCIsXG5cImluLmZsdXguY29tXCIsXG5cImluZm8ubXNcIixcblwiaW5zdC5jclwiLFxuXCJpbnRlbC5seVwiLFxuXCJpbnRvLnR2XCIsXG5cImludHVpdC5tZVwiLFxuXCJpbnZlbnQuZ2VcIixcblwiaW52Lmx2XCIsXG5cImlwbG9nZ2VyLmNvbVwiLFxuXCJpcGxvZ2dlci5vcmdcIixcblwiaXIucGVcIixcblwiaXJ0Lm1lXCIsXG5cImlzY29vbC5uZXRcIixcblwiaXMuZ2RcIixcblwiaXNyYS5saVwiLFxuXCJpdDIuaW5cIixcblwiaXRoYWNhanIubmxcIixcblwiaXRoZW0uZXNcIixcblwiaXRtLmltXCIsXG5cIml0by5teFwiLFxuXCJpdHNlby5vcmdcIixcblwiaXRzaC5ib1wiLFxuXCJpdHNqdXN0LmluXCIsXG5cIml0cy5teVwiLFxuXCJpdHN5Lml0XCIsXG5cIml0di5jb1wiLFxuXCJpdHkuaW1cIixcblwiaXZpbGwuYWdcIixcblwiaXgubHRcIixcblwiaXguc2tcIixcblwiajJqLmRlXCIsXG5cImpjcC5pc1wiLFxuXCJqY3Jldy5jb1wiLFxuXCJqZGVtLmN6XCIsXG5cImouZ3NcIixcblwiamllYi5iZVwiLFxuXCJqaWpyLmNvbVwiLFxuXCJqbW9yci5pc1wiLFxuXCJqLm1wXCIsXG5cImptc2JyZC5jb1wiLFxuXCJqb3Vybi51c1wiLFxuXCJqcDIyLm5ldFwiLFxuXCJqcG0uY29tXCIsXG5cImpxdy5kZVwiLFxuXCJqci5seVwiLFxuXCJqcm5sLmllXCIsXG5cImpzaGVuLm1lXCIsXG5cImpzLmlzXCIsXG5cImouc3RcIixcblwianVzdC5hc1wiLFxuXCJrMm5lLndzXCIsXG5cIms2Lmt6XCIsXG5cImthYmJhZ2UuaW9cIixcblwia2FyZTExLnR2XCIsXG5cImthc2sudXNcIixcblwia2NpdHAubWVcIixcblwia2NrLnN0XCIsXG5cImtlbC5ieVwiLFxuXCJrZXRrcC5pblwiLFxuXCJrZS13ZS5uZXRcIixcblwia2ZkLnBsXCIsXG5cImtpcm8udHZcIixcblwia2lzYS5jaFwiLFxuXCJraXNzYS5iZVwiLFxuXCJraXNzLmx5XCIsXG5cImtsLmFtXCIsXG5cImtsY2subWVcIixcblwia2xvdS50dFwiLFxuXCJrbmc1LnR2XCIsXG5cImtuZy5odFwiLFxuXCJrbm90Lmx5XCIsXG5cImtvbnJhdGguY29cIixcblwia29yZS51c1wiLFxuXCJrb3J0YS5udVwiLFxuXCJrb3RzLm51XCIsXG5cImtwLmNjXCIsXG5cImtyM3cuZGVcIixcblwia3JhdC5zaVwiLFxuXCJrcmF0c2kuY3pcIixcblwia3JvZC5jelwiLFxuXCJrcnVuY2hkLmNvbVwiLFxuXCJrcnouY2hcIixcblwia3N0cC5tblwiLFxuXCJrdGllLnR2XCIsXG5cImt0aW1lcy5jb1wiLFxuXCJrdGxhbmUud3NcIixcblwia3R6ci51c1wiLFxuXCJrdWMuY3pcIixcblwia3VuemkubWVcIixcblwiay52dVwiLFxuXCJreGIubWVcIixcblwia3hrLm1lXCIsXG5cIkw5LmZyXCIsXG5cImw5ay5uZXRcIixcblwibGFjby5zdFwiLFxuXCJsYW5kcy50b1wiLFxuXCJsYXQubXNcIixcblwibGMuY3hcIixcblwibGMtcy5jb1wiLFxuXCJsY3V0LmluXCIsXG5cImxlYWZuZS53c1wiLFxuXCJsZXRvcDEwLlwiLFxuXCJsLmhoLmRlXCIsXG5cImxpYmVyby5pdFwiLFxuXCJsaWNrLm15XCIsXG5cImxpZW4ubGlcIixcblwibGllbi5wbFwiLFxuXCJsaWZlaGFjLmtyXCIsXG5cImxpaXAudG9cIixcblwibGlsdGV4dC5jb21cIixcblwibGluLmNyXCIsXG5cImxpbi5pb1wiLFxuXCJsaW5rYmVlLmNvbVwiLFxuXCJsaW5rYnVuLmNoXCIsXG5cImxpbmtlZS5jb21cIixcblwibGlua2dhcC5jb21cIixcblwibGlua24uY29cIixcblwibGlua3NsaWNlLmNvbVwiLFxuXCJsaW5rdG8uaW1cIixcblwibGluay53bmVwLmNvbVwiLFxuXCJsaW5rLnppcC5uZXRcIixcblwibGlueGZpeC5kZVwiLFxuXCJsaXN0bi50b1wiLFxuXCJsaXRldXJsLm5ldFwiLFxuXCJsaXVybC5jblwiLFxuXCJsaXZlbWl4dGFwLmVzXCIsXG5cImxpdmVzaS5kZVwiLFxuXCJsaXZlc3RyZS5hbVwiLFxuXCJsaXZpbmdzb2NpLmFsXCIsXG5cImxpeC5pblwiLFxuXCJsLWsuYmVcIixcblwibGsuaHRcIixcblwibGx1LmNoXCIsXG5cImxuY2guY29cIixcblwibG5rLmJ5XCIsXG5cImxuay5jb1wiLFxuXCJsbmtkLmluXCIsXG5cImxuay5kaXJlY3RcIixcblwibG5rLmdkXCIsXG5cImxuay5pblwiLFxuXCJsbmsubHlcIixcblwibG5rLm1zXCIsXG5cImxua3MuZnJcIixcblwibG5rLnNrXCIsXG5cImxua3VybC5jb21cIixcblwibG5reS5mclwiLFxuXCJsbnAuc25cIixcblwibG4tcy5uZXRcIixcblwibG4tcy5ydVwiLFxuXCJsb2dvLnR2XCIsXG5cImxvaHVkLnVzXCIsXG5cImxvbmdyZXAubHlcIixcblwibG9vcHQudXNcIixcblwibG9zdC5pblwiLFxuXCJsb3cuZXNcIixcblwibHAyNS5mclwiLFxuXCJscGx6YS5jb1wiLFxuXCJsLnByXCIsXG5cImwtci50dlwiLFxuXCJscnUuanBcIixcblwibHMubHlcIixcblwibHRzLmNyXCIsXG5cImx0LnRsXCIsXG5cImx1cmwubm9cIixcblwibHUudG9cIixcblwiTHZ2ay5jb21cIixcblwibHguaW1cIixcblwibTEuaW9cIixcblwibTFwLmZyXCIsXG5cIm0zbWkuY29tXCIsXG5cIm1hY3J1bW8ucnNcIixcblwibWFjdGUuY2hcIixcblwibWFkLmx5XCIsXG5cIm1ha2UubXlcIixcblwibWFwcS5zdFwiLFxuXCJtYXJpZS5jbFwiLFxuXCJtYXNoLnRvXCIsXG5cIm1hdnJldi5jb21cIixcblwibWJpc3Qucm9cIixcblwibWNhZi5lZVwiLFxuXCJtY2QudG9cIixcblwibWNzdHIubmV0XCIsXG5cIm1jdHIuc3RcIixcblwibWRsMjkubmV0XCIsXG5cIm1kdG0ucGxcIixcblwibWVkaWF0ZS5jb21cIixcblwibWVlLmJvXCIsXG5cIm1lZXR1LnBzXCIsXG5cIm1lZmkudXNcIixcblwibWVtdXJsLmNvbVwiLFxuXCJtZXJreS5kZVwiLFxuXCJtZXRhbWFyay5uZXRcIixcblwibWljLmZyXCIsXG5cIm1pY2hhZWwucGhcIixcblwibWlnaHQubHlcIixcblwibWlncmUubWVcIixcblwibWluMi5tZVwiLFxuXCJtaW4uZGpcIixcblwibWluaWxpZW4uY29tXCIsXG5cIm1pbmlsaW5rLm9yZ1wiLFxuXCJtaW5pdXJsLmNvbVwiLFxuXCJtaW51Lm1lXCIsXG5cIm1pbnVybC5mclwiLFxuXCJtaW4udXNcIixcblwibWl0bmUud3NcIixcblwibWkudHRcIixcblwibWtlLm1lXCIsXG5cIm1rbG5kLmNvbVwiLFxuXCJta3QuY29tXCIsXG5cIm1rdHBsYy5vcmdcIixcblwibWxhbi5jb1wiLFxuXCJtbGtzLmNvXCIsXG5cIm1sbi5pbVwiLFxuXCJtbHNwLmNvXCIsXG5cIm1tZi5jY1wiLFxuXCJtbWZsaW50Lm1lXCIsXG5cIm1vYnkudG9cIixcblwibW9qby5seVwiLFxuXCJtb25leS51c1wiLFxuXCJtb25zdGVyLm1lXCIsXG5cIm1vb3VybC5jb21cIixcblwibW9waC5pZVwiLFxuXCJtb3JlLnNoXCIsXG5cIm1vdmllLnBzXCIsXG5cIm1vdmkuZXNcIixcblwibXBoLnRvXCIsXG5cIm1ya3QucnNcIixcblwibXJtbi5vcmdcIixcblwibXJ0ZS5jaFwiLFxuXCJtc2Z0Lml0XCIsXG5cIm1zZy5zZ1wiLFxuXCJtc3RyLmNkXCIsXG5cIm10aHMuYmVcIixcblwibXRsbi51c1wiLFxuXCJtLnRyaS5iZVwiLFxuXCJtdW8uZm1cIixcblwibXVybC5relwiLFxuXCJtdXQubHVcIixcblwibXYyLm1lXCIsXG5cIm12cC50b1wiLFxuXCJtd25lLndzXCIsXG5cIm15ZGVzZXJ0LmNvXCIsXG5cIm15Zm9udHMudXNcIixcblwibXlsb2MubWVcIixcblwibXlwaWN0Lm1lXCIsXG5cIm15c3AuYWNcIixcblwibXlzcC5pblwiLFxuXCJteXVybC5pblwiLFxuXCJteXVybC5zaVwiLFxuXCJteS55b3BsYWl0LmNvbVwiLFxuXCJtei5jbSxcIixcblwibXpsLmxhXCIsXG5cIm5hbWUuc29jaWFsXCIsXG5cIm5hbm9yZWYuY29tXCIsXG5cIm5hbm91cmwuc2VcIixcblwibmF0bC5yZVwiLFxuXCJuYXR1cmUubHlcIixcblwibmJjY2hpLmNvbVwiLFxuXCJuYmMuY29cIixcblwibmJjbmV3cy50b1wiLFxuXCJuYmNueS5jb21cIixcblwibmJjby5seVwiLFxuXCJuYmMudG9cIixcblwibmJsby5nc1wiLFxuXCJuYnguY2hcIixcblwibmNhbmUuY29tXCIsXG5cIm5jYS5zdFwiLFxuXCJuZHVybC5jb21cIixcblwibmUxLm5ldFwiLFxuXCJuZW8ubHlcIixcblwibmV0NDYubmV0XCIsXG5cIm5ldC5tc1wiLFxuXCJuZXRuZXQubWVcIixcblwibmV0c2hvcnRjdXQuY29tXCIsXG5cIm5ld3NkYXkuY29tXCIsXG5cIm5ld3Nlci5tZVwiLFxuXCJuZXdzcHIuZXNcIixcblwibmV3c3kuY29tXCIsXG5cIm5mei5tZVwiLFxuXCJuaWNvdS5jaFwiLFxuXCJuaWVsLnNuXCIsXG5cIm5pZS5tblwiLFxuXCJuaWcuZ3JcIixcblwibmluZy5pdFwiLFxuXCJuaS50b1wiLFxuXCJuaXhsZS51c1wiLFxuXCJuam91ci5ubFwiLFxuXCIjbm1lbS5hZ1wiLFxuXCJubS5seVwiLFxuXCJubi5uZlwiLFxuXCJub2QyLm1lXCIsXG5cIm5vaXAuY29cIixcblwibm9raWEubHlcIixcblwibm90bG9uZy5jb21cIixcblwibm90Lm15XCIsXG5cIm5vdi5pb1wiLFxuXCJub3d0aC5pc1wiLFxuXCJuLnByXCIsXG5cIm5xLnN0XCIsXG5cIm5yZHJ5Lm5ldFwiLFxuXCJuc2Z3LmluXCIsXG5cIm5zc24uY29cIixcblwibnRieC5jb1wiLFxuXCJudXRzaGVsbHVybC5jb21cIixcblwibnhnLmlzXCIsXG5cIm54eS5pblwiLFxuXCJueWRuLnVzXCIsXG5cIm55bS5hZ1wiLFxuXCJueW9iLmNvXCIsXG5cIm55cC5zdFwiLFxuXCJueXRpLm1zXCIsXG5cIm55di5tZVwiLFxuXCJuemgudHdcIixcblwib2Fkcy5jb1wiLFxuXCJvYm9leWFzdWkuY29tXCIsXG5cIm9jMS51c1wiLFxuXCJvY2NpcC5pdCBhbmQgMzYwLmlvXCIsXG5cIm8uZWEuY29tXCIsXG5cIm9mYS5ib1wiLFxuXCJvZmZ1ci5jb21cIixcblwib2ZsLm1lXCIsXG5cIm9oZGV2LmluXCIsXG5cIm9pbmsuY29tXCIsXG5cIm9rb2suZnJcIixcblwiby5seVwiLFxuXCJvbWYuZ2RcIixcblwib21nZi5hY1wiLFxuXCJvbS5seVwiLFxuXCJvbW9pa2FuZS5uZXRcIixcblwib24uMTFhbGl2ZS5jb21cIixcblwib245bmV3cy50dlwiLFxuXCJvbi1hamMuY29tXCIsXG5cIm9uLmFwcC5jb21cIixcblwib24uYXpjZW50cmFsLmNvbVwiLFxuXCJvbi5ib2ZhLmNvbVwiLFxuXCJvbi5jYy5jb21cIixcblwib24uY25uLmNvbVwiLFxuXCJvbi5lYS5jb21cIixcblwib25lY2VudC51c1wiLFxuXCIjb24uZmIubWVcIixcblwib24uZmVhcm5ldC5jb21cIixcblwib24uZmxhdG9kYXkuY29tXCIsXG5cIm9uZm9yYi5lc1wiLFxuXCJvbi5mdC5jb21cIixcblwib24uaGxuLnR2XCIsXG5cIm9uaW9uLmNvbVwiLFxuXCJvbi5qY29ubGluZS5jb21cIixcblwib24ua3Nkay5jb21cIixcblwib24ua3Rodi5jb21cIixcblwib24ubGlmZS5jb21cIixcblwib24ubWFzaC50b1wiLFxuXCJvbi5tZ21hZHYuY29tXCIsXG5cIm9uLm1rdHcubmV0XCIsXG5cIm9ubXNuYmMuY29cIixcblwib24ubXNuYmMuY29tXCIsXG5cIm9uLW1zbi5jb21cIixcblwib24ubmF0Z2VvLmNvbVwiLFxuXCJvbi5uZXdzMTAubmV0XCIsXG5cIm9uLm5maWIuY29tXCIsXG5cIm9uLnBpZXIxLmNvbVwiLFxuXCJvbi5wbmouY29tXCIsXG5cIm9uc2Fhcy5pbmZvXCIsXG5cIm9uLnNpLmNvbVwiLFxuXCJvbi5zdWdhcnNjYS5wZVwiLFxuXCJvbi50ZG8uY29tXCIsXG5cIm9uLnRoZWMtbC5jb21cIixcblwib24udGhlZ3Jpby5jb21cIixcblwib24udGhla2l0Yy5oblwiLFxuXCJvbi50b2RheS5jb21cIixcblwib252Yi5jb1wiLFxuXCJvbi52ZW50cmFjaGljYWdvLmNvbVwiLFxuXCJvbi52aDEuY29tXCIsXG5cIm9uLndiaXIuY29tXCIsXG5cIm9uLndjc2g2LmNvbVwiLFxuXCJvbi53Zm15LmNvbVwiLFxuXCJvbi53Z3J6LmNvbVwiLFxuXCJvbi53a3ljLmNvbVwiLFxuXCJvbi53bGJ6Mi5jb21cIixcblwib24ud2x0eC5jb21cIixcblwib24ud21hei5jb21cIixcblwib24ud25lcC5jb21cIixcblwib24ud3NqLmNvbVwiLFxuXCJvbi53dHNwLmNvbVwiLFxuXCJvbi53dXNhOS5jb21cIixcblwib24ud3p6bS5jb21cIixcblwib29xeC5jb21cIixcblwib3BiLmlzXCIsXG5cIm9wdGltaXplLmx5XCIsXG5cIm9yY2wuc29cIixcblwib3JlaWwubHlcIixcblwib3JnY25zLm9yZ1wiLFxuXCJvcnouc2VcIixcblwib3Noa28uc2hcIixcblwib3NreS5jb1wiLFxuXCJvdGFrLmh1XCIsXG5cIm91YS5iZVwiLFxuXCJvdS5hZlwiLFxuXCJvdS5nZFwiLFxuXCIjb3dsLmxpXCIsXG5cIiNvdy5seVwiLFxuXCJvdy5seVwiLFxuXCJvLXguZnJcIixcblwib3h5ei5pbmZvXCIsXG5cInA0ay5pblwiLFxuXCJwNmwub3JnXCIsXG5cInA4Zy50d1wiLFxuXCJwYWNrLnJzXCIsXG5cInBhcGUucnNcIixcblwicGFya3kudHZcIixcblwicGFydG9uLmx5XCIsXG5cInBhcnYudXNcIixcblwicGFzdC5pc1wiLFxuXCJwYXRjaC5jb21cIixcblwicGF1bGRpbmcubmV0XCIsXG5cInBibGkuc2hcIixcblwicGNrLnJzXCIsXG5cInBjby5sdFwiLFxuXCJwZGguY29cIixcblwicGR1ZGEubW9iaVwiLFxuXCJwZWFjaHAuaXRcIixcblwicGVhdXJsLmNvbVwiLFxuXCJwZW5kZWsuaW5cIixcblwicGVwLnNpXCIsXG5cInBlcmV6Lmx5XCIsXG5cInBldHNtYXJ0c29jaWFsLmNvbVwiLFxuXCJwZXdyc3IuY2hcIixcblwicGdlLnN4XCIsXG5cInBoaWxsaXBzLnRvXCIsXG5cInBoLmx5XCIsXG5cInBodHNocC51c1wiLFxuXCJwaWMuZ2RcIixcblwicGljaC5pblwiLFxuXCJwaWNwbHouY29tXCIsXG5cInBpY3oudXNcIixcblwicGlmZi5tZVwiLFxuXCJwaWtvLm1lXCIsXG5cInBpbmV3cy5jb1wiLFxuXCJwaW5nLmZtXCIsXG5cInBpbi5zdFwiLFxuXCJwaS5wZVwiLFxuXCJwaXRjaC5wZVwiLFxuXCJwaXVybC5jb21cIixcblwicGwuYW5cIixcblwicGxhdGVkLm1lXCIsXG5cInBsaS5nc1wiLFxuXCJwbG90cy5mclwiLFxuXCJwbHVtdXJsLmNvbVwiLFxuXCJwbHVybC5tZVwiLFxuXCJwLmx5XCIsXG5cInBtLnd1LmN6XCIsXG5cInBuZG8ubHlcIixcblwicG5nci5pdFwiLFxuXCJwbmluamEuY29cIixcblwicG50Lm1lXCIsXG5cInBvY2tldC5jb1wiLFxuXCJwb2pvbmV3cy5jb1wiLFxuXCJwb2xpdGkuY29cIixcblwicG9sbC5mbVwiLFxuXCJwb3AubHlcIixcblwicG9wcmwuY29tXCIsXG5cInBvcHMuY2lcIixcblwicG8uc3RcIixcblwicG9zdC5jclwiLFxuXCJwb3N0ZGlzcGF0LmNoXCIsXG5cInBvc3RlZC5hdFwiLFxuXCJwLm9zdC5pbVwiLFxuXCJwb3N0Lmx5XCIsXG5cInBvd2VsbHMudXNcIixcblwicHBjaGUucm9cIixcblwicHBmci5pdFwiLFxuXCJwcC5nZ1wiLFxuXCJwcHN0Lm1lXCIsXG5cInBwdC5jY1wiLFxuXCJwcHQubGlcIixcblwicC5wd1wiLFxuXCJwcmVqaXQuY3pcIixcblwicHJlc3Muc25cIixcblwicHJldHR5bGlua3Byby5jb21cIixcblwicHJlei5pc1wiLFxuXCJwcmkudmNcIixcblwicHJudC5pblwiLFxuXCJwcm4udG9cIixcblwicHJvZmlsZS50b1wiLFxuXCJwdDIubWVcIixcblwicHRhYi5pdFwiLFxuXCJwdGl0dXJsLmNvbVwiLFxuXCJwdG0ucm9cIixcblwicHRyYW5pLm1lXCIsXG5cInB1Ymx1bi5jaFwiLFxuXCJwdWIudml0cnVlLmNvbVwiLFxuXCJwdWtlLml0XCIsXG5cInB1bHNlLm1lXCIsXG5cInB1bHNlbmUud3NcIixcblwicHVyaS5uYVwiLFxuXCJwdzIucm9cIixcblwicHdpcmUuYXRcIixcblwicHk2LnJ1XCIsXG5cInB5c3Blci5jb21cIixcblwicWJuLnJ1XCIsXG5cInEuZ3NcIixcblwicWlrLmxpXCIsXG5cInFrbWUubWVcIixcblwicWxuay5uZXRcIixcblwicW9pb2IuY29tXCIsXG5cInFxYy5jb1wiLFxuXCJxci5hZVwiLFxuXCJxci5jeFwiLFxuXCJxci5uZXRcIixcblwicXJ0YWcuZnJcIixcblwicXRlLm1lXCIsXG5cInF1aWNrdXJsLmNvLnVrXCIsXG5cInF1cmwuY29tXCIsXG5cInF1cmx5cS5jb21cIixcblwicXUudGNcIixcblwicXV1Lm51XCIsXG5cInF1eC5pblwiLFxuXCJxdmMuY29cIixcblwicXhwLmN6XCIsXG5cInF4cC5za1wiLFxuXCJxeS5maVwiLFxuXCJxei5jb21cIixcblwicjI5LmNvXCIsXG5cInIyOS51c1wiLFxuXCJyOHQudXNcIixcblwicmFjaC50dlwiLFxuXCJyYWNrZWQuY2NcIixcblwicmF2ZW4uaW1cIixcblwicmI2LmNvXCIsXG5cInJiNi5tZVwiLFxuXCJyYmwubXNcIixcblwicmNrbnIuaW9cIixcblwicmNsay5seVwiLFxuXCJyZGQubWVcIixcblwicmRlLm1lXCIsXG5cInJkLmlvXCIsXG5cInJkei5tZVwiLFxuXCJyZWFkLmJpXCIsXG5cInJlYWR0aGlzLmNhXCIsXG5cInJlYWxseXRpbnl1cmwuY29tXCIsXG5cInJlYnJpY2suaXRcIixcblwicmVkZC5pdFwiLFxuXCJyZWRpci5lY1wiLFxuXCJyZWRpcmVjdHMuY2FcIixcblwicmVkaXIuZnJcIixcblwicmVkaXJ4LmNvbVwiLFxuXCJyZWR1Lml0XCIsXG5cInJlZi5zb1wiLFxuXCJyZWlzZS5sY1wiLFxuXCJyZWxpbmsuZnJcIixcblwicmVseXQudXNcIixcblwicmVtLmF4XCIsXG5cInJlLnBuXCIsXG5cInJldHdlZGlhLmNvbVwiLFxuXCJyZXR3dC5tZVwiLFxuXCJyZXV0LnJzXCIsXG5cInJldm9sdmVyMi5jb21cIixcblwicmZpLm15XCIsXG5cInJoanIubmV0XCIsXG5cInJpY2tyb2xsLml0XCIsXG5cInIuaW1cIixcblwicmkubXNcIixcblwicmluZ2NlbnRyLmFsXCIsXG5cInJpbmdpdC51c1wiLFxuXCJyaXZ2YS5kZVwiLFxuXCJyaXouY3pcIixcblwicml6LmdkXCIsXG5cInJseS5jY1wiLFxuXCJybmMuYWdcIixcblwicm5rLm1lXCIsXG5cInJua3ByLmNvbVwiLFxuXCJyb2NrY2VudGVyLmNvXCIsXG5cInJvY2subGlcIixcblwicm9kLmdzXCIsXG5cInJvZmxjLmF0XCIsXG5cInJvbC5sYVwiLFxuXCJyb2wuc3RcIixcblwicnBwbGZyLm1lXCIsXG5cInJzbW9ua2V5LmNvbVwiLFxuXCJydDIuY2FcIixcblwicnQubnVcIixcblwicnQuc2VcIixcblwicnVieXVybC5jb21cIixcblwicnUubHlcIixcblwicnVybC5vcmdcIixcblwicnV2Lm1lXCIsXG5cInJ3amYud3NcIixcblwicnd3LnRvXCIsXG5cInJ3dy50d1wiLFxuXCJzM250LmNvbVwiLFxuXCJzNGMuaW5cIixcblwiczd5LnVzXCIsXG5cInNhZmVsaW5rcy5ydVwiLFxuXCJzYWZlLm1uXCIsXG5cInNhZm0uY29cIixcblwic2FneWFwLnRrXCIsXG5cInNhaS5seVwiLFxuXCJzYW1ldXJsLmNvbVwiLFxuXCJzYXJjYXMubXNcIixcblwic2JuLnRvXCIsXG5cInNidXguY29cIixcblwic2NoZWQuY29cIixcblwic2NoLm1wXCIsXG5cInNjaWZyaS5tZVwiLFxuXCJzY29ibGUuaXRcIixcblwic2Mub3JnXCIsXG5cInNjcmkuYmlcIixcblwic2NybmNoLm1lXCIsXG5cInNjdHkuYXNpYVwiLFxuXCJzZHRrLmZtXCIsXG5cInNkdS5za1wiLFxuXCJzZHV0LnVzXCIsXG5cInMuZHYubnVcIixcblwic2VhdGkubXNcIixcblwic2VjcmV0Lmx5XCIsXG5cInNlZC5jeFwiLFxuXCJzZWVtZS5hdFwiLFxuXCJzZWUuc2NcIixcblwic2VndWUuc2VcIixcblwic2VsbmQuY29tXCIsXG5cInNlbHouY29cIixcblwic2VuZC5nZFwiLFxuXCJzZXBoLm1lXCIsXG5cInNlci5ielwiLFxuXCJzZXRkLmVzXCIsXG5cInNld2F0LmNoXCIsXG5cInNmb3JjZS5jb1wiLFxuXCJzZnRseXIuY29tXCIsXG5cInNmdS5jYVwiLFxuXCJzZnkuY29cIixcblwic2dmbm93LmNvXCIsXG5cInNnaXptby5jb21cIixcblwic2drLm1uXCIsXG5cInMuZ25vc3MudXNcIixcblwic2hhZHl1cmwuY29tXCIsXG5cInNoYXIuYXNcIixcblwic2hhci5lc1wiLFxuXCJzLmhici5vcmdcIixcblwic2hlYnByLmVzXCIsXG5cInNoaW0ubmV0XCIsXG5cInNoaW5rLmRlXCIsXG5cInNoby5wZVwiLFxuXCJzaG9ybC5jb21cIixcblwic2hvcnQuY2NcIixcblwic2hvcnRlbnVybC5jb21cIixcblwic2hvcnRlbi53c1wiLFxuXCJzaG9ydGVybGluay5jb21cIixcblwic2hvcnQuaWVcIixcblwic2hvcnRpby5jb21cIixcblwic2hvcnRsaW5rcy5jby51a1wiLFxuXCJzaG9ydGx5Lm5sXCIsXG5cInNob3J0bmEubWVcIixcblwic2hvcnRuLm1lXCIsXG5cInNob3J0LnBrXCIsXG5cInNob3J0cXVpay5jb21cIixcblwic2hvcnRyLm1lXCIsXG5cInNob3J0LnRvXCIsXG5cInNob3J0dXJsLmNvbVwiLFxuXCJzaG9ydHoubWVcIixcblwic2hvdHVybC51c1wiLFxuXCJzaG91dC50b1wiLFxuXCJzaG93Lm15XCIsXG5cInNocHdzLm1lXCIsXG5cInNocmVkdVwiLFxuXCJzaHJlZHVybC5jb21cIixcblwic2hyaW5raWZ5LmNvbVwiLFxuXCJzaHJpbmtyLmNvbVwiLFxuXCJzaHJpbmtzdGVyLmNvbVwiLFxuXCJzaHJpbmt1cmwudXNcIixcblwic2hydGVuLmNvbVwiLFxuXCJzaHJ0LmZyXCIsXG5cInNocnQuaW5cIixcblwic2hydGwuY29tXCIsXG5cInNocnRuLmNvbVwiLFxuXCJzaHJ0bmQuY29tXCIsXG5cInNocnQuc3RcIixcblwic2hydC53c1wiLFxuXCJzaHJ1bmtpbi5jb21cIixcblwic2guc3RcIixcblwic2h1cmwubmV0XCIsXG5cInNody5tZVwiLFxuXCJzaHkuc2lcIixcblwic2h6LmFtXCIsXG5cInNpY2F4Lm5ldFwiLFxuXCJzaWdub24ub3JnXCIsXG5cInNpbXAubHlcIixcblwic2ltdXJsLmNvbVwiLFxuXCJzaW11cmwubmV0XCIsXG5cInNpbXVybC5vcmdcIixcblwic2ltdXJsLnVzXCIsXG5cInNpbmEubHRcIixcblwic2l0ZWx1dGlvbnMuY29tXCIsXG5cInNpdGVvLnVzXCIsXG5cInNrLmd5XCIsXG5cInNrbC5zaFwiLFxuXCJza3JvYy5wbFwiLFxuXCJza3Iuc2tcIixcblwic2sueXBlLm1zXCIsXG5cInNsYXRlLm1lXCIsXG5cInNsaWRlc2hhLnJlXCIsXG5cInNsa2kucnVcIixcblwic2wubHlcIixcblwic21hbGxyLmNvbVwiLFxuXCJzbWFsbHIubmV0XCIsXG5cInNtYXJ0LmNyXCIsXG5cInNtYXJ0dXJsLml0XCIsXG5cInNtYXNoZWQuYnlcIixcblwic20uZHJwZXBwZXIuY29tXCIsXG5cInNtZi5pc1wiLFxuXCJzbWZ1LmluXCIsXG5cInNtZ20udXNcIixcblwic21pdGguZ2xcIixcblwic21sbC5jb1wiLFxuXCJzbXEudGNcIixcblwic21zaC5tZVwiLFxuXCJzbXVybC5jb21cIixcblwic211cmwubmFtZVwiLFxuXCJzbmFkci5pdFwiLFxuXCJzbmQuc2NcIixcblwic24uaW1cIixcblwic25pcGllLmNvbVwiLFxuXCJzbmlwLmx5XCIsXG5cInNuaXByLmNvbVwiLFxuXCJzbmlwdXJsLmNvbVwiLFxuXCJzbmtyLm1lXCIsXG5cInNub3cuc2hcIixcblwic25zLm14XCIsXG5cInNuc3cudXNcIixcblwic251cmwuY29tXCIsXG5cInNuLnZjXCIsXG5cInMubnl0LmNvbVwiLFxuXCJzb2NpYWwuYmVzdGJ1eS5jb21cIixcblwic29jaWFsLmpjcC5jb21cIixcblwic29jaWFsLnZ6dy5jb21cIixcblwic29jaWFsLnp1bmUubmV0XCIsXG5cInNvY2tyb2xsLmNvbVwiLFxuXCJzb2MubGlcIixcblwic29tZS5seVwiLFxuXCJzb25nLmx5XCIsXG5cInNvby5nZFwiLFxuXCJzLm9za3kuY29cIixcblwic291cC5wc1wiLFxuXCJzcDIucm9cIixcblwic3Bkci5tblwiLFxuXCJzcGUuY29tXCIsXG5cInNwZWRyLmNvbVwiLFxuXCJzcG4uc3JcIixcblwic3Bvbi5kZVwiLFxuXCJzcG9ydHNncmlkLmNvbVwiLFxuXCJzcG90aS5maVwiLFxuXCJzcHIubHlcIixcblwic3B0bmtuZS53c1wiLFxuXCJzcTYucnVcIixcblwic3FybC5pdFwiLFxuXCJzcXUucmVcIixcblwic3F6ZS5pdFwiLFxuXCJzLnJscC5kZVwiLFxuXCJzcm5rLm5ldFwiLFxuXCJzcnMubGlcIixcblwic3NsLmdzXCIsXG5cInN0OC5mbVwiLFxuXCJzdGFuNGQudXNcIixcblwic3Rhcmdhei50dFwiLFxuXCJzdGFyc3Rhci50b1wiLFxuXCJzdGFydHVybC5jb21cIixcblwic3RhdGlnci5hbVwiLFxuXCJzdGlja3VybC5jb21cIixcblwic3Rqci5ubFwiLFxuXCJzdGtzLmNvXCIsXG5cInN0bHJhLm1zXCIsXG5cInN0b25ldC5jb1wiLFxuXCJzdHBtdnQuY29tXCIsXG5cInN0cmlraW5nLmx5XCIsXG5cInN0cnkubWVcIixcblwic3R1cmx5LmNvbVwiLFxuXCJzdHlsZWl0ZS5jb21cIixcblwic3ViYXIudXNcIixcblwic3VudG0uZXNcIixcblwic3UucHJcIixcblwic3Vwcy51c1wiLFxuXCJzdXJsLmNvLnVrXCIsXG5cInMtdXJsLmZyXCIsXG5cInN1cmwuaHVcIixcblwic3VybC5pdFwiLFxuXCJzdXJsLm1lXCIsXG5cInN1eC5jelwiLFxuXCJzdnkubWtcIixcblwicy53aGNjLmNvbVwiLFxuXCJzeS5wZVwiLFxuXCJ0YWJ6aS5jb21cIixcblwidGEuZ2RcIixcblwidGFrZW15ZmlsZS5jb21cIixcblwidGF1LnBlXCIsXG5cInRiZC5seVwiLFxuXCJ0YmYubWVcIixcblwidC5jblwiLFxuXCJ0LmNvXCIsXG5cInRjcm4uY2hcIixcblwidGRqdC5jelwiLFxuXCJ0ZWNobWUubWVcIixcblwidGVjaHBpbi5pb1wiLFxuXCJ0ZWNocmUudnVcIixcblwidGVrLmlvXCIsXG5cInRlbXBvLmFpXCIsXG5cInRnci5tZVwiLFxuXCJ0Z3IucGhcIixcblwidGd0LmJ6XCIsXG5cInRoOC51c1wiLFxuXCJ0aGQuY29cIixcblwidGhlYXRsbi50Y1wiLFxuXCJ0aGViZWEuc3RcIixcblwidGhlYnJhaXNlci5jb21cIixcblwidGhlY293Lm1lXCIsXG5cInRoZWNwLm1lXCIsXG5cInRoZWRjLmNvbVwiLFxuXCJ0aGVkcnVtLmNvbVwiLFxuXCJ0aGVraXRjLmhuXCIsXG5cInRoZXNhLnVzXCIsXG5cInRoZXNlbnQubmxcIixcblwidGhlc28uY29cIixcblwidGhldGltLmVzXCIsXG5cInRoa3AuZ3NcIixcblwidGhrcHIuZ3NcIixcblwidGhuZHIuaXRcIixcblwidGhyLmNtXCIsXG5cInRocmRsLmVzXCIsXG5cInRocmwuc3RcIixcblwidGlnaHR1cmwuY29tXCIsXG5cInRpbHQudGNcIixcblwidGkubWVcIixcblwidGltZXN1cmwuYXRcIixcblwidGltbWlsLmVzXCIsXG5cInRpbmkuY2NcIixcblwidGluaXVyaS5jb21cIixcblwidGluaS51c1wiLFxuXCJ0aW4ubGlcIixcblwidGlueWFycm8ud3NcIixcblwidGlueWFycm93cy5jb21cIixcblwidGlueS5jY1wiLFxuXCJ0aW55bGluay5jb21cIixcblwidGlueWxpbmsuaW5cIixcblwidGlueS5sdFwiLFxuXCJ0aW55Lmx5XCIsXG5cInRpbnkubXNcIixcblwidGlueS5wbFwiLFxuXCJ0aW55cGwudXNcIixcblwidGlueXNvbmcuY29tXCIsXG5cInRpbnl0dy5pdFwiLFxuXCJ0aW55dXJpLmNhXCIsXG5cInRpbnl1cmwuY29tXCIsXG5cInRpbnl1cmwuaHVcIixcblwidGl4c3UuY29tXCIsXG5cInRrLlwiLFxuXCJ0a3QubHlcIixcblwidGxkaXMuaXRcIixcblwidGxkci5za1wiLFxuXCJ0bC5nZFwiLFxuXCJ0LmxoLmNvbVwiLFxuXCJ0bGxnLm5ldFwiLFxuXCJ0bHJrLml0XCIsXG5cInRtYmxyLmNvXCIsXG5cInRtaS5tZVwiLFxuXCJ0LW1vLmNvXCIsXG5cInRtb3V0Y2hpLnVzXCIsXG5cInRtb3V0LnVzXCIsXG5cInRtdnMudHZcIixcblwidG16Lm1lXCIsXG5cInRuYXQuaW5cIixcblwidG5jci53c1wiLFxuXCJ0bmlqLm9yZ1wiLFxuXCJ0bm5lLndzXCIsXG5cInRudy50b1wiLFxuXCJ0bnkuY29tXCIsXG5cInRueS5jelwiLFxuXCJ0by5cIixcblwiVG84LmNjXCIsXG5cInRvZ290by51c1wiLFxuXCJ0b2hsZS5kZVwiLFxuXCJ0by5qZVwiLFxuXCJ0b2x1Lm5hXCIsXG5cInRvLmx5XCIsXG5cInRvbW15am8uaG5cIixcblwidG9tcy5zaFwiLFxuXCJ0by5wYnMub3JnXCIsXG5cInRvdGEyLmNvbVwiLFxuXCJ0b3RjLnVzXCIsXG5cInRvLnZnXCIsXG5cInRveXNyLnVzXCIsXG5cInRwbS5seVwiLFxuXCJ0cG1yLmNvbVwiLFxuXCJ0cHJrLnVzXCIsXG5cInRwdHEuY29tXCIsXG5cInRyNS5pblwiLFxuXCJ0cmFjZXVybC5jb21cIixcblwidHJhY2t1cmwuaXRcIixcblwidHJhLmt6XCIsXG5cInRyY2IubWVcIixcblwidHJjay5tZVwiLFxuXCJ0cmcubGlcIixcblwidHJpYi5hbFwiLFxuXCJ0cmliLmluXCIsXG5cInRyaWNrLmx5XCIsXG5cInRyaWkudXNcIixcblwidHIuaW1cIixcblwidHJpbS5saVwiLFxuXCJ0cmtyLndzXCIsXG5cInRya3VybC5jb21cIixcblwidHIubXlcIixcblwidHJuZGJsLmNvXCIsXG5cInRybi5zdFwiLFxuXCJ0cm9uaS5tZVwiLFxuXCJ0cnVtcGluay5sdFwiLFxuXCJ0cnVuYy5pdFwiLFxuXCJ0cnVuY3VybC5jb21cIixcblwidHNvcnQudXNcIixcblwidHNwbmUud3NcIixcblwidC5zdFwiLFxuXCJ0c3RhLnJzXCIsXG5cInQudWJlci5jb21cIixcblwidHViZXVybC5jb21cIixcblwidHVtYmxyLmNvbVwiLFxuXCJ0dXJvLnVzXCIsXG5cInQudXNuZXdzLmNvbVwiLFxuXCJ0dm5ld3MuY29cIixcblwidHcwLnVzXCIsXG5cInR3MS51c1wiLFxuXCJ0dzIudXNcIixcblwidHc1LnVzXCIsXG5cInR3Ni51c1wiLFxuXCJ0dzgudXNcIixcblwidHc5LnVzXCIsXG5cInR3YS5sa1wiLFxuXCJ0dy5hcHBzdG9yZS5jb21cIixcblwidHdhdWQuaW9cIixcblwidHdlZXRidXJuZXIuY29tXCIsXG5cInR3ZWV0bC5jb21cIixcblwidHdlZXQubWVcIixcblwidHdlZXoubWVcIixcblwidHdldC5mclwiLFxuXCJ0d2hpdGUubWVcIixcblwidHdodWIuY29tXCIsXG5cInR3aS5neVwiLFxuXCJ0d2kuaW1cIixcblwidHdpcC51c1wiLFxuXCJ0d2lybC5hdFwiLFxuXCJ0d2l0LmFjXCIsXG5cInR3aXRjbGlja3MuY29tXCIsXG5cInR3aXRwaWMuY29tXCIsXG5cInR3aXR0ZXJ1cmwubmV0XCIsXG5cInR3aXR0ZXJ1cmwub3JnXCIsXG5cInR3aXR0aGlzLmNvbVwiLFxuXCJ0d2l0dHUubXNcIixcblwidHdpdHVybC5kZVwiLFxuXCJ0d2l0emFwLmNvbVwiLFxuXCJ0d2xyLm1lXCIsXG5cInR3bC5zaFwiLFxuXCJ0d2x2Lm5ldFwiLFxuXCJ0dy5tZWRpY2FsZXhwcmVzcy5jb21cIixcblwidHcubmJjc3BvcnRzLmNvbVwiLFxuXCJ0d3J0Lm1lXCIsXG5cInR3dHIudG9cIixcblwidHd0ci51c1wiLFxuXCJ0d3VybC5jY1wiLFxuXCJ0d3VybC5ubFwiLFxuXCJ0eGV4LmVzXCIsXG5cInR4dC5ib1wiLFxuXCJ1NzYub3JnXCIsXG5cInVhZmx5LmNvXCIsXG5cInVhcHAubHlcIixcblwidWIwLmNjXCIsXG5cInUuYmJcIixcblwidWJ5LmVzXCIsXG5cInVjYW0ubWVcIixcblwidWNsYS5pblwiLFxuXCJ1Zy5jelwiLFxuXCJ1aW9wLm1lXCIsXG5cInVsaW1pdC5jb21cIixcblwidWxtdC5pblwiLFxuXCJ1bHUubHVcIixcblwidS5tYXZyZXYuY29tXCIsXG5cInVtdXJsLnVzXCIsXG5cInVuZmFrZXIuaXRcIixcblwidW5pbmV3cy51c1wiLFxuXCJ1bmkudmlcIixcblwidW5sYy51c1wiLFxuXCJ1bnRwLmJlZXJcIixcblwidW50cC5pdFwiLFxuXCJ1Lm51XCIsXG5cInVudnJzLmFsXCIsXG5cInVwZGF0aW5nLm1lXCIsXG5cInUucHdcIixcblwidXB3ci5tZVwiLFxuXCJ1cHphdC5jb21cIixcblwidXIxLmNhXCIsXG5cInVyYmFudXAuY29tXCIsXG5cInVyYm4uY2NcIixcblwidXJiby5jb1wiLFxuXCJ1cml6eS5jb21cIixcblwidXJsMi5mclwiLFxuXCJ1cmwzNjAubWVcIixcblwidXJsNC5ldVwiLFxuXCJ1cmw1Lm9yZ1wiLFxuXCJ1cmwuYWdcIixcblwidXJsYW8uY29tXCIsXG5cInVybC5helwiLFxuXCJ1cmxiZWUuY29tXCIsXG5cInVybGJvcmcuY29tXCIsXG5cInVybGJyaWVmLmNvbVwiLFxuXCJ1cmxjb3J0YS5lc1wiLFxuXCJ1cmwuY28udWtcIixcblwidXJsY292ZXIuY29tXCIsXG5cInVybGN1dC5jb21cIixcblwidXJsY3V0dGVyLmNvbVwiLFxuXCJ1cmxlbmNvLmRlXCIsXG5cInVybGcuaW5mb1wiLFxuXCJ1cmwuZ28uaXRcIixcblwidXJsaGF3ay5jb21cIixcblwidXJsLmllXCIsXG5cInVybC5pbmMteC5ldVwiLFxuXCJ1cmxpbi5pdFwiLFxuXCJ1cmxpLm5sXCIsXG5cInVybGtpc3MuY29tXCIsXG5cInVybC5sb3RwYXRyb2wuY29tXCIsXG5cInVybG9vLmNvbVwiLFxuXCJ1cmxwaXJlLmNvbVwiLFxuXCJ1cmxzLmZyXCIsXG5cInVybHNob3J0ZW5pbmdzZXJ2aWNlZm9ydHdpdHRlci5jb21cIixcblwidXJscy5pbVwiLFxuXCJ1cmx0ZWEuY29tXCIsXG5cInVybHUubXNcIixcblwidXJsdmkuYlwiLFxuXCJ1cmx2aS5iZVwiLFxuXCJ1cmx4LmllXCIsXG5cInVyLmx5XCIsXG5cInVybHouYXRcIixcblwidXJsemVuLmNvbVwiLFxuXCJ1cmx6LmZyXCIsXG5cInVydWIudXNcIixcblwidXNhbmV0LnR2XCIsXG5cInVzYXQubHlcIixcblwidXNlLm15XCIsXG5cInVzZXJ2b2ljZS5jb21cIixcblwidXNzb2MuY3JcIixcblwidXN0cmUuYW1cIixcblwidXRmZy5za1wiLFxuXCJ1LnRvXCIsXG5cInV2ZXJzZS51c1wiLFxuXCJ1eG0uYWdcIixcblwidjFtLm5ldFwiLFxuXCJ2NS5nZFwiLFxuXCJ2YWFhLmZyXCIsXG5cInZhZG8uaXRcIixcblwidmFsdi5pbVwiLFxuXCJ2YXphLm1lXCIsXG5cInZiLmx5XCIsXG5cInZibHkudXNcIixcblwidmQ1NS5jb21cIixcblwidmRpcmVjdC5jb21cIixcblwidmVyZC5pblwiLFxuXCJ2ZXZvLmx5XCIsXG5cInYuZ2RcIixcblwidmduLmFtXCIsXG5cInZnbi5tZVwiLFxuXCJ2Lmh0XCIsXG5cInZpYS5tZVwiLFxuXCJ2aWRkeS5pdFwiLFxuXCJ2aWlnby5pbVwiLFxuXCJ2aS5seVwiLFxuXCJ2aXJnLmNvXCIsXG5cInZpcmcuaW5cIixcblwidmlybC5jb21cIixcblwidmwuYW1cIixcblwidm0ubGNcIixcblwidm50eS5mclwiLFxuXCJ2bnR5LnVzXCIsXG5cInZvaXpsZS5jb21cIixcblwidm9sdS5zblwiLFxuXCJ2b3YubGlcIixcblwidm94LmNvbVwiLFxuXCJ2cmdlLmNvXCIsXG5cInZybC5odFwiLFxuXCJ2cnNuLmNjXCIsXG5cInZzYi5saVwiLFxuXCJ2c2xsLmV1XCIsXG5cInZ0ODAyLnVzXCIsXG5cInZ0Yy5lc1wiLFxuXCJ2dWx0LnJlXCIsXG5cInZ1ci5tZVwiLFxuXCJ2di52Z1wiLFxuXCJ2LnppdGUuY29tXCIsXG5cInZ6LnRvXCIsXG5cInZ6dHVybC5jb21cIixcblwidzByLm1lXCIsXG5cIncxcC5mclwiLFxuXCJ3MzMudXNcIixcblwidzM0LnVzXCIsXG5cInczdC5vcmdcIixcblwidzU1LmRlXCIsXG5cIndhOS5sYVwiLFxuXCJ3YWEuYWlcIixcblwid2FsbWFydHVybC5jb21cIixcblwid2Fwby5zdFwiLFxuXCJ3YXB1cmwuY28udWtcIixcblwid2FzaGV4LmFtXCIsXG5cIndiMS5ldVwiLFxuXCJ3YnRybmQuY29cIixcblwid2J1ci5mbVwiLFxuXCJ3ZWI5OS5ldVwiLFxuXCJ3ZWJhbGlhcy5jb21cIixcblwid2VkLmxpXCIsXG5cIndlbGNvbWUudG9cIixcblwid2VydmlyZy5pblwiLFxuXCJ3ZS50bFwiLFxuXCJ3ZXQucHRcIixcblwid2ZwLnRvXCIsXG5cIndmdHMudHZcIixcblwidy5mdWxsc2FpbC5lZHVcIixcblwid2guZ292XCIsXG5cIndpZGVvLmZyXCIsXG5cIndpZGcubWVcIixcblwid2lncy5seVwiLFxuXCJ3aW4uZ3NcIixcblwid2lwaS5lc1wiLFxuXCJ3aXJlLm1zXCIsXG5cIndpcy5tc1wiLFxuXCJ3aXRoLm1lXCIsXG5cIndqZi5pbVwiLFxuXCJ3ai5sYVwiLFxuXCJ3a3JnLmNvbVwiLFxuXCJ3b28ubHlcIixcblwid3BiZWcuaW5cIixcblwid3AubWVcIixcblwid3AubXVcIixcblwid3BvLnN0XCIsXG5cIndyZC5jbVwiLFxuXCJ3cmRtLmFnXCIsXG5cIuKAui53c1wiLFxuXCJ3c20uY29cIixcblwid3RjLmxhXCIsXG5cInd0aG1zLmNvXCIsXG5cInd1LmN6XCIsXG5cInd3Ny5mclwiLFxuXCJ3d2QudXNcIixcblwid3d5Lm1lXCIsXG5cInd3ei5yc1wiLFxuXCJ3eGNoLm5sXCIsXG5cIngxMC5teFwiLFxuXCJ4MmMuZXVcIixcblwieDJjLmV1bXhcIixcblwieGF2LmNjXCIsXG5cInhieC5tc1wiLFxuXCJ4LmNvXCIsXG5cInhlZXVybC5jb21cIixcblwieGdkLmluXCIsXG5cInguaHlwZW0uY29tXCIsXG5cInhpYi5tZVwiLFxuXCJ4aWwuaW5cIixcblwieGw4LmV1XCIsXG5cInhsaW5rei5pbmZvXCIsXG5cInhsdXJsLmRlXCIsXG5cInhuLS0xY2kud3NcIixcblwieG4tLTNmaS53c1wiLFxuXCJ4bi0tNWdpLndzXCIsXG5cInhuLS05Z2kud3NcIixcblwieG4tLWJpaC53c1wiLFxuXCJ4bi0tY3dnLndzXCIsXG5cInhuLS1lZ2kud3NcIixcblwieG4tLWZ3Zy53c1wiLFxuXCJ4bi0taGdpLndzXCIsXG5cInhuLS1sM2gud3NcIixcblwieG4tLW9kaS53c1wiLFxuXCJ4bi0tb2dpLndzXCIsXG5cInhuLS1yZWkud3NcIixcblwieC5udVwiLFxuXCJ4bi0tdmdpLndzXCIsXG5cInhvZS5jelwiLFxuXCJ4ci5jb21cIixcblwieHJsLmluXCIsXG5cInhybC51c1wiLFxuXCJ4cnQubWVcIixcblwieHJ4LnNtXCIsXG5cInguc2VcIixcblwieHQzLm1lXCIsXG5cInh0dS5tZVwiLFxuXCJ4dWEubWVcIixcblwieHViLm1lXCIsXG5cIngudXAuY29tXCIsXG5cInh1cmwuZXNcIixcblwieHVybC5qcFwiLFxuXCJ4dXJscy5jb1wiLFxuXCJ4LnZ1XCIsXG5cInh4c3VybC5kZVwiLFxuXCJ4emIuY2NcIixcblwieWFnb2EuZnJcIixcblwieWFnb2EubWVcIixcblwieS5haG9vLml0XCIsXG5cInlhdHVjLmNvbVwiLFxuXCJ5YXUuc2hcIixcblwieWVjYS5ldVwiLFxuXCJ5ZWN0LmNvbVwiLFxuXCJ5ZS5wZVwiLFxuXCJ5ZXAuaXRcIixcblwieWUtcy5jb21cIixcblwieWZyb2cuY29tXCIsXG5cInlob28uaXRcIixcblwieWl5ZC5jb21cIixcblwieW9naC5tZVwiLFxuXCJ5b24uaXJcIixcblwieW91ZmFwLm1lXCIsXG5cInlvdXJscy5vcmdcIixcblwiI3lvdXR1LmJlXCIsXG5cInlvdXR1LmJlXCIsXG5cInlzZWFyLmNoXCIsXG5cInl1Mi5pdFwiLFxuXCJ5dWFyZWwuY29tXCIsXG5cInl5di5jb1wiLFxuXCJ6MHAuZGVcIixcblwiejkuZnJcIixcblwiemFnYXQuYnpcIixcblwiemFnZy50b1wiLFxuXCJ6YW4uZ3lcIixcblwiemFwaXQubnVcIixcblwiemFwdC5pblwiLFxuXCJ6YXB3b3cubWVcIixcblwiemQubmV0XCIsXG5cInplZWsuaXJcIixcblwiemlnbHIudXNcIixcblwiemkubWFcIixcblwiemkubWVcIixcblwiemkubXVcIixcblwiemkucGVcIixcblwiemlwLmxpXCIsXG5cInppcG15dXJsLmNvbVwiLFxuXCJ6aXAubmV0XCIsXG5cInppdGUudG9cIixcblwiemtyYXQubWVcIixcblwiemtyLmN6XCIsXG5cInprcnQuY3pcIixcblwiem9vZGwuY29tXCIsXG5cInpvb3RpdC5jb21cIixcblwiem9vLnRsXCIsXG5cInpwYWcuZXNcIixcblwiei5wZVwiLFxuXCJ6cHIuaW9cIixcblwielNNUy5uZXRcIixcblwienRpLm1lXCIsXG5cInp1ZC5tZVwiLFxuXCJ6dXJsLndzXCIsXG5cInp4cS5uZXRcIixcblwienl2YS5vcmdcIixcblwienphbmcua3JcIixcblwienpiLmJ6XCIsXG5cInp6LmdkXCJcbl07XG4iLCJleHBvcnQgY29uc3QgYW1wQ2FjaGVEb21haW5zID0gW1wiY2RuLmFtcHByb2plY3Qub3JnXCIsIFwiYW1wLmNsb3VkZmxhcmUuY29tXCIsIFwiYmluZy1hbXAuY29tXCJdOyIsIi8qKlxuKiBNb2R1bGUgZm9yIHJlc29sdmluZyBhIHNob3J0IHVybFxuKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLkxpbmtSZXNvbHV0aW9uXG4qL1xuaW1wb3J0IHtcbiBnZXREZWJ1Z2dpbmdMb2dcbn0gZnJvbSAnLi9EZWJ1Z2dpbmcuanMnO1xuaW1wb3J0IHtcbiBzaG9ydERvbWFpbnNcbn0gZnJvbSAnLi4vZGVwZW5kZW5jaWVzL3Nob3J0ZG9tYWlucy5qcyc7XG5pbXBvcnQge1xuIGFtcENhY2hlRG9tYWluc1xufSBmcm9tICcuLi9kZXBlbmRlbmNpZXMvYW1wY2FjaGVkb21haW5zLmpzJztcbmNvbnN0IGRlYnVnTG9nID0gZ2V0RGVidWdnaW5nTG9nKFwiVXRpbGl0aWVzLkxpbmtSZXNvbHV0aW9uXCIpO1xuXG5cbmNvbnN0IGZldGNoVGltZW91dE1zID0gNTAwMDtcbmxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuLy8gcHJvbWlzZXNCeVVybCBpcyBhIG1hcHBpbmcgZnJvbSBhIHVybCB0byByZXNvbHZlIGFuZCB0aGUgcmVzb2x2ZSBvYmplY3RzIGFzc29jaWF0ZWQgd2l0aCBpdFxubGV0IHByb21pc2VzQnlVcmwgPSBuZXcgTWFwKCk7XG4vLyB0cmFja2VkVXJscyBpcyBhIHNldCBmb3Igd2hpY2ggdGhlIGhlYWRlcnMgYXJlIG9ic2VydmVkXG5sZXQgdHJhY2tlZFVybHMgPSBuZXcgU2V0KCk7XG4vLyB1cmxCeVJlZGlyZWN0ZWRVcmwgaXMgYSBtYXBwaW5nIGZyb20gYSByZWRpcmVjdGVkIHVybCB0byB1cmwgdGhhdCByZWRpcmVjdGVkIHRvIGl0XG4vLyByZWN1cnNpdmVseSB0cmF2ZXJzaW5nIHRoaXMgbWFwcGluZyB3aWxsIGdldCB0aGUgcmVkaXJlY3QgY2hhaW4gYXNzb2NpYXRlZCB3aXRoIGFuIGluaXRpYWwgdXJsXG5sZXQgdXJsQnlSZWRpcmVjdGVkVXJsID0gbmV3IE1hcCgpO1xuXG4vKipcbiogRnVuY3Rpb24gdG8gcmVzb2x2ZSBhIGdpdmVuIHVybCB0byB0aGUgZmluYWwgdXJsIHRoYXQgaXQgcG9pbnRzIHRvXG4qIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gcmVzb2x2ZVxuKiBAcmV0dXJucyB7UHJvbWlzZS5PYmplY3R9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGRlc3RpbmF0aW9uIHVybFxuKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVXJsKHVybCkge1xuIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIm1vZHVsZSBub3QgaW5pdGlhbGl6ZWRcIik7XG4gfVxuIGxldCB1cmxSZXNvbHV0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgIC8vIHN0b3JlIHRoZSByZXNvbHZlIGZ1bmN0aW9uIGluIHByb21pc2VzQnlVcmwuIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIFxuICAgLy8gdXJsIGlzIHJlc29sdmVkXG4gICBsZXQgcmVzb2x2ZXMgPSBwcm9taXNlc0J5VXJsLmdldCh1cmwpIHx8IFtdO1xuICAgaWYgKCFyZXNvbHZlcyB8fCAhcmVzb2x2ZXMubGVuZ3RoKSB7XG4gICAgIHByb21pc2VzQnlVcmwuc2V0KHVybCwgcmVzb2x2ZXMpO1xuICAgfVxuICAgcmVzb2x2ZXMucHVzaCh7XG4gICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgIHJlamVjdDogcmVqZWN0XG4gICB9KTtcbiAgIHRyYWNrZWRVcmxzLmFkZCh1cmwpO1xuICAgLy8gZmV0Y2ggdGhpcyB1cmxcbiAgIGZldGNoV2l0aFRpbWVvdXQodXJsLCB7XG4gICAgIHJlZGlyZWN0OiAnbWFudWFsJyxcbiAgICAgaGVhZGVyczoge1xuICAgICAgIC8qIFdpdGggYSBicm93c2VyIFVzZXItQWdlbnQgaGVhZGVyLCB0aGUgcmVzcG9uc2Ugb2YgbmV3cy5nb29nbGUuY29tIGxpbmsgc2hpbSBpcyBhIEhUTUwgZG9jdW1lbnQgdGhhdCBldmVudHVhbGx5IHJlZGlyZWN0cyB0byB0aGUgYWN0dWFsIG5ld3MgcGFnZS5cbiAgICAgICBUaGlzIGFjdHVhbCBuZXdzIGxpbmsgaXMgbm90IHBhcnQgb2YgdGhlIEhUVFAgcmVzcG9uc2UgcmVhZGVyLiBIb3dldmVyLCB1c2luZyBhIG5vbi1icm93c2VyIFVzZXItQWdlbnQgbGlrZSBjdXJsIHRoZSByZXNwb25zZSBoZWFkZXJcbiAgICAgICBjb250YWlucyB0aGUgcmVkaXJlY3RlZCBsb2NhdGlvbi4gKi9cbiAgICAgICAnVXNlci1BZ2VudCc6IHVybC5pbmNsdWRlcyhcIm5ld3MuZ29vZ2xlLmNvbVwiKSA/ICdjdXJsLzcuMTAuNiAoaTM4Ni1yZWRoYXQtbGludXgtZ251KSBsaWJjdXJsLzcuMTAuNiBPcGVuU1NMLzAuOS43YSBpcHY2IHpsaWIvMS4xLjQnIDogJydcbiAgICAgfVxuICAgfSwgZmV0Y2hUaW1lb3V0TXMpO1xuIH0pO1xuIHJldHVybiB1cmxSZXNvbHV0aW9uUHJvbWlzZTtcbn1cblxuLyoqXG4qIExpc3RlbmVyIGZvciBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS93ZWJSZXF1ZXN0L29uSGVhZGVyc1JlY2VpdmVkXG4qIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIGNvbnRhaW5zIGRldGFpbHMgb2YgdGhlIHJlcXVlc3RcbiovXG5mdW5jdGlvbiByZXNwb25zZUhlYWRlckxpc3RlbmVyKGRldGFpbHMpIHtcbiAvLyBDb250aW51ZSBvbmx5IGlmIHRoaXMgdXJsIGlzIHJlbGV2YW50IGZvciBsaW5rIHJlc29sdXRpb25cbiBpZiAoIXRyYWNrZWRVcmxzLmhhcyhkZXRhaWxzLnVybCkpIHtcbiAgIHJldHVybjtcbiB9XG5cbiAvLyBUaGUgbG9jYXRpb24gZmllbGQgaW4gcmVzcG9uc2UgaGVhZGVyIGluZGljYXRlcyB0aGUgcmVkaXJlY3RlZCBVUkxcbiAvLyBUaGUgcmVzcG9uc2UgaGVhZGVyIGZyb20gb25IZWFkZXJzUmVjZWl2ZWQgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgb25lIG9mIHdoaWNoIHBvc3NpYmx5XG4gLy8gY29udGFpbnMgYSBmaWVsZCB3aXRoIG5hbWUgbG9jYXRpb24gKGNhc2UgaW5zZW5zaXRpdmUpLlxuIGxldCByZWRpcmVjdGVkVVJMTG9jYXRpb24gPSBkZXRhaWxzLnJlc3BvbnNlSGVhZGVycy5maW5kKG9iaiA9PiB7XG4gICByZXR1cm4gb2JqLm5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJMT0NBVElPTlwiO1xuIH0pO1xuXG4gLy8gaWYgdGhlIGxvY2F0aW9uIGZpZWxkIGluIHJlc3BvbnNlIGhlYWRlciBjb250YWlucyBhIG5ldyB1cmxcbiBpZiAocmVkaXJlY3RlZFVSTExvY2F0aW9uICE9IG51bGwgJiYgKHJlZGlyZWN0ZWRVUkxMb2NhdGlvbi52YWx1ZSAhPSBkZXRhaWxzLnVybCkpIHtcbiAgIGxldCBuZXh0dXJsID0gcmVkaXJlY3RlZFVSTExvY2F0aW9uLnZhbHVlO1xuICAgLy8gQ3JlYXRlIGEgbGluayBiZXR3ZWVuIHRoZSBuZXh0IHVybCBhbmQgdGhlIGluaXRpYWwgdXJsXG4gICB1cmxCeVJlZGlyZWN0ZWRVcmwuc2V0KG5leHR1cmwsIGRldGFpbHMudXJsKTtcbiAgIC8vIEFkZCB0aGUgbmV4dCB1cmwgc28gdGhhdCB3ZSBwcm9jZXNzIGl0IGR1cmluZyB0aGUgbmV4dCBvbkhlYWRlcnNSZWNlaXZlZFxuICAgdHJhY2tlZFVybHMuYWRkKG5leHR1cmwpO1xuICAgLy8gU2VuZCBmZXRjaCByZXF1ZXN0IHRvIHRoZSBuZXh0IHVybFxuICAgZmV0Y2hXaXRoVGltZW91dChuZXh0dXJsLCB7XG4gICAgIHJlZGlyZWN0OiAnbWFudWFsJyxcbiAgICAgaGVhZGVyczoge1xuICAgICAgICdVc2VyLUFnZW50JzogJydcbiAgICAgfVxuICAgfSwgZmV0Y2hUaW1lb3V0TXMpO1xuIH0gZWxzZSB7IC8vIHVybCBpcyBub3QgcmVkaXJlY3RlZFxuICAgaWYgKHVybEJ5UmVkaXJlY3RlZFVybC5oYXMoZGV0YWlscy51cmwpKSB7XG4gICAgIC8vIGJhY2t0cmFjayB1cmxCeVJlZGlyZWN0ZWRVcmwgdG8gZ2V0IHRvIHRoZSBwcm9taXNlIG9iamVjdCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoaXNcbiAgICAgbGV0IHVybCA9IGRldGFpbHMudXJsO1xuICAgICB3aGlsZSAodXJsQnlSZWRpcmVjdGVkVXJsLmhhcyh1cmwpKSB7XG4gICAgICAgbGV0IHRlbXAgPSB1cmw7XG4gICAgICAgdXJsID0gdXJsQnlSZWRpcmVjdGVkVXJsLmdldCh1cmwpO1xuICAgICAgIHVybEJ5UmVkaXJlY3RlZFVybC5kZWxldGUodGVtcCk7XG4gICAgICAgdHJhY2tlZFVybHMuZGVsZXRlKHRlbXApO1xuICAgICB9XG4gICAgIC8vIHVybCBub3cgY29udGFpbnMgdGhlIGluaXRpYWwgdXJsLiBOb3csIHJlc29sdmUgdGhlIGNvcnJlc3BvbmRpbmcgcHJvbWlzZXNcbiAgICAgaWYgKHVybCAmJiBwcm9taXNlc0J5VXJsLmhhcyh1cmwpKSB7XG4gICAgICAgbGV0IHJlc29sdmVzID0gcHJvbWlzZXNCeVVybC5nZXQodXJsKSB8fCBbXTtcbiAgICAgICBsZXQgcmVzb2x2ZU9iaiA9IHtcbiAgICAgICAgIHNvdXJjZTogdXJsLFxuICAgICAgICAgZGVzdDogZGV0YWlscy51cmxcbiAgICAgICB9O1xuICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb2x2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHZhciByID0gcmVzb2x2ZXNbaV0ucmVzb2x2ZTtcbiAgICAgICAgIHIocmVzb2x2ZU9iaik7XG4gICAgICAgfVxuICAgICAgIHByb21pc2VzQnlVcmwuZGVsZXRlKHVybCk7XG4gICAgIH1cbiAgIH1cbiB9XG59XG5cbi8qKlxuKiBMaXN0ZW5lciBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvd2ViUmVxdWVzdC9vbkVycm9yT2NjdXJyZWRcbiogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlRGV0YWlscyAtIENvbnRhaW5zIGRldGFpbHMgb2YgdGhlIGVycm9yXG4qL1xuZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZURldGFpbHMpIHtcbiBsZXQgdXJsID0gcmVzcG9uc2VEZXRhaWxzLnVybDtcbiBpZiAocHJvbWlzZXNCeVVybC5oYXModXJsKSkge1xuICAgbGV0IHJlc29sdmVzID0gcHJvbWlzZXNCeVVybC5nZXQodXJsKSB8fCBbXTtcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzb2x2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgbGV0IHIgPSByZXNvbHZlc1tpXS5yZWplY3Q7XG4gICAgIHIocmVzcG9uc2VEZXRhaWxzLmVycm9yKTtcbiAgIH1cbiAgIHByb21pc2VzQnlVcmwuZGVsZXRlKHVybCk7XG4gfVxufVxuXG4vKipcbiogSW5pdGlhbGl6ZXMgdGhlIGxpbmsgcmVzb2x1dGlvbiBtb2R1bGUgYnkgc2V0dGluZyB1cCBsaXN0ZW5lcnMgZm9yIG9uSGVhZGVyc1JlY2VpdmVkIGV2ZW50XG4qIEByZXR1cm5zIHt2b2lkfSBOb3RoaW5nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gaW5pdGlhbGl6ZWQgPSB0cnVlO1xuIGxldCBoZWFkZXJMaXN0ZW5lciA9IGJyb3dzZXIud2ViUmVxdWVzdC5vbkhlYWRlcnNSZWNlaXZlZC5hZGRMaXN0ZW5lcihyZXNwb25zZUhlYWRlckxpc3RlbmVyLCB7XG4gICB1cmxzOiBbXCI8YWxsX3VybHM+XCJdXG4gfSwgW1wicmVzcG9uc2VIZWFkZXJzXCJdKTtcbiBsZXQgZXJyb3JMaXN0ZW5lciA9IGJyb3dzZXIud2ViUmVxdWVzdC5vbkVycm9yT2NjdXJyZWQuYWRkTGlzdGVuZXIodHJhY2tFcnJvciwge1xuICAgdXJsczogW1wiPGFsbF91cmxzPlwiXVxuIH0pO1xufVxuXG4vKipcbiogUmV0dXJucyBhIGxpc3Qgb2Ygc2hvcnQgZG9tYWlucyB0aGF0IHRoZSBsaW5rIHJlc29sdXRpb24gbW9kdWxlIGNhbiByZXNvbHZlXG4qIEByZXR1cm5zIHtTdHJpbmdbXX0gQXJyYXkgb2YgZG9tYWluc1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG9ydERvbWFpbnMoKSB7XG4gcmV0dXJuIHNob3J0RG9tYWlucztcbn1cblxuLyoqXG4qIFJldHVybnMgYSBsaXN0IG9mIGFtcCBjYWNoZSBkb21haW5zXG4qIEByZXR1cm5zIHtTdHJpbmdbXX0gQXJyYXkgb2YgZG9tYWluc1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbXBDYWNoZURvbWFpbnMoKSB7XG4gcmV0dXJuIGFtcENhY2hlRG9tYWlucztcbn1cblxuLyoqXG4qIEZldGNoIEFQSSBkb2Vzbid0IHByb3ZpZGUgYSBuYXRpdmUgdGltZW91dCBvcHRpb24uIFRoaXMgZnVuY3Rpb24gdXNlcyBBYm9ydENvbnRyb2xsZXIgdG9cbiogdGltZW91dCBmZXRjaCByZXF1ZXN0cy5cbiogQHBhcmFtIHtzdHJpbmd9IHVybCAtIHJlc291cmNlIHRvIGZldGNoXG4qIEBwYXJhbSB7T2JqZWN0fSBpbml0IC0gZmV0Y2ggaW5pdGlhbGl6YXRpb25cbiogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgLSB0aW1lb3V0IGluIG1zIGZvciBmZXRjaCByZXF1ZXN0c1xuKi9cbmZ1bmN0aW9uIGZldGNoV2l0aFRpbWVvdXQodXJsLCBpbml0LCB0aW1lb3V0KSB7XG4gY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiBpbml0LnNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuIGZldGNoKHVybCwgaW5pdCk7XG4gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHRpbWVvdXQpO1xufSIsIi8qKlxuICogTGlua0V4cG9zdXJlIG1vZHVsZSBpcyB1c2VkIHRvIHJ1biBzdHVkaWVzIHRoYXQgdHJhY2sgdXNlcidzIGV4cG9zdXJlXG4gKiB0byBjb250ZW50IGZyb20ga25vd24gbmV3cyBkb21haW5zXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZVxuICovXG5cbmltcG9ydCAqIGFzIERlYnVnZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL0RlYnVnZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gXCIuLi9VdGlsaXRpZXMvU3RvcmFnZS5qc1wiXG5pbXBvcnQgKiBhcyBMaW5rUmVzb2x1dGlvbiBmcm9tIFwiLi4vVXRpbGl0aWVzL0xpbmtSZXNvbHV0aW9uLmpzXCJcbmltcG9ydCAqIGFzIE1hdGNoaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvTWF0Y2hpbmcuanNcIlxuaW1wb3J0ICogYXMgTWVzc2FnaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvTWVzc2FnaW5nLmpzXCJcbmltcG9ydCAqIGFzIFBhZ2VFdmVudHMgZnJvbSBcIi4uL1V0aWxpdGllcy9QYWdlRXZlbnRzLmpzXCJcblxuY29uc3QgZGVidWdMb2cgPSBEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nKFwiTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZVwiKTtcblxuLyoqXG4gKiBBIEtleVZhbHVlU3RvcmFnZSBvYmplY3QgZm9yIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdHVkeS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgc3RvcmFnZSA9IG51bGw7XG5cbnZhciBudW1VbnRyYWNrZWRVcmxzQnlUaHJlc2hvbGQgPSB7fTtcblxudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbnZhciB2aXNpYmlsaXR5VGhyZXNob2xkcyA9IFsxMDAwLCAzMDAwLCA1MDAwLCAxMDAwMF07IC8vIG1hdGNoIHRvIENTIHZhbHVlc1xuLyoqXG4gKiBAbmFtZSBMaW5rRXhwb3N1cmUucnVuU3R1ZHkgc3RhcnRzIHRoZSBMaW5rRXhwb3N1cmUgc3R1ZHkuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBkb21haW5zIC0gQXJyYXkgb2YgZG9tYWlucyB0byB0cmFjayBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBJZiB0cnVlIHRoZW4gdGhlIHN0dWR5IHdvcmtzIGluIHByaXZhdGUgd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpbnNDYXRlZ29yeSAtIENhdGVnb3J5IG9mIHRoZSBkb21haW5zIHRvIHRyYWNrXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5TdHVkeSh7XG4gICAgZG9tYWlucyA9IFtdLFxuICAgIHByaXZhdGVXaW5kb3dzID0gZmFsc2UsXG4gICAgZG9tYWluc0NhdGVnb3J5ID0gXCJuZXdzXCIsXG59KSB7XG5cbiAgICAvLyBzdG9yZSBwcml2YXRlIHdpbmRvd3MgcHJlZmVyZW5jZSBpbiB0aGUgc3RvcmFnZVxuICAgIGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5wcml2YXRlV2luZG93c1wiOiBwcml2YXRlV2luZG93cyB9KTsgXG4gICAgc3RvcmFnZSA9IGF3YWl0IChuZXcgU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmVcIikpLmluaXRpYWxpemUoKTtcbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmUubmV4dFBhZ2VJZFwiKSkuaW5pdGlhbGl6ZSgpO1xuICAgIGxldCBzaG9ydERvbWFpbnMgPSBMaW5rUmVzb2x1dGlvbi5nZXRTaG9ydERvbWFpbnMoKTtcbiAgICBsZXQgYW1wQ2FjaGVEb21haW5zID0gTGlua1Jlc29sdXRpb24uZ2V0QW1wQ2FjaGVEb21haW5zKCk7XG4gICAgbGV0IGRvbWFpblBhdHRlcm4gPSBNYXRjaGluZy5jcmVhdGVVcmxSZWdleFN0cmluZyhkb21haW5zKTtcbiAgICBsZXQgc2hvcnREb21haW5QYXR0ZXJuID0gTWF0Y2hpbmcuY3JlYXRlVXJsUmVnZXhTdHJpbmcoc2hvcnREb21haW5zKTtcbiAgICBsZXQgYW1wQ2FjaGVEb21haW5QYXR0ZXJuID0gTWF0Y2hpbmcuY3JlYXRlVXJsUmVnZXhTdHJpbmcoYW1wQ2FjaGVEb21haW5zKTtcbiAgICBmb3IgKHZhciB2aXNUaHJlc2hvbGQgb2YgdmlzaWJpbGl0eVRocmVzaG9sZHMpIHtcbiAgICAgICAgbnVtVW50cmFja2VkVXJsc0J5VGhyZXNob2xkW3Zpc1RocmVzaG9sZF0gPSBhd2FpdCAobmV3IFN0b3JhZ2UuQ291bnRlcihcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5udW1VbnRyYWNrZWRVcmxzXCIgKyB2aXNUaHJlc2hvbGQpKS5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIGNvbnN0IGFtcENhY2hlTWF0Y2hlciA9IG5ldyBSZWdFeHAoYW1wQ2FjaGVEb21haW5QYXR0ZXJuKTtcbiAgICBjb25zdCBzaG9ydERvbWFpbk1hdGNoZXIgPSBuZXcgUmVnRXhwKHNob3J0RG9tYWluUGF0dGVybik7XG4gICAgY29uc3QgdXJsTWF0Y2hlciA9IG5ldyBSZWdFeHAoZG9tYWluUGF0dGVybik7XG4gICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7ZG9tYWluUmVnZXg6IHVybE1hdGNoZXIsIHNob3J0RG9tYWluUmVnZXg6IHNob3J0RG9tYWluTWF0Y2hlciwgYW1wRG9tYWluUmVnZXggOiBhbXBDYWNoZU1hdGNoZXJ9KTtcblxuICAgIC8vIEFkZCB0aGUgY29udGVudCBzY3JpcHQgZm9yIGNoZWNraW5nIGxpbmtzIG9uIHBhZ2VzXG4gICAgYXdhaXQgYnJvd3Nlci5jb250ZW50U2NyaXB0cy5yZWdpc3Rlcih7XG4gICAgICAgIG1hdGNoZXM6IFtcIio6Ly8qLypcIl0sXG4gICAgICAgIGpzOiBbe1xuICAgICAgICAgICAgZmlsZTogXCIvc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL2NvbnRlbnQtc2NyaXB0cy91dGlscy5qc1wiXG4gICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogXCIvc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL2NvbnRlbnQtc2NyaXB0cy9saW5rRXhwb3N1cmUuanNcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBydW5BdDogXCJkb2N1bWVudF9pZGxlXCJcbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiBmb3IgTGlua0V4cG9zdXJlIG1lc3NhZ2VzIGZyb20gY29udGVudCBzY3JpcHRcbiAgICBNZXNzYWdpbmcucmVnaXN0ZXJMaXN0ZW5lcihcIldlYlNjaWVuY2UubGlua0V4cG9zdXJlXCIsIChleHBvc3VyZUluZm8sIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghKFwidGFiXCIgaW4gc2VuZGVyKSkge1xuICAgICAgICAgICAgZGVidWdMb2coXCJXYXJuaW5nOiB1bmV4cGVjdGVkIGxpbmsgZXhwb3N1cmUgdXBkYXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1bnRyYWNrZWRJbmZvID0gZXhwb3N1cmVJbmZvLm51bVVudHJhY2tlZFVybHM7XG4gICAgICAgIGZvciAodmFyIHZpc1RocmVzaG9sZCBpbiB1bnRyYWNrZWRJbmZvKSB7XG4gICAgICAgICAgICBudW1VbnRyYWNrZWRVcmxzQnlUaHJlc2hvbGRbdmlzVGhyZXNob2xkXS5pbmNyZW1lbnRCeUFuZEdldCh1bnRyYWNrZWRJbmZvW3Zpc1RocmVzaG9sZF0pO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9zdXJlSW5mby5leHBvc3VyZUV2ZW50cy5mb3JFYWNoKGFzeW5jIGV4cG9zdXJlRXZlbnQgPT4ge1xuICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5pc1Nob3J0ZW5lZFVybCA9IHNob3J0RG9tYWluTWF0Y2hlci50ZXN0KGV4cG9zdXJlRXZlbnQub3JpZ2luYWxVcmwpO1xuICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5tZXRhZGF0YSA9IGV4cG9zdXJlSW5mby5tZXRhZGF0YTtcbiAgICAgICAgICAgIC8vIHJlc29sdmVkVXJsIGlzIHZhbGlkIG9ubHkgZm9yIHVybHMgZnJvbSBzaG9ydCBkb21haW5zXG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5tZXRhZGF0YS5kb21haW5DYXRlZ29yeSA9IGRvbWFpbnNDYXRlZ29yeTtcbiAgICAgICAgICAgIGlmIChleHBvc3VyZUV2ZW50LmlzU2hvcnRlbmVkVXJsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBMaW5rUmVzb2x1dGlvbi5yZXNvbHZlVXJsKGV4cG9zdXJlRXZlbnQub3JpZ2luYWxVcmwpO1xuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihhc3luYyBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxNYXRjaGVyLnRlc3QocmVzdWx0LmRlc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsID0gcmVzdWx0LmRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5lcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQucmVzb2x1dGlvblN1Y2NlZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSkuZmluYWxseShhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgfHwgZXhwb3N1cmVFdmVudC5yZXNvbHZlZFVybCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlTGlua0V4cG9zdXJlUmVjb3JkKGV4cG9zdXJlRXZlbnQsIG5leHRMaW5rRXhwb3N1cmVJZENvdW50ZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVMaW5rRXhwb3N1cmVSZWNvcmQoZXhwb3N1cmVFdmVudCwgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBtZXRhZGF0YTogXCJvYmplY3RcIlxuICAgIH0pO1xuXG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdGFydCwgdHJ1ZSwgcHJpdmF0ZVdpbmRvd3MpO1xuICAgIFBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdG9wLCBwcml2YXRlV2luZG93cyk7XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG59XG5cbmZ1bmN0aW9uIHBhZ2VBdHRlbnRpb25TdGFydCh7dXJsLCByZWZlcnJlciwgdGFiSWQsIHRpbWVTdGFtcH0pIHtcbiAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgYXR0ZW50aW9uQ2hhbmdlOiBcImdhaW5cIiwgXG4gICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wfSkuY2F0Y2goIChlcnIpID0+IHsgcmV0dXJuOyB9ICk7XG59XG5mdW5jdGlvbiBwYWdlQXR0ZW50aW9uU3RvcCh7dXJsLCByZWZlcnJlciwgdGFiSWQsIHRpbWVTdGFtcH0pIHtcbiAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgYXR0ZW50aW9uQ2hhbmdlOiBcImxvc2VcIiwgXG4gICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wfSkuY2F0Y2goIChlcnIpID0+IHsgcmV0dXJuOyB9ICk7XG59XG5cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0KCkge1xuICAgIGlmKHN0b3JhZ2UgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRlc3RzIHdoZXRoZXIgYSBnaXZlbiBvYmplY3QgaXMgZW1wdHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBPYmplY3QgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGVtcHR5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICAgIHJldHVybiAhb2JqIHx8IE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtMaW5rRXhwb3N1cmVFdmVudH0gZXhwb3N1cmVFdmVudCBsaW5rIGV4cG9zdXJlIGV2ZW50IHRvIHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gTGlua0V4cG9zdXJlRXZlbnQub3JpZ2luYWxVcmwgLSBsaW5rIGV4cG9zZWQgdG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBMaW5rRXhwb3N1cmVFdmVudC5yZXNvbHZlZFVybCAtIG9wdGlvbmFsIGZpZWxkIHdoaWNoIGlzIHNldCBpZiB0aGUgaXNTaG9ydGVuZWRVcmwgYW5kIHJlc29sdXRpb25TdWNjZWVkZWQgYXJlIHRydWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gTGlua0V4cG9zdXJlRXZlbnQucmVzb2x1dGlvblN1Y2NlZGVkIC0gdHJ1ZSBpZiBsaW5rIHJlc29sdXRpb24gc3VjY2VlZGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IExpbmtFeHBvc3VyZUV2ZW50LmlzU2hvcnRlbmVkVXJsIC0gdHJ1ZSBpZiBsaW5rIG1hdGNoZXMgc2hvcnQgZG9tYWluc1xuICogQHBhcmFtIHtudW1iZXJ9IExpbmtFeHBvc3VyZUV2ZW50LmZpcnN0U2VlbiAtIHRpbWVzdGFtcCB3aGVuIHRoZSBsaW5rIGlzIGZpcnN0IHNlZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBMaW5rRXhwb3N1cmVFdmVudC5kdXJhdGlvbiAtIG1pbGxpc2Vjb25kcyBvZiBsaW5rIGV4cG9zdXJlXG4gKiBAcGFyYW0ge09iamVjdH0gTGlua0V4cG9zdXJlRXZlbnQuc2l6ZSAtIHdpZHRoIGFuZCBoZWlnaHQgb2YgbGlua3NcbiAqIEBwYXJhbSB7Q291bnRlcn0gbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlciBjb3VudGVyIG9iamVjdFxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVMaW5rRXhwb3N1cmVSZWNvcmQoZXhwb3N1cmVFdmVudCwgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlcikge1xuICAgIGV4cG9zdXJlRXZlbnQudHlwZSA9IFwibGlua0V4cG9zdXJlXCI7XG4gICAgZXhwb3N1cmVFdmVudC51cmwgPSAoZXhwb3N1cmVFdmVudC5pc1Nob3J0ZW5lZFVybCAmJiBleHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5ub3JtYWxpemVVcmwoZXhwb3N1cmVFdmVudC5yZXNvbHZlZFVybCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2Uubm9ybWFsaXplVXJsKGV4cG9zdXJlRXZlbnQub3JpZ2luYWxVcmwpKTtcbiAgICBleHBvc3VyZUV2ZW50LmxhdGVyVmlzaXRlZCA9IGZhbHNlO1xuICAgIGV4cG9zdXJlRXZlbnQubGF0ZXJTaGFyZWQgPSBmYWxzZTtcbiAgICAvL2RlYnVnTG9nKFwic3RvcmluZyBcIiArIEpTT04uc3RyaW5naWZ5KGV4cG9zdXJlRXZlbnQpKTtcbiAgICB2YXIga2V5ID0gZXhwb3N1cmVFdmVudC51cmwgKyBcIiBcIiArIGF3YWl0IG5leHRMaW5rRXhwb3N1cmVJZENvdW50ZXIuZ2V0QW5kSW5jcmVtZW50KCk7XG4gICAgc3RvcmFnZS5zZXQoa2V5LCBleHBvc3VyZUV2ZW50KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3JlQW5kUmVzZXRVbnRyYWNrZWRFeHBvc3VyZXNDb3VudCgpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdmFyIHVudHJhY2tlZE9iaiA9IHsgdHlwZTogXCJudW1VbnRyYWNrZWRVcmxzXCIsIHVudHJhY2tlZENvdW50czoge319O1xuICAgICAgICBmb3IgKHZhciB2aXNUaHJlc2hvbGQgb2YgdmlzaWJpbGl0eVRocmVzaG9sZHMpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZE9iai51bnRyYWNrZWRDb3VudHNbdmlzVGhyZXNob2xkXSA9IHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IHZpc1RocmVzaG9sZCxcbiAgICAgICAgICAgICAgICBudW1VbnRyYWNrZWQ6IGF3YWl0IG51bVVudHJhY2tlZFVybHNCeVRocmVzaG9sZFt2aXNUaHJlc2hvbGRdLmdldEFuZFJlc2V0KClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmUudW50cmFja2VkVXJsc0NvdW50XCIsIHVudHJhY2tlZE9iaik7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nVmlzaXQodXJsKSB7XG4gICAgdmFyIHByZXZFeHBvc3VyZXMgPSBhd2FpdCBzdG9yYWdlLnN0YXJ0c1dpdGgodXJsKTtcbiAgICB2YXIgaGFzUHJldkV4cG9zdXJlcyA9IGZhbHNlO1xuICAgIGZvciAodmFyIGtleSBpbiBwcmV2RXhwb3N1cmVzKSB7XG4gICAgICAgIGhhc1ByZXZFeHBvc3VyZXMgPSB0cnVlO1xuICAgICAgICBwcmV2RXhwb3N1cmVzW2tleV0ubGF0ZXJWaXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoa2V5LCBwcmV2RXhwb3N1cmVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gKGhhc1ByZXZFeHBvc3VyZXMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nU2hhcmUodXJsKSB7XG4gICAgdmFyIHByZXZFeHBvc3VyZXMgPSBhd2FpdCBzdG9yYWdlLnN0YXJ0c1dpdGgodXJsKTtcbiAgICB2YXIgaGFzUHJldkV4cG9zdXJlcyA9IGZhbHNlO1xuICAgIGZvciAodmFyIGtleSBpbiBwcmV2RXhwb3N1cmVzKSB7XG4gICAgICAgIGhhc1ByZXZFeHBvc3VyZXMgPSB0cnVlO1xuICAgICAgICBwcmV2RXhwb3N1cmVzW2tleV0ubGF0ZXJTaGFyZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChrZXksIHByZXZFeHBvc3VyZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNQcmV2RXhwb3N1cmVzO1xufSIsIi8qKlxuICogVGhpcyBtb2R1bGUgbWVhc3VyZXMgc2Nyb2xsIGRlcHRoIGZvciB3ZWJwYWdlcyBvbiBzcGVjaWZpYyBkb21haW5zLlxuICogXG4gKiBOb3RlOiB3ZSB3aWxsIGxpa2VseSByZXBsYWNlIHRoaXMgbW9kdWxlIHdoZW4gd2UgdXBkYXRlIHRoZVxuICogUGFnZU5hdmlnYXRpb24gYW5kIFBhZ2VFdmVudHMgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlRGVwdGhcbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTWF0Y2hpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NYXRjaGluZy5qc1wiXG5pbXBvcnQgKiBhcyBNZXNzYWdpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NZXNzYWdpbmcuanNcIlxuXG5jb25zdCBkZWJ1Z0xvZyA9IERlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2coXCJNZWFzdXJlbWVudHMuUGFnZURlcHRoXCIpO1xuXG4vKipcbiAqIEEgS2V5VmFsdWVTdG9yYWdlIG9iamVjdCBmb3IgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0dWR5LlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzdG9yYWdlID0gbnVsbDtcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG52YXIgbGlzdGVuZXJzID0gW107XG5cbi8qKlxuICogU3RhcnQgYSBwYWdlIGRlcHRoIHN0dWR5LiBOb3RlIHRoYXQgb25seSBvbmUgc3R1ZHkgaXMgc3VwcG9ydGVkIHBlciBleHRlbnNpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEEgc2V0IG9mIG9wdGlvbnMgZm9yIHRoZSBzdHVkeS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLmRvbWFpbnM9W11dIC0gVGhlIGRvbWFpbnMgb2YgaW50ZXJlc3QgZm9yIHRoZSBzdHVkeS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blN0dWR5KHtcbiAgICBkb21haW5zID0gWyBdXG59KSB7XG5cbiAgICBpZihpbml0aWFsaXplZClcbiAgICAgICAgcmV0dXJuOyAgICBcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICBzdG9yYWdlID0gYXdhaXQgKG5ldyBTdG9yYWdlLktleVZhbHVlU3RvcmFnZShcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aFwiKSkuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gVXNlIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggd2VicGFnZSB0aGUgdXNlciB2aXNpdHMgdGhhdCBoYXMgYSBtYXRjaGluZyBkb21haW5cbiAgICB2YXIgbmV4dFBhZ2VJZENvdW50ZXIgPSBhd2FpdCAobmV3IFN0b3JhZ2UuQ291bnRlcihcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aC5uZXh0UGFnZUlkXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBCdWlsZCB0aGUgVVJMIG1hdGNoaW5nIHNldCBmb3IgY29udGVudCBzY3JpcHRzXG4gICAgdmFyIGNvbnRlbnRTY3JpcHRNYXRjaGVzID0gTWF0Y2hpbmcuY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXkoZG9tYWlucywgdHJ1ZSk7XG5cbiAgICAvLyBSZWdpc3RlciB0aGUgY29udGVudCBzY3JpcHQgZm9yIG1lYXN1cmluZyBtYXhpbXVtIHNjcm9sbCBkZXB0aFxuICAgIGF3YWl0IGJyb3dzZXIuY29udGVudFNjcmlwdHMucmVnaXN0ZXIoe1xuICAgICAgICBtYXRjaGVzOiBjb250ZW50U2NyaXB0TWF0Y2hlcyxcbiAgICAgICAganM6IFt7XG4gICAgICAgICAgICBmaWxlOiBcIi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL3BhZ2VEZXB0aC5qc1wiXG4gICAgICAgIH1dXG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgcGFnZSBkZXB0aCBldmVudHNcbiAgICBNZXNzYWdpbmcucmVnaXN0ZXJMaXN0ZW5lcihcIldlYlNjaWVuY2UucGFnZURlcHRoXCIsIGFzeW5jIChkZXB0aEluZm8sIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhciBwYWdlSWQgPSBhd2FpdCBuZXh0UGFnZUlkQ291bnRlci5nZXRBbmRJbmNyZW1lbnQoKTtcbiAgICAgICAgZGVwdGhJbmZvLnVybCA9IFN0b3JhZ2Uubm9ybWFsaXplVXJsKHNlbmRlci51cmwpO1xuICAgICAgICBkZXB0aEluZm8udGFiSWQgPSBzZW5kZXIudGFiLmlkO1xuICAgICAgICBmb3IgKHZhciBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHsgbGlzdGVuZXIoZGVwdGhJbmZvKTsgfVxuICAgICAgICBzdG9yYWdlLnNldChwYWdlSWQudG9TdHJpbmcoKSwgZGVwdGhJbmZvKTtcbiAgICAgICAgZGVidWdMb2coSlNPTi5zdHJpbmdpZnkoZGVwdGhJbmZvKSk7XG4gICAgfSwge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBtYXhSZWxhdGl2ZVNjcm9sbERlcHRoOiBcIm51bWJlclwiLFxuICAgICAgICBsb2FkVGltZTogXCJudW1iZXJcIlxuICAgIH0pO1xufVxuXG4vKiBVdGlsaXRpZXMgKi9cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgc3R1ZHkgZGF0YSBhcyBhbiBvYmplY3QuIE5vdGUgdGhhdCB0aGlzIGNvdWxkIGJlIHZlcnlcbiAqIHNsb3cgaWYgdGhlcmUgaXMgYSBsYXJnZSB2b2x1bWUgb2Ygc3R1ZHkgZGF0YS5cbiAqIEByZXR1cm5zIHsoT2JqZWN0fG51bGwpfSAtIFRoZSBzdHVkeSBkYXRhLCBvciBgbnVsbGAgaWYgbm8gZGF0YVxuICogY291bGQgYmUgcmV0cmlldmVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3R1ZHlEYXRhQXNPYmplY3QoKSB7XG4gICAgaWYoc3RvcmFnZSAhPSBudWxsKVxuICAgICAgICByZXR1cm4gYXdhaXQgc3RvcmFnZS5nZXRDb250ZW50c0FzT2JqZWN0KCk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xufSIsIi8qKlxuICogVGhpcyBtb2R1bGUgbWVhc3VyZXMgc2Nyb2xsIGRlcHRoIGZvciB3ZWJwYWdlcyBvbiBzcGVjaWZpYyBkb21haW5zLlxuICogXG4gKiBOb3RlOiB3ZSB3aWxsIGxpa2VseSByZXBsYWNlIHRoaXMgbW9kdWxlIHdoZW4gd2UgdXBkYXRlIHRoZVxuICogUGFnZU5hdmlnYXRpb24gYW5kIFBhZ2VFdmVudHMgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5BcnRpY2xlQ29udGVudHNcbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTWF0Y2hpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NYXRjaGluZy5qc1wiXG5pbXBvcnQgKiBhcyBNZXNzYWdpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NZXNzYWdpbmcuanNcIlxuXG5jb25zdCBkZWJ1Z0xvZyA9IERlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2coXCJNZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzXCIpO1xuXG4vKipcbiAqIEEgS2V5VmFsdWVTdG9yYWdlIG9iamVjdCBmb3IgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0dWR5LlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzdG9yYWdlID0gbnVsbDtcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG52YXIgbGlzdGVuZXJzID0gW107XG5cbi8qKlxuICogU3RhcnQgYW4gYXJ0aWNsZSBjb250ZW50cyBzdHVkeS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbIF1cbn0pIHtcblxuICAgIGlmKGluaXRpYWxpemVkKVxuICAgICAgICByZXR1cm47ICAgIFxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0UGFnZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzLm5leHRQYWdlSWRcIikpLmluaXRpYWxpemUoKTtcblxuICAgIC8vIEJ1aWxkIHRoZSBVUkwgbWF0Y2hpbmcgc2V0IGZvciBjb250ZW50IHNjcmlwdHNcbiAgICB2YXIgY29udGVudFNjcmlwdE1hdGNoZXMgPSBNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheVdpdGhQYXRoKGRvbWFpbnMsIHRydWUpO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGNvbnRlbnQgc2NyaXB0IGZvciBtZWFzdXJpbmcgbWF4aW11bSBzY3JvbGwgZGVwdGhcbiAgICBhd2FpdCBicm93c2VyLmNvbnRlbnRTY3JpcHRzLnJlZ2lzdGVyKHtcbiAgICAgICAgbWF0Y2hlczogY29udGVudFNjcmlwdE1hdGNoZXMsXG4gICAgICAgIGpzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbGU6IFwiL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9jb250ZW50LXNjcmlwdHMvUmVhZGFiaWxpdHkuanNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlOiBcIi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL3BhZ2UtY29udGVudC5qc1wiXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcnVuQXQ6IFwiZG9jdW1lbnRfaWRsZVwiXG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgcGFnZSBkZXB0aCBldmVudHNcbiAgICBNZXNzYWdpbmcucmVnaXN0ZXJMaXN0ZW5lcihcIldlYlNjaWVuY2UuYXJ0aWNsZUNvbnRlbnRcIiwgYXN5bmMgKGRlcHRoSW5mbywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHBhZ2VJZCA9IGF3YWl0IG5leHRQYWdlSWRDb3VudGVyLmdldEFuZEluY3JlbWVudCgpO1xuICAgICAgICBkZXB0aEluZm8udXJsID0gU3RvcmFnZS5ub3JtYWxpemVVcmwoc2VuZGVyLnVybCk7XG4gICAgICAgIGRlcHRoSW5mby50YWJJZCA9IHNlbmRlci50YWIuaWQ7XG4gICAgICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykgeyBsaXN0ZW5lcihkZXB0aEluZm8pOyB9XG4gICAgICAgIHN0b3JhZ2Uuc2V0KHBhZ2VJZC50b1N0cmluZygpLCBkZXB0aEluZm8pO1xuICAgICAgICBkZWJ1Z0xvZyhKU09OLnN0cmluZ2lmeShkZXB0aEluZm8pKTtcbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIHVybCA6IFwic3RyaW5nXCIsXG4gICAgICAgIHRpdGxlIDogXCJzdHJpbmdcIixcbiAgICAgICAgdGV4dCA6IFwic3RyaW5nXCJcbiAgICB9KTtcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0KCkge1xuICAgIGlmKHN0b3JhZ2UgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn0iLCJcbi8qKlxuICogVGhpcyBtb2R1bGUgbWVhc3VyZXMgbmF2aWdhdGlvbiB0byBhbmQgYXR0ZW50aW9uIHRvIHdlYnBhZ2VzIG9uIHNwZWNpZmljIGRvbWFpbnMuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb25cbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTWF0Y2hpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NYXRjaGluZy5qc1wiXG5pbXBvcnQgKiBhcyBQYWdlRXZlbnRzIGZyb20gXCIuLi9VdGlsaXRpZXMvUGFnZUV2ZW50cy5qc1wiXG5pbXBvcnQgKiBhcyBMaW5rRXhwb3N1cmUgZnJvbSBcIi4vTGlua0V4cG9zdXJlLmpzXCJcbmltcG9ydCAqIGFzIFBhZ2VEZXB0aCBmcm9tIFwiLi9QYWdlRGVwdGguanNcIlxuaW1wb3J0ICogYXMgQXJ0aWNsZUNvbnRlbnRzIGZyb20gXCIuL0FydGljbGVDb250ZW50cy5qc1wiXG5cblxuXG5jb25zdCBkZWJ1Z0xvZyA9IERlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2coXCJNZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb25cIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xudmFyIGN1cnJlbnRUYWJJbmZvID0gbnVsbDtcbnZhciB1cmxNYXRjaGVyID0gbnVsbDtcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5jb25zdCByZWNlbnRWaXNpdFRocmVzaG9sZCA9IDMwMDA7XG5cbnZhciB1bnRyYWNrZWRQYWdlVmlzaXRzID0gbnVsbDtcblxuLyoqXG4gKiBDYWxsYmFjayBmdW5jdGlvbiBmb3IgYXJ0aWNsZSBjb250ZW50cyByZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXN1bHQgcmVzdWx0IG9iamVjdFxuICovXG5hc3luYyBmdW5jdGlvbiBjb250ZW50UmVzdWx0cyhyZXN1bHQpIHtcbiAgICBpZiAoY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklEXSAmJiBjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSURdLnVybCA9PSByZXN1bHQudXJsKSB7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJRF0uY29udGVudHNbcmVzdWx0Lm5hbWVdID0gcmVzdWx0LmNvbnRlbnRzO1xuICAgIH0gXG4gICAgaWYgKCF1cmxNYXRjaGVyLnRlc3RVcmwocmVzdWx0LnVybCkpIHsgXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHJlc3VsdC51cmwpLnRoZW4oYXN5bmMgKHByZXZWaXNpdHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByZXZWaXNpdHMpIHtcbiAgICAgICAgICAgIGlmIChwcmV2VmlzaXRzW2tleV0udGFiSWQgPT0gcmVzdWx0LnRhYklkICYmIFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHJlc3VsdC50aW1lc3RhbXAgLSBwcmV2VmlzaXRzW2tleV0udmlzaXRTdGFydCkgPCByZWNlbnRWaXNpdFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHByZXZWaXNpdHNba2V5XS5jb250ZW50c1tyZXN1bHQubmFtZV0gPSByZXN1bHQuY29udGVudHM7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoa2V5LCBwcmV2VmlzaXRzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBkZXB0aFJlc3VsdHMocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5tYXhSZWxhdGl2ZVNjcm9sbERlcHRoID09IG51bGwpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklkXSAmJiBjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSWRdLnVybCA9PSByZXN1bHQudXJsKSB7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJZF0uc2Nyb2xsRGVwdGggPSByZXN1bHQubWF4UmVsYXRpdmVTY3JvbGxEZXB0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghdXJsTWF0Y2hlci50ZXN0VXJsKHJlc3VsdC51cmwpKSB7IHJldHVybjsgfVxuICAgICAgICBhd2FpdCBzdG9yYWdlLnN0YXJ0c1dpdGgocmVzdWx0LnVybCkudGhlbigocHJldlZpc2l0cykgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByZXZWaXNpdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlZpc2l0c1trZXldLnRhYklkID09IHJlc3VsdC50YWJJZCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2VmlzaXRzW2tleV0uc2Nyb2xsRGVwdGggPSByZXN1bHQubWF4UmVsYXRpdmVTY3JvbGxEZXB0aDtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXQoa2V5LCBwcmV2VmlzaXRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBTdGFydCBhIG5hdmlnYXRpb24gc3R1ZHkuIE5vdGUgdGhhdCBvbmx5IG9uZSBzdHVkeSBpcyBzdXBwb3J0ZWQgcGVyIGV4dGVuc2lvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFja1VzZXJBdHRlbnRpb249ZmFsc2VdIC0gV2hldGhlciB0byB0cmFjayB1c2VyXG4gKiBhdHRlbnRpb24gZHVyaW5nIHRoZSBzdHVkeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpdmF0ZVdpbmRvd3M9ZmFsc2VdIC0gV2hldGhlciB0byBtZWFzdXJlIHBhZ2VzIGluXG4gKiBwcml2YXRlIHdpbmRvd3MuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5TdHVkeSh7XG4gICAgZG9tYWlucyA9IFsgXSxcbiAgICB0cmFja1VzZXJBdHRlbnRpb24gPSBmYWxzZSxcbiAgICBwcml2YXRlV2luZG93cyA9IGZhbHNlXG59KSB7XG5cbiAgICBzdG9yYWdlID0gYXdhaXQgKG5ldyBTdG9yYWdlLktleVZhbHVlU3RvcmFnZShcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICB1cmxNYXRjaGVyID0gbmV3IE1hdGNoaW5nLlVybE1hdGNoZXIoZG9tYWlucyk7XG5cbiAgICB1bnRyYWNrZWRQYWdlVmlzaXRzID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi51bnRyYWNrZWRQYWdlVmlzaXRzXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICBQYWdlRGVwdGgucmVnaXN0ZXJMaXN0ZW5lcihkZXB0aFJlc3VsdHMpO1xuICAgIEFydGljbGVDb250ZW50cy5yZWdpc3Rlckxpc3RlbmVyKGNvbnRlbnRSZXN1bHRzKTtcblxuICAgIC8vIExpc3RlbiBmb3IgbWV0YWRhdGEgb2YgdGhlIHZpc2l0ZWQgcGFnZXMgZnJvbSBjb250ZW50IHNjcmlwdFxuICAgIC8vIFVzZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHdlYnBhZ2UgdGhlIHVzZXIgdmlzaXRzIHRoYXQgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgdmFyIG5leHRQYWdlSWRDb3VudGVyID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi5uZXh0UGFnZUlkXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGluZm9ybWF0aW9uIGFib3V0IHBhZ2VzIHdpdGggbWF0Y2hpbmcgZG9tYWlucyB0aGF0IGFyZSBjdXJyZW50bHkgbG9hZGVkIGludG8gYSB0YWJcbiAgICAvLyBJZiBhIHRhYiBJRCBpcyBpbiB0aGlzIG9iamVjdCwgdGhlIHBhZ2UgY3VycmVudGx5IGNvbnRhaW5lZCBpbiB0aGF0IHRhYiBoYXMgYSBtYXRjaGluZyBkb21haW5cbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBjdXJyZW50bHkgaW1wbGVtZW50ZWQgd2l0aCBhbiBvYmplY3QsIHdlIG1pZ2h0IHdhbnQgdG8gc3dpdGNoIGl0IHRvIGEgTWFwXG4gICAgY3VycmVudFRhYkluZm8gPSB7fVxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIC8vIGxpc3RlbiBtZXRhZGF0YSBtZXNzYWdlcyBmcm9tIGNvbnRlbnQgc2NyaXB0c1xuICAgIC8vIEhhbmRsZSB3aGVuIGEgcGFnZSB2aXNpdCBzdGFydHNcbiAgICBhc3luYyBmdW5jdGlvbiBwYWdlVmlzaXRTdGFydExpc3RlbmVyKHsgdXJsLCByZWZlcnJlciwgdGFiSWQsIHRpbWVTdGFtcCB9KSB7XG5cbiAgICAgICAgLy8gSWYgdGhlIFVSTCBkb2VzIG5vdCBtYXRjaCB0aGUgc3R1ZHkgZG9tYWlucywgaWdub3JlIHRoZSBwYWdlIHZpc2l0IHN0YXJ0XG4gICAgICAgIGlmICghdXJsTWF0Y2hlci50ZXN0VXJsKHVybCkpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZFBhZ2VWaXNpdHMuaW5jcmVtZW50QW5kR2V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0gU3RvcmFnZS5ub3JtYWxpemVVcmwodXJsKTtcblxuICAgICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSB0cmFja2luZyBhIHBhZ2UgaW4gdGhpcyB0YWIsIGlnbm9yZSB0aGUgcGFnZSB2aXNpdCBzdGFydFxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4hXG4gICAgICAgIGlmICh0YWJJZCBpbiBjdXJyZW50VGFiSW5mbykge1xuICAgICAgICAgICAgZGVidWdMb2coXCJXYXJuaW5nOiBwYWdlIHN0YXJ0IGV2ZW50IGZvciB0YWIgdGhhdCBhbHJlYWR5IGhhcyBhIHBhZ2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmVtZW1iZXIgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgYW5kIGluY3JlbWVudCB0aGUgcGFnZSBjb3VudGVyXG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXSA9IHtcbiAgICAgICAgICAgIHBhZ2VJZDogbmV4dFBhZ2VJZENvdW50ZXIuZ2V0KCksXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0YWJJZCxcbiAgICAgICAgICAgIHJlZmVycmVyLFxuICAgICAgICAgICAgdmlzaXRTdGFydDogdGltZVN0YW1wLFxuICAgICAgICAgICAgdmlzaXRFbmQ6IC0xLFxuICAgICAgICAgICAgYXR0ZW50aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICBhdHRlbnRpb25TcGFuQ291bnQ6IDAsXG4gICAgICAgICAgICBhdHRlbnRpb25TcGFuU3RhcnRzOiBbIF0sXG4gICAgICAgICAgICBhdHRlbnRpb25TcGFuRW5kczogWyBdLFxuICAgICAgICAgICAgc2Nyb2xsRGVwdGg6IC0xLFxuICAgICAgICAgICAgcHJldkV4cG9zZWQ6IGZhbHNlLCAvLyB3aWxsIGNoZWNrIGFmdGVyIHN0b3JpbmcgdGhpc1xuICAgICAgICAgICAgbGF0ZXJTaGFyZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwcmV2RXhwb3NlZCA9IGF3YWl0IExpbmtFeHBvc3VyZS5sb2dWaXNpdCh1cmwpO1xuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0ucHJldkV4cG9zZWQgPSBwcmV2RXhwb3NlZDtcbiAgICAgICAgZGVidWdMb2coXCJwYWdlVmlzaXRTdGFydExpc3RlbmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYWJJbmZvW3RhYklkXSkpO1xuICAgICAgICBhd2FpdCBuZXh0UGFnZUlkQ291bnRlci5pbmNyZW1lbnQoKTtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSBwYWdlIHZpc2l0IHN0b3BzXG4gICAgYXN5bmMgZnVuY3Rpb24gcGFnZVZpc2l0U3RvcExpc3RlbmVyKHt0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCB0cmFja2luZyBhIHBhZ2UgaW4gdGhpcyB0YWIsIGlnbm9yZSB0aGUgcGFnZSB2aXNpdCBzdG9wXG4gICAgICAgIGlmKCEodGFiSWQgaW4gY3VycmVudFRhYkluZm8pKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSBjcmVhdGUgYSBjb3B5IG9mIHdoYXQgd2UgaGF2ZSByZW1lbWJlcmVkIGFib3V0IHRoZSBwYWdlIHZpc2l0LFxuICAgICAgICAvLyByZW1vdmUgdGhlIHBhZ2UgZnJvbSB0aGUgY3VycmVudCBzZXQgb2YgdHJhY2tlZCBwYWdlcywgYW5kIHNhdmUgdGhlIGNvcHlcbiAgICAgICAgLy8gdG8gc3RvcmFnZVxuICAgICAgICB2YXIgdGFiSW5mb1RvU2F2ZSA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRUYWJJbmZvW3RhYklkXSk7XG4gICAgICAgIHRhYkluZm9Ub1NhdmUudmlzaXRFbmQgPSB0aW1lU3RhbXA7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50VGFiSW5mb1t0YWJJZF07XG4gICAgICAgIHRhYkluZm9Ub1NhdmUudHlwZSA9IFwicGFnZVZpc2l0XCI7XG4gICAgICAgIGlmICh0YWJJbmZvVG9TYXZlLmF0dGVudGlvbkR1cmF0aW9uIDwgMTAwMCkgcmV0dXJuO1xuXG4gICAgICAgIGRlYnVnTG9nKFwicGFnZVZpc2l0U3RvcExpc3RlbmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KHRhYkluZm9Ub1NhdmUpKTtcblxuICAgICAgICAvLyBTdG9yZSB0aGUgZmluYWwgc2V0IG9mIGluZm9ybWF0aW9uIGZvciB0aGUgcGFnZVxuICAgICAgICBzdG9yYWdlLnNldCh0YWJJbmZvVG9TYXZlLnVybCArIFwiIFwiICsgdGFiSW5mb1RvU2F2ZS5wYWdlSWQudG9TdHJpbmcoKSwgdGFiSW5mb1RvU2F2ZSk7XG4gICAgfTtcblxuICAgIHZhciBpbkF0dGVudGlvblNwYW4gPSBmYWxzZTtcbiAgICB2YXIgc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuID0gLTE7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHBhZ2UgYXR0ZW50aW9uIHNwYW4gc3RhcnRzXG4gICAgZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIoe3RhYklkLCB0aW1lU3RhbXB9KSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHJlbWVtYmVyZWQgdGhlIHBhZ2UgcmVjZWl2aW5nIGF0dGVudGlvbiwgdGhlIHBhZ2UgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nXG4gICAgICAgIC8vIGRvbWFpbiwgc28gaWdub3JlIHRoZSBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudFxuICAgICAgICBpZighKHRhYklkIGluIGN1cnJlbnRUYWJJbmZvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIHN0YXJ0IG9mIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICBpbkF0dGVudGlvblNwYW4gPSB0cnVlO1xuICAgICAgICBzdGFydE9mQ3VycmVudEF0dGVudGlvblNwYW4gPSB0aW1lU3RhbXA7XG4gICAgICAgIGRlYnVnTG9nKFwicGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhYkluZm9bdGFiSWRdKSk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgcGFnZSBhdHRlbnRpb24gc3BhbiBlbmRzXG4gICAgZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcih7dGFiSWQsIHRpbWVTdGFtcH0pIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBub3QgcmVtZW1iZXJlZCB0aGUgcGFnZSByZWNlaXZpbmcgYXR0ZW50aW9uLCB0aGUgcGFnZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmdcbiAgICAgICAgLy8gZG9tYWluLCBzbyBpZ25vcmUgdGhlIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRcbiAgICAgICAgaWYoISh0YWJJZCBpbiBjdXJyZW50VGFiSW5mbykpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCBjdXJyZW50bHkgaW4gYW4gYXR0ZW50aW9uIHNwYW4sIGlnbm9yZSB0aGUgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudFxuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIVxuICAgICAgICBpZighaW5BdHRlbnRpb25TcGFuKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhcIldhcm5pbmc6IHVuZXhwZWN0ZWQgcGFnZSBhdHRlbnRpb24gc3RvcFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBlbmQgb2YgdGhlIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25EdXJhdGlvbiA9IFxuICAgICAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvbkR1cmF0aW9uICsgXG4gICAgICAgICAgICAodGltZVN0YW1wIC0gc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuKTtcbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5Db3VudCA9IFxuICAgICAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5Db3VudCArIDE7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25TcGFuU3RhcnRzLnB1c2goc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuKTtcbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5FbmRzLnB1c2godGltZVN0YW1wKTtcblxuICAgICAgICBpbkF0dGVudGlvblNwYW4gPSBmYWxzZTtcbiAgICAgICAgc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuID0gLTE7XG4gICAgICAgIGRlYnVnTG9nKFwicGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcjogXCIgKyBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFiSW5mb1t0YWJJZF0pKTtcbiAgICB9O1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHBhZ2UgdmlzaXQgbGlzdGVuZXJzIGFuZCwgaWYgbmVlZGVkIGZvciB0aGUgc3R1ZHksIHRoZSBwYWdlIGF0dGVudGlvbiBsaXN0ZW5lcnNcbiAgICAvLyBVc2UgYSB0aW1lc3RhbXAgdG8gc3luY2hyb25pemUgaW5pdGlhbCBwYWdlIHZpc2l0IGFuZCBwYWdlIGF0dGVudGlvbiB0aW1lc1xuXG4gICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIocGFnZVZpc2l0U3RhcnRMaXN0ZW5lciwgdHJ1ZSwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCk7XG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VWaXNpdFN0b3BMaXN0ZW5lcihwYWdlVmlzaXRTdG9wTGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzKTtcbiAgICBpZih0cmFja1VzZXJBdHRlbnRpb24pIHtcbiAgICAgICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLCB0cnVlLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbiAgICAgICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIocGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MpO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIHRoZSBVUkwgbWF0Y2hpbmcgc2V0IGZvciBjb250ZW50IHNjcmlwdHNcbiAgICB2YXIgY29udGVudFNjcmlwdE1hdGNoZXMgPSBNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCB0cnVlKTtcblxuICAgIC8vIFN0b3JlIHdoZXRoZXIgdGhlIE5hdmlnYXRpb24gc3R1ZHkgaXMgcnVubmluZyBpbiBwcml2YXRlIHdpbmRvd3MgaW4gZXh0ZW5zaW9uXG4gICAgLy8gbG9jYWwgc3RvcmFnZSwgc28gdGhhdCBpdCBpcyBhdmFpbGFibGUgdG8gY29udGVudCBzY3JpcHRzXG4gICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24ucHJpdmF0ZVdpbmRvd3NcIjogcHJpdmF0ZVdpbmRvd3MgfSk7XG59XG5cbi8qIFV0aWxpdGllcyAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBzdHVkeSBkYXRhIGFzIGFuIG9iamVjdC4gTm90ZSB0aGF0IHRoaXMgY291bGQgYmUgdmVyeVxuICogc2xvdyBpZiB0aGVyZSBpcyBhIGxhcmdlIHZvbHVtZSBvZiBzdHVkeSBkYXRhLlxuICogQHJldHVybnMgeyhPYmplY3R8bnVsbCl9IC0gVGhlIHN0dWR5IGRhdGEsIG9yIGBudWxsYCBpZiBubyBkYXRhXG4gKiBjb3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHVkeURhdGFBc09iamVjdCgpIHtcbiAgICBpZihzdG9yYWdlICE9IG51bGwpXG4gICAgICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3JlQW5kUmVzZXRVbnRyYWNrZWRWaXNpdHNDb3VudCgpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi51bnRyYWNrZWRWaXNpdENvdW50XCIsIFxuICAgICAgICAgICAge3R5cGU6IFwidW50cmFja2VkVmlzaXRDb3VudFwiLFxuICAgICAgICAgICAgIG51bVVudHJhY2tlZFZpc2l0czogYXdhaXQgdW50cmFja2VkUGFnZVZpc2l0cy5nZXRBbmRSZXNldCgpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dTaGFyZSh1cmwpIHtcbiAgICBpZiAoIXVybE1hdGNoZXIudGVzdFVybCh1cmwpKSB7IHJldHVybjsgfSAvLyBpZiBpdCdzIG5vdCBhIHRyYWNrZWQgdXJsLCBpdCBkZWZpbml0ZWx5IGlzbid0IGluIG91ciBkYXRhYmFzZVxuXG4gICAgdmFyIHByZXZWaXNpdFJlZmVycmVyID0gbnVsbDtcblxuICAgIC8vIFNlYXJjaCBpbi1tZW1vcnkgcGFnZXNcbiAgICBmb3IgKGxldCBwYWdlSWQgaW4gY3VycmVudFRhYkluZm8pe1xuICAgICAgICB2YXIgcGFnZVZpc2l0ID0gY3VycmVudFRhYkluZm9bcGFnZUlkXTtcbiAgICAgICAgaWYgKHVybCA9PSBwYWdlVmlzaXQudXJsKSB7XG4gICAgICAgICAgICBjdXJyZW50VGFiSW5mb1twYWdlSWRdLmxhdGVyU2hhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghcHJldlZpc2l0UmVmZXJyZXIpIHByZXZWaXNpdFJlZmVycmVyID0gcGFnZVZpc2l0LnJlZmVycmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIHByZXZpb3VzbHktc3RvcmVkIHBhZ2VzXG4gICAgdmFyIGJlc3RSZWZlcnJlciA9IHt0czogMCwgcmVmZXJyZXI6IFwiXCJ9XG4gICAgYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHVybCkudGhlbigocHJldlZpc2l0cykgPT4ge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJldlZpc2l0cykge1xuICAgICAgICAgICAgaWYgKHByZXZWaXNpdHNba2V5XS52aXNpdFN0YXJ0ID4gYmVzdFJlZmVycmVyLnRzKSB7XG4gICAgICAgICAgICAgICAgYmVzdFJlZmVycmVyLnRzID0gcHJldlZpc2l0c1trZXldLnZpc2l0U3RhcnRcbiAgICAgICAgICAgICAgICBiZXN0UmVmZXJyZXIucmVmZXJyZXIgPSBwcmV2VmlzaXRzW2tleV0ucmVmZXJyZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZWaXNpdHNba2V5XS5sYXRlclNoYXJlZCA9IHRydWU7XG4gICAgICAgICAgICBzdG9yYWdlLnNldChrZXksIHByZXZWaXNpdHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcHJldlZpc2l0UmVmZXJyZXIpIHByZXZWaXNpdFJlZmVycmVyID0gYmVzdFJlZmVycmVyLnJlZmVycmVyO1xuICAgIHJldHVybiBbcHJldlZpc2l0UmVmZXJyZXJdO1xufSIsIi8qKlxuICogVGhpcyBtb2R1bGUgbWVhc3VyZXMgc2Nyb2xsIGRlcHRoIGZvciB3ZWJwYWdlcyBvbiBzcGVjaWZpYyBkb21haW5zLlxuICogXG4gKiBOb3RlOiB3ZSB3aWxsIGxpa2VseSByZXBsYWNlIHRoaXMgbW9kdWxlIHdoZW4gd2UgdXBkYXRlIHRoZVxuICogUGFnZU5hdmlnYXRpb24gYW5kIFBhZ2VFdmVudHMgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5BZHZlcnRpc2VtZW50c1xuICovXG5cbmltcG9ydCAqIGFzIERlYnVnZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL0RlYnVnZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gXCIuLi9VdGlsaXRpZXMvU3RvcmFnZS5qc1wiXG5pbXBvcnQgKiBhcyBNYXRjaGluZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01hdGNoaW5nLmpzXCJcbmltcG9ydCAqIGFzIE1lc3NhZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01lc3NhZ2luZy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIk1lYXN1cmVtZW50cy5BZHZlcnRpc2VtZW50c1wiKTtcblxuLyoqXG4gKiBBIEtleVZhbHVlU3RvcmFnZSBvYmplY3QgZm9yIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdHVkeS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgc3RvcmFnZSA9IG51bGw7XG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxudmFyIGxpc3RlbmVycyA9IFtdO1xuXG4vKipcbiAqIFN0YXJ0IGFuIGFkdmVydGlzZW1lbnRzIHN0dWR5LiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbIF1cbn0pIHtcblxuICAgIGlmKGluaXRpYWxpemVkKVxuICAgICAgICByZXR1cm47ICAgIFxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQWR2ZXJ0aXNlbWVudHNcIikpLmluaXRpYWxpemUoKTtcblxuICAgIC8vIFVzZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHdlYnBhZ2UgdGhlIHVzZXIgdmlzaXRzIHRoYXQgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgdmFyIG5leHRQYWdlSWRDb3VudGVyID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5BZHZlcnRpc2VtZW50cy5uZXh0UGFnZUlkXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBCdWlsZCB0aGUgVVJMIG1hdGNoaW5nIHNldCBmb3IgY29udGVudCBzY3JpcHRzXG4gICAgdmFyIGNvbnRlbnRTY3JpcHRNYXRjaGVzID0gTWF0Y2hpbmcuY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXkoZG9tYWlucywgdHJ1ZSk7XG5cbiAgICAvLyBSZWdpc3RlciB0aGUgY29udGVudCBzY3JpcHQgZm9yIG1lYXN1cmluZyBtYXhpbXVtIHNjcm9sbCBkZXB0aFxuICAgIGF3YWl0IGJyb3dzZXIuY29udGVudFNjcmlwdHMucmVnaXN0ZXIoe1xuICAgICAgICBtYXRjaGVzOiBjb250ZW50U2NyaXB0TWF0Y2hlcyxcbiAgICAgICAganM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZTogXCIvc3JjL2FkX2Nzc19zZWxlY3RvcnMuanNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlOiBcIi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL3BhZ2UtYWRzLmpzXCJcbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBydW5BdDogXCJkb2N1bWVudF9pZGxlXCJcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBwYWdlIGRlcHRoIGV2ZW50c1xuICAgIE1lc3NhZ2luZy5yZWdpc3Rlckxpc3RlbmVyKFwiV2ViU2NpZW5jZS5hZHZlcnRpc2VtZW50c1wiLCBhc3luYyAoZGVwdGhJbmZvLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICB2YXIgcGFnZUlkID0gYXdhaXQgbmV4dFBhZ2VJZENvdW50ZXIuZ2V0QW5kSW5jcmVtZW50KCk7XG4gICAgICAgIGRlcHRoSW5mby51cmwgPSBTdG9yYWdlLm5vcm1hbGl6ZVVybChzZW5kZXIudXJsKTtcbiAgICAgICAgZGVwdGhJbmZvLnRhYklkID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7IGxpc3RlbmVyKGRlcHRoSW5mbyk7IH1cbiAgICAgICAgc3RvcmFnZS5zZXQocGFnZUlkLnRvU3RyaW5nKCksIGRlcHRoSW5mbyk7XG4gICAgICAgIGRlYnVnTG9nKEpTT04uc3RyaW5naWZ5KGRlcHRoSW5mbykpO1xuICAgIH0sIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgdXJsIDogXCJzdHJpbmdcIixcbiAgICAgICAgYWRzIDogXCJvYmplY3RcIixcbiAgICB9KTtcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0KCkge1xuICAgIGlmKHN0b3JhZ2UgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn0iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbmltcG9ydCAqIGFzIFdlYlNjaWVuY2UgZnJvbSBcIi4vV2ViU2NpZW5jZS5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIHZhciBzdHVkeVBhdGhzID0gV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocygpO1xuICAgIGNvbnNvbGUuZGVidWcoXCJzdHVkeSBwYXRoczpcIik7XG4gICAgY29uc29sZS5kZWJ1ZyhzdHVkeVBhdGhzKVxuXG4gICAgLy8gQ29uZmlndXJlIG5hdmlnYXRpb24gY29sbGVjdGlvblxuICAgIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgICAgICB0cmFja1VzZXJBdHRlbnRpb246IHRydWVcbiAgICB9KTtcblxuICAgIC8vIENvbmZpZ3VyZSBsaW5rIGV4cG9zdXJlIGNvbGxlY3Rpb25cbiAgICBXZWJTY2llbmNlLlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvbi5pbml0aWFsaXplKCk7XG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgICAgICBwcml2YXRlV2luZG93cyA6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgIH0pO1xuXG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgIH0pO1xuXG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQWR2ZXJ0aXNlbWVudHMucnVuU3R1ZHkoe1xuICAgICAgICBkb21haW5zOiBzdHVkeVBhdGhzLmRlc3RpbmF0aW9uUGF0aHMsXG4gICAgfSk7XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XG5cbmltcG9ydCBSYWxseSBmcm9tIFwiQG1vemlsbGEvcmFsbHlcIjtcblxuLy8gRXhhbXBsZTogaW1wb3J0IGEgbW9kdWxlLlxuaW1wb3J0IHtcbiAgaW5pdGlhbGl6ZSBhcyBleGFtcGxlSW5pdGlhbGl6ZVxufSBmcm9tICcuL0V4YW1wbGVNb2R1bGUnO1xuXG5jb25zdCByYWxseSA9IG5ldyBSYWxseSgpO1xucmFsbHkuaW5pdGlhbGl6ZShcbiAgLy8gQSBzYW1wbGUga2V5IGlkIHVzZWQgZm9yIGVuY3J5cHRpbmcgZGF0YS5cbiAgXCJzYW1wbGUtaW52YWxpZC1rZXktaWRcIixcbiAgLy8gQSBzYW1wbGUgKnZhbGlkKiBKV0sgb2JqZWN0IGZvciB0aGUgZW5jcnlwdGlvbi5cbiAge1xuICAgIFwia3R5XCI6XCJFQ1wiLFxuICAgIFwiY3J2XCI6XCJQLTI1NlwiLFxuICAgIFwieFwiOlwiZjgzT0ozRDJ4RjFCZzh2dWI5dExlMWdITXpWNzZlOFR1czl1UEh2UlZFVVwiLFxuICAgIFwieVwiOlwieF9GRXpSdTltMzZITE5fdHVlNjU5TE5wWFc2cEN5U3Rpa1lqS0lXSTVhMFwiLFxuICAgIFwia2lkXCI6XCJQdWJsaWMga2V5IHVzZWQgaW4gSldTIHNwZWMgQXBwZW5kaXggQS4zIGV4YW1wbGVcIlxuICB9LFxuICAvLyBUaGUgZm9sbG93aW5nIGNvbnN0YW50IGlzIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnlcbiAgLy8gdGhlIGJ1aWxkIHN5c3RlbS5cbiAgX19FTkFCTEVfREVWRUxPUEVSX01PREVfXyxcbikudGhlbihyZXNvbHZlID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc3R1ZHkgYW5kIHN0YXJ0IGl0LlxuICAvLyBFeGFtcGxlOiBpbml0aWFsaXplIHRoZSBleGFtcGxlIG1vZHVsZS5cbiAgZXhhbXBsZUluaXRpYWxpemUoKTtcbn0sIHJlamVjdCA9PntcbiAgLy8gRG8gbm90IHN0YXJ0IHRoZSBzdHVkeSBpbiB0aGlzIGNhc2UuIFNvbWV0aGluZ1xuICAvLyB3ZW50IHdyb25nLlxufSk7XG4iXSwibmFtZXMiOlsidGhpcyIsIkRlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2ciLCJpbml0aWFsaXplZCIsImluaXRpYWxpemUiLCJJZGxlLnJlZ2lzdGVySWRsZVN0YXRlTGlzdGVuZXIiLCJJZGxlLnF1ZXJ5U3RhdGUiLCJkZWJ1Z0xvZyIsIlN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlIiwiU3RvcmFnZS5Db3VudGVyIiwiTGlua1Jlc29sdXRpb24uZ2V0U2hvcnREb21haW5zIiwiTGlua1Jlc29sdXRpb24uZ2V0QW1wQ2FjaGVEb21haW5zIiwiTWF0Y2hpbmcuY3JlYXRlVXJsUmVnZXhTdHJpbmciLCJNZXNzYWdpbmcucmVnaXN0ZXJMaXN0ZW5lciIsIkxpbmtSZXNvbHV0aW9uLnJlc29sdmVVcmwiLCJQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIiLCJQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lciIsIlN0b3JhZ2Uubm9ybWFsaXplVXJsIiwic3RvcmFnZSIsInJ1blN0dWR5IiwiTWF0Y2hpbmcuY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXkiLCJyZWdpc3Rlckxpc3RlbmVyIiwibGlzdGVuZXJzIiwiTWF0Y2hpbmcuY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXlXaXRoUGF0aCIsIk1hdGNoaW5nLlVybE1hdGNoZXIiLCJQYWdlRGVwdGgucmVnaXN0ZXJMaXN0ZW5lciIsIkFydGljbGVDb250ZW50cy5yZWdpc3Rlckxpc3RlbmVyIiwiTGlua0V4cG9zdXJlLmxvZ1Zpc2l0IiwiUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIiLCJQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZVZpc2l0U3RvcExpc3RlbmVyIiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocyIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnJ1blN0dWR5IiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTGlua1Jlc29sdXRpb24uaW5pdGlhbGl6ZSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5ydW5TdHVkeSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aC5ydW5TdHVkeSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkFydGljbGVDb250ZW50cy5ydW5TdHVkeSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkFkdmVydGlzZW1lbnRzLnJ1blN0dWR5IiwiZXhhbXBsZUluaXRpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFVLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDNUIsRUFFNkM7QUFDN0MsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsR0FNRztBQUNILENBQUMsRUFBRSxPQUFPLFVBQVUsS0FBSyxXQUFXLEdBQUcsVUFBVSxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUdBLGNBQUksRUFBRSxVQUFVLE1BQU0sRUFBRTtBQVdqSDtBQUNBLEVBQUUsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFO0FBQzdGLElBQUksTUFBTSxnREFBZ0QsR0FBRyx5REFBeUQsQ0FBQztBQUN2SCxJQUFJLE1BQU0saUNBQWlDLEdBQUcsd1BBQXdQLENBQUM7QUFDdlM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksTUFBTSxRQUFRLEdBQUcsYUFBYSxJQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxXQUFXLEdBQUc7QUFDMUIsUUFBUSxRQUFRLEVBQUU7QUFDbEIsVUFBVSxPQUFPLEVBQUU7QUFDbkIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVB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LE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQTJCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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LE9BQU87QUFDUCxZQUFZO0FBQ1osV0FBVztBQUNYLFFBQVE7QUFDUixVQUFVO0FBQ1YsUUFBUTtBQUNSLFlBQVk7QUFDWixRQUFRO0FBQ1IsUUFBUTtBQUNSLFVBQVU7QUFDVixRQUFRO0FBQ1IsVUFBVTtBQUNWLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsV0FBVztBQUNYLFFBQVE7QUFDUixTQUFTO0FBQ1QsUUFBUTtBQUNSLFdBQVc7QUFDWCxVQUFVO0FBQ1YsVUFBVTtBQUNWLFVBQVU7QUFDVixPQUFPO0FBQ1AsU0FBUztBQUNULFVBQVU7QUFDVixVQUFVO0FBQ1YsVUFBVTtBQUNWLFFBQVE7QUFDUixTQUFTO0FBQ1QsVUFBVTtBQUNWLFVBQVU7QUFDVixRQUFRO0FBQ1IsYUFBYTtBQUNiLFFBQVE7QUFDUixVQUFVO0FBQ1YsVUFBVTtBQUNWLFlBQVk7QUFDWixRQUFRO0FBQ1IsWUFBWTtBQUNaLFdBQVc7QUFDWCxRQUFRO0FBQ1IsUUFBUTtBQUNSLFdBQVc7QUFDWCxVQUFVO0FBQ1YsU0FBUztBQUNULFNBQVM7QUFDVCxXQUFXO0FBQ1gsVUFBVTtBQUNWLFVBQVU7QUFDVixXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVE7QUFDUixRQUFRO0FBQ1IsWUFBWTtBQUNaLFNBQVM7QUFDVCxRQUFRO0FBQ1IsVUFBVTtBQUNWLFVBQVU7QUFDVixRQUFRO0FBQ1IsUUFBUTtBQUNSLFdBQVc7QUFDWCxXQUFXO0FBQ1gsUUFBUTtBQUNSLFNBQVM7QUFDVCxPQUFPO0FBQ1AsU0FBUztBQUNULFVBQVU7QUFDVixVQUFVO0FBQ1YsU0FBUztBQUNULFFBQVE7QUFDUixTQUFTO0FBQ1QsVUFBVTtBQUNWLFNBQVM7QUFDVCxRQUFRO0FBQ1IsV0FBVztBQUNYLFFBQVE7QUFDUixVQUFVO0FBQ1YsUUFBUTtBQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsT0FBTztBQUNQLFlBQVk7QUFDWixTQUFTO0FBQ1QsUUFBUTtBQUNS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
