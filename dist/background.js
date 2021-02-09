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

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function initialize() {
    var studyPaths = getStudyPaths();
    console.debug("study paths:");
    console.debug(studyPaths);
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
  initialize();
}, reject =>{
  // Do not start the study in this case. Something
  // went wrong.
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvQG1vemlsbGEvcmFsbHkvcmFsbHkuanMiLCIuLi9zcmMvZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9NYXRjaGluZy5qcyIsIi4uL3NyYy9FeGFtcGxlTW9kdWxlLmpzIiwiLi4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC43LjAgLSBUdWUgTm92IDEwIDIwMjAgMjA6MjQ6MDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKHR5cGVvZiBicm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihicm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuICAgIGNvbnN0IFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORyA9IFwiUmV0dXJuaW5nIGEgUHJvbWlzZSBpcyB0aGUgcHJlZmVycmVkIHdheSB0byBzZW5kIGEgcmVwbHkgZnJvbSBhbiBvbk1lc3NhZ2Uvb25NZXNzYWdlRXh0ZXJuYWwgbGlzdGVuZXIsIGFzIHRoZSBzZW5kUmVzcG9uc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHNwZWNzIChTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvcnVudGltZS9vbk1lc3NhZ2UpXCI7IC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImkxOG5cIjoge1xuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkbGVcIjoge1xuICAgICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XG4gICAgICAgKlxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0aW9uXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhSZXNvbHZlZEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgY3JlYXRlZCBieSB0aGUgd3JhcHBlZCBhc3luYyBmdW5jdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhSZXNvbHZlZEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgY3JlYXRlZCBieSB0aGUgd3JhcHBlZCBhc3luYyBmdW5jdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICsgXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFwiLCBjYkVycm9yKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7IC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgICAqL1xuXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfTsgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAgICpcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7IC8vIEtlZXAgdHJhY2sgaWYgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgaGFzIGJlZW4gbG9nZ2VkIGF0IGxlYXN0IG9uY2UuXG5cblxuICAgICAgbGV0IGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IGZhbHNlO1xuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICovXG5cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZiAoIWxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcsIG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICAgICAgICAgICAgICBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUgIT0gXCJvYmplY3RcIiB8fCAhY2hyb21lIHx8ICFjaHJvbWUucnVudGltZSB8fCAhY2hyb21lLnJ1bnRpbWUuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgICB9IC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG5cblxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcclxuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xyXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cclxuXHJcbmNvbnN0IENPUkVfQURET05fSUQgPSBcInJhbGx5LWNvcmVAbW96aWxsYS5vcmdcIjtcclxuY29uc3QgU0lHTlVQX1VSTCA9IFwiaHR0cHM6Ly9tb3ppbGxhLXJhbGx5LmdpdGh1Yi5pby9jb3JlLWFkZG9uL1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFsbHkge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgdGhlIFJhbGx5IGxpYnJhcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5SWRcclxuICAgKiAgICAgICAgVGhlIGlkIG9mIHRoZSBrZXkgdXNlZCB0byBlbmNyeXB0IG91dGdvaW5nIGRhdGEuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGtleVxyXG4gICAqICAgICAgICBUaGUgSlNPTiBXZWIgS2V5IChKV0spIHVzZWQgdG8gZW5jcnlwdCB0aGUgb3V0Z29pbmcgZGF0YS5cclxuICAgKiAgICAgICAgU2VlIHRoZSBSRkMgNzUxNyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxN1xyXG4gICAqICAgICAgICBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbi4gRm9yIGV4YW1wbGU6XHJcbiAgICpcclxuICAgKiAgICAgICAge1xyXG4gICAqICAgICAgICAgIFwia3R5XCI6XCJFQ1wiLFxyXG4gICAqICAgICAgICAgIFwiY3J2XCI6XCJQLTI1NlwiLFxyXG4gICAqICAgICAgICAgIFwieFwiOlwiZjgzT0ozRDJ4RjFCZzh2dWI5dExlMWdITXpWNzZlOFR1czl1UEh2UlZFVVwiLFxyXG4gICAqICAgICAgICAgIFwieVwiOlwieF9GRXpSdTltMzZITE5fdHVlNjU5TE5wWFc2cEN5U3Rpa1lqS0lXSTVhMFwiLFxyXG4gICAqICAgICAgICAgIFwia2lkXCI6XCJQdWJsaWMga2V5IHVzZWQgaW4gSldTIHNwZWMgQXBwZW5kaXggQS4zIGV4YW1wbGVcIlxyXG4gICAqICAgICAgICB9XHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBlbmFibGVEZXZNb2RlXHJcbiAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRvIGluaXRpYWxpemUgUmFsbHkuanMgaW4gZGV2ZWxvcGVyIG1vZGUuXHJcbiAgICogICAgICAgIEluIHRoaXMgbW9kZSB3ZSBpZ25vcmUgcHJvYmxlbXMgd2hlbiBjb21tdW5pY2F0aW5nIHdpdGhcclxuICAgKiAgICAgICAgY29yZSBhZGQtb24uXHJcbiAgICovXHJcbiAgYXN5bmMgaW5pdGlhbGl6ZShrZXlJZCwga2V5LCBlbmFibGVEZXZNb2RlKSB7XHJcbiAgICBjb25zb2xlLmRlYnVnKFwiUmFsbHkuaW5pdGlhbGl6ZVwiKTtcclxuXHJcbiAgICB0aGlzLl92YWxpZGF0ZUVuY3J5cHRpb25LZXkoa2V5SWQsIGtleSk7XHJcblxyXG4gICAgdGhpcy5fa2V5SWQgPSBrZXlJZDtcclxuICAgIHRoaXMuX2tleSA9IGtleTtcclxuICAgIHRoaXMuX2VuYWJsZURldk1vZGUgPSBCb29sZWFuKGVuYWJsZURldk1vZGUpO1xyXG5cclxuICAgIGxldCBoYXNSYWxseSA9IGF3YWl0IHRoaXMuX2NoZWNrUmFsbHlDb3JlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJSYWxseS5pbml0aWFsaXplIC0gRm91bmQgdGhlIENvcmUgQWRkLW9uLlwiKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KS5jYXRjaChhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIFdlIGRpZCBub3QgZmluZCB0aGUgUmFsbHkgQ29yZSBBZGQtb24uIEJ1dCBtYXliZSB3ZVxyXG4gICAgICAvLyBhcmUgaW4gZGV2ZWxvcGVyIG1vZGUuIERvIG5vdCB0cmlnZ2VyIHRoZSBzaWduLXVwIGZsb3dcclxuICAgICAgLy8gaWYgdGhhdCdzIHRoZSBjYXNlLlxyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlRGV2TW9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlJhbGx5LmluaXRpYWxpemUgLSBFeGVjdXRpbmcgaW4gZGV2ZWxvcGVyIG1vZGUuXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgQ29yZSBBZGQtb24gd2FzIG5vdCBmb3VuZCBhbmQgd2UncmUgbm90IGluIGRldmVsb3BlclxyXG4gICAgICAvLyBtb2RlLlxyXG4gICAgICBhd2FpdCBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsOiBTSUdOVVBfVVJMIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWhhc1JhbGx5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbGx5LmluaXRpYWxpemUgLSBJbml0aWFsaXphdGlvbiBmYWlsZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgaW5jb21pbmcgbWVzc2FnZXMgZnJvbSB0aGUgQ29yZSBhZGRvbi5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcihcclxuICAgICAgKG0sIHMpID0+IHRoaXMuX2hhbmRsZUV4dGVybmFsTWVzc2FnZShtLCBzKSk7XHJcblxyXG4gICAgLy8gV2Ugd2VudCB0aHJvdWdoIHRoZSB3aG9sZSBpbml0IHByb2Nlc3MsIGl0J3Mgbm93IHNhZmVcclxuICAgIC8vIHRvIHVzZSB0aGUgUmFsbHkgcHVibGljIEFQSXMuXHJcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgQ29yZSBhZGRvbiBpcyBpbnN0YWxsZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gcmVzb2x2ZWQgaWYgdGhlIGNvcmUgYWRkb24gd2FzIGZvdW5kIGFuZFxyXG4gICAqICAgICAgICAgIGNvbW11bmljYXRpb24gd2FzIHN1Y2Nlc3NmdWwsIHJlamVjdGVkIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhc3luYyBfY2hlY2tSYWxseUNvcmUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogXCJjb3JlLWNoZWNrXCIsXHJcbiAgICAgICAgZGF0YToge31cclxuICAgICAgfVxyXG4gICAgICBsZXQgcmVzcG9uc2UgPVxyXG4gICAgICAgIGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShDT1JFX0FERE9OX0lELCBtc2csIHt9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2VcclxuICAgICAgICAgIHx8IHJlc3BvbnNlLnR5cGUgIT09IFwiY29yZS1jaGVjay1yZXNwb25zZVwiXHJcbiAgICAgICAgICB8fCByZXNwb25zZS5kYXRhLmVucm9sbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSYWxseS5fY2hlY2tSYWxseUNvcmUgLSB1bmV4cGVjdGVkIHJlc3BvbnNlIHJldHVybmVkICR7cmVzcG9uc2V9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJhbGx5Ll9jaGVja1JhbGx5Q29yZSAtIGNvcmUgYWRkb24gbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBtZXNzYWdlcyBjb21pbmcgaW4gZnJvbSBleHRlcm5hbCBhZGRvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVxyXG4gICAqICAgICAgICBUaGUgcGF5bG9hZCBvZiB0aGUgbWVzc2FnZS5cclxuICAgKiBAcGFyYW0ge3J1bnRpbWUuTWVzc2FnZVNlbmRlcn0gc2VuZGVyXHJcbiAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9ucyBhYm91dCB3aG8gc2VudFxyXG4gICAqICAgICAgICB0aGUgbWVzc2FnZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIHJlc3BvbnNlIHRvIHRoZSByZWNlaXZlZCBtZXNzYWdlLlxyXG4gICAqICAgICAgICAgIEl0IGNhbiBiZSByZXNvbHZlZCB3aXRoIGEgdmFsdWUgdGhhdCBpcyBzZW50IHRvIHRoZVxyXG4gICAqICAgICAgICAgIGBzZW5kZXJgLlxyXG4gICAqL1xyXG4gIF9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyKSB7XHJcbiAgICAvLyBXZSBvbmx5IGV4cGVjdCBtZXNzYWdlcyBjb21pbmcgZnJvbSB0aGUgY29yZSBhZGRvbi5cclxuICAgIGlmIChzZW5kZXIuaWQgIT0gQ09SRV9BRERPTl9JRCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgbmV3IEVycm9yKGBSYWxseS5faGFuZGxlRXh0ZXJuYWxNZXNzYWdlIC0gdW5leHBlY3RlZCBzZW5kZXIgJHtzZW5kZXIuaWR9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJ1bmluc3RhbGxcIjpcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5tYW5hZ2VtZW50LnVuaW5zdGFsbFNlbGYoe3Nob3dDb25maXJtRGlhbG9nOiBmYWxzZX0pO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgIG5ldyBFcnJvcihgUmFsbHkuX2hhbmRsZUV4dGVybmFsTWVzc2FnZSAtIHVuZXhwZWN0ZWQgbWVzc2FnZSB0eXBlICR7bWVzc2FnZS50eXBlfWApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBlbmNyeXB0aW9uIGtleXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5SWRcclxuICAgKiAgICAgICAgVGhlIGlkIG9mIHRoZSBrZXkgdXNlZCB0byBlbmNyeXB0IG91dGdvaW5nIGRhdGEuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGtleVxyXG4gICAqICAgICAgICBUaGUgSlNPTiBXZWIgS2V5IChKV0spIHVzZWQgdG8gZW5jcnlwdCB0aGUgb3V0Z29pbmcgZGF0YS5cclxuICAgKiAgICAgICAgU2VlIHRoZSBSRkMgNzUxNyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxN1xyXG4gICAqICAgICAgICBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbi4gRm9yIGV4YW1wbGU6XHJcbiAgICpcclxuICAgKiAgICAgICAge1xyXG4gICAqICAgICAgICAgIFwia3R5XCI6XCJFQ1wiLFxyXG4gICAqICAgICAgICAgIFwiY3J2XCI6XCJQLTI1NlwiLFxyXG4gICAqICAgICAgICAgIFwieFwiOlwiZjgzT0ozRDJ4RjFCZzh2dWI5dExlMWdITXpWNzZlOFR1czl1UEh2UlZFVVwiLFxyXG4gICAqICAgICAgICAgIFwieVwiOlwieF9GRXpSdTltMzZITE5fdHVlNjU5TE5wWFc2cEN5U3Rpa1lqS0lXSTVhMFwiLFxyXG4gICAqICAgICAgICAgIFwia2lkXCI6XCJQdWJsaWMga2V5IHVzZWQgaW4gSldTIHNwZWMgQXBwZW5kaXggQS4zIGV4YW1wbGVcIlxyXG4gICAqICAgICAgICB9XHJcbiAgICpcclxuICAgKiBAdGhyb3dzIHtFcnJvcn0gaWYgZWl0aGVyIHRoZSBrZXkgaWQgb3IgdGhlIEpXSyBrZXkgb2JqZWN0IGFyZVxyXG4gICAqICAgICAgICAgaW52YWxpZC5cclxuICAgKi9cclxuICBfdmFsaWRhdGVFbmNyeXB0aW9uS2V5KGtleUlkLCBrZXkpIHtcclxuICAgIGlmICh0eXBlb2Yga2V5SWQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSYWxseS5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5IC0gSW52YWxpZCBlbmNyeXB0aW9uIGtleSBpZCAke2tleUlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmFsbHkuX3ZhbGlkYXRlRW5jcnlwdGlvbktleSAtIEludmFsaWQgZW5jcnlwdGlvbiBrZXkgJHtrZXl9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJtaXQgYW4gZW5jcnlwdGVkIHBpbmcgdGhyb3VnaCB0aGUgUmFsbHkgQ29yZSBhZGRvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXlsb2FkVHlwZVxyXG4gICAqICAgICAgICBUaGUgdHlwZSBvZiB0aGUgZW5jcnlwdGVkIHBheWxvYWQuIFRoaXMgd2lsbCBkZWZpbmUgdGhlXHJcbiAgICogICAgICAgIGBzY2hlbWFOYW1lYCBvZiB0aGUgcGluZy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxyXG4gICAqICAgICAgICBBIEpTT04tc2VyaWFsaXphYmxlIHBheWxvYWQgdG8gYmUgc2VudCB3aXRoIHRoZSBwaW5nLlxyXG4gICAqL1xyXG4gIGFzeW5jIHNlbmRQaW5nKHBheWxvYWRUeXBlLCBwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSYWxseS5zZW5kUGluZyAtIE5vdCBpbml0aWFsemVkLCBjYWxsIGBpbml0aWFsaXplKClgXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBpbiBkZXZlbG9wZXIgbW9kZSwgZHVtcCB0aGUgcGF5bG9hZCB0byB0aGUgY29uc29sZS5cclxuICAgIGlmICh0aGlzLl9lbmFibGVEZXZNb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBSYWxseS5zZW5kUGluZyAtIERldmVsb3BlciBtb2RlLiAke3BheWxvYWRUeXBlfSB3aWxsIG5vdCBiZSBzdWJtaXR0ZWRgLFxyXG4gICAgICAgIHBheWxvYWRcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdyYXAgZXZlcnl0aGluZyBpbiBhIHRyeSBibG9jaywgYXMgd2UgZG9uJ3QgcmVhbGx5IHdhbnRcclxuICAgIC8vIGRhdGEgY29sbGVjdGlvbiB0byBiZSB0aGUgY3VscHJpdCBvZiBhIGJ1ZyBoaW5kZXJpbmcgdXNlclxyXG4gICAgLy8gZXhwZXJpZW5jZS5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgc3R1ZHkgY2FuIGJlIHVzZWQgYXMgdGhlXHJcbiAgICAgIC8vIG5hbWVzcGFjZSwgaW4gb3JkZXIgdG8gbWFrZSBzdXJlIGRhdGEgaXMgcm91dGVkIHRvIHRoZVxyXG4gICAgICAvLyBwcm9wZXIgYW5hbHlzaXMgc2FuZGJveC5cclxuICAgICAgY29uc3Qgc3R1ZHlOYW1lID0gYnJvd3Nlci5ydW50aW1lLmlkO1xyXG5cclxuICAgICAgLy8gVGhpcyBmdW5jdGlvbiBtYXkgYmUgbWlzdGFrZW5seSBjYWxsZWQgd2hpbGUgaW5pdCBoYXMgbm90XHJcbiAgICAgIC8vIGZpbmlzaGVkLiBMZXQncyBiZSBzYWZlIGFuZCBjaGVjayBmb3Iga2V5IHZhbGlkaXR5IGFnYWluLlxyXG4gICAgICB0aGlzLl92YWxpZGF0ZUVuY3J5cHRpb25LZXkodGhpcy5fa2V5SWQsIHRoaXMuX2tleSk7XHJcblxyXG4gICAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgICAgdHlwZTogXCJ0ZWxlbWV0cnktcGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBheWxvYWRUeXBlOiBwYXlsb2FkVHlwZSxcclxuICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgICBuYW1lc3BhY2U6IHN0dWR5TmFtZSxcclxuICAgICAgICAgIGtleUlkOiB0aGlzLl9rZXlJZCxcclxuICAgICAgICAgIGtleTogdGhpcy5fa2V5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShDT1JFX0FERE9OX0lELCBtc2csIHt9KTtcclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFJhbGx5LnNlbmRQaW5nIC0gZXJyb3Igd2hpbGUgc2VuZGluZyAke3BheWxvYWRUeXBlfWAsIGV4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGRlc3RpbmF0aW9uRG9tYWlucyA9IFtcbiAgICBcImNubi5jb21cIixcbiAgICBcInNmY2hyb25pY2xlLmNvbVwiLFxuICAgIFwieW91cmJpZ3NreS5jb21cIixcbiAgICBcIm5vcnRocGltYW5ld3MuY29tXCJcbl0iLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHV0aWxpdGllcyBmb3IgbWF0Y2hpbmcgVVJMcyBhZ2FpbnN0IGRvbWFpbiBuYW1lcy5cbiAqIFxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5NYXRjaGluZ1xuICovXG5pbXBvcnQgeyBkZXN0aW5hdGlvbkRvbWFpbnMgfSBmcm9tIFwiLi4vLi4vZG9tYWlucy5qc1wiXG5cbi8qKiBcbiAqIENsYXNzIGZvciB0ZXN0aW5nIHdoZXRoZXIgYSBVUkwgbWF0Y2hlcyBhIHNldCBvZiBkb21haW5zLlxuICogQ3VycmVudGx5IGltcGxlbWVudGVkIHdpdGggdGhlIG5hdGl2ZSBSZWdFeHAgb3ZlciB0aGUgZnVsbCBVUkwsIHdoaWNoIGdpdmVzIGdvb2QgcGVyZm9ybWFuY2UuXG4gKiBXZSBtaWdodCBiZSBhYmxlIHRvIHNwZWVkIHRoaXMgdXAgYnkgcGFyc2luZyB0aGUgVVJMIGFuZCB0aGVuIG9ubHkgbWF0Y2hpbmcgZG9tYWlucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFVybE1hdGNoZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIFVSTCBtYXRjaGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGRvbWFpbnMgLSBUaGUgc2V0IG9mIGRvbWFpbnMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaFN1YmRvbWFpbnM9dHJ1ZV0gLSBXaGV0aGVyIHRvIG1hdGNoIHN1YmRvbWFpbnMgb2YgZG9tYWlucyBpbiB0aGUgc2V0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5yZWdFeHAgPSBuZXcgUmVnRXhwKGNyZWF0ZVVybFJlZ2V4U3RyaW5nKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyksIFwiaVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0IHdoZXRoZXIgYSBVUkwgbWF0Y2hlcyBhIGRvbWFpbiBpbiB0aGUgc2V0IG9mIGRvbWFpbnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgdG8gdGVzdC5cbiAgICAgKi9cbiAgICB0ZXN0VXJsKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdFeHAudGVzdCh1cmwpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcgZm9yIG1hdGNoaW5nIGEgVVJMIGFnYWluc3QgYSBzZXQgb2YgZG9tYWlucy5cbiAqIFdpbGwgbWF0Y2ggaHR0cCBhbmQgaHR0cHMgcHJvdG9jb2xzLiBDdXJyZW50bHkgY2FzZSBzZW5zaXRpdmUuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIC0gVGhlIHNldCBvZiBkb21haW5zIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaFN1YmRvbWFpbnM9dHJ1ZV0gLSBXaGV0aGVyIHRvIG1hdGNoIHN1YmRvbWFpbnMgb2YgZG9tYWlucyBpbiB0aGUgc2V0LlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsUmVnZXhTdHJpbmcoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zID0gdHJ1ZSkge1xuICAgIHZhciB1cmxNYXRjaFJFID0gXCJeKD86aHR0cHxodHRwcyk6Ly9cIiArIChtYXRjaFN1YmRvbWFpbnMgPyBcIig/OltBLVphLXowLTlcXFxcLV0rXFxcXC4pKlwiIDogXCJcIikgKyBcIig/OlwiO1xuICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpXG4gICAgICAgIHVybE1hdGNoUkUgPSB1cmxNYXRjaFJFICsgZG9tYWluLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpICsgXCJ8XCI7XG4gICAgdXJsTWF0Y2hSRSA9IHVybE1hdGNoUkUuc3Vic3RyaW5nKDAsIHVybE1hdGNoUkUubGVuZ3RoIC0gMSkgKyBcIikoPzokfCgvfFxcXFw/KS4qKVwiOyAgXCIpKD86JHwvLiopXCI7XG4gICAgcmV0dXJuIHVybE1hdGNoUkU7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgbWF0Y2ggcGF0dGVybnMgZm9yIG1hdGNoaW5nIGEgVVJMIGFnYWluc3QgYSBzZXQgb2YgZG9tYWlucy5cbiAqIFdpbGwgbWF0Y2ggaHR0cCBhbmQgaHR0cHMgcHJvdG9jb2xzLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZG9tYWlucyAtIFRoZSBzZXQgb2YgZG9tYWlucyB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgbWF0Y2ggcGF0dGVybnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMgPSB0cnVlKSB7XG4gICAgdmFyIG1hdGNoUGF0dGVybnMgPSBbIF07XG4gICAgZm9yIChjb25zdCBkb21haW4gb2YgZG9tYWlucykge1xuICAgICAgICBtYXRjaFBhdHRlcm5zLnB1c2goXCJodHRwOi8vXCIgKyAoIG1hdGNoU3ViZG9tYWlucyA/IFwiKi5cIiA6IFwiXCIgKSArIGRvbWFpbiArIFwiLypcIik7XG4gICAgICAgIG1hdGNoUGF0dGVybnMucHVzaChcImh0dHBzOi8vXCIgKyAoIG1hdGNoU3ViZG9tYWlucyA/IFwiKi5cIiA6IFwiXCIgKSArIGRvbWFpbiArIFwiLypcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaFBhdHRlcm5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R1ZHlQYXRocygpIHtcbiAgICB2YXIgc3R1ZHlQYXRocyA9IHt9O1xuICAgIHN0dWR5UGF0aHMuZG9tYWlucyA9IG5ldyBVcmxNYXRjaGVyKGRlc3RpbmF0aW9uRG9tYWlucyk7XG4gICAgc3R1ZHlQYXRocy5wYXRocyA9IHt9XG4gICAgc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzID0gZGVzdGluYXRpb25Eb21haW5zO1xuICAgIHJldHVybiBzdHVkeVBhdGhzO1xufVxuXG5cbi8vZXhwb3J0IGZ1bmN0aW9uIGdldEFkRmlsdGVycygpIHtcbi8vICAgIHJldHVybiBhZENzc1NlbGVjdG9ycztcbi8vfVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5pbXBvcnQgKiBhcyBXZWJTY2llbmNlIGZyb20gXCIuL1dlYlNjaWVuY2UuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICB2YXIgc3R1ZHlQYXRocyA9IFdlYlNjaWVuY2UuVXRpbGl0aWVzLk1hdGNoaW5nLmdldFN0dWR5UGF0aHMoKTtcbiAgICBjb25zb2xlLmRlYnVnKFwic3R1ZHkgcGF0aHM6XCIpO1xuICAgIGNvbnNvbGUuZGVidWcoc3R1ZHlQYXRocylcbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcblxuaW1wb3J0IFJhbGx5IGZyb20gXCJAbW96aWxsYS9yYWxseVwiO1xuXG4vLyBFeGFtcGxlOiBpbXBvcnQgYSBtb2R1bGUuXG5pbXBvcnQge1xuICBpbml0aWFsaXplIGFzIGV4YW1wbGVJbml0aWFsaXplXG59IGZyb20gJy4vRXhhbXBsZU1vZHVsZSc7XG5cbmNvbnN0IHJhbGx5ID0gbmV3IFJhbGx5KCk7XG5yYWxseS5pbml0aWFsaXplKFxuICAvLyBBIHNhbXBsZSBrZXkgaWQgdXNlZCBmb3IgZW5jcnlwdGluZyBkYXRhLlxuICBcInNhbXBsZS1pbnZhbGlkLWtleS1pZFwiLFxuICAvLyBBIHNhbXBsZSAqdmFsaWQqIEpXSyBvYmplY3QgZm9yIHRoZSBlbmNyeXB0aW9uLlxuICB7XG4gICAgXCJrdHlcIjpcIkVDXCIsXG4gICAgXCJjcnZcIjpcIlAtMjU2XCIsXG4gICAgXCJ4XCI6XCJmODNPSjNEMnhGMUJnOHZ1Yjl0TGUxZ0hNelY3NmU4VHVzOXVQSHZSVkVVXCIsXG4gICAgXCJ5XCI6XCJ4X0ZFelJ1OW0zNkhMTl90dWU2NTlMTnBYVzZwQ3lTdGlrWWpLSVdJNWEwXCIsXG4gICAgXCJraWRcIjpcIlB1YmxpYyBrZXkgdXNlZCBpbiBKV1Mgc3BlYyBBcHBlbmRpeCBBLjMgZXhhbXBsZVwiXG4gIH0sXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnQgaXMgYXV0b21hdGljYWxseSBwcm92aWRlZCBieVxuICAvLyB0aGUgYnVpbGQgc3lzdGVtLlxuICBfX0VOQUJMRV9ERVZFTE9QRVJfTU9ERV9fLFxuKS50aGVuKHJlc29sdmUgPT4ge1xuICAvLyBJbml0aWFsaXplIHRoZSBzdHVkeSBhbmQgc3RhcnQgaXQuXG4gIC8vIEV4YW1wbGU6IGluaXRpYWxpemUgdGhlIGV4YW1wbGUgbW9kdWxlLlxuICBleGFtcGxlSW5pdGlhbGl6ZSgpO1xufSwgcmVqZWN0ID0+e1xuICAvLyBEbyBub3Qgc3RhcnQgdGhlIHN0dWR5IGluIHRoaXMgY2FzZS4gU29tZXRoaW5nXG4gIC8vIHdlbnQgd3JvbmcuXG59KTtcbiJdLCJuYW1lcyI6WyJ0aGlzIiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocyIsImV4YW1wbGVJbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQzVCLEVBRTZDO0FBQzdDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLEdBTUc7QUFDSCxDQUFDLEVBQUUsT0FBTyxVQUFVLEtBQUssV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFPLElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxHQUFHQSxjQUFJLEVBQUUsVUFBVSxNQUFNLEVBQUU7QUFXakg7QUFDQSxFQUFFLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUM3RixJQUFJLE1BQU0sZ0RBQWdELEdBQUcseURBQXlELENBQUM7QUFDdkgsSUFBSSxNQUFNLGlDQUFpQyxHQUFHLHdQQUF3UCxDQUFDO0FBQ3ZTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE1BQU0sUUFBUSxHQUFHLGFBQWEsSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQU0sV0FBVyxHQUFHO0FBQzFCLFFBQVEsUUFBUSxFQUFFO0FBQ2xCLFVBQVUsT0FBTyxFQUFFO0FBQ25CLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxVQUFVLEVBQUU7QUFDdEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFD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
