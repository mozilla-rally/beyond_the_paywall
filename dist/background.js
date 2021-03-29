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

// domains.js - Brian Chivers, 3/19/2021
//
// This file contains domain names that we care about.
// Information from this study will only be collected about
// the below domains.
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

/**
 * This module stores Article Contents from pages
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.ArticleContents
 */

const debugLog$4 = getDebuggingLog('Measurements.ArticleContents');

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
let storage$3 = null;
let initialized$5 = false;

let listeners$1 = [];

/**
 * Start an article contents study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function runStudy$3 ({
    domains = []
}) {

  if (initialized$5){
    return   
  }
  initialized$5 = true;

  storage$3 = await (new KeyValueStorage('WebScience.Measurements.ArticleContents')).initialize();

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new Counter('WebScience.Measurements.ArticleContents.nextPageId')).initialize();

  // Build the URL matching set for content scripts
  let contentScriptMatches = createUrlMatchPatternArrayWithPath(domains, true);

  // Register the content script for storing Article Contents
  await browser.contentScripts.register({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/WebScience/Measurements/content-scripts/Readability.js'
      },
      {
        file: '/src/content-scripts/page-content.js'
      }
    ],
    runAt: 'document_idle'
  });

  // Handle page depth events
  registerListener('WebScience.articleContent', async (depthInfo, sender, sendResponse) => {
    let pageId = await nextPageIdCounter.getAndIncrement();
    depthInfo.url = normalizeUrl(sender.url);
    depthInfo.tabId = sender.tab.id;
    for (let listener of listeners$1) { listener(depthInfo); }
    storage$3.set(pageId.toString(), depthInfo);
    debugLog$4(JSON.stringify(depthInfo));
  }, {
    type: 'string',
    url: 'string',
    title: 'string',
    text: 'string'
  });
}

/**
 * This module measures advertisement info on news pages
 *
 * Brian Chivers, 3/19/2021
 * @module WebScience.Measurements.Advertisements
 */

const debugLog$5 = getDebuggingLog('Measurements.Advertisements');

/**
 * A KeyValueStorage object for data associated with the study.
 * @type {Object}
 * @private
 */
let storage$4 = null;
let initialized$6 = false;

let listeners$2 = [];

/**
 * Start an advertisements study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 */
async function runStudy$4 ({
  domains = []
}) {
  if (initialized$6) {
    return
  }
  initialized$6 = true;

  storage$4 = await (new KeyValueStorage('WebScience.Measurements.Advertisements')).initialize();

  // Use a unique identifier for each webpage the user visits that has a matching domain
  let nextPageIdCounter = await (new Counter('WebScience.Measurements.Advertisements.nextPageId')).initialize();

  // Build the URL matching set for content scripts
  let contentScriptMatches = createUrlMatchPatternArray(domains, true);

  // Register the content script for measuring advertisement info
  // The CSS selectors file is needed to find ads on the page
  await browser.contentScripts.register ({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/ad_css_selectors.js'
      },
      {
        file: '/src/content-scripts/page-ads.js'
      }
      ],
    runAt: 'document_idle'
  });

  // Handle page depth events
  registerListener('WebScience.advertisements', async (depthInfo, sender, sendResponse) => {
    let pageId = await nextPageIdCounter.getAndIncrement();
    depthInfo.url = normalizeUrl(sender.url);
    depthInfo.tabId = sender.tab.id;
    for (var listener of listeners$2) { listener(depthInfo); }
      storage$4.set(pageId.toString(), depthInfo);
      debugLog$5(JSON.stringify(depthInfo));
    }, {
      type: 'string',
      url: 'string',
      ads: 'object'
    }
  );
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function initialize$3 () {
  // Grab all domains
  var studyPaths = getStudyPaths();

  // Configure navigation collection
  runStudy$2({
    domains: studyPaths.destinationPaths,
    trackUserAttention: true
  });

  // Configure link exposure collection
  initialize$2();
  runStudy({
    domains: studyPaths.destinationPaths,
    privateWindows: false
  });

  // Start Page Depth module
  runStudy$1({
    domains: studyPaths.destinationPaths
  });

  // Start Article Contents Module
  runStudy$3({
    domains: studyPaths.destinationPaths,
  });

  // Start Advertisements Module
  runStudy$4({
    domains: studyPaths.destinationPaths
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
  initialize$3();
}, reject =>{
  // Do not start the study in this case. Something
  // went wrong.
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvQG1vemlsbGEvcmFsbHkvcmFsbHkuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvRGVidWdnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL2xvY2FsZm9yYWdlLmVzNi5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9sb2NhbGZvcmFnZS1zdGFydHN3aXRoLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL1N0b3JhZ2UuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTWVzc2FnaW5nLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvVXRpbGl0aWVzL0lkbGUuanMiLCIuLi9zcmMvZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9NYXRjaGluZy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL1V0aWxpdGllcy9QYWdlRXZlbnRzLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvZGVwZW5kZW5jaWVzL3Nob3J0ZG9tYWlucy5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL2RlcGVuZGVuY2llcy9hbXBjYWNoZWRvbWFpbnMuanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9VdGlsaXRpZXMvTGlua1Jlc29sdXRpb24uanMiLCIuLi9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvTGlua0V4cG9zdXJlLmpzIiwiLi4vc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL1BhZ2VEZXB0aC5qcyIsIi4uL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9QYWdlTmF2aWdhdGlvbi5qcyIsIi4uL3NyYy9BcnRpY2xlQ29udGVudHMuanMiLCIuLi9zcmMvQWR2ZXJ0aXNlbWVudHMuanMiLCIuLi9zcmMvU3R1ZHlNb2R1bGUuanMiLCIuLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjcuMCAtIFR1ZSBOb3YgMTAgMjAyMCAyMDoyNDowNCAqL1xuXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cblxuICAvKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAodHlwZW9mIGJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG4gICAgY29uc3QgU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HID0gXCJSZXR1cm5pbmcgYSBQcm9taXNlIGlzIHRoZSBwcmVmZXJyZWQgd2F5IHRvIHNlbmQgYSByZXBseSBmcm9tIGFuIG9uTWVzc2FnZS9vbk1lc3NhZ2VFeHRlcm5hbCBsaXN0ZW5lciwgYXMgdGhlIHNlbmRSZXNwb25zZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgc3BlY3MgKFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9ydW50aW1lL29uTWVzc2FnZSlcIjsgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG5cblxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3Rpb25cbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heFJlc29sdmVkQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBjcmVhdGVkIGJ5IHRoZSB3cmFwcGVkIGFzeW5jIGZ1bmN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heFJlc29sdmVkQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBjcmVhdGVkIGJ5IHRoZSB3cmFwcGVkIGFzeW5jIGZ1bmN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTsgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG5cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9OyAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTsgLy8gS2VlcCB0cmFjayBpZiB0aGUgZGVwcmVjYXRpb24gd2FybmluZyBoYXMgYmVlbiBsb2dnZWQgYXQgbGVhc3Qgb25jZS5cblxuXG4gICAgICBsZXQgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmICghbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORywgbmV3IEVycm9yKCkuc3RhY2spO1xuICAgICAgICAgICAgICAgIGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7IC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cblxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG5cblxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuXG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9OyAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuXG5cbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICB9IC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cblxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xuICAgICAgICByZWplY3QsXG4gICAgICAgIHJlc29sdmVcbiAgICAgIH0sIHJlcGx5KSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGNocm9tZSAhPSBcIm9iamVjdFwiIHx8ICFjaHJvbWUgfHwgIWNocm9tZS5ydW50aW1lIHx8ICFjaHJvbWUucnVudGltZS5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICAgIH0gLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xyXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXHJcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xyXG5cclxuY29uc3QgQ09SRV9BRERPTl9JRCA9IFwicmFsbHktY29yZUBtb3ppbGxhLm9yZ1wiO1xyXG5jb25zdCBTSUdOVVBfVVJMID0gXCJodHRwczovL21vemlsbGEtcmFsbHkuZ2l0aHViLmlvL2NvcmUtYWRkb24vXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWxseSB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSB0aGUgUmFsbHkgbGlicmFyeS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlJZFxyXG4gICAqICAgICAgICBUaGUgaWQgb2YgdGhlIGtleSB1c2VkIHRvIGVuY3J5cHQgb3V0Z29pbmcgZGF0YS5cclxuICAgKiBAcGFyYW0ge09iamVjdH0ga2V5XHJcbiAgICogICAgICAgIFRoZSBKU09OIFdlYiBLZXkgKEpXSykgdXNlZCB0byBlbmNyeXB0IHRoZSBvdXRnb2luZyBkYXRhLlxyXG4gICAqICAgICAgICBTZWUgdGhlIFJGQyA3NTE3IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3NTE3XHJcbiAgICogICAgICAgIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLiBGb3IgZXhhbXBsZTpcclxuICAgKlxyXG4gICAqICAgICAgICB7XHJcbiAgICogICAgICAgICAgXCJrdHlcIjpcIkVDXCIsXHJcbiAgICogICAgICAgICAgXCJjcnZcIjpcIlAtMjU2XCIsXHJcbiAgICogICAgICAgICAgXCJ4XCI6XCJmODNPSjNEMnhGMUJnOHZ1Yjl0TGUxZ0hNelY3NmU4VHVzOXVQSHZSVkVVXCIsXHJcbiAgICogICAgICAgICAgXCJ5XCI6XCJ4X0ZFelJ1OW0zNkhMTl90dWU2NTlMTnBYVzZwQ3lTdGlrWWpLSVdJNWEwXCIsXHJcbiAgICogICAgICAgICAgXCJraWRcIjpcIlB1YmxpYyBrZXkgdXNlZCBpbiBKV1Mgc3BlYyBBcHBlbmRpeCBBLjMgZXhhbXBsZVwiXHJcbiAgICogICAgICAgIH1cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVuYWJsZURldk1vZGVcclxuICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdG8gaW5pdGlhbGl6ZSBSYWxseS5qcyBpbiBkZXZlbG9wZXIgbW9kZS5cclxuICAgKiAgICAgICAgSW4gdGhpcyBtb2RlIHdlIGlnbm9yZSBwcm9ibGVtcyB3aGVuIGNvbW11bmljYXRpbmcgd2l0aFxyXG4gICAqICAgICAgICBjb3JlIGFkZC1vbi5cclxuICAgKi9cclxuICBhc3luYyBpbml0aWFsaXplKGtleUlkLCBrZXksIGVuYWJsZURldk1vZGUpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJSYWxseS5pbml0aWFsaXplXCIpO1xyXG5cclxuICAgIHRoaXMuX3ZhbGlkYXRlRW5jcnlwdGlvbktleShrZXlJZCwga2V5KTtcclxuXHJcbiAgICB0aGlzLl9rZXlJZCA9IGtleUlkO1xyXG4gICAgdGhpcy5fa2V5ID0ga2V5O1xyXG4gICAgdGhpcy5fZW5hYmxlRGV2TW9kZSA9IEJvb2xlYW4oZW5hYmxlRGV2TW9kZSk7XHJcblxyXG4gICAgbGV0IGhhc1JhbGx5ID0gYXdhaXQgdGhpcy5fY2hlY2tSYWxseUNvcmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5kZWJ1ZyhcIlJhbGx5LmluaXRpYWxpemUgLSBGb3VuZCB0aGUgQ29yZSBBZGQtb24uXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pLmNhdGNoKGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gV2UgZGlkIG5vdCBmaW5kIHRoZSBSYWxseSBDb3JlIEFkZC1vbi4gQnV0IG1heWJlIHdlXHJcbiAgICAgIC8vIGFyZSBpbiBkZXZlbG9wZXIgbW9kZS4gRG8gbm90IHRyaWdnZXIgdGhlIHNpZ24tdXAgZmxvd1xyXG4gICAgICAvLyBpZiB0aGF0J3MgdGhlIGNhc2UuXHJcbiAgICAgIGlmICh0aGlzLl9lbmFibGVEZXZNb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmFsbHkuaW5pdGlhbGl6ZSAtIEV4ZWN1dGluZyBpbiBkZXZlbG9wZXIgbW9kZS5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSBDb3JlIEFkZC1vbiB3YXMgbm90IGZvdW5kIGFuZCB3ZSdyZSBub3QgaW4gZGV2ZWxvcGVyXHJcbiAgICAgIC8vIG1vZGUuXHJcbiAgICAgIGF3YWl0IGJyb3dzZXIudGFicy5jcmVhdGUoeyB1cmw6IFNJR05VUF9VUkwgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghaGFzUmFsbHkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmFsbHkuaW5pdGlhbGl6ZSAtIEluaXRpYWxpemF0aW9uIGZhaWxlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtZXNzYWdlcyBmcm9tIHRoZSBDb3JlIGFkZG9uLlxyXG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKFxyXG4gICAgICAobSwgcykgPT4gdGhpcy5faGFuZGxlRXh0ZXJuYWxNZXNzYWdlKG0sIHMpKTtcclxuXHJcbiAgICAvLyBXZSB3ZW50IHRocm91Z2ggdGhlIHdob2xlIGluaXQgcHJvY2VzcywgaXQncyBub3cgc2FmZVxyXG4gICAgLy8gdG8gdXNlIHRoZSBSYWxseSBwdWJsaWMgQVBJcy5cclxuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBDb3JlIGFkZG9uIGlzIGluc3RhbGxlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSByZXNvbHZlZCBpZiB0aGUgY29yZSBhZGRvbiB3YXMgZm91bmQgYW5kXHJcbiAgICogICAgICAgICAgY29tbXVuaWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bCwgcmVqZWN0ZWQgb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGFzeW5jIF9jaGVja1JhbGx5Q29yZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiBcImNvcmUtY2hlY2tcIixcclxuICAgICAgICBkYXRhOiB7fVxyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXNwb25zZSA9XHJcbiAgICAgICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKENPUkVfQURET05fSUQsIG1zZywge30pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZVxyXG4gICAgICAgICAgfHwgcmVzcG9uc2UudHlwZSAhPT0gXCJjb3JlLWNoZWNrLXJlc3BvbnNlXCJcclxuICAgICAgICAgIHx8IHJlc3BvbnNlLmRhdGEuZW5yb2xsZWQgIT09IHRydWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJhbGx5Ll9jaGVja1JhbGx5Q29yZSAtIHVuZXhwZWN0ZWQgcmVzcG9uc2UgcmV0dXJuZWQgJHtyZXNwb25zZX1gKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmFsbHkuX2NoZWNrUmFsbHlDb3JlIC0gY29yZSBhZGRvbiBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIG1lc3NhZ2VzIGNvbWluZyBpbiBmcm9tIGV4dGVybmFsIGFkZG9ucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlXHJcbiAgICogICAgICAgIFRoZSBwYXlsb2FkIG9mIHRoZSBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSB7cnVudGltZS5NZXNzYWdlU2VuZGVyfSBzZW5kZXJcclxuICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb25zIGFib3V0IHdobyBzZW50XHJcbiAgICogICAgICAgIHRoZSBtZXNzYWdlLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgcmVzcG9uc2UgdG8gdGhlIHJlY2VpdmVkIG1lc3NhZ2UuXHJcbiAgICogICAgICAgICAgSXQgY2FuIGJlIHJlc29sdmVkIHdpdGggYSB2YWx1ZSB0aGF0IGlzIHNlbnQgdG8gdGhlXHJcbiAgICogICAgICAgICAgYHNlbmRlcmAuXHJcbiAgICovXHJcbiAgX2hhbmRsZUV4dGVybmFsTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIpIHtcclxuICAgIC8vIFdlIG9ubHkgZXhwZWN0IG1lc3NhZ2VzIGNvbWluZyBmcm9tIHRoZSBjb3JlIGFkZG9uLlxyXG4gICAgaWYgKHNlbmRlci5pZCAhPSBDT1JFX0FERE9OX0lEKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICBuZXcgRXJyb3IoYFJhbGx5Ll9oYW5kbGVFeHRlcm5hbE1lc3NhZ2UgLSB1bmV4cGVjdGVkIHNlbmRlciAke3NlbmRlci5pZH1gKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBcInVuaW5zdGFsbFwiOlxyXG4gICAgICAgIHJldHVybiBicm93c2VyLm1hbmFnZW1lbnQudW5pbnN0YWxsU2VsZih7c2hvd0NvbmZpcm1EaWFsb2c6IGZhbHNlfSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgbmV3IEVycm9yKGBSYWxseS5faGFuZGxlRXh0ZXJuYWxNZXNzYWdlIC0gdW5leHBlY3RlZCBtZXNzYWdlIHR5cGUgJHttZXNzYWdlLnR5cGV9YCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmFsaWRhdGUgdGhlIHByb3ZpZGVkIGVuY3J5cHRpb24ga2V5cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlJZFxyXG4gICAqICAgICAgICBUaGUgaWQgb2YgdGhlIGtleSB1c2VkIHRvIGVuY3J5cHQgb3V0Z29pbmcgZGF0YS5cclxuICAgKiBAcGFyYW0ge09iamVjdH0ga2V5XHJcbiAgICogICAgICAgIFRoZSBKU09OIFdlYiBLZXkgKEpXSykgdXNlZCB0byBlbmNyeXB0IHRoZSBvdXRnb2luZyBkYXRhLlxyXG4gICAqICAgICAgICBTZWUgdGhlIFJGQyA3NTE3IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3NTE3XHJcbiAgICogICAgICAgIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLiBGb3IgZXhhbXBsZTpcclxuICAgKlxyXG4gICAqICAgICAgICB7XHJcbiAgICogICAgICAgICAgXCJrdHlcIjpcIkVDXCIsXHJcbiAgICogICAgICAgICAgXCJjcnZcIjpcIlAtMjU2XCIsXHJcbiAgICogICAgICAgICAgXCJ4XCI6XCJmODNPSjNEMnhGMUJnOHZ1Yjl0TGUxZ0hNelY3NmU4VHVzOXVQSHZSVkVVXCIsXHJcbiAgICogICAgICAgICAgXCJ5XCI6XCJ4X0ZFelJ1OW0zNkhMTl90dWU2NTlMTnBYVzZwQ3lTdGlrWWpLSVdJNWEwXCIsXHJcbiAgICogICAgICAgICAgXCJraWRcIjpcIlB1YmxpYyBrZXkgdXNlZCBpbiBKV1Mgc3BlYyBBcHBlbmRpeCBBLjMgZXhhbXBsZVwiXHJcbiAgICogICAgICAgIH1cclxuICAgKlxyXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBpZiBlaXRoZXIgdGhlIGtleSBpZCBvciB0aGUgSldLIGtleSBvYmplY3QgYXJlXHJcbiAgICogICAgICAgICBpbnZhbGlkLlxyXG4gICAqL1xyXG4gIF92YWxpZGF0ZUVuY3J5cHRpb25LZXkoa2V5SWQsIGtleSkge1xyXG4gICAgaWYgKHR5cGVvZiBrZXlJZCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJhbGx5Ll92YWxpZGF0ZUVuY3J5cHRpb25LZXkgLSBJbnZhbGlkIGVuY3J5cHRpb24ga2V5IGlkICR7a2V5SWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSYWxseS5fdmFsaWRhdGVFbmNyeXB0aW9uS2V5IC0gSW52YWxpZCBlbmNyeXB0aW9uIGtleSAke2tleX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1Ym1pdCBhbiBlbmNyeXB0ZWQgcGluZyB0aHJvdWdoIHRoZSBSYWxseSBDb3JlIGFkZG9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBheWxvYWRUeXBlXHJcbiAgICogICAgICAgIFRoZSB0eXBlIG9mIHRoZSBlbmNyeXB0ZWQgcGF5bG9hZC4gVGhpcyB3aWxsIGRlZmluZSB0aGVcclxuICAgKiAgICAgICAgYHNjaGVtYU5hbWVgIG9mIHRoZSBwaW5nLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXHJcbiAgICogICAgICAgIEEgSlNPTi1zZXJpYWxpemFibGUgcGF5bG9hZCB0byBiZSBzZW50IHdpdGggdGhlIHBpbmcuXHJcbiAgICovXHJcbiAgYXN5bmMgc2VuZFBpbmcocGF5bG9hZFR5cGUsIHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlJhbGx5LnNlbmRQaW5nIC0gTm90IGluaXRpYWx6ZWQsIGNhbGwgYGluaXRpYWxpemUoKWBcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIGluIGRldmVsb3BlciBtb2RlLCBkdW1wIHRoZSBwYXlsb2FkIHRvIHRoZSBjb25zb2xlLlxyXG4gICAgaWYgKHRoaXMuX2VuYWJsZURldk1vZGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYFJhbGx5LnNlbmRQaW5nIC0gRGV2ZWxvcGVyIG1vZGUuICR7cGF5bG9hZFR5cGV9IHdpbGwgbm90IGJlIHN1Ym1pdHRlZGAsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV3JhcCBldmVyeXRoaW5nIGluIGEgdHJ5IGJsb2NrLCBhcyB3ZSBkb24ndCByZWFsbHkgd2FudFxyXG4gICAgLy8gZGF0YSBjb2xsZWN0aW9uIHRvIGJlIHRoZSBjdWxwcml0IG9mIGEgYnVnIGhpbmRlcmluZyB1c2VyXHJcbiAgICAvLyBleHBlcmllbmNlLlxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBzdHVkeSBjYW4gYmUgdXNlZCBhcyB0aGVcclxuICAgICAgLy8gbmFtZXNwYWNlLCBpbiBvcmRlciB0byBtYWtlIHN1cmUgZGF0YSBpcyByb3V0ZWQgdG8gdGhlXHJcbiAgICAgIC8vIHByb3BlciBhbmFseXNpcyBzYW5kYm94LlxyXG4gICAgICBjb25zdCBzdHVkeU5hbWUgPSBicm93c2VyLnJ1bnRpbWUuaWQ7XHJcblxyXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIG1heSBiZSBtaXN0YWtlbmx5IGNhbGxlZCB3aGlsZSBpbml0IGhhcyBub3RcclxuICAgICAgLy8gZmluaXNoZWQuIExldCdzIGJlIHNhZmUgYW5kIGNoZWNrIGZvciBrZXkgdmFsaWRpdHkgYWdhaW4uXHJcbiAgICAgIHRoaXMuX3ZhbGlkYXRlRW5jcnlwdGlvbktleSh0aGlzLl9rZXlJZCwgdGhpcy5fa2V5KTtcclxuXHJcbiAgICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgICB0eXBlOiBcInRlbGVtZXRyeS1waW5nXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGF5bG9hZFR5cGU6IHBheWxvYWRUeXBlLFxyXG4gICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgIG5hbWVzcGFjZTogc3R1ZHlOYW1lLFxyXG4gICAgICAgICAga2V5SWQ6IHRoaXMuX2tleUlkLFxyXG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKENPUkVfQURET05fSUQsIG1zZywge30pO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgUmFsbHkuc2VuZFBpbmcgLSBlcnJvciB3aGlsZSBzZW5kaW5nICR7cGF5bG9hZFR5cGV9YCwgZXgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHV0aWxpdGllcyBmb3IgbG9nZ2luZyBkZWJ1Z2dpbmcgZXZlbnRzLlxuICogVGhlIG1vZHVsZSBjdXJyZW50bHkganVzdCBvdXRwdXRzIGV2ZW50cyB3aXRoIGBjb25zb2xlLmRlYnVnYC5cbiAqIEl0IHNob3VsZCBldmVudHVhbGx5IHN1cHBvcnQgZGVidWdnaW5nIHZpYSBUZWxlbWV0cnkuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuRGVidWdnaW5nXG4gKi9cblxuLyoqXG4gKiBXaGV0aGVyIHRvIGxvZyBkZWJ1Z2dpbmcgZXZlbnRzLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGRlYnVnID0gZmFsc2U7XG5cbi8qKiBFbmFibGUgbG9nZ2luZyBmb3IgZGVidWdnaW5nIGV2ZW50cy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVEZWJ1Z2dpbmcoKSB7XG4gICAgZGVidWcgPSB0cnVlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2luZyBsb2dnZXIsIGEgZnVuY3Rpb24gdGhhdCBsb2dzIGRlYnVnZ2luZyBldmVudHMgKGFzIHN0cmluZ3MpLlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZU5hbWUgLSBBIG5hbWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBtb2R1bGVcbiAqIGdlbmVyYXRpbmcgdGhlIGRlYnVnZ2luZyBldmVudHMuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nKX0gLSBBIGRlYnVnZ2luZyBsb2dnZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWJ1Z2dpbmdMb2cobW9kdWxlTmFtZSkge1xuICAgIHJldHVybiAoKHRleHQpID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIldlYlNjaWVuY2UuXCIgKyBtb2R1bGVOYW1lICsgXCI6IFwiICsgdGV4dCk7XG4gICAgfSk7XG59IiwiLyohXG4gICAgbG9jYWxGb3JhZ2UgLS0gT2ZmbGluZSBTdG9yYWdlLCBJbXByb3ZlZFxuICAgIFZlcnNpb24gMS45LjBcbiAgICBodHRwczovL2xvY2FsZm9yYWdlLmdpdGh1Yi5pby9sb2NhbEZvcmFnZVxuICAgIChjKSAyMDEzLTIwMTcgTW96aWxsYSwgQXBhY2hlIExpY2Vuc2UgMi4wXG4qL1xuZXhwb3J0IHZhciBsb2NhbGZvcmFnZTtcbihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLmxvY2FsZm9yYWdlID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IChmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsIGYpfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbnZhciBzY2hlZHVsZURyYWluO1xuXG57XG4gIGlmIChNdXRhdGlvbikge1xuICAgIHZhciBjYWxsZWQgPSAwO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbihuZXh0VGljayk7XG4gICAgdmFyIGVsZW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgIH0pO1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmRhdGEgPSAoY2FsbGVkID0gKytjYWxsZWQgJSAyKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCFnbG9iYWwuc2V0SW1tZWRpYXRlICYmIHR5cGVvZiBnbG9iYWwuTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKCk7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBuZXh0VGljaztcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCdkb2N1bWVudCcgaW4gZ2xvYmFsICYmICdvbnJlYWR5c3RhdGVjaGFuZ2UnIGluIGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgIHZhciBzY3JpcHRFbCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV4dFRpY2soKTtcblxuICAgICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICBzY3JpcHRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsKTtcbiAgICAgICAgc2NyaXB0RWwgPSBudWxsO1xuICAgICAgfTtcbiAgICAgIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQobmV4dFRpY2ssIDApO1xuICAgIH07XG4gIH1cbn1cblxudmFyIGRyYWluaW5nO1xudmFyIHF1ZXVlID0gW107XG4vL25hbWVkIG5leHRUaWNrIGZvciBsZXNzIGNvbmZ1c2luZyBzdGFjayB0cmFjZXNcbmZ1bmN0aW9uIG5leHRUaWNrKCkge1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBpLCBvbGRRdWV1ZTtcbiAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGxlbikge1xuICAgIG9sZFF1ZXVlID0gcXVldWU7XG4gICAgcXVldWUgPSBbXTtcbiAgICBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgb2xkUXVldWVbaV0oKTtcbiAgICB9XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG4gIGRyYWluaW5nID0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW1tZWRpYXRlO1xuZnVuY3Rpb24gaW1tZWRpYXRlKHRhc2spIHtcbiAgaWYgKHF1ZXVlLnB1c2godGFzaykgPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgc2NoZWR1bGVEcmFpbigpO1xuICB9XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7fV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgaW1tZWRpYXRlID0gX2RlcmVxXygxKTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIElOVEVSTkFMKCkge31cblxudmFyIGhhbmRsZXJzID0ge307XG5cbnZhciBSRUpFQ1RFRCA9IFsnUkVKRUNURUQnXTtcbnZhciBGVUxGSUxMRUQgPSBbJ0ZVTEZJTExFRCddO1xudmFyIFBFTkRJTkcgPSBbJ1BFTkRJTkcnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICB0aGlzLnN0YXRlID0gUEVORElORztcbiAgdGhpcy5xdWV1ZSA9IFtdO1xuICB0aGlzLm91dGNvbWUgPSB2b2lkIDA7XG4gIGlmIChyZXNvbHZlciAhPT0gSU5URVJOQUwpIHtcbiAgICBzYWZlbHlSZXNvbHZlVGhlbmFibGUodGhpcywgcmVzb2x2ZXIpO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnN0YXRlID09PSBGVUxGSUxMRUQgfHxcbiAgICB0eXBlb2Ygb25SZWplY3RlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoSU5URVJOQUwpO1xuICBpZiAodGhpcy5zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHZhciByZXNvbHZlciA9IHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcbiAgICB1bndyYXAocHJvbWlzZSwgcmVzb2x2ZXIsIHRoaXMub3V0Y29tZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKG5ldyBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcbmZ1bmN0aW9uIFF1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IG9uRnVsZmlsbGVkO1xuICAgIHRoaXMuY2FsbEZ1bGZpbGxlZCA9IHRoaXMub3RoZXJDYWxsRnVsZmlsbGVkO1xuICB9XG4gIGlmICh0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub25SZWplY3RlZCA9IG9uUmVqZWN0ZWQ7XG4gICAgdGhpcy5jYWxsUmVqZWN0ZWQgPSB0aGlzLm90aGVyQ2FsbFJlamVjdGVkO1xuICB9XG59XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaGFuZGxlcnMucmVzb2x2ZSh0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLm90aGVyQ2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB1bndyYXAodGhpcy5wcm9taXNlLCB0aGlzLm9uRnVsZmlsbGVkLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5jYWxsUmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaGFuZGxlcnMucmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUub3RoZXJDYWxsUmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdW53cmFwKHRoaXMucHJvbWlzZSwgdGhpcy5vblJlamVjdGVkLCB2YWx1ZSk7XG59O1xuXG5mdW5jdGlvbiB1bndyYXAocHJvbWlzZSwgZnVuYywgdmFsdWUpIHtcbiAgaW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV0dXJuVmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVyblZhbHVlID0gZnVuYyh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gICAgaWYgKHJldHVyblZhbHVlID09PSBwcm9taXNlKSB7XG4gICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignQ2Fubm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGl0c2VsZicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuaGFuZGxlcnMucmVzb2x2ZSA9IGZ1bmN0aW9uIChzZWxmLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goZ2V0VGhlbiwgdmFsdWUpO1xuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiBoYW5kbGVycy5yZWplY3Qoc2VsZiwgcmVzdWx0LnZhbHVlKTtcbiAgfVxuICB2YXIgdGhlbmFibGUgPSByZXN1bHQudmFsdWU7XG5cbiAgaWYgKHRoZW5hYmxlKSB7XG4gICAgc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLnN0YXRlID0gRlVMRklMTEVEO1xuICAgIHNlbGYub3V0Y29tZSA9IHZhbHVlO1xuICAgIHZhciBpID0gLTE7XG4gICAgdmFyIGxlbiA9IHNlbGYucXVldWUubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgIHNlbGYucXVldWVbaV0uY2FsbEZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzZWxmO1xufTtcbmhhbmRsZXJzLnJlamVjdCA9IGZ1bmN0aW9uIChzZWxmLCBlcnJvcikge1xuICBzZWxmLnN0YXRlID0gUkVKRUNURUQ7XG4gIHNlbGYub3V0Y29tZSA9IGVycm9yO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgbGVuID0gc2VsZi5xdWV1ZS5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBzZWxmLnF1ZXVlW2ldLmNhbGxSZWplY3RlZChlcnJvcik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5mdW5jdGlvbiBnZXRUaGVuKG9iaikge1xuICAvLyBNYWtlIHN1cmUgd2Ugb25seSBhY2Nlc3MgdGhlIGFjY2Vzc29yIG9uY2UgYXMgcmVxdWlyZWQgYnkgdGhlIHNwZWNcbiAgdmFyIHRoZW4gPSBvYmogJiYgb2JqLnRoZW47XG4gIGlmIChvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFwcHlUaGVuKCkge1xuICAgICAgdGhlbi5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpIHtcbiAgLy8gRWl0aGVyIGZ1bGZpbGwsIHJlamVjdCBvciByZWplY3Qgd2l0aCBlcnJvclxuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIG9uRXJyb3IodmFsdWUpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgaGFuZGxlcnMucmVqZWN0KHNlbGYsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU3VjY2Vzcyh2YWx1ZSkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBoYW5kbGVycy5yZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRvVW53cmFwKCkge1xuICAgIHRoZW5hYmxlKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godHJ5VG9VbndyYXApO1xuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIG9uRXJyb3IocmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaChmdW5jLCB2YWx1ZSkge1xuICB2YXIgb3V0ID0ge307XG4gIHRyeSB7XG4gICAgb3V0LnZhbHVlID0gZnVuYyh2YWx1ZSk7XG4gICAgb3V0LnN0YXR1cyA9ICdzdWNjZXNzJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIG91dC5zdGF0dXMgPSAnZXJyb3InO1xuICAgIG91dC52YWx1ZSA9IGU7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuUHJvbWlzZS5yZXNvbHZlID0gcmVzb2x2ZTtcbmZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgdGhpcykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaGFuZGxlcnMucmVzb2x2ZShuZXcgdGhpcyhJTlRFUk5BTCksIHZhbHVlKTtcbn1cblxuUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG5mdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG59XG5cblByb21pc2UuYWxsID0gYWxsO1xuZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIHJlc29sdmVkID0gMDtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIGFsbFJlc29sdmVyKGl0ZXJhYmxlW2ldLCBpKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbiAgZnVuY3Rpb24gYWxsUmVzb2x2ZXIodmFsdWUsIGkpIHtcbiAgICBzZWxmLnJlc29sdmUodmFsdWUpLnRoZW4ocmVzb2x2ZUZyb21BbGwsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiByZXNvbHZlRnJvbUFsbChvdXRWYWx1ZSkge1xuICAgICAgdmFsdWVzW2ldID0gb3V0VmFsdWU7XG4gICAgICBpZiAoKytyZXNvbHZlZCA9PT0gbGVuICYmICFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Qcm9taXNlLnJhY2UgPSByYWNlO1xuZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcmFibGUpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYW4gYXJyYXknKSk7XG4gIH1cblxuICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XG4gIH1cblxuICB2YXIgaSA9IC0xO1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgcmVzb2x2ZXIoaXRlcmFibGVbaV0pO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xuICBmdW5jdGlvbiByZXNvbHZlcih2YWx1ZSkge1xuICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG59LHtcIjFcIjoxfV0sMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG5pZiAodHlwZW9mIGdsb2JhbC5Qcm9taXNlICE9PSAnZnVuY3Rpb24nKSB7XG4gIGdsb2JhbC5Qcm9taXNlID0gX2RlcmVxXygyKTtcbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHtcIjJcIjoyfV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gZ2V0SURCKCkge1xuICAgIC8qIGdsb2JhbCBpbmRleGVkREIsd2Via2l0SW5kZXhlZERCLG1vekluZGV4ZWREQixPSW5kZXhlZERCLG1zSW5kZXhlZERCICovXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2Via2l0SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHdlYmtpdEluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vekluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBtb3pJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBPSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIE9JbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc0luZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBtc0luZGV4ZWREQjtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxudmFyIGlkYiA9IGdldElEQigpO1xuXG5mdW5jdGlvbiBpc0luZGV4ZWREQlZhbGlkKCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgSW5kZXhlZERCOyBmYWxsIGJhY2sgdG8gdmVuZG9yLXByZWZpeGVkIHZlcnNpb25zXG4gICAgICAgIC8vIGlmIG5lZWRlZC5cbiAgICAgICAgaWYgKCFpZGIgfHwgIWlkYi5vcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgbWltaWMgUG91Y2hEQiBoZXJlO1xuICAgICAgICAvL1xuICAgICAgICAvLyBXZSB0ZXN0IGZvciBvcGVuRGF0YWJhc2UgYmVjYXVzZSBJRSBNb2JpbGUgaWRlbnRpZmllcyBpdHNlbGZcbiAgICAgICAgLy8gYXMgU2FmYXJpLiBPaCB0aGUgbHVsei4uLlxuICAgICAgICB2YXIgaXNTYWZhcmkgPSB0eXBlb2Ygb3BlbkRhdGFiYXNlICE9PSAndW5kZWZpbmVkJyAmJiAvKFNhZmFyaXxpUGhvbmV8aVBhZHxpUG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhL0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhL0JsYWNrQmVycnkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKTtcblxuICAgICAgICB2YXIgaGFzRmV0Y2ggPSB0eXBlb2YgZmV0Y2ggPT09ICdmdW5jdGlvbicgJiYgZmV0Y2gudG9TdHJpbmcoKS5pbmRleE9mKCdbbmF0aXZlIGNvZGUnKSAhPT0gLTE7XG5cbiAgICAgICAgLy8gU2FmYXJpIDwxMC4xIGRvZXMgbm90IG1lZXQgb3VyIHJlcXVpcmVtZW50cyBmb3IgSURCIHN1cHBvcnRcbiAgICAgICAgLy8gKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3BvdWNoZGIvcG91Y2hkYi9pc3N1ZXMvNTU3MikuXG4gICAgICAgIC8vIFNhZmFyaSAxMC4xIHNoaXBwZWQgd2l0aCBmZXRjaCwgd2UgY2FuIHVzZSB0aGF0IHRvIGRldGVjdCBpdC5cbiAgICAgICAgLy8gTm90ZTogdGhpcyBjcmVhdGVzIGlzc3VlcyB3aXRoIGB3aW5kb3cuZmV0Y2hgIHBvbHlmaWxscyBhbmRcbiAgICAgICAgLy8gb3ZlcnJpZGVzOyBzZWU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NhbEZvcmFnZS9sb2NhbEZvcmFnZS9pc3N1ZXMvODU2XG4gICAgICAgIHJldHVybiAoIWlzU2FmYXJpIHx8IGhhc0ZldGNoKSAmJiB0eXBlb2YgaW5kZXhlZERCICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAvLyBzb21lIG91dGRhdGVkIGltcGxlbWVudGF0aW9ucyBvZiBJREIgdGhhdCBhcHBlYXIgb24gU2Ftc3VuZ1xuICAgICAgICAvLyBhbmQgSFRDIEFuZHJvaWQgZGV2aWNlcyA8NC40IGFyZSBtaXNzaW5nIElEQktleVJhbmdlXG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzEyOFxuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8yNzJcbiAgICAgICAgdHlwZW9mIElEQktleVJhbmdlICE9PSAndW5kZWZpbmVkJztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8vIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBuYXRpdmUgQmxvYiBjb25zdHJ1Y3Rvci4gKGkuZS5cbi8vIG9sZCBRdFdlYktpdCB2ZXJzaW9ucywgYXQgbGVhc3QpLlxuLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4vLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG5mdW5jdGlvbiBjcmVhdGVCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKSB7XG4gICAgLyogZ2xvYmFsIEJsb2JCdWlsZGVyLE1TQmxvYkJ1aWxkZXIsTW96QmxvYkJ1aWxkZXIsV2ViS2l0QmxvYkJ1aWxkZXIgKi9cbiAgICBwYXJ0cyA9IHBhcnRzIHx8IFtdO1xuICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihwYXJ0cywgcHJvcGVydGllcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZS5uYW1lICE9PSAnVHlwZUVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgQnVpbGRlciA9IHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iQnVpbGRlciA6IHR5cGVvZiBNU0Jsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1TQmxvYkJ1aWxkZXIgOiB0eXBlb2YgTW96QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTW96QmxvYkJ1aWxkZXIgOiBXZWJLaXRCbG9iQnVpbGRlcjtcbiAgICAgICAgdmFyIGJ1aWxkZXIgPSBuZXcgQnVpbGRlcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBidWlsZGVyLmFwcGVuZChwYXJ0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIuZ2V0QmxvYihwcm9wZXJ0aWVzLnR5cGUpO1xuICAgIH1cbn1cblxuLy8gVGhpcyBpcyBDb21tb25KUyBiZWNhdXNlIGxpZSBpcyBhbiBleHRlcm5hbCBkZXBlbmRlbmN5LCBzbyBSb2xsdXBcbi8vIGNhbiBqdXN0IGlnbm9yZSBpdC5cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBJbiB0aGUgXCJub3Byb21pc2VzXCIgYnVpbGQgdGhpcyB3aWxsIGp1c3QgdGhyb3cgaWYgeW91IGRvbid0IGhhdmVcbiAgICAvLyBhIGdsb2JhbCBwcm9taXNlIG9iamVjdCwgYnV0IGl0IHdvdWxkIHRocm93IGFueXdheSBsYXRlci5cbiAgICBfZGVyZXFfKDMpO1xufVxudmFyIFByb21pc2UkMSA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVycm9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZVtcImNhdGNoXCJdKGVycm9yQ2FsbGJhY2spO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplS2V5KGtleSkge1xuICAgIC8vIENhc3QgdGhlIGtleSB0byBhIHN0cmluZywgYXMgdGhhdCdzIGFsbCB3ZSBjYW4gc2V0IGFzIGEga2V5LlxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLndhcm4oa2V5ICsgJyB1c2VkIGFzIGEga2V5LCBidXQgaXQgaXMgbm90IGEgc3RyaW5nLicpO1xuICAgICAgICBrZXkgPSBTdHJpbmcoa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBnZXRDYWxsYmFjaygpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiB0eXBlb2YgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICB9XG59XG5cbi8vIFNvbWUgY29kZSBvcmlnaW5hbGx5IGZyb20gYXN5bmNfc3RvcmFnZS5qcyBpblxuLy8gW0dhaWFdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhLWIyZy9nYWlhKS5cblxudmFyIERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUgPSAnbG9jYWwtZm9yYWdlLWRldGVjdC1ibG9iLXN1cHBvcnQnO1xudmFyIHN1cHBvcnRzQmxvYnMgPSB2b2lkIDA7XG52YXIgZGJDb250ZXh0cyA9IHt9O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gVHJhbnNhY3Rpb24gTW9kZXNcbnZhciBSRUFEX09OTFkgPSAncmVhZG9ubHknO1xudmFyIFJFQURfV1JJVEUgPSAncmVhZHdyaXRlJztcblxuLy8gVHJhbnNmb3JtIGEgYmluYXJ5IHN0cmluZyB0byBhbiBhcnJheSBidWZmZXIsIGJlY2F1c2Ugb3RoZXJ3aXNlXG4vLyB3ZWlyZCBzdHVmZiBoYXBwZW5zIHdoZW4geW91IHRyeSB0byB3b3JrIHdpdGggdGhlIGJpbmFyeSBzdHJpbmcgZGlyZWN0bHkuXG4vLyBJdCBpcyBrbm93bi5cbi8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDk2NzY0Ny8gKGNvbnRpbnVlcyBvbiBuZXh0IGxpbmUpXG4vLyBlbmNvZGUtZGVjb2RlLWltYWdlLXdpdGgtYmFzZTY0LWJyZWFrcy1pbWFnZSAoMjAxMy0wNC0yMSlcbmZ1bmN0aW9uIF9iaW5TdHJpbmdUb0FycmF5QnVmZmVyKGJpbikge1xuICAgIHZhciBsZW5ndGggPSBiaW4ubGVuZ3RoO1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoKTtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycltpXSA9IGJpbi5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuXG4vL1xuLy8gQmxvYnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gYWxsIHZlcnNpb25zIG9mIEluZGV4ZWREQiwgbm90YWJseVxuLy8gQ2hyb21lIDwzNyBhbmQgQW5kcm9pZCA8NS4gSW4gdGhvc2UgdmVyc2lvbnMsIHN0b3JpbmcgYSBibG9iIHdpbGwgdGhyb3cuXG4vL1xuLy8gVmFyaW91cyBvdGhlciBibG9iIGJ1Z3MgZXhpc3QgaW4gQ2hyb21lIHYzNy00MiAoaW5jbHVzaXZlKS5cbi8vIERldGVjdGluZyB0aGVtIGlzIGV4cGVuc2l2ZSBhbmQgY29uZnVzaW5nIHRvIHVzZXJzLCBhbmQgQ2hyb21lIDM3LTQyXG4vLyBpcyBhdCB2ZXJ5IGxvdyB1c2FnZSB3b3JsZHdpZGUsIHNvIHdlIGRvIGEgaGFja3kgdXNlckFnZW50IGNoZWNrIGluc3RlYWQuXG4vL1xuLy8gY29udGVudC10eXBlIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQwODEyMFxuLy8gNDA0IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzkxNlxuLy8gRmlsZVJlYWRlciBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc4MzZcbi8vXG4vLyBDb2RlIGJvcnJvd2VkIGZyb20gUG91Y2hEQi4gU2VlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvdWNoZGIvcG91Y2hkYi9ibG9iL21hc3Rlci9wYWNrYWdlcy9ub2RlX21vZHVsZXMvcG91Y2hkYi1hZGFwdGVyLWlkYi9zcmMvYmxvYlN1cHBvcnQuanNcbi8vXG5mdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydFdpdGhvdXRDYWNoaW5nKGlkYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHZhciB0eG4gPSBpZGIudHJhbnNhY3Rpb24oREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSwgUkVBRF9XUklURSk7XG4gICAgICAgIHZhciBibG9iID0gY3JlYXRlQmxvYihbJyddKTtcbiAgICAgICAgdHhuLm9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpLnB1dChibG9iLCAna2V5Jyk7XG5cbiAgICAgICAgdHhuLm9uYWJvcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHRyYW5zYWN0aW9uIGFib3J0cyBub3cgaXRzIGR1ZSB0byBub3QgYmVpbmcgYWJsZSB0b1xuICAgICAgICAgICAgLy8gd3JpdGUgdG8gdGhlIGRhdGFiYXNlLCBsaWtlbHkgZHVlIHRvIHRoZSBkaXNrIGJlaW5nIGZ1bGxcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0eG4ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZEVkZ2UgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLyk7XG4gICAgICAgICAgICAvLyBNUyBFZGdlIHByZXRlbmRzIHRvIGJlIENocm9tZSA0MjpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaGg4NjkzMDElMjh2PXZzLjg1JTI5LmFzcHhcbiAgICAgICAgICAgIHJlc29sdmUobWF0Y2hlZEVkZ2UgfHwgIW1hdGNoZWRDaHJvbWUgfHwgcGFyc2VJbnQobWF0Y2hlZENocm9tZVsxXSwgMTApID49IDQzKTtcbiAgICAgICAgfTtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlcnJvciwgc28gYXNzdW1lIHVuc3VwcG9ydGVkXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9jaGVja0Jsb2JTdXBwb3J0KGlkYikge1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNCbG9icyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZShzdXBwb3J0c0Jsb2JzKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jaGVja0Jsb2JTdXBwb3J0V2l0aG91dENhY2hpbmcoaWRiKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzdXBwb3J0c0Jsb2JzID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Jsb2JzO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gQ3JlYXRlIGEgZGVmZXJyZWQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBkYXRhYmFzZSBvcGVyYXRpb24uXG4gICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0ge307XG5cbiAgICBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICAvLyBFbnF1ZXVlIHRoZSBkZWZlcnJlZCBvcGVyYXRpb24uXG4gICAgZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wdXNoKGRlZmVycmVkT3BlcmF0aW9uKTtcblxuICAgIC8vIENoYWluIGl0cyBwcm9taXNlIHRvIHRoZSBkYXRhYmFzZSByZWFkaW5lc3MuXG4gICAgaWYgKCFkYkNvbnRleHQuZGJSZWFkeSkge1xuICAgICAgICBkYkNvbnRleHQuZGJSZWFkeSA9IGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGJDb250ZXh0LmRiUmVhZHkgPSBkYkNvbnRleHQuZGJSZWFkeS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9hZHZhbmNlUmVhZGluZXNzKGRiSW5mbykge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIERlcXVldWUgYSBkZWZlcnJlZCBvcGVyYXRpb24uXG4gICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0gZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wb3AoKTtcblxuICAgIC8vIFJlc29sdmUgaXRzIHByb21pc2UgKHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRhdGFiYXNlIHJlYWRpbmVzc1xuICAgIC8vIGNoYWluIG9mIHByb21pc2VzKS5cbiAgICBpZiAoZGVmZXJyZWRPcGVyYXRpb24pIHtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9yZWplY3RSZWFkaW5lc3MoZGJJbmZvLCBlcnIpIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBEZXF1ZXVlIGEgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucG9wKCk7XG5cbiAgICAvLyBSZWplY3QgaXRzIHByb21pc2UgKHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRhdGFiYXNlIHJlYWRpbmVzc1xuICAgIC8vIGNoYWluIG9mIHByb21pc2VzKS5cbiAgICBpZiAoZGVmZXJyZWRPcGVyYXRpb24pIHtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVqZWN0KGVycik7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2dldENvbm5lY3Rpb24oZGJJbmZvLCB1cGdyYWRlTmVlZGVkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdIHx8IGNyZWF0ZURiQ29udGV4dCgpO1xuXG4gICAgICAgIGlmIChkYkluZm8uZGIpIHtcbiAgICAgICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICAgICAgX2RlZmVyUmVhZGluZXNzKGRiSW5mbyk7XG4gICAgICAgICAgICAgICAgZGJJbmZvLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGRiSW5mby5kYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGJBcmdzID0gW2RiSW5mby5uYW1lXTtcblxuICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgZGJBcmdzLnB1c2goZGJJbmZvLnZlcnNpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wZW5yZXEgPSBpZGIub3Blbi5hcHBseShpZGIsIGRiQXJncyk7XG5cbiAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIG9wZW5yZXEub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSBvcGVucmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShkYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2xkVmVyc2lvbiA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRlZCB3aGVuIHN1cHBvcnQgZm9yIGJsb2Igc2hpbXMgd2FzIGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleC5uYW1lID09PSAnQ29uc3RyYWludEVycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZGF0YWJhc2UgXCInICsgZGJJbmZvLm5hbWUgKyAnXCInICsgJyBoYXMgYmVlbiB1cGdyYWRlZCBmcm9tIHZlcnNpb24gJyArIGUub2xkVmVyc2lvbiArICcgdG8gdmVyc2lvbiAnICsgZS5uZXdWZXJzaW9uICsgJywgYnV0IHRoZSBzdG9yYWdlIFwiJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnXCIgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmVqZWN0KG9wZW5yZXEuZXJyb3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG9wZW5yZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShvcGVucmVxLnJlc3VsdCk7XG4gICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhkYkluZm8pO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykge1xuICAgIHJldHVybiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gX2lzVXBncmFkZU5lZWRlZChkYkluZm8sIGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgaWYgKCFkYkluZm8uZGIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGlzTmV3U3RvcmUgPSAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgdmFyIGlzRG93bmdyYWRlID0gZGJJbmZvLnZlcnNpb24gPCBkYkluZm8uZGIudmVyc2lvbjtcbiAgICB2YXIgaXNVcGdyYWRlID0gZGJJbmZvLnZlcnNpb24gPiBkYkluZm8uZGIudmVyc2lvbjtcblxuICAgIGlmIChpc0Rvd25ncmFkZSkge1xuICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBpcyBub3QgdGhlIGRlZmF1bHQgb25lXG4gICAgICAgIC8vIHRoZW4gd2FybiBmb3IgaW1wb3NzaWJsZSBkb3duZ3JhZGUuXG4gICAgICAgIGlmIChkYkluZm8udmVyc2lvbiAhPT0gZGVmYXVsdFZlcnNpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRhdGFiYXNlIFwiJyArIGRiSW5mby5uYW1lICsgJ1wiJyArIFwiIGNhbid0IGJlIGRvd25ncmFkZWQgZnJvbSB2ZXJzaW9uIFwiICsgZGJJbmZvLmRiLnZlcnNpb24gKyAnIHRvIHZlcnNpb24gJyArIGRiSW5mby52ZXJzaW9uICsgJy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbGlnbiB0aGUgdmVyc2lvbnMgdG8gcHJldmVudCBlcnJvcnMuXG4gICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb247XG4gICAgfVxuXG4gICAgaWYgKGlzVXBncmFkZSB8fCBpc05ld1N0b3JlKSB7XG4gICAgICAgIC8vIElmIHRoZSBzdG9yZSBpcyBuZXcgdGhlbiBpbmNyZW1lbnQgdGhlIHZlcnNpb24gKGlmIG5lZWRlZCkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGFuIFwidXBncmFkZW5lZWRlZFwiIGV2ZW50IHdoaWNoIGlzIHJlcXVpcmVkXG4gICAgICAgIC8vIGZvciBjcmVhdGluZyBhIHN0b3JlLlxuICAgICAgICBpZiAoaXNOZXdTdG9yZSkge1xuICAgICAgICAgICAgdmFyIGluY1ZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICBpZiAoaW5jVmVyc2lvbiA+IGRiSW5mby52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBpbmNWZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlbmNvZGUgYSBibG9iIGZvciBpbmRleGVkZGIgZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnQgYmxvYnNcbmZ1bmN0aW9uIF9lbmNvZGVCbG9iKGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgYmFzZTY0ID0gYnRvYShlLnRhcmdldC5yZXN1bHQgfHwgJycpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgX19sb2NhbF9mb3JhZ2VfZW5jb2RlZF9ibG9iOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGJhc2U2NCxcbiAgICAgICAgICAgICAgICB0eXBlOiBibG9iLnR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGJsb2IpO1xuICAgIH0pO1xufVxuXG4vLyBkZWNvZGUgYW4gZW5jb2RlZCBibG9iXG5mdW5jdGlvbiBfZGVjb2RlQmxvYihlbmNvZGVkQmxvYikge1xuICAgIHZhciBhcnJheUJ1ZmYgPSBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihhdG9iKGVuY29kZWRCbG9iLmRhdGEpKTtcbiAgICByZXR1cm4gY3JlYXRlQmxvYihbYXJyYXlCdWZmXSwgeyB0eXBlOiBlbmNvZGVkQmxvYi50eXBlIH0pO1xufVxuXG4vLyBpcyB0aGlzIG9uZSBvZiBvdXIgZmFuY3kgZW5jb2RlZCBibG9icz9cbmZ1bmN0aW9uIF9pc0VuY29kZWRCbG9iKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLl9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjtcbn1cblxuLy8gU3BlY2lhbGl6ZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gYnkgbWFraW5nIGl0IGRlcGVuZGVudFxuLy8gb24gdGhlIGN1cnJlbnQgZGF0YWJhc2Ugb3BlcmF0aW9ucy4gVGh1cywgdGhlIGRyaXZlciB3aWxsIGJlIGFjdHVhbGx5XG4vLyByZWFkeSB3aGVuIGl0J3MgYmVlbiBpbml0aWFsaXplZCAoZGVmYXVsdCkgKmFuZCogdGhlcmUgYXJlIG5vIHBlbmRpbmdcbi8vIG9wZXJhdGlvbnMgb24gdGhlIGRhdGFiYXNlIChpbml0aWF0ZWQgYnkgc29tZSBvdGhlciBpbnN0YW5jZXMpLlxuZnVuY3Rpb24gX2Z1bGx5UmVhZHkoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYuX2luaXRSZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tzZWxmLl9kYkluZm8ubmFtZV07XG5cbiAgICAgICAgaWYgKGRiQ29udGV4dCAmJiBkYkNvbnRleHQuZGJSZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiQ29udGV4dC5kYlJlYWR5O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFRyeSB0byBlc3RhYmxpc2ggYSBuZXcgZGIgY29ubmVjdGlvbiB0byByZXBsYWNlIHRoZVxuLy8gY3VycmVudCBvbmUgd2hpY2ggaXMgYnJva2VuIChpLmUuIGV4cGVyaWVuY2luZ1xuLy8gSW52YWxpZFN0YXRlRXJyb3Igd2hpbGUgY3JlYXRpbmcgYSB0cmFuc2FjdGlvbikuXG5mdW5jdGlvbiBfdHJ5UmVjb25uZWN0KGRiSW5mbykge1xuICAgIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pO1xuXG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgIGlmIChmb3JhZ2UuX2RiSW5mby5kYikge1xuICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkYkluZm8uZGIgPSBudWxsO1xuXG4gICAgcmV0dXJuIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICBkYkluZm8uZGIgPSBkYjtcbiAgICAgICAgaWYgKF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhdGVzdCBkYiByZWZlcmVuY2VcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgZGIgd2FzIHVwZ3JhZGVkXG4gICAgICAgIGRiSW5mby5kYiA9IGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcmFnZXNbaV0uX2RiSW5mby5kYiA9IGRiO1xuICAgICAgICB9XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF9yZWplY3RSZWFkaW5lc3MoZGJJbmZvLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5cbi8vIEZGIGRvZXNuJ3QgbGlrZSBQcm9taXNlcyAobWljcm8tdGFza3MpIGFuZCBJRERCIHN0b3JlIG9wZXJhdGlvbnMsXG4vLyBzbyB3ZSBoYXZlIHRvIGRvIGl0IHdpdGggY2FsbGJhY2tzXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzKSB7XG4gICAgaWYgKHJldHJpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXRyaWVzID0gMTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICB2YXIgdHggPSBkYkluZm8uZGIudHJhbnNhY3Rpb24oZGJJbmZvLnN0b3JlTmFtZSwgbW9kZSk7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHR4KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHJldHJpZXMgPiAwICYmICghZGJJbmZvLmRiIHx8IGVyci5uYW1lID09PSAnSW52YWxpZFN0YXRlRXJyb3InIHx8IGVyci5uYW1lID09PSAnTm90Rm91bmRFcnJvcicpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InICYmICFkYkluZm8uZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhkYkluZm8uc3RvcmVOYW1lKSAmJiBkYkluZm8udmVyc2lvbiA8PSBkYkluZm8uZGIudmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgZGIgdmVyc2lvbiwgdG8gY3JlYXRlIHRoZSBuZXcgT2JqZWN0U3RvcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdHJ5UmVjb25uZWN0KGRiSW5mbykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKGRiSW5mbywgbW9kZSwgY2FsbGJhY2ssIHJldHJpZXMgLSAxKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURiQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBSdW5uaW5nIGxvY2FsRm9yYWdlcyBzaGFyaW5nIGEgZGF0YWJhc2UuXG4gICAgICAgIGZvcmFnZXM6IFtdLFxuICAgICAgICAvLyBTaGFyZWQgZGF0YWJhc2UuXG4gICAgICAgIGRiOiBudWxsLFxuICAgICAgICAvLyBEYXRhYmFzZSByZWFkaW5lc3MgKHByb21pc2UpLlxuICAgICAgICBkYlJlYWR5OiBudWxsLFxuICAgICAgICAvLyBEZWZlcnJlZCBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZS5cbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb25zOiBbXVxuICAgIH07XG59XG5cbi8vIE9wZW4gdGhlIEluZGV4ZWREQiBkYXRhYmFzZSAoYXV0b21hdGljYWxseSBjcmVhdGVzIG9uZSBpZiBvbmUgZGlkbid0XG4vLyBwcmV2aW91c2x5IGV4aXN0KSwgdXNpbmcgYW55IG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG5mdW5jdGlvbiBfaW5pdFN0b3JhZ2Uob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge1xuICAgICAgICBkYjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgY29udGV4dCBvZiB0aGUgZGF0YWJhc2U7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gLi4ub3IgY3JlYXRlIGEgbmV3IGNvbnRleHQuXG4gICAgaWYgKCFkYkNvbnRleHQpIHtcbiAgICAgICAgZGJDb250ZXh0ID0gY3JlYXRlRGJDb250ZXh0KCk7XG4gICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBuZXcgY29udGV4dCBpbiB0aGUgZ2xvYmFsIGNvbnRhaW5lci5cbiAgICAgICAgZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gPSBkYkNvbnRleHQ7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgaXRzZWxmIGFzIGEgcnVubmluZyBsb2NhbEZvcmFnZSBpbiB0aGUgY3VycmVudCBjb250ZXh0LlxuICAgIGRiQ29udGV4dC5mb3JhZ2VzLnB1c2goc2VsZik7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBkZWZhdWx0IGByZWFkeSgpYCBmdW5jdGlvbiB3aXRoIHRoZSBzcGVjaWFsaXplZCBvbmUuXG4gICAgaWYgKCFzZWxmLl9pbml0UmVhZHkpIHtcbiAgICAgICAgc2VsZi5faW5pdFJlYWR5ID0gc2VsZi5yZWFkeTtcbiAgICAgICAgc2VsZi5yZWFkeSA9IF9mdWxseVJlYWR5O1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBpbml0aWFsaXphdGlvbiBzdGF0ZXMgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBpbml0UHJvbWlzZXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGlnbm9yZUVycm9ycygpIHtcbiAgICAgICAgLy8gRG9uJ3QgaGFuZGxlIGVycm9ycyBoZXJlLFxuICAgICAgICAvLyBqdXN0IG1ha2VzIHN1cmUgcmVsYXRlZCBsb2NhbEZvcmFnZXMgYXJlbid0IHBlbmRpbmcuXG4gICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGJDb250ZXh0LmZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGZvcmFnZSA9IGRiQ29udGV4dC5mb3JhZ2VzW2pdO1xuICAgICAgICBpZiAoZm9yYWdlICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAvLyBEb24ndCB3YWl0IGZvciBpdHNlbGYuLi5cbiAgICAgICAgICAgIGluaXRQcm9taXNlcy5wdXNoKGZvcmFnZS5faW5pdFJlYWR5KClbXCJjYXRjaFwiXShpZ25vcmVFcnJvcnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSBzbmFwc2hvdCBvZiB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMuXG4gICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcy5zbGljZSgwKTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGNvbm5lY3Rpb24gcHJvY2VzcyBvbmx5IHdoZW5cbiAgICAvLyBhbGwgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgIHJldHVybiBQcm9taXNlJDEuYWxsKGluaXRQcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiQ29udGV4dC5kYjtcbiAgICAgICAgLy8gR2V0IHRoZSBjb25uZWN0aW9uIG9yIG9wZW4gYSBuZXcgb25lIHdpdGhvdXQgdXBncmFkZS5cbiAgICAgICAgcmV0dXJuIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICBkYkluZm8uZGIgPSBkYjtcbiAgICAgICAgaWYgKF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBzZWxmLl9kZWZhdWx0Q29uZmlnLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAvLyBSZW9wZW4gdGhlIGRhdGFiYXNlIGZvciB1cGdyYWRpbmcuXG4gICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYjtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICAvLyBTaGFyZSB0aGUgZmluYWwgY29ubmVjdGlvbiBhbW9uZ3N0IHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZvcmFnZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2tdO1xuICAgICAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgICAgIC8vIFNlbGYgaXMgYWxyZWFkeSB1cC10by1kYXRlLlxuICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gZGJJbmZvLmRiO1xuICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBkYkluZm8udmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuZ2V0KGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaXNFbmNvZGVkQmxvYih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9kZWNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIEl0ZXJhdGUgb3ZlciBhbGwgaXRlbXMgc3RvcmVkIGluIGRhdGFiYXNlLlxuZnVuY3Rpb24gaXRlcmF0ZShpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5DdXJzb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaXNFbmNvZGVkQmxvYih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvcih2YWx1ZSwgY3Vyc29yLmtleSwgaXRlcmF0aW9uTnVtYmVyKyspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaXRlcmF0b3IgY2FsbGJhY2sgcmV0dXJucyBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAobm9uLWB1bmRlZmluZWRgKSB2YWx1ZSwgdGhlbiB3ZSBzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGl0ZXJhdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW0oa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBkYkluZm87XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGlmICh0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0Jsb2JTdXBwb3J0KGRiSW5mby5kYikudGhlbihmdW5jdGlvbiAoYmxvYlN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9lbmNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVhc29uIHdlIGRvbid0IF9zYXZlXyBudWxsIGlzIGJlY2F1c2UgSUUgMTAgZG9lc1xuICAgICAgICAgICAgICAgICAgICAvLyBub3Qgc3VwcG9ydCBzYXZpbmcgdGhlIGBudWxsYCB0eXBlIGluIEluZGV4ZWREQi4gSG93XG4gICAgICAgICAgICAgICAgICAgIC8vIGlyb25pYywgZ2l2ZW4gdGhlIGJ1ZyBiZWxvdyFcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTYxXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXN0IHRvIHVuZGVmaW5lZCBzbyB0aGUgdmFsdWUgcGFzc2VkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjay9wcm9taXNlIGlzIHRoZSBzYW1lIGFzIHdoYXQgb25lIHdvdWxkIGdldCBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGBnZXRJdGVtKClgIGxhdGVyLiBUaGlzIGxlYWRzIHRvIHNvbWUgd2VpcmRuZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoc2V0SXRlbSgnZm9vJywgdW5kZWZpbmVkKSB3aWxsIHJldHVybiBgbnVsbGApLCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90IG15IGZhdWx0IGxvY2FsU3RvcmFnZSBpcyBvdXIgYmFzZWxpbmUgYW5kIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgd2VpcmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgdXNlIGEgR3J1bnQgdGFzayB0byBtYWtlIHRoaXMgc2FmZSBmb3IgSUUgYW5kIHNvbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyc2lvbnMgb2YgQW5kcm9pZCAoaW5jbHVkaW5nIHRob3NlIHVzZWQgYnkgQ29yZG92YSkuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGx5IElFIHdvbid0IGxpa2UgYC5kZWxldGUoKWAgYW5kIHdpbGwgaW5zaXN0IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGBbJ2RlbGV0ZSddKClgLCBidXQgd2UgaGF2ZSBhIGJ1aWxkIHN0ZXAgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyBmaXhlcyB0aGlzIGZvciB1cyBub3cuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZVtcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3aWxsIGJlIGFsc28gYmUgYWJvcnRlZCBpZiB3ZSd2ZSBleGNlZWRlZCBvdXIgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBzcGFjZS5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aChjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXkobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAobiA8IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWR2YW5jZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5LZXlDdXJzb3IoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlcmUgd2VyZW4ndCBlbm91Z2gga2V5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0aGUgZmlyc3Qga2V5LCByZXR1cm4gaXQgaWYgdGhhdCdzIHdoYXQgdGhleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdhbnRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFkdmFuY2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgYXNrIHRoZSBjdXJzb3IgdG8gc2tpcCBhaGVhZCBuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2Uobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSBnZXQgaGVyZSwgd2UndmUgZ290IHRoZSBudGgga2V5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JbXCJjb250aW51ZVwiXSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaXNDdXJyZW50RGIgPSBvcHRpb25zLm5hbWUgPT09IGN1cnJlbnRDb25maWcubmFtZSAmJiBzZWxmLl9kYkluZm8uZGI7XG5cbiAgICAgICAgdmFyIGRiUHJvbWlzZSA9IGlzQ3VycmVudERiID8gUHJvbWlzZSQxLnJlc29sdmUoc2VsZi5fZGJJbmZvLmRiKSA6IF9nZXRPcmlnaW5hbENvbm5lY3Rpb24ob3B0aW9ucykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyb3BEQlByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5kZWxldGVEYXRhYmFzZShvcHRpb25zLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gcmVxLm9uYmxvY2tlZCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcERCUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhvcHRpb25zLnN0b3JlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWZXJzaW9uID0gZGIudmVyc2lvbiArIDE7XG5cbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gbmV3VmVyc2lvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJvcE9iamVjdFByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5vcGVuKG9wdGlvbnMubmFtZSwgbmV3VmVyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUob3B0aW9ucy5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BPYmplY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlMiA9IGZvcmFnZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9yYWdlMi5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlMi5fZGJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBhc3luY1N0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ2FzeW5jU3RvcmFnZScsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UsXG4gICAgX3N1cHBvcnQ6IGlzSW5kZXhlZERCVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlLFxuICAgIGdldEl0ZW06IGdldEl0ZW0sXG4gICAgc2V0SXRlbTogc2V0SXRlbSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBrZXk6IGtleSxcbiAgICBrZXlzOiBrZXlzLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlXG59O1xuXG5mdW5jdGlvbiBpc1dlYlNRTFZhbGlkKCkge1xuICAgIHJldHVybiB0eXBlb2Ygb3BlbkRhdGFiYXNlID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBTYWRseSwgdGhlIGJlc3Qgd2F5IHRvIHNhdmUgYmluYXJ5IGRhdGEgaW4gV2ViU1FML2xvY2FsU3RvcmFnZSBpcyBzZXJpYWxpemluZ1xuLy8gaXQgdG8gQmFzZTY0LCBzbyB0aGlzIGlzIGhvdyB3ZSBzdG9yZSBpdCB0byBwcmV2ZW50IHZlcnkgc3RyYW5nZSBlcnJvcnMgd2l0aCBsZXNzXG4vLyB2ZXJib3NlIHdheXMgb2YgYmluYXJ5IDwtPiBzdHJpbmcgZGF0YSBzdG9yYWdlLlxudmFyIEJBU0VfQ0hBUlMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbnZhciBCTE9CX1RZUEVfUFJFRklYID0gJ35+bG9jYWxfZm9yYWdlX3R5cGV+JztcbnZhciBCTE9CX1RZUEVfUFJFRklYX1JFR0VYID0gL15+fmxvY2FsX2ZvcmFnZV90eXBlfihbXn5dKyl+LztcblxudmFyIFNFUklBTElaRURfTUFSS0VSID0gJ19fbGZzY19fOic7XG52YXIgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVIubGVuZ3RoO1xuXG4vLyBPTUcgdGhlIHNlcmlhbGl6YXRpb25zIVxudmFyIFRZUEVfQVJSQVlCVUZGRVIgPSAnYXJiZic7XG52YXIgVFlQRV9CTE9CID0gJ2Jsb2InO1xudmFyIFRZUEVfSU5UOEFSUkFZID0gJ3NpMDgnO1xudmFyIFRZUEVfVUlOVDhBUlJBWSA9ICd1aTA4JztcbnZhciBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZID0gJ3VpYzgnO1xudmFyIFRZUEVfSU5UMTZBUlJBWSA9ICdzaTE2JztcbnZhciBUWVBFX0lOVDMyQVJSQVkgPSAnc2kzMic7XG52YXIgVFlQRV9VSU5UMTZBUlJBWSA9ICd1cjE2JztcbnZhciBUWVBFX1VJTlQzMkFSUkFZID0gJ3VpMzInO1xudmFyIFRZUEVfRkxPQVQzMkFSUkFZID0gJ2ZsMzInO1xudmFyIFRZUEVfRkxPQVQ2NEFSUkFZID0gJ2ZsNjQnO1xudmFyIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIICsgVFlQRV9BUlJBWUJVRkZFUi5sZW5ndGg7XG5cbnZhciB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZykge1xuICAgIC8vIEZpbGwgdGhlIHN0cmluZyBpbnRvIGEgQXJyYXlCdWZmZXIuXG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoICogMC43NTtcbiAgICB2YXIgbGVuID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGk7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChzZXJpYWxpemVkU3RyaW5nW3NlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaV0pO1xuICAgICAgICBlbmNvZGVkMiA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAxXSk7XG4gICAgICAgIGVuY29kZWQzID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDJdKTtcbiAgICAgICAgZW5jb2RlZDQgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgM10pO1xuXG4gICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG59XG5cbi8vIENvbnZlcnRzIGEgYnVmZmVyIHRvIGEgc3RyaW5nIHRvIHN0b3JlLCBzZXJpYWxpemVkLCBpbiB0aGUgYmFja2VuZFxuLy8gc3RvcmFnZSBsaWJyYXJ5LlxuZnVuY3Rpb24gYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XG4gICAgLy8gYmFzZTY0LWFycmF5YnVmZmVyXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgYmFzZTY0U3RyaW5nID0gJyc7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpXSA+PiAyXTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2ldICYgMykgPDwgNCB8IGJ5dGVzW2kgKyAxXSA+PiA0XTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyIHwgYnl0ZXNbaSArIDJdID4+IDZdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDIpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMSkgKyAnPSc7XG4gICAgfSBlbHNlIGlmIChieXRlcy5sZW5ndGggJSAzID09PSAxKSB7XG4gICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDIpICsgJz09JztcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xufVxuXG4vLyBTZXJpYWxpemUgYSB2YWx1ZSwgYWZ0ZXJ3YXJkcyBleGVjdXRpbmcgYSBjYWxsYmFjayAod2hpY2ggdXN1YWxseVxuLy8gaW5zdHJ1Y3RzIHRoZSBgc2V0SXRlbSgpYCBjYWxsYmFjay9wcm9taXNlIHRvIGJlIGV4ZWN1dGVkKS4gVGhpcyBpcyBob3dcbi8vIHdlIHN0b3JlIGJpbmFyeSBkYXRhIHdpdGggbG9jYWxTdG9yYWdlLlxuZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciB2YWx1ZVR5cGUgPSAnJztcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gdG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDYW5ub3QgdXNlIGB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyYCBvciBzdWNoIGhlcmUsIGFzIHRoZXNlXG4gICAgLy8gY2hlY2tzIGZhaWwgd2hlbiBydW5uaW5nIHRoZSB0ZXN0cyB1c2luZyBjYXNwZXIuanMuLi5cbiAgICAvL1xuICAgIC8vIFRPRE86IFNlZSB3aHkgdGhvc2UgdGVzdHMgZmFpbCBhbmQgdXNlIGEgYmV0dGVyIHNvbHV0aW9uLlxuICAgIGlmICh2YWx1ZSAmJiAodmFsdWVUeXBlID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nIHx8IHZhbHVlLmJ1ZmZlciAmJiB0b1N0cmluZyQxLmNhbGwodmFsdWUuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykpIHtcbiAgICAgICAgLy8gQ29udmVydCBiaW5hcnkgYXJyYXlzIHRvIGEgc3RyaW5nIGFuZCBwcmVmaXggdGhlIHN0cmluZyB3aXRoXG4gICAgICAgIC8vIGEgc3BlY2lhbCBtYXJrZXIuXG4gICAgICAgIHZhciBidWZmZXI7XG4gICAgICAgIHZhciBtYXJrZXIgPSBTRVJJQUxJWkVEX01BUktFUjtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9BUlJBWUJVRkZFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQ4QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDY0QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0eXBlIGZvciBCaW5hcnlBcnJheScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKG1hcmtlciArIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgLy8gQ29udmVyIHRoZSBibG9iIHRvIGEgYmluYXJ5QXJyYXkgYW5kIHRoZW4gdG8gYSBzdHJpbmcuXG4gICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIHByZWZpeCBmb3IgdGhlIGJsb2IgdHlwZS5cbiAgICAgICAgICAgIHZhciBzdHIgPSBCTE9CX1RZUEVfUFJFRklYICsgdmFsdWUudHlwZSArICd+JyArIGJ1ZmZlclRvU3RyaW5nKHRoaXMucmVzdWx0KTtcblxuICAgICAgICAgICAgY2FsbGJhY2soU0VSSUFMSVpFRF9NQVJLRVIgKyBUWVBFX0JMT0IgKyBzdHIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGRuJ3QgY29udmVydCB2YWx1ZSBpbnRvIGEgSlNPTiBzdHJpbmc6IFwiLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXNlcmlhbGl6ZSBkYXRhIHdlJ3ZlIGluc2VydGVkIGludG8gYSB2YWx1ZSBjb2x1bW4vZmllbGQuIFdlIHBsYWNlXG4vLyBzcGVjaWFsIG1hcmtlcnMgaW50byBvdXIgc3RyaW5ncyB0byBtYXJrIHRoZW0gYXMgZW5jb2RlZDsgdGhpcyBpc24ndFxuLy8gYXMgbmljZSBhcyBhIG1ldGEgZmllbGQsIGJ1dCBpdCdzIHRoZSBvbmx5IHNhbmUgdGhpbmcgd2UgY2FuIGRvIHdoaWxzdFxuLy8ga2VlcGluZyBsb2NhbFN0b3JhZ2Ugc3VwcG9ydCBpbnRhY3QuXG4vL1xuLy8gT2Z0ZW50aW1lcyB0aGlzIHdpbGwganVzdCBkZXNlcmlhbGl6ZSBKU09OIGNvbnRlbnQsIGJ1dCBpZiB3ZSBoYXZlIGFcbi8vIHNwZWNpYWwgbWFya2VyIChTRVJJQUxJWkVEX01BUktFUiwgZGVmaW5lZCBhYm92ZSksIHdlIHdpbGwgZXh0cmFjdFxuLy8gc29tZSBraW5kIG9mIGFycmF5YnVmZmVyL2JpbmFyeSBkYXRhL3R5cGVkIGFycmF5IG91dCBvZiB0aGUgc3RyaW5nLlxuZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IG1hcmtlZCB0aGlzIHN0cmluZyBhcyBiZWluZyBzcGVjaWFsbHkgc2VyaWFsaXplZCAoaS5lLlxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuIHNlcmlhbGl6ZWQgSlNPTiksIHdlIGNhbiBqdXN0IHJldHVybiBpdCBhbmQgYmVcbiAgICAvLyBkb25lIHdpdGggaXQuXG4gICAgaWYgKHZhbHVlLnN1YnN0cmluZygwLCBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpICE9PSBTRVJJQUxJWkVEX01BUktFUikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGRlYWxzIHdpdGggZGVzZXJpYWxpemluZyBzb21lIGtpbmQgb2YgQmxvYiBvclxuICAgIC8vIFR5cGVkQXJyYXkuIEZpcnN0IHdlIHNlcGFyYXRlIG91dCB0aGUgdHlwZSBvZiBkYXRhIHdlJ3JlIGRlYWxpbmdcbiAgICAvLyB3aXRoIGZyb20gdGhlIGRhdGEgaXRzZWxmLlxuICAgIHZhciBzZXJpYWxpemVkU3RyaW5nID0gdmFsdWUuc3Vic3RyaW5nKFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcbiAgICB2YXIgdHlwZSA9IHZhbHVlLnN1YnN0cmluZyhTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgsIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcblxuICAgIHZhciBibG9iVHlwZTtcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBibG9iIHR5cGUgc2VyaWFsaXphdGlvbiBzdHJhdGVneS5cbiAgICAvLyBEQnMgY3JlYXRlZCB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIGxvY2FsRm9yYWdlIHdpbGwgc2ltcGx5IG5vdCBoYXZlIHRoZSBibG9iIHR5cGUuXG4gICAgaWYgKHR5cGUgPT09IFRZUEVfQkxPQiAmJiBCTE9CX1RZUEVfUFJFRklYX1JFR0VYLnRlc3Qoc2VyaWFsaXplZFN0cmluZykpIHtcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBzZXJpYWxpemVkU3RyaW5nLm1hdGNoKEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgpO1xuICAgICAgICBibG9iVHlwZSA9IG1hdGNoZXJbMV07XG4gICAgICAgIHNlcmlhbGl6ZWRTdHJpbmcgPSBzZXJpYWxpemVkU3RyaW5nLnN1YnN0cmluZyhtYXRjaGVyWzBdLmxlbmd0aCk7XG4gICAgfVxuICAgIHZhciBidWZmZXIgPSBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKTtcblxuICAgIC8vIFJldHVybiB0aGUgcmlnaHQgdHlwZSBiYXNlZCBvbiB0aGUgY29kZS90eXBlIHNldCBkdXJpbmdcbiAgICAvLyBzZXJpYWxpemF0aW9uLlxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFRZUEVfQVJSQVlCVUZGRVI6XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICBjYXNlIFRZUEVfQkxPQjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGJsb2JUeXBlIH0pO1xuICAgICAgICBjYXNlIFRZUEVfSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDE2QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9GTE9BVDY0QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtvd24gdHlwZTogJyArIHR5cGUpO1xuICAgIH1cbn1cblxudmFyIGxvY2FsZm9yYWdlU2VyaWFsaXplciA9IHtcbiAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemUsXG4gICAgc3RyaW5nVG9CdWZmZXI6IHN0cmluZ1RvQnVmZmVyLFxuICAgIGJ1ZmZlclRvU3RyaW5nOiBidWZmZXJUb1N0cmluZ1xufTtcblxuLypcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbTpcbiAqXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdC5leGVjdXRlU3FsKCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwga2V5IHVuaXF1ZSwgdmFsdWUpJywgW10sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbn1cblxuLy8gT3BlbiB0aGUgV2ViU1FMIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3Rcbi8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQxKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ3N0cmluZycgPyBvcHRpb25zW2ldLnRvU3RyaW5nKCkgOiBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRiSW5mb1Byb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgZGF0YWJhc2U7IHRoZSBvcGVuRGF0YWJhc2UgQVBJIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBjcmVhdGUgaXQgZm9yIHVzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYkluZm8uZGIgPSBvcGVuRGF0YWJhc2UoZGJJbmZvLm5hbWUsIFN0cmluZyhkYkluZm8udmVyc2lvbiksIGRiSW5mby5kZXNjcmlwdGlvbiwgZGJJbmZvLnNpemUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG91ciBrZXkvdmFsdWUgdGFibGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcbiAgICByZXR1cm4gZGJJbmZvUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sIHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBlcnJvci5TWU5UQVhfRVJSKSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPSA/XCIsIFtkYkluZm8uc3RvcmVOYW1lXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhYmxlIGlzIG1pc3NpbmcgKHdhcyBkZWxldGVkKVxuICAgICAgICAgICAgICAgICAgICAvLyByZS1jcmVhdGUgaXQgdGFibGUgYW5kIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sodCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LCBlcnJvckNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8gTElNSVQgMScsIFtrZXldLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnQgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZSQxKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG5cbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dzID0gcmVzdWx0cy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gcm93cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByb3dzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIGl0ZW0ua2V5LCBpICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZvaWQoMCkgcHJldmVudHMgcHJvYmxlbXMgd2l0aCByZWRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGB1bmRlZmluZWRgLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBfc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2NhbFN0b3JhZ2UgQVBJIGRvZXNuJ3QgcmV0dXJuIHVuZGVmaW5lZCB2YWx1ZXMgaW4gYW5cbiAgICAgICAgICAgIC8vIFwiZXhwZWN0ZWRcIiB3YXksIHNvIHVuZGVmaW5lZCBpcyBhbHdheXMgY2FzdCB0byBudWxsIGluIGFsbFxuICAgICAgICAgICAgLy8gZHJpdmVycy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknLCBba2V5LCB2YWx1ZV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0cmFuc2FjdGlvbiBmYWlsZWQ7IGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBzZWUgaWYgaXQncyBhIHF1b3RhIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNxbEVycm9yLmNvZGUgPT09IHNxbEVycm9yLlFVT1RBX0VSUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHJlamVjdCB0aGUgY2FsbGJhY2sgb3V0cmlnaHQgZm9yIG5vdywgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3b3J0aCB0cnlpbmcgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVuIGlmIHRoZSB1c2VyIGFjY2VwdHMgdGhlIHByb21wdCB0byB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb3JlIHN0b3JhZ2Ugb24gU2FmYXJpLCB0aGlzIGVycm9yIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSBjYWxsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3NldEl0ZW0uYXBwbHkoc2VsZiwgW2tleSwgb3JpZ2luYWxWYWx1ZSwgY2FsbGJhY2ssIHJldHJpZXNMZWZ0IC0gMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbSQxKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIF9zZXRJdGVtLmFwcGx5KHRoaXMsIFtrZXksIHZhbHVlLCBjYWxsYmFjaywgMV0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8nLCBba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gRGVsZXRlcyBldmVyeSBpdGVtIGluIHRoZSB0YWJsZS5cbi8vIFRPRE86IEZpbmQgb3V0IGlmIHRoaXMgcmVzZXRzIHRoZSBBVVRPX0lOQ1JFTUVOVCBudW1iZXIuXG5mdW5jdGlvbiBjbGVhciQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEb2VzIGEgc2ltcGxlIGBDT1VOVChrZXkpYCB0byBnZXQgdGhlIG51bWJlciBvZiBpdGVtcyBzdG9yZWQgaW5cbi8vIGxvY2FsRm9yYWdlLlxuZnVuY3Rpb24gbGVuZ3RoJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWhoaCwgU1FMIG1ha2VzIHRoaXMgb25lIHNvb29vb28gZWFzeS5cbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBDT1VOVChrZXkpIGFzIGMgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MuaXRlbSgwKS5jO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0dXJuIHRoZSBrZXkgbG9jYXRlZCBhdCBrZXkgaW5kZXggWDsgZXNzZW50aWFsbHkgZ2V0cyB0aGUga2V5IGZyb20gYVxuLy8gYFdIRVJFIGlkID0gP2AuIFRoaXMgaXMgdGhlIG1vc3QgZWZmaWNpZW50IHdheSBJIGNhbiB0aGluayB0byBpbXBsZW1lbnRcbi8vIHRoaXMgcmFyZWx5LXVzZWQgKGluIG15IGV4cGVyaWVuY2UpIHBhcnQgb2YgdGhlIEFQSSwgYnV0IGl0IGNhbiBzZWVtXG4vLyBpbmNvbnNpc3RlbnQsIGJlY2F1c2Ugd2UgZG8gYElOU0VSVCBPUiBSRVBMQUNFIElOVE9gIG9uIGBzZXRJdGVtKClgLCBzb1xuLy8gdGhlIElEIG9mIGVhY2gga2V5IHdpbGwgY2hhbmdlIGV2ZXJ5IHRpbWUgaXQncyB1cGRhdGVkLiBQZXJoYXBzIGEgc3RvcmVkXG4vLyBwcm9jZWR1cmUgZm9yIHRoZSBgc2V0SXRlbSgpYCBTUUwgd291bGQgc29sdmUgdGhpcyBwcm9ibGVtP1xuLy8gVE9ETzogRG9uJ3QgY2hhbmdlIElEIG9uIGBzZXRJdGVtKClgLlxuZnVuY3Rpb24ga2V5JDEobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGlkID0gPyBMSU1JVCAxJywgW24gKyAxXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS5rZXkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJkYXRhYmFzZS8jZGF0YWJhc2VzXG4vLyA+IFRoZXJlIGlzIG5vIHdheSB0byBlbnVtZXJhdGUgb3IgZGVsZXRlIHRoZSBkYXRhYmFzZXMgYXZhaWxhYmxlIGZvciBhbiBvcmlnaW4gZnJvbSB0aGlzIEFQSS5cbmZ1bmN0aW9uIGdldEFsbFN0b3JlTmFtZXMoZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPD4gJ19fV2ViS2l0RGF0YWJhc2VJbmZvVGFibGVfXydcIiwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlTmFtZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBzdG9yZU5hbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQxKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgZGI7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIGRiIHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIGRiID0gc2VsZi5fZGJJbmZvLmRiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYiA9IG9wZW5EYXRhYmFzZShvcHRpb25zLm5hbWUsICcnLCAnJywgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBkcm9wIGFsbCBkYXRhYmFzZSB0YWJsZXNcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdldEFsbFN0b3JlTmFtZXMoZGIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRiOiBkYixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lczogW29wdGlvbnMuc3RvcmVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChvcGVyYXRpb25JbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcm9wVGFibGUoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdEUk9QIFRBQkxFIElGIEVYSVNUUyAnICsgc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMucHVzaChkcm9wVGFibGUob3BlcmF0aW9uSW5mby5zdG9yZU5hbWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlJDEuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciB3ZWJTUUxTdG9yYWdlID0ge1xuICAgIF9kcml2ZXI6ICd3ZWJTUUxTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQxLFxuICAgIF9zdXBwb3J0OiBpc1dlYlNRTFZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQxLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDEsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQxLFxuICAgIGNsZWFyOiBjbGVhciQxLFxuICAgIGxlbmd0aDogbGVuZ3RoJDEsXG4gICAga2V5OiBrZXkkMSxcbiAgICBrZXlzOiBrZXlzJDEsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMVxufTtcblxuZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3NldEl0ZW0nIGluIGxvY2FsU3RvcmFnZSAmJlxuICAgICAgICAvLyBpbiBJRTggdHlwZW9mIGxvY2FsU3RvcmFnZS5zZXRJdGVtID09PSAnb2JqZWN0J1xuICAgICAgICAhIWxvY2FsU3RvcmFnZS5zZXRJdGVtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2dldEtleVByZWZpeChvcHRpb25zLCBkZWZhdWx0Q29uZmlnKSB7XG4gICAgdmFyIGtleVByZWZpeCA9IG9wdGlvbnMubmFtZSArICcvJztcblxuICAgIGlmIChvcHRpb25zLnN0b3JlTmFtZSAhPT0gZGVmYXVsdENvbmZpZy5zdG9yZU5hbWUpIHtcbiAgICAgICAga2V5UHJlZml4ICs9IG9wdGlvbnMuc3RvcmVOYW1lICsgJy8nO1xuICAgIH1cbiAgICByZXR1cm4ga2V5UHJlZml4O1xufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgdGhyb3dzIHdoZW4gc2F2aW5nIGFuIGl0ZW1cbmZ1bmN0aW9uIGNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB7XG4gICAgdmFyIGxvY2FsU3RvcmFnZVRlc3RLZXkgPSAnX2xvY2FsZm9yYWdlX3N1cHBvcnRfdGVzdCc7XG5cbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5LCB0cnVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlVGVzdEtleSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGFuZCBhbGxvd3MgdG8gc2F2ZSBhbiBpdGVtXG4vLyBUaGlzIG1ldGhvZCBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGlzIHVzYWJsZSBpbiBTYWZhcmkgUHJpdmF0ZSBCcm93c2luZ1xuLy8gbW9kZSwgb3IgaW4gYW55IG90aGVyIGNhc2Ugd2hlcmUgdGhlIGF2YWlsYWJsZSBxdW90YSBmb3IgbG9jYWxTdG9yYWdlXG4vLyBpcyAwIGFuZCB0aGVyZSB3YXNuJ3QgYW55IHNhdmVkIGl0ZW1zIHlldC5cbmZ1bmN0aW9uIF9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpIHtcbiAgICByZXR1cm4gIWNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMDtcbn1cblxuLy8gQ29uZmlnIHRoZSBsb2NhbFN0b3JhZ2UgYmFja2VuZCwgdXNpbmcgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQyKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHt9O1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRiSW5mby5rZXlQcmVmaXggPSBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpO1xuXG4gICAgaWYgKCFfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcblxuICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xufVxuXG4vLyBSZW1vdmUgYWxsIGtleXMgZnJvbSB0aGUgZGF0YXN0b3JlLCBlZmZlY3RpdmVseSBkZXN0cm95aW5nIGFsbCBkYXRhIGluXG4vLyB0aGUgYXBwJ3Mga2V5L3ZhbHVlIHN0b3JlIVxuZnVuY3Rpb24gY2xlYXIkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IHNlbGYuX2RiSW5mby5rZXlQcmVmaXg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0cmlldmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZS4gVW5saWtlIHRoZSBvcmlnaW5hbCBhc3luY19zdG9yYWdlXG4vLyBsaWJyYXJ5IGluIEdhaWEsIHdlIGRvbid0IG1vZGlmeSByZXR1cm4gdmFsdWVzIGF0IGFsbC4gSWYgYSBrZXkncyB2YWx1ZVxuLy8gaXMgYHVuZGVmaW5lZGAsIHdlIHBhc3MgdGhhdCB2YWx1ZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBnZXRJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcblxuICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZSBrZXlcbiAgICAgICAgLy8gaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodCB0byB0aGVcbiAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBpbiB0aGUgc3RvcmUuXG5mdW5jdGlvbiBpdGVyYXRlJDIoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBkYkluZm8ua2V5UHJlZml4O1xuICAgICAgICB2YXIga2V5UHJlZml4TGVuZ3RoID0ga2V5UHJlZml4Lmxlbmd0aDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG5cbiAgICAgICAgLy8gV2UgdXNlIGEgZGVkaWNhdGVkIGl0ZXJhdG9yIGluc3RlYWQgb2YgdGhlIGBpYCB2YXJpYWJsZSBiZWxvd1xuICAgICAgICAvLyBzbyBvdGhlciBrZXlzIHdlIGZldGNoIGluIGxvY2FsU3RvcmFnZSBhcmVuJ3QgY291bnRlZCBpblxuICAgICAgICAvLyB0aGUgYGl0ZXJhdGlvbk51bWJlcmAgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBgaXRlcmF0ZSgpYFxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2VlOiBnaXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MzUjZGlzY3Vzc2lvbl9yMzgwNjE1MzBcbiAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlXG4gICAgICAgICAgICAvLyBrZXkgaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodFxuICAgICAgICAgICAgLy8gdG8gdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gaXRlcmF0b3IodmFsdWUsIGtleS5zdWJzdHJpbmcoa2V5UHJlZml4TGVuZ3RoKSwgaXRlcmF0aW9uTnVtYmVyKyspO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2FtZSBhcyBsb2NhbFN0b3JhZ2UncyBrZXkoKSBtZXRob2QsIGV4Y2VwdCB0YWtlcyBhIGNhbGxiYWNrLlxuZnVuY3Rpb24ga2V5JDIobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2Uua2V5KG4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcHJlZml4IGZyb20gdGhlIGtleSwgaWYgYSBrZXkgaXMgZm91bmQuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoZGJJbmZvLmtleVByZWZpeC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGl0ZW1LZXkuaW5kZXhPZihkYkluZm8ua2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChpdGVtS2V5LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTdXBwbHkgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoZSBkYXRhc3RvcmUgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuZnVuY3Rpb24gbGVuZ3RoJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLCBuaWNlIGFuZCBzaW1wbGUuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2V0IGEga2V5J3MgdmFsdWUgYW5kIHJ1biBhbiBvcHRpb25hbCBjYWxsYmFjayBvbmNlIHRoZSB2YWx1ZSBpcyBzZXQuXG4vLyBVbmxpa2UgR2FpYSdzIGltcGxlbWVudGF0aW9uLCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSB2YWx1ZSxcbi8vIGluIGNhc2UgeW91IHdhbnQgdG8gb3BlcmF0ZSBvbiB0aGF0IHZhbHVlIG9ubHkgYWZ0ZXIgeW91J3JlIHN1cmUgaXRcbi8vIHNhdmVkLCBvciBzb21ldGhpbmcgbGlrZSB0aGF0LlxuZnVuY3Rpb24gc2V0SXRlbSQyKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ29udmVydCB1bmRlZmluZWQgdmFsdWVzIHRvIG51bGwuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhcGFjaXR5IGV4Y2VlZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgc3BlY2lmaWMgZXJyb3IvZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2UkMihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMubmFtZSArICcvJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleVByZWZpeCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBsb2NhbFN0b3JhZ2VXcmFwcGVyID0ge1xuICAgIF9kcml2ZXI6ICdsb2NhbFN0b3JhZ2VXcmFwcGVyJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQyLFxuICAgIF9zdXBwb3J0OiBpc0xvY2FsU3RvcmFnZVZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQyLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMixcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDIsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQyLFxuICAgIGNsZWFyOiBjbGVhciQyLFxuICAgIGxlbmd0aDogbGVuZ3RoJDIsXG4gICAga2V5OiBrZXkkMixcbiAgICBrZXlzOiBrZXlzJDIsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMlxufTtcblxudmFyIHNhbWVWYWx1ZSA9IGZ1bmN0aW9uIHNhbWVWYWx1ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IHkgfHwgdHlwZW9mIHggPT09ICdudW1iZXInICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiBpc05hTih4KSAmJiBpc05hTih5KTtcbn07XG5cbnZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCBzZWFyY2hFbGVtZW50KSB7XG4gICAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgaWYgKHNhbWVWYWx1ZShhcnJheVtpXSwgc2VhcmNoRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8vIERyaXZlcnMgYXJlIHN0b3JlZCBoZXJlIHdoZW4gYGRlZmluZURyaXZlcigpYCBpcyBjYWxsZWQuXG4vLyBUaGV5IGFyZSBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2YgbG9jYWxGb3JhZ2UuXG52YXIgRGVmaW5lZERyaXZlcnMgPSB7fTtcblxudmFyIERyaXZlclN1cHBvcnQgPSB7fTtcblxudmFyIERlZmF1bHREcml2ZXJzID0ge1xuICAgIElOREVYRUREQjogYXN5bmNTdG9yYWdlLFxuICAgIFdFQlNRTDogd2ViU1FMU3RvcmFnZSxcbiAgICBMT0NBTFNUT1JBR0U6IGxvY2FsU3RvcmFnZVdyYXBwZXJcbn07XG5cbnZhciBEZWZhdWx0RHJpdmVyT3JkZXIgPSBbRGVmYXVsdERyaXZlcnMuSU5ERVhFRERCLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLldFQlNRTC5fZHJpdmVyLCBEZWZhdWx0RHJpdmVycy5MT0NBTFNUT1JBR0UuX2RyaXZlcl07XG5cbnZhciBPcHRpb25hbERyaXZlck1ldGhvZHMgPSBbJ2Ryb3BJbnN0YW5jZSddO1xuXG52YXIgTGlicmFyeU1ldGhvZHMgPSBbJ2NsZWFyJywgJ2dldEl0ZW0nLCAnaXRlcmF0ZScsICdrZXknLCAna2V5cycsICdsZW5ndGgnLCAncmVtb3ZlSXRlbScsICdzZXRJdGVtJ10uY29uY2F0KE9wdGlvbmFsRHJpdmVyTWV0aG9kcyk7XG5cbnZhciBEZWZhdWx0Q29uZmlnID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkcml2ZXI6IERlZmF1bHREcml2ZXJPcmRlci5zbGljZSgpLFxuICAgIG5hbWU6ICdsb2NhbGZvcmFnZScsXG4gICAgLy8gRGVmYXVsdCBEQiBzaXplIGlzIF9KVVNUIFVOREVSXyA1TUIsIGFzIGl0J3MgdGhlIGhpZ2hlc3Qgc2l6ZVxuICAgIC8vIHdlIGNhbiB1c2Ugd2l0aG91dCBhIHByb21wdC5cbiAgICBzaXplOiA0OTgwNzM2LFxuICAgIHN0b3JlTmFtZTogJ2tleXZhbHVlcGFpcnMnLFxuICAgIHZlcnNpb246IDEuMFxufTtcblxuZnVuY3Rpb24gY2FsbFdoZW5SZWFkeShsb2NhbEZvcmFnZUluc3RhbmNlLCBsaWJyYXJ5TWV0aG9kKSB7XG4gICAgbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2VbbGlicmFyeU1ldGhvZF0uYXBwbHkobG9jYWxGb3JhZ2VJbnN0YW5jZSwgX2FyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfa2V5IGluIGFyZykge1xuICAgICAgICAgICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoYXJnW19rZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xufVxuXG52YXIgTG9jYWxGb3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxGb3JhZ2Uob3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxGb3JhZ2UpO1xuXG4gICAgICAgIGZvciAodmFyIGRyaXZlclR5cGVLZXkgaW4gRGVmYXVsdERyaXZlcnMpIHtcbiAgICAgICAgICAgIGlmIChEZWZhdWx0RHJpdmVycy5oYXNPd25Qcm9wZXJ0eShkcml2ZXJUeXBlS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXIgPSBEZWZhdWx0RHJpdmVyc1tkcml2ZXJUeXBlS2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHRoaXNbZHJpdmVyVHlwZUtleV0gPSBkcml2ZXJOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgZm9yIHRoZSBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCBkcml2ZXJzIGNhbiBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lRHJpdmVyKGRyaXZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbmZpZyA9IGV4dGVuZCh7fSwgRGVmYXVsdENvbmZpZyk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGV4dGVuZCh7fSwgdGhpcy5fZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXREcml2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kYkluZm8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgYW55IGNvbmZpZyB2YWx1ZXMgZm9yIGxvY2FsRm9yYWdlOyBjYW4gYmUgY2FsbGVkIGFueXRpbWUgYmVmb3JlXG4gICAgLy8gdGhlIGZpcnN0IEFQSSBjYWxsIChlLmcuIGBnZXRJdGVtYCwgYHNldEl0ZW1gKS5cbiAgICAvLyBXZSBsb29wIHRocm91Z2ggb3B0aW9ucyBzbyB3ZSBkb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgY29uZmlnXG4gICAgLy8gdmFsdWVzLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgYXJndW1lbnQgaXMgYW4gb2JqZWN0LCB3ZSB1c2UgaXQgdG8gc2V0IHZhbHVlcy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSByZXR1cm4gZWl0aGVyIGEgc3BlY2lmaWVkIGNvbmZpZyB2YWx1ZSBvciBhbGxcbiAgICAgICAgLy8gY29uZmlnIHZhbHVlcy5cbiAgICAgICAgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gSWYgbG9jYWxmb3JhZ2UgaXMgcmVhZHkgYW5kIGZ1bGx5IGluaXRpYWxpemVkLCB3ZSBjYW4ndCBzZXRcbiAgICAgICAgICAgIC8vIGFueSBuZXcgY29uZmlndXJhdGlvbiB2YWx1ZXMuIEluc3RlYWQsIHdlIHJldHVybiBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIGNvbmZpZygpIGFmdGVyIGxvY2FsZm9yYWdlIFwiICsgJ2hhcyBiZWVuIHVzZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAnc3RvcmVOYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2ldID0gb3B0aW9uc1tpXS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gJ3ZlcnNpb24nICYmIHR5cGVvZiBvcHRpb25zW2ldICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdEYXRhYmFzZSB2ZXJzaW9uIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWZ0ZXIgYWxsIGNvbmZpZyBvcHRpb25zIGFyZSBzZXQgYW5kXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9wdGlvbiBpcyB1c2VkLCB0cnkgc2V0dGluZyBpdFxuICAgICAgICAgICAgaWYgKCdkcml2ZXInIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1tvcHRpb25zXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVXNlZCB0byBkZWZpbmUgYSBjdXN0b20gZHJpdmVyLCBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2ZcbiAgICAvLyBsb2NhbEZvcmFnZS5cblxuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRlZmluZURyaXZlciA9IGZ1bmN0aW9uIGRlZmluZURyaXZlcihkcml2ZXJPYmplY3QsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyT2JqZWN0Ll9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsaWFuY2VFcnJvciA9IG5ldyBFcnJvcignQ3VzdG9tIGRyaXZlciBub3QgY29tcGxpYW50OyBzZWUgJyArICdodHRwczovL21vemlsbGEuZ2l0aHViLmlvL2xvY2FsRm9yYWdlLyNkZWZpbmVkcml2ZXInKTtcblxuICAgICAgICAgICAgICAgIC8vIEEgZHJpdmVyIG5hbWUgc2hvdWxkIGJlIGRlZmluZWQgYW5kIG5vdCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gbGlicmFyeS1kZWZpbmVkLCBkZWZhdWx0IGRyaXZlcnMuXG4gICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3QuX2RyaXZlcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2RzID0gTGlicmFyeU1ldGhvZHMuY29uY2F0KCdfaW5pdFN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHJpdmVyTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kTmFtZSA9IGRyaXZlck1ldGhvZHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgcHJvcGVydHkgaXMgdGhlcmUsXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHNob3VsZCBiZSBhIG1ldGhvZCBldmVuIHdoZW4gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSAhaW5jbHVkZXMoT3B0aW9uYWxEcml2ZXJNZXRob2RzLCBkcml2ZXJNZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpc1JlcXVpcmVkIHx8IGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSkgJiYgdHlwZW9mIGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uZmlndXJlTWlzc2luZ01ldGhvZHMgPSBmdW5jdGlvbiBjb25maWd1cmVNaXNzaW5nTWV0aG9kcygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeSA9IGZ1bmN0aW9uIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTWV0aG9kICcgKyBtZXRob2ROYW1lICsgJyBpcyBub3QgaW1wbGVtZW50ZWQgYnkgdGhlIGN1cnJlbnQgZHJpdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsRHJpdmVyTWV0aG9kID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdFtvcHRpb25hbERyaXZlck1ldGhvZF0gPSBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3Rvcnkob3B0aW9uYWxEcml2ZXJNZXRob2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2V0RHJpdmVyU3VwcG9ydCA9IGZ1bmN0aW9uIHNldERyaXZlclN1cHBvcnQoc3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnUmVkZWZpbmluZyBMb2NhbEZvcmFnZSBkcml2ZXI6ICcgKyBkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA9IGRyaXZlck9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgRHJpdmVyU3VwcG9ydFtkcml2ZXJOYW1lXSA9IHN1cHBvcnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHVzZSBhIHRoZW4sIHNvIHRoYXQgd2UgY2FuIGRlZmluZVxuICAgICAgICAgICAgICAgICAgICAvLyBkcml2ZXJzIHRoYXQgaGF2ZSBzaW1wbGUgX3N1cHBvcnQgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBhIGJsb2NraW5nIG1hbm5lclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICgnX3N1cHBvcnQnIGluIGRyaXZlck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJpdmVyT2JqZWN0Ll9zdXBwb3J0ICYmIHR5cGVvZiBkcml2ZXJPYmplY3QuX3N1cHBvcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdC5fc3VwcG9ydCgpLnRoZW4oc2V0RHJpdmVyU3VwcG9ydCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERyaXZlclN1cHBvcnQoISFkcml2ZXJPYmplY3QuX3N1cHBvcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kcml2ZXIgPSBmdW5jdGlvbiBkcml2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXIgfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldERyaXZlciA9IGZ1bmN0aW9uIGdldERyaXZlcihkcml2ZXJOYW1lLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgZ2V0RHJpdmVyUHJvbWlzZSA9IERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID8gUHJvbWlzZSQxLnJlc29sdmUoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIDogUHJvbWlzZSQxLnJlamVjdChuZXcgRXJyb3IoJ0RyaXZlciBub3QgZm91bmQuJykpO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MoZ2V0RHJpdmVyUHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gZ2V0RHJpdmVyUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldFNlcmlhbGl6ZXIgPSBmdW5jdGlvbiBnZXRTZXJpYWxpemVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVyUHJvbWlzZSA9IFByb21pc2UkMS5yZXNvbHZlKGxvY2FsZm9yYWdlU2VyaWFsaXplcik7XG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3Moc2VyaWFsaXplclByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLl9kcml2ZXJTZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fcmVhZHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXREcml2ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3JlYWR5O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc2V0RHJpdmVyID0gZnVuY3Rpb24gc2V0RHJpdmVyKGRyaXZlcnMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIWlzQXJyYXkoZHJpdmVycykpIHtcbiAgICAgICAgICAgIGRyaXZlcnMgPSBbZHJpdmVyc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IHRoaXMuX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RHJpdmVyVG9Db25maWcoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb25maWcuZHJpdmVyID0gc2VsZi5kcml2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZFNlbGZXaXRoRHJpdmVyKGRyaXZlcikge1xuICAgICAgICAgICAgc2VsZi5fZXh0ZW5kKGRyaXZlcik7XG4gICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuXG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXRTdG9yYWdlKHNlbGYuX2NvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREcml2ZXJJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcml2ZXJQcm9taXNlTG9vcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnREcml2ZXJJbmRleCA8IHN1cHBvcnRlZERyaXZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbY3VycmVudERyaXZlckluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcml2ZXJJbmRleCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihleHRlbmRTZWxmV2l0aERyaXZlcilbXCJjYXRjaFwiXShkcml2ZXJQcm9taXNlTG9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kcml2ZXJTZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlclByb21pc2VMb29wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlcmUgbWlnaHQgYmUgYSBkcml2ZXIgaW5pdGlhbGl6YXRpb24gaW4gcHJvZ3Jlc3NcbiAgICAgICAgLy8gc28gd2FpdCBmb3IgaXQgdG8gZmluaXNoIGluIG9yZGVyIHRvIGF2b2lkIGEgcG9zc2libGVcbiAgICAgICAgLy8gcmFjZSBjb25kaXRpb24gdG8gc2V0IF9kYkluZm9cbiAgICAgICAgdmFyIG9sZERyaXZlclNldERvbmUgPSB0aGlzLl9kcml2ZXJTZXQgIT09IG51bGwgPyB0aGlzLl9kcml2ZXJTZXRbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICAgICAgfSkgOiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuXG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG9sZERyaXZlclNldERvbmUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbMF07XG4gICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihmdW5jdGlvbiAoZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pbml0RHJpdmVyID0gaW5pdERyaXZlcihzdXBwb3J0ZWREcml2ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyh0aGlzLl9kcml2ZXJTZXQsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlclNldDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnN1cHBvcnRzID0gZnVuY3Rpb24gc3VwcG9ydHMoZHJpdmVyTmFtZSkge1xuICAgICAgICByZXR1cm4gISFEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2V4dGVuZCA9IGZ1bmN0aW9uIF9leHRlbmQobGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLCBsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2dldFN1cHBvcnRlZERyaXZlcnMgPSBmdW5jdGlvbiBfZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlcnNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0cyhkcml2ZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZERyaXZlcnMucHVzaChkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRHJpdmVycztcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkgPSBmdW5jdGlvbiBfd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCkge1xuICAgICAgICAvLyBBZGQgYSBzdHViIGZvciBlYWNoIGRyaXZlciBBUEkgbWV0aG9kIHRoYXQgZGVsYXlzIHRoZSBjYWxsIHRvIHRoZVxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGRyaXZlciBtZXRob2QgdW50aWwgbG9jYWxGb3JhZ2UgaXMgcmVhZHkuIFRoZXNlIHN0dWJzXG4gICAgICAgIC8vIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGRyaXZlciBtZXRob2RzIGFzIHNvb24gYXMgdGhlIGRyaXZlciBpc1xuICAgICAgICAvLyBsb2FkZWQsIHNvIHRoZXJlIGlzIG5vIHBlcmZvcm1hbmNlIGltcGFjdC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IExpYnJhcnlNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsV2hlblJlYWR5KHRoaXMsIExpYnJhcnlNZXRob2RzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTG9jYWxGb3JhZ2Uob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBMb2NhbEZvcmFnZTtcbn0oKTtcblxuLy8gVGhlIGFjdHVhbCBsb2NhbEZvcmFnZSBvYmplY3QgdGhhdCB3ZSBleHBvc2UgYXMgYSBtb2R1bGUgb3IgdmlhIGFcbi8vIGdsb2JhbC4gSXQncyBleHRlbmRlZCBieSBwdWxsaW5nIGluIG9uZSBvZiBvdXIgb3RoZXIgbGlicmFyaWVzLlxuXG5cbnZhciBsb2NhbGZvcmFnZV9qcyA9IG5ldyBMb2NhbEZvcmFnZSgpO1xubG9jYWxmb3JhZ2UgPSBsb2NhbGZvcmFnZV9qcztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhbGZvcmFnZV9qcztcblxufSx7XCIzXCI6M31dfSx7fSxbNF0pKDQpXG59KTtcbiIsImltcG9ydCB7IGxvY2FsZm9yYWdlIH0gZnJvbSAnLi9sb2NhbGZvcmFnZS5lczYuanMnO1xuXG5mdW5jdGlvbiBnZXRTZXJpYWxpemVyUHJvbWlzZShsb2NhbEZvcmFnZUluc3RhbmNlKSB7XG4gICAgaWYgKGdldFNlcmlhbGl6ZXJQcm9taXNlLnJlc3VsdCkge1xuICAgICAgICByZXR1cm4gZ2V0U2VyaWFsaXplclByb21pc2UucmVzdWx0O1xuICAgIH1cbiAgICBpZiAoIWxvY2FsRm9yYWdlSW5zdGFuY2UgfHwgdHlwZW9mIGxvY2FsRm9yYWdlSW5zdGFuY2UuZ2V0U2VyaWFsaXplciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdsb2NhbGZvcmFnZS5nZXRTZXJpYWxpemVyKCkgd2FzIG5vdCBhdmFpbGFibGUhICcgKyAnbG9jYWxmb3JhZ2UgdjEuNCsgaXMgcmVxdWlyZWQhJykpO1xuICAgIH1cbiAgICBnZXRTZXJpYWxpemVyUHJvbWlzZS5yZXN1bHQgPSBsb2NhbEZvcmFnZUluc3RhbmNlLmdldFNlcmlhbGl6ZXIoKTtcbiAgICByZXR1cm4gZ2V0U2VyaWFsaXplclByb21pc2UucmVzdWx0O1xufVxuXG5cblxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJdGVtS2V5VmFsdWUoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuZ2V0SXRlbShrZXkpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldElEQktleVJhbmdlKCkge1xuICAgIC8qIGdsb2JhbCBJREJLZXlSYW5nZSwgd2Via2l0SURCS2V5UmFuZ2UsIG1veklEQktleVJhbmdlICovXG4gICAgaWYgKHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIElEQktleVJhbmdlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdlYmtpdElEQktleVJhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2Via2l0SURCS2V5UmFuZ2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbW96SURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBtb3pJREJLZXlSYW5nZTtcbiAgICB9XG59XG5cbnZhciBpZGJLZXlSYW5nZSA9IGdldElEQktleVJhbmdlKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhhbmtzIGh0dHBzOi8vaGFja3MubW96aWxsYS5vcmcvMjAxNC8wNi9icmVha2luZy10aGUtYm9yZGVycy1vZi1pbmRleGVkZGIvXG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5fZGJJbmZvO1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsICdyZWFkb25seScpLm9iamVjdFN0b3JlKGRiSW5mby5zdG9yZU5hbWUpO1xuXG4gICAgICAgICAgICB2YXIga2V5UmFuZ2VWYWx1ZSA9IGlkYktleVJhbmdlLmJvdW5kKHByZWZpeCwgcHJlZml4ICsgJ3VmZmZmJywgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5DdXJzb3Ioa2V5UmFuZ2VWYWx1ZSk7XG4gICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0OyAvLyBldmVudC50YXJnZXQucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbY3Vyc29yLmtleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSAvKmV2ZW50Ki97XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXNTdGFydGluZ1dpdGgocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbG9jYWxmb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhhbmtzIGh0dHBzOi8vaGFja3MubW96aWxsYS5vcmcvMjAxNC8wNi9icmVha2luZy10aGUtYm9yZGVycy1vZi1pbmRleGVkZGIvXG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5fZGJJbmZvO1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsICdyZWFkb25seScpLm9iamVjdFN0b3JlKGRiSW5mby5zdG9yZU5hbWUpO1xuXG4gICAgICAgICAgICB2YXIga2V5UmFuZ2VWYWx1ZSA9IGlkYktleVJhbmdlLmJvdW5kKHByZWZpeCwgcHJlZml4ICsgJ3VmZmZmJywgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0b3JlLmdldEFsbEtleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuZ2V0QWxsS2V5cyhrZXlSYW5nZVZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKGtleVJhbmdlVmFsdWUpO1xuICAgICAgICAgICAgICAgIF9yZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkgLypldmVudCove1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gX3JlcS5yZXN1bHQ7IC8vIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3Vyc29yLmtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIF9yZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIC8qZXZlbnQqL3tcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF9yZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRzV2l0aCQxKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRTZXJpYWxpemVyUHJvbWlzZShsb2NhbGZvcmFnZUluc3RhbmNlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoc2VyaWFsaXplcikge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUgKGtleSBMSUtFID8pJywgW3ByZWZpeCArICclJ10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dzID0gcmVzdWx0cy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm93cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByb3dzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnQgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5wYWNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzZXJpYWxpemVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW0ua2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5c1N0YXJ0aW5nV2l0aCQxKHByZWZpeCwgY2FsbGJhY2spIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VJbnN0YW5jZSA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxvY2FsZm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBsb2NhbGZvcmFnZUluc3RhbmNlLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUgKGtleSBMSUtFID8pJywgW3ByZWZpeCArICclJ10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dzID0gcmVzdWx0cy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm93cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByb3dzLml0ZW0oaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgkMihwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtUHJvbWlzZXMgPSBbXTtcblxuICAgICAgICAgICAgdmFyIHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByb21pc2VzLnB1c2goZ2V0SXRlbUtleVZhbHVlLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChpdGVtUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKGtleVZhbHVlUGFpcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleVZhbHVlUGFpcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleVZhbHVlUGFpciA9IGtleVZhbHVlUGFpcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleVZhbHVlUGFpci5rZXldID0ga2V5VmFsdWVQYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXNTdGFydGluZ1dpdGgkMihwcmVmaXgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxvY2FsZm9yYWdlSW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBsb2NhbGZvcmFnZUluc3RhbmNlLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgdmFyIHByZWZpeExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgwLCBwcmVmaXhMZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBsb2NhbGZvcmFnZVN0YXJ0c1dpdGgocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgY3VycmVudERyaXZlciA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuZHJpdmVyKCk7XG5cbiAgICBpZiAoY3VycmVudERyaXZlciA9PT0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5JTkRFWEVEREIpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGguY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREcml2ZXIgPT09IGxvY2FsZm9yYWdlSW5zdGFuY2UuV0VCU1FMKSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoJDEuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhcnRzV2l0aCQyLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwgcHJlZml4LCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbGZvcmFnZUtleXNTdGFydGluZ1dpdGgocHJlZml4LCBjYWxsYmFjaykge1xuICAgIHZhciBsb2NhbGZvcmFnZUluc3RhbmNlID0gdGhpcztcbiAgICB2YXIgY3VycmVudERyaXZlciA9IGxvY2FsZm9yYWdlSW5zdGFuY2UuZHJpdmVyKCk7XG5cbiAgICBpZiAoY3VycmVudERyaXZlciA9PT0gbG9jYWxmb3JhZ2VJbnN0YW5jZS5JTkRFWEVEREIpIHtcbiAgICAgICAgcmV0dXJuIGtleXNTdGFydGluZ1dpdGguY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREcml2ZXIgPT09IGxvY2FsZm9yYWdlSW5zdGFuY2UuV0VCU1FMKSB7XG4gICAgICAgIHJldHVybiBrZXlzU3RhcnRpbmdXaXRoJDEuY2FsbChsb2NhbGZvcmFnZUluc3RhbmNlLCBwcmVmaXgsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga2V5c1N0YXJ0aW5nV2l0aCQyLmNhbGwobG9jYWxmb3JhZ2VJbnN0YW5jZSwgcHJlZml4LCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleHRlbmRQcm90b3R5cGUobG9jYWxmb3JhZ2UkJDEpIHtcbiAgICB2YXIgbG9jYWxmb3JhZ2VQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobG9jYWxmb3JhZ2UkJDEpO1xuICAgIGlmIChsb2NhbGZvcmFnZVByb3RvdHlwZSkge1xuICAgICAgICBsb2NhbGZvcmFnZVByb3RvdHlwZS5zdGFydHNXaXRoID0gbG9jYWxmb3JhZ2VTdGFydHNXaXRoO1xuICAgICAgICBsb2NhbGZvcmFnZVByb3RvdHlwZS5rZXlzU3RhcnRpbmdXaXRoID0gbG9jYWxmb3JhZ2VLZXlzU3RhcnRpbmdXaXRoO1xuICAgIH1cbn1cblxudmFyIGV4dGVuZFByb3RvdHlwZVJlc3VsdCA9IGV4dGVuZFByb3RvdHlwZShsb2NhbGZvcmFnZSk7XG5cbmV4cG9ydCB7IGxvY2FsZm9yYWdlU3RhcnRzV2l0aCwgbG9jYWxmb3JhZ2VLZXlzU3RhcnRpbmdXaXRoLCBleHRlbmRQcm90b3R5cGUsIGV4dGVuZFByb3RvdHlwZVJlc3VsdCwgc3RhcnRzV2l0aCQyIGFzIHN0YXJ0c1dpdGhHZW5lcmljLCBrZXlzU3RhcnRpbmdXaXRoJDIgYXMga2V5c1N0YXJ0aW5nV2l0aEdlbmVyaWMgfTtcbmV4cG9ydCB7IGxvY2FsZm9yYWdlIH1cbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgY29udmVuaWVudCBzdG9yYWdlIGFic3RyYWN0aW9ucy4gSW1wbGVtZW50aW5nIHN0b3JhZ2UgaW5cbiAqIGEgdXRpbGl0eSBtb2R1bGUsIHJhdGhlciB0aGFuIGRpcmVjdGx5IGNhbGxpbmcgYnJvd3NlciBzdG9yYWdlIEFQSXMsIGF2b2lkcyBjb2RlXG4gKiBkdXBsaWNhdGlvbiBhbmQgYWxsb3dzIHVzIHRvIHN3YXAgb3V0IHRoZSB1bmRlcmx5aW5nIHN0b3JhZ2UgaW1wbGVtZW50YXRpb24gaWZcbiAqIG5lZWRlZCAoZS5nLiwgc3dpdGNoaW5nIGZyb20gbG9jYWxmb3JhZ2UgdG8gRGV4aWUsIG9yIGRpcmVjdGx5IHVzaW5nIGJyb3dzZXJcbiAqIHN0b3JhZ2UgQVBJcykuXG4gKlxuICogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5TdG9yYWdlXG4gKi9cblxuLy8gQ3VycmVudGx5IGltcGxlbWVudGVkIHdpdGggbG9jYWxmb3JhZ2VcbmltcG9ydCB7IGxvY2FsZm9yYWdlS2V5c1N0YXJ0aW5nV2l0aCwgbG9jYWxmb3JhZ2UgfSBmcm9tIFwiLi4vZGVwZW5kZW5jaWVzL2xvY2FsZm9yYWdlLXN0YXJ0c3dpdGguanNcIlxuXG5leHBvcnQgdmFyIHN0b3JhZ2VJbnN0YW5jZXMgPSBbXTtcbi8qKlxuICogQ2xhc3MgZm9yIGEga2V5LXZhbHVlIHN0b3JhZ2UgYXJlYSwgd2hlcmUgdGhlIGtleSBpcyBhIHN0cmluZyBhbmQgdGhlIHZhbHVlIGNhbiBoYXZlXG4gKiBhbnkgb2YgYSBudW1iZXIgb2YgYmFzaWMgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZVN0b3JhZ2Uge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGtleS12YWx1ZSBzdG9yYWdlIGFyZWEuIE5vdGUgdGhhdCwgYmVjYXVzZSBjcmVhdGluZyBhIHN0b3JhZ2UgYXJlYVxuICAgICAqIHJlcXVpcmVzIGFzeW5jaHJvbm91cyBjYWxscyAod2hpY2ggY2Fubm90IGhhcHBlbiBpbiBhIGNvbnN0cnVjdG9yKSwgdGhlXG4gICAgICogc3RvcmFnZSBhcmVhIHdpbGwgbm90IGJlIHNldHVwIHVudGlsIGEgc3Vic2VxdWVudCBjYWxsIHRvIGBpbml0aWFsaXplKClgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yYWdlQXJlYU5hbWUgLSBBIG5hbWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBzdG9yYWdlIGFyZWEuXG4gICAgICogQGV4YW1wbGUgdmFyIGV4YW1wbGVTdG9yYWdlID0gYXdhaXQgKG5ldyBLZXlWYWx1ZVN0b3JhZ2UoXCJleGFtcGxlTmFtZVwiKSkuaW5pdGlhbGl6ZSgpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VBcmVhTmFtZSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2VBcmVhTmFtZSA9IHN0b3JhZ2VBcmVhTmFtZTtcbiAgICAgICAgdGhpcy5zdG9yYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXBsZXRlIGNyZWF0aW9uIG9mIHRoZSBzdG9yYWdlIGFyZWEuIFJldHVybnMgaXRzZWxmIGZvciBjb252ZW5pZW5jZS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUga2V5LXZhbHVlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xuICAgICAgICBpZighS2V5VmFsdWVTdG9yYWdlLmxvY2FsRm9yYWdlSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGxvY2FsZm9yYWdlLmNvbmZpZyh7XG4gICAgICAgICAgICAgICAgZHJpdmVyOiBbbG9jYWxmb3JhZ2UuSU5ERVhFRERCLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxmb3JhZ2UuV0VCU1FMLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxmb3JhZ2UuTE9DQUxTVE9SQUdFXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgS2V5VmFsdWVTdG9yYWdlLmxvY2FsRm9yYWdlSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmFnZUluc3RhbmNlID0gbG9jYWxmb3JhZ2UuY3JlYXRlSW5zdGFuY2UoIHsgbmFtZTogdGhpcy5zdG9yYWdlQXJlYU5hbWUgfSApO1xuICAgICAgICBzdG9yYWdlSW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHZhbHVlIGZyb20gc3RvcmFnZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB1c2UgaW4gdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheT58UHJvbWlzZTxBcnJheUJ1ZmZlcj58UHJvbWlzZTxCbG9iPnxQcm9taXNlPEZsb2F0MzJBcnJheT58UHJvbWlzZTxGbG9hdDY0QXJyYXk+fFxuICAgICAqIFByb21pc2U8SW50OEFycmF5PnxQcm9taXNlPEludDE2QXJyYXk+fFByb21pc2U8SW50MzJBcnJheT58UHJvbWlzZTxOdW1iZXI+fFByb21pc2U8T2JqZWN0PnxQcm9taXNlPFVpbnQ4QXJyYXk+fFxuICAgICAqIFByb21pc2U8VWludDhDbGFtcGVkQXJyYXk+fFByb21pc2U8VWludDE2QXJyYXk+fFByb21pc2U8VWludDMyQXJyYXk+fFByb21pc2U8c3RyaW5nPn0gVGhlIHZhbHVlIGluIHRoZVxuICAgICAqIHN0b3JhZ2UgYXJlYSBmb3IgdGhlIGtleSwgb3IgYG51bGxgIGlmIHRoZSBrZXkgaXMgbm90IGluIHN0b3JhZ2UuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlSW5zdGFuY2UuZ2V0SXRlbShrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIHZhbHVlIGluIHN0b3JhZ2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdXNlIGluIHRoZSBzdG9yYWdlIGFyZWEuXG4gICAgICogQHBhcmFtIHsoQXJyYXl8QXJyYXlCdWZmZXJ8QmxvYnxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5fEludDhBcnJheXxJbnQxNkFycmF5fEludDMyQXJyYXl8XG4gICAgICogTnVtYmVyfE9iamVjdHxVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fHN0cmluZyl9IHZhbHVlIC0gVGhlIHZhbHVlXG4gICAgICogdG8gc3RvcmUgaW4gdGhlIHN0b3JhZ2UgYXJlYSBmb3IgdGhlIGtleS5cbiAgICAgKi9cbiAgICBhc3luYyBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBvYmplY3Qgd2hlcmUgd2l0aCBhIHByb3BlcnR5LXZhbHVlIHBhaXIgZm9yIGVhY2gga2V5LXZhbHVlIHBhaXIgaW4gdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSBzbG93IGFuZCBjb25zdW1lIGV4Y2Vzc2l2ZSBtZW1vcnkgaWYgdGhlIHN0b3JhZ2UgYXJlYSBjb250YWlucyBhIGxvdFxuICAgICAqIG9mIGRhdGEuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gQW4gb2JqZWN0IHRoYXQgcmVmbGVjdHMgdGhlIGNvbnRlbnQgaW4gdGhlIHN0b3JhZ2UgYXJlYS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRDb250ZW50c0FzT2JqZWN0KCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0geyB9O1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5pdGVyYXRlKCh2YWx1ZSwga2V5LCBpdGVyYXRpb25OdW1iZXIpID0+IHtcbiAgICAgICAgICAgIG91dHB1dFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBjYWxsYmFjayBpdGVyYXRvclxuICAgICAqIEBwYXJhbSB7KEFycmF5fEFycmF5QnVmZmVyfEJsb2J8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheXxJbnQ4QXJyYXl8SW50MTZBcnJheXxJbnQzMkFycmF5fFxuICAgICAqIE51bWJlcnxPYmplY3R8VWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxzdHJpbmcpfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaXRlcmF0aW9uTnVtYmVyXG4gICAgICovXG4gICAgLyoqXG4gICAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgZW50cmllcyBpbiB0aGUgc3RvcmFnZSBhcmVhLiBOb3RlIHRoYXQgaXRlcmF0aW9uXG4gICAgICogd2lsbCBzdG9wIGlmIGBjYWxsYmFja2AgcmV0dXJucyBhbnl0aGluZyBub24tYHVuZGVmaW5lZGAuXG4gICAgICpcbiAgICAgKiBBcyBsb25nIGFzIHdlJ3JlIHVzaW5nIExvY2FsRm9yYWdlLCB0aGlzIGlzIGVhc3kgYW5kIHByZXN1bWFibHkgbm90XG4gICAgICogbWVtb3J5LWludGVuc2l2ZSwgYXMgbG9uZyBhcyB0aGUgY2FsbGJhY2sgaXNuJ3Qgc3RvcmluZyBhbGwgb2YgdGhlIGVudGlyZXMuXG4gICAgICogQHBhcmFtIHtpdGVyYXRvcn0gY2FsbGJhY2sgLSBmdW5jdGlvbiBjYWxsZWQgb24gZWFjaCBrZXktdmFsdWUgcGFpclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGl0ZXJhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZUluc3RhbmNlLml0ZXJhdGUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGFzeW5jIGtleXNTdGFydGluZ1dpdGgoa2V5UHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VJbnN0YW5jZS5rZXlzU3RhcnRpbmdXaXRoKGtleVByZWZpeCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRzV2l0aChrZXlQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZUluc3RhbmNlLnN0YXJ0c1dpdGgoa2V5UHJlZml4KTtcbiAgICB9XG59XG5cbktleVZhbHVlU3RvcmFnZS5sb2NhbEZvcmFnZUluaXRpYWxpemVkID0gZmFsc2U7IC8vIHdvcmthcm91bmQgZm9yIHN0YXRpYyBjbGFzcyB2YXJpYWJsZVxuXG4vKiogQ2xhc3MgZm9yIG1haW50YWluaW5nIHBlcnNpc3RlbnQgY291bnRlcnMgKGUuZy4sIHVuaXF1ZSBJRHMpLiAqL1xuZXhwb3J0IGNsYXNzIENvdW50ZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHBlcnNpc3RlbnQgY291bnRlci4gTm90ZSB0aGF0LCBiZWNhdXNlIGNyZWF0aW5nIGEgY291bnRlclxuICAgICAqIHJlcXVpcmVzIGFzeW5jaHJvbm91cyBjYWxscyAod2hpY2ggY2Fubm90IGhhcHBlbiBpbiBhIGNvbnN0cnVjdG9yKSxcbiAgICAgKiB0aGUgY291bnRlciB3aWxsIG5vdCBiZSBzZXR1cCB1bnRpbCBhIHN1YnNlcXVlbnQgY2FsbCB0byBgaW5pdGlhbGl6ZSgpYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY291bnRlck5hbWUgLSBBIG5hbWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBjb3VudGVyLlxuICAgICAqIEBleGFtcGxlIHZhciBleGFtcGxlQ291bnRlciA9IGF3YWl0IChuZXcgQ291bnRlcihcImV4YW1wbGVOYW1lXCIpKS5pbml0aWFsaXplKCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY291bnRlck5hbWUpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyTmFtZSA9IGNvdW50ZXJOYW1lO1xuICAgICAgICB0aGlzLmNvdW50ZXJWYWx1ZSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGxldGUgY3JlYXRpb24gb2YgdGhlIHBlcnNpc3RlbnQgY291bnRlci4gUmV0dXJucyBpdHNlbGYgZm9yIGNvbnZlbmllbmNlLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwZXJzaXN0ZW50IGNvdW50ZXIuXG4gICAgICovXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYoQ291bnRlci5zdG9yYWdlID09IG51bGwpXG4gICAgICAgICAgICBDb3VudGVyLnN0b3JhZ2UgPSBhd2FpdCAobmV3IEtleVZhbHVlU3RvcmFnZShcIldlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2UuQ291bnRlclwiKSkuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB2YXIgaW5pdGlhbENvdW50ZXJWYWx1ZSA9IGF3YWl0IENvdW50ZXIuc3RvcmFnZS5nZXQodGhpcy5jb3VudGVyTmFtZSk7XG4gICAgICAgIGlmKGluaXRpYWxDb3VudGVyVmFsdWUgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuY291bnRlclZhbHVlID0gaW5pdGlhbENvdW50ZXJWYWx1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYXdhaXQgQ291bnRlci5zdG9yYWdlLnNldCh0aGlzLmNvdW50ZXJOYW1lLCB0aGlzLmNvdW50ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY291bnRlci4gVGhlIHZhbHVlIGlzIGNhY2hlZCBpbiBtZW1vcnksIHdoaWNoIGFsbG93c1xuICAgICAqIHRoaXMgZnVuY3Rpb24gdG8gYmUgc3luY2hyb25vdXMuXG4gICAgICogQHJldHVybnMge251bWJlcn0gVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNvdW50ZXIuXG4gICAgICovXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyVmFsdWU7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5jcmVtZW50QnlBbmRHZXQoaW5jVmFsdWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDb3VudGVyVmFsdWUgPSAodGhpcy5jb3VudGVyVmFsdWUgPSB0aGlzLmNvdW50ZXJWYWx1ZSArIGluY1ZhbHVlKTtcbiAgICAgICAgYXdhaXQgQ291bnRlci5zdG9yYWdlLnNldCh0aGlzLmNvdW50ZXJOYW1lLCB0aGlzLmNvdW50ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q291bnRlclZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgdmFsdWUgb2YgdGhlIGNvdW50ZXIgYW5kIHJldHVybiB0aGUgaW5jcmVtZW50ZWQgdmFsdWUuXG4gICAgICogVGhlIGNhY2hlZCBjb3VudGVyIHZhbHVlIGlzIHN5bmNocm9ub3VzbHkgaW5jcmVtZW50ZWQ7IHRoZSBzdG9yZWRcbiAgICAgKiBjb3VudGVyIHZhbHVlIGlzIGFzeW5jaHJvbm91c2x5IGluY3JlbWVudGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IC0gVGhlIGNvdW50ZXIgdmFsdWUgYWZ0ZXIgaW5jcmVtZW50aW5nLlxuICAgICAqL1xuICAgIGFzeW5jIGluY3JlbWVudEFuZEdldCgpIHtcbiAgICAgICAgLy8gU2F2aW5nIHRoZSBjdXJyZW50IGNvdW50ZXIgdmFsdWUgdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIGR1cmluZ1xuICAgICAgICAvLyB0aGUgYXN5bmNocm9ub3VzIHNhdmUgdG8gc3RvcmFnZVxuICAgICAgICB2YXIgY3VycmVudENvdW50ZXJWYWx1ZSA9ICh0aGlzLmNvdW50ZXJWYWx1ZSA9IHRoaXMuY291bnRlclZhbHVlICsgMSk7XG4gICAgICAgIGF3YWl0IENvdW50ZXIuc3RvcmFnZS5zZXQodGhpcy5jb3VudGVyTmFtZSwgdGhpcy5jb3VudGVyVmFsdWUpO1xuICAgICAgICByZXR1cm4gY3VycmVudENvdW50ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVyIGFuZCByZXR1cm4gdGhlIHZhbHVlIHByaW9yIHRvXG4gICAgICogaW5jcmVtZW50aW5nLiBJZGVudGljYWwgdG8gdGhlIFByb21pc2UgcmV0dXJuZWQgYnlcbiAgICAgKiBgY291bnRlci5pbmNyZW1lbnRBbmRHZXQoKS50aGVuKHZhbHVlID0+IHJldHVybiB2YWx1ZSAtIDEpYC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSAtIFRoZSBjb3VudGVyIHZhbHVlIGJlZm9yZSBpbmNyZW1lbnRpbmcuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QW5kSW5jcmVtZW50KCkge1xuICAgICAgICB2YXIgcmV0ID0gYXdhaXQgdGhpcy5pbmNyZW1lbnQoKSAtIDE7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlciwgaWdub3JpbmcgdGhlIHZhbHVlLiBJZGVudGljYWwgdG9cbiAgICAgKiB0aGUgUHJvbWlzZSByZXR1cm5lZCBieSBgY291bnRlci5pbmNyZW1lbnRBbmRHZXQudGhlbih2YWx1ZSA9PiByZXR1cm4pYC5cbiAgICAgKi9cbiAgICBhc3luYyBpbmNyZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmluY3JlbWVudEFuZEdldCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFuZFJlc2V0KCkge1xuICAgICAgICB2YXIgY3VycmVudENvdW50ZXJWYWx1ZSA9IHRoaXMuY291bnRlclZhbHVlO1xuICAgICAgICB0aGlzLmNvdW50ZXJWYWx1ZSA9IDA7XG4gICAgICAgIGF3YWl0IENvdW50ZXIuc3RvcmFnZS5zZXQodGhpcy5jb3VudGVyTmFtZSwgdGhpcy5jb3VudGVyVmFsdWUpO1xuICAgICAgICByZXR1cm4gY3VycmVudENvdW50ZXJWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gb2JqZWN0IHdpdGggYSBwcm9wZXJ0eS12YWx1ZSBwYWlyIGZvciBlYWNoIGNvdW50ZXIgbmFtZS12YWx1ZSBwYWlyLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IEFuIG9iamVjdCB0aGF0IHJlZmxlY3RzIHRoZSBzZXQgb2YgY291bnRlcnMuXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGdldENvbnRlbnRzQXNPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBDb3VudGVyLnN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVybCh1cmwpIHtcbiAgICB2YXIgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICAgIHZhciBub3JtYWxpemVkVXJsID0gKHVybE9iai5wcm90b2NvbCA/IHVybE9iai5wcm90b2NvbCA6IFwiaHR0cHM6XCIpICsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi8vXCIgKyB1cmxPYmouaG9zdG5hbWUgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICh1cmxPYmoucGF0aG5hbWUgPyB1cmxPYmoucGF0aG5hbWUgOiBcIlwiKTtcbiAgICByZXR1cm4gbm9ybWFsaXplZFVybDtcbn1cblxuLy8gV29ya2Fyb3VuZCBmb3Igc3RhdGljIGNsYXNzIHZhcmlhYmxlXG5Db3VudGVyLnN0b3JhZ2UgPSBudWxsO1xuXG4vLyBQcmV2ZW50cyBJbmRleGVkREIgZGF0YSBmcm9tIGdldHRpbmcgZGVsZXRlZCB3aXRob3V0IHVzZXIgaW50ZXJ2ZW50aW9uXG4vLyBJZ25vcmluZyB0aGUgcHJvbWlzZSByZXNvbHV0aW9uIGJlY2F1c2Ugd2Ugc3RpbGwgd2FudCB0byB1c2Ugc3RvcmFnZVxuLy8gZXZlbiBpZiBGaXJlZm94IHdvbid0IGd1YXJhbnRlZSBwZXJzaXN0ZW5jZVxubmF2aWdhdG9yLnN0b3JhZ2UucGVyc2lzdCgpOyIsIi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGFyb3VuZCBgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZWAsXG4gKiByb3V0aW5nIG1lc3NhZ2VzIHRvIHRoZSByaWdodCBsaXN0ZW5lcihzKSBiYXNlZCBvbiB0aGUgbWVzc2FnZSB0eXBlLlxuICogTWVzc2FnZSB0eXBlcyBhcmUgZGVmaW5lZCBhcyBzdHJpbmdzLCBhbmQgYSBtZXNzYWdlIG11c3QgYmUgYW4gb2JqZWN0IHdpdGggYVxuICogdHlwZSBwcm9wZXJ0eSB0byBiZSBoYW5kbGVkIGNvcnJlY3RseS5cbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWVzc2FnaW5nXG4gKi9cblxuaW1wb3J0ICogYXMgRGVidWdnaW5nIGZyb20gXCIuL0RlYnVnZ2luZy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIlV0aWxpdGllcy5NZXNzYWdpbmdcIik7XG5cbi8qKlxuICogQSBNYXAgdGhhdCBzdG9yZXMgbWVzc2FnZSBsaXN0ZW5lcnMuIFRoZSBrZXlzIGFyZSBtZXNzYWdlIHR5cGVzIGFuZCB0aGUgdmFsdWVzXG4gKiBhcmUgU2V0cyBvZiBtZXNzYWdlIGxpc3RlbmVycy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxzdHJpbmcsU2V0PGZ1bmN0aW9uPj59XG4gKi9cbmNvbnN0IG1lc3NhZ2VSb3V0ZXIgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQSBNYXAgdGhhdCBzdG9yZXMgbWVzc2FnZSBzY2hlbWFzLiBUaGUga2V5cyBhcmUgbWVzc2FnZSB0eXBlcyBhbmQgdGhlIHZhbHVlc1xuICogYXJlIHNjaGVtYXMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8c3RyaW5nLE9iamVjdD59XG4gKi9cbmNvbnN0IG1lc3NhZ2VTY2hlbWFzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlIG1vZHVsZSdzIGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYCBsaXN0ZW5lciBoYXMgYmVlbiByZWdpc3RlcmVkLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmb3IgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgIHRoYXQgcm91dGVzIG1lc3NhZ2VzIHRvIHRoZSByaWdodFxuICogbGlzdGVuZXIocykgYmFzZWQgb24gbWVzc2FnZSB0eXBlLiBTZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYFxuICogZm9yIGRldGFpbCBvbiB0aGUgcGFyYW1ldGVycy5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEFuIG9wdGlvbmFsIHJlc3BvbnNlIHRvIHRoZSBtZXNzYWdlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYnJvd3NlclJ1bnRpbWVMaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIHZhciBtZXNzYWdlTGlzdGVuZXJzO1xuICAgIHZhciBtZXNzYWdlU2NoZW1hO1xuICAgIHZhciBicm93c2VyUnVudGltZVJldHVyblZhbHVlO1xuICAgIC8vIElmIHRoZSBtZXNzYWdlIGlzIG5vdCBpbiBhbiBleHBlY3RlZCBmb3JtYXQgb3IgZG9lcyBub3QgaGF2ZSBhdCBsZWFzdFxuICAgIC8vIG9uZSByZWdpc3RlcmVkIGxpc3RlbmVyLCBpZ25vcmUgaXQuXG4gICAgaWYgKChtZXNzYWdlID09IG51bGwpIHx8XG4gICAgICAgICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJvYmplY3RcIikgfHxcbiAgICAgICAgIShcInR5cGVcIiBpbiBtZXNzYWdlKSB8fFxuICAgICAgICAodHlwZW9mIG1lc3NhZ2UudHlwZSAhPT0gXCJzdHJpbmdcIikgfHxcbiAgICAgICAgKChtZXNzYWdlTGlzdGVuZXJzID0gbWVzc2FnZVJvdXRlci5nZXQobWVzc2FnZS50eXBlKSkgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgZGVidWdMb2coXCJVbmV4cGVjdGVkIGJyb3dzZXIucnVudGltZSBtZXNzYWdlOiBcIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNjaGVtYSByZWdpc3RlcmVkIGZvciB0aGlzIG1lc3NhZ2UgdHlwZSwgY2hlY2sgdGhlIG1lc3NhZ2UgYWdhaW5zdCB0aGUgc2NoZW1hXG4gICAgaWYoKG1lc3NhZ2VTY2hlbWEgPSBtZXNzYWdlU2NoZW1hcy5nZXQobWVzc2FnZS50eXBlKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IodmFyIGZpZWxkIGluIG1lc3NhZ2VTY2hlbWEpIHtcbiAgICAgICAgICAgIGlmICghKGZpZWxkIGluIG1lc3NhZ2UpIHx8ICh0eXBlb2YgbWVzc2FnZVtmaWVsZF0gIT0gbWVzc2FnZVNjaGVtYVtmaWVsZF0pKSB7XG4gICAgICAgICAgICAgICAgZGVidWdMb2coXCJNaXNtYXRjaCBiZXR3ZWVuIG1lc3NhZ2UgYW5kIHNjaGVtYTogXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgbWVzc2FnZUxpc3RlbmVyIG9mIG1lc3NhZ2VMaXN0ZW5lcnMpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VMaXN0ZW5lclJldHVyblZhbHVlID0gbWVzc2FnZUxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgaWYgKChtZXNzYWdlTGlzdGVuZXJSZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAoYnJvd3NlclJ1bnRpbWVSZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkKSlcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiTXVsdGlwbGUgbGlzdGVuZXIgcmV0dXJuIHZhbHVlcyBmb3IgbWVzc2FnZSB0eXBlIFwiICsgbWVzc2FnZS50eXBlKTtcbiAgICAgICAgYnJvd3NlclJ1bnRpbWVSZXR1cm5WYWx1ZSA9IG1lc3NhZ2VMaXN0ZW5lclJldHVyblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYnJvd3NlclJ1bnRpbWVSZXR1cm5WYWx1ZTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBtZXNzYWdlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VUeXBlIC0gVGhlIHR5cGUgb2YgbWVzc2FnZSB0aGF0IHRyaWdnZXJzIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1lc3NhZ2VMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbiwgd2hpY2ggcmVjZWl2ZXMgdGhlIHNhbWVcbiAqIHBhcmFtZXRlcnMgYXMgaWYgaXQgaGFkIGJlZW4gY2FsbGVkIGJ5IGBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlYCwgYW5kIHRoYXQgY2FuXG4gKiByZXR1cm4gdGhlIHNhbWUgdmFsdWVzIGFzIGEgbGlzdGVuZXIgdG8gYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgLlxuICogQHBhcmFtIHtvYmplY3R9IFttZXNzYWdlU2NoZW1hXSAtIEFuIG9wdGlvbmFsIHNjaGVtYSB0byByZWdpc3RlciBmb3IgdGhlIG1lc3NhZ2UgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobWVzc2FnZVR5cGUsIG1lc3NhZ2VMaXN0ZW5lciwgbWVzc2FnZVNjaGVtYSkge1xuICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGJyb3dzZXJSdW50aW1lTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlTGlzdGVuZXJzID0gbWVzc2FnZVJvdXRlci5nZXQobWVzc2FnZVR5cGUpO1xuICAgIGlmIChtZXNzYWdlTGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVzc2FnZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgbWVzc2FnZVJvdXRlci5zZXQobWVzc2FnZVR5cGUsIG1lc3NhZ2VMaXN0ZW5lcnMpO1xuICAgIH1cbiAgICBtZXNzYWdlTGlzdGVuZXJzLmFkZChtZXNzYWdlTGlzdGVuZXIpO1xuXG4gICAgaWYobWVzc2FnZVNjaGVtYSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZWdpc3RlclNjaGVtYShtZXNzYWdlVHlwZSwgbWVzc2FnZVNjaGVtYSk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgbWVzc2FnZSBzY2hlbWEuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVR5cGUgLSBUaGUgdHlwZSBvZiBtZXNzYWdlIHRoYXQgbXVzdCBmb2xsb3cgdGhlIHNjaGVtYS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlU2NoZW1hIC0gQW4gb2JqZWN0IHdoZXJlIGVhY2ggZmllbGQgaGFzIGEgdmFsdWUgdGhhdCBpc1xuICogYSBidWlsdC1pbiB0eXBlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2NoZW1hKG1lc3NhZ2VUeXBlLCBtZXNzYWdlU2NoZW1hKSB7XG4gICAgaWYobWVzc2FnZVNjaGVtYXMuaGFzKG1lc3NhZ2VUeXBlKSlcbiAgICAgICAgZGVidWdMb2coXCJNdWx0aXBsZSBzY2hlbWFzIGZvciBtZXNzYWdlIHR5cGUgXCIgKyBtZXNzYWdlVHlwZSk7XG4gICAgbWVzc2FnZVNjaGVtYXMuc2V0KG1lc3NhZ2VUeXBlLCBtZXNzYWdlU2NoZW1hKTtcbn0iLCIvKipcbiAqIFRoaXMgbW9kdWxlIGVuYWJsZXMgcmVnaXN0ZXJpbmcgYnJvd3NlciBpZGxlIHN0YXRlIGxpc3RlbmVycyB3aXRoXG4gKiB2YXJ5aW5nIGRldGVjdGlvbiBpbnRlcnZhbHMuIFRoZSBtb2R1bGUgaXMgbmVlZGVkIGJlY2F1c2UgdGhlXG4gKiBXZWJFeHRlbnNpb25zIGBpZGxlYCBBUEkgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgb25lIGRldGVjdGlvblxuICogaW50ZXJ2YWwgcGVyIGV4dGVuc2lvbi5cbiAqIFxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbW9kdWxlIGNvbWJpbmVzIHRoZSBXZWJFeHRlbnNpb25zIGBpZGxlYFxuICogQVBJIGFuZCBgc2V0VGltZW91dGAuIEl0IGNvbmZpZ3VyZXMgdGhlIGBpZGxlYCBBUEkgdG8gdXNlIHRoZVxuICogbWluaW11bSBpZGxlIGRldGVjdGlvbiBpbnRlcnZhbCB3aXRoIGBpZGxlLnNldERldGVjdGlvbkludGVydmFsKClgLFxuICogcmVnaXN0ZXJzIGEgbGlzdGVuZXIgZm9yIHRoZSBgaWRsZS5vblN0YXRlQ2hhbmdlZGAgZXZlbnQsIGFuZCB0aGVuXG4gKiB1c2VzIGBzZXRUaW1lb3V0YCBhZnRlciB0aGUgYnJvd3NlciBnb2VzIGlkbGUgdG8gbm90aWZ5IGlkbGUgc3RhdGVcbiAqIGxpc3RlbmVycyB3aXRoIGRldGVjdGlvbiBpbnRlcnZhbHMgZ3JlYXRlciB0aGFuIHRoZSBtaW5pbXVtLiBJZiB0aGVyZVxuICogYXJlIGFueSBwZW5kaW5nIGlkbGUgbm90aWZpY2F0aW9uIHRpbWVvdXRzIHdoZW4gdGhlIGJyb3dzZXIgZ29lc1xuICogYWN0aXZlLCB0aG9zZSB0aW1lb3V0cyBhcmUgY2xlYXJlZC5cbiAqIFxuICogU29tZSBpbXBsZW1lbnRhdGlvbiBxdWlya3MgdG8gYmUgYXdhcmUgb2YgZm9yIHVzZSBhbmQgZnV0dXJlXG4gKiBkZXZlbG9wbWVudDpcbiAqIFxuICogICAqIFRoaXMgbW9kdWxlIGRlcGVuZHMgb24gY29uZmlndXJpbmcgdGhlIGRldGVjdGlvbiBpbnRlcnZhbFxuICogICAgIGZvciB0aGUgYGlkbGVgIEFQSSB0byBpdHMgbWluaW11bSB2YWx1ZS4gQW55IHN1YnNlcXVlbnQgY2hhbmdlcyB0b1xuICogICAgIHRoZSBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbCBpbiB0aGUgYGlkbGVgIEFQSSB3aWxsIHJlc3VsdCBpblxuICogICAgIHVucHJlZGljdGFibGUgYmVoYXZpb3IuXG4gKiBcbiAqICAgKiBJZGxlIHN0YXRlIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhpcyBtb2R1bGUgYXJlIG5vdCBndWFyYW50ZWVkIHRvXG4gKiAgICAgcmVmbGVjdCBpZGxlIHN0YXRlIHRyYW5zaXRpb25zIChlLmcuLCBhIGxpc3RlbmVyIG1pZ2h0IHJlY2VpdmVcbiAqICAgICBgXCJhY3RpdmVcImAgZm9sbG93ZWQgYnkgYFwiYWN0aXZlXCJgKS4gV2UgbWlnaHQgd2FudCB0byBpbXBsZW1lbnQgdGhpc1xuICogICAgIGd1YXJhbnRlZSBldmVudHVhbGx5LlxuICogXG4gKiAgICogQmVjYXVzZSB0aGUgYnJvd3NlciBpZGxlIHN0YXRlIHJlc2V0cyB3aXRoIGVhY2ggYnJvd3NlciBzZXNzaW9uLFxuICogICAgIGl0IGlzIG5vdCBhIHByb2JsZW0gdGhhdCB0aW1lb3V0cyBkbyBub3QgcGVyc2lzdCBiZXR3ZWVuIGJyb3dzZXJcbiAqICAgICBzZXNzaW9ucy5cbiAqIFxuICogICAqIFRoZSBtb2R1bGUgZG9lcyBub3QgZGlyZWN0bHkgaW50ZXJhY3Qgd2l0aCB0aGUgRmlyZWZveFxuICogICAgIFtgbnNJZGxlU2VydmljZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9UZWNoL1hQQ09NL1JlZmVyZW5jZS9JbnRlcmZhY2UvbnNJSWRsZVNlcnZpY2UpLFxuICogICAgIGV2ZW4gdGhvdWdoIGl0IHN1cHBvcnRzIHZhcnlpbmcgaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWxzLCBpblxuICogICAgIG9yZGVyIHRvIG1pbmltaXplIHByaXZpbGVnZWQgZXh0ZW5zaW9uIGNvZGUuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5VdGlsaXRpZXMuSWRsZVxuICovXG5cbi8qKlxuICogVGhlIG1pbmltdW0gaWRsZSBzdGF0ZSBkZXRlY3Rpb24gaW50ZXJ2YWwgKGluIHNlY29uZHMpIHN1cHBvcnRlZCBieVxuICogdGhlIGBpZGxlYCBBUEkuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtudW1iZXJ9XG4gKi9cbmNvbnN0IG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyA9IDE1O1xuXG4vKipcbiAqIFdoZXRoZXIgd2UgaGF2ZSBjb25maWd1cmVkICBjb25maWd1cmVkIHRoZSBpZGxlIHN0YXRlIGRldGVjdGlvblxuICogaW50ZXJ2YWwsIGNhY2hlZCB0aGUgaWRsZSBzdGF0ZSwgYW5kIHJlZ2lzdGVyZWQgdGhlIGlkbGUgc3RhdGVcbiAqIGxpc3RlbmVyLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGluaXRpYWxpemVkID0gZmFsc2U7XG5cbi8qKlxuICogQW4gZXN0aW1hdGUgb2YgdGhlIHRpbWUgKGluIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2gpIHdoZW4gdGhlXG4gKiBicm93c2VyIGxhc3QgZW50ZXJlZCBhbiBpZGxlIHN0YXRlLiBHZW5lcmF0ZWQgYnkgc3VidHJhY3RpbmcgdGhlXG4gKiBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbCAoY29udmVydGVkIHRvIG1pbGxpc2Vjb25kcykgZnJvbSB0aGVcbiAqIHRpbWUgdGhlIGJyb3dzZXIgbGFzdCBmaXJlZCBhbiBpZGxlIHN0YXRlIG5vdGlmaWNhdGlvbi5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqIEBkZWZhdWx0XG4gKi9cbnZhciBsYXN0SWRsZVRpbWUgPSAtMTtcblxuLyoqXG4gKiBBIGNhY2hlZCBjb3B5IG9mIHRoZSBicm93c2VyJ3MgY3VycmVudCBpZGxlIHN0YXRlLiBUaGlzIGNhY2hpbmcgZW5hYmxlc1xuICogc3luY2hyb25vdXMgY2hlY2tpbmcgb2YgdGhlIGN1cnJlbnQgaWRsZSBzdGF0ZS5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGN1cnJlbnRJZGxlU3RhdGUgPSBcImFjdGl2ZVwiO1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgc3RvcmVzIGJyb3dzZXIgaWRsZSBzdGF0ZSBsaXN0ZW5lcnMuIFRoZSBrZXlzIGFyZVxuICogZGV0ZWN0aW9uIGludGVydmFscyBpbiBzZWNvbmRzIGFuZCB0aGUgdmFsdWVzIGFyZSBTZXRzIG9mXG4gKiBicm93c2VyIGlkbGUgc3RhdGUgbGlzdGVuZXJzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdCB7TWFwPG51bWJlcixTZXQ8ZnVuY3Rpb24+Pn1cbiAqL1xuY29uc3QgaWRsZVN0YXRlTGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgc3RvcmVzIGJyb3dzZXIgaWRsZSBzdGF0ZSB0aW1lb3V0cy4gVGhlIGtleXMgYXJlXG4gKiBkZXRlY3Rpb24gaW50ZXJ2YWxzIGluIHNlY29uZHMgYW5kIHRoZSB2YWx1ZXMgYXJlIGB0aW1lb3V0SURgXG4gKiB2YWx1ZXMgZnJvbSBgc2V0VGltZW91dCgpYC5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxudW1iZXIsbnVtYmVyPn1cbiAqL1xuY29uc3QgaWRsZVN0YXRlVGltZW91dHMgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQ29uZmlndXJlIHRoZSBpZGxlIHN0YXRlIGRldGVjdGlvbiBpbnRlcnZhbCwgY2FjaGUgdGhlIGlkbGUgc3RhdGUsXG4gKiBhbmQgcmVnaXN0ZXIgdGhlIGlkbGUgc3RhdGUgbGlzdGVuZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmKGluaXRpYWxpemVkKVxuICAgICAgICByZXR1cm47XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGJyb3dzZXIuaWRsZS5zZXREZXRlY3Rpb25JbnRlcnZhbChtaW5pbXVtSWRsZVN0YXRlRGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xuICAgIGN1cnJlbnRJZGxlU3RhdGUgPSBhd2FpdCBicm93c2VyLmlkbGUucXVlcnlTdGF0ZShtaW5pbXVtSWRsZVN0YXRlRGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMpO1xuICAgIGlmKGN1cnJlbnRJZGxlU3RhdGUgPT09IFwiaWRsZVwiKVxuICAgICAgICBsYXN0SWRsZVRpbWUgPSBEYXRlLm5vdygpIC0gKG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAqIDEwMDApO1xuICAgIGJyb3dzZXIuaWRsZS5vblN0YXRlQ2hhbmdlZC5hZGRMaXN0ZW5lcihpZGxlT25TdGF0ZUNoYW5nZWRMaXN0ZW5lcik7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGJyb3dzZXIgaGFzIGJlZW4gaWRsZSBmb3IgYSBzcGVjaWZpZWQgdGltZS5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgc3luY2hyb25vdXMsIHVubGlrZSBgaWRsZS5xdWVyeVN0YXRlYC4gTm90ZSB0aGF0LFxuICogaWYgYW4gaWRsZSBzdGF0ZSBsaXN0ZW5lciBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCwgdGhpcyBmdW5jdGlvblxuICogd2lsbCBhbHdheXMgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGFjdGl2ZSBzdGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAtIFRoZSBkZXRlY3Rpb24gaW50ZXJ2YWxcbiAqIHRvIHVzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdGF0ZShkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcykge1xuICAgIGlmKGN1cnJlbnRJZGxlU3RhdGUgIT09IFwiaWRsZVwiKVxuICAgICAgICByZXR1cm4gY3VycmVudElkbGVTdGF0ZTtcblxuICAgIGlmKERhdGUubm93KCkgPj0gKGxhc3RJZGxlVGltZSArIChkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAqIDEwMDApKSlcbiAgICAgICAgcmV0dXJuIFwiaWRsZVwiO1xuXG4gICAgcmV0dXJuIFwiYWN0aXZlXCI7ICAgIFxufVxuXG4vKipcbiAqIEEgbGlzdGVuZXIgZm9yIGBpZGxlLm9uU3RhdGVDaGFuZ2VkYCB0aGF0IHN1cHBvcnRzIG5vdGlmeWluZ1xuICogaWRsZSBzdGF0ZSBsaXN0ZW5lcnMgd2l0aCB2YXJ5aW5nIGRldGVjdGlvbiBpbnRlcnZhbHMuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpZGxlT25TdGF0ZUNoYW5nZWRMaXN0ZW5lcihuZXdTdGF0ZSkge1xuICAgIGN1cnJlbnRJZGxlU3RhdGUgPSBuZXdTdGF0ZTtcblxuICAgIC8vIElmIHRoZSBicm93c2VyIGlkbGUgc3RhdGUgdHJhbnNpdGlvbnMgdG8gbm9uLWlkbGUuLi5cbiAgICBpZihuZXdTdGF0ZSAhPT0gXCJpZGxlXCIpIHtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBwZW5kaW5nIG5vdGlmaWNhdGlvbiB0aW1lb3V0cyBhbmQgZm9yZ2V0IHRoZSB0aW1lb3V0IElEc1xuICAgICAgICBmb3IoY29uc3QgaWRsZVN0YXRlVGltZW91dElEIG9mIGlkbGVTdGF0ZVRpbWVvdXRzLnZhbHVlcygpKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkbGVTdGF0ZVRpbWVvdXRJRCk7XG4gICAgICAgIGlkbGVTdGF0ZVRpbWVvdXRzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gTm90aWZ5IGFsbCB0aGUgaWRsZSBzdGF0ZSBsaXN0ZW5lcnNcbiAgICAgICAgZm9yKGNvbnN0IGlkbGVTdGF0ZUxpc3RlbmVyU2V0IG9mIGlkbGVTdGF0ZUxpc3RlbmVycy52YWx1ZXMoKSlcbiAgICAgICAgICAgIGZvcihjb25zdCBpZGxlU3RhdGVMaXN0ZW5lciBvZiBpZGxlU3RhdGVMaXN0ZW5lclNldClcbiAgICAgICAgICAgICAgICBpZGxlU3RhdGVMaXN0ZW5lcihuZXdTdGF0ZS5yZXBlYXQoMSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGJyb3dzZXIgaWRsZSBzdGF0ZSB0cmFuc2l0aW9ucyB0byBpZGxlLi4uXG5cbiAgICAvLyBSZW1lbWJlciBhbiBlc3RpbWF0ZSBvZiB3aGVuIHRoZSBicm93c2VyIGxhc3Qgd2VudCBpbnRvIGlkbGUgc3RhdGVcbiAgICBsYXN0SWRsZVRpbWUgPSBEYXRlLm5vdygpIC0gKG1pbmltdW1JZGxlU3RhdGVEZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcyAqIDEwMDApO1xuXG4gICAgLy8gU2V0IHRpbWVvdXRzIGZvciBhbGwgdGhlIGlkbGUgc3RhdGUgbGlzdGVuZXJzXG4gICAgZm9yKGNvbnN0IFtkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcywgaWRsZVN0YXRlTGlzdGVuZXJzV2l0aERldGVjdGlvbkludGVydmFsXSBvZiBpZGxlU3RhdGVMaXN0ZW5lcnMpXG4gICAgICAgIHNjaGVkdWxlSWRsZVN0YXRlVGltZW91dChpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwsIGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKTtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZSBhIHRpbWVvdXQgZm9yIGEgc2V0IG9mIGlkbGUgc3RhdGUgbGlzdGVuZXJzLlxuICogQHBhcmFtIHtTZXQ8ZnVuY3Rpb24+fSBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwgLSBUaGUgc2V0IG9mIGlkbGUgc3RhdGUgbGlzdGVuZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzIC0gVGhlIGlkbGUgc3RhdGUgZGV0ZWN0aW9uIGludGVydmFsIChpbiBzZWNvbmRzKSBmb3IgdGhpcyBzZXQgb2YgbGlzdGVuZXJzLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIHRpbWVvdXQgSUQgZm9yIHRoZSBzY2hlZHVsZWQgdGltZW91dC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNjaGVkdWxlSWRsZVN0YXRlVGltZW91dChpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwsIGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBsb25nIHRvIGRlbGF5IGJlZm9yZSBmaXJpbmcgdGhlIGxpc3RlbmVyc1xuICAgIC8vIElmIHRoZSBkZWxheSBpcyBuZWdhdGl2ZSwgc2V0IGl0IHRvIDAgKGkuZS4sIGZpcmUgYXMgc29vbiBhcyBwb3NzaWJsZSlcbiAgICB2YXIgZGVsYXlUaW1lID0gTWF0aC5tYXgobGFzdElkbGVUaW1lICsgKGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzICogMTAwMCkgLSBEYXRlLm5vdygpLCAwKTtcbiAgICB2YXIgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKGNvbnN0IGlkbGVTdGF0ZUxpc3RlbmVyIG9mIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbClcbiAgICAgICAgICAgIGlkbGVTdGF0ZUxpc3RlbmVyKFwiaWRsZVwiKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuICAgIGlkbGVTdGF0ZVRpbWVvdXRzLnNldChkZXRlY3Rpb25JbnRlcnZhbEluU2Vjb25kcywgdGltZW91dElkKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBicm93c2VyIGlkbGUgc3RhdGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpZGxlU3RhdGVMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIFRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgdGhlIHNhbWUgYGlkbGUuSWRsZVN0YXRlYCBwYXJhbWV0ZXJcbiAqIGFzIGlmIGl0IGhhZCBzdWJzY3JpYmVkIHRvIGlkbGUgc3RhdGUgZXZlbnRzIHdpdGhcbiAqIGBicm93c2VyLmlkbGUub25TdGF0ZUNoYW5nZWQuYWRkTGlzdGVuZXJgLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzIC0gVGhlIGRldGVjdGlvblxuICogaW50ZXJ2YWwgZm9yIGZpcmluZyB0aGUgaWRsZSBzdGF0ZSBsaXN0ZW5lci4gTm90ZSB0aGF0IHRoaXNcbiAqIHRpbWUgaW4gbWVhc3VyZWQgaW4gc2Vjb25kcyBiZWNhdXNlIHRoYXQgaXMgaG93IHRoZSBgaWRsZWBcbiAqIEFQSSBpcyBpbXBsZW1lbnRlZCwgZXZlbiB0aG91Z2ggbW9zdCB0aW1lcyBpbiB0aGUgbGlicmFyeVxuICogYXJlIG1lYXN1cmVkIGluIG1pbGxpc2Vjb25kcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVySWRsZVN0YXRlTGlzdGVuZXIoaWRsZVN0YXRlTGlzdGVuZXIsIGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKSB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGF0IGxlYXN0IG9uZSBpZGxlIHN0YXRlIGxpc3RlbmVyIHdpdGggdGhpc1xuICAgIC8vIGRldGVjdGlvbiBpbnRlcnZhbCwgYWRkIHRoZSBuZXcgbGlzdGVuZXIgdG8gdGhlIFNldCBvZiBsaXN0ZW5lcnNcbiAgICAvLyBhbmQgd2UncmUgZG9uZVxuICAgIHZhciBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwgPSBpZGxlU3RhdGVMaXN0ZW5lcnMuZ2V0KGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKTtcbiAgICBpZihpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwuYWRkKGlkbGVTdGF0ZUxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIFNldCBmb3IgbGlzdGVuZXJzIHdpdGggdGhpcyBkZXRlY3Rpb24gaW50ZXJ2YWwsIGluY2x1ZGluZ1xuICAgIC8vIHRoaXMgaWRsZSBzdGF0ZSBsaXN0ZW5lclxuICAgIGlkbGVTdGF0ZUxpc3RlbmVyc1dpdGhEZXRlY3Rpb25JbnRlcnZhbCA9IGlkbGVTdGF0ZUxpc3RlbmVycy5zZXQoZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMsIChuZXcgU2V0KCkpLmFkZChpZGxlU3RhdGVMaXN0ZW5lcikpO1xuXG4gICAgLy8gSWYgd2UncmUgaW4gaWRsZSBzdGF0ZSwgYW5kIHdlIGhhdmUgYmVlbiBpbiB0aGUgc3RhdGUgZm9yIGxlc3MgdGltZVxuICAgIC8vIHRoYW4gdGhlIGRldGVjdGlvbiBpbnRlcnZhbCBmb3IgdGhpcyBsaXN0ZW5lciAoaS5lLiwgdGhlIGxpc3RlbmVyXG4gICAgLy8gc2hvdWxkIHN0aWxsIHJlY2VpdmUgYSBzdGF0ZSBjaGFuZ2Ugbm90aWZpY2F0aW9uKSwgc2NoZWR1bGUgYVxuICAgIC8vIG5vdGlmaWNhdGlvblxuICAgIGlmKChjdXJyZW50SWRsZVN0YXRlID09PSBcImlkbGVcIikgJiYgKERhdGUubm93KCkgPCAobGFzdElkbGVUaW1lICsgZGV0ZWN0aW9uSW50ZXJ2YWxJblNlY29uZHMgKiAxMDAwKSkpXG4gICAgICAgIHNjaGVkdWxlSWRsZVN0YXRlVGltZW91dChpZGxlU3RhdGVMaXN0ZW5lcnNXaXRoRGV0ZWN0aW9uSW50ZXJ2YWwsIGRldGVjdGlvbkludGVydmFsSW5TZWNvbmRzKTtcbn0iLCIvLyBkb21haW5zLmpzIC0gQnJpYW4gQ2hpdmVycywgMy8xOS8yMDIxXG4vL1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGRvbWFpbiBuYW1lcyB0aGF0IHdlIGNhcmUgYWJvdXQuXG4vLyBJbmZvcm1hdGlvbiBmcm9tIHRoaXMgc3R1ZHkgd2lsbCBvbmx5IGJlIGNvbGxlY3RlZCBhYm91dFxuLy8gdGhlIGJlbG93IGRvbWFpbnMuXG5leHBvcnQgY29uc3QgZGVzdGluYXRpb25Eb21haW5zID0gW1xuICAgIFwiY25uLmNvbVwiLFxuICAgIFwic2ZjaHJvbmljbGUuY29tXCIsXG4gICAgXCJ5b3VyYmlnc2t5LmNvbVwiLFxuICAgIFwibm9ydGhwaW1hbmV3cy5jb21cIlxuXSIsIi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgdXRpbGl0aWVzIGZvciBtYXRjaGluZyBVUkxzIGFnYWluc3QgZG9tYWluIG5hbWVzLlxuICogXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLk1hdGNoaW5nXG4gKi9cbmltcG9ydCB7IGRlc3RpbmF0aW9uRG9tYWlucyB9IGZyb20gXCIuLi8uLi9kb21haW5zLmpzXCJcblxuLyoqIFxuICogQ2xhc3MgZm9yIHRlc3Rpbmcgd2hldGhlciBhIFVSTCBtYXRjaGVzIGEgc2V0IG9mIGRvbWFpbnMuXG4gKiBDdXJyZW50bHkgaW1wbGVtZW50ZWQgd2l0aCB0aGUgbmF0aXZlIFJlZ0V4cCBvdmVyIHRoZSBmdWxsIFVSTCwgd2hpY2ggZ2l2ZXMgZ29vZCBwZXJmb3JtYW5jZS5cbiAqIFdlIG1pZ2h0IGJlIGFibGUgdG8gc3BlZWQgdGhpcyB1cCBieSBwYXJzaW5nIHRoZSBVUkwgYW5kIHRoZW4gb25seSBtYXRjaGluZyBkb21haW5zLlxuICovXG5leHBvcnQgY2xhc3MgVXJsTWF0Y2hlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgVVJMIG1hdGNoZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZG9tYWlucyAtIFRoZSBzZXQgb2YgZG9tYWlucyB0byBtYXRjaCBhZ2FpbnN0LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW21hdGNoU3ViZG9tYWlucz10cnVlXSAtIFdoZXRoZXIgdG8gbWF0Y2ggc3ViZG9tYWlucyBvZiBkb21haW5zIGluIHRoZSBzZXQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnJlZ0V4cCA9IG5ldyBSZWdFeHAoY3JlYXRlVXJsUmVnZXhTdHJpbmcoZG9tYWlucywgbWF0Y2hTdWJkb21haW5zKSwgXCJpXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3Qgd2hldGhlciBhIFVSTCBtYXRjaGVzIGEgZG9tYWluIGluIHRoZSBzZXQgb2YgZG9tYWlucy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCB0byB0ZXN0LlxuICAgICAqL1xuICAgIHRlc3RVcmwodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ0V4cC50ZXN0KHVybCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZyBmb3IgbWF0Y2hpbmcgYSBVUkwgYWdhaW5zdCBhIHNldCBvZiBkb21haW5zLlxuICogV2lsbCBtYXRjaCBodHRwIGFuZCBodHRwcyBwcm90b2NvbHMuIEN1cnJlbnRseSBjYXNlIHNlbnNpdGl2ZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGRvbWFpbnMgLSBUaGUgc2V0IG9mIGRvbWFpbnMgdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW21hdGNoU3ViZG9tYWlucz10cnVlXSAtIFdoZXRoZXIgdG8gbWF0Y2ggc3ViZG9tYWlucyBvZiBkb21haW5zIGluIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmxSZWdleFN0cmluZyhkb21haW5zLCBtYXRjaFN1YmRvbWFpbnMgPSB0cnVlKSB7XG4gICAgdmFyIHVybE1hdGNoUkUgPSBcIl4oPzpodHRwfGh0dHBzKTovL1wiICsgKG1hdGNoU3ViZG9tYWlucyA/IFwiKD86W0EtWmEtejAtOVxcXFwtXStcXFxcLikqXCIgOiBcIlwiKSArIFwiKD86XCI7XG4gICAgZm9yIChjb25zdCBkb21haW4gb2YgZG9tYWlucylcbiAgICAgICAgdXJsTWF0Y2hSRSA9IHVybE1hdGNoUkUgKyBkb21haW4ucmVwbGFjZSgvXFwuL2csIFwiXFxcXC5cIikgKyBcInxcIjtcbiAgICB1cmxNYXRjaFJFID0gdXJsTWF0Y2hSRS5zdWJzdHJpbmcoMCwgdXJsTWF0Y2hSRS5sZW5ndGggLSAxKSArIFwiKSg/OiR8KC98XFxcXD8pLiopXCI7ICBcIikoPzokfC8uKilcIjtcbiAgICByZXR1cm4gdXJsTWF0Y2hSRTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBhcnJheSBvZiBtYXRjaCBwYXR0ZXJucyBmb3IgbWF0Y2hpbmcgYSBVUkwgYWdhaW5zdCBhIHNldCBvZiBkb21haW5zLlxuICogV2lsbCBtYXRjaCBodHRwIGFuZCBodHRwcyBwcm90b2NvbHMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIC0gVGhlIHNldCBvZiBkb21haW5zIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaFN1YmRvbWFpbnM9dHJ1ZV0gLSBXaGV0aGVyIHRvIG1hdGNoIHN1YmRvbWFpbnMgb2YgZG9tYWlucyBpbiB0aGUgc2V0LlxuICogQHJldHVybnMge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBtYXRjaCBwYXR0ZXJucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5KGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyA9IHRydWUpIHtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJucyA9IFsgXTtcbiAgICBmb3IgKGNvbnN0IGRvbWFpbiBvZiBkb21haW5zKSB7XG4gICAgICAgIG1hdGNoUGF0dGVybnMucHVzaChcImh0dHA6Ly9cIiArICggbWF0Y2hTdWJkb21haW5zID8gXCIqLlwiIDogXCJcIiApICsgZG9tYWluICsgXCIvKlwiKTtcbiAgICAgICAgbWF0Y2hQYXR0ZXJucy5wdXNoKFwiaHR0cHM6Ly9cIiArICggbWF0Y2hTdWJkb21haW5zID8gXCIqLlwiIDogXCJcIiApICsgZG9tYWluICsgXCIvKlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoUGF0dGVybnM7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgbWF0Y2ggcGF0dGVybnMgZm9yIG1hdGNoaW5nIGEgVVJMIGFnYWluc3QgYSBzZXQgb2YgZG9tYWlucy5cbiAqIFdpbGwgbWF0Y2ggaHR0cCBhbmQgaHR0cHMgcHJvdG9jb2xzLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZG9tYWlucyAtIFRoZSBzZXQgb2YgZG9tYWlucyB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2hTdWJkb21haW5zPXRydWVdIC0gV2hldGhlciB0byBtYXRjaCBzdWJkb21haW5zIG9mIGRvbWFpbnMgaW4gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgbWF0Y2ggcGF0dGVybnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheVdpdGhQYXRoKGRvbWFpbnMsIG1hdGNoU3ViZG9tYWlucyA9IHRydWUpIHtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJucyA9IFsgXTtcbiAgICBmb3IgKGNvbnN0IGRvbWFpbiBvZiBkb21haW5zKSB7XG4gICAgICAgIG1hdGNoUGF0dGVybnMucHVzaChcImh0dHA6Ly9cIiArICggbWF0Y2hTdWJkb21haW5zID8gXCIqLlwiIDogXCJcIiApICsgZG9tYWluICsgXCIvKi8qXCIpO1xuICAgICAgICBtYXRjaFBhdHRlcm5zLnB1c2goXCJodHRwczovL1wiICsgKCBtYXRjaFN1YmRvbWFpbnMgPyBcIiouXCIgOiBcIlwiICkgKyBkb21haW4gKyBcIi8qLypcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaFBhdHRlcm5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R1ZHlQYXRocygpIHtcbiAgICB2YXIgc3R1ZHlQYXRocyA9IHt9O1xuICAgIHN0dWR5UGF0aHMuZG9tYWlucyA9IG5ldyBVcmxNYXRjaGVyKGRlc3RpbmF0aW9uRG9tYWlucyk7XG4gICAgc3R1ZHlQYXRocy5wYXRocyA9IHt9XG4gICAgc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzID0gZGVzdGluYXRpb25Eb21haW5zO1xuICAgIHJldHVybiBzdHVkeVBhdGhzO1xufVxuXG5cbi8vZXhwb3J0IGZ1bmN0aW9uIGdldEFkRmlsdGVycygpIHtcbi8vICAgIHJldHVybiBhZENzc1NlbGVjdG9ycztcbi8vfVxuIiwiLyoqIFxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSByZXNlYXJjaCBhYnN0cmFjdGlvbiBvdmVyIGJyb3dzZXIgZXZlbnRzIHJlbGF0ZWQgdG9cbiAqIHdlYnBhZ2UgbG9hZGluZyBhbmQgdXNlciBhdHRlbnRpb24uIFRoZSBhYnN0cmFjdGlvbiBjb25zaXN0cyBvZiB0aGUgZm9sbG93aW5nXG4gKiBldmVudHM6XG4gKiAgICogUGFnZSBWaXNpdCBTdGFydCAtIHRoZSBicm93c2VyIGhhcyBzdGFydGVkIHRvIGxvYWQgYSB3ZWJwYWdlIGluIGEgdGFiXG4gKiAgICogUGFnZSBBdHRlbnRpb24gU3RhcnQgLSB0aGUgdXNlciBoYXMgc2hpZnRlZCBhdHRlbnRpb24gdG8gYSB0YWJcbiAqICAgKiBQYWdlIEF0dGVudGlvbiBTdG9wIC0gdGhlIHVzZXIgaGFzIHNoaWZ0ZWQgYXR0ZW50aW9uIGZyb20gYSB0YWJcbiAqICAgKiBQYWdlIFZpc2l0IFN0b3AgLSB0aGUgYnJvd3NlciBoYXMgdW5sb2FkZWQgYSB3ZWJwYWdlIGZyb20gYSB0YWJcbiAqICAgXG4gKiBBdHRlbnRpb24gaXMgZGVmaW5lZCBhcyBzYXRpc2Z5aW5nIGFsbCBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiAgICogVGhlIHRhYiBpcyB0aGUgYWN0aXZlIHRhYiBpbiBpdHMgYnJvd3NlciB3aW5kb3dcbiAqICAgKiBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHRhYiBpcyB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICogICAqIFRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93IGhhcyBmb2N1cyBpbiB0aGUgb3BlcmF0aW5nIHN5c3RlbVxuICogICAqIChPcHRpb25hbCkgVGhlIHVzZXIgaGFzIHByb3ZpZGVkIGlucHV0IHRvIHRoZSBicm93c2VyIHdpdGhpbiB0aGUgbGFzdCBOIHNlY29uZHNcbiAqICAgXG4gKiBJZiB0aGUgdXNlcidzIGF0dGVudGlvbiBpcyBvbiBhIHRhYiBhbmQgdGhlIHRhYiBjbG9zZXMsIHRoZSBzZXF1ZW5jZSBvZiBldmVudHNcbiAqIHdpbGwgYmUgUGFnZSBBdHRlbnRpb24gU3RvcCAtPiBQYWdlIFZpc2l0IFN0b3AuIFRoZSB0aW1lc3RhbXAgaXMgc3luY3Jvbml6ZWQgZm9yXG4gKiB0aGUgZXZlbnRzLlxuICpcbiAqIElmIHRoZSB1c2VyJ3MgYXR0ZW50aW9uIGlzIG9uIGEgdGFiIGFuZCB0aGUgcGFnZSBpbiB0aGUgdGFiIGNoYW5nZXMsIHRoZSBzZXF1ZW5jZVxuICogb2YgZXZlbnRzIHdpbGwgYmUgUGFnZSBBdHRlbnRpb24gU3RvcCAtPiBQYWdlIFZpc2l0IFN0b3AgLT4gUGFnZSBWaXNpdCBTdGFydCAtPlxuICogUGFnZSBBdHRlbnRpb24gU3RhcnQuIFRoZSB0aW1lc3RhbXAgaXMgc3luY3Jvbml6ZWQgZm9yIHRoZSBldmVudHMuXG4gKlxuICogVGhlIHBhZ2UgdmlzaXQgYW5kIGF0dGVudGlvbiBldmVudHMgYXJlIGltcGxlbWVudGVkIGluIG9uZSBtb2R1bGUgaW4gb3JkZXIgdG9cbiAqIGd1YXJhbnRlZSB0aGUgb3JkZXJpbmcgb2YgZXZlbnRzLlxuICpcbiAqIFJlcHJlc2VudGVkIGFzIGEgZmluaXRlLXN0YXRlIGF1dG9tYXRvbiwgdGhlIHJlc2VhcmNoIGFic3RyYWN0aW9uIGNvbnNpc3RzIG9mXG4gKiB0aGUgZm9sbG93aW5nIHN0YXRlcyBhbmQgdHJhbnNpdGlvbnMuICBcbiAqIGBgYCAgIFxuICogICAgICAgIFBhZ2UgQXR0ZW50aW9uIFN0YXJ0IDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiBQYWdlIEF0dGVudGlvbiBTdG9wICBcbiAqICAgICAgICAgICAgICAgICAgXiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcbiAqICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcbiAqICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWICBcbiAqICAgUGFnZSBWaXNpdCBTdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiBQYWdlIFZpc2l0IFN0b3AgIFxuICogYGBgICAgXG4gKiBOb3RlIHRoYXQgdGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgaWRsZSBBUEksIHdoaWNoIGhhcyBhIGNvdXBsZSBxdWlya3MgaW4gRmlyZWZveDpcbiAqICAgKiBUaGVyZSBpcyBhIGZpdmUtc2Vjb25kIGludGVydmFsIHdoZW4gcG9sbGluZyBpZGxlIHN0YXR1cyBmcm9tIHRoZSBvcGVyYXRpbmdcbiAqICAgICBzeXN0ZW0uXG4gKiAgICogRGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybSwgdGhlIGlkbGUgQVBJIHJlcG9ydHMgZWl0aGVyIHRpbWUgc2luY2UgdXNlciBpbnB1dCB0b1xuICogICAgIHRoZSBicm93c2VyIG9yIHRpbWUgc2luY2UgdXNlciBpbnB1dCB0byB0aGUgb3BlcmF0aW5nIHN5c3RlbS5cbiAqXG4gKiBUaGUgcG9sbGluZyBpbnRlcnZhbCBjb2Fyc2VucyB0aGUgdGltaW5nIG9mIHBhZ2UgYXR0ZW50aW9uIGV2ZW50cyByZWxhdGVkIHRvIGlkbGUgc3RhdGUuXG4gKiBBcyBsb25nIGFzIHRoZSBwb2xsaW5nIGludGVydmFsIGlzIHJlbGF0aXZlbHkgc2hvcnQgaW4gY29tcGFyaXNvbiB0byB0aGUgaWRsZSB0aHJlc2hvbGQsXG4gKiB0aGF0IHNob3VsZCBub3QgYmUgYW4gaXNzdWUuXG4gKiBcbiAqIFRoZSBwbGF0Zm9ybS1zcGVjaWZpYyBtZWFuaW5nIG9mIGlkbGUgc3RhdGUgc2hvdWxkIGFsc28gbm90IGJlIGFuIGlzc3VlLiBUaGVyZSBpcyBvbmx5IGFcbiAqIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIG1lYW5pbmdzIG9mIGlkbGUgc3RhdGUgd2hlbiB0aGUgdXNlciBpcyBwcm92aWRpbmcgaW5wdXQgdG9cbiAqIGFub3RoZXIgYXBwbGljYXRpb247IGlmIHRoZSB1c2VyIGlzIHByb3ZpZGluZyBpbnB1dCB0byB0aGUgYnJvd3Nlciwgb3IgaXMgbm90IHByb3ZpZGluZ1xuICogaW5wdXQgYXQgYWxsLCB0aGUgdHdvIG1lYW5pbmdzIGFyZSBpZGVudGljYWwuIEluIHRoZSBzY2VuYXJpbyB3aGVyZSB0aGUgdXNlciBpcyBwcm92aWRpbmdcbiAqIGlucHV0IHRvIGFub3RoZXIgYXBwbGljYXRpb24sIHRoZSBicm93c2VyIHdpbGwgbG9zZSBmb2N1cyBpbiB0aGUgb3BlcmF0aW5nIHN5c3RlbTsgdGhpc1xuICogbW9kdWxlIHdpbGwgZGV0ZWN0IHRoYXQgd2l0aCB0aGUgd2luZG93cyBBUEkgYW5kIGZpcmUgYSBwYWdlIGF0dGVudGlvbiBzdG9wIChpZiBuZWVkZWQpLlxuICogXG4gKiBTb21lIGtub3duIGxpbWl0YXRpb25zIHRvIGJlIGF3YXJlIG9mOlxuICogICAqIFRoZSBtb2R1bGUgZG9lcyBub3QgY3VycmVudGx5IGZpbHRlciB0YWItbGV2ZWwgY29udGVudCBieSBwcm90b2NvbCBvciBjb250ZW50IHR5cGUuIFdlXG4gKiAgICAgbWlnaHQgd2FudCB0byByZXZpc2l0IHRoaXMuIEZpbHRlcmluZyBieSBwcm90b2NvbCBpcyBlYXN54oCUdGhlIG1vZHVsZSBhbHJlYWR5IHRyYWNrc1xuICogICAgIHdoZXRoZXIgYSB0YWIgY29udGFpbnMgY29udGVudCBsb2FkZWQgdmlhIEhUVFAgb3IgSFRUUFMuIEZpbHRlcmluZyBieSBjb250ZW50IHR5cGUgaXNcbiAqICAgICBtb3JlIGRpZmZpY3VsdC4gV2UgbWlnaHQgYmUgYWJsZSB0byBhY2NvbXBsaXNoIHRoYXQgYnkgdXNpbmcgYHdlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWRgXG4gKiAgICAgdG8gc3RhcnQgcGFnZSB2aXNpdHMgYW5kIGNoZWNraW5nIHRoZSBgQ29udGVudC1UeXBlYCBoZWFkZXIsIHRob3VnaCB3ZSdkIHN0aWxsIGhhdmUgdG8gaGFuZGxlXG4gKiAgICAgdGFicyB0aGF0IGFyZSBvcGVuIHdoZW4gdGhlIG1vZHVsZSBpbml0aWFsaXplcywgYW5kIHdlJ2QgbWlzcyBwYWdlcyB0aGF0IHJlbHkgb24gTUlNRSB0eXBlXG4gKiAgICAgc25pZmZpbmcuXG4gKiAgICogV2hlbiB0aGUgbW9kdWxlIGluaXRpYWxpemVzLCB0aGVyZSBpc24ndCBhIGdvb2Qgd2F5IHRvIGdldCB0aGUgcmVmZXJyZXJzIGZvciBvcGVuXG4gKiAgICAgdGFicyB3aXRob3V0IGVpdGhlciBkZWxheWluZyBpbml0aWFsaXphdGlvbiBvciByaXNraW5nIGEgcmFjZSBjb25kaXRpb24uIFRoZVxuICogICAgIHJlZmVycmVycyBmb3IgcGFnZXMgb3BlbiB3aGVuIHRoZSBtb2R1bGUgaW5pdGlhbGl6ZXMgYXJlIGN1cnJlbnRseSBzZXQgdG8gYFwiXCJgLlxuICogXG4gKiBBbmQgc29tZSBpbXBsZW1lbnRhdGlvbiBxdWlya3MgdG8gYmUgYXdhcmUgb2YgZm9yIGZ1dHVyZSBkZXZlbG9wbWVudCBvbiB0aGlzIG1vZHVsZTpcbiAqICAgKiBUaGUgYHRhYnMub25DcmVhdGVkYCBldmVudCBhcHBlYXJzIHRvIGNvbnNpc3RlbnRseSBmaXJlIGJlZm9yZSB0aGUgYHdpbmRvd3Mub25DcmVhdGVkYFxuICogICAgIGV2ZW50LCBzbyB0aGlzIG1vZHVsZSBsaXN0ZW5zIHRvIHRoZSBgdGFicy5vbkNyZWF0ZWRgIGV2ZW50IHRvIGdldCBhbiBlYXJsaWVyIHZpZXcgb2ZcbiAqICAgICB3aW5kb3cgZGV0YWlscy4gVGhlIG1vZHVsZSBhc3N1bWVzIHRoYXQgYSBgdGFicy5vbkNyZWF0ZWRgIGV2ZW50IHdpdGggYSBwb3NpdGl2ZSB0YWJcbiAqICAgICBJRCBpcyBmb3IgYSBgXCJub3JtYWxcImAgb3IgYFwicG9wdXBcImAgd2luZG93IHR5cGUuXG4gKiAgICogTm9uLWJyb3dzZXIgd2luZG93cyBkbyBub3QgYXBwZWFyIGluIHRoZSByZXN1bHRzIG9mIGB3aW5kb3dzLmdldEFsbCgpYCwgYW5kIGNhbGxpbmdcbiAqICAgICBgd2luZG93cy5nZXQoKWAgb24gYSBub24tYnJvd3NlciB3aW5kb3cgdGhyb3dzIGFuIGVycm9yLiBTd2l0Y2hpbmcgZm9jdXMgdG8gYSBub24tXG4gKiAgICAgYnJvd3NlciB3aW5kb3cgd2lsbCwgaG93ZXZlciwgZmlyZSB0aGUgYHdpbmRvd3Mub25Gb2N1c0NoYW5nZWRgIGV2ZW50LiBUaGUgbW9kdWxlXG4gKiAgICAgYXNzdW1lcyB0aGF0IGlmIGB3aW5kb3dzLm9uRm9jdXNDaGFuZ2VkYCBmaXJlcyB3aXRoIGFuIHVua25vd24gd2luZG93LCB0aGF0IHdpbmRvd1xuICogICAgIGlzIGEgbm9uLWJyb3dzZXIgd2luZG93LlxuICogICAqIFRoZSBtb2R1bGUgYXNzdW1lcyB0aGF0IHZhbGlkIHRhYiBJRHMgYW5kIHdpbmRvdyBJRHMgYXJlIGFsd2F5cyA+PSAwLlxuICogICAqIFRoZSBtb2R1bGUgYXNzdW1lcyB0aGF0LCBpZiB0aGVyZSB3YXMgYSBgd2ViUmVxdWVzdC5vbkJlZm9yZVNlbmRIZWFkZXJzYCBldmVudCBiZWZvcmUgYVxuICogICAgIGB0YWJzLm9uVXBkYXRlZGAgZXZlbnQgd2l0aCB0aGUgc2FtZSB0YWIgSUQgYW5kIFVSTCwgdGhlIHdlYiByZXF1ZXN0IG1hdGNoZXMgdGhlIHRhYlxuICogICAgIHVwZGF0ZS4gVGhpcyBhc3N1bXB0aW9uIGlzIG5lZWRlZCB0byBtYXRjaCByZWZlcnJlcnMgdG8gbmV3IHBhZ2VzIGluIHRhYnMuXG4gKiAgICogVGhlIG1vZHVsZSBsaXN0ZW5zIGZvciBgdGFicy5vbkF0dGFjaGVkYCB0byB0cmFjayB0YWIgbW92ZW1lbnQgYmV0d2VlbiB3aW5kb3dzLiBJdCBkb2VzXG4gKiAgICAgbm90IGxpc3RlbiBmb3IgYHRhYnMub25EZXRhY2hlZGAgc28gdGhhdCB0YWJzIHJlbWFpbiBhc3NvY2lhdGVkIHdpdGggdmFsaWQgd2luZG93cyBhbmRcbiAqICAgICBiZWNhdXNlIGl0J3MgbGlrZWx5IHRoZSB1c2VyIGlzIGp1c3QgbW92aW5nIHRoZSB0YWIgd2l0aGluIHRoZSB0YWIgc3RyaXAgaW4gYSB3aW5kb3cuXG4gKiAgICAgXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuVXRpbGl0aWVzLlBhZ2VFdmVudHNcbiAqL1xuXG5pbXBvcnQgKiBhcyBJZGxlIGZyb20gXCIuL0lkbGUuanNcIlxuXG4vKipcbiAqIFRoZSB0aHJlc2hvbGQgTiAoaW4gc2Vjb25kcykgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGhlIGJyb3dzZXIgaGFzIHRoZSB1c2VyJ3MgYXR0ZW50aW9uLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3QgaWRsZVRocmVzaG9sZCA9IDE1O1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgdXNlciBpbnB1dCBpbiBkZXRlcm1pbmluZyBhdHRlbnRpb24gc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3QgY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24gPSB0cnVlO1xuXG4vKipcbiAqIEEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnRzLlxuICogQGNhbGxiYWNrIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy53aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogTm90ZSB0aGF0IHRhYnMgY2FuIHN1YnNlcXVlbnRseSBtb3ZlIGJldHdlZW4gd2luZG93cy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXRhaWxzLnVybCAtIFRoZSBVUkwgb2YgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLlxuICogQHBhcmFtIHtzdHJpbmd9IGRldGFpbHMucmVmZXJyZXIgLSBUaGUgcmVmZXJyZXIgVVJMIGZvciB0aGUgcGFnZSBsb2FkaW5nIGluIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSB2aXNpdCBzdGFydCBldmVudCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gV2hldGhlciB0byBub3RpZnkgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHByb3BlcnR5IHtwYWdlVmlzaXRTdGFydExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBzZXQgb2YgbGlzdGVuZXIgZGV0YWlscyBmb3IgcGFnZSB2aXNpdCBzdGFydCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtTZXQ8UGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHM+fVxuICovXG5jb25zdCBwYWdlVmlzaXRTdGFydExpc3RlbmVyU2V0ID0gbmV3IFNldCgpO1xuXG4vKiogXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50cy5cbiAqIEBwYXJhbSB7cGFnZVZpc2l0U3RhcnRMaXN0ZW5lcn0gcGFnZVZpc2l0U3RhcnRMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdGlmeUFib3V0Q3VycmVudFBhZ2VzPXRydWVdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciB0aGUgY3VycmVudGx5IG9wZW4gc2V0IG9mIHBhZ2VzLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJpdmF0ZVdpbmRvd3M9ZmFsc2VdIC0gV2hldGhlciB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkIGZvciBldmVudHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB0byB1c2UgaWYgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgdGhlIGN1cnJlbnRseSBvcGVuIHNldCBvZiBwYWdlcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZVZpc2l0U3RhcnRMaXN0ZW5lcihwYWdlVmlzaXRTdGFydExpc3RlbmVyLCBub3RpZnlBYm91dEN1cnJlbnRQYWdlcyA9IHRydWUsIHByaXZhdGVXaW5kb3dzID0gZmFsc2UsIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBpbml0aWFsaXplKCk7XG4gICAgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lclNldC5hZGQoe1xuICAgICAgICBsaXN0ZW5lcjogcGFnZVZpc2l0U3RhcnRMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG4gICAgaWYobm90aWZ5QWJvdXRDdXJyZW50UGFnZXMpXG4gICAgICAgIG5vdGlmeVBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJBYm91dEN1cnJlbnRQYWdlcyhwYWdlVmlzaXRTdGFydExpc3RlbmVyLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbn1cblxuLyoqIFxuICogTm90aWZ5IHBhZ2UgdmlzaXQgc3RhcnQgbGlzdGVuZXJzIGFib3V0IGEgcGFnZSB2aXNpdCBzdGFydCBldmVudC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgb2YgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZmVycmVyIC0gVGhlIHJlZmVycmVyIFVSTCBmb3IgdGhlIHBhZ2UgbG9hZGluZyBpbiB0aGUgdGFiLCBvciBgXCJcImAgaWZcbiAqIHRoZXJlIGlzIG5vIHJlZmVycmVyLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93IC0gV2hldGhlciB0aGUgZXZlbnQgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZVN0YW1wPURhdGUubm93KCldIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5mdW5jdGlvbiBub3RpZnlQYWdlVmlzaXRTdGFydExpc3RlbmVycyh0YWJJZCwgd2luZG93SWQsIHVybCwgcmVmZXJyZXIsIHByaXZhdGVXaW5kb3csIHRpbWVTdGFtcCA9IERhdGUubm93KCkpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJTZXQpXG4gICAgICAgIGlmKCFwcml2YXRlV2luZG93IHx8IHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXJEZXRhaWxzLnByaXZhdGVXaW5kb3dzKVxuICAgICAgICAgICAgcGFnZVZpc2l0U3RhcnRMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIHRhYklkLFxuICAgICAgICAgICAgICAgIHdpbmRvd0lkLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLnJlcGVhdCgxKSwgLy8gY29weSB0aGUgc3RyaW5nIGluIGNhc2UgYSBsaXN0ZW5lciBtb2RpZmllcyBpdFxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiByZWZlcnJlci5yZXBlYXQoMSksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZVdpbmRvdyxcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pO1xufVxuXG4vKipcbiAqIE5vdGlmeSBhIHBhZ2UgdmlzaXQgc3RhcnQgbGlzdGVuZXIgYWJvdXQgdGhlIGN1cnJlbnQgc2V0IG9mIG9wZW4gcGFnZXMuIFVzZWZ1bCBmb3Igd2hlblxuICogYSBsaXN0ZW5lciBpcyByZWdpc3RlcmVkIGluIHRoZSBtaWRkbGUgb2YgYSBicm93c2luZyBzZXNzaW9uIChlLmcuLCBiZWNhdXNlIHRoZSBleHRlbnNpb25cbiAqIHdhcyBqdXN0IGluc3RhbGxlZCBvciB0aGUgdXNlciBqdXN0IGdhdmUgY29uc2VudCkuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtwYWdlVmlzaXRTdGFydExpc3RlbmVyfSBwYWdlVmlzaXRTdGFydExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBhYm91dCBwYWdlcyBpbiBwcml2YXRlXG4gKiB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIGxpc3RlbmVyIHdhcyByZWdpc3RlcmVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBub3RpZnlQYWdlVmlzaXRTdGFydExpc3RlbmVyQWJvdXRDdXJyZW50UGFnZXMocGFnZVZpc2l0U3RhcnRMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCkge1xuICAgIC8vIExvYWQgdGhlIHRhYnMgZnJvbSB0aGUgdGFiIHN0YXRlIGNhY2hlIHRvIGF2b2lkIGluY29uc2lzdGVuY2llc1xuICAgIGZvciAoY29uc3QgW3RhYklkLCB0YWJEZXRhaWxzXSBvZiB0YWJTdGF0ZSlcbiAgICAgICAgaWYoIXRhYkRldGFpbHMucHJpdmF0ZVdpbmRvdyB8fCBwcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIHRhYklkOiB0YWJJZCxcbiAgICAgICAgICAgICAgICB3aW5kb3dJZDogdGFiRGV0YWlscy53aW5kb3dJZCxcbiAgICAgICAgICAgICAgICB1cmw6IHRhYkRldGFpbHMudXJsLnJlcGVhdCgxKSwgLy8gY29weSB0aGUgc3RyaW5nIGluIGNhc2UgYSBsaXN0ZW5lciBtb2RpZmllcyBpdFxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiB0YWJEZXRhaWxzLnJlZmVycmVyLnJlcGVhdCgxKSxcbiAgICAgICAgICAgICAgICBwcml2YXRlV2luZG93OiB0YWJEZXRhaWxzLnByaXZhdGVXaW5kb3csXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiB0aW1lU3RhbXBcbiAgICAgICAgICAgIH0pO1xufVxuXG4vKipcbiAqIEEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHBhZ2UgdmlzaXQgc3RvcCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZVZpc2l0U3RvcExpc3RlbmVyXG4gKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyAtIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhZ2UgdmlzaXQgc3RvcCBldmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLnRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy53aW5kb3dJZCAtIFRoZSB3aW5kb3cgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgdmlzaXQgc3RhcnQgc3RvcCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcHJvcGVydHkge3BhZ2VWaXNpdFN0b3BMaXN0ZW5lcn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUaGUgc2V0IG9mIGxpc3RlbmVyIGRldGFpbHMgZm9yIHBhZ2UgdmlzaXQgc3RvcCBldmVudHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0YW50IHtTZXQ8UGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lclNldCA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIHZpc2l0IHN0b3AgZXZlbnRzLlxuICogQHBhcmFtIHtwYWdlVmlzaXRTdG9wTGlzdGVuZXJ9IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByaXZhdGVXaW5kb3dzPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZCBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZVZpc2l0U3RvcExpc3RlbmVyKHBhZ2VWaXNpdFN0b3BMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MgPSBmYWxzZSkge1xuICAgIGluaXRpYWxpemUoKTtcbiAgICBwYWdlVmlzaXRTdG9wTGlzdGVuZXJTZXQuYWRkKHtcbiAgICAgICAgbGlzdGVuZXI6IHBhZ2VWaXNpdFN0b3BMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG59XG5cbi8qKiBcbiAqIE5vdGlmeSBwYWdlIHZpc2l0IHN0b3AgbGlzdGVuZXJzIGFib3V0IGEgcGFnZSB2aXNpdCBzdG9wIGV2ZW50LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHdpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSBldmVudCBpcyBpbiBhIHByaXZhdGUgd2luZG93LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lU3RhbXA9RGF0ZS5ub3coKV0gLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdGlmeVBhZ2VWaXNpdFN0b3BMaXN0ZW5lcnModGFiSWQsIHdpbmRvd0lkLCBwcml2YXRlV2luZG93LCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgZm9yIChjb25zdCBwYWdlVmlzaXRTdG9wTGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lclNldClcbiAgICAgICAgaWYoIXByaXZhdGVXaW5kb3cgfHwgcGFnZVZpc2l0U3RvcExpc3RlbmVyRGV0YWlscy5wcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VWaXNpdFN0b3BMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoeyB0YWJJZCwgd2luZG93SWQsIHRpbWVTdGFtcCB9KTtcbn1cblxuLyoqXG4gKiBBIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50YWJJZCAtIFRoZSB0YWIgY29udGFpbmluZyB0aGUgcGFnZSwgdW5pcXVlIHRvIHRoZSBicm93c2luZyBzZXNzaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMud2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIE5vdGUgdGhhdCB0YWJzIGNhbiBzdWJzZXF1ZW50bHkgbW92ZSBiZXR3ZWVuIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy50aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGJyb3dzZXIgZXZlbnQgZmlyZWQuXG4gKi9cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGEgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcHJvcGVydHkge3BhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyfSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIFRoZSBzZXQgb2YgbGlzdGVuZXIgZGV0YWlscyBmb3IgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnRzLlxuICogQHByaXZhdGVcbiAqIEBjb25zdGFudCB7U2V0PFBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyU2V0ID0gbmV3IFNldCgpO1xuXG4vKiogXG4gKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudHMuXG4gKiBAcGFyYW0ge3BhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyfSBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi4gXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RpZnlBYm91dEN1cnJlbnRQYWdlcz10cnVlXSAtIFdoZXRoZXIgdGhlIGxpc3RlbmVyIHNob3VsZCBiZSBmaXJlZFxuICogZm9yIHRoZSBwYWdlIHRoYXQgY3VycmVudGx5IGhhcyBhdHRlbnRpb24gKGlmIHRoZXJlIGlzIG9uZSkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcml2YXRlV2luZG93cz1mYWxzZV0gLSBXaGV0aGVyIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgZmlyZWQgZm9yIGV2ZW50cyBpbiBwcml2YXRlIHdpbmRvd3MuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHRvIHVzZSBpZiB0aGUgbGlzdGVuZXIgc2hvdWxkIGJlIGZpcmVkXG4gKiBmb3IgdGhlIHBhZ2UgdGhhdCBjdXJyZW50bHkgaGFzIGF0dGVudGlvbiAoaWYgdGhlcmUgaXMgb25lKS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIocGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIsIG5vdGlmeUFib3V0Q3VycmVudFBhZ2VBdHRlbnRpb24gPSB0cnVlLCBwcml2YXRlV2luZG93cyA9IGZhbHNlLCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyU2V0LmFkZCh7XG4gICAgICAgIGxpc3RlbmVyOiBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcixcbiAgICAgICAgcHJpdmF0ZVdpbmRvd3M6IHByaXZhdGVXaW5kb3dzXG4gICAgfSk7XG4gICAgaWYobm90aWZ5QWJvdXRDdXJyZW50UGFnZUF0dGVudGlvbilcbiAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJBYm91dEN1cnJlbnRQYWdlQXR0ZW50aW9uKHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbn1cblxuLyoqIFxuICogTm90aWZ5IHBhZ2UgYXR0ZW50aW9uIHN0YXJ0IGxpc3RlbmVycyBhbmQgY29udGVudCBzY3JpcHRzIGFib3V0IGEgcGFnZSBhdHRlbnRpb24gc3RhcnQgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIGV2ZW50IGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuZnVuY3Rpb24gbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKHRhYklkLCB3aW5kb3dJZCwgcHJpdmF0ZVdpbmRvdywgdGltZVN0YW1wID0gRGF0ZS5ub3coKSkge1xuICAgIGZvciAoY29uc3QgcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJEZXRhaWxzIG9mIHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyU2V0KVxuICAgICAgICBpZighcHJpdmF0ZVdpbmRvdyB8fCBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHMucHJpdmF0ZVdpbmRvd3MpXG4gICAgICAgICAgICBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lckRldGFpbHMubGlzdGVuZXIoeyB0YWJJZCwgd2luZG93SWQsIHRpbWVTdGFtcCB9KTtcbiAgICBpZihub3RpZnlDb250ZW50U2NyaXB0c0Fib3V0UGFnZUF0dGVudGlvbiAmJiAoIXByaXZhdGVXaW5kb3cgfHwgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uKSlcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RhcnRcIiB9KTtcbn1cblxuLyoqXG4gKiBOb3RpZnkgYSBwYWdlIGF0dGVudGlvbiBzdGFydCBsaXN0ZW5lciBhYm91dCB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgaW4gdGhlIGN1cnJlbnRseVxuICogZm9jdXNlZCB3aW5kb3cgKGlmIHRoZXJlIGlzIHN1Y2ggYSB0YWIpLiBVc2VmdWwgZm9yIHdoZW4gYSBsaXN0ZW5lciBpcyByZWdpc3RlcmVkIGluIHRoZVxuICogbWlkZGxlIG9mIGEgYnJvd3Npbmcgc2Vzc2lvbiAoZS5nLiwgYmVjYXVzZSB0aGUgZXh0ZW5zaW9uIHdhcyBqdXN0IGluc3RhbGxlZCBvciB0aGUgdXNlclxuICoganVzdCBnYXZlIGNvbnNlbnQpLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7cGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJ9IHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyLlxuICogQHBhcmFtIHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBpZiB0aGUgcGFnZSB3aXRoXG4gYXR0ZW50aW9uIGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyQWJvdXRDdXJyZW50UGFnZUF0dGVudGlvbihwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCkge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIGFjdGl2ZSB0YWIgb3Igbm8gZm9jdXNlZCB3aW5kb3csIHRoZXJlIGlzIG5vIG5vdGlmaWNhdGlvbiB0byBwcm92aWRlXG4gICAgaWYoKGN1cnJlbnRBY3RpdmVUYWIgPCAwKSB8fCAoY3VycmVudEZvY3VzZWRXaW5kb3cgPCAwKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gSWYgdGhlIG1vZHVsZSBzaG91bGQgY29uc2lkZXIgdXNlciBpbnB1dCBhbmQgdGhlIGJyb3dzZXIgaXMgaW5hY3RpdmUsIHRoZXJlIGlzIG5vIG5vdGlmaWNhdGlvbiB0byBwcm92aWRlXG4gICAgaWYoY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24gJiYgIWJyb3dzZXJJc0FjdGl2ZSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gSWYgdGhlIGxpc3RlbmVyIHNob3VsZCBub3QgcmVjZWl2ZSBub3RpZmljYXRpb25zIGFib3V0IHByaXZhdGUgd2luZG93cyBhbmQgdGhpcyBpcyBhIHByaXZhdGUgd2luZG93XG4gICAgLy8gYWNjb3JkaW5nIHRvIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUsIHRoZXJlIGlzIG5vIG5vdGlmaWNhdGlvbiB0byBwcm92aWRlXG4gICAgaWYoIXByaXZhdGVXaW5kb3dzICYmIGlzUHJpdmF0ZVdpbmRvdyhjdXJyZW50Rm9jdXNlZFdpbmRvdykpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICAvLyBPdGhlcndpc2UsIG5vdGlmeSB0aGUgbGlzdGVuZXJcbiAgICBwYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcih7XG4gICAgICAgIHRhYklkOiBjdXJyZW50QWN0aXZlVGFiLFxuICAgICAgICB3aW5kb3dJZDogY3VycmVudEZvY3VzZWRXaW5kb3csXG4gICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wXG4gICAgfSk7XG59XG5cbi8qKlxuICogQSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudHMuXG4gKiBAY2FsbGJhY2sgcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lclxuICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHMgLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGFiSWQgLSBUaGUgdGFiIGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXRhaWxzLndpbmRvd0lkIC0gVGhlIHdpbmRvdyBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBOb3RlIHRoYXQgdGFicyBjYW4gc3Vic2VxdWVudGx5IG1vdmUgYmV0d2VlbiB3aW5kb3dzLlxuICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLlxuICovXG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlsc1xuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlV2luZG93cyAtIFdoZXRoZXIgdG8gbm90aWZ5IHRoZSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgZXZlbnRzIGluIHByaXZhdGUgd2luZG93cy5cbiAqIEBwcm9wZXJ0eSB7cGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJ9IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIHNldCBvZiBsaXN0ZW5lciBkZXRhaWxzIGZvciBwYWdlIGF0dGVudGlvbiBzdG9wIGV2ZW50cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3RhbnQge1NldDxQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscz59XG4gKi9cbmNvbnN0IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJTZXQgPSBuZXcgU2V0KCk7XG5cbi8qKiBcbiAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRzLlxuICogQHBhcmFtIHtwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyfSBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLiBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyLCBwcml2YXRlV2luZG93cyA9IGZhbHNlKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJTZXQuYWRkKHtcbiAgICAgICAgbGlzdGVuZXI6IHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIsXG4gICAgICAgIHByaXZhdGVXaW5kb3dzOiBwcml2YXRlV2luZG93c1xuICAgIH0pO1xufVxuXG4vKiogXG4gKiBOb3RpZnkgcGFnZSBhdHRlbnRpb24gc3RvcCBsaXN0ZW5lcnMgYW5kIGNvbnRlbnQgc2NyaXB0cyBhYm91dCBhIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnQuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhYklkIC0gVGhlIHRhYiBjb250YWluaW5nIHRoZSBwYWdlLCB1bmlxdWUgdG8gdGhlIGJyb3dzaW5nIHNlc3Npb24uXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHBhZ2UsIHVuaXF1ZSB0byB0aGUgYnJvd3Npbmcgc2Vzc2lvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIGV2ZW50IGlzIGluIGEgcHJpdmF0ZSB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RpbWVTdGFtcD1EYXRlLm5vdygpXSAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgYnJvd3NlciBldmVudCBmaXJlZC5cbiAqL1xuZnVuY3Rpb24gbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnModGFiSWQsIHdpbmRvd0lkLCBwcml2YXRlV2luZG93LCB0aW1lU3RhbXAgPSBEYXRlLm5vdygpKSB7XG4gICAgZm9yIChjb25zdCBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscyBvZiBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyU2V0KVxuICAgICAgICBpZighcHJpdmF0ZVdpbmRvdyB8fCBwYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyRGV0YWlscy5wcml2YXRlV2luZG93cylcbiAgICAgICAgICAgIHBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJEZXRhaWxzLmxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICB0YWJJZDogdGFiSWQsXG4gICAgICAgICAgICAgICAgd2luZG93SWQ6IHdpbmRvd0lkLFxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogdGltZVN0YW1wXG4gICAgICAgICAgICB9KTtcbiAgICBpZihub3RpZnlDb250ZW50U2NyaXB0c0Fib3V0UGFnZUF0dGVudGlvbiAmJiAoIXByaXZhdGVXaW5kb3cgfHwgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uKSlcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RvcFwiIH0pO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0cyBpbiBub24tcHJpdmF0ZSB3aW5kb3dzIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXRlIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgbm90aWZ5Q29udGVudFNjcmlwdHNBYm91dFBhZ2VBdHRlbnRpb24gPSBmYWxzZTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHMgaW4gcHJpdmF0ZSB3aW5kb3dzIGFib3V0IHBhZ2UgYXR0ZW50aW9uIHN0YXRlIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKiBAZGVmYXVsdFxuICovXG52YXIgbm90aWZ5Q29udGVudFNjcmlwdHNJblByaXZhdGVXaW5kb3dzQWJvdXRQYWdlQXR0ZW50aW9uID0gZmFsc2U7XG5cbi8qKlxuICogU2V0IHdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0cyBhYm91dCBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICogQ29udGVudCBzY3JpcHRzIHdpbGwgcmVjZWl2ZSB0aGUgbWVzc2FnZSBgeyB0eXBlOiBcIldlYlNjaWVuY2UucGFnZUF0dGVudGlvblN0YXJ0XCIgfWBcbiAqIHdoZW4gdGhlIHBhZ2UgZ2FpbnMgYXR0ZW50aW9uLCBhbmQgd2lsbCByZWNlaXZlIHRoZSBtZXNzYWdlIGB7IHR5cGU6IFwiV2ViU2NpZW5jZS5wYWdlQXR0ZW50aW9uU3RvcFwiIH1gXG4gKiB3aGVuIHRoZSBwYWdlIGxvc2VzIGF0dGVudGlvbi4gVGhpcyBtb2R1bGUgZG9lcyBub3QgcHJvdmlkZSBub3RpZmljYXRpb25zXG4gKiB0byBjb250ZW50IHNjcmlwdHMgYWJvdXQgcGFnZSB2aXNpdCBzdGF0ZSBjaGFuZ2VzLCBiZWNhdXNlIGNvbnRlbnQgc2NyaXB0c1xuICogY2FuIG9ic2VydmUgdGhvc2UgZGlyZWN0bHkgYW5kIHRoZXJlIGlzIGEgcG9zc2libGUgcmFjZSBjb25kaXRpb24gd2l0aCBjbG9zaW5nIGEgcGFnZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbm90aWZpY2F0aW9uU2V0dGluZyAtIFdoZXRoZXIgdG8gbm90aWZ5IGNvbnRlbnQgc2NyaXB0c1xuICogYWJvdXQgcGFnZSBhdHRlbnRpb24gc3RhdGUgY2hhbmdlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpdmF0ZVdpbmRvd3MgLSBXaGV0aGVyIHRvIG5vdGlmeSBjb250ZW50IHNjcmlwdHMgaW4gcHJpdmF0ZSB3aW5kb3dzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UGFnZUF0dGVudGlvbkNvbnRlbnRTY3JpcHRNZXNzYWdlcyhub3RpZmljYXRpb25TZXR0aW5nLCBwcml2YXRlV2luZG93cyA9IGZhbHNlKSB7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIG5vdGlmeUNvbnRlbnRTY3JpcHRzQWJvdXRQYWdlQXR0ZW50aW9uID0gbm90aWZpY2F0aW9uU2V0dGluZztcbiAgICBub3RpZnlDb250ZW50U2NyaXB0c0luUHJpdmF0ZVdpbmRvd3NBYm91dFBhZ2VBdHRlbnRpb24gPSBwcml2YXRlV2luZG93cztcbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgaW4gdGhlIGN1cnJlbnRseSBmb2N1c2VkIGJyb3dzaW5nIHdpbmRvdy4gSGFzIHRoZSB2YWx1ZSAtMVxuICogaWYgdGhlcmUgaXMgbm8gc3VjaCB0YWIuIFxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG52YXIgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBicm93c2luZyB3aW5kb3cuIEhhcyB0aGUgdmFsdWUgLTEgaWYgdGhlcmUgaXMgbm8gc3VjaCB3aW5kb3cuIFxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG52YXIgY3VycmVudEZvY3VzZWRXaW5kb3cgPSAtMTtcblxuLyoqXG4gKiBDaGVja3MgZm9yIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqICAgKiBUaGUgdGFiIGlzIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiBpbiB0aGUgY3VycmVudGx5IGZvY3VzZWQgd2luZG93LlxuICogICAqIFRoZSB3aW5kb3cgaXMgdGhlIGN1cnJlbnRseSBmb2N1c2VkIHdpbmRvdy5cbiAqICAgKiBUaGUgYnJvd3NlciBpcyBhY3RpdmUgKGkuZS4sIG5vdCBpZGxlKSwgaWYgdGhlIG1vZHVsZSBpcyBjb25maWd1cmVkIHRvXG4gKiAgICAgY29uc2lkZXIgdXNlciBpbnB1dCBpbiBkZXRlcm1pbmluZyB0aGUgYXR0ZW50aW9uIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gd2luZG93SWQgLSBUaGUgd2luZG93IHRvIGNoZWNrLlxuICovXG5mdW5jdGlvbiBjaGVja0ZvckF0dGVudGlvbih0YWJJZCwgd2luZG93SWQpIHtcbiAgICByZXR1cm4gKChjdXJyZW50QWN0aXZlVGFiID09IHRhYklkKSAmJiAoY3VycmVudEZvY3VzZWRXaW5kb3cgPT0gd2luZG93SWQpICYmIChjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbiA/IGJyb3dzZXJJc0FjdGl2ZSA6IHRydWUpKTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXaW5kb3dEZXRhaWxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIG9mIHdpbmRvdy4gVGhpcyBzdHJpbmcgY2FuIGhhdmUgdGhlXG4gKiBzYW1lIHZhbHVlcyBhcyBgd2luZG93cy5XaW5kb3dUeXBlYCAoYFwibm9ybWFsXCJgLCBgXCJwb3B1cFwiYCwgYFwicGFuZWxcImAsIGFuZFxuICogYFwiZGV2dG9vbHNcImApLCBwbHVzIHRoZSB2YWx1ZSBgXCJub3JtYWxvcnBvcHVwXCJgIGlmIHdlIGRvbid0IHlldCBrbm93IHdoaWNoXG4gKiBvZiB0aGUgdHdvIHR5cGVzIHRoZSB3aW5kb3cgaXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWN0aXZlVGFiIC0gVGhlIElEIG9mIHRoZSBhY3RpdmUgdGFiIGluIHRoZSB3aW5kb3csXG4gKiBvciAtMSBpZiB0aGVyZSBpcyBubyBhY3RpdmUgdGFiLlxuICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YWN5IC0gV2hldGhlciB0aGUgd2luZG93IGlzIGEgcHJpdmF0ZSB3aW5kb3cuIFZhbHVlc1xuICogYXJlIGBcIm5vcm1hbFwiYCBmb3IgYSBub24tcHJpdmF0ZSB3aW5kb3csIGBcInByaXZhdGVcImAgZm9yIGEgcHJpdmF0ZSB3aW5kb3csXG4gKiBhbmQgYFwidW5rbm93blwiYCBpZiB0aGUgd2luZG93J3MgcHJpdmFjeSBzdGF0dXMgaXMgdW5rbm93bi5cbiAqL1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgdHJhY2tzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGJyb3dzZXIgd2luZG93cy4gV2UgbmVlZCB0aGlzIGNhY2hlZFxuICogc3RhdGUgdG8gYXZvaWQgYXN5bmNocm9ub3VzIHF1ZXJpZXMgd2hlbiB0aGUgZm9jdXNlZCB3aW5kb3cgY2hhbmdlcy4gVGhlXG4gKiBrZXlzIGFyZSB0YWIgSURzIGFuZCB0aGUgdmFsdWVzIGFyZSBXaW5kb3dEZXRhaWxzIG9iamVjdHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFdpbmRvd0RldGFpbHM+fVxuICogQGRlZmF1bHRcbiAqL1xuY29uc3Qgd2luZG93U3RhdGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogVXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUgd2l0aCBuZXcgaW5mb3JtYXRpb24gYWJvdXQgYSB3aW5kb3cuIElmXG4gKiB3ZSBhbHJlYWR5IGtub3cgbW9yZSBzcGVjaWZpYyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgd2luZG93IHRoYW5cbiAqIHRoZSBuZXcgaW5mb3JtYXRpb24sIGlnbm9yZSB0aGUgbmV3IGluZm9ybWF0aW9uLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgSUQuXG4gKiBAcGFyYW0ge1dpbmRvd0RldGFpbHN9IHdpbmRvd0RldGFpbHMgLSBUaGUgbmV3IGluZm9ybWF0aW9uIGFib3V0IHRoZVxuICogd2luZG93LlxuICovXG5mdW5jdGlvbiB1cGRhdGVXaW5kb3dTdGF0ZSh3aW5kb3dJZCwge1xuICAgIHR5cGUgPSBcInVua25vd25cIixcbiAgICBhY3RpdmVUYWIsXG4gICAgcHJpdmFjeSA9IFwidW5rbm93blwiXG59KSB7XG4gICAgdmFyIHdpbmRvd0RldGFpbHMgPSB3aW5kb3dTdGF0ZS5nZXQod2luZG93SWQpO1xuXG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbnkgY2FjaGVkIHN0YXRlIG9uIHRoZSB3aW5kb3csIHNhdmVcbiAgICAvLyB3aGF0IHdlIGtub3cgbm93IGFuZCBiZSBkb25lXG4gICAgaWYod2luZG93RGV0YWlscyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHdpbmRvd1N0YXRlLnNldCh3aW5kb3dJZCwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogKGFjdGl2ZVRhYiAhPT0gdW5kZWZpbmVkKSA/IGFjdGl2ZVRhYiA6IC0xLFxuICAgICAgICAgICAgcHJpdmFjeTogcHJpdmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cGRhdGUgaGFzIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmRvdyB0eXBlXG4gICAgLy8gdGhhbiB0aGUgY2FjaGVkIHdpbmRvdyBkZXRhaWxzLCB1cGRhdGUgdGhlIGNhY2hlZCB3aW5kb3dcbiAgICAvLyB0eXBlXG4gICAgaWYoKHR5cGUgIT09IFwidW5rbm93blwiKSAmJlxuICAgICAgICAoKHdpbmRvd0RldGFpbHMudHlwZSA9PT0gXCJ1bmtub3duXCIpIHx8XG4gICAgICAgICh0eXBlICE9PSBcIm5vcm1hbG9ycG9wdXBcIikgJiYgKHdpbmRvd0RldGFpbHMudHlwZSA9PT0gXCJub3JtYWxvcnBvcHVwXCIpKSlcbiAgICAgICAgd2luZG93RGV0YWlscy50eXBlID0gdHlwZTtcblxuICAgIC8vIElmIHRoZSB1cGRhdGUgaGFzIGFuIGFjdGl2ZSB0YWIgSUQsIHVwZGF0ZSB0aGUgY2FjaGVkXG4gICAgLy8gYWN0aXZlIHRhYiBJRFxuICAgIGlmKGFjdGl2ZVRhYiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB3aW5kb3dEZXRhaWxzLmFjdGl2ZVRhYiA9IGFjdGl2ZVRhYjtcblxuICAgIC8vIElmIHRoZSB1cGRhdGUgaGFzIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHdpbmRvd1xuICAgIC8vIHByaXZhY3kgcHJvcGVydHkgdGhhbiB0aGUgY2FjaGVkIHdpbmRvdyBkZXRhaWxzLFxuICAgIC8vIHVwZGF0ZSB0aGUgY2FjaGVkIHdpbmRvdyBwcml2YWN5IHByb3BlcnR5XG4gICAgaWYoKHByaXZhY3kgIT09IFwidW5rbm93blwiKSAmJiAod2luZG93RGV0YWlscy5wcml2YWN5ID09PSBcInVua25vd25cIikpXG4gICAgICAgIHdpbmRvd0RldGFpbHMucHJpdmFjeSA9IHByaXZhY3k7XG59XG5cbi8qKlxuICogTG9vayB1cCB0aGUgcHJpdmFjeSBwcm9wZXJ0eSBvZiBhIHdpbmRvdyBpbiB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZS5cbiAqIElmIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlIGRvZXMgbm90IGluY2x1ZGUgdGhlIHdpbmRvdyBvciB0aGUgd2luZG93XG4gKiBwcml2YWN5IHByb3BlcnR5IGlzIHVua25vd24gKG5laXRoZXIgb2Ygd2hpY2ggc2hvdWxkIGhhcHBlbiEpLCBhc3N1bWVcbiAqIGl0J3MgYSBub3JtYWwgd2luZG93LlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSB3aW5kb3cgSUQuXG4gKiBAcGFyYW0ge1dpbmRvd0RldGFpbHN9IFt3aW5kb3dEZXRhaWxzXSAtIFRoZSBXaW5kb3dEZXRhaWxzIG9iamVjdFxuICogZm9yIHRoZSB3aW5kb3csIGlmIGl0J3MgYWxyZWFkeSBiZWVuIHJldHJpZXZlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSB3aW5kb3cgaXMgYSBwcml2YXRlIHdpbmRvdy5cbiAqL1xuZnVuY3Rpb24gaXNQcml2YXRlV2luZG93KHdpbmRvd0lkLCB3aW5kb3dEZXRhaWxzKSB7XG4gICAgaWYod2luZG93RGV0YWlscyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB3aW5kb3dEZXRhaWxzID0gd2luZG93U3RhdGUuZ2V0KHdpbmRvd0lkKTtcbiAgICByZXR1cm4gKHdpbmRvd0RldGFpbHMgIT09IHVuZGVmaW5lZCkgPyAod2luZG93RGV0YWlscy5wcml2YWN5ID09PSBcInByaXZhdGVcIikgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUYWJEZXRhaWxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdXJsIC0gVGhlIFVSTCBsb2FkZWQgaW4gdGhlIHRhYi5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSByZWZlcnJlciBVUkwgZm9yIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVXaW5kb3cgLSBXaGV0aGVyIHRoZSB0YWIgaXMgaW4gYSBwcml2YXRlIHdpbmRvdy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aW5kb3dJZCAtIFRoZSBJRCBvZiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHRhYi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNXZWJDb250ZW50IC0gV2hldGhlciB0aGUgdGFiIGNvbnRhaW5zIG9yZGluYXJ5IHdlYlxuICogY29udGVudCAoaS5lLiwgYSBVUkwgc3RhcnRpbmcgd2l0aCBgXCJodHRwOi8vXCJgIG9yIGBcImh0dHBzOi8vXCJgKS5cbiAqL1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgdHJhY2tzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGJyb3dzZXIgdGFicy4gV2UgbmVlZCB0aGlzIGNhY2hlZFxuICogc3RhdGUgdG8gYXZvaWQgaW5jb25zaXN0ZW5jaWVzIHdoZW4gcmVnaXN0ZXJpbmcgYSBwYWdlIHZpc2l0IHN0YXJ0IGxpc3RlbmVyXG4gKiBhbmQgdG8gZmlsdGVyIG5vdGlmaWNhdGlvbnMgZm9yIHRhYnMgdGhhdCBkb24ndCBjb250YWluIG9yZGluYXJ5IHdlYnBhZ2VzLlxuICogVGhlIGtleXMgYXJlIHRhYiBJRHMgYW5kIHRoZSB2YWx1ZXMgYXJlIFRhYkRldGFpbHMgb2JqZWN0cy5cbiAqIEBwcml2YXRlXG4gKiBAY29uc3Qge01hcDxudW1iZXIsVGFiRGV0YWlscz59XG4gKiBAZGVmYXVsdFxuICovXG5jb25zdCB0YWJTdGF0ZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHRhYiBzdGF0ZSBjYWNoZSB3aXRoIG5ldyBpbmZvcm1hdGlvbiBhYm91dCBhIHRhYi4gQW55XG4gKiBleGlzdGluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGFiIGlzIHJlcGxhY2VkLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZCAtIFRoZSB0YWIgSUQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCBsb2FkZWQgaW4gdGhlIHRhYi5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSByZWZlcnJlciBVUkwgZm9yIHRoZSB0YWIsIG9yIGBcIlwiYCBpZlxuICogdGhlcmUgaXMgbm8gcmVmZXJyZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJpdmF0ZVdpbmRvdyAtIFdoZXRoZXIgdGhlIHRhYiBpcyBpbiBhIHByaXZhdGVcbiAqIHdpbmRvdy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB3aW5kb3dJZCAtIFRoZSBJRCBvZiB0aGUgd2luZG93IGNvbnRhaW5pbmcgdGhlIHRhYi5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlVGFiU3RhdGUodGFiSWQsIHVybCwgcmVmZXJyZXIsIHByaXZhdGVXaW5kb3csIHdpbmRvd0lkKSB7XG4gICAgLy8gSWYgdGhlIFVSTCBwYXJzZXMgc3VjY2Vzc2Z1bGx5IGFuZCBoYXMgYW4gSFRUUCBvciBIVFRQUyBwcm90b2NvbCxcbiAgICAvLyBjb25zaWRlciBpdCB3ZWIgY29udGVudFxuICAgIHZhciBpc1dlYkNvbnRlbnQ7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcbiAgICAgICAgaWYoKHBhcnNlZFVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiKSB8fCAocGFyc2VkVXJsLnByb3RvY29sID09PSBcImh0dHBzOlwiKSlcbiAgICAgICAgICAgIGlzV2ViQ29udGVudCA9IHRydWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgaXNXZWJDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGFiU3RhdGUuc2V0KHRhYklkLCB7IHVybCwgcmVmZXJyZXIsIHByaXZhdGVXaW5kb3csIHdpbmRvd0lkLCBpc1dlYkNvbnRlbnQgfSk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gV2ViUmVxdWVzdERldGFpbHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIGZvciB0aGUgcmVxdWVzdC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWZlcnJlciAtIFRoZSB2YWx1ZSBvZiB0aGUgYFJlZmVyZXJgIEhUVFAgaGVhZGVyIGZvclxuICogdGhlIHJlcXVlc3Qgb3IgYFwiXCJgIGlmIHRoZXJlIGlzIG5vIGhlYWRlci5cbiAqL1xuXG4vKipcbiAqIEEgTWFwIHRoYXQgdHJhY2tzIHRhYi1sZXZlbCB3ZWIgcmVxdWVzdHMuIFdlIG5lZWQgdGhpcyBjYWNoZWQgc3RhdGUgdG8gbWF0Y2hcbiAqIHJlZmVycmVycyB0byBwYWdlIGxvYWRzLiBUaGUga2V5cyBhcmUgdGFiIElEcyBhbmQgdGhlIHZhbHVlcyBhcmVcbiAqIFdlYlJlcXVlc3REZXRhaWxzIG9iamVjdHMuXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0IHtNYXA8bnVtYmVyLFdlYlJlcXVlc3REZXRhaWxzPn1cbiAqIEBkZWZhdWx0XG4gKi9cbmNvbnN0IHdlYlJlcXVlc3RDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBicm93c2VyIGlzIGFjdGl2ZSBvciBpZGxlLiBJZ25vcmVkIGlmIHRoZSBtb2R1bGUgaXMgY29uZmlndXJlZCB0b1xuICogbm90IGNvbnNpZGVyIHVzZXIgaW5wdXQgd2hlbiBkZXRlcm1pbmluZyB0aGUgYXR0ZW50aW9uIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICogQGRlZmF1bHRcbiAqL1xudmFyIGJyb3dzZXJJc0FjdGl2ZSA9IGZhbHNlO1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlIG1vZHVsZSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjb25maWd1cmluZyBicm93c2VyIGV2ZW50IGhhbmRsZXJzXG4gKiBhbmQgY2FjaGluZyBpbml0aWFsIHN0YXRlLlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG52YXIgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cbi8qKlxuICogV2hldGhlciB0aGUgbW9kdWxlIGhhcyBzdGFydGVkIGNvbmZpZ3VyaW5nIGJyb3dzZXIgZXZlbnQgaGFuZGxlcnMgYW5kIGNhY2hpbmdcbiAqIGluaXRpYWwgc3RhdGUuXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4vKipcbiAqIENvbmZpZ3VyZSBicm93c2VyIGV2ZW50IGhhbmRsZXJzIGFuZCBjYWNoZSBpbml0aWFsIHN0YXRlLiBSdW5zIG9ubHkgb25jZS5cbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYoaW5pdGlhbGl6ZWQgfHwgaW5pdGlhbGl6aW5nKVxuICAgICAgICByZXR1cm47XG4gICAgaW5pdGlhbGl6aW5nID0gdHJ1ZTtcblxuICAgIC8vIENvbmZpZ3VyZSBldmVudCBsaXN0ZW5lcnNcbiAgICAvLyBOb3RlIHRoYXQgd2UgaGF2ZSB0byBjYWxsIElkbGUucmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lciBiZWZvcmUgd2UgY2FsbFxuICAgIC8vIElkbGUucXVlcnlTdGF0ZSwgc28gdGhpcyBjb21lcyBiZWZvcmUgY2FjaGluZyB0aGUgaW5pdGlhbCBzdGF0ZVxuXG4gICAgLy8gSGFuZGxlIHRhYi1sZXZlbCB3ZWIgcmVxdWVzdHNcbiAgICBicm93c2VyLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcihkZXRhaWxzID0+IHtcbiAgICAgICAgLy8gSWdub3JlIHJlcXVlc3RzIHRoYXQgYXJlbid0IGFzc29jaWF0ZWQgd2l0aCBicm93c2luZyB0YWJzXG4gICAgICAgIGlmKGRldGFpbHMudGFiSWQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBHZXQgdGhlIHJlZmVycmVyIFVSTCBmcm9tIHRoZSByZXF1ZXN0IGhlYWRlcnNcbiAgICAgICAgdmFyIHJlZmVycmVyID0gXCJcIjtcbiAgICAgICAgZm9yKGNvbnN0IHJlcXVlc3RIZWFkZXIgb2YgZGV0YWlscy5yZXF1ZXN0SGVhZGVycylcbiAgICAgICAgICAgIGlmKChyZXF1ZXN0SGVhZGVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJyZWZlcmVyXCIpICYmIChcInZhbHVlXCIgaW4gcmVxdWVzdEhlYWRlcikpXG4gICAgICAgICAgICAgICAgcmVmZXJyZXIgPSByZXF1ZXN0SGVhZGVyLnZhbHVlO1xuICAgICAgICB3ZWJSZXF1ZXN0Q2FjaGUuc2V0KGRldGFpbHMudGFiSWQsIHtcbiAgICAgICAgICAgIHVybDogZGV0YWlscy51cmwsXG4gICAgICAgICAgICByZWZlcnJlclxuICAgICAgICB9KTtcbiAgICB9LCB7XG4gICAgICAgIHVybHM6IFsgXCI8YWxsX3VybHM+XCIgXSxcbiAgICAgICAgdHlwZXM6IFsgXCJtYWluX2ZyYW1lXCIgXVxuICAgIH0sXG4gICAgWyBcInJlcXVlc3RIZWFkZXJzXCIgXSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgd2VicGFnZSBpbiBhIHRhYiBjaGFuZ2VzXG4gICAgYnJvd3Nlci50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIElnbm9yZSBjaGFuZ2VzIHRoYXQgZG8gbm90IGludm9sdmUgdGhlIFVSTFxuICAgICAgICBpZiAoIShcInVybFwiIGluIGNoYW5nZUluZm8pKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIFRyeSB0byBnZXQgdGhlIHJlZmVycmVyIGZyb20gdGhlIHdlYiByZXF1ZXN0IGNhY2hlIGFuZCBjb25zdW1lXG4gICAgICAgIC8vIHRoZSBtb3N0IHJlY2VudCBlbnRyeSBpbiB0aGUgd2ViIHJlcXVlc3QgY2FjaGVcbiAgICAgICAgdmFyIHJlZmVycmVyID0gXCJcIjtcbiAgICAgICAgdmFyIHdlYlJlcXVlc3REZXRhaWxzO1xuICAgICAgICBpZigod2ViUmVxdWVzdERldGFpbHMgPSB3ZWJSZXF1ZXN0Q2FjaGUuZ2V0KHRhYklkKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYod2ViUmVxdWVzdERldGFpbHMudXJsID09PSBjaGFuZ2VJbmZvLnVybClcbiAgICAgICAgICAgICAgICByZWZlcnJlciA9IHdlYlJlcXVlc3REZXRhaWxzLnJlZmVycmVyO1xuICAgICAgICAgICAgd2ViUmVxdWVzdENhY2hlLmRlbGV0ZSh0YWJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRhYiBzdGF0ZSBjYWNoZVxuICAgICAgICB1cGRhdGVUYWJTdGF0ZSh0YWJJZCwgY2hhbmdlSW5mby51cmwsIHJlZmVycmVyLCB0YWIuaW5jb2duaXRvLCB0YWIud2luZG93SWQpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgKG9wdGlvbmFsbHkpIHRoZSBicm93c2VyIGlzIGFjdGl2ZSwgZW5kIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICB2YXIgaGFzQXR0ZW50aW9uID0gY2hlY2tGb3JBdHRlbnRpb24odGFiSWQsIHRhYi53aW5kb3dJZCk7XG4gICAgICAgIGlmIChoYXNBdHRlbnRpb24pXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgdGFiLmluY29nbml0bywgdGltZVN0YW1wKTtcblxuICAgICAgICAvLyBFbmQgdGhlIHBhZ2UgdmlzaXRcbiAgICAgICAgbm90aWZ5UGFnZVZpc2l0U3RvcExpc3RlbmVycyh0YWJJZCwgdGFiLndpbmRvd0lkLCB0YWIuaW5jb2duaXRvLCB0aW1lU3RhbXApO1xuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgdGhlIHBhZ2UgdmlzaXRcbiAgICAgICAgbm90aWZ5UGFnZVZpc2l0U3RhcnRMaXN0ZW5lcnModGFiSWQsIHRhYi53aW5kb3dJZCwgY2hhbmdlSW5mby51cmwsIHJlZmVycmVyLCB0YWIuaW5jb2duaXRvLCB0aW1lU3RhbXApO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgKG9wdGlvbmFsbHkpIHRoZSBicm93c2VyIGlzIGFjdGl2ZSwgc3RhcnQgYW4gYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYgKGhhc0F0dGVudGlvbilcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgdGFiLmluY29nbml0bywgdGltZVN0YW1wKTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgdGFiIGNsb3Nlc1xuICAgIGJyb3dzZXIudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCByZW1vdmVJbmZvKSA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byB1cGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBoZXJlLCBiZWNhdXNlIGVpdGhlciB0aGVyZSBpc1xuICAgICAgICAvLyBhbm90aGVyIHRhYiBpbiB0aGUgd2luZG93IHRoYXQgd2lsbCBiZWNvbWUgYWN0aXZlIChhbmQgdGFicy5vbkFjdGl2YXRlZFxuICAgICAgICAvLyB3aWxsIGZpcmUpLCBvciB0aGVyZSBpcyBubyBvdGhlciB0YWIgaW4gdGhlIHdpbmRvdyBzbyB0aGUgd2luZG93IGNsb3Nlc1xuICAgICAgICAvLyAoYW5kIHdpbmRvd3Mub25SZW1vdmVkIHdpbGwgZmlyZSlcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGNhY2hlZCBzdGF0ZSBmb3IgdGhpcyB0YWIsIGRyb3AgaXRcbiAgICAgICAgdGFiU3RhdGUuZGVsZXRlKHRhYklkKTtcbiAgICAgICAgd2ViUmVxdWVzdENhY2hlLmRlbGV0ZSh0YWJJZCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgcHJpdmFjeSBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZWQgd2luZG93IHN0YXRlXG4gICAgICAgIHZhciB3aW5kb3dQcml2YWN5ID0gaXNQcml2YXRlV2luZG93KHJlbW92ZUluZm8ud2luZG93SWQpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIgYW5kIGZvY3VzZWQgd2luZG93LCBhbmQgKG9wdGlvbmFsbHkpIHRoZSBicm93c2VyIGlzIGFjdGl2ZSwgZW5kIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICBpZihjaGVja0ZvckF0dGVudGlvbih0YWJJZCwgcmVtb3ZlSW5mby53aW5kb3dJZCkpXG4gICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgd2luZG93UHJpdmFjeSwgdGltZVN0YW1wKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGFjdGl2ZSB0YWIsIGZvcmdldCBpdFxuICAgICAgICBpZihjdXJyZW50QWN0aXZlVGFiID09IHRhYklkKVxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuXG4gICAgICAgIC8vIEVuZCB0aGUgcGFnZSB2aXNpdFxuICAgICAgICBub3RpZnlQYWdlVmlzaXRTdG9wTGlzdGVuZXJzKHRhYklkLCByZW1vdmVJbmZvLndpbmRvd0lkLCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIGFjdGl2ZSB0YWIgaW4gYSB3aW5kb3cgY2hhbmdlc1xuICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhY3RpdmVJbmZvID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbm9uLWJyb3dzZXIgdGFiLCBpZ25vcmUgaXRcbiAgICAgICAgaWYoKGFjdGl2ZUluZm8udGFiSWQgPT0gYnJvd3Nlci50YWJzLlRBQl9JRF9OT05FKSB8fCAoYWN0aXZlSW5mby50YWJJZCA8IDApIHx8XG4gICAgICAgICAgICAoYWN0aXZlSW5mby53aW5kb3dJZCA8IDApKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgd2luZG93IHN0YXRlIGNhY2hlIHdpdGggdGhlIG5ld1xuICAgICAgICAvLyBhY3RpdmUgdGFiIElEXG4gICAgICAgIHVwZGF0ZVdpbmRvd1N0YXRlKGFjdGl2ZUluZm8ud2luZG93SWQsIHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogYWN0aXZlSW5mby50YWJJZFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZXJlIGlzbid0IGEgZm9jdXNlZCB3aW5kb3csIG9yIHRoZSB0YWIgdXBkYXRlIGlzIG5vdCBpbiB0aGUgZm9jdXNlZCB3aW5kb3csIGlnbm9yZSBpdFxuICAgICAgICBpZigoY3VycmVudEZvY3VzZWRXaW5kb3cgPCAwKSB8fCAoYWN0aXZlSW5mby53aW5kb3dJZCAhPSBjdXJyZW50Rm9jdXNlZFdpbmRvdykpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gR2V0IHRoZSB3aW5kb3cgcHJpdmFjeSBwcm9wZXJ0eSBmcm9tIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGVcbiAgICAgICAgdmFyIHdpbmRvd1ByaXZhY3kgPSBpc1ByaXZhdGVXaW5kb3coYWN0aXZlSW5mby53aW5kb3dJZCk7ICAgIFxuXG4gICAgICAgIC8vIElmIHRoZSBicm93c2VyIGlzIGFjdGl2ZSBvciAob3B0aW9uYWxseSkgd2UgYXJlIG5vdCBjb25zaWRlcmluZyB1c2VyIGlucHV0LFxuICAgICAgICAvLyBmaXJzdCBlbmQgdGhlIGF0dGVudGlvbiBzcGFuIGlmIHRoZXJlIGlzIGFuIGFjdGl2ZSB0YWIgaW4gdGhlIGZvY3VzZWQgd2luZG93LFxuICAgICAgICAvLyB0aGVuIHN0YXJ0IGEgbmV3IGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGlmKChicm93c2VySXNBY3RpdmUgfHwgIWNvbnNpZGVyVXNlcklucHV0Rm9yQXR0ZW50aW9uKSkge1xuICAgICAgICAgICAgaWYoKGN1cnJlbnRBY3RpdmVUYWIgPj0gMCkgJiYgKGN1cnJlbnRGb2N1c2VkV2luZG93ID49IDApKVxuICAgICAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXJzKGFjdGl2ZUluZm8udGFiSWQsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZW1lbWJlciB0aGUgbmV3IGFjdGl2ZSB0YWJcbiAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IGFjdGl2ZUluZm8udGFiSWQ7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHdpbmRvdyBpcyBjcmVhdGVkXG4gICAgYnJvd3Nlci53aW5kb3dzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcihjcmVhdGVkV2luZG93ID0+IHtcbiAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyBhcHBlYXJzIHRvIGJlIGEgbm9uLWJyb3dzaW5nIHdpbmRvdywgaWdub3JlXG4gICAgICAgIC8vIHRoZSBldmVudFxuICAgICAgICBpZighKFwiaWRcIiBpbiBjcmVhdGVkV2luZG93KSB8fCBjcmVhdGVkV2luZG93LmlkIDwgMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdpbmRvdyBzdGF0ZSBjYWNoZSB3aXRoIHRoZSB3aW5kb3cncyB0eXBlIGFuZFxuICAgICAgICAvLyBwcml2YWN5IHByb3BlcnR5XG4gICAgICAgIHVwZGF0ZVdpbmRvd1N0YXRlKGNyZWF0ZWRXaW5kb3cuaWQsIHtcbiAgICAgICAgICAgIHR5cGU6IChcInR5cGVcIiBpbiBjcmVhdGVkV2luZG93KSA/IGNyZWF0ZWRXaW5kb3cudHlwZSA6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgcHJpdmFjeTogY3JlYXRlZFdpbmRvdy5pbmNvZ25pdG8gPyBcInByaXZhdGVcIiA6IFwibm9ybWFsXCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHRhYiBpcyBjcmVhdGVkXG4gICAgLy8gVGhpcyBldmVudCBhcHBlYXJzIHRvIGNvbnNpc3RlbnRseSBmaXJlIGJlZm9yZSB3aW5kb3cub25DcmVhdGVkXG4gICAgYnJvd3Nlci50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcih0YWIgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRhYiBvciB3aW5kb3cgSUQgaW5kaWNhdGluZyBhIG5vbi1icm93c2VyIHRhYiBvclxuICAgICAgICAvLyB3aW5kb3csIGlnbm9yZSB0aGUgZXZlbnRcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIVxuICAgICAgICBpZighKFwiaWRcIiBpbiB0YWIpIHx8IHRhYi5pZCA8IDAgfHwgIShcIndpbmRvd0lkXCIgaW4gdGFiKSB8fCB0YWIud2luZG93SWQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUgY2FjaGUgd2l0aCB0aGUgd2luZG93J3MgcHJpdmFjeVxuICAgICAgICAvLyBwcm9wZXJ0eSBhbmQsIHNpbmNlIHdlIGtub3cgdGhpcyBpcyBhIGJyb3dzaW5nIHdpbmRvdyBiYXNlZFxuICAgICAgICAvLyBvbiB0aGUgdGFiIElELCB0aGUgXCJub3JtYWxvcnBvcHVwXCIgd2luZG93IHR5cGVcbiAgICAgICAgLy8gV2hpbGUgd2UgbWlnaHQgbm93IGtub3cgdGhpcyBpcyB0aGUgYWN0aXZlIHRhYiBpbiB0aGUgd2luZG93LFxuICAgICAgICAvLyB0aGUgdGFicy5vbkFjdGl2YXRlZCBldmVudCB3aWxsIHNlcGFyYXRlbHkgZmlyZVxuICAgICAgICB1cGRhdGVXaW5kb3dTdGF0ZSh0YWIud2luZG93SWQsIHtcbiAgICAgICAgICAgIHR5cGU6IFwibm9ybWFsb3Jwb3B1cFwiLFxuICAgICAgICAgICAgcHJpdmFjeTogdGFiLmluY29nbml0byA/IFwicHJpdmF0ZVwiIDogXCJub3JtYWxcIlxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgdGFiIGlzIG1vdmVkIGJldHdlZW4gd2luZG93c1xuICAgIC8vIFdlIGFyZSBub3QgbGlzdGVuaW5nIGZvciB0YWJzLm9uRGV0YWNoZWQgYmVjYXVzZSB3ZSB3YW50IHRhYnNcbiAgICAvLyB0byBiZSBhc3NvY2lhdGVkIHdpdGggdmFsaWQgd2luZG93cywgYW5kIGJlY2F1c2UgaXQncyBsaWtlbHlcbiAgICAvLyB0aGUgdXNlciBpcyBqdXN0IG1vdmluZyB0aGUgdGFiIHdpdGhpbiB0aGUgdGFiIHN0cmlwIGluIGFcbiAgICAvLyB3aW5kb3dcbiAgICBicm93c2VyLnRhYnMub25BdHRhY2hlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGF0dGFjaEluZm8pID0+IHtcbiAgICAgICAgLy8gSWYgdGhpcyB0YWIgaXMgaW4gdGhlIHRhYiBzdGF0ZSBjYWNoZSxcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBjYWNoZVxuICAgICAgICB2YXIgdGFiRGV0YWlscyA9IHRhYlN0YXRlLmdldCh0YWJJZCk7XG4gICAgICAgIGlmKHRhYkRldGFpbHMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRhYkRldGFpbHMud2luZG93SWQgPSBhdHRhY2hJbmZvLm5ld1dpbmRvd0lkO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSB3aW5kb3cgaXMgcmVtb3ZlZFxuICAgIGJyb3dzZXIud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIod2luZG93SWQgPT4ge1xuICAgICAgICBpZighaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGNhY2hlZCBzdGF0ZSBmb3IgdGhpcyB3aW5kb3csIGRyb3AgaXRcbiAgICAgICAgaWYod2luZG93U3RhdGUuaGFzKHdpbmRvd0lkKSlcbiAgICAgICAgICAgIHdpbmRvd1N0YXRlLmRlbGV0ZSh3aW5kb3dJZCk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB0aGUgZm9jdXNlZCB3aW5kb3cgY2hhbmdlc1xuICAgIGJyb3dzZXIud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcih3aW5kb3dJZCA9PiB7XG4gICAgICAgIGlmKCFpbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgaXMgYWN0aXZlIG9yIChvcHRpb25hbGx5KSB3ZSBhcmUgbm90IGNvbnNpZGVyaW5nIHVzZXIgaW5wdXQsIGFuZCBpZlxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBhY3RpdmUgdGFiIGluIGEgZm9jdXNlZCB3aW5kb3csIGVuZCB0aGUgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoKGJyb3dzZXJJc0FjdGl2ZSB8fCAhY29uc2lkZXJVc2VySW5wdXRGb3JBdHRlbnRpb24pICYmICgoY3VycmVudEFjdGl2ZVRhYiA+PSAwKSAmJiAoY3VycmVudEZvY3VzZWRXaW5kb3cgPj0gMCkpKVxuICAgICAgICAgICAgbm90aWZ5UGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIGlzUHJpdmF0ZVdpbmRvdyhjdXJyZW50Rm9jdXNlZFdpbmRvdyksIHRpbWVTdGFtcCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgaGFzIGxvc3QgZm9jdXMgaW4gdGhlIG9wZXJhdGluZyBzeXN0ZW0sIHJlbWVtYmVyIFxuICAgICAgICAvLyB0YWIgSUQgPSAtMSBhbmQgd2luZG93IElEID0gLTEsIGFuZCBkbyBub3Qgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgdGhlIGJyb3dzZXIud2luZG93cy5nZXQgYXdhaXQgYmVsb3csXG4gICAgICAgIC8vIGJlY2F1c2UgcXVpY2sgc2VxdWVudGlhbCBldmVudHMgY2FuIGNhdXNlIHRoZSBicm93c2VyLndpbmRvd3Mub25Gb2N1c0NoYW5nZWRcbiAgICAgICAgLy8gbGlzdGVuZXIgdG8gcnVuIGFnYWluIGJlZm9yZSB0aGUgYXdhaXQgcmVzb2x2ZXMgYW5kIHRyaWdnZXIgZXJyb3JzIGlmIGN1cnJlbnRBY3RpdmVUYWJcbiAgICAgICAgLy8gYW5kIGN1cnJlbnRGb2N1c2VkV2luZG93IGFyZSBub3Qgc2V0IHByb3Blcmx5XG4gICAgICAgIGlmICh3aW5kb3dJZCA9PSBicm93c2VyLndpbmRvd3MuV0lORE9XX0lEX05PTkUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGZvY3VzZWQgd2luZG93IGZyb20gdGhlIGNhY2hlZCB3aW5kb3cgc3RhdGVcbiAgICAgICAgdmFyIGZvY3VzZWRXaW5kb3dEZXRhaWxzID0gd2luZG93U3RhdGUuZ2V0KHdpbmRvd0lkKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlbid0IHNlZW4gdGhpcyB3aW5kb3cgYmVmb3JlLCB0aGF0IG1lYW5zIGl0J3Mgbm90IGEgYnJvd3NlciB3aW5kb3csXG4gICAgICAgIC8vIHNvIHJlbWVtYmVyIHRhYiBJRCA9IC0xIGFuZCB3aW5kb3cgSUQgLTEsIGFuZCBkbyBub3Qgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoZm9jdXNlZFdpbmRvd0RldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IC0xO1xuICAgICAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSAtMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBuZXcgd2luZG93IGlzIG5vdCBhIGJyb3dzZXIgd2luZG93LCByZW1lbWJlciB0YWIgSUQgPSAtMSBhbmQgd2luZG93IElEID0gLTEsXG4gICAgICAgIC8vIGFuZCBkbyBub3Qgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgaWYoKGZvY3VzZWRXaW5kb3dEZXRhaWxzLnR5cGUgIT09IFwibm9ybWFsXCIpICYmIChmb2N1c2VkV2luZG93RGV0YWlscy50eXBlICE9PSBcInBvcHVwXCIpICYmIChmb2N1c2VkV2luZG93RGV0YWlscy50eXBlICE9PSBcIm5vcm1hbG9ycG9wdXBcIikpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHJlbWVtYmVyIHRoZSBuZXcgYWN0aXZlIHRhYiBhbmQgZm9jdXNlZCB3aW5kb3csIGFuZCBpZiB0aGUgYnJvd3NlciBpcyBhY3RpdmVcbiAgICAgICAgLy8gb3IgKG9wdGlvbmFsbHkpIHdlIGFyZSBub3QgY29uc2lkZXJpbmcgdXNlciBpbnB1dCwgc3RhcnQgYSBuZXcgYXR0ZW50aW9uIHNwYW5cbiAgICAgICAgY3VycmVudEFjdGl2ZVRhYiA9IGZvY3VzZWRXaW5kb3dEZXRhaWxzLmFjdGl2ZVRhYjtcbiAgICAgICAgY3VycmVudEZvY3VzZWRXaW5kb3cgPSB3aW5kb3dJZDtcbiAgICAgICAgaWYoYnJvd3NlcklzQWN0aXZlIHx8ICFjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbilcbiAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVycyhjdXJyZW50QWN0aXZlVGFiLCBjdXJyZW50Rm9jdXNlZFdpbmRvdywgaXNQcml2YXRlV2luZG93KHdpbmRvd0lkLCBmb2N1c2VkV2luZG93RGV0YWlscyksIHRpbWVTdGFtcCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gSGFuZGxlIHdoZW4gdGhlIGJyb3dzZXIgYWN0aXZpdHkgc3RhdGUgY2hhbmdlc1xuICAgIC8vIFRoaXMgbGlzdGVuZXIgYWJzdHJhY3RzIHRoZSBicm93c2VyIGFjdGl2aXR5IHN0YXRlIGludG8gdHdvIGNhdGVnb3JpZXM6IGFjdGl2ZSBhbmQgaW5hY3RpdmVcbiAgICAvLyBBY3RpdmUgbWVhbnMgdGhlIHVzZXIgaGFzIHJlY2VudGx5IHByb3ZpZGVkIGlucHV0IHRvIHRoZSBicm93c2VyLCBpbmFjdGl2ZSBtZWFucyBhbnkgb3RoZXJcbiAgICAvLyBzdGF0ZSAocmVnYXJkbGVzcyBvZiB3aGV0aGVyIGEgc2NyZWVuc2F2ZXIgb3IgbG9jayBzY3JlZW4gaXMgZW5hYmxlZClcbiAgICBpZihjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbikge1xuICAgICAgICBhd2FpdCBJZGxlLnJlZ2lzdGVySWRsZVN0YXRlTGlzdGVuZXIobmV3U3RhdGUgPT4ge1xuICAgICAgICAgICAgaWYoIWluaXRpYWxpemVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBpcyBub3QgdHJhbnNpdGlvbmluZyBiZXR3ZWVuIGFjdGl2ZSBhbmQgaW5hY3RpdmUgc3RhdGVzLCBpZ25vcmUgdGhlIGV2ZW50XG4gICAgICAgICAgICBpZigoYnJvd3NlcklzQWN0aXZlKSA9PSAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGZsaXBwZWQgYnJvd3NlciBhY3Rpdml0eSBzdGF0ZVxuICAgICAgICAgICAgYnJvd3NlcklzQWN0aXZlID0gIWJyb3dzZXJJc0FjdGl2ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYW4gYWN0aXZlIHRhYiBpbiBhIGZvY3VzZWQgd2luZG93LCB3ZSBkb24ndCBuZWVkIHRvIHNlbmQgYXR0ZW50aW9uIGV2ZW50c1xuICAgICAgICAgICAgaWYoKGN1cnJlbnRBY3RpdmVUYWIgPCAwKSB8fCAoY3VycmVudEZvY3VzZWRXaW5kb3cgPCAwKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCB0aGUgd2luZG93IHByaXZhY3kgcHJvcGVydHkgZnJvbSB0aGUgY2FjaGVkIHdpbmRvdyBzdGF0ZVxuICAgICAgICAgICAgdmFyIHdpbmRvd1ByaXZhY3kgPSBpc1ByaXZhdGVXaW5kb3coY3VycmVudEZvY3VzZWRXaW5kb3cpO1xuXG4gICAgICAgICAgICAvLyBTZW5kIGFuIGF0dGVudGlvbiBzdGFydCBldmVudCAoaWYgdGhlIGJyb3dzZXIgaXMgdHJhbnNpdGlvbmluZyB0byBhY3RpdmUpIG9yIGFuXG4gICAgICAgICAgICAvLyBhdHRlbnRpb24gc3RvcCBldmVudCAoaWYgdGhlIGJyb3dzZXIgaXMgdHJhbnNpdGlvbmluZyB0byBpbmFjdGl2ZSlcbiAgICAgICAgICAgIGlmKGJyb3dzZXJJc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBub3RpZnlQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcnMoY3VycmVudEFjdGl2ZVRhYiwgY3VycmVudEZvY3VzZWRXaW5kb3csIHdpbmRvd1ByaXZhY3ksICB0aW1lU3RhbXApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5vdGlmeVBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXJzKGN1cnJlbnRBY3RpdmVUYWIsIGN1cnJlbnRGb2N1c2VkV2luZG93LCB3aW5kb3dQcml2YWN5LCB0aW1lU3RhbXApO1xuICAgICAgICB9LCBpZGxlVGhyZXNob2xkKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgYW5kIHJlbWVtYmVyIHRoZSBicm93c2VyIGlkbGUgc3RhdGVcbiAgICBpZihjb25zaWRlclVzZXJJbnB1dEZvckF0dGVudGlvbilcbiAgICAgICAgYnJvd3NlcklzQWN0aXZlID0gKElkbGUucXVlcnlTdGF0ZShpZGxlVGhyZXNob2xkKSA9PT0gXCJhY3RpdmVcIik7XG4gICAgXG4gICAgLy8gR2V0IGFuZCByZW1lbWJlciB0aGUgYnJvd3NlciB3aW5kb3cgYW5kIHRhYiBzdGF0ZVxuICAgIHZhciBvcGVuV2luZG93cyA9IGF3YWl0IGJyb3dzZXIud2luZG93cy5nZXRBbGwoe1xuICAgICAgICBwb3B1bGF0ZTogdHJ1ZSxcbiAgICAgICAgd2luZG93VHlwZXM6IFsgXCJub3JtYWxcIiwgXCJwb3B1cFwiLCBcInBhbmVsXCIsIFwiZGV2dG9vbHNcIiBdXG4gICAgfSk7XG4gICAgZm9yKGNvbnN0IG9wZW5XaW5kb3cgb2Ygb3BlbldpbmRvd3MpIHtcbiAgICAgICAgLy8gSWYgdGhlIHdpbmRvdyBkb2Vzbid0IGhhdmUgYSB3aW5kb3cgSUQsIGlnbm9yZSBpdFxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBjaGVja2luZyBhbnl3YXkgc2luY2VcbiAgICAgICAgLy8gdGhlIGlkIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoZSB3aW5kb3dzLldpbmRvd1xuICAgICAgICAvLyB0eXBlXG4gICAgICAgIGlmKCEoXCJpZFwiIGluIG9wZW5XaW5kb3cpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhlIHRhYnMgaW4gdGhlIHdpbmRvdyB0byBjYWNoZSB0YWIgc3RhdGVcbiAgICAgICAgLy8gYW5kIGZpbmQgdGhlIGFjdGl2ZSB0YWIgaW4gdGhlIHdpbmRvd1xuICAgICAgICB2YXIgYWN0aXZlVGFiSW5PcGVuV2luZG93ID0gLTE7XG4gICAgICAgIGlmKFwidGFic1wiIGluIG9wZW5XaW5kb3cpXG4gICAgICAgICAgICBmb3IoY29uc3QgdGFiIG9mIG9wZW5XaW5kb3cudGFicykge1xuICAgICAgICAgICAgICAgIGlmKHRhYi5hY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluT3BlbldpbmRvdyA9IHRhYi5pZDtcbiAgICAgICAgICAgICAgICB1cGRhdGVUYWJTdGF0ZSh0YWIuaWQsIHRhYi51cmwsIFwiXCIsIG9wZW5XaW5kb3cuaW5jb2duaXRvLCBvcGVuV2luZG93LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgdXBkYXRlV2luZG93U3RhdGUob3BlbldpbmRvdy5pZCwge1xuICAgICAgICAgICAgdHlwZTogb3BlbldpbmRvdy50eXBlLFxuICAgICAgICAgICAgYWN0aXZlVGFiOiBhY3RpdmVUYWJJbk9wZW5XaW5kb3csXG4gICAgICAgICAgICBwcml2YWN5OiBvcGVuV2luZG93LmluY29nbml0byA/IFwicHJpdmF0ZVwiIDogXCJub3JtYWxcIlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmb2N1c2VkIHdpbmRvdyBhbmQgaXQgaXMgYSBub3JtYWwgb3IgcG9wdXBcbiAgICAgICAgLy8gd2luZG93LCByZW1lbWJlciB0aGUgd2luZG93IElEIGFuZCBhY3RpdmUgdGFiIElEIChpZiBhbnkpXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGZvY3VzZWQgd2luZG93LCBvciB0aGUgZm9jdXNlZCB3aW5kb3cgaXNuJ3RcbiAgICAgICAgLy8gYSBub3JtYWwgb3IgcG9wdXAgd2luZG93LCB0aGlzIGJsb2NrIHdpbGwgbm90IHJ1biBhbmQgd2VcbiAgICAgICAgLy8gd2lsbCByZXRhaW4gdGhlIGRlZmF1bHQgdmFsdWVzIG9mIHRhYiBJRCA9IC0xIGFuZCB3aW5kb3dcbiAgICAgICAgLy8gSUQgPSAtMVxuICAgICAgICBpZigob3BlbldpbmRvdy5mb2N1c2VkKSAmJiAoKG9wZW5XaW5kb3cudHlwZSA9PT0gXCJub3JtYWxcIikgfHwgKG9wZW5XaW5kb3cudHlwZSA9PT0gXCJwb3B1cFwiKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkV2luZG93ID0gb3BlbldpbmRvdy5pZDtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVUYWIgPSBhY3RpdmVUYWJJbk9wZW5XaW5kb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG59IiwiZXhwb3J0IGNvbnN0IHNob3J0RG9tYWlucyA9IFtcbi8vIEdvb2dsZSBuZXdzXG5cIm5ld3MuZ29vZ2xlLmNvbS9hcnRpY2xlc1wiLFxuXCJnb28uZ2xcIixcblwidC5jb1wiLFxuXCIwcnoudHdcIixcblwiMTI2LmFtXCIsXG5cIjFsMi51c1wiLFxuXCIxbGluay5pblwiLFxuXCIxdGsudXNcIixcblwiMXVuLmZyXCIsXG5cIjF1cmwuY29tXCIsXG5cIjF1cmwuY3pcIixcblwiMS11cmwubmV0XCIsXG5cIjF1LnJvXCIsXG5cIjEudXNhLmdvdlwiLFxuXCIxd2IyLm5ldFwiLFxuXCIyMGZ0Lm5ldFwiLFxuXCIyYWQuaW5cIixcblwiMmJpZy5hdFwiLFxuXCIyY2hhcC5pdFwiLFxuXCIyZG9jLm5ldFwiLFxuXCIyZmVhci5jb21cIixcblwiMi5ncFwiLFxuXCIyLmh0XCIsXG5cIjJsb25nLmNjXCIsXG5cIjIubHlcIixcblwiMnBsLnVzXCIsXG5cIjJzdS5kZVwiLFxuXCIydHUudXNcIixcblwiMnR5LmluXCIsXG5cIjJ1LnhmLmN6XCIsXG5cIjJ3c2IudHZcIixcblwiMnplLnVzXCIsXG5cIjMwMS50b1wiLFxuXCIzMDF1cmwuY29tXCIsXG5cIjMwNy50b1wiLFxuXCIzLmx5XCIsXG5cIjNyYS5iZVwiLFxuXCIzeC5zaVwiLFxuXCI0OXJzLm1lXCIsXG5cIjRpLmFlXCIsXG5cIjRtcy5tZVwiLFxuXCI0Lm5iY255LmNvbVwiLFxuXCI0c3EuY29tXCIsXG5cIjR1cmwuY2NcIixcblwiNHZpZXcubWVcIixcblwiNS0xMS5jb1wiLFxuXCI1M2VpZy5odFwiLFxuXCI1ZW0uY3pcIixcblwiNXJyLml0XCIsXG5cIjV1cmwubmV0XCIsXG5cIjUud2V3cy5jb21cIixcblwiNXo4LmluZm9cIixcblwiNmZyLnJ1XCIsXG5cIjZnNi5ldVwiLFxuXCI2dXJsLmNvbVwiLFxuXCI3Ni5nZFwiLFxuXCI3Ny5haVwiLFxuXCI3ZnRoLmNjXCIsXG5cIjdnZW4udXNcIixcblwiN2xpLmluXCIsXG5cIjcubHlcIixcblwiN255LnR2XCIsXG5cIjd2ZC5jblwiLFxuXCI4dS5jelwiLFxuXCI5NDQubGFcIixcblwiOTgudG9cIixcblwiOW1wLmNvbVwiLFxuXCJhMC5mclwiLFxuXCJhMmEubWVcIixcblwiYTJuLmV1XCIsXG5cImFhLmN4XCIsXG5cImFhcnAudXNcIixcblwiYWJici5jb21cIixcblwiYWJici5za1wiLFxuXCJhYmMxMS50dlwiLFxuXCJhYmMxMy5jb1wiLFxuXCJhYmNuLndzXCIsXG5cImFiYy50dlwiLFxuXCJhYmN1cmwubmV0XCIsXG5cImFiZTUuY29tXCIsXG5cImFjY2Vzcy5pbVwiLFxuXCJhY2N1cmEuY2NcIixcblwiYWNvc20uaW5cIixcblwiYWN0aW9uLm1lXCIsXG5cImFkNS5ldVwiLFxuXCJhZDcuYml6XCIsXG5cImFkYWdlLmNvbVwiLFxuXCJhZGIudWdcIixcblwiYWRjcmFmdC5jb1wiLFxuXCJhZGNydW4uY2hcIixcblwiYWRkLnZjXCIsXG5cImFkZmEuc3RcIixcblwiYWRmbGF2LmNvbVwiLFxuXCJhZGYubHlcIixcblwiYWRmbHkuZnJcIixcblwiYWRqaXguY29tXCIsXG5cImFkbGkucHdcIixcblwiYWQtbWVkLmN6XCIsXG5cImFkbmV3cy5tc1wiLFxuXCJhZG9iZS5seVwiLFxuXCJhZHYubGlcIixcblwiYWR2bW8udXNcIixcblwiYWQudnVcIixcblwiYWR3ZWVrLml0XCIsXG5cImFleHAuY29cIixcblwiYS1mci5pc1wiLFxuXCJhZnguY2NcIixcblwiYS5nZFwiLFxuXCJhLmdnXCIsXG5cImFnaWxlaXQuY29cIixcblwiYWh3ZC50dlwiLFxuXCJhamUubWVcIixcblwiYWpuLm1lXCIsXG5cImFrYS5nclwiLFxuXCJhbGlsLmluXCIsXG5cImFsai5hbVwiLFxuXCJhbGwuZnVzZXVybC5jb21cIixcblwiYWwuc3RcIixcblwiYWx0dXJsLmNvbVwiLFxuXCJhbWN1cmwuY29tXCIsXG5cIiNhbXpuLmNvbVwiLFxuXCJhbXpuLmNvbVwiLFxuXCIjYW16bi50b1wiLFxuXCJhbXpuLnRvXCIsXG5cImFuZHIudHZcIixcblwiYS5uZlwiLFxuXCJhbm4uY3JcIixcblwiYW55LmdzXCIsXG5cImFvZmIudXNcIixcblwiYW9sLml0XCIsXG5cImFwYWR2LmNvXCIsXG5cImFwbC50dlwiLFxuXCJhcG5lLndzXCIsXG5cImFwcHN1bW8uY29tXCIsXG5cImFxdmEucGxcIixcblwiYXJhLnR2XCIsXG5cImFyY25jdC5jb1wiLFxuXCJhcmVzLnRsXCIsXG5cImFyZ3VzbmUud3NcIixcblwiYXIuZ3lcIixcblwiYXJtLmluXCIsXG5cImFyc24uYWxcIixcblwiYXJzdC5jaFwiLFxuXCJhc2EubmFcIixcblwiYXNvcy50b1wiLFxuXCJhc3NvLmluXCIsXG5cImF0LmNtdC5jb21cIixcblwiYXRtbGIuY29tXCIsXG5cImF0Lm1ybXVsZS5jb21cIixcblwiYXQubXR2LmNvbVwiLFxuXCJhdC5wdy5vcmdcIixcblwiYXR0LW1zZy5jb21cIixcblwiYXR1LmNhXCIsXG5cImF1Lm1zXCIsXG5cImF1cmxzLmluZm9cIixcblwiYXV0b2RlLnNrXCIsXG5cImF2Yy5sdVwiLFxuXCJhdmxuZS53c1wiLFxuXCJhd2Uuc21cIixcblwiYS53aXNoLm9yZ1wiLFxuXCJheWwubHZcIixcblwiYXl0LmZyXCIsXG5cImF6YWxpLmZyXCIsXG5cImF6Yy5jY1wiLFxuXCJhenFxLmNvbVwiLFxuXCJiMDAuZnJcIixcblwiYjIzLnJ1XCIsXG5cImIybC5tZVwiLFxuXCJiNTQuaW5cIixcblwiYjY1LmNvbVwiLFxuXCJiNjUudXNcIixcblwiYmFjbi5tZVwiLFxuXCJiYWlkLnVzXCIsXG5cImJhc25vLmNvbVwiLFxuXCJiYmMuaW5cIixcblwiYmJyeS5sdlwiLFxuXCJiYnQuZ3NcIixcblwiYmJ5dXJsLnVzXCIsXG5cImJjZW5lLndzXCIsXG5cImJjb29sLmJ6XCIsXG5cImJjb3ZlLm1lXCIsXG5cImJjLnZjXCIsXG5cImJlYW0udG9cIixcblwiYmVhdHMuaXNcIixcblwiYmVlNC5iaXpcIixcblwiYmVlYmUuaW5cIixcblwiYmUubmV0XCIsXG5cImJmMTAuY29cIixcblwiYmZwbmUud3NcIixcblwiYi1nYXQuZXNcIixcblwiYmdsLm1lXCIsXG5cImIuZ2xvYmUuY29tXCIsXG5cImJnci5jb1wiLFxuXCJiaHBoby50b1wiLFxuXCJiaWJsZS51c1wiLFxuXCJiaWd0YmwuY29tXCIsXG5cImJpbS5pbVwiLFxuXCIjYmluZ2VkLml0XCIsXG5cImJpbmdlZC5pdFwiLFxuXCJiaXQuZG9cIixcblwiYml0Lmx5XCIsXG5cImJpdGx5LmNvbVwiLFxuXCJiaXRseS5pc1wiLFxuXCJiaXR3LmluXCIsXG5cImJpemoudXNcIixcblwiYmtpdGUuY29tXCIsXG5cImJsYXAubmV0XCIsXG5cImJsYnJkLmNvXCIsXG5cImJsYnJkLmNvbVwiLFxuXCJibGNrLmJ5XCIsXG5cImJsZS5hY1wiLFxuXCJibGUucGxcIixcblwiYmxpcHByLmNvbVwiLFxuXCJibGlwLnR2XCIsXG5cImJsbi5rclwiLFxuXCJibG9hdC5tZVwiLFxuXCJibG9vbS5iZ1wiLFxuXCJibHUuY2NcIixcblwiYm9pLnJlXCIsXG5cImJvbmFwcC5pdFwiLFxuXCJib25lZmkuc2hcIixcblwiYm9uLm5vXCIsXG5cImJvci5jb21cIixcblwiYm8uc3RcIixcblwiYm90ZS5tZVwiLFxuXCJib3Vnbi5hdFwiLFxuXCJib3Vybi5jb1wiLFxuXCJiLnFyLmFlXCIsXG5cImJyNC5pblwiLFxuXCJicmFkLm1uXCIsXG5cImJyYXZvLmx5XCIsXG5cImJyYnkuY29cIixcblwiYnJkLnJzXCIsXG5cImIucmlhbi5jY1wiLFxuXCJicmsudG9cIixcblwiYnJ6dS5uZXRcIixcblwiYnNhLmx5XCIsXG5cImJzbC5pb1wiLFxuXCJic3VuLm1kXCIsXG5cImJ0LmlvXCIsXG5cImJ1ZHVybC5jb21cIixcblwiYnVmZi5seVwiLFxuXCJidWsubWVcIixcblwiYnVsbC5oblwiLFxuXCJidWwubHVcIixcblwiYnVybnVybC5jb21cIixcblwiYnVzd2suY29cIixcblwiYnV6dXJsLmNvbVwiLFxuXCJidXp6dGFwLmNvbVwiLFxuXCJieGwubWVcIixcblwiYnpmZC5pdFwiLFxuXCJiemgubWVcIixcblwiY2FjaG9yLnJvXCIsXG5cImNhbXBsLnVzXCIsXG5cImNhbnVybC5jb21cIixcblwiY2FudmEubGlua1wiLFxuXCJjYXBpLnRsXCIsXG5cImNhcHRsMS5jb1wiLFxuXCJjYXB0dXIuaW5cIixcblwiY2FydC5tblwiLFxuXCJjYmMuc2hcIixcblwiY2JsZS5jb1wiLFxuXCJjYnNsb2MuYWxcIixcblwiY2Jzbi53c1wiLFxuXCJjYnNwcnQuY29cIixcblwiY2JzLnNvXCIsXG5cImNidWcuY2NcIixcblwiY2MuY2NcIixcblwiY2NqLmltXCIsXG5cImNkNC5tZVwiLFxuXCJjZHBuLmlvXCIsXG5cImNkdHIuY29cIixcblwiY2VrdGtwLmNvbVwiLFxuXCJjZXNhci5tblwiLFxuXCJjZjIubWVcIixcblwiY2Y2LmNvXCIsXG5cImNmOTcuY29cIixcblwiY2YubHlcIixcblwiY2hici5nclwiLFxuXCJjaGljLmFnXCIsXG5cImNoaWwuaXNcIixcblwiY2hpbHAuaXRcIixcblwiY2hpLm1nXCIsXG5cImNoaXByLmVzXCIsXG5cImNoaXAudGxcIixcblwiY2huLmdlXCIsXG5cImNoby5iYVwiLFxuXCJjaG9wZC5pdFwiLFxuXCJjaHB0Lm1lXCIsXG5cImNocmcucnNcIixcblwiY2hybWEuY29cIixcblwiY2hyb25pLmNsXCIsXG5cImNocy5teFwiLFxuXCJjaHpiLmdyXCIsXG5cImNpbi5jaVwiLFxuXCJjaW5lbWFnci5hbVwiLFxuXCJjamIubmV0XCIsXG5cImNqa3kuaXRcIixcblwiY2xjay5ydVwiLFxuXCJjbGQubWVcIixcblwiY2xlLmNsaW5pY1wiLFxuXCJjbGVtYS5jY1wiLFxuXCJjbGljY2FtaS5pbmZvXCIsXG5cImNsaWNrdGhydS5jYVwiLFxuXCJjbGkuZ3NcIixcblwiY2xpa2suaW5cIixcblwiY2xpcHVybC51c1wiLFxuXCJjbGsubXlcIixcblwiY2wubGtcIixcblwiY2wubHlcIixcblwiY2xuLm1lXCIsXG5cImNsb2FreS5kZVwiLFxuXCJjbG9wLmluXCIsXG5cImNsb3VkdXAuY29tXCIsXG5cImNscC5seVwiLFxuXCJjbHJsdi5yc1wiLFxuXCJjbXBiZWxsLmNvbVwiLFxuXCJjbXNhLm1lXCIsXG5cImNtc2MucmVcIixcblwiY244Ni5vcmdcIixcblwiY25iLmN4XCIsXG5cImNuZXQuY29cIixcblwiY25uLml0XCIsXG5cImNubm1vbi5pZVwiLFxuXCJjbnR4Lm1lXCIsXG5cImNvZ2UubGFcIixcblwiY29nLmdkXCIsXG5cImMtby5pblwiLFxuXCJjb2tldXJsLmNvbVwiLFxuXCJjb24uc3RcIixcblwiY29udGEuY2NcIixcblwiY29udG50Lmx5XCIsXG5cImNvb2suYmFcIixcblwiY29weS5ielwiLFxuXCJjb3J0LmFzXCIsXG5cImNvc20uYWdcIixcblwiY290LmFnXCIsXG5cImNvdWljLmZyXCIsXG5cImNwby5zdFwiLFxuXCJjcHRsMS5jb1wiLFxuXCJjcHdyLml0XCIsXG5cImNya3MubWVcIixcblwiY3Jvd2RzcHJpbmcuY29cIixcblwiY3IudGxcIixcblwiY3J0di5ta1wiLFxuXCJjcnVtLnBsXCIsXG5cImMuc2hhbWVraC53c1wiLFxuXCJjcy5wblwiLFxuXCJjdHQuZWNcIixcblwiY3R2ci51c1wiLFxuXCJjdHgubHlcIixcblwiY3VkYS5jb1wiLFxuXCJjdWRkZXIuaXRcIixcblwiY3VsdG0uYWNcIixcblwiY3VsdHIubWVcIixcblwiY3VyaW8udXNcIixcblwiY3VybC5pbVwiLFxuXCJjdXIubHZcIixcblwiY3VzLnRtXCIsXG5cImN1dC5ieVwiLFxuXCJjdXRodXQuY29tXCIsXG5cImN1dC5wZVwiLFxuXCJjdXQuc2tcIixcblwiY3V0dC5ldVwiLFxuXCJjdXR0LnVzXCIsXG5cImN1dHUubWVcIixcblwiY3V0dXJsLmNvbVwiLFxuXCJjdXR1cmxzLmNvbVwiLFxuXCJjeWJyLmZyXCIsXG5cImN5b25peC50b1wiLFxuXCJkNzUuZXVcIixcblwiZGFhLnBsXCIsXG5cImRhaS5seVwiLFxuXCJkYWlseW0uYWlcIixcblwiZGFrZC5tZVwiLFxuXCJkYWxhaWxhLm1hXCIsXG5cImRhbGxhc25lLndzXCIsXG5cImRhdGwuaW5cIixcblwiZGJsLmNoei5nclwiLFxuXCJkYnJvbi5jb1wiLFxuXCJkYi50dFwiLFxuXCJkY2RyLm1lXCIsXG5cImRkLm1hXCIsXG5cImRkcC5uZXRcIixcblwiZGR1dC5jaFwiLFxuXCJkZWFkc3AuaW5cIixcblwiZGVhbHNwbC51c1wiLFxuXCJkZWNlbnR1cmwuY29tXCIsXG5cImRlY2subHlcIixcblwiZGVsbC50b1wiLFxuXCJkZWwubHlcIixcblwiZGVtZ292ZXJuby5yc1wiLFxuXCJkZW1zLm1lXCIsXG5cImRlcG90Lmx5XCIsXG5cImRlcmYubWVcIixcblwiZGVzZXJ0LnNuXCIsXG5cImRldG5lLndzXCIsXG5cImRmNC51c1wiLFxuXCJkZjkubmV0XCIsXG5cImRmbDgubWVcIixcblwiZGZ0LmJhXCIsXG5cImRnZXIuYXRcIixcblwiZGh1cmwub3JnXCIsXG5cImRpZGR5Lml0XCIsXG5cImRpZ2JpZy5jb21cIixcblwiZGkuZ2dcIixcblwiZGlnZy5jb21cIixcblwiZGlnaXBpbGxzLmNvbVwiLFxuXCJkaWdzLmJ5XCIsXG5cImRpc2N2ci5jb1wiLFxuXCJkaS5zblwiLFxuXCJkaXNxLnVzXCIsXG5cImRpcy50bFwiLFxuXCJkbGQuYnpcIixcblwiZGxyc2h2LmVzXCIsXG5cImRsdnIuaXRcIixcblwiZC5tZVwiLFxuXCJkbXJlZy5jb1wiLFxuXCJkbmFpbi5mb1wiLFxuXCJkbi52Y1wiLFxuXCJkby5jb1wiLFxuXCJkb2lvcC5jb21cIixcblwiZG9pLm9yZ1wiLFxuXCJkb2xwLmNjXCIsXG5cImRvLm15XCIsXG5cImRvcGVuLnVzXCIsXG5cImRvcGljZS5za1wiLFxuXCJkcG8uc3RcIixcblwiZC5wclwiLFxuXCJkcmFnZC5pc1wiLFxuXCJkcmJsLmluXCIsXG5cImRyb2lkLndzXCIsXG5cImRyb3AuaW9cIixcblwiZHJvei5tZVwiLFxuXCJkcnBsbi5nc1wiLFxuXCJkcnAubHlcIixcblwiZHIudGxcIixcblwiZHJ1ZGdlLnR3XCIsXG5cImRzYy50dlwiLFxuXCJkcy5wblwiLFxuXCJkc3B5Lm1lXCIsXG5cImR0ZGcuY29cIixcblwiZHRoaW4uZ3NcIixcblwiZHVybC5tZVwiLFxuXCJkdXJsLnVzXCIsXG5cImR2LmdkXCIsXG5cImR2bHIuaXRcIixcblwiZHdhcmZ1cmwuY29tXCIsXG5cImR5by5nc1wiLFxuXCJlMzcuZXVcIixcblwiZWFtLm1lXCIsXG5cImVhc3l1cmkuY29tXCIsXG5cImVhc3l1cmwubmV0XCIsXG5cImVjYS5zaFwiLFxuXCJlY2x1cmwuY29tXCIsXG5cImVjb24uc3RcIixcblwiZWNvdGkubXNcIixcblwiZWNyYS5zZVwiLFxuXCJlY3JlYS50dlwiLFxuXCJlZHV0LnRvXCIsXG5cImVlcHVybC5jb21cIixcblwiZWV6dXJsLmNvbVwiLFxuXCJlZmYub3JnXCIsXG5cImVsZWdhbnR0aGVtLmVzXCIsXG5cImVsaXRlZGFpLmx5XCIsXG5cImVscS50b1wiLFxuXCJlbHkucmVcIixcblwiZW1jLmltXCIsXG5cImVuY29zaWEubWVcIixcblwiZW5ndC5jb1wiLFxuXCJlbnRtLmFnXCIsXG5cImVudmEudG9cIixcblwiZW9jLmNjXCIsXG5cImVvbmxpLm5lXCIsXG5cImVxYm90LmNvbVwiLFxuXCJlcmF4LmN6XCIsXG5cImVydy5jelwiLFxuXCJlcy5wblwiLFxuXCJlc3NuLnRsXCIsXG5cIiNldHN5Lm1lXCIsXG5cImV0LnR2XCIsXG5cImV3ZXJpLmNvbVwiLFxuXCJld2VybC5jb21cIixcblwiZXg5LmNvXCIsXG5cImV4bS5uclwiLFxuXCJleHRyLnR2XCIsXG5cImV6dXJsLmNjXCIsXG5cImV6dXJsLmV1XCIsXG5cImZhLmJ5XCIsXG5cIiNmYWNlYm9vay5hcHBzdG9yZS5jb21cIixcblwiZmFjZXRvLnVzXCIsXG5cImZhbmRhbi5jb1wiLFxuXCJmYW5kdy5tZVwiLFxuXCJmYXRjLmNvXCIsXG5cImZhdi5tZVwiLFxuXCIjZmIubWVcIixcblwiZmIubWVcIixcblwiZmIubmJjc3BvcnRzLmNvbVwiLFxuXCJmYnNoYXJlLm1lXCIsXG5cIiNmYnV5Lm1lXCIsXG5cImZjbmV3cy50dlwiLFxuXCJmZWVkemlsLmxhXCIsXG5cImZmY2UuYnpcIixcblwiZmZmLnJlXCIsXG5cImZmZi50b1wiLFxuXCJmZmYud2ZcIixcblwiZmYuaW1cIixcblwiZmh1cmwuY29tXCIsXG5cImZpbGVzaGFyLmVzXCIsXG5cImZpbG9vcHMuaW5mb1wiLFxuXCJmaWx6LmZyXCIsXG5cImZpbmQuYmVlclwiLFxuXCJmaXJlLnRvXCIsXG5cImZpcnN0dXJsLmRlXCIsXG5cImZpcnN0dXJsLm5ldFwiLFxuXCJmaXRtLmFnXCIsXG5cImZsaWMua3JcIixcblwiZmxpbmdrLmNvbVwiLFxuXCJmbGlwLml0XCIsXG5cImZsbmUud3NcIixcblwiZmxxLnVzXCIsXG5cImZsdHIudHZcIixcblwiZmx3ci5wdFwiLFxuXCJmbHkyLndzXCIsXG5cImZtMi5tZVwiLFxuXCJmbmsuZXNcIixcblwiZm9hay5jb1wiLFxuXCJmb2UuaG5cIixcblwiZm9sbG93ZWR1LmNvbVwiLFxuXCJmb2x1Lm1lXCIsXG5cImZvbi5nc1wiLFxuXCJmb250Lm1lXCIsXG5cImZvcnIuc3RcIixcblwiZm9yLnRuXCIsXG5cImZveHMucHRcIixcblwiZm94LnR2XCIsXG5cImZveHl1cmwuY29tXCIsXG5cImZyYy52Y1wiLFxuXCJmcmVhay50b1wiLFxuXCJmcmVlcHIuZXNcIixcblwiZnJlemUuaXRcIixcblwiZnJvLmd5XCIsXG5cImYtc3QuY29cIixcblwiZnRjeS5jb1wiLFxuXCJmdW4ubHlcIixcblwiZnVubmkubHlcIixcblwiZnVyLmx5XCIsXG5cImZ1c2V1cmwuY29tXCIsXG5cImZ1cy5pblwiLFxuXCJmdXp6eS50b1wiLFxuXCJmd2Q0Lm1lXCIsXG5cImZ3ZHVybC5uZXRcIixcblwiZndpYi5uZXRcIixcblwiZnhuLndzXCIsXG5cImZ4cy5wdFwiLFxuXCJmenkuY29cIixcblwiZzAwLm1lXCIsXG5cImc4bC51c1wiLFxuXCJnYS5jb1wiLFxuXCJnYXAudXNcIixcblwiZ2F0ZXMubHlcIixcblwiZ2F0aHIudXNcIixcblwiZ2F3LmtyXCIsXG5cImdicGcubmV0XCIsXG5cImcuY28gYW5kXCIsXG5cImdlb3Jpb3QuY29cIixcblwiZ2V0Zi5seVwiLFxuXCJnZXRtLnB0XCIsXG5cImdldC5zaFwiLFxuXCJnZXQtc2hvcnR5LmNvbVwiLFxuXCJnZXQtdXJsLmNvbVwiLFxuXCJnZXR1cmwudXNcIixcblwiZ2cuZ2dcIixcblwiZ2kudmNcIixcblwiZ2l6bW8uZG9cIixcblwiZ2t1cmwudXNcIixcblwiZ2wuYW1cIixcblwiZ2xibi5jYVwiLFxuXCJnbG1yLm1lXCIsXG5cImdscG8uc3RcIixcblwiZ2xzZW4udXNcIixcblwiZ28yLm1lXCIsXG5cImdvLjlubC5jb21cIixcblwiZ28uYnJpdC5jb1wiLFxuXCJnby5mb3g1OS5jb21cIixcblwiZ29nLmxpXCIsXG5cImdvaGUuYXRcIixcblwiZ29oc24uY29cIixcblwiZ28uaWduLmNvbVwiLFxuXCJnb2tldi5pblwiLFxuXCJnb2xpbmtzLmNvXCIsXG5cImdvbG1hby5jb21cIixcblwiZ28ubWVcIixcblwiZ28ubmFzYS5nb3ZcIixcblwiZ29vZC5seVwiLFxuXCJnb28uZ2xcIixcblwiZ29vLmx1XCIsXG5cImdvLm9zdHAuZ292XCIsXG5cImdvc2hyaW5rLmNvbVwiLFxuXCJnby5zaHIubGNcIixcblwiZ29zc2lwY29wLmNvbVwiLFxuXCJnb3NzaS5wclwiLFxuXCJnby50b1wiLFxuXCJnb3RvbS50Z1wiLFxuXCJnby51bmwuZWR1XCIsXG5cImdvLnVzYS5nb3ZcIixcblwiZ293YWwubGFcIixcblwiZ3BsdXMudG9cIixcblwiZ3FtLmFnXCIsXG5cImdyYWIuYnlcIixcblwiZ3JkbnMuY29cIixcblwiZ3JlbS5pb1wiLFxuXCJncmkubXNcIixcblwiZ3JpbmRyLm1lXCIsXG5cImdybm9sLmNvXCIsXG5cImdybnBjLm9yZ1wiLFxuXCJnLnJvLmx0XCIsXG5cImdyLnBuXCIsXG5cImdyei5jbVwiLFxuXCJndGcubHVcIixcblwiZ3RyLmJ6XCIsXG5cImd1LmNvbVwiLFxuXCJndWlhbWEuaXNcIixcblwiZ3VybC5lc1wiLFxuXCJoYWRlai5jb1wiLFxuXCJoYWlsby50b1wiLFxuXCJoYW8uanBcIixcblwiaGF0bmUud3NcIixcblwiaGJzcGsuY29cIixcblwiaGNsdGUuY2hcIixcblwiaGVmci5pblwiLFxuXCJoZWxsb3R4dC5jb21cIixcblwiaGV4LmlvXCIsXG5cImhnLnR2XCIsXG5cImhpZGUubXlcIixcblwiaGlkZXJlZmVyLmNvbVwiLFxuXCJoaXAubXVcIixcblwiaGl0Lm15XCIsXG5cImhqa2wuZnJcIixcblwiaG1tLnBoXCIsXG5cImhuZGlhcnkuY29tXCIsXG5cImhvcGNsaWNrcy5jb21cIixcblwiaG9wLmltXCIsXG5cImhvcHMubWVcIixcblwiaG9wcy50b1wiLFxuXCJob3RyZWRpcmVjdC5jb21cIixcblwiaG90c2hvcnR1cmwuY29tXCIsXG5cImhvdS5saVwiLFxuXCJocC5udVwiLFxuXCJocHN0bS50Y1wiLFxuXCJocmMuaW9cIixcblwiaHJkLmNtXCIsXG5cImhyZWYuaW5cIixcblwiaHJlZi5saVwiLFxuXCJocmxkLnVzXCIsXG5cImhydmQubWVcIixcblwiaHJ2LnN0XCIsXG5cImhzYmxpbmtzLmNvbVwiLFxuXCJodC5seVwiLFxuXCJodHJuZS53c1wiLFxuXCJodHh0Lml0XCIsXG5cImh0ei5saVwiLFxuXCJodWIuYW1cIixcblwiaHVicy5seVwiLFxuXCJodWZmLmx2XCIsXG5cImh1ZmYudG9cIixcblwiaHVnZXVybC5jb21cIixcblwiaHVsdS5jb21cIixcblwiaHVsdS50dlwiLFxuXCJodXJsLml0XCIsXG5cImh1cmwubWVcIixcblwiaHVybC5ub1wiLFxuXCJodXJsLndzXCIsXG5cImh5cGVydXJsLmNvXCIsXG5cImh5di5lZVwiLFxuXCJpMHJ6LnR3XCIsXG5cImktMi5jb1wiLFxuXCJpOTkuY3pcIixcblwiaWNhbmhhei5jb21cIixcblwiaWNpby51c1wiLFxuXCJpY2l0LmZyXCIsXG5cImljay5saVwiLFxuXCJpY2tzLnJvXCIsXG5cImljb250LmFjXCIsXG5cImljcC1jLmNvbVwiLFxuXCJpZGVrLm5ldFwiLFxuXCJpZC50bFwiLFxuXCJpaGcuY29cIixcblwiaWlpaWkuaW5cIixcblwiaWtyLm1lXCIsXG5cImlreS5mclwiLFxuXCJpbGl4LmluXCIsXG5cImlsbGluLmlzXCIsXG5cImltZy5seVwiLFxuXCJpbmQucG5cIixcblwiaW5keS5zdFwiLFxuXCJpbi5mbHV4LmNvbVwiLFxuXCJpbmZvLm1zXCIsXG5cImluc3QuY3JcIixcblwiaW50ZWwubHlcIixcblwiaW50by50dlwiLFxuXCJpbnR1aXQubWVcIixcblwiaW52ZW50LmdlXCIsXG5cImludi5sdlwiLFxuXCJpcGxvZ2dlci5jb21cIixcblwiaXBsb2dnZXIub3JnXCIsXG5cImlyLnBlXCIsXG5cImlydC5tZVwiLFxuXCJpc2Nvb2wubmV0XCIsXG5cImlzLmdkXCIsXG5cImlzcmEubGlcIixcblwiaXQyLmluXCIsXG5cIml0aGFjYWpyLm5sXCIsXG5cIml0aGVtLmVzXCIsXG5cIml0bS5pbVwiLFxuXCJpdG8ubXhcIixcblwiaXRzZW8ub3JnXCIsXG5cIml0c2guYm9cIixcblwiaXRzanVzdC5pblwiLFxuXCJpdHMubXlcIixcblwiaXRzeS5pdFwiLFxuXCJpdHYuY29cIixcblwiaXR5LmltXCIsXG5cIml2aWxsLmFnXCIsXG5cIml4Lmx0XCIsXG5cIml4LnNrXCIsXG5cImoyai5kZVwiLFxuXCJqY3AuaXNcIixcblwiamNyZXcuY29cIixcblwiamRlbS5jelwiLFxuXCJqLmdzXCIsXG5cImppZWIuYmVcIixcblwiamlqci5jb21cIixcblwiam1vcnIuaXNcIixcblwiai5tcFwiLFxuXCJqbXNicmQuY29cIixcblwiam91cm4udXNcIixcblwianAyMi5uZXRcIixcblwianBtLmNvbVwiLFxuXCJqcXcuZGVcIixcblwianIubHlcIixcblwianJubC5pZVwiLFxuXCJqc2hlbi5tZVwiLFxuXCJqcy5pc1wiLFxuXCJqLnN0XCIsXG5cImp1c3QuYXNcIixcblwiazJuZS53c1wiLFxuXCJrNi5relwiLFxuXCJrYWJiYWdlLmlvXCIsXG5cImthcmUxMS50dlwiLFxuXCJrYXNrLnVzXCIsXG5cImtjaXRwLm1lXCIsXG5cImtjay5zdFwiLFxuXCJrZWwuYnlcIixcblwia2V0a3AuaW5cIixcblwia2Utd2UubmV0XCIsXG5cImtmZC5wbFwiLFxuXCJraXJvLnR2XCIsXG5cImtpc2EuY2hcIixcblwia2lzc2EuYmVcIixcblwia2lzcy5seVwiLFxuXCJrbC5hbVwiLFxuXCJrbGNrLm1lXCIsXG5cImtsb3UudHRcIixcblwia25nNS50dlwiLFxuXCJrbmcuaHRcIixcblwia25vdC5seVwiLFxuXCJrb25yYXRoLmNvXCIsXG5cImtvcmUudXNcIixcblwia29ydGEubnVcIixcblwia290cy5udVwiLFxuXCJrcC5jY1wiLFxuXCJrcjN3LmRlXCIsXG5cImtyYXQuc2lcIixcblwia3JhdHNpLmN6XCIsXG5cImtyb2QuY3pcIixcblwia3J1bmNoZC5jb21cIixcblwia3J6LmNoXCIsXG5cImtzdHAubW5cIixcblwia3RpZS50dlwiLFxuXCJrdGltZXMuY29cIixcblwia3RsYW5lLndzXCIsXG5cImt0enIudXNcIixcblwia3VjLmN6XCIsXG5cImt1bnppLm1lXCIsXG5cImsudnVcIixcblwia3hiLm1lXCIsXG5cImt4ay5tZVwiLFxuXCJMOS5mclwiLFxuXCJsOWsubmV0XCIsXG5cImxhY28uc3RcIixcblwibGFuZHMudG9cIixcblwibGF0Lm1zXCIsXG5cImxjLmN4XCIsXG5cImxjLXMuY29cIixcblwibGN1dC5pblwiLFxuXCJsZWFmbmUud3NcIixcblwibGV0b3AxMC5cIixcblwibC5oaC5kZVwiLFxuXCJsaWJlcm8uaXRcIixcblwibGljay5teVwiLFxuXCJsaWVuLmxpXCIsXG5cImxpZW4ucGxcIixcblwibGlmZWhhYy5rclwiLFxuXCJsaWlwLnRvXCIsXG5cImxpbHRleHQuY29tXCIsXG5cImxpbi5jclwiLFxuXCJsaW4uaW9cIixcblwibGlua2JlZS5jb21cIixcblwibGlua2J1bi5jaFwiLFxuXCJsaW5rZWUuY29tXCIsXG5cImxpbmtnYXAuY29tXCIsXG5cImxpbmtuLmNvXCIsXG5cImxpbmtzbGljZS5jb21cIixcblwibGlua3RvLmltXCIsXG5cImxpbmsud25lcC5jb21cIixcblwibGluay56aXAubmV0XCIsXG5cImxpbnhmaXguZGVcIixcblwibGlzdG4udG9cIixcblwibGl0ZXVybC5uZXRcIixcblwibGl1cmwuY25cIixcblwibGl2ZW1peHRhcC5lc1wiLFxuXCJsaXZlc2kuZGVcIixcblwibGl2ZXN0cmUuYW1cIixcblwibGl2aW5nc29jaS5hbFwiLFxuXCJsaXguaW5cIixcblwibC1rLmJlXCIsXG5cImxrLmh0XCIsXG5cImxsdS5jaFwiLFxuXCJsbmNoLmNvXCIsXG5cImxuay5ieVwiLFxuXCJsbmsuY29cIixcblwibG5rZC5pblwiLFxuXCJsbmsuZGlyZWN0XCIsXG5cImxuay5nZFwiLFxuXCJsbmsuaW5cIixcblwibG5rLmx5XCIsXG5cImxuay5tc1wiLFxuXCJsbmtzLmZyXCIsXG5cImxuay5za1wiLFxuXCJsbmt1cmwuY29tXCIsXG5cImxua3kuZnJcIixcblwibG5wLnNuXCIsXG5cImxuLXMubmV0XCIsXG5cImxuLXMucnVcIixcblwibG9nby50dlwiLFxuXCJsb2h1ZC51c1wiLFxuXCJsb25ncmVwLmx5XCIsXG5cImxvb3B0LnVzXCIsXG5cImxvc3QuaW5cIixcblwibG93LmVzXCIsXG5cImxwMjUuZnJcIixcblwibHBsemEuY29cIixcblwibC5wclwiLFxuXCJsLXIudHZcIixcblwibHJ1LmpwXCIsXG5cImxzLmx5XCIsXG5cImx0cy5jclwiLFxuXCJsdC50bFwiLFxuXCJsdXJsLm5vXCIsXG5cImx1LnRvXCIsXG5cIkx2dmsuY29tXCIsXG5cImx4LmltXCIsXG5cIm0xLmlvXCIsXG5cIm0xcC5mclwiLFxuXCJtM21pLmNvbVwiLFxuXCJtYWNydW1vLnJzXCIsXG5cIm1hY3RlLmNoXCIsXG5cIm1hZC5seVwiLFxuXCJtYWtlLm15XCIsXG5cIm1hcHEuc3RcIixcblwibWFyaWUuY2xcIixcblwibWFzaC50b1wiLFxuXCJtYXZyZXYuY29tXCIsXG5cIm1iaXN0LnJvXCIsXG5cIm1jYWYuZWVcIixcblwibWNkLnRvXCIsXG5cIm1jc3RyLm5ldFwiLFxuXCJtY3RyLnN0XCIsXG5cIm1kbDI5Lm5ldFwiLFxuXCJtZHRtLnBsXCIsXG5cIm1lZGlhdGUuY29tXCIsXG5cIm1lZS5ib1wiLFxuXCJtZWV0dS5wc1wiLFxuXCJtZWZpLnVzXCIsXG5cIm1lbXVybC5jb21cIixcblwibWVya3kuZGVcIixcblwibWV0YW1hcmsubmV0XCIsXG5cIm1pYy5mclwiLFxuXCJtaWNoYWVsLnBoXCIsXG5cIm1pZ2h0Lmx5XCIsXG5cIm1pZ3JlLm1lXCIsXG5cIm1pbjIubWVcIixcblwibWluLmRqXCIsXG5cIm1pbmlsaWVuLmNvbVwiLFxuXCJtaW5pbGluay5vcmdcIixcblwibWluaXVybC5jb21cIixcblwibWludS5tZVwiLFxuXCJtaW51cmwuZnJcIixcblwibWluLnVzXCIsXG5cIm1pdG5lLndzXCIsXG5cIm1pLnR0XCIsXG5cIm1rZS5tZVwiLFxuXCJta2xuZC5jb21cIixcblwibWt0LmNvbVwiLFxuXCJta3RwbGMub3JnXCIsXG5cIm1sYW4uY29cIixcblwibWxrcy5jb1wiLFxuXCJtbG4uaW1cIixcblwibWxzcC5jb1wiLFxuXCJtbWYuY2NcIixcblwibW1mbGludC5tZVwiLFxuXCJtb2J5LnRvXCIsXG5cIm1vam8ubHlcIixcblwibW9uZXkudXNcIixcblwibW9uc3Rlci5tZVwiLFxuXCJtb291cmwuY29tXCIsXG5cIm1vcGguaWVcIixcblwibW9yZS5zaFwiLFxuXCJtb3ZpZS5wc1wiLFxuXCJtb3ZpLmVzXCIsXG5cIm1waC50b1wiLFxuXCJtcmt0LnJzXCIsXG5cIm1ybW4ub3JnXCIsXG5cIm1ydGUuY2hcIixcblwibXNmdC5pdFwiLFxuXCJtc2cuc2dcIixcblwibXN0ci5jZFwiLFxuXCJtdGhzLmJlXCIsXG5cIm10bG4udXNcIixcblwibS50cmkuYmVcIixcblwibXVvLmZtXCIsXG5cIm11cmwua3pcIixcblwibXV0Lmx1XCIsXG5cIm12Mi5tZVwiLFxuXCJtdnAudG9cIixcblwibXduZS53c1wiLFxuXCJteWRlc2VydC5jb1wiLFxuXCJteWZvbnRzLnVzXCIsXG5cIm15bG9jLm1lXCIsXG5cIm15cGljdC5tZVwiLFxuXCJteXNwLmFjXCIsXG5cIm15c3AuaW5cIixcblwibXl1cmwuaW5cIixcblwibXl1cmwuc2lcIixcblwibXkueW9wbGFpdC5jb21cIixcblwibXouY20sXCIsXG5cIm16bC5sYVwiLFxuXCJuYW1lLnNvY2lhbFwiLFxuXCJuYW5vcmVmLmNvbVwiLFxuXCJuYW5vdXJsLnNlXCIsXG5cIm5hdGwucmVcIixcblwibmF0dXJlLmx5XCIsXG5cIm5iY2NoaS5jb21cIixcblwibmJjLmNvXCIsXG5cIm5iY25ld3MudG9cIixcblwibmJjbnkuY29tXCIsXG5cIm5iY28ubHlcIixcblwibmJjLnRvXCIsXG5cIm5ibG8uZ3NcIixcblwibmJ4LmNoXCIsXG5cIm5jYW5lLmNvbVwiLFxuXCJuY2Euc3RcIixcblwibmR1cmwuY29tXCIsXG5cIm5lMS5uZXRcIixcblwibmVvLmx5XCIsXG5cIm5ldDQ2Lm5ldFwiLFxuXCJuZXQubXNcIixcblwibmV0bmV0Lm1lXCIsXG5cIm5ldHNob3J0Y3V0LmNvbVwiLFxuXCJuZXdzZGF5LmNvbVwiLFxuXCJuZXdzZXIubWVcIixcblwibmV3c3ByLmVzXCIsXG5cIm5ld3N5LmNvbVwiLFxuXCJuZnoubWVcIixcblwibmljb3UuY2hcIixcblwibmllbC5zblwiLFxuXCJuaWUubW5cIixcblwibmlnLmdyXCIsXG5cIm5pbmcuaXRcIixcblwibmkudG9cIixcblwibml4bGUudXNcIixcblwibmpvdXIubmxcIixcblwiI25tZW0uYWdcIixcblwibm0ubHlcIixcblwibm4ubmZcIixcblwibm9kMi5tZVwiLFxuXCJub2lwLmNvXCIsXG5cIm5va2lhLmx5XCIsXG5cIm5vdGxvbmcuY29tXCIsXG5cIm5vdC5teVwiLFxuXCJub3YuaW9cIixcblwibm93dGguaXNcIixcblwibi5wclwiLFxuXCJucS5zdFwiLFxuXCJucmRyeS5uZXRcIixcblwibnNmdy5pblwiLFxuXCJuc3NuLmNvXCIsXG5cIm50YnguY29cIixcblwibnV0c2hlbGx1cmwuY29tXCIsXG5cIm54Zy5pc1wiLFxuXCJueHkuaW5cIixcblwibnlkbi51c1wiLFxuXCJueW0uYWdcIixcblwibnlvYi5jb1wiLFxuXCJueXAuc3RcIixcblwibnl0aS5tc1wiLFxuXCJueXYubWVcIixcblwibnpoLnR3XCIsXG5cIm9hZHMuY29cIixcblwib2JvZXlhc3VpLmNvbVwiLFxuXCJvYzEudXNcIixcblwib2NjaXAuaXQgYW5kIDM2MC5pb1wiLFxuXCJvLmVhLmNvbVwiLFxuXCJvZmEuYm9cIixcblwib2ZmdXIuY29tXCIsXG5cIm9mbC5tZVwiLFxuXCJvaGRldi5pblwiLFxuXCJvaW5rLmNvbVwiLFxuXCJva29rLmZyXCIsXG5cIm8ubHlcIixcblwib21mLmdkXCIsXG5cIm9tZ2YuYWNcIixcblwib20ubHlcIixcblwib21vaWthbmUubmV0XCIsXG5cIm9uLjExYWxpdmUuY29tXCIsXG5cIm9uOW5ld3MudHZcIixcblwib24tYWpjLmNvbVwiLFxuXCJvbi5hcHAuY29tXCIsXG5cIm9uLmF6Y2VudHJhbC5jb21cIixcblwib24uYm9mYS5jb21cIixcblwib24uY2MuY29tXCIsXG5cIm9uLmNubi5jb21cIixcblwib24uZWEuY29tXCIsXG5cIm9uZWNlbnQudXNcIixcblwiI29uLmZiLm1lXCIsXG5cIm9uLmZlYXJuZXQuY29tXCIsXG5cIm9uLmZsYXRvZGF5LmNvbVwiLFxuXCJvbmZvcmIuZXNcIixcblwib24uZnQuY29tXCIsXG5cIm9uLmhsbi50dlwiLFxuXCJvbmlvbi5jb21cIixcblwib24uamNvbmxpbmUuY29tXCIsXG5cIm9uLmtzZGsuY29tXCIsXG5cIm9uLmt0aHYuY29tXCIsXG5cIm9uLmxpZmUuY29tXCIsXG5cIm9uLm1hc2gudG9cIixcblwib24ubWdtYWR2LmNvbVwiLFxuXCJvbi5ta3R3Lm5ldFwiLFxuXCJvbm1zbmJjLmNvXCIsXG5cIm9uLm1zbmJjLmNvbVwiLFxuXCJvbi1tc24uY29tXCIsXG5cIm9uLm5hdGdlby5jb21cIixcblwib24ubmV3czEwLm5ldFwiLFxuXCJvbi5uZmliLmNvbVwiLFxuXCJvbi5waWVyMS5jb21cIixcblwib24ucG5qLmNvbVwiLFxuXCJvbnNhYXMuaW5mb1wiLFxuXCJvbi5zaS5jb21cIixcblwib24uc3VnYXJzY2EucGVcIixcblwib24udGRvLmNvbVwiLFxuXCJvbi50aGVjLWwuY29tXCIsXG5cIm9uLnRoZWdyaW8uY29tXCIsXG5cIm9uLnRoZWtpdGMuaG5cIixcblwib24udG9kYXkuY29tXCIsXG5cIm9udmIuY29cIixcblwib24udmVudHJhY2hpY2Fnby5jb21cIixcblwib24udmgxLmNvbVwiLFxuXCJvbi53YmlyLmNvbVwiLFxuXCJvbi53Y3NoNi5jb21cIixcblwib24ud2ZteS5jb21cIixcblwib24ud2dyei5jb21cIixcblwib24ud2t5Yy5jb21cIixcblwib24ud2xiejIuY29tXCIsXG5cIm9uLndsdHguY29tXCIsXG5cIm9uLndtYXouY29tXCIsXG5cIm9uLnduZXAuY29tXCIsXG5cIm9uLndzai5jb21cIixcblwib24ud3RzcC5jb21cIixcblwib24ud3VzYTkuY29tXCIsXG5cIm9uLnd6em0uY29tXCIsXG5cIm9vcXguY29tXCIsXG5cIm9wYi5pc1wiLFxuXCJvcHRpbWl6ZS5seVwiLFxuXCJvcmNsLnNvXCIsXG5cIm9yZWlsLmx5XCIsXG5cIm9yZ2Nucy5vcmdcIixcblwib3J6LnNlXCIsXG5cIm9zaGtvLnNoXCIsXG5cIm9za3kuY29cIixcblwib3Rhay5odVwiLFxuXCJvdWEuYmVcIixcblwib3UuYWZcIixcblwib3UuZ2RcIixcblwiI293bC5saVwiLFxuXCIjb3cubHlcIixcblwib3cubHlcIixcblwiby14LmZyXCIsXG5cIm94eXouaW5mb1wiLFxuXCJwNGsuaW5cIixcblwicDZsLm9yZ1wiLFxuXCJwOGcudHdcIixcblwicGFjay5yc1wiLFxuXCJwYXBlLnJzXCIsXG5cInBhcmt5LnR2XCIsXG5cInBhcnRvbi5seVwiLFxuXCJwYXJ2LnVzXCIsXG5cInBhc3QuaXNcIixcblwicGF0Y2guY29tXCIsXG5cInBhdWxkaW5nLm5ldFwiLFxuXCJwYmxpLnNoXCIsXG5cInBjay5yc1wiLFxuXCJwY28ubHRcIixcblwicGRoLmNvXCIsXG5cInBkdWRhLm1vYmlcIixcblwicGVhY2hwLml0XCIsXG5cInBlYXVybC5jb21cIixcblwicGVuZGVrLmluXCIsXG5cInBlcC5zaVwiLFxuXCJwZXJlei5seVwiLFxuXCJwZXRzbWFydHNvY2lhbC5jb21cIixcblwicGV3cnNyLmNoXCIsXG5cInBnZS5zeFwiLFxuXCJwaGlsbGlwcy50b1wiLFxuXCJwaC5seVwiLFxuXCJwaHRzaHAudXNcIixcblwicGljLmdkXCIsXG5cInBpY2guaW5cIixcblwicGljcGx6LmNvbVwiLFxuXCJwaWN6LnVzXCIsXG5cInBpZmYubWVcIixcblwicGlrby5tZVwiLFxuXCJwaW5ld3MuY29cIixcblwicGluZy5mbVwiLFxuXCJwaW4uc3RcIixcblwicGkucGVcIixcblwicGl0Y2gucGVcIixcblwicGl1cmwuY29tXCIsXG5cInBsLmFuXCIsXG5cInBsYXRlZC5tZVwiLFxuXCJwbGkuZ3NcIixcblwicGxvdHMuZnJcIixcblwicGx1bXVybC5jb21cIixcblwicGx1cmwubWVcIixcblwicC5seVwiLFxuXCJwbS53dS5jelwiLFxuXCJwbmRvLmx5XCIsXG5cInBuZ3IuaXRcIixcblwicG5pbmphLmNvXCIsXG5cInBudC5tZVwiLFxuXCJwb2NrZXQuY29cIixcblwicG9qb25ld3MuY29cIixcblwicG9saXRpLmNvXCIsXG5cInBvbGwuZm1cIixcblwicG9wLmx5XCIsXG5cInBvcHJsLmNvbVwiLFxuXCJwb3BzLmNpXCIsXG5cInBvLnN0XCIsXG5cInBvc3QuY3JcIixcblwicG9zdGRpc3BhdC5jaFwiLFxuXCJwb3N0ZWQuYXRcIixcblwicC5vc3QuaW1cIixcblwicG9zdC5seVwiLFxuXCJwb3dlbGxzLnVzXCIsXG5cInBwY2hlLnJvXCIsXG5cInBwZnIuaXRcIixcblwicHAuZ2dcIixcblwicHBzdC5tZVwiLFxuXCJwcHQuY2NcIixcblwicHB0LmxpXCIsXG5cInAucHdcIixcblwicHJlaml0LmN6XCIsXG5cInByZXNzLnNuXCIsXG5cInByZXR0eWxpbmtwcm8uY29tXCIsXG5cInByZXouaXNcIixcblwicHJpLnZjXCIsXG5cInBybnQuaW5cIixcblwicHJuLnRvXCIsXG5cInByb2ZpbGUudG9cIixcblwicHQyLm1lXCIsXG5cInB0YWIuaXRcIixcblwicHRpdHVybC5jb21cIixcblwicHRtLnJvXCIsXG5cInB0cmFuaS5tZVwiLFxuXCJwdWJsdW4uY2hcIixcblwicHViLnZpdHJ1ZS5jb21cIixcblwicHVrZS5pdFwiLFxuXCJwdWxzZS5tZVwiLFxuXCJwdWxzZW5lLndzXCIsXG5cInB1cmkubmFcIixcblwicHcyLnJvXCIsXG5cInB3aXJlLmF0XCIsXG5cInB5Ni5ydVwiLFxuXCJweXNwZXIuY29tXCIsXG5cInFibi5ydVwiLFxuXCJxLmdzXCIsXG5cInFpay5saVwiLFxuXCJxa21lLm1lXCIsXG5cInFsbmsubmV0XCIsXG5cInFvaW9iLmNvbVwiLFxuXCJxcWMuY29cIixcblwicXIuYWVcIixcblwicXIuY3hcIixcblwicXIubmV0XCIsXG5cInFydGFnLmZyXCIsXG5cInF0ZS5tZVwiLFxuXCJxdWlja3VybC5jby51a1wiLFxuXCJxdXJsLmNvbVwiLFxuXCJxdXJseXEuY29tXCIsXG5cInF1LnRjXCIsXG5cInF1dS5udVwiLFxuXCJxdXguaW5cIixcblwicXZjLmNvXCIsXG5cInF4cC5jelwiLFxuXCJxeHAuc2tcIixcblwicXkuZmlcIixcblwicXouY29tXCIsXG5cInIyOS5jb1wiLFxuXCJyMjkudXNcIixcblwicjh0LnVzXCIsXG5cInJhY2gudHZcIixcblwicmFja2VkLmNjXCIsXG5cInJhdmVuLmltXCIsXG5cInJiNi5jb1wiLFxuXCJyYjYubWVcIixcblwicmJsLm1zXCIsXG5cInJja25yLmlvXCIsXG5cInJjbGsubHlcIixcblwicmRkLm1lXCIsXG5cInJkZS5tZVwiLFxuXCJyZC5pb1wiLFxuXCJyZHoubWVcIixcblwicmVhZC5iaVwiLFxuXCJyZWFkdGhpcy5jYVwiLFxuXCJyZWFsbHl0aW55dXJsLmNvbVwiLFxuXCJyZWJyaWNrLml0XCIsXG5cInJlZGQuaXRcIixcblwicmVkaXIuZWNcIixcblwicmVkaXJlY3RzLmNhXCIsXG5cInJlZGlyLmZyXCIsXG5cInJlZGlyeC5jb21cIixcblwicmVkdS5pdFwiLFxuXCJyZWYuc29cIixcblwicmVpc2UubGNcIixcblwicmVsaW5rLmZyXCIsXG5cInJlbHl0LnVzXCIsXG5cInJlbS5heFwiLFxuXCJyZS5wblwiLFxuXCJyZXR3ZWRpYS5jb21cIixcblwicmV0d3QubWVcIixcblwicmV1dC5yc1wiLFxuXCJyZXZvbHZlcjIuY29tXCIsXG5cInJmaS5teVwiLFxuXCJyaGpyLm5ldFwiLFxuXCJyaWNrcm9sbC5pdFwiLFxuXCJyLmltXCIsXG5cInJpLm1zXCIsXG5cInJpbmdjZW50ci5hbFwiLFxuXCJyaW5naXQudXNcIixcblwicml2dmEuZGVcIixcblwicml6LmN6XCIsXG5cInJpei5nZFwiLFxuXCJybHkuY2NcIixcblwicm5jLmFnXCIsXG5cInJuay5tZVwiLFxuXCJybmtwci5jb21cIixcblwicm9ja2NlbnRlci5jb1wiLFxuXCJyb2NrLmxpXCIsXG5cInJvZC5nc1wiLFxuXCJyb2ZsYy5hdFwiLFxuXCJyb2wubGFcIixcblwicm9sLnN0XCIsXG5cInJwcGxmci5tZVwiLFxuXCJyc21vbmtleS5jb21cIixcblwicnQyLmNhXCIsXG5cInJ0Lm51XCIsXG5cInJ0LnNlXCIsXG5cInJ1Ynl1cmwuY29tXCIsXG5cInJ1Lmx5XCIsXG5cInJ1cmwub3JnXCIsXG5cInJ1di5tZVwiLFxuXCJyd2pmLndzXCIsXG5cInJ3dy50b1wiLFxuXCJyd3cudHdcIixcblwiczNudC5jb21cIixcblwiczRjLmluXCIsXG5cInM3eS51c1wiLFxuXCJzYWZlbGlua3MucnVcIixcblwic2FmZS5tblwiLFxuXCJzYWZtLmNvXCIsXG5cInNhZ3lhcC50a1wiLFxuXCJzYWkubHlcIixcblwic2FtZXVybC5jb21cIixcblwic2FyY2FzLm1zXCIsXG5cInNibi50b1wiLFxuXCJzYnV4LmNvXCIsXG5cInNjaGVkLmNvXCIsXG5cInNjaC5tcFwiLFxuXCJzY2lmcmkubWVcIixcblwic2NvYmxlLml0XCIsXG5cInNjLm9yZ1wiLFxuXCJzY3JpLmJpXCIsXG5cInNjcm5jaC5tZVwiLFxuXCJzY3R5LmFzaWFcIixcblwic2R0ay5mbVwiLFxuXCJzZHUuc2tcIixcblwic2R1dC51c1wiLFxuXCJzLmR2Lm51XCIsXG5cInNlYXRpLm1zXCIsXG5cInNlY3JldC5seVwiLFxuXCJzZWQuY3hcIixcblwic2VlbWUuYXRcIixcblwic2VlLnNjXCIsXG5cInNlZ3VlLnNlXCIsXG5cInNlbG5kLmNvbVwiLFxuXCJzZWx6LmNvXCIsXG5cInNlbmQuZ2RcIixcblwic2VwaC5tZVwiLFxuXCJzZXIuYnpcIixcblwic2V0ZC5lc1wiLFxuXCJzZXdhdC5jaFwiLFxuXCJzZm9yY2UuY29cIixcblwic2Z0bHlyLmNvbVwiLFxuXCJzZnUuY2FcIixcblwic2Z5LmNvXCIsXG5cInNnZm5vdy5jb1wiLFxuXCJzZ2l6bW8uY29tXCIsXG5cInNnay5tblwiLFxuXCJzLmdub3NzLnVzXCIsXG5cInNoYWR5dXJsLmNvbVwiLFxuXCJzaGFyLmFzXCIsXG5cInNoYXIuZXNcIixcblwicy5oYnIub3JnXCIsXG5cInNoZWJwci5lc1wiLFxuXCJzaGltLm5ldFwiLFxuXCJzaGluay5kZVwiLFxuXCJzaG8ucGVcIixcblwic2hvcmwuY29tXCIsXG5cInNob3J0LmNjXCIsXG5cInNob3J0ZW51cmwuY29tXCIsXG5cInNob3J0ZW4ud3NcIixcblwic2hvcnRlcmxpbmsuY29tXCIsXG5cInNob3J0LmllXCIsXG5cInNob3J0aW8uY29tXCIsXG5cInNob3J0bGlua3MuY28udWtcIixcblwic2hvcnRseS5ubFwiLFxuXCJzaG9ydG5hLm1lXCIsXG5cInNob3J0bi5tZVwiLFxuXCJzaG9ydC5wa1wiLFxuXCJzaG9ydHF1aWsuY29tXCIsXG5cInNob3J0ci5tZVwiLFxuXCJzaG9ydC50b1wiLFxuXCJzaG9ydHVybC5jb21cIixcblwic2hvcnR6Lm1lXCIsXG5cInNob3R1cmwudXNcIixcblwic2hvdXQudG9cIixcblwic2hvdy5teVwiLFxuXCJzaHB3cy5tZVwiLFxuXCJzaHJlZHVcIixcblwic2hyZWR1cmwuY29tXCIsXG5cInNocmlua2lmeS5jb21cIixcblwic2hyaW5rci5jb21cIixcblwic2hyaW5rc3Rlci5jb21cIixcblwic2hyaW5rdXJsLnVzXCIsXG5cInNocnRlbi5jb21cIixcblwic2hydC5mclwiLFxuXCJzaHJ0LmluXCIsXG5cInNocnRsLmNvbVwiLFxuXCJzaHJ0bi5jb21cIixcblwic2hydG5kLmNvbVwiLFxuXCJzaHJ0LnN0XCIsXG5cInNocnQud3NcIixcblwic2hydW5raW4uY29tXCIsXG5cInNoLnN0XCIsXG5cInNodXJsLm5ldFwiLFxuXCJzaHcubWVcIixcblwic2h5LnNpXCIsXG5cInNoei5hbVwiLFxuXCJzaWNheC5uZXRcIixcblwic2lnbm9uLm9yZ1wiLFxuXCJzaW1wLmx5XCIsXG5cInNpbXVybC5jb21cIixcblwic2ltdXJsLm5ldFwiLFxuXCJzaW11cmwub3JnXCIsXG5cInNpbXVybC51c1wiLFxuXCJzaW5hLmx0XCIsXG5cInNpdGVsdXRpb25zLmNvbVwiLFxuXCJzaXRlby51c1wiLFxuXCJzay5neVwiLFxuXCJza2wuc2hcIixcblwic2tyb2MucGxcIixcblwic2tyLnNrXCIsXG5cInNrLnlwZS5tc1wiLFxuXCJzbGF0ZS5tZVwiLFxuXCJzbGlkZXNoYS5yZVwiLFxuXCJzbGtpLnJ1XCIsXG5cInNsLmx5XCIsXG5cInNtYWxsci5jb21cIixcblwic21hbGxyLm5ldFwiLFxuXCJzbWFydC5jclwiLFxuXCJzbWFydHVybC5pdFwiLFxuXCJzbWFzaGVkLmJ5XCIsXG5cInNtLmRycGVwcGVyLmNvbVwiLFxuXCJzbWYuaXNcIixcblwic21mdS5pblwiLFxuXCJzbWdtLnVzXCIsXG5cInNtaXRoLmdsXCIsXG5cInNtbGwuY29cIixcblwic21xLnRjXCIsXG5cInNtc2gubWVcIixcblwic211cmwuY29tXCIsXG5cInNtdXJsLm5hbWVcIixcblwic25hZHIuaXRcIixcblwic25kLnNjXCIsXG5cInNuLmltXCIsXG5cInNuaXBpZS5jb21cIixcblwic25pcC5seVwiLFxuXCJzbmlwci5jb21cIixcblwic25pcHVybC5jb21cIixcblwic25rci5tZVwiLFxuXCJzbm93LnNoXCIsXG5cInNucy5teFwiLFxuXCJzbnN3LnVzXCIsXG5cInNudXJsLmNvbVwiLFxuXCJzbi52Y1wiLFxuXCJzLm55dC5jb21cIixcblwic29jaWFsLmJlc3RidXkuY29tXCIsXG5cInNvY2lhbC5qY3AuY29tXCIsXG5cInNvY2lhbC52encuY29tXCIsXG5cInNvY2lhbC56dW5lLm5ldFwiLFxuXCJzb2Nrcm9sbC5jb21cIixcblwic29jLmxpXCIsXG5cInNvbWUubHlcIixcblwic29uZy5seVwiLFxuXCJzb28uZ2RcIixcblwicy5vc2t5LmNvXCIsXG5cInNvdXAucHNcIixcblwic3AyLnJvXCIsXG5cInNwZHIubW5cIixcblwic3BlLmNvbVwiLFxuXCJzcGVkci5jb21cIixcblwic3BuLnNyXCIsXG5cInNwb24uZGVcIixcblwic3BvcnRzZ3JpZC5jb21cIixcblwic3BvdGkuZmlcIixcblwic3ByLmx5XCIsXG5cInNwdG5rbmUud3NcIixcblwic3E2LnJ1XCIsXG5cInNxcmwuaXRcIixcblwic3F1LnJlXCIsXG5cInNxemUuaXRcIixcblwicy5ybHAuZGVcIixcblwic3Juay5uZXRcIixcblwic3JzLmxpXCIsXG5cInNzbC5nc1wiLFxuXCJzdDguZm1cIixcblwic3RhbjRkLnVzXCIsXG5cInN0YXJnYXoudHRcIixcblwic3RhcnN0YXIudG9cIixcblwic3RhcnR1cmwuY29tXCIsXG5cInN0YXRpZ3IuYW1cIixcblwic3RpY2t1cmwuY29tXCIsXG5cInN0anIubmxcIixcblwic3Rrcy5jb1wiLFxuXCJzdGxyYS5tc1wiLFxuXCJzdG9uZXQuY29cIixcblwic3RwbXZ0LmNvbVwiLFxuXCJzdHJpa2luZy5seVwiLFxuXCJzdHJ5Lm1lXCIsXG5cInN0dXJseS5jb21cIixcblwic3R5bGVpdGUuY29tXCIsXG5cInN1YmFyLnVzXCIsXG5cInN1bnRtLmVzXCIsXG5cInN1LnByXCIsXG5cInN1cHMudXNcIixcblwic3VybC5jby51a1wiLFxuXCJzLXVybC5mclwiLFxuXCJzdXJsLmh1XCIsXG5cInN1cmwuaXRcIixcblwic3VybC5tZVwiLFxuXCJzdXguY3pcIixcblwic3Z5Lm1rXCIsXG5cInMud2hjYy5jb21cIixcblwic3kucGVcIixcblwidGFiemkuY29tXCIsXG5cInRhLmdkXCIsXG5cInRha2VteWZpbGUuY29tXCIsXG5cInRhdS5wZVwiLFxuXCJ0YmQubHlcIixcblwidGJmLm1lXCIsXG5cInQuY25cIixcblwidC5jb1wiLFxuXCJ0Y3JuLmNoXCIsXG5cInRkanQuY3pcIixcblwidGVjaG1lLm1lXCIsXG5cInRlY2hwaW4uaW9cIixcblwidGVjaHJlLnZ1XCIsXG5cInRlay5pb1wiLFxuXCJ0ZW1wby5haVwiLFxuXCJ0Z3IubWVcIixcblwidGdyLnBoXCIsXG5cInRndC5ielwiLFxuXCJ0aDgudXNcIixcblwidGhkLmNvXCIsXG5cInRoZWF0bG4udGNcIixcblwidGhlYmVhLnN0XCIsXG5cInRoZWJyYWlzZXIuY29tXCIsXG5cInRoZWNvdy5tZVwiLFxuXCJ0aGVjcC5tZVwiLFxuXCJ0aGVkYy5jb21cIixcblwidGhlZHJ1bS5jb21cIixcblwidGhla2l0Yy5oblwiLFxuXCJ0aGVzYS51c1wiLFxuXCJ0aGVzZW50Lm5sXCIsXG5cInRoZXNvLmNvXCIsXG5cInRoZXRpbS5lc1wiLFxuXCJ0aGtwLmdzXCIsXG5cInRoa3ByLmdzXCIsXG5cInRobmRyLml0XCIsXG5cInRoci5jbVwiLFxuXCJ0aHJkbC5lc1wiLFxuXCJ0aHJsLnN0XCIsXG5cInRpZ2h0dXJsLmNvbVwiLFxuXCJ0aWx0LnRjXCIsXG5cInRpLm1lXCIsXG5cInRpbWVzdXJsLmF0XCIsXG5cInRpbW1pbC5lc1wiLFxuXCJ0aW5pLmNjXCIsXG5cInRpbml1cmkuY29tXCIsXG5cInRpbmkudXNcIixcblwidGluLmxpXCIsXG5cInRpbnlhcnJvLndzXCIsXG5cInRpbnlhcnJvd3MuY29tXCIsXG5cInRpbnkuY2NcIixcblwidGlueWxpbmsuY29tXCIsXG5cInRpbnlsaW5rLmluXCIsXG5cInRpbnkubHRcIixcblwidGlueS5seVwiLFxuXCJ0aW55Lm1zXCIsXG5cInRpbnkucGxcIixcblwidGlueXBsLnVzXCIsXG5cInRpbnlzb25nLmNvbVwiLFxuXCJ0aW55dHcuaXRcIixcblwidGlueXVyaS5jYVwiLFxuXCJ0aW55dXJsLmNvbVwiLFxuXCJ0aW55dXJsLmh1XCIsXG5cInRpeHN1LmNvbVwiLFxuXCJ0ay5cIixcblwidGt0Lmx5XCIsXG5cInRsZGlzLml0XCIsXG5cInRsZHIuc2tcIixcblwidGwuZ2RcIixcblwidC5saC5jb21cIixcblwidGxsZy5uZXRcIixcblwidGxyay5pdFwiLFxuXCJ0bWJsci5jb1wiLFxuXCJ0bWkubWVcIixcblwidC1tby5jb1wiLFxuXCJ0bW91dGNoaS51c1wiLFxuXCJ0bW91dC51c1wiLFxuXCJ0bXZzLnR2XCIsXG5cInRtei5tZVwiLFxuXCJ0bmF0LmluXCIsXG5cInRuY3Iud3NcIixcblwidG5pai5vcmdcIixcblwidG5uZS53c1wiLFxuXCJ0bncudG9cIixcblwidG55LmNvbVwiLFxuXCJ0bnkuY3pcIixcblwidG8uXCIsXG5cIlRvOC5jY1wiLFxuXCJ0b2dvdG8udXNcIixcblwidG9obGUuZGVcIixcblwidG8uamVcIixcblwidG9sdS5uYVwiLFxuXCJ0by5seVwiLFxuXCJ0b21teWpvLmhuXCIsXG5cInRvbXMuc2hcIixcblwidG8ucGJzLm9yZ1wiLFxuXCJ0b3RhMi5jb21cIixcblwidG90Yy51c1wiLFxuXCJ0by52Z1wiLFxuXCJ0b3lzci51c1wiLFxuXCJ0cG0ubHlcIixcblwidHBtci5jb21cIixcblwidHByay51c1wiLFxuXCJ0cHRxLmNvbVwiLFxuXCJ0cjUuaW5cIixcblwidHJhY2V1cmwuY29tXCIsXG5cInRyYWNrdXJsLml0XCIsXG5cInRyYS5relwiLFxuXCJ0cmNiLm1lXCIsXG5cInRyY2subWVcIixcblwidHJnLmxpXCIsXG5cInRyaWIuYWxcIixcblwidHJpYi5pblwiLFxuXCJ0cmljay5seVwiLFxuXCJ0cmlpLnVzXCIsXG5cInRyLmltXCIsXG5cInRyaW0ubGlcIixcblwidHJrci53c1wiLFxuXCJ0cmt1cmwuY29tXCIsXG5cInRyLm15XCIsXG5cInRybmRibC5jb1wiLFxuXCJ0cm4uc3RcIixcblwidHJvbmkubWVcIixcblwidHJ1bXBpbmsubHRcIixcblwidHJ1bmMuaXRcIixcblwidHJ1bmN1cmwuY29tXCIsXG5cInRzb3J0LnVzXCIsXG5cInRzcG5lLndzXCIsXG5cInQuc3RcIixcblwidHN0YS5yc1wiLFxuXCJ0LnViZXIuY29tXCIsXG5cInR1YmV1cmwuY29tXCIsXG5cInR1bWJsci5jb21cIixcblwidHVyby51c1wiLFxuXCJ0LnVzbmV3cy5jb21cIixcblwidHZuZXdzLmNvXCIsXG5cInR3MC51c1wiLFxuXCJ0dzEudXNcIixcblwidHcyLnVzXCIsXG5cInR3NS51c1wiLFxuXCJ0dzYudXNcIixcblwidHc4LnVzXCIsXG5cInR3OS51c1wiLFxuXCJ0d2EubGtcIixcblwidHcuYXBwc3RvcmUuY29tXCIsXG5cInR3YXVkLmlvXCIsXG5cInR3ZWV0YnVybmVyLmNvbVwiLFxuXCJ0d2VldGwuY29tXCIsXG5cInR3ZWV0Lm1lXCIsXG5cInR3ZWV6Lm1lXCIsXG5cInR3ZXQuZnJcIixcblwidHdoaXRlLm1lXCIsXG5cInR3aHViLmNvbVwiLFxuXCJ0d2kuZ3lcIixcblwidHdpLmltXCIsXG5cInR3aXAudXNcIixcblwidHdpcmwuYXRcIixcblwidHdpdC5hY1wiLFxuXCJ0d2l0Y2xpY2tzLmNvbVwiLFxuXCJ0d2l0cGljLmNvbVwiLFxuXCJ0d2l0dGVydXJsLm5ldFwiLFxuXCJ0d2l0dGVydXJsLm9yZ1wiLFxuXCJ0d2l0dGhpcy5jb21cIixcblwidHdpdHR1Lm1zXCIsXG5cInR3aXR1cmwuZGVcIixcblwidHdpdHphcC5jb21cIixcblwidHdsci5tZVwiLFxuXCJ0d2wuc2hcIixcblwidHdsdi5uZXRcIixcblwidHcubWVkaWNhbGV4cHJlc3MuY29tXCIsXG5cInR3Lm5iY3Nwb3J0cy5jb21cIixcblwidHdydC5tZVwiLFxuXCJ0d3RyLnRvXCIsXG5cInR3dHIudXNcIixcblwidHd1cmwuY2NcIixcblwidHd1cmwubmxcIixcblwidHhleC5lc1wiLFxuXCJ0eHQuYm9cIixcblwidTc2Lm9yZ1wiLFxuXCJ1YWZseS5jb1wiLFxuXCJ1YXBwLmx5XCIsXG5cInViMC5jY1wiLFxuXCJ1LmJiXCIsXG5cInVieS5lc1wiLFxuXCJ1Y2FtLm1lXCIsXG5cInVjbGEuaW5cIixcblwidWcuY3pcIixcblwidWlvcC5tZVwiLFxuXCJ1bGltaXQuY29tXCIsXG5cInVsbXQuaW5cIixcblwidWx1Lmx1XCIsXG5cInUubWF2cmV2LmNvbVwiLFxuXCJ1bXVybC51c1wiLFxuXCJ1bmZha2VyLml0XCIsXG5cInVuaW5ld3MudXNcIixcblwidW5pLnZpXCIsXG5cInVubGMudXNcIixcblwidW50cC5iZWVyXCIsXG5cInVudHAuaXRcIixcblwidS5udVwiLFxuXCJ1bnZycy5hbFwiLFxuXCJ1cGRhdGluZy5tZVwiLFxuXCJ1LnB3XCIsXG5cInVwd3IubWVcIixcblwidXB6YXQuY29tXCIsXG5cInVyMS5jYVwiLFxuXCJ1cmJhbnVwLmNvbVwiLFxuXCJ1cmJuLmNjXCIsXG5cInVyYm8uY29cIixcblwidXJpenkuY29tXCIsXG5cInVybDIuZnJcIixcblwidXJsMzYwLm1lXCIsXG5cInVybDQuZXVcIixcblwidXJsNS5vcmdcIixcblwidXJsLmFnXCIsXG5cInVybGFvLmNvbVwiLFxuXCJ1cmwuYXpcIixcblwidXJsYmVlLmNvbVwiLFxuXCJ1cmxib3JnLmNvbVwiLFxuXCJ1cmxicmllZi5jb21cIixcblwidXJsY29ydGEuZXNcIixcblwidXJsLmNvLnVrXCIsXG5cInVybGNvdmVyLmNvbVwiLFxuXCJ1cmxjdXQuY29tXCIsXG5cInVybGN1dHRlci5jb21cIixcblwidXJsZW5jby5kZVwiLFxuXCJ1cmxnLmluZm9cIixcblwidXJsLmdvLml0XCIsXG5cInVybGhhd2suY29tXCIsXG5cInVybC5pZVwiLFxuXCJ1cmwuaW5jLXguZXVcIixcblwidXJsaW4uaXRcIixcblwidXJsaS5ubFwiLFxuXCJ1cmxraXNzLmNvbVwiLFxuXCJ1cmwubG90cGF0cm9sLmNvbVwiLFxuXCJ1cmxvby5jb21cIixcblwidXJscGlyZS5jb21cIixcblwidXJscy5mclwiLFxuXCJ1cmxzaG9ydGVuaW5nc2VydmljZWZvcnR3aXR0ZXIuY29tXCIsXG5cInVybHMuaW1cIixcblwidXJsdGVhLmNvbVwiLFxuXCJ1cmx1Lm1zXCIsXG5cInVybHZpLmJcIixcblwidXJsdmkuYmVcIixcblwidXJseC5pZVwiLFxuXCJ1ci5seVwiLFxuXCJ1cmx6LmF0XCIsXG5cInVybHplbi5jb21cIixcblwidXJsei5mclwiLFxuXCJ1cnViLnVzXCIsXG5cInVzYW5ldC50dlwiLFxuXCJ1c2F0Lmx5XCIsXG5cInVzZS5teVwiLFxuXCJ1c2Vydm9pY2UuY29tXCIsXG5cInVzc29jLmNyXCIsXG5cInVzdHJlLmFtXCIsXG5cInV0Zmcuc2tcIixcblwidS50b1wiLFxuXCJ1dmVyc2UudXNcIixcblwidXhtLmFnXCIsXG5cInYxbS5uZXRcIixcblwidjUuZ2RcIixcblwidmFhYS5mclwiLFxuXCJ2YWRvLml0XCIsXG5cInZhbHYuaW1cIixcblwidmF6YS5tZVwiLFxuXCJ2Yi5seVwiLFxuXCJ2Ymx5LnVzXCIsXG5cInZkNTUuY29tXCIsXG5cInZkaXJlY3QuY29tXCIsXG5cInZlcmQuaW5cIixcblwidmV2by5seVwiLFxuXCJ2LmdkXCIsXG5cInZnbi5hbVwiLFxuXCJ2Z24ubWVcIixcblwidi5odFwiLFxuXCJ2aWEubWVcIixcblwidmlkZHkuaXRcIixcblwidmlpZ28uaW1cIixcblwidmkubHlcIixcblwidmlyZy5jb1wiLFxuXCJ2aXJnLmluXCIsXG5cInZpcmwuY29tXCIsXG5cInZsLmFtXCIsXG5cInZtLmxjXCIsXG5cInZudHkuZnJcIixcblwidm50eS51c1wiLFxuXCJ2b2l6bGUuY29tXCIsXG5cInZvbHUuc25cIixcblwidm92LmxpXCIsXG5cInZveC5jb21cIixcblwidnJnZS5jb1wiLFxuXCJ2cmwuaHRcIixcblwidnJzbi5jY1wiLFxuXCJ2c2IubGlcIixcblwidnNsbC5ldVwiLFxuXCJ2dDgwMi51c1wiLFxuXCJ2dGMuZXNcIixcblwidnVsdC5yZVwiLFxuXCJ2dXIubWVcIixcblwidnYudmdcIixcblwidi56aXRlLmNvbVwiLFxuXCJ2ei50b1wiLFxuXCJ2enR1cmwuY29tXCIsXG5cIncwci5tZVwiLFxuXCJ3MXAuZnJcIixcblwidzMzLnVzXCIsXG5cInczNC51c1wiLFxuXCJ3M3Qub3JnXCIsXG5cInc1NS5kZVwiLFxuXCJ3YTkubGFcIixcblwid2FhLmFpXCIsXG5cIndhbG1hcnR1cmwuY29tXCIsXG5cIndhcG8uc3RcIixcblwid2FwdXJsLmNvLnVrXCIsXG5cIndhc2hleC5hbVwiLFxuXCJ3YjEuZXVcIixcblwid2J0cm5kLmNvXCIsXG5cIndidXIuZm1cIixcblwid2ViOTkuZXVcIixcblwid2ViYWxpYXMuY29tXCIsXG5cIndlZC5saVwiLFxuXCJ3ZWxjb21lLnRvXCIsXG5cIndlcnZpcmcuaW5cIixcblwid2UudGxcIixcblwid2V0LnB0XCIsXG5cIndmcC50b1wiLFxuXCJ3ZnRzLnR2XCIsXG5cIncuZnVsbHNhaWwuZWR1XCIsXG5cIndoLmdvdlwiLFxuXCJ3aWRlby5mclwiLFxuXCJ3aWRnLm1lXCIsXG5cIndpZ3MubHlcIixcblwid2luLmdzXCIsXG5cIndpcGkuZXNcIixcblwid2lyZS5tc1wiLFxuXCJ3aXMubXNcIixcblwid2l0aC5tZVwiLFxuXCJ3amYuaW1cIixcblwid2oubGFcIixcblwid2tyZy5jb21cIixcblwid29vLmx5XCIsXG5cIndwYmVnLmluXCIsXG5cIndwLm1lXCIsXG5cIndwLm11XCIsXG5cIndwby5zdFwiLFxuXCJ3cmQuY21cIixcblwid3JkbS5hZ1wiLFxuXCLigLoud3NcIixcblwid3NtLmNvXCIsXG5cInd0Yy5sYVwiLFxuXCJ3dGhtcy5jb1wiLFxuXCJ3dS5jelwiLFxuXCJ3dzcuZnJcIixcblwid3dkLnVzXCIsXG5cInd3eS5tZVwiLFxuXCJ3d3oucnNcIixcblwid3hjaC5ubFwiLFxuXCJ4MTAubXhcIixcblwieDJjLmV1XCIsXG5cIngyYy5ldW14XCIsXG5cInhhdi5jY1wiLFxuXCJ4YngubXNcIixcblwieC5jb1wiLFxuXCJ4ZWV1cmwuY29tXCIsXG5cInhnZC5pblwiLFxuXCJ4Lmh5cGVtLmNvbVwiLFxuXCJ4aWIubWVcIixcblwieGlsLmluXCIsXG5cInhsOC5ldVwiLFxuXCJ4bGlua3ouaW5mb1wiLFxuXCJ4bHVybC5kZVwiLFxuXCJ4bi0tMWNpLndzXCIsXG5cInhuLS0zZmkud3NcIixcblwieG4tLTVnaS53c1wiLFxuXCJ4bi0tOWdpLndzXCIsXG5cInhuLS1iaWgud3NcIixcblwieG4tLWN3Zy53c1wiLFxuXCJ4bi0tZWdpLndzXCIsXG5cInhuLS1md2cud3NcIixcblwieG4tLWhnaS53c1wiLFxuXCJ4bi0tbDNoLndzXCIsXG5cInhuLS1vZGkud3NcIixcblwieG4tLW9naS53c1wiLFxuXCJ4bi0tcmVpLndzXCIsXG5cIngubnVcIixcblwieG4tLXZnaS53c1wiLFxuXCJ4b2UuY3pcIixcblwieHIuY29tXCIsXG5cInhybC5pblwiLFxuXCJ4cmwudXNcIixcblwieHJ0Lm1lXCIsXG5cInhyeC5zbVwiLFxuXCJ4LnNlXCIsXG5cInh0My5tZVwiLFxuXCJ4dHUubWVcIixcblwieHVhLm1lXCIsXG5cInh1Yi5tZVwiLFxuXCJ4LnVwLmNvbVwiLFxuXCJ4dXJsLmVzXCIsXG5cInh1cmwuanBcIixcblwieHVybHMuY29cIixcblwieC52dVwiLFxuXCJ4eHN1cmwuZGVcIixcblwieHpiLmNjXCIsXG5cInlhZ29hLmZyXCIsXG5cInlhZ29hLm1lXCIsXG5cInkuYWhvby5pdFwiLFxuXCJ5YXR1Yy5jb21cIixcblwieWF1LnNoXCIsXG5cInllY2EuZXVcIixcblwieWVjdC5jb21cIixcblwieWUucGVcIixcblwieWVwLml0XCIsXG5cInllLXMuY29tXCIsXG5cInlmcm9nLmNvbVwiLFxuXCJ5aG9vLml0XCIsXG5cInlpeWQuY29tXCIsXG5cInlvZ2gubWVcIixcblwieW9uLmlyXCIsXG5cInlvdWZhcC5tZVwiLFxuXCJ5b3VybHMub3JnXCIsXG5cIiN5b3V0dS5iZVwiLFxuXCJ5b3V0dS5iZVwiLFxuXCJ5c2Vhci5jaFwiLFxuXCJ5dTIuaXRcIixcblwieXVhcmVsLmNvbVwiLFxuXCJ5eXYuY29cIixcblwiejBwLmRlXCIsXG5cIno5LmZyXCIsXG5cInphZ2F0LmJ6XCIsXG5cInphZ2cudG9cIixcblwiemFuLmd5XCIsXG5cInphcGl0Lm51XCIsXG5cInphcHQuaW5cIixcblwiemFwd293Lm1lXCIsXG5cInpkLm5ldFwiLFxuXCJ6ZWVrLmlyXCIsXG5cInppZ2xyLnVzXCIsXG5cInppLm1hXCIsXG5cInppLm1lXCIsXG5cInppLm11XCIsXG5cInppLnBlXCIsXG5cInppcC5saVwiLFxuXCJ6aXBteXVybC5jb21cIixcblwiemlwLm5ldFwiLFxuXCJ6aXRlLnRvXCIsXG5cInprcmF0Lm1lXCIsXG5cInprci5jelwiLFxuXCJ6a3J0LmN6XCIsXG5cInpvb2RsLmNvbVwiLFxuXCJ6b290aXQuY29tXCIsXG5cInpvby50bFwiLFxuXCJ6cGFnLmVzXCIsXG5cInoucGVcIixcblwienByLmlvXCIsXG5cInpTTVMubmV0XCIsXG5cInp0aS5tZVwiLFxuXCJ6dWQubWVcIixcblwienVybC53c1wiLFxuXCJ6eHEubmV0XCIsXG5cInp5dmEub3JnXCIsXG5cInp6YW5nLmtyXCIsXG5cInp6Yi5ielwiLFxuXCJ6ei5nZFwiXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGFtcENhY2hlRG9tYWlucyA9IFtcImNkbi5hbXBwcm9qZWN0Lm9yZ1wiLCBcImFtcC5jbG91ZGZsYXJlLmNvbVwiLCBcImJpbmctYW1wLmNvbVwiXTsiLCIvKipcbiogTW9kdWxlIGZvciByZXNvbHZpbmcgYSBzaG9ydCB1cmxcbiogQG1vZHVsZSBXZWJTY2llbmNlLlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvblxuKi9cbmltcG9ydCB7XG4gZ2V0RGVidWdnaW5nTG9nXG59IGZyb20gJy4vRGVidWdnaW5nLmpzJztcbmltcG9ydCB7XG4gc2hvcnREb21haW5zXG59IGZyb20gJy4uL2RlcGVuZGVuY2llcy9zaG9ydGRvbWFpbnMuanMnO1xuaW1wb3J0IHtcbiBhbXBDYWNoZURvbWFpbnNcbn0gZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2FtcGNhY2hlZG9tYWlucy5qcyc7XG5jb25zdCBkZWJ1Z0xvZyA9IGdldERlYnVnZ2luZ0xvZyhcIlV0aWxpdGllcy5MaW5rUmVzb2x1dGlvblwiKTtcblxuXG5jb25zdCBmZXRjaFRpbWVvdXRNcyA9IDUwMDA7XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbi8vIHByb21pc2VzQnlVcmwgaXMgYSBtYXBwaW5nIGZyb20gYSB1cmwgdG8gcmVzb2x2ZSBhbmQgdGhlIHJlc29sdmUgb2JqZWN0cyBhc3NvY2lhdGVkIHdpdGggaXRcbmxldCBwcm9taXNlc0J5VXJsID0gbmV3IE1hcCgpO1xuLy8gdHJhY2tlZFVybHMgaXMgYSBzZXQgZm9yIHdoaWNoIHRoZSBoZWFkZXJzIGFyZSBvYnNlcnZlZFxubGV0IHRyYWNrZWRVcmxzID0gbmV3IFNldCgpO1xuLy8gdXJsQnlSZWRpcmVjdGVkVXJsIGlzIGEgbWFwcGluZyBmcm9tIGEgcmVkaXJlY3RlZCB1cmwgdG8gdXJsIHRoYXQgcmVkaXJlY3RlZCB0byBpdFxuLy8gcmVjdXJzaXZlbHkgdHJhdmVyc2luZyB0aGlzIG1hcHBpbmcgd2lsbCBnZXQgdGhlIHJlZGlyZWN0IGNoYWluIGFzc29jaWF0ZWQgd2l0aCBhbiBpbml0aWFsIHVybFxubGV0IHVybEJ5UmVkaXJlY3RlZFVybCA9IG5ldyBNYXAoKTtcblxuLyoqXG4qIEZ1bmN0aW9uIHRvIHJlc29sdmUgYSBnaXZlbiB1cmwgdG8gdGhlIGZpbmFsIHVybCB0aGF0IGl0IHBvaW50cyB0b1xuKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIHJlc29sdmVcbiogQHJldHVybnMge1Byb21pc2UuT2JqZWN0fSAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBkZXN0aW5hdGlvbiB1cmxcbiovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVVybCh1cmwpIHtcbiBpZiAoIWluaXRpYWxpemVkKSB7XG4gICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJtb2R1bGUgbm90IGluaXRpYWxpemVkXCIpO1xuIH1cbiBsZXQgdXJsUmVzb2x1dGlvblByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAvLyBzdG9yZSB0aGUgcmVzb2x2ZSBmdW5jdGlvbiBpbiBwcm9taXNlc0J5VXJsLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBcbiAgIC8vIHVybCBpcyByZXNvbHZlZFxuICAgbGV0IHJlc29sdmVzID0gcHJvbWlzZXNCeVVybC5nZXQodXJsKSB8fCBbXTtcbiAgIGlmICghcmVzb2x2ZXMgfHwgIXJlc29sdmVzLmxlbmd0aCkge1xuICAgICBwcm9taXNlc0J5VXJsLnNldCh1cmwsIHJlc29sdmVzKTtcbiAgIH1cbiAgIHJlc29sdmVzLnB1c2goe1xuICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICByZWplY3Q6IHJlamVjdFxuICAgfSk7XG4gICB0cmFja2VkVXJscy5hZGQodXJsKTtcbiAgIC8vIGZldGNoIHRoaXMgdXJsXG4gICBmZXRjaFdpdGhUaW1lb3V0KHVybCwge1xuICAgICByZWRpcmVjdDogJ21hbnVhbCcsXG4gICAgIGhlYWRlcnM6IHtcbiAgICAgICAvKiBXaXRoIGEgYnJvd3NlciBVc2VyLUFnZW50IGhlYWRlciwgdGhlIHJlc3BvbnNlIG9mIG5ld3MuZ29vZ2xlLmNvbSBsaW5rIHNoaW0gaXMgYSBIVE1MIGRvY3VtZW50IHRoYXQgZXZlbnR1YWxseSByZWRpcmVjdHMgdG8gdGhlIGFjdHVhbCBuZXdzIHBhZ2UuXG4gICAgICAgVGhpcyBhY3R1YWwgbmV3cyBsaW5rIGlzIG5vdCBwYXJ0IG9mIHRoZSBIVFRQIHJlc3BvbnNlIHJlYWRlci4gSG93ZXZlciwgdXNpbmcgYSBub24tYnJvd3NlciBVc2VyLUFnZW50IGxpa2UgY3VybCB0aGUgcmVzcG9uc2UgaGVhZGVyXG4gICAgICAgY29udGFpbnMgdGhlIHJlZGlyZWN0ZWQgbG9jYXRpb24uICovXG4gICAgICAgJ1VzZXItQWdlbnQnOiB1cmwuaW5jbHVkZXMoXCJuZXdzLmdvb2dsZS5jb21cIikgPyAnY3VybC83LjEwLjYgKGkzODYtcmVkaGF0LWxpbnV4LWdudSkgbGliY3VybC83LjEwLjYgT3BlblNTTC8wLjkuN2EgaXB2NiB6bGliLzEuMS40JyA6ICcnXG4gICAgIH1cbiAgIH0sIGZldGNoVGltZW91dE1zKTtcbiB9KTtcbiByZXR1cm4gdXJsUmVzb2x1dGlvblByb21pc2U7XG59XG5cbi8qKlxuKiBMaXN0ZW5lciBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvd2ViUmVxdWVzdC9vbkhlYWRlcnNSZWNlaXZlZFxuKiBAcGFyYW0ge09iamVjdH0gZGV0YWlscyBjb250YWlucyBkZXRhaWxzIG9mIHRoZSByZXF1ZXN0XG4qL1xuZnVuY3Rpb24gcmVzcG9uc2VIZWFkZXJMaXN0ZW5lcihkZXRhaWxzKSB7XG4gLy8gQ29udGludWUgb25seSBpZiB0aGlzIHVybCBpcyByZWxldmFudCBmb3IgbGluayByZXNvbHV0aW9uXG4gaWYgKCF0cmFja2VkVXJscy5oYXMoZGV0YWlscy51cmwpKSB7XG4gICByZXR1cm47XG4gfVxuXG4gLy8gVGhlIGxvY2F0aW9uIGZpZWxkIGluIHJlc3BvbnNlIGhlYWRlciBpbmRpY2F0ZXMgdGhlIHJlZGlyZWN0ZWQgVVJMXG4gLy8gVGhlIHJlc3BvbnNlIGhlYWRlciBmcm9tIG9uSGVhZGVyc1JlY2VpdmVkIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIG9uZSBvZiB3aGljaCBwb3NzaWJseVxuIC8vIGNvbnRhaW5zIGEgZmllbGQgd2l0aCBuYW1lIGxvY2F0aW9uIChjYXNlIGluc2Vuc2l0aXZlKS5cbiBsZXQgcmVkaXJlY3RlZFVSTExvY2F0aW9uID0gZGV0YWlscy5yZXNwb25zZUhlYWRlcnMuZmluZChvYmogPT4ge1xuICAgcmV0dXJuIG9iai5uYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiTE9DQVRJT05cIjtcbiB9KTtcblxuIC8vIGlmIHRoZSBsb2NhdGlvbiBmaWVsZCBpbiByZXNwb25zZSBoZWFkZXIgY29udGFpbnMgYSBuZXcgdXJsXG4gaWYgKHJlZGlyZWN0ZWRVUkxMb2NhdGlvbiAhPSBudWxsICYmIChyZWRpcmVjdGVkVVJMTG9jYXRpb24udmFsdWUgIT0gZGV0YWlscy51cmwpKSB7XG4gICBsZXQgbmV4dHVybCA9IHJlZGlyZWN0ZWRVUkxMb2NhdGlvbi52YWx1ZTtcbiAgIC8vIENyZWF0ZSBhIGxpbmsgYmV0d2VlbiB0aGUgbmV4dCB1cmwgYW5kIHRoZSBpbml0aWFsIHVybFxuICAgdXJsQnlSZWRpcmVjdGVkVXJsLnNldChuZXh0dXJsLCBkZXRhaWxzLnVybCk7XG4gICAvLyBBZGQgdGhlIG5leHQgdXJsIHNvIHRoYXQgd2UgcHJvY2VzcyBpdCBkdXJpbmcgdGhlIG5leHQgb25IZWFkZXJzUmVjZWl2ZWRcbiAgIHRyYWNrZWRVcmxzLmFkZChuZXh0dXJsKTtcbiAgIC8vIFNlbmQgZmV0Y2ggcmVxdWVzdCB0byB0aGUgbmV4dCB1cmxcbiAgIGZldGNoV2l0aFRpbWVvdXQobmV4dHVybCwge1xuICAgICByZWRpcmVjdDogJ21hbnVhbCcsXG4gICAgIGhlYWRlcnM6IHtcbiAgICAgICAnVXNlci1BZ2VudCc6ICcnXG4gICAgIH1cbiAgIH0sIGZldGNoVGltZW91dE1zKTtcbiB9IGVsc2UgeyAvLyB1cmwgaXMgbm90IHJlZGlyZWN0ZWRcbiAgIGlmICh1cmxCeVJlZGlyZWN0ZWRVcmwuaGFzKGRldGFpbHMudXJsKSkge1xuICAgICAvLyBiYWNrdHJhY2sgdXJsQnlSZWRpcmVjdGVkVXJsIHRvIGdldCB0byB0aGUgcHJvbWlzZSBvYmplY3QgdGhhdCBjb3JyZXNwb25kcyB0byB0aGlzXG4gICAgIGxldCB1cmwgPSBkZXRhaWxzLnVybDtcbiAgICAgd2hpbGUgKHVybEJ5UmVkaXJlY3RlZFVybC5oYXModXJsKSkge1xuICAgICAgIGxldCB0ZW1wID0gdXJsO1xuICAgICAgIHVybCA9IHVybEJ5UmVkaXJlY3RlZFVybC5nZXQodXJsKTtcbiAgICAgICB1cmxCeVJlZGlyZWN0ZWRVcmwuZGVsZXRlKHRlbXApO1xuICAgICAgIHRyYWNrZWRVcmxzLmRlbGV0ZSh0ZW1wKTtcbiAgICAgfVxuICAgICAvLyB1cmwgbm93IGNvbnRhaW5zIHRoZSBpbml0aWFsIHVybC4gTm93LCByZXNvbHZlIHRoZSBjb3JyZXNwb25kaW5nIHByb21pc2VzXG4gICAgIGlmICh1cmwgJiYgcHJvbWlzZXNCeVVybC5oYXModXJsKSkge1xuICAgICAgIGxldCByZXNvbHZlcyA9IHByb21pc2VzQnlVcmwuZ2V0KHVybCkgfHwgW107XG4gICAgICAgbGV0IHJlc29sdmVPYmogPSB7XG4gICAgICAgICBzb3VyY2U6IHVybCxcbiAgICAgICAgIGRlc3Q6IGRldGFpbHMudXJsXG4gICAgICAgfTtcbiAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc29sdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICB2YXIgciA9IHJlc29sdmVzW2ldLnJlc29sdmU7XG4gICAgICAgICByKHJlc29sdmVPYmopO1xuICAgICAgIH1cbiAgICAgICBwcm9taXNlc0J5VXJsLmRlbGV0ZSh1cmwpO1xuICAgICB9XG4gICB9XG4gfVxufVxuXG4vKipcbiogTGlzdGVuZXIgZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3dlYlJlcXVlc3Qvb25FcnJvck9jY3VycmVkXG4qIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZURldGFpbHMgLSBDb250YWlucyBkZXRhaWxzIG9mIHRoZSBlcnJvclxuKi9cbmZ1bmN0aW9uIHRyYWNrRXJyb3IocmVzcG9uc2VEZXRhaWxzKSB7XG4gbGV0IHVybCA9IHJlc3BvbnNlRGV0YWlscy51cmw7XG4gaWYgKHByb21pc2VzQnlVcmwuaGFzKHVybCkpIHtcbiAgIGxldCByZXNvbHZlcyA9IHByb21pc2VzQnlVcmwuZ2V0KHVybCkgfHwgW107XG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc29sdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgIGxldCByID0gcmVzb2x2ZXNbaV0ucmVqZWN0O1xuICAgICByKHJlc3BvbnNlRGV0YWlscy5lcnJvcik7XG4gICB9XG4gICBwcm9taXNlc0J5VXJsLmRlbGV0ZSh1cmwpO1xuIH1cbn1cblxuLyoqXG4qIEluaXRpYWxpemVzIHRoZSBsaW5rIHJlc29sdXRpb24gbW9kdWxlIGJ5IHNldHRpbmcgdXAgbGlzdGVuZXJzIGZvciBvbkhlYWRlcnNSZWNlaXZlZCBldmVudFxuKiBAcmV0dXJucyB7dm9pZH0gTm90aGluZ1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuIGluaXRpYWxpemVkID0gdHJ1ZTtcbiBsZXQgaGVhZGVyTGlzdGVuZXIgPSBicm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQuYWRkTGlzdGVuZXIocmVzcG9uc2VIZWFkZXJMaXN0ZW5lciwge1xuICAgdXJsczogW1wiPGFsbF91cmxzPlwiXVxuIH0sIFtcInJlc3BvbnNlSGVhZGVyc1wiXSk7XG4gbGV0IGVycm9yTGlzdGVuZXIgPSBicm93c2VyLndlYlJlcXVlc3Qub25FcnJvck9jY3VycmVkLmFkZExpc3RlbmVyKHRyYWNrRXJyb3IsIHtcbiAgIHVybHM6IFtcIjxhbGxfdXJscz5cIl1cbiB9KTtcbn1cblxuLyoqXG4qIFJldHVybnMgYSBsaXN0IG9mIHNob3J0IGRvbWFpbnMgdGhhdCB0aGUgbGluayByZXNvbHV0aW9uIG1vZHVsZSBjYW4gcmVzb2x2ZVxuKiBAcmV0dXJucyB7U3RyaW5nW119IEFycmF5IG9mIGRvbWFpbnNcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hvcnREb21haW5zKCkge1xuIHJldHVybiBzaG9ydERvbWFpbnM7XG59XG5cbi8qKlxuKiBSZXR1cm5zIGEgbGlzdCBvZiBhbXAgY2FjaGUgZG9tYWluc1xuKiBAcmV0dXJucyB7U3RyaW5nW119IEFycmF5IG9mIGRvbWFpbnNcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW1wQ2FjaGVEb21haW5zKCkge1xuIHJldHVybiBhbXBDYWNoZURvbWFpbnM7XG59XG5cbi8qKlxuKiBGZXRjaCBBUEkgZG9lc24ndCBwcm92aWRlIGEgbmF0aXZlIHRpbWVvdXQgb3B0aW9uLiBUaGlzIGZ1bmN0aW9uIHVzZXMgQWJvcnRDb250cm9sbGVyIHRvXG4qIHRpbWVvdXQgZmV0Y2ggcmVxdWVzdHMuXG4qIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSByZXNvdXJjZSB0byBmZXRjaFxuKiBAcGFyYW0ge09iamVjdH0gaW5pdCAtIGZldGNoIGluaXRpYWxpemF0aW9uXG4qIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IC0gdGltZW91dCBpbiBtcyBmb3IgZmV0Y2ggcmVxdWVzdHNcbiovXG5mdW5jdGlvbiBmZXRjaFdpdGhUaW1lb3V0KHVybCwgaW5pdCwgdGltZW91dCkge1xuIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gaW5pdC5zaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiBmZXRjaCh1cmwsIGluaXQpO1xuIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCB0aW1lb3V0KTtcbn0iLCIvKipcbiAqIExpbmtFeHBvc3VyZSBtb2R1bGUgaXMgdXNlZCB0byBydW4gc3R1ZGllcyB0aGF0IHRyYWNrIHVzZXIncyBleHBvc3VyZVxuICogdG8gY29udGVudCBmcm9tIGtub3duIG5ld3MgZG9tYWluc1xuICogQG1vZHVsZSBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmVcbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTGlua1Jlc29sdXRpb24gZnJvbSBcIi4uL1V0aWxpdGllcy9MaW5rUmVzb2x1dGlvbi5qc1wiXG5pbXBvcnQgKiBhcyBNYXRjaGluZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01hdGNoaW5nLmpzXCJcbmltcG9ydCAqIGFzIE1lc3NhZ2luZyBmcm9tIFwiLi4vVXRpbGl0aWVzL01lc3NhZ2luZy5qc1wiXG5pbXBvcnQgKiBhcyBQYWdlRXZlbnRzIGZyb20gXCIuLi9VdGlsaXRpZXMvUGFnZUV2ZW50cy5qc1wiXG5cbmNvbnN0IGRlYnVnTG9nID0gRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyhcIk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmVcIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xuXG52YXIgbnVtVW50cmFja2VkVXJsc0J5VGhyZXNob2xkID0ge307XG5cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG52YXIgdmlzaWJpbGl0eVRocmVzaG9sZHMgPSBbMTAwMCwgMzAwMCwgNTAwMCwgMTAwMDBdOyAvLyBtYXRjaCB0byBDUyB2YWx1ZXNcbi8qKlxuICogQG5hbWUgTGlua0V4cG9zdXJlLnJ1blN0dWR5IHN0YXJ0cyB0aGUgTGlua0V4cG9zdXJlIHN0dWR5LlxuICogQHBhcmFtIHtTdHJpbmdbXX0gZG9tYWlucyAtIEFycmF5IG9mIGRvbWFpbnMgdG8gdHJhY2sgXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByaXZhdGVXaW5kb3dzIC0gSWYgdHJ1ZSB0aGVuIHRoZSBzdHVkeSB3b3JrcyBpbiBwcml2YXRlIHdpbmRvd3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb21haW5zQ2F0ZWdvcnkgLSBDYXRlZ29yeSBvZiB0aGUgZG9tYWlucyB0byB0cmFja1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkoe1xuICAgIGRvbWFpbnMgPSBbXSxcbiAgICBwcml2YXRlV2luZG93cyA9IGZhbHNlLFxuICAgIGRvbWFpbnNDYXRlZ29yeSA9IFwibmV3c1wiLFxufSkge1xuXG4gICAgLy8gc3RvcmUgcHJpdmF0ZSB3aW5kb3dzIHByZWZlcmVuY2UgaW4gdGhlIHN0b3JhZ2VcbiAgICBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmUucHJpdmF0ZVdpbmRvd3NcIjogcHJpdmF0ZVdpbmRvd3MgfSk7IFxuICAgIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlXCIpKS5pbml0aWFsaXplKCk7XG4gICAgLy8gVXNlIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggd2VicGFnZSB0aGUgdXNlciB2aXNpdHMgdGhhdCBoYXMgYSBtYXRjaGluZyBkb21haW5cbiAgICB2YXIgbmV4dExpbmtFeHBvc3VyZUlkQ291bnRlciA9IGF3YWl0IChuZXcgU3RvcmFnZS5Db3VudGVyKFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLm5leHRQYWdlSWRcIikpLmluaXRpYWxpemUoKTtcbiAgICBsZXQgc2hvcnREb21haW5zID0gTGlua1Jlc29sdXRpb24uZ2V0U2hvcnREb21haW5zKCk7XG4gICAgbGV0IGFtcENhY2hlRG9tYWlucyA9IExpbmtSZXNvbHV0aW9uLmdldEFtcENhY2hlRG9tYWlucygpO1xuICAgIGxldCBkb21haW5QYXR0ZXJuID0gTWF0Y2hpbmcuY3JlYXRlVXJsUmVnZXhTdHJpbmcoZG9tYWlucyk7XG4gICAgbGV0IHNob3J0RG9tYWluUGF0dGVybiA9IE1hdGNoaW5nLmNyZWF0ZVVybFJlZ2V4U3RyaW5nKHNob3J0RG9tYWlucyk7XG4gICAgbGV0IGFtcENhY2hlRG9tYWluUGF0dGVybiA9IE1hdGNoaW5nLmNyZWF0ZVVybFJlZ2V4U3RyaW5nKGFtcENhY2hlRG9tYWlucyk7XG4gICAgZm9yICh2YXIgdmlzVGhyZXNob2xkIG9mIHZpc2liaWxpdHlUaHJlc2hvbGRzKSB7XG4gICAgICAgIG51bVVudHJhY2tlZFVybHNCeVRocmVzaG9sZFt2aXNUaHJlc2hvbGRdID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5MaW5rRXhwb3N1cmUubnVtVW50cmFja2VkVXJsc1wiICsgdmlzVGhyZXNob2xkKSkuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBhbXBDYWNoZU1hdGNoZXIgPSBuZXcgUmVnRXhwKGFtcENhY2hlRG9tYWluUGF0dGVybik7XG4gICAgY29uc3Qgc2hvcnREb21haW5NYXRjaGVyID0gbmV3IFJlZ0V4cChzaG9ydERvbWFpblBhdHRlcm4pO1xuICAgIGNvbnN0IHVybE1hdGNoZXIgPSBuZXcgUmVnRXhwKGRvbWFpblBhdHRlcm4pO1xuICAgIGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoe2RvbWFpblJlZ2V4OiB1cmxNYXRjaGVyLCBzaG9ydERvbWFpblJlZ2V4OiBzaG9ydERvbWFpbk1hdGNoZXIsIGFtcERvbWFpblJlZ2V4IDogYW1wQ2FjaGVNYXRjaGVyfSk7XG5cbiAgICAvLyBBZGQgdGhlIGNvbnRlbnQgc2NyaXB0IGZvciBjaGVja2luZyBsaW5rcyBvbiBwYWdlc1xuICAgIGF3YWl0IGJyb3dzZXIuY29udGVudFNjcmlwdHMucmVnaXN0ZXIoe1xuICAgICAgICBtYXRjaGVzOiBbXCIqOi8vKi8qXCJdLFxuICAgICAgICBqczogW3tcbiAgICAgICAgICAgIGZpbGU6IFwiL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9jb250ZW50LXNjcmlwdHMvdXRpbHMuanNcIlxuICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6IFwiL3NyYy9XZWJTY2llbmNlL01lYXN1cmVtZW50cy9jb250ZW50LXNjcmlwdHMvbGlua0V4cG9zdXJlLmpzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcnVuQXQ6IFwiZG9jdW1lbnRfaWRsZVwiXG4gICAgfSk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIExpbmtFeHBvc3VyZSBtZXNzYWdlcyBmcm9tIGNvbnRlbnQgc2NyaXB0XG4gICAgTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIoXCJXZWJTY2llbmNlLmxpbmtFeHBvc3VyZVwiLCAoZXhwb3N1cmVJbmZvLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIShcInRhYlwiIGluIHNlbmRlcikpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiV2FybmluZzogdW5leHBlY3RlZCBsaW5rIGV4cG9zdXJlIHVwZGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdW50cmFja2VkSW5mbyA9IGV4cG9zdXJlSW5mby5udW1VbnRyYWNrZWRVcmxzO1xuICAgICAgICBmb3IgKHZhciB2aXNUaHJlc2hvbGQgaW4gdW50cmFja2VkSW5mbykge1xuICAgICAgICAgICAgbnVtVW50cmFja2VkVXJsc0J5VGhyZXNob2xkW3Zpc1RocmVzaG9sZF0uaW5jcmVtZW50QnlBbmRHZXQodW50cmFja2VkSW5mb1t2aXNUaHJlc2hvbGRdKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvc3VyZUluZm8uZXhwb3N1cmVFdmVudHMuZm9yRWFjaChhc3luYyBleHBvc3VyZUV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQuaXNTaG9ydGVuZWRVcmwgPSBzaG9ydERvbWFpbk1hdGNoZXIudGVzdChleHBvc3VyZUV2ZW50Lm9yaWdpbmFsVXJsKTtcbiAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQucmVzb2x1dGlvblN1Y2NlZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQubWV0YWRhdGEgPSBleHBvc3VyZUluZm8ubWV0YWRhdGE7XG4gICAgICAgICAgICAvLyByZXNvbHZlZFVybCBpcyB2YWxpZCBvbmx5IGZvciB1cmxzIGZyb20gc2hvcnQgZG9tYWluc1xuICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5yZXNvbHZlZFVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQubWV0YWRhdGEuZG9tYWluQ2F0ZWdvcnkgPSBkb21haW5zQ2F0ZWdvcnk7XG4gICAgICAgICAgICBpZiAoZXhwb3N1cmVFdmVudC5pc1Nob3J0ZW5lZFVybCkge1xuICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gTGlua1Jlc29sdXRpb24ucmVzb2x2ZVVybChleHBvc3VyZUV2ZW50Lm9yaWdpbmFsVXJsKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJsTWF0Y2hlci50ZXN0KHJlc3VsdC5kZXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3N1cmVFdmVudC5yZXNvbHZlZFVybCA9IHJlc3VsdC5kZXN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9zdXJlRXZlbnQuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBleHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cG9zdXJlRXZlbnQucmVzb2x1dGlvblN1Y2NlZGVkIHx8IGV4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUxpbmtFeHBvc3VyZVJlY29yZChleHBvc3VyZUV2ZW50LCBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlTGlua0V4cG9zdXJlUmVjb3JkKGV4cG9zdXJlRXZlbnQsIG5leHRMaW5rRXhwb3N1cmVJZENvdW50ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0sIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbWV0YWRhdGE6IFwib2JqZWN0XCJcbiAgICB9KTtcblxuICAgIFBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RhcnQsIHRydWUsIHByaXZhdGVXaW5kb3dzKTtcbiAgICBQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcihwYWdlQXR0ZW50aW9uU3RvcCwgcHJpdmF0ZVdpbmRvd3MpO1xuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxufVxuXG5mdW5jdGlvbiBwYWdlQXR0ZW50aW9uU3RhcnQoe3VybCwgcmVmZXJyZXIsIHRhYklkLCB0aW1lU3RhbXB9KSB7XG4gICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGF0dGVudGlvbkNoYW5nZTogXCJnYWluXCIsIFxuICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcH0pLmNhdGNoKCAoZXJyKSA9PiB7IHJldHVybjsgfSApO1xufVxuZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0b3Aoe3VybCwgcmVmZXJyZXIsIHRhYklkLCB0aW1lU3RhbXB9KSB7XG4gICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGF0dGVudGlvbkNoYW5nZTogXCJsb3NlXCIsIFxuICAgICAgICB0aW1lU3RhbXA6IHRpbWVTdGFtcH0pLmNhdGNoKCAoZXJyKSA9PiB7IHJldHVybjsgfSApO1xufVxuXG5cbi8qIFV0aWxpdGllcyAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBzdHVkeSBkYXRhIGFzIGFuIG9iamVjdC4gTm90ZSB0aGF0IHRoaXMgY291bGQgYmUgdmVyeVxuICogc2xvdyBpZiB0aGVyZSBpcyBhIGxhcmdlIHZvbHVtZSBvZiBzdHVkeSBkYXRhLlxuICogQHJldHVybnMgeyhPYmplY3R8bnVsbCl9IC0gVGhlIHN0dWR5IGRhdGEsIG9yIGBudWxsYCBpZiBubyBkYXRhXG4gKiBjb3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHVkeURhdGFBc09iamVjdCgpIHtcbiAgICBpZihzdG9yYWdlICE9IG51bGwpXG4gICAgICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0ZXN0cyB3aGV0aGVyIGEgZ2l2ZW4gb2JqZWN0IGlzIGVtcHR5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gT2JqZWN0IHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgdGhlIG9iamVjdCBpcyBlbXB0eVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgICByZXR1cm4gIW9iaiB8fCBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7TGlua0V4cG9zdXJlRXZlbnR9IGV4cG9zdXJlRXZlbnQgbGluayBleHBvc3VyZSBldmVudCB0byBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IExpbmtFeHBvc3VyZUV2ZW50Lm9yaWdpbmFsVXJsIC0gbGluayBleHBvc2VkIHRvXG4gKiBAcGFyYW0ge3N0cmluZ30gTGlua0V4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwgLSBvcHRpb25hbCBmaWVsZCB3aGljaCBpcyBzZXQgaWYgdGhlIGlzU2hvcnRlbmVkVXJsIGFuZCByZXNvbHV0aW9uU3VjY2VlZGVkIGFyZSB0cnVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IExpbmtFeHBvc3VyZUV2ZW50LnJlc29sdXRpb25TdWNjZWRlZCAtIHRydWUgaWYgbGluayByZXNvbHV0aW9uIHN1Y2NlZWRlZFxuICogQHBhcmFtIHtib29sZWFufSBMaW5rRXhwb3N1cmVFdmVudC5pc1Nob3J0ZW5lZFVybCAtIHRydWUgaWYgbGluayBtYXRjaGVzIHNob3J0IGRvbWFpbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBMaW5rRXhwb3N1cmVFdmVudC5maXJzdFNlZW4gLSB0aW1lc3RhbXAgd2hlbiB0aGUgbGluayBpcyBmaXJzdCBzZWVuXG4gKiBAcGFyYW0ge251bWJlcn0gTGlua0V4cG9zdXJlRXZlbnQuZHVyYXRpb24gLSBtaWxsaXNlY29uZHMgb2YgbGluayBleHBvc3VyZVxuICogQHBhcmFtIHtPYmplY3R9IExpbmtFeHBvc3VyZUV2ZW50LnNpemUgLSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGxpbmtzXG4gKiBAcGFyYW0ge0NvdW50ZXJ9IG5leHRMaW5rRXhwb3N1cmVJZENvdW50ZXIgY291bnRlciBvYmplY3RcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGlua0V4cG9zdXJlUmVjb3JkKGV4cG9zdXJlRXZlbnQsIG5leHRMaW5rRXhwb3N1cmVJZENvdW50ZXIpIHtcbiAgICBleHBvc3VyZUV2ZW50LnR5cGUgPSBcImxpbmtFeHBvc3VyZVwiO1xuICAgIGV4cG9zdXJlRXZlbnQudXJsID0gKGV4cG9zdXJlRXZlbnQuaXNTaG9ydGVuZWRVcmwgJiYgZXhwb3N1cmVFdmVudC5yZXNvbHV0aW9uU3VjY2VkZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2Uubm9ybWFsaXplVXJsKGV4cG9zdXJlRXZlbnQucmVzb2x2ZWRVcmwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yYWdlLm5vcm1hbGl6ZVVybChleHBvc3VyZUV2ZW50Lm9yaWdpbmFsVXJsKSk7XG4gICAgZXhwb3N1cmVFdmVudC5sYXRlclZpc2l0ZWQgPSBmYWxzZTtcbiAgICBleHBvc3VyZUV2ZW50LmxhdGVyU2hhcmVkID0gZmFsc2U7XG4gICAgLy9kZWJ1Z0xvZyhcInN0b3JpbmcgXCIgKyBKU09OLnN0cmluZ2lmeShleHBvc3VyZUV2ZW50KSk7XG4gICAgdmFyIGtleSA9IGV4cG9zdXJlRXZlbnQudXJsICsgXCIgXCIgKyBhd2FpdCBuZXh0TGlua0V4cG9zdXJlSWRDb3VudGVyLmdldEFuZEluY3JlbWVudCgpO1xuICAgIHN0b3JhZ2Uuc2V0KGtleSwgZXhwb3N1cmVFdmVudCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9yZUFuZFJlc2V0VW50cmFja2VkRXhwb3N1cmVzQ291bnQoKSB7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICAgIHZhciB1bnRyYWNrZWRPYmogPSB7IHR5cGU6IFwibnVtVW50cmFja2VkVXJsc1wiLCB1bnRyYWNrZWRDb3VudHM6IHt9fTtcbiAgICAgICAgZm9yICh2YXIgdmlzVGhyZXNob2xkIG9mIHZpc2liaWxpdHlUaHJlc2hvbGRzKSB7XG4gICAgICAgICAgICB1bnRyYWNrZWRPYmoudW50cmFja2VkQ291bnRzW3Zpc1RocmVzaG9sZF0gPSB7XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiB2aXNUaHJlc2hvbGQsXG4gICAgICAgICAgICAgICAgbnVtVW50cmFja2VkOiBhd2FpdCBudW1VbnRyYWNrZWRVcmxzQnlUaHJlc2hvbGRbdmlzVGhyZXNob2xkXS5nZXRBbmRSZXNldCgpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuTGlua0V4cG9zdXJlLnVudHJhY2tlZFVybHNDb3VudFwiLCB1bnRyYWNrZWRPYmopO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ1Zpc2l0KHVybCkge1xuICAgIHZhciBwcmV2RXhwb3N1cmVzID0gYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHVybCk7XG4gICAgdmFyIGhhc1ByZXZFeHBvc3VyZXMgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJldkV4cG9zdXJlcykge1xuICAgICAgICBoYXNQcmV2RXhwb3N1cmVzID0gdHJ1ZTtcbiAgICAgICAgcHJldkV4cG9zdXJlc1trZXldLmxhdGVyVmlzaXRlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KGtleSwgcHJldkV4cG9zdXJlc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIChoYXNQcmV2RXhwb3N1cmVzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ1NoYXJlKHVybCkge1xuICAgIHZhciBwcmV2RXhwb3N1cmVzID0gYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHVybCk7XG4gICAgdmFyIGhhc1ByZXZFeHBvc3VyZXMgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJldkV4cG9zdXJlcykge1xuICAgICAgICBoYXNQcmV2RXhwb3N1cmVzID0gdHJ1ZTtcbiAgICAgICAgcHJldkV4cG9zdXJlc1trZXldLmxhdGVyU2hhcmVkID0gdHJ1ZTtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoa2V5LCBwcmV2RXhwb3N1cmVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFzUHJldkV4cG9zdXJlcztcbn0iLCIvKipcbiAqIFRoaXMgbW9kdWxlIG1lYXN1cmVzIHNjcm9sbCBkZXB0aCBmb3Igd2VicGFnZXMgb24gc3BlY2lmaWMgZG9tYWlucy5cbiAqIFxuICogTm90ZTogd2Ugd2lsbCBsaWtlbHkgcmVwbGFjZSB0aGlzIG1vZHVsZSB3aGVuIHdlIHVwZGF0ZSB0aGVcbiAqIFBhZ2VOYXZpZ2F0aW9uIGFuZCBQYWdlRXZlbnRzIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZURlcHRoXG4gKi9cblxuaW1wb3J0ICogYXMgRGVidWdnaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvRGVidWdnaW5nLmpzXCJcbmltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSBcIi4uL1V0aWxpdGllcy9TdG9yYWdlLmpzXCJcbmltcG9ydCAqIGFzIE1hdGNoaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvTWF0Y2hpbmcuanNcIlxuaW1wb3J0ICogYXMgTWVzc2FnaW5nIGZyb20gXCIuLi9VdGlsaXRpZXMvTWVzc2FnaW5nLmpzXCJcblxuY29uc3QgZGVidWdMb2cgPSBEZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nKFwiTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aFwiKTtcblxuLyoqXG4gKiBBIEtleVZhbHVlU3RvcmFnZSBvYmplY3QgZm9yIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdHVkeS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgc3RvcmFnZSA9IG51bGw7XG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxudmFyIGxpc3RlbmVycyA9IFtdO1xuXG4vKipcbiAqIFN0YXJ0IGEgcGFnZSBkZXB0aCBzdHVkeS4gTm90ZSB0aGF0IG9ubHkgb25lIHN0dWR5IGlzIHN1cHBvcnRlZCBwZXIgZXh0ZW5zaW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBIHNldCBvZiBvcHRpb25zIGZvciB0aGUgc3R1ZHkuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy5kb21haW5zPVtdXSAtIFRoZSBkb21haW5zIG9mIGludGVyZXN0IGZvciB0aGUgc3R1ZHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5TdHVkeSh7XG4gICAgZG9tYWlucyA9IFsgXVxufSkge1xuXG4gICAgaWYoaW5pdGlhbGl6ZWQpXG4gICAgICAgIHJldHVybjsgICAgXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgc3RvcmFnZSA9IGF3YWl0IChuZXcgU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlRGVwdGhcIikpLmluaXRpYWxpemUoKTtcblxuICAgIC8vIFVzZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHdlYnBhZ2UgdGhlIHVzZXIgdmlzaXRzIHRoYXQgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgdmFyIG5leHRQYWdlSWRDb3VudGVyID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlRGVwdGgubmV4dFBhZ2VJZFwiKSkuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gQnVpbGQgdGhlIFVSTCBtYXRjaGluZyBzZXQgZm9yIGNvbnRlbnQgc2NyaXB0c1xuICAgIHZhciBjb250ZW50U2NyaXB0TWF0Y2hlcyA9IE1hdGNoaW5nLmNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5KGRvbWFpbnMsIHRydWUpO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGNvbnRlbnQgc2NyaXB0IGZvciBtZWFzdXJpbmcgbWF4aW11bSBzY3JvbGwgZGVwdGhcbiAgICBhd2FpdCBicm93c2VyLmNvbnRlbnRTY3JpcHRzLnJlZ2lzdGVyKHtcbiAgICAgICAgbWF0Y2hlczogY29udGVudFNjcmlwdE1hdGNoZXMsXG4gICAgICAgIGpzOiBbe1xuICAgICAgICAgICAgZmlsZTogXCIvc3JjL1dlYlNjaWVuY2UvTWVhc3VyZW1lbnRzL2NvbnRlbnQtc2NyaXB0cy9wYWdlRGVwdGguanNcIlxuICAgICAgICB9XVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHBhZ2UgZGVwdGggZXZlbnRzXG4gICAgTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIoXCJXZWJTY2llbmNlLnBhZ2VEZXB0aFwiLCBhc3luYyAoZGVwdGhJbmZvLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICB2YXIgcGFnZUlkID0gYXdhaXQgbmV4dFBhZ2VJZENvdW50ZXIuZ2V0QW5kSW5jcmVtZW50KCk7XG4gICAgICAgIGRlcHRoSW5mby51cmwgPSBTdG9yYWdlLm5vcm1hbGl6ZVVybChzZW5kZXIudXJsKTtcbiAgICAgICAgZGVwdGhJbmZvLnRhYklkID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7IGxpc3RlbmVyKGRlcHRoSW5mbyk7IH1cbiAgICAgICAgc3RvcmFnZS5zZXQocGFnZUlkLnRvU3RyaW5nKCksIGRlcHRoSW5mbyk7XG4gICAgICAgIGRlYnVnTG9nKEpTT04uc3RyaW5naWZ5KGRlcHRoSW5mbykpO1xuICAgIH0sIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbWF4UmVsYXRpdmVTY3JvbGxEZXB0aDogXCJudW1iZXJcIixcbiAgICAgICAgbG9hZFRpbWU6IFwibnVtYmVyXCJcbiAgICB9KTtcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0KCkge1xuICAgIGlmKHN0b3JhZ2UgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0Q29udGVudHNBc09iamVjdCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn0iLCJcbi8qKlxuICogVGhpcyBtb2R1bGUgbWVhc3VyZXMgbmF2aWdhdGlvbiB0byBhbmQgYXR0ZW50aW9uIHRvIHdlYnBhZ2VzIG9uIHNwZWNpZmljIGRvbWFpbnMuXG4gKiBcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb25cbiAqL1xuXG5pbXBvcnQgKiBhcyBEZWJ1Z2dpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9EZWJ1Z2dpbmcuanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi4vVXRpbGl0aWVzL1N0b3JhZ2UuanNcIlxuaW1wb3J0ICogYXMgTWF0Y2hpbmcgZnJvbSBcIi4uL1V0aWxpdGllcy9NYXRjaGluZy5qc1wiXG5pbXBvcnQgKiBhcyBQYWdlRXZlbnRzIGZyb20gXCIuLi9VdGlsaXRpZXMvUGFnZUV2ZW50cy5qc1wiXG5pbXBvcnQgKiBhcyBMaW5rRXhwb3N1cmUgZnJvbSBcIi4vTGlua0V4cG9zdXJlLmpzXCJcbmltcG9ydCAqIGFzIFBhZ2VEZXB0aCBmcm9tIFwiLi9QYWdlRGVwdGguanNcIlxuaW1wb3J0ICogYXMgQXJ0aWNsZUNvbnRlbnRzIGZyb20gXCIuL0FydGljbGVDb250ZW50cy5qc1wiXG5cblxuXG5jb25zdCBkZWJ1Z0xvZyA9IERlYnVnZ2luZy5nZXREZWJ1Z2dpbmdMb2coXCJNZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb25cIik7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHN0b3JhZ2UgPSBudWxsO1xudmFyIGN1cnJlbnRUYWJJbmZvID0gbnVsbDtcbnZhciB1cmxNYXRjaGVyID0gbnVsbDtcbnZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5jb25zdCByZWNlbnRWaXNpdFRocmVzaG9sZCA9IDMwMDA7XG5cbnZhciB1bnRyYWNrZWRQYWdlVmlzaXRzID0gbnVsbDtcblxuLyoqXG4gKiBDYWxsYmFjayBmdW5jdGlvbiBmb3IgYXJ0aWNsZSBjb250ZW50cyByZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXN1bHQgcmVzdWx0IG9iamVjdFxuICovXG5hc3luYyBmdW5jdGlvbiBjb250ZW50UmVzdWx0cyhyZXN1bHQpIHtcbiAgICBpZiAoY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklEXSAmJiBjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSURdLnVybCA9PSByZXN1bHQudXJsKSB7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJRF0uY29udGVudHNbcmVzdWx0Lm5hbWVdID0gcmVzdWx0LmNvbnRlbnRzO1xuICAgIH0gXG4gICAgaWYgKCF1cmxNYXRjaGVyLnRlc3RVcmwocmVzdWx0LnVybCkpIHsgXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHJlc3VsdC51cmwpLnRoZW4oYXN5bmMgKHByZXZWaXNpdHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByZXZWaXNpdHMpIHtcbiAgICAgICAgICAgIGlmIChwcmV2VmlzaXRzW2tleV0udGFiSWQgPT0gcmVzdWx0LnRhYklkICYmIFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHJlc3VsdC50aW1lc3RhbXAgLSBwcmV2VmlzaXRzW2tleV0udmlzaXRTdGFydCkgPCByZWNlbnRWaXNpdFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHByZXZWaXNpdHNba2V5XS5jb250ZW50c1tyZXN1bHQubmFtZV0gPSByZXN1bHQuY29udGVudHM7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoa2V5LCBwcmV2VmlzaXRzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBkZXB0aFJlc3VsdHMocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5tYXhSZWxhdGl2ZVNjcm9sbERlcHRoID09IG51bGwpIHJldHVybjtcbiAgICBpZiAoY3VycmVudFRhYkluZm9bcmVzdWx0LnRhYklkXSAmJiBjdXJyZW50VGFiSW5mb1tyZXN1bHQudGFiSWRdLnVybCA9PSByZXN1bHQudXJsKSB7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3Jlc3VsdC50YWJJZF0uc2Nyb2xsRGVwdGggPSByZXN1bHQubWF4UmVsYXRpdmVTY3JvbGxEZXB0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghdXJsTWF0Y2hlci50ZXN0VXJsKHJlc3VsdC51cmwpKSB7IHJldHVybjsgfVxuICAgICAgICBhd2FpdCBzdG9yYWdlLnN0YXJ0c1dpdGgocmVzdWx0LnVybCkudGhlbigocHJldlZpc2l0cykgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByZXZWaXNpdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlZpc2l0c1trZXldLnRhYklkID09IHJlc3VsdC50YWJJZCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2VmlzaXRzW2tleV0uc2Nyb2xsRGVwdGggPSByZXN1bHQubWF4UmVsYXRpdmVTY3JvbGxEZXB0aDtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXQoa2V5LCBwcmV2VmlzaXRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBTdGFydCBhIG5hdmlnYXRpb24gc3R1ZHkuIE5vdGUgdGhhdCBvbmx5IG9uZSBzdHVkeSBpcyBzdXBwb3J0ZWQgcGVyIGV4dGVuc2lvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFja1VzZXJBdHRlbnRpb249ZmFsc2VdIC0gV2hldGhlciB0byB0cmFjayB1c2VyXG4gKiBhdHRlbnRpb24gZHVyaW5nIHRoZSBzdHVkeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpdmF0ZVdpbmRvd3M9ZmFsc2VdIC0gV2hldGhlciB0byBtZWFzdXJlIHBhZ2VzIGluXG4gKiBwcml2YXRlIHdpbmRvd3MuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5TdHVkeSh7XG4gICAgZG9tYWlucyA9IFsgXSxcbiAgICB0cmFja1VzZXJBdHRlbnRpb24gPSBmYWxzZSxcbiAgICBwcml2YXRlV2luZG93cyA9IGZhbHNlXG59KSB7XG5cbiAgICBzdG9yYWdlID0gYXdhaXQgKG5ldyBTdG9yYWdlLktleVZhbHVlU3RvcmFnZShcIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICB1cmxNYXRjaGVyID0gbmV3IE1hdGNoaW5nLlVybE1hdGNoZXIoZG9tYWlucyk7XG5cbiAgICB1bnRyYWNrZWRQYWdlVmlzaXRzID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi51bnRyYWNrZWRQYWdlVmlzaXRzXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICBQYWdlRGVwdGgucmVnaXN0ZXJMaXN0ZW5lcihkZXB0aFJlc3VsdHMpO1xuICAgIEFydGljbGVDb250ZW50cy5yZWdpc3Rlckxpc3RlbmVyKGNvbnRlbnRSZXN1bHRzKTtcblxuICAgIC8vIExpc3RlbiBmb3IgbWV0YWRhdGEgb2YgdGhlIHZpc2l0ZWQgcGFnZXMgZnJvbSBjb250ZW50IHNjcmlwdFxuICAgIC8vIFVzZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHdlYnBhZ2UgdGhlIHVzZXIgdmlzaXRzIHRoYXQgaGFzIGEgbWF0Y2hpbmcgZG9tYWluXG4gICAgdmFyIG5leHRQYWdlSWRDb3VudGVyID0gYXdhaXQgKG5ldyBTdG9yYWdlLkNvdW50ZXIoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi5uZXh0UGFnZUlkXCIpKS5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGluZm9ybWF0aW9uIGFib3V0IHBhZ2VzIHdpdGggbWF0Y2hpbmcgZG9tYWlucyB0aGF0IGFyZSBjdXJyZW50bHkgbG9hZGVkIGludG8gYSB0YWJcbiAgICAvLyBJZiBhIHRhYiBJRCBpcyBpbiB0aGlzIG9iamVjdCwgdGhlIHBhZ2UgY3VycmVudGx5IGNvbnRhaW5lZCBpbiB0aGF0IHRhYiBoYXMgYSBtYXRjaGluZyBkb21haW5cbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBjdXJyZW50bHkgaW1wbGVtZW50ZWQgd2l0aCBhbiBvYmplY3QsIHdlIG1pZ2h0IHdhbnQgdG8gc3dpdGNoIGl0IHRvIGEgTWFwXG4gICAgY3VycmVudFRhYkluZm8gPSB7fVxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIC8vIGxpc3RlbiBtZXRhZGF0YSBtZXNzYWdlcyBmcm9tIGNvbnRlbnQgc2NyaXB0c1xuICAgIC8vIEhhbmRsZSB3aGVuIGEgcGFnZSB2aXNpdCBzdGFydHNcbiAgICBhc3luYyBmdW5jdGlvbiBwYWdlVmlzaXRTdGFydExpc3RlbmVyKHsgdXJsLCByZWZlcnJlciwgdGFiSWQsIHRpbWVTdGFtcCB9KSB7XG5cbiAgICAgICAgLy8gSWYgdGhlIFVSTCBkb2VzIG5vdCBtYXRjaCB0aGUgc3R1ZHkgZG9tYWlucywgaWdub3JlIHRoZSBwYWdlIHZpc2l0IHN0YXJ0XG4gICAgICAgIGlmICghdXJsTWF0Y2hlci50ZXN0VXJsKHVybCkpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZFBhZ2VWaXNpdHMuaW5jcmVtZW50QW5kR2V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0gU3RvcmFnZS5ub3JtYWxpemVVcmwodXJsKTtcblxuICAgICAgICAvLyBJZiB3ZSBhcmUgYWxyZWFkeSB0cmFja2luZyBhIHBhZ2UgaW4gdGhpcyB0YWIsIGlnbm9yZSB0aGUgcGFnZSB2aXNpdCBzdGFydFxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4hXG4gICAgICAgIGlmICh0YWJJZCBpbiBjdXJyZW50VGFiSW5mbykge1xuICAgICAgICAgICAgZGVidWdMb2coXCJXYXJuaW5nOiBwYWdlIHN0YXJ0IGV2ZW50IGZvciB0YWIgdGhhdCBhbHJlYWR5IGhhcyBhIHBhZ2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgcmVtZW1iZXIgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgYW5kIGluY3JlbWVudCB0aGUgcGFnZSBjb3VudGVyXG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXSA9IHtcbiAgICAgICAgICAgIHBhZ2VJZDogbmV4dFBhZ2VJZENvdW50ZXIuZ2V0KCksXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICB0YWJJZCxcbiAgICAgICAgICAgIHJlZmVycmVyLFxuICAgICAgICAgICAgdmlzaXRTdGFydDogdGltZVN0YW1wLFxuICAgICAgICAgICAgdmlzaXRFbmQ6IC0xLFxuICAgICAgICAgICAgYXR0ZW50aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICBhdHRlbnRpb25TcGFuQ291bnQ6IDAsXG4gICAgICAgICAgICBhdHRlbnRpb25TcGFuU3RhcnRzOiBbIF0sXG4gICAgICAgICAgICBhdHRlbnRpb25TcGFuRW5kczogWyBdLFxuICAgICAgICAgICAgc2Nyb2xsRGVwdGg6IC0xLFxuICAgICAgICAgICAgcHJldkV4cG9zZWQ6IGZhbHNlLCAvLyB3aWxsIGNoZWNrIGFmdGVyIHN0b3JpbmcgdGhpc1xuICAgICAgICAgICAgbGF0ZXJTaGFyZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwcmV2RXhwb3NlZCA9IGF3YWl0IExpbmtFeHBvc3VyZS5sb2dWaXNpdCh1cmwpO1xuICAgICAgICBjdXJyZW50VGFiSW5mb1t0YWJJZF0ucHJldkV4cG9zZWQgPSBwcmV2RXhwb3NlZDtcbiAgICAgICAgZGVidWdMb2coXCJwYWdlVmlzaXRTdGFydExpc3RlbmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYWJJbmZvW3RhYklkXSkpO1xuICAgICAgICBhd2FpdCBuZXh0UGFnZUlkQ291bnRlci5pbmNyZW1lbnQoKTtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gYSBwYWdlIHZpc2l0IHN0b3BzXG4gICAgYXN5bmMgZnVuY3Rpb24gcGFnZVZpc2l0U3RvcExpc3RlbmVyKHt0YWJJZCwgdGltZVN0YW1wfSkge1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCB0cmFja2luZyBhIHBhZ2UgaW4gdGhpcyB0YWIsIGlnbm9yZSB0aGUgcGFnZSB2aXNpdCBzdG9wXG4gICAgICAgIGlmKCEodGFiSWQgaW4gY3VycmVudFRhYkluZm8pKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSBjcmVhdGUgYSBjb3B5IG9mIHdoYXQgd2UgaGF2ZSByZW1lbWJlcmVkIGFib3V0IHRoZSBwYWdlIHZpc2l0LFxuICAgICAgICAvLyByZW1vdmUgdGhlIHBhZ2UgZnJvbSB0aGUgY3VycmVudCBzZXQgb2YgdHJhY2tlZCBwYWdlcywgYW5kIHNhdmUgdGhlIGNvcHlcbiAgICAgICAgLy8gdG8gc3RvcmFnZVxuICAgICAgICB2YXIgdGFiSW5mb1RvU2F2ZSA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRUYWJJbmZvW3RhYklkXSk7XG4gICAgICAgIHRhYkluZm9Ub1NhdmUudmlzaXRFbmQgPSB0aW1lU3RhbXA7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50VGFiSW5mb1t0YWJJZF07XG4gICAgICAgIHRhYkluZm9Ub1NhdmUudHlwZSA9IFwicGFnZVZpc2l0XCI7XG4gICAgICAgIGlmICh0YWJJbmZvVG9TYXZlLmF0dGVudGlvbkR1cmF0aW9uIDwgMTAwMCkgcmV0dXJuO1xuXG4gICAgICAgIGRlYnVnTG9nKFwicGFnZVZpc2l0U3RvcExpc3RlbmVyOiBcIiArIEpTT04uc3RyaW5naWZ5KHRhYkluZm9Ub1NhdmUpKTtcblxuICAgICAgICAvLyBTdG9yZSB0aGUgZmluYWwgc2V0IG9mIGluZm9ybWF0aW9uIGZvciB0aGUgcGFnZVxuICAgICAgICBzdG9yYWdlLnNldCh0YWJJbmZvVG9TYXZlLnVybCArIFwiIFwiICsgdGFiSW5mb1RvU2F2ZS5wYWdlSWQudG9TdHJpbmcoKSwgdGFiSW5mb1RvU2F2ZSk7XG4gICAgfTtcblxuICAgIHZhciBpbkF0dGVudGlvblNwYW4gPSBmYWxzZTtcbiAgICB2YXIgc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuID0gLTE7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiBhIHBhZ2UgYXR0ZW50aW9uIHNwYW4gc3RhcnRzXG4gICAgZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXIoe3RhYklkLCB0aW1lU3RhbXB9KSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHJlbWVtYmVyZWQgdGhlIHBhZ2UgcmVjZWl2aW5nIGF0dGVudGlvbiwgdGhlIHBhZ2UgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nXG4gICAgICAgIC8vIGRvbWFpbiwgc28gaWdub3JlIHRoZSBwYWdlIGF0dGVudGlvbiBzdGFydCBldmVudFxuICAgICAgICBpZighKHRhYklkIGluIGN1cnJlbnRUYWJJbmZvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIHN0YXJ0IG9mIHRoZSBhdHRlbnRpb24gc3BhblxuICAgICAgICBpbkF0dGVudGlvblNwYW4gPSB0cnVlO1xuICAgICAgICBzdGFydE9mQ3VycmVudEF0dGVudGlvblNwYW4gPSB0aW1lU3RhbXA7XG4gICAgICAgIGRlYnVnTG9nKFwicGFnZUF0dGVudGlvblN0YXJ0TGlzdGVuZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhYkluZm9bdGFiSWRdKSk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIGEgcGFnZSBhdHRlbnRpb24gc3BhbiBlbmRzXG4gICAgZnVuY3Rpb24gcGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcih7dGFiSWQsIHRpbWVTdGFtcH0pIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBub3QgcmVtZW1iZXJlZCB0aGUgcGFnZSByZWNlaXZpbmcgYXR0ZW50aW9uLCB0aGUgcGFnZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmdcbiAgICAgICAgLy8gZG9tYWluLCBzbyBpZ25vcmUgdGhlIHBhZ2UgYXR0ZW50aW9uIHN0b3AgZXZlbnRcbiAgICAgICAgaWYoISh0YWJJZCBpbiBjdXJyZW50VGFiSW5mbykpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCBjdXJyZW50bHkgaW4gYW4gYXR0ZW50aW9uIHNwYW4sIGlnbm9yZSB0aGUgcGFnZSBhdHRlbnRpb24gc3RvcCBldmVudFxuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIVxuICAgICAgICBpZighaW5BdHRlbnRpb25TcGFuKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhcIldhcm5pbmc6IHVuZXhwZWN0ZWQgcGFnZSBhdHRlbnRpb24gc3RvcFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBlbmQgb2YgdGhlIGF0dGVudGlvbiBzcGFuXG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25EdXJhdGlvbiA9IFxuICAgICAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvbkR1cmF0aW9uICsgXG4gICAgICAgICAgICAodGltZVN0YW1wIC0gc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuKTtcbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5Db3VudCA9IFxuICAgICAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5Db3VudCArIDE7XG4gICAgICAgIGN1cnJlbnRUYWJJbmZvW3RhYklkXS5hdHRlbnRpb25TcGFuU3RhcnRzLnB1c2goc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuKTtcbiAgICAgICAgY3VycmVudFRhYkluZm9bdGFiSWRdLmF0dGVudGlvblNwYW5FbmRzLnB1c2godGltZVN0YW1wKTtcblxuICAgICAgICBpbkF0dGVudGlvblNwYW4gPSBmYWxzZTtcbiAgICAgICAgc3RhcnRPZkN1cnJlbnRBdHRlbnRpb25TcGFuID0gLTE7XG4gICAgICAgIGRlYnVnTG9nKFwicGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lcjogXCIgKyBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFiSW5mb1t0YWJJZF0pKTtcbiAgICB9O1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHBhZ2UgdmlzaXQgbGlzdGVuZXJzIGFuZCwgaWYgbmVlZGVkIGZvciB0aGUgc3R1ZHksIHRoZSBwYWdlIGF0dGVudGlvbiBsaXN0ZW5lcnNcbiAgICAvLyBVc2UgYSB0aW1lc3RhbXAgdG8gc3luY2hyb25pemUgaW5pdGlhbCBwYWdlIHZpc2l0IGFuZCBwYWdlIGF0dGVudGlvbiB0aW1lc1xuXG4gICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIocGFnZVZpc2l0U3RhcnRMaXN0ZW5lciwgdHJ1ZSwgcHJpdmF0ZVdpbmRvd3MsIHRpbWVTdGFtcCk7XG4gICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VWaXNpdFN0b3BMaXN0ZW5lcihwYWdlVmlzaXRTdG9wTGlzdGVuZXIsIHByaXZhdGVXaW5kb3dzKTtcbiAgICBpZih0cmFja1VzZXJBdHRlbnRpb24pIHtcbiAgICAgICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyKHBhZ2VBdHRlbnRpb25TdGFydExpc3RlbmVyLCB0cnVlLCBwcml2YXRlV2luZG93cywgdGltZVN0YW1wKTtcbiAgICAgICAgUGFnZUV2ZW50cy5yZWdpc3RlclBhZ2VBdHRlbnRpb25TdG9wTGlzdGVuZXIocGFnZUF0dGVudGlvblN0b3BMaXN0ZW5lciwgcHJpdmF0ZVdpbmRvd3MpO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIHRoZSBVUkwgbWF0Y2hpbmcgc2V0IGZvciBjb250ZW50IHNjcmlwdHNcbiAgICB2YXIgY29udGVudFNjcmlwdE1hdGNoZXMgPSBNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheShkb21haW5zLCB0cnVlKTtcblxuICAgIC8vIFN0b3JlIHdoZXRoZXIgdGhlIE5hdmlnYXRpb24gc3R1ZHkgaXMgcnVubmluZyBpbiBwcml2YXRlIHdpbmRvd3MgaW4gZXh0ZW5zaW9uXG4gICAgLy8gbG9jYWwgc3RvcmFnZSwgc28gdGhhdCBpdCBpcyBhdmFpbGFibGUgdG8gY29udGVudCBzY3JpcHRzXG4gICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IFwiV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuUGFnZU5hdmlnYXRpb24ucHJpdmF0ZVdpbmRvd3NcIjogcHJpdmF0ZVdpbmRvd3MgfSk7XG59XG5cbi8qIFV0aWxpdGllcyAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBzdHVkeSBkYXRhIGFzIGFuIG9iamVjdC4gTm90ZSB0aGF0IHRoaXMgY291bGQgYmUgdmVyeVxuICogc2xvdyBpZiB0aGVyZSBpcyBhIGxhcmdlIHZvbHVtZSBvZiBzdHVkeSBkYXRhLlxuICogQHJldHVybnMgeyhPYmplY3R8bnVsbCl9IC0gVGhlIHN0dWR5IGRhdGEsIG9yIGBudWxsYCBpZiBubyBkYXRhXG4gKiBjb3VsZCBiZSByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHVkeURhdGFBc09iamVjdCgpIHtcbiAgICBpZihzdG9yYWdlICE9IG51bGwpXG4gICAgICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3JlQW5kUmVzZXRVbnRyYWNrZWRWaXNpdHNDb3VudCgpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXQoXCJXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi51bnRyYWNrZWRWaXNpdENvdW50XCIsIFxuICAgICAgICAgICAge3R5cGU6IFwidW50cmFja2VkVmlzaXRDb3VudFwiLFxuICAgICAgICAgICAgIG51bVVudHJhY2tlZFZpc2l0czogYXdhaXQgdW50cmFja2VkUGFnZVZpc2l0cy5nZXRBbmRSZXNldCgpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dTaGFyZSh1cmwpIHtcbiAgICBpZiAoIXVybE1hdGNoZXIudGVzdFVybCh1cmwpKSB7IHJldHVybjsgfSAvLyBpZiBpdCdzIG5vdCBhIHRyYWNrZWQgdXJsLCBpdCBkZWZpbml0ZWx5IGlzbid0IGluIG91ciBkYXRhYmFzZVxuXG4gICAgdmFyIHByZXZWaXNpdFJlZmVycmVyID0gbnVsbDtcblxuICAgIC8vIFNlYXJjaCBpbi1tZW1vcnkgcGFnZXNcbiAgICBmb3IgKGxldCBwYWdlSWQgaW4gY3VycmVudFRhYkluZm8pe1xuICAgICAgICB2YXIgcGFnZVZpc2l0ID0gY3VycmVudFRhYkluZm9bcGFnZUlkXTtcbiAgICAgICAgaWYgKHVybCA9PSBwYWdlVmlzaXQudXJsKSB7XG4gICAgICAgICAgICBjdXJyZW50VGFiSW5mb1twYWdlSWRdLmxhdGVyU2hhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghcHJldlZpc2l0UmVmZXJyZXIpIHByZXZWaXNpdFJlZmVycmVyID0gcGFnZVZpc2l0LnJlZmVycmVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIHByZXZpb3VzbHktc3RvcmVkIHBhZ2VzXG4gICAgdmFyIGJlc3RSZWZlcnJlciA9IHt0czogMCwgcmVmZXJyZXI6IFwiXCJ9XG4gICAgYXdhaXQgc3RvcmFnZS5zdGFydHNXaXRoKHVybCkudGhlbigocHJldlZpc2l0cykgPT4ge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJldlZpc2l0cykge1xuICAgICAgICAgICAgaWYgKHByZXZWaXNpdHNba2V5XS52aXNpdFN0YXJ0ID4gYmVzdFJlZmVycmVyLnRzKSB7XG4gICAgICAgICAgICAgICAgYmVzdFJlZmVycmVyLnRzID0gcHJldlZpc2l0c1trZXldLnZpc2l0U3RhcnRcbiAgICAgICAgICAgICAgICBiZXN0UmVmZXJyZXIucmVmZXJyZXIgPSBwcmV2VmlzaXRzW2tleV0ucmVmZXJyZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZWaXNpdHNba2V5XS5sYXRlclNoYXJlZCA9IHRydWU7XG4gICAgICAgICAgICBzdG9yYWdlLnNldChrZXksIHByZXZWaXNpdHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcHJldlZpc2l0UmVmZXJyZXIpIHByZXZWaXNpdFJlZmVycmVyID0gYmVzdFJlZmVycmVyLnJlZmVycmVyO1xuICAgIHJldHVybiBbcHJldlZpc2l0UmVmZXJyZXJdO1xufSIsIi8qKlxuICogVGhpcyBtb2R1bGUgc3RvcmVzIEFydGljbGUgQ29udGVudHMgZnJvbSBwYWdlc1xuICpcbiAqIEJyaWFuIENoaXZlcnMsIDMvMTkvMjAyMVxuICpcbiAqIEBtb2R1bGUgV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzXG4gKi9cblxuaW1wb3J0ICogYXMgV2ViU2NpZW5jZSBmcm9tICcuL1dlYlNjaWVuY2UuanMnXG5cbmNvbnN0IGRlYnVnTG9nID0gV2ViU2NpZW5jZS5VdGlsaXRpZXMuRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZygnTWVhc3VyZW1lbnRzLkFydGljbGVDb250ZW50cycpXG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xubGV0IHN0b3JhZ2UgPSBudWxsXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5sZXQgbGlzdGVuZXJzID0gW11cblxuLyoqXG4gKiBTdGFydCBhbiBhcnRpY2xlIGNvbnRlbnRzIHN0dWR5LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBIHNldCBvZiBvcHRpb25zIGZvciB0aGUgc3R1ZHkuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy5kb21haW5zPVtdXSAtIFRoZSBkb21haW5zIG9mIGludGVyZXN0IGZvciB0aGUgc3R1ZHkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5TdHVkeSAoe1xuICAgIGRvbWFpbnMgPSBbXVxufSkge1xuXG4gIGlmIChpbml0aWFsaXplZCl7XG4gICAgcmV0dXJuICAgXG4gIH1cbiAgaW5pdGlhbGl6ZWQgPSB0cnVlXG5cbiAgc3RvcmFnZSA9IGF3YWl0IChuZXcgV2ViU2NpZW5jZS5VdGlsaXRpZXMuU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UoJ1dlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkFydGljbGVDb250ZW50cycpKS5pbml0aWFsaXplKClcblxuICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICBsZXQgbmV4dFBhZ2VJZENvdW50ZXIgPSBhd2FpdCAobmV3IFdlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2UuQ291bnRlcignV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQXJ0aWNsZUNvbnRlbnRzLm5leHRQYWdlSWQnKSkuaW5pdGlhbGl6ZSgpXG5cbiAgLy8gQnVpbGQgdGhlIFVSTCBtYXRjaGluZyBzZXQgZm9yIGNvbnRlbnQgc2NyaXB0c1xuICBsZXQgY29udGVudFNjcmlwdE1hdGNoZXMgPSBXZWJTY2llbmNlLlV0aWxpdGllcy5NYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheVdpdGhQYXRoKGRvbWFpbnMsIHRydWUpXG5cbiAgLy8gUmVnaXN0ZXIgdGhlIGNvbnRlbnQgc2NyaXB0IGZvciBzdG9yaW5nIEFydGljbGUgQ29udGVudHNcbiAgYXdhaXQgYnJvd3Nlci5jb250ZW50U2NyaXB0cy5yZWdpc3Rlcih7XG4gICAgbWF0Y2hlczogY29udGVudFNjcmlwdE1hdGNoZXMsXG4gICAganM6IFtcbiAgICAgIHtcbiAgICAgICAgZmlsZTogJy9zcmMvV2ViU2NpZW5jZS9NZWFzdXJlbWVudHMvY29udGVudC1zY3JpcHRzL1JlYWRhYmlsaXR5LmpzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmlsZTogJy9zcmMvY29udGVudC1zY3JpcHRzL3BhZ2UtY29udGVudC5qcydcbiAgICAgIH1cbiAgICBdLFxuICAgIHJ1bkF0OiAnZG9jdW1lbnRfaWRsZSdcbiAgfSlcblxuICAvLyBIYW5kbGUgcGFnZSBkZXB0aCBldmVudHNcbiAgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIoJ1dlYlNjaWVuY2UuYXJ0aWNsZUNvbnRlbnQnLCBhc3luYyAoZGVwdGhJbmZvLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGxldCBwYWdlSWQgPSBhd2FpdCBuZXh0UGFnZUlkQ291bnRlci5nZXRBbmRJbmNyZW1lbnQoKVxuICAgIGRlcHRoSW5mby51cmwgPSBXZWJTY2llbmNlLlV0aWxpdGllcy5TdG9yYWdlLm5vcm1hbGl6ZVVybChzZW5kZXIudXJsKVxuICAgIGRlcHRoSW5mby50YWJJZCA9IHNlbmRlci50YWIuaWRcbiAgICBmb3IgKGxldCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHsgbGlzdGVuZXIoZGVwdGhJbmZvKSB9XG4gICAgc3RvcmFnZS5zZXQocGFnZUlkLnRvU3RyaW5nKCksIGRlcHRoSW5mbylcbiAgICBkZWJ1Z0xvZyhKU09OLnN0cmluZ2lmeShkZXB0aEluZm8pKVxuICB9LCB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgdXJsOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJ3N0cmluZycsXG4gICAgdGV4dDogJ3N0cmluZydcbiAgfSlcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0ICgpIHtcbiAgICBpZiAoc3RvcmFnZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIgKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG59XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIG1lYXN1cmVzIGFkdmVydGlzZW1lbnQgaW5mbyBvbiBuZXdzIHBhZ2VzXG4gKlxuICogQnJpYW4gQ2hpdmVycywgMy8xOS8yMDIxXG4gKiBAbW9kdWxlIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkFkdmVydGlzZW1lbnRzXG4gKi9cblxuaW1wb3J0ICogYXMgV2ViU2NpZW5jZSBmcm9tICcuL1dlYlNjaWVuY2UuanMnXG5cbmNvbnN0IGRlYnVnTG9nID0gV2ViU2NpZW5jZS5VdGlsaXRpZXMuRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZygnTWVhc3VyZW1lbnRzLkFkdmVydGlzZW1lbnRzJyk7XG5cbi8qKlxuICogQSBLZXlWYWx1ZVN0b3JhZ2Ugb2JqZWN0IGZvciBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3R1ZHkuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xubGV0IHN0b3JhZ2UgPSBudWxsXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5sZXQgbGlzdGVuZXJzID0gW11cblxuLyoqXG4gKiBTdGFydCBhbiBhZHZlcnRpc2VtZW50cyBzdHVkeS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIHN0dWR5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZG9tYWlucz1bXV0gLSBUaGUgZG9tYWlucyBvZiBpbnRlcmVzdCBmb3IgdGhlIHN0dWR5LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuU3R1ZHkgKHtcbiAgZG9tYWlucyA9IFtdXG59KSB7XG4gIGlmIChpbml0aWFsaXplZCkge1xuICAgIHJldHVyblxuICB9XG4gIGluaXRpYWxpemVkID0gdHJ1ZVxuXG4gIHN0b3JhZ2UgPSBhd2FpdCAobmV3IFdlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2UuS2V5VmFsdWVTdG9yYWdlKCdXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5BZHZlcnRpc2VtZW50cycpKS5pbml0aWFsaXplKClcblxuICAvLyBVc2UgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB3ZWJwYWdlIHRoZSB1c2VyIHZpc2l0cyB0aGF0IGhhcyBhIG1hdGNoaW5nIGRvbWFpblxuICBsZXQgbmV4dFBhZ2VJZENvdW50ZXIgPSBhd2FpdCAobmV3IFdlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2UuQ291bnRlcignV2ViU2NpZW5jZS5NZWFzdXJlbWVudHMuQWR2ZXJ0aXNlbWVudHMubmV4dFBhZ2VJZCcpKS5pbml0aWFsaXplKClcblxuICAvLyBCdWlsZCB0aGUgVVJMIG1hdGNoaW5nIHNldCBmb3IgY29udGVudCBzY3JpcHRzXG4gIGxldCBjb250ZW50U2NyaXB0TWF0Y2hlcyA9IFdlYlNjaWVuY2UuVXRpbGl0aWVzLk1hdGNoaW5nLmNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5KGRvbWFpbnMsIHRydWUpO1xuXG4gIC8vIFJlZ2lzdGVyIHRoZSBjb250ZW50IHNjcmlwdCBmb3IgbWVhc3VyaW5nIGFkdmVydGlzZW1lbnQgaW5mb1xuICAvLyBUaGUgQ1NTIHNlbGVjdG9ycyBmaWxlIGlzIG5lZWRlZCB0byBmaW5kIGFkcyBvbiB0aGUgcGFnZVxuICBhd2FpdCBicm93c2VyLmNvbnRlbnRTY3JpcHRzLnJlZ2lzdGVyICh7XG4gICAgbWF0Y2hlczogY29udGVudFNjcmlwdE1hdGNoZXMsXG4gICAganM6IFtcbiAgICAgIHtcbiAgICAgICAgZmlsZTogJy9zcmMvYWRfY3NzX3NlbGVjdG9ycy5qcydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbGU6ICcvc3JjL2NvbnRlbnQtc2NyaXB0cy9wYWdlLWFkcy5qcydcbiAgICAgIH1cbiAgICAgIF0sXG4gICAgcnVuQXQ6ICdkb2N1bWVudF9pZGxlJ1xuICB9KVxuXG4gIC8vIEhhbmRsZSBwYWdlIGRlcHRoIGV2ZW50c1xuICBXZWJTY2llbmNlLlV0aWxpdGllcy5NZXNzYWdpbmcucmVnaXN0ZXJMaXN0ZW5lcignV2ViU2NpZW5jZS5hZHZlcnRpc2VtZW50cycsIGFzeW5jIChkZXB0aEluZm8sIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgbGV0IHBhZ2VJZCA9IGF3YWl0IG5leHRQYWdlSWRDb3VudGVyLmdldEFuZEluY3JlbWVudCgpXG4gICAgZGVwdGhJbmZvLnVybCA9IFdlYlNjaWVuY2UuVXRpbGl0aWVzLlN0b3JhZ2Uubm9ybWFsaXplVXJsKHNlbmRlci51cmwpXG4gICAgZGVwdGhJbmZvLnRhYklkID0gc2VuZGVyLnRhYi5pZFxuICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykgeyBsaXN0ZW5lcihkZXB0aEluZm8pIH1cbiAgICAgIHN0b3JhZ2Uuc2V0KHBhZ2VJZC50b1N0cmluZygpLCBkZXB0aEluZm8pXG4gICAgICBkZWJ1Z0xvZyhKU09OLnN0cmluZ2lmeShkZXB0aEluZm8pKVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgdXJsOiAnc3RyaW5nJyxcbiAgICAgIGFkczogJ29iamVjdCdcbiAgICB9XG4gIClcbn1cblxuLyogVXRpbGl0aWVzICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0dWR5IGRhdGEgYXMgYW4gb2JqZWN0LiBOb3RlIHRoYXQgdGhpcyBjb3VsZCBiZSB2ZXJ5XG4gKiBzbG93IGlmIHRoZXJlIGlzIGEgbGFyZ2Ugdm9sdW1lIG9mIHN0dWR5IGRhdGEuXG4gKiBAcmV0dXJucyB7KE9iamVjdHxudWxsKX0gLSBUaGUgc3R1ZHkgZGF0YSwgb3IgYG51bGxgIGlmIG5vIGRhdGFcbiAqIGNvdWxkIGJlIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0dWR5RGF0YUFzT2JqZWN0ICgpIHtcbiAgaWYgKHN0b3JhZ2UgIT0gbnVsbCkge1xuICAgIHJldHVybiBhd2FpdCBzdG9yYWdlLmdldENvbnRlbnRzQXNPYmplY3QoKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gU3R1ZHlNb2R1bGUuanMsIEJyaWFuIENoaXZlcnMgMy8xOS8yMDIxXG4vLyBUaGlzIG1vZHVsZSBzdGFydHMgYWxsIHRoZSBXZWJTY2llbmNlIG1vZHVsZXMsIHdoaWNoIGNvbGxlY3Rcbi8vIGRhdGEgZm9yIHRoaXMgc3R1ZHlcbmltcG9ydCAqIGFzIFdlYlNjaWVuY2UgZnJvbSAnLi9XZWJTY2llbmNlLmpzJ1xuaW1wb3J0ICogYXMgQXJ0aWNsZUNvbnRlbnRzIGZyb20gJy4vQXJ0aWNsZUNvbnRlbnRzLmpzJ1xuaW1wb3J0ICogYXMgQWR2ZXJ0aXNlbWVudHMgZnJvbSAnLi9BZHZlcnRpc2VtZW50cy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUgKCkge1xuICAvLyBHcmFiIGFsbCBkb21haW5zXG4gIHZhciBzdHVkeVBhdGhzID0gV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocygpXG5cbiAgLy8gQ29uZmlndXJlIG5hdmlnYXRpb24gY29sbGVjdGlvblxuICBXZWJTY2llbmNlLk1lYXN1cmVtZW50cy5QYWdlTmF2aWdhdGlvbi5ydW5TdHVkeSh7XG4gICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgIHRyYWNrVXNlckF0dGVudGlvbjogdHJ1ZVxuICB9KVxuXG4gIC8vIENvbmZpZ3VyZSBsaW5rIGV4cG9zdXJlIGNvbGxlY3Rpb25cbiAgV2ViU2NpZW5jZS5VdGlsaXRpZXMuTGlua1Jlc29sdXRpb24uaW5pdGlhbGl6ZSgpXG4gIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5ydW5TdHVkeSh7XG4gICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzLFxuICAgIHByaXZhdGVXaW5kb3dzOiBmYWxzZVxuICB9KVxuXG4gIC8vIFN0YXJ0IFBhZ2UgRGVwdGggbW9kdWxlXG4gIFdlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aC5ydW5TdHVkeSh7XG4gICAgZG9tYWluczogc3R1ZHlQYXRocy5kZXN0aW5hdGlvblBhdGhzXG4gIH0pXG5cbiAgLy8gU3RhcnQgQXJ0aWNsZSBDb250ZW50cyBNb2R1bGVcbiAgQXJ0aWNsZUNvbnRlbnRzLnJ1blN0dWR5KHtcbiAgICBkb21haW5zOiBzdHVkeVBhdGhzLmRlc3RpbmF0aW9uUGF0aHMsXG4gIH0pXG5cbiAgLy8gU3RhcnQgQWR2ZXJ0aXNlbWVudHMgTW9kdWxlXG4gIEFkdmVydGlzZW1lbnRzLnJ1blN0dWR5KHtcbiAgICBkb21haW5zOiBzdHVkeVBhdGhzLmRlc3RpbmF0aW9uUGF0aHNcbiAgfSlcbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5cbi8vIENvcGllZCBmcm9tIE1vemlsbGEgUmFsbHkncyBzdHVkeSB0ZW1wbGF0ZVxuLy9MaWdodGx5IG1vZGlmaWVkIGJ5IEJyaWFuIENoaXZlcnMgZm9yIEdyZWcgTWFydGluJ3MgZXhwZXJpbWVudFxuXG5pbXBvcnQgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcblxuaW1wb3J0IFJhbGx5IGZyb20gXCJAbW96aWxsYS9yYWxseVwiO1xuXG4vLyBFeGFtcGxlOiBpbXBvcnQgYSBtb2R1bGUuXG5pbXBvcnQge1xuICBpbml0aWFsaXplIFxufSBmcm9tICcuL1N0dWR5TW9kdWxlJztcblxuY29uc3QgcmFsbHkgPSBuZXcgUmFsbHkoKTtcbnJhbGx5LmluaXRpYWxpemUoXG4gIC8vIEEgc2FtcGxlIGtleSBpZCB1c2VkIGZvciBlbmNyeXB0aW5nIGRhdGEuXG4gIFwic2FtcGxlLWludmFsaWQta2V5LWlkXCIsXG4gIC8vIEEgc2FtcGxlICp2YWxpZCogSldLIG9iamVjdCBmb3IgdGhlIGVuY3J5cHRpb24uXG4gIHtcbiAgICBcImt0eVwiOlwiRUNcIixcbiAgICBcImNydlwiOlwiUC0yNTZcIixcbiAgICBcInhcIjpcImY4M09KM0QyeEYxQmc4dnViOXRMZTFnSE16Vjc2ZThUdXM5dVBIdlJWRVVcIixcbiAgICBcInlcIjpcInhfRkV6UnU5bTM2SExOX3R1ZTY1OUxOcFhXNnBDeVN0aWtZaktJV0k1YTBcIixcbiAgICBcImtpZFwiOlwiUHVibGljIGtleSB1c2VkIGluIEpXUyBzcGVjIEFwcGVuZGl4IEEuMyBleGFtcGxlXCJcbiAgfSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudCBpcyBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5XG4gIC8vIHRoZSBidWlsZCBzeXN0ZW0uXG4gIF9fRU5BQkxFX0RFVkVMT1BFUl9NT0RFX18sXG4pLnRoZW4ocmVzb2x2ZSA9PiB7XG4gIC8vIEluaXRpYWxpemUgdGhlIHN0dWR5IGFuZCBzdGFydCBpdC5cbiAgaW5pdGlhbGl6ZSgpO1xufSwgcmVqZWN0ID0+e1xuICAvLyBEbyBub3Qgc3RhcnQgdGhlIHN0dWR5IGluIHRoaXMgY2FzZS4gU29tZXRoaW5nXG4gIC8vIHdlbnQgd3JvbmcuXG59KTtcbiJdLCJuYW1lcyI6WyJ0aGlzIiwiRGVidWdnaW5nLmdldERlYnVnZ2luZ0xvZyIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6ZSIsIklkbGUucmVnaXN0ZXJJZGxlU3RhdGVMaXN0ZW5lciIsIklkbGUucXVlcnlTdGF0ZSIsImRlYnVnTG9nIiwiU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UiLCJTdG9yYWdlLkNvdW50ZXIiLCJMaW5rUmVzb2x1dGlvbi5nZXRTaG9ydERvbWFpbnMiLCJMaW5rUmVzb2x1dGlvbi5nZXRBbXBDYWNoZURvbWFpbnMiLCJNYXRjaGluZy5jcmVhdGVVcmxSZWdleFN0cmluZyIsIk1lc3NhZ2luZy5yZWdpc3Rlckxpc3RlbmVyIiwiTGlua1Jlc29sdXRpb24ucmVzb2x2ZVVybCIsIlBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RhcnRMaXN0ZW5lciIsIlBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlQXR0ZW50aW9uU3RvcExpc3RlbmVyIiwiU3RvcmFnZS5ub3JtYWxpemVVcmwiLCJzdG9yYWdlIiwicnVuU3R1ZHkiLCJNYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheSIsInJlZ2lzdGVyTGlzdGVuZXIiLCJNYXRjaGluZy5VcmxNYXRjaGVyIiwiUGFnZURlcHRoLnJlZ2lzdGVyTGlzdGVuZXIiLCJMaW5rRXhwb3N1cmUubG9nVmlzaXQiLCJQYWdlRXZlbnRzLnJlZ2lzdGVyUGFnZVZpc2l0U3RhcnRMaXN0ZW5lciIsIlBhZ2VFdmVudHMucmVnaXN0ZXJQYWdlVmlzaXRTdG9wTGlzdGVuZXIiLCJXZWJTY2llbmNlLlV0aWxpdGllcy5EZWJ1Z2dpbmcuZ2V0RGVidWdnaW5nTG9nIiwibGlzdGVuZXJzIiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuU3RvcmFnZS5LZXlWYWx1ZVN0b3JhZ2UiLCJXZWJTY2llbmNlLlV0aWxpdGllcy5TdG9yYWdlLkNvdW50ZXIiLCJXZWJTY2llbmNlLlV0aWxpdGllcy5NYXRjaGluZy5jcmVhdGVVcmxNYXRjaFBhdHRlcm5BcnJheVdpdGhQYXRoIiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWVzc2FnaW5nLnJlZ2lzdGVyTGlzdGVuZXIiLCJXZWJTY2llbmNlLlV0aWxpdGllcy5TdG9yYWdlLm5vcm1hbGl6ZVVybCIsIldlYlNjaWVuY2UuVXRpbGl0aWVzLk1hdGNoaW5nLmNyZWF0ZVVybE1hdGNoUGF0dGVybkFycmF5IiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTWF0Y2hpbmcuZ2V0U3R1ZHlQYXRocyIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VOYXZpZ2F0aW9uLnJ1blN0dWR5IiwiV2ViU2NpZW5jZS5VdGlsaXRpZXMuTGlua1Jlc29sdXRpb24uaW5pdGlhbGl6ZSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLkxpbmtFeHBvc3VyZS5ydW5TdHVkeSIsIldlYlNjaWVuY2UuTWVhc3VyZW1lbnRzLlBhZ2VEZXB0aC5ydW5TdHVkeSIsIkFydGljbGVDb250ZW50cy5ydW5TdHVkeSIsIkFkdmVydGlzZW1lbnRzLnJ1blN0dWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQzVCLEVBRTZDO0FBQzdDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLEdBTUc7QUFDSCxDQUFDLEVBQUUsT0FBTyxVQUFVLEtBQUssV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFPLElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxHQUFHQSxjQUFJLEVBQUUsVUFBVSxNQUFNLEVBQUU7QUFXakg7QUFDQSxFQUFFLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUM3RixJQUFJLE1BQU0sZ0RBQWdELEdBQUcseURBQXlELENBQUM7QUFDdkgsSUFBSSxNQUFNLGlDQUFpQyxHQUFHLHdQQUF3UCxDQUFDO0FBQ3ZTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE1BQU0sUUFBUSxHQUFHLGFBQWEsSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQU0sV0FBVyxHQUFHO0FBQzFCLFFBQVEsUUFBUSxFQUFFO0FBQ2xCLFVBQVUsT0FBTyxFQUFFO0FBQ25CLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxVQUFVLEVBQUU7QUFDdEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLFNBQVMsRUFB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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUEyQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFD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
