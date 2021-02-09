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
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// ... Add more implementation here!

console.debug("Running content script");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zY3JpcHQuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwiLi4vc3JjL2NvbnRlbnQtc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuNy4wIC0gVHVlIE5vdiAxMCAyMDIwIDIwOjI0OjA0ICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0eXBlb2YgYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcbiAgICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdGlvblxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pOyAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxuXG5cbiAgICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgY2hyb21lICE9IFwib2JqZWN0XCIgfHwgIWNocm9tZSB8fCAhY2hyb21lLnJ1bnRpbWUgfHwgIWNocm9tZS5ydW50aW1lLmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gICAgfSAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBicm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcblxuLy8gLi4uIEFkZCBtb3JlIGltcGxlbWVudGF0aW9uIGhlcmUhXG5cbmNvbnNvbGUuZGVidWcoXCJSdW5uaW5nIGNvbnRlbnQgc2NyaXB0XCIpO1xuIl0sIm5hbWVzIjpbInRoaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFVLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDNUIsRUFFNkM7QUFDN0MsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsR0FNRztBQUNILENBQUMsRUFBRSxPQUFPLFVBQVUsS0FBSyxXQUFXLEdBQUcsVUFBVSxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUdBLGNBQUksRUFBRSxVQUFVLE1BQU0sRUFBRTtBQVdqSDtBQUNBLEVBQUUsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFO0FBQzdGLElBQUksTUFBTSxnREFBZ0QsR0FBRyx5REFBeUQsQ0FBQztBQUN2SCxJQUFJLE1BQU0saUNBQWlDLEdBQUcsd1BBQXdQLENBQUM7QUFDdlM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksTUFBTSxRQUFRLEdBQUcsYUFBYSxJQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxXQUFXLEdBQUc7QUFDMUIsUUFBUSxRQUFRLEVBQUU7QUFDbEIsVUFBVSxPQUFPLEVBQUU7QUFDbkIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxXQUFXLEVBQUU7QUFDckIsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsYUFBYSxFQUFFO0FBQ3pCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxXQUFXLEVBQUU7QUFDdkIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFlBQVksRUFBRTtBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsU0FBUyxFQUFFO0FBQ3JCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxNQUFNLEVBQUU7QUFDbEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsWUFBWSxFQUFFO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLGVBQWUsRUFBRTtBQUN6QixVQUFVLFNBQVMsRUFBRTtBQUNyQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxzQkFBc0IsRUFBRSxJQUFJO0FBQ3hDLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxzQkFBc0IsRUFBRSxJQUFJO0FBQ3hDLFdBQVc7QUFDWCxVQUFVLHlCQUF5QixFQUFFO0FBQ3JDLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxjQUFjLEVBQUU7QUFDMUIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsVUFBVSxFQUFFO0FBQ3RCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxXQUFXLEVBQUU7QUFDdkIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLHlCQUF5QixFQUFFO0FBQ3JDLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLHNCQUFzQixFQUFFLElBQUk7QUFDeEMsV0FBVztBQUNYLFVBQVUsY0FBYyxFQUFFO0FBQzFCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLHNCQUFzQixFQUFFLElBQUk7QUFDeEMsV0FBVztBQUNYLFVBQVUsU0FBUyxFQUFFO0FBQ3JCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxVQUFVLEVBQUU7QUFDdEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksc0JBQXNCLEVBQUUsSUFBSTtBQUN4QyxXQUFXO0FBQ1gsVUFBVSxVQUFVLEVBQUU7QUFDdEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksc0JBQXNCLEVBQUUsSUFBSTtBQUN4QyxXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsY0FBYyxFQUFFO0FBQ3hCLFVBQVUsUUFBUSxFQUFFO0FBQ3BCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxhQUFhLEVBQUU7QUFDekIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLGVBQWUsRUFBRTtBQUMzQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsaUJBQWlCLEVBQUU7QUFDN0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLGdCQUFnQixFQUFFO0FBQzVCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxlQUFlLEVBQUU7QUFDM0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLG9CQUFvQixFQUFFO0FBQ2hDLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxpQkFBaUIsRUFBRTtBQUM3QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsa0JBQWtCLEVBQUU7QUFDOUIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLFVBQVUsRUFBRTtBQUNwQixVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLGNBQWMsRUFBRTtBQUN4QixVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsV0FBVyxFQUFFO0FBQ3ZCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxTQUFTLEVBQUU7QUFDbkIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsb0JBQW9CLEVBQUU7QUFDaEMsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFO0FBQ3BCLFVBQVUsaUJBQWlCLEVBQUU7QUFDN0IsWUFBWSxNQUFNLEVBQUU7QUFDcEIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGNBQWMsbUJBQW1CLEVBQUUsS0FBSztBQUN4QyxhQUFhO0FBQ2IsV0FBVztBQUNYLFVBQVUsUUFBUSxFQUFFO0FBQ3BCLFlBQVksUUFBUSxFQUFFO0FBQ3RCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixjQUFjLG1CQUFtQixFQUFFLElBQUk7QUFDdkMsYUFBYTtBQUNiLFlBQVksVUFBVSxFQUFFO0FBQ3hCLGNBQWMsbUJBQW1CLEVBQUU7QUFDbkMsZ0JBQWdCLFNBQVMsRUFBRSxDQUFDO0FBQzVCLGdCQUFnQixTQUFTLEVBQUUsQ0FBQztBQUM1QixlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxXQUFXLEVBQUU7QUFDckIsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsT0FBTyxFQUFFO0FBQ25CLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxhQUFhLEVBQUU7QUFDekIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLE1BQU0sRUFBRTtBQUNsQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxzQkFBc0IsRUFBRSxJQUFJO0FBQ3hDLFdBQVc7QUFDWCxVQUFVLE9BQU8sRUFBRTtBQUNuQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsWUFBWSxFQUFFO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsTUFBTSxFQUFFO0FBQ2xCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLHNCQUFzQixFQUFFLElBQUk7QUFDeEMsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLFdBQVcsRUFBRTtBQUNyQixVQUFVLDJCQUEyQixFQUFFO0FBQ3ZDLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSwwQkFBMEIsRUFBRTtBQUN0QyxZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLFNBQVMsRUFBRTtBQUNuQixVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsV0FBVyxFQUFFO0FBQ3ZCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxhQUFhLEVBQUU7QUFDekIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFdBQVcsRUFBRTtBQUN2QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsV0FBVyxFQUFFO0FBQ3ZCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxNQUFNLEVBQUU7QUFDaEIsVUFBVSxnQkFBZ0IsRUFBRTtBQUM1QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsb0JBQW9CLEVBQUU7QUFDaEMsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUU7QUFDcEIsVUFBVSxtQkFBbUIsRUFBRTtBQUMvQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLE1BQU0sRUFBRTtBQUNoQixVQUFVLFlBQVksRUFBRTtBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLFlBQVksRUFBRTtBQUN0QixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsUUFBUSxFQUFFO0FBQ3BCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxTQUFTLEVBQUU7QUFDckIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFlBQVksRUFBRTtBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsZUFBZSxFQUFFO0FBQzNCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsZUFBZSxFQUFFO0FBQ3pCLFVBQVUsT0FBTyxFQUFFO0FBQ25CLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsb0JBQW9CLEVBQUU7QUFDaEMsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLFlBQVksRUFBRTtBQUN0QixVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsVUFBVSxFQUFFO0FBQ3RCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxNQUFNLEVBQUU7QUFDbEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksc0JBQXNCLEVBQUUsSUFBSTtBQUN4QyxXQUFXO0FBQ1gsVUFBVSxTQUFTLEVBQUU7QUFDckIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxzQkFBc0IsRUFBRSxJQUFJO0FBQ3hDLFdBQVc7QUFDWCxVQUFVLFVBQVUsRUFBRTtBQUN0QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxzQkFBc0IsRUFBRSxJQUFJO0FBQ3hDLFdBQVc7QUFDWCxVQUFVLE1BQU0sRUFBRTtBQUNsQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxzQkFBc0IsRUFBRSxJQUFJO0FBQ3hDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxhQUFhLEVBQUU7QUFDdkIsVUFBVSxVQUFVLEVBQUU7QUFDdEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsUUFBUSxFQUFFO0FBQ3BCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxTQUFTLEVBQUU7QUFDckIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxTQUFTLEVBQUU7QUFDbkIsVUFBVSxtQkFBbUIsRUFBRTtBQUMvQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsaUJBQWlCLEVBQUU7QUFDN0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLGlCQUFpQixFQUFFO0FBQzdCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxvQkFBb0IsRUFBRTtBQUNoQyxZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsYUFBYSxFQUFFO0FBQ3pCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxtQkFBbUIsRUFBRTtBQUMvQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsaUJBQWlCLEVBQUU7QUFDN0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUU7QUFDcEIsVUFBVSxZQUFZLEVBQUU7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLG1CQUFtQixFQUFFO0FBQy9CLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxTQUFTLEVBQUU7QUFDckIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxTQUFTLEVBQUU7QUFDbkIsVUFBVSxPQUFPLEVBQUU7QUFDbkIsWUFBWSxPQUFPLEVBQUU7QUFDckIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGFBQWE7QUFDYixZQUFZLEtBQUssRUFBRTtBQUNuQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsYUFBYTtBQUNiLFlBQVksZUFBZSxFQUFFO0FBQzdCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixhQUFhO0FBQ2IsWUFBWSxRQUFRLEVBQUU7QUFDdEIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGFBQWE7QUFDYixZQUFZLEtBQUssRUFBRTtBQUNuQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsYUFBYTtBQUNiLFdBQVc7QUFDWCxVQUFVLFNBQVMsRUFBRTtBQUNyQixZQUFZLEtBQUssRUFBRTtBQUNuQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsYUFBYTtBQUNiLFlBQVksZUFBZSxFQUFFO0FBQzdCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixhQUFhO0FBQ2IsV0FBVztBQUNYLFVBQVUsTUFBTSxFQUFFO0FBQ2xCLFlBQVksT0FBTyxFQUFFO0FBQ3JCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixhQUFhO0FBQ2IsWUFBWSxLQUFLLEVBQUU7QUFDbkIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGFBQWE7QUFDYixZQUFZLGVBQWUsRUFBRTtBQUM3QixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsYUFBYTtBQUNiLFlBQVksUUFBUSxFQUFFO0FBQ3RCLGNBQWMsU0FBUyxFQUFFLENBQUM7QUFDMUIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixhQUFhO0FBQ2IsWUFBWSxLQUFLLEVBQUU7QUFDbkIsY0FBYyxTQUFTLEVBQUUsQ0FBQztBQUMxQixjQUFjLFNBQVMsRUFBRSxDQUFDO0FBQzFCLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsTUFBTSxFQUFFO0FBQ2hCLFVBQVUsbUJBQW1CLEVBQUU7QUFDL0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFNBQVMsRUFBRTtBQUNyQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsV0FBVyxFQUFFO0FBQ3ZCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxlQUFlLEVBQUU7QUFDM0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsWUFBWSxFQUFFO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxTQUFTLEVBQUU7QUFDckIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLGlCQUFpQixFQUFFO0FBQzdCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFdBQVcsRUFBRTtBQUN2QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsV0FBVyxFQUFFO0FBQ3ZCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxXQUFXLEVBQUU7QUFDdkIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLE1BQU0sRUFBRTtBQUNsQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsT0FBTyxFQUFFO0FBQ25CLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsV0FBVyxFQUFFO0FBQ3ZCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxhQUFhLEVBQUU7QUFDekIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFNBQVMsRUFBRTtBQUNyQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsaUJBQWlCLEVBQUU7QUFDN0IsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLFVBQVUsRUFBRTtBQUNwQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLGVBQWUsRUFBRTtBQUN6QixVQUFVLGNBQWMsRUFBRTtBQUMxQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsVUFBVSxFQUFFO0FBQ3RCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsWUFBWSxFQUFFO0FBQ3RCLFVBQVUsd0JBQXdCLEVBQUU7QUFDcEMsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxTQUFTLEVBQUU7QUFDbkIsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFVBQVUsUUFBUSxFQUFFO0FBQ3BCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxZQUFZLEVBQUU7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLGdCQUFnQixFQUFFO0FBQzVCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxRQUFRLEVBQUU7QUFDcEIsWUFBWSxTQUFTLEVBQUUsQ0FBQztBQUN4QixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFdBQVc7QUFDWCxVQUFVLFFBQVEsRUFBRTtBQUNwQixZQUFZLFNBQVMsRUFBRSxDQUFDO0FBQ3hCLFlBQVksU0FBUyxFQUFFLENBQUM7QUFDeEIsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUjtBQUNBLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDakQsUUFBUSxNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7QUFDdkYsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxjQUFjLFNBQVMsT0FBTyxDQUFDO0FBQzNDLFFBQVEsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLEdBQUcsU0FBUyxFQUFFO0FBQ25ELFVBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLFVBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDdkMsU0FBUztBQUNUO0FBQ0EsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ2pCLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDOUIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEQsV0FBVztBQUNYO0FBQ0EsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJO0FBQ2xDLFFBQVEsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDdEYsT0FBTyxDQUFDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxLQUFLO0FBQ2xELFFBQVEsT0FBTyxDQUFDLEdBQUcsWUFBWSxLQUFLO0FBQ3BDLFVBQVUsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUMvQyxZQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1RCxXQUFXLE1BQU0sSUFBSSxRQUFRLENBQUMsaUJBQWlCLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLGlCQUFpQixLQUFLLEtBQUssRUFBRTtBQUNySCxZQUFZLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsV0FBVyxNQUFNO0FBQ2pCLFlBQVksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxXQUFXO0FBQ1gsU0FBUyxDQUFDO0FBQ1YsT0FBTyxDQUFDO0FBQ1I7QUFDQSxNQUFNLE1BQU0sa0JBQWtCLEdBQUcsT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQ3BELFFBQVEsT0FBTyxTQUFTLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRTtBQUM5RCxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFO0FBQzlDLFlBQVksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9JLFdBQVc7QUFDWDtBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUU7QUFDOUMsWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUksV0FBVztBQUNYO0FBQ0EsVUFBVSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sS0FBSztBQUNsRCxZQUFZLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGNBQWMsSUFBSTtBQUNsQixnQkFBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLFlBQVksQ0FBQztBQUNuRCxrQkFBa0IsT0FBTztBQUN6QixrQkFBa0IsTUFBTTtBQUN4QixpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGVBQWUsQ0FBQyxPQUFPLE9BQU8sRUFBRTtBQUNoQyxnQkFBZ0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLDREQUE0RCxDQUFDLEdBQUcsOENBQThDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUosZ0JBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3RDO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztBQUN0RCxnQkFBZ0IsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDM0MsZ0JBQWdCLE9BQU8sRUFBRSxDQUFDO0FBQzFCLGVBQWU7QUFDZixhQUFhLE1BQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO0FBQzVDLGNBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDcEMsY0FBYyxPQUFPLEVBQUUsQ0FBQztBQUN4QixhQUFhLE1BQU07QUFDbkIsY0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsWUFBWSxDQUFDO0FBQ2pELGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixNQUFNO0FBQ3RCLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzVCLGFBQWE7QUFDYixXQUFXLENBQUMsQ0FBQztBQUNiLFNBQVMsQ0FBQztBQUNWLE9BQU8sQ0FBQztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sS0FBSztBQUN0RCxRQUFRLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFVBQVUsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzdDLFlBQVksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMxRCxXQUFXO0FBQ1g7QUFDQSxTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU8sQ0FBQztBQUNSO0FBQ0EsTUFBTSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSxLQUFLO0FBQ25FLFFBQVEsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxRQUFRLElBQUksUUFBUSxHQUFHO0FBQ3ZCLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFDakMsWUFBWSxPQUFPLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQztBQUNuRCxXQUFXO0FBQ1g7QUFDQSxVQUFVLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUMzQyxZQUFZLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtBQUMvQixjQUFjLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLFlBQVksSUFBSSxFQUFFLElBQUksSUFBSSxNQUFNLENBQUMsRUFBRTtBQUNuQyxjQUFjLE9BQU8sU0FBUyxDQUFDO0FBQy9CLGFBQWE7QUFDYjtBQUNBLFlBQVksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDO0FBQ0EsWUFBWSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTtBQUM3QztBQUNBO0FBQ0EsY0FBYyxJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN4RDtBQUNBLGdCQUFnQixLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekUsZUFBZSxNQUFNLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtBQUN6RDtBQUNBO0FBQ0EsZ0JBQWdCLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RSxnQkFBZ0IsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xFLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLGVBQWU7QUFDZixhQUFhLE1BQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRTtBQUMxSTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4RSxhQUFhLE1BQU0sSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ3REO0FBQ0EsY0FBYyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkUsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQSxjQUFjLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUNqRCxnQkFBZ0IsWUFBWSxFQUFFLElBQUk7QUFDbEMsZ0JBQWdCLFVBQVUsRUFBRSxJQUFJO0FBQ2hDO0FBQ0EsZ0JBQWdCLEdBQUcsR0FBRztBQUN0QixrQkFBa0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDM0Isa0JBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDdkMsaUJBQWlCO0FBQ2pCO0FBQ0EsZUFBZSxDQUFDLENBQUM7QUFDakIsY0FBYyxPQUFPLEtBQUssQ0FBQztBQUMzQixhQUFhO0FBQ2I7QUFDQSxZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDaEMsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixXQUFXO0FBQ1g7QUFDQSxVQUFVLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDbEQsWUFBWSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7QUFDL0IsY0FBYyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLGFBQWEsTUFBTTtBQUNuQixjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkMsYUFBYTtBQUNiO0FBQ0EsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixXQUFXO0FBQ1g7QUFDQSxVQUFVLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNsRCxZQUFZLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdELFdBQVc7QUFDWDtBQUNBLFVBQVUsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFDNUMsWUFBWSxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFdBQVc7QUFDWDtBQUNBLFNBQVMsQ0FBQztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELFFBQVEsT0FBTyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxVQUFVLEtBQUs7QUFDdkMsUUFBUSxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksRUFBRTtBQUMvQyxVQUFVLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2hFLFNBQVM7QUFDVDtBQUNBLFFBQVEsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDdEMsVUFBVSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzlELFNBQVM7QUFDVDtBQUNBLFFBQVEsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDekMsVUFBVSxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMxRCxTQUFTO0FBQ1Q7QUFDQSxPQUFPLENBQUMsQ0FBQztBQUNUO0FBQ0E7QUFDQSxNQUFNLElBQUksb0NBQW9DLEdBQUcsS0FBSyxDQUFDO0FBQ3ZELE1BQU0sTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLElBQUk7QUFDL0QsUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtBQUM1QyxVQUFVLE9BQU8sUUFBUSxDQUFDO0FBQzFCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsT0FBTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtBQUNqRSxVQUFVLElBQUksbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0FBQzFDLFVBQVUsSUFBSSxtQkFBbUIsQ0FBQztBQUNsQyxVQUFVLElBQUksbUJBQW1CLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJO0FBQzNELFlBQVksbUJBQW1CLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDdEQsY0FBYyxJQUFJLENBQUMsb0NBQW9DLEVBQUU7QUFDekQsZ0JBQWdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRixnQkFBZ0Isb0NBQW9DLEdBQUcsSUFBSSxDQUFDO0FBQzVELGVBQWU7QUFDZjtBQUNBLGNBQWMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ3pDLGNBQWMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLGFBQWEsQ0FBQztBQUNkLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsVUFBVSxJQUFJLE1BQU0sQ0FBQztBQUNyQjtBQUNBLFVBQVUsSUFBSTtBQUNkLFlBQVksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDcEUsV0FBVyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ3hCLFlBQVksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsV0FBVztBQUNYO0FBQ0EsVUFBVSxNQUFNLGdCQUFnQixHQUFHLE1BQU0sS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUM1RSxZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNLGtCQUFrQixHQUFHLE9BQU8sSUFBSTtBQUNoRCxZQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQ2hDO0FBQ0EsY0FBYyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsYUFBYSxFQUFFLEtBQUssSUFBSTtBQUN4QjtBQUNBO0FBQ0EsY0FBYyxJQUFJLE9BQU8sQ0FBQztBQUMxQjtBQUNBLGNBQWMsSUFBSSxLQUFLLEtBQUssS0FBSyxZQUFZLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEVBQUU7QUFDMUYsZ0JBQWdCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ3hDLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsT0FBTyxHQUFHLDhCQUE4QixDQUFDO0FBQ3pELGVBQWU7QUFDZjtBQUNBLGNBQWMsWUFBWSxDQUFDO0FBQzNCLGdCQUFnQixpQ0FBaUMsRUFBRSxJQUFJO0FBQ3ZELGdCQUFnQixPQUFPO0FBQ3ZCLGVBQWUsQ0FBQyxDQUFDO0FBQ2pCLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUk7QUFDNUI7QUFDQSxjQUFjLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUUsYUFBYSxDQUFDLENBQUM7QUFDZixXQUFXLENBQUM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSSxnQkFBZ0IsRUFBRTtBQUNoQyxZQUFZLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFdBQVcsTUFBTTtBQUNqQixZQUFZLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsV0FBVztBQUNYO0FBQ0E7QUFDQSxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3RCLFNBQVMsQ0FBQztBQUNWLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQSxNQUFNLE1BQU0sMEJBQTBCLEdBQUcsQ0FBQztBQUMxQyxRQUFRLE1BQU07QUFDZCxRQUFRLE9BQU87QUFDZixPQUFPLEVBQUUsS0FBSyxLQUFLO0FBQ25CLFFBQVEsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxLQUFLLGdEQUFnRCxFQUFFO0FBQzVHLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsV0FBVyxNQUFNO0FBQ2pCLFlBQVksTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsV0FBVztBQUNYLFNBQVMsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsaUNBQWlDLEVBQUU7QUFDckU7QUFDQTtBQUNBLFVBQVUsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFNBQVMsTUFBTTtBQUNmLFVBQVUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUjtBQUNBLE1BQU0sTUFBTSxrQkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxLQUFLO0FBQy9FLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUU7QUFDNUMsVUFBVSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0ksU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRTtBQUM1QyxVQUFVLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1SSxTQUFTO0FBQ1Q7QUFDQSxRQUFRLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxLQUFLO0FBQ2hELFVBQVUsTUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNsRSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLFVBQVUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQy9DLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTyxDQUFDO0FBQ1I7QUFDQSxNQUFNLE1BQU0sY0FBYyxHQUFHO0FBQzdCLFFBQVEsT0FBTyxFQUFFO0FBQ2pCLFVBQVUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNqRCxVQUFVLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN6RCxVQUFVLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtBQUNwRSxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsV0FBVyxDQUFDO0FBQ1osU0FBUztBQUNULFFBQVEsSUFBSSxFQUFFO0FBQ2QsVUFBVSxXQUFXLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDcEUsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFdBQVcsQ0FBQztBQUNaLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUixNQUFNLE1BQU0sZUFBZSxHQUFHO0FBQzlCLFFBQVEsS0FBSyxFQUFFO0FBQ2YsVUFBVSxPQUFPLEVBQUUsQ0FBQztBQUNwQixVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLFNBQVM7QUFDVCxRQUFRLEdBQUcsRUFBRTtBQUNiLFVBQVUsT0FBTyxFQUFFLENBQUM7QUFDcEIsVUFBVSxPQUFPLEVBQUUsQ0FBQztBQUNwQixTQUFTO0FBQ1QsUUFBUSxHQUFHLEVBQUU7QUFDYixVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLFVBQVUsT0FBTyxFQUFFLENBQUM7QUFDcEIsU0FBUztBQUNULE9BQU8sQ0FBQztBQUNSLE1BQU0sV0FBVyxDQUFDLE9BQU8sR0FBRztBQUM1QixRQUFRLE9BQU8sRUFBRTtBQUNqQixVQUFVLEdBQUcsRUFBRSxlQUFlO0FBQzlCLFNBQVM7QUFDVCxRQUFRLFFBQVEsRUFBRTtBQUNsQixVQUFVLEdBQUcsRUFBRSxlQUFlO0FBQzlCLFNBQVM7QUFDVCxRQUFRLFFBQVEsRUFBRTtBQUNsQixVQUFVLEdBQUcsRUFBRSxlQUFlO0FBQzlCLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUixNQUFNLE9BQU8sVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDcEUsS0FBSyxDQUFDO0FBQ047QUFDQSxJQUFJLElBQUksT0FBTyxNQUFNLElBQUksUUFBUSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3ZGLE1BQU0sTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0FBQ25GLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsTUFBTTtBQUNULElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDN0IsR0FBRztBQUNILENBQUMsQ0FBQyxDQUFDOzs7O0FDcHRDSDtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDIn0=
