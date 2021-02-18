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
 * @module WebScience.Measurements.PageDepth
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
 * Start a page depth study. Note that only one study is supported per extension.
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
    var contentScriptMatches = createUrlMatchPatternArray(domains, true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvQG1vemlsbGEvcmFsbHkvcmFsbHkuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvRGVidWdnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL2xvY2FsZm9yYWdlLmVzNi5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9sb2NhbGZvcmFnZS1zdGFydHN3aXRoLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL1N0b3JhZ2UuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTWVzc2FnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL0lkbGUuanMiLCIuLi9zcmMvZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9NYXRjaGluZy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9QYWdlRXZlbnRzLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL3Nob3J0ZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9hbXBjYWNoZWRvbWFpbnMuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTGlua1Jlc29sdXRpb24uanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvTGlua0V4cG9zdXJlLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL1BhZ2VEZXB0aC5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9BcnRpY2xlQ29udGVudHMuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvUGFnZU5hdmlnYXRpb24uanMiLCIuLi9zcmMvRXhhbXBsZU1vZHVsZS5qcyIsIi4uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuNy4wIC0gVHVlIE5vdiAxMCAyMDIwIDIwOjI0OjA0ICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0eXBlb2YgYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcbiAgICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdGlvblxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pOyAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxuXG5cbiAgICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgY2hyb21lICE9IFwib2JqZWN0XCIgfHwgIWNocm9tZSB8fCAhY2hyb21lLnJ1bnRpbWUgfHwgIWNocm9tZS5ydW50aW1lLmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gICAgfSAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBicm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXHJcblxyXG5jb25zdCBDT1JFX0FERE9OX0lEID0gXCJyYWxseS1jb3JlQG1vemlsbGEub3JnXCI7XHJcbmNvbnN0IFNJR05VUF9VUkwgPSBcImh0dHBzOi8vbW96aWxsYS1yYWxseS5naXRodWIuaW8vY29yZS1hZGRvbi9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbGx5IHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZSBSYWxseSBsaWJyYXJ5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleUlkXHJcbiAgICogICAgICAgIFRoZSBpZCBvZiB0aGUga2V5IHVzZWQgdG8gZW5jcnlwdCBvdXRnb2luZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlcclxuICAgKiAgICAgICAgVGhlIEpTT04gV2ViIEtleSAoSldLKSB1c2VkIHRvIGVuY3J5cHQgdGhlIG91dGdvaW5nIGRhdGEuXHJcbiAgICogICAgICAgIFNlZSB0aGUgUkZDIDc1MTcgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc1MTdcclxuICAgKiAgICAgICAgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uIEZvciBleGFtcGxlOlxyXG4gICAqXHJcbiAgICogICAgICAgIHtcclxuICAgKiAgICAgICAgICBcImt0eVwiOlwiRUNcIixcclxuICAgKiAgICAgICAgICBcImNydlwiOlwiUC0yNTZcIixcclxuICAgKiAgICAgICAgICBcInhcIjpcImY4M09KM0QyeEYxQmc4dnViOXRMZTFnSE16Vjc2ZThUdXM5dVBIdlJWRVVcIixcclxuICAgKiAgICAgICAgICBcInlcIjpcInhfRkV6UnU5bTM2SExOX3R1ZTY1OUxOcFhXNnBDeVN0aWtZaktJV0k1YTBcIixcclxuICAgKiAgICAgICAgICBcImtpZFwiOlwiUHVibGljIGtleSB1c2VkIGluIEpXUyBzcGVjIEFwcGVuZGl4IEEuMyBleGFtcGxlXCJcclxuICAgKiAgICAgICAgfVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlRGV2TW9kZVxyXG4gICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0byBpbml0aWFsaXplIFJhbGx5LmpzIGluIGRldmVsb3BlciBtb2RlLlxyXG4gICAqICAgICAgICBJbiB0aGlzIG1vZGUgd2UgaWdub3JlIHByb2JsZW1zIHdoZW4gY29tbXVuaWNhdGluZyB3aXRoXHJcbiAgICogICAgICAgIGNvcmUgYWRkLW9uLlxyXG4gICAqL1xyXG4gIGFzeW5jIGluaXRpYWxpemUoa2V5SWQsIGtleSwgZW5hYmxlRGV2TW9kZSkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyhcIlJhbGx5LmluaXRpYWxpemVcIik7XHJcblxyXG4gICAgdGhpcy5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5KGtleUlkLCBrZXkpO1xyXG5cclxuICAgIHRoaXMuX2tleUlkID0ga2V5SWQ7XHJcbiAgICB0aGlzLl9rZXkgPSBrZXk7XHJcbiAgICB0aGlzLl9lbmFibGVEZXZNb2RlID0gQm9vbGVhbihlbmFibGVEZXZNb2RlKTtcclxuXHJcbiAgICBsZXQgaGFzUmFsbHkgPSBhd2FpdCB0aGlzLl9jaGVja1JhbGx5Q29yZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKFwiUmFsbHkuaW5pdGlhbGl6ZSAtIEZvdW5kIHRoZSBDb3JlIEFkZC1vbi5cIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSkuY2F0Y2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBXZSBkaWQgbm90IGZpbmQgdGhlIFJhbGx5IENvcmUgQWRkLW9uLiBCdXQgbWF5YmUgd2VcclxuICAgICAgLy8gYXJlIGluIGRldmVsb3BlciBtb2RlLiBEbyBub3QgdHJpZ2dlciB0aGUgc2lnbi11cCBmbG93XHJcbiAgICAgIC8vIGlmIHRoYXQncyB0aGUgY2FzZS5cclxuICAgICAgaWYgKHRoaXMuX2VuYWJsZURldk1vZGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJSYWxseS5pbml0aWFsaXplIC0gRXhlY3V0aW5nIGluIGRldmVsb3BlciBtb2RlLlwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIENvcmUgQWRkLW9uIHdhcyBub3QgZm91bmQgYW5kIHdlJ3JlIG5vdCBpbiBkZXZlbG9wZXJcclxuICAgICAgLy8gbW9kZS5cclxuICAgICAgYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogU0lHTlVQX1VSTCB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFoYXNSYWxseSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYWxseS5pbml0aWFsaXplIC0gSW5pdGlhbGl6YXRpb24gZmFpbGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIGluY29taW5nIG1lc3NhZ2VzIGZyb20gdGhlIENvcmUgYWRkb24uXHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIoXHJcbiAgICAgIChtLCBzKSA9PiB0aGlzLl9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UobSwgcykpO1xyXG5cclxuICAgIC8vIFdlIHdlbnQgdGhyb3VnaCB0aGUgd2hvbGUgaW5pdCBwcm9jZXNzLCBpdCdzIG5vdyBzYWZlXHJcbiAgICAvLyB0byB1c2UgdGhlIFJhbGx5IHB1YmxpYyBBUElzLlxyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIENvcmUgYWRkb24gaXMgaW5zdGFsbGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9IHJlc29sdmVkIGlmIHRoZSBjb3JlIGFkZG9uIHdhcyBmb3VuZCBhbmRcclxuICAgKiAgICAgICAgICBjb21tdW5pY2F0aW9uIHdhcyBzdWNjZXNzZnVsLCByZWplY3RlZCBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgYXN5bmMgX2NoZWNrUmFsbHlDb3JlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbXNnID0ge1xyXG4gICAgICAgIHR5cGU6IFwiY29yZS1jaGVja1wiLFxyXG4gICAgICAgIGRhdGE6IHt9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJlc3BvbnNlID1cclxuICAgICAgICBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoQ09SRV9BRERPTl9JRCwgbXNnLCB7fSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlXHJcbiAgICAgICAgICB8fCByZXNwb25zZS50eXBlICE9PSBcImNvcmUtY2hlY2stcmVzcG9uc2VcIlxyXG4gICAgICAgICAgfHwgcmVzcG9uc2UuZGF0YS5lbnJvbGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUmFsbHkuX2NoZWNrUmFsbHlDb3JlIC0gdW5leHBlY3RlZCByZXNwb25zZSByZXR1cm5lZCAke3Jlc3BvbnNlfWApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYWxseS5fY2hlY2tSYWxseUNvcmUgLSBjb3JlIGFkZG9uIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgbWVzc2FnZXMgY29taW5nIGluIGZyb20gZXh0ZXJuYWwgYWRkb25zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VcclxuICAgKiAgICAgICAgVGhlIHBheWxvYWQgb2YgdGhlIG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIHtydW50aW1lLk1lc3NhZ2VTZW5kZXJ9IHNlbmRlclxyXG4gICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbnMgYWJvdXQgd2hvIHNlbnRcclxuICAgKiAgICAgICAgdGhlIG1lc3NhZ2UuXHJcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSByZXNwb25zZSB0byB0aGUgcmVjZWl2ZWQgbWVzc2FnZS5cclxuICAgKiAgICAgICAgICBJdCBjYW4gYmUgcmVzb2x2ZWQgd2l0aCBhIHZhbHVlIHRoYXQgaXMgc2VudCB0byB0aGVcclxuICAgKiAgICAgICAgICBgc2VuZGVyYC5cclxuICAgKi9cclxuICBfaGFuZGxlRXh0ZXJuYWxNZXNzYWdlKG1lc3NhZ2UsIHNlbmRlcikge1xyXG4gICAgLy8gV2Ugb25seSBleHBlY3QgbWVzc2FnZXMgY29taW5nIGZyb20gdGhlIGNvcmUgYWRkb24uXHJcbiAgICBpZiAoc2VuZGVyLmlkICE9IENPUkVfQURET05fSUQpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgIG5ldyBFcnJvcihgUmFsbHkuX2hhbmRsZUV4dGVybmFsTWVzc2FnZSAtIHVuZXhwZWN0ZWQgc2VuZGVyICR7c2VuZGVyLmlkfWApKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIFwidW5pbnN0YWxsXCI6XHJcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIubWFuYWdlbWVudC51bmluc3RhbGxTZWxmKHtzaG93Q29uZmlybURpYWxvZzogZmFsc2V9KTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICBuZXcgRXJyb3IoYFJhbGx5Ll9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UgLSB1bmV4cGVjdGVkIG1lc3NhZ2UgdHlwZSAke21lc3NhZ2UudHlwZX1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgZW5jcnlwdGlvbiBrZXlzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleUlkXHJcbiAgICogICAgICAgIFRoZSBpZCBvZiB0aGUga2V5IHVzZWQgdG8gZW5jcnlwdCBvdXRnb2luZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlcclxuICAgKiAgICAgICAgVGhlIEpTT04gV2ViIEtleSAoSldLKSB1c2VkIHRvIGVuY3J5cHQgdGhlIG91dGdvaW5nIGRhdGEuXHJcbiAgICogICAgICAgIFNlZSB0aGUgUkZDIDc1MTcgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc1MTdcclxuICAgKiAgICAgICAgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uIEZvciBleGFtcGxlOlxyXG4gICAqXHJcbiAgICogICAgICAgIHtcclxuICAgKiAgICAgICAgICBcImt0eVwiOlwiRUNcIixcclxuICAgKiAgICAgICAgICBcImNydlwiOlwiUC0yNTZcIixcclxuICAgKiAgICAgICAgICBcInhcIjpcImY4M09KM0QyeEYxQmc4dnViOXRMZTFnSE16Vjc2ZThUdXM5dVBIdlJWRVVcIixcclxuICAgKiAgICAgICAgICBcInlcIjpcInhfRkV6UnU5bTM2SExOX3R1ZTY1OUxOcFhXNnBDeVN0aWtZaktJV0k1YTBcIixcclxuICAgKiAgICAgICAgICBcImtpZFwiOlwiUHVibGljIGtleSB1c2VkIGluIEpXUyBzcGVjIEFwcGVuZGl4IEEuMyBleGFtcGxlXCJcclxuICAgKiAgICAgICAgfVxyXG4gICAqXHJcbiAgICogQHRocm93cyB7RXJyb3J9IGlmIGVpdGhlciB0aGUga2V5IGlkIG9yIHRoZSBKV0sga2V5IG9iamVjdCBhcmVcclxuICAgKiAgICAgICAgIGludmFsaWQuXHJcbiAgICovXHJcbiAgX3ZhbGlkYXRlRW5jcnlwdGlvbktleShrZXlJZCwga2V5KSB7XHJcbiAgICBpZiAodHlwZW9mIGtleUlkICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmFsbHkuX3ZhbGlkYXRlRW5jcnlwdGlvbktleSAtIEludmFsaWQgZW5jcnlwdGlvbiBrZXkgaWQgJHtrZXlJZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJhbGx5Ll92YWxpZGF0ZUVuY3J5cHRpb25LZXkgLSBJbnZhbGlkIGVuY3J5cHRpb24ga2V5ICR7a2V5fWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3VibWl0IGFuIGVuY3J5cHRlZCBwaW5nIHRocm91Z2ggdGhlIFJhbGx5IENvcmUgYWRkb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF5bG9hZFR5cGVcclxuICAgKiAgICAgICAgVGhlIHR5cGUgb2YgdGhlIGVuY3J5cHRlZCBwYXlsb2FkLiBUaGlzIHdpbGwgZGVmaW5lIHRoZVxyXG4gICAqICAgICAgICBgc2NoZW1hTmFtZWAgb2YgdGhlIHBpbmcuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcclxuICAgKiAgICAgICAgQSBKU09OLXNlcmlhbGl6YWJsZSBwYXlsb2FkIHRvIGJlIHNlbnQgd2l0aCB0aGUgcGluZy5cclxuICAgKi9cclxuICBhc3luYyBzZW5kUGluZyhwYXlsb2FkVHlwZSwgcGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiUmFsbHkuc2VuZFBpbmcgLSBOb3QgaW5pdGlhbHplZCwgY2FsbCBgaW5pdGlhbGl6ZSgpYFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gaW4gZGV2ZWxvcGVyIG1vZGUsIGR1bXAgdGhlIHBheWxvYWQgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICBpZiAodGhpcy5fZW5hYmxlRGV2TW9kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgUmFsbHkuc2VuZFBpbmcgLSBEZXZlbG9wZXIgbW9kZS4gJHtwYXlsb2FkVHlwZX0gd2lsbCBub3QgYmUgc3VibWl0dGVkYCxcclxuICAgICAgICBwYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXcmFwIGV2ZXJ5dGhpbmcgaW4gYSB0cnkgYmxvY2ssIGFzIHdlIGRvbid0IHJlYWxseSB3YW50XHJcbiAgICAvLyBkYXRhIGNvbGxlY3Rpb24gdG8gYmUgdGhlIGN1bHByaXQgb2YgYSBidWcgaGluZGVyaW5nIHVzZXJcclxuICAgIC8vIGV4cGVyaWVuY2UuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHN0dWR5IGNhbiBiZSB1c2VkIGFzIHRoZVxyXG4gICAgICAvLyBuYW1lc3BhY2UsIGluIG9yZGVyIHRvIG1ha2Ugc3VyZSBkYXRhIGlzIHJvdXRlZCB0byB0aGVcclxuICAgICAgLy8gcHJvcGVyIGFuYWx5c2lzIHNhbmRib3guXHJcbiAgICAgIGNvbnN0IHN0dWR5TmFtZSA9IGJyb3dzZXIucnVudGltZS5pZDtcclxuXHJcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gbWF5IGJlIG1pc3Rha2VubHkgY2FsbGVkIHdoaWxlIGluaXQgaGFzIG5vdFxyXG4gICAgICAvLyBmaW5pc2hlZC4gTGV0J3MgYmUgc2FmZSBhbmQgY2hlY2sgZm9yIGtleSB2YWxpZGl0eSBhZ2Fpbi5cclxuICAgICAgdGhpcy5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5KHRoaXMuX2tleUlkLCB0aGlzLl9rZXkpO1xyXG5cclxuICAgICAgY29uc3QgbXNnID0ge1xyXG4gICAgICAgIHR5cGU6IFwidGVsZW1ldHJ5LXBpbmdcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwYXlsb2FkVHlwZTogcGF5bG9hZFR5cGUsXHJcbiAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgbmFtZXNwYWNlOiBzdHVkeU5hbWUsXHJcbiAgICAgICAgICBrZXlJZDogdGhpcy5fa2V5SWQsXHJcbiAgICAgICAgICBrZXk6IHRoaXMuX2tleVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoQ09SRV9BRERPTl9JRCwgbXNnLCB7fSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBSYWxseS5zZW5kUGluZyAtIGVycm9yIHdoaWxlIHNlbmRpbmcgJHtwYXlsb2FkVHlwZX1gLCBleCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgdXRpbGl0aWVzIGZvciBsb2dnaW5nIGRlYnVnZ2luZyBldmVudHMuXG4gKiBUaGUgbW9kdWxlIGN1cnJlbnRseSBqdXN0IG91dHB1dHMgZXZlbnRzIHdpdGggYGNvbnNvbGUuZGVidWdgLlxuICogSXQgc2hvdWxkIGV2ZW50dWFsbHkgc3VwcG9ydCBkZWJ1Z2dpbmcgdmlhIFRlbGVtZXRyeS5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5EZWJ1Z2dpbmdcbiAqL1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gbG9nIGRlYnVnZ2luZyBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgZGVidWcgPSBmYWxzZTtcblxuLyoqIEVuYWJsZSBsb2dnaW5nIGZvciBkZWJ1Z2dpbmcgZXZlbnRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURlYnVnZ2luZygpIHtcbiAgICBkZWJ1ZyA9IHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnaW5nIGxvZ2dlciwgYSBmdW5jdGlvbiB0aGF0IGxvZ3MgZGVidWdnaW5nIGV2ZW50cyAoYXMgc3RyaW5ncykuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlTmFtZSAtIEEgbmFtZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIG1vZHVsZVxuICogZ2VuZXJhdGluZyB0aGUgZGVidWdnaW5nIGV2ZW50cy5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcpfSAtIEEgZGVidWdnaW5nIGxvZ2dlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlYnVnZ2luZ0xvZyhtb2R1bGVOYW1lKSB7XG4gICAgcmV0dXJuICgodGV4dCkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiV2ViU2NpZW5jZS5cIiArIG1vZHVsZU5hbWUgKyBcIjogXCIgKyB0ZXh0KTtcbiAgICB9KTtcbn0iLCIvKiFcbiAgICBsb2NhbEZvcmFnZSAtLSBPZmZsaW5lIFN0b3JhZ2UsIEltcHJvdmVkXG4gICAgVmVyc2lvbiAxLjkuMFxuICAgIGh0dHBzOi8vbG9jYWxmb3JhZ2UuZ2l0aHViLmlvL2xvY2FsRm9yYWdlXG4gICAgKGMpIDIwMTMtMjAxNyBNb3ppbGxhLCBBcGFjaGUgTGljZW5zZSAyLjBcbiovXG5leHBvcnQgdmFyIGxvY2FsZm9yYWdlO1xuKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcubG9jYWxmb3JhZ2UgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgKGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIiwgZil9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG52YXIgTXV0YXRpb24gPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxudmFyIHNjaGVkdWxlRHJhaW47XG5cbntcbiAgaWYgKE11dGF0aW9uKSB7XG4gICAgdmFyIGNhbGxlZCA9IDA7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKG5leHRUaWNrKTtcbiAgICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQuZGF0YSA9IChjYWxsZWQgPSArK2NhbGxlZCAlIDIpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoIWdsb2JhbC5zZXRJbW1lZGlhdGUgJiYgdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG5leHRUaWNrO1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0VGljaygpO1xuXG4gICAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHNjcmlwdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWwpO1xuICAgICAgICBzY3JpcHRFbCA9IG51bGw7XG4gICAgICB9O1xuICAgICAgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChuZXh0VGljaywgMCk7XG4gICAgfTtcbiAgfVxufVxuXG52YXIgZHJhaW5pbmc7XG52YXIgcXVldWUgPSBbXTtcbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGksIG9sZFF1ZXVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAobGVuKSB7XG4gICAgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBvbGRRdWV1ZVtpXSgpO1xuICAgIH1cbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICBpZiAocXVldWUucHVzaCh0YXNrKSA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBzY2hlZHVsZURyYWluKCk7XG4gIH1cbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBpbW1lZGlhdGUgPSBfZGVyZXFfKDEpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gSU5URVJOQUwoKSB7fVxuXG52YXIgaGFuZGxlcnMgPSB7fTtcblxudmFyIFJFSkVDVEVEID0gWydSRUpFQ1RFRCddO1xudmFyIEZVTEZJTExFRCA9IFsnRlVMRklMTEVEJ107XG52YXIgUEVORElORyA9IFsnUEVORElORyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHRoaXMuc3RhdGUgPSBQRU5ESU5HO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMub3V0Y29tZSA9IHZvaWQgMDtcbiAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZSh0aGlzLCByZXNvbHZlcik7XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCB8fFxuICAgIHR5cGVvZiBvblJlamVjdGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihJTlRFUk5BTCk7XG4gIGlmICh0aGlzLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgdmFyIHJlc29sdmVyID0gdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEID8gb25GdWxmaWxsZWQgOiBvblJlamVjdGVkO1xuICAgIHVud3JhcChwcm9taXNlLCByZXNvbHZlciwgdGhpcy5vdXRjb21lKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2gobmV3IFF1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuZnVuY3Rpb24gUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gb25GdWxmaWxsZWQ7XG4gICAgdGhpcy5jYWxsRnVsZmlsbGVkID0gdGhpcy5vdGhlckNhbGxGdWxmaWxsZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5vblJlamVjdGVkID0gb25SZWplY3RlZDtcbiAgICB0aGlzLmNhbGxSZWplY3RlZCA9IHRoaXMub3RoZXJDYWxsUmVqZWN0ZWQ7XG4gIH1cbn1cblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZXNvbHZlKHRoaXMucHJvbWlzZSwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25GdWxmaWxsZWQsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZWplY3QodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB1bndyYXAodGhpcy5wcm9taXNlLCB0aGlzLm9uUmVqZWN0ZWQsIHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIHVud3JhcChwcm9taXNlLCBmdW5jLCB2YWx1ZSkge1xuICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuVmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IHByb21pc2UpIHtcbiAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5oYW5kbGVycy5yZXNvbHZlID0gZnVuY3Rpb24gKHNlbGYsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaChnZXRUaGVuLCB2YWx1ZSk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChzZWxmLCByZXN1bHQudmFsdWUpO1xuICB9XG4gIHZhciB0aGVuYWJsZSA9IHJlc3VsdC52YWx1ZTtcblxuICBpZiAodGhlbmFibGUpIHtcbiAgICBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgc2VsZi5vdXRjb21lID0gdmFsdWU7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB2YXIgbGVuID0gc2VsZi5xdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgc2VsZi5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59O1xuaGFuZGxlcnMucmVqZWN0ID0gZnVuY3Rpb24gKHNlbGYsIGVycm9yKSB7XG4gIHNlbGYuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgc2VsZi5vdXRjb21lID0gZXJyb3I7XG4gIHZhciBpID0gLTE7XG4gIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHNlbGYucXVldWVbaV0uY2FsbFJlamVjdGVkKGVycm9yKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5cbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGFjY2VzcyB0aGUgYWNjZXNzb3Igb25jZSBhcyByZXF1aXJlZCBieSB0aGUgc3BlY1xuICB2YXIgdGhlbiA9IG9iaiAmJiBvYmoudGhlbjtcbiAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXBweVRoZW4oKSB7XG4gICAgICB0aGVuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSkge1xuICAvLyBFaXRoZXIgZnVsZmlsbCwgcmVqZWN0IG9yIHJlamVjdCB3aXRoIGVycm9yXG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gb25FcnJvcih2YWx1ZSkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBoYW5kbGVycy5yZWplY3Qoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdWNjZXNzKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlc29sdmUoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9VbndyYXAoKSB7XG4gICAgdGhlbmFibGUob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0cnlUb1Vud3JhcCk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgb25FcnJvcihyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGZ1bmMsIHZhbHVlKSB7XG4gIHZhciBvdXQgPSB7fTtcbiAgdHJ5IHtcbiAgICBvdXQudmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICBvdXQuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgb3V0LnN0YXR1cyA9ICdlcnJvcic7XG4gICAgb3V0LnZhbHVlID0gZTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5Qcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBoYW5kbGVycy5yZXNvbHZlKG5ldyB0aGlzKElOVEVSTkFMKSwgdmFsdWUpO1xufVxuXG5Qcm9taXNlLnJlamVjdCA9IHJlamVjdDtcbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG4gIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbn1cblxuUHJvbWlzZS5hbGwgPSBhbGw7XG5mdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgcmVzb2x2ZWQgPSAwO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgYWxsUmVzb2x2ZXIoaXRlcmFibGVbaV0sIGkpO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xuICBmdW5jdGlvbiBhbGxSZXNvbHZlcih2YWx1ZSwgaSkge1xuICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlRnJvbUFsbCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlc29sdmVGcm9tQWxsKG91dFZhbHVlKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvdXRWYWx1ZTtcbiAgICAgIGlmICgrK3Jlc29sdmVkID09PSBsZW4gJiYgIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblByb21pc2UucmFjZSA9IHJhY2U7XG5mdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICByZXNvbHZlcihpdGVyYWJsZVtpXSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIHJlc29sdmVyKHZhbHVlKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbn0se1wiMVwiOjF9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbmlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBfZGVyZXFfKDIpO1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiMlwiOjJ9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRJREIoKSB7XG4gICAgLyogZ2xvYmFsIGluZGV4ZWREQix3ZWJraXRJbmRleGVkREIsbW96SW5kZXhlZERCLE9JbmRleGVkREIsbXNJbmRleGVkREIgKi9cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3ZWJraXRJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Via2l0SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW96SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1vekluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIE9JbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gT0luZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1zSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1zSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG52YXIgaWRiID0gZ2V0SURCKCk7XG5cbmZ1bmN0aW9uIGlzSW5kZXhlZERCVmFsaWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBJbmRleGVkREI7IGZhbGwgYmFjayB0byB2ZW5kb3ItcHJlZml4ZWQgdmVyc2lvbnNcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICBpZiAoIWlkYiB8fCAhaWRiLm9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaW1pYyBQb3VjaERCIGhlcmU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIHRlc3QgZm9yIG9wZW5EYXRhYmFzZSBiZWNhdXNlIElFIE1vYmlsZSBpZGVudGlmaWVzIGl0c2VsZlxuICAgICAgICAvLyBhcyBTYWZhcmkuIE9oIHRoZSBsdWx6Li4uXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IHR5cGVvZiBvcGVuRGF0YWJhc2UgIT09ICd1bmRlZmluZWQnICYmIC8oU2FmYXJpfGlQaG9uZXxpUGFkfGlQb2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQmxhY2tCZXJyeS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xuXG4gICAgICAgIHZhciBoYXNGZXRjaCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZXRjaC50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZScpICE9PSAtMTtcblxuICAgICAgICAvLyBTYWZhcmkgPDEwLjEgZG9lcyBub3QgbWVldCBvdXIgcmVxdWlyZW1lbnRzIGZvciBJREIgc3VwcG9ydFxuICAgICAgICAvLyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2lzc3Vlcy81NTcyKS5cbiAgICAgICAgLy8gU2FmYXJpIDEwLjEgc2hpcHBlZCB3aXRoIGZldGNoLCB3ZSBjYW4gdXNlIHRoYXQgdG8gZGV0ZWN0IGl0LlxuICAgICAgICAvLyBOb3RlOiB0aGlzIGNyZWF0ZXMgaXNzdWVzIHdpdGggYHdpbmRvdy5mZXRjaGAgcG9seWZpbGxzIGFuZFxuICAgICAgICAvLyBvdmVycmlkZXM7IHNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlL2lzc3Vlcy84NTZcbiAgICAgICAgcmV0dXJuICghaXNTYWZhcmkgfHwgaGFzRmV0Y2gpICYmIHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIC8vIHNvbWUgb3V0ZGF0ZWQgaW1wbGVtZW50YXRpb25zIG9mIElEQiB0aGF0IGFwcGVhciBvbiBTYW1zdW5nXG4gICAgICAgIC8vIGFuZCBIVEMgQW5kcm9pZCBkZXZpY2VzIDw0LjQgYXJlIG1pc3NpbmcgSURCS2V5UmFuZ2VcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTI4XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzI3MlxuICAgICAgICB0eXBlb2YgSURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4vLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgICAvKiBnbG9iYWwgQmxvYkJ1aWxkZXIsTVNCbG9iQnVpbGRlcixNb3pCbG9iQnVpbGRlcixXZWJLaXRCbG9iQnVpbGRlciAqL1xuICAgIHBhcnRzID0gcGFydHMgfHwgW107XG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBCdWlsZGVyID0gdHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IEJsb2JCdWlsZGVyIDogdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6IHR5cGVvZiBNb3pCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNb3pCbG9iQnVpbGRlciA6IFdlYktpdEJsb2JCdWlsZGVyO1xuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBCdWlsZGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYXBwZW5kKHBhcnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHByb3BlcnRpZXMudHlwZSk7XG4gICAgfVxufVxuXG4vLyBUaGlzIGlzIENvbW1vbkpTIGJlY2F1c2UgbGllIGlzIGFuIGV4dGVybmFsIGRlcGVuZGVuY3ksIHNvIFJvbGx1cFxuLy8gY2FuIGp1c3QgaWdub3JlIGl0LlxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEluIHRoZSBcIm5vcHJvbWlzZXNcIiBidWlsZCB0aGlzIHdpbGwganVzdCB0aHJvdyBpZiB5b3UgZG9uJ3QgaGF2ZVxuICAgIC8vIGEgZ2xvYmFsIHByb21pc2Ugb2JqZWN0LCBidXQgaXQgd291bGQgdGhyb3cgYW55d2F5IGxhdGVyLlxuICAgIF9kZXJlcV8oMyk7XG59XG52YXIgUHJvbWlzZSQxID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4oY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZXJyb3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlW1wiY2F0Y2hcIl0oZXJyb3JDYWxsYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gICAgLy8gQ2FzdCB0aGUga2V5IHRvIGEgc3RyaW5nLCBhcyB0aGF0J3MgYWxsIHdlIGNhbiBzZXQgYXMgYSBrZXkuXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihrZXkgKyAnIHVzZWQgYXMgYSBrZXksIGJ1dCBpdCBpcyBub3QgYSBzdHJpbmcuJyk7XG4gICAgICAgIGtleSA9IFN0cmluZyhrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGdldENhbGxiYWNrKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbn1cblxuLy8gU29tZSBjb2RlIG9yaWdpbmFsbHkgZnJvbSBhc3luY19zdG9yYWdlLmpzIGluXG4vLyBbR2FpYV0oaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEtYjJnL2dhaWEpLlxuXG52YXIgREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSA9ICdsb2NhbC1mb3JhZ2UtZGV0ZWN0LWJsb2Itc3VwcG9ydCc7XG52YXIgc3VwcG9ydHNCbG9icyA9IHZvaWQgMDtcbnZhciBkYkNvbnRleHRzID0ge307XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vLyBUcmFuc2FjdGlvbiBNb2Rlc1xudmFyIFJFQURfT05MWSA9ICdyZWFkb25seSc7XG52YXIgUkVBRF9XUklURSA9ICdyZWFkd3JpdGUnO1xuXG4vLyBUcmFuc2Zvcm0gYSBiaW5hcnkgc3RyaW5nIHRvIGFuIGFycmF5IGJ1ZmZlciwgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIHdlaXJkIHN0dWZmIGhhcHBlbnMgd2hlbiB5b3UgdHJ5IHRvIHdvcmsgd2l0aCB0aGUgYmluYXJ5IHN0cmluZyBkaXJlY3RseS5cbi8vIEl0IGlzIGtub3duLlxuLy8gRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0OTY3NjQ3LyAoY29udGludWVzIG9uIG5leHQgbGluZSlcbi8vIGVuY29kZS1kZWNvZGUtaW1hZ2Utd2l0aC1iYXNlNjQtYnJlYWtzLWltYWdlICgyMDEzLTA0LTIxKVxuZnVuY3Rpb24gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYmluKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJpbi5sZW5ndGg7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gYmluLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5cbi8vXG4vLyBCbG9icyBhcmUgbm90IHN1cHBvcnRlZCBpbiBhbGwgdmVyc2lvbnMgb2YgSW5kZXhlZERCLCBub3RhYmx5XG4vLyBDaHJvbWUgPDM3IGFuZCBBbmRyb2lkIDw1LiBJbiB0aG9zZSB2ZXJzaW9ucywgc3RvcmluZyBhIGJsb2Igd2lsbCB0aHJvdy5cbi8vXG4vLyBWYXJpb3VzIG90aGVyIGJsb2IgYnVncyBleGlzdCBpbiBDaHJvbWUgdjM3LTQyIChpbmNsdXNpdmUpLlxuLy8gRGV0ZWN0aW5nIHRoZW0gaXMgZXhwZW5zaXZlIGFuZCBjb25mdXNpbmcgdG8gdXNlcnMsIGFuZCBDaHJvbWUgMzctNDJcbi8vIGlzIGF0IHZlcnkgbG93IHVzYWdlIHdvcmxkd2lkZSwgc28gd2UgZG8gYSBoYWNreSB1c2VyQWdlbnQgY2hlY2sgaW5zdGVhZC5cbi8vXG4vLyBjb250ZW50LXR5cGUgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDA4MTIwXG4vLyA0MDQgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3OTE2XG4vLyBGaWxlUmVhZGVyIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzgzNlxuLy9cbi8vIENvZGUgYm9ycm93ZWQgZnJvbSBQb3VjaERCLiBTZWU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL25vZGVfbW9kdWxlcy9wb3VjaGRiLWFkYXB0ZXItaWRiL3NyYy9ibG9iU3VwcG9ydC5qc1xuLy9cbmZ1bmN0aW9uIF9jaGVja0Jsb2JTdXBwb3J0V2l0aG91dENhY2hpbmcoaWRiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIHR4biA9IGlkYi50cmFuc2FjdGlvbihERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFLCBSRUFEX1dSSVRFKTtcbiAgICAgICAgdmFyIGJsb2IgPSBjcmVhdGVCbG9iKFsnJ10pO1xuICAgICAgICB0eG4ub2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSkucHV0KGJsb2IsICdrZXknKTtcblxuICAgICAgICB0eG4ub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gYWJvcnRzIG5vdyBpdHMgZHVlIHRvIG5vdCBiZWluZyBhYmxlIHRvXG4gICAgICAgICAgICAvLyB3cml0ZSB0byB0aGUgZGF0YWJhc2UsIGxpa2VseSBkdWUgdG8gdGhlIGRpc2sgYmVpbmcgZnVsbFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHR4bi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcbiAgICAgICAgICAgIC8vIE1TIEVkZ2UgcHJldGVuZHMgdG8gYmUgQ2hyb21lIDQyOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9oaDg2OTMwMSUyOHY9dnMuODUlMjkuYXNweFxuICAgICAgICAgICAgcmVzb2x2ZShtYXRjaGVkRWRnZSB8fCAhbWF0Y2hlZENocm9tZSB8fCBwYXJzZUludChtYXRjaGVkQ2hyb21lWzFdLCAxMCkgPj0gNDMpO1xuICAgICAgICB9O1xuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yLCBzbyBhc3N1bWUgdW5zdXBwb3J0ZWRcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnQoaWRiKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Jsb2JzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKHN1cHBvcnRzQmxvYnMpO1xuICAgIH1cbiAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN1cHBvcnRzQmxvYnMgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQmxvYnM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBDcmVhdGUgYSBkZWZlcnJlZCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSB7fTtcblxuICAgIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIC8vIEVucXVldWUgdGhlIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnB1c2goZGVmZXJyZWRPcGVyYXRpb24pO1xuXG4gICAgLy8gQ2hhaW4gaXRzIHByb21pc2UgdG8gdGhlIGRhdGFiYXNlIHJlYWRpbmVzcy5cbiAgICBpZiAoIWRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYkNvbnRleHQuZGJSZWFkeSA9IGRiQ29udGV4dC5kYlJlYWR5LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVzb2x2ZSBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlKCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycikge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIERlcXVldWUgYSBkZWZlcnJlZCBvcGVyYXRpb24uXG4gICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0gZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wb3AoKTtcblxuICAgIC8vIFJlamVjdCBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZWplY3QoZXJyKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHVwZ3JhZGVOZWVkZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gfHwgY3JlYXRlRGJDb250ZXh0KCk7XG5cbiAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgICAgICAgICBkYkluZm8uZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGJJbmZvLmRiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYkFyZ3MgPSBbZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBkYkFyZ3MucHVzaChkYkluZm8udmVyc2lvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3BlbnJlcSA9IGlkYi5vcGVuLmFwcGx5KGlkYiwgZGJBcmdzKTtcblxuICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgb3BlbnJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IG9wZW5yZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vbGRWZXJzaW9uIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHdoZW4gc3VwcG9ydCBmb3IgYmxvYiBzaGltcyB3YXMgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdDb25zdHJhaW50RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyAnIGhhcyBiZWVuIHVwZ3JhZGVkIGZyb20gdmVyc2lvbiAnICsgZS5vbGRWZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBlLm5ld1ZlcnNpb24gKyAnLCBidXQgdGhlIHN0b3JhZ2UgXCInICsgZGJJbmZvLnN0b3JlTmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5yZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKG9wZW5yZXEucmVzdWx0KTtcbiAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKGRiSW5mbyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbykge1xuICAgIHJldHVybiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHRydWUpO1xufVxuXG5mdW5jdGlvbiBfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgZGVmYXVsdFZlcnNpb24pIHtcbiAgICBpZiAoIWRiSW5mby5kYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaXNOZXdTdG9yZSA9ICFkYkluZm8uZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhkYkluZm8uc3RvcmVOYW1lKTtcbiAgICB2YXIgaXNEb3duZ3JhZGUgPSBkYkluZm8udmVyc2lvbiA8IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIHZhciBpc1VwZ3JhZGUgPSBkYkluZm8udmVyc2lvbiA+IGRiSW5mby5kYi52ZXJzaW9uO1xuXG4gICAgaWYgKGlzRG93bmdyYWRlKSB7XG4gICAgICAgIC8vIElmIHRoZSB2ZXJzaW9uIGlzIG5vdCB0aGUgZGVmYXVsdCBvbmVcbiAgICAgICAgLy8gdGhlbiB3YXJuIGZvciBpbXBvc3NpYmxlIGRvd25ncmFkZS5cbiAgICAgICAgaWYgKGRiSW5mby52ZXJzaW9uICE9PSBkZWZhdWx0VmVyc2lvbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZGF0YWJhc2UgXCInICsgZGJJbmZvLm5hbWUgKyAnXCInICsgXCIgY2FuJ3QgYmUgZG93bmdyYWRlZCBmcm9tIHZlcnNpb24gXCIgKyBkYkluZm8uZGIudmVyc2lvbiArICcgdG8gdmVyc2lvbiAnICsgZGJJbmZvLnZlcnNpb24gKyAnLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsaWduIHRoZSB2ZXJzaW9ucyB0byBwcmV2ZW50IGVycm9ycy5cbiAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoaXNVcGdyYWRlIHx8IGlzTmV3U3RvcmUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHN0b3JlIGlzIG5ldyB0aGVuIGluY3JlbWVudCB0aGUgdmVyc2lvbiAoaWYgbmVlZGVkKS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYW4gXCJ1cGdyYWRlbmVlZGVkXCIgZXZlbnQgd2hpY2ggaXMgcmVxdWlyZWRcbiAgICAgICAgLy8gZm9yIGNyZWF0aW5nIGEgc3RvcmUuXG4gICAgICAgIGlmIChpc05ld1N0b3JlKSB7XG4gICAgICAgICAgICB2YXIgaW5jVmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uICsgMTtcbiAgICAgICAgICAgIGlmIChpbmNWZXJzaW9uID4gZGJJbmZvLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBkYkluZm8udmVyc2lvbiA9IGluY1ZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGVuY29kZSBhIGJsb2IgZm9yIGluZGV4ZWRkYiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBibG9ic1xuZnVuY3Rpb24gX2VuY29kZUJsb2IoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBiYXNlNjQgPSBidG9hKGUudGFyZ2V0LnJlc3VsdCB8fCAnJyk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBfX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YTogYmFzZTY0LFxuICAgICAgICAgICAgICAgIHR5cGU6IGJsb2IudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoYmxvYik7XG4gICAgfSk7XG59XG5cbi8vIGRlY29kZSBhbiBlbmNvZGVkIGJsb2JcbmZ1bmN0aW9uIF9kZWNvZGVCbG9iKGVuY29kZWRCbG9iKSB7XG4gICAgdmFyIGFycmF5QnVmZiA9IF9iaW5TdHJpbmdUb0FycmF5QnVmZmVyKGF0b2IoZW5jb2RlZEJsb2IuZGF0YSkpO1xuICAgIHJldHVybiBjcmVhdGVCbG9iKFthcnJheUJ1ZmZdLCB7IHR5cGU6IGVuY29kZWRCbG9iLnR5cGUgfSk7XG59XG5cbi8vIGlzIHRoaXMgb25lIG9mIG91ciBmYW5jeSBlbmNvZGVkIGJsb2JzP1xuZnVuY3Rpb24gX2lzRW5jb2RlZEJsb2IodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuX19sb2NhbF9mb3JhZ2VfZW5jb2RlZF9ibG9iO1xufVxuXG4vLyBTcGVjaWFsaXplIHRoZSBkZWZhdWx0IGByZWFkeSgpYCBmdW5jdGlvbiBieSBtYWtpbmcgaXQgZGVwZW5kZW50XG4vLyBvbiB0aGUgY3VycmVudCBkYXRhYmFzZSBvcGVyYXRpb25zLiBUaHVzLCB0aGUgZHJpdmVyIHdpbGwgYmUgYWN0dWFsbHlcbi8vIHJlYWR5IHdoZW4gaXQncyBiZWVuIGluaXRpYWxpemVkIChkZWZhdWx0KSAqYW5kKiB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuLy8gb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UgKGluaXRpYXRlZCBieSBzb21lIG90aGVyIGluc3RhbmNlcykuXG5mdW5jdGlvbiBfZnVsbHlSZWFkeShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5faW5pdFJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW3NlbGYuX2RiSW5mby5uYW1lXTtcblxuICAgICAgICBpZiAoZGJDb250ZXh0ICYmIGRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGJDb250ZXh0LmRiUmVhZHk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gVHJ5IHRvIGVzdGFibGlzaCBhIG5ldyBkYiBjb25uZWN0aW9uIHRvIHJlcGxhY2UgdGhlXG4vLyBjdXJyZW50IG9uZSB3aGljaCBpcyBicm9rZW4gKGkuZS4gZXhwZXJpZW5jaW5nXG4vLyBJbnZhbGlkU3RhdGVFcnJvciB3aGlsZSBjcmVhdGluZyBhIHRyYW5zYWN0aW9uKS5cbmZ1bmN0aW9uIF90cnlSZWNvbm5lY3QoZGJJbmZvKSB7XG4gICAgX2RlZmVyUmVhZGluZXNzKGRiSW5mbyk7XG5cbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG4gICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgaWYgKGZvcmFnZS5fZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRiSW5mby5kYiA9IG51bGw7XG5cbiAgICByZXR1cm4gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiO1xuICAgICAgICBpZiAoX2lzVXBncmFkZU5lZWRlZChkYkluZm8pKSB7XG4gICAgICAgICAgICAvLyBSZW9wZW4gdGhlIGRhdGFiYXNlIGZvciB1cGdyYWRpbmcuXG4gICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYjtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAvLyBzdG9yZSB0aGUgbGF0ZXN0IGRiIHJlZmVyZW5jZVxuICAgICAgICAvLyBpbiBjYXNlIHRoZSBkYiB3YXMgdXBncmFkZWRcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yYWdlc1tpXS5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIH1cbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cblxuLy8gRkYgZG9lc24ndCBsaWtlIFByb21pc2VzIChtaWNyby10YXNrcykgYW5kIElEREIgc3RvcmUgb3BlcmF0aW9ucyxcbi8vIHNvIHdlIGhhdmUgdG8gZG8gaXQgd2l0aCBjYWxsYmFja3NcbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zYWN0aW9uKGRiSW5mbywgbW9kZSwgY2FsbGJhY2ssIHJldHJpZXMpIHtcbiAgICBpZiAocmV0cmllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHJpZXMgPSAxO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHZhciB0eCA9IGRiSW5mby5kYi50cmFuc2FjdGlvbihkYkluZm8uc3RvcmVOYW1lLCBtb2RlKTtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdHgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAocmV0cmllcyA+IDAgJiYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdJbnZhbGlkU3RhdGVFcnJvcicgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJykpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghZGJJbmZvLmRiIHx8IGVyci5uYW1lID09PSAnTm90Rm91bmRFcnJvcicgJiYgIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpICYmIGRiSW5mby52ZXJzaW9uIDw9IGRiSW5mby5kYi52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBkYiB2ZXJzaW9uLCB0byBjcmVhdGUgdGhlIG5ldyBPYmplY3RTdG9yZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZW9wZW4gdGhlIGRhdGFiYXNlIGZvciB1cGdyYWRpbmcuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90cnlSZWNvbm5lY3QoZGJJbmZvKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcyAtIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGJDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFJ1bm5pbmcgbG9jYWxGb3JhZ2VzIHNoYXJpbmcgYSBkYXRhYmFzZS5cbiAgICAgICAgZm9yYWdlczogW10sXG4gICAgICAgIC8vIFNoYXJlZCBkYXRhYmFzZS5cbiAgICAgICAgZGI6IG51bGwsXG4gICAgICAgIC8vIERhdGFiYXNlIHJlYWRpbmVzcyAocHJvbWlzZSkuXG4gICAgICAgIGRiUmVhZHk6IG51bGwsXG4gICAgICAgIC8vIERlZmVycmVkIG9wZXJhdGlvbnMgb24gdGhlIGRhdGFiYXNlLlxuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbnM6IFtdXG4gICAgfTtcbn1cblxuLy8gT3BlbiB0aGUgSW5kZXhlZERCIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3Rcbi8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZShvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYkluZm8gPSB7XG4gICAgICAgIGRiOiBudWxsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBjb250ZXh0IG9mIHRoZSBkYXRhYmFzZTtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyAuLi5vciBjcmVhdGUgYSBuZXcgY29udGV4dC5cbiAgICBpZiAoIWRiQ29udGV4dCkge1xuICAgICAgICBkYkNvbnRleHQgPSBjcmVhdGVEYkNvbnRleHQoKTtcbiAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIG5ldyBjb250ZXh0IGluIHRoZSBnbG9iYWwgY29udGFpbmVyLlxuICAgICAgICBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSA9IGRiQ29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBpdHNlbGYgYXMgYSBydW5uaW5nIGxvY2FsRm9yYWdlIGluIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gICAgZGJDb250ZXh0LmZvcmFnZXMucHVzaChzZWxmKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIHdpdGggdGhlIHNwZWNpYWxpemVkIG9uZS5cbiAgICBpZiAoIXNlbGYuX2luaXRSZWFkeSkge1xuICAgICAgICBzZWxmLl9pbml0UmVhZHkgPSBzZWxmLnJlYWR5O1xuICAgICAgICBzZWxmLnJlYWR5ID0gX2Z1bGx5UmVhZHk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIGluaXRpYWxpemF0aW9uIHN0YXRlcyBvZiB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMuXG4gICAgdmFyIGluaXRQcm9taXNlcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gaWdub3JlRXJyb3JzKCkge1xuICAgICAgICAvLyBEb24ndCBoYW5kbGUgZXJyb3JzIGhlcmUsXG4gICAgICAgIC8vIGp1c3QgbWFrZXMgc3VyZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYkNvbnRleHQuZm9yYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgZm9yYWdlID0gZGJDb250ZXh0LmZvcmFnZXNbal07XG4gICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHdhaXQgZm9yIGl0c2VsZi4uLlxuICAgICAgICAgICAgaW5pdFByb21pc2VzLnB1c2goZm9yYWdlLl9pbml0UmVhZHkoKVtcImNhdGNoXCJdKGlnbm9yZUVycm9ycykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGFrZSBhIHNuYXBzaG90IG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzLnNsaWNlKDApO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgY29ubmVjdGlvbiBwcm9jZXNzIG9ubHkgd2hlblxuICAgIC8vIGFsbCB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMgYXJlbid0IHBlbmRpbmcuXG4gICAgcmV0dXJuIFByb21pc2UkMS5hbGwoaW5pdFByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiO1xuICAgICAgICAvLyBHZXQgdGhlIGNvbm5lY3Rpb24gb3Igb3BlbiBhIG5ldyBvbmUgd2l0aG91dCB1cGdyYWRlLlxuICAgICAgICByZXR1cm4gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiO1xuICAgICAgICBpZiAoX2lzVXBncmFkZU5lZWRlZChkYkluZm8sIHNlbGYuX2RlZmF1bHRDb25maWcudmVyc2lvbikpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgICAgIC8vIFNoYXJlIHRoZSBmaW5hbCBjb25uZWN0aW9uIGFtb25nc3QgcmVsYXRlZCBsb2NhbEZvcmFnZXMuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZm9yYWdlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNba107XG4gICAgICAgICAgICBpZiAoZm9yYWdlICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VsZiBpcyBhbHJlYWR5IHVwLXRvLWRhdGUuXG4gICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBkYkluZm8uZGI7XG4gICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8udmVyc2lvbiA9IGRiSW5mby52ZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW0oa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5nZXQoa2V5KTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0VuY29kZWRCbG9iKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBzdG9yZWQgaW4gZGF0YWJhc2UuXG5mdW5jdGlvbiBpdGVyYXRlKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbkN1cnNvcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlcmF0aW9uTnVtYmVyID0gMTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc0VuY29kZWRCbG9iKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9kZWNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yKHZhbHVlLCBjdXJzb3Iua2V5LCBpdGVyYXRpb25OdW1iZXIrKyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpdGVyYXRvciBjYWxsYmFjayByZXR1cm5zIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChub24tYHVuZGVmaW5lZGApIHZhbHVlLCB0aGVuIHdlIHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaXRlcmF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JbXCJjb250aW51ZVwiXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGRiSW5mbztcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgaWYgKHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnQoZGJJbmZvLmRiKS50aGVuKGZ1bmN0aW9uIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYlN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2VuY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZWFzb24gd2UgZG9uJ3QgX3NhdmVfIG51bGwgaXMgYmVjYXVzZSBJRSAxMCBkb2VzXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBzdXBwb3J0IHNhdmluZyB0aGUgYG51bGxgIHR5cGUgaW4gSW5kZXhlZERCLiBIb3dcbiAgICAgICAgICAgICAgICAgICAgLy8gaXJvbmljLCBnaXZlbiB0aGUgYnVnIGJlbG93IVxuICAgICAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8xNjFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhc3QgdG8gdW5kZWZpbmVkIHNvIHRoZSB2YWx1ZSBwYXNzZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrL3Byb21pc2UgaXMgdGhlIHNhbWUgYXMgd2hhdCBvbmUgd291bGQgZ2V0IG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgYGdldEl0ZW0oKWAgbGF0ZXIuIFRoaXMgbGVhZHMgdG8gc29tZSB3ZWlyZG5lc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChzZXRJdGVtKCdmb28nLCB1bmRlZmluZWQpIHdpbGwgcmV0dXJuIGBudWxsYCksIGJ1dFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3QgbXkgZmF1bHQgbG9jYWxTdG9yYWdlIGlzIG91ciBiYXNlbGluZSBhbmQgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3ZWlyZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSB1c2UgYSBHcnVudCB0YXNrIHRvIG1ha2UgdGhpcyBzYWZlIGZvciBJRSBhbmQgc29tZVxuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJzaW9ucyBvZiBBbmRyb2lkIChpbmNsdWRpbmcgdGhvc2UgdXNlZCBieSBDb3Jkb3ZhKS5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm9ybWFsbHkgSUUgd29uJ3QgbGlrZSBgLmRlbGV0ZSgpYCBhbmQgd2lsbCBpbnNpc3Qgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgYFsnZGVsZXRlJ10oKWAsIGJ1dCB3ZSBoYXZlIGEgYnVpbGQgc3RlcCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeGVzIHRoaXMgZm9yIHVzIG5vdy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlW1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdpbGwgYmUgYWxzbyBiZSBhYm9ydGVkIGlmIHdlJ3ZlIGV4Y2VlZGVkIG91ciBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlLlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbGVhcihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5jb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleShuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChuIDwgMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZHZhbmNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBtZWFucyB0aGVyZSB3ZXJlbid0IGVub3VnaCBrZXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRoZSBmaXJzdCBrZXksIHJldHVybiBpdCBpZiB0aGF0J3Mgd2hhdCB0aGV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2FudGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWR2YW5jZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBhc2sgdGhlIGN1cnNvciB0byBza2lwIGFoZWFkIG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuYWR2YW5jZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHdlIGdldCBoZXJlLCB3ZSd2ZSBnb3QgdGhlIG50aCBrZXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5LZXlDdXJzb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpc0N1cnJlbnREYiA9IG9wdGlvbnMubmFtZSA9PT0gY3VycmVudENvbmZpZy5uYW1lICYmIHNlbGYuX2RiSW5mby5kYjtcblxuICAgICAgICB2YXIgZGJQcm9taXNlID0gaXNDdXJyZW50RGIgPyBQcm9taXNlJDEucmVzb2x2ZShzZWxmLl9kYkluZm8uZGIpIDogX2dldE9yaWdpbmFsQ29ubmVjdGlvbihvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG4gICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvcmFnZXNbaV0uX2RiSW5mby5kYiA9IGRiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgX2RlZmVyUmVhZGluZXNzKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJvcERCUHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gaWRiLmRlbGV0ZURhdGFiYXNlKG9wdGlvbnMubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSByZXEub25ibG9ja2VkID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkcm9wREJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UuX2RiSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9yZWplY3RSZWFkaW5lc3Mob3B0aW9ucywgZXJyKSB8fCBQcm9taXNlJDEucmVzb2x2ZSgpKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKG9wdGlvbnMuc3RvcmVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZlcnNpb24gPSBkYi52ZXJzaW9uICsgMTtcblxuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBuZXdWZXJzaW9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wT2JqZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gaWRiLm9wZW4ob3B0aW9ucy5uYW1lLCBuZXdWZXJzaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5kZWxldGVPYmplY3RTdG9yZShvcHRpb25zLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcE9iamVjdFByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm9yYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9mb3JhZ2UyID0gZm9yYWdlc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JhZ2UyLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UyLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIGFzeW5jU3RvcmFnZSA9IHtcbiAgICBfZHJpdmVyOiAnYXN5bmNTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSxcbiAgICBfc3VwcG9ydDogaXNJbmRleGVkREJWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gICAgY2xlYXI6IGNsZWFyLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGtleToga2V5LFxuICAgIGtleXM6IGtleXMsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2Vcbn07XG5cbmZ1bmN0aW9uIGlzV2ViU1FMVmFsaWQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvcGVuRGF0YWJhc2UgPT09ICdmdW5jdGlvbic7XG59XG5cbi8vIFNhZGx5LCB0aGUgYmVzdCB3YXkgdG8gc2F2ZSBiaW5hcnkgZGF0YSBpbiBXZWJTUUwvbG9jYWxTdG9yYWdlIGlzIHNlcmlhbGl6aW5nXG4vLyBpdCB0byBCYXNlNjQsIHNvIHRoaXMgaXMgaG93IHdlIHN0b3JlIGl0IHRvIHByZXZlbnQgdmVyeSBzdHJhbmdlIGVycm9ycyB3aXRoIGxlc3Ncbi8vIHZlcmJvc2Ugd2F5cyBvZiBiaW5hcnkgPC0+IHN0cmluZyBkYXRhIHN0b3JhZ2UuXG52YXIgQkFTRV9DSEFSUyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxudmFyIEJMT0JfVFlQRV9QUkVGSVggPSAnfn5sb2NhbF9mb3JhZ2VfdHlwZX4nO1xudmFyIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVggPSAvXn5+bG9jYWxfZm9yYWdlX3R5cGV+KFtefl0rKX4vO1xuXG52YXIgU0VSSUFMSVpFRF9NQVJLRVIgPSAnX19sZnNjX186JztcbnZhciBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEggPSBTRVJJQUxJWkVEX01BUktFUi5sZW5ndGg7XG5cbi8vIE9NRyB0aGUgc2VyaWFsaXphdGlvbnMhXG52YXIgVFlQRV9BUlJBWUJVRkZFUiA9ICdhcmJmJztcbnZhciBUWVBFX0JMT0IgPSAnYmxvYic7XG52YXIgVFlQRV9JTlQ4QVJSQVkgPSAnc2kwOCc7XG52YXIgVFlQRV9VSU5UOEFSUkFZID0gJ3VpMDgnO1xudmFyIFRZUEVfVUlOVDhDTEFNUEVEQVJSQVkgPSAndWljOCc7XG52YXIgVFlQRV9JTlQxNkFSUkFZID0gJ3NpMTYnO1xudmFyIFRZUEVfSU5UMzJBUlJBWSA9ICdzaTMyJztcbnZhciBUWVBFX1VJTlQxNkFSUkFZID0gJ3VyMTYnO1xudmFyIFRZUEVfVUlOVDMyQVJSQVkgPSAndWkzMic7XG52YXIgVFlQRV9GTE9BVDMyQVJSQVkgPSAnZmwzMic7XG52YXIgVFlQRV9GTE9BVDY0QVJSQVkgPSAnZmw2NCc7XG52YXIgVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEggPSBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEggKyBUWVBFX0FSUkFZQlVGRkVSLmxlbmd0aDtcblxudmFyIHRvU3RyaW5nJDEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKSB7XG4gICAgLy8gRmlsbCB0aGUgc3RyaW5nIGludG8gYSBBcnJheUJ1ZmZlci5cbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGggKiAwLjc1O1xuICAgIHZhciBsZW4gPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgaTtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDJdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpO1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgZW5jb2RlZDEgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpXSk7XG4gICAgICAgIGVuY29kZWQyID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDFdKTtcbiAgICAgICAgZW5jb2RlZDMgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgMl0pO1xuICAgICAgICBlbmNvZGVkNCA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAzXSk7XG5cbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLy8gQ29udmVydHMgYSBidWZmZXIgdG8gYSBzdHJpbmcgdG8gc3RvcmUsIHNlcmlhbGl6ZWQsIGluIHRoZSBiYWNrZW5kXG4vLyBzdG9yYWdlIGxpYnJhcnkuXG5mdW5jdGlvbiBidWZmZXJUb1N0cmluZyhidWZmZXIpIHtcbiAgICAvLyBiYXNlNjQtYXJyYXlidWZmZXJcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIHZhciBiYXNlNjRTdHJpbmcgPSAnJztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAvKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1soYnl0ZXNbaV0gJiAzKSA8PCA0IHwgYnl0ZXNbaSArIDFdID4+IDRdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1soYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpICsgMl0gPj4gNl07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZXMubGVuZ3RoICUgMyA9PT0gMikge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyaW5nKDAsIGJhc2U2NFN0cmluZy5sZW5ndGggLSAxKSArICc9JztcbiAgICB9IGVsc2UgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDEpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMikgKyAnPT0nO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjRTdHJpbmc7XG59XG5cbi8vIFNlcmlhbGl6ZSBhIHZhbHVlLCBhZnRlcndhcmRzIGV4ZWN1dGluZyBhIGNhbGxiYWNrICh3aGljaCB1c3VhbGx5XG4vLyBpbnN0cnVjdHMgdGhlIGBzZXRJdGVtKClgIGNhbGxiYWNrL3Byb21pc2UgdG8gYmUgZXhlY3V0ZWQpLiBUaGlzIGlzIGhvd1xuLy8gd2Ugc3RvcmUgYmluYXJ5IGRhdGEgd2l0aCBsb2NhbFN0b3JhZ2UuXG5mdW5jdGlvbiBzZXJpYWxpemUodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9ICcnO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSB0b1N0cmluZyQxLmNhbGwodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENhbm5vdCB1c2UgYHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXJgIG9yIHN1Y2ggaGVyZSwgYXMgdGhlc2VcbiAgICAvLyBjaGVja3MgZmFpbCB3aGVuIHJ1bm5pbmcgdGhlIHRlc3RzIHVzaW5nIGNhc3Blci5qcy4uLlxuICAgIC8vXG4gICAgLy8gVE9ETzogU2VlIHdoeSB0aG9zZSB0ZXN0cyBmYWlsIGFuZCB1c2UgYSBiZXR0ZXIgc29sdXRpb24uXG4gICAgaWYgKHZhbHVlICYmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScgfHwgdmFsdWUuYnVmZmVyICYmIHRvU3RyaW5nJDEuY2FsbCh2YWx1ZS5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSkge1xuICAgICAgICAvLyBDb252ZXJ0IGJpbmFyeSBhcnJheXMgdG8gYSBzdHJpbmcgYW5kIHByZWZpeCB0aGUgc3RyaW5nIHdpdGhcbiAgICAgICAgLy8gYSBzcGVjaWFsIG1hcmtlci5cbiAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgdmFyIG1hcmtlciA9IFNFUklBTElaRURfTUFSS0VSO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICBidWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0FSUkFZQlVGRkVSO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWUuYnVmZmVyO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UOEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UOENMQU1QRURBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQxNkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0ZMT0FUMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDY0QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0ZMT0FUNjRBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHR5cGUgZm9yIEJpbmFyeUFycmF5JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sobWFya2VyICsgYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAvLyBDb252ZXIgdGhlIGJsb2IgdG8gYSBiaW5hcnlBcnJheSBhbmQgdGhlbiB0byBhIHN0cmluZy5cbiAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgcHJlZml4IGZvciB0aGUgYmxvYiB0eXBlLlxuICAgICAgICAgICAgdmFyIHN0ciA9IEJMT0JfVFlQRV9QUkVGSVggKyB2YWx1ZS50eXBlICsgJ34nICsgYnVmZmVyVG9TdHJpbmcodGhpcy5yZXN1bHQpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhTRVJJQUxJWkVEX01BUktFUiArIFRZUEVfQkxPQiArIHN0cik7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBjb252ZXJ0IHZhbHVlIGludG8gYSBKU09OIHN0cmluZzogXCIsIHZhbHVlKTtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERlc2VyaWFsaXplIGRhdGEgd2UndmUgaW5zZXJ0ZWQgaW50byBhIHZhbHVlIGNvbHVtbi9maWVsZC4gV2UgcGxhY2Vcbi8vIHNwZWNpYWwgbWFya2VycyBpbnRvIG91ciBzdHJpbmdzIHRvIG1hcmsgdGhlbSBhcyBlbmNvZGVkOyB0aGlzIGlzbid0XG4vLyBhcyBuaWNlIGFzIGEgbWV0YSBmaWVsZCwgYnV0IGl0J3MgdGhlIG9ubHkgc2FuZSB0aGluZyB3ZSBjYW4gZG8gd2hpbHN0XG4vLyBrZWVwaW5nIGxvY2FsU3RvcmFnZSBzdXBwb3J0IGludGFjdC5cbi8vXG4vLyBPZnRlbnRpbWVzIHRoaXMgd2lsbCBqdXN0IGRlc2VyaWFsaXplIEpTT04gY29udGVudCwgYnV0IGlmIHdlIGhhdmUgYVxuLy8gc3BlY2lhbCBtYXJrZXIgKFNFUklBTElaRURfTUFSS0VSLCBkZWZpbmVkIGFib3ZlKSwgd2Ugd2lsbCBleHRyYWN0XG4vLyBzb21lIGtpbmQgb2YgYXJyYXlidWZmZXIvYmluYXJ5IGRhdGEvdHlwZWQgYXJyYXkgb3V0IG9mIHRoZSBzdHJpbmcuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgbWFya2VkIHRoaXMgc3RyaW5nIGFzIGJlaW5nIHNwZWNpYWxseSBzZXJpYWxpemVkIChpLmUuXG4gICAgLy8gc29tZXRoaW5nIG90aGVyIHRoYW4gc2VyaWFsaXplZCBKU09OKSwgd2UgY2FuIGp1c3QgcmV0dXJuIGl0IGFuZCBiZVxuICAgIC8vIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodmFsdWUuc3Vic3RyaW5nKDAsIFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCkgIT09IFNFUklBTElaRURfTUFSS0VSKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVhbHMgd2l0aCBkZXNlcmlhbGl6aW5nIHNvbWUga2luZCBvZiBCbG9iIG9yXG4gICAgLy8gVHlwZWRBcnJheS4gRmlyc3Qgd2Ugc2VwYXJhdGUgb3V0IHRoZSB0eXBlIG9mIGRhdGEgd2UncmUgZGVhbGluZ1xuICAgIC8vIHdpdGggZnJvbSB0aGUgZGF0YSBpdHNlbGYuXG4gICAgdmFyIHNlcmlhbGl6ZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHJpbmcoVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuICAgIHZhciB0eXBlID0gdmFsdWUuc3Vic3RyaW5nKFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCwgVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuXG4gICAgdmFyIGJsb2JUeXBlO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIGJsb2IgdHlwZSBzZXJpYWxpemF0aW9uIHN0cmF0ZWd5LlxuICAgIC8vIERCcyBjcmVhdGVkIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgbG9jYWxGb3JhZ2Ugd2lsbCBzaW1wbHkgbm90IGhhdmUgdGhlIGJsb2IgdHlwZS5cbiAgICBpZiAodHlwZSA9PT0gVFlQRV9CTE9CICYmIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgudGVzdChzZXJpYWxpemVkU3RyaW5nKSkge1xuICAgICAgICB2YXIgbWF0Y2hlciA9IHNlcmlhbGl6ZWRTdHJpbmcubWF0Y2goQkxPQl9UWVBFX1BSRUZJWF9SRUdFWCk7XG4gICAgICAgIGJsb2JUeXBlID0gbWF0Y2hlclsxXTtcbiAgICAgICAgc2VyaWFsaXplZFN0cmluZyA9IHNlcmlhbGl6ZWRTdHJpbmcuc3Vic3RyaW5nKG1hdGNoZXJbMF0ubGVuZ3RoKTtcbiAgICB9XG4gICAgdmFyIGJ1ZmZlciA9IHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSByaWdodCB0eXBlIGJhc2VkIG9uIHRoZSBjb2RlL3R5cGUgc2V0IGR1cmluZ1xuICAgIC8vIHNlcmlhbGl6YXRpb24uXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRV9BUlJBWUJVRkZFUjpcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIGNhc2UgVFlQRV9CTE9COlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogYmxvYlR5cGUgfSk7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDhBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfRkxPQVQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUNjRBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua293biB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufVxuXG52YXIgbG9jYWxmb3JhZ2VTZXJpYWxpemVyID0ge1xuICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZSxcbiAgICBzdHJpbmdUb0J1ZmZlcjogc3RyaW5nVG9CdWZmZXIsXG4gICAgYnVmZmVyVG9TdHJpbmc6IGJ1ZmZlclRvU3RyaW5nXG59O1xuXG4vKlxuICogSW5jbHVkZXMgY29kZSBmcm9tOlxuICpcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoJ0NSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyAnICsgJyhpZCBJTlRFR0VSIFBSSU1BUlkgS0VZLCBrZXkgdW5pcXVlLCB2YWx1ZSknLCBbXSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xufVxuXG4vLyBPcGVuIHRoZSBXZWJTUUwgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlJDEob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge1xuICAgICAgICBkYjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IHR5cGVvZiBvcHRpb25zW2ldICE9PSAnc3RyaW5nJyA/IG9wdGlvbnNbaV0udG9TdHJpbmcoKSA6IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGJJbmZvUHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBPcGVuIHRoZSBkYXRhYmFzZTsgdGhlIG9wZW5EYXRhYmFzZSBBUEkgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIGNyZWF0ZSBpdCBmb3IgdXMgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiSW5mby5kYiA9IG9wZW5EYXRhYmFzZShkYkluZm8ubmFtZSwgU3RyaW5nKGRiSW5mby52ZXJzaW9uKSwgZGJJbmZvLmRlc2NyaXB0aW9uLCBkYkluZm8uc2l6ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgb3VyIGtleS92YWx1ZSB0YWJsZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGRiSW5mby5zZXJpYWxpemVyID0gbG9jYWxmb3JhZ2VTZXJpYWxpemVyO1xuICAgIHJldHVybiBkYkluZm9Qcm9taXNlO1xufVxuXG5mdW5jdGlvbiB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHQuZXhlY3V0ZVNxbChzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IGVycm9yLlNZTlRBWF9FUlIpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA9ID9cIiwgW2RiSW5mby5zdG9yZU5hbWVdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0cy5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGFibGUgaXMgbWlzc2luZyAod2FzIGRlbGV0ZWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlLWNyZWF0ZSBpdCB0YWJsZSBhbmQgcmV0cnlcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrKHQsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sIGVycm9yQ2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPyBMSU1JVCAxJywgW2tleV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MubGVuZ3RoID8gcmVzdWx0cy5yb3dzLml0ZW0oMCkudmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudCB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlJDEoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcblxuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSByb3dzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gdW5wYWNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgaXRlbS5rZXksIGkgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm9pZCgwKSBwcmV2ZW50cyBwcm9ibGVtcyB3aXRoIHJlZGVmaW5pdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgYHVuZGVmaW5lZGAuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrLCByZXRyaWVzTGVmdCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhlIGxvY2FsU3RvcmFnZSBBUEkgZG9lc24ndCByZXR1cm4gdW5kZWZpbmVkIHZhbHVlcyBpbiBhblxuICAgICAgICAgICAgLy8gXCJleHBlY3RlZFwiIHdheSwgc28gdW5kZWZpbmVkIGlzIGFsd2F5cyBjYXN0IHRvIG51bGwgaW4gYWxsXG4gICAgICAgICAgICAvLyBkcml2ZXJzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoa2V5LCB2YWx1ZSkgVkFMVUVTICg/LCA/KScsIFtrZXksIHZhbHVlXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3JpZ2luYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRyYW5zYWN0aW9uIGZhaWxlZDsgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHNlZSBpZiBpdCdzIGEgcXVvdGEgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3FsRXJyb3IuY29kZSA9PT0gc3FsRXJyb3IuUVVPVEFfRVJSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgcmVqZWN0IHRoZSBjYWxsYmFjayBvdXRyaWdodCBmb3Igbm93LCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdvcnRoIHRyeWluZyB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHVzZXIgYWNjZXB0cyB0aGUgcHJvbXB0IHRvIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgc3RvcmFnZSBvbiBTYWZhcmksIHRoaXMgZXJyb3Igd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWVzTGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfc2V0SXRlbS5hcHBseShzZWxmLCBba2V5LCBvcmlnaW5hbFZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQgLSAxXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtJDEoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gX3NldEl0ZW0uYXBwbHkodGhpcywgW2tleSwgdmFsdWUsIGNhbGxiYWNrLCAxXSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0kMShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPycsIFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEZWxldGVzIGV2ZXJ5IGl0ZW0gaW4gdGhlIHRhYmxlLlxuLy8gVE9ETzogRmluZCBvdXQgaWYgdGhpcyByZXNldHMgdGhlIEFVVE9fSU5DUkVNRU5UIG51bWJlci5cbmZ1bmN0aW9uIGNsZWFyJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIERvZXMgYSBzaW1wbGUgYENPVU5UKGtleSlgIHRvIGdldCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHN0b3JlZCBpblxuLy8gbG9jYWxGb3JhZ2UuXG5mdW5jdGlvbiBsZW5ndGgkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAvLyBBaGhoLCBTUUwgbWFrZXMgdGhpcyBvbmUgc29vb29vbyBlYXN5LlxuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIENPVU5UKGtleSkgYXMgYyBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5pdGVtKDApLmM7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZXR1cm4gdGhlIGtleSBsb2NhdGVkIGF0IGtleSBpbmRleCBYOyBlc3NlbnRpYWxseSBnZXRzIHRoZSBrZXkgZnJvbSBhXG4vLyBgV0hFUkUgaWQgPSA/YC4gVGhpcyBpcyB0aGUgbW9zdCBlZmZpY2llbnQgd2F5IEkgY2FuIHRoaW5rIHRvIGltcGxlbWVudFxuLy8gdGhpcyByYXJlbHktdXNlZCAoaW4gbXkgZXhwZXJpZW5jZSkgcGFydCBvZiB0aGUgQVBJLCBidXQgaXQgY2FuIHNlZW1cbi8vIGluY29uc2lzdGVudCwgYmVjYXVzZSB3ZSBkbyBgSU5TRVJUIE9SIFJFUExBQ0UgSU5UT2Agb24gYHNldEl0ZW0oKWAsIHNvXG4vLyB0aGUgSUQgb2YgZWFjaCBrZXkgd2lsbCBjaGFuZ2UgZXZlcnkgdGltZSBpdCdzIHVwZGF0ZWQuIFBlcmhhcHMgYSBzdG9yZWRcbi8vIHByb2NlZHVyZSBmb3IgdGhlIGBzZXRJdGVtKClgIFNRTCB3b3VsZCBzb2x2ZSB0aGlzIHByb2JsZW0/XG4vLyBUT0RPOiBEb24ndCBjaGFuZ2UgSUQgb24gYHNldEl0ZW0oKWAuXG5mdW5jdGlvbiBrZXkkMShuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUgaWQgPSA/IExJTUlUIDEnLCBbbiArIDFdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLmtleSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2gocmVzdWx0cy5yb3dzLml0ZW0oaSkua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5cyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dlYmRhdGFiYXNlLyNkYXRhYmFzZXNcbi8vID4gVGhlcmUgaXMgbm8gd2F5IHRvIGVudW1lcmF0ZSBvciBkZWxldGUgdGhlIGRhdGFiYXNlcyBhdmFpbGFibGUgZm9yIGFuIG9yaWdpbiBmcm9tIHRoaXMgQVBJLlxuZnVuY3Rpb24gZ2V0QWxsU3RvcmVOYW1lcyhkYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA8PiAnX19XZWJLaXREYXRhYmFzZUluZm9UYWJsZV9fJ1wiLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVOYW1lcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lcy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXM6IHN0b3JlTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlJDEob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBkYjtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm5hbWUgPT09IGN1cnJlbnRDb25maWcubmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgZGIgcmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAgICAgICAgZGIgPSBzZWxmLl9kYkluZm8uZGI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRiID0gb3BlbkRhdGFiYXNlKG9wdGlvbnMubmFtZSwgJycsICcnLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIGRyb3AgYWxsIGRhdGFiYXNlIHRhYmxlc1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2V0QWxsU3RvcmVOYW1lcyhkYikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBbb3B0aW9ucy5zdG9yZU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKG9wZXJhdGlvbkluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyb3BUYWJsZShzdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ0RST1AgVEFCTEUgSUYgRVhJU1RTICcgKyBzdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9wZXJhdGlvbkluZm8uc3RvcmVOYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9ucy5wdXNoKGRyb3BUYWJsZShvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UkMS5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIHdlYlNRTFN0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ3dlYlNRTFN0b3JhZ2UnLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDEsXG4gICAgX3N1cHBvcnQ6IGlzV2ViU1FMVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlJDEsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSQxLFxuICAgIHNldEl0ZW06IHNldEl0ZW0kMSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDEsXG4gICAgY2xlYXI6IGNsZWFyJDEsXG4gICAgbGVuZ3RoOiBsZW5ndGgkMSxcbiAgICBrZXk6IGtleSQxLFxuICAgIGtleXM6IGtleXMkMSxcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZSQxXG59O1xuXG5mdW5jdGlvbiBpc0xvY2FsU3RvcmFnZVZhbGlkKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiAnc2V0SXRlbScgaW4gbG9jYWxTdG9yYWdlICYmXG4gICAgICAgIC8vIGluIElFOCB0eXBlb2YgbG9jYWxTdG9yYWdlLnNldEl0ZW0gPT09ICdvYmplY3QnXG4gICAgICAgICEhbG9jYWxTdG9yYWdlLnNldEl0ZW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIGRlZmF1bHRDb25maWcpIHtcbiAgICB2YXIga2V5UHJlZml4ID0gb3B0aW9ucy5uYW1lICsgJy8nO1xuXG4gICAgaWYgKG9wdGlvbnMuc3RvcmVOYW1lICE9PSBkZWZhdWx0Q29uZmlnLnN0b3JlTmFtZSkge1xuICAgICAgICBrZXlQcmVmaXggKz0gb3B0aW9ucy5zdG9yZU5hbWUgKyAnLyc7XG4gICAgfVxuICAgIHJldHVybiBrZXlQcmVmaXg7XG59XG5cbi8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSB0aHJvd3Mgd2hlbiBzYXZpbmcgYW4gaXRlbVxuZnVuY3Rpb24gY2hlY2tJZkxvY2FsU3RvcmFnZVRocm93cygpIHtcbiAgICB2YXIgbG9jYWxTdG9yYWdlVGVzdEtleSA9ICdfbG9jYWxmb3JhZ2Vfc3VwcG9ydF90ZXN0JztcblxuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXksIHRydWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyB1c2FibGUgYW5kIGFsbG93cyB0byBzYXZlIGFuIGl0ZW1cbi8vIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGluIFNhZmFyaSBQcml2YXRlIEJyb3dzaW5nXG4vLyBtb2RlLCBvciBpbiBhbnkgb3RoZXIgY2FzZSB3aGVyZSB0aGUgYXZhaWxhYmxlIHF1b3RhIGZvciBsb2NhbFN0b3JhZ2Vcbi8vIGlzIDAgYW5kIHRoZXJlIHdhc24ndCBhbnkgc2F2ZWQgaXRlbXMgeWV0LlxuZnVuY3Rpb24gX2lzTG9jYWxTdG9yYWdlVXNhYmxlKCkge1xuICAgIHJldHVybiAhY2hlY2tJZkxvY2FsU3RvcmFnZVRocm93cygpIHx8IGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwO1xufVxuXG4vLyBDb25maWcgdGhlIGxvY2FsU3RvcmFnZSBiYWNrZW5kLCB1c2luZyBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlJDIob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge307XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGJJbmZvLmtleVByZWZpeCA9IF9nZXRLZXlQcmVmaXgob3B0aW9ucywgc2VsZi5fZGVmYXVsdENvbmZpZyk7XG5cbiAgICBpZiAoIV9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJDEucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgIGRiSW5mby5zZXJpYWxpemVyID0gbG9jYWxmb3JhZ2VTZXJpYWxpemVyO1xuXG4gICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG59XG5cbi8vIFJlbW92ZSBhbGwga2V5cyBmcm9tIHRoZSBkYXRhc3RvcmUsIGVmZmVjdGl2ZWx5IGRlc3Ryb3lpbmcgYWxsIGRhdGEgaW5cbi8vIHRoZSBhcHAncyBrZXkvdmFsdWUgc3RvcmUhXG5mdW5jdGlvbiBjbGVhciQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gc2VsZi5fZGJJbmZvLmtleVByZWZpeDtcblxuICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZXRyaWV2ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLiBVbmxpa2UgdGhlIG9yaWdpbmFsIGFzeW5jX3N0b3JhZ2Vcbi8vIGxpYnJhcnkgaW4gR2FpYSwgd2UgZG9uJ3QgbW9kaWZ5IHJldHVybiB2YWx1ZXMgYXQgYWxsLiBJZiBhIGtleSdzIHZhbHVlXG4vLyBpcyBgdW5kZWZpbmVkYCwgd2UgcGFzcyB0aGF0IHZhbHVlIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbmZ1bmN0aW9uIGdldEl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuXG4gICAgICAgIC8vIElmIGEgcmVzdWx0IHdhcyBmb3VuZCwgcGFyc2UgaXQgZnJvbSB0aGUgc2VyaWFsaXplZFxuICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlIGtleVxuICAgICAgICAvLyBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0IHRvIHRoZVxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIGluIHRoZSBzdG9yZS5cbmZ1bmN0aW9uIGl0ZXJhdGUkMihpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGRiSW5mby5rZXlQcmVmaXg7XG4gICAgICAgIHZhciBrZXlQcmVmaXhMZW5ndGggPSBrZXlQcmVmaXgubGVuZ3RoO1xuICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcblxuICAgICAgICAvLyBXZSB1c2UgYSBkZWRpY2F0ZWQgaXRlcmF0b3IgaW5zdGVhZCBvZiB0aGUgYGlgIHZhcmlhYmxlIGJlbG93XG4gICAgICAgIC8vIHNvIG90aGVyIGtleXMgd2UgZmV0Y2ggaW4gbG9jYWxTdG9yYWdlIGFyZW4ndCBjb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBgaXRlcmF0aW9uTnVtYmVyYCBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGBpdGVyYXRlKClgXG4gICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICAvL1xuICAgICAgICAvLyBTZWU6IGdpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQzNSNkaXNjdXNzaW9uX3IzODA2MTUzMFxuICAgICAgICB2YXIgaXRlcmF0aW9uTnVtYmVyID0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgICAgIC8vIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0LiBJZiByZXN1bHQgaXNuJ3QgdHJ1dGh5LCB0aGVcbiAgICAgICAgICAgIC8vIGtleSBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0XG4gICAgICAgICAgICAvLyB0byB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPSBpdGVyYXRvcih2YWx1ZSwga2V5LnN1YnN0cmluZyhrZXlQcmVmaXhMZW5ndGgpLCBpdGVyYXRpb25OdW1iZXIrKyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTYW1lIGFzIGxvY2FsU3RvcmFnZSdzIGtleSgpIG1ldGhvZCwgZXhjZXB0IHRha2VzIGEgY2FsbGJhY2suXG5mdW5jdGlvbiBrZXkkMihuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5rZXkobik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcmVmaXggZnJvbSB0aGUga2V5LCBpZiBhIGtleSBpcyBmb3VuZC5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoaXRlbUtleS5pbmRleE9mKGRiSW5mby5rZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGl0ZW1LZXkuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFN1cHBseSB0aGUgbnVtYmVyIG9mIGtleXMgaW4gdGhlIGRhdGFzdG9yZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBsZW5ndGgkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgc3RvcmUsIG5pY2UgYW5kIHNpbXBsZS5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTZXQgYSBrZXkncyB2YWx1ZSBhbmQgcnVuIGFuIG9wdGlvbmFsIGNhbGxiYWNrIG9uY2UgdGhlIHZhbHVlIGlzIHNldC5cbi8vIFVubGlrZSBHYWlhJ3MgaW1wbGVtZW50YXRpb24sIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIHZhbHVlLFxuLy8gaW4gY2FzZSB5b3Ugd2FudCB0byBvcGVyYXRlIG9uIHRoYXQgdmFsdWUgb25seSBhZnRlciB5b3UncmUgc3VyZSBpdFxuLy8gc2F2ZWQsIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQuXG5mdW5jdGlvbiBzZXRJdGVtJDIoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDb252ZXJ0IHVuZGVmaW5lZCB2YWx1ZXMgdG8gbnVsbC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5zZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UgY2FwYWNpdHkgZXhjZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBzcGVjaWZpYyBlcnJvci9ldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8IGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQyKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucy5uYW1lICsgJy8nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoa2V5UHJlZml4KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIGxvY2FsU3RvcmFnZVdyYXBwZXIgPSB7XG4gICAgX2RyaXZlcjogJ2xvY2FsU3RvcmFnZVdyYXBwZXInLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDIsXG4gICAgX3N1cHBvcnQ6IGlzTG9jYWxTdG9yYWdlVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlJDIsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSQyLFxuICAgIHNldEl0ZW06IHNldEl0ZW0kMixcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDIsXG4gICAgY2xlYXI6IGNsZWFyJDIsXG4gICAgbGVuZ3RoOiBsZW5ndGgkMixcbiAgICBrZXk6IGtleSQyLFxuICAgIGtleXM6IGtleXMkMixcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZSQyXG59O1xuXG52YXIgc2FtZVZhbHVlID0gZnVuY3Rpb24gc2FtZVZhbHVlKHgsIHkpIHtcbiAgICByZXR1cm4geCA9PT0geSB8fCB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICYmIGlzTmFOKHgpICYmIGlzTmFOKHkpO1xufTtcblxudmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHNlYXJjaEVsZW1lbnQpIHtcbiAgICB2YXIgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBpZiAoc2FtZVZhbHVlKGFycmF5W2ldLCBzZWFyY2hFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLy8gRHJpdmVycyBhcmUgc3RvcmVkIGhlcmUgd2hlbiBgZGVmaW5lRHJpdmVyKClgIGlzIGNhbGxlZC5cbi8vIFRoZXkgYXJlIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZiBsb2NhbEZvcmFnZS5cbnZhciBEZWZpbmVkRHJpdmVycyA9IHt9O1xuXG52YXIgRHJpdmVyU3VwcG9ydCA9IHt9O1xuXG52YXIgRGVmYXVsdERyaXZlcnMgPSB7XG4gICAgSU5ERVhFRERCOiBhc3luY1N0b3JhZ2UsXG4gICAgV0VCU1FMOiB3ZWJTUUxTdG9yYWdlLFxuICAgIExPQ0FMU1RPUkFHRTogbG9jYWxTdG9yYWdlV3JhcHBlclxufTtcblxudmFyIERlZmF1bHREcml2ZXJPcmRlciA9IFtEZWZhdWx0RHJpdmVycy5JTkRFWEVEREIuX2RyaXZlciwgRGVmYXVsdERyaXZlcnMuV0VCU1FMLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLkxPQ0FMU1RPUkFHRS5fZHJpdmVyXTtcblxudmFyIE9wdGlvbmFsRHJpdmVyTWV0aG9kcyA9IFsnZHJvcEluc3RhbmNlJ107XG5cbnZhciBMaWJyYXJ5TWV0aG9kcyA9IFsnY2xlYXInLCAnZ2V0SXRlbScsICdpdGVyYXRlJywgJ2tleScsICdrZXlzJywgJ2xlbmd0aCcsICdyZW1vdmVJdGVtJywgJ3NldEl0ZW0nXS5jb25jYXQoT3B0aW9uYWxEcml2ZXJNZXRob2RzKTtcblxudmFyIERlZmF1bHRDb25maWcgPSB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGRyaXZlcjogRGVmYXVsdERyaXZlck9yZGVyLnNsaWNlKCksXG4gICAgbmFtZTogJ2xvY2FsZm9yYWdlJyxcbiAgICAvLyBEZWZhdWx0IERCIHNpemUgaXMgX0pVU1QgVU5ERVJfIDVNQiwgYXMgaXQncyB0aGUgaGlnaGVzdCBzaXplXG4gICAgLy8gd2UgY2FuIHVzZSB3aXRob3V0IGEgcHJvbXB0LlxuICAgIHNpemU6IDQ5ODA3MzYsXG4gICAgc3RvcmVOYW1lOiAna2V5dmFsdWVwYWlycycsXG4gICAgdmVyc2lvbjogMS4wXG59O1xuXG5mdW5jdGlvbiBjYWxsV2hlblJlYWR5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIGxpYnJhcnlNZXRob2QpIHtcbiAgICBsb2NhbEZvcmFnZUluc3RhbmNlW2xpYnJhcnlNZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBsb2NhbEZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXS5hcHBseShsb2NhbEZvcmFnZUluc3RhbmNlLCBfYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGlmIChhcmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9rZXkgaW4gYXJnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShhcmdbX2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV0uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtfa2V5XSA9IGFyZ1tfa2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG59XG5cbnZhciBMb2NhbEZvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2NhbEZvcmFnZShvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbEZvcmFnZSk7XG5cbiAgICAgICAgZm9yICh2YXIgZHJpdmVyVHlwZUtleSBpbiBEZWZhdWx0RHJpdmVycykge1xuICAgICAgICAgICAgaWYgKERlZmF1bHREcml2ZXJzLmhhc093blByb3BlcnR5KGRyaXZlclR5cGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlciA9IERlZmF1bHREcml2ZXJzW2RyaXZlclR5cGVLZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdGhpc1tkcml2ZXJUeXBlS2V5XSA9IGRyaXZlck5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIURlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IGRyaXZlcnMgY2FuIGJlIGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gYSBibG9ja2luZyBtYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVEcml2ZXIoZHJpdmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0gZXh0ZW5kKHt9LCBEZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gZXh0ZW5kKHt9LCB0aGlzLl9kZWZhdWx0Q29uZmlnLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdERyaXZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RiSW5mbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCk7XG4gICAgICAgIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgIH1cblxuICAgIC8vIFNldCBhbnkgY29uZmlnIHZhbHVlcyBmb3IgbG9jYWxGb3JhZ2U7IGNhbiBiZSBjYWxsZWQgYW55dGltZSBiZWZvcmVcbiAgICAvLyB0aGUgZmlyc3QgQVBJIGNhbGwgKGUuZy4gYGdldEl0ZW1gLCBgc2V0SXRlbWApLlxuICAgIC8vIFdlIGxvb3AgdGhyb3VnaCBvcHRpb25zIHNvIHdlIGRvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBjb25maWdcbiAgICAvLyB2YWx1ZXMuXG5cblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jb25maWcgPSBmdW5jdGlvbiBjb25maWcob3B0aW9ucykge1xuICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBhcmd1bWVudCBpcyBhbiBvYmplY3QsIHdlIHVzZSBpdCB0byBzZXQgdmFsdWVzLlxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIHJldHVybiBlaXRoZXIgYSBzcGVjaWZpZWQgY29uZmlnIHZhbHVlIG9yIGFsbFxuICAgICAgICAvLyBjb25maWcgdmFsdWVzLlxuICAgICAgICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBJZiBsb2NhbGZvcmFnZSBpcyByZWFkeSBhbmQgZnVsbHkgaW5pdGlhbGl6ZWQsIHdlIGNhbid0IHNldFxuICAgICAgICAgICAgLy8gYW55IG5ldyBjb25maWd1cmF0aW9uIHZhbHVlcy4gSW5zdGVhZCwgd2UgcmV0dXJuIGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkNhbid0IGNhbGwgY29uZmlnKCkgYWZ0ZXIgbG9jYWxmb3JhZ2UgXCIgKyAnaGFzIGJlZW4gdXNlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09ICdzdG9yZU5hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbaV0gPSBvcHRpb25zW2ldLnJlcGxhY2UoL1xcVy9nLCAnXycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpID09PSAndmVyc2lvbicgJiYgdHlwZW9mIG9wdGlvbnNbaV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0RhdGFiYXNlIHZlcnNpb24gbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZnRlciBhbGwgY29uZmlnIG9wdGlvbnMgYXJlIHNldCBhbmRcbiAgICAgICAgICAgIC8vIHRoZSBkcml2ZXIgb3B0aW9uIGlzIHVzZWQsIHRyeSBzZXR0aW5nIGl0XG4gICAgICAgICAgICBpZiAoJ2RyaXZlcicgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmRyaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnW29wdGlvbnNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVc2VkIHRvIGRlZmluZSBhIGN1c3RvbSBkcml2ZXIsIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZlxuICAgIC8vIGxvY2FsRm9yYWdlLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZGVmaW5lRHJpdmVyID0gZnVuY3Rpb24gZGVmaW5lRHJpdmVyKGRyaXZlck9iamVjdCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXJPYmplY3QuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxpYW5jZUVycm9yID0gbmV3IEVycm9yKCdDdXN0b20gZHJpdmVyIG5vdCBjb21wbGlhbnQ7IHNlZSAnICsgJ2h0dHBzOi8vbW96aWxsYS5naXRodWIuaW8vbG9jYWxGb3JhZ2UvI2RlZmluZWRyaXZlcicpO1xuXG4gICAgICAgICAgICAgICAgLy8gQSBkcml2ZXIgbmFtZSBzaG91bGQgYmUgZGVmaW5lZCBhbmQgbm90IG92ZXJsYXAgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyBsaWJyYXJ5LWRlZmluZWQsIGRlZmF1bHQgZHJpdmVycy5cbiAgICAgICAgICAgICAgICBpZiAoIWRyaXZlck9iamVjdC5fZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChjb21wbGlhbmNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck1ldGhvZHMgPSBMaWJyYXJ5TWV0aG9kcy5jb25jYXQoJ19pbml0U3RvcmFnZScpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2ROYW1lID0gZHJpdmVyTWV0aG9kc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyB0aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGEgbWV0aG9kIGV2ZW4gd2hlbiBvcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZXF1aXJlZCA9ICFpbmNsdWRlcyhPcHRpb25hbERyaXZlck1ldGhvZHMsIGRyaXZlck1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGlzUmVxdWlyZWQgfHwgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdKSAmJiB0eXBlb2YgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjb25maWd1cmVNaXNzaW5nTWV0aG9kcyA9IGZ1bmN0aW9uIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5ID0gZnVuY3Rpb24gbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5KG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdNZXRob2QgJyArIG1ldGhvZE5hbWUgKyAnIGlzIG5vdCBpbXBsZW1lbnRlZCBieSB0aGUgY3VycmVudCBkcml2ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxEcml2ZXJNZXRob2QgPSBPcHRpb25hbERyaXZlck1ldGhvZHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3Rbb3B0aW9uYWxEcml2ZXJNZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSA9IG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShvcHRpb25hbERyaXZlck1ldGhvZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uZmlndXJlTWlzc2luZ01ldGhvZHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXREcml2ZXJTdXBwb3J0ID0gZnVuY3Rpb24gc2V0RHJpdmVyU3VwcG9ydChzdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdSZWRlZmluaW5nIExvY2FsRm9yYWdlIGRyaXZlcjogJyArIGRyaXZlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID0gZHJpdmVyT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICBEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdID0gc3VwcG9ydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgdXNlIGEgdGhlbiwgc28gdGhhdCB3ZSBjYW4gZGVmaW5lXG4gICAgICAgICAgICAgICAgICAgIC8vIGRyaXZlcnMgdGhhdCBoYXZlIHNpbXBsZSBfc3VwcG9ydCBtZXRob2RzXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCdfc3VwcG9ydCcgaW4gZHJpdmVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcml2ZXJPYmplY3QuX3N1cHBvcnQgJiYgdHlwZW9mIGRyaXZlck9iamVjdC5fc3VwcG9ydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KCkudGhlbihzZXREcml2ZXJTdXBwb3J0LCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCghIWRyaXZlck9iamVjdC5fc3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJTdXBwb3J0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRyaXZlciA9IGZ1bmN0aW9uIGRyaXZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlciB8fCBudWxsO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0RHJpdmVyID0gZnVuY3Rpb24gZ2V0RHJpdmVyKGRyaXZlck5hbWUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBnZXREcml2ZXJQcm9taXNlID0gRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0gPyBQcm9taXNlJDEucmVzb2x2ZShEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkgOiBQcm9taXNlJDEucmVqZWN0KG5ldyBFcnJvcignRHJpdmVyIG5vdCBmb3VuZC4nKSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhnZXREcml2ZXJQcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBnZXREcml2ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0U2VyaWFsaXplciA9IGZ1bmN0aW9uIGdldFNlcmlhbGl6ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZXJQcm9taXNlID0gUHJvbWlzZSQxLnJlc29sdmUobG9jYWxmb3JhZ2VTZXJpYWxpemVyKTtcbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhzZXJpYWxpemVyUHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplclByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHNlbGYuX2RyaXZlclNldC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9yZWFkeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gc2VsZi5faW5pdERyaXZlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zZXREcml2ZXIgPSBmdW5jdGlvbiBzZXREcml2ZXIoZHJpdmVycywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaXNBcnJheShkcml2ZXJzKSkge1xuICAgICAgICAgICAgZHJpdmVycyA9IFtkcml2ZXJzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gdGhpcy5fZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXREcml2ZXJUb0NvbmZpZygpIHtcbiAgICAgICAgICAgIHNlbGYuX2NvbmZpZy5kcml2ZXIgPSBzZWxmLmRyaXZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kU2VsZldpdGhEcml2ZXIoZHJpdmVyKSB7XG4gICAgICAgICAgICBzZWxmLl9leHRlbmQoZHJpdmVyKTtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG5cbiAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gc2VsZi5faW5pdFN0b3JhZ2Uoc2VsZi5fY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9yZWFkeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudERyaXZlckluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyaXZlclByb21pc2VMb29wKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudERyaXZlckluZGV4IDwgc3VwcG9ydGVkRHJpdmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1tjdXJyZW50RHJpdmVySW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyaXZlckluZGV4Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERyaXZlcihkcml2ZXJOYW1lKS50aGVuKGV4dGVuZFNlbGZXaXRoRHJpdmVyKVtcImNhdGNoXCJdKGRyaXZlclByb21pc2VMb29wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIHN0b3JhZ2UgbWV0aG9kIGZvdW5kLicpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9kcml2ZXJTZXQgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJpdmVyUHJvbWlzZUxvb3AoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGVyZSBtaWdodCBiZSBhIGRyaXZlciBpbml0aWFsaXphdGlvbiBpbiBwcm9ncmVzc1xuICAgICAgICAvLyBzbyB3YWl0IGZvciBpdCB0byBmaW5pc2ggaW4gb3JkZXIgdG8gYXZvaWQgYSBwb3NzaWJsZVxuICAgICAgICAvLyByYWNlIGNvbmRpdGlvbiB0byBzZXQgX2RiSW5mb1xuICAgICAgICB2YXIgb2xkRHJpdmVyU2V0RG9uZSA9IHRoaXMuX2RyaXZlclNldCAhPT0gbnVsbCA/IHRoaXMuX2RyaXZlclNldFtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuICAgICAgICB9KSA6IFByb21pc2UkMS5yZXNvbHZlKCk7XG5cbiAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gb2xkRHJpdmVyU2V0RG9uZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1swXTtcbiAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERyaXZlcihkcml2ZXJOYW1lKS50aGVuKGZ1bmN0aW9uIChkcml2ZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9kcml2ZXIgPSBkcml2ZXIuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgIHNlbGYuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuX2luaXREcml2ZXIgPSBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIHN0b3JhZ2UgbWV0aG9kIGZvdW5kLicpO1xuICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fZHJpdmVyU2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHRoaXMuX2RyaXZlclNldCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJpdmVyU2V0O1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc3VwcG9ydHMgPSBmdW5jdGlvbiBzdXBwb3J0cyhkcml2ZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiAhIURyaXZlclN1cHBvcnRbZHJpdmVyTmFtZV07XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZXh0ZW5kID0gZnVuY3Rpb24gX2V4dGVuZChsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIGxpYnJhcnlNZXRob2RzQW5kUHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZ2V0U3VwcG9ydGVkRHJpdmVycyA9IGZ1bmN0aW9uIF9nZXRTdXBwb3J0ZWREcml2ZXJzKGRyaXZlcnMpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRlZERyaXZlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRyaXZlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyc1tpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzKGRyaXZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkRHJpdmVycy5wdXNoKGRyaXZlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWREcml2ZXJzO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSA9IGZ1bmN0aW9uIF93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKSB7XG4gICAgICAgIC8vIEFkZCBhIHN0dWIgZm9yIGVhY2ggZHJpdmVyIEFQSSBtZXRob2QgdGhhdCBkZWxheXMgdGhlIGNhbGwgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgZHJpdmVyIG1ldGhvZCB1bnRpbCBsb2NhbEZvcmFnZSBpcyByZWFkeS4gVGhlc2Ugc3R1YnNcbiAgICAgICAgLy8gd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZHJpdmVyIG1ldGhvZHMgYXMgc29vbiBhcyB0aGUgZHJpdmVyIGlzXG4gICAgICAgIC8vIGxvYWRlZCwgc28gdGhlcmUgaXMgbm8gcGVyZm9ybWFuY2UgaW1wYWN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gTGlicmFyeU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxXaGVuUmVhZHkodGhpcywgTGlicmFyeU1ldGhvZHNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhbEZvcmFnZShvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvY2FsRm9yYWdlO1xufSgpO1xuXG4vLyBUaGUgYWN0dWFsIGxvY2FsRm9yYWdlIG9iamVjdCB0aGF0IHdlIGV4cG9zZSBhcyBhIG1vZHVsZSBvciB2aWEgYVxuLy8gZ2xvYmFsLiBJdCdzIGV4dGVuZGVkIGJ5IHB1bGxpbmcgaW4gb25lIG9mIG91ciBvdGhlciBsaWJyYXJpZXMuXG5cblxudmFyIGxvY2FsZm9yYWdlX2pzID0gbmV3IExvY2FsRm9yYWdlKCk7XG5sb2NhbGZvcmFnZSA9IGxvY2FsZm9yYWdlX2pzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2FsZm9yYWdlX2pzO1xuXG59LHtcIjNcIjozfV19LHt9LFs0XSkoNClcbn0pO1xuIiwiaW1wb3J0IHsgbG9jYWxmb3JhZ2UgfSBmcm9tICcuL2xvY2FsZm9yYWdlLmVzNi5qcyc7XG5cbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZXJQcm9taXNlKGxvY2FsRm9yYWdlSW5zdGFuY2UpIHtcbiAgICBpZiAoZ2V0U2VyaWFsaXplclByb21pc2UucmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXJpYWxpemVyUHJvbWlzZS5yZXN1bHQ7XG4gICAgfVxuICAgIGlmICghbG9jYWxGb3JhZ2VJbnN0YW5jZSB8fCB0eXBlb2YgbG9jYWxGb3JhZ2VJbnN0YW5jZS5nZXRTZXJpYWxpemVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2xvY2FsZm9yYWdlLmdldFNlcmlhbGl6ZXIoKSB3YXMgbm90IGF2YWlsYWJsZSEgJyArICdsb2NhbGZvcmFnZSB2MS40KyBpcyByZXF1aXJlZCEnKSk7XG4gICAgfVxuICAgIGdldFNlcmlhbGl6ZXJQcm9taXNlLnJlc3VsdCA9IGxvY2FsRm9yYWdlSW5zdGFuY2UuZ2V0U2VyaWFsaXplcigpO1xuICAgIHJldHVybiBnZXRTZXJpYWxpemVyUHJvbWlzZS5yZXN1bHQ7XG59XG5cblxuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1LZXlWYWx1ZShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5nZXRJdGVtKGtleSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0SURCS2V5UmFuZ2UoKSB7XG4gICAgLyogZ2xvYmFsIElEQktleVJhbmdlLCB3ZWJraXRJREJLZXlSYW5nZSwgbW96SURCS2V5UmFuZ2UgKi9cbiAgICBpZiAodHlwZW9mIElEQktleVJhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gSURCS2V5UmFuZ2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2Via2l0SURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3ZWJraXRJREJLZXlSYW5nZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtb3pJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG1veklEQktleVJhbmdlO1xuICAgIH1cbn1cblxudmFyIGlkYktleVJhbmdlID0gZ2V0SURCS2V5UmFuZ2UoKTtcblxuZnVuY3Rpb24gc3RhcnRzV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGFua3MgaHR0cHM6Ly9oYWNrcy5tb3ppbGxhLm9yZy8yMDE0LzA2L2JyZWFraW5nLXRoZS1ib3JkZXJzLW9mLWluZGV4ZWRkYi9cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBsb2NhbGZvcmFnZUluc3RhbmNlLl9kYkluZm87XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBkYkluZm8uZGIudHJhbnNhY3Rpb24oZGJJbmZvLnN0b3JlTmFtZSwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBrZXlSYW5nZVZhbHVlID0gaWRiS2V5UmFuZ2UuYm91bmQocHJlZml4LCBwcmVmaXggKyAndWZmZmYnLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbkN1cnNvcihrZXlSYW5nZVZhbHVlKTtcbiAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7IC8vIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtjdXJzb3Iua2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5c1N0YXJ0aW5nV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGFua3MgaHR0cHM6Ly9oYWNrcy5tb3ppbGxhLm9yZy8yMDE0LzA2L2JyZWFraW5nLXRoZS1ib3JkZXJzLW9mLWluZGV4ZWRkYi9cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBsb2NhbGZvcmFnZUluc3RhbmNlLl9kYkluZm87XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBkYkluZm8uZGIudHJhbnNhY3Rpb24oZGJJbmZvLnN0b3JlTmFtZSwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBrZXlSYW5nZVZhbHVlID0gaWRiS2V5UmFuZ2UuYm91bmQocHJlZml4LCBwcmVmaXggKyAndWZmZmYnLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmUuZ2V0QWxsS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5nZXRBbGxLZXlzKGtleVJhbmdlVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgX3JlcSA9IHN0b3JlLm9wZW5DdXJzb3Ioa2V5UmFuZ2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgX3JlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSBfcmVxLnJlc3VsdDsgLy8gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJzb3Iua2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgX3JlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoX3JlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzdGFydHNXaXRoJDEocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFNlcmlhbGl6ZXJQcm9taXNlKGxvY2FsZm9yYWdlSW5zdGFuY2UpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChzZXJpYWxpemVyKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSAoa2V5IExJS0UgPyknLCBbcHJlZml4ICsgJyUnXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3dzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudCB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbaXRlbS5rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzU3RhcnRpbmdXaXRoJDEocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSAoa2V5IExJS0UgPyknLCBbcHJlZml4ICsgJyUnXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3dzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRzV2l0aCQyKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2Uua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcblxuICAgICAgICAgICAgdmFyIGl0ZW1Qcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUHJvbWlzZXMucHVzaChnZXRJdGVtS2V5VmFsdWUuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKGl0ZW1Qcm9taXNlcykudGhlbihmdW5jdGlvbiAoa2V5VmFsdWVQYWlycykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5VmFsdWVQYWlycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5VmFsdWVQYWlyID0ga2V5VmFsdWVQYWlyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5VmFsdWVQYWlyLmtleV0gPSBrZXlWYWx1ZVBhaXIudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5c1N0YXJ0aW5nV2l0aCQyKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2Uua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKDAsIHByZWZpeExlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZm9yYWdlU3RhcnRzV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50RHJpdmVyID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5kcml2ZXIoKTtcblxuICAgIGlmIChjdXJyZW50RHJpdmVyID09PSBsb2NhbGZvcmFnZUluc3RhbmNlLklOREVYRUREQikge1xuICAgICAgICByZXR1cm4gc3RhcnRzV2l0aC5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERyaXZlciA9PT0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5XRUJTUUwpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGgkMS5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoJDIuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZm9yYWdlS2V5c1N0YXJ0aW5nV2l0aChwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50RHJpdmVyID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5kcml2ZXIoKTtcblxuICAgIGlmIChjdXJyZW50RHJpdmVyID09PSBsb2NhbGZvcmFnZUluc3RhbmNlLklOREVYRUREQikge1xuICAgICAgICByZXR1cm4ga2V5c1N0YXJ0aW5nV2l0aC5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudERyaXZlciA9PT0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5XRUJTUUwpIHtcbiAgICAgICAgcmV0dXJuIGtleXNTdGFydGluZ1dpdGgkMS5jYWxsKGxvY2FsZm9yYWdlSW5zdGFuY2UsIHByZWZpeCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrZXlzU3RhcnRpbmdXaXRoJDIuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4dGVuZFByb3RvdHlwZShsb2NhbGZvcmFnZSQkMSkge1xuICAgIHZhciBsb2NhbGZvcmFnZVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihsb2NhbGZvcmFnZSQkMSk7XG4gICAgaWYgKGxvY2FsZm9yYWdlUHJvdG90eXBlKSB7XG4gICAgICAgIGxvY2FsZm9yYWdlUHJvdG90eXBlLnN0YXJ0c1dpdGggPSBsb2NhbGZvcmFnZVN0YXJ0c1dpdGg7XG4gICAgICAgIGxvY2FsZm9yYWdlUHJvdG90eXBlLmtleXNTdGFydGluZ1dpdGggPSBsb2NhbGZvcmFnZUtleXNTdGFydGluZ1dpdGg7XG4gICAgfVxufVxuXG52YXIgZXh0ZW5kUHJvdG90eXBlUmVzdWx0ID0gZXh0ZW5kUHJvdG90eXBlKGxvY2FsZm9yYWdlKTtcblxuZXhwb3J0IHsgbG9jYWxmb3JhZ2VTdGFydHNXaXRoLCBsb2NhbGZvcmFnZUtleXNTdGFydGluZ1dpdGgsIGV4dGVuZFByb3RvdHlwZSwgZXh0ZW5kUHJvdG90eXBlUmVzdWx0LCBzdGFydHNXaXRoJDIgYXMgc3RhcnRzV2l0aEdlbmVyaWMsIGtleXNTdGFydGluZ1dpdGgkMiBhcyBrZXlzU3RhcnRpbmdXaXRoR2VuZXJpYyB9O1xuZXhwb3J0IHsgbG9jYWxmb3JhZ2UgfVxuIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBjb252ZW5pZW50IHN0b3JhZ2UgYWJzdHJhY3Rpb25zLiBJbXBsZW1lbnRpbmcgc3RvcmFnZSBpblxuICogYSB1dGlsaXR5IG1vZHVsZSwgcmF0aGVyIHRoYW4gZGlyZWN0bHkgY2FsbGluZyBicm93c2VyIHN0b3JhZ2UgQVBJcywgYXZvaWRzIGNvZGVcbiAqIGR1cGxpY2F0aW9uIGFuZCBhbGxvd3MgdXMgdG8gc3dhcCBvdXQgdGhlIHVuZGVybHlpbmcgc3RvcmFnZSBpbXBsZW1lbnRhdGlvbiBpZlxuICogbmVlZGVkIChlLmcuLCBzd2l0Y2hpbmcgZnJvbSBsb2NhbGZvcmFnZSB0byBEZXhpZSwgb3IgZGlyZWN0bHkgdXNpbmcgYnJvd3NlclxuICogc3RvcmFnZSBBUElzKS5cbiAqXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2VcbiAqL1xuXG4vLyBDdXJyZW50bHkgaW1wbGVtZW50ZWQgd2l0aCBsb2NhbGZvcmFnZVxuaW1wb3J0IHsgbG9jYWxmb3JhZ2VLZXlzU3RhcnRpbmdXaXRoLCBsb2NhbGZvcmFnZSB9IGZyb20gXCIuLi9kZXBlbmRlbmNpZXMvbG9jYWxmb3JhZ2Utc3RhcnRzd2l0aC5qc1wiXG5cbmV4cG9ydCB2YXIgc3RvcmFnZUluc3RhbmNlcyA9IFtdO1xuLyoqXG4gKiBDbGFzcyBmb3IgYSBrZXktdmFsdWUgc3RvcmFnZSBhcmVhLCB3aGVyZSB0aGUga2V5IGlzIGEgc3RyaW5nIGFuZCB0aGUgdmFsdWUgY2FuIGhhdmVcbiAqIGFueSBvZiBhIG51bWJlciBvZiBiYXNpYyB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEtleVZhbHVlU3RvcmFnZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEga2V5LXZhbHVlIHN0b3JhZ2UgYXJlYS4gTm90ZSB0aGF0LCBiZWNhdXNlIGNyZWF0aW5nIGEgc3RvcmFnZSBhcmVhXG4gICAgICogcmVxdWlyZXMgYXN5bmNocm9ub3VzIGNhbGxzICh3aGljaCBjYW5ub3QgaGFwcGVuIGluIGEgY29uc3RydWN0b3IpLCB0aGVcbiAgICAgKiBzdG9yYWdlIGFyZWEgd2lsbCBub3QgYmUgc2V0dXAgdW50aWwgYSBzdWJzZXF1ZW50IGNhbGwgdG8gYGluaXRpYWxpemUoKWAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VBcmVhTmFtZSAtIEEgbmFtZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKiBAZXhhbXBsZSB2YXIgZXhhbXBsZVN0b3JhZ2UgPSBhd2FpdCAobmV3IEtleVZhbHVlU3RvcmFnZShcImV4YW1wbGVOYW1lXCIpKS5pbml0aWFsaXplKCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZUFyZWFOYW1lKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZUFyZWFOYW1lID0gc3RvcmFnZUFyZWFOYW1lO1xuICAgICAgICB0aGlzLnN0b3JhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGxldGUgY3JlYXRpb24gb2YgdGhlIHN0b3JhZ2UgYXJlYS4gUmV0dXJucyBpdHNlbGYgZm9yIGNvbnZlbmllbmNlLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBrZXktdmFsdWUgc3RvcmFnZSBhcmVhLlxuICAgICAqL1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmKCFLZXlWYWx1ZVN0b3JhZ2UubG9jYWxGb3JhZ2VJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgYXdhaXQgbG9jYWxmb3JhZ2UuY29uZmlnKHtcbiAgICAgICAgICAgICAgICBkcml2ZXI6IFtsb2NhbGZvcmFnZS5JTkRFWEVEREIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGZvcmFnZS5XRUJTUUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGZvcmFnZS5MT0NBTFNUT1JBR0VdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBLZXlWYWx1ZVN0b3JhZ2UubG9jYWxGb3JhZ2VJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9yYWdlSW5zdGFuY2UgPSBsb2NhbGZvcmFnZS5jcmVhdGVJbnN0YW5jZSggeyBuYW1lOiB0aGlzLnN0b3JhZ2VBcmVhTmFtZSB9ICk7XG4gICAgICAgIHN0b3JhZ2VJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgdmFsdWUgZnJvbSBzdG9yYWdlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHVzZSBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PnxQcm9taXNlPEFycmF5QnVmZmVyPnxQcm9taXNlPEJsb2I+fFByb21pc2U8RmxvYXQzMkFycmF5PnxQcm9taXNlPEZsb2F0NjRBcnJheT58XG4gICAgICogUHJvbWlzZTxJbnQ4QXJyYXk+fFByb21pc2U8SW50MTZBcnJheT58UHJvbWlzZTxJbnQzMkFycmF5PnxQcm9taXNlPE51bWJlcj58UHJvbWlzZTxPYmplY3Q+fFByb21pc2U8VWludDhBcnJheT58XG4gICAgICogUHJvbWlzZTxVaW50OENsYW1wZWRBcnJheT58UHJvbWlzZTxVaW50MTZBcnJheT58UHJvbWlzZTxVaW50MzJBcnJheT58UHJvbWlzZTxzdHJpbmc+fSBUaGUgdmFsdWUgaW4gdGhlXG4gICAgICogc3RvcmFnZSBhcmVhIGZvciB0aGUga2V5LCBvciBgbnVsbGAgaWYgdGhlIGtleSBpcyBub3QgaW4gc3RvcmFnZS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgdmFsdWUgaW4gc3RvcmFnZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB1c2UgaW4gdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKiBAcGFyYW0geyhBcnJheXxBcnJheUJ1ZmZlcnxCbG9ifEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXl8SW50OEFycmF5fEludDE2QXJyYXl8SW50MzJBcnJheXxcbiAgICAgKiBOdW1iZXJ8T2JqZWN0fFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8c3RyaW5nKX0gdmFsdWUgLSBUaGUgdmFsdWVcbiAgICAgKiB0byBzdG9yZSBpbiB0aGUgc3RvcmFnZSBhcmVhIGZvciB0aGUga2V5LlxuICAgICAqL1xuICAgIGFzeW5jIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZUluc3RhbmNlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIG9iamVjdCB3aGVyZSB3aXRoIGEgcHJvcGVydHktdmFsdWUgcGFpciBmb3IgZWFjaCBrZXktdmFsdWUgcGFpciBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGNvdWxkIGJlIHNsb3cgYW5kIGNvbnN1bWUgZXhjZXNzaXZlIG1lbW9yeSBpZiB0aGUgc3RvcmFnZSBhcmVhIGNvbnRhaW5zIGEgbG90XG4gICAgICogb2YgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBBbiBvYmplY3QgdGhhdCByZWZsZWN0cyB0aGUgY29udGVudCBpbiB0aGUgc3RvcmFnZSBhcmVhLlxuICAgICAqL1xuICAgIGFzeW5jIGdldENvbnRlbnRzQXNPYmplY3QoKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB7IH07XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZUluc3RhbmNlLml0ZXJhdGUoKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcikgPT4ge1xuICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGNhbGxiYWNrIGl0ZXJhdG9yXG4gICAgICogQHBhcmFtIHsoQXJyYXl8QXJyYXlCdWZmZXJ8QmxvYnxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5fEludDhBcnJheXxJbnQxNkFycmF5fEludDMyQXJyYXl8XG4gICAgICogTnVtYmVyfE9iamVjdHxVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fHN0cmluZyl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVyYXRpb25OdW1iZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBzdG9yYWdlIGFyZWEuIE5vdGUgdGhhdCBpdGVyYXRpb25cbiAgICAgKiB3aWxsIHN0b3AgaWYgYGNhbGxiYWNrYCByZXR1cm5zIGFueXRoaW5nIG5vbi1gdW5kZWZpbmVkYC5cbiAgICAgKlxuICAgICAqIEFzIGxvbmcgYXMgd2UncmUgdXNpbmcgTG9jYWxGb3JhZ2UsIHRoaXMgaXMgZWFzeSBhbmQgcHJlc3VtYWJseSBub3RcbiAgICAgKiBtZW1vcnktaW50ZW5zaXZlLCBhcyBsb25nIGFzIHRoZSBjYWxsYmFjayBpc24ndCBzdG9yaW5nIGFsbCBvZiB0aGUgZW50aXJlcy5cbiAgICAgKiBAcGFyYW0ge2l0ZXJhdG9yfSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxlZCBvbiBlYWNoIGtleS12YWx1ZSBwYWlyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgaXRlcmF0ZShjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlSW5zdGFuY2UuaXRlcmF0ZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgYXN5bmMga2V5c1N0YXJ0aW5nV2l0aChrZXlQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZUluc3RhbmNlLmtleXNTdGFydGluZ1dpdGgoa2V5UHJlZml4KTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydHNXaXRoKGtleVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlSW5zdGFuY2Uuc3RhcnRzV2l0aChrZXlQcmVmaXgpO1xuICAgIH1cbn1cblxuS2V5VmFsdWVTdG9yYWdlLmxvY2FsRm9yYWdlSW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gd29ya2Fyb3VuZCBmb3Igc3RhdGljIGNsYXNzIHZhcmlhYmxlXG5cbi8qKiBDbGFzcyBmb3IgbWFpbnRhaW5pbmcgcGVyc2lzdGVudCBjb3VudGVycyAoZS5nLiwgdW5pcXVlIElEcykuICovXG5leHBvcnQgY2xhc3MgQ291bnRlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcGVyc2lzdGVudCBjb3VudGVyLiBOb3RlIHRoYXQsIGJlY2F1c2UgY3JlYXRpbmcgYSBjb3VudGVyXG4gICAgICogcmVxdWlyZXMgYXN5bmNocm9ub3VzIGNhbGxzICh3aGljaCBjYW5ub3QgaGFwcGVuIGluIGEgY29uc3RydWN0b3IpLFxuICAgICAqIHRoZSBjb3VudGVyIHdpbGwgbm90IGJlIHNldHVwIHVudGlsIGEgc3Vic2VxdWVudCBjYWxsIHRvIGBpbml0aWFsaXplKClgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudGVyTmFtZSAtIEEgbmFtZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIGNvdW50ZXIuXG4gICAgICogQGV4YW1wbGUgdmFyIGV4YW1wbGVDb3VudGVyID0gYXdhaXQgKG5ldyBDb3VudGVyKFwiZXhhbXBsZU5hbWVcIikpLmluaXRpYWxpemUoKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb3VudGVyTmFtZSkge1xuICAgICAgICB0aGlzLmNvdW50ZXJOYW1lID0gY291bnRlck5hbWU7XG4gICAgICAgIHRoaXMuY291bnRlclZhbHVlID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZSBjcmVhdGlvbiBvZiB0aGUgcGVyc2lzdGVudCBjb3VudGVyLiBSZXR1cm5zIGl0c2VsZiBmb3IgY29udmVuaWVuY2UuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHBlcnNpc3RlbnQgY291bnRlci5cbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xuICAgICAgICBpZihDb3VudGVyLnN0b3JhZ2UgPT0gbnVsbClcbiAgICAgICAgICAgIENvdW50ZXIuc3RvcmFnZSA9IGF3YWl0IChuZXcgS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuU3RvcmFnZS5Db3VudGVyXCIpKS5pbml0aWFsaXplKCk7XG4gICAgICAgIHZhciBpbml0aWFsQ291bnRlclZhbHVlID0gYXdhaXQgQ291bnRlci5zdG9yYWdlLmdldCh0aGlzLmNvdW50ZXJOYW1lKTtcbiAgICAgICAgaWYoaW5pdGlhbENvdW50ZXJWYWx1ZSAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5jb3VudGVyVmFsdWUgPSBpbml0aWFsQ291bnRlclZhbHVlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBhd2FpdCBDb3VudGVyLnN0b3JhZ2Uuc2V0KHRoaXMuY291bnRlck5hbWUsIHRoaXMuY291bnRlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb3VudGVyLiBUaGUgdmFsdWUgaXMgY2FjaGVkIGluIG1lbW9yeSwgd2hpY2ggYWxsb3dzXG4gICAgICogdGhpcyBmdW5jdGlvbiB0byBiZSBzeW5jaHJvbm91cy5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY291bnRlci5cbiAgICAgKi9cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBpbmNyZW1lbnRCeUFuZEdldChpbmNWYWx1ZSkge1xuICAgICAgICB2YXIgY3VycmVudENvdW50ZXJWYWx1ZSA9ICh0aGlzLmNvdW50ZXJWYWx1ZSA9IHRoaXMuY291bnRlclZhbHVlICsgaW5jVmFsdWUpO1xuICAgICAgICBhd2FpdCBDb3VudGVyLnN0b3JhZ2Uuc2V0KHRoaXMuY291bnRlck5hbWUsIHRoaXMuY291bnRlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDb3VudGVyVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciBhbmQgcmV0dXJuIHRoZSBpbmNyZW1lbnRlZCB2YWx1ZS5cbiAgICAgKiBUaGUgY2FjaGVkIGNvdW50ZXIgdmFsdWUgaXMgc3luY2hyb25vdXNseSBpbmNyZW1lbnRlZDsgdGhlIHN0b3JlZFxuICAgICAqIGNvdW50ZXIgdmFsdWUgaXMgYXN5bmNocm9ub3VzbHkgaW5jcmVtZW50ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gLSBUaGUgY291bnRlciB2YWx1ZSBhZnRlciBpbmNyZW1lbnRpbmcuXG4gICAgICovXG4gICAgYXN5bmMgaW5jcmVtZW50QW5kR2V0KCkge1xuICAgICAgICAvLyBTYXZpbmcgdGhlIGN1cnJlbnQgY291bnRlciB2YWx1ZSB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nXG4gICAgICAgIC8vIHRoZSBhc3luY2hyb25vdXMgc2F2ZSB0byBzdG9yYWdlXG4gICAgICAgIHZhciBjdXJyZW50Q291bnRlclZhbHVlID0gKHRoaXMuY291bnRlclZhbHVlID0gdGhpcy5jb3VudGVyVmFsdWUgKyAxKTtcbiAgICAgICAgYXdhaXQgQ291bnRlci5zdG9yYWdlLnNldCh0aGlzLmNvdW50ZXJOYW1lLCB0aGlzLmNvdW50ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q291bnRlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgdmFsdWUgb2YgdGhlIGNvdW50ZXIgYW5kIHJldHVybiB0aGUgdmFsdWUgcHJpb3IgdG9cbiAgICAgKiBpbmNyZW1lbnRpbmcuIElkZW50aWNhbCB0byB0aGUgUHJvbWlzZSByZXR1cm5lZCBieVxuICAgICAqIGBjb3VudGVyLmluY3JlbWVudEFuZEdldCgpLnRoZW4odmFsdWUgPT4gcmV0dXJuIHZhbHVlIC0gMSlgLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IC0gVGhlIGNvdW50ZXIgdmFsdWUgYmVmb3JlIGluY3JlbWVudGluZy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRBbmRJbmNyZW1lbnQoKSB7XG4gICAgICAgIHZhciByZXQgPSBhd2FpdCB0aGlzLmluY3JlbWVudCgpIC0gMTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVyLCBpZ25vcmluZyB0aGUgdmFsdWUuIElkZW50aWNhbCB0b1xuICAgICAqIHRoZSBQcm9taXNlIHJldHVybmVkIGJ5IGBjb3VudGVyLmluY3JlbWVudEFuZEdldC50aGVuKHZhbHVlID0+IHJldHVybilgLlxuICAgICAqL1xuICAgIGFzeW5jIGluY3JlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5jcmVtZW50QW5kR2V0KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QW5kUmVzZXQoKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q291bnRlclZhbHVlID0gdGhpcy5jb3VudGVyVmFsdWU7XG4gICAgICAgIHRoaXMuY291bnRlclZhbHVlID0gMDtcbiAgICAgICAgYXdhaXQgQ291bnRlci5zdG9yYWdlLnNldCh0aGlzLmNvdW50ZXJOYW1lLCB0aGlzLmNvdW50ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q291bnRlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBhIHByb3BlcnR5LXZhbHVlIHBhaXIgZm9yIGVhY2ggY291bnRlciBuYW1lLXZhbHVlIHBhaXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHRoYXQgcmVmbGVjdHMgdGhlIHNldCBvZiBjb3VudGVycy5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgZ2V0Q29udGVudHNBc09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IENvdW50ZXIuc3RvcmFnZS5nZXRDb250ZW50c0FzT2JqZWN0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVXJsKHVybCkge1xuICAgIHZhciB1cmxPYmogPSBuZXcgVVJMKHVybCk7XG4gICAgdmFyIG5vcm1hbGl6ZWRVcmwgPSAodXJsT2JqLnByb3RvY29sID8gdXJsT2JqLnByb3RvY29sIDogXCJodHRwczpcIikgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLy9cIiArIHVybE9iai5ob3N0bmFtZSArIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHVybE9iai5wYXRobmFtZSA/IHVybE9iai5wYXRobmFtZSA6IFwiXCIpO1xuICAgIHJldHVybiBub3JtYWxpemVkVXJsO1xufVxuXG4vLyBXb3JrYXJvdW5kIGZvciBzdGF0aWMgY2xhc3MgdmFyaWFibGVcbkNvdW50ZXIuc3RvcmFnZSA9IG51bGw7XG5cbi8vIFByZXZlbnRzIEluZGV4ZWREQiBkYXRhIGZyb20gZ2V0dGluZyBkZWxldGVkIHdpdGhvdXQgdXNlciBpbnRlcnZlbnRpb25cbi8vIElnbm9yaW5nIHRoZSBwcm9taXNlIHJlc29sdXRpb24gYmVjYXVzZSB3ZSBzdGlsbCB3YW50IHRvIHVzZSBzdG9yYWdlXG4vLyBldmVuIGlmIEZpcmVmb3ggd29uJ3QgZ3VhcmFudGVlIHBlcnNpc3RlbmNlXG5uYXZpZ2F0b3Iuc3RvcmFnZS5wZXJzaXN0KCk7IiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYCxcbiAqIHJvdXRpbmcgbWVzc2FnZXMgdG8gdGhlIHJpZ2h0IGxpc3RlbmVyKHMpIGJhc2VkIG9uIHRoZSBtZXNzYWdlIHR5cGUuXG4gKiBNZXNzYWdlIHR5cGVzIGFyZSBkZWZpbmVkIGFzIHN0cmluZ3MsIGFuZCBhIG1lc3NhZ2UgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCBhXG4gKiB0eXBlIHByb3BlcnR5IHRvIGJlIGhhbmRsZWQgY29ycmVjdGx5LlxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5NZXNzYWdpbmdcbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4vRGVidWdnaW5nLmpzXCJcblxuY29uc3QgZGVidWdMb2cgPSBEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nKFwiVXRpbGl0aWVzLk1lc3NhZ2luZ1wiKTtcblxuLyoqXG4gKiBBIE1hcCB0aGF0IHN0b3JlcyBtZXNzYWdlIGxpc3RlbmVycy4gVGhlIGtleXMgYXJlIG1lc3NhZ2UgdHlwZXMgYW5kIHRoZSB2YWx1ZXNcbiAqIGFyZSBTZXRzIG9mIG1lc3NhZ2UgbGlzdGVuZXJzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPHN0cmluZyxTZXQ8ZnVuY3Rpb24+Pn1cbiAqL1xuY29uc3QgbWVzc2FnZVJvdXRlciA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBBIE1hcCB0aGF0IHN0b3JlcyBtZXNzYWdlIHNjaGVtYXMuIFRoZSBrZXlzIGFyZSBtZXNzYWdlIHR5cGVzIGFuZCB0aGUgdmFsdWVzXG4gKiBhcmUgc2NoZW1hcy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxzdHJpbmcsT2JqZWN0Pn1cbiAqL1xuY29uc3QgbWVzc2FnZVNjaGVtYXMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogV2hldGhlciB0aGUgbW9kdWxlJ3MgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgIGxpc3RlbmVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZvciBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAgdGhhdCByb3V0ZXMgbWVzc2FnZXMgdG8gdGhlIHJpZ2h0XG4gKiBsaXN0ZW5lcihzKSBiYXNlZCBvbiBtZXNzYWdlIHR5cGUuIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgXG4gKiBmb3IgZGV0YWlsIG9uIHRoZSBwYXJhbWV0ZXJzLlxuICogQHJldHVybnMge1Byb21pc2V9IC0gQW4gb3B0aW9uYWwgcmVzcG9uc2UgdG8gdGhlIG1lc3NhZ2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBicm93c2VyUnVudGltZUxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgdmFyIG1lc3NhZ2VMaXN0ZW5lcnM7XG4gICAgdmFyIG1lc3NhZ2VTY2hlbWE7XG4gICAgdmFyIGJyb3dzZXJSdW50aW1lUmV0dXJuVmFsdWU7XG4gICAgLy8gSWYgdGhlIG1lc3NhZ2UgaXMgbm90IGluIGFuIGV4cGVjdGVkIGZvcm1hdCBvciBkb2VzIG5vdCBoYXZlIGF0IGxlYXN0XG4gICAgLy8gb25lIHJlZ2lzdGVyZWQgbGlzdGVuZXIsIGlnbm9yZSBpdC5cbiAgICBpZiAoKG1lc3NhZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKHR5cGVvZiBtZXNzYWdlICE9PSBcIm9iamVjdFwiKSB8fFxuICAgICAgICAhKFwidHlwZVwiIGluIG1lc3NhZ2UpIHx8XG4gICAgICAgICh0eXBlb2YgbWVzc2FnZS50eXBlICE9PSBcInN0cmluZ1wiKSB8fFxuICAgICAgICAoKG1lc3NhZ2VMaXN0ZW5lcnMgPSBtZXNzYWdlUm91dGVyLmdldChtZXNzYWdlLnR5cGUpKSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBkZWJ1Z0xvZyhcIlVuZXhwZWN0ZWQgYnJvd3Nlci5ydW50aW1lIG1lc3NhZ2U6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2NoZW1hIHJlZ2lzdGVyZWQgZm9yIHRoaXMgbWVzc2FnZSB0eXBlLCBjaGVjayB0aGUgbWVzc2FnZSBhZ2FpbnN0IHRoZSBzY2hlbWFcbiAgICBpZigobWVzc2FnZVNjaGVtYSA9IG1lc3NhZ2VTY2hlbWFzLmdldChtZXNzYWdlLnR5cGUpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcih2YXIgZmllbGQgaW4gbWVzc2FnZVNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKCEoZmllbGQgaW4gbWVzc2FnZSkgfHwgKHR5cGVvZiBtZXNzYWdlW2ZpZWxkXSAhPSBtZXNzYWdlU2NoZW1hW2ZpZWxkXSkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZyhcIk1pc21hdGNoIGJldHdlZW4gbWVzc2FnZSBhbmQgc2NoZW1hOiBcIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBtZXNzYWdlTGlzdGVuZXIgb2YgbWVzc2FnZUxpc3RlbmVycykge1xuICAgICAgICB2YXIgbWVzc2FnZUxpc3RlbmVyUmV0dXJuVmFsdWUgPSBtZXNzYWdlTGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xuICAgICAgICBpZiAoKG1lc3NhZ2VMaXN0ZW5lclJldHVyblZhbHVlICE9PSB1bmRlZmluZWQpICYmIChicm93c2VyUnVudGltZVJldHVyblZhbHVlICE9PSB1bmRlZmluZWQpKVxuICAgICAgICAgICAgZGVidWdMb2coXCJNdWx0aXBsZSBsaXN0ZW5lciByZXR1cm4gdmFsdWVzIGZvciBtZXNzYWdlIHR5cGUgXCIgKyBtZXNzYWdlLnR5cGUpO1xuICAgICAgICBicm93c2VyUnVudGltZVJldHVyblZhbHVlID0gbWVzc2FnZUxpc3RlbmVyUmV0dXJuVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBicm93c2VyUnVudGltZVJldHVyblZhbHVlO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIG1lc3NhZ2UgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVR5cGUgLSBUaGUgdHlwZSBvZiBtZXNzYWdlIHRoYXQgdHJpZ2dlcnMgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbWVzc2FnZUxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLCB3aGljaCByZWNlaXZlcyB0aGUgc2FtZVxuICogcGFyYW1ldGVycyBhcyBpZiBpdCBoYWQgYmVlbiBjYWxsZWQgYnkgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgLCBhbmQgdGhhdCBjYW5cbiAqIHJldHVybiB0aGUgc2FtZSB2YWx1ZXMgYXMgYSBsaXN0ZW5lciB0byBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAuXG4gKiBAcGFyYW0ge29iamVjdH0gW21lc3NhZ2VTY2hlbWFdIC0gQW4gb3B0aW9uYWwgc2NoZW1hIHRvIHJlZ2lzdGVyIGZvciB0aGUgbWVzc2FnZSB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihtZXNzYWdlVHlwZSwgbWVzc2FnZUxpc3RlbmVyLCBtZXNzYWdlU2NoZW1hKSB7XG4gICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYnJvd3NlclJ1bnRpbWVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2VMaXN0ZW5lcnMgPSBtZXNzYWdlUm91dGVyLmdldChtZXNzYWdlVHlwZSk7XG4gICAgaWYgKG1lc3NhZ2VMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXNzYWdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBtZXNzYWdlUm91dGVyLnNldChtZXNzYWdlVHlwZSwgbWVzc2FnZUxpc3RlbmVycyk7XG4gICAgfVxuICAgIG1lc3NhZ2VMaXN0ZW5lcnMuYWRkKG1lc3NhZ2VMaXN0ZW5lcik7XG5cbiAgICBpZihtZXNzYWdlU2NoZW1hICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJlZ2lzdGVyU2NoZW1hKG1lc3NhZ2VUeXBlLCBtZXNzYWdlU2NoZW1hKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBtZXNzYWdlIHNjaGVtYS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlVHlwZSAtIFRoZSB0eXBlIG9mIG1lc3NhZ2UgdGhhdCBtdXN0IGZvbGxvdyB0aGUgc2NoZW1hLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VTY2hlbWEgLSBBbiBvYmplY3Qgd2hlcmUgZWFjaCBmaWVsZCBoYXMgYSB2YWx1ZSB0aGF0IGlzXG4gKiBhIGJ1aWx0LWluIHR5cGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTY2hlbWEobWVzc2FnZVR5cGUsIG1lc3NhZ2VTY2hlbWEpIHtcbiAgICBpZihtZXNzYWdlU2NoZW1hcy5oYXMobWVzc2FnZVR5cGUpKVxuICAgICAgICBkZWJ1Z0xvZyhcIk11bHRpcGxlIHNjaGVtYXMgZm9yIG1lc3NhZ2UgdHlwZSBcIiArIG1lc3NhZ2VUeXBlKTtcbiAgICBtZXNzYWdlU2NoZW1hcy5zZXQobWVzc2FnZVR5cGUsIG1lc3NhZ2VTY2hlbWEpO1xufSIsIi8qKlxuICogVGhpcyBtb2R1bGUgZW5hYmxlcyByZWdpc3RlcmluZyBicm93c2VyIGlkbGUgc3RhdGUgbGlzdGVuZXJzIHdpdGhcbiAqIHZhcnlpbmcgZGV0ZWN0aW9uIGludGVydmFscy4gVGhlIG1vZHVsZSBpcyBuZWVkZWQgYmVjYXVzZSB0aGVcbiAqIFdlYkV4dGVuc2lvbnMgYGlkbGVgIEFQSSBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBvbmUgZGV0ZWN0aW9uXG4gKiBpbnRlcnZhbCBwZXIgZXh0ZW5zaW9uLlxuICogXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBtb2R1bGUgY29tYmluZXMgdGhlIFdlYkV4dGVuc2lvbnMgYGlkbGVgXG4gKiBBUEkgYW5kIGBzZXRUaW1lb3V0YC4gSXQgY29uZmlndXJlcyB0aGUgYGlkbGVgIEFQSSB0byB1c2UgdGhlXG4gKiBtaW5pbXVtIGlkbGUgZGV0ZWN0aW9uIGludGVydmFsIHdpdGggYGlkbGUuc2V0RGV0ZWN0aW9uSW50ZXJ2YWwoKWAsXG4gKiByZWdpc3RlcnMgYSBsaXN0ZW5lciBmb3IgdGhlIGBpZGxlLm9uU3RhdGVDaGFuZ2VkYCBldmVudCwgYW5kIHRoZW5cbiAqIHVzZXMgYHNldFRpbWVvdXRgIGFmdGVyIHRoZSBicm93c2VyIGdvZXMgaWRsZSB0byBub3RpZnkgaWRsZSBzdGF0ZVxuICogbGlzdGVuZXJzIHdpdGggZGV0ZWN0aW9uIGludGVydmFscyBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0uIElmIHRoZXJlXG4gKiBhcmUgYW55IHBlbmRpbmcgaWRsZSBub3RpZmljYXRpb24gdGltZW91dHMgd2hlbiB0aGUgYnJvd3NlciBnb2VzXG4gKiBhY3RpdmUsIHRob3NlIHRpbWVvdXRzIGFyZSBjbGVhcmVkLlxuICogXG4gKiBTb21lIGltcGxlbWVudGF0aW9uIHF1aXJrcyB0byBiZSBhd2FyZSBvZiBmb3IgdXNlIGFuZCBmdXR1cmVcbiAqIGRldmVsb3BtZW50OlxuICogXG4gKiAgICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiBjb25maWd1cmluZyB0aGUgZGV0ZWN0aW9uIGludGVydmFsXG4gKiAgICAgZm9yIHRoZSBgaWRsZWAgQVBJIHRvIGl0cyBtaW5pbXVtIHZhbHVlLiBBbnkgc3Vic2VxdWVudCBjaGFuZ2VzIHRvXG4gKiAgICAgdGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsIGluIHRoZSBgaWRsZWAgQVBJIHdpbGwgcmVzdWx0IGluXG4gKiAgICAgdW5wcmVkaWN0YWJsZSBiZWhhdmlvci5cbiAqIFxuICogICAqIElkbGUgc3RhdGUgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGlzIG1vZHVsZSBhcmUgbm90IGd1YXJhbnRlZWQgdG9cbiAqICAgICByZWZsZWN0IGlkbGUgc3RhdGUgdHJhbnNpdGlvbnMgKGUuZy4sIGEgbGlzdGVuZXIgbWlnaHQgcmVjZWl2ZVxuICogICAgIGBcImFjdGl2ZVwiYCBmb2xsb3dlZCBieSBgXCJhY3RpdmVcImApLiBXZSBtaWdodCB3YW50IHRvIGltcGxlbWVudCB0aGlzXG4gKiAgICAgZ3VhcmFudGVlIGV2ZW50dWFsbHkuXG4gKiBcbiAqICAgKiBCZWNhdXNlIHRoZSBicm93c2VyIGlkbGUgc3RhdGUgcmVzZXRzIHdpdGggZWFjaCBicm93c2VyIHNlc3Npb24sXG4gKiAgICAgaXQgaXMgbm90IGEgcHJvYmxlbSB0aGF0IHRpbWVvdXRzIGRvIG5vdCBwZXJzaXN0IGJldHdlZW4gYnJvd3NlclxuICogICAgIHNlc3Npb25zLlxuICogXG4gKiAgICogVGhlIG1vZHVsZSBkb2VzIG5vdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBGaXJlZm94XG4gKiAgICAgW2Buc0lkbGVTZXJ2aWNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL1RlY2gvWFBDT00vUmVmZXJlbmNlL0ludGVyZmFjZS9uc0lJZGxlU2VydmljZSksXG4gKiAgICAgZXZlbiB0aG91Z2ggaXQgc3VwcG9ydHMgdmFyeWluZyBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbHMsIGluXG4gKiAgICAgb3JkZXIgdG8gbWluaW1pemUgcHJpdmlsZWdlZCBleHRlbnNpb24gY29kZS5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5JZGxlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWluaW11bSBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbCAoaW4gc2Vjb25kcykgc3VwcG9ydGVkIGJ5XG4gKiB0aGUgYGlkbGVgIEFQSS5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge251bWJlcn1cbiAqL1xuY29uc3QgbWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzID0gMTU7XG5cbi8qKlxuICogV2hldGhlciB3ZSBoYXZlIGNvbmZpZ3VyZWQgIGNvbmZpZ3VyZWQgdGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uXG4gKiBpbnRlcnZhbCwgY2FjaGVkIHRoZSBpZGxlIHN0YXRlLCBhbmQgcmVnaXN0ZXJlZCB0aGUgaWRsZSBzdGF0ZVxuICogbGlzdGVuZXIuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBBbiBlc3RpbWF0ZSBvZiB0aGUgdGltZSAoaW4gbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCkgd2hlbiB0aGVcbiAqIGJyb3dzZXIgbGFzdCBlbnRlcmVkIGFuIGlkbGUgc3RhdGUuIEdlbmVyYXRlZCBieSBzdWJ0cmFjdGluZyB0aGVcbiAqIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsIChjb252ZXJ0ZWQgdG8gbWlsbGlzZWNvbmRzKSBmcm9tIHRoZVxuICogdGltZSB0aGUgYnJvd3NlciBsYXN0IGZpcmVkIGFuIGlkbGUgc3RhdGUgbm90aWZpY2F0aW9uLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGxhc3RJZGxlVGltZSA9IC0xO1xuXG4vKipcbiAqIEEgY2FjaGVkIGNvcHkgb2YgdGhlIGJyb3dzZXIncyBjdXJyZW50IGlkbGUgc3RhdGUuIFRoaXMgY2FjaGluZyBlbmFibGVzXG4gKiBzeW5jaHJvbm91cyBjaGVja2luZyBvZiB0aGUgY3VycmVudCBpZGxlIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAZGVmYXVsdFxuICovXG52YXIgY3VycmVudElkbGVTdGF0ZSA9IFwiYWN0aXZlXCI7XG5cbi8qKlxuICogQSBNYXAgdGhhdCBzdG9yZXMgYnJvd3NlciBpZGxlIHN0YXRlIGxpc3RlbmVycy4gVGhlIGtleXMgYXJlXG4gKiBkZXRlY3Rpb24gaW50ZXJ2YWxzIGluIHNlY29uZHMgYW5kIHRoZSB2YWx1ZXMgYXJlIFNldHMgb2ZcbiAqIGJyb3dzZXIgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFNldDxmdW5jdGlvbj4+fVxuICovXG5jb25zdCBpZGxlU3RhdGVMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQSBNYXAgdGhhdCBzdG9yZXMgYnJvd3NlciBpZGxlIHN0YXRlIHRpbWVvdXRzLiBUaGUga2V5cyBhcmVcbiAqIGRldGVjdGlvbiBpbnRlcnZhbHMgaW4gc2Vjb25kcyBhbmQgdGhlIHZhbHVlcyBhcmUgYHRpbWVvdXRJRGBcbiAqIHZhbHVlcyBmcm9tIGBzZXRUaW1lb3V0KClgLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPG51bWJlcixudW1iZXI+fVxuICovXG5jb25zdCBpZGxlU3RhdGVUaW1lb3V0cyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBDb25maWd1cmUgdGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsLCBjYWNoZSB0aGUgaWRsZSBzdGF0ZSxcbiAqIGFuZCByZWdpc3RlciB0aGUgaWRsZSBzdGF0ZSBsaXN0ZW5lci5cbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYoaW5pdGlhbGl6ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgYnJvd3Nlci5pZGxlLnNldERldGVjdGlvbkludGVydmFsKG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG4gICAgY3VycmVudElkbGVTdGF0ZSA9IGF3YWl0IGJyb3dzZXIuaWRsZS5xdWVyeVN0YXRlKG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyk7XG4gICAgaWYoY3VycmVudElkbGVTdGF0ZSA9PT0gXCJpZGxlXCIpXG4gICAgICAgIGxhc3RJZGxlVGltZSA9IERhdGUubm93KCkgLSAobWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCk7XG4gICAgYnJvd3Nlci5pZGxlLm9uU3RhdGVDaGFuZ2VkLmFkZExpc3RlbmVyKGlkbGVPblN0YXRlQ2hhbmdlZExpc3RlbmVyKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYnJvd3NlciBoYXMgYmVlbiBpZGxlIGZvciBhIHNwZWNpZmllZCB0aW1lLlxuICogVGhpcyBmdW5jdGlvbiBpcyBzeW5jaHJvbm91cywgdW5saWtlIGBpZGxlLnF1ZXJ5U3RhdGVgLiBOb3RlIHRoYXQsXG4gKiBpZiBhbiBpZGxlIHN0YXRlIGxpc3RlbmVyIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLCB0aGlzIGZ1bmN0aW9uXG4gKiB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgb2YgYWN0aXZlIHN0YXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzIC0gVGhlIGRldGVjdGlvbiBpbnRlcnZhbFxuICogdG8gdXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0YXRlKGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKSB7XG4gICAgaWYoY3VycmVudElkbGVTdGF0ZSAhPT0gXCJpZGxlXCIpXG4gICAgICAgIHJldHVybiBjdXJyZW50SWRsZVN0YXRlO1xuXG4gICAgaWYoRGF0ZS5ub3coKSA+PSAobGFzdElkbGVUaW1lICsgKGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCkpKVxuICAgICAgICByZXR1cm4gXCJpZGxlXCI7XG5cbiAgICByZXR1cm4gXCJhY3RpdmVcIjsgICAgXG59XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmb3IgYGlkbGUub25TdGF0ZUNoYW5nZWRgIHRoYXQgc3VwcG9ydHMgbm90aWZ5aW5nXG4gKiBpZGxlIHN0YXRlIGxpc3RlbmVycyB3aXRoIHZhcnlpbmcgZGV0ZWN0aW9uIGludGVydmFscy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlkbGVPblN0YXRlQ2hhbmdlZExpc3RlbmVyKG5ld1N0YXRlKSB7XG4gICAgY3VycmVudElkbGVTdGF0ZSA9IG5ld1N0YXRlO1xuXG4gICAgLy8gSWYgdGhlIGJyb3dzZXIgaWRsZSBzdGF0ZSB0cmFuc2l0aW9ucyB0byBub24taWRsZS4uLlxuICAgIGlmKG5ld1N0YXRlICE9PSBcImlkbGVcIikge1xuICAgICAgICAvLyBDYW5jZWwgYW55IHBlbmRpbmcgbm90aWZpY2F0aW9uIHRpbWVvdXRzIGFuZCBmb3JnZXQgdGhlIHRpbWVvdXQgSURzXG4gICAgICAgIGZvcihjb25zdCBpZGxlU3RhdGVUaW1lb3V0SUQgb2YgaWRsZVN0YXRlVGltZW91dHMudmFsdWVzKCkpXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWRsZVN0YXRlVGltZW91dElEKTtcbiAgICAgICAgaWRsZVN0YXRlVGltZW91dHMuY2xlYXIoKTtcblxuICAgICAgICAvLyBOb3RpZnkgYWxsIHRoZSBpZGxlIHN0YXRlIGxpc3RlbmVyc1xuICAgICAgICBmb3IoY29uc3QgaWRsZVN0YXRlTGlzdGVuZXJTZXQgb2YgaWRsZVN0YXRlTGlzdGVuZXJzLnZhbHVlcygpKVxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkbGVTdGF0ZUxpc3RlbmVyIG9mIGlkbGVTdGF0ZUxpc3RlbmVyU2V0KVxuICAgICAgICAgICAgICAgIGlkbGVTdGF0ZUxpc3RlbmVyKG5ld1N0YXRlLnJlcGVhdCgxKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYnJvd3NlciBpZGxlIHN0YXRlIHRyYW5zaXRpb25zIHRvIGlkbGUuLi5cblxuICAgIC8vIFJlbWVtYmVyIGFuIGVzdGltYXRlIG9mIHdoZW4gdGhlIGJyb3dzZXIgbGFzdCB3ZW50IGludG8gaWRsZSBzdGF0ZVxuICAgIGxhc3RJZGxlVGltZSA9IERhdGUubm93KCkgLSAobWluaW11bUlkbGVTdGF0ZURldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCk7XG5cbiAgICAvLyBTZXQgdGltZW91dHMgZm9yIGFsbCB0aGUgaWRsZSBzdGF0ZSBsaXN0ZW5lcnNcbiAgICBmb3IoY29uc3QgW2RldGVjdGlvbkludGVydmFsSW5TZWNvbmRzLCBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWxdIG9mIGlkbGVTdGF0ZUxpc3RlbmVycylcbiAgICAgICAgc2NoZWR1bGVJZGxlU3RhdGVUaW1lb3V0KGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xufVxuXG4vKipcbiAqIFNjaGVkdWxlIGEgdGltZW91dCBmb3IgYSBzZXQgb2YgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge1NldDxmdW5jdGlvbj59IGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCAtIFRoZSBzZXQgb2YgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgLSBUaGUgaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWwgKGluIHNlY29uZHMpIGZvciB0aGlzIHNldCBvZiBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgdGltZW91dCBJRCBmb3IgdGhlIHNjaGVkdWxlZCB0aW1lb3V0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2NoZWR1bGVJZGxlU3RhdGVUaW1lb3V0KGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpIHtcbiAgICAvLyBEZXRlcm1pbmUgaG93IGxvbmcgdG8gZGVsYXkgYmVmb3JlIGZpcmluZyB0aGUgbGlzdGVuZXJzXG4gICAgLy8gSWYgdGhlIGRlbGF5IGlzIG5lZ2F0aXZlLCBzZXQgaXQgdG8gMCAoaS5lLiwgZmlyZSBhcyBzb29uIGFzIHBvc3NpYmxlKVxuICAgIHZhciBkZWxheVRpbWUgPSBNYXRoLm1heChsYXN0SWRsZVRpbWUgKyAoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgKiAxMDAwKSAtIERhdGUubm93KCksIDApO1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IoY29uc3QgaWRsZVN0YXRlTGlzdGVuZXIgb2YgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsKVxuICAgICAgICAgICAgaWRsZVN0YXRlTGlzdGVuZXIoXCJpZGxlXCIpO1xuICAgIH0sIGRlbGF5VGltZSk7XG4gICAgaWRsZVN0YXRlVGltZW91dHMuc2V0KGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzLCB0aW1lb3V0SWQpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGJyb3dzZXIgaWRsZSBzdGF0ZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGlkbGVTdGF0ZUxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogVGhlIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSB0aGUgc2FtZSBgaWRsZS5JZGxlU3RhdGVgIHBhcmFtZXRlclxuICogYXMgaWYgaXQgaGFkIHN1YnNjcmliZWQgdG8gaWRsZSBzdGF0ZSBldmVudHMgd2l0aFxuICogYGJyb3dzZXIuaWRsZS5vblN0YXRlQ2hhbmdlZC5hZGRMaXN0ZW5lcmAuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgLSBUaGUgZGV0ZWN0aW9uXG4gKiBpbnRlcnZhbCBmb3IgZmlyaW5nIHRoZSBpZGxlIHN0YXRlIGxpc3RlbmVyLiBOb3RlIHRoYXQgdGhpc1xuICogdGltZSBpbiBtZWFzdXJlZCBpbiBzZWNvbmRzIGJlY2F1c2UgdGhhdCBpcyBob3cgdGhlIGBpZGxlYFxuICogQVBJIGlzIGltcGxlbWVudGVkLCBldmVuIHRob3VnaCBtb3N0IHRpbWVzIGluIHRoZSBsaWJyYXJ5XG4gKiBhcmUgbWVhc3VyZWQgaW4gbWlsbGlzZWNvbmRzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lcihpZGxlU3RhdGVMaXN0ZW5lciwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplKCk7XG5cbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYXQgbGVhc3Qgb25lIGlkbGUgc3RhdGUgbGlzdGVuZXIgd2l0aCB0aGlzXG4gICAgLy8gZGV0ZWN0aW9uIGludGVydmFsLCBhZGQgdGhlIG5ldyBsaXN0ZW5lciB0byB0aGUgU2V0IG9mIGxpc3RlbmVyc1xuICAgIC8vIGFuZCB3ZSdyZSBkb25lXG4gICAgdmFyIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCA9IGlkbGVTdGF0ZUxpc3RlbmVycy5nZXQoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xuICAgIGlmKGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbC5hZGQoaWRsZVN0YXRlTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgU2V0IGZvciBsaXN0ZW5lcnMgd2l0aCB0aGlzIGRldGVjdGlvbiBpbnRlcnZhbCwgaW5jbHVkaW5nXG4gICAgLy8gdGhpcyBpZGxlIHN0YXRlIGxpc3RlbmVyXG4gICAgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsID0gaWRsZVN0YXRlTGlzdGVuZXJzLnNldChkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcywgKG5ldyBTZXQoKSkuYWRkKGlkbGVTdGF0ZUxpc3RlbmVyKSk7XG5cbiAgICAvLyBJZiB3ZSdyZSBpbiBpZGxlIHN0YXRlLCBhbmQgd2UgaGF2ZSBiZWVuIGluIHRoZSBzdGF0ZSBmb3IgbGVzcyB0aW1lXG4gICAgLy8gdGhhbiB0aGUgZGV0ZWN0aW9uIGludGVydmFsIGZvciB0aGlzIGxpc3RlbmVyIChpLmUuLCB0aGUgbGlzdGVuZXJcbiAgICAvLyBzaG91bGQgc3RpbGwgcmVjZWl2ZSBhIHN0YXRlIGNoYW5nZSBub3RpZmljYXRpb24pLCBzY2hlZHVsZSBhXG4gICAgLy8gbm90aWZpY2F0aW9uXG4gICAgaWYoKGN1cnJlbnRJZGxlU3RhdGUgPT09IFwiaWRsZVwiKSAmJiAoRGF0ZS5ub3coKSA8IChsYXN0SWRsZVRpbWUgKyBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAqIDEwMDApKSlcbiAgICAgICAgc2NoZWR1bGVJZGxlU3RhdGVUaW1lb3V0KGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCwgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xufSIsImV4cG9ydCBjb25zdCBkZXN0aW5hdGlvbkRvbWFpbnMgPSBbXG4gICAgXCJjbm4uY29tXCIsXG4gICAgXCJzZmNocm9uaWNsZS5jb21cIixcbiAgICBcInlvdXJiaWdza3kuY29tXCIsXG4gICAgXCJub3J0aHBpbWFuZXdzLmNvbVwiXG5dIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyB1dGlsaXRpZXMgZm9yIG1hdGNoaW5nIFVSTHMgYWdhaW5zdCBkb21haW4gbmFtZXMuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmdcbiAqL1xuaW1wb3J0IHsgZGVzdGluYXRpb25Eb21haW5zIH0gZnJvbSBcIi4uLy4uL2RvbWFpbnMuanNcIlxuXG4vKiogXG4gKiBDbGFzcyBmb3IgdGVzdGluZyB3aGV0aGVyIGEgVVJMIG1hdGNoZXMgYSBzZXQgb2YgZG9tYWlucy5cbiAqIEN1cnJlbnRseSBpbXBsZW1lbnRlZCB3aXRoIHRoZSBuYXRpdmUgUmVnRXhwIG92ZXIgdGhlIGZ1bGwgVVJMLCB3aGljaCBnaXZlcyBnb29kIHBlcmZvcm1hbmNlLlxuICogV2UgbWlnaHQgYmUgYWJsZSB0byBzcGVlZCB0aGlzIHVwIGJ5IHBhcnNpbmcgdGhlIFVSTCBhbmQgdGhlbiBvbmx5IG1hdGNoaW5nIGRvbWFpbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcmxNYXRjaGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBVUkwgbWF0Y2hlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIC0gVGhlIHNldCBvZiBkb21haW5zIHRvIG1hdGNoIGFnYWluc3QuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMucmVnRXhwID0gbmV3IFJlZ0V4cChjcmVhdGVVcmxSZWdleFN0cmluZyhkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMpLCBcImlcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdCB3aGV0aGVyIGEgVVJMIG1hdGNoZXMgYSBkb21haW4gaW4gdGhlIHNldCBvZiBkb21haW5zLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHRlc3QuXG4gICAgICovXG4gICAgdGVzdFVybCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnRXhwLnRlc3QodXJsKTtcbiAgICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nIGZvciBtYXRjaGluZyBhIFVSTCBhZ2FpbnN0IGEgc2V0IG9mIGRvbWFpbnMuXG4gKiBXaWxsIG1hdGNoIGh0dHAgYW5kIGh0dHBzIHByb3RvY29scy4gQ3VycmVudGx5IGNhc2Ugc2Vuc2l0aXZlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZG9tYWlucyAtIFRoZSBzZXQgb2YgZG9tYWlucyB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybFJlZ2V4U3RyaW5nKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyA9IHRydWUpIHtcbiAgICB2YXIgdXJsTWF0Y2hSRSA9IFwiXig/Omh0dHB8aHR0cHMpOi8vXCIgKyAobWF0Y2hTdWJkb21haW5zID8gXCIoPzpbQS1aYS16MC05XFxcXC1dK1xcXFwuKSpcIiA6IFwiXCIpICsgXCIoPzpcIjtcbiAgICBmb3IgKGNvbnN0IGRvbWFpbiBvZiBkb21haW5zKVxuICAgICAgICB1cmxNYXRjaFJFID0gdXJsTWF0Y2hSRSArIGRvbWFpbi5yZXBsYWNlKC9cXC4vZywgXCJcXFxcLlwiKSArIFwifFwiO1xuICAgIHVybE1hdGNoUkUgPSB1cmxNYXRjaFJFLnN1YnN0cmluZygwLCB1cmxNYXRjaFJFLmxlbmd0aCAtIDEpICsgXCIpKD86JHwoL3xcXFxcPykuKilcIjsgIFwiKSg/OiR8Ly4qKVwiO1xuICAgIHJldHVybiB1cmxNYXRjaFJFO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGFycmF5IG9mIG1hdGNoIHBhdHRlcm5zIGZvciBtYXRjaGluZyBhIFVSTCBhZ2FpbnN0IGEgc2V0IG9mIGRvbWFpbnMuXG4gKiBXaWxsIG1hdGNoIGh0dHAgYW5kIGh0dHBzIHByb3RvY29scy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGRvbWFpbnMgLSBUaGUgc2V0IG9mIGRvbWFpbnMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW21hdGNoU3ViZG9tYWlucz10cnVlXSAtIFdoZXRoZXIgdG8gbWF0Y2ggc3ViZG9tYWlucyBvZiBkb21haW5zIGluIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IG9mIG1hdGNoIHBhdHRlcm5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXkoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zID0gdHJ1ZSkge1xuICAgIHZhciBtYXRjaFBhdHRlcm5zID0gWyBdO1xuICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHtcbiAgICAgICAgbWF0Y2hQYXR0ZXJucy5wdXNoKFwiaHR0cDovL1wiICsgKCBtYXRjaFN1YmRvbWFpbnMgPyBcIiouXCIgOiBcIlwiICkgKyBkb21haW4gKyBcIi8qXCIpO1xuICAgICAgICBtYXRjaFBhdHRlcm5zLnB1c2goXCJodHRwczovL1wiICsgKCBtYXRjaFN1YmRvbWFpbnMgPyBcIiouXCIgOiBcIlwiICkgKyBkb21haW4gKyBcIi8qXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hQYXR0ZXJucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0dWR5UGF0aHMoKSB7XG4gICAgdmFyIHN0dWR5UGF0aHMgPSB7fTtcbiAgICBzdHVkeVBhdGhzLmRvbWFpbnMgPSBuZXcgVXJsTWF0Y2hlcihkZXN0aW5hdGlvbkRvbWFpbnMpO1xuICAgIHN0dWR5UGF0aHMucGF0aHMgPSB7fVxuICAgIHN0dWR5UGF0aHMuZGVzdGluYXRpb25QYXRocyA9IGRlc3RpbmF0aW9uRG9tYWlucztcbiAgICByZXR1cm4gc3R1ZHlQYXRocztcbn1cblxuXG4vL2V4cG9ydCBmdW5jdGlvbiBnZXRBZEZpbHRlcnMoKSB7XG4vLyAgICByZXR1cm4gYWRDc3NTZWxlY3RvcnM7XG4vL31cbiIsIi8qKiBcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgcmVzZWFyY2ggYWJzdHJhY3Rpb24gb3ZlciBicm93c2VyIGV2ZW50cyByZWxhdGVkIHRvXG4gKiB3ZWJwYWdlIGxvYWRpbmcgYW5kIHVzZXIgYXR0ZW50aW9uLiBUaGUgYWJzdHJhY3Rpb24gY29uc2lzdHMgb2YgdGhlIGZvbGxvd2luZ1xuICogZXZlbnRzOlxuICogICAqIFBhZ2UgVmlzaXQgU3RhcnQgLSB0aGUgYnJvd3NlciBoYXMgc3RhcnRlZCB0byBsb2FkIGEgd2VicGFnZSBpbiBhIHRhYlxuICogICAqIFBhZ2UgQXR0ZW50aW9uIFN0YXJ0IC0gdGhlIHVzZXIgaGFzIHNoaWZ0ZWQgYXR0ZW50aW9uIHRvIGEgdGFiXG4gKiAgICogUGFnZSBBdHRlbnRpb24gU3RvcCAtIHRoZSB1c2VyIGhhcyBzaGlmdGVkIGF0dGVudGlvbiBmcm9tIGEgdGFiXG4gKiAgICogUGFnZSBWaXNpdCBTdG9wIC0gdGhlIGJyb3dzZXIgaGFzIHVubG9hZGVkIGEgd2VicGFnZSBmcm9tIGEgdGFiXG4gKiAgIFxuICogQXR0ZW50aW9uIGlzIGRlZmluZWQgYXMgc2F0aXNmeWluZyBhbGwgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogICAqIFRoZSB0YWIgaXMgdGhlIGFjdGl2ZSB0YWIgaW4gaXRzIGJyb3dzZXIgd2luZG93XG4gKiAgICogVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSB0YWIgaXMgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcbiAqICAgKiBUaGUgY3VycmVudCBicm93c2VyIHdpbmRvdyBoYXMgZm9jdXMgaW4gdGhlIG9wZXJhdGluZyBzeXN0ZW1cbiAqICAgKiAoT3B0aW9uYWwpIFRoZSB1c2VyIGhhcyBwcm92aWRlZCBpbnB1dCB0byB0aGUgYnJvd3NlciB3aXRoaW4gdGhlIGxhc3QgTiBzZWNvbmRzXG4gKiAgIFxuICogSWYgdGhlIHVzZXIncyBhdHRlbnRpb24gaXMgb24gYSB0YWIgYW5kIHRoZSB0YWIgY2xvc2VzLCB0aGUgc2VxdWVuY2Ugb2YgZXZlbnRzXG4gKiB3aWxsIGJlIFBhZ2UgQXR0ZW50aW9uIFN0b3AgLT4gUGFnZSBWaXNpdCBTdG9wLiBUaGUgdGltZXN0YW1wIGlzIHN5bmNyb25pemVkIGZvclxuICogdGhlIGV2ZW50cy5cbiAqXG4gKiBJZiB0aGUgdXNlcidzIGF0dGVudGlvbiBpcyBvbiBhIHRhYiBhbmQgdGhlIHBhZ2UgaW4gdGhlIHRhYiBjaGFuZ2VzLCB0aGUgc2VxdWVuY2VcbiAqIG9mIGV2ZW50cyB3aWxsIGJlIFBhZ2UgQXR0ZW50aW9uIFN0b3AgLT4gUGFnZSBWaXNpdCBTdG9wIC0+IFBhZ2UgVmlzaXQgU3RhcnQgLT5cbiAqIFBhZ2UgQXR0ZW50aW9uIFN0YXJ0LiBUaGUgdGltZXN0YW1wIGlzIHN5bmNyb25pemVkIGZvciB0aGUgZXZlbnRzLlxuICpcbiAqIFRoZSBwYWdlIHZpc2l0IGFuZCBhdHRlbnRpb24gZXZlbnRzIGFyZSBpbXBsZW1lbnRlZCBpbiBvbmUgbW9kdWxlIGluIG9yZGVyIHRvXG4gKiBndWFyYW50ZWUgdGhlIG9yZGVyaW5nIG9mIGV2ZW50cy5cbiAqXG4gKiBSZXByZXNlbnRlZCBhcyBhIGZpbml0ZS1zdGF0ZSBhdXRvbWF0b24sIHRoZSByZXNlYXJjaCBhYnN0cmFjdGlvbiBjb25zaXN0cyBvZlxuICogdGhlIGZvbGxvd2luZyBzdGF0ZXMgYW5kIHRyYW5zaXRpb25zLiAgXG4gKiBgYGAgICBcbiAqICAgICAgICBQYWdlIEF0dGVudGlvbiBTdGFydCA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gUGFnZSBBdHRlbnRpb24gU3RvcCAgXG4gKiAgICAgICAgICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXG4gKiAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXG4gKiAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgViAgXG4gKiAgIFBhZ2UgVmlzaXQgU3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gUGFnZSBWaXNpdCBTdG9wICBcbiAqIGBgYCAgIFxuICogTm90ZSB0aGF0IHRoaXMgbW9kdWxlIGRlcGVuZHMgb24gdGhlIGlkbGUgQVBJLCB3aGljaCBoYXMgYSBjb3VwbGUgcXVpcmtzIGluIEZpcmVmb3g6XG4gKiAgICogVGhlcmUgaXMgYSBmaXZlLXNlY29uZCBpbnRlcnZhbCB3aGVuIHBvbGxpbmcgaWRsZSBzdGF0dXMgZnJvbSB0aGUgb3BlcmF0aW5nXG4gKiAgICAgc3lzdGVtLlxuICogICAqIERlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0sIHRoZSBpZGxlIEFQSSByZXBvcnRzIGVpdGhlciB0aW1lIHNpbmNlIHVzZXIgaW5wdXQgdG9cbiAqICAgICB0aGUgYnJvd3NlciBvciB0aW1lIHNpbmNlIHVzZXIgaW5wdXQgdG8gdGhlIG9wZXJhdGluZyBzeXN0ZW0uXG4gKlxuICogVGhlIHBvbGxpbmcgaW50ZXJ2YWwgY29hcnNlbnMgdGhlIHRpbWluZyBvZiBwYWdlIGF0dGVudGlvbiBldmVudHMgcmVsYXRlZCB0byBpZGxlIHN0YXRlLlxuICogQXMgbG9uZyBhcyB0aGUgcG9sbGluZyBpbnRlcnZhbCBpcyByZWxhdGl2ZWx5IHNob3J0IGluIGNvbXBhcmlzb24gdG8gdGhlIGlkbGUgdGhyZXNob2xkLFxuICogdGhhdCBzaG91bGQgbm90IGJlIGFuIGlzc3VlLlxuICogXG4gKiBUaGUgcGxhdGZvcm0tc3BlY2lmaWMgbWVhbmluZyBvZiBpZGxlIHN0YXRlIHNob3VsZCBhbHNvIG5vdCBiZSBhbiBpc3N1ZS4gVGhlcmUgaXMgb25seSBhXG4gKiBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBtZWFuaW5ncyBvZiBpZGxlIHN0YXRlIHdoZW4gdGhlIHVzZXIgaXMgcHJvdmlkaW5nIGlucHV0IHRvXG4gKiBhbm90aGVyIGFwcGxpY2F0aW9uOyBpZiB0aGUgdXNlciBpcyBwcm92aWRpbmcgaW5wdXQgdG8gdGhlIGJyb3dzZXIsIG9yIGlzIG5vdCBwcm92aWRpbmdcbiAqIGlucHV0IGF0IGFsbCwgdGhlIHR3byBtZWFuaW5ncyBhcmUgaWRlbnRpY2FsLiBJbiB0aGUgc2NlbmFyaW8gd2hlcmUgdGhlIHVzZXIgaXMgcHJvdmlkaW5nXG4gKiBpbnB1dCB0byBhbm90aGVyIGFwcGxpY2F0aW9uLCB0aGUgYnJvd3NlciB3aWxsIGxvc2UgZm9jdXMgaW4gdGhlIG9wZXJhdGluZyBzeXN0ZW07IHRoaXNcbiAqIG1vZHVsZSB3aWxsIGRldGVjdCB0aGF0IHdpdGggdGhlIHdpbmRvd3MgQVBJIGFuZCBmaXJlIGEgcGFnZSBhdHRlbnRpb24gc3RvcCAoaWYgbmVlZGVkKS5cbiAqIFxuICogU29tZSBrbm93biBsaW1pdGF0aW9ucyB0byBiZSBhd2FyZSBvZjpcbiAqICAgKiBUaGUgbW9kdWxlIGRvZXMgbm90IGN1cnJlbnRseSBmaWx0ZXIgdGFiLWxldmVsIGNvbnRlbnQgYnkgcHJvdG9jb2wgb3IgY29udGVudCB0eXBlLiBXZVxuICogICAgIG1pZ2h0IHdhbnQgdG8gcmV2aXNpdCB0aGlzLiBGaWx0ZXJpbmcgYnkgcHJvdG9jb2wgaXMgZWFzeeKAlHRoZSBtb2R1bGUgYWxyZWFkeSB0cmFja3NcbiAqICAgICB3aGV0aGVyIGEgdGFiIGNvbnRhaW5zIGNvbnRlbnQgbG9hZGVkIHZpYSBIVFRQIG9yIEhUVFBTLiBGaWx0ZXJpbmcgYnkgY29udGVudCB0eXBlIGlzXG4gKiAgICAgbW9yZSBkaWZmaWN1bHQuIFdlIG1pZ2h0IGJlIGFibGUgdG8gYWNjb21wbGlzaCB0aGF0IGJ5IHVzaW5nIGB3ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkYFxuICogICAgIHRvIHN0YXJ0IHBhZ2UgdmlzaXRzIGFuZCBjaGVja2luZyB0aGUgYENvbnRlbnQtVHlwZWAgaGVhZGVyLCB0aG91Z2ggd2UnZCBzdGlsbCBoYXZlIHRvIGhhbmRsZVxuICogICAgIHRhYnMgdGhhdCBhcmUgb3BlbiB3aGVuIHRoZSBtb2R1bGUgaW5pdGlhbGl6ZXMsIGFuZCB3ZSdkIG1pc3MgcGFnZXMgdGhhdCByZWx5IG9uIE1JTUUgdHlwZVxuICogICAgIHNuaWZmaW5nLlxuICogICAqIFdoZW4gdGhlIG1vZHVsZSBpbml0aWFsaXplcywgdGhlcmUgaXNuJ3QgYSBnb29kIHdheSB0byBnZXQgdGhlIHJlZmVycmVycyBmb3Igb3BlblxuICogICAgIHRhYnMgd2l0aG91dCBlaXRoZXIgZGVsYXlpbmcgaW5pdGlhbGl6YXRpb24gb3Igcmlza2luZyBhIHJhY2UgY29uZGl0aW9uLiBUaGVcbiAqICAgICByZWZlcnJlcnMgZm9yIHBhZ2VzIG9wZW4gd2hlbiB0aGUgbW9kdWxlIGluaXRpYWxpemVzIGFyZSBjdXJyZW50bHkgc2V0IHRvIGBcIlwiYC5cbiAqIFxuICogQW5kIHNvbWUgaW1wbGVtZW50YXRpb24gcXVpcmtzIHRvIGJlIGF3YXJlIG9mIGZvciBmdXR1cmUgZGV2ZWxvcG1lbnQgb24gdGhpcyBtb2R1bGU6XG4gKiAgICogVGhlIGB0YWJzLm9uQ3JlYXRlZGAgZXZlbnQgYXBwZWFycyB0byBjb25zaXN0ZW50bHkgZmlyZSBiZWZvcmUgdGhlIGB3aW5kb3dzLm9uQ3JlYXRlZGBcbiAqICAgICBldmVudCwgc28gdGhpcyBtb2R1bGUgbGlzdGVucyB0byB0aGUgYHRhYnMub25DcmVhdGVkYCBldmVudCB0byBnZXQgYW4gZWFybGllciB2aWV3IG9mXG4gKiAgICAgd2luZG93IGRldGFpbHMuIFRoZSBtb2R1bGUgYXNzdW1lcyB0aGF0IGEgYHRhYnMub25DcmVhdGVkYCBldmVudCB3aXRoIGEgcG9zaXRpdmUgdGFiXG4gKiAgICAgSUQgaXMgZm9yIGEgYFwibm9ybWFsXCJgIG9yIGBcInBvcHVwXCJgIHdpbmRvdyB0eXBlLlxuICogICAqIE5vbi1icm93c2VyIHdpbmRvd3MgZG8gbm90IGFwcGVhciBpbiB0aGUgcmVzdWx0cyBvZiBgd2luZG93cy5nZXRBbGwoKWAsIGFuZCBjYWxsaW5nXG4gKiAgICAgYHdpbmRvd3MuZ2V0KClgIG9uIGEgbm9uLWJyb3dzZXIgd2luZG93IHRocm93cyBhbiBlcnJvci4gU3dpdGNoaW5nIGZvY3VzIHRvIGEgbm9uLVxuICogICAgIGJyb3dzZXIgd2luZG93IHdpbGwsIGhvd2V2ZXIsIGZpcmUgdGhlIGB3aW5kb3dzLm9uRm9jdXNDaGFuZ2VkYCBldmVudC4gVGhlIG1vZHVsZVxuICogICAgIGFzc3VtZXMgdGhhdCBpZiBgd2luZG93cy5vbkZvY3VzQ2hhbmdlZGAgZmlyZXMgd2l0aCBhbiB1bmtub3duIHdpbmRvdywgdGhhdCB3aW5kb3dcbiAqICAgICBpcyBhIG5vbi1icm93c2VyIHdpbmRvdy5cbiAqICAgKiBUaGUgbW9kdWxlIGFzc3VtZXMgdGhhdCB2YWxpZCB0YWIgSURzIGFuZCB3aW5kb3cgSURzIGFyZSBhbHdheXMgPj0gMC5cbiAqICAgKiBUaGUgbW9kdWxlIGFzc3VtZXMgdGhhdCwgaWYgdGhlcmUgd2FzIGEgYHdlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVyc2AgZXZlbnQgYmVmb3JlIGFcbiAqICAgICBgdGFicy5vblVwZGF0ZWRgIGV2ZW50IHdpdGggdGhlIHNhbWUgdGFiIElEIGFuZCBVUkwsIHRoZSB3ZWIgcmVxdWVzdCBtYXRjaGVzIHRoZSB0YWJcbiAqICAgICB1cGRhdGUuIFRoaXMgYXNzdW1wdGlvbiBpcyBuZWVkZWQgdG8gbWF0Y2ggcmVmZXJyZXJzIHRvIG5ldyBwYWdlcyBpbiB0YWJzLlxuICogICAqIFRoZSBtb2R1bGUgbGlzdGVucyBmb3IgYHRhYnMub25BdHRhY2hlZGAgdG8gdHJhY2sgdGFiIG1vdmVtZW50IGJldHdlZW4gd2luZG93cy4gSXQgZG9lc1xuICogICAgIG5vdCBsaXN0ZW4gZm9yIGB0YWJzLm9uRGV0YWNoZWRgIHNvIHRoYXQgdGFicyByZW1haW4gYXNzb2NpYXRlZCB3aXRoIHZhbGlkIHdpbmRvd3MgYW5kXG4gKiAgICAgYmVjYXVzZSBpdCdzIGxpa2VseSB0aGUgdXNlciBpcyBqdXN0IG1vdmluZyB0aGUgdGFiIHdpdGhpbiB0aGUgdGFiIHN0cmlwIGluIGEgd2luZG93LlxuICogICAgIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5QYWdlRXZlbnRzXG4gKi9cblxuaW1wb3J0ICogYXMgSWRsZSBmcm9tIFwiLi9JZGxlLmpzXCJcblxuLyoqXG4gKiBUaGUgdGhyZXNob2xkIE4gKGluIHNlY29uZHMpIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRoZSBicm93c2VyIGhhcyB0aGUgdXNlcidzIGF0dGVudGlvbi5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmNvbnN0IGlkbGVUaHJlc2hvbGQgPSAxNTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGNvbnNpZGVyIHVzZXIgaW5wdXQgaW4gZGV0ZXJtaW5pbmcgYXR0ZW50aW9uIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbmNvbnN0IGNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uID0gdHJ1ZTtcblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50cy5cbiAqIEBjYWxsYmFjayBwYWdlVmlzaXRTdGFydExpc3RlbmVyXG4gKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyAtIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMud2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIE5vdGUgdGhhdCB0YWJzIGNhbiBzdWJzZXF1ZW50bHkgbW92ZSBiZXR3ZWVuIHdpbmRvd3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGV0YWlscy51cmwgLSBUaGUgVVJMIG9mIHRoZSBwYWdlIGxvYWRpbmcgaW4gdGhlIHRhYi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXRhaWxzLnJlZmVycmVyIC0gVGhlIHJlZmVycmVyIFVSTCBmb3IgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLCBvciBgXCJcImAgaWZcbiAqIHRoZXJlIGlzIG5vIHJlZmVycmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlVmlzaXRTdGFydExpc3RlbmVyRGV0YWlsc1xuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwcm9wZXJ0eSB7cGFnZVZpc2l0U3RhcnRMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgc2V0IG9mIGxpc3RlbmVyIGRldGFpbHMgZm9yIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnRzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7U2V0PFBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzPn1cbiAqL1xuY29uc3QgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lclNldCA9IG5ldyBTZXQoKTtcblxuLyoqIFxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgbm90aWZpZWQgYWJvdXQgcGFnZSB2aXNpdCBzdGFydCBldmVudHMuXG4gKiBAcGFyYW0ge3BhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJ9IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RpZnlBYm91dEN1cnJlbnRQYWdlcz10cnVlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgdGhlIGN1cnJlbnRseSBvcGVuIHNldCBvZiBwYWdlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByaXZhdGVXaW5kb3dzPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgdG8gdXNlIGlmIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWQgZm9yIHRoZSBjdXJyZW50bHkgb3BlbiBzZXQgb2YgcGFnZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIocGFnZVZpc2l0U3RhcnRMaXN0ZW5lciwgbm90aWZ5QWJvdXRDdXJyZW50UGFnZXMgPSB0cnVlLCBwcml2YXRlV2luZG93cyA9IGZhbHNlLCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJTZXQuYWRkKHtcbiAgICAgICAgbGlzdGVuZXI6IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIsXG4gICAgICAgIHByaXZhdGVXaW5kb3dzOiBwcml2YXRlV2luZG93c1xuICAgIH0pO1xuICAgIGlmKG5vdGlmeUFib3V0Q3VycmVudFBhZ2VzKVxuICAgICAgICBub3RpZnlQYWdlVmlzaXRTdGFydExpc3RlbmVyQWJvdXRDdXJyZW50UGFnZXMocGFnZVZpc2l0U3RhcnRMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCk7XG59XG5cbi8qKiBcbiAqIE5vdGlmeSBwYWdlIHZpc2l0IHN0YXJ0IGxpc3RlbmVycyBhYm91dCBhIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIG9mIHRoZSBwYWdlIGxvYWRpbmcgaW4gdGhlIHRhYi5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSByZWZlcnJlciBVUkwgZm9yIHRoZSBwYWdlIGxvYWRpbmcgaW4gdGhlIHRhYiwgb3IgYFwiXCJgIGlmXG4gKiB0aGVyZSBpcyBubyByZWZlcnJlci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIGV2ZW50IGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuZnVuY3Rpb24gbm90aWZ5UGFnZVZpc2l0U3RhcnRMaXN0ZW5lcnModGFiSWQsIHdpbmRvd0lkLCB1cmwsIHJlZmVycmVyLCBwcml2YXRlV2luZG93LCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgZm9yIChjb25zdCBwYWdlVmlzaXRTdGFydExpc3RlbmVyRGV0YWlscyBvZiBwYWdlVmlzaXRTdGFydExpc3RlbmVyU2V0KVxuICAgICAgICBpZighcHJpdmF0ZVdpbmRvdyB8fCBwYWdlVmlzaXRTdGFydExpc3RlbmVyRGV0YWlscy5wcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzLmxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICB0YWJJZCxcbiAgICAgICAgICAgICAgICB3aW5kb3dJZCxcbiAgICAgICAgICAgICAgICB1cmw6IHVybC5yZXBlYXQoMSksIC8vIGNvcHkgdGhlIHN0cmluZyBpbiBjYXNlIGEgbGlzdGVuZXIgbW9kaWZpZXMgaXRcbiAgICAgICAgICAgICAgICByZWZlcnJlcjogcmVmZXJyZXIucmVwZWF0KDEpLFxuICAgICAgICAgICAgICAgIHByaXZhdGVXaW5kb3csXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wXG4gICAgICAgICAgICB9KTtcbn1cblxuLyoqXG4gKiBOb3RpZnkgYSBwYWdlIHZpc2l0IHN0YXJ0IGxpc3RlbmVyIGFib3V0IHRoZSBjdXJyZW50IHNldCBvZiBvcGVuIHBhZ2VzLiBVc2VmdWwgZm9yIHdoZW5cbiAqIGEgbGlzdGVuZXIgaXMgcmVnaXN0ZXJlZCBpbiB0aGUgbWlkZGxlIG9mIGEgYnJvd3Npbmcgc2Vzc2lvbiAoZS5nLiwgYmVjYXVzZSB0aGUgZXh0ZW5zaW9uXG4gKiB3YXMganVzdCBpbnN0YWxsZWQgb3IgdGhlIHVzZXIganVzdCBnYXZlIGNvbnNlbnQpLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7cGFnZVZpc2l0U3RhcnRMaXN0ZW5lcn0gcGFnZVZpc2l0U3RhcnRMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgYWJvdXQgcGFnZXMgaW4gcHJpdmF0ZVxuICogd2luZG93cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbm90aWZ5UGFnZVZpc2l0U3RhcnRMaXN0ZW5lckFib3V0Q3VycmVudFBhZ2VzKHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzLCB0aW1lU3RhbXApIHtcbiAgICAvLyBMb2FkIHRoZSB0YWJzIGZyb20gdGhlIHRhYiBzdGF0ZSBjYWNoZSB0byBhdm9pZCBpbmNvbnNpc3RlbmNpZXNcbiAgICBmb3IgKGNvbnN0IFt0YWJJZCwgdGFiRGV0YWlsc10gb2YgdGFiU3RhdGUpXG4gICAgICAgIGlmKCF0YWJEZXRhaWxzLnByaXZhdGVXaW5kb3cgfHwgcHJpdmF0ZVdpbmRvd3MpXG4gICAgICAgICAgICBwYWdlVmlzaXRTdGFydExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICB0YWJJZDogdGFiSWQsXG4gICAgICAgICAgICAgICAgd2luZG93SWQ6IHRhYkRldGFpbHMud2luZG93SWQsXG4gICAgICAgICAgICAgICAgdXJsOiB0YWJEZXRhaWxzLnVybC5yZXBlYXQoMSksIC8vIGNvcHkgdGhlIHN0cmluZyBpbiBjYXNlIGEgbGlzdGVuZXIgbW9kaWZpZXMgaXRcbiAgICAgICAgICAgICAgICByZWZlcnJlcjogdGFiRGV0YWlscy5yZWZlcnJlci5yZXBlYXQoMSksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZVdpbmRvdzogdGFiRGV0YWlscy5wcml2YXRlV2luZG93LFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wXG4gICAgICAgICAgICB9KTtcbn1cblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBwYWdlIHZpc2l0IHN0b3AgZXZlbnRzLlxuICogQGNhbGxiYWNrIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lclxuICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHMgLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMud2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwYWdlIHZpc2l0IHN0YXJ0IHN0b3AgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlVmlzaXRTdG9wTGlzdGVuZXJEZXRhaWxzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHByb3BlcnR5IHtwYWdlVmlzaXRTdG9wTGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIHNldCBvZiBsaXN0ZW5lciBkZXRhaWxzIGZvciBwYWdlIHZpc2l0IHN0b3AgZXZlbnRzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7U2V0PFBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHM+fVxuICovXG5jb25zdCBwYWdlVmlzaXRTdG9wTGlzdGVuZXJTZXQgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgbm90aWZpZWQgYWJvdXQgcGFnZSB2aXNpdCBzdG9wIGV2ZW50cy5cbiAqIEBwYXJhbSB7cGFnZVZpc2l0U3RvcExpc3RlbmVyfSBwYWdlVmlzaXRTdG9wTGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcml2YXRlV2luZG93cz1mYWxzZV0gLSBXaGV0aGVyIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWQgZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclBhZ2VWaXNpdFN0b3BMaXN0ZW5lcihwYWdlVmlzaXRTdG9wTGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzID0gZmFsc2UpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgcGFnZVZpc2l0U3RvcExpc3RlbmVyU2V0LmFkZCh7XG4gICAgICAgIGxpc3RlbmVyOiBwYWdlVmlzaXRTdG9wTGlzdGVuZXIsXG4gICAgICAgIHByaXZhdGVXaW5kb3dzOiBwcml2YXRlV2luZG93c1xuICAgIH0pO1xufVxuXG4vKiogXG4gKiBOb3RpZnkgcGFnZSB2aXNpdCBzdG9wIGxpc3RlbmVycyBhYm91dCBhIHBhZ2UgdmlzaXQgc3RvcCBldmVudC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgZXZlbnQgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5mdW5jdGlvbiBub3RpZnlQYWdlVmlzaXRTdG9wTGlzdGVuZXJzKHRhYklkLCB3aW5kb3dJZCwgcHJpdmF0ZVdpbmRvdywgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGZvciAoY29uc3QgcGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlscyBvZiBwYWdlVmlzaXRTdG9wTGlzdGVuZXJTZXQpXG4gICAgICAgIGlmKCFwcml2YXRlV2luZG93IHx8IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHMucHJpdmF0ZVdpbmRvd3MpXG4gICAgICAgICAgICBwYWdlVmlzaXRTdG9wTGlzdGVuZXJEZXRhaWxzLmxpc3RlbmVyKHsgdGFiSWQsIHdpbmRvd0lkLCB0aW1lU3RhbXAgfSk7XG59XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnRzLlxuICogQGNhbGxiYWNrIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyXG4gKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyAtIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLndpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBOb3RlIHRoYXQgdGFicyBjYW4gc3Vic2VxdWVudGx5IG1vdmUgYmV0d2VlbiB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHR5cGVkZWYge09iamVjdH0gUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJEZXRhaWxzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHByb3BlcnR5IHtwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgc2V0IG9mIGxpc3RlbmVyIGRldGFpbHMgZm9yIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge1NldDxQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHM+fVxuICovXG5jb25zdCBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lclNldCA9IG5ldyBTZXQoKTtcblxuLyoqIFxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgbm90aWZpZWQgYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnRzLlxuICogQHBhcmFtIHtwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcn0gcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uIFxuICogQHBhcmFtIHtib29sZWFufSBbbm90aWZ5QWJvdXRDdXJyZW50UGFnZXM9dHJ1ZV0gLSBXaGV0aGVyIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWRcbiAqIGZvciB0aGUgcGFnZSB0aGF0IGN1cnJlbnRseSBoYXMgYXR0ZW50aW9uIChpZiB0aGVyZSBpcyBvbmUpLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJpdmF0ZVdpbmRvd3M9ZmFsc2VdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB0byB1c2UgaWYgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZFxuICogZm9yIHRoZSBwYWdlIHRoYXQgY3VycmVudGx5IGhhcyBhdHRlbnRpb24gKGlmIHRoZXJlIGlzIG9uZSkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLCBub3RpZnlBYm91dEN1cnJlbnRQYWdlQXR0ZW50aW9uID0gdHJ1ZSwgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSwgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGluaXRpYWxpemUoKTtcbiAgICBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lclNldC5hZGQoe1xuICAgICAgICBsaXN0ZW5lcjogcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIsXG4gICAgICAgIHByaXZhdGVXaW5kb3dzOiBwcml2YXRlV2luZG93c1xuICAgIH0pO1xuICAgIGlmKG5vdGlmeUFib3V0Q3VycmVudFBhZ2VBdHRlbnRpb24pXG4gICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyQWJvdXRDdXJyZW50UGFnZUF0dGVudGlvbihwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCk7XG59XG5cbi8qKiBcbiAqIE5vdGlmeSBwYWdlIGF0dGVudGlvbiBzdGFydCBsaXN0ZW5lcnMgYW5kIGNvbnRlbnQgc2NyaXB0cyBhYm91dCBhIHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGV2ZW50LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSBldmVudCBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyh0YWJJZCwgd2luZG93SWQsIHByaXZhdGVXaW5kb3csIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyRGV0YWlscyBvZiBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lclNldClcbiAgICAgICAgaWYoIXByaXZhdGVXaW5kb3cgfHwgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJEZXRhaWxzLnByaXZhdGVXaW5kb3dzKVxuICAgICAgICAgICAgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJEZXRhaWxzLmxpc3RlbmVyKHsgdGFiSWQsIHdpbmRvd0lkLCB0aW1lU3RhbXAgfSk7XG4gICAgaWYobm90aWZ5Q29udGVudFNjcmlwdHNBYm91dFBhZ2VBdHRlbnRpb24gJiYgKCFwcml2YXRlV2luZG93IHx8IG5vdGlmeUNvbnRlbnRTY3JpcHRzSW5Qcml2YXRlV2luZG93c0Fib3V0UGFnZUF0dGVudGlvbikpXG4gICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyB0eXBlOiBcIldlYlNjaWVuY2UucGFnZUF0dGVudGlvblN0YXJ0XCIgfSk7XG59XG5cbi8qKlxuICogTm90aWZ5IGEgcGFnZSBhdHRlbnRpb24gc3RhcnQgbGlzdGVuZXIgYWJvdXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIGluIHRoZSBjdXJyZW50bHlcbiAqIGZvY3VzZWQgd2luZG93IChpZiB0aGVyZSBpcyBzdWNoIGEgdGFiKS4gVXNlZnVsIGZvciB3aGVuIGEgbGlzdGVuZXIgaXMgcmVnaXN0ZXJlZCBpbiB0aGVcbiAqIG1pZGRsZSBvZiBhIGJyb3dzaW5nIHNlc3Npb24gKGUuZy4sIGJlY2F1c2UgdGhlIGV4dGVuc2lvbiB3YXMganVzdCBpbnN0YWxsZWQgb3IgdGhlIHVzZXJcbiAqIGp1c3QgZ2F2ZSBjb25zZW50KS5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3BhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyfSBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgaWYgdGhlIHBhZ2Ugd2l0aFxuIGF0dGVudGlvbiBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIGxpc3RlbmVyIHdhcyByZWdpc3RlcmVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckFib3V0Q3VycmVudFBhZ2VBdHRlbnRpb24ocGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzLCB0aW1lU3RhbXApIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBhY3RpdmUgdGFiIG9yIG5vIGZvY3VzZWQgd2luZG93LCB0aGVyZSBpcyBubyBub3RpZmljYXRpb24gdG8gcHJvdmlkZVxuICAgIGlmKChjdXJyZW50QWN0aXZlVGFiIDwgMCkgfHwgKGN1cnJlbnRGb2N1c2VkV2luZG93IDwgMCkpXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vIElmIHRoZSBtb2R1bGUgc2hvdWxkIGNvbnNpZGVyIHVzZXIgaW5wdXQgYW5kIHRoZSBicm93c2VyIGlzIGluYWN0aXZlLCB0aGVyZSBpcyBubyBub3RpZmljYXRpb24gdG8gcHJvdmlkZVxuICAgIGlmKGNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uICYmICFicm93c2VySXNBY3RpdmUpXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vIElmIHRoZSBsaXN0ZW5lciBzaG91bGQgbm90IHJlY2VpdmUgbm90aWZpY2F0aW9ucyBhYm91dCBwcml2YXRlIHdpbmRvd3MgYW5kIHRoaXMgaXMgYSBwcml2YXRlIHdpbmRvd1xuICAgIC8vIGFjY29yZGluZyB0byB0aGUgd2luZG93IHN0YXRlIGNhY2hlLCB0aGVyZSBpcyBubyBub3RpZmljYXRpb24gdG8gcHJvdmlkZVxuICAgIGlmKCFwcml2YXRlV2luZG93cyAmJiBpc1ByaXZhdGVXaW5kb3coY3VycmVudEZvY3VzZWRXaW5kb3cpKVxuICAgICAgICByZXR1cm47XG4gICAgXG4gICAgLy8gT3RoZXJ3aXNlLCBub3RpZnkgdGhlIGxpc3RlbmVyXG4gICAgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIoe1xuICAgICAgICB0YWJJZDogY3VycmVudEFjdGl2ZVRhYixcbiAgICAgICAgd2luZG93SWQ6IGN1cnJlbnRGb2N1c2VkV2luZG93LFxuICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcFxuICAgIH0pO1xufVxuXG4vKipcbiAqIEEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRzLlxuICogQGNhbGxiYWNrIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy53aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogTm90ZSB0aGF0IHRhYnMgY2FuIHN1YnNlcXVlbnRseSBtb3ZlIGJldHdlZW4gd2luZG93cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHR5cGVkZWYge09iamVjdH0gUGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lckRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcHJvcGVydHkge3BhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBzZXQgb2YgbGlzdGVuZXIgZGV0YWlscyBmb3IgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtTZXQ8UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lckRldGFpbHM+fVxuICovXG5jb25zdCBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyU2V0ID0gbmV3IFNldCgpO1xuXG4vKiogXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50cy5cbiAqIEBwYXJhbSB7cGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcn0gcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi4gXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIocGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSkge1xuICAgIGluaXRpYWxpemUoKTtcbiAgICBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyU2V0LmFkZCh7XG4gICAgICAgIGxpc3RlbmVyOiBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyLFxuICAgICAgICBwcml2YXRlV2luZG93czogcHJpdmF0ZVdpbmRvd3NcbiAgICB9KTtcbn1cblxuLyoqIFxuICogTm90aWZ5IHBhZ2UgYXR0ZW50aW9uIHN0b3AgbGlzdGVuZXJzIGFuZCBjb250ZW50IHNjcmlwdHMgYWJvdXQgYSBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSBldmVudCBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKHRhYklkLCB3aW5kb3dJZCwgcHJpdmF0ZVdpbmRvdywgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGZvciAoY29uc3QgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lckRldGFpbHMgb2YgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lclNldClcbiAgICAgICAgaWYoIXByaXZhdGVXaW5kb3cgfHwgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lckRldGFpbHMucHJpdmF0ZVdpbmRvd3MpXG4gICAgICAgICAgICBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscy5saXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgdGFiSWQ6IHRhYklkLFxuICAgICAgICAgICAgICAgIHdpbmRvd0lkOiB3aW5kb3dJZCxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcFxuICAgICAgICAgICAgfSk7XG4gICAgaWYobm90aWZ5Q29udGVudFNjcmlwdHNBYm91dFBhZ2VBdHRlbnRpb24gJiYgKCFwcml2YXRlV2luZG93IHx8IG5vdGlmeUNvbnRlbnRTY3JpcHRzSW5Qcml2YXRlV2luZG93c0Fib3V0UGFnZUF0dGVudGlvbikpXG4gICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyB0eXBlOiBcIldlYlNjaWVuY2UucGFnZUF0dGVudGlvblN0b3BcIiB9KTtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHMgaW4gbm9uLXByaXZhdGUgd2luZG93cyBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIG5vdGlmeUNvbnRlbnRTY3JpcHRzQWJvdXRQYWdlQXR0ZW50aW9uID0gZmFsc2U7XG5cbi8qKlxuICogV2hldGhlciB0byBub3RpZnkgY29udGVudCBzY3JpcHRzIGluIHByaXZhdGUgd2luZG93cyBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIG5vdGlmeUNvbnRlbnRTY3JpcHRzSW5Qcml2YXRlV2luZG93c0Fib3V0UGFnZUF0dGVudGlvbiA9IGZhbHNlO1xuXG4vKipcbiAqIFNldCB3aGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHMgYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RhdGUgY2hhbmdlcy5cbiAqIENvbnRlbnQgc2NyaXB0cyB3aWxsIHJlY2VpdmUgdGhlIG1lc3NhZ2UgYHsgdHlwZTogXCJXZWJTY2llbmNlLnBhZ2VBdHRlbnRpb25TdGFydFwiIH1gXG4gKiB3aGVuIHRoZSBwYWdlIGdhaW5zIGF0dGVudGlvbiwgYW5kIHdpbGwgcmVjZWl2ZSB0aGUgbWVzc2FnZSBgeyB0eXBlOiBcIldlYlNjaWVuY2UucGFnZUF0dGVudGlvblN0b3BcIiB9YFxuICogd2hlbiB0aGUgcGFnZSBsb3NlcyBhdHRlbnRpb24uIFRoaXMgbW9kdWxlIGRvZXMgbm90IHByb3ZpZGUgbm90aWZpY2F0aW9uc1xuICogdG8gY29udGVudCBzY3JpcHRzIGFib3V0IHBhZ2UgdmlzaXQgc3RhdGUgY2hhbmdlcywgYmVjYXVzZSBjb250ZW50IHNjcmlwdHNcbiAqIGNhbiBvYnNlcnZlIHRob3NlIGRpcmVjdGx5IGFuZCB0aGVyZSBpcyBhIHBvc3NpYmxlIHJhY2UgY29uZGl0aW9uIHdpdGggY2xvc2luZyBhIHBhZ2UuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG5vdGlmaWNhdGlvblNldHRpbmcgLSBXaGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHNcbiAqIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXRlIGNoYW5nZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgY29udGVudCBzY3JpcHRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFBhZ2VBdHRlbnRpb25Db250ZW50U2NyaXB0TWVzc2FnZXMobm90aWZpY2F0aW9uU2V0dGluZywgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSkge1xuICAgIGluaXRpYWxpemUoKTtcbiAgICBub3RpZnlDb250ZW50U2NyaXB0c0Fib3V0UGFnZUF0dGVudGlvbiA9IG5vdGlmaWNhdGlvblNldHRpbmc7XG4gICAgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uID0gcHJpdmF0ZVdpbmRvd3M7XG59XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIGluIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBicm93c2luZyB3aW5kb3cuIEhhcyB0aGUgdmFsdWUgLTFcbiAqIGlmIHRoZXJlIGlzIG5vIHN1Y2ggdGFiLiBcbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGZvY3VzZWQgYnJvd3Npbmcgd2luZG93LiBIYXMgdGhlIHZhbHVlIC0xIGlmIHRoZXJlIGlzIG5vIHN1Y2ggd2luZG93LiBcbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gLTE7XG5cbi8qKlxuICogQ2hlY2tzIGZvciB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgICogVGhlIHRhYiBpcyB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgaW4gdGhlIGN1cnJlbnRseSBmb2N1c2VkIHdpbmRvdy5cbiAqICAgKiBUaGUgd2luZG93IGlzIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB3aW5kb3cuXG4gKiAgICogVGhlIGJyb3dzZXIgaXMgYWN0aXZlIChpLmUuLCBub3QgaWRsZSksIGlmIHRoZSBtb2R1bGUgaXMgY29uZmlndXJlZCB0b1xuICogICAgIGNvbnNpZGVyIHVzZXIgaW5wdXQgaW4gZGV0ZXJtaW5pbmcgdGhlIGF0dGVudGlvbiBzdGF0ZS5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyB0byBjaGVjay5cbiAqL1xuZnVuY3Rpb24gY2hlY2tGb3JBdHRlbnRpb24odGFiSWQsIHdpbmRvd0lkKSB7XG4gICAgcmV0dXJuICgoY3VycmVudEFjdGl2ZVRhYiA9PSB0YWJJZCkgJiYgKGN1cnJlbnRGb2N1c2VkV2luZG93ID09IHdpbmRvd0lkKSAmJiAoY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24gPyBicm93c2VySXNBY3RpdmUgOiB0cnVlKSk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2luZG93RGV0YWlsc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiB3aW5kb3cuIFRoaXMgc3RyaW5nIGNhbiBoYXZlIHRoZVxuICogc2FtZSB2YWx1ZXMgYXMgYHdpbmRvd3MuV2luZG93VHlwZWAgKGBcIm5vcm1hbFwiYCwgYFwicG9wdXBcImAsIGBcInBhbmVsXCJgLCBhbmRcbiAqIGBcImRldnRvb2xzXCJgKSwgcGx1cyB0aGUgdmFsdWUgYFwibm9ybWFsb3Jwb3B1cFwiYCBpZiB3ZSBkb24ndCB5ZXQga25vdyB3aGljaFxuICogb2YgdGhlIHR3byB0eXBlcyB0aGUgd2luZG93IGlzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFjdGl2ZVRhYiAtIFRoZSBJRCBvZiB0aGUgYWN0aXZlIHRhYiBpbiB0aGUgd2luZG93LFxuICogb3IgLTEgaWYgdGhlcmUgaXMgbm8gYWN0aXZlIHRhYi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmFjeSAtIFdoZXRoZXIgdGhlIHdpbmRvdyBpcyBhIHByaXZhdGUgd2luZG93LiBWYWx1ZXNcbiAqIGFyZSBgXCJub3JtYWxcImAgZm9yIGEgbm9uLXByaXZhdGUgd2luZG93LCBgXCJwcml2YXRlXCJgIGZvciBhIHByaXZhdGUgd2luZG93LFxuICogYW5kIGBcInVua25vd25cImAgaWYgdGhlIHdpbmRvdydzIHByaXZhY3kgc3RhdHVzIGlzIHVua25vd24uXG4gKi9cblxuLyoqXG4gKiBBIE1hcCB0aGF0IHRyYWNrcyB0aGUgY3VycmVudCBzdGF0ZSBvZiBicm93c2VyIHdpbmRvd3MuIFdlIG5lZWQgdGhpcyBjYWNoZWRcbiAqIHN0YXRlIHRvIGF2b2lkIGFzeW5jaHJvbm91cyBxdWVyaWVzIHdoZW4gdGhlIGZvY3VzZWQgd2luZG93IGNoYW5nZXMuIFRoZVxuICoga2V5cyBhcmUgdGFiIElEcyBhbmQgdGhlIHZhbHVlcyBhcmUgV2luZG93RGV0YWlscyBvYmplY3RzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPG51bWJlcixXaW5kb3dEZXRhaWxzPn1cbiAqIEBkZWZhdWx0XG4gKi9cbmNvbnN0IHdpbmRvd1N0YXRlID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgd2luZG93IHN0YXRlIGNhY2hlIHdpdGggbmV3IGluZm9ybWF0aW9uIGFib3V0IGEgd2luZG93LiBJZlxuICogd2UgYWxyZWFkeSBrbm93IG1vcmUgc3BlY2lmaWMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmRvdyB0aGFuXG4gKiB0aGUgbmV3IGluZm9ybWF0aW9uLCBpZ25vcmUgdGhlIG5ldyBpbmZvcm1hdGlvbi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IElELlxuICogQHBhcmFtIHtXaW5kb3dEZXRhaWxzfSB3aW5kb3dEZXRhaWxzIC0gVGhlIG5ldyBpbmZvcm1hdGlvbiBhYm91dCB0aGVcbiAqIHdpbmRvdy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlV2luZG93U3RhdGUod2luZG93SWQsIHtcbiAgICB0eXBlID0gXCJ1bmtub3duXCIsXG4gICAgYWN0aXZlVGFiLFxuICAgIHByaXZhY3kgPSBcInVua25vd25cIlxufSkge1xuICAgIHZhciB3aW5kb3dEZXRhaWxzID0gd2luZG93U3RhdGUuZ2V0KHdpbmRvd0lkKTtcblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW55IGNhY2hlZCBzdGF0ZSBvbiB0aGUgd2luZG93LCBzYXZlXG4gICAgLy8gd2hhdCB3ZSBrbm93IG5vdyBhbmQgYmUgZG9uZVxuICAgIGlmKHdpbmRvd0RldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB3aW5kb3dTdGF0ZS5zZXQod2luZG93SWQsIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBhY3RpdmVUYWI6IChhY3RpdmVUYWIgIT09IHVuZGVmaW5lZCkgPyBhY3RpdmVUYWIgOiAtMSxcbiAgICAgICAgICAgIHByaXZhY3k6IHByaXZhY3lcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXBkYXRlIGhhcyBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3aW5kb3cgdHlwZVxuICAgIC8vIHRoYW4gdGhlIGNhY2hlZCB3aW5kb3cgZGV0YWlscywgdXBkYXRlIHRoZSBjYWNoZWQgd2luZG93XG4gICAgLy8gdHlwZVxuICAgIGlmKCh0eXBlICE9PSBcInVua25vd25cIikgJiZcbiAgICAgICAgKCh3aW5kb3dEZXRhaWxzLnR5cGUgPT09IFwidW5rbm93blwiKSB8fFxuICAgICAgICAodHlwZSAhPT0gXCJub3JtYWxvcnBvcHVwXCIpICYmICh3aW5kb3dEZXRhaWxzLnR5cGUgPT09IFwibm9ybWFsb3Jwb3B1cFwiKSkpXG4gICAgICAgIHdpbmRvd0RldGFpbHMudHlwZSA9IHR5cGU7XG5cbiAgICAvLyBJZiB0aGUgdXBkYXRlIGhhcyBhbiBhY3RpdmUgdGFiIElELCB1cGRhdGUgdGhlIGNhY2hlZFxuICAgIC8vIGFjdGl2ZSB0YWIgSURcbiAgICBpZihhY3RpdmVUYWIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgd2luZG93RGV0YWlscy5hY3RpdmVUYWIgPSBhY3RpdmVUYWI7XG5cbiAgICAvLyBJZiB0aGUgdXBkYXRlIGhhcyBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3aW5kb3dcbiAgICAvLyBwcml2YWN5IHByb3BlcnR5IHRoYW4gdGhlIGNhY2hlZCB3aW5kb3cgZGV0YWlscyxcbiAgICAvLyB1cGRhdGUgdGhlIGNhY2hlZCB3aW5kb3cgcHJpdmFjeSBwcm9wZXJ0eVxuICAgIGlmKChwcml2YWN5ICE9PSBcInVua25vd25cIikgJiYgKHdpbmRvd0RldGFpbHMucHJpdmFjeSA9PT0gXCJ1bmtub3duXCIpKVxuICAgICAgICB3aW5kb3dEZXRhaWxzLnByaXZhY3kgPSBwcml2YWN5O1xufVxuXG4vKipcbiAqIExvb2sgdXAgdGhlIHByaXZhY3kgcHJvcGVydHkgb2YgYSB3aW5kb3cgaW4gdGhlIGNhY2hlZCB3aW5kb3cgc3RhdGUuXG4gKiBJZiB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZSBkb2VzIG5vdCBpbmNsdWRlIHRoZSB3aW5kb3cgb3IgdGhlIHdpbmRvd1xuICogcHJpdmFjeSBwcm9wZXJ0eSBpcyB1bmtub3duIChuZWl0aGVyIG9mIHdoaWNoIHNob3VsZCBoYXBwZW4hKSwgYXNzdW1lXG4gKiBpdCdzIGEgbm9ybWFsIHdpbmRvdy5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IElELlxuICogQHBhcmFtIHtXaW5kb3dEZXRhaWxzfSBbd2luZG93RGV0YWlsc10gLSBUaGUgV2luZG93RGV0YWlscyBvYmplY3RcbiAqIGZvciB0aGUgd2luZG93LCBpZiBpdCdzIGFscmVhZHkgYmVlbiByZXRyaWV2ZWQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgd2luZG93IGlzIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpdmF0ZVdpbmRvdyh3aW5kb3dJZCwgd2luZG93RGV0YWlscykge1xuICAgIGlmKHdpbmRvd0RldGFpbHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgd2luZG93RGV0YWlscyA9IHdpbmRvd1N0YXRlLmdldCh3aW5kb3dJZCk7XG4gICAgcmV0dXJuICh3aW5kb3dEZXRhaWxzICE9PSB1bmRlZmluZWQpID8gKHdpbmRvd0RldGFpbHMucHJpdmFjeSA9PT0gXCJwcml2YXRlXCIpIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVGFiRGV0YWlsc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgbG9hZGVkIGluIHRoZSB0YWIuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVmZXJyZXIgLSBUaGUgcmVmZXJyZXIgVVJMIGZvciB0aGUgdGFiLCBvciBgXCJcImAgaWZcbiAqIHRoZXJlIGlzIG5vIHJlZmVycmVyLlxuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgdGFiIGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2luZG93SWQgLSBUaGUgSUQgb2YgdGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSB0YWIuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzV2ViQ29udGVudCAtIFdoZXRoZXIgdGhlIHRhYiBjb250YWlucyBvcmRpbmFyeSB3ZWJcbiAqIGNvbnRlbnQgKGkuZS4sIGEgVVJMIHN0YXJ0aW5nIHdpdGggYFwiaHR0cDovL1wiYCBvciBgXCJodHRwczovL1wiYCkuXG4gKi9cblxuLyoqXG4gKiBBIE1hcCB0aGF0IHRyYWNrcyB0aGUgY3VycmVudCBzdGF0ZSBvZiBicm93c2VyIHRhYnMuIFdlIG5lZWQgdGhpcyBjYWNoZWRcbiAqIHN0YXRlIHRvIGF2b2lkIGluY29uc2lzdGVuY2llcyB3aGVuIHJlZ2lzdGVyaW5nIGEgcGFnZSB2aXNpdCBzdGFydCBsaXN0ZW5lclxuICogYW5kIHRvIGZpbHRlciBub3RpZmljYXRpb25zIGZvciB0YWJzIHRoYXQgZG9uJ3QgY29udGFpbiBvcmRpbmFyeSB3ZWJwYWdlcy5cbiAqIFRoZSBrZXlzIGFyZSB0YWIgSURzIGFuZCB0aGUgdmFsdWVzIGFyZSBUYWJEZXRhaWxzIG9iamVjdHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFRhYkRldGFpbHM+fVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3QgdGFiU3RhdGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogVXBkYXRlIHRoZSB0YWIgc3RhdGUgY2FjaGUgd2l0aCBuZXcgaW5mb3JtYXRpb24gYWJvdXQgYSB0YWIuIEFueVxuICogZXhpc3RpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhYiBpcyByZXBsYWNlZC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIElELlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgbG9hZGVkIGluIHRoZSB0YWIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJyZXIgLSBUaGUgcmVmZXJyZXIgVVJMIGZvciB0aGUgdGFiLCBvciBgXCJcImAgaWZcbiAqIHRoZXJlIGlzIG5vIHJlZmVycmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSB0YWIgaXMgaW4gYSBwcml2YXRlXG4gKiB3aW5kb3cuXG4gKiBAcGFyYW0ge3N0cmluZ30gd2luZG93SWQgLSBUaGUgSUQgb2YgdGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSB0YWIuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVRhYlN0YXRlKHRhYklkLCB1cmwsIHJlZmVycmVyLCBwcml2YXRlV2luZG93LCB3aW5kb3dJZCkge1xuICAgIC8vIElmIHRoZSBVUkwgcGFyc2VzIHN1Y2Nlc3NmdWxseSBhbmQgaGFzIGFuIEhUVFAgb3IgSFRUUFMgcHJvdG9jb2wsXG4gICAgLy8gY29uc2lkZXIgaXQgd2ViIGNvbnRlbnRcbiAgICB2YXIgaXNXZWJDb250ZW50O1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGlmKChwYXJzZWRVcmwucHJvdG9jb2wgPT09IFwiaHR0cDpcIikgfHwgKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gXCJodHRwczpcIikpXG4gICAgICAgICAgICBpc1dlYkNvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIGlzV2ViQ29udGVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRhYlN0YXRlLnNldCh0YWJJZCwgeyB1cmwsIHJlZmVycmVyLCBwcml2YXRlV2luZG93LCB3aW5kb3dJZCwgaXNXZWJDb250ZW50IH0pO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFdlYlJlcXVlc3REZXRhaWxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsIC0gVGhlIFVSTCBmb3IgdGhlIHJlcXVlc3QuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVmZXJyZXIgLSBUaGUgdmFsdWUgb2YgdGhlIGBSZWZlcmVyYCBIVFRQIGhlYWRlciBmb3JcbiAqIHRoZSByZXF1ZXN0IG9yIGBcIlwiYCBpZiB0aGVyZSBpcyBubyBoZWFkZXIuXG4gKi9cblxuLyoqXG4gKiBBIE1hcCB0aGF0IHRyYWNrcyB0YWItbGV2ZWwgd2ViIHJlcXVlc3RzLiBXZSBuZWVkIHRoaXMgY2FjaGVkIHN0YXRlIHRvIG1hdGNoXG4gKiByZWZlcnJlcnMgdG8gcGFnZSBsb2Fkcy4gVGhlIGtleXMgYXJlIHRhYiBJRHMgYW5kIHRoZSB2YWx1ZXMgYXJlXG4gKiBXZWJSZXF1ZXN0RGV0YWlscyBvYmplY3RzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPG51bWJlcixXZWJSZXF1ZXN0RGV0YWlscz59XG4gKiBAZGVmYXVsdFxuICovXG5jb25zdCB3ZWJSZXF1ZXN0Q2FjaGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogV2hldGhlciB0aGUgYnJvd3NlciBpcyBhY3RpdmUgb3IgaWRsZS4gSWdub3JlZCBpZiB0aGUgbW9kdWxlIGlzIGNvbmZpZ3VyZWQgdG9cbiAqIG5vdCBjb25zaWRlciB1c2VyIGlucHV0IHdoZW4gZGV0ZXJtaW5pbmcgdGhlIGF0dGVudGlvbiBzdGF0ZS5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBicm93c2VySXNBY3RpdmUgPSBmYWxzZTtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBtb2R1bGUgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY29uZmlndXJpbmcgYnJvd3NlciBldmVudCBoYW5kbGVyc1xuICogYW5kIGNhY2hpbmcgaW5pdGlhbCBzdGF0ZS5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xudmFyIGluaXRpYWxpemluZyA9IGZhbHNlO1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlIG1vZHVsZSBoYXMgc3RhcnRlZCBjb25maWd1cmluZyBicm93c2VyIGV2ZW50IGhhbmRsZXJzIGFuZCBjYWNoaW5nXG4gKiBpbml0aWFsIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBDb25maWd1cmUgYnJvd3NlciBldmVudCBoYW5kbGVycyBhbmQgY2FjaGUgaW5pdGlhbCBzdGF0ZS4gUnVucyBvbmx5IG9uY2UuXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmKGluaXRpYWxpemVkIHx8IGluaXRpYWxpemluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIGluaXRpYWxpemluZyA9IHRydWU7XG5cbiAgICAvLyBDb25maWd1cmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgLy8gTm90ZSB0aGF0IHdlIGhhdmUgdG8gY2FsbCBJZGxlLnJlZ2lzdGVySWRsZVN0YXRlTGlzdGVuZXIgYmVmb3JlIHdlIGNhbGxcbiAgICAvLyBJZGxlLnF1ZXJ5U3RhdGUsIHNvIHRoaXMgY29tZXMgYmVmb3JlIGNhY2hpbmcgdGhlIGluaXRpYWwgc3RhdGVcblxuICAgIC8vIEhhbmRsZSB0YWItbGV2ZWwgd2ViIHJlcXVlc3RzXG4gICAgYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uQmVmb3JlU2VuZEhlYWRlcnMuYWRkTGlzdGVuZXIoZGV0YWlscyA9PiB7XG4gICAgICAgIC8vIElnbm9yZSByZXF1ZXN0cyB0aGF0IGFyZW4ndCBhc3NvY2lhdGVkIHdpdGggYnJvd3NpbmcgdGFic1xuICAgICAgICBpZihkZXRhaWxzLnRhYklkIDwgMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gR2V0IHRoZSByZWZlcnJlciBVUkwgZnJvbSB0aGUgcmVxdWVzdCBoZWFkZXJzXG4gICAgICAgIHZhciByZWZlcnJlciA9IFwiXCI7XG4gICAgICAgIGZvcihjb25zdCByZXF1ZXN0SGVhZGVyIG9mIGRldGFpbHMucmVxdWVzdEhlYWRlcnMpXG4gICAgICAgICAgICBpZigocmVxdWVzdEhlYWRlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwicmVmZXJlclwiKSAmJiAoXCJ2YWx1ZVwiIGluIHJlcXVlc3RIZWFkZXIpKVxuICAgICAgICAgICAgICAgIHJlZmVycmVyID0gcmVxdWVzdEhlYWRlci52YWx1ZTtcbiAgICAgICAgd2ViUmVxdWVzdENhY2hlLnNldChkZXRhaWxzLnRhYklkLCB7XG4gICAgICAgICAgICB1cmw6IGRldGFpbHMudXJsLFxuICAgICAgICAgICAgcmVmZXJyZXJcbiAgICAgICAgfSk7XG4gICAgfSwge1xuICAgICAgICB1cmxzOiBbIFwiPGFsbF91cmxzPlwiIF0sXG4gICAgICAgIHR5cGVzOiBbIFwibWFpbl9mcmFtZVwiIF1cbiAgICB9LFxuICAgIFsgXCJyZXF1ZXN0SGVhZGVyc1wiIF0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIHdlYnBhZ2UgaW4gYSB0YWIgY2hhbmdlc1xuICAgIGJyb3dzZXIudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBJZ25vcmUgY2hhbmdlcyB0aGF0IGRvIG5vdCBpbnZvbHZlIHRoZSBVUkxcbiAgICAgICAgaWYgKCEoXCJ1cmxcIiBpbiBjaGFuZ2VJbmZvKSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBUcnkgdG8gZ2V0IHRoZSByZWZlcnJlciBmcm9tIHRoZSB3ZWIgcmVxdWVzdCBjYWNoZSBhbmQgY29uc3VtZVxuICAgICAgICAvLyB0aGUgbW9zdCByZWNlbnQgZW50cnkgaW4gdGhlIHdlYiByZXF1ZXN0IGNhY2hlXG4gICAgICAgIHZhciByZWZlcnJlciA9IFwiXCI7XG4gICAgICAgIHZhciB3ZWJSZXF1ZXN0RGV0YWlscztcbiAgICAgICAgaWYoKHdlYlJlcXVlc3REZXRhaWxzID0gd2ViUmVxdWVzdENhY2hlLmdldCh0YWJJZCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmKHdlYlJlcXVlc3REZXRhaWxzLnVybCA9PT0gY2hhbmdlSW5mby51cmwpXG4gICAgICAgICAgICAgICAgcmVmZXJyZXIgPSB3ZWJSZXF1ZXN0RGV0YWlscy5yZWZlcnJlcjtcbiAgICAgICAgICAgIHdlYlJlcXVlc3RDYWNoZS5kZWxldGUodGFiSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0YWIgc3RhdGUgY2FjaGVcbiAgICAgICAgdXBkYXRlVGFiU3RhdGUodGFiSWQsIGNoYW5nZUluZm8udXJsLCByZWZlcnJlciwgdGFiLmluY29nbml0bywgdGFiLndpbmRvd0lkKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBhY3RpdmUgdGFiIGFuZCBmb2N1c2VkIHdpbmRvdywgYW5kIChvcHRpb25hbGx5KSB0aGUgYnJvd3NlciBpcyBhY3RpdmUsIGVuZCB0aGUgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgdmFyIGhhc0F0dGVudGlvbiA9IGNoZWNrRm9yQXR0ZW50aW9uKHRhYklkLCB0YWIud2luZG93SWQpO1xuICAgICAgICBpZiAoaGFzQXR0ZW50aW9uKVxuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHRhYi5pbmNvZ25pdG8sIHRpbWVTdGFtcCk7XG5cbiAgICAgICAgLy8gRW5kIHRoZSBwYWdlIHZpc2l0XG4gICAgICAgIG5vdGlmeVBhZ2VWaXNpdFN0b3BMaXN0ZW5lcnModGFiSWQsIHRhYi53aW5kb3dJZCwgdGFiLmluY29nbml0bywgdGltZVN0YW1wKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwYWdlIHZpc2l0XG4gICAgICAgIG5vdGlmeVBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJzKHRhYklkLCB0YWIud2luZG93SWQsIGNoYW5nZUluZm8udXJsLCByZWZlcnJlciwgdGFiLmluY29nbml0bywgdGltZVN0YW1wKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBhY3RpdmUgdGFiIGFuZCBmb2N1c2VkIHdpbmRvdywgYW5kIChvcHRpb25hbGx5KSB0aGUgYnJvd3NlciBpcyBhY3RpdmUsIHN0YXJ0IGFuIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmIChoYXNBdHRlbnRpb24pXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHRhYi5pbmNvZ25pdG8sIHRpbWVTdGFtcCk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHRhYiBjbG9zZXNcbiAgICBicm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCwgcmVtb3ZlSW5mbykgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gdXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgaGVyZSwgYmVjYXVzZSBlaXRoZXIgdGhlcmUgaXNcbiAgICAgICAgLy8gYW5vdGhlciB0YWIgaW4gdGhlIHdpbmRvdyB0aGF0IHdpbGwgYmVjb21lIGFjdGl2ZSAoYW5kIHRhYnMub25BY3RpdmF0ZWRcbiAgICAgICAgLy8gd2lsbCBmaXJlKSwgb3IgdGhlcmUgaXMgbm8gb3RoZXIgdGFiIGluIHRoZSB3aW5kb3cgc28gdGhlIHdpbmRvdyBjbG9zZXNcbiAgICAgICAgLy8gKGFuZCB3aW5kb3dzLm9uUmVtb3ZlZCB3aWxsIGZpcmUpXG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBjYWNoZWQgc3RhdGUgZm9yIHRoaXMgdGFiLCBkcm9wIGl0XG4gICAgICAgIHRhYlN0YXRlLmRlbGV0ZSh0YWJJZCk7XG4gICAgICAgIHdlYlJlcXVlc3RDYWNoZS5kZWxldGUodGFiSWQpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgd2luZG93IHByaXZhY3kgcHJvcGVydHkgZnJvbSB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZVxuICAgICAgICB2YXIgd2luZG93UHJpdmFjeSA9IGlzUHJpdmF0ZVdpbmRvdyhyZW1vdmVJbmZvLndpbmRvd0lkKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBhY3RpdmUgdGFiIGFuZCBmb2N1c2VkIHdpbmRvdywgYW5kIChvcHRpb25hbGx5KSB0aGUgYnJvd3NlciBpcyBhY3RpdmUsIGVuZCB0aGUgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoY2hlY2tGb3JBdHRlbnRpb24odGFiSWQsIHJlbW92ZUluZm8ud2luZG93SWQpKVxuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHdpbmRvd1ByaXZhY3ksIHRpbWVTdGFtcCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBhY3RpdmUgdGFiLCBmb3JnZXQgaXRcbiAgICAgICAgaWYoY3VycmVudEFjdGl2ZVRhYiA9PSB0YWJJZClcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcblxuICAgICAgICAvLyBFbmQgdGhlIHBhZ2UgdmlzaXRcbiAgICAgICAgbm90aWZ5UGFnZVZpc2l0U3RvcExpc3RlbmVycyh0YWJJZCwgcmVtb3ZlSW5mby53aW5kb3dJZCwgd2luZG93UHJpdmFjeSwgdGltZVN0YW1wKTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIHRoZSBhY3RpdmUgdGFiIGluIGEgd2luZG93IGNoYW5nZXNcbiAgICBicm93c2VyLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5vbi1icm93c2VyIHRhYiwgaWdub3JlIGl0XG4gICAgICAgIGlmKChhY3RpdmVJbmZvLnRhYklkID09IGJyb3dzZXIudGFicy5UQUJfSURfTk9ORSkgfHwgKGFjdGl2ZUluZm8udGFiSWQgPCAwKSB8fFxuICAgICAgICAgICAgKGFjdGl2ZUluZm8ud2luZG93SWQgPCAwKSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZSB3aXRoIHRoZSBuZXdcbiAgICAgICAgLy8gYWN0aXZlIHRhYiBJRFxuICAgICAgICB1cGRhdGVXaW5kb3dTdGF0ZShhY3RpdmVJbmZvLndpbmRvd0lkLCB7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IGFjdGl2ZUluZm8udGFiSWRcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGVyZSBpc24ndCBhIGZvY3VzZWQgd2luZG93LCBvciB0aGUgdGFiIHVwZGF0ZSBpcyBub3QgaW4gdGhlIGZvY3VzZWQgd2luZG93LCBpZ25vcmUgaXRcbiAgICAgICAgaWYoKGN1cnJlbnRGb2N1c2VkV2luZG93IDwgMCkgfHwgKGFjdGl2ZUluZm8ud2luZG93SWQgIT0gY3VycmVudEZvY3VzZWRXaW5kb3cpKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIEdldCB0aGUgd2luZG93IHByaXZhY3kgcHJvcGVydHkgZnJvbSB0aGUgd2luZG93IHN0YXRlIGNhY2hlXG4gICAgICAgIHZhciB3aW5kb3dQcml2YWN5ID0gaXNQcml2YXRlV2luZG93KGFjdGl2ZUluZm8ud2luZG93SWQpOyAgICBcblxuICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBpcyBhY3RpdmUgb3IgKG9wdGlvbmFsbHkpIHdlIGFyZSBub3QgY29uc2lkZXJpbmcgdXNlciBpbnB1dCxcbiAgICAgICAgLy8gZmlyc3QgZW5kIHRoZSBhdHRlbnRpb24gc3BhbiBpZiB0aGVyZSBpcyBhbiBhY3RpdmUgdGFiIGluIHRoZSBmb2N1c2VkIHdpbmRvdyxcbiAgICAgICAgLy8gdGhlbiBzdGFydCBhIG5ldyBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZigoYnJvd3NlcklzQWN0aXZlIHx8ICFjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbikpIHtcbiAgICAgICAgICAgIGlmKChjdXJyZW50QWN0aXZlVGFiID49IDApICYmIChjdXJyZW50Rm9jdXNlZFdpbmRvdyA+PSAwKSlcbiAgICAgICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgd2luZG93UHJpdmFjeSwgdGltZVN0YW1wKTtcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyhhY3RpdmVJbmZvLnRhYklkLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgd2luZG93UHJpdmFjeSwgdGltZVN0YW1wKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG5ldyBhY3RpdmUgdGFiXG4gICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSBhY3RpdmVJbmZvLnRhYklkO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSB3aW5kb3cgaXMgY3JlYXRlZFxuICAgIGJyb3dzZXIud2luZG93cy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoY3JlYXRlZFdpbmRvdyA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoaXMgYXBwZWFycyB0byBiZSBhIG5vbi1icm93c2luZyB3aW5kb3csIGlnbm9yZVxuICAgICAgICAvLyB0aGUgZXZlbnRcbiAgICAgICAgaWYoIShcImlkXCIgaW4gY3JlYXRlZFdpbmRvdykgfHwgY3JlYXRlZFdpbmRvdy5pZCA8IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUgd2l0aCB0aGUgd2luZG93J3MgdHlwZSBhbmRcbiAgICAgICAgLy8gcHJpdmFjeSBwcm9wZXJ0eVxuICAgICAgICB1cGRhdGVXaW5kb3dTdGF0ZShjcmVhdGVkV2luZG93LmlkLCB7XG4gICAgICAgICAgICB0eXBlOiAoXCJ0eXBlXCIgaW4gY3JlYXRlZFdpbmRvdykgPyBjcmVhdGVkV2luZG93LnR5cGUgOiBcInVua25vd25cIixcbiAgICAgICAgICAgIHByaXZhY3k6IGNyZWF0ZWRXaW5kb3cuaW5jb2duaXRvID8gXCJwcml2YXRlXCIgOiBcIm5vcm1hbFwiXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSB0YWIgaXMgY3JlYXRlZFxuICAgIC8vIFRoaXMgZXZlbnQgYXBwZWFycyB0byBjb25zaXN0ZW50bHkgZmlyZSBiZWZvcmUgd2luZG93Lm9uQ3JlYXRlZFxuICAgIGJyb3dzZXIudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIodGFiID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0YWIgb3Igd2luZG93IElEIGluZGljYXRpbmcgYSBub24tYnJvd3NlciB0YWIgb3JcbiAgICAgICAgLy8gd2luZG93LCBpZ25vcmUgdGhlIGV2ZW50XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiFcbiAgICAgICAgaWYoIShcImlkXCIgaW4gdGFiKSB8fCB0YWIuaWQgPCAwIHx8ICEoXCJ3aW5kb3dJZFwiIGluIHRhYikgfHwgdGFiLndpbmRvd0lkIDwgMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgd2luZG93IHN0YXRlIGNhY2hlIHdpdGggdGhlIHdpbmRvdydzIHByaXZhY3lcbiAgICAgICAgLy8gcHJvcGVydHkgYW5kLCBzaW5jZSB3ZSBrbm93IHRoaXMgaXMgYSBicm93c2luZyB3aW5kb3cgYmFzZWRcbiAgICAgICAgLy8gb24gdGhlIHRhYiBJRCwgdGhlIFwibm9ybWFsb3Jwb3B1cFwiIHdpbmRvdyB0eXBlXG4gICAgICAgIC8vIFdoaWxlIHdlIG1pZ2h0IG5vdyBrbm93IHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgaW4gdGhlIHdpbmRvdyxcbiAgICAgICAgLy8gdGhlIHRhYnMub25BY3RpdmF0ZWQgZXZlbnQgd2lsbCBzZXBhcmF0ZWx5IGZpcmVcbiAgICAgICAgdXBkYXRlV2luZG93U3RhdGUodGFiLndpbmRvd0lkLCB7XG4gICAgICAgICAgICB0eXBlOiBcIm5vcm1hbG9ycG9wdXBcIixcbiAgICAgICAgICAgIHByaXZhY3k6IHRhYi5pbmNvZ25pdG8gPyBcInByaXZhdGVcIiA6IFwibm9ybWFsXCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHRhYiBpcyBtb3ZlZCBiZXR3ZWVuIHdpbmRvd3NcbiAgICAvLyBXZSBhcmUgbm90IGxpc3RlbmluZyBmb3IgdGFicy5vbkRldGFjaGVkIGJlY2F1c2Ugd2Ugd2FudCB0YWJzXG4gICAgLy8gdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHZhbGlkIHdpbmRvd3MsIGFuZCBiZWNhdXNlIGl0J3MgbGlrZWx5XG4gICAgLy8gdGhlIHVzZXIgaXMganVzdCBtb3ZpbmcgdGhlIHRhYiB3aXRoaW4gdGhlIHRhYiBzdHJpcCBpbiBhXG4gICAgLy8gd2luZG93XG4gICAgYnJvd3Nlci50YWJzLm9uQXR0YWNoZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBhdHRhY2hJbmZvKSA9PiB7XG4gICAgICAgIC8vIElmIHRoaXMgdGFiIGlzIGluIHRoZSB0YWIgc3RhdGUgY2FjaGUsXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgY2FjaGVcbiAgICAgICAgdmFyIHRhYkRldGFpbHMgPSB0YWJTdGF0ZS5nZXQodGFiSWQpO1xuICAgICAgICBpZih0YWJEZXRhaWxzICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0YWJEZXRhaWxzLndpbmRvd0lkID0gYXR0YWNoSW5mby5uZXdXaW5kb3dJZDtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgd2luZG93IGlzIHJlbW92ZWRcbiAgICBicm93c2VyLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKHdpbmRvd0lkID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBjYWNoZWQgc3RhdGUgZm9yIHRoaXMgd2luZG93LCBkcm9wIGl0XG4gICAgICAgIGlmKHdpbmRvd1N0YXRlLmhhcyh3aW5kb3dJZCkpXG4gICAgICAgICAgICB3aW5kb3dTdGF0ZS5kZWxldGUod2luZG93SWQpO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIGZvY3VzZWQgd2luZG93IGNoYW5nZXNcbiAgICBicm93c2VyLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIod2luZG93SWQgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIElmIHRoZSBicm93c2VyIGlzIGFjdGl2ZSBvciAob3B0aW9uYWxseSkgd2UgYXJlIG5vdCBjb25zaWRlcmluZyB1c2VyIGlucHV0LCBhbmQgaWZcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gYWN0aXZlIHRhYiBpbiBhIGZvY3VzZWQgd2luZG93LCBlbmQgdGhlIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmKChicm93c2VySXNBY3RpdmUgfHwgIWNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uKSAmJiAoKGN1cnJlbnRBY3RpdmVUYWIgPj0gMCkgJiYgKGN1cnJlbnRGb2N1c2VkV2luZG93ID49IDApKSlcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCBpc1ByaXZhdGVXaW5kb3coY3VycmVudEZvY3VzZWRXaW5kb3cpLCB0aW1lU3RhbXApO1xuXG4gICAgICAgIC8vIElmIHRoZSBicm93c2VyIGhhcyBsb3N0IGZvY3VzIGluIHRoZSBvcGVyYXRpbmcgc3lzdGVtLCByZW1lbWJlciBcbiAgICAgICAgLy8gdGFiIElEID0gLTEgYW5kIHdpbmRvdyBJRCA9IC0xLCBhbmQgZG8gbm90IHN0YXJ0IGEgbmV3IGF0dGVudGlvbiBzcGFuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIHRoZSBicm93c2VyLndpbmRvd3MuZ2V0IGF3YWl0IGJlbG93LFxuICAgICAgICAvLyBiZWNhdXNlIHF1aWNrIHNlcXVlbnRpYWwgZXZlbnRzIGNhbiBjYXVzZSB0aGUgYnJvd3Nlci53aW5kb3dzLm9uRm9jdXNDaGFuZ2VkXG4gICAgICAgIC8vIGxpc3RlbmVyIHRvIHJ1biBhZ2FpbiBiZWZvcmUgdGhlIGF3YWl0IHJlc29sdmVzIGFuZCB0cmlnZ2VyIGVycm9ycyBpZiBjdXJyZW50QWN0aXZlVGFiXG4gICAgICAgIC8vIGFuZCBjdXJyZW50Rm9jdXNlZFdpbmRvdyBhcmUgbm90IHNldCBwcm9wZXJseVxuICAgICAgICBpZiAod2luZG93SWQgPT0gYnJvd3Nlci53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50Rm9jdXNlZFdpbmRvdyA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBmb2N1c2VkIHdpbmRvdyBmcm9tIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlXG4gICAgICAgIHZhciBmb2N1c2VkV2luZG93RGV0YWlscyA9IHdpbmRvd1N0YXRlLmdldCh3aW5kb3dJZCk7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCBzZWVuIHRoaXMgd2luZG93IGJlZm9yZSwgdGhhdCBtZWFucyBpdCdzIG5vdCBhIGJyb3dzZXIgd2luZG93LFxuICAgICAgICAvLyBzbyByZW1lbWJlciB0YWIgSUQgPSAtMSBhbmQgd2luZG93IElEIC0xLCBhbmQgZG8gbm90IHN0YXJ0IGEgbmV3IGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmKGZvY3VzZWRXaW5kb3dEZXRhaWxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgbmV3IHdpbmRvdyBpcyBub3QgYSBicm93c2VyIHdpbmRvdywgcmVtZW1iZXIgdGFiIElEID0gLTEgYW5kIHdpbmRvdyBJRCA9IC0xLFxuICAgICAgICAvLyBhbmQgZG8gbm90IHN0YXJ0IGEgbmV3IGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmKChmb2N1c2VkV2luZG93RGV0YWlscy50eXBlICE9PSBcIm5vcm1hbFwiKSAmJiAoZm9jdXNlZFdpbmRvd0RldGFpbHMudHlwZSAhPT0gXCJwb3B1cFwiKSAmJiAoZm9jdXNlZFdpbmRvd0RldGFpbHMudHlwZSAhPT0gXCJub3JtYWxvcnBvcHVwXCIpKSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50Rm9jdXNlZFdpbmRvdyA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZW1lbWJlciB0aGUgbmV3IGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgaWYgdGhlIGJyb3dzZXIgaXMgYWN0aXZlXG4gICAgICAgIC8vIG9yIChvcHRpb25hbGx5KSB3ZSBhcmUgbm90IGNvbnNpZGVyaW5nIHVzZXIgaW5wdXQsIHN0YXJ0IGEgbmV3IGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSBmb2N1c2VkV2luZG93RGV0YWlscy5hY3RpdmVUYWI7XG4gICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gd2luZG93SWQ7XG4gICAgICAgIGlmKGJyb3dzZXJJc0FjdGl2ZSB8fCAhY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24pXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIGlzUHJpdmF0ZVdpbmRvdyh3aW5kb3dJZCwgZm9jdXNlZFdpbmRvd0RldGFpbHMpLCB0aW1lU3RhbXApO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEhhbmRsZSB3aGVuIHRoZSBicm93c2VyIGFjdGl2aXR5IHN0YXRlIGNoYW5nZXNcbiAgICAvLyBUaGlzIGxpc3RlbmVyIGFic3RyYWN0cyB0aGUgYnJvd3NlciBhY3Rpdml0eSBzdGF0ZSBpbnRvIHR3byBjYXRlZ29yaWVzOiBhY3RpdmUgYW5kIGluYWN0aXZlXG4gICAgLy8gQWN0aXZlIG1lYW5zIHRoZSB1c2VyIGhhcyByZWNlbnRseSBwcm92aWRlZCBpbnB1dCB0byB0aGUgYnJvd3NlciwgaW5hY3RpdmUgbWVhbnMgYW55IG90aGVyXG4gICAgLy8gc3RhdGUgKHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBhIHNjcmVlbnNhdmVyIG9yIGxvY2sgc2NyZWVuIGlzIGVuYWJsZWQpXG4gICAgaWYoY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24pIHtcbiAgICAgICAgYXdhaXQgSWRsZS5yZWdpc3RlcklkbGVTdGF0ZUxpc3RlbmVyKG5ld1N0YXRlID0+IHtcbiAgICAgICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgaXMgbm90IHRyYW5zaXRpb25pbmcgYmV0d2VlbiBhY3RpdmUgYW5kIGluYWN0aXZlIHN0YXRlcywgaWdub3JlIHRoZSBldmVudFxuICAgICAgICAgICAgaWYoKGJyb3dzZXJJc0FjdGl2ZSkgPT0gKG5ld1N0YXRlID09PSBcImFjdGl2ZVwiKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoZSBmbGlwcGVkIGJyb3dzZXIgYWN0aXZpdHkgc3RhdGVcbiAgICAgICAgICAgIGJyb3dzZXJJc0FjdGl2ZSA9ICFicm93c2VySXNBY3RpdmU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzbid0IGFuIGFjdGl2ZSB0YWIgaW4gYSBmb2N1c2VkIHdpbmRvdywgd2UgZG9uJ3QgbmVlZCB0byBzZW5kIGF0dGVudGlvbiBldmVudHNcbiAgICAgICAgICAgIGlmKChjdXJyZW50QWN0aXZlVGFiIDwgMCkgfHwgKGN1cnJlbnRGb2N1c2VkV2luZG93IDwgMCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHdpbmRvdyBwcml2YWN5IHByb3BlcnR5IGZyb20gdGhlIGNhY2hlZCB3aW5kb3cgc3RhdGVcbiAgICAgICAgICAgIHZhciB3aW5kb3dQcml2YWN5ID0gaXNQcml2YXRlV2luZG93KGN1cnJlbnRGb2N1c2VkV2luZG93KTtcblxuICAgICAgICAgICAgLy8gU2VuZCBhbiBhdHRlbnRpb24gc3RhcnQgZXZlbnQgKGlmIHRoZSBicm93c2VyIGlzIHRyYW5zaXRpb25pbmcgdG8gYWN0aXZlKSBvciBhblxuICAgICAgICAgICAgLy8gYXR0ZW50aW9uIHN0b3AgZXZlbnQgKGlmIHRoZSBicm93c2VyIGlzIHRyYW5zaXRpb25pbmcgdG8gaW5hY3RpdmUpXG4gICAgICAgICAgICBpZihicm93c2VySXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCAgdGltZVN0YW1wKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgd2luZG93UHJpdmFjeSwgdGltZVN0YW1wKTtcbiAgICAgICAgfSwgaWRsZVRocmVzaG9sZCk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGFuZCByZW1lbWJlciB0aGUgYnJvd3NlciBpZGxlIHN0YXRlXG4gICAgaWYoY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24pXG4gICAgICAgIGJyb3dzZXJJc0FjdGl2ZSA9IChJZGxlLnF1ZXJ5U3RhdGUoaWRsZVRocmVzaG9sZCkgPT09IFwiYWN0aXZlXCIpO1xuICAgIFxuICAgIC8vIEdldCBhbmQgcmVtZW1iZXIgdGhlIGJyb3dzZXIgd2luZG93IGFuZCB0YWIgc3RhdGVcbiAgICB2YXIgb3BlbldpbmRvd3MgPSBhd2FpdCBicm93c2VyLndpbmRvd3MuZ2V0QWxsKHtcbiAgICAgICAgcG9wdWxhdGU6IHRydWUsXG4gICAgICAgIHdpbmRvd1R5cGVzOiBbIFwibm9ybWFsXCIsIFwicG9wdXBcIiwgXCJwYW5lbFwiLCBcImRldnRvb2xzXCIgXVxuICAgIH0pO1xuICAgIGZvcihjb25zdCBvcGVuV2luZG93IG9mIG9wZW5XaW5kb3dzKSB7XG4gICAgICAgIC8vIElmIHRoZSB3aW5kb3cgZG9lc24ndCBoYXZlIGEgd2luZG93IElELCBpZ25vcmUgaXRcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuLCBidXQgY2hlY2tpbmcgYW55d2F5IHNpbmNlXG4gICAgICAgIC8vIHRoZSBpZCBwcm9wZXJ0eSBpcyBvcHRpb25hbCBpbiB0aGUgd2luZG93cy5XaW5kb3dcbiAgICAgICAgLy8gdHlwZVxuICAgICAgICBpZighKFwiaWRcIiBpbiBvcGVuV2luZG93KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAvLyBJdGVyYXRlIHRoZSB0YWJzIGluIHRoZSB3aW5kb3cgdG8gY2FjaGUgdGFiIHN0YXRlXG4gICAgICAgIC8vIGFuZCBmaW5kIHRoZSBhY3RpdmUgdGFiIGluIHRoZSB3aW5kb3dcbiAgICAgICAgdmFyIGFjdGl2ZVRhYkluT3BlbldpbmRvdyA9IC0xO1xuICAgICAgICBpZihcInRhYnNcIiBpbiBvcGVuV2luZG93KVxuICAgICAgICAgICAgZm9yKGNvbnN0IHRhYiBvZiBvcGVuV2luZG93LnRhYnMpIHtcbiAgICAgICAgICAgICAgICBpZih0YWIuYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbk9wZW5XaW5kb3cgPSB0YWIuaWQ7XG4gICAgICAgICAgICAgICAgdXBkYXRlVGFiU3RhdGUodGFiLmlkLCB0YWIudXJsLCBcIlwiLCBvcGVuV2luZG93LmluY29nbml0bywgb3BlbldpbmRvdy5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVdpbmRvd1N0YXRlKG9wZW5XaW5kb3cuaWQsIHtcbiAgICAgICAgICAgIHR5cGU6IG9wZW5XaW5kb3cudHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogYWN0aXZlVGFiSW5PcGVuV2luZG93LFxuICAgICAgICAgICAgcHJpdmFjeTogb3BlbldpbmRvdy5pbmNvZ25pdG8gPyBcInByaXZhdGVcIiA6IFwibm9ybWFsXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZm9jdXNlZCB3aW5kb3cgYW5kIGl0IGlzIGEgbm9ybWFsIG9yIHBvcHVwXG4gICAgICAgIC8vIHdpbmRvdywgcmVtZW1iZXIgdGhlIHdpbmRvdyBJRCBhbmQgYWN0aXZlIHRhYiBJRCAoaWYgYW55KVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBmb2N1c2VkIHdpbmRvdywgb3IgdGhlIGZvY3VzZWQgd2luZG93IGlzbid0XG4gICAgICAgIC8vIGEgbm9ybWFsIG9yIHBvcHVwIHdpbmRvdywgdGhpcyBibG9jayB3aWxsIG5vdCBydW4gYW5kIHdlXG4gICAgICAgIC8vIHdpbGwgcmV0YWluIHRoZSBkZWZhdWx0IHZhbHVlcyBvZiB0YWIgSUQgPSAtMSBhbmQgd2luZG93XG4gICAgICAgIC8vIElEID0gLTFcbiAgICAgICAgaWYoKG9wZW5XaW5kb3cuZm9jdXNlZCkgJiYgKChvcGVuV2luZG93LnR5cGUgPT09IFwibm9ybWFsXCIpIHx8IChvcGVuV2luZG93LnR5cGUgPT09IFwicG9wdXBcIikpKSB7XG4gICAgICAgICAgICBjdXJyZW50Rm9jdXNlZFdpbmRvdyA9IG9wZW5XaW5kb3cuaWQ7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVGFiID0gYWN0aXZlVGFiSW5PcGVuV2luZG93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xufSIsImV4cG9ydCBjb25zdCBzaG9ydERvbWFpbnMgPSBbXG4vLyBHb29nbGUgbmV3c1xuXCJuZXdzLmdvb2dsZS5jb20vYXJ0aWNsZXNcIixcblwiZ29vLmdsXCIsXG5cInQuY29cIixcblwiMHJ6LnR3XCIsXG5cIjEyNi5hbVwiLFxuXCIxbDIudXNcIixcblwiMWxpbmsuaW5cIixcblwiMXRrLnVzXCIsXG5cIjF1bi5mclwiLFxuXCIxdXJsLmNvbVwiLFxuXCIxdXJsLmN6XCIsXG5cIjEtdXJsLm5ldFwiLFxuXCIxdS5yb1wiLFxuXCIxLnVzYS5nb3ZcIixcblwiMXdiMi5uZXRcIixcblwiMjBmdC5uZXRcIixcblwiMmFkLmluXCIsXG5cIjJiaWcuYXRcIixcblwiMmNoYXAuaXRcIixcblwiMmRvYy5uZXRcIixcblwiMmZlYXIuY29tXCIsXG5cIjIuZ3BcIixcblwiMi5odFwiLFxuXCIybG9uZy5jY1wiLFxuXCIyLmx5XCIsXG5cIjJwbC51c1wiLFxuXCIyc3UuZGVcIixcblwiMnR1LnVzXCIsXG5cIjJ0eS5pblwiLFxuXCIydS54Zi5jelwiLFxuXCIyd3NiLnR2XCIsXG5cIjJ6ZS51c1wiLFxuXCIzMDEudG9cIixcblwiMzAxdXJsLmNvbVwiLFxuXCIzMDcudG9cIixcblwiMy5seVwiLFxuXCIzcmEuYmVcIixcblwiM3guc2lcIixcblwiNDlycy5tZVwiLFxuXCI0aS5hZVwiLFxuXCI0bXMubWVcIixcblwiNC5uYmNueS5jb21cIixcblwiNHNxLmNvbVwiLFxuXCI0dXJsLmNjXCIsXG5cIjR2aWV3Lm1lXCIsXG5cIjUtMTEuY29cIixcblwiNTNlaWcuaHRcIixcblwiNWVtLmN6XCIsXG5cIjVyci5pdFwiLFxuXCI1dXJsLm5ldFwiLFxuXCI1Lndld3MuY29tXCIsXG5cIjV6OC5pbmZvXCIsXG5cIjZmci5ydVwiLFxuXCI2ZzYuZXVcIixcblwiNnVybC5jb21cIixcblwiNzYuZ2RcIixcblwiNzcuYWlcIixcblwiN2Z0aC5jY1wiLFxuXCI3Z2VuLnVzXCIsXG5cIjdsaS5pblwiLFxuXCI3Lmx5XCIsXG5cIjdueS50dlwiLFxuXCI3dmQuY25cIixcblwiOHUuY3pcIixcblwiOTQ0LmxhXCIsXG5cIjk4LnRvXCIsXG5cIjltcC5jb21cIixcblwiYTAuZnJcIixcblwiYTJhLm1lXCIsXG5cImEybi5ldVwiLFxuXCJhYS5jeFwiLFxuXCJhYXJwLnVzXCIsXG5cImFiYnIuY29tXCIsXG5cImFiYnIuc2tcIixcblwiYWJjMTEudHZcIixcblwiYWJjMTMuY29cIixcblwiYWJjbi53c1wiLFxuXCJhYmMudHZcIixcblwiYWJjdXJsLm5ldFwiLFxuXCJhYmU1LmNvbVwiLFxuXCJhY2Nlc3MuaW1cIixcblwiYWNjdXJhLmNjXCIsXG5cImFjb3NtLmluXCIsXG5cImFjdGlvbi5tZVwiLFxuXCJhZDUuZXVcIixcblwiYWQ3LmJpelwiLFxuXCJhZGFnZS5jb21cIixcblwiYWRiLnVnXCIsXG5cImFkY3JhZnQuY29cIixcblwiYWRjcnVuLmNoXCIsXG5cImFkZC52Y1wiLFxuXCJhZGZhLnN0XCIsXG5cImFkZmxhdi5jb21cIixcblwiYWRmLmx5XCIsXG5cImFkZmx5LmZyXCIsXG5cImFkaml4LmNvbVwiLFxuXCJhZGxpLnB3XCIsXG5cImFkLW1lZC5jelwiLFxuXCJhZG5ld3MubXNcIixcblwiYWRvYmUubHlcIixcblwiYWR2LmxpXCIsXG5cImFkdm1vLnVzXCIsXG5cImFkLnZ1XCIsXG5cImFkd2Vlay5pdFwiLFxuXCJhZXhwLmNvXCIsXG5cImEtZnIuaXNcIixcblwiYWZ4LmNjXCIsXG5cImEuZ2RcIixcblwiYS5nZ1wiLFxuXCJhZ2lsZWl0LmNvXCIsXG5cImFod2QudHZcIixcblwiYWplLm1lXCIsXG5cImFqbi5tZVwiLFxuXCJha2EuZ3JcIixcblwiYWxpbC5pblwiLFxuXCJhbGouYW1cIixcblwiYWxsLmZ1c2V1cmwuY29tXCIsXG5cImFsLnN0XCIsXG5cImFsdHVybC5jb21cIixcblwiYW1jdXJsLmNvbVwiLFxuXCIjYW16bi5jb21cIixcblwiYW16bi5jb21cIixcblwiI2Ftem4udG9cIixcblwiYW16bi50b1wiLFxuXCJhbmRyLnR2XCIsXG5cImEubmZcIixcblwiYW5uLmNyXCIsXG5cImFueS5nc1wiLFxuXCJhb2ZiLnVzXCIsXG5cImFvbC5pdFwiLFxuXCJhcGFkdi5jb1wiLFxuXCJhcGwudHZcIixcblwiYXBuZS53c1wiLFxuXCJhcHBzdW1vLmNvbVwiLFxuXCJhcXZhLnBsXCIsXG5cImFyYS50dlwiLFxuXCJhcmNuY3QuY29cIixcblwiYXJlcy50bFwiLFxuXCJhcmd1c25lLndzXCIsXG5cImFyLmd5XCIsXG5cImFybS5pblwiLFxuXCJhcnNuLmFsXCIsXG5cImFyc3QuY2hcIixcblwiYXNhLm5hXCIsXG5cImFzb3MudG9cIixcblwiYXNzby5pblwiLFxuXCJhdC5jbXQuY29tXCIsXG5cImF0bWxiLmNvbVwiLFxuXCJhdC5tcm11bGUuY29tXCIsXG5cImF0Lm10di5jb21cIixcblwiYXQucHcub3JnXCIsXG5cImF0dC1tc2cuY29tXCIsXG5cImF0dS5jYVwiLFxuXCJhdS5tc1wiLFxuXCJhdXJscy5pbmZvXCIsXG5cImF1dG9kZS5za1wiLFxuXCJhdmMubHVcIixcblwiYXZsbmUud3NcIixcblwiYXdlLnNtXCIsXG5cImEud2lzaC5vcmdcIixcblwiYXlsLmx2XCIsXG5cImF5dC5mclwiLFxuXCJhemFsaS5mclwiLFxuXCJhemMuY2NcIixcblwiYXpxcS5jb21cIixcblwiYjAwLmZyXCIsXG5cImIyMy5ydVwiLFxuXCJiMmwubWVcIixcblwiYjU0LmluXCIsXG5cImI2NS5jb21cIixcblwiYjY1LnVzXCIsXG5cImJhY24ubWVcIixcblwiYmFpZC51c1wiLFxuXCJiYXNuby5jb21cIixcblwiYmJjLmluXCIsXG5cImJicnkubHZcIixcblwiYmJ0LmdzXCIsXG5cImJieXVybC51c1wiLFxuXCJiY2VuZS53c1wiLFxuXCJiY29vbC5ielwiLFxuXCJiY292ZS5tZVwiLFxuXCJiYy52Y1wiLFxuXCJiZWFtLnRvXCIsXG5cImJlYXRzLmlzXCIsXG5cImJlZTQuYml6XCIsXG5cImJlZWJlLmluXCIsXG5cImJlLm5ldFwiLFxuXCJiZjEwLmNvXCIsXG5cImJmcG5lLndzXCIsXG5cImItZ2F0LmVzXCIsXG5cImJnbC5tZVwiLFxuXCJiLmdsb2JlLmNvbVwiLFxuXCJiZ3IuY29cIixcblwiYmhwaG8udG9cIixcblwiYmlibGUudXNcIixcblwiYmlndGJsLmNvbVwiLFxuXCJiaW0uaW1cIixcblwiI2JpbmdlZC5pdFwiLFxuXCJiaW5nZWQuaXRcIixcblwiYml0LmRvXCIsXG5cImJpdC5seVwiLFxuXCJiaXRseS5jb21cIixcblwiYml0bHkuaXNcIixcblwiYml0dy5pblwiLFxuXCJiaXpqLnVzXCIsXG5cImJraXRlLmNvbVwiLFxuXCJibGFwLm5ldFwiLFxuXCJibGJyZC5jb1wiLFxuXCJibGJyZC5jb21cIixcblwiYmxjay5ieVwiLFxuXCJibGUuYWNcIixcblwiYmxlLnBsXCIsXG5cImJsaXBwci5jb21cIixcblwiYmxpcC50dlwiLFxuXCJibG4ua3JcIixcblwiYmxvYXQubWVcIixcblwiYmxvb20uYmdcIixcblwiYmx1LmNjXCIsXG5cImJvaS5yZVwiLFxuXCJib25hcHAuaXRcIixcblwiYm9uZWZpLnNoXCIsXG5cImJvbi5ub1wiLFxuXCJib3IuY29tXCIsXG5cImJvLnN0XCIsXG5cImJvdGUubWVcIixcblwiYm91Z24uYXRcIixcblwiYm91cm4uY29cIixcblwiYi5xci5hZVwiLFxuXCJicjQuaW5cIixcblwiYnJhZC5tblwiLFxuXCJicmF2by5seVwiLFxuXCJicmJ5LmNvXCIsXG5cImJyZC5yc1wiLFxuXCJiLnJpYW4uY2NcIixcblwiYnJrLnRvXCIsXG5cImJyenUubmV0XCIsXG5cImJzYS5seVwiLFxuXCJic2wuaW9cIixcblwiYnN1bi5tZFwiLFxuXCJidC5pb1wiLFxuXCJidWR1cmwuY29tXCIsXG5cImJ1ZmYubHlcIixcblwiYnVrLm1lXCIsXG5cImJ1bGwuaG5cIixcblwiYnVsLmx1XCIsXG5cImJ1cm51cmwuY29tXCIsXG5cImJ1c3drLmNvXCIsXG5cImJ1enVybC5jb21cIixcblwiYnV6enRhcC5jb21cIixcblwiYnhsLm1lXCIsXG5cImJ6ZmQuaXRcIixcblwiYnpoLm1lXCIsXG5cImNhY2hvci5yb1wiLFxuXCJjYW1wbC51c1wiLFxuXCJjYW51cmwuY29tXCIsXG5cImNhbnZhLmxpbmtcIixcblwiY2FwaS50bFwiLFxuXCJjYXB0bDEuY29cIixcblwiY2FwdHVyLmluXCIsXG5cImNhcnQubW5cIixcblwiY2JjLnNoXCIsXG5cImNibGUuY29cIixcblwiY2JzbG9jLmFsXCIsXG5cImNic24ud3NcIixcblwiY2JzcHJ0LmNvXCIsXG5cImNicy5zb1wiLFxuXCJjYnVnLmNjXCIsXG5cImNjLmNjXCIsXG5cImNjai5pbVwiLFxuXCJjZDQubWVcIixcblwiY2Rwbi5pb1wiLFxuXCJjZHRyLmNvXCIsXG5cImNla3RrcC5jb21cIixcblwiY2VzYXIubW5cIixcblwiY2YyLm1lXCIsXG5cImNmNi5jb1wiLFxuXCJjZjk3LmNvXCIsXG5cImNmLmx5XCIsXG5cImNoYnIuZ3JcIixcblwiY2hpYy5hZ1wiLFxuXCJjaGlsLmlzXCIsXG5cImNoaWxwLml0XCIsXG5cImNoaS5tZ1wiLFxuXCJjaGlwci5lc1wiLFxuXCJjaGlwLnRsXCIsXG5cImNobi5nZVwiLFxuXCJjaG8uYmFcIixcblwiY2hvcGQuaXRcIixcblwiY2hwdC5tZVwiLFxuXCJjaHJnLnJzXCIsXG5cImNocm1hLmNvXCIsXG5cImNocm9uaS5jbFwiLFxuXCJjaHMubXhcIixcblwiY2h6Yi5nclwiLFxuXCJjaW4uY2lcIixcblwiY2luZW1hZ3IuYW1cIixcblwiY2piLm5ldFwiLFxuXCJjamt5Lml0XCIsXG5cImNsY2sucnVcIixcblwiY2xkLm1lXCIsXG5cImNsZS5jbGluaWNcIixcblwiY2xlbWEuY2NcIixcblwiY2xpY2NhbWkuaW5mb1wiLFxuXCJjbGlja3RocnUuY2FcIixcblwiY2xpLmdzXCIsXG5cImNsaWtrLmluXCIsXG5cImNsaXB1cmwudXNcIixcblwiY2xrLm15XCIsXG5cImNsLmxrXCIsXG5cImNsLmx5XCIsXG5cImNsbi5tZVwiLFxuXCJjbG9ha3kuZGVcIixcblwiY2xvcC5pblwiLFxuXCJjbG91ZHVwLmNvbVwiLFxuXCJjbHAubHlcIixcblwiY2xybHYucnNcIixcblwiY21wYmVsbC5jb21cIixcblwiY21zYS5tZVwiLFxuXCJjbXNjLnJlXCIsXG5cImNuODYub3JnXCIsXG5cImNuYi5jeFwiLFxuXCJjbmV0LmNvXCIsXG5cImNubi5pdFwiLFxuXCJjbm5tb24uaWVcIixcblwiY250eC5tZVwiLFxuXCJjb2dlLmxhXCIsXG5cImNvZy5nZFwiLFxuXCJjLW8uaW5cIixcblwiY29rZXVybC5jb21cIixcblwiY29uLnN0XCIsXG5cImNvbnRhLmNjXCIsXG5cImNvbnRudC5seVwiLFxuXCJjb29rLmJhXCIsXG5cImNvcHkuYnpcIixcblwiY29ydC5hc1wiLFxuXCJjb3NtLmFnXCIsXG5cImNvdC5hZ1wiLFxuXCJjb3VpYy5mclwiLFxuXCJjcG8uc3RcIixcblwiY3B0bDEuY29cIixcblwiY3B3ci5pdFwiLFxuXCJjcmtzLm1lXCIsXG5cImNyb3dkc3ByaW5nLmNvXCIsXG5cImNyLnRsXCIsXG5cImNydHYubWtcIixcblwiY3J1bS5wbFwiLFxuXCJjLnNoYW1la2gud3NcIixcblwiY3MucG5cIixcblwiY3R0LmVjXCIsXG5cImN0dnIudXNcIixcblwiY3R4Lmx5XCIsXG5cImN1ZGEuY29cIixcblwiY3VkZGVyLml0XCIsXG5cImN1bHRtLmFjXCIsXG5cImN1bHRyLm1lXCIsXG5cImN1cmlvLnVzXCIsXG5cImN1cmwuaW1cIixcblwiY3VyLmx2XCIsXG5cImN1cy50bVwiLFxuXCJjdXQuYnlcIixcblwiY3V0aHV0LmNvbVwiLFxuXCJjdXQucGVcIixcblwiY3V0LnNrXCIsXG5cImN1dHQuZXVcIixcblwiY3V0dC51c1wiLFxuXCJjdXR1Lm1lXCIsXG5cImN1dHVybC5jb21cIixcblwiY3V0dXJscy5jb21cIixcblwiY3lici5mclwiLFxuXCJjeW9uaXgudG9cIixcblwiZDc1LmV1XCIsXG5cImRhYS5wbFwiLFxuXCJkYWkubHlcIixcblwiZGFpbHltLmFpXCIsXG5cImRha2QubWVcIixcblwiZGFsYWlsYS5tYVwiLFxuXCJkYWxsYXNuZS53c1wiLFxuXCJkYXRsLmluXCIsXG5cImRibC5jaHouZ3JcIixcblwiZGJyb24uY29cIixcblwiZGIudHRcIixcblwiZGNkci5tZVwiLFxuXCJkZC5tYVwiLFxuXCJkZHAubmV0XCIsXG5cImRkdXQuY2hcIixcblwiZGVhZHNwLmluXCIsXG5cImRlYWxzcGwudXNcIixcblwiZGVjZW50dXJsLmNvbVwiLFxuXCJkZWNrLmx5XCIsXG5cImRlbGwudG9cIixcblwiZGVsLmx5XCIsXG5cImRlbWdvdmVybm8ucnNcIixcblwiZGVtcy5tZVwiLFxuXCJkZXBvdC5seVwiLFxuXCJkZXJmLm1lXCIsXG5cImRlc2VydC5zblwiLFxuXCJkZXRuZS53c1wiLFxuXCJkZjQudXNcIixcblwiZGY5Lm5ldFwiLFxuXCJkZmw4Lm1lXCIsXG5cImRmdC5iYVwiLFxuXCJkZ2VyLmF0XCIsXG5cImRodXJsLm9yZ1wiLFxuXCJkaWRkeS5pdFwiLFxuXCJkaWdiaWcuY29tXCIsXG5cImRpLmdnXCIsXG5cImRpZ2cuY29tXCIsXG5cImRpZ2lwaWxscy5jb21cIixcblwiZGlncy5ieVwiLFxuXCJkaXNjdnIuY29cIixcblwiZGkuc25cIixcblwiZGlzcS51c1wiLFxuXCJkaXMudGxcIixcblwiZGxkLmJ6XCIsXG5cImRscnNodi5lc1wiLFxuXCJkbHZyLml0XCIsXG5cImQubWVcIixcblwiZG1yZWcuY29cIixcblwiZG5haW4uZm9cIixcblwiZG4udmNcIixcblwiZG8uY29cIixcblwiZG9pb3AuY29tXCIsXG5cImRvaS5vcmdcIixcblwiZG9scC5jY1wiLFxuXCJkby5teVwiLFxuXCJkb3Blbi51c1wiLFxuXCJkb3BpY2Uuc2tcIixcblwiZHBvLnN0XCIsXG5cImQucHJcIixcblwiZHJhZ2QuaXNcIixcblwiZHJibC5pblwiLFxuXCJkcm9pZC53c1wiLFxuXCJkcm9wLmlvXCIsXG5cImRyb3oubWVcIixcblwiZHJwbG4uZ3NcIixcblwiZHJwLmx5XCIsXG5cImRyLnRsXCIsXG5cImRydWRnZS50d1wiLFxuXCJkc2MudHZcIixcblwiZHMucG5cIixcblwiZHNweS5tZVwiLFxuXCJkdGRnLmNvXCIsXG5cImR0aGluLmdzXCIsXG5cImR1cmwubWVcIixcblwiZHVybC51c1wiLFxuXCJkdi5nZFwiLFxuXCJkdmxyLml0XCIsXG5cImR3YXJmdXJsLmNvbVwiLFxuXCJkeW8uZ3NcIixcblwiZTM3LmV1XCIsXG5cImVhbS5tZVwiLFxuXCJlYXN5dXJpLmNvbVwiLFxuXCJlYXN5dXJsLm5ldFwiLFxuXCJlY2Euc2hcIixcblwiZWNsdXJsLmNvbVwiLFxuXCJlY29uLnN0XCIsXG5cImVjb3RpLm1zXCIsXG5cImVjcmEuc2VcIixcblwiZWNyZWEudHZcIixcblwiZWR1dC50b1wiLFxuXCJlZXB1cmwuY29tXCIsXG5cImVlenVybC5jb21cIixcblwiZWZmLm9yZ1wiLFxuXCJlbGVnYW50dGhlbS5lc1wiLFxuXCJlbGl0ZWRhaS5seVwiLFxuXCJlbHEudG9cIixcblwiZWx5LnJlXCIsXG5cImVtYy5pbVwiLFxuXCJlbmNvc2lhLm1lXCIsXG5cImVuZ3QuY29cIixcblwiZW50bS5hZ1wiLFxuXCJlbnZhLnRvXCIsXG5cImVvYy5jY1wiLFxuXCJlb25saS5uZVwiLFxuXCJlcWJvdC5jb21cIixcblwiZXJheC5jelwiLFxuXCJlcncuY3pcIixcblwiZXMucG5cIixcblwiZXNzbi50bFwiLFxuXCIjZXRzeS5tZVwiLFxuXCJldC50dlwiLFxuXCJld2VyaS5jb21cIixcblwiZXdlcmwuY29tXCIsXG5cImV4OS5jb1wiLFxuXCJleG0ubnJcIixcblwiZXh0ci50dlwiLFxuXCJlenVybC5jY1wiLFxuXCJlenVybC5ldVwiLFxuXCJmYS5ieVwiLFxuXCIjZmFjZWJvb2suYXBwc3RvcmUuY29tXCIsXG5cImZhY2V0by51c1wiLFxuXCJmYW5kYW4uY29cIixcblwiZmFuZHcubWVcIixcblwiZmF0Yy5jb1wiLFxuXCJmYXYubWVcIixcblwiI2ZiLm1lXCIsXG5cImZiLm1lXCIsXG5cImZiLm5iY3Nwb3J0cy5jb21cIixcblwiZmJzaGFyZS5tZVwiLFxuXCIjZmJ1eS5tZVwiLFxuXCJmY25ld3MudHZcIixcblwiZmVlZHppbC5sYVwiLFxuXCJmZmNlLmJ6XCIsXG5cImZmZi5yZVwiLFxuXCJmZmYudG9cIixcblwiZmZmLndmXCIsXG5cImZmLmltXCIsXG5cImZodXJsLmNvbVwiLFxuXCJmaWxlc2hhci5lc1wiLFxuXCJmaWxvb3BzLmluZm9cIixcblwiZmlsei5mclwiLFxuXCJmaW5kLmJlZXJcIixcblwiZmlyZS50b1wiLFxuXCJmaXJzdHVybC5kZVwiLFxuXCJmaXJzdHVybC5uZXRcIixcblwiZml0bS5hZ1wiLFxuXCJmbGljLmtyXCIsXG5cImZsaW5nay5jb21cIixcblwiZmxpcC5pdFwiLFxuXCJmbG5lLndzXCIsXG5cImZscS51c1wiLFxuXCJmbHRyLnR2XCIsXG5cImZsd3IucHRcIixcblwiZmx5Mi53c1wiLFxuXCJmbTIubWVcIixcblwiZm5rLmVzXCIsXG5cImZvYWsuY29cIixcblwiZm9lLmhuXCIsXG5cImZvbGxvd2VkdS5jb21cIixcblwiZm9sdS5tZVwiLFxuXCJmb24uZ3NcIixcblwiZm9udC5tZVwiLFxuXCJmb3JyLnN0XCIsXG5cImZvci50blwiLFxuXCJmb3hzLnB0XCIsXG5cImZveC50dlwiLFxuXCJmb3h5dXJsLmNvbVwiLFxuXCJmcmMudmNcIixcblwiZnJlYWsudG9cIixcblwiZnJlZXByLmVzXCIsXG5cImZyZXplLml0XCIsXG5cImZyby5neVwiLFxuXCJmLXN0LmNvXCIsXG5cImZ0Y3kuY29cIixcblwiZnVuLmx5XCIsXG5cImZ1bm5pLmx5XCIsXG5cImZ1ci5seVwiLFxuXCJmdXNldXJsLmNvbVwiLFxuXCJmdXMuaW5cIixcblwiZnV6enkudG9cIixcblwiZndkNC5tZVwiLFxuXCJmd2R1cmwubmV0XCIsXG5cImZ3aWIubmV0XCIsXG5cImZ4bi53c1wiLFxuXCJmeHMucHRcIixcblwiZnp5LmNvXCIsXG5cImcwMC5tZVwiLFxuXCJnOGwudXNcIixcblwiZ2EuY29cIixcblwiZ2FwLnVzXCIsXG5cImdhdGVzLmx5XCIsXG5cImdhdGhyLnVzXCIsXG5cImdhdy5rclwiLFxuXCJnYnBnLm5ldFwiLFxuXCJnLmNvIGFuZFwiLFxuXCJnZW9yaW90LmNvXCIsXG5cImdldGYubHlcIixcblwiZ2V0bS5wdFwiLFxuXCJnZXQuc2hcIixcblwiZ2V0LXNob3J0eS5jb21cIixcblwiZ2V0LXVybC5jb21cIixcblwiZ2V0dXJsLnVzXCIsXG5cImdnLmdnXCIsXG5cImdpLnZjXCIsXG5cImdpem1vLmRvXCIsXG5cImdrdXJsLnVzXCIsXG5cImdsLmFtXCIsXG5cImdsYm4uY2FcIixcblwiZ2xtci5tZVwiLFxuXCJnbHBvLnN0XCIsXG5cImdsc2VuLnVzXCIsXG5cImdvMi5tZVwiLFxuXCJnby45bmwuY29tXCIsXG5cImdvLmJyaXQuY29cIixcblwiZ28uZm94NTkuY29tXCIsXG5cImdvZy5saVwiLFxuXCJnb2hlLmF0XCIsXG5cImdvaHNuLmNvXCIsXG5cImdvLmlnbi5jb21cIixcblwiZ29rZXYuaW5cIixcblwiZ29saW5rcy5jb1wiLFxuXCJnb2xtYW8uY29tXCIsXG5cImdvLm1lXCIsXG5cImdvLm5hc2EuZ292XCIsXG5cImdvb2QubHlcIixcblwiZ29vLmdsXCIsXG5cImdvby5sdVwiLFxuXCJnby5vc3RwLmdvdlwiLFxuXCJnb3Nocmluay5jb21cIixcblwiZ28uc2hyLmxjXCIsXG5cImdvc3NpcGNvcC5jb21cIixcblwiZ29zc2kucHJcIixcblwiZ28udG9cIixcblwiZ290b20udGdcIixcblwiZ28udW5sLmVkdVwiLFxuXCJnby51c2EuZ292XCIsXG5cImdvd2FsLmxhXCIsXG5cImdwbHVzLnRvXCIsXG5cImdxbS5hZ1wiLFxuXCJncmFiLmJ5XCIsXG5cImdyZG5zLmNvXCIsXG5cImdyZW0uaW9cIixcblwiZ3JpLm1zXCIsXG5cImdyaW5kci5tZVwiLFxuXCJncm5vbC5jb1wiLFxuXCJncm5wYy5vcmdcIixcblwiZy5yby5sdFwiLFxuXCJnci5wblwiLFxuXCJncnouY21cIixcblwiZ3RnLmx1XCIsXG5cImd0ci5ielwiLFxuXCJndS5jb21cIixcblwiZ3VpYW1hLmlzXCIsXG5cImd1cmwuZXNcIixcblwiaGFkZWouY29cIixcblwiaGFpbG8udG9cIixcblwiaGFvLmpwXCIsXG5cImhhdG5lLndzXCIsXG5cImhic3BrLmNvXCIsXG5cImhjbHRlLmNoXCIsXG5cImhlZnIuaW5cIixcblwiaGVsbG90eHQuY29tXCIsXG5cImhleC5pb1wiLFxuXCJoZy50dlwiLFxuXCJoaWRlLm15XCIsXG5cImhpZGVyZWZlci5jb21cIixcblwiaGlwLm11XCIsXG5cImhpdC5teVwiLFxuXCJoamtsLmZyXCIsXG5cImhtbS5waFwiLFxuXCJobmRpYXJ5LmNvbVwiLFxuXCJob3BjbGlja3MuY29tXCIsXG5cImhvcC5pbVwiLFxuXCJob3BzLm1lXCIsXG5cImhvcHMudG9cIixcblwiaG90cmVkaXJlY3QuY29tXCIsXG5cImhvdHNob3J0dXJsLmNvbVwiLFxuXCJob3UubGlcIixcblwiaHAubnVcIixcblwiaHBzdG0udGNcIixcblwiaHJjLmlvXCIsXG5cImhyZC5jbVwiLFxuXCJocmVmLmluXCIsXG5cImhyZWYubGlcIixcblwiaHJsZC51c1wiLFxuXCJocnZkLm1lXCIsXG5cImhydi5zdFwiLFxuXCJoc2JsaW5rcy5jb21cIixcblwiaHQubHlcIixcblwiaHRybmUud3NcIixcblwiaHR4dC5pdFwiLFxuXCJodHoubGlcIixcblwiaHViLmFtXCIsXG5cImh1YnMubHlcIixcblwiaHVmZi5sdlwiLFxuXCJodWZmLnRvXCIsXG5cImh1Z2V1cmwuY29tXCIsXG5cImh1bHUuY29tXCIsXG5cImh1bHUudHZcIixcblwiaHVybC5pdFwiLFxuXCJodXJsLm1lXCIsXG5cImh1cmwubm9cIixcblwiaHVybC53c1wiLFxuXCJoeXBlcnVybC5jb1wiLFxuXCJoeXYuZWVcIixcblwiaTByei50d1wiLFxuXCJpLTIuY29cIixcblwiaTk5LmN6XCIsXG5cImljYW5oYXouY29tXCIsXG5cImljaW8udXNcIixcblwiaWNpdC5mclwiLFxuXCJpY2subGlcIixcblwiaWNrcy5yb1wiLFxuXCJpY29udC5hY1wiLFxuXCJpY3AtYy5jb21cIixcblwiaWRlay5uZXRcIixcblwiaWQudGxcIixcblwiaWhnLmNvXCIsXG5cImlpaWlpLmluXCIsXG5cImlrci5tZVwiLFxuXCJpa3kuZnJcIixcblwiaWxpeC5pblwiLFxuXCJpbGxpbi5pc1wiLFxuXCJpbWcubHlcIixcblwiaW5kLnBuXCIsXG5cImluZHkuc3RcIixcblwiaW4uZmx1eC5jb21cIixcblwiaW5mby5tc1wiLFxuXCJpbnN0LmNyXCIsXG5cImludGVsLmx5XCIsXG5cImludG8udHZcIixcblwiaW50dWl0Lm1lXCIsXG5cImludmVudC5nZVwiLFxuXCJpbnYubHZcIixcblwiaXBsb2dnZXIuY29tXCIsXG5cImlwbG9nZ2VyLm9yZ1wiLFxuXCJpci5wZVwiLFxuXCJpcnQubWVcIixcblwiaXNjb29sLm5ldFwiLFxuXCJpcy5nZFwiLFxuXCJpc3JhLmxpXCIsXG5cIml0Mi5pblwiLFxuXCJpdGhhY2Fqci5ubFwiLFxuXCJpdGhlbS5lc1wiLFxuXCJpdG0uaW1cIixcblwiaXRvLm14XCIsXG5cIml0c2VvLm9yZ1wiLFxuXCJpdHNoLmJvXCIsXG5cIml0c2p1c3QuaW5cIixcblwiaXRzLm15XCIsXG5cIml0c3kuaXRcIixcblwiaXR2LmNvXCIsXG5cIml0eS5pbVwiLFxuXCJpdmlsbC5hZ1wiLFxuXCJpeC5sdFwiLFxuXCJpeC5za1wiLFxuXCJqMmouZGVcIixcblwiamNwLmlzXCIsXG5cImpjcmV3LmNvXCIsXG5cImpkZW0uY3pcIixcblwiai5nc1wiLFxuXCJqaWViLmJlXCIsXG5cImppanIuY29tXCIsXG5cImptb3JyLmlzXCIsXG5cImoubXBcIixcblwiam1zYnJkLmNvXCIsXG5cImpvdXJuLnVzXCIsXG5cImpwMjIubmV0XCIsXG5cImpwbS5jb21cIixcblwianF3LmRlXCIsXG5cImpyLmx5XCIsXG5cImpybmwuaWVcIixcblwianNoZW4ubWVcIixcblwianMuaXNcIixcblwiai5zdFwiLFxuXCJqdXN0LmFzXCIsXG5cImsybmUud3NcIixcblwiazYua3pcIixcblwia2FiYmFnZS5pb1wiLFxuXCJrYXJlMTEudHZcIixcblwia2Fzay51c1wiLFxuXCJrY2l0cC5tZVwiLFxuXCJrY2suc3RcIixcblwia2VsLmJ5XCIsXG5cImtldGtwLmluXCIsXG5cImtlLXdlLm5ldFwiLFxuXCJrZmQucGxcIixcblwia2lyby50dlwiLFxuXCJraXNhLmNoXCIsXG5cImtpc3NhLmJlXCIsXG5cImtpc3MubHlcIixcblwia2wuYW1cIixcblwia2xjay5tZVwiLFxuXCJrbG91LnR0XCIsXG5cImtuZzUudHZcIixcblwia25nLmh0XCIsXG5cImtub3QubHlcIixcblwia29ucmF0aC5jb1wiLFxuXCJrb3JlLnVzXCIsXG5cImtvcnRhLm51XCIsXG5cImtvdHMubnVcIixcblwia3AuY2NcIixcblwia3Izdy5kZVwiLFxuXCJrcmF0LnNpXCIsXG5cImtyYXRzaS5jelwiLFxuXCJrcm9kLmN6XCIsXG5cImtydW5jaGQuY29tXCIsXG5cImtyei5jaFwiLFxuXCJrc3RwLm1uXCIsXG5cImt0aWUudHZcIixcblwia3RpbWVzLmNvXCIsXG5cImt0bGFuZS53c1wiLFxuXCJrdHpyLnVzXCIsXG5cImt1Yy5jelwiLFxuXCJrdW56aS5tZVwiLFxuXCJrLnZ1XCIsXG5cImt4Yi5tZVwiLFxuXCJreGsubWVcIixcblwiTDkuZnJcIixcblwibDlrLm5ldFwiLFxuXCJsYWNvLnN0XCIsXG5cImxhbmRzLnRvXCIsXG5cImxhdC5tc1wiLFxuXCJsYy5jeFwiLFxuXCJsYy1zLmNvXCIsXG5cImxjdXQuaW5cIixcblwibGVhZm5lLndzXCIsXG5cImxldG9wMTAuXCIsXG5cImwuaGguZGVcIixcblwibGliZXJvLml0XCIsXG5cImxpY2subXlcIixcblwibGllbi5saVwiLFxuXCJsaWVuLnBsXCIsXG5cImxpZmVoYWMua3JcIixcblwibGlpcC50b1wiLFxuXCJsaWx0ZXh0LmNvbVwiLFxuXCJsaW4uY3JcIixcblwibGluLmlvXCIsXG5cImxpbmtiZWUuY29tXCIsXG5cImxpbmtidW4uY2hcIixcblwibGlua2VlLmNvbVwiLFxuXCJsaW5rZ2FwLmNvbVwiLFxuXCJsaW5rbi5jb1wiLFxuXCJsaW5rc2xpY2UuY29tXCIsXG5cImxpbmt0by5pbVwiLFxuXCJsaW5rLnduZXAuY29tXCIsXG5cImxpbmsuemlwLm5ldFwiLFxuXCJsaW54Zml4LmRlXCIsXG5cImxpc3RuLnRvXCIsXG5cImxpdGV1cmwubmV0XCIsXG5cImxpdXJsLmNuXCIsXG5cImxpdmVtaXh0YXAuZXNcIixcblwibGl2ZXNpLmRlXCIsXG5cImxpdmVzdHJlLmFtXCIsXG5cImxpdmluZ3NvY2kuYWxcIixcblwibGl4LmluXCIsXG5cImwtay5iZVwiLFxuXCJsay5odFwiLFxuXCJsbHUuY2hcIixcblwibG5jaC5jb1wiLFxuXCJsbmsuYnlcIixcblwibG5rLmNvXCIsXG5cImxua2QuaW5cIixcblwibG5rLmRpcmVjdFwiLFxuXCJsbmsuZ2RcIixcblwibG5rLmluXCIsXG5cImxuay5seVwiLFxuXCJsbmsubXNcIixcblwibG5rcy5mclwiLFxuXCJsbmsuc2tcIixcblwibG5rdXJsLmNvbVwiLFxuXCJsbmt5LmZyXCIsXG5cImxucC5zblwiLFxuXCJsbi1zLm5ldFwiLFxuXCJsbi1zLnJ1XCIsXG5cImxvZ28udHZcIixcblwibG9odWQudXNcIixcblwibG9uZ3JlcC5seVwiLFxuXCJsb29wdC51c1wiLFxuXCJsb3N0LmluXCIsXG5cImxvdy5lc1wiLFxuXCJscDI1LmZyXCIsXG5cImxwbHphLmNvXCIsXG5cImwucHJcIixcblwibC1yLnR2XCIsXG5cImxydS5qcFwiLFxuXCJscy5seVwiLFxuXCJsdHMuY3JcIixcblwibHQudGxcIixcblwibHVybC5ub1wiLFxuXCJsdS50b1wiLFxuXCJMdnZrLmNvbVwiLFxuXCJseC5pbVwiLFxuXCJtMS5pb1wiLFxuXCJtMXAuZnJcIixcblwibTNtaS5jb21cIixcblwibWFjcnVtby5yc1wiLFxuXCJtYWN0ZS5jaFwiLFxuXCJtYWQubHlcIixcblwibWFrZS5teVwiLFxuXCJtYXBxLnN0XCIsXG5cIm1hcmllLmNsXCIsXG5cIm1hc2gudG9cIixcblwibWF2cmV2LmNvbVwiLFxuXCJtYmlzdC5yb1wiLFxuXCJtY2FmLmVlXCIsXG5cIm1jZC50b1wiLFxuXCJtY3N0ci5uZXRcIixcblwibWN0ci5zdFwiLFxuXCJtZGwyOS5uZXRcIixcblwibWR0bS5wbFwiLFxuXCJtZWRpYXRlLmNvbVwiLFxuXCJtZWUuYm9cIixcblwibWVldHUucHNcIixcblwibWVmaS51c1wiLFxuXCJtZW11cmwuY29tXCIsXG5cIm1lcmt5LmRlXCIsXG5cIm1ldGFtYXJrLm5ldFwiLFxuXCJtaWMuZnJcIixcblwibWljaGFlbC5waFwiLFxuXCJtaWdodC5seVwiLFxuXCJtaWdyZS5tZVwiLFxuXCJtaW4yLm1lXCIsXG5cIm1pbi5kalwiLFxuXCJtaW5pbGllbi5jb21cIixcblwibWluaWxpbmsub3JnXCIsXG5cIm1pbml1cmwuY29tXCIsXG5cIm1pbnUubWVcIixcblwibWludXJsLmZyXCIsXG5cIm1pbi51c1wiLFxuXCJtaXRuZS53c1wiLFxuXCJtaS50dFwiLFxuXCJta2UubWVcIixcblwibWtsbmQuY29tXCIsXG5cIm1rdC5jb21cIixcblwibWt0cGxjLm9yZ1wiLFxuXCJtbGFuLmNvXCIsXG5cIm1sa3MuY29cIixcblwibWxuLmltXCIsXG5cIm1sc3AuY29cIixcblwibW1mLmNjXCIsXG5cIm1tZmxpbnQubWVcIixcblwibW9ieS50b1wiLFxuXCJtb2pvLmx5XCIsXG5cIm1vbmV5LnVzXCIsXG5cIm1vbnN0ZXIubWVcIixcblwibW9vdXJsLmNvbVwiLFxuXCJtb3BoLmllXCIsXG5cIm1vcmUuc2hcIixcblwibW92aWUucHNcIixcblwibW92aS5lc1wiLFxuXCJtcGgudG9cIixcblwibXJrdC5yc1wiLFxuXCJtcm1uLm9yZ1wiLFxuXCJtcnRlLmNoXCIsXG5cIm1zZnQuaXRcIixcblwibXNnLnNnXCIsXG5cIm1zdHIuY2RcIixcblwibXRocy5iZVwiLFxuXCJtdGxuLnVzXCIsXG5cIm0udHJpLmJlXCIsXG5cIm11by5mbVwiLFxuXCJtdXJsLmt6XCIsXG5cIm11dC5sdVwiLFxuXCJtdjIubWVcIixcblwibXZwLnRvXCIsXG5cIm13bmUud3NcIixcblwibXlkZXNlcnQuY29cIixcblwibXlmb250cy51c1wiLFxuXCJteWxvYy5tZVwiLFxuXCJteXBpY3QubWVcIixcblwibXlzcC5hY1wiLFxuXCJteXNwLmluXCIsXG5cIm15dXJsLmluXCIsXG5cIm15dXJsLnNpXCIsXG5cIm15LnlvcGxhaXQuY29tXCIsXG5cIm16LmNtLFwiLFxuXCJtemwubGFcIixcblwibmFtZS5zb2NpYWxcIixcblwibmFub3JlZi5jb21cIixcblwibmFub3VybC5zZVwiLFxuXCJuYXRsLnJlXCIsXG5cIm5hdHVyZS5seVwiLFxuXCJuYmNjaGkuY29tXCIsXG5cIm5iYy5jb1wiLFxuXCJuYmNuZXdzLnRvXCIsXG5cIm5iY255LmNvbVwiLFxuXCJuYmNvLmx5XCIsXG5cIm5iYy50b1wiLFxuXCJuYmxvLmdzXCIsXG5cIm5ieC5jaFwiLFxuXCJuY2FuZS5jb21cIixcblwibmNhLnN0XCIsXG5cIm5kdXJsLmNvbVwiLFxuXCJuZTEubmV0XCIsXG5cIm5lby5seVwiLFxuXCJuZXQ0Ni5uZXRcIixcblwibmV0Lm1zXCIsXG5cIm5ldG5ldC5tZVwiLFxuXCJuZXRzaG9ydGN1dC5jb21cIixcblwibmV3c2RheS5jb21cIixcblwibmV3c2VyLm1lXCIsXG5cIm5ld3Nwci5lc1wiLFxuXCJuZXdzeS5jb21cIixcblwibmZ6Lm1lXCIsXG5cIm5pY291LmNoXCIsXG5cIm5pZWwuc25cIixcblwibmllLm1uXCIsXG5cIm5pZy5nclwiLFxuXCJuaW5nLml0XCIsXG5cIm5pLnRvXCIsXG5cIm5peGxlLnVzXCIsXG5cIm5qb3VyLm5sXCIsXG5cIiNubWVtLmFnXCIsXG5cIm5tLmx5XCIsXG5cIm5uLm5mXCIsXG5cIm5vZDIubWVcIixcblwibm9pcC5jb1wiLFxuXCJub2tpYS5seVwiLFxuXCJub3Rsb25nLmNvbVwiLFxuXCJub3QubXlcIixcblwibm92LmlvXCIsXG5cIm5vd3RoLmlzXCIsXG5cIm4ucHJcIixcblwibnEuc3RcIixcblwibnJkcnkubmV0XCIsXG5cIm5zZncuaW5cIixcblwibnNzbi5jb1wiLFxuXCJudGJ4LmNvXCIsXG5cIm51dHNoZWxsdXJsLmNvbVwiLFxuXCJueGcuaXNcIixcblwibnh5LmluXCIsXG5cIm55ZG4udXNcIixcblwibnltLmFnXCIsXG5cIm55b2IuY29cIixcblwibnlwLnN0XCIsXG5cIm55dGkubXNcIixcblwibnl2Lm1lXCIsXG5cIm56aC50d1wiLFxuXCJvYWRzLmNvXCIsXG5cIm9ib2V5YXN1aS5jb21cIixcblwib2MxLnVzXCIsXG5cIm9jY2lwLml0IGFuZCAzNjAuaW9cIixcblwiby5lYS5jb21cIixcblwib2ZhLmJvXCIsXG5cIm9mZnVyLmNvbVwiLFxuXCJvZmwubWVcIixcblwib2hkZXYuaW5cIixcblwib2luay5jb21cIixcblwib2tvay5mclwiLFxuXCJvLmx5XCIsXG5cIm9tZi5nZFwiLFxuXCJvbWdmLmFjXCIsXG5cIm9tLmx5XCIsXG5cIm9tb2lrYW5lLm5ldFwiLFxuXCJvbi4xMWFsaXZlLmNvbVwiLFxuXCJvbjluZXdzLnR2XCIsXG5cIm9uLWFqYy5jb21cIixcblwib24uYXBwLmNvbVwiLFxuXCJvbi5hemNlbnRyYWwuY29tXCIsXG5cIm9uLmJvZmEuY29tXCIsXG5cIm9uLmNjLmNvbVwiLFxuXCJvbi5jbm4uY29tXCIsXG5cIm9uLmVhLmNvbVwiLFxuXCJvbmVjZW50LnVzXCIsXG5cIiNvbi5mYi5tZVwiLFxuXCJvbi5mZWFybmV0LmNvbVwiLFxuXCJvbi5mbGF0b2RheS5jb21cIixcblwib25mb3JiLmVzXCIsXG5cIm9uLmZ0LmNvbVwiLFxuXCJvbi5obG4udHZcIixcblwib25pb24uY29tXCIsXG5cIm9uLmpjb25saW5lLmNvbVwiLFxuXCJvbi5rc2RrLmNvbVwiLFxuXCJvbi5rdGh2LmNvbVwiLFxuXCJvbi5saWZlLmNvbVwiLFxuXCJvbi5tYXNoLnRvXCIsXG5cIm9uLm1nbWFkdi5jb21cIixcblwib24ubWt0dy5uZXRcIixcblwib25tc25iYy5jb1wiLFxuXCJvbi5tc25iYy5jb21cIixcblwib24tbXNuLmNvbVwiLFxuXCJvbi5uYXRnZW8uY29tXCIsXG5cIm9uLm5ld3MxMC5uZXRcIixcblwib24ubmZpYi5jb21cIixcblwib24ucGllcjEuY29tXCIsXG5cIm9uLnBuai5jb21cIixcblwib25zYWFzLmluZm9cIixcblwib24uc2kuY29tXCIsXG5cIm9uLnN1Z2Fyc2NhLnBlXCIsXG5cIm9uLnRkby5jb21cIixcblwib24udGhlYy1sLmNvbVwiLFxuXCJvbi50aGVncmlvLmNvbVwiLFxuXCJvbi50aGVraXRjLmhuXCIsXG5cIm9uLnRvZGF5LmNvbVwiLFxuXCJvbnZiLmNvXCIsXG5cIm9uLnZlbnRyYWNoaWNhZ28uY29tXCIsXG5cIm9uLnZoMS5jb21cIixcblwib24ud2Jpci5jb21cIixcblwib24ud2NzaDYuY29tXCIsXG5cIm9uLndmbXkuY29tXCIsXG5cIm9uLndncnouY29tXCIsXG5cIm9uLndreWMuY29tXCIsXG5cIm9uLndsYnoyLmNvbVwiLFxuXCJvbi53bHR4LmNvbVwiLFxuXCJvbi53bWF6LmNvbVwiLFxuXCJvbi53bmVwLmNvbVwiLFxuXCJvbi53c2ouY29tXCIsXG5cIm9uLnd0c3AuY29tXCIsXG5cIm9uLnd1c2E5LmNvbVwiLFxuXCJvbi53enptLmNvbVwiLFxuXCJvb3F4LmNvbVwiLFxuXCJvcGIuaXNcIixcblwib3B0aW1pemUubHlcIixcblwib3JjbC5zb1wiLFxuXCJvcmVpbC5seVwiLFxuXCJvcmdjbnMub3JnXCIsXG5cIm9yei5zZVwiLFxuXCJvc2hrby5zaFwiLFxuXCJvc2t5LmNvXCIsXG5cIm90YWsuaHVcIixcblwib3VhLmJlXCIsXG5cIm91LmFmXCIsXG5cIm91LmdkXCIsXG5cIiNvd2wubGlcIixcblwiI293Lmx5XCIsXG5cIm93Lmx5XCIsXG5cIm8teC5mclwiLFxuXCJveHl6LmluZm9cIixcblwicDRrLmluXCIsXG5cInA2bC5vcmdcIixcblwicDhnLnR3XCIsXG5cInBhY2sucnNcIixcblwicGFwZS5yc1wiLFxuXCJwYXJreS50dlwiLFxuXCJwYXJ0b24ubHlcIixcblwicGFydi51c1wiLFxuXCJwYXN0LmlzXCIsXG5cInBhdGNoLmNvbVwiLFxuXCJwYXVsZGluZy5uZXRcIixcblwicGJsaS5zaFwiLFxuXCJwY2sucnNcIixcblwicGNvLmx0XCIsXG5cInBkaC5jb1wiLFxuXCJwZHVkYS5tb2JpXCIsXG5cInBlYWNocC5pdFwiLFxuXCJwZWF1cmwuY29tXCIsXG5cInBlbmRlay5pblwiLFxuXCJwZXAuc2lcIixcblwicGVyZXoubHlcIixcblwicGV0c21hcnRzb2NpYWwuY29tXCIsXG5cInBld3Jzci5jaFwiLFxuXCJwZ2Uuc3hcIixcblwicGhpbGxpcHMudG9cIixcblwicGgubHlcIixcblwicGh0c2hwLnVzXCIsXG5cInBpYy5nZFwiLFxuXCJwaWNoLmluXCIsXG5cInBpY3Bsei5jb21cIixcblwicGljei51c1wiLFxuXCJwaWZmLm1lXCIsXG5cInBpa28ubWVcIixcblwicGluZXdzLmNvXCIsXG5cInBpbmcuZm1cIixcblwicGluLnN0XCIsXG5cInBpLnBlXCIsXG5cInBpdGNoLnBlXCIsXG5cInBpdXJsLmNvbVwiLFxuXCJwbC5hblwiLFxuXCJwbGF0ZWQubWVcIixcblwicGxpLmdzXCIsXG5cInBsb3RzLmZyXCIsXG5cInBsdW11cmwuY29tXCIsXG5cInBsdXJsLm1lXCIsXG5cInAubHlcIixcblwicG0ud3UuY3pcIixcblwicG5kby5seVwiLFxuXCJwbmdyLml0XCIsXG5cInBuaW5qYS5jb1wiLFxuXCJwbnQubWVcIixcblwicG9ja2V0LmNvXCIsXG5cInBvam9uZXdzLmNvXCIsXG5cInBvbGl0aS5jb1wiLFxuXCJwb2xsLmZtXCIsXG5cInBvcC5seVwiLFxuXCJwb3BybC5jb21cIixcblwicG9wcy5jaVwiLFxuXCJwby5zdFwiLFxuXCJwb3N0LmNyXCIsXG5cInBvc3RkaXNwYXQuY2hcIixcblwicG9zdGVkLmF0XCIsXG5cInAub3N0LmltXCIsXG5cInBvc3QubHlcIixcblwicG93ZWxscy51c1wiLFxuXCJwcGNoZS5yb1wiLFxuXCJwcGZyLml0XCIsXG5cInBwLmdnXCIsXG5cInBwc3QubWVcIixcblwicHB0LmNjXCIsXG5cInBwdC5saVwiLFxuXCJwLnB3XCIsXG5cInByZWppdC5jelwiLFxuXCJwcmVzcy5zblwiLFxuXCJwcmV0dHlsaW5rcHJvLmNvbVwiLFxuXCJwcmV6LmlzXCIsXG5cInByaS52Y1wiLFxuXCJwcm50LmluXCIsXG5cInBybi50b1wiLFxuXCJwcm9maWxlLnRvXCIsXG5cInB0Mi5tZVwiLFxuXCJwdGFiLml0XCIsXG5cInB0aXR1cmwuY29tXCIsXG5cInB0bS5yb1wiLFxuXCJwdHJhbmkubWVcIixcblwicHVibHVuLmNoXCIsXG5cInB1Yi52aXRydWUuY29tXCIsXG5cInB1a2UuaXRcIixcblwicHVsc2UubWVcIixcblwicHVsc2VuZS53c1wiLFxuXCJwdXJpLm5hXCIsXG5cInB3Mi5yb1wiLFxuXCJwd2lyZS5hdFwiLFxuXCJweTYucnVcIixcblwicHlzcGVyLmNvbVwiLFxuXCJxYm4ucnVcIixcblwicS5nc1wiLFxuXCJxaWsubGlcIixcblwicWttZS5tZVwiLFxuXCJxbG5rLm5ldFwiLFxuXCJxb2lvYi5jb21cIixcblwicXFjLmNvXCIsXG5cInFyLmFlXCIsXG5cInFyLmN4XCIsXG5cInFyLm5ldFwiLFxuXCJxcnRhZy5mclwiLFxuXCJxdGUubWVcIixcblwicXVpY2t1cmwuY28udWtcIixcblwicXVybC5jb21cIixcblwicXVybHlxLmNvbVwiLFxuXCJxdS50Y1wiLFxuXCJxdXUubnVcIixcblwicXV4LmluXCIsXG5cInF2Yy5jb1wiLFxuXCJxeHAuY3pcIixcblwicXhwLnNrXCIsXG5cInF5LmZpXCIsXG5cInF6LmNvbVwiLFxuXCJyMjkuY29cIixcblwicjI5LnVzXCIsXG5cInI4dC51c1wiLFxuXCJyYWNoLnR2XCIsXG5cInJhY2tlZC5jY1wiLFxuXCJyYXZlbi5pbVwiLFxuXCJyYjYuY29cIixcblwicmI2Lm1lXCIsXG5cInJibC5tc1wiLFxuXCJyY2tuci5pb1wiLFxuXCJyY2xrLmx5XCIsXG5cInJkZC5tZVwiLFxuXCJyZGUubWVcIixcblwicmQuaW9cIixcblwicmR6Lm1lXCIsXG5cInJlYWQuYmlcIixcblwicmVhZHRoaXMuY2FcIixcblwicmVhbGx5dGlueXVybC5jb21cIixcblwicmVicmljay5pdFwiLFxuXCJyZWRkLml0XCIsXG5cInJlZGlyLmVjXCIsXG5cInJlZGlyZWN0cy5jYVwiLFxuXCJyZWRpci5mclwiLFxuXCJyZWRpcnguY29tXCIsXG5cInJlZHUuaXRcIixcblwicmVmLnNvXCIsXG5cInJlaXNlLmxjXCIsXG5cInJlbGluay5mclwiLFxuXCJyZWx5dC51c1wiLFxuXCJyZW0uYXhcIixcblwicmUucG5cIixcblwicmV0d2VkaWEuY29tXCIsXG5cInJldHd0Lm1lXCIsXG5cInJldXQucnNcIixcblwicmV2b2x2ZXIyLmNvbVwiLFxuXCJyZmkubXlcIixcblwicmhqci5uZXRcIixcblwicmlja3JvbGwuaXRcIixcblwici5pbVwiLFxuXCJyaS5tc1wiLFxuXCJyaW5nY2VudHIuYWxcIixcblwicmluZ2l0LnVzXCIsXG5cInJpdnZhLmRlXCIsXG5cInJpei5jelwiLFxuXCJyaXouZ2RcIixcblwicmx5LmNjXCIsXG5cInJuYy5hZ1wiLFxuXCJybmsubWVcIixcblwicm5rcHIuY29tXCIsXG5cInJvY2tjZW50ZXIuY29cIixcblwicm9jay5saVwiLFxuXCJyb2QuZ3NcIixcblwicm9mbGMuYXRcIixcblwicm9sLmxhXCIsXG5cInJvbC5zdFwiLFxuXCJycHBsZnIubWVcIixcblwicnNtb25rZXkuY29tXCIsXG5cInJ0Mi5jYVwiLFxuXCJydC5udVwiLFxuXCJydC5zZVwiLFxuXCJydWJ5dXJsLmNvbVwiLFxuXCJydS5seVwiLFxuXCJydXJsLm9yZ1wiLFxuXCJydXYubWVcIixcblwicndqZi53c1wiLFxuXCJyd3cudG9cIixcblwicnd3LnR3XCIsXG5cInMzbnQuY29tXCIsXG5cInM0Yy5pblwiLFxuXCJzN3kudXNcIixcblwic2FmZWxpbmtzLnJ1XCIsXG5cInNhZmUubW5cIixcblwic2FmbS5jb1wiLFxuXCJzYWd5YXAudGtcIixcblwic2FpLmx5XCIsXG5cInNhbWV1cmwuY29tXCIsXG5cInNhcmNhcy5tc1wiLFxuXCJzYm4udG9cIixcblwic2J1eC5jb1wiLFxuXCJzY2hlZC5jb1wiLFxuXCJzY2gubXBcIixcblwic2NpZnJpLm1lXCIsXG5cInNjb2JsZS5pdFwiLFxuXCJzYy5vcmdcIixcblwic2NyaS5iaVwiLFxuXCJzY3JuY2gubWVcIixcblwic2N0eS5hc2lhXCIsXG5cInNkdGsuZm1cIixcblwic2R1LnNrXCIsXG5cInNkdXQudXNcIixcblwicy5kdi5udVwiLFxuXCJzZWF0aS5tc1wiLFxuXCJzZWNyZXQubHlcIixcblwic2VkLmN4XCIsXG5cInNlZW1lLmF0XCIsXG5cInNlZS5zY1wiLFxuXCJzZWd1ZS5zZVwiLFxuXCJzZWxuZC5jb21cIixcblwic2Vsei5jb1wiLFxuXCJzZW5kLmdkXCIsXG5cInNlcGgubWVcIixcblwic2VyLmJ6XCIsXG5cInNldGQuZXNcIixcblwic2V3YXQuY2hcIixcblwic2ZvcmNlLmNvXCIsXG5cInNmdGx5ci5jb21cIixcblwic2Z1LmNhXCIsXG5cInNmeS5jb1wiLFxuXCJzZ2Zub3cuY29cIixcblwic2dpem1vLmNvbVwiLFxuXCJzZ2subW5cIixcblwicy5nbm9zcy51c1wiLFxuXCJzaGFkeXVybC5jb21cIixcblwic2hhci5hc1wiLFxuXCJzaGFyLmVzXCIsXG5cInMuaGJyLm9yZ1wiLFxuXCJzaGVicHIuZXNcIixcblwic2hpbS5uZXRcIixcblwic2hpbmsuZGVcIixcblwic2hvLnBlXCIsXG5cInNob3JsLmNvbVwiLFxuXCJzaG9ydC5jY1wiLFxuXCJzaG9ydGVudXJsLmNvbVwiLFxuXCJzaG9ydGVuLndzXCIsXG5cInNob3J0ZXJsaW5rLmNvbVwiLFxuXCJzaG9ydC5pZVwiLFxuXCJzaG9ydGlvLmNvbVwiLFxuXCJzaG9ydGxpbmtzLmNvLnVrXCIsXG5cInNob3J0bHkubmxcIixcblwic2hvcnRuYS5tZVwiLFxuXCJzaG9ydG4ubWVcIixcblwic2hvcnQucGtcIixcblwic2hvcnRxdWlrLmNvbVwiLFxuXCJzaG9ydHIubWVcIixcblwic2hvcnQudG9cIixcblwic2hvcnR1cmwuY29tXCIsXG5cInNob3J0ei5tZVwiLFxuXCJzaG90dXJsLnVzXCIsXG5cInNob3V0LnRvXCIsXG5cInNob3cubXlcIixcblwic2hwd3MubWVcIixcblwic2hyZWR1XCIsXG5cInNocmVkdXJsLmNvbVwiLFxuXCJzaHJpbmtpZnkuY29tXCIsXG5cInNocmlua3IuY29tXCIsXG5cInNocmlua3N0ZXIuY29tXCIsXG5cInNocmlua3VybC51c1wiLFxuXCJzaHJ0ZW4uY29tXCIsXG5cInNocnQuZnJcIixcblwic2hydC5pblwiLFxuXCJzaHJ0bC5jb21cIixcblwic2hydG4uY29tXCIsXG5cInNocnRuZC5jb21cIixcblwic2hydC5zdFwiLFxuXCJzaHJ0LndzXCIsXG5cInNocnVua2luLmNvbVwiLFxuXCJzaC5zdFwiLFxuXCJzaHVybC5uZXRcIixcblwic2h3Lm1lXCIsXG5cInNoeS5zaVwiLFxuXCJzaHouYW1cIixcblwic2ljYXgubmV0XCIsXG5cInNpZ25vbi5vcmdcIixcblwic2ltcC5seVwiLFxuXCJzaW11cmwuY29tXCIsXG5cInNpbXVybC5uZXRcIixcblwic2ltdXJsLm9yZ1wiLFxuXCJzaW11cmwudXNcIixcblwic2luYS5sdFwiLFxuXCJzaXRlbHV0aW9ucy5jb21cIixcblwic2l0ZW8udXNcIixcblwic2suZ3lcIixcblwic2tsLnNoXCIsXG5cInNrcm9jLnBsXCIsXG5cInNrci5za1wiLFxuXCJzay55cGUubXNcIixcblwic2xhdGUubWVcIixcblwic2xpZGVzaGEucmVcIixcblwic2xraS5ydVwiLFxuXCJzbC5seVwiLFxuXCJzbWFsbHIuY29tXCIsXG5cInNtYWxsci5uZXRcIixcblwic21hcnQuY3JcIixcblwic21hcnR1cmwuaXRcIixcblwic21hc2hlZC5ieVwiLFxuXCJzbS5kcnBlcHBlci5jb21cIixcblwic21mLmlzXCIsXG5cInNtZnUuaW5cIixcblwic21nbS51c1wiLFxuXCJzbWl0aC5nbFwiLFxuXCJzbWxsLmNvXCIsXG5cInNtcS50Y1wiLFxuXCJzbXNoLm1lXCIsXG5cInNtdXJsLmNvbVwiLFxuXCJzbXVybC5uYW1lXCIsXG5cInNuYWRyLml0XCIsXG5cInNuZC5zY1wiLFxuXCJzbi5pbVwiLFxuXCJzbmlwaWUuY29tXCIsXG5cInNuaXAubHlcIixcblwic25pcHIuY29tXCIsXG5cInNuaXB1cmwuY29tXCIsXG5cInNua3IubWVcIixcblwic25vdy5zaFwiLFxuXCJzbnMubXhcIixcblwic25zdy51c1wiLFxuXCJzbnVybC5jb21cIixcblwic24udmNcIixcblwicy5ueXQuY29tXCIsXG5cInNvY2lhbC5iZXN0YnV5LmNvbVwiLFxuXCJzb2NpYWwuamNwLmNvbVwiLFxuXCJzb2NpYWwudnp3LmNvbVwiLFxuXCJzb2NpYWwuenVuZS5uZXRcIixcblwic29ja3JvbGwuY29tXCIsXG5cInNvYy5saVwiLFxuXCJzb21lLmx5XCIsXG5cInNvbmcubHlcIixcblwic29vLmdkXCIsXG5cInMub3NreS5jb1wiLFxuXCJzb3VwLnBzXCIsXG5cInNwMi5yb1wiLFxuXCJzcGRyLm1uXCIsXG5cInNwZS5jb21cIixcblwic3BlZHIuY29tXCIsXG5cInNwbi5zclwiLFxuXCJzcG9uLmRlXCIsXG5cInNwb3J0c2dyaWQuY29tXCIsXG5cInNwb3RpLmZpXCIsXG5cInNwci5seVwiLFxuXCJzcHRua25lLndzXCIsXG5cInNxNi5ydVwiLFxuXCJzcXJsLml0XCIsXG5cInNxdS5yZVwiLFxuXCJzcXplLml0XCIsXG5cInMucmxwLmRlXCIsXG5cInNybmsubmV0XCIsXG5cInNycy5saVwiLFxuXCJzc2wuZ3NcIixcblwic3Q4LmZtXCIsXG5cInN0YW40ZC51c1wiLFxuXCJzdGFyZ2F6LnR0XCIsXG5cInN0YXJzdGFyLnRvXCIsXG5cInN0YXJ0dXJsLmNvbVwiLFxuXCJzdGF0aWdyLmFtXCIsXG5cInN0aWNrdXJsLmNvbVwiLFxuXCJzdGpyLm5sXCIsXG5cInN0a3MuY29cIixcblwic3RscmEubXNcIixcblwic3RvbmV0LmNvXCIsXG5cInN0cG12dC5jb21cIixcblwic3RyaWtpbmcubHlcIixcblwic3RyeS5tZVwiLFxuXCJzdHVybHkuY29tXCIsXG5cInN0eWxlaXRlLmNvbVwiLFxuXCJzdWJhci51c1wiLFxuXCJzdW50bS5lc1wiLFxuXCJzdS5wclwiLFxuXCJzdXBzLnVzXCIsXG5cInN1cmwuY28udWtcIixcblwicy11cmwuZnJcIixcblwic3VybC5odVwiLFxuXCJzdXJsLml0XCIsXG5cInN1cmwubWVcIixcblwic3V4LmN6XCIsXG5cInN2eS5ta1wiLFxuXCJzLndoY2MuY29tXCIsXG5cInN5LnBlXCIsXG5cInRhYnppLmNvbVwiLFxuXCJ0YS5nZFwiLFxuXCJ0YWtlbXlmaWxlLmNvbVwiLFxuXCJ0YXUucGVcIixcblwidGJkLmx5XCIsXG5cInRiZi5tZVwiLFxuXCJ0LmNuXCIsXG5cInQuY29cIixcblwidGNybi5jaFwiLFxuXCJ0ZGp0LmN6XCIsXG5cInRlY2htZS5tZVwiLFxuXCJ0ZWNocGluLmlvXCIsXG5cInRlY2hyZS52dVwiLFxuXCJ0ZWsuaW9cIixcblwidGVtcG8uYWlcIixcblwidGdyLm1lXCIsXG5cInRnci5waFwiLFxuXCJ0Z3QuYnpcIixcblwidGg4LnVzXCIsXG5cInRoZC5jb1wiLFxuXCJ0aGVhdGxuLnRjXCIsXG5cInRoZWJlYS5zdFwiLFxuXCJ0aGVicmFpc2VyLmNvbVwiLFxuXCJ0aGVjb3cubWVcIixcblwidGhlY3AubWVcIixcblwidGhlZGMuY29tXCIsXG5cInRoZWRydW0uY29tXCIsXG5cInRoZWtpdGMuaG5cIixcblwidGhlc2EudXNcIixcblwidGhlc2VudC5ubFwiLFxuXCJ0aGVzby5jb1wiLFxuXCJ0aGV0aW0uZXNcIixcblwidGhrcC5nc1wiLFxuXCJ0aGtwci5nc1wiLFxuXCJ0aG5kci5pdFwiLFxuXCJ0aHIuY21cIixcblwidGhyZGwuZXNcIixcblwidGhybC5zdFwiLFxuXCJ0aWdodHVybC5jb21cIixcblwidGlsdC50Y1wiLFxuXCJ0aS5tZVwiLFxuXCJ0aW1lc3VybC5hdFwiLFxuXCJ0aW1taWwuZXNcIixcblwidGluaS5jY1wiLFxuXCJ0aW5pdXJpLmNvbVwiLFxuXCJ0aW5pLnVzXCIsXG5cInRpbi5saVwiLFxuXCJ0aW55YXJyby53c1wiLFxuXCJ0aW55YXJyb3dzLmNvbVwiLFxuXCJ0aW55LmNjXCIsXG5cInRpbnlsaW5rLmNvbVwiLFxuXCJ0aW55bGluay5pblwiLFxuXCJ0aW55Lmx0XCIsXG5cInRpbnkubHlcIixcblwidGlueS5tc1wiLFxuXCJ0aW55LnBsXCIsXG5cInRpbnlwbC51c1wiLFxuXCJ0aW55c29uZy5jb21cIixcblwidGlueXR3Lml0XCIsXG5cInRpbnl1cmkuY2FcIixcblwidGlueXVybC5jb21cIixcblwidGlueXVybC5odVwiLFxuXCJ0aXhzdS5jb21cIixcblwidGsuXCIsXG5cInRrdC5seVwiLFxuXCJ0bGRpcy5pdFwiLFxuXCJ0bGRyLnNrXCIsXG5cInRsLmdkXCIsXG5cInQubGguY29tXCIsXG5cInRsbGcubmV0XCIsXG5cInRscmsuaXRcIixcblwidG1ibHIuY29cIixcblwidG1pLm1lXCIsXG5cInQtbW8uY29cIixcblwidG1vdXRjaGkudXNcIixcblwidG1vdXQudXNcIixcblwidG12cy50dlwiLFxuXCJ0bXoubWVcIixcblwidG5hdC5pblwiLFxuXCJ0bmNyLndzXCIsXG5cInRuaWoub3JnXCIsXG5cInRubmUud3NcIixcblwidG53LnRvXCIsXG5cInRueS5jb21cIixcblwidG55LmN6XCIsXG5cInRvLlwiLFxuXCJUbzguY2NcIixcblwidG9nb3RvLnVzXCIsXG5cInRvaGxlLmRlXCIsXG5cInRvLmplXCIsXG5cInRvbHUubmFcIixcblwidG8ubHlcIixcblwidG9tbXlqby5oblwiLFxuXCJ0b21zLnNoXCIsXG5cInRvLnBicy5vcmdcIixcblwidG90YTIuY29tXCIsXG5cInRvdGMudXNcIixcblwidG8udmdcIixcblwidG95c3IudXNcIixcblwidHBtLmx5XCIsXG5cInRwbXIuY29tXCIsXG5cInRwcmsudXNcIixcblwidHB0cS5jb21cIixcblwidHI1LmluXCIsXG5cInRyYWNldXJsLmNvbVwiLFxuXCJ0cmFja3VybC5pdFwiLFxuXCJ0cmEua3pcIixcblwidHJjYi5tZVwiLFxuXCJ0cmNrLm1lXCIsXG5cInRyZy5saVwiLFxuXCJ0cmliLmFsXCIsXG5cInRyaWIuaW5cIixcblwidHJpY2subHlcIixcblwidHJpaS51c1wiLFxuXCJ0ci5pbVwiLFxuXCJ0cmltLmxpXCIsXG5cInRya3Iud3NcIixcblwidHJrdXJsLmNvbVwiLFxuXCJ0ci5teVwiLFxuXCJ0cm5kYmwuY29cIixcblwidHJuLnN0XCIsXG5cInRyb25pLm1lXCIsXG5cInRydW1waW5rLmx0XCIsXG5cInRydW5jLml0XCIsXG5cInRydW5jdXJsLmNvbVwiLFxuXCJ0c29ydC51c1wiLFxuXCJ0c3BuZS53c1wiLFxuXCJ0LnN0XCIsXG5cInRzdGEucnNcIixcblwidC51YmVyLmNvbVwiLFxuXCJ0dWJldXJsLmNvbVwiLFxuXCJ0dW1ibHIuY29tXCIsXG5cInR1cm8udXNcIixcblwidC51c25ld3MuY29tXCIsXG5cInR2bmV3cy5jb1wiLFxuXCJ0dzAudXNcIixcblwidHcxLnVzXCIsXG5cInR3Mi51c1wiLFxuXCJ0dzUudXNcIixcblwidHc2LnVzXCIsXG5cInR3OC51c1wiLFxuXCJ0dzkudXNcIixcblwidHdhLmxrXCIsXG5cInR3LmFwcHN0b3JlLmNvbVwiLFxuXCJ0d2F1ZC5pb1wiLFxuXCJ0d2VldGJ1cm5lci5jb21cIixcblwidHdlZXRsLmNvbVwiLFxuXCJ0d2VldC5tZVwiLFxuXCJ0d2Vlei5tZVwiLFxuXCJ0d2V0LmZyXCIsXG5cInR3aGl0ZS5tZVwiLFxuXCJ0d2h1Yi5jb21cIixcblwidHdpLmd5XCIsXG5cInR3aS5pbVwiLFxuXCJ0d2lwLnVzXCIsXG5cInR3aXJsLmF0XCIsXG5cInR3aXQuYWNcIixcblwidHdpdGNsaWNrcy5jb21cIixcblwidHdpdHBpYy5jb21cIixcblwidHdpdHRlcnVybC5uZXRcIixcblwidHdpdHRlcnVybC5vcmdcIixcblwidHdpdHRoaXMuY29tXCIsXG5cInR3aXR0dS5tc1wiLFxuXCJ0d2l0dXJsLmRlXCIsXG5cInR3aXR6YXAuY29tXCIsXG5cInR3bHIubWVcIixcblwidHdsLnNoXCIsXG5cInR3bHYubmV0XCIsXG5cInR3Lm1lZGljYWxleHByZXNzLmNvbVwiLFxuXCJ0dy5uYmNzcG9ydHMuY29tXCIsXG5cInR3cnQubWVcIixcblwidHd0ci50b1wiLFxuXCJ0d3RyLnVzXCIsXG5cInR3dXJsLmNjXCIsXG5cInR3dXJsLm5sXCIsXG5cInR4ZXguZXNcIixcblwidHh0LmJvXCIsXG5cInU3Ni5vcmdcIixcblwidWFmbHkuY29cIixcblwidWFwcC5seVwiLFxuXCJ1YjAuY2NcIixcblwidS5iYlwiLFxuXCJ1YnkuZXNcIixcblwidWNhbS5tZVwiLFxuXCJ1Y2xhLmluXCIsXG5cInVnLmN6XCIsXG5cInVpb3AubWVcIixcblwidWxpbWl0LmNvbVwiLFxuXCJ1bG10LmluXCIsXG5cInVsdS5sdVwiLFxuXCJ1Lm1hdnJldi5jb21cIixcblwidW11cmwudXNcIixcblwidW5mYWtlci5pdFwiLFxuXCJ1bmluZXdzLnVzXCIsXG5cInVuaS52aVwiLFxuXCJ1bmxjLnVzXCIsXG5cInVudHAuYmVlclwiLFxuXCJ1bnRwLml0XCIsXG5cInUubnVcIixcblwidW52cnMuYWxcIixcblwidXBkYXRpbmcubWVcIixcblwidS5wd1wiLFxuXCJ1cHdyLm1lXCIsXG5cInVwemF0LmNvbVwiLFxuXCJ1cjEuY2FcIixcblwidXJiYW51cC5jb21cIixcblwidXJibi5jY1wiLFxuXCJ1cmJvLmNvXCIsXG5cInVyaXp5LmNvbVwiLFxuXCJ1cmwyLmZyXCIsXG5cInVybDM2MC5tZVwiLFxuXCJ1cmw0LmV1XCIsXG5cInVybDUub3JnXCIsXG5cInVybC5hZ1wiLFxuXCJ1cmxhby5jb21cIixcblwidXJsLmF6XCIsXG5cInVybGJlZS5jb21cIixcblwidXJsYm9yZy5jb21cIixcblwidXJsYnJpZWYuY29tXCIsXG5cInVybGNvcnRhLmVzXCIsXG5cInVybC5jby51a1wiLFxuXCJ1cmxjb3Zlci5jb21cIixcblwidXJsY3V0LmNvbVwiLFxuXCJ1cmxjdXR0ZXIuY29tXCIsXG5cInVybGVuY28uZGVcIixcblwidXJsZy5pbmZvXCIsXG5cInVybC5nby5pdFwiLFxuXCJ1cmxoYXdrLmNvbVwiLFxuXCJ1cmwuaWVcIixcblwidXJsLmluYy14LmV1XCIsXG5cInVybGluLml0XCIsXG5cInVybGkubmxcIixcblwidXJsa2lzcy5jb21cIixcblwidXJsLmxvdHBhdHJvbC5jb21cIixcblwidXJsb28uY29tXCIsXG5cInVybHBpcmUuY29tXCIsXG5cInVybHMuZnJcIixcblwidXJsc2hvcnRlbmluZ3NlcnZpY2Vmb3J0d2l0dGVyLmNvbVwiLFxuXCJ1cmxzLmltXCIsXG5cInVybHRlYS5jb21cIixcblwidXJsdS5tc1wiLFxuXCJ1cmx2aS5iXCIsXG5cInVybHZpLmJlXCIsXG5cInVybHguaWVcIixcblwidXIubHlcIixcblwidXJsei5hdFwiLFxuXCJ1cmx6ZW4uY29tXCIsXG5cInVybHouZnJcIixcblwidXJ1Yi51c1wiLFxuXCJ1c2FuZXQudHZcIixcblwidXNhdC5seVwiLFxuXCJ1c2UubXlcIixcblwidXNlcnZvaWNlLmNvbVwiLFxuXCJ1c3NvYy5jclwiLFxuXCJ1c3RyZS5hbVwiLFxuXCJ1dGZnLnNrXCIsXG5cInUudG9cIixcblwidXZlcnNlLnVzXCIsXG5cInV4bS5hZ1wiLFxuXCJ2MW0ubmV0XCIsXG5cInY1LmdkXCIsXG5cInZhYWEuZnJcIixcblwidmFkby5pdFwiLFxuXCJ2YWx2LmltXCIsXG5cInZhemEubWVcIixcblwidmIubHlcIixcblwidmJseS51c1wiLFxuXCJ2ZDU1LmNvbVwiLFxuXCJ2ZGlyZWN0LmNvbVwiLFxuXCJ2ZXJkLmluXCIsXG5cInZldm8ubHlcIixcblwidi5nZFwiLFxuXCJ2Z24uYW1cIixcblwidmduLm1lXCIsXG5cInYuaHRcIixcblwidmlhLm1lXCIsXG5cInZpZGR5Lml0XCIsXG5cInZpaWdvLmltXCIsXG5cInZpLmx5XCIsXG5cInZpcmcuY29cIixcblwidmlyZy5pblwiLFxuXCJ2aXJsLmNvbVwiLFxuXCJ2bC5hbVwiLFxuXCJ2bS5sY1wiLFxuXCJ2bnR5LmZyXCIsXG5cInZudHkudXNcIixcblwidm9pemxlLmNvbVwiLFxuXCJ2b2x1LnNuXCIsXG5cInZvdi5saVwiLFxuXCJ2b3guY29tXCIsXG5cInZyZ2UuY29cIixcblwidnJsLmh0XCIsXG5cInZyc24uY2NcIixcblwidnNiLmxpXCIsXG5cInZzbGwuZXVcIixcblwidnQ4MDIudXNcIixcblwidnRjLmVzXCIsXG5cInZ1bHQucmVcIixcblwidnVyLm1lXCIsXG5cInZ2LnZnXCIsXG5cInYueml0ZS5jb21cIixcblwidnoudG9cIixcblwidnp0dXJsLmNvbVwiLFxuXCJ3MHIubWVcIixcblwidzFwLmZyXCIsXG5cInczMy51c1wiLFxuXCJ3MzQudXNcIixcblwidzN0Lm9yZ1wiLFxuXCJ3NTUuZGVcIixcblwid2E5LmxhXCIsXG5cIndhYS5haVwiLFxuXCJ3YWxtYXJ0dXJsLmNvbVwiLFxuXCJ3YXBvLnN0XCIsXG5cIndhcHVybC5jby51a1wiLFxuXCJ3YXNoZXguYW1cIixcblwid2IxLmV1XCIsXG5cIndidHJuZC5jb1wiLFxuXCJ3YnVyLmZtXCIsXG5cIndlYjk5LmV1XCIsXG5cIndlYmFsaWFzLmNvbVwiLFxuXCJ3ZWQubGlcIixcblwid2VsY29tZS50b1wiLFxuXCJ3ZXJ2aXJnLmluXCIsXG5cIndlLnRsXCIsXG5cIndldC5wdFwiLFxuXCJ3ZnAudG9cIixcblwid2Z0cy50dlwiLFxuXCJ3LmZ1bGxzYWlsLmVkdVwiLFxuXCJ3aC5nb3ZcIixcblwid2lkZW8uZnJcIixcblwid2lkZy5tZVwiLFxuXCJ3aWdzLmx5XCIsXG5cIndpbi5nc1wiLFxuXCJ3aXBpLmVzXCIsXG5cIndpcmUubXNcIixcblwid2lzLm1zXCIsXG5cIndpdGgubWVcIixcblwid2pmLmltXCIsXG5cIndqLmxhXCIsXG5cIndrcmcuY29tXCIsXG5cIndvby5seVwiLFxuXCJ3cGJlZy5pblwiLFxuXCJ3cC5tZVwiLFxuXCJ3cC5tdVwiLFxuXCJ3cG8uc3RcIixcblwid3JkLmNtXCIsXG5cIndyZG0uYWdcIixcblwi4oC6LndzXCIsXG5cIndzbS5jb1wiLFxuXCJ3dGMubGFcIixcblwid3RobXMuY29cIixcblwid3UuY3pcIixcblwid3c3LmZyXCIsXG5cInd3ZC51c1wiLFxuXCJ3d3kubWVcIixcblwid3d6LnJzXCIsXG5cInd4Y2gubmxcIixcblwieDEwLm14XCIsXG5cIngyYy5ldVwiLFxuXCJ4MmMuZXVteFwiLFxuXCJ4YXYuY2NcIixcblwieGJ4Lm1zXCIsXG5cInguY29cIixcblwieGVldXJsLmNvbVwiLFxuXCJ4Z2QuaW5cIixcblwieC5oeXBlbS5jb21cIixcblwieGliLm1lXCIsXG5cInhpbC5pblwiLFxuXCJ4bDguZXVcIixcblwieGxpbmt6LmluZm9cIixcblwieGx1cmwuZGVcIixcblwieG4tLTFjaS53c1wiLFxuXCJ4bi0tM2ZpLndzXCIsXG5cInhuLS01Z2kud3NcIixcblwieG4tLTlnaS53c1wiLFxuXCJ4bi0tYmloLndzXCIsXG5cInhuLS1jd2cud3NcIixcblwieG4tLWVnaS53c1wiLFxuXCJ4bi0tZndnLndzXCIsXG5cInhuLS1oZ2kud3NcIixcblwieG4tLWwzaC53c1wiLFxuXCJ4bi0tb2RpLndzXCIsXG5cInhuLS1vZ2kud3NcIixcblwieG4tLXJlaS53c1wiLFxuXCJ4Lm51XCIsXG5cInhuLS12Z2kud3NcIixcblwieG9lLmN6XCIsXG5cInhyLmNvbVwiLFxuXCJ4cmwuaW5cIixcblwieHJsLnVzXCIsXG5cInhydC5tZVwiLFxuXCJ4cnguc21cIixcblwieC5zZVwiLFxuXCJ4dDMubWVcIixcblwieHR1Lm1lXCIsXG5cInh1YS5tZVwiLFxuXCJ4dWIubWVcIixcblwieC51cC5jb21cIixcblwieHVybC5lc1wiLFxuXCJ4dXJsLmpwXCIsXG5cInh1cmxzLmNvXCIsXG5cIngudnVcIixcblwieHhzdXJsLmRlXCIsXG5cInh6Yi5jY1wiLFxuXCJ5YWdvYS5mclwiLFxuXCJ5YWdvYS5tZVwiLFxuXCJ5LmFob28uaXRcIixcblwieWF0dWMuY29tXCIsXG5cInlhdS5zaFwiLFxuXCJ5ZWNhLmV1XCIsXG5cInllY3QuY29tXCIsXG5cInllLnBlXCIsXG5cInllcC5pdFwiLFxuXCJ5ZS1zLmNvbVwiLFxuXCJ5ZnJvZy5jb21cIixcblwieWhvby5pdFwiLFxuXCJ5aXlkLmNvbVwiLFxuXCJ5b2doLm1lXCIsXG5cInlvbi5pclwiLFxuXCJ5b3VmYXAubWVcIixcblwieW91cmxzLm9yZ1wiLFxuXCIjeW91dHUuYmVcIixcblwieW91dHUuYmVcIixcblwieXNlYXIuY2hcIixcblwieXUyLml0XCIsXG5cInl1YXJlbC5jb21cIixcblwieXl2LmNvXCIsXG5cInowcC5kZVwiLFxuXCJ6OS5mclwiLFxuXCJ6YWdhdC5ielwiLFxuXCJ6YWdnLnRvXCIsXG5cInphbi5neVwiLFxuXCJ6YXBpdC5udVwiLFxuXCJ6YXB0LmluXCIsXG5cInphcHdvdy5tZVwiLFxuXCJ6ZC5uZXRcIixcblwiemVlay5pclwiLFxuXCJ6aWdsci51c1wiLFxuXCJ6aS5tYVwiLFxuXCJ6aS5tZVwiLFxuXCJ6aS5tdVwiLFxuXCJ6aS5wZVwiLFxuXCJ6aXAubGlcIixcblwiemlwbXl1cmwuY29tXCIsXG5cInppcC5uZXRcIixcblwieml0ZS50b1wiLFxuXCJ6a3JhdC5tZVwiLFxuXCJ6a3IuY3pcIixcblwiemtydC5jelwiLFxuXCJ6b29kbC5jb21cIixcblwiem9vdGl0LmNvbVwiLFxuXCJ6b28udGxcIixcblwienBhZy5lc1wiLFxuXCJ6LnBlXCIsXG5cInpwci5pb1wiLFxuXCJ6U01TLm5ldFwiLFxuXCJ6dGkubWVcIixcblwienVkLm1lXCIsXG5cInp1cmwud3NcIixcblwienhxLm5ldFwiLFxuXCJ6eXZhLm9yZ1wiLFxuXCJ6emFuZy5rclwiLFxuXCJ6emIuYnpcIixcblwienouZ2RcIlxuXTtcbiIsImV4cG9ydCBjb25zdCBhbXBDYWNoZURvbWFpbnMgPSBbXCJjZG4uYW1wcHJvamVjdC5vcmdcIiwgXCJhbXAuY2xvdWRmbGFyZS5jb21cIiwgXCJiaW5nLWFtcC5jb21cIl07IiwiLyoqXG4qIE1vZHVsZSBmb3IgcmVzb2x2aW5nIGEgc2hvcnQgdXJsXG4qIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTGlua1Jlc29sdXRpb25cbiovXG5pbXBvcnQge1xuIGdldERlYnVnZ2luZ0xvZ1xufSBmcm9tICcuL0RlYnVnZ2luZy5qcyc7XG5pbXBvcnQge1xuIHNob3J0RG9tYWluc1xufSBmcm9tICcuLi9kZXBlbmRlbmNpZXMvc2hvcnRkb21haW5zLmpzJztcbmltcG9ydCB7XG4gYW1wQ2FjaGVEb21haW5zXG59IGZyb20gJy4uL2RlcGVuZGVuY2llcy9hbXBjYWNoZWRvbWFpbnMuanMnO1xuY29uc3QgZGVidWdMb2cgPSBnZXREZWJ1Z2dpbmdMb2coXCJVdGlsaXRpZXMuTGlua1Jlc29sdXRpb25cIik7XG5cblxuY29uc3QgZmV0Y2hUaW1lb3V0TXMgPSA1MDAwO1xubGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4vLyBwcm9taXNlc0J5VXJsIGlzIGEgbWFwcGluZyBmcm9tIGEgdXJsIHRvIHJlc29sdmUgYW5kIHRoZSByZXNvbHZlIG9iamVjdHMgYXNzb2NpYXRlZCB3aXRoIGl0XG5sZXQgcHJvbWlzZXNCeVVybCA9IG5ldyBNYXAoKTtcbi8vIHRyYWNrZWRVcmxzIGlzIGEgc2V0IGZvciB3aGljaCB0aGUgaGVhZGVycyBhcmUgb2JzZXJ2ZWRcbmxldCB0cmFja2VkVXJscyA9IG5ldyBTZXQoKTtcbi8vIHVybEJ5UmVkaXJlY3RlZFVybCBpcyBhIG1hcHBpbmcgZnJvbSBhIHJlZGlyZWN0ZWQgdXJsIHRvIHVybCB0aGF0IHJlZGlyZWN0ZWQgdG8gaXRcbi8vIHJlY3Vyc2l2ZWx5IHRyYXZlcnNpbmcgdGhpcyBtYXBwaW5nIHdpbGwgZ2V0IHRoZSByZWRpcmVjdCBjaGFpbiBhc3NvY2lhdGVkIHdpdGggYW4gaW5pdGlhbCB1cmxcbmxldCB1cmxCeVJlZGlyZWN0ZWRVcmwgPSBuZXcgTWFwKCk7XG5cbi8qKlxuKiBGdW5jdGlvbiB0byByZXNvbHZlIGEgZ2l2ZW4gdXJsIHRvIHRoZSBmaW5hbCB1cmwgdGhhdCBpdCBwb2ludHMgdG9cbiogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byByZXNvbHZlXG4qIEByZXR1cm5zIHtQcm9taXNlLk9iamVjdH0gLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZGVzdGluYXRpb24gdXJsXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVcmwodXJsKSB7XG4gaWYgKCFpbml0aWFsaXplZCkge1xuICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwibW9kdWxlIG5vdCBpbml0aWFsaXplZFwiKTtcbiB9XG4gbGV0IHVybFJlc29sdXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgLy8gc3RvcmUgdGhlIHJlc29sdmUgZnVuY3Rpb24gaW4gcHJvbWlzZXNCeVVybC4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgXG4gICAvLyB1cmwgaXMgcmVzb2x2ZWRcbiAgIGxldCByZXNvbHZlcyA9IHByb21pc2VzQnlVcmwuZ2V0KHVybCkgfHwgW107XG4gICBpZiAoIXJlc29sdmVzIHx8ICFyZXNvbHZlcy5sZW5ndGgpIHtcbiAgICAgcHJvbWlzZXNCeVVybC5zZXQodXJsLCByZXNvbHZlcyk7XG4gICB9XG4gICByZXNvbHZlcy5wdXNoKHtcbiAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgcmVqZWN0OiByZWplY3RcbiAgIH0pO1xuICAgdHJhY2tlZFVybHMuYWRkKHVybCk7XG4gICAvLyBmZXRjaCB0aGlzIHVybFxuICAgZmV0Y2hXaXRoVGltZW91dCh1cmwsIHtcbiAgICAgcmVkaXJlY3Q6ICdtYW51YWwnLFxuICAgICBoZWFkZXJzOiB7XG4gICAgICAgLyogV2l0aCBhIGJyb3dzZXIgVXNlci1BZ2VudCBoZWFkZXIsIHRoZSByZXNwb25zZSBvZiBuZXdzLmdvb2dsZS5jb20gbGluayBzaGltIGlzIGEgSFRNTCBkb2N1bWVudCB0aGF0IGV2ZW50dWFsbHkgcmVkaXJlY3RzIHRvIHRoZSBhY3R1YWwgbmV3cyBwYWdlLlxuICAgICAgIFRoaXMgYWN0dWFsIG5ld3MgbGluayBpcyBub3QgcGFydCBvZiB0aGUgSFRUUCByZXNwb25zZSByZWFkZXIuIEhvd2V2ZXIsIHVzaW5nIGEgbm9uLWJyb3dzZXIgVXNlci1BZ2VudCBsaWtlIGN1cmwgdGhlIHJlc3BvbnNlIGhlYWRlclxuICAgICAgIGNvbnRhaW5zIHRoZSByZWRpcmVjdGVkIGxvY2F0aW9uLiAqL1xuICAgICAgICdVc2VyLUFnZW50JzogdXJsLmluY2x1ZGVzKFwibmV3cy5nb29nbGUuY29tXCIpID8gJ2N1cmwvNy4xMC42IChpMzg2LXJlZGhhdC1saW51eC1nbnUpIGxpYmN1cmwvNy4xMC42IE9wZW5TU0wvMC45LjdhIGlwdjYgemxpYi8xLjEuNCcgOiAnJ1xuICAgICB9XG4gICB9LCBmZXRjaFRpbWVvdXRNcyk7XG4gfSk7XG4gcmV0dXJuIHVybFJlc29sdXRpb25Qcm9taXNlO1xufVxuXG4vKipcbiogTGlzdGVuZXIgZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3dlYlJlcXVlc3Qvb25IZWFkZXJzUmVjZWl2ZWRcbiogQHBhcmFtIHtPYmplY3R9IGRldGFpbHMgY29udGFpbnMgZGV0YWlscyBvZiB0aGUgcmVxdWVzdFxuKi9cbmZ1bmN0aW9uIHJlc3BvbnNlSGVhZGVyTGlzdGVuZXIoZGV0YWlscykge1xuIC8vIENvbnRpbnVlIG9ubHkgaWYgdGhpcyB1cmwgaXMgcmVsZXZhbnQgZm9yIGxpbmsgcmVzb2x1dGlvblxuIGlmICghdHJhY2tlZFVybHMuaGFzKGRldGFpbHMudXJsKSkge1xuICAgcmV0dXJuO1xuIH1cblxuIC8vIFRoZSBsb2NhdGlvbiBmaWVsZCBpbiByZXNwb25zZSBoZWFkZXIgaW5kaWNhdGVzIHRoZSByZWRpcmVjdGVkIFVSTFxuIC8vIFRoZSByZXNwb25zZSBoZWFkZXIgZnJvbSBvbkhlYWRlcnNSZWNlaXZlZCBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCBvbmUgb2Ygd2hpY2ggcG9zc2libHlcbiAvLyBjb250YWlucyBhIGZpZWxkIHdpdGggbmFtZSBsb2NhdGlvbiAoY2FzZSBpbnNlbnNpdGl2ZSkuXG4gbGV0IHJlZGlyZWN0ZWRVUkxMb2NhdGlvbiA9IGRldGFpbHMucmVzcG9uc2VIZWFkZXJzLmZpbmQob2JqID0+IHtcbiAgIHJldHVybiBvYmoubmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIkxPQ0FUSU9OXCI7XG4gfSk7XG5cbiAvLyBpZiB0aGUgbG9jYXRpb24gZmllbGQgaW4gcmVzcG9uc2UgaGVhZGVyIGNvbnRhaW5zIGEgbmV3IHVybFxuIGlmIChyZWRpcmVjdGVkVVJMTG9jYXRpb24gIT0gbnVsbCAmJiAocmVkaXJlY3RlZFVSTExvY2F0aW9uLnZhbHVlICE9IGRldGFpbHMudXJsKSkge1xuICAgbGV0IG5leHR1cmwgPSByZWRpcmVjdGVkVVJMTG9jYXRpb24udmFsdWU7XG4gICAvLyBDcmVhdGUgYSBsaW5rIGJldHdlZW4gdGhlIG5leHQgdXJsIGFuZCB0aGUgaW5pdGlhbCB1cmxcbiAgIHVybEJ5UmVkaXJlY3RlZFVybC5zZXQobmV4dHVybCwgZGV0YWlscy51cmwpO1xuICAgLy8gQWRkIHRoZSBuZXh0IHVybCBzbyB0aGF0IHdlIHByb2Nlc3MgaXQgZHVyaW5nIHRoZSBuZXh0IG9uSGVhZGVyc1JlY2VpdmVkXG4gICB0cmFja2VkVXJscy5hZGQobmV4dHVybCk7XG4gICAvLyBTZW5kIGZldGNoIHJlcXVlc3QgdG8gdGhlIG5leHQgdXJsXG4gICBmZXRjaFdpdGhUaW1lb3V0KG5leHR1cmwsIHtcbiAgICAgcmVkaXJlY3Q6ICdtYW51YWwnLFxuICAgICBoZWFkZXJzOiB7XG4gICAgICAgJ1VzZXItQWdlbnQnOiAnJ1xuICAgICB9XG4gICB9LCBmZXRjaFRpbWVvdXRNcyk7XG4gfSBlbHNlIHsgLy8gdXJsIGlzIG5vdCByZWRpcmVjdGVkXG4gICBpZiAodXJsQnlSZWRpcmVjdGVkVXJsLmhhcyhkZXRhaWxzLnVybCkpIHtcbiAgICAgLy8gYmFja3RyYWNrIHVybEJ5UmVkaXJlY3RlZFVybCB0byBnZXQgdG8gdGhlIHByb21pc2Ugb2JqZWN0IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhpc1xuICAgICBsZXQgdXJsID0gZGV0YWlscy51cmw7XG4gICAgIHdoaWxlICh1cmxCeVJlZGlyZWN0ZWRVcmwuaGFzKHVybCkpIHtcbiAgICAgICBsZXQgdGVtcCA9IHVybDtcbiAgICAgICB1cmwgPSB1cmxCeVJlZGlyZWN0ZWRVcmwuZ2V0KHVybCk7XG4gICAgICAgdXJsQnlSZWRpcmVjdGVkVXJsLmRlbGV0ZSh0ZW1wKTtcbiAgICAgICB0cmFja2VkVXJscy5kZWxldGUodGVtcCk7XG4gICAgIH1cbiAgICAgLy8gdXJsIG5vdyBjb250YWlucyB0aGUgaW5pdGlhbCB1cmwuIE5vdywgcmVzb2x2ZSB0aGUgY29ycmVzcG9uZGluZyBwcm9taXNlc1xuICAgICBpZiAodXJsICYmIHByb21pc2VzQnlVcmwuaGFzKHVybCkpIHtcbiAgICAgICBsZXQgcmVzb2x2ZXMgPSBwcm9taXNlc0J5VXJsLmdldCh1cmwpIHx8IFtdO1xuICAgICAgIGxldCByZXNvbHZlT2JqID0ge1xuICAgICAgICAgc291cmNlOiB1cmwsXG4gICAgICAgICBkZXN0OiBkZXRhaWxzLnVybFxuICAgICAgIH07XG4gICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNvbHZlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgdmFyIHIgPSByZXNvbHZlc1tpXS5yZXNvbHZlO1xuICAgICAgICAgcihyZXNvbHZlT2JqKTtcbiAgICAgICB9XG4gICAgICAgcHJvbWlzZXNCeVVybC5kZWxldGUodXJsKTtcbiAgICAgfVxuICAgfVxuIH1cbn1cblxuLyoqXG4qIExpc3RlbmVyIGZvciBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS93ZWJSZXF1ZXN0L29uRXJyb3JPY2N1cnJlZFxuKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VEZXRhaWxzIC0gQ29udGFpbnMgZGV0YWlscyBvZiB0aGUgZXJyb3JcbiovXG5mdW5jdGlvbiB0cmFja0Vycm9yKHJlc3BvbnNlRGV0YWlscykge1xuIGxldCB1cmwgPSByZXNwb25zZURldGFpbHMudXJsO1xuIGlmIChwcm9taXNlc0J5VXJsLmhhcyh1cmwpKSB7XG4gICBsZXQgcmVzb2x2ZXMgPSBwcm9taXNlc0J5VXJsLmdldCh1cmwpIHx8IFtdO1xuICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNvbHZlcy5sZW5ndGg7IGkrKykge1xuICAgICBsZXQgciA9IHJlc29sdmVzW2ldLnJlamVjdDtcbiAgICAgcihyZXNwb25zZURldGFpbHMuZXJyb3IpO1xuICAgfVxuICAgcHJvbWlzZXNCeVVybC5kZWxldGUodXJsKTtcbiB9XG59XG5cbi8qKlxuKiBJbml0aWFsaXplcyB0aGUgbGluayByZXNvbHV0aW9uIG1vZHVsZSBieSBzZXR0aW5nIHVwIGxpc3RlbmVycyBmb3Igb25IZWFkZXJzUmVjZWl2ZWQgZXZlbnRcbiogQHJldHVybnMge3ZvaWR9IE5vdGhpbmdcbiovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiBpbml0aWFsaXplZCA9IHRydWU7XG4gbGV0IGhlYWRlckxpc3RlbmVyID0gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKHJlc3BvbnNlSGVhZGVyTGlzdGVuZXIsIHtcbiAgIHVybHM6IFtcIjxhbGxfdXJscz5cIl1cbiB9LCBbXCJyZXNwb25zZUhlYWRlcnNcIl0pO1xuIGxldCBlcnJvckxpc3RlbmVyID0gYnJvd3Nlci53ZWJSZXF1ZXN0Lm9uRXJyb3JPY2N1cnJlZC5hZGRMaXN0ZW5lcih0cmFja0Vycm9yLCB7XG4gICB1cmxzOiBbXCI8YWxsX3VybHM+XCJdXG4gfSk7XG59XG5cbi8qKlxuKiBSZXR1cm5zIGEgbGlzdCBvZiBzaG9ydCBkb21haW5zIHRoYXQgdGhlIGxpbmsgcmVzb2x1dGlvbiBtb2R1bGUgY2FuIHJlc29sdmVcbiogQHJldHVybnMge1N0cmluZ1tdfSBBcnJheSBvZiBkb21haW5zXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3J0RG9tYWlucygpIHtcbiByZXR1cm4gc2hvcnREb21haW5zO1xufVxuXG4vKipcbiogUmV0dXJucyBhIGxpc3Qgb2YgYW1wIGNhY2hlIGRvbWFpbnNcbiogQHJldHVybnMge1N0cmluZ1tdfSBBcnJheSBvZiBkb21haW5zXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFtcENhY2hlRG9tYWlucygpIHtcbiByZXR1cm4gYW1wQ2FjaGVEb21haW5zO1xufVxuXG4vKipcbiogRmV0Y2ggQVBJIGRvZXNuJ3QgcHJvdmlkZSBhIG5hdGl2ZSB0aW1lb3V0IG9wdGlvbi4gVGhpcyBmdW5jdGlvbiB1c2VzIEFib3J0Q29udHJvbGxlciB0b1xuKiB0aW1lb3V0IGZldGNoIHJlcXVlc3RzLlxuKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gcmVzb3VyY2UgdG8gZmV0Y2hcbiogQHBhcmFtIHtPYmplY3R9IGluaXQgLSBmZXRjaCBpbml0aWFsaXphdGlvblxuKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCAtIHRpbWVvdXQgaW4gbXMgZm9yIGZldGNoIHJlcXVlc3RzXG4qL1xuZnVuY3Rpb24gZmV0Y2hXaXRoVGltZW91dCh1cmwsIGluaXQsIHRpbWVvdXQpIHtcbiBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuIGluaXQuc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG4gZmV0Y2godXJsLCBpbml0KTtcbiBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgdGltZW91dCk7XG59IiwiLyoqXG4gKiBMaW5rRXhwb3N1cmUgbW9kdWxlIGlzIHVzZWQgdG8gcnVuIHN0dWRpZXMgdGhhdCB0cmFjayB1c2VyJ3MgZXhwb3N1cmVcbiAqIHRvIGNvbnRlbnQgZnJvbSBrbm93biBuZXdzIGRvbWFpbnNcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlXG4gKi9cblxuaW1wb3J0ICogYXMgRGVidWdnaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvRGVidWdnaW5nLmpzXCJcbmltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSBcIi4uL1V0aWxpdGllcy9TdG9yYWdlLmpzXCJcbmltcG9ydCAqIGFzIExpbmtSZXNvbHV0aW9uIGZyb20gXCIuLi9VdGlsaXRpZXMvTGlua1Jlc29sdXRpb24uanNcIlxuaW1wb3J0ICogYXMgTWF0Y2hpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NYXRjaGluZy5qc1wiXG5pbXBvcnQgKiBhcyBNZXNzYWdpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NZXNzYWdpbmcuanNcIlxuaW1wb3J0ICogYXMgUGFnZUV2ZW50cyBmcm9tIFwiLi4vVXRpbGl0aWVzL1BhZ2VFdmVudHMuanNcIlxuXG5jb25zdCBkZWJ1Z0xvZyA9IERlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2coXCJNZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlXCIpO1xuXG4vKipcbiAqIEEgS2V5VmFsdWVTdG9yYWdlIG9iamVjdCBmb3IgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0dWR5LlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzdG9yYWdlID0gbnVsbDtcblxudmFyIG51bVVudHJhY2tlZFVybHNCeVRocmVzaG9sZCA9IHt9O1xuXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxudmFyIHZpc2liaWxpdHlUaHJlc2hvbGRzID0gWzEwMDAsIDMwMDAsIDUwMDAsIDEwMDAwXTsgLy8gbWF0Y2ggdG8gQ1MgdmFsdWVzXG4vKipcbiAqIEBuYW1lIExpbmtFeHBvc3VyZS5ydW5TdHVkeSBzdGFydHMgdGhlIExpbmtFeHBvc3VyZSBzdHVkeS5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGRvbWFpbnMgLSBBcnJheSBvZiBkb21haW5zIHRvIHRyYWNrIFxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIElmIHRydWUgdGhlbiB0aGUgc3R1ZHkgd29ya3MgaW4gcHJpdmF0ZSB3aW5kb3dzXG4gKiBAcGFyYW0ge3N0cmluZ30gZG9tYWluc0NhdGVnb3J5IC0gQ2F0ZWdvcnkgb2YgdGhlIGRvbWFpbnMgdG8gdHJhY2tcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blN0dWR5KHtcbiAgICBkb21haW5zID0gW10sXG4gICAgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSxcbiAgICBkb21haW5zQ2F0ZWdvcnkgPSBcIm5ld3NcIixcbn0pIHtcblxuICAgIC8vIHN0b3JlIHByaXZhdGUgd2luZG93cyBwcmVmZXJlbmNlIGluIHRoZSBzdG9yYWdlXG4gICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLnByaXZhdGVXaW5kb3dzXCI6IHByaXZhdGVXaW5kb3dzIH0pOyBcbiAgICBzdG9yYWdlID0gYXdhaXQgKG5ldyBTdG9yYWdlLktleVZhbHVlU3RvcmFnZShcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZVwiKSkuaW5pdGlhbGl6ZSgpO1xuICAgIC8vIFVzZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHdlYnBhZ2UgdGhlIHVzZXIgdmlzaXRzIHRoYXQgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgdmFyIG5leHRMaW5rRXhwb3N1cmVJZENvdW50ZXIgPSBhd2FpdCAobmV3IFN0b3JhZ2UuQ291bnRlcihcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5uZXh0UGFnZUlkXCIpKS5pbml0aWFsaXplKCk7XG4gICAgbGV0IHNob3J0RG9tYWlucyA9IExpbmtSZXNvbHV0aW9uLmdldFNob3J0RG9tYWlucygpO1xuICAgIGxldCBhbXBDYWNoZURvbWFpbnMgPSBMaW5rUmVzb2x1dGlvbi5nZXRBbXBDYWNoZURvbWFpbnMoKTtcbiAgICBsZXQgZG9tYWluUGF0dGVybiA9IE1hdGNoaW5nLmNyZWF0ZVVybFJlZ2V4U3RyaW5nKGRvbWFpbnMpO1xuICAgIGxldCBzaG9ydERvbWFpblBhdHRlcm4gPSBNYXRjaGluZy5jcmVhdGVVcmxSZWdleFN0cmluZyhzaG9ydERvbWFpbnMpO1xuICAgIGxldCBhbXBDYWNoZURvbWFpblBhdHRlcm4gPSBNYXRjaGluZy5jcmVhdGVVcmxSZWdleFN0cmluZyhhbXBDYWNoZURvbWFpbnMpO1xuICAgIGZvciAodmFyIHZpc1RocmVzaG9sZCBvZiB2aXNpYmlsaXR5VGhyZXNob2xkcykge1xuICAgICAgICBudW1VbnRyYWNrZWRVcmxzQnlUaHJlc2hvbGRbdmlzVGhyZXNob2xkXSA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLm51bVVudHJhY2tlZFVybHNcIiArIHZpc1RocmVzaG9sZCkpLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgY29uc3QgYW1wQ2FjaGVNYXRjaGVyID0gbmV3IFJlZ0V4cChhbXBDYWNoZURvbWFpblBhdHRlcm4pO1xuICAgIGNvbnN0IHNob3J0RG9tYWluTWF0Y2hlciA9IG5ldyBSZWdFeHAoc2hvcnREb21haW5QYXR0ZXJuKTtcbiAgICBjb25zdCB1cmxNYXRjaGVyID0gbmV3IFJlZ0V4cChkb21haW5QYXR0ZXJuKTtcbiAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHtkb21haW5SZWdleDogdXJsTWF0Y2hlciwgc2hvcnREb21haW5SZWdleDogc2hvcnREb21haW5NYXRjaGVyLCBhbXBEb21haW5SZWdleCA6IGFtcENhY2hlTWF0Y2hlcn0pO1xuXG4gICAgLy8gQWRkIHRoZSBjb250ZW50IHNjcmlwdCBmb3IgY2hlY2tpbmcgbGlua3Mgb24gcGFnZXNcbiAgICBhd2FpdCBicm93c2VyLmNvbnRlbnRTY3JpcHRzLnJlZ2lzdGVyKHtcbiAgICAgICAgbWF0Y2hlczogW1wiKjovLyovKlwiXSxcbiAgICAgICAganM6IFt7XG4gICAgICAgICAgICBmaWxlOiBcIi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL3V0aWxzLmpzXCJcbiAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlOiBcIi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL2xpbmtFeHBvc3VyZS5qc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJ1bkF0OiBcImRvY3VtZW50X2lkbGVcIlxuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIGZvciBMaW5rRXhwb3N1cmUgbWVzc2FnZXMgZnJvbSBjb250ZW50IHNjcmlwdFxuICAgIE1lc3NhZ2luZy5yZWdpc3Rlckxpc3RlbmVyKFwiV2ViU2NpZW5jZS5saW5rRXhwb3N1cmVcIiwgKGV4cG9zdXJlSW5mbywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCEoXCJ0YWJcIiBpbiBzZW5kZXIpKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhcIldhcm5pbmc6IHVuZXhwZWN0ZWQgbGluayBleHBvc3VyZSB1cGRhdGVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVudHJhY2tlZEluZm8gPSBleHBvc3VyZUluZm8ubnVtVW50cmFja2VkVXJscztcbiAgICAgICAgZm9yICh2YXIgdmlzVGhyZXNob2xkIGluIHVudHJhY2tlZEluZm8pIHtcbiAgICAgICAgICAgIG51bVVudHJhY2tlZFVybHNCeVRocmVzaG9sZFt2aXNUaHJlc2hvbGRdLmluY3JlbWVudEJ5QW5kR2V0KHVudHJhY2tlZEluZm9bdmlzVGhyZXNob2xkXSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3N1cmVJbmZvLmV4cG9zdXJlRXZlbnRzLmZvckVhY2goYXN5bmMgZXhwb3N1cmVFdmVudCA9PiB7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50LmlzU2hvcnRlbmVkVXJsID0gc2hvcnREb21haW5NYXRjaGVyLnRlc3QoZXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCk7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCA9IHRydWU7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50Lm1ldGFkYXRhID0gZXhwb3N1cmVJbmZvLm1ldGFkYXRhO1xuICAgICAgICAgICAgLy8gcmVzb2x2ZWRVcmwgaXMgdmFsaWQgb25seSBmb3IgdXJscyBmcm9tIHNob3J0IGRvbWFpbnNcbiAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBleHBvc3VyZUV2ZW50Lm1ldGFkYXRhLmRvbWFpbkNhdGVnb3J5ID0gZG9tYWluc0NhdGVnb3J5O1xuICAgICAgICAgICAgaWYgKGV4cG9zdXJlRXZlbnQuaXNTaG9ydGVuZWRVcmwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IExpbmtSZXNvbHV0aW9uLnJlc29sdmVVcmwoZXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCk7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybE1hdGNoZXIudGVzdChyZXN1bHQuZGVzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwgPSByZXN1bHQuZGVzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBleHBvc3VyZUV2ZW50LmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCB8fCBleHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVMaW5rRXhwb3N1cmVSZWNvcmQoZXhwb3N1cmVFdmVudCwgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUxpbmtFeHBvc3VyZVJlY29yZChleHBvc3VyZUV2ZW50LCBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIG1ldGFkYXRhOiBcIm9iamVjdFwiXG4gICAgfSk7XG5cbiAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIocGFnZUF0dGVudGlvblN0YXJ0LCB0cnVlLCBwcml2YXRlV2luZG93cyk7XG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIocGFnZUF0dGVudGlvblN0b3AsIHByaXZhdGVXaW5kb3dzKTtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG5cbn1cblxuZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0YXJ0KHt1cmwsIHJlZmVycmVyLCB0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhdHRlbnRpb25DaGFuZ2U6IFwiZ2FpblwiLCBcbiAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXB9KS5jYXRjaCggKGVycikgPT4geyByZXR1cm47IH0gKTtcbn1cbmZ1bmN0aW9uIHBhZ2VBdHRlbnRpb25TdG9wKHt1cmwsIHJlZmVycmVyLCB0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhdHRlbnRpb25DaGFuZ2U6IFwibG9zZVwiLCBcbiAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXB9KS5jYXRjaCggKGVycikgPT4geyByZXR1cm47IH0gKTtcbn1cblxuXG4vKiBVdGlsaXRpZXMgKi9cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgc3R1ZHkgZGF0YSBhcyBhbiBvYmplY3QuIE5vdGUgdGhhdCB0aGlzIGNvdWxkIGJlIHZlcnlcbiAqIHNsb3cgaWYgdGhlcmUgaXMgYSBsYXJnZSB2b2x1bWUgb2Ygc3R1ZHkgZGF0YS5cbiAqIEByZXR1cm5zIHsoT2JqZWN0fG51bGwpfSAtIFRoZSBzdHVkeSBkYXRhLCBvciBgbnVsbGAgaWYgbm8gZGF0YVxuICogY291bGQgYmUgcmV0cmlldmVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3R1ZHlEYXRhQXNPYmplY3QoKSB7XG4gICAgaWYoc3RvcmFnZSAhPSBudWxsKVxuICAgICAgICByZXR1cm4gYXdhaXQgc3RvcmFnZS5nZXRDb250ZW50c0FzT2JqZWN0KCk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGVzdHMgd2hldGhlciBhIGdpdmVuIG9iamVjdCBpcyBlbXB0eVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIE9iamVjdCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgZW1wdHlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gICAgcmV0dXJuICFvYmogfHwgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0xpbmtFeHBvc3VyZUV2ZW50fSBleHBvc3VyZUV2ZW50IGxpbmsgZXhwb3N1cmUgZXZlbnQgdG8gc3RvcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBMaW5rRXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCAtIGxpbmsgZXhwb3NlZCB0b1xuICogQHBhcmFtIHtzdHJpbmd9IExpbmtFeHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsIC0gb3B0aW9uYWwgZmllbGQgd2hpY2ggaXMgc2V0IGlmIHRoZSBpc1Nob3J0ZW5lZFVybCBhbmQgcmVzb2x1dGlvblN1Y2NlZWRlZCBhcmUgdHJ1ZVxuICogQHBhcmFtIHtib29sZWFufSBMaW5rRXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgLSB0cnVlIGlmIGxpbmsgcmVzb2x1dGlvbiBzdWNjZWVkZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gTGlua0V4cG9zdXJlRXZlbnQuaXNTaG9ydGVuZWRVcmwgLSB0cnVlIGlmIGxpbmsgbWF0Y2hlcyBzaG9ydCBkb21haW5zXG4gKiBAcGFyYW0ge251bWJlcn0gTGlua0V4cG9zdXJlRXZlbnQuZmlyc3RTZWVuIC0gdGltZXN0YW1wIHdoZW4gdGhlIGxpbmsgaXMgZmlyc3Qgc2VlblxuICogQHBhcmFtIHtudW1iZXJ9IExpbmtFeHBvc3VyZUV2ZW50LmR1cmF0aW9uIC0gbWlsbGlzZWNvbmRzIG9mIGxpbmsgZXhwb3N1cmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBMaW5rRXhwb3N1cmVFdmVudC5zaXplIC0gd2lkdGggYW5kIGhlaWdodCBvZiBsaW5rc1xuICogQHBhcmFtIHtDb3VudGVyfSBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyIGNvdW50ZXIgb2JqZWN0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUxpbmtFeHBvc3VyZVJlY29yZChleHBvc3VyZUV2ZW50LCBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyKSB7XG4gICAgZXhwb3N1cmVFdmVudC50eXBlID0gXCJsaW5rRXhwb3N1cmVcIjtcbiAgICBleHBvc3VyZUV2ZW50LnVybCA9IChleHBvc3VyZUV2ZW50LmlzU2hvcnRlbmVkVXJsICYmIGV4cG9zdXJlRXZlbnQucmVzb2x1dGlvblN1Y2NlZGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLm5vcm1hbGl6ZVVybChleHBvc3VyZUV2ZW50LnJlc29sdmVkVXJsKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5ub3JtYWxpemVVcmwoZXhwb3N1cmVFdmVudC5vcmlnaW5hbFVybCkpO1xuICAgIGV4cG9zdXJlRXZlbnQubGF0ZXJWaXNpdGVkID0gZmFsc2U7XG4gICAgZXhwb3N1cmVFdmVudC5sYXRlclNoYXJlZCA9IGZhbHNlO1xuICAgIC8vZGVidWdMb2coXCJzdG9yaW5nIFwiICsgSlNPTi5zdHJpbmdpZnkoZXhwb3N1cmVFdmVudCkpO1xuICAgIHZhciBrZXkgPSBleHBvc3VyZUV2ZW50LnVybCArIFwiIFwiICsgYXdhaXQgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlci5nZXRBbmRJbmNyZW1lbnQoKTtcbiAgICBzdG9yYWdlLnNldChrZXksIGV4cG9zdXJlRXZlbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcmVBbmRSZXNldFVudHJhY2tlZEV4cG9zdXJlc0NvdW50KCkge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgICB2YXIgdW50cmFja2VkT2JqID0geyB0eXBlOiBcIm51bVVudHJhY2tlZFVybHNcIiwgdW50cmFja2VkQ291bnRzOiB7fX07XG4gICAgICAgIGZvciAodmFyIHZpc1RocmVzaG9sZCBvZiB2aXNpYmlsaXR5VGhyZXNob2xkcykge1xuICAgICAgICAgICAgdW50cmFja2VkT2JqLnVudHJhY2tlZENvdW50c1t2aXNUaHJlc2hvbGRdID0ge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdmlzVGhyZXNob2xkLFxuICAgICAgICAgICAgICAgIG51bVVudHJhY2tlZDogYXdhaXQgbnVtVW50cmFja2VkVXJsc0J5VGhyZXNob2xkW3Zpc1RocmVzaG9sZF0uZ2V0QW5kUmVzZXQoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS51bnRyYWNrZWRVcmxzQ291bnRcIiwgdW50cmFja2VkT2JqKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dWaXNpdCh1cmwpIHtcbiAgICB2YXIgcHJldkV4cG9zdXJlcyA9IGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aCh1cmwpO1xuICAgIHZhciBoYXNQcmV2RXhwb3N1cmVzID0gZmFsc2U7XG4gICAgZm9yICh2YXIga2V5IGluIHByZXZFeHBvc3VyZXMpIHtcbiAgICAgICAgaGFzUHJldkV4cG9zdXJlcyA9IHRydWU7XG4gICAgICAgIHByZXZFeHBvc3VyZXNba2V5XS5sYXRlclZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChrZXksIHByZXZFeHBvc3VyZXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiAoaGFzUHJldkV4cG9zdXJlcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dTaGFyZSh1cmwpIHtcbiAgICB2YXIgcHJldkV4cG9zdXJlcyA9IGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aCh1cmwpO1xuICAgIHZhciBoYXNQcmV2RXhwb3N1cmVzID0gZmFsc2U7XG4gICAgZm9yICh2YXIga2V5IGluIHByZXZFeHBvc3VyZXMpIHtcbiAgICAgICAgaGFzUHJldkV4cG9zdXJlcyA9IHRydWU7XG4gICAgICAgIHByZXZFeHBvc3VyZXNba2V5XS5sYXRlclNoYXJlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KGtleSwgcHJldkV4cG9zdXJlc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1ByZXZFeHBvc3VyZXM7XG59IiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBtZWFzdXJlcyBzY3JvbGwgZGVwdGggZm9yIHdlYnBhZ2VzIG9uIHNwZWNpZmljIGRvbWFpbnMuXG4gKiBcbiAqIE5vdGU6IHdlIHdpbGwgbGlrZWx5IHJlcGxhY2UgdGhpcyBtb2R1bGUgd2hlbiB3ZSB1cGRhdGUgdGhlXG4gKiBQYWdlTmF2aWdhdGlvbiBhbmQgUGFnZUV2ZW50cyBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aFxuICovXG5cbmltcG9ydCAqIGFzIERlYnVnZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL0RlYnVnZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gXCIuLi9VdGlsaXRpZXMvU3RvcmFnZS5qc1wiXG5pbXBvcnQgKiBhcyBNYXRjaGluZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01hdGNoaW5nLmpzXCJcbmltcG9ydCAqIGFzIE1lc3NhZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01lc3NhZ2luZy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIk1lYXN1cmVtZW50cy5QYWdlRGVwdGhcIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbnZhciBsaXN0ZW5lcnMgPSBbXTtcblxuLyoqXG4gKiBTdGFydCBhIHBhZ2UgZGVwdGggc3R1ZHkuIE5vdGUgdGhhdCBvbmx5IG9uZSBzdHVkeSBpcyBzdXBwb3J0ZWQgcGVyIGV4dGVuc2lvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbIF1cbn0pIHtcblxuICAgIGlmKGluaXRpYWxpemVkKVxuICAgICAgICByZXR1cm47ICAgIFxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0UGFnZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoLm5leHRQYWdlSWRcIikpLmluaXRpYWxpemUoKTtcblxuICAgIC8vIEJ1aWxkIHRoZSBVUkwgbWF0Y2hpbmcgc2V0IGZvciBjb250ZW50IHNjcmlwdHNcbiAgICB2YXIgY29udGVudFNjcmlwdE1hdGNoZXMgPSBNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCB0cnVlKTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjb250ZW50IHNjcmlwdCBmb3IgbWVhc3VyaW5nIG1heGltdW0gc2Nyb2xsIGRlcHRoXG4gICAgYXdhaXQgYnJvd3Nlci5jb250ZW50U2NyaXB0cy5yZWdpc3Rlcih7XG4gICAgICAgIG1hdGNoZXM6IGNvbnRlbnRTY3JpcHRNYXRjaGVzLFxuICAgICAgICBqczogW3tcbiAgICAgICAgICAgIGZpbGU6IFwiL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9jb250ZW50LXNjcmlwdHMvcGFnZURlcHRoLmpzXCJcbiAgICAgICAgfV1cbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBwYWdlIGRlcHRoIGV2ZW50c1xuICAgIE1lc3NhZ2luZy5yZWdpc3Rlckxpc3RlbmVyKFwiV2ViU2NpZW5jZS5wYWdlRGVwdGhcIiwgYXN5bmMgKGRlcHRoSW5mbywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdmFyIHBhZ2VJZCA9IGF3YWl0IG5leHRQYWdlSWRDb3VudGVyLmdldEFuZEluY3JlbWVudCgpO1xuICAgICAgICBkZXB0aEluZm8udXJsID0gU3RvcmFnZS5ub3JtYWxpemVVcmwoc2VuZGVyLnVybCk7XG4gICAgICAgIGRlcHRoSW5mby50YWJJZCA9IHNlbmRlci50YWIuaWQ7XG4gICAgICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykgeyBsaXN0ZW5lcihkZXB0aEluZm8pOyB9XG4gICAgICAgIHN0b3JhZ2Uuc2V0KHBhZ2VJZC50b1N0cmluZygpLCBkZXB0aEluZm8pO1xuICAgICAgICBkZWJ1Z0xvZyhKU09OLnN0cmluZ2lmeShkZXB0aEluZm8pKTtcbiAgICB9LCB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIG1heFJlbGF0aXZlU2Nyb2xsRGVwdGg6IFwibnVtYmVyXCIsXG4gICAgICAgIGxvYWRUaW1lOiBcIm51bWJlclwiXG4gICAgfSk7XG59XG5cbi8qIFV0aWxpdGllcyAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBzdHVkeSBkYXRhIGFzIGFuIG9iamVjdC4gTm90ZSB0aGF0IHRoaXMgY291bGQgYmUgdmVyeVxuICogc2xvdyBpZiB0aGVyZSBpcyBhIGxhcmdlIHZvbHVtZSBvZiBzdHVkeSBkYXRhLlxuICogQHJldHVybnMgeyhPYmplY3R8bnVsbCl9IC0gVGhlIHN0dWR5IGRhdGEsIG9yIGBudWxsYCBpZiBubyBkYXRhXG4gKiBjb3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHVkeURhdGFBc09iamVjdCgpIHtcbiAgICBpZihzdG9yYWdlICE9IG51bGwpXG4gICAgICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59IiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBtZWFzdXJlcyBzY3JvbGwgZGVwdGggZm9yIHdlYnBhZ2VzIG9uIHNwZWNpZmljIGRvbWFpbnMuXG4gKiBcbiAqIE5vdGU6IHdlIHdpbGwgbGlrZWx5IHJlcGxhY2UgdGhpcyBtb2R1bGUgd2hlbiB3ZSB1cGRhdGUgdGhlXG4gKiBQYWdlTmF2aWdhdGlvbiBhbmQgUGFnZUV2ZW50cyBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aFxuICovXG5cbmltcG9ydCAqIGFzIERlYnVnZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL0RlYnVnZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gXCIuLi9VdGlsaXRpZXMvU3RvcmFnZS5qc1wiXG5pbXBvcnQgKiBhcyBNYXRjaGluZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01hdGNoaW5nLmpzXCJcbmltcG9ydCAqIGFzIE1lc3NhZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01lc3NhZ2luZy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIk1lYXN1cmVtZW50cy5BcnRpY2xlQ29udGVudHNcIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbnZhciBsaXN0ZW5lcnMgPSBbXTtcblxuLyoqXG4gKiBTdGFydCBhIHBhZ2UgZGVwdGggc3R1ZHkuIE5vdGUgdGhhdCBvbmx5IG9uZSBzdHVkeSBpcyBzdXBwb3J0ZWQgcGVyIGV4dGVuc2lvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbIF1cbn0pIHtcblxuICAgIGlmKGluaXRpYWxpemVkKVxuICAgICAgICByZXR1cm47ICAgIFxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0UGFnZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzLm5leHRQYWdlSWRcIikpLmluaXRpYWxpemUoKTtcblxuICAgIC8vIEJ1aWxkIHRoZSBVUkwgbWF0Y2hpbmcgc2V0IGZvciBjb250ZW50IHNjcmlwdHNcbiAgICB2YXIgY29udGVudFNjcmlwdE1hdGNoZXMgPSBNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCB0cnVlKTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjb250ZW50IHNjcmlwdCBmb3IgbWVhc3VyaW5nIG1heGltdW0gc2Nyb2xsIGRlcHRoXG4gICAgYXdhaXQgYnJvd3Nlci5jb250ZW50U2NyaXB0cy5yZWdpc3Rlcih7XG4gICAgICAgIG1hdGNoZXM6IGNvbnRlbnRTY3JpcHRNYXRjaGVzLFxuICAgICAgICBqczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlOiBcIi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL1JlYWRhYmlsaXR5LmpzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlsZTogXCIvc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL2NvbnRlbnQtc2NyaXB0cy9wYWdlLWNvbnRlbnQuanNcIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJ1bkF0OiBcImRvY3VtZW50X2lkbGVcIlxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHBhZ2UgZGVwdGggZXZlbnRzXG4gICAgTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIoXCJXZWJTY2llbmNlLmFydGljbGVDb250ZW50XCIsIGFzeW5jIChkZXB0aEluZm8sIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhciBwYWdlSWQgPSBhd2FpdCBuZXh0UGFnZUlkQ291bnRlci5nZXRBbmRJbmNyZW1lbnQoKTtcbiAgICAgICAgZGVwdGhJbmZvLnVybCA9IFN0b3JhZ2Uubm9ybWFsaXplVXJsKHNlbmRlci51cmwpO1xuICAgICAgICBkZXB0aEluZm8udGFiSWQgPSBzZW5kZXIudGFiLmlkO1xuICAgICAgICBmb3IgKHZhciBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHsgbGlzdGVuZXIoZGVwdGhJbmZvKTsgfVxuICAgICAgICBzdG9yYWdlLnNldChwYWdlSWQudG9TdHJpbmcoKSwgZGVwdGhJbmZvKTtcbiAgICAgICAgZGVidWdMb2coSlNPTi5zdHJpbmdpZnkoZGVwdGhJbmZvKSk7XG4gICAgfSwge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICB1cmwgOiBcInN0cmluZ1wiLFxuICAgICAgICB0aXRsZSA6IFwic3RyaW5nXCIsXG4gICAgICAgIHRleHQgOiBcInN0cmluZ1wiXG4gICAgfSk7XG59XG5cbi8qIFV0aWxpdGllcyAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBzdHVkeSBkYXRhIGFzIGFuIG9iamVjdC4gTm90ZSB0aGF0IHRoaXMgY291bGQgYmUgdmVyeVxuICogc2xvdyBpZiB0aGVyZSBpcyBhIGxhcmdlIHZvbHVtZSBvZiBzdHVkeSBkYXRhLlxuICogQHJldHVybnMgeyhPYmplY3R8bnVsbCl9IC0gVGhlIHN0dWR5IGRhdGEsIG9yIGBudWxsYCBpZiBubyBkYXRhXG4gKiBjb3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHVkeURhdGFBc09iamVjdCgpIHtcbiAgICBpZihzdG9yYWdlICE9IG51bGwpXG4gICAgICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59IiwiXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1lYXN1cmVzIG5hdmlnYXRpb24gdG8gYW5kIGF0dGVudGlvbiB0byB3ZWJwYWdlcyBvbiBzcGVjaWZpYyBkb21haW5zLlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uXG4gKi9cblxuaW1wb3J0ICogYXMgRGVidWdnaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvRGVidWdnaW5nLmpzXCJcbmltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSBcIi4uL1V0aWxpdGllcy9TdG9yYWdlLmpzXCJcbmltcG9ydCAqIGFzIE1hdGNoaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvTWF0Y2hpbmcuanNcIlxuaW1wb3J0ICogYXMgUGFnZUV2ZW50cyBmcm9tIFwiLi4vVXRpbGl0aWVzL1BhZ2VFdmVudHMuanNcIlxuaW1wb3J0ICogYXMgTGlua0V4cG9zdXJlIGZyb20gXCIuL0xpbmtFeHBvc3VyZS5qc1wiXG5pbXBvcnQgKiBhcyBQYWdlRGVwdGggZnJvbSBcIi4vUGFnZURlcHRoLmpzXCJcbmltcG9ydCAqIGFzIEFydGljbGVDb250ZW50cyBmcm9tIFwiLi9BcnRpY2xlQ29udGVudHMuanNcIlxuXG5cblxuY29uc3QgZGVidWdMb2cgPSBEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nKFwiTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uXCIpO1xuXG4vKipcbiAqIEEgS2V5VmFsdWVTdG9yYWdlIG9iamVjdCBmb3IgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIHN0dWR5LlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBzdG9yYWdlID0gbnVsbDtcbnZhciBjdXJyZW50VGFiSW5mbyA9IG51bGw7XG52YXIgdXJsTWF0Y2hlciA9IG51bGw7XG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuY29uc3QgcmVjZW50VmlzaXRUaHJlc2hvbGQgPSAzMDAwO1xuXG52YXIgdW50cmFja2VkUGFnZVZpc2l0cyA9IG51bGw7XG5cbi8qKlxuICogQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFydGljbGUgY29udGVudHMgcmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcmVzdWx0IHJlc3VsdCBvYmplY3RcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29udGVudFJlc3VsdHMocmVzdWx0KSB7XG4gICAgaWYgKGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJRF0gJiYgY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklEXS51cmwgPT0gcmVzdWx0LnVybCkge1xuICAgICAgICBjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSURdLmNvbnRlbnRzW3Jlc3VsdC5uYW1lXSA9IHJlc3VsdC5jb250ZW50cztcbiAgICB9IFxuICAgIGlmICghdXJsTWF0Y2hlci50ZXN0VXJsKHJlc3VsdC51cmwpKSB7IFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aChyZXN1bHQudXJsKS50aGVuKGFzeW5jIChwcmV2VmlzaXRzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcmV2VmlzaXRzKSB7XG4gICAgICAgICAgICBpZiAocHJldlZpc2l0c1trZXldLnRhYklkID09IHJlc3VsdC50YWJJZCAmJiBcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhyZXN1bHQudGltZXN0YW1wIC0gcHJldlZpc2l0c1trZXldLnZpc2l0U3RhcnQpIDwgcmVjZW50VmlzaXRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBwcmV2VmlzaXRzW2tleV0uY29udGVudHNbcmVzdWx0Lm5hbWVdID0gcmVzdWx0LmNvbnRlbnRzO1xuICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KGtleSwgcHJldlZpc2l0c1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gZGVwdGhSZXN1bHRzKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQubWF4UmVsYXRpdmVTY3JvbGxEZXB0aCA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJZF0gJiYgY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklkXS51cmwgPT0gcmVzdWx0LnVybCkge1xuICAgICAgICBjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSWRdLnNjcm9sbERlcHRoID0gcmVzdWx0Lm1heFJlbGF0aXZlU2Nyb2xsRGVwdGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXVybE1hdGNoZXIudGVzdFVybChyZXN1bHQudXJsKSkgeyByZXR1cm47IH1cbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHJlc3VsdC51cmwpLnRoZW4oKHByZXZWaXNpdHMpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcmV2VmlzaXRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZWaXNpdHNba2V5XS50YWJJZCA9PSByZXN1bHQudGFiSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlZpc2l0c1trZXldLnNjcm9sbERlcHRoID0gcmVzdWx0Lm1heFJlbGF0aXZlU2Nyb2xsRGVwdGg7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0KGtleSwgcHJldlZpc2l0c1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbi8qKlxuICogU3RhcnQgYSBuYXZpZ2F0aW9uIHN0dWR5LiBOb3RlIHRoYXQgb25seSBvbmUgc3R1ZHkgaXMgc3VwcG9ydGVkIHBlciBleHRlbnNpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEEgc2V0IG9mIG9wdGlvbnMgZm9yIHRoZSBzdHVkeS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLmRvbWFpbnM9W11dIC0gVGhlIGRvbWFpbnMgb2YgaW50ZXJlc3QgZm9yIHRoZSBzdHVkeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhY2tVc2VyQXR0ZW50aW9uPWZhbHNlXSAtIFdoZXRoZXIgdG8gdHJhY2sgdXNlclxuICogYXR0ZW50aW9uIGR1cmluZyB0aGUgc3R1ZHkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaXZhdGVXaW5kb3dzPWZhbHNlXSAtIFdoZXRoZXIgdG8gbWVhc3VyZSBwYWdlcyBpblxuICogcHJpdmF0ZSB3aW5kb3dzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbIF0sXG4gICAgdHJhY2tVc2VyQXR0ZW50aW9uID0gZmFsc2UsXG4gICAgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZVxufSkge1xuXG4gICAgc3RvcmFnZSA9IGF3YWl0IChuZXcgU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvblwiKSkuaW5pdGlhbGl6ZSgpO1xuXG4gICAgdXJsTWF0Y2hlciA9IG5ldyBNYXRjaGluZy5VcmxNYXRjaGVyKGRvbWFpbnMpO1xuXG4gICAgdW50cmFja2VkUGFnZVZpc2l0cyA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24udW50cmFja2VkUGFnZVZpc2l0c1wiKSkuaW5pdGlhbGl6ZSgpO1xuXG4gICAgUGFnZURlcHRoLnJlZ2lzdGVyTGlzdGVuZXIoZGVwdGhSZXN1bHRzKTtcbiAgICBBcnRpY2xlQ29udGVudHMucmVnaXN0ZXJMaXN0ZW5lcihjb250ZW50UmVzdWx0cyk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIG1ldGFkYXRhIG9mIHRoZSB2aXNpdGVkIHBhZ2VzIGZyb20gY29udGVudCBzY3JpcHRcbiAgICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICAgIHZhciBuZXh0UGFnZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24ubmV4dFBhZ2VJZFwiKSkuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBpbmZvcm1hdGlvbiBhYm91dCBwYWdlcyB3aXRoIG1hdGNoaW5nIGRvbWFpbnMgdGhhdCBhcmUgY3VycmVudGx5IGxvYWRlZCBpbnRvIGEgdGFiXG4gICAgLy8gSWYgYSB0YWIgSUQgaXMgaW4gdGhpcyBvYmplY3QsIHRoZSBwYWdlIGN1cnJlbnRseSBjb250YWluZWQgaW4gdGhhdCB0YWIgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgY3VycmVudGx5IGltcGxlbWVudGVkIHdpdGggYW4gb2JqZWN0LCB3ZSBtaWdodCB3YW50IHRvIHN3aXRjaCBpdCB0byBhIE1hcFxuICAgIGN1cnJlbnRUYWJJbmZvID0ge31cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAvLyBsaXN0ZW4gbWV0YWRhdGEgbWVzc2FnZXMgZnJvbSBjb250ZW50IHNjcmlwdHNcbiAgICAvLyBIYW5kbGUgd2hlbiBhIHBhZ2UgdmlzaXQgc3RhcnRzXG4gICAgYXN5bmMgZnVuY3Rpb24gcGFnZVZpc2l0U3RhcnRMaXN0ZW5lcih7IHVybCwgcmVmZXJyZXIsIHRhYklkLCB0aW1lU3RhbXAgfSkge1xuXG4gICAgICAgIC8vIElmIHRoZSBVUkwgZG9lcyBub3QgbWF0Y2ggdGhlIHN0dWR5IGRvbWFpbnMsIGlnbm9yZSB0aGUgcGFnZSB2aXNpdCBzdGFydFxuICAgICAgICBpZiAoIXVybE1hdGNoZXIudGVzdFVybCh1cmwpKSB7XG4gICAgICAgICAgICB1bnRyYWNrZWRQYWdlVmlzaXRzLmluY3JlbWVudEFuZEdldCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IFN0b3JhZ2Uubm9ybWFsaXplVXJsKHVybCk7XG5cbiAgICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgdHJhY2tpbmcgYSBwYWdlIGluIHRoaXMgdGFiLCBpZ25vcmUgdGhlIHBhZ2UgdmlzaXQgc3RhcnRcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIVxuICAgICAgICBpZiAodGFiSWQgaW4gY3VycmVudFRhYkluZm8pIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiV2FybmluZzogcGFnZSBzdGFydCBldmVudCBmb3IgdGFiIHRoYXQgYWxyZWFkeSBoYXMgYSBwYWdlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHJlbWVtYmVyIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGFuZCBpbmNyZW1lbnQgdGhlIHBhZ2UgY291bnRlclxuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0gPSB7XG4gICAgICAgICAgICBwYWdlSWQ6IG5leHRQYWdlSWRDb3VudGVyLmdldCgpLFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgdGFiSWQsXG4gICAgICAgICAgICByZWZlcnJlcixcbiAgICAgICAgICAgIHZpc2l0U3RhcnQ6IHRpbWVTdGFtcCxcbiAgICAgICAgICAgIHZpc2l0RW5kOiAtMSxcbiAgICAgICAgICAgIGF0dGVudGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgYXR0ZW50aW9uU3BhbkNvdW50OiAwLFxuICAgICAgICAgICAgYXR0ZW50aW9uU3BhblN0YXJ0czogWyBdLFxuICAgICAgICAgICAgYXR0ZW50aW9uU3BhbkVuZHM6IFsgXSxcbiAgICAgICAgICAgIHNjcm9sbERlcHRoOiAtMSxcbiAgICAgICAgICAgIHByZXZFeHBvc2VkOiBmYWxzZSwgLy8gd2lsbCBjaGVjayBhZnRlciBzdG9yaW5nIHRoaXNcbiAgICAgICAgICAgIGxhdGVyU2hhcmVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcHJldkV4cG9zZWQgPSBhd2FpdCBMaW5rRXhwb3N1cmUubG9nVmlzaXQodXJsKTtcbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLnByZXZFeHBvc2VkID0gcHJldkV4cG9zZWQ7XG4gICAgICAgIGRlYnVnTG9nKFwicGFnZVZpc2l0U3RhcnRMaXN0ZW5lcjogXCIgKyBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFiSW5mb1t0YWJJZF0pKTtcbiAgICAgICAgYXdhaXQgbmV4dFBhZ2VJZENvdW50ZXIuaW5jcmVtZW50KCk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgcGFnZSB2aXNpdCBzdG9wc1xuICAgIGFzeW5jIGZ1bmN0aW9uIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lcih7dGFiSWQsIHRpbWVTdGFtcH0pIHtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlIGFyZSBub3QgdHJhY2tpbmcgYSBwYWdlIGluIHRoaXMgdGFiLCBpZ25vcmUgdGhlIHBhZ2UgdmlzaXQgc3RvcFxuICAgICAgICBpZighKHRhYklkIGluIGN1cnJlbnRUYWJJbmZvKSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBPdGhlcndpc2UgY3JlYXRlIGEgY29weSBvZiB3aGF0IHdlIGhhdmUgcmVtZW1iZXJlZCBhYm91dCB0aGUgcGFnZSB2aXNpdCxcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBwYWdlIGZyb20gdGhlIGN1cnJlbnQgc2V0IG9mIHRyYWNrZWQgcGFnZXMsIGFuZCBzYXZlIHRoZSBjb3B5XG4gICAgICAgIC8vIHRvIHN0b3JhZ2VcbiAgICAgICAgdmFyIHRhYkluZm9Ub1NhdmUgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50VGFiSW5mb1t0YWJJZF0pO1xuICAgICAgICB0YWJJbmZvVG9TYXZlLnZpc2l0RW5kID0gdGltZVN0YW1wO1xuICAgICAgICBkZWxldGUgY3VycmVudFRhYkluZm9bdGFiSWRdO1xuICAgICAgICB0YWJJbmZvVG9TYXZlLnR5cGUgPSBcInBhZ2VWaXNpdFwiO1xuICAgICAgICBpZiAodGFiSW5mb1RvU2F2ZS5hdHRlbnRpb25EdXJhdGlvbiA8IDEwMDApIHJldHVybjtcblxuICAgICAgICBkZWJ1Z0xvZyhcInBhZ2VWaXNpdFN0b3BMaXN0ZW5lcjogXCIgKyBKU09OLnN0cmluZ2lmeSh0YWJJbmZvVG9TYXZlKSk7XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIGZpbmFsIHNldCBvZiBpbmZvcm1hdGlvbiBmb3IgdGhlIHBhZ2VcbiAgICAgICAgc3RvcmFnZS5zZXQodGFiSW5mb1RvU2F2ZS51cmwgKyBcIiBcIiArIHRhYkluZm9Ub1NhdmUucGFnZUlkLnRvU3RyaW5nKCksIHRhYkluZm9Ub1NhdmUpO1xuICAgIH07XG5cbiAgICB2YXIgaW5BdHRlbnRpb25TcGFuID0gZmFsc2U7XG4gICAgdmFyIHN0YXJ0T2ZDdXJyZW50QXR0ZW50aW9uU3BhbiA9IC0xO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSBwYWdlIGF0dGVudGlvbiBzcGFuIHN0YXJ0c1xuICAgIGZ1bmN0aW9uIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyKHt0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vdCByZW1lbWJlcmVkIHRoZSBwYWdlIHJlY2VpdmluZyBhdHRlbnRpb24sIHRoZSBwYWdlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZ1xuICAgICAgICAvLyBkb21haW4sIHNvIGlnbm9yZSB0aGUgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnRcbiAgICAgICAgaWYoISh0YWJJZCBpbiBjdXJyZW50VGFiSW5mbykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBzdGFydCBvZiB0aGUgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaW5BdHRlbnRpb25TcGFuID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuID0gdGltZVN0YW1wO1xuICAgICAgICBkZWJ1Z0xvZyhcInBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYWJJbmZvW3RhYklkXSkpO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHBhZ2UgYXR0ZW50aW9uIHNwYW4gZW5kc1xuICAgIGZ1bmN0aW9uIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIoe3RhYklkLCB0aW1lU3RhbXB9KSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHJlbWVtYmVyZWQgdGhlIHBhZ2UgcmVjZWl2aW5nIGF0dGVudGlvbiwgdGhlIHBhZ2UgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nXG4gICAgICAgIC8vIGRvbWFpbiwgc28gaWdub3JlIHRoZSBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50XG4gICAgICAgIGlmKCEodGFiSWQgaW4gY3VycmVudFRhYkluZm8pKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIHdlIGFyZSBub3QgY3VycmVudGx5IGluIGFuIGF0dGVudGlvbiBzcGFuLCBpZ25vcmUgdGhlIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiFcbiAgICAgICAgaWYoIWluQXR0ZW50aW9uU3Bhbikge1xuICAgICAgICAgICAgZGVidWdMb2coXCJXYXJuaW5nOiB1bmV4cGVjdGVkIHBhZ2UgYXR0ZW50aW9uIHN0b3BcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1lbWJlciB0aGUgZW5kIG9mIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0uYXR0ZW50aW9uRHVyYXRpb24gPSBcbiAgICAgICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25EdXJhdGlvbiArIFxuICAgICAgICAgICAgKHRpbWVTdGFtcCAtIHN0YXJ0T2ZDdXJyZW50QXR0ZW50aW9uU3Bhbik7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25TcGFuQ291bnQgPSBcbiAgICAgICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25TcGFuQ291bnQgKyAxO1xuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0uYXR0ZW50aW9uU3BhblN0YXJ0cy5wdXNoKHN0YXJ0T2ZDdXJyZW50QXR0ZW50aW9uU3Bhbik7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25TcGFuRW5kcy5wdXNoKHRpbWVTdGFtcCk7XG5cbiAgICAgICAgaW5BdHRlbnRpb25TcGFuID0gZmFsc2U7XG4gICAgICAgIHN0YXJ0T2ZDdXJyZW50QXR0ZW50aW9uU3BhbiA9IC0xO1xuICAgICAgICBkZWJ1Z0xvZyhcInBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhYkluZm9bdGFiSWRdKSk7XG4gICAgfTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBwYWdlIHZpc2l0IGxpc3RlbmVycyBhbmQsIGlmIG5lZWRlZCBmb3IgdGhlIHN0dWR5LCB0aGUgcGFnZSBhdHRlbnRpb24gbGlzdGVuZXJzXG4gICAgLy8gVXNlIGEgdGltZXN0YW1wIHRvIHN5bmNocm9uaXplIGluaXRpYWwgcGFnZSB2aXNpdCBhbmQgcGFnZSBhdHRlbnRpb24gdGltZXNcblxuICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIFBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlVmlzaXRTdGFydExpc3RlbmVyKHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIsIHRydWUsIHByaXZhdGVXaW5kb3dzLCB0aW1lU3RhbXApO1xuICAgIFBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlVmlzaXRTdG9wTGlzdGVuZXIocGFnZVZpc2l0U3RvcExpc3RlbmVyLCBwcml2YXRlV2luZG93cyk7XG4gICAgaWYodHJhY2tVc2VyQXR0ZW50aW9uKSB7XG4gICAgICAgIFBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciwgdHJ1ZSwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCk7XG4gICAgICAgIFBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzKTtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB0aGUgVVJMIG1hdGNoaW5nIHNldCBmb3IgY29udGVudCBzY3JpcHRzXG4gICAgdmFyIGNvbnRlbnRTY3JpcHRNYXRjaGVzID0gTWF0Y2hpbmcuY3JlYXRlVXJsTWF0Y2hQYXR0ZXJuQXJyYXkoZG9tYWlucywgdHJ1ZSk7XG5cbiAgICAvLyBTdG9yZSB3aGV0aGVyIHRoZSBOYXZpZ2F0aW9uIHN0dWR5IGlzIHJ1bm5pbmcgaW4gcHJpdmF0ZSB3aW5kb3dzIGluIGV4dGVuc2lvblxuICAgIC8vIGxvY2FsIHN0b3JhZ2UsIHNvIHRoYXQgaXQgaXMgYXZhaWxhYmxlIHRvIGNvbnRlbnQgc2NyaXB0c1xuICAgIGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoeyBcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnByaXZhdGVXaW5kb3dzXCI6IHByaXZhdGVXaW5kb3dzIH0pO1xufVxuXG4vKiBVdGlsaXRpZXMgKi9cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgc3R1ZHkgZGF0YSBhcyBhbiBvYmplY3QuIE5vdGUgdGhhdCB0aGlzIGNvdWxkIGJlIHZlcnlcbiAqIHNsb3cgaWYgdGhlcmUgaXMgYSBsYXJnZSB2b2x1bWUgb2Ygc3R1ZHkgZGF0YS5cbiAqIEByZXR1cm5zIHsoT2JqZWN0fG51bGwpfSAtIFRoZSBzdHVkeSBkYXRhLCBvciBgbnVsbGAgaWYgbm8gZGF0YVxuICogY291bGQgYmUgcmV0cmlldmVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3R1ZHlEYXRhQXNPYmplY3QoKSB7XG4gICAgaWYoc3RvcmFnZSAhPSBudWxsKVxuICAgICAgICByZXR1cm4gYXdhaXQgc3RvcmFnZS5nZXRDb250ZW50c0FzT2JqZWN0KCk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9yZUFuZFJlc2V0VW50cmFja2VkVmlzaXRzQ291bnQoKSB7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24udW50cmFja2VkVmlzaXRDb3VudFwiLCBcbiAgICAgICAgICAgIHt0eXBlOiBcInVudHJhY2tlZFZpc2l0Q291bnRcIixcbiAgICAgICAgICAgICBudW1VbnRyYWNrZWRWaXNpdHM6IGF3YWl0IHVudHJhY2tlZFBhZ2VWaXNpdHMuZ2V0QW5kUmVzZXQoKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nU2hhcmUodXJsKSB7XG4gICAgaWYgKCF1cmxNYXRjaGVyLnRlc3RVcmwodXJsKSkgeyByZXR1cm47IH0gLy8gaWYgaXQncyBub3QgYSB0cmFja2VkIHVybCwgaXQgZGVmaW5pdGVseSBpc24ndCBpbiBvdXIgZGF0YWJhc2VcblxuICAgIHZhciBwcmV2VmlzaXRSZWZlcnJlciA9IG51bGw7XG5cbiAgICAvLyBTZWFyY2ggaW4tbWVtb3J5IHBhZ2VzXG4gICAgZm9yIChsZXQgcGFnZUlkIGluIGN1cnJlbnRUYWJJbmZvKXtcbiAgICAgICAgdmFyIHBhZ2VWaXNpdCA9IGN1cnJlbnRUYWJJbmZvW3BhZ2VJZF07XG4gICAgICAgIGlmICh1cmwgPT0gcGFnZVZpc2l0LnVybCkge1xuICAgICAgICAgICAgY3VycmVudFRhYkluZm9bcGFnZUlkXS5sYXRlclNoYXJlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXByZXZWaXNpdFJlZmVycmVyKSBwcmV2VmlzaXRSZWZlcnJlciA9IHBhZ2VWaXNpdC5yZWZlcnJlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBwcmV2aW91c2x5LXN0b3JlZCBwYWdlc1xuICAgIHZhciBiZXN0UmVmZXJyZXIgPSB7dHM6IDAsIHJlZmVycmVyOiBcIlwifVxuICAgIGF3YWl0IHN0b3JhZ2Uuc3RhcnRzV2l0aCh1cmwpLnRoZW4oKHByZXZWaXNpdHMpID0+IHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByZXZWaXNpdHMpIHtcbiAgICAgICAgICAgIGlmIChwcmV2VmlzaXRzW2tleV0udmlzaXRTdGFydCA+IGJlc3RSZWZlcnJlci50cykge1xuICAgICAgICAgICAgICAgIGJlc3RSZWZlcnJlci50cyA9IHByZXZWaXNpdHNba2V5XS52aXNpdFN0YXJ0XG4gICAgICAgICAgICAgICAgYmVzdFJlZmVycmVyLnJlZmVycmVyID0gcHJldlZpc2l0c1trZXldLnJlZmVycmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2VmlzaXRzW2tleV0ubGF0ZXJTaGFyZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXQoa2V5LCBwcmV2VmlzaXRzW2tleV0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXByZXZWaXNpdFJlZmVycmVyKSBwcmV2VmlzaXRSZWZlcnJlciA9IGJlc3RSZWZlcnJlci5yZWZlcnJlcjtcbiAgICByZXR1cm4gW3ByZXZWaXNpdFJlZmVycmVyXTtcbn0iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbmltcG9ydCAqIGFzIFdlYlNjaWVuY2UgZnJvbSBcIi4vV2ViU2NpZW5jZS5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIHZhciBzdHVkeVBhdGhzID0gV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocygpO1xuICAgIGNvbnNvbGUuZGVidWcoXCJzdHVkeSBwYXRoczpcIik7XG4gICAgY29uc29sZS5kZWJ1ZyhzdHVkeVBhdGhzKVxuXG4gICAgLy8gQ29uZmlndXJlIG5hdmlnYXRpb24gY29sbGVjdGlvblxuICAgIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgICAgICB0cmFja1VzZXJBdHRlbnRpb246IHRydWVcbiAgICB9KTtcblxuICAgIC8vIENvbmZpZ3VyZSBsaW5rIGV4cG9zdXJlIGNvbGxlY3Rpb25cbiAgICBXZWJTY2llbmNlLlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvbi5pbml0aWFsaXplKCk7XG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgICAgICBwcml2YXRlV2luZG93cyA6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgIH0pO1xuXG4gICAgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzLnJ1blN0dWR5KHtcbiAgICAgICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgIH0pO1xufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xuXG5pbXBvcnQgUmFsbHkgZnJvbSBcIkBtb3ppbGxhL3JhbGx5XCI7XG5cbi8vIEV4YW1wbGU6IGltcG9ydCBhIG1vZHVsZS5cbmltcG9ydCB7XG4gIGluaXRpYWxpemUgYXMgZXhhbXBsZUluaXRpYWxpemVcbn0gZnJvbSAnLi9FeGFtcGxlTW9kdWxlJztcblxuY29uc3QgcmFsbHkgPSBuZXcgUmFsbHkoKTtcbnJhbGx5LmluaXRpYWxpemUoXG4gIC8vIEEgc2FtcGxlIGtleSBpZCB1c2VkIGZvciBlbmNyeXB0aW5nIGRhdGEuXG4gIFwic2FtcGxlLWludmFsaWQta2V5LWlkXCIsXG4gIC8vIEEgc2FtcGxlICp2YWxpZCogSldLIG9iamVjdCBmb3IgdGhlIGVuY3J5cHRpb24uXG4gIHtcbiAgICBcImt0eVwiOlwiRUNcIixcbiAgICBcImNydlwiOlwiUC0yNTZcIixcbiAgICBcInhcIjpcImY4M09KM0QyeEYxQmc4dnViOXRMZTFnSE16Vjc2ZThUdXM5dVBIdlJWRVVcIixcbiAgICBcInlcIjpcInhfRkV6UnU5bTM2SExOX3R1ZTY1OUxOcFhXNnBDeVN0aWtZaktJV0k1YTBcIixcbiAgICBcImtpZFwiOlwiUHVibGljIGtleSB1c2VkIGluIEpXUyBzcGVjIEFwcGVuZGl4IEEuMyBleGFtcGxlXCJcbiAgfSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudCBpcyBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5XG4gIC8vIHRoZSBidWlsZCBzeXN0ZW0uXG4gIF9fRU5BQkxFX0RFVkVMT1BFUl9NT0RFX18sXG4pLnRoZW4ocmVzb2x2ZSA9PiB7XG4gIC8vIEluaXRpYWxpemUgdGhlIHN0dWR5IGFuZCBzdGFydCBpdC5cbiAgLy8gRXhhbXBsZTogaW5pdGlhbGl6ZSB0aGUgZXhhbXBsZSBtb2R1bGUuXG4gIGV4YW1wbGVJbml0aWFsaXplKCk7XG59LCByZWplY3QgPT57XG4gIC8vIERvIG5vdCBzdGFydCB0aGUgc3R1ZHkgaW4gdGhpcyBjYXNlLiBTb21ldGhpbmdcbiAgLy8gd2VudCB3cm9uZy5cbn0pO1xuIl0sIm5hbWVzIjpbInRoaXMiLCJEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nIiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXplIiwiSWRsZS5yZWdpc3RlcklkbGVTdGF0ZUxpc3RlbmVyIiwiSWRsZS5xdWVyeVN0YXRlIiwiZGVidWdMb2ciLCJTdG9yYWdlLktleVZhbHVlU3RvcmFnZSIsIlN0b3JhZ2UuQ291bnRlciIsIkxpbmtSZXNvbHV0aW9uLmdldFNob3J0RG9tYWlucyIsIkxpbmtSZXNvbHV0aW9uLmdldEFtcENhY2hlRG9tYWlucyIsIk1hdGNoaW5nLmNyZWF0ZVVybFJlZ2V4U3RyaW5nIiwiTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIiLCJMaW5rUmVzb2x1dGlvbi5yZXNvbHZlVXJsIiwiUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyIiwiUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIiLCJTdG9yYWdlLm5vcm1hbGl6ZVVybCIsInN0b3JhZ2UiLCJydW5TdHVkeSIsIk1hdGNoaW5nLmNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5IiwicmVnaXN0ZXJMaXN0ZW5lciIsImxpc3RlbmVycyIsIk1hdGNoaW5nLlVybE1hdGNoZXIiLCJQYWdlRGVwdGgucmVnaXN0ZXJMaXN0ZW5lciIsIkFydGljbGVDb250ZW50cy5yZWdpc3Rlckxpc3RlbmVyIiwiTGlua0V4cG9zdXJlLmxvZ1Zpc2l0IiwiUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIiLCJQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZVZpc2l0U3RvcExpc3RlbmVyIiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocyIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnJ1blN0dWR5IiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTGlua1Jlc29sdXRpb24uaW5pdGlhbGl6ZSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5ydW5TdHVkeSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aC5ydW5TdHVkeSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkFydGljbGVDb250ZW50cy5ydW5TdHVkeSIsImV4YW1wbGVJbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQzVCLEVBRTZDO0FBQzdDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLEdBTUc7QUFDSCxDQUFDLEVBQUUsT0FBTyxVQUFVLEtBQUssV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFPLElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxHQUFHQSxjQUFJLEVBQUUsVUFBVSxNQUFN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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFB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LENBQUM7QUFDUCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUM5QyxDQUFDLFVBQVUsTUFBTSxDQUFDO0FBRWxCLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtBQUMxQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFDRDtBQUNBLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUcsT0FBTyxJQUFJLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLEVBQUUsRUFBQztBQUN2SSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBRTlDO0FBQ0EsSUFBSSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzdRO0FBQ0EsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVB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QUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDMUM7QUFDQSxRQUFRLFlBQVksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xELFFBQVEsWUFBWSxJQUFJLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUUsUUFBUSxZQUFZLElBQUksVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDakYsUUFBUSxZQUFZLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdEQsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNoQyxRQUFRLFlBQVksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNoRixLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdkMsUUFBUSxZQUFZLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDakYsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLFlBQVksQ0FBQztBQUN4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3BDLElBQUks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
