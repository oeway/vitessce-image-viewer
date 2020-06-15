module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/core");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@luma.gl/constants");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/layers");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("zarr");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/get");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@luma.gl/core");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("quickselect");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("threads");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/geo-layers");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/react");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("txml");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("pako/lib/inflate");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(14)
var url = __webpack_require__(21)

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(31)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 71);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\n\n\n/***/ }),\n/* 1 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return $errors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return $events; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return $terminate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return $transferable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return $worker; });\nconst $errors = Symbol(\"thread.errors\");\nconst $events = Symbol(\"thread.events\");\nconst $terminate = Symbol(\"thread.terminate\");\nconst $transferable = Symbol(\"thread.transferable\");\nconst $worker = Symbol(\"thread.worker\");\n\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports) {\n\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */\n\n/**\n * This is the web browser implementation of `debug()`.\n */\n\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\nexports.storage = localstorage();\n\n/**\n * Colors.\n */\n\nexports.colors = [\n\t'#0000CC',\n\t'#0000FF',\n\t'#0033CC',\n\t'#0033FF',\n\t'#0066CC',\n\t'#0066FF',\n\t'#0099CC',\n\t'#0099FF',\n\t'#00CC00',\n\t'#00CC33',\n\t'#00CC66',\n\t'#00CC99',\n\t'#00CCCC',\n\t'#00CCFF',\n\t'#3300CC',\n\t'#3300FF',\n\t'#3333CC',\n\t'#3333FF',\n\t'#3366CC',\n\t'#3366FF',\n\t'#3399CC',\n\t'#3399FF',\n\t'#33CC00',\n\t'#33CC33',\n\t'#33CC66',\n\t'#33CC99',\n\t'#33CCCC',\n\t'#33CCFF',\n\t'#6600CC',\n\t'#6600FF',\n\t'#6633CC',\n\t'#6633FF',\n\t'#66CC00',\n\t'#66CC33',\n\t'#9900CC',\n\t'#9900FF',\n\t'#9933CC',\n\t'#9933FF',\n\t'#99CC00',\n\t'#99CC33',\n\t'#CC0000',\n\t'#CC0033',\n\t'#CC0066',\n\t'#CC0099',\n\t'#CC00CC',\n\t'#CC00FF',\n\t'#CC3300',\n\t'#CC3333',\n\t'#CC3366',\n\t'#CC3399',\n\t'#CC33CC',\n\t'#CC33FF',\n\t'#CC6600',\n\t'#CC6633',\n\t'#CC9900',\n\t'#CC9933',\n\t'#CCCC00',\n\t'#CCCC33',\n\t'#FF0000',\n\t'#FF0033',\n\t'#FF0066',\n\t'#FF0099',\n\t'#FF00CC',\n\t'#FF00FF',\n\t'#FF3300',\n\t'#FF3333',\n\t'#FF3366',\n\t'#FF3399',\n\t'#FF33CC',\n\t'#FF33FF',\n\t'#FF6600',\n\t'#FF6633',\n\t'#FF9900',\n\t'#FF9933',\n\t'#FFCC00',\n\t'#FFCC33'\n];\n\n/**\n * Currently only WebKit-based Web Inspectors, Firefox >= v31,\n * and the Firebug extension (any Firefox version) are known\n * to support \"%c\" CSS customizations.\n *\n * TODO: add a `localStorage` variable to explicitly enable/disable colors\n */\n\n// eslint-disable-next-line complexity\nfunction useColors() {\n\t// NB: In an Electron preload script, document will be defined but not fully\n\t// initialized. Since we know we're in Chrome, we'll just detect this case\n\t// explicitly\n\tif (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {\n\t\treturn true;\n\t}\n\n\t// Internet Explorer and Edge do not support colors.\n\tif (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {\n\t\treturn false;\n\t}\n\n\t// Is webkit? http://stackoverflow.com/a/16459606/376773\n\t// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632\n\treturn (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||\n\t\t// Is firebug? http://stackoverflow.com/a/398120/376773\n\t\t(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||\n\t\t// Is firefox >= v31?\n\t\t// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages\n\t\t(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||\n\t\t// Double check webkit in userAgent just in case we are in a worker\n\t\t(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/));\n}\n\n/**\n * Colorize log arguments if enabled.\n *\n * @api public\n */\n\nfunction formatArgs(args) {\n\targs[0] = (this.useColors ? '%c' : '') +\n\t\tthis.namespace +\n\t\t(this.useColors ? ' %c' : ' ') +\n\t\targs[0] +\n\t\t(this.useColors ? '%c ' : ' ') +\n\t\t'+' + module.exports.humanize(this.diff);\n\n\tif (!this.useColors) {\n\t\treturn;\n\t}\n\n\tconst c = 'color: ' + this.color;\n\targs.splice(1, 0, c, 'color: inherit');\n\n\t// The final \"%c\" is somewhat tricky, because there could be other\n\t// arguments passed either before or after the %c, so we need to\n\t// figure out the correct index to insert the CSS into\n\tlet index = 0;\n\tlet lastC = 0;\n\targs[0].replace(/%[a-zA-Z%]/g, match => {\n\t\tif (match === '%%') {\n\t\t\treturn;\n\t\t}\n\t\tindex++;\n\t\tif (match === '%c') {\n\t\t\t// We only are interested in the *last* %c\n\t\t\t// (the user may have provided their own)\n\t\t\tlastC = index;\n\t\t}\n\t});\n\n\targs.splice(lastC, 0, c);\n}\n\n/**\n * Invokes `console.log()` when available.\n * No-op when `console.log` is not a \"function\".\n *\n * @api public\n */\nfunction log(...args) {\n\t// This hackery is required for IE8/9, where\n\t// the `console.log` function doesn't have 'apply'\n\treturn typeof console === 'object' &&\n\t\tconsole.log &&\n\t\tconsole.log(...args);\n}\n\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\nfunction save(namespaces) {\n\ttry {\n\t\tif (namespaces) {\n\t\t\texports.storage.setItem('debug', namespaces);\n\t\t} else {\n\t\t\texports.storage.removeItem('debug');\n\t\t}\n\t} catch (error) {\n\t\t// Swallow\n\t\t// XXX (@Qix-) should we be logging these?\n\t}\n}\n\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\nfunction load() {\n\tlet r;\n\ttry {\n\t\tr = exports.storage.getItem('debug');\n\t} catch (error) {\n\t\t// Swallow\n\t\t// XXX (@Qix-) should we be logging these?\n\t}\n\n\t// If debug isn't set in LS, and we're in Electron, try to load $DEBUG\n\tif (!r && typeof process !== 'undefined' && 'env' in process) {\n\t\tr = process.env.DEBUG;\n\t}\n\n\treturn r;\n}\n\n/**\n * Localstorage attempts to return the localstorage.\n *\n * This is necessary because safari throws\n * when a user disables cookies/localstorage\n * and you attempt to access it.\n *\n * @return {LocalStorage}\n * @api private\n */\n\nfunction localstorage() {\n\ttry {\n\t\t// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context\n\t\t// The Browser also has localStorage in the global context.\n\t\treturn localStorage;\n\t} catch (error) {\n\t\t// Swallow\n\t\t// XXX (@Qix-) should we be logging these?\n\t}\n}\n\nmodule.exports = __webpack_require__(63)(exports);\n\nconst {formatters} = module.exports;\n\n/**\n * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.\n */\n\nformatters.j = function (v) {\n\ttry {\n\t\treturn JSON.stringify(v);\n\t} catch (error) {\n\t\treturn '[UnexpectedJSONParseError]: ' + error.message;\n\t}\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 4 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, \"a\", function() { return /* binding */ deserialize; });\n__webpack_require__.d(__webpack_exports__, \"b\", function() { return /* binding */ serialize; });\n\n// UNUSED EXPORTS: registerSerializer\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/serializers.js\nfunction extendSerializer(extend, implementation) {\n    const fallbackDeserializer = extend.deserialize.bind(extend);\n    const fallbackSerializer = extend.serialize.bind(extend);\n    return {\n        deserialize(message) {\n            return implementation.deserialize(message, fallbackDeserializer);\n        },\n        serialize(input) {\n            return implementation.serialize(input, fallbackSerializer);\n        }\n    };\n}\nconst DefaultErrorSerializer = {\n    deserialize(message) {\n        return Object.assign(Error(message.message), {\n            name: message.name,\n            stack: message.stack\n        });\n    },\n    serialize(error) {\n        return {\n            __error_marker: \"$$error\",\n            message: error.message,\n            name: error.name,\n            stack: error.stack\n        };\n    }\n};\nconst isSerializedError = (thing) => thing && typeof thing === \"object\" && \"__error_marker\" in thing && thing.__error_marker === \"$$error\";\nconst DefaultSerializer = {\n    deserialize(message) {\n        if (isSerializedError(message)) {\n            return DefaultErrorSerializer.deserialize(message);\n        }\n        else {\n            return message;\n        }\n    },\n    serialize(input) {\n        if (input instanceof Error) {\n            return DefaultErrorSerializer.serialize(input);\n        }\n        else {\n            return input;\n        }\n    }\n};\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/common.js\n\nlet registeredSerializer = DefaultSerializer;\nfunction registerSerializer(serializer) {\n    registeredSerializer = extendSerializer(registeredSerializer, serializer);\n}\nfunction deserialize(message) {\n    return registeredSerializer.deserialize(message);\n}\nfunction serialize(input) {\n    return registeredSerializer.serialize(input);\n}\n\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nvar codes = {};\n\nfunction createErrorType(code, message, Base) {\n  if (!Base) {\n    Base = Error;\n  }\n\n  function getMessage(arg1, arg2, arg3) {\n    if (typeof message === 'string') {\n      return message;\n    } else {\n      return message(arg1, arg2, arg3);\n    }\n  }\n\n  var NodeError =\n  /*#__PURE__*/\n  function (_Base) {\n    _inheritsLoose(NodeError, _Base);\n\n    function NodeError(arg1, arg2, arg3) {\n      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;\n    }\n\n    return NodeError;\n  }(Base);\n\n  NodeError.prototype.name = Base.name;\n  NodeError.prototype.code = code;\n  codes[code] = NodeError;\n} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js\n\n\nfunction oneOf(expected, thing) {\n  if (Array.isArray(expected)) {\n    var len = expected.length;\n    expected = expected.map(function (i) {\n      return String(i);\n    });\n\n    if (len > 2) {\n      return \"one of \".concat(thing, \" \").concat(expected.slice(0, len - 1).join(', '), \", or \") + expected[len - 1];\n    } else if (len === 2) {\n      return \"one of \".concat(thing, \" \").concat(expected[0], \" or \").concat(expected[1]);\n    } else {\n      return \"of \".concat(thing, \" \").concat(expected[0]);\n    }\n  } else {\n    return \"of \".concat(thing, \" \").concat(String(expected));\n  }\n} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith\n\n\nfunction startsWith(str, search, pos) {\n  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;\n} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith\n\n\nfunction endsWith(str, search, this_len) {\n  if (this_len === undefined || this_len > str.length) {\n    this_len = str.length;\n  }\n\n  return str.substring(this_len - search.length, this_len) === search;\n} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes\n\n\nfunction includes(str, search, start) {\n  if (typeof start !== 'number') {\n    start = 0;\n  }\n\n  if (start + search.length > str.length) {\n    return false;\n  } else {\n    return str.indexOf(search, start) !== -1;\n  }\n}\n\ncreateErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {\n  return 'The value \"' + value + '\" is invalid for option \"' + name + '\"';\n}, TypeError);\ncreateErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {\n  // determiner: 'must be' or 'must not be'\n  var determiner;\n\n  if (typeof expected === 'string' && startsWith(expected, 'not ')) {\n    determiner = 'must not be';\n    expected = expected.replace(/^not /, '');\n  } else {\n    determiner = 'must be';\n  }\n\n  var msg;\n\n  if (endsWith(name, ' argument')) {\n    // For cases like 'first argument'\n    msg = \"The \".concat(name, \" \").concat(determiner, \" \").concat(oneOf(expected, 'type'));\n  } else {\n    var type = includes(name, '.') ? 'property' : 'argument';\n    msg = \"The \\\"\".concat(name, \"\\\" \").concat(type, \" \").concat(determiner, \" \").concat(oneOf(expected, 'type'));\n  }\n\n  msg += \". Received type \".concat(typeof actual);\n  return msg;\n}, TypeError);\ncreateErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');\ncreateErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {\n  return 'The ' + name + ' method is not implemented';\n});\ncreateErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');\ncreateErrorType('ERR_STREAM_DESTROYED', function (name) {\n  return 'Cannot call ' + name + ' after a stream was destroyed';\n});\ncreateErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');\ncreateErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');\ncreateErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');\ncreateErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);\ncreateErrorType('ERR_UNKNOWN_ENCODING', function (arg) {\n  return 'Unknown encoding: ' + arg;\n}, TypeError);\ncreateErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');\nmodule.exports.codes = codes;\n\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// a duplex stream is just a stream that is both readable and writable.\n// Since JS doesn't have multiple prototypal inheritance, this class\n// prototypally inherits from Readable, and then parasitically from\n// Writable.\n\n/*<replacement>*/\n\nvar objectKeys = Object.keys || function (obj) {\n  var keys = [];\n\n  for (var key in obj) {\n    keys.push(key);\n  }\n\n  return keys;\n};\n/*</replacement>*/\n\n\nmodule.exports = Duplex;\n\nvar Readable = __webpack_require__(18);\n\nvar Writable = __webpack_require__(23);\n\n__webpack_require__(7)(Duplex, Readable);\n\n{\n  // Allow the keys array to be GC'ed.\n  var keys = objectKeys(Writable.prototype);\n\n  for (var v = 0; v < keys.length; v++) {\n    var method = keys[v];\n    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];\n  }\n}\n\nfunction Duplex(options) {\n  if (!(this instanceof Duplex)) return new Duplex(options);\n  Readable.call(this, options);\n  Writable.call(this, options);\n  this.allowHalfOpen = true;\n\n  if (options) {\n    if (options.readable === false) this.readable = false;\n    if (options.writable === false) this.writable = false;\n\n    if (options.allowHalfOpen === false) {\n      this.allowHalfOpen = false;\n      this.once('end', onend);\n    }\n  }\n}\n\nObject.defineProperty(Duplex.prototype, 'writableHighWaterMark', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._writableState.highWaterMark;\n  }\n});\nObject.defineProperty(Duplex.prototype, 'writableBuffer', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._writableState && this._writableState.getBuffer();\n  }\n});\nObject.defineProperty(Duplex.prototype, 'writableLength', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._writableState.length;\n  }\n}); // the no-half-open enforcer\n\nfunction onend() {\n  // If the writable side ended, then we're ok.\n  if (this._writableState.ended) return; // no more data can be written.\n  // But allow more writes to happen in this tick.\n\n  process.nextTick(onEndNT, this);\n}\n\nfunction onEndNT(self) {\n  self.end();\n}\n\nObject.defineProperty(Duplex.prototype, 'destroyed', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    if (this._readableState === undefined || this._writableState === undefined) {\n      return false;\n    }\n\n    return this._readableState.destroyed && this._writableState.destroyed;\n  },\n  set: function set(value) {\n    // we ignore the value if the stream\n    // has not been initialized yet\n    if (this._readableState === undefined || this._writableState === undefined) {\n      return;\n    } // backward compatibility, the user is explicitly\n    // managing destroyed\n\n\n    this._readableState.destroyed = value;\n    this._writableState.destroyed = value;\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 7 */\n/***/ (function(module, exports) {\n\nif (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      ctor.prototype = Object.create(superCtor.prototype, {\n        constructor: {\n          value: ctor,\n          enumerable: false,\n          writable: true,\n          configurable: true\n        }\n      })\n    }\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      var TempCtor = function () {}\n      TempCtor.prototype = superCtor.prototype\n      ctor.prototype = new TempCtor()\n      ctor.prototype.constructor = ctor\n    }\n  }\n}\n\n\n/***/ }),\n/* 8 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n\n// UNUSED EXPORTS: Subscription, SubscriptionObserver, Observable\n\n// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/_symbols.js\nconst hasSymbols = () => typeof Symbol === \"function\";\nconst hasSymbol = (name) => hasSymbols() && Boolean(Symbol[name]);\nconst getSymbol = (name) => hasSymbol(name) ? Symbol[name] : \"@@\" + name;\nfunction registerObservableSymbol() {\n    if (hasSymbols() && !hasSymbol(\"observable\")) {\n        Symbol.observable = Symbol(\"observable\");\n    }\n}\nif (!hasSymbol(\"asyncIterator\")) {\n    Symbol.asyncIterator = Symbol.asyncIterator || Symbol.for(\"Symbol.asyncIterator\");\n}\n\n// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/observable.js\n/**\n * Based on <https://raw.githubusercontent.com/zenparsing/zen-observable/master/src/Observable.js>\n * At commit: f63849a8c60af5d514efc8e9d6138d8273c49ad6\n */\n/// <reference path=\"../types/symbols.d.ts\" />\n\nconst SymbolIterator = getSymbol(\"iterator\");\nconst SymbolObservable = getSymbol(\"observable\");\nconst SymbolSpecies = getSymbol(\"species\");\n// === Abstract Operations ===\nfunction getMethod(obj, key) {\n    const value = obj[key];\n    if (value == null) {\n        return undefined;\n    }\n    if (typeof value !== \"function\") {\n        throw new TypeError(value + \" is not a function\");\n    }\n    return value;\n}\nfunction getSpecies(obj) {\n    let ctor = obj.constructor;\n    if (ctor !== undefined) {\n        ctor = ctor[SymbolSpecies];\n        if (ctor === null) {\n            ctor = undefined;\n        }\n    }\n    return ctor !== undefined ? ctor : observable_Observable;\n}\nfunction isObservable(x) {\n    return x instanceof observable_Observable; // SPEC: Brand check\n}\nfunction hostReportError(error) {\n    if (hostReportError.log) {\n        hostReportError.log(error);\n    }\n    else {\n        setTimeout(() => { throw error; }, 0);\n    }\n}\nfunction enqueue(fn) {\n    Promise.resolve().then(() => {\n        try {\n            fn();\n        }\n        catch (e) {\n            hostReportError(e);\n        }\n    });\n}\nfunction cleanupSubscription(subscription) {\n    const cleanup = subscription._cleanup;\n    if (cleanup === undefined) {\n        return;\n    }\n    subscription._cleanup = undefined;\n    if (!cleanup) {\n        return;\n    }\n    try {\n        if (typeof cleanup === \"function\") {\n            cleanup();\n        }\n        else {\n            const unsubscribe = getMethod(cleanup, \"unsubscribe\");\n            if (unsubscribe) {\n                unsubscribe.call(cleanup);\n            }\n        }\n    }\n    catch (e) {\n        hostReportError(e);\n    }\n}\nfunction closeSubscription(subscription) {\n    subscription._observer = undefined;\n    subscription._queue = undefined;\n    subscription._state = \"closed\";\n}\nfunction flushSubscription(subscription) {\n    const queue = subscription._queue;\n    if (!queue) {\n        return;\n    }\n    subscription._queue = undefined;\n    subscription._state = \"ready\";\n    for (const item of queue) {\n        notifySubscription(subscription, item.type, item.value);\n        if (subscription._state === \"closed\") {\n            break;\n        }\n    }\n}\nfunction notifySubscription(subscription, type, value) {\n    subscription._state = \"running\";\n    const observer = subscription._observer;\n    try {\n        const m = observer ? getMethod(observer, type) : undefined;\n        switch (type) {\n            case \"next\":\n                if (m)\n                    m.call(observer, value);\n                break;\n            case \"error\":\n                closeSubscription(subscription);\n                if (m)\n                    m.call(observer, value);\n                else\n                    throw value;\n                break;\n            case \"complete\":\n                closeSubscription(subscription);\n                if (m)\n                    m.call(observer);\n                break;\n        }\n    }\n    catch (e) {\n        hostReportError(e);\n    }\n    if (subscription._state === \"closed\") {\n        cleanupSubscription(subscription);\n    }\n    else if (subscription._state === \"running\") {\n        subscription._state = \"ready\";\n    }\n}\nfunction onNotify(subscription, type, value) {\n    if (subscription._state === \"closed\") {\n        return;\n    }\n    if (subscription._state === \"buffering\") {\n        subscription._queue = subscription._queue || [];\n        subscription._queue.push({ type, value });\n        return;\n    }\n    if (subscription._state !== \"ready\") {\n        subscription._state = \"buffering\";\n        subscription._queue = [{ type, value }];\n        enqueue(() => flushSubscription(subscription));\n        return;\n    }\n    notifySubscription(subscription, type, value);\n}\nclass Subscription {\n    constructor(observer, subscriber) {\n        // ASSERT: observer is an object\n        // ASSERT: subscriber is callable\n        this._cleanup = undefined;\n        this._observer = observer;\n        this._queue = undefined;\n        this._state = \"initializing\";\n        const subscriptionObserver = new SubscriptionObserver(this);\n        try {\n            this._cleanup = subscriber.call(undefined, subscriptionObserver);\n        }\n        catch (e) {\n            subscriptionObserver.error(e);\n        }\n        if (this._state === \"initializing\") {\n            this._state = \"ready\";\n        }\n    }\n    get closed() {\n        return this._state === \"closed\";\n    }\n    unsubscribe() {\n        if (this._state !== \"closed\") {\n            closeSubscription(this);\n            cleanupSubscription(this);\n        }\n    }\n}\nclass SubscriptionObserver {\n    constructor(subscription) { this._subscription = subscription; }\n    get closed() { return this._subscription._state === \"closed\"; }\n    next(value) { onNotify(this._subscription, \"next\", value); }\n    error(value) { onNotify(this._subscription, \"error\", value); }\n    complete() { onNotify(this._subscription, \"complete\"); }\n}\n/**\n * The basic Observable class. This primitive is used to wrap asynchronous\n * data streams in a common standardized data type that is interoperable\n * between libraries and can be composed to represent more complex processes.\n */\nclass observable_Observable {\n    constructor(subscriber) {\n        if (!(this instanceof observable_Observable)) {\n            throw new TypeError(\"Observable cannot be called as a function\");\n        }\n        if (typeof subscriber !== \"function\") {\n            throw new TypeError(\"Observable initializer must be a function\");\n        }\n        this._subscriber = subscriber;\n    }\n    subscribe(nextOrObserver, onError, onComplete) {\n        if (typeof nextOrObserver !== \"object\" || nextOrObserver === null) {\n            nextOrObserver = {\n                next: nextOrObserver,\n                error: onError,\n                complete: onComplete\n            };\n        }\n        return new Subscription(nextOrObserver, this._subscriber);\n    }\n    pipe(first, ...mappers) {\n        // tslint:disable-next-line no-this-assignment\n        let intermediate = this;\n        for (const mapper of [first, ...mappers]) {\n            intermediate = mapper(intermediate);\n        }\n        return intermediate;\n    }\n    tap(nextOrObserver, onError, onComplete) {\n        const tapObserver = typeof nextOrObserver !== \"object\" || nextOrObserver === null\n            ? {\n                next: nextOrObserver,\n                error: onError,\n                complete: onComplete\n            }\n            : nextOrObserver;\n        return new observable_Observable(observer => {\n            return this.subscribe({\n                next(value) {\n                    tapObserver.next && tapObserver.next(value);\n                    observer.next(value);\n                },\n                error(error) {\n                    tapObserver.error && tapObserver.error(error);\n                    observer.error(error);\n                },\n                complete() {\n                    tapObserver.complete && tapObserver.complete();\n                    observer.complete();\n                },\n                start(subscription) {\n                    tapObserver.start && tapObserver.start(subscription);\n                }\n            });\n        });\n    }\n    forEach(fn) {\n        return new Promise((resolve, reject) => {\n            if (typeof fn !== \"function\") {\n                reject(new TypeError(fn + \" is not a function\"));\n                return;\n            }\n            function done() {\n                subscription.unsubscribe();\n                resolve();\n            }\n            const subscription = this.subscribe({\n                next(value) {\n                    try {\n                        fn(value, done);\n                    }\n                    catch (e) {\n                        reject(e);\n                        subscription.unsubscribe();\n                    }\n                },\n                error: reject,\n                complete: resolve,\n            });\n        });\n    }\n    map(fn) {\n        if (typeof fn !== \"function\") {\n            throw new TypeError(fn + \" is not a function\");\n        }\n        const C = getSpecies(this);\n        return new C(observer => this.subscribe({\n            next(value) {\n                let propagatedValue = value;\n                try {\n                    propagatedValue = fn(value);\n                }\n                catch (e) {\n                    return observer.error(e);\n                }\n                observer.next(propagatedValue);\n            },\n            error(e) { observer.error(e); },\n            complete() { observer.complete(); },\n        }));\n    }\n    filter(fn) {\n        if (typeof fn !== \"function\") {\n            throw new TypeError(fn + \" is not a function\");\n        }\n        const C = getSpecies(this);\n        return new C(observer => this.subscribe({\n            next(value) {\n                try {\n                    if (!fn(value))\n                        return;\n                }\n                catch (e) {\n                    return observer.error(e);\n                }\n                observer.next(value);\n            },\n            error(e) { observer.error(e); },\n            complete() { observer.complete(); },\n        }));\n    }\n    reduce(fn, seed) {\n        if (typeof fn !== \"function\") {\n            throw new TypeError(fn + \" is not a function\");\n        }\n        const C = getSpecies(this);\n        const hasSeed = arguments.length > 1;\n        let hasValue = false;\n        let acc = seed;\n        return new C(observer => this.subscribe({\n            next(value) {\n                const first = !hasValue;\n                hasValue = true;\n                if (!first || hasSeed) {\n                    try {\n                        acc = fn(acc, value);\n                    }\n                    catch (e) {\n                        return observer.error(e);\n                    }\n                }\n                else {\n                    acc = value;\n                }\n            },\n            error(e) { observer.error(e); },\n            complete() {\n                if (!hasValue && !hasSeed) {\n                    return observer.error(new TypeError(\"Cannot reduce an empty sequence\"));\n                }\n                observer.next(acc);\n                observer.complete();\n            },\n        }));\n    }\n    concat(...sources) {\n        const C = getSpecies(this);\n        return new C(observer => {\n            let subscription;\n            let index = 0;\n            function startNext(next) {\n                subscription = next.subscribe({\n                    next(v) { observer.next(v); },\n                    error(e) { observer.error(e); },\n                    complete() {\n                        if (index === sources.length) {\n                            subscription = undefined;\n                            observer.complete();\n                        }\n                        else {\n                            startNext(C.from(sources[index++]));\n                        }\n                    },\n                });\n            }\n            startNext(this);\n            return () => {\n                if (subscription) {\n                    subscription.unsubscribe();\n                    subscription = undefined;\n                }\n            };\n        });\n    }\n    flatMap(fn) {\n        if (typeof fn !== \"function\") {\n            throw new TypeError(fn + \" is not a function\");\n        }\n        const C = getSpecies(this);\n        return new C(observer => {\n            const subscriptions = [];\n            const outer = this.subscribe({\n                next(value) {\n                    let normalizedValue;\n                    if (fn) {\n                        try {\n                            normalizedValue = fn(value);\n                        }\n                        catch (e) {\n                            return observer.error(e);\n                        }\n                    }\n                    else {\n                        normalizedValue = value;\n                    }\n                    const inner = C.from(normalizedValue).subscribe({\n                        next(innerValue) { observer.next(innerValue); },\n                        error(e) { observer.error(e); },\n                        complete() {\n                            const i = subscriptions.indexOf(inner);\n                            if (i >= 0)\n                                subscriptions.splice(i, 1);\n                            completeIfDone();\n                        },\n                    });\n                    subscriptions.push(inner);\n                },\n                error(e) { observer.error(e); },\n                complete() { completeIfDone(); },\n            });\n            function completeIfDone() {\n                if (outer.closed && subscriptions.length === 0) {\n                    observer.complete();\n                }\n            }\n            return () => {\n                subscriptions.forEach(s => s.unsubscribe());\n                outer.unsubscribe();\n            };\n        });\n    }\n    [SymbolObservable]() { return this; }\n    static from(x) {\n        const C = (typeof this === \"function\" ? this : observable_Observable);\n        if (x == null) {\n            throw new TypeError(x + \" is not an object\");\n        }\n        const observableMethod = getMethod(x, SymbolObservable);\n        if (observableMethod) {\n            const observable = observableMethod.call(x);\n            if (Object(observable) !== observable) {\n                throw new TypeError(observable + \" is not an object\");\n            }\n            if (isObservable(observable) && observable.constructor === C) {\n                return observable;\n            }\n            return new C(observer => observable.subscribe(observer));\n        }\n        if (hasSymbol(\"iterator\")) {\n            const iteratorMethod = getMethod(x, SymbolIterator);\n            if (iteratorMethod) {\n                return new C(observer => {\n                    enqueue(() => {\n                        if (observer.closed)\n                            return;\n                        for (const item of iteratorMethod.call(x)) {\n                            observer.next(item);\n                            if (observer.closed)\n                                return;\n                        }\n                        observer.complete();\n                    });\n                });\n            }\n        }\n        if (Array.isArray(x)) {\n            return new C(observer => {\n                enqueue(() => {\n                    if (observer.closed)\n                        return;\n                    for (const item of x) {\n                        observer.next(item);\n                        if (observer.closed)\n                            return;\n                    }\n                    observer.complete();\n                });\n            });\n        }\n        throw new TypeError(x + \" is not observable\");\n    }\n    static of(...items) {\n        const C = (typeof this === \"function\" ? this : observable_Observable);\n        return new C(observer => {\n            enqueue(() => {\n                if (observer.closed)\n                    return;\n                for (const item of items) {\n                    observer.next(item);\n                    if (observer.closed)\n                        return;\n                }\n                observer.complete();\n            });\n        });\n    }\n    static get [SymbolSpecies]() { return this; }\n}\nif (hasSymbols()) {\n    Object.defineProperty(observable_Observable, Symbol(\"extensions\"), {\n        value: {\n            symbol: SymbolObservable,\n            hostReportError,\n        },\n        configurable: true,\n    });\n}\n/* harmony default export */ var observable = __webpack_exports__[\"a\"] = (observable_Observable);\n\n\n/***/ }),\n/* 9 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return WorkerEventType; });\n/// <reference lib=\"dom\" />\n\n/** Event as emitted by worker thread. Subscribe to using `Thread.events(thread)`. */\nvar WorkerEventType;\n(function (WorkerEventType) {\n    WorkerEventType[\"internalError\"] = \"internalError\";\n    WorkerEventType[\"message\"] = \"message\";\n    WorkerEventType[\"termination\"] = \"termination\";\n})(WorkerEventType || (WorkerEventType = {}));\n\n\n/***/ }),\n/* 10 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MasterMessageType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return WorkerMessageType; });\n/////////////////////////////\n// Messages sent by master:\nvar MasterMessageType;\n(function (MasterMessageType) {\n    MasterMessageType[\"run\"] = \"run\";\n})(MasterMessageType || (MasterMessageType = {}));\n////////////////////////////\n// Messages sent by worker:\nvar WorkerMessageType;\n(function (WorkerMessageType) {\n    WorkerMessageType[\"error\"] = \"error\";\n    WorkerMessageType[\"init\"] = \"init\";\n    WorkerMessageType[\"result\"] = \"result\";\n    WorkerMessageType[\"running\"] = \"running\";\n    WorkerMessageType[\"uncaughtError\"] = \"uncaughtError\";\n})(WorkerMessageType || (WorkerMessageType = {}));\n\n\n/***/ }),\n/* 11 */\n/***/ (function(module, exports) {\n\nvar g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n/***/ }),\n/* 12 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n\nvar TYPED_OK =  (typeof Uint8Array !== 'undefined') &&\n                (typeof Uint16Array !== 'undefined') &&\n                (typeof Int32Array !== 'undefined');\n\nfunction _has(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n}\n\nexports.assign = function (obj /*from1, from2, from3, ...*/) {\n  var sources = Array.prototype.slice.call(arguments, 1);\n  while (sources.length) {\n    var source = sources.shift();\n    if (!source) { continue; }\n\n    if (typeof source !== 'object') {\n      throw new TypeError(source + 'must be non-object');\n    }\n\n    for (var p in source) {\n      if (_has(source, p)) {\n        obj[p] = source[p];\n      }\n    }\n  }\n\n  return obj;\n};\n\n\n// reduce buffer size, avoiding mem copy\nexports.shrinkBuf = function (buf, size) {\n  if (buf.length === size) { return buf; }\n  if (buf.subarray) { return buf.subarray(0, size); }\n  buf.length = size;\n  return buf;\n};\n\n\nvar fnTyped = {\n  arraySet: function (dest, src, src_offs, len, dest_offs) {\n    if (src.subarray && dest.subarray) {\n      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);\n      return;\n    }\n    // Fallback to ordinary array\n    for (var i = 0; i < len; i++) {\n      dest[dest_offs + i] = src[src_offs + i];\n    }\n  },\n  // Join array of chunks to single array.\n  flattenChunks: function (chunks) {\n    var i, l, len, pos, chunk, result;\n\n    // calculate data length\n    len = 0;\n    for (i = 0, l = chunks.length; i < l; i++) {\n      len += chunks[i].length;\n    }\n\n    // join chunks\n    result = new Uint8Array(len);\n    pos = 0;\n    for (i = 0, l = chunks.length; i < l; i++) {\n      chunk = chunks[i];\n      result.set(chunk, pos);\n      pos += chunk.length;\n    }\n\n    return result;\n  }\n};\n\nvar fnUntyped = {\n  arraySet: function (dest, src, src_offs, len, dest_offs) {\n    for (var i = 0; i < len; i++) {\n      dest[dest_offs + i] = src[src_offs + i];\n    }\n  },\n  // Join array of chunks to single array.\n  flattenChunks: function (chunks) {\n    return [].concat.apply([], chunks);\n  }\n};\n\n\n// Enable/Disable typed arrays use, for testing\n//\nexports.setTyped = function (on) {\n  if (on) {\n    exports.Buf8  = Uint8Array;\n    exports.Buf16 = Uint16Array;\n    exports.Buf32 = Int32Array;\n    exports.assign(exports, fnTyped);\n  } else {\n    exports.Buf8  = Array;\n    exports.Buf16 = Array;\n    exports.Buf32 = Array;\n    exports.assign(exports, fnUntyped);\n  }\n};\n\nexports.setTyped(TYPED_OK);\n\n\n/***/ }),\n/* 13 */,\n/* 14 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Ported from https://github.com/mafintosh/end-of-stream with\n// permission from the author, Mathias Buus (@mafintosh).\n\n\nvar ERR_STREAM_PREMATURE_CLOSE = __webpack_require__(5).codes.ERR_STREAM_PREMATURE_CLOSE;\n\nfunction once(callback) {\n  var called = false;\n  return function () {\n    if (called) return;\n    called = true;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    callback.apply(this, args);\n  };\n}\n\nfunction noop() {}\n\nfunction isRequest(stream) {\n  return stream.setHeader && typeof stream.abort === 'function';\n}\n\nfunction eos(stream, opts, callback) {\n  if (typeof opts === 'function') return eos(stream, null, opts);\n  if (!opts) opts = {};\n  callback = once(callback || noop);\n  var readable = opts.readable || opts.readable !== false && stream.readable;\n  var writable = opts.writable || opts.writable !== false && stream.writable;\n\n  var onlegacyfinish = function onlegacyfinish() {\n    if (!stream.writable) onfinish();\n  };\n\n  var writableEnded = stream._writableState && stream._writableState.finished;\n\n  var onfinish = function onfinish() {\n    writable = false;\n    writableEnded = true;\n    if (!readable) callback.call(stream);\n  };\n\n  var readableEnded = stream._readableState && stream._readableState.endEmitted;\n\n  var onend = function onend() {\n    readable = false;\n    readableEnded = true;\n    if (!writable) callback.call(stream);\n  };\n\n  var onerror = function onerror(err) {\n    callback.call(stream, err);\n  };\n\n  var onclose = function onclose() {\n    var err;\n\n    if (readable && !readableEnded) {\n      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();\n      return callback.call(stream, err);\n    }\n\n    if (writable && !writableEnded) {\n      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();\n      return callback.call(stream, err);\n    }\n  };\n\n  var onrequest = function onrequest() {\n    stream.req.on('finish', onfinish);\n  };\n\n  if (isRequest(stream)) {\n    stream.on('complete', onfinish);\n    stream.on('abort', onclose);\n    if (stream.req) onrequest();else stream.on('request', onrequest);\n  } else if (writable && !stream._writableState) {\n    // legacy streams\n    stream.on('end', onlegacyfinish);\n    stream.on('close', onlegacyfinish);\n  }\n\n  stream.on('end', onend);\n  stream.on('finish', onfinish);\n  if (opts.error !== false) stream.on('error', onerror);\n  stream.on('close', onclose);\n  return function () {\n    stream.removeListener('complete', onfinish);\n    stream.removeListener('abort', onclose);\n    stream.removeListener('request', onrequest);\n    if (stream.req) stream.req.removeListener('finish', onfinish);\n    stream.removeListener('end', onlegacyfinish);\n    stream.removeListener('close', onlegacyfinish);\n    stream.removeListener('finish', onfinish);\n    stream.removeListener('end', onend);\n    stream.removeListener('error', onerror);\n    stream.removeListener('close', onclose);\n  };\n}\n\nmodule.exports = eos;\n\n/***/ }),\n/* 15 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar punycode = __webpack_require__(65);\nvar util = __webpack_require__(67);\n\nexports.parse = urlParse;\nexports.resolve = urlResolve;\nexports.resolveObject = urlResolveObject;\nexports.format = urlFormat;\n\nexports.Url = Url;\n\nfunction Url() {\n  this.protocol = null;\n  this.slashes = null;\n  this.auth = null;\n  this.host = null;\n  this.port = null;\n  this.hostname = null;\n  this.hash = null;\n  this.search = null;\n  this.query = null;\n  this.pathname = null;\n  this.path = null;\n  this.href = null;\n}\n\n// Reference: RFC 3986, RFC 1808, RFC 2396\n\n// define these here so at least they only have to be\n// compiled once on the first module load.\nvar protocolPattern = /^([a-z0-9.+-]+:)/i,\n    portPattern = /:[0-9]*$/,\n\n    // Special case for a simple path URL\n    simplePathPattern = /^(\\/\\/?(?!\\/)[^\\?\\s]*)(\\?[^\\s]*)?$/,\n\n    // RFC 2396: characters reserved for delimiting URLs.\n    // We actually just auto-escape these.\n    delims = ['<', '>', '\"', '`', ' ', '\\r', '\\n', '\\t'],\n\n    // RFC 2396: characters not allowed for various reasons.\n    unwise = ['{', '}', '|', '\\\\', '^', '`'].concat(delims),\n\n    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.\n    autoEscape = ['\\''].concat(unwise),\n    // Characters that are never ever allowed in a hostname.\n    // Note that any invalid chars are also handled, but these\n    // are the ones that are *expected* to be seen, so we fast-path\n    // them.\n    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),\n    hostEndingChars = ['/', '?', '#'],\n    hostnameMaxLen = 255,\n    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,\n    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,\n    // protocols that can allow \"unsafe\" and \"unwise\" chars.\n    unsafeProtocol = {\n      'javascript': true,\n      'javascript:': true\n    },\n    // protocols that never have a hostname.\n    hostlessProtocol = {\n      'javascript': true,\n      'javascript:': true\n    },\n    // protocols that always contain a // bit.\n    slashedProtocol = {\n      'http': true,\n      'https': true,\n      'ftp': true,\n      'gopher': true,\n      'file': true,\n      'http:': true,\n      'https:': true,\n      'ftp:': true,\n      'gopher:': true,\n      'file:': true\n    },\n    querystring = __webpack_require__(68);\n\nfunction urlParse(url, parseQueryString, slashesDenoteHost) {\n  if (url && util.isObject(url) && url instanceof Url) return url;\n\n  var u = new Url;\n  u.parse(url, parseQueryString, slashesDenoteHost);\n  return u;\n}\n\nUrl.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {\n  if (!util.isString(url)) {\n    throw new TypeError(\"Parameter 'url' must be a string, not \" + typeof url);\n  }\n\n  // Copy chrome, IE, opera backslash-handling behavior.\n  // Back slashes before the query string get converted to forward slashes\n  // See: https://code.google.com/p/chromium/issues/detail?id=25916\n  var queryIndex = url.indexOf('?'),\n      splitter =\n          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',\n      uSplit = url.split(splitter),\n      slashRegex = /\\\\/g;\n  uSplit[0] = uSplit[0].replace(slashRegex, '/');\n  url = uSplit.join(splitter);\n\n  var rest = url;\n\n  // trim before proceeding.\n  // This is to support parse stuff like \"  http://foo.com  \\n\"\n  rest = rest.trim();\n\n  if (!slashesDenoteHost && url.split('#').length === 1) {\n    // Try fast path regexp\n    var simplePath = simplePathPattern.exec(rest);\n    if (simplePath) {\n      this.path = rest;\n      this.href = rest;\n      this.pathname = simplePath[1];\n      if (simplePath[2]) {\n        this.search = simplePath[2];\n        if (parseQueryString) {\n          this.query = querystring.parse(this.search.substr(1));\n        } else {\n          this.query = this.search.substr(1);\n        }\n      } else if (parseQueryString) {\n        this.search = '';\n        this.query = {};\n      }\n      return this;\n    }\n  }\n\n  var proto = protocolPattern.exec(rest);\n  if (proto) {\n    proto = proto[0];\n    var lowerProto = proto.toLowerCase();\n    this.protocol = lowerProto;\n    rest = rest.substr(proto.length);\n  }\n\n  // figure out if it's got a host\n  // user@server is *always* interpreted as a hostname, and url\n  // resolution will treat //foo/bar as host=foo,path=bar because that's\n  // how the browser resolves relative URLs.\n  if (slashesDenoteHost || proto || rest.match(/^\\/\\/[^@\\/]+@[^@\\/]+/)) {\n    var slashes = rest.substr(0, 2) === '//';\n    if (slashes && !(proto && hostlessProtocol[proto])) {\n      rest = rest.substr(2);\n      this.slashes = true;\n    }\n  }\n\n  if (!hostlessProtocol[proto] &&\n      (slashes || (proto && !slashedProtocol[proto]))) {\n\n    // there's a hostname.\n    // the first instance of /, ?, ;, or # ends the host.\n    //\n    // If there is an @ in the hostname, then non-host chars *are* allowed\n    // to the left of the last @ sign, unless some host-ending character\n    // comes *before* the @-sign.\n    // URLs are obnoxious.\n    //\n    // ex:\n    // http://a@b@c/ => user:a@b host:c\n    // http://a@b?@c => user:a host:c path:/?@c\n\n    // v0.12 TODO(isaacs): This is not quite how Chrome does things.\n    // Review our test case against browsers more comprehensively.\n\n    // find the first instance of any hostEndingChars\n    var hostEnd = -1;\n    for (var i = 0; i < hostEndingChars.length; i++) {\n      var hec = rest.indexOf(hostEndingChars[i]);\n      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))\n        hostEnd = hec;\n    }\n\n    // at this point, either we have an explicit point where the\n    // auth portion cannot go past, or the last @ char is the decider.\n    var auth, atSign;\n    if (hostEnd === -1) {\n      // atSign can be anywhere.\n      atSign = rest.lastIndexOf('@');\n    } else {\n      // atSign must be in auth portion.\n      // http://a@b/c@d => host:b auth:a path:/c@d\n      atSign = rest.lastIndexOf('@', hostEnd);\n    }\n\n    // Now we have a portion which is definitely the auth.\n    // Pull that off.\n    if (atSign !== -1) {\n      auth = rest.slice(0, atSign);\n      rest = rest.slice(atSign + 1);\n      this.auth = decodeURIComponent(auth);\n    }\n\n    // the host is the remaining to the left of the first non-host char\n    hostEnd = -1;\n    for (var i = 0; i < nonHostChars.length; i++) {\n      var hec = rest.indexOf(nonHostChars[i]);\n      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))\n        hostEnd = hec;\n    }\n    // if we still have not hit it, then the entire thing is a host.\n    if (hostEnd === -1)\n      hostEnd = rest.length;\n\n    this.host = rest.slice(0, hostEnd);\n    rest = rest.slice(hostEnd);\n\n    // pull out port.\n    this.parseHost();\n\n    // we've indicated that there is a hostname,\n    // so even if it's empty, it has to be present.\n    this.hostname = this.hostname || '';\n\n    // if hostname begins with [ and ends with ]\n    // assume that it's an IPv6 address.\n    var ipv6Hostname = this.hostname[0] === '[' &&\n        this.hostname[this.hostname.length - 1] === ']';\n\n    // validate a little.\n    if (!ipv6Hostname) {\n      var hostparts = this.hostname.split(/\\./);\n      for (var i = 0, l = hostparts.length; i < l; i++) {\n        var part = hostparts[i];\n        if (!part) continue;\n        if (!part.match(hostnamePartPattern)) {\n          var newpart = '';\n          for (var j = 0, k = part.length; j < k; j++) {\n            if (part.charCodeAt(j) > 127) {\n              // we replace non-ASCII char with a temporary placeholder\n              // we need this to make sure size of hostname is not\n              // broken by replacing non-ASCII by nothing\n              newpart += 'x';\n            } else {\n              newpart += part[j];\n            }\n          }\n          // we test again with ASCII char only\n          if (!newpart.match(hostnamePartPattern)) {\n            var validParts = hostparts.slice(0, i);\n            var notHost = hostparts.slice(i + 1);\n            var bit = part.match(hostnamePartStart);\n            if (bit) {\n              validParts.push(bit[1]);\n              notHost.unshift(bit[2]);\n            }\n            if (notHost.length) {\n              rest = '/' + notHost.join('.') + rest;\n            }\n            this.hostname = validParts.join('.');\n            break;\n          }\n        }\n      }\n    }\n\n    if (this.hostname.length > hostnameMaxLen) {\n      this.hostname = '';\n    } else {\n      // hostnames are always lower case.\n      this.hostname = this.hostname.toLowerCase();\n    }\n\n    if (!ipv6Hostname) {\n      // IDNA Support: Returns a punycoded representation of \"domain\".\n      // It only converts parts of the domain name that\n      // have non-ASCII characters, i.e. it doesn't matter if\n      // you call it with a domain that already is ASCII-only.\n      this.hostname = punycode.toASCII(this.hostname);\n    }\n\n    var p = this.port ? ':' + this.port : '';\n    var h = this.hostname || '';\n    this.host = h + p;\n    this.href += this.host;\n\n    // strip [ and ] from the hostname\n    // the host field still retains them, though\n    if (ipv6Hostname) {\n      this.hostname = this.hostname.substr(1, this.hostname.length - 2);\n      if (rest[0] !== '/') {\n        rest = '/' + rest;\n      }\n    }\n  }\n\n  // now rest is set to the post-host stuff.\n  // chop off any delim chars.\n  if (!unsafeProtocol[lowerProto]) {\n\n    // First, make 100% sure that any \"autoEscape\" chars get\n    // escaped, even if encodeURIComponent doesn't think they\n    // need to be.\n    for (var i = 0, l = autoEscape.length; i < l; i++) {\n      var ae = autoEscape[i];\n      if (rest.indexOf(ae) === -1)\n        continue;\n      var esc = encodeURIComponent(ae);\n      if (esc === ae) {\n        esc = escape(ae);\n      }\n      rest = rest.split(ae).join(esc);\n    }\n  }\n\n\n  // chop off from the tail first.\n  var hash = rest.indexOf('#');\n  if (hash !== -1) {\n    // got a fragment string.\n    this.hash = rest.substr(hash);\n    rest = rest.slice(0, hash);\n  }\n  var qm = rest.indexOf('?');\n  if (qm !== -1) {\n    this.search = rest.substr(qm);\n    this.query = rest.substr(qm + 1);\n    if (parseQueryString) {\n      this.query = querystring.parse(this.query);\n    }\n    rest = rest.slice(0, qm);\n  } else if (parseQueryString) {\n    // no query string, but parseQueryString still requested\n    this.search = '';\n    this.query = {};\n  }\n  if (rest) this.pathname = rest;\n  if (slashedProtocol[lowerProto] &&\n      this.hostname && !this.pathname) {\n    this.pathname = '/';\n  }\n\n  //to support http.request\n  if (this.pathname || this.search) {\n    var p = this.pathname || '';\n    var s = this.search || '';\n    this.path = p + s;\n  }\n\n  // finally, reconstruct the href based on what has been validated.\n  this.href = this.format();\n  return this;\n};\n\n// format a parsed object into a url string\nfunction urlFormat(obj) {\n  // ensure it's an object, and not a string url.\n  // If it's an obj, this is a no-op.\n  // this way, you can call url_format() on strings\n  // to clean up potentially wonky urls.\n  if (util.isString(obj)) obj = urlParse(obj);\n  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);\n  return obj.format();\n}\n\nUrl.prototype.format = function() {\n  var auth = this.auth || '';\n  if (auth) {\n    auth = encodeURIComponent(auth);\n    auth = auth.replace(/%3A/i, ':');\n    auth += '@';\n  }\n\n  var protocol = this.protocol || '',\n      pathname = this.pathname || '',\n      hash = this.hash || '',\n      host = false,\n      query = '';\n\n  if (this.host) {\n    host = auth + this.host;\n  } else if (this.hostname) {\n    host = auth + (this.hostname.indexOf(':') === -1 ?\n        this.hostname :\n        '[' + this.hostname + ']');\n    if (this.port) {\n      host += ':' + this.port;\n    }\n  }\n\n  if (this.query &&\n      util.isObject(this.query) &&\n      Object.keys(this.query).length) {\n    query = querystring.stringify(this.query);\n  }\n\n  var search = this.search || (query && ('?' + query)) || '';\n\n  if (protocol && protocol.substr(-1) !== ':') protocol += ':';\n\n  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.\n  // unless they had them to begin with.\n  if (this.slashes ||\n      (!protocol || slashedProtocol[protocol]) && host !== false) {\n    host = '//' + (host || '');\n    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;\n  } else if (!host) {\n    host = '';\n  }\n\n  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;\n  if (search && search.charAt(0) !== '?') search = '?' + search;\n\n  pathname = pathname.replace(/[?#]/g, function(match) {\n    return encodeURIComponent(match);\n  });\n  search = search.replace('#', '%23');\n\n  return protocol + host + pathname + search + hash;\n};\n\nfunction urlResolve(source, relative) {\n  return urlParse(source, false, true).resolve(relative);\n}\n\nUrl.prototype.resolve = function(relative) {\n  return this.resolveObject(urlParse(relative, false, true)).format();\n};\n\nfunction urlResolveObject(source, relative) {\n  if (!source) return relative;\n  return urlParse(source, false, true).resolveObject(relative);\n}\n\nUrl.prototype.resolveObject = function(relative) {\n  if (util.isString(relative)) {\n    var rel = new Url();\n    rel.parse(relative, false, true);\n    relative = rel;\n  }\n\n  var result = new Url();\n  var tkeys = Object.keys(this);\n  for (var tk = 0; tk < tkeys.length; tk++) {\n    var tkey = tkeys[tk];\n    result[tkey] = this[tkey];\n  }\n\n  // hash is always overridden, no matter what.\n  // even href=\"\" will remove it.\n  result.hash = relative.hash;\n\n  // if the relative url is empty, then there's nothing left to do here.\n  if (relative.href === '') {\n    result.href = result.format();\n    return result;\n  }\n\n  // hrefs like //foo/bar always cut to the protocol.\n  if (relative.slashes && !relative.protocol) {\n    // take everything except the protocol from relative\n    var rkeys = Object.keys(relative);\n    for (var rk = 0; rk < rkeys.length; rk++) {\n      var rkey = rkeys[rk];\n      if (rkey !== 'protocol')\n        result[rkey] = relative[rkey];\n    }\n\n    //urlParse appends trailing / to urls like http://www.example.com\n    if (slashedProtocol[result.protocol] &&\n        result.hostname && !result.pathname) {\n      result.path = result.pathname = '/';\n    }\n\n    result.href = result.format();\n    return result;\n  }\n\n  if (relative.protocol && relative.protocol !== result.protocol) {\n    // if it's a known url protocol, then changing\n    // the protocol does weird things\n    // first, if it's not file:, then we MUST have a host,\n    // and if there was a path\n    // to begin with, then we MUST have a path.\n    // if it is file:, then the host is dropped,\n    // because that's known to be hostless.\n    // anything else is assumed to be absolute.\n    if (!slashedProtocol[relative.protocol]) {\n      var keys = Object.keys(relative);\n      for (var v = 0; v < keys.length; v++) {\n        var k = keys[v];\n        result[k] = relative[k];\n      }\n      result.href = result.format();\n      return result;\n    }\n\n    result.protocol = relative.protocol;\n    if (!relative.host && !hostlessProtocol[relative.protocol]) {\n      var relPath = (relative.pathname || '').split('/');\n      while (relPath.length && !(relative.host = relPath.shift()));\n      if (!relative.host) relative.host = '';\n      if (!relative.hostname) relative.hostname = '';\n      if (relPath[0] !== '') relPath.unshift('');\n      if (relPath.length < 2) relPath.unshift('');\n      result.pathname = relPath.join('/');\n    } else {\n      result.pathname = relative.pathname;\n    }\n    result.search = relative.search;\n    result.query = relative.query;\n    result.host = relative.host || '';\n    result.auth = relative.auth;\n    result.hostname = relative.hostname || relative.host;\n    result.port = relative.port;\n    // to support http.request\n    if (result.pathname || result.search) {\n      var p = result.pathname || '';\n      var s = result.search || '';\n      result.path = p + s;\n    }\n    result.slashes = result.slashes || relative.slashes;\n    result.href = result.format();\n    return result;\n  }\n\n  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),\n      isRelAbs = (\n          relative.host ||\n          relative.pathname && relative.pathname.charAt(0) === '/'\n      ),\n      mustEndAbs = (isRelAbs || isSourceAbs ||\n                    (result.host && relative.pathname)),\n      removeAllDots = mustEndAbs,\n      srcPath = result.pathname && result.pathname.split('/') || [],\n      relPath = relative.pathname && relative.pathname.split('/') || [],\n      psychotic = result.protocol && !slashedProtocol[result.protocol];\n\n  // if the url is a non-slashed url, then relative\n  // links like ../.. should be able\n  // to crawl up to the hostname, as well.  This is strange.\n  // result.protocol has already been set by now.\n  // Later on, put the first path part into the host field.\n  if (psychotic) {\n    result.hostname = '';\n    result.port = null;\n    if (result.host) {\n      if (srcPath[0] === '') srcPath[0] = result.host;\n      else srcPath.unshift(result.host);\n    }\n    result.host = '';\n    if (relative.protocol) {\n      relative.hostname = null;\n      relative.port = null;\n      if (relative.host) {\n        if (relPath[0] === '') relPath[0] = relative.host;\n        else relPath.unshift(relative.host);\n      }\n      relative.host = null;\n    }\n    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');\n  }\n\n  if (isRelAbs) {\n    // it's absolute.\n    result.host = (relative.host || relative.host === '') ?\n                  relative.host : result.host;\n    result.hostname = (relative.hostname || relative.hostname === '') ?\n                      relative.hostname : result.hostname;\n    result.search = relative.search;\n    result.query = relative.query;\n    srcPath = relPath;\n    // fall through to the dot-handling below.\n  } else if (relPath.length) {\n    // it's relative\n    // throw away the existing file, and take the new path instead.\n    if (!srcPath) srcPath = [];\n    srcPath.pop();\n    srcPath = srcPath.concat(relPath);\n    result.search = relative.search;\n    result.query = relative.query;\n  } else if (!util.isNullOrUndefined(relative.search)) {\n    // just pull out the search.\n    // like href='?foo'.\n    // Put this after the other two cases because it simplifies the booleans\n    if (psychotic) {\n      result.hostname = result.host = srcPath.shift();\n      //occationaly the auth can get stuck only in host\n      //this especially happens in cases like\n      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')\n      var authInHost = result.host && result.host.indexOf('@') > 0 ?\n                       result.host.split('@') : false;\n      if (authInHost) {\n        result.auth = authInHost.shift();\n        result.host = result.hostname = authInHost.shift();\n      }\n    }\n    result.search = relative.search;\n    result.query = relative.query;\n    //to support http.request\n    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {\n      result.path = (result.pathname ? result.pathname : '') +\n                    (result.search ? result.search : '');\n    }\n    result.href = result.format();\n    return result;\n  }\n\n  if (!srcPath.length) {\n    // no path at all.  easy.\n    // we've already handled the other stuff above.\n    result.pathname = null;\n    //to support http.request\n    if (result.search) {\n      result.path = '/' + result.search;\n    } else {\n      result.path = null;\n    }\n    result.href = result.format();\n    return result;\n  }\n\n  // if a url ENDs in . or .., then it must get a trailing slash.\n  // however, if it ends in anything else non-slashy,\n  // then it must NOT get a trailing slash.\n  var last = srcPath.slice(-1)[0];\n  var hasTrailingSlash = (\n      (result.host || relative.host || srcPath.length > 1) &&\n      (last === '.' || last === '..') || last === '');\n\n  // strip single dots, resolve double dots to parent dir\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = srcPath.length; i >= 0; i--) {\n    last = srcPath[i];\n    if (last === '.') {\n      srcPath.splice(i, 1);\n    } else if (last === '..') {\n      srcPath.splice(i, 1);\n      up++;\n    } else if (up) {\n      srcPath.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (!mustEndAbs && !removeAllDots) {\n    for (; up--; up) {\n      srcPath.unshift('..');\n    }\n  }\n\n  if (mustEndAbs && srcPath[0] !== '' &&\n      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {\n    srcPath.unshift('');\n  }\n\n  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {\n    srcPath.push('');\n  }\n\n  var isAbsolute = srcPath[0] === '' ||\n      (srcPath[0] && srcPath[0].charAt(0) === '/');\n\n  // put the host back\n  if (psychotic) {\n    result.hostname = result.host = isAbsolute ? '' :\n                                    srcPath.length ? srcPath.shift() : '';\n    //occationaly the auth can get stuck only in host\n    //this especially happens in cases like\n    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')\n    var authInHost = result.host && result.host.indexOf('@') > 0 ?\n                     result.host.split('@') : false;\n    if (authInHost) {\n      result.auth = authInHost.shift();\n      result.host = result.hostname = authInHost.shift();\n    }\n  }\n\n  mustEndAbs = mustEndAbs || (result.host && srcPath.length);\n\n  if (mustEndAbs && !isAbsolute) {\n    srcPath.unshift('');\n  }\n\n  if (!srcPath.length) {\n    result.pathname = null;\n    result.path = null;\n  } else {\n    result.pathname = srcPath.join('/');\n  }\n\n  //to support request.http\n  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {\n    result.path = (result.pathname ? result.pathname : '') +\n                  (result.search ? result.search : '');\n  }\n  result.auth = relative.auth || result.auth;\n  result.slashes = result.slashes || relative.slashes;\n  result.href = result.format();\n  return result;\n};\n\nUrl.prototype.parseHost = function() {\n  var host = this.host;\n  var port = portPattern.exec(host);\n  if (port) {\n    port = port[0];\n    if (port !== ':') {\n      this.port = port.substr(1);\n    }\n    host = host.substr(0, host.length - port.length);\n  }\n  if (host) this.hostname = host;\n};\n\n\n/***/ }),\n/* 16 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, \"a\", function() { return /* binding */ createProxyFunction; });\n__webpack_require__.d(__webpack_exports__, \"b\", function() { return /* binding */ createProxyModule; });\n\n// EXTERNAL MODULE: ./node_modules/debug/src/browser.js\nvar browser = __webpack_require__(3);\nvar browser_default = /*#__PURE__*/__webpack_require__.n(browser);\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/observable.js + 1 modules\nvar observable = __webpack_require__(8);\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/multicast.js + 1 modules\nvar multicast = __webpack_require__(73);\n\n// EXTERNAL MODULE: ./node_modules/threads/dist-esm/common.js + 1 modules\nvar common = __webpack_require__(4);\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/observable-promise.js\n\nconst doNothing = () => undefined;\nconst returnInput = (input) => input;\nconst runDeferred = (fn) => Promise.resolve().then(fn);\nfunction fail(error) {\n    throw error;\n}\nfunction isThenable(thing) {\n    return thing && typeof thing.then === \"function\";\n}\n/**\n * Creates a hybrid, combining the APIs of an Observable and a Promise.\n *\n * It is used to proxy async process states when we are initially not sure\n * if that async process will yield values once (-> Promise) or multiple\n * times (-> Observable).\n *\n * Note that the observable promise inherits some of the observable's characteristics:\n * The `init` function will be called *once for every time anyone subscribes to it*.\n *\n * If this is undesired, derive a hot observable from it using `makeHot()` and\n * subscribe to that.\n */\nclass observable_promise_ObservablePromise extends observable[\"a\" /* default */] {\n    constructor(init) {\n        super(originalObserver => {\n            // tslint:disable-next-line no-this-assignment\n            const self = this;\n            const observer = Object.assign(Object.assign({}, originalObserver), { complete() {\n                    originalObserver.complete();\n                    self.onCompletion();\n                },\n                error(error) {\n                    originalObserver.error(error);\n                    self.onError(error);\n                },\n                next(value) {\n                    originalObserver.next(value);\n                    self.onNext(value);\n                } });\n            try {\n                this.initHasRun = true;\n                return init(observer);\n            }\n            catch (error) {\n                observer.error(error);\n            }\n        });\n        this.initHasRun = false;\n        this.fulfillmentCallbacks = [];\n        this.rejectionCallbacks = [];\n        this.firstValueSet = false;\n        this.state = \"pending\";\n    }\n    onNext(value) {\n        if (!this.firstValueSet) {\n            this.firstValue = value;\n            this.firstValueSet = true;\n        }\n    }\n    onError(error) {\n        this.state = \"rejected\";\n        this.rejection = error;\n        for (const onRejected of this.rejectionCallbacks) {\n            // Promisifying the call to turn errors into unhandled promise rejections\n            // instead of them failing sync and cancelling the iteration\n            runDeferred(() => onRejected(error));\n        }\n    }\n    onCompletion() {\n        this.state = \"fulfilled\";\n        for (const onFulfilled of this.fulfillmentCallbacks) {\n            // Promisifying the call to turn errors into unhandled promise rejections\n            // instead of them failing sync and cancelling the iteration\n            runDeferred(() => onFulfilled(this.firstValue));\n        }\n    }\n    then(onFulfilledRaw, onRejectedRaw) {\n        const onFulfilled = onFulfilledRaw || returnInput;\n        const onRejected = onRejectedRaw || fail;\n        let onRejectedCalled = false;\n        return new Promise((resolve, reject) => {\n            const rejectionCallback = (error) => {\n                if (onRejectedCalled)\n                    return;\n                onRejectedCalled = true;\n                try {\n                    resolve(onRejected(error));\n                }\n                catch (anotherError) {\n                    reject(anotherError);\n                }\n            };\n            const fulfillmentCallback = (value) => {\n                try {\n                    resolve(onFulfilled(value));\n                }\n                catch (error) {\n                    rejectionCallback(error);\n                }\n            };\n            if (!this.initHasRun) {\n                this.subscribe({ error: rejectionCallback });\n            }\n            if (this.state === \"fulfilled\") {\n                return resolve(onFulfilled(this.firstValue));\n            }\n            if (this.state === \"rejected\") {\n                onRejectedCalled = true;\n                return resolve(onRejected(this.rejection));\n            }\n            this.fulfillmentCallbacks.push(fulfillmentCallback);\n            this.rejectionCallbacks.push(rejectionCallback);\n        });\n    }\n    catch(onRejected) {\n        return this.then(undefined, onRejected);\n    }\n    finally(onCompleted) {\n        const handler = onCompleted || doNothing;\n        return this.then((value) => {\n            handler();\n            return value;\n        }, () => handler());\n    }\n    static from(thing) {\n        if (isThenable(thing)) {\n            return new observable_promise_ObservablePromise(observer => {\n                const onFulfilled = (value) => {\n                    observer.next(value);\n                    observer.complete();\n                };\n                const onRejected = (error) => {\n                    observer.error(error);\n                };\n                thing.then(onFulfilled, onRejected);\n            });\n        }\n        else {\n            return super.from(thing);\n        }\n    }\n}\n\n// EXTERNAL MODULE: ./node_modules/threads/dist-esm/transferable.js\nvar transferable = __webpack_require__(33);\n\n// EXTERNAL MODULE: ./node_modules/threads/dist-esm/types/messages.js\nvar messages = __webpack_require__(10);\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/invocation-proxy.js\n/*\n * This source file contains the code for proxying calls in the master thread to calls in the workers\n * by `.postMessage()`-ing.\n *\n * Keep in mind that this code can make or break the program's performance! Need to optimize more…\n */\n\n\n\n\n\n\nconst debugMessages = browser_default()(\"threads:master:messages\");\nlet nextJobUID = 1;\nconst dedupe = (array) => Array.from(new Set(array));\nconst isJobErrorMessage = (data) => data && data.type === messages[\"b\" /* WorkerMessageType */].error;\nconst isJobResultMessage = (data) => data && data.type === messages[\"b\" /* WorkerMessageType */].result;\nconst isJobStartMessage = (data) => data && data.type === messages[\"b\" /* WorkerMessageType */].running;\nfunction createObservableForJob(worker, jobUID) {\n    return new observable[\"a\" /* default */](observer => {\n        let asyncType;\n        const messageHandler = ((event) => {\n            debugMessages(\"Message from worker:\", event.data);\n            if (!event.data || event.data.uid !== jobUID)\n                return;\n            if (isJobStartMessage(event.data)) {\n                asyncType = event.data.resultType;\n            }\n            else if (isJobResultMessage(event.data)) {\n                if (asyncType === \"promise\") {\n                    if (typeof event.data.payload !== \"undefined\") {\n                        observer.next(Object(common[\"a\" /* deserialize */])(event.data.payload));\n                    }\n                    observer.complete();\n                    worker.removeEventListener(\"message\", messageHandler);\n                }\n                else {\n                    if (event.data.payload) {\n                        observer.next(Object(common[\"a\" /* deserialize */])(event.data.payload));\n                    }\n                    if (event.data.complete) {\n                        observer.complete();\n                        worker.removeEventListener(\"message\", messageHandler);\n                    }\n                }\n            }\n            else if (isJobErrorMessage(event.data)) {\n                const error = Object(common[\"a\" /* deserialize */])(event.data.error);\n                if (asyncType === \"promise\" || !asyncType) {\n                    observer.error(error);\n                }\n                else {\n                    observer.error(error);\n                }\n                worker.removeEventListener(\"message\", messageHandler);\n            }\n        });\n        worker.addEventListener(\"message\", messageHandler);\n        return () => worker.removeEventListener(\"message\", messageHandler);\n    });\n}\nfunction prepareArguments(rawArgs) {\n    if (rawArgs.length === 0) {\n        // Exit early if possible\n        return {\n            args: [],\n            transferables: []\n        };\n    }\n    const args = [];\n    const transferables = [];\n    for (const arg of rawArgs) {\n        if (Object(transferable[\"a\" /* isTransferDescriptor */])(arg)) {\n            args.push(Object(common[\"b\" /* serialize */])(arg.send));\n            transferables.push(...arg.transferables);\n        }\n        else {\n            args.push(Object(common[\"b\" /* serialize */])(arg));\n        }\n    }\n    return {\n        args,\n        transferables: transferables.length === 0 ? transferables : dedupe(transferables)\n    };\n}\nfunction createProxyFunction(worker, method) {\n    return ((...rawArgs) => {\n        const uid = nextJobUID++;\n        const { args, transferables } = prepareArguments(rawArgs);\n        const runMessage = {\n            type: messages[\"a\" /* MasterMessageType */].run,\n            uid,\n            method,\n            args\n        };\n        debugMessages(\"Sending command to run function to worker:\", runMessage);\n        try {\n            worker.postMessage(runMessage, transferables);\n        }\n        catch (error) {\n            return observable_promise_ObservablePromise.from(Promise.reject(error));\n        }\n        return observable_promise_ObservablePromise.from(Object(multicast[\"a\" /* default */])(createObservableForJob(worker, uid)));\n    });\n}\nfunction createProxyModule(worker, methodNames) {\n    const proxy = {};\n    for (const methodName of methodNames) {\n        proxy[methodName] = createProxyFunction(worker, methodName);\n    }\n    return proxy;\n}\n\n\n/***/ }),\n/* 17 */\n/***/ (function(module, exports) {\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n/***/ }),\n/* 18 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\nmodule.exports = Readable;\n/*<replacement>*/\n\nvar Duplex;\n/*</replacement>*/\n\nReadable.ReadableState = ReadableState;\n/*<replacement>*/\n\nvar EE = __webpack_require__(19).EventEmitter;\n\nvar EElistenerCount = function EElistenerCount(emitter, type) {\n  return emitter.listeners(type).length;\n};\n/*</replacement>*/\n\n/*<replacement>*/\n\n\nvar Stream = __webpack_require__(20);\n/*</replacement>*/\n\n\nvar Buffer = __webpack_require__(0).Buffer;\n\nvar OurUint8Array = global.Uint8Array || function () {};\n\nfunction _uint8ArrayToBuffer(chunk) {\n  return Buffer.from(chunk);\n}\n\nfunction _isUint8Array(obj) {\n  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;\n}\n/*<replacement>*/\n\n\nvar debugUtil = __webpack_require__(41);\n\nvar debug;\n\nif (debugUtil && debugUtil.debuglog) {\n  debug = debugUtil.debuglog('stream');\n} else {\n  debug = function debug() {};\n}\n/*</replacement>*/\n\n\nvar BufferList = __webpack_require__(42);\n\nvar destroyImpl = __webpack_require__(21);\n\nvar _require = __webpack_require__(22),\n    getHighWaterMark = _require.getHighWaterMark;\n\nvar _require$codes = __webpack_require__(5).codes,\n    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,\n    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,\n    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,\n    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.\n\n\nvar StringDecoder;\nvar createReadableStreamAsyncIterator;\nvar from;\n\n__webpack_require__(7)(Readable, Stream);\n\nvar errorOrDestroy = destroyImpl.errorOrDestroy;\nvar kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];\n\nfunction prependListener(emitter, event, fn) {\n  // Sadly this is not cacheable as some libraries bundle their own\n  // event emitter implementation with them.\n  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any\n  // userland ones.  NEVER DO THIS. This is here only because this code needs\n  // to continue to work with older versions of Node.js that do not include\n  // the prependListener() method. The goal is to eventually remove this hack.\n\n  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];\n}\n\nfunction ReadableState(options, stream, isDuplex) {\n  Duplex = Duplex || __webpack_require__(6);\n  options = options || {}; // Duplex streams are both readable and writable, but share\n  // the same options object.\n  // However, some cases require setting options to different\n  // values for the readable and the writable sides of the duplex stream.\n  // These options can be provided separately as readableXXX and writableXXX.\n\n  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to\n  // make all the buffer merging and length checks go away\n\n  this.objectMode = !!options.objectMode;\n  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer\n  // Note: 0 is a valid value, means \"don't call _read preemptively ever\"\n\n  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the\n  // linked list can remove elements from the beginning faster than\n  // array.shift()\n\n  this.buffer = new BufferList();\n  this.length = 0;\n  this.pipes = null;\n  this.pipesCount = 0;\n  this.flowing = null;\n  this.ended = false;\n  this.endEmitted = false;\n  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted\n  // immediately, or on a later tick.  We set this to true at first, because\n  // any actions that shouldn't happen until \"later\" should generally also\n  // not happen before the first read call.\n\n  this.sync = true; // whenever we return null, then we set a flag to say\n  // that we're awaiting a 'readable' event emission.\n\n  this.needReadable = false;\n  this.emittedReadable = false;\n  this.readableListening = false;\n  this.resumeScheduled = false;\n  this.paused = true; // Should close be emitted on destroy. Defaults to true.\n\n  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')\n\n  this.autoDestroy = !!options.autoDestroy; // has it been destroyed\n\n  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string\n  // encoding is 'binary' so we have to make this configurable.\n  // Everything else in the universe uses 'utf8', though.\n\n  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s\n\n  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled\n\n  this.readingMore = false;\n  this.decoder = null;\n  this.encoding = null;\n\n  if (options.encoding) {\n    if (!StringDecoder) StringDecoder = __webpack_require__(24).StringDecoder;\n    this.decoder = new StringDecoder(options.encoding);\n    this.encoding = options.encoding;\n  }\n}\n\nfunction Readable(options) {\n  Duplex = Duplex || __webpack_require__(6);\n  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside\n  // the ReadableState constructor, at least with V8 6.5\n\n  var isDuplex = this instanceof Duplex;\n  this._readableState = new ReadableState(options, this, isDuplex); // legacy\n\n  this.readable = true;\n\n  if (options) {\n    if (typeof options.read === 'function') this._read = options.read;\n    if (typeof options.destroy === 'function') this._destroy = options.destroy;\n  }\n\n  Stream.call(this);\n}\n\nObject.defineProperty(Readable.prototype, 'destroyed', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    if (this._readableState === undefined) {\n      return false;\n    }\n\n    return this._readableState.destroyed;\n  },\n  set: function set(value) {\n    // we ignore the value if the stream\n    // has not been initialized yet\n    if (!this._readableState) {\n      return;\n    } // backward compatibility, the user is explicitly\n    // managing destroyed\n\n\n    this._readableState.destroyed = value;\n  }\n});\nReadable.prototype.destroy = destroyImpl.destroy;\nReadable.prototype._undestroy = destroyImpl.undestroy;\n\nReadable.prototype._destroy = function (err, cb) {\n  cb(err);\n}; // Manually shove something into the read() buffer.\n// This returns true if the highWaterMark has not been hit yet,\n// similar to how Writable.write() returns true if you should\n// write() some more.\n\n\nReadable.prototype.push = function (chunk, encoding) {\n  var state = this._readableState;\n  var skipChunkCheck;\n\n  if (!state.objectMode) {\n    if (typeof chunk === 'string') {\n      encoding = encoding || state.defaultEncoding;\n\n      if (encoding !== state.encoding) {\n        chunk = Buffer.from(chunk, encoding);\n        encoding = '';\n      }\n\n      skipChunkCheck = true;\n    }\n  } else {\n    skipChunkCheck = true;\n  }\n\n  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);\n}; // Unshift should *always* be something directly out of read()\n\n\nReadable.prototype.unshift = function (chunk) {\n  return readableAddChunk(this, chunk, null, true, false);\n};\n\nfunction readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {\n  debug('readableAddChunk', chunk);\n  var state = stream._readableState;\n\n  if (chunk === null) {\n    state.reading = false;\n    onEofChunk(stream, state);\n  } else {\n    var er;\n    if (!skipChunkCheck) er = chunkInvalid(state, chunk);\n\n    if (er) {\n      errorOrDestroy(stream, er);\n    } else if (state.objectMode || chunk && chunk.length > 0) {\n      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {\n        chunk = _uint8ArrayToBuffer(chunk);\n      }\n\n      if (addToFront) {\n        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);\n      } else if (state.ended) {\n        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());\n      } else if (state.destroyed) {\n        return false;\n      } else {\n        state.reading = false;\n\n        if (state.decoder && !encoding) {\n          chunk = state.decoder.write(chunk);\n          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);\n        } else {\n          addChunk(stream, state, chunk, false);\n        }\n      }\n    } else if (!addToFront) {\n      state.reading = false;\n      maybeReadMore(stream, state);\n    }\n  } // We can push more data if we are below the highWaterMark.\n  // Also, if we have no data yet, we can stand some more bytes.\n  // This is to work around cases where hwm=0, such as the repl.\n\n\n  return !state.ended && (state.length < state.highWaterMark || state.length === 0);\n}\n\nfunction addChunk(stream, state, chunk, addToFront) {\n  if (state.flowing && state.length === 0 && !state.sync) {\n    state.awaitDrain = 0;\n    stream.emit('data', chunk);\n  } else {\n    // update the buffer info.\n    state.length += state.objectMode ? 1 : chunk.length;\n    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);\n    if (state.needReadable) emitReadable(stream);\n  }\n\n  maybeReadMore(stream, state);\n}\n\nfunction chunkInvalid(state, chunk) {\n  var er;\n\n  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {\n    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);\n  }\n\n  return er;\n}\n\nReadable.prototype.isPaused = function () {\n  return this._readableState.flowing === false;\n}; // backwards compatibility.\n\n\nReadable.prototype.setEncoding = function (enc) {\n  if (!StringDecoder) StringDecoder = __webpack_require__(24).StringDecoder;\n  var decoder = new StringDecoder(enc);\n  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8\n\n  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:\n\n  var p = this._readableState.buffer.head;\n  var content = '';\n\n  while (p !== null) {\n    content += decoder.write(p.data);\n    p = p.next;\n  }\n\n  this._readableState.buffer.clear();\n\n  if (content !== '') this._readableState.buffer.push(content);\n  this._readableState.length = content.length;\n  return this;\n}; // Don't raise the hwm > 1GB\n\n\nvar MAX_HWM = 0x40000000;\n\nfunction computeNewHighWaterMark(n) {\n  if (n >= MAX_HWM) {\n    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.\n    n = MAX_HWM;\n  } else {\n    // Get the next highest power of 2 to prevent increasing hwm excessively in\n    // tiny amounts\n    n--;\n    n |= n >>> 1;\n    n |= n >>> 2;\n    n |= n >>> 4;\n    n |= n >>> 8;\n    n |= n >>> 16;\n    n++;\n  }\n\n  return n;\n} // This function is designed to be inlinable, so please take care when making\n// changes to the function body.\n\n\nfunction howMuchToRead(n, state) {\n  if (n <= 0 || state.length === 0 && state.ended) return 0;\n  if (state.objectMode) return 1;\n\n  if (n !== n) {\n    // Only flow one buffer at a time\n    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;\n  } // If we're asking for more than the current hwm, then raise the hwm.\n\n\n  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);\n  if (n <= state.length) return n; // Don't have enough\n\n  if (!state.ended) {\n    state.needReadable = true;\n    return 0;\n  }\n\n  return state.length;\n} // you can override either this method, or the async _read(n) below.\n\n\nReadable.prototype.read = function (n) {\n  debug('read', n);\n  n = parseInt(n, 10);\n  var state = this._readableState;\n  var nOrig = n;\n  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we\n  // already have a bunch of data in the buffer, then just trigger\n  // the 'readable' event and move on.\n\n  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {\n    debug('read: emitReadable', state.length, state.ended);\n    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);\n    return null;\n  }\n\n  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.\n\n  if (n === 0 && state.ended) {\n    if (state.length === 0) endReadable(this);\n    return null;\n  } // All the actual chunk generation logic needs to be\n  // *below* the call to _read.  The reason is that in certain\n  // synthetic stream cases, such as passthrough streams, _read\n  // may be a completely synchronous operation which may change\n  // the state of the read buffer, providing enough data when\n  // before there was *not* enough.\n  //\n  // So, the steps are:\n  // 1. Figure out what the state of things will be after we do\n  // a read from the buffer.\n  //\n  // 2. If that resulting state will trigger a _read, then call _read.\n  // Note that this may be asynchronous, or synchronous.  Yes, it is\n  // deeply ugly to write APIs this way, but that still doesn't mean\n  // that the Readable class should behave improperly, as streams are\n  // designed to be sync/async agnostic.\n  // Take note if the _read call is sync or async (ie, if the read call\n  // has returned yet), so that we know whether or not it's safe to emit\n  // 'readable' etc.\n  //\n  // 3. Actually pull the requested chunks out of the buffer and return.\n  // if we need a readable event, then we need to do some reading.\n\n\n  var doRead = state.needReadable;\n  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some\n\n  if (state.length === 0 || state.length - n < state.highWaterMark) {\n    doRead = true;\n    debug('length less than watermark', doRead);\n  } // however, if we've ended, then there's no point, and if we're already\n  // reading, then it's unnecessary.\n\n\n  if (state.ended || state.reading) {\n    doRead = false;\n    debug('reading or ended', doRead);\n  } else if (doRead) {\n    debug('do read');\n    state.reading = true;\n    state.sync = true; // if the length is currently zero, then we *need* a readable event.\n\n    if (state.length === 0) state.needReadable = true; // call internal read method\n\n    this._read(state.highWaterMark);\n\n    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,\n    // and we need to re-evaluate how much data we can return to the user.\n\n    if (!state.reading) n = howMuchToRead(nOrig, state);\n  }\n\n  var ret;\n  if (n > 0) ret = fromList(n, state);else ret = null;\n\n  if (ret === null) {\n    state.needReadable = state.length <= state.highWaterMark;\n    n = 0;\n  } else {\n    state.length -= n;\n    state.awaitDrain = 0;\n  }\n\n  if (state.length === 0) {\n    // If we have nothing in the buffer, then we want to know\n    // as soon as we *do* get something into the buffer.\n    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.\n\n    if (nOrig !== n && state.ended) endReadable(this);\n  }\n\n  if (ret !== null) this.emit('data', ret);\n  return ret;\n};\n\nfunction onEofChunk(stream, state) {\n  debug('onEofChunk');\n  if (state.ended) return;\n\n  if (state.decoder) {\n    var chunk = state.decoder.end();\n\n    if (chunk && chunk.length) {\n      state.buffer.push(chunk);\n      state.length += state.objectMode ? 1 : chunk.length;\n    }\n  }\n\n  state.ended = true;\n\n  if (state.sync) {\n    // if we are sync, wait until next tick to emit the data.\n    // Otherwise we risk emitting data in the flow()\n    // the readable code triggers during a read() call\n    emitReadable(stream);\n  } else {\n    // emit 'readable' now to make sure it gets picked up.\n    state.needReadable = false;\n\n    if (!state.emittedReadable) {\n      state.emittedReadable = true;\n      emitReadable_(stream);\n    }\n  }\n} // Don't emit readable right away in sync mode, because this can trigger\n// another read() call => stack overflow.  This way, it might trigger\n// a nextTick recursion warning, but that's not so bad.\n\n\nfunction emitReadable(stream) {\n  var state = stream._readableState;\n  debug('emitReadable', state.needReadable, state.emittedReadable);\n  state.needReadable = false;\n\n  if (!state.emittedReadable) {\n    debug('emitReadable', state.flowing);\n    state.emittedReadable = true;\n    process.nextTick(emitReadable_, stream);\n  }\n}\n\nfunction emitReadable_(stream) {\n  var state = stream._readableState;\n  debug('emitReadable_', state.destroyed, state.length, state.ended);\n\n  if (!state.destroyed && (state.length || state.ended)) {\n    stream.emit('readable');\n    state.emittedReadable = false;\n  } // The stream needs another readable event if\n  // 1. It is not flowing, as the flow mechanism will take\n  //    care of it.\n  // 2. It is not ended.\n  // 3. It is below the highWaterMark, so we can schedule\n  //    another readable later.\n\n\n  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;\n  flow(stream);\n} // at this point, the user has presumably seen the 'readable' event,\n// and called read() to consume some data.  that may have triggered\n// in turn another _read(n) call, in which case reading = true if\n// it's in progress.\n// However, if we're not ended, or reading, and the length < hwm,\n// then go ahead and try to read some more preemptively.\n\n\nfunction maybeReadMore(stream, state) {\n  if (!state.readingMore) {\n    state.readingMore = true;\n    process.nextTick(maybeReadMore_, stream, state);\n  }\n}\n\nfunction maybeReadMore_(stream, state) {\n  // Attempt to read more data if we should.\n  //\n  // The conditions for reading more data are (one of):\n  // - Not enough data buffered (state.length < state.highWaterMark). The loop\n  //   is responsible for filling the buffer with enough data if such data\n  //   is available. If highWaterMark is 0 and we are not in the flowing mode\n  //   we should _not_ attempt to buffer any extra data. We'll get more data\n  //   when the stream consumer calls read() instead.\n  // - No data in the buffer, and the stream is in flowing mode. In this mode\n  //   the loop below is responsible for ensuring read() is called. Failing to\n  //   call read here would abort the flow and there's no other mechanism for\n  //   continuing the flow if the stream consumer has just subscribed to the\n  //   'data' event.\n  //\n  // In addition to the above conditions to keep reading data, the following\n  // conditions prevent the data from being read:\n  // - The stream has ended (state.ended).\n  // - There is already a pending 'read' operation (state.reading). This is a\n  //   case where the the stream has called the implementation defined _read()\n  //   method, but they are processing the call asynchronously and have _not_\n  //   called push() with new data. In this case we skip performing more\n  //   read()s. The execution ends in this method again after the _read() ends\n  //   up calling push() with more data.\n  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {\n    var len = state.length;\n    debug('maybeReadMore read 0');\n    stream.read(0);\n    if (len === state.length) // didn't get any data, stop spinning.\n      break;\n  }\n\n  state.readingMore = false;\n} // abstract method.  to be overridden in specific implementation classes.\n// call cb(er, data) where data is <= n in length.\n// for virtual (non-string, non-buffer) streams, \"length\" is somewhat\n// arbitrary, and perhaps not very meaningful.\n\n\nReadable.prototype._read = function (n) {\n  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));\n};\n\nReadable.prototype.pipe = function (dest, pipeOpts) {\n  var src = this;\n  var state = this._readableState;\n\n  switch (state.pipesCount) {\n    case 0:\n      state.pipes = dest;\n      break;\n\n    case 1:\n      state.pipes = [state.pipes, dest];\n      break;\n\n    default:\n      state.pipes.push(dest);\n      break;\n  }\n\n  state.pipesCount += 1;\n  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);\n  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;\n  var endFn = doEnd ? onend : unpipe;\n  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);\n  dest.on('unpipe', onunpipe);\n\n  function onunpipe(readable, unpipeInfo) {\n    debug('onunpipe');\n\n    if (readable === src) {\n      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {\n        unpipeInfo.hasUnpiped = true;\n        cleanup();\n      }\n    }\n  }\n\n  function onend() {\n    debug('onend');\n    dest.end();\n  } // when the dest drains, it reduces the awaitDrain counter\n  // on the source.  This would be more elegant with a .once()\n  // handler in flow(), but adding and removing repeatedly is\n  // too slow.\n\n\n  var ondrain = pipeOnDrain(src);\n  dest.on('drain', ondrain);\n  var cleanedUp = false;\n\n  function cleanup() {\n    debug('cleanup'); // cleanup event handlers once the pipe is broken\n\n    dest.removeListener('close', onclose);\n    dest.removeListener('finish', onfinish);\n    dest.removeListener('drain', ondrain);\n    dest.removeListener('error', onerror);\n    dest.removeListener('unpipe', onunpipe);\n    src.removeListener('end', onend);\n    src.removeListener('end', unpipe);\n    src.removeListener('data', ondata);\n    cleanedUp = true; // if the reader is waiting for a drain event from this\n    // specific writer, then it would cause it to never start\n    // flowing again.\n    // So, if this is awaiting a drain, then we just call it now.\n    // If we don't know, then assume that we are waiting for one.\n\n    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();\n  }\n\n  src.on('data', ondata);\n\n  function ondata(chunk) {\n    debug('ondata');\n    var ret = dest.write(chunk);\n    debug('dest.write', ret);\n\n    if (ret === false) {\n      // If the user unpiped during `dest.write()`, it is possible\n      // to get stuck in a permanently paused state if that write\n      // also returned false.\n      // => Check whether `dest` is still a piping destination.\n      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {\n        debug('false write response, pause', state.awaitDrain);\n        state.awaitDrain++;\n      }\n\n      src.pause();\n    }\n  } // if the dest has an error, then stop piping into it.\n  // however, don't suppress the throwing behavior for this.\n\n\n  function onerror(er) {\n    debug('onerror', er);\n    unpipe();\n    dest.removeListener('error', onerror);\n    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);\n  } // Make sure our error handler is attached before userland ones.\n\n\n  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.\n\n  function onclose() {\n    dest.removeListener('finish', onfinish);\n    unpipe();\n  }\n\n  dest.once('close', onclose);\n\n  function onfinish() {\n    debug('onfinish');\n    dest.removeListener('close', onclose);\n    unpipe();\n  }\n\n  dest.once('finish', onfinish);\n\n  function unpipe() {\n    debug('unpipe');\n    src.unpipe(dest);\n  } // tell the dest that it's being piped to\n\n\n  dest.emit('pipe', src); // start the flow if it hasn't been started already.\n\n  if (!state.flowing) {\n    debug('pipe resume');\n    src.resume();\n  }\n\n  return dest;\n};\n\nfunction pipeOnDrain(src) {\n  return function pipeOnDrainFunctionResult() {\n    var state = src._readableState;\n    debug('pipeOnDrain', state.awaitDrain);\n    if (state.awaitDrain) state.awaitDrain--;\n\n    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {\n      state.flowing = true;\n      flow(src);\n    }\n  };\n}\n\nReadable.prototype.unpipe = function (dest) {\n  var state = this._readableState;\n  var unpipeInfo = {\n    hasUnpiped: false\n  }; // if we're not piping anywhere, then do nothing.\n\n  if (state.pipesCount === 0) return this; // just one destination.  most common case.\n\n  if (state.pipesCount === 1) {\n    // passed in one, but it's not the right one.\n    if (dest && dest !== state.pipes) return this;\n    if (!dest) dest = state.pipes; // got a match.\n\n    state.pipes = null;\n    state.pipesCount = 0;\n    state.flowing = false;\n    if (dest) dest.emit('unpipe', this, unpipeInfo);\n    return this;\n  } // slow case. multiple pipe destinations.\n\n\n  if (!dest) {\n    // remove all.\n    var dests = state.pipes;\n    var len = state.pipesCount;\n    state.pipes = null;\n    state.pipesCount = 0;\n    state.flowing = false;\n\n    for (var i = 0; i < len; i++) {\n      dests[i].emit('unpipe', this, {\n        hasUnpiped: false\n      });\n    }\n\n    return this;\n  } // try to find the right one.\n\n\n  var index = indexOf(state.pipes, dest);\n  if (index === -1) return this;\n  state.pipes.splice(index, 1);\n  state.pipesCount -= 1;\n  if (state.pipesCount === 1) state.pipes = state.pipes[0];\n  dest.emit('unpipe', this, unpipeInfo);\n  return this;\n}; // set up data events if they are asked for\n// Ensure readable listeners eventually get something\n\n\nReadable.prototype.on = function (ev, fn) {\n  var res = Stream.prototype.on.call(this, ev, fn);\n  var state = this._readableState;\n\n  if (ev === 'data') {\n    // update readableListening so that resume() may be a no-op\n    // a few lines down. This is needed to support once('readable').\n    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused\n\n    if (state.flowing !== false) this.resume();\n  } else if (ev === 'readable') {\n    if (!state.endEmitted && !state.readableListening) {\n      state.readableListening = state.needReadable = true;\n      state.flowing = false;\n      state.emittedReadable = false;\n      debug('on readable', state.length, state.reading);\n\n      if (state.length) {\n        emitReadable(this);\n      } else if (!state.reading) {\n        process.nextTick(nReadingNextTick, this);\n      }\n    }\n  }\n\n  return res;\n};\n\nReadable.prototype.addListener = Readable.prototype.on;\n\nReadable.prototype.removeListener = function (ev, fn) {\n  var res = Stream.prototype.removeListener.call(this, ev, fn);\n\n  if (ev === 'readable') {\n    // We need to check if there is someone still listening to\n    // readable and reset the state. However this needs to happen\n    // after readable has been emitted but before I/O (nextTick) to\n    // support once('readable', fn) cycles. This means that calling\n    // resume within the same tick will have no\n    // effect.\n    process.nextTick(updateReadableListening, this);\n  }\n\n  return res;\n};\n\nReadable.prototype.removeAllListeners = function (ev) {\n  var res = Stream.prototype.removeAllListeners.apply(this, arguments);\n\n  if (ev === 'readable' || ev === undefined) {\n    // We need to check if there is someone still listening to\n    // readable and reset the state. However this needs to happen\n    // after readable has been emitted but before I/O (nextTick) to\n    // support once('readable', fn) cycles. This means that calling\n    // resume within the same tick will have no\n    // effect.\n    process.nextTick(updateReadableListening, this);\n  }\n\n  return res;\n};\n\nfunction updateReadableListening(self) {\n  var state = self._readableState;\n  state.readableListening = self.listenerCount('readable') > 0;\n\n  if (state.resumeScheduled && !state.paused) {\n    // flowing needs to be set to true now, otherwise\n    // the upcoming resume will not flow.\n    state.flowing = true; // crude way to check if we should resume\n  } else if (self.listenerCount('data') > 0) {\n    self.resume();\n  }\n}\n\nfunction nReadingNextTick(self) {\n  debug('readable nexttick read 0');\n  self.read(0);\n} // pause() and resume() are remnants of the legacy readable stream API\n// If the user uses them, then switch into old mode.\n\n\nReadable.prototype.resume = function () {\n  var state = this._readableState;\n\n  if (!state.flowing) {\n    debug('resume'); // we flow only if there is no one listening\n    // for readable, but we still have to call\n    // resume()\n\n    state.flowing = !state.readableListening;\n    resume(this, state);\n  }\n\n  state.paused = false;\n  return this;\n};\n\nfunction resume(stream, state) {\n  if (!state.resumeScheduled) {\n    state.resumeScheduled = true;\n    process.nextTick(resume_, stream, state);\n  }\n}\n\nfunction resume_(stream, state) {\n  debug('resume', state.reading);\n\n  if (!state.reading) {\n    stream.read(0);\n  }\n\n  state.resumeScheduled = false;\n  stream.emit('resume');\n  flow(stream);\n  if (state.flowing && !state.reading) stream.read(0);\n}\n\nReadable.prototype.pause = function () {\n  debug('call pause flowing=%j', this._readableState.flowing);\n\n  if (this._readableState.flowing !== false) {\n    debug('pause');\n    this._readableState.flowing = false;\n    this.emit('pause');\n  }\n\n  this._readableState.paused = true;\n  return this;\n};\n\nfunction flow(stream) {\n  var state = stream._readableState;\n  debug('flow', state.flowing);\n\n  while (state.flowing && stream.read() !== null) {\n    ;\n  }\n} // wrap an old-style stream as the async data source.\n// This is *not* part of the readable stream interface.\n// It is an ugly unfortunate mess of history.\n\n\nReadable.prototype.wrap = function (stream) {\n  var _this = this;\n\n  var state = this._readableState;\n  var paused = false;\n  stream.on('end', function () {\n    debug('wrapped end');\n\n    if (state.decoder && !state.ended) {\n      var chunk = state.decoder.end();\n      if (chunk && chunk.length) _this.push(chunk);\n    }\n\n    _this.push(null);\n  });\n  stream.on('data', function (chunk) {\n    debug('wrapped data');\n    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode\n\n    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;\n\n    var ret = _this.push(chunk);\n\n    if (!ret) {\n      paused = true;\n      stream.pause();\n    }\n  }); // proxy all the other methods.\n  // important when wrapping filters and duplexes.\n\n  for (var i in stream) {\n    if (this[i] === undefined && typeof stream[i] === 'function') {\n      this[i] = function methodWrap(method) {\n        return function methodWrapReturnFunction() {\n          return stream[method].apply(stream, arguments);\n        };\n      }(i);\n    }\n  } // proxy certain important events.\n\n\n  for (var n = 0; n < kProxyEvents.length; n++) {\n    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));\n  } // when we try to consume some more bytes, simply unpause the\n  // underlying stream.\n\n\n  this._read = function (n) {\n    debug('wrapped _read', n);\n\n    if (paused) {\n      paused = false;\n      stream.resume();\n    }\n  };\n\n  return this;\n};\n\nif (typeof Symbol === 'function') {\n  Readable.prototype[Symbol.asyncIterator] = function () {\n    if (createReadableStreamAsyncIterator === undefined) {\n      createReadableStreamAsyncIterator = __webpack_require__(46);\n    }\n\n    return createReadableStreamAsyncIterator(this);\n  };\n}\n\nObject.defineProperty(Readable.prototype, 'readableHighWaterMark', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._readableState.highWaterMark;\n  }\n});\nObject.defineProperty(Readable.prototype, 'readableBuffer', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._readableState && this._readableState.buffer;\n  }\n});\nObject.defineProperty(Readable.prototype, 'readableFlowing', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._readableState.flowing;\n  },\n  set: function set(state) {\n    if (this._readableState) {\n      this._readableState.flowing = state;\n    }\n  }\n}); // exposed for testing purposes only.\n\nReadable._fromList = fromList;\nObject.defineProperty(Readable.prototype, 'readableLength', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._readableState.length;\n  }\n}); // Pluck off n bytes from an array of buffers.\n// Length is the combined lengths of all the buffers in the list.\n// This function is designed to be inlinable, so please take care when making\n// changes to the function body.\n\nfunction fromList(n, state) {\n  // nothing buffered\n  if (state.length === 0) return null;\n  var ret;\n  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {\n    // read it all, truncate the list\n    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);\n    state.buffer.clear();\n  } else {\n    // read part of list\n    ret = state.buffer.consume(n, state.decoder);\n  }\n  return ret;\n}\n\nfunction endReadable(stream) {\n  var state = stream._readableState;\n  debug('endReadable', state.endEmitted);\n\n  if (!state.endEmitted) {\n    state.ended = true;\n    process.nextTick(endReadableNT, state, stream);\n  }\n}\n\nfunction endReadableNT(state, stream) {\n  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.\n\n  if (!state.endEmitted && state.length === 0) {\n    state.endEmitted = true;\n    stream.readable = false;\n    stream.emit('end');\n\n    if (state.autoDestroy) {\n      // In case of duplex streams we need a way to detect\n      // if the writable side is ready for autoDestroy as well\n      var wState = stream._writableState;\n\n      if (!wState || wState.autoDestroy && wState.finished) {\n        stream.destroy();\n      }\n    }\n  }\n}\n\nif (typeof Symbol === 'function') {\n  Readable.from = function (iterable, opts) {\n    if (from === undefined) {\n      from = __webpack_require__(47);\n    }\n\n    return from(Readable, iterable, opts);\n  };\n}\n\nfunction indexOf(xs, x) {\n  for (var i = 0, l = xs.length; i < l; i++) {\n    if (xs[i] === x) return i;\n  }\n\n  return -1;\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(2)))\n\n/***/ }),\n/* 19 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n/***/ }),\n/* 20 */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = __webpack_require__(19).EventEmitter;\n\n\n/***/ }),\n/* 21 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(process) { // undocumented cb() API, needed for core, not for public API\n\nfunction destroy(err, cb) {\n  var _this = this;\n\n  var readableDestroyed = this._readableState && this._readableState.destroyed;\n  var writableDestroyed = this._writableState && this._writableState.destroyed;\n\n  if (readableDestroyed || writableDestroyed) {\n    if (cb) {\n      cb(err);\n    } else if (err) {\n      if (!this._writableState) {\n        process.nextTick(emitErrorNT, this, err);\n      } else if (!this._writableState.errorEmitted) {\n        this._writableState.errorEmitted = true;\n        process.nextTick(emitErrorNT, this, err);\n      }\n    }\n\n    return this;\n  } // we set destroyed to true before firing error callbacks in order\n  // to make it re-entrance safe in case destroy() is called within callbacks\n\n\n  if (this._readableState) {\n    this._readableState.destroyed = true;\n  } // if this is a duplex stream mark the writable part as destroyed as well\n\n\n  if (this._writableState) {\n    this._writableState.destroyed = true;\n  }\n\n  this._destroy(err || null, function (err) {\n    if (!cb && err) {\n      if (!_this._writableState) {\n        process.nextTick(emitErrorAndCloseNT, _this, err);\n      } else if (!_this._writableState.errorEmitted) {\n        _this._writableState.errorEmitted = true;\n        process.nextTick(emitErrorAndCloseNT, _this, err);\n      } else {\n        process.nextTick(emitCloseNT, _this);\n      }\n    } else if (cb) {\n      process.nextTick(emitCloseNT, _this);\n      cb(err);\n    } else {\n      process.nextTick(emitCloseNT, _this);\n    }\n  });\n\n  return this;\n}\n\nfunction emitErrorAndCloseNT(self, err) {\n  emitErrorNT(self, err);\n  emitCloseNT(self);\n}\n\nfunction emitCloseNT(self) {\n  if (self._writableState && !self._writableState.emitClose) return;\n  if (self._readableState && !self._readableState.emitClose) return;\n  self.emit('close');\n}\n\nfunction undestroy() {\n  if (this._readableState) {\n    this._readableState.destroyed = false;\n    this._readableState.reading = false;\n    this._readableState.ended = false;\n    this._readableState.endEmitted = false;\n  }\n\n  if (this._writableState) {\n    this._writableState.destroyed = false;\n    this._writableState.ended = false;\n    this._writableState.ending = false;\n    this._writableState.finalCalled = false;\n    this._writableState.prefinished = false;\n    this._writableState.finished = false;\n    this._writableState.errorEmitted = false;\n  }\n}\n\nfunction emitErrorNT(self, err) {\n  self.emit('error', err);\n}\n\nfunction errorOrDestroy(stream, err) {\n  // We have tests that rely on errors being emitted\n  // in the same tick, so changing this is semver major.\n  // For now when you opt-in to autoDestroy we allow\n  // the error to be emitted nextTick. In a future\n  // semver major update we should change the default to this.\n  var rState = stream._readableState;\n  var wState = stream._writableState;\n  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);\n}\n\nmodule.exports = {\n  destroy: destroy,\n  undestroy: undestroy,\n  errorOrDestroy: errorOrDestroy\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 22 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar ERR_INVALID_OPT_VALUE = __webpack_require__(5).codes.ERR_INVALID_OPT_VALUE;\n\nfunction highWaterMarkFrom(options, isDuplex, duplexKey) {\n  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;\n}\n\nfunction getHighWaterMark(state, options, duplexKey, isDuplex) {\n  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);\n\n  if (hwm != null) {\n    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {\n      var name = isDuplex ? duplexKey : 'highWaterMark';\n      throw new ERR_INVALID_OPT_VALUE(name, hwm);\n    }\n\n    return Math.floor(hwm);\n  } // Default value\n\n\n  return state.objectMode ? 16 : 16 * 1024;\n}\n\nmodule.exports = {\n  getHighWaterMark: getHighWaterMark\n};\n\n/***/ }),\n/* 23 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// A bit simpler than readable streams.\n// Implement an async ._write(chunk, encoding, cb), and it'll handle all\n// the drain event emission and buffering.\n\n\nmodule.exports = Writable;\n/* <replacement> */\n\nfunction WriteReq(chunk, encoding, cb) {\n  this.chunk = chunk;\n  this.encoding = encoding;\n  this.callback = cb;\n  this.next = null;\n} // It seems a linked list but it is not\n// there will be only 2 of these for each stream\n\n\nfunction CorkedRequest(state) {\n  var _this = this;\n\n  this.next = null;\n  this.entry = null;\n\n  this.finish = function () {\n    onCorkedFinish(_this, state);\n  };\n}\n/* </replacement> */\n\n/*<replacement>*/\n\n\nvar Duplex;\n/*</replacement>*/\n\nWritable.WritableState = WritableState;\n/*<replacement>*/\n\nvar internalUtil = {\n  deprecate: __webpack_require__(44)\n};\n/*</replacement>*/\n\n/*<replacement>*/\n\nvar Stream = __webpack_require__(20);\n/*</replacement>*/\n\n\nvar Buffer = __webpack_require__(0).Buffer;\n\nvar OurUint8Array = global.Uint8Array || function () {};\n\nfunction _uint8ArrayToBuffer(chunk) {\n  return Buffer.from(chunk);\n}\n\nfunction _isUint8Array(obj) {\n  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;\n}\n\nvar destroyImpl = __webpack_require__(21);\n\nvar _require = __webpack_require__(22),\n    getHighWaterMark = _require.getHighWaterMark;\n\nvar _require$codes = __webpack_require__(5).codes,\n    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,\n    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,\n    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,\n    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,\n    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,\n    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,\n    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,\n    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;\n\nvar errorOrDestroy = destroyImpl.errorOrDestroy;\n\n__webpack_require__(7)(Writable, Stream);\n\nfunction nop() {}\n\nfunction WritableState(options, stream, isDuplex) {\n  Duplex = Duplex || __webpack_require__(6);\n  options = options || {}; // Duplex streams are both readable and writable, but share\n  // the same options object.\n  // However, some cases require setting options to different\n  // values for the readable and the writable sides of the duplex stream,\n  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.\n\n  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream\n  // contains buffers or objects.\n\n  this.objectMode = !!options.objectMode;\n  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false\n  // Note: 0 is a valid value, means that we always return false if\n  // the entire buffer is not flushed immediately on write()\n\n  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called\n\n  this.finalCalled = false; // drain event flag.\n\n  this.needDrain = false; // at the start of calling end()\n\n  this.ending = false; // when end() has been called, and returned\n\n  this.ended = false; // when 'finish' is emitted\n\n  this.finished = false; // has it been destroyed\n\n  this.destroyed = false; // should we decode strings into buffers before passing to _write?\n  // this is here so that some node-core streams can optimize string\n  // handling at a lower level.\n\n  var noDecode = options.decodeStrings === false;\n  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string\n  // encoding is 'binary' so we have to make this configurable.\n  // Everything else in the universe uses 'utf8', though.\n\n  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement\n  // of how much we're waiting to get pushed to some underlying\n  // socket or file.\n\n  this.length = 0; // a flag to see when we're in the middle of a write.\n\n  this.writing = false; // when true all writes will be buffered until .uncork() call\n\n  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,\n  // or on a later tick.  We set this to true at first, because any\n  // actions that shouldn't happen until \"later\" should generally also\n  // not happen before the first write call.\n\n  this.sync = true; // a flag to know if we're processing previously buffered items, which\n  // may call the _write() callback in the same tick, so that we don't\n  // end up in an overlapped onwrite situation.\n\n  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)\n\n  this.onwrite = function (er) {\n    onwrite(stream, er);\n  }; // the callback that the user supplies to write(chunk,encoding,cb)\n\n\n  this.writecb = null; // the amount that is being written when _write is called.\n\n  this.writelen = 0;\n  this.bufferedRequest = null;\n  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks\n  // this must be 0 before 'finish' can be emitted\n\n  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs\n  // This is relevant for synchronous Transform streams\n\n  this.prefinished = false; // True if the error was already emitted and should not be thrown again\n\n  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.\n\n  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')\n\n  this.autoDestroy = !!options.autoDestroy; // count buffered requests\n\n  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always\n  // one allocated and free to use, and we maintain at most two\n\n  this.corkedRequestsFree = new CorkedRequest(this);\n}\n\nWritableState.prototype.getBuffer = function getBuffer() {\n  var current = this.bufferedRequest;\n  var out = [];\n\n  while (current) {\n    out.push(current);\n    current = current.next;\n  }\n\n  return out;\n};\n\n(function () {\n  try {\n    Object.defineProperty(WritableState.prototype, 'buffer', {\n      get: internalUtil.deprecate(function writableStateBufferGetter() {\n        return this.getBuffer();\n      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')\n    });\n  } catch (_) {}\n})(); // Test _writableState for inheritance to account for Duplex streams,\n// whose prototype chain only points to Readable.\n\n\nvar realHasInstance;\n\nif (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {\n  realHasInstance = Function.prototype[Symbol.hasInstance];\n  Object.defineProperty(Writable, Symbol.hasInstance, {\n    value: function value(object) {\n      if (realHasInstance.call(this, object)) return true;\n      if (this !== Writable) return false;\n      return object && object._writableState instanceof WritableState;\n    }\n  });\n} else {\n  realHasInstance = function realHasInstance(object) {\n    return object instanceof this;\n  };\n}\n\nfunction Writable(options) {\n  Duplex = Duplex || __webpack_require__(6); // Writable ctor is applied to Duplexes, too.\n  // `realHasInstance` is necessary because using plain `instanceof`\n  // would return false, as no `_writableState` property is attached.\n  // Trying to use the custom `instanceof` for Writable here will also break the\n  // Node.js LazyTransform implementation, which has a non-trivial getter for\n  // `_writableState` that would lead to infinite recursion.\n  // Checking for a Stream.Duplex instance is faster here instead of inside\n  // the WritableState constructor, at least with V8 6.5\n\n  var isDuplex = this instanceof Duplex;\n  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);\n  this._writableState = new WritableState(options, this, isDuplex); // legacy.\n\n  this.writable = true;\n\n  if (options) {\n    if (typeof options.write === 'function') this._write = options.write;\n    if (typeof options.writev === 'function') this._writev = options.writev;\n    if (typeof options.destroy === 'function') this._destroy = options.destroy;\n    if (typeof options.final === 'function') this._final = options.final;\n  }\n\n  Stream.call(this);\n} // Otherwise people can pipe Writable streams, which is just wrong.\n\n\nWritable.prototype.pipe = function () {\n  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());\n};\n\nfunction writeAfterEnd(stream, cb) {\n  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb\n\n  errorOrDestroy(stream, er);\n  process.nextTick(cb, er);\n} // Checks that a user-supplied chunk is valid, especially for the particular\n// mode the stream is in. Currently this means that `null` is never accepted\n// and undefined/non-string values are only allowed in object mode.\n\n\nfunction validChunk(stream, state, chunk, cb) {\n  var er;\n\n  if (chunk === null) {\n    er = new ERR_STREAM_NULL_VALUES();\n  } else if (typeof chunk !== 'string' && !state.objectMode) {\n    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);\n  }\n\n  if (er) {\n    errorOrDestroy(stream, er);\n    process.nextTick(cb, er);\n    return false;\n  }\n\n  return true;\n}\n\nWritable.prototype.write = function (chunk, encoding, cb) {\n  var state = this._writableState;\n  var ret = false;\n\n  var isBuf = !state.objectMode && _isUint8Array(chunk);\n\n  if (isBuf && !Buffer.isBuffer(chunk)) {\n    chunk = _uint8ArrayToBuffer(chunk);\n  }\n\n  if (typeof encoding === 'function') {\n    cb = encoding;\n    encoding = null;\n  }\n\n  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;\n  if (typeof cb !== 'function') cb = nop;\n  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {\n    state.pendingcb++;\n    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);\n  }\n  return ret;\n};\n\nWritable.prototype.cork = function () {\n  this._writableState.corked++;\n};\n\nWritable.prototype.uncork = function () {\n  var state = this._writableState;\n\n  if (state.corked) {\n    state.corked--;\n    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);\n  }\n};\n\nWritable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {\n  // node::ParseEncoding() requires lower case.\n  if (typeof encoding === 'string') encoding = encoding.toLowerCase();\n  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);\n  this._writableState.defaultEncoding = encoding;\n  return this;\n};\n\nObject.defineProperty(Writable.prototype, 'writableBuffer', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._writableState && this._writableState.getBuffer();\n  }\n});\n\nfunction decodeChunk(state, chunk, encoding) {\n  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {\n    chunk = Buffer.from(chunk, encoding);\n  }\n\n  return chunk;\n}\n\nObject.defineProperty(Writable.prototype, 'writableHighWaterMark', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._writableState.highWaterMark;\n  }\n}); // if we're already writing something, then just put this\n// in the queue, and wait our turn.  Otherwise, call _write\n// If we return false, then we need a drain event, so set that flag.\n\nfunction writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {\n  if (!isBuf) {\n    var newChunk = decodeChunk(state, chunk, encoding);\n\n    if (chunk !== newChunk) {\n      isBuf = true;\n      encoding = 'buffer';\n      chunk = newChunk;\n    }\n  }\n\n  var len = state.objectMode ? 1 : chunk.length;\n  state.length += len;\n  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.\n\n  if (!ret) state.needDrain = true;\n\n  if (state.writing || state.corked) {\n    var last = state.lastBufferedRequest;\n    state.lastBufferedRequest = {\n      chunk: chunk,\n      encoding: encoding,\n      isBuf: isBuf,\n      callback: cb,\n      next: null\n    };\n\n    if (last) {\n      last.next = state.lastBufferedRequest;\n    } else {\n      state.bufferedRequest = state.lastBufferedRequest;\n    }\n\n    state.bufferedRequestCount += 1;\n  } else {\n    doWrite(stream, state, false, len, chunk, encoding, cb);\n  }\n\n  return ret;\n}\n\nfunction doWrite(stream, state, writev, len, chunk, encoding, cb) {\n  state.writelen = len;\n  state.writecb = cb;\n  state.writing = true;\n  state.sync = true;\n  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);\n  state.sync = false;\n}\n\nfunction onwriteError(stream, state, sync, er, cb) {\n  --state.pendingcb;\n\n  if (sync) {\n    // defer the callback if we are being called synchronously\n    // to avoid piling up things on the stack\n    process.nextTick(cb, er); // this can emit finish, and it will always happen\n    // after error\n\n    process.nextTick(finishMaybe, stream, state);\n    stream._writableState.errorEmitted = true;\n    errorOrDestroy(stream, er);\n  } else {\n    // the caller expect this to happen before if\n    // it is async\n    cb(er);\n    stream._writableState.errorEmitted = true;\n    errorOrDestroy(stream, er); // this can emit finish, but finish must\n    // always follow error\n\n    finishMaybe(stream, state);\n  }\n}\n\nfunction onwriteStateUpdate(state) {\n  state.writing = false;\n  state.writecb = null;\n  state.length -= state.writelen;\n  state.writelen = 0;\n}\n\nfunction onwrite(stream, er) {\n  var state = stream._writableState;\n  var sync = state.sync;\n  var cb = state.writecb;\n  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();\n  onwriteStateUpdate(state);\n  if (er) onwriteError(stream, state, sync, er, cb);else {\n    // Check if we're actually ready to finish, but don't emit yet\n    var finished = needFinish(state) || stream.destroyed;\n\n    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {\n      clearBuffer(stream, state);\n    }\n\n    if (sync) {\n      process.nextTick(afterWrite, stream, state, finished, cb);\n    } else {\n      afterWrite(stream, state, finished, cb);\n    }\n  }\n}\n\nfunction afterWrite(stream, state, finished, cb) {\n  if (!finished) onwriteDrain(stream, state);\n  state.pendingcb--;\n  cb();\n  finishMaybe(stream, state);\n} // Must force callback to be called on nextTick, so that we don't\n// emit 'drain' before the write() consumer gets the 'false' return\n// value, and has a chance to attach a 'drain' listener.\n\n\nfunction onwriteDrain(stream, state) {\n  if (state.length === 0 && state.needDrain) {\n    state.needDrain = false;\n    stream.emit('drain');\n  }\n} // if there's something in the buffer waiting, then process it\n\n\nfunction clearBuffer(stream, state) {\n  state.bufferProcessing = true;\n  var entry = state.bufferedRequest;\n\n  if (stream._writev && entry && entry.next) {\n    // Fast case, write everything using _writev()\n    var l = state.bufferedRequestCount;\n    var buffer = new Array(l);\n    var holder = state.corkedRequestsFree;\n    holder.entry = entry;\n    var count = 0;\n    var allBuffers = true;\n\n    while (entry) {\n      buffer[count] = entry;\n      if (!entry.isBuf) allBuffers = false;\n      entry = entry.next;\n      count += 1;\n    }\n\n    buffer.allBuffers = allBuffers;\n    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time\n    // as the hot path ends with doWrite\n\n    state.pendingcb++;\n    state.lastBufferedRequest = null;\n\n    if (holder.next) {\n      state.corkedRequestsFree = holder.next;\n      holder.next = null;\n    } else {\n      state.corkedRequestsFree = new CorkedRequest(state);\n    }\n\n    state.bufferedRequestCount = 0;\n  } else {\n    // Slow case, write chunks one-by-one\n    while (entry) {\n      var chunk = entry.chunk;\n      var encoding = entry.encoding;\n      var cb = entry.callback;\n      var len = state.objectMode ? 1 : chunk.length;\n      doWrite(stream, state, false, len, chunk, encoding, cb);\n      entry = entry.next;\n      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then\n      // it means that we need to wait until it does.\n      // also, that means that the chunk and cb are currently\n      // being processed, so move the buffer counter past them.\n\n      if (state.writing) {\n        break;\n      }\n    }\n\n    if (entry === null) state.lastBufferedRequest = null;\n  }\n\n  state.bufferedRequest = entry;\n  state.bufferProcessing = false;\n}\n\nWritable.prototype._write = function (chunk, encoding, cb) {\n  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));\n};\n\nWritable.prototype._writev = null;\n\nWritable.prototype.end = function (chunk, encoding, cb) {\n  var state = this._writableState;\n\n  if (typeof chunk === 'function') {\n    cb = chunk;\n    chunk = null;\n    encoding = null;\n  } else if (typeof encoding === 'function') {\n    cb = encoding;\n    encoding = null;\n  }\n\n  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks\n\n  if (state.corked) {\n    state.corked = 1;\n    this.uncork();\n  } // ignore unnecessary end() calls.\n\n\n  if (!state.ending) endWritable(this, state, cb);\n  return this;\n};\n\nObject.defineProperty(Writable.prototype, 'writableLength', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    return this._writableState.length;\n  }\n});\n\nfunction needFinish(state) {\n  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;\n}\n\nfunction callFinal(stream, state) {\n  stream._final(function (err) {\n    state.pendingcb--;\n\n    if (err) {\n      errorOrDestroy(stream, err);\n    }\n\n    state.prefinished = true;\n    stream.emit('prefinish');\n    finishMaybe(stream, state);\n  });\n}\n\nfunction prefinish(stream, state) {\n  if (!state.prefinished && !state.finalCalled) {\n    if (typeof stream._final === 'function' && !state.destroyed) {\n      state.pendingcb++;\n      state.finalCalled = true;\n      process.nextTick(callFinal, stream, state);\n    } else {\n      state.prefinished = true;\n      stream.emit('prefinish');\n    }\n  }\n}\n\nfunction finishMaybe(stream, state) {\n  var need = needFinish(state);\n\n  if (need) {\n    prefinish(stream, state);\n\n    if (state.pendingcb === 0) {\n      state.finished = true;\n      stream.emit('finish');\n\n      if (state.autoDestroy) {\n        // In case of duplex streams we need a way to detect\n        // if the readable side is ready for autoDestroy as well\n        var rState = stream._readableState;\n\n        if (!rState || rState.autoDestroy && rState.endEmitted) {\n          stream.destroy();\n        }\n      }\n    }\n  }\n\n  return need;\n}\n\nfunction endWritable(stream, state, cb) {\n  state.ending = true;\n  finishMaybe(stream, state);\n\n  if (cb) {\n    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);\n  }\n\n  state.ended = true;\n  stream.writable = false;\n}\n\nfunction onCorkedFinish(corkReq, state, err) {\n  var entry = corkReq.entry;\n  corkReq.entry = null;\n\n  while (entry) {\n    var cb = entry.callback;\n    state.pendingcb--;\n    cb(err);\n    entry = entry.next;\n  } // reuse the free corkReq.\n\n\n  state.corkedRequestsFree.next = corkReq;\n}\n\nObject.defineProperty(Writable.prototype, 'destroyed', {\n  // making it explicit this property is not enumerable\n  // because otherwise some prototype manipulation in\n  // userland will fail\n  enumerable: false,\n  get: function get() {\n    if (this._writableState === undefined) {\n      return false;\n    }\n\n    return this._writableState.destroyed;\n  },\n  set: function set(value) {\n    // we ignore the value if the stream\n    // has not been initialized yet\n    if (!this._writableState) {\n      return;\n    } // backward compatibility, the user is explicitly\n    // managing destroyed\n\n\n    this._writableState.destroyed = value;\n  }\n});\nWritable.prototype.destroy = destroyImpl.destroy;\nWritable.prototype._undestroy = destroyImpl.undestroy;\n\nWritable.prototype._destroy = function (err, cb) {\n  cb(err);\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(2)))\n\n/***/ }),\n/* 24 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n/*<replacement>*/\n\nvar Buffer = __webpack_require__(45).Buffer;\n/*</replacement>*/\n\nvar isEncoding = Buffer.isEncoding || function (encoding) {\n  encoding = '' + encoding;\n  switch (encoding && encoding.toLowerCase()) {\n    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':\n      return true;\n    default:\n      return false;\n  }\n};\n\nfunction _normalizeEncoding(enc) {\n  if (!enc) return 'utf8';\n  var retried;\n  while (true) {\n    switch (enc) {\n      case 'utf8':\n      case 'utf-8':\n        return 'utf8';\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return 'utf16le';\n      case 'latin1':\n      case 'binary':\n        return 'latin1';\n      case 'base64':\n      case 'ascii':\n      case 'hex':\n        return enc;\n      default:\n        if (retried) return; // undefined\n        enc = ('' + enc).toLowerCase();\n        retried = true;\n    }\n  }\n};\n\n// Do not cache `Buffer.isEncoding` when checking encoding names as some\n// modules monkey-patch it to support additional encodings\nfunction normalizeEncoding(enc) {\n  var nenc = _normalizeEncoding(enc);\n  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);\n  return nenc || enc;\n}\n\n// StringDecoder provides an interface for efficiently splitting a series of\n// buffers into a series of JS strings without breaking apart multi-byte\n// characters.\nexports.StringDecoder = StringDecoder;\nfunction StringDecoder(encoding) {\n  this.encoding = normalizeEncoding(encoding);\n  var nb;\n  switch (this.encoding) {\n    case 'utf16le':\n      this.text = utf16Text;\n      this.end = utf16End;\n      nb = 4;\n      break;\n    case 'utf8':\n      this.fillLast = utf8FillLast;\n      nb = 4;\n      break;\n    case 'base64':\n      this.text = base64Text;\n      this.end = base64End;\n      nb = 3;\n      break;\n    default:\n      this.write = simpleWrite;\n      this.end = simpleEnd;\n      return;\n  }\n  this.lastNeed = 0;\n  this.lastTotal = 0;\n  this.lastChar = Buffer.allocUnsafe(nb);\n}\n\nStringDecoder.prototype.write = function (buf) {\n  if (buf.length === 0) return '';\n  var r;\n  var i;\n  if (this.lastNeed) {\n    r = this.fillLast(buf);\n    if (r === undefined) return '';\n    i = this.lastNeed;\n    this.lastNeed = 0;\n  } else {\n    i = 0;\n  }\n  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);\n  return r || '';\n};\n\nStringDecoder.prototype.end = utf8End;\n\n// Returns only complete characters in a Buffer\nStringDecoder.prototype.text = utf8Text;\n\n// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer\nStringDecoder.prototype.fillLast = function (buf) {\n  if (this.lastNeed <= buf.length) {\n    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);\n    return this.lastChar.toString(this.encoding, 0, this.lastTotal);\n  }\n  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);\n  this.lastNeed -= buf.length;\n};\n\n// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a\n// continuation byte. If an invalid byte is detected, -2 is returned.\nfunction utf8CheckByte(byte) {\n  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;\n  return byte >> 6 === 0x02 ? -1 : -2;\n}\n\n// Checks at most 3 bytes at the end of a Buffer in order to detect an\n// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)\n// needed to complete the UTF-8 character (if applicable) are returned.\nfunction utf8CheckIncomplete(self, buf, i) {\n  var j = buf.length - 1;\n  if (j < i) return 0;\n  var nb = utf8CheckByte(buf[j]);\n  if (nb >= 0) {\n    if (nb > 0) self.lastNeed = nb - 1;\n    return nb;\n  }\n  if (--j < i || nb === -2) return 0;\n  nb = utf8CheckByte(buf[j]);\n  if (nb >= 0) {\n    if (nb > 0) self.lastNeed = nb - 2;\n    return nb;\n  }\n  if (--j < i || nb === -2) return 0;\n  nb = utf8CheckByte(buf[j]);\n  if (nb >= 0) {\n    if (nb > 0) {\n      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;\n    }\n    return nb;\n  }\n  return 0;\n}\n\n// Validates as many continuation bytes for a multi-byte UTF-8 character as\n// needed or are available. If we see a non-continuation byte where we expect\n// one, we \"replace\" the validated continuation bytes we've seen so far with\n// a single UTF-8 replacement character ('\\ufffd'), to match v8's UTF-8 decoding\n// behavior. The continuation byte check is included three times in the case\n// where all of the continuation bytes for a character exist in the same buffer.\n// It is also done this way as a slight performance increase instead of using a\n// loop.\nfunction utf8CheckExtraBytes(self, buf, p) {\n  if ((buf[0] & 0xC0) !== 0x80) {\n    self.lastNeed = 0;\n    return '\\ufffd';\n  }\n  if (self.lastNeed > 1 && buf.length > 1) {\n    if ((buf[1] & 0xC0) !== 0x80) {\n      self.lastNeed = 1;\n      return '\\ufffd';\n    }\n    if (self.lastNeed > 2 && buf.length > 2) {\n      if ((buf[2] & 0xC0) !== 0x80) {\n        self.lastNeed = 2;\n        return '\\ufffd';\n      }\n    }\n  }\n}\n\n// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.\nfunction utf8FillLast(buf) {\n  var p = this.lastTotal - this.lastNeed;\n  var r = utf8CheckExtraBytes(this, buf, p);\n  if (r !== undefined) return r;\n  if (this.lastNeed <= buf.length) {\n    buf.copy(this.lastChar, p, 0, this.lastNeed);\n    return this.lastChar.toString(this.encoding, 0, this.lastTotal);\n  }\n  buf.copy(this.lastChar, p, 0, buf.length);\n  this.lastNeed -= buf.length;\n}\n\n// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a\n// partial character, the character's bytes are buffered until the required\n// number of bytes are available.\nfunction utf8Text(buf, i) {\n  var total = utf8CheckIncomplete(this, buf, i);\n  if (!this.lastNeed) return buf.toString('utf8', i);\n  this.lastTotal = total;\n  var end = buf.length - (total - this.lastNeed);\n  buf.copy(this.lastChar, 0, end);\n  return buf.toString('utf8', i, end);\n}\n\n// For UTF-8, a replacement character is added when ending on a partial\n// character.\nfunction utf8End(buf) {\n  var r = buf && buf.length ? this.write(buf) : '';\n  if (this.lastNeed) return r + '\\ufffd';\n  return r;\n}\n\n// UTF-16LE typically needs two bytes per character, but even if we have an even\n// number of bytes available, we need to check if we end on a leading/high\n// surrogate. In that case, we need to wait for the next two bytes in order to\n// decode the last character properly.\nfunction utf16Text(buf, i) {\n  if ((buf.length - i) % 2 === 0) {\n    var r = buf.toString('utf16le', i);\n    if (r) {\n      var c = r.charCodeAt(r.length - 1);\n      if (c >= 0xD800 && c <= 0xDBFF) {\n        this.lastNeed = 2;\n        this.lastTotal = 4;\n        this.lastChar[0] = buf[buf.length - 2];\n        this.lastChar[1] = buf[buf.length - 1];\n        return r.slice(0, -1);\n      }\n    }\n    return r;\n  }\n  this.lastNeed = 1;\n  this.lastTotal = 2;\n  this.lastChar[0] = buf[buf.length - 1];\n  return buf.toString('utf16le', i, buf.length - 1);\n}\n\n// For UTF-16LE we do not explicitly append special replacement characters if we\n// end on a partial character, we simply let v8 handle that.\nfunction utf16End(buf) {\n  var r = buf && buf.length ? this.write(buf) : '';\n  if (this.lastNeed) {\n    var end = this.lastTotal - this.lastNeed;\n    return r + this.lastChar.toString('utf16le', 0, end);\n  }\n  return r;\n}\n\nfunction base64Text(buf, i) {\n  var n = (buf.length - i) % 3;\n  if (n === 0) return buf.toString('base64', i);\n  this.lastNeed = 3 - n;\n  this.lastTotal = 3;\n  if (n === 1) {\n    this.lastChar[0] = buf[buf.length - 1];\n  } else {\n    this.lastChar[0] = buf[buf.length - 2];\n    this.lastChar[1] = buf[buf.length - 1];\n  }\n  return buf.toString('base64', i, buf.length - n);\n}\n\nfunction base64End(buf) {\n  var r = buf && buf.length ? this.write(buf) : '';\n  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);\n  return r;\n}\n\n// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)\nfunction simpleWrite(buf) {\n  return buf.toString(this.encoding);\n}\n\nfunction simpleEnd(buf) {\n  return buf && buf.length ? this.write(buf) : '';\n}\n\n/***/ }),\n/* 25 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// a transform stream is a readable/writable stream where you do\n// something with the data.  Sometimes it's called a \"filter\",\n// but that's not a great name for it, since that implies a thing where\n// some bits pass through, and others are simply ignored.  (That would\n// be a valid example of a transform, of course.)\n//\n// While the output is causally related to the input, it's not a\n// necessarily symmetric or synchronous transformation.  For example,\n// a zlib stream might take multiple plain-text writes(), and then\n// emit a single compressed chunk some time in the future.\n//\n// Here's how this works:\n//\n// The Transform stream has all the aspects of the readable and writable\n// stream classes.  When you write(chunk), that calls _write(chunk,cb)\n// internally, and returns false if there's a lot of pending writes\n// buffered up.  When you call read(), that calls _read(n) until\n// there's enough pending readable data buffered up.\n//\n// In a transform stream, the written data is placed in a buffer.  When\n// _read(n) is called, it transforms the queued up data, calling the\n// buffered _write cb's as it consumes chunks.  If consuming a single\n// written chunk would result in multiple output chunks, then the first\n// outputted bit calls the readcb, and subsequent chunks just go into\n// the read buffer, and will cause it to emit 'readable' if necessary.\n//\n// This way, back-pressure is actually determined by the reading side,\n// since _read has to be called to start processing a new chunk.  However,\n// a pathological inflate type of transform can cause excessive buffering\n// here.  For example, imagine a stream where every byte of input is\n// interpreted as an integer from 0-255, and then results in that many\n// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in\n// 1kb of data being output.  In this case, you could write a very small\n// amount of input, and end up with a very large amount of output.  In\n// such a pathological inflating mechanism, there'd be no way to tell\n// the system to stop doing the transform.  A single 4MB write could\n// cause the system to run out of memory.\n//\n// However, even in such a pathological case, only a single written chunk\n// would be consumed, and then the rest would wait (un-transformed) until\n// the results of the previous transformed chunk were consumed.\n\n\nmodule.exports = Transform;\n\nvar _require$codes = __webpack_require__(5).codes,\n    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,\n    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,\n    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,\n    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;\n\nvar Duplex = __webpack_require__(6);\n\n__webpack_require__(7)(Transform, Duplex);\n\nfunction afterTransform(er, data) {\n  var ts = this._transformState;\n  ts.transforming = false;\n  var cb = ts.writecb;\n\n  if (cb === null) {\n    return this.emit('error', new ERR_MULTIPLE_CALLBACK());\n  }\n\n  ts.writechunk = null;\n  ts.writecb = null;\n  if (data != null) // single equals check for both `null` and `undefined`\n    this.push(data);\n  cb(er);\n  var rs = this._readableState;\n  rs.reading = false;\n\n  if (rs.needReadable || rs.length < rs.highWaterMark) {\n    this._read(rs.highWaterMark);\n  }\n}\n\nfunction Transform(options) {\n  if (!(this instanceof Transform)) return new Transform(options);\n  Duplex.call(this, options);\n  this._transformState = {\n    afterTransform: afterTransform.bind(this),\n    needTransform: false,\n    transforming: false,\n    writecb: null,\n    writechunk: null,\n    writeencoding: null\n  }; // start out asking for a readable event once data is transformed.\n\n  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things\n  // that Readable wants before the first _read call, so unset the\n  // sync guard flag.\n\n  this._readableState.sync = false;\n\n  if (options) {\n    if (typeof options.transform === 'function') this._transform = options.transform;\n    if (typeof options.flush === 'function') this._flush = options.flush;\n  } // When the writable side finishes, then flush out anything remaining.\n\n\n  this.on('prefinish', prefinish);\n}\n\nfunction prefinish() {\n  var _this = this;\n\n  if (typeof this._flush === 'function' && !this._readableState.destroyed) {\n    this._flush(function (er, data) {\n      done(_this, er, data);\n    });\n  } else {\n    done(this, null, null);\n  }\n}\n\nTransform.prototype.push = function (chunk, encoding) {\n  this._transformState.needTransform = false;\n  return Duplex.prototype.push.call(this, chunk, encoding);\n}; // This is the part where you do stuff!\n// override this function in implementation classes.\n// 'chunk' is an input chunk.\n//\n// Call `push(newChunk)` to pass along transformed output\n// to the readable side.  You may call 'push' zero or more times.\n//\n// Call `cb(err)` when you are done with this chunk.  If you pass\n// an error, then that'll put the hurt on the whole operation.  If you\n// never call cb(), then you'll never get another chunk.\n\n\nTransform.prototype._transform = function (chunk, encoding, cb) {\n  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));\n};\n\nTransform.prototype._write = function (chunk, encoding, cb) {\n  var ts = this._transformState;\n  ts.writecb = cb;\n  ts.writechunk = chunk;\n  ts.writeencoding = encoding;\n\n  if (!ts.transforming) {\n    var rs = this._readableState;\n    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);\n  }\n}; // Doesn't matter what the args are here.\n// _transform does all the work.\n// That we got here means that the readable side wants more data.\n\n\nTransform.prototype._read = function (n) {\n  var ts = this._transformState;\n\n  if (ts.writechunk !== null && !ts.transforming) {\n    ts.transforming = true;\n\n    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);\n  } else {\n    // mark that we need a transform, so that any data that comes in\n    // will get processed, now that we've asked for it.\n    ts.needTransform = true;\n  }\n};\n\nTransform.prototype._destroy = function (err, cb) {\n  Duplex.prototype._destroy.call(this, err, function (err2) {\n    cb(err2);\n  });\n};\n\nfunction done(stream, er, data) {\n  if (er) return stream.emit('error', er);\n  if (data != null) // single equals check for both `null` and `undefined`\n    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases\n  // if there's nothing in the write buffer, then that means\n  // that nothing more will ever be provided\n\n  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();\n  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();\n  return stream.push(null);\n}\n\n/***/ }),\n/* 26 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return spawn; });\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var observable_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);\n/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);\n/* harmony import */ var _types_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);\n/* harmony import */ var _invocation_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nconst debugMessages = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"threads:master:messages\");\nconst debugSpawn = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"threads:master:spawn\");\nconst debugThreadUtils = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"threads:master:thread-utils\");\nconst isInitMessage = (data) => data && data.type === \"init\";\nconst isUncaughtErrorMessage = (data) => data && data.type === \"uncaughtError\";\nconst initMessageTimeout = typeof process !== \"undefined\" && process.env.THREADS_WORKER_INIT_TIMEOUT\n    ? Number.parseInt(process.env.THREADS_WORKER_INIT_TIMEOUT, 10)\n    : 10000;\nfunction withTimeout(promise, timeoutInMs, errorMessage) {\n    return __awaiter(this, void 0, void 0, function* () {\n        let timeoutHandle;\n        const timeout = new Promise((resolve, reject) => {\n            timeoutHandle = setTimeout(() => reject(Error(errorMessage)), timeoutInMs);\n        });\n        const result = yield Promise.race([\n            promise,\n            timeout\n        ]);\n        clearTimeout(timeoutHandle);\n        return result;\n    });\n}\nfunction receiveInitMessage(worker) {\n    return new Promise((resolve, reject) => {\n        const messageHandler = ((event) => {\n            debugMessages(\"Message from worker before finishing initialization:\", event.data);\n            if (isInitMessage(event.data)) {\n                worker.removeEventListener(\"message\", messageHandler);\n                resolve(event.data);\n            }\n            else if (isUncaughtErrorMessage(event.data)) {\n                worker.removeEventListener(\"message\", messageHandler);\n                reject(Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* deserialize */ \"a\"])(event.data.error));\n            }\n        });\n        worker.addEventListener(\"message\", messageHandler);\n    });\n}\nfunction createEventObservable(worker, workerTermination) {\n    return new observable_fns__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"](observer => {\n        const messageHandler = ((messageEvent) => {\n            const workerEvent = {\n                type: _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ \"a\"].message,\n                data: messageEvent.data\n            };\n            observer.next(workerEvent);\n        });\n        const rejectionHandler = ((errorEvent) => {\n            debugThreadUtils(\"Unhandled promise rejection event in thread:\", errorEvent);\n            const workerEvent = {\n                type: _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ \"a\"].internalError,\n                error: Error(errorEvent.reason)\n            };\n            observer.next(workerEvent);\n        });\n        worker.addEventListener(\"message\", messageHandler);\n        worker.addEventListener(\"unhandledrejection\", rejectionHandler);\n        workerTermination.then(() => {\n            const terminationEvent = {\n                type: _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ \"a\"].termination\n            };\n            worker.removeEventListener(\"message\", messageHandler);\n            worker.removeEventListener(\"unhandledrejection\", rejectionHandler);\n            observer.next(terminationEvent);\n            observer.complete();\n        });\n    });\n}\nfunction createTerminator(worker) {\n    const [termination, resolver] = Object(_promise__WEBPACK_IMPORTED_MODULE_3__[/* createPromiseWithResolver */ \"a\"])();\n    const terminate = () => __awaiter(this, void 0, void 0, function* () {\n        debugThreadUtils(\"Terminating worker\");\n        // Newer versions of worker_threads workers return a promise\n        yield worker.terminate();\n        resolver();\n    });\n    return { terminate, termination };\n}\nfunction setPrivateThreadProps(raw, worker, workerEvents, terminate) {\n    const workerErrors = workerEvents\n        .filter(event => event.type === _types_master__WEBPACK_IMPORTED_MODULE_5__[/* WorkerEventType */ \"a\"].internalError)\n        .map(errorEvent => errorEvent.error);\n    // tslint:disable-next-line prefer-object-spread\n    return Object.assign(raw, {\n        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $errors */ \"a\"]]: workerErrors,\n        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $events */ \"b\"]]: workerEvents,\n        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $terminate */ \"c\"]]: terminate,\n        [_symbols__WEBPACK_IMPORTED_MODULE_4__[/* $worker */ \"e\"]]: worker\n    });\n}\n/**\n * Spawn a new thread. Takes a fresh worker instance, wraps it in a thin\n * abstraction layer to provide the transparent API and verifies that\n * the worker has initialized successfully.\n *\n * @param worker Instance of `Worker`. Either a web worker, `worker_threads` worker or `tiny-worker` worker.\n * @param [options]\n * @param [options.timeout] Init message timeout. Default: 10000 or set by environment variable.\n */\nfunction spawn(worker, options) {\n    return __awaiter(this, void 0, void 0, function* () {\n        debugSpawn(\"Initializing new thread\");\n        const initMessage = yield withTimeout(receiveInitMessage(worker), options && options.timeout ? options.timeout : initMessageTimeout, `Timeout: Did not receive an init message from worker after ${initMessageTimeout}ms. Make sure the worker calls expose().`);\n        const exposed = initMessage.exposed;\n        const { termination, terminate } = createTerminator(worker);\n        const events = createEventObservable(worker, termination);\n        if (exposed.type === \"function\") {\n            const proxy = Object(_invocation_proxy__WEBPACK_IMPORTED_MODULE_6__[/* createProxyFunction */ \"a\"])(worker);\n            return setPrivateThreadProps(proxy, worker, events, terminate);\n        }\n        else if (exposed.type === \"module\") {\n            const proxy = Object(_invocation_proxy__WEBPACK_IMPORTED_MODULE_6__[/* createProxyModule */ \"b\"])(worker, exposed.methods);\n            return setPrivateThreadProps(proxy, worker, events, terminate);\n        }\n        else {\n            const type = exposed.type;\n            throw Error(`Worker init message states unexpected type of expose(): ${type}`);\n        }\n    });\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 27 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar arrayWithoutHoles = __webpack_require__(35);\n\nvar iterableToArray = __webpack_require__(17);\n\nvar nonIterableSpread = __webpack_require__(36);\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n/***/ }),\n/* 28 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar arrayWithHoles = __webpack_require__(37);\n\nvar iterableToArray = __webpack_require__(17);\n\nvar nonIterableRest = __webpack_require__(38);\n\nfunction _toArray(arr) {\n  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();\n}\n\nmodule.exports = _toArray;\n\n/***/ }),\n/* 29 */\n/***/ (function(module, exports, __webpack_require__) {\n\n// ==ClosureCompiler==\n// @output_file_name default.js\n// @compilation_level SIMPLE_OPTIMIZATIONS\n// ==/ClosureCompiler==\n\n/**\n * @author: Tobias Nickel\n * @created: 06.04.2015\n * I needed a small xmlparser chat can be used in a worker.\n */\n\n/**\n * @typedef tNode \n * @property {string} tagName \n * @property {object} [attributes] \n * @property {tNode|string|number[]} children \n **/\n\n/**\n * parseXML / html into a DOM Object. with no validation and some failur tolerance\n * @param {string} S your XML to parse\n * @param options {object} all other options:\n * searchId {string} the id of a single element, that should be returned. using this will increase the speed rapidly\n * filter {function} filter method, as you know it from Array.filter. but is goes throw the DOM.\n\n * @return {tNode[]}\n */\nfunction tXml(S, options) {\n    \"use strict\";\n    options = options || {};\n\n    var pos = options.pos || 0;\n\n    var openBracket = \"<\";\n    var openBracketCC = \"<\".charCodeAt(0);\n    var closeBracket = \">\";\n    var closeBracketCC = \">\".charCodeAt(0);\n    var minus = \"-\";\n    var minusCC = \"-\".charCodeAt(0);\n    var slash = \"/\";\n    var slashCC = \"/\".charCodeAt(0);\n    var exclamation = '!';\n    var exclamationCC = '!'.charCodeAt(0);\n    var singleQuote = \"'\";\n    var singleQuoteCC = \"'\".charCodeAt(0);\n    var doubleQuote = '\"';\n    var doubleQuoteCC = '\"'.charCodeAt(0);\n\n    /**\n     * parsing a list of entries\n     */\n    function parseChildren() {\n        var children = [];\n        while (S[pos]) {\n            if (S.charCodeAt(pos) == openBracketCC) {\n                if (S.charCodeAt(pos + 1) === slashCC) {\n                    pos = S.indexOf(closeBracket, pos);\n                    if (pos + 1) pos += 1\n                    return children;\n                } else if (S.charCodeAt(pos + 1) === exclamationCC) {\n                    if (S.charCodeAt(pos + 2) == minusCC) {\n                        //comment support\n                        while (pos !== -1 && !(S.charCodeAt(pos) === closeBracketCC && S.charCodeAt(pos - 1) == minusCC && S.charCodeAt(pos - 2) == minusCC && pos != -1)) {\n                            pos = S.indexOf(closeBracket, pos + 1);\n                        }\n                        if (pos === -1) {\n                            pos = S.length\n                        }\n                    } else {\n                        // doctypesupport\n                        pos += 2;\n                        while (S.charCodeAt(pos) !== closeBracketCC && S[pos]) {\n                            pos++;\n                        }\n                    }\n                    pos++;\n                    continue;\n                }\n                var node = parseNode();\n                children.push(node);\n            } else {\n                var text = parseText()\n                if (text.trim().length > 0)\n                    children.push(text);\n                pos++;\n            }\n        }\n        return children;\n    }\n\n    /**\n     *    returns the text outside of texts until the first '<'\n     */\n    function parseText() {\n        var start = pos;\n        pos = S.indexOf(openBracket, pos) - 1;\n        if (pos === -2)\n            pos = S.length;\n        return S.slice(start, pos + 1);\n    }\n    /**\n     *    returns text until the first nonAlphebetic letter\n     */\n    var nameSpacer = '\\n\\t>/= ';\n\n    function parseName() {\n        var start = pos;\n        while (nameSpacer.indexOf(S[pos]) === -1 && S[pos]) {\n            pos++;\n        }\n        return S.slice(start, pos);\n    }\n    /**\n     *    is parsing a node, including tagName, Attributes and its children,\n     * to parse children it uses the parseChildren again, that makes the parsing recursive\n     */\n    var NoChildNodes = options.noChildNodes || ['img', 'br', 'input', 'meta', 'link'];\n\n    function parseNode() {\n        pos++;\n        const tagName = parseName();\n        const attributes = {};\n        let children = [];\n\n        // parsing attributes\n        while (S.charCodeAt(pos) !== closeBracketCC && S[pos]) {\n            var c = S.charCodeAt(pos);\n            if ((c > 64 && c < 91) || (c > 96 && c < 123)) {\n                //if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(S[pos])!==-1 ){\n                var name = parseName();\n                // search beginning of the string\n                var code = S.charCodeAt(pos);\n                while (code && code !== singleQuoteCC && code !== doubleQuoteCC && !((code > 64 && code < 91) || (code > 96 && code < 123)) && code !== closeBracketCC) {\n                    pos++;\n                    code = S.charCodeAt(pos);\n                }\n                if (code === singleQuoteCC || code === doubleQuoteCC) {\n                    var value = parseString();\n                    if (pos === -1) {\n                        return {\n                            tagName,\n                            attributes,\n                            children,\n                        };\n                    }\n                } else {\n                    value = null;\n                    pos--;\n                }\n                attributes[name] = value;\n            }\n            pos++;\n        }\n        // optional parsing of children\n        if (S.charCodeAt(pos - 1) !== slashCC) {\n            if (tagName == \"script\") {\n                var start = pos + 1;\n                pos = S.indexOf('</script>', pos);\n                children = [S.slice(start, pos - 1)];\n                pos += 9;\n            } else if (tagName == \"style\") {\n                var start = pos + 1;\n                pos = S.indexOf('</style>', pos);\n                children = [S.slice(start, pos - 1)];\n                pos += 8;\n            } else if (NoChildNodes.indexOf(tagName) == -1) {\n                pos++;\n                children = parseChildren(name);\n            }\n        } else {\n            pos++;\n        }\n        return {\n            tagName,\n            attributes,\n            children,\n        };\n    }\n\n    /**\n     *    is parsing a string, that starts with a char and with the same usually  ' or \"\n     */\n\n    function parseString() {\n        var startChar = S[pos];\n        var startpos = ++pos;\n        pos = S.indexOf(startChar, startpos)\n        return S.slice(startpos, pos);\n    }\n\n    /**\n     *\n     */\n    function findElements() {\n        var r = new RegExp('\\\\s' + options.attrName + '\\\\s*=[\\'\"]' + options.attrValue + '[\\'\"]').exec(S)\n        if (r) {\n            return r.index;\n        } else {\n            return -1;\n        }\n    }\n\n    var out = null;\n    if (options.attrValue !== undefined) {\n        options.attrName = options.attrName || 'id';\n        var out = [];\n\n        while ((pos = findElements()) !== -1) {\n            pos = S.lastIndexOf('<', pos);\n            if (pos !== -1) {\n                out.push(parseNode());\n            }\n            S = S.substr(pos);\n            pos = 0;\n        }\n    } else if (options.parseNode) {\n        out = parseNode()\n    } else {\n        out = parseChildren();\n    }\n\n    if (options.filter) {\n        out = tXml.filter(out, options.filter);\n    }\n\n    if (options.setPos) {\n        out.pos = pos;\n    }\n\n    return out;\n}\n\n/**\n * transform the DomObject to an object that is like the object of PHPs simplexmp_load_*() methods.\n * this format helps you to write that is more likely to keep your programm working, even if there a small changes in the XML schema.\n * be aware, that it is not possible to reproduce the original xml from a simplified version, because the order of elements is not saved.\n * therefore your programm will be more flexible and easyer to read.\n *\n * @param {tNode[]} children the childrenList\n */\ntXml.simplify = function simplify(children) {\n    var out = {};\n    if (!children.length) {\n        return '';\n    }\n\n    if (children.length === 1 && typeof children[0] == 'string') {\n        return children[0];\n    }\n    // map each object\n    children.forEach(function(child) {\n        if (typeof child !== 'object') {\n            return;\n        }\n        if (!out[child.tagName])\n            out[child.tagName] = [];\n        var kids = tXml.simplify(child.children||[]);\n        out[child.tagName].push(kids);\n        if (child.attributes) {\n            kids._attributes = child.attributes;\n        }\n    });\n\n    for (var i in out) {\n        if (out[i].length == 1) {\n            out[i] = out[i][0];\n        }\n    }\n\n    return out;\n};\n\n/**\n * behaves the same way as Array.filter, if the filter method return true, the element is in the resultList\n * @params children{Array} the children of a node\n * @param f{function} the filter method\n */\ntXml.filter = function(children, f) {\n    var out = [];\n    children.forEach(function(child) {\n        if (typeof(child) === 'object' && f(child)) out.push(child);\n        if (child.children) {\n            var kids = tXml.filter(child.children, f);\n            out = out.concat(kids);\n        }\n    });\n    return out;\n};\n\n/**\n * stringify a previously parsed string object.\n * this is useful,\n *  1. to remove whitespaces\n * 2. to recreate xml data, with some changed data.\n * @param {tNode} O the object to Stringify\n */\ntXml.stringify = function TOMObjToXML(O) {\n    var out = '';\n\n    function writeChildren(O) {\n        if (O)\n            for (var i = 0; i < O.length; i++) {\n                if (typeof O[i] == 'string') {\n                    out += O[i].trim();\n                } else {\n                    writeNode(O[i]);\n                }\n            }\n    }\n\n    function writeNode(N) {\n        out += \"<\" + N.tagName;\n        for (var i in N.attributes) {\n            if (N.attributes[i] === null) {\n                out += ' ' + i;\n            } else if (N.attributes[i].indexOf('\"') === -1) {\n                out += ' ' + i + '=\"' + N.attributes[i].trim() + '\"';\n            } else {\n                out += ' ' + i + \"='\" + N.attributes[i].trim() + \"'\";\n            }\n        }\n        out += '>';\n        writeChildren(N.children);\n        out += '</' + N.tagName + '>';\n    }\n    writeChildren(O);\n\n    return out;\n};\n\n\n/**\n * use this method to read the textcontent, of some node.\n * It is great if you have mixed content like:\n * this text has some <b>big</b> text and a <a href=''>link</a>\n * @return {string}\n */\ntXml.toContentString = function(tDom) {\n    if (Array.isArray(tDom)) {\n        var out = '';\n        tDom.forEach(function(e) {\n            out += ' ' + tXml.toContentString(e);\n            out = out.trim();\n        });\n        return out;\n    } else if (typeof tDom === 'object') {\n        return tXml.toContentString(tDom.children)\n    } else {\n        return ' ' + tDom;\n    }\n};\n\ntXml.getElementById = function(S, id, simplified) {\n    var out = tXml(S, {\n        attrValue: id\n    });\n    return simplified ? tXml.simplify(out) : out[0];\n};\n/**\n * A fast parsing method, that not realy finds by classname,\n * more: the class attribute contains XXX\n * @param\n */\ntXml.getElementsByClassName = function(S, classname, simplified) {\n    const out = tXml(S, {\n        attrName: 'class',\n        attrValue: '[a-zA-Z0-9\\-\\s ]*' + classname + '[a-zA-Z0-9\\-\\s ]*'\n    });\n    return simplified ? tXml.simplify(out) : out;\n};\n\ntXml.parseStream = function(stream, offset) {\n    if (typeof offset === 'string') {\n        offset = offset.length + 2;\n    }\n    if (typeof stream === 'string') {\n        var fs = __webpack_require__(0);\n        stream = fs.createReadStream(stream, { start: offset });\n        offset = 0;\n    }\n\n    var position = offset;\n    var data = '';\n    stream.on('data', function(chunk) {\n        data += chunk;\n        var lastPos = 0;\n        do {\n            position = data.indexOf('<', position) + 1;\n            if(!position) {\n                position = lastPos;\n                return;\n            }\n            if (data[position + 1] === '/') {\n                position = position + 1;\n                lastPos = pos;\n                continue;\n            }\n            var res = tXml(data, { pos: position-1, parseNode: true, setPos: true });\n            position = res.pos;\n            if (position > (data.length - 1) || position < lastPos) {\n                data = data.slice(lastPos);\n                position = 0;\n                lastPos = 0;\n                return;\n            } else {\n                stream.emit('xml', res);\n                lastPos = position;\n            }\n        } while (1);\n    });\n    stream.on('end', function() {\n        console.log('end')\n    });\n    return stream;\n}\n\ntXml.transformStream = function (offset) {\n    // require through here, so it will not get added to webpack/browserify\n    const through2 = __webpack_require__(39);\n    if (typeof offset === 'string') {\n        offset = offset.length + 2;\n    }\n\n    var position = offset || 0;\n    var data = '';\n    const stream = through2({ readableObjectMode: true }, function (chunk, enc, callback) {\n        data += chunk;\n        var lastPos = 0;\n        do {\n            position = data.indexOf('<', position) + 1;\n            if (!position) {\n                position = lastPos;\n                return callback();;\n            }\n            if (data[position + 1] === '/') {\n                position = position + 1;\n                lastPos = pos;\n                continue;\n            }\n            var res = tXml(data, { pos: position - 1, parseNode: true, setPos: true });\n            position = res.pos;\n            if (position > (data.length - 1) || position < lastPos) {\n                data = data.slice(lastPos);\n                position = 0;\n                lastPos = 0;\n                return callback();;\n            } else {\n                this.push(res);\n                lastPos = position;\n            }\n        } while (1);\n        callback();\n    });\n\n    return stream;\n}\n\nif (true) {\n    module.exports = tXml;\n    tXml.xml = tXml;\n}\n//console.clear();\n//console.log('here:',tXml.getElementById('<some><xml id=\"test\">dada</xml><that id=\"test\">value</that></some>','test'));\n//console.log('here:',tXml.getElementsByClassName('<some><xml id=\"test\" class=\"sdf test jsalf\">dada</xml><that id=\"test\">value</that></some>','test'));\n\n/*\nconsole.clear();\ntXml(d,'content');\n //some testCode\nvar s = document.body.innerHTML.toLowerCase();\nvar start = new Date().getTime();\nvar o = tXml(s,'content');\nvar end = new Date().getTime();\n//console.log(JSON.stringify(o,undefined,'\\t'));\nconsole.log(\"MILLISECONDS\",end-start);\nvar nodeCount=document.querySelectorAll('*').length;\nconsole.log('node count',nodeCount);\nconsole.log(\"speed:\",(1000/(end-start))*nodeCount,'Nodes / second')\n//console.log(JSON.stringify(tXml('<html><head><title>testPage</title></head><body><h1>TestPage</h1><p>this is a <b>test</b>page</p></body></html>'),undefined,'\\t'));\nvar p = new DOMParser();\nvar s2='<body>'+s+'</body>'\nvar start2= new Date().getTime();\nvar o2 = p.parseFromString(s2,'text/html').querySelector('#content')\nvar end2=new Date().getTime();\nconsole.log(\"MILLISECONDS\",end2-start2);\n// */\n\n\n/***/ }),\n/* 30 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n\nvar zlib_inflate = __webpack_require__(53);\nvar utils        = __webpack_require__(12);\nvar strings      = __webpack_require__(58);\nvar c            = __webpack_require__(59);\nvar msg          = __webpack_require__(60);\nvar ZStream      = __webpack_require__(61);\nvar GZheader     = __webpack_require__(62);\n\nvar toString = Object.prototype.toString;\n\n/**\n * class Inflate\n *\n * Generic JS-style wrapper for zlib calls. If you don't need\n * streaming behaviour - use more simple functions: [[inflate]]\n * and [[inflateRaw]].\n **/\n\n/* internal\n * inflate.chunks -> Array\n *\n * Chunks of output data, if [[Inflate#onData]] not overridden.\n **/\n\n/**\n * Inflate.result -> Uint8Array|Array|String\n *\n * Uncompressed result, generated by default [[Inflate#onData]]\n * and [[Inflate#onEnd]] handlers. Filled after you push last chunk\n * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you\n * push a chunk with explicit flush (call [[Inflate#push]] with\n * `Z_SYNC_FLUSH` param).\n **/\n\n/**\n * Inflate.err -> Number\n *\n * Error code after inflate finished. 0 (Z_OK) on success.\n * Should be checked if broken data possible.\n **/\n\n/**\n * Inflate.msg -> String\n *\n * Error message, if [[Inflate.err]] != 0\n **/\n\n\n/**\n * new Inflate(options)\n * - options (Object): zlib inflate options.\n *\n * Creates new inflator instance with specified params. Throws exception\n * on bad params. Supported options:\n *\n * - `windowBits`\n * - `dictionary`\n *\n * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)\n * for more information on these.\n *\n * Additional options, for internal needs:\n *\n * - `chunkSize` - size of generated data chunks (16K by default)\n * - `raw` (Boolean) - do raw inflate\n * - `to` (String) - if equal to 'string', then result will be converted\n *   from utf8 to utf16 (javascript) string. When string output requested,\n *   chunk length can differ from `chunkSize`, depending on content.\n *\n * By default, when no options set, autodetect deflate/gzip data format via\n * wrapper header.\n *\n * ##### Example:\n *\n * ```javascript\n * var pako = require('pako')\n *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])\n *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);\n *\n * var inflate = new pako.Inflate({ level: 3});\n *\n * inflate.push(chunk1, false);\n * inflate.push(chunk2, true);  // true -> last chunk\n *\n * if (inflate.err) { throw new Error(inflate.err); }\n *\n * console.log(inflate.result);\n * ```\n **/\nfunction Inflate(options) {\n  if (!(this instanceof Inflate)) return new Inflate(options);\n\n  this.options = utils.assign({\n    chunkSize: 16384,\n    windowBits: 0,\n    to: ''\n  }, options || {});\n\n  var opt = this.options;\n\n  // Force window size for `raw` data, if not set directly,\n  // because we have no header for autodetect.\n  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {\n    opt.windowBits = -opt.windowBits;\n    if (opt.windowBits === 0) { opt.windowBits = -15; }\n  }\n\n  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate\n  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&\n      !(options && options.windowBits)) {\n    opt.windowBits += 32;\n  }\n\n  // Gzip header has no info about windows size, we can do autodetect only\n  // for deflate. So, if window size not set, force it to max when gzip possible\n  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {\n    // bit 3 (16) -> gzipped data\n    // bit 4 (32) -> autodetect gzip/deflate\n    if ((opt.windowBits & 15) === 0) {\n      opt.windowBits |= 15;\n    }\n  }\n\n  this.err    = 0;      // error code, if happens (0 = Z_OK)\n  this.msg    = '';     // error message\n  this.ended  = false;  // used to avoid multiple onEnd() calls\n  this.chunks = [];     // chunks of compressed data\n\n  this.strm   = new ZStream();\n  this.strm.avail_out = 0;\n\n  var status  = zlib_inflate.inflateInit2(\n    this.strm,\n    opt.windowBits\n  );\n\n  if (status !== c.Z_OK) {\n    throw new Error(msg[status]);\n  }\n\n  this.header = new GZheader();\n\n  zlib_inflate.inflateGetHeader(this.strm, this.header);\n\n  // Setup dictionary\n  if (opt.dictionary) {\n    // Convert data if needed\n    if (typeof opt.dictionary === 'string') {\n      opt.dictionary = strings.string2buf(opt.dictionary);\n    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {\n      opt.dictionary = new Uint8Array(opt.dictionary);\n    }\n    if (opt.raw) { //In raw mode we need to set the dictionary early\n      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);\n      if (status !== c.Z_OK) {\n        throw new Error(msg[status]);\n      }\n    }\n  }\n}\n\n/**\n * Inflate#push(data[, mode]) -> Boolean\n * - data (Uint8Array|Array|ArrayBuffer|String): input data\n * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.\n *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.\n *\n * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with\n * new output chunks. Returns `true` on success. The last data block must have\n * mode Z_FINISH (or `true`). That will flush internal pending buffers and call\n * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you\n * can use mode Z_SYNC_FLUSH, keeping the decompression context.\n *\n * On fail call [[Inflate#onEnd]] with error code and return false.\n *\n * We strongly recommend to use `Uint8Array` on input for best speed (output\n * format is detected automatically). Also, don't skip last param and always\n * use the same type in your code (boolean or number). That will improve JS speed.\n *\n * For regular `Array`-s make sure all elements are [0..255].\n *\n * ##### Example\n *\n * ```javascript\n * push(chunk, false); // push one of data chunks\n * ...\n * push(chunk, true);  // push last chunk\n * ```\n **/\nInflate.prototype.push = function (data, mode) {\n  var strm = this.strm;\n  var chunkSize = this.options.chunkSize;\n  var dictionary = this.options.dictionary;\n  var status, _mode;\n  var next_out_utf8, tail, utf8str;\n\n  // Flag to properly process Z_BUF_ERROR on testing inflate call\n  // when we check that all output data was flushed.\n  var allowBufError = false;\n\n  if (this.ended) { return false; }\n  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);\n\n  // Convert data if needed\n  if (typeof data === 'string') {\n    // Only binary strings can be decompressed on practice\n    strm.input = strings.binstring2buf(data);\n  } else if (toString.call(data) === '[object ArrayBuffer]') {\n    strm.input = new Uint8Array(data);\n  } else {\n    strm.input = data;\n  }\n\n  strm.next_in = 0;\n  strm.avail_in = strm.input.length;\n\n  do {\n    if (strm.avail_out === 0) {\n      strm.output = new utils.Buf8(chunkSize);\n      strm.next_out = 0;\n      strm.avail_out = chunkSize;\n    }\n\n    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */\n\n    if (status === c.Z_NEED_DICT && dictionary) {\n      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);\n    }\n\n    if (status === c.Z_BUF_ERROR && allowBufError === true) {\n      status = c.Z_OK;\n      allowBufError = false;\n    }\n\n    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {\n      this.onEnd(status);\n      this.ended = true;\n      return false;\n    }\n\n    if (strm.next_out) {\n      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {\n\n        if (this.options.to === 'string') {\n\n          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);\n\n          tail = strm.next_out - next_out_utf8;\n          utf8str = strings.buf2string(strm.output, next_out_utf8);\n\n          // move tail\n          strm.next_out = tail;\n          strm.avail_out = chunkSize - tail;\n          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }\n\n          this.onData(utf8str);\n\n        } else {\n          this.onData(utils.shrinkBuf(strm.output, strm.next_out));\n        }\n      }\n    }\n\n    // When no more input data, we should check that internal inflate buffers\n    // are flushed. The only way to do it when avail_out = 0 - run one more\n    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.\n    // Here we set flag to process this error properly.\n    //\n    // NOTE. Deflate does not return error in this case and does not needs such\n    // logic.\n    if (strm.avail_in === 0 && strm.avail_out === 0) {\n      allowBufError = true;\n    }\n\n  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);\n\n  if (status === c.Z_STREAM_END) {\n    _mode = c.Z_FINISH;\n  }\n\n  // Finalize on the last chunk.\n  if (_mode === c.Z_FINISH) {\n    status = zlib_inflate.inflateEnd(this.strm);\n    this.onEnd(status);\n    this.ended = true;\n    return status === c.Z_OK;\n  }\n\n  // callback interim results if Z_SYNC_FLUSH.\n  if (_mode === c.Z_SYNC_FLUSH) {\n    this.onEnd(c.Z_OK);\n    strm.avail_out = 0;\n    return true;\n  }\n\n  return true;\n};\n\n\n/**\n * Inflate#onData(chunk) -> Void\n * - chunk (Uint8Array|Array|String): output data. Type of array depends\n *   on js engine support. When string output requested, each chunk\n *   will be string.\n *\n * By default, stores data blocks in `chunks[]` property and glue\n * those in `onEnd`. Override this handler, if you need another behaviour.\n **/\nInflate.prototype.onData = function (chunk) {\n  this.chunks.push(chunk);\n};\n\n\n/**\n * Inflate#onEnd(status) -> Void\n * - status (Number): inflate status. 0 (Z_OK) on success,\n *   other if not.\n *\n * Called either after you tell inflate that the input stream is\n * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)\n * or if an error happened. By default - join collected chunks,\n * free memory and fill `results` / `err` properties.\n **/\nInflate.prototype.onEnd = function (status) {\n  // On success - join\n  if (status === c.Z_OK) {\n    if (this.options.to === 'string') {\n      // Glue & convert here, until we teach pako to send\n      // utf8 aligned strings to onData\n      this.result = this.chunks.join('');\n    } else {\n      this.result = utils.flattenChunks(this.chunks);\n    }\n  }\n  this.chunks = [];\n  this.err = status;\n  this.msg = this.strm.msg;\n};\n\n\n/**\n * inflate(data[, options]) -> Uint8Array|Array|String\n * - data (Uint8Array|Array|String): input data to decompress.\n * - options (Object): zlib inflate options.\n *\n * Decompress `data` with inflate/ungzip and `options`. Autodetect\n * format via wrapper header by default. That's why we don't provide\n * separate `ungzip` method.\n *\n * Supported options are:\n *\n * - windowBits\n *\n * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)\n * for more information.\n *\n * Sugar (options):\n *\n * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify\n *   negative windowBits implicitly.\n * - `to` (String) - if equal to 'string', then result will be converted\n *   from utf8 to utf16 (javascript) string. When string output requested,\n *   chunk length can differ from `chunkSize`, depending on content.\n *\n *\n * ##### Example:\n *\n * ```javascript\n * var pako = require('pako')\n *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])\n *   , output;\n *\n * try {\n *   output = pako.inflate(input);\n * } catch (err)\n *   console.log(err);\n * }\n * ```\n **/\nfunction inflate(input, options) {\n  var inflator = new Inflate(options);\n\n  inflator.push(input, true);\n\n  // That will never happens, if you don't cheat with options :)\n  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }\n\n  return inflator.result;\n}\n\n\n/**\n * inflateRaw(data[, options]) -> Uint8Array|Array|String\n * - data (Uint8Array|Array|String): input data to decompress.\n * - options (Object): zlib inflate options.\n *\n * The same as [[inflate]], but creates raw data, without wrapper\n * (header and adler32 crc).\n **/\nfunction inflateRaw(input, options) {\n  options = options || {};\n  options.raw = true;\n  return inflate(input, options);\n}\n\n\n/**\n * ungzip(data[, options]) -> Uint8Array|Array|String\n * - data (Uint8Array|Array|String): input data to decompress.\n * - options (Object): zlib inflate options.\n *\n * Just shortcut to [[inflate]], because it autodetects format\n * by header.content. Done for convenience.\n **/\n\n\nexports.Inflate = Inflate;\nexports.inflate = inflate;\nexports.inflateRaw = inflateRaw;\nexports.ungzip  = inflate;\n\n\n/***/ }),\n/* 31 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);\n\n// TODO: This observer iteration approach looks inelegant and expensive\n// Idea: Come up with super class for Subscription that contains the\n//       notify*, ... methods and use it here\n/**\n * A subject is a \"hot\" observable (see `multicast`) that has its observer\n * methods (`.next(value)`, `.error(error)`, `.complete()`) exposed.\n *\n * Be careful, though! With great power comes great responsibility. Only use\n * the `Subject` when you really need to trigger updates \"from the outside\" and\n * try to keep the code that can access it to a minimum. Return\n * `Observable.from(mySubject)` to not allow other code to mutate.\n */\nclass MulticastSubject extends _observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"] {\n    constructor() {\n        super(observer => {\n            this._observers.add(observer);\n            return () => this._observers.delete(observer);\n        });\n        this._observers = new Set();\n    }\n    next(value) {\n        for (const observer of this._observers) {\n            observer.next(value);\n        }\n    }\n    error(error) {\n        for (const observer of this._observers) {\n            observer.error(error);\n        }\n    }\n    complete() {\n        for (const observer of this._observers) {\n            observer.complete();\n        }\n    }\n}\n/* harmony default export */ __webpack_exports__[\"a\"] = (MulticastSubject);\n\n\n/***/ }),\n/* 32 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return createPromiseWithResolver; });\nconst doNothing = () => undefined;\n/**\n * Creates a new promise and exposes its resolver function.\n * Use with care!\n */\nfunction createPromiseWithResolver() {\n    let alreadyResolved = false;\n    let resolvedTo;\n    let resolver = doNothing;\n    const promise = new Promise(resolve => {\n        if (alreadyResolved) {\n            resolve(resolvedTo);\n        }\n        else {\n            resolver = resolve;\n        }\n    });\n    const exposedResolver = (value) => {\n        alreadyResolved = true;\n        resolvedTo = value;\n        resolver();\n    };\n    return [promise, exposedResolver];\n}\n\n\n/***/ }),\n/* 33 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return isTransferDescriptor; });\n/* unused harmony export Transfer */\n/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\nfunction isTransferable(thing) {\n    if (!thing || typeof thing !== \"object\")\n        return false;\n    // Don't check too thoroughly, since the list of transferable things in JS might grow over time\n    return true;\n}\nfunction isTransferDescriptor(thing) {\n    return thing && typeof thing === \"object\" && thing[_symbols__WEBPACK_IMPORTED_MODULE_0__[/* $transferable */ \"d\"]];\n}\nfunction Transfer(payload, transferables) {\n    if (!transferables) {\n        if (!isTransferable(payload))\n            throw Error();\n        transferables = [payload];\n    }\n    return {\n        [_symbols__WEBPACK_IMPORTED_MODULE_0__[/* $transferable */ \"d\"]]: true,\n        send: payload,\n        transferables\n    };\n}\n\n\n/***/ }),\n/* 34 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar http = __webpack_require__(0)\nvar url = __webpack_require__(15)\n\nvar https = module.exports\n\nfor (var key in http) {\n  if (http.hasOwnProperty(key)) https[key] = http[key]\n}\n\nhttps.request = function (params, cb) {\n  params = validateParams(params)\n  return http.request.call(this, params, cb)\n}\n\nhttps.get = function (params, cb) {\n  params = validateParams(params)\n  return http.get.call(this, params, cb)\n}\n\nfunction validateParams (params) {\n  if (typeof params === 'string') {\n    params = url.parse(params)\n  }\n  if (!params.protocol) {\n    params.protocol = 'https:'\n  }\n  if (params.protocol !== 'https:') {\n    throw new Error('Protocol \"' + params.protocol + '\" not supported. Expected \"https:\"')\n  }\n  return params\n}\n\n\n/***/ }),\n/* 35 */\n/***/ (function(module, exports) {\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n/***/ }),\n/* 36 */\n/***/ (function(module, exports) {\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n/***/ }),\n/* 37 */\n/***/ (function(module, exports) {\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n/***/ }),\n/* 38 */\n/***/ (function(module, exports) {\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n/***/ }),\n/* 39 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(process) {var Transform = __webpack_require__(40).Transform\n  , inherits  = __webpack_require__(50).inherits\n\nfunction DestroyableTransform(opts) {\n  Transform.call(this, opts)\n  this._destroyed = false\n}\n\ninherits(DestroyableTransform, Transform)\n\nDestroyableTransform.prototype.destroy = function(err) {\n  if (this._destroyed) return\n  this._destroyed = true\n  \n  var self = this\n  process.nextTick(function() {\n    if (err)\n      self.emit('error', err)\n    self.emit('close')\n  })\n}\n\n// a noop _transform function\nfunction noop (chunk, enc, callback) {\n  callback(null, chunk)\n}\n\n\n// create a new export function, used by both the main export and\n// the .ctor export, contains common logic for dealing with arguments\nfunction through2 (construct) {\n  return function (options, transform, flush) {\n    if (typeof options == 'function') {\n      flush     = transform\n      transform = options\n      options   = {}\n    }\n\n    if (typeof transform != 'function')\n      transform = noop\n\n    if (typeof flush != 'function')\n      flush = null\n\n    return construct(options, transform, flush)\n  }\n}\n\n\n// main export, just make me a transform stream!\nmodule.exports = through2(function (options, transform, flush) {\n  var t2 = new DestroyableTransform(options)\n\n  t2._transform = transform\n\n  if (flush)\n    t2._flush = flush\n\n  return t2\n})\n\n\n// make me a reusable prototype that I can `new`, or implicitly `new`\n// with a constructor call\nmodule.exports.ctor = through2(function (options, transform, flush) {\n  function Through2 (override) {\n    if (!(this instanceof Through2))\n      return new Through2(override)\n\n    this.options = Object.assign({}, options, override)\n\n    DestroyableTransform.call(this, this.options)\n  }\n\n  inherits(Through2, DestroyableTransform)\n\n  Through2.prototype._transform = transform\n\n  if (flush)\n    Through2.prototype._flush = flush\n\n  return Through2\n})\n\n\nmodule.exports.obj = through2(function (options, transform, flush) {\n  var t2 = new DestroyableTransform(Object.assign({ objectMode: true, highWaterMark: 16 }, options))\n\n  t2._transform = transform\n\n  if (flush)\n    t2._flush = flush\n\n  return t2\n})\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 40 */\n/***/ (function(module, exports, __webpack_require__) {\n\nexports = module.exports = __webpack_require__(18);\nexports.Stream = exports;\nexports.Readable = exports;\nexports.Writable = __webpack_require__(23);\nexports.Duplex = __webpack_require__(6);\nexports.Transform = __webpack_require__(25);\nexports.PassThrough = __webpack_require__(48);\nexports.finished = __webpack_require__(14);\nexports.pipeline = __webpack_require__(49);\n\n\n/***/ }),\n/* 41 */\n/***/ (function(module, exports) {\n\n/* (ignored) */\n\n/***/ }),\n/* 42 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _require = __webpack_require__(0),\n    Buffer = _require.Buffer;\n\nvar _require2 = __webpack_require__(43),\n    inspect = _require2.inspect;\n\nvar custom = inspect && inspect.custom || 'inspect';\n\nfunction copyBuffer(src, target, offset) {\n  Buffer.prototype.copy.call(src, target, offset);\n}\n\nmodule.exports =\n/*#__PURE__*/\nfunction () {\n  function BufferList() {\n    _classCallCheck(this, BufferList);\n\n    this.head = null;\n    this.tail = null;\n    this.length = 0;\n  }\n\n  _createClass(BufferList, [{\n    key: \"push\",\n    value: function push(v) {\n      var entry = {\n        data: v,\n        next: null\n      };\n      if (this.length > 0) this.tail.next = entry;else this.head = entry;\n      this.tail = entry;\n      ++this.length;\n    }\n  }, {\n    key: \"unshift\",\n    value: function unshift(v) {\n      var entry = {\n        data: v,\n        next: this.head\n      };\n      if (this.length === 0) this.tail = entry;\n      this.head = entry;\n      ++this.length;\n    }\n  }, {\n    key: \"shift\",\n    value: function shift() {\n      if (this.length === 0) return;\n      var ret = this.head.data;\n      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;\n      --this.length;\n      return ret;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.head = this.tail = null;\n      this.length = 0;\n    }\n  }, {\n    key: \"join\",\n    value: function join(s) {\n      if (this.length === 0) return '';\n      var p = this.head;\n      var ret = '' + p.data;\n\n      while (p = p.next) {\n        ret += s + p.data;\n      }\n\n      return ret;\n    }\n  }, {\n    key: \"concat\",\n    value: function concat(n) {\n      if (this.length === 0) return Buffer.alloc(0);\n      var ret = Buffer.allocUnsafe(n >>> 0);\n      var p = this.head;\n      var i = 0;\n\n      while (p) {\n        copyBuffer(p.data, ret, i);\n        i += p.data.length;\n        p = p.next;\n      }\n\n      return ret;\n    } // Consumes a specified amount of bytes or characters from the buffered data.\n\n  }, {\n    key: \"consume\",\n    value: function consume(n, hasStrings) {\n      var ret;\n\n      if (n < this.head.data.length) {\n        // `slice` is the same for buffers and strings.\n        ret = this.head.data.slice(0, n);\n        this.head.data = this.head.data.slice(n);\n      } else if (n === this.head.data.length) {\n        // First chunk is a perfect match.\n        ret = this.shift();\n      } else {\n        // Result spans more than one buffer.\n        ret = hasStrings ? this._getString(n) : this._getBuffer(n);\n      }\n\n      return ret;\n    }\n  }, {\n    key: \"first\",\n    value: function first() {\n      return this.head.data;\n    } // Consumes a specified amount of characters from the buffered data.\n\n  }, {\n    key: \"_getString\",\n    value: function _getString(n) {\n      var p = this.head;\n      var c = 1;\n      var ret = p.data;\n      n -= ret.length;\n\n      while (p = p.next) {\n        var str = p.data;\n        var nb = n > str.length ? str.length : n;\n        if (nb === str.length) ret += str;else ret += str.slice(0, n);\n        n -= nb;\n\n        if (n === 0) {\n          if (nb === str.length) {\n            ++c;\n            if (p.next) this.head = p.next;else this.head = this.tail = null;\n          } else {\n            this.head = p;\n            p.data = str.slice(nb);\n          }\n\n          break;\n        }\n\n        ++c;\n      }\n\n      this.length -= c;\n      return ret;\n    } // Consumes a specified amount of bytes from the buffered data.\n\n  }, {\n    key: \"_getBuffer\",\n    value: function _getBuffer(n) {\n      var ret = Buffer.allocUnsafe(n);\n      var p = this.head;\n      var c = 1;\n      p.data.copy(ret);\n      n -= p.data.length;\n\n      while (p = p.next) {\n        var buf = p.data;\n        var nb = n > buf.length ? buf.length : n;\n        buf.copy(ret, ret.length - n, 0, nb);\n        n -= nb;\n\n        if (n === 0) {\n          if (nb === buf.length) {\n            ++c;\n            if (p.next) this.head = p.next;else this.head = this.tail = null;\n          } else {\n            this.head = p;\n            p.data = buf.slice(nb);\n          }\n\n          break;\n        }\n\n        ++c;\n      }\n\n      this.length -= c;\n      return ret;\n    } // Make sure the linked list only shows the minimal necessary information.\n\n  }, {\n    key: custom,\n    value: function value(_, options) {\n      return inspect(this, _objectSpread({}, options, {\n        // Only inspect one level.\n        depth: 0,\n        // It should not recurse.\n        customInspect: false\n      }));\n    }\n  }]);\n\n  return BufferList;\n}();\n\n/***/ }),\n/* 43 */\n/***/ (function(module, exports) {\n\n/* (ignored) */\n\n/***/ }),\n/* 44 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(global) {\n/**\n * Module exports.\n */\n\nmodule.exports = deprecate;\n\n/**\n * Mark that a method should not be used.\n * Returns a modified function which warns once by default.\n *\n * If `localStorage.noDeprecation = true` is set, then it is a no-op.\n *\n * If `localStorage.throwDeprecation = true` is set, then deprecated functions\n * will throw an Error when invoked.\n *\n * If `localStorage.traceDeprecation = true` is set, then deprecated functions\n * will invoke `console.trace()` instead of `console.error()`.\n *\n * @param {Function} fn - the function to deprecate\n * @param {String} msg - the string to print to the console when `fn` is invoked\n * @returns {Function} a new \"deprecated\" version of `fn`\n * @api public\n */\n\nfunction deprecate (fn, msg) {\n  if (config('noDeprecation')) {\n    return fn;\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (config('throwDeprecation')) {\n        throw new Error(msg);\n      } else if (config('traceDeprecation')) {\n        console.trace(msg);\n      } else {\n        console.warn(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n}\n\n/**\n * Checks `localStorage` for boolean values for the given `name`.\n *\n * @param {String} name\n * @returns {Boolean}\n * @api private\n */\n\nfunction config (name) {\n  // accessing global.localStorage can trigger a DOMException in sandboxed iframes\n  try {\n    if (!global.localStorage) return false;\n  } catch (_) {\n    return false;\n  }\n  var val = global.localStorage[name];\n  if (null == val) return false;\n  return String(val).toLowerCase() === 'true';\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))\n\n/***/ }),\n/* 45 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* eslint-disable node/no-deprecated-api */\nvar buffer = __webpack_require__(0)\nvar Buffer = buffer.Buffer\n\n// alternative to using Object.keys for old browsers\nfunction copyProps (src, dst) {\n  for (var key in src) {\n    dst[key] = src[key]\n  }\n}\nif (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {\n  module.exports = buffer\n} else {\n  // Copy properties from require('buffer')\n  copyProps(buffer, exports)\n  exports.Buffer = SafeBuffer\n}\n\nfunction SafeBuffer (arg, encodingOrOffset, length) {\n  return Buffer(arg, encodingOrOffset, length)\n}\n\nSafeBuffer.prototype = Object.create(Buffer.prototype)\n\n// Copy static methods from Buffer\ncopyProps(Buffer, SafeBuffer)\n\nSafeBuffer.from = function (arg, encodingOrOffset, length) {\n  if (typeof arg === 'number') {\n    throw new TypeError('Argument must not be a number')\n  }\n  return Buffer(arg, encodingOrOffset, length)\n}\n\nSafeBuffer.alloc = function (size, fill, encoding) {\n  if (typeof size !== 'number') {\n    throw new TypeError('Argument must be a number')\n  }\n  var buf = Buffer(size)\n  if (fill !== undefined) {\n    if (typeof encoding === 'string') {\n      buf.fill(fill, encoding)\n    } else {\n      buf.fill(fill)\n    }\n  } else {\n    buf.fill(0)\n  }\n  return buf\n}\n\nSafeBuffer.allocUnsafe = function (size) {\n  if (typeof size !== 'number') {\n    throw new TypeError('Argument must be a number')\n  }\n  return Buffer(size)\n}\n\nSafeBuffer.allocUnsafeSlow = function (size) {\n  if (typeof size !== 'number') {\n    throw new TypeError('Argument must be a number')\n  }\n  return buffer.SlowBuffer(size)\n}\n\n\n/***/ }),\n/* 46 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(process) {\n\nvar _Object$setPrototypeO;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar finished = __webpack_require__(14);\n\nvar kLastResolve = Symbol('lastResolve');\nvar kLastReject = Symbol('lastReject');\nvar kError = Symbol('error');\nvar kEnded = Symbol('ended');\nvar kLastPromise = Symbol('lastPromise');\nvar kHandlePromise = Symbol('handlePromise');\nvar kStream = Symbol('stream');\n\nfunction createIterResult(value, done) {\n  return {\n    value: value,\n    done: done\n  };\n}\n\nfunction readAndResolve(iter) {\n  var resolve = iter[kLastResolve];\n\n  if (resolve !== null) {\n    var data = iter[kStream].read(); // we defer if data is null\n    // we can be expecting either 'end' or\n    // 'error'\n\n    if (data !== null) {\n      iter[kLastPromise] = null;\n      iter[kLastResolve] = null;\n      iter[kLastReject] = null;\n      resolve(createIterResult(data, false));\n    }\n  }\n}\n\nfunction onReadable(iter) {\n  // we wait for the next tick, because it might\n  // emit an error with process.nextTick\n  process.nextTick(readAndResolve, iter);\n}\n\nfunction wrapForNext(lastPromise, iter) {\n  return function (resolve, reject) {\n    lastPromise.then(function () {\n      if (iter[kEnded]) {\n        resolve(createIterResult(undefined, true));\n        return;\n      }\n\n      iter[kHandlePromise](resolve, reject);\n    }, reject);\n  };\n}\n\nvar AsyncIteratorPrototype = Object.getPrototypeOf(function () {});\nvar ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {\n  get stream() {\n    return this[kStream];\n  },\n\n  next: function next() {\n    var _this = this;\n\n    // if we have detected an error in the meanwhile\n    // reject straight away\n    var error = this[kError];\n\n    if (error !== null) {\n      return Promise.reject(error);\n    }\n\n    if (this[kEnded]) {\n      return Promise.resolve(createIterResult(undefined, true));\n    }\n\n    if (this[kStream].destroyed) {\n      // We need to defer via nextTick because if .destroy(err) is\n      // called, the error will be emitted via nextTick, and\n      // we cannot guarantee that there is no error lingering around\n      // waiting to be emitted.\n      return new Promise(function (resolve, reject) {\n        process.nextTick(function () {\n          if (_this[kError]) {\n            reject(_this[kError]);\n          } else {\n            resolve(createIterResult(undefined, true));\n          }\n        });\n      });\n    } // if we have multiple next() calls\n    // we will wait for the previous Promise to finish\n    // this logic is optimized to support for await loops,\n    // where next() is only called once at a time\n\n\n    var lastPromise = this[kLastPromise];\n    var promise;\n\n    if (lastPromise) {\n      promise = new Promise(wrapForNext(lastPromise, this));\n    } else {\n      // fast path needed to support multiple this.push()\n      // without triggering the next() queue\n      var data = this[kStream].read();\n\n      if (data !== null) {\n        return Promise.resolve(createIterResult(data, false));\n      }\n\n      promise = new Promise(this[kHandlePromise]);\n    }\n\n    this[kLastPromise] = promise;\n    return promise;\n  }\n}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {\n  return this;\n}), _defineProperty(_Object$setPrototypeO, \"return\", function _return() {\n  var _this2 = this;\n\n  // destroy(err, cb) is a private API\n  // we can guarantee we have that here, because we control the\n  // Readable class this is attached to\n  return new Promise(function (resolve, reject) {\n    _this2[kStream].destroy(null, function (err) {\n      if (err) {\n        reject(err);\n        return;\n      }\n\n      resolve(createIterResult(undefined, true));\n    });\n  });\n}), _Object$setPrototypeO), AsyncIteratorPrototype);\n\nvar createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {\n  var _Object$create;\n\n  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {\n    value: stream,\n    writable: true\n  }), _defineProperty(_Object$create, kLastResolve, {\n    value: null,\n    writable: true\n  }), _defineProperty(_Object$create, kLastReject, {\n    value: null,\n    writable: true\n  }), _defineProperty(_Object$create, kError, {\n    value: null,\n    writable: true\n  }), _defineProperty(_Object$create, kEnded, {\n    value: stream._readableState.endEmitted,\n    writable: true\n  }), _defineProperty(_Object$create, kHandlePromise, {\n    value: function value(resolve, reject) {\n      var data = iterator[kStream].read();\n\n      if (data) {\n        iterator[kLastPromise] = null;\n        iterator[kLastResolve] = null;\n        iterator[kLastReject] = null;\n        resolve(createIterResult(data, false));\n      } else {\n        iterator[kLastResolve] = resolve;\n        iterator[kLastReject] = reject;\n      }\n    },\n    writable: true\n  }), _Object$create));\n  iterator[kLastPromise] = null;\n  finished(stream, function (err) {\n    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {\n      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise\n      // returned by next() and store the error\n\n      if (reject !== null) {\n        iterator[kLastPromise] = null;\n        iterator[kLastResolve] = null;\n        iterator[kLastReject] = null;\n        reject(err);\n      }\n\n      iterator[kError] = err;\n      return;\n    }\n\n    var resolve = iterator[kLastResolve];\n\n    if (resolve !== null) {\n      iterator[kLastPromise] = null;\n      iterator[kLastResolve] = null;\n      iterator[kLastReject] = null;\n      resolve(createIterResult(undefined, true));\n    }\n\n    iterator[kEnded] = true;\n  });\n  stream.on('readable', onReadable.bind(null, iterator));\n  return iterator;\n};\n\nmodule.exports = createReadableStreamAsyncIterator;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 47 */\n/***/ (function(module, exports) {\n\nmodule.exports = function () {\n  throw new Error('Readable.from is not available in the browser')\n};\n\n\n/***/ }),\n/* 48 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n// a passthrough stream.\n// basically just the most minimal sort of Transform stream.\n// Every written chunk gets output as-is.\n\n\nmodule.exports = PassThrough;\n\nvar Transform = __webpack_require__(25);\n\n__webpack_require__(7)(PassThrough, Transform);\n\nfunction PassThrough(options) {\n  if (!(this instanceof PassThrough)) return new PassThrough(options);\n  Transform.call(this, options);\n}\n\nPassThrough.prototype._transform = function (chunk, encoding, cb) {\n  cb(null, chunk);\n};\n\n/***/ }),\n/* 49 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Ported from https://github.com/mafintosh/pump with\n// permission from the author, Mathias Buus (@mafintosh).\n\n\nvar eos;\n\nfunction once(callback) {\n  var called = false;\n  return function () {\n    if (called) return;\n    called = true;\n    callback.apply(void 0, arguments);\n  };\n}\n\nvar _require$codes = __webpack_require__(5).codes,\n    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,\n    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;\n\nfunction noop(err) {\n  // Rethrow the error if it exists to avoid swallowing it\n  if (err) throw err;\n}\n\nfunction isRequest(stream) {\n  return stream.setHeader && typeof stream.abort === 'function';\n}\n\nfunction destroyer(stream, reading, writing, callback) {\n  callback = once(callback);\n  var closed = false;\n  stream.on('close', function () {\n    closed = true;\n  });\n  if (eos === undefined) eos = __webpack_require__(14);\n  eos(stream, {\n    readable: reading,\n    writable: writing\n  }, function (err) {\n    if (err) return callback(err);\n    closed = true;\n    callback();\n  });\n  var destroyed = false;\n  return function (err) {\n    if (closed) return;\n    if (destroyed) return;\n    destroyed = true; // request.destroy just do .end - .abort is what we want\n\n    if (isRequest(stream)) return stream.abort();\n    if (typeof stream.destroy === 'function') return stream.destroy();\n    callback(err || new ERR_STREAM_DESTROYED('pipe'));\n  };\n}\n\nfunction call(fn) {\n  fn();\n}\n\nfunction pipe(from, to) {\n  return from.pipe(to);\n}\n\nfunction popCallback(streams) {\n  if (!streams.length) return noop;\n  if (typeof streams[streams.length - 1] !== 'function') return noop;\n  return streams.pop();\n}\n\nfunction pipeline() {\n  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {\n    streams[_key] = arguments[_key];\n  }\n\n  var callback = popCallback(streams);\n  if (Array.isArray(streams[0])) streams = streams[0];\n\n  if (streams.length < 2) {\n    throw new ERR_MISSING_ARGS('streams');\n  }\n\n  var error;\n  var destroys = streams.map(function (stream, i) {\n    var reading = i < streams.length - 1;\n    var writing = i > 0;\n    return destroyer(stream, reading, writing, function (err) {\n      if (!error) error = err;\n      if (err) destroys.forEach(call);\n      if (reading) return;\n      destroys.forEach(call);\n      callback(error);\n    });\n  });\n  return streams.reduce(pipe);\n}\n\nmodule.exports = pipeline;\n\n/***/ }),\n/* 50 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||\n  function getOwnPropertyDescriptors(obj) {\n    var keys = Object.keys(obj);\n    var descriptors = {};\n    for (var i = 0; i < keys.length; i++) {\n      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);\n    }\n    return descriptors;\n  };\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  if (typeof process !== 'undefined' && process.noDeprecation === true) {\n    return fn;\n  }\n\n  // Allow for deprecating things in the process of starting up.\n  if (typeof process === 'undefined') {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = __webpack_require__(51);\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = __webpack_require__(52);\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nvar kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;\n\nexports.promisify = function promisify(original) {\n  if (typeof original !== 'function')\n    throw new TypeError('The \"original\" argument must be of type Function');\n\n  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {\n    var fn = original[kCustomPromisifiedSymbol];\n    if (typeof fn !== 'function') {\n      throw new TypeError('The \"util.promisify.custom\" argument must be of type Function');\n    }\n    Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n      value: fn, enumerable: false, writable: false, configurable: true\n    });\n    return fn;\n  }\n\n  function fn() {\n    var promiseResolve, promiseReject;\n    var promise = new Promise(function (resolve, reject) {\n      promiseResolve = resolve;\n      promiseReject = reject;\n    });\n\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n    args.push(function (err, value) {\n      if (err) {\n        promiseReject(err);\n      } else {\n        promiseResolve(value);\n      }\n    });\n\n    try {\n      original.apply(this, args);\n    } catch (err) {\n      promiseReject(err);\n    }\n\n    return promise;\n  }\n\n  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));\n\n  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n    value: fn, enumerable: false, writable: false, configurable: true\n  });\n  return Object.defineProperties(\n    fn,\n    getOwnPropertyDescriptors(original)\n  );\n}\n\nexports.promisify.custom = kCustomPromisifiedSymbol\n\nfunction callbackifyOnRejected(reason, cb) {\n  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).\n  // Because `null` is a special error value in callbacks which means \"no error\n  // occurred\", we error-wrap so the callback consumer can distinguish between\n  // \"the promise rejected with null\" or \"the promise fulfilled with undefined\".\n  if (!reason) {\n    var newReason = new Error('Promise was rejected with a falsy value');\n    newReason.reason = reason;\n    reason = newReason;\n  }\n  return cb(reason);\n}\n\nfunction callbackify(original) {\n  if (typeof original !== 'function') {\n    throw new TypeError('The \"original\" argument must be of type Function');\n  }\n\n  // We DO NOT return the promise as it gives the user a false sense that\n  // the promise is actually somehow related to the callback's execution\n  // and that the callback throwing will reject the promise.\n  function callbackified() {\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n\n    var maybeCb = args.pop();\n    if (typeof maybeCb !== 'function') {\n      throw new TypeError('The last argument must be of type Function');\n    }\n    var self = this;\n    var cb = function() {\n      return maybeCb.apply(self, arguments);\n    };\n    // In true node style we process the callback on `nextTick` with all the\n    // implications (stack, `uncaughtException`, `async_hooks`)\n    original.apply(this, args)\n      .then(function(ret) { process.nextTick(cb, null, ret) },\n            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });\n  }\n\n  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));\n  Object.defineProperties(callbackified,\n                          getOwnPropertyDescriptors(original));\n  return callbackified;\n}\nexports.callbackify = callbackify;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))\n\n/***/ }),\n/* 51 */\n/***/ (function(module, exports) {\n\nmodule.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n\n/***/ }),\n/* 52 */\n/***/ (function(module, exports) {\n\nif (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n\n/***/ }),\n/* 53 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nvar utils         = __webpack_require__(12);\nvar adler32       = __webpack_require__(54);\nvar crc32         = __webpack_require__(55);\nvar inflate_fast  = __webpack_require__(56);\nvar inflate_table = __webpack_require__(57);\n\nvar CODES = 0;\nvar LENS = 1;\nvar DISTS = 2;\n\n/* Public constants ==========================================================*/\n/* ===========================================================================*/\n\n\n/* Allowed flush values; see deflate() and inflate() below for details */\n//var Z_NO_FLUSH      = 0;\n//var Z_PARTIAL_FLUSH = 1;\n//var Z_SYNC_FLUSH    = 2;\n//var Z_FULL_FLUSH    = 3;\nvar Z_FINISH        = 4;\nvar Z_BLOCK         = 5;\nvar Z_TREES         = 6;\n\n\n/* Return codes for the compression/decompression functions. Negative values\n * are errors, positive values are used for special but normal events.\n */\nvar Z_OK            = 0;\nvar Z_STREAM_END    = 1;\nvar Z_NEED_DICT     = 2;\n//var Z_ERRNO         = -1;\nvar Z_STREAM_ERROR  = -2;\nvar Z_DATA_ERROR    = -3;\nvar Z_MEM_ERROR     = -4;\nvar Z_BUF_ERROR     = -5;\n//var Z_VERSION_ERROR = -6;\n\n/* The deflate compression method */\nvar Z_DEFLATED  = 8;\n\n\n/* STATES ====================================================================*/\n/* ===========================================================================*/\n\n\nvar    HEAD = 1;       /* i: waiting for magic header */\nvar    FLAGS = 2;      /* i: waiting for method and flags (gzip) */\nvar    TIME = 3;       /* i: waiting for modification time (gzip) */\nvar    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */\nvar    EXLEN = 5;      /* i: waiting for extra length (gzip) */\nvar    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */\nvar    NAME = 7;       /* i: waiting for end of file name (gzip) */\nvar    COMMENT = 8;    /* i: waiting for end of comment (gzip) */\nvar    HCRC = 9;       /* i: waiting for header crc (gzip) */\nvar    DICTID = 10;    /* i: waiting for dictionary check value */\nvar    DICT = 11;      /* waiting for inflateSetDictionary() call */\nvar        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */\nvar        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */\nvar        STORED = 14;    /* i: waiting for stored size (length and complement) */\nvar        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */\nvar        COPY = 16;      /* i/o: waiting for input or output to copy stored block */\nvar        TABLE = 17;     /* i: waiting for dynamic block table lengths */\nvar        LENLENS = 18;   /* i: waiting for code length code lengths */\nvar        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */\nvar            LEN_ = 20;      /* i: same as LEN below, but only first time in */\nvar            LEN = 21;       /* i: waiting for length/lit/eob code */\nvar            LENEXT = 22;    /* i: waiting for length extra bits */\nvar            DIST = 23;      /* i: waiting for distance code */\nvar            DISTEXT = 24;   /* i: waiting for distance extra bits */\nvar            MATCH = 25;     /* o: waiting for output space to copy string */\nvar            LIT = 26;       /* o: waiting for output space to write literal */\nvar    CHECK = 27;     /* i: waiting for 32-bit check value */\nvar    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */\nvar    DONE = 29;      /* finished check, done -- remain here until reset */\nvar    BAD = 30;       /* got a data error -- remain here until reset */\nvar    MEM = 31;       /* got an inflate() memory error -- remain here until reset */\nvar    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */\n\n/* ===========================================================================*/\n\n\n\nvar ENOUGH_LENS = 852;\nvar ENOUGH_DISTS = 592;\n//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);\n\nvar MAX_WBITS = 15;\n/* 32K LZ77 window */\nvar DEF_WBITS = MAX_WBITS;\n\n\nfunction zswap32(q) {\n  return  (((q >>> 24) & 0xff) +\n          ((q >>> 8) & 0xff00) +\n          ((q & 0xff00) << 8) +\n          ((q & 0xff) << 24));\n}\n\n\nfunction InflateState() {\n  this.mode = 0;             /* current inflate mode */\n  this.last = false;          /* true if processing last block */\n  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */\n  this.havedict = false;      /* true if dictionary provided */\n  this.flags = 0;             /* gzip header method and flags (0 if zlib) */\n  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */\n  this.check = 0;             /* protected copy of check value */\n  this.total = 0;             /* protected copy of output count */\n  // TODO: may be {}\n  this.head = null;           /* where to save gzip header information */\n\n  /* sliding window */\n  this.wbits = 0;             /* log base 2 of requested window size */\n  this.wsize = 0;             /* window size or zero if not using window */\n  this.whave = 0;             /* valid bytes in the window */\n  this.wnext = 0;             /* window write index */\n  this.window = null;         /* allocated sliding window, if needed */\n\n  /* bit accumulator */\n  this.hold = 0;              /* input bit accumulator */\n  this.bits = 0;              /* number of bits in \"in\" */\n\n  /* for string and stored block copying */\n  this.length = 0;            /* literal or length of data to copy */\n  this.offset = 0;            /* distance back to copy string from */\n\n  /* for table and code decoding */\n  this.extra = 0;             /* extra bits needed */\n\n  /* fixed and dynamic code tables */\n  this.lencode = null;          /* starting table for length/literal codes */\n  this.distcode = null;         /* starting table for distance codes */\n  this.lenbits = 0;           /* index bits for lencode */\n  this.distbits = 0;          /* index bits for distcode */\n\n  /* dynamic table building */\n  this.ncode = 0;             /* number of code length code lengths */\n  this.nlen = 0;              /* number of length code lengths */\n  this.ndist = 0;             /* number of distance code lengths */\n  this.have = 0;              /* number of code lengths in lens[] */\n  this.next = null;              /* next available space in codes[] */\n\n  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */\n  this.work = new utils.Buf16(288); /* work area for code table building */\n\n  /*\n   because we don't have pointers in js, we use lencode and distcode directly\n   as buffers so we don't need codes\n  */\n  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */\n  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */\n  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */\n  this.sane = 0;                   /* if false, allow invalid distance too far */\n  this.back = 0;                   /* bits back of last unprocessed length/lit */\n  this.was = 0;                    /* initial length of match */\n}\n\nfunction inflateResetKeep(strm) {\n  var state;\n\n  if (!strm || !strm.state) { return Z_STREAM_ERROR; }\n  state = strm.state;\n  strm.total_in = strm.total_out = state.total = 0;\n  strm.msg = ''; /*Z_NULL*/\n  if (state.wrap) {       /* to support ill-conceived Java test suite */\n    strm.adler = state.wrap & 1;\n  }\n  state.mode = HEAD;\n  state.last = 0;\n  state.havedict = 0;\n  state.dmax = 32768;\n  state.head = null/*Z_NULL*/;\n  state.hold = 0;\n  state.bits = 0;\n  //state.lencode = state.distcode = state.next = state.codes;\n  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);\n  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);\n\n  state.sane = 1;\n  state.back = -1;\n  //Tracev((stderr, \"inflate: reset\\n\"));\n  return Z_OK;\n}\n\nfunction inflateReset(strm) {\n  var state;\n\n  if (!strm || !strm.state) { return Z_STREAM_ERROR; }\n  state = strm.state;\n  state.wsize = 0;\n  state.whave = 0;\n  state.wnext = 0;\n  return inflateResetKeep(strm);\n\n}\n\nfunction inflateReset2(strm, windowBits) {\n  var wrap;\n  var state;\n\n  /* get the state */\n  if (!strm || !strm.state) { return Z_STREAM_ERROR; }\n  state = strm.state;\n\n  /* extract wrap request from windowBits parameter */\n  if (windowBits < 0) {\n    wrap = 0;\n    windowBits = -windowBits;\n  }\n  else {\n    wrap = (windowBits >> 4) + 1;\n    if (windowBits < 48) {\n      windowBits &= 15;\n    }\n  }\n\n  /* set number of window bits, free window if different */\n  if (windowBits && (windowBits < 8 || windowBits > 15)) {\n    return Z_STREAM_ERROR;\n  }\n  if (state.window !== null && state.wbits !== windowBits) {\n    state.window = null;\n  }\n\n  /* update state and reset the rest of it */\n  state.wrap = wrap;\n  state.wbits = windowBits;\n  return inflateReset(strm);\n}\n\nfunction inflateInit2(strm, windowBits) {\n  var ret;\n  var state;\n\n  if (!strm) { return Z_STREAM_ERROR; }\n  //strm.msg = Z_NULL;                 /* in case we return an error */\n\n  state = new InflateState();\n\n  //if (state === Z_NULL) return Z_MEM_ERROR;\n  //Tracev((stderr, \"inflate: allocated\\n\"));\n  strm.state = state;\n  state.window = null/*Z_NULL*/;\n  ret = inflateReset2(strm, windowBits);\n  if (ret !== Z_OK) {\n    strm.state = null/*Z_NULL*/;\n  }\n  return ret;\n}\n\nfunction inflateInit(strm) {\n  return inflateInit2(strm, DEF_WBITS);\n}\n\n\n/*\n Return state with length and distance decoding tables and index sizes set to\n fixed code decoding.  Normally this returns fixed tables from inffixed.h.\n If BUILDFIXED is defined, then instead this routine builds the tables the\n first time it's called, and returns those tables the first time and\n thereafter.  This reduces the size of the code by about 2K bytes, in\n exchange for a little execution time.  However, BUILDFIXED should not be\n used for threaded applications, since the rewriting of the tables and virgin\n may not be thread-safe.\n */\nvar virgin = true;\n\nvar lenfix, distfix; // We have no pointers in JS, so keep tables separate\n\nfunction fixedtables(state) {\n  /* build fixed huffman tables if first call (may not be thread safe) */\n  if (virgin) {\n    var sym;\n\n    lenfix = new utils.Buf32(512);\n    distfix = new utils.Buf32(32);\n\n    /* literal/length table */\n    sym = 0;\n    while (sym < 144) { state.lens[sym++] = 8; }\n    while (sym < 256) { state.lens[sym++] = 9; }\n    while (sym < 280) { state.lens[sym++] = 7; }\n    while (sym < 288) { state.lens[sym++] = 8; }\n\n    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });\n\n    /* distance table */\n    sym = 0;\n    while (sym < 32) { state.lens[sym++] = 5; }\n\n    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });\n\n    /* do this just once */\n    virgin = false;\n  }\n\n  state.lencode = lenfix;\n  state.lenbits = 9;\n  state.distcode = distfix;\n  state.distbits = 5;\n}\n\n\n/*\n Update the window with the last wsize (normally 32K) bytes written before\n returning.  If window does not exist yet, create it.  This is only called\n when a window is already in use, or when output has been written during this\n inflate call, but the end of the deflate stream has not been reached yet.\n It is also called to create a window for dictionary data when a dictionary\n is loaded.\n\n Providing output buffers larger than 32K to inflate() should provide a speed\n advantage, since only the last 32K of output is copied to the sliding window\n upon return from inflate(), and since all distances after the first 32K of\n output will fall in the output data, making match copies simpler and faster.\n The advantage may be dependent on the size of the processor's data caches.\n */\nfunction updatewindow(strm, src, end, copy) {\n  var dist;\n  var state = strm.state;\n\n  /* if it hasn't been done already, allocate space for the window */\n  if (state.window === null) {\n    state.wsize = 1 << state.wbits;\n    state.wnext = 0;\n    state.whave = 0;\n\n    state.window = new utils.Buf8(state.wsize);\n  }\n\n  /* copy state->wsize or less output bytes into the circular window */\n  if (copy >= state.wsize) {\n    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);\n    state.wnext = 0;\n    state.whave = state.wsize;\n  }\n  else {\n    dist = state.wsize - state.wnext;\n    if (dist > copy) {\n      dist = copy;\n    }\n    //zmemcpy(state->window + state->wnext, end - copy, dist);\n    utils.arraySet(state.window, src, end - copy, dist, state.wnext);\n    copy -= dist;\n    if (copy) {\n      //zmemcpy(state->window, end - copy, copy);\n      utils.arraySet(state.window, src, end - copy, copy, 0);\n      state.wnext = copy;\n      state.whave = state.wsize;\n    }\n    else {\n      state.wnext += dist;\n      if (state.wnext === state.wsize) { state.wnext = 0; }\n      if (state.whave < state.wsize) { state.whave += dist; }\n    }\n  }\n  return 0;\n}\n\nfunction inflate(strm, flush) {\n  var state;\n  var input, output;          // input/output buffers\n  var next;                   /* next input INDEX */\n  var put;                    /* next output INDEX */\n  var have, left;             /* available input and output */\n  var hold;                   /* bit buffer */\n  var bits;                   /* bits in bit buffer */\n  var _in, _out;              /* save starting available input and output */\n  var copy;                   /* number of stored or match bytes to copy */\n  var from;                   /* where to copy match bytes from */\n  var from_source;\n  var here = 0;               /* current decoding table entry */\n  var here_bits, here_op, here_val; // paked \"here\" denormalized (JS specific)\n  //var last;                   /* parent table entry */\n  var last_bits, last_op, last_val; // paked \"last\" denormalized (JS specific)\n  var len;                    /* length to copy for repeats, bits to drop */\n  var ret;                    /* return code */\n  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */\n  var opts;\n\n  var n; // temporary var for NEED_BITS\n\n  var order = /* permutation of code lengths */\n    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];\n\n\n  if (!strm || !strm.state || !strm.output ||\n      (!strm.input && strm.avail_in !== 0)) {\n    return Z_STREAM_ERROR;\n  }\n\n  state = strm.state;\n  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */\n\n\n  //--- LOAD() ---\n  put = strm.next_out;\n  output = strm.output;\n  left = strm.avail_out;\n  next = strm.next_in;\n  input = strm.input;\n  have = strm.avail_in;\n  hold = state.hold;\n  bits = state.bits;\n  //---\n\n  _in = have;\n  _out = left;\n  ret = Z_OK;\n\n  inf_leave: // goto emulation\n  for (;;) {\n    switch (state.mode) {\n      case HEAD:\n        if (state.wrap === 0) {\n          state.mode = TYPEDO;\n          break;\n        }\n        //=== NEEDBITS(16);\n        while (bits < 16) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */\n          state.check = 0/*crc32(0L, Z_NULL, 0)*/;\n          //=== CRC2(state.check, hold);\n          hbuf[0] = hold & 0xff;\n          hbuf[1] = (hold >>> 8) & 0xff;\n          state.check = crc32(state.check, hbuf, 2, 0);\n          //===//\n\n          //=== INITBITS();\n          hold = 0;\n          bits = 0;\n          //===//\n          state.mode = FLAGS;\n          break;\n        }\n        state.flags = 0;           /* expect zlib header */\n        if (state.head) {\n          state.head.done = false;\n        }\n        if (!(state.wrap & 1) ||   /* check if zlib header allowed */\n          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {\n          strm.msg = 'incorrect header check';\n          state.mode = BAD;\n          break;\n        }\n        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {\n          strm.msg = 'unknown compression method';\n          state.mode = BAD;\n          break;\n        }\n        //--- DROPBITS(4) ---//\n        hold >>>= 4;\n        bits -= 4;\n        //---//\n        len = (hold & 0x0f)/*BITS(4)*/ + 8;\n        if (state.wbits === 0) {\n          state.wbits = len;\n        }\n        else if (len > state.wbits) {\n          strm.msg = 'invalid window size';\n          state.mode = BAD;\n          break;\n        }\n        state.dmax = 1 << len;\n        //Tracev((stderr, \"inflate:   zlib header ok\\n\"));\n        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;\n        state.mode = hold & 0x200 ? DICTID : TYPE;\n        //=== INITBITS();\n        hold = 0;\n        bits = 0;\n        //===//\n        break;\n      case FLAGS:\n        //=== NEEDBITS(16); */\n        while (bits < 16) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        state.flags = hold;\n        if ((state.flags & 0xff) !== Z_DEFLATED) {\n          strm.msg = 'unknown compression method';\n          state.mode = BAD;\n          break;\n        }\n        if (state.flags & 0xe000) {\n          strm.msg = 'unknown header flags set';\n          state.mode = BAD;\n          break;\n        }\n        if (state.head) {\n          state.head.text = ((hold >> 8) & 1);\n        }\n        if (state.flags & 0x0200) {\n          //=== CRC2(state.check, hold);\n          hbuf[0] = hold & 0xff;\n          hbuf[1] = (hold >>> 8) & 0xff;\n          state.check = crc32(state.check, hbuf, 2, 0);\n          //===//\n        }\n        //=== INITBITS();\n        hold = 0;\n        bits = 0;\n        //===//\n        state.mode = TIME;\n        /* falls through */\n      case TIME:\n        //=== NEEDBITS(32); */\n        while (bits < 32) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        if (state.head) {\n          state.head.time = hold;\n        }\n        if (state.flags & 0x0200) {\n          //=== CRC4(state.check, hold)\n          hbuf[0] = hold & 0xff;\n          hbuf[1] = (hold >>> 8) & 0xff;\n          hbuf[2] = (hold >>> 16) & 0xff;\n          hbuf[3] = (hold >>> 24) & 0xff;\n          state.check = crc32(state.check, hbuf, 4, 0);\n          //===\n        }\n        //=== INITBITS();\n        hold = 0;\n        bits = 0;\n        //===//\n        state.mode = OS;\n        /* falls through */\n      case OS:\n        //=== NEEDBITS(16); */\n        while (bits < 16) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        if (state.head) {\n          state.head.xflags = (hold & 0xff);\n          state.head.os = (hold >> 8);\n        }\n        if (state.flags & 0x0200) {\n          //=== CRC2(state.check, hold);\n          hbuf[0] = hold & 0xff;\n          hbuf[1] = (hold >>> 8) & 0xff;\n          state.check = crc32(state.check, hbuf, 2, 0);\n          //===//\n        }\n        //=== INITBITS();\n        hold = 0;\n        bits = 0;\n        //===//\n        state.mode = EXLEN;\n        /* falls through */\n      case EXLEN:\n        if (state.flags & 0x0400) {\n          //=== NEEDBITS(16); */\n          while (bits < 16) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          state.length = hold;\n          if (state.head) {\n            state.head.extra_len = hold;\n          }\n          if (state.flags & 0x0200) {\n            //=== CRC2(state.check, hold);\n            hbuf[0] = hold & 0xff;\n            hbuf[1] = (hold >>> 8) & 0xff;\n            state.check = crc32(state.check, hbuf, 2, 0);\n            //===//\n          }\n          //=== INITBITS();\n          hold = 0;\n          bits = 0;\n          //===//\n        }\n        else if (state.head) {\n          state.head.extra = null/*Z_NULL*/;\n        }\n        state.mode = EXTRA;\n        /* falls through */\n      case EXTRA:\n        if (state.flags & 0x0400) {\n          copy = state.length;\n          if (copy > have) { copy = have; }\n          if (copy) {\n            if (state.head) {\n              len = state.head.extra_len - state.length;\n              if (!state.head.extra) {\n                // Use untyped array for more convenient processing later\n                state.head.extra = new Array(state.head.extra_len);\n              }\n              utils.arraySet(\n                state.head.extra,\n                input,\n                next,\n                // extra field is limited to 65536 bytes\n                // - no need for additional size check\n                copy,\n                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/\n                len\n              );\n              //zmemcpy(state.head.extra + len, next,\n              //        len + copy > state.head.extra_max ?\n              //        state.head.extra_max - len : copy);\n            }\n            if (state.flags & 0x0200) {\n              state.check = crc32(state.check, input, copy, next);\n            }\n            have -= copy;\n            next += copy;\n            state.length -= copy;\n          }\n          if (state.length) { break inf_leave; }\n        }\n        state.length = 0;\n        state.mode = NAME;\n        /* falls through */\n      case NAME:\n        if (state.flags & 0x0800) {\n          if (have === 0) { break inf_leave; }\n          copy = 0;\n          do {\n            // TODO: 2 or 1 bytes?\n            len = input[next + copy++];\n            /* use constant limit because in js we should not preallocate memory */\n            if (state.head && len &&\n                (state.length < 65536 /*state.head.name_max*/)) {\n              state.head.name += String.fromCharCode(len);\n            }\n          } while (len && copy < have);\n\n          if (state.flags & 0x0200) {\n            state.check = crc32(state.check, input, copy, next);\n          }\n          have -= copy;\n          next += copy;\n          if (len) { break inf_leave; }\n        }\n        else if (state.head) {\n          state.head.name = null;\n        }\n        state.length = 0;\n        state.mode = COMMENT;\n        /* falls through */\n      case COMMENT:\n        if (state.flags & 0x1000) {\n          if (have === 0) { break inf_leave; }\n          copy = 0;\n          do {\n            len = input[next + copy++];\n            /* use constant limit because in js we should not preallocate memory */\n            if (state.head && len &&\n                (state.length < 65536 /*state.head.comm_max*/)) {\n              state.head.comment += String.fromCharCode(len);\n            }\n          } while (len && copy < have);\n          if (state.flags & 0x0200) {\n            state.check = crc32(state.check, input, copy, next);\n          }\n          have -= copy;\n          next += copy;\n          if (len) { break inf_leave; }\n        }\n        else if (state.head) {\n          state.head.comment = null;\n        }\n        state.mode = HCRC;\n        /* falls through */\n      case HCRC:\n        if (state.flags & 0x0200) {\n          //=== NEEDBITS(16); */\n          while (bits < 16) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          if (hold !== (state.check & 0xffff)) {\n            strm.msg = 'header crc mismatch';\n            state.mode = BAD;\n            break;\n          }\n          //=== INITBITS();\n          hold = 0;\n          bits = 0;\n          //===//\n        }\n        if (state.head) {\n          state.head.hcrc = ((state.flags >> 9) & 1);\n          state.head.done = true;\n        }\n        strm.adler = state.check = 0;\n        state.mode = TYPE;\n        break;\n      case DICTID:\n        //=== NEEDBITS(32); */\n        while (bits < 32) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        strm.adler = state.check = zswap32(hold);\n        //=== INITBITS();\n        hold = 0;\n        bits = 0;\n        //===//\n        state.mode = DICT;\n        /* falls through */\n      case DICT:\n        if (state.havedict === 0) {\n          //--- RESTORE() ---\n          strm.next_out = put;\n          strm.avail_out = left;\n          strm.next_in = next;\n          strm.avail_in = have;\n          state.hold = hold;\n          state.bits = bits;\n          //---\n          return Z_NEED_DICT;\n        }\n        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;\n        state.mode = TYPE;\n        /* falls through */\n      case TYPE:\n        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }\n        /* falls through */\n      case TYPEDO:\n        if (state.last) {\n          //--- BYTEBITS() ---//\n          hold >>>= bits & 7;\n          bits -= bits & 7;\n          //---//\n          state.mode = CHECK;\n          break;\n        }\n        //=== NEEDBITS(3); */\n        while (bits < 3) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        state.last = (hold & 0x01)/*BITS(1)*/;\n        //--- DROPBITS(1) ---//\n        hold >>>= 1;\n        bits -= 1;\n        //---//\n\n        switch ((hold & 0x03)/*BITS(2)*/) {\n          case 0:                             /* stored block */\n            //Tracev((stderr, \"inflate:     stored block%s\\n\",\n            //        state.last ? \" (last)\" : \"\"));\n            state.mode = STORED;\n            break;\n          case 1:                             /* fixed block */\n            fixedtables(state);\n            //Tracev((stderr, \"inflate:     fixed codes block%s\\n\",\n            //        state.last ? \" (last)\" : \"\"));\n            state.mode = LEN_;             /* decode codes */\n            if (flush === Z_TREES) {\n              //--- DROPBITS(2) ---//\n              hold >>>= 2;\n              bits -= 2;\n              //---//\n              break inf_leave;\n            }\n            break;\n          case 2:                             /* dynamic block */\n            //Tracev((stderr, \"inflate:     dynamic codes block%s\\n\",\n            //        state.last ? \" (last)\" : \"\"));\n            state.mode = TABLE;\n            break;\n          case 3:\n            strm.msg = 'invalid block type';\n            state.mode = BAD;\n        }\n        //--- DROPBITS(2) ---//\n        hold >>>= 2;\n        bits -= 2;\n        //---//\n        break;\n      case STORED:\n        //--- BYTEBITS() ---// /* go to byte boundary */\n        hold >>>= bits & 7;\n        bits -= bits & 7;\n        //---//\n        //=== NEEDBITS(32); */\n        while (bits < 32) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {\n          strm.msg = 'invalid stored block lengths';\n          state.mode = BAD;\n          break;\n        }\n        state.length = hold & 0xffff;\n        //Tracev((stderr, \"inflate:       stored length %u\\n\",\n        //        state.length));\n        //=== INITBITS();\n        hold = 0;\n        bits = 0;\n        //===//\n        state.mode = COPY_;\n        if (flush === Z_TREES) { break inf_leave; }\n        /* falls through */\n      case COPY_:\n        state.mode = COPY;\n        /* falls through */\n      case COPY:\n        copy = state.length;\n        if (copy) {\n          if (copy > have) { copy = have; }\n          if (copy > left) { copy = left; }\n          if (copy === 0) { break inf_leave; }\n          //--- zmemcpy(put, next, copy); ---\n          utils.arraySet(output, input, next, copy, put);\n          //---//\n          have -= copy;\n          next += copy;\n          left -= copy;\n          put += copy;\n          state.length -= copy;\n          break;\n        }\n        //Tracev((stderr, \"inflate:       stored end\\n\"));\n        state.mode = TYPE;\n        break;\n      case TABLE:\n        //=== NEEDBITS(14); */\n        while (bits < 14) {\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n        }\n        //===//\n        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;\n        //--- DROPBITS(5) ---//\n        hold >>>= 5;\n        bits -= 5;\n        //---//\n        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;\n        //--- DROPBITS(5) ---//\n        hold >>>= 5;\n        bits -= 5;\n        //---//\n        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;\n        //--- DROPBITS(4) ---//\n        hold >>>= 4;\n        bits -= 4;\n        //---//\n//#ifndef PKZIP_BUG_WORKAROUND\n        if (state.nlen > 286 || state.ndist > 30) {\n          strm.msg = 'too many length or distance symbols';\n          state.mode = BAD;\n          break;\n        }\n//#endif\n        //Tracev((stderr, \"inflate:       table sizes ok\\n\"));\n        state.have = 0;\n        state.mode = LENLENS;\n        /* falls through */\n      case LENLENS:\n        while (state.have < state.ncode) {\n          //=== NEEDBITS(3);\n          while (bits < 3) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);\n          //--- DROPBITS(3) ---//\n          hold >>>= 3;\n          bits -= 3;\n          //---//\n        }\n        while (state.have < 19) {\n          state.lens[order[state.have++]] = 0;\n        }\n        // We have separate tables & no pointers. 2 commented lines below not needed.\n        //state.next = state.codes;\n        //state.lencode = state.next;\n        // Switch to use dynamic table\n        state.lencode = state.lendyn;\n        state.lenbits = 7;\n\n        opts = { bits: state.lenbits };\n        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);\n        state.lenbits = opts.bits;\n\n        if (ret) {\n          strm.msg = 'invalid code lengths set';\n          state.mode = BAD;\n          break;\n        }\n        //Tracev((stderr, \"inflate:       code lengths ok\\n\"));\n        state.have = 0;\n        state.mode = CODELENS;\n        /* falls through */\n      case CODELENS:\n        while (state.have < state.nlen + state.ndist) {\n          for (;;) {\n            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/\n            here_bits = here >>> 24;\n            here_op = (here >>> 16) & 0xff;\n            here_val = here & 0xffff;\n\n            if ((here_bits) <= bits) { break; }\n            //--- PULLBYTE() ---//\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n            //---//\n          }\n          if (here_val < 16) {\n            //--- DROPBITS(here.bits) ---//\n            hold >>>= here_bits;\n            bits -= here_bits;\n            //---//\n            state.lens[state.have++] = here_val;\n          }\n          else {\n            if (here_val === 16) {\n              //=== NEEDBITS(here.bits + 2);\n              n = here_bits + 2;\n              while (bits < n) {\n                if (have === 0) { break inf_leave; }\n                have--;\n                hold += input[next++] << bits;\n                bits += 8;\n              }\n              //===//\n              //--- DROPBITS(here.bits) ---//\n              hold >>>= here_bits;\n              bits -= here_bits;\n              //---//\n              if (state.have === 0) {\n                strm.msg = 'invalid bit length repeat';\n                state.mode = BAD;\n                break;\n              }\n              len = state.lens[state.have - 1];\n              copy = 3 + (hold & 0x03);//BITS(2);\n              //--- DROPBITS(2) ---//\n              hold >>>= 2;\n              bits -= 2;\n              //---//\n            }\n            else if (here_val === 17) {\n              //=== NEEDBITS(here.bits + 3);\n              n = here_bits + 3;\n              while (bits < n) {\n                if (have === 0) { break inf_leave; }\n                have--;\n                hold += input[next++] << bits;\n                bits += 8;\n              }\n              //===//\n              //--- DROPBITS(here.bits) ---//\n              hold >>>= here_bits;\n              bits -= here_bits;\n              //---//\n              len = 0;\n              copy = 3 + (hold & 0x07);//BITS(3);\n              //--- DROPBITS(3) ---//\n              hold >>>= 3;\n              bits -= 3;\n              //---//\n            }\n            else {\n              //=== NEEDBITS(here.bits + 7);\n              n = here_bits + 7;\n              while (bits < n) {\n                if (have === 0) { break inf_leave; }\n                have--;\n                hold += input[next++] << bits;\n                bits += 8;\n              }\n              //===//\n              //--- DROPBITS(here.bits) ---//\n              hold >>>= here_bits;\n              bits -= here_bits;\n              //---//\n              len = 0;\n              copy = 11 + (hold & 0x7f);//BITS(7);\n              //--- DROPBITS(7) ---//\n              hold >>>= 7;\n              bits -= 7;\n              //---//\n            }\n            if (state.have + copy > state.nlen + state.ndist) {\n              strm.msg = 'invalid bit length repeat';\n              state.mode = BAD;\n              break;\n            }\n            while (copy--) {\n              state.lens[state.have++] = len;\n            }\n          }\n        }\n\n        /* handle error breaks in while */\n        if (state.mode === BAD) { break; }\n\n        /* check for end-of-block code (better have one) */\n        if (state.lens[256] === 0) {\n          strm.msg = 'invalid code -- missing end-of-block';\n          state.mode = BAD;\n          break;\n        }\n\n        /* build code tables -- note: do not change the lenbits or distbits\n           values here (9 and 6) without reading the comments in inftrees.h\n           concerning the ENOUGH constants, which depend on those values */\n        state.lenbits = 9;\n\n        opts = { bits: state.lenbits };\n        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);\n        // We have separate tables & no pointers. 2 commented lines below not needed.\n        // state.next_index = opts.table_index;\n        state.lenbits = opts.bits;\n        // state.lencode = state.next;\n\n        if (ret) {\n          strm.msg = 'invalid literal/lengths set';\n          state.mode = BAD;\n          break;\n        }\n\n        state.distbits = 6;\n        //state.distcode.copy(state.codes);\n        // Switch to use dynamic table\n        state.distcode = state.distdyn;\n        opts = { bits: state.distbits };\n        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);\n        // We have separate tables & no pointers. 2 commented lines below not needed.\n        // state.next_index = opts.table_index;\n        state.distbits = opts.bits;\n        // state.distcode = state.next;\n\n        if (ret) {\n          strm.msg = 'invalid distances set';\n          state.mode = BAD;\n          break;\n        }\n        //Tracev((stderr, 'inflate:       codes ok\\n'));\n        state.mode = LEN_;\n        if (flush === Z_TREES) { break inf_leave; }\n        /* falls through */\n      case LEN_:\n        state.mode = LEN;\n        /* falls through */\n      case LEN:\n        if (have >= 6 && left >= 258) {\n          //--- RESTORE() ---\n          strm.next_out = put;\n          strm.avail_out = left;\n          strm.next_in = next;\n          strm.avail_in = have;\n          state.hold = hold;\n          state.bits = bits;\n          //---\n          inflate_fast(strm, _out);\n          //--- LOAD() ---\n          put = strm.next_out;\n          output = strm.output;\n          left = strm.avail_out;\n          next = strm.next_in;\n          input = strm.input;\n          have = strm.avail_in;\n          hold = state.hold;\n          bits = state.bits;\n          //---\n\n          if (state.mode === TYPE) {\n            state.back = -1;\n          }\n          break;\n        }\n        state.back = 0;\n        for (;;) {\n          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/\n          here_bits = here >>> 24;\n          here_op = (here >>> 16) & 0xff;\n          here_val = here & 0xffff;\n\n          if (here_bits <= bits) { break; }\n          //--- PULLBYTE() ---//\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n          //---//\n        }\n        if (here_op && (here_op & 0xf0) === 0) {\n          last_bits = here_bits;\n          last_op = here_op;\n          last_val = here_val;\n          for (;;) {\n            here = state.lencode[last_val +\n                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];\n            here_bits = here >>> 24;\n            here_op = (here >>> 16) & 0xff;\n            here_val = here & 0xffff;\n\n            if ((last_bits + here_bits) <= bits) { break; }\n            //--- PULLBYTE() ---//\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n            //---//\n          }\n          //--- DROPBITS(last.bits) ---//\n          hold >>>= last_bits;\n          bits -= last_bits;\n          //---//\n          state.back += last_bits;\n        }\n        //--- DROPBITS(here.bits) ---//\n        hold >>>= here_bits;\n        bits -= here_bits;\n        //---//\n        state.back += here_bits;\n        state.length = here_val;\n        if (here_op === 0) {\n          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?\n          //        \"inflate:         literal '%c'\\n\" :\n          //        \"inflate:         literal 0x%02x\\n\", here.val));\n          state.mode = LIT;\n          break;\n        }\n        if (here_op & 32) {\n          //Tracevv((stderr, \"inflate:         end of block\\n\"));\n          state.back = -1;\n          state.mode = TYPE;\n          break;\n        }\n        if (here_op & 64) {\n          strm.msg = 'invalid literal/length code';\n          state.mode = BAD;\n          break;\n        }\n        state.extra = here_op & 15;\n        state.mode = LENEXT;\n        /* falls through */\n      case LENEXT:\n        if (state.extra) {\n          //=== NEEDBITS(state.extra);\n          n = state.extra;\n          while (bits < n) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;\n          //--- DROPBITS(state.extra) ---//\n          hold >>>= state.extra;\n          bits -= state.extra;\n          //---//\n          state.back += state.extra;\n        }\n        //Tracevv((stderr, \"inflate:         length %u\\n\", state.length));\n        state.was = state.length;\n        state.mode = DIST;\n        /* falls through */\n      case DIST:\n        for (;;) {\n          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/\n          here_bits = here >>> 24;\n          here_op = (here >>> 16) & 0xff;\n          here_val = here & 0xffff;\n\n          if ((here_bits) <= bits) { break; }\n          //--- PULLBYTE() ---//\n          if (have === 0) { break inf_leave; }\n          have--;\n          hold += input[next++] << bits;\n          bits += 8;\n          //---//\n        }\n        if ((here_op & 0xf0) === 0) {\n          last_bits = here_bits;\n          last_op = here_op;\n          last_val = here_val;\n          for (;;) {\n            here = state.distcode[last_val +\n                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];\n            here_bits = here >>> 24;\n            here_op = (here >>> 16) & 0xff;\n            here_val = here & 0xffff;\n\n            if ((last_bits + here_bits) <= bits) { break; }\n            //--- PULLBYTE() ---//\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n            //---//\n          }\n          //--- DROPBITS(last.bits) ---//\n          hold >>>= last_bits;\n          bits -= last_bits;\n          //---//\n          state.back += last_bits;\n        }\n        //--- DROPBITS(here.bits) ---//\n        hold >>>= here_bits;\n        bits -= here_bits;\n        //---//\n        state.back += here_bits;\n        if (here_op & 64) {\n          strm.msg = 'invalid distance code';\n          state.mode = BAD;\n          break;\n        }\n        state.offset = here_val;\n        state.extra = (here_op) & 15;\n        state.mode = DISTEXT;\n        /* falls through */\n      case DISTEXT:\n        if (state.extra) {\n          //=== NEEDBITS(state.extra);\n          n = state.extra;\n          while (bits < n) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;\n          //--- DROPBITS(state.extra) ---//\n          hold >>>= state.extra;\n          bits -= state.extra;\n          //---//\n          state.back += state.extra;\n        }\n//#ifdef INFLATE_STRICT\n        if (state.offset > state.dmax) {\n          strm.msg = 'invalid distance too far back';\n          state.mode = BAD;\n          break;\n        }\n//#endif\n        //Tracevv((stderr, \"inflate:         distance %u\\n\", state.offset));\n        state.mode = MATCH;\n        /* falls through */\n      case MATCH:\n        if (left === 0) { break inf_leave; }\n        copy = _out - left;\n        if (state.offset > copy) {         /* copy from window */\n          copy = state.offset - copy;\n          if (copy > state.whave) {\n            if (state.sane) {\n              strm.msg = 'invalid distance too far back';\n              state.mode = BAD;\n              break;\n            }\n// (!) This block is disabled in zlib defaults,\n// don't enable it for binary compatibility\n//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR\n//          Trace((stderr, \"inflate.c too far\\n\"));\n//          copy -= state.whave;\n//          if (copy > state.length) { copy = state.length; }\n//          if (copy > left) { copy = left; }\n//          left -= copy;\n//          state.length -= copy;\n//          do {\n//            output[put++] = 0;\n//          } while (--copy);\n//          if (state.length === 0) { state.mode = LEN; }\n//          break;\n//#endif\n          }\n          if (copy > state.wnext) {\n            copy -= state.wnext;\n            from = state.wsize - copy;\n          }\n          else {\n            from = state.wnext - copy;\n          }\n          if (copy > state.length) { copy = state.length; }\n          from_source = state.window;\n        }\n        else {                              /* copy from output */\n          from_source = output;\n          from = put - state.offset;\n          copy = state.length;\n        }\n        if (copy > left) { copy = left; }\n        left -= copy;\n        state.length -= copy;\n        do {\n          output[put++] = from_source[from++];\n        } while (--copy);\n        if (state.length === 0) { state.mode = LEN; }\n        break;\n      case LIT:\n        if (left === 0) { break inf_leave; }\n        output[put++] = state.length;\n        left--;\n        state.mode = LEN;\n        break;\n      case CHECK:\n        if (state.wrap) {\n          //=== NEEDBITS(32);\n          while (bits < 32) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            // Use '|' instead of '+' to make sure that result is signed\n            hold |= input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          _out -= left;\n          strm.total_out += _out;\n          state.total += _out;\n          if (_out) {\n            strm.adler = state.check =\n                /*UPDATE(state.check, put - _out, _out);*/\n                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));\n\n          }\n          _out = left;\n          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too\n          if ((state.flags ? hold : zswap32(hold)) !== state.check) {\n            strm.msg = 'incorrect data check';\n            state.mode = BAD;\n            break;\n          }\n          //=== INITBITS();\n          hold = 0;\n          bits = 0;\n          //===//\n          //Tracev((stderr, \"inflate:   check matches trailer\\n\"));\n        }\n        state.mode = LENGTH;\n        /* falls through */\n      case LENGTH:\n        if (state.wrap && state.flags) {\n          //=== NEEDBITS(32);\n          while (bits < 32) {\n            if (have === 0) { break inf_leave; }\n            have--;\n            hold += input[next++] << bits;\n            bits += 8;\n          }\n          //===//\n          if (hold !== (state.total & 0xffffffff)) {\n            strm.msg = 'incorrect length check';\n            state.mode = BAD;\n            break;\n          }\n          //=== INITBITS();\n          hold = 0;\n          bits = 0;\n          //===//\n          //Tracev((stderr, \"inflate:   length matches trailer\\n\"));\n        }\n        state.mode = DONE;\n        /* falls through */\n      case DONE:\n        ret = Z_STREAM_END;\n        break inf_leave;\n      case BAD:\n        ret = Z_DATA_ERROR;\n        break inf_leave;\n      case MEM:\n        return Z_MEM_ERROR;\n      case SYNC:\n        /* falls through */\n      default:\n        return Z_STREAM_ERROR;\n    }\n  }\n\n  // inf_leave <- here is real place for \"goto inf_leave\", emulated via \"break inf_leave\"\n\n  /*\n     Return from inflate(), updating the total counts and the check value.\n     If there was no progress during the inflate() call, return a buffer\n     error.  Call updatewindow() to create and/or update the window state.\n     Note: a memory error from inflate() is non-recoverable.\n   */\n\n  //--- RESTORE() ---\n  strm.next_out = put;\n  strm.avail_out = left;\n  strm.next_in = next;\n  strm.avail_in = have;\n  state.hold = hold;\n  state.bits = bits;\n  //---\n\n  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&\n                      (state.mode < CHECK || flush !== Z_FINISH))) {\n    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {\n      state.mode = MEM;\n      return Z_MEM_ERROR;\n    }\n  }\n  _in -= strm.avail_in;\n  _out -= strm.avail_out;\n  strm.total_in += _in;\n  strm.total_out += _out;\n  state.total += _out;\n  if (state.wrap && _out) {\n    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/\n      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));\n  }\n  strm.data_type = state.bits + (state.last ? 64 : 0) +\n                    (state.mode === TYPE ? 128 : 0) +\n                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);\n  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {\n    ret = Z_BUF_ERROR;\n  }\n  return ret;\n}\n\nfunction inflateEnd(strm) {\n\n  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {\n    return Z_STREAM_ERROR;\n  }\n\n  var state = strm.state;\n  if (state.window) {\n    state.window = null;\n  }\n  strm.state = null;\n  return Z_OK;\n}\n\nfunction inflateGetHeader(strm, head) {\n  var state;\n\n  /* check state */\n  if (!strm || !strm.state) { return Z_STREAM_ERROR; }\n  state = strm.state;\n  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }\n\n  /* save header structure */\n  state.head = head;\n  head.done = false;\n  return Z_OK;\n}\n\nfunction inflateSetDictionary(strm, dictionary) {\n  var dictLength = dictionary.length;\n\n  var state;\n  var dictid;\n  var ret;\n\n  /* check state */\n  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }\n  state = strm.state;\n\n  if (state.wrap !== 0 && state.mode !== DICT) {\n    return Z_STREAM_ERROR;\n  }\n\n  /* check for correct dictionary identifier */\n  if (state.mode === DICT) {\n    dictid = 1; /* adler32(0, null, 0)*/\n    /* dictid = adler32(dictid, dictionary, dictLength); */\n    dictid = adler32(dictid, dictionary, dictLength, 0);\n    if (dictid !== state.check) {\n      return Z_DATA_ERROR;\n    }\n  }\n  /* copy dictionary to window using updatewindow(), which will amend the\n   existing dictionary if appropriate */\n  ret = updatewindow(strm, dictionary, dictLength, dictLength);\n  if (ret) {\n    state.mode = MEM;\n    return Z_MEM_ERROR;\n  }\n  state.havedict = 1;\n  // Tracev((stderr, \"inflate:   dictionary set\\n\"));\n  return Z_OK;\n}\n\nexports.inflateReset = inflateReset;\nexports.inflateReset2 = inflateReset2;\nexports.inflateResetKeep = inflateResetKeep;\nexports.inflateInit = inflateInit;\nexports.inflateInit2 = inflateInit2;\nexports.inflate = inflate;\nexports.inflateEnd = inflateEnd;\nexports.inflateGetHeader = inflateGetHeader;\nexports.inflateSetDictionary = inflateSetDictionary;\nexports.inflateInfo = 'pako inflate (from Nodeca project)';\n\n/* Not implemented\nexports.inflateCopy = inflateCopy;\nexports.inflateGetDictionary = inflateGetDictionary;\nexports.inflateMark = inflateMark;\nexports.inflatePrime = inflatePrime;\nexports.inflateSync = inflateSync;\nexports.inflateSyncPoint = inflateSyncPoint;\nexports.inflateUndermine = inflateUndermine;\n*/\n\n\n/***/ }),\n/* 54 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// Note: adler32 takes 12% for level 0 and 2% for level 6.\n// It isn't worth it to make additional optimizations as in original.\n// Small size is preferable.\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nfunction adler32(adler, buf, len, pos) {\n  var s1 = (adler & 0xffff) |0,\n      s2 = ((adler >>> 16) & 0xffff) |0,\n      n = 0;\n\n  while (len !== 0) {\n    // Set limit ~ twice less than 5552, to keep\n    // s2 in 31-bits, because we force signed ints.\n    // in other case %= will fail.\n    n = len > 2000 ? 2000 : len;\n    len -= n;\n\n    do {\n      s1 = (s1 + buf[pos++]) |0;\n      s2 = (s2 + s1) |0;\n    } while (--n);\n\n    s1 %= 65521;\n    s2 %= 65521;\n  }\n\n  return (s1 | (s2 << 16)) |0;\n}\n\n\nmodule.exports = adler32;\n\n\n/***/ }),\n/* 55 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// Note: we can't get significant speed boost here.\n// So write code to minimize size - no pregenerated tables\n// and array tools dependencies.\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\n// Use ordinary array, since untyped makes no boost here\nfunction makeTable() {\n  var c, table = [];\n\n  for (var n = 0; n < 256; n++) {\n    c = n;\n    for (var k = 0; k < 8; k++) {\n      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));\n    }\n    table[n] = c;\n  }\n\n  return table;\n}\n\n// Create table on load. Just 255 signed longs. Not a problem.\nvar crcTable = makeTable();\n\n\nfunction crc32(crc, buf, len, pos) {\n  var t = crcTable,\n      end = pos + len;\n\n  crc ^= -1;\n\n  for (var i = pos; i < end; i++) {\n    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];\n  }\n\n  return (crc ^ (-1)); // >>> 0;\n}\n\n\nmodule.exports = crc32;\n\n\n/***/ }),\n/* 56 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\n// See state defs from inflate.js\nvar BAD = 30;       /* got a data error -- remain here until reset */\nvar TYPE = 12;      /* i: waiting for type bits, including last-flag bit */\n\n/*\n   Decode literal, length, and distance codes and write out the resulting\n   literal and match bytes until either not enough input or output is\n   available, an end-of-block is encountered, or a data error is encountered.\n   When large enough input and output buffers are supplied to inflate(), for\n   example, a 16K input buffer and a 64K output buffer, more than 95% of the\n   inflate execution time is spent in this routine.\n\n   Entry assumptions:\n\n        state.mode === LEN\n        strm.avail_in >= 6\n        strm.avail_out >= 258\n        start >= strm.avail_out\n        state.bits < 8\n\n   On return, state.mode is one of:\n\n        LEN -- ran out of enough output space or enough available input\n        TYPE -- reached end of block code, inflate() to interpret next block\n        BAD -- error in block data\n\n   Notes:\n\n    - The maximum input bits used by a length/distance pair is 15 bits for the\n      length code, 5 bits for the length extra, 15 bits for the distance code,\n      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.\n      Therefore if strm.avail_in >= 6, then there is enough input to avoid\n      checking for available input while decoding.\n\n    - The maximum bytes that a single length/distance pair can output is 258\n      bytes, which is the maximum length that can be coded.  inflate_fast()\n      requires strm.avail_out >= 258 for each loop to avoid checking for\n      output space.\n */\nmodule.exports = function inflate_fast(strm, start) {\n  var state;\n  var _in;                    /* local strm.input */\n  var last;                   /* have enough input while in < last */\n  var _out;                   /* local strm.output */\n  var beg;                    /* inflate()'s initial strm.output */\n  var end;                    /* while out < end, enough space available */\n//#ifdef INFLATE_STRICT\n  var dmax;                   /* maximum distance from zlib header */\n//#endif\n  var wsize;                  /* window size or zero if not using window */\n  var whave;                  /* valid bytes in the window */\n  var wnext;                  /* window write index */\n  // Use `s_window` instead `window`, avoid conflict with instrumentation tools\n  var s_window;               /* allocated sliding window, if wsize != 0 */\n  var hold;                   /* local strm.hold */\n  var bits;                   /* local strm.bits */\n  var lcode;                  /* local strm.lencode */\n  var dcode;                  /* local strm.distcode */\n  var lmask;                  /* mask for first level of length codes */\n  var dmask;                  /* mask for first level of distance codes */\n  var here;                   /* retrieved table entry */\n  var op;                     /* code bits, operation, extra bits, or */\n                              /*  window position, window bytes to copy */\n  var len;                    /* match length, unused bytes */\n  var dist;                   /* match distance */\n  var from;                   /* where to copy match from */\n  var from_source;\n\n\n  var input, output; // JS specific, because we have no pointers\n\n  /* copy state to local variables */\n  state = strm.state;\n  //here = state.here;\n  _in = strm.next_in;\n  input = strm.input;\n  last = _in + (strm.avail_in - 5);\n  _out = strm.next_out;\n  output = strm.output;\n  beg = _out - (start - strm.avail_out);\n  end = _out + (strm.avail_out - 257);\n//#ifdef INFLATE_STRICT\n  dmax = state.dmax;\n//#endif\n  wsize = state.wsize;\n  whave = state.whave;\n  wnext = state.wnext;\n  s_window = state.window;\n  hold = state.hold;\n  bits = state.bits;\n  lcode = state.lencode;\n  dcode = state.distcode;\n  lmask = (1 << state.lenbits) - 1;\n  dmask = (1 << state.distbits) - 1;\n\n\n  /* decode literals and length/distances until end-of-block or not enough\n     input data or output space */\n\n  top:\n  do {\n    if (bits < 15) {\n      hold += input[_in++] << bits;\n      bits += 8;\n      hold += input[_in++] << bits;\n      bits += 8;\n    }\n\n    here = lcode[hold & lmask];\n\n    dolen:\n    for (;;) { // Goto emulation\n      op = here >>> 24/*here.bits*/;\n      hold >>>= op;\n      bits -= op;\n      op = (here >>> 16) & 0xff/*here.op*/;\n      if (op === 0) {                          /* literal */\n        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?\n        //        \"inflate:         literal '%c'\\n\" :\n        //        \"inflate:         literal 0x%02x\\n\", here.val));\n        output[_out++] = here & 0xffff/*here.val*/;\n      }\n      else if (op & 16) {                     /* length base */\n        len = here & 0xffff/*here.val*/;\n        op &= 15;                           /* number of extra bits */\n        if (op) {\n          if (bits < op) {\n            hold += input[_in++] << bits;\n            bits += 8;\n          }\n          len += hold & ((1 << op) - 1);\n          hold >>>= op;\n          bits -= op;\n        }\n        //Tracevv((stderr, \"inflate:         length %u\\n\", len));\n        if (bits < 15) {\n          hold += input[_in++] << bits;\n          bits += 8;\n          hold += input[_in++] << bits;\n          bits += 8;\n        }\n        here = dcode[hold & dmask];\n\n        dodist:\n        for (;;) { // goto emulation\n          op = here >>> 24/*here.bits*/;\n          hold >>>= op;\n          bits -= op;\n          op = (here >>> 16) & 0xff/*here.op*/;\n\n          if (op & 16) {                      /* distance base */\n            dist = here & 0xffff/*here.val*/;\n            op &= 15;                       /* number of extra bits */\n            if (bits < op) {\n              hold += input[_in++] << bits;\n              bits += 8;\n              if (bits < op) {\n                hold += input[_in++] << bits;\n                bits += 8;\n              }\n            }\n            dist += hold & ((1 << op) - 1);\n//#ifdef INFLATE_STRICT\n            if (dist > dmax) {\n              strm.msg = 'invalid distance too far back';\n              state.mode = BAD;\n              break top;\n            }\n//#endif\n            hold >>>= op;\n            bits -= op;\n            //Tracevv((stderr, \"inflate:         distance %u\\n\", dist));\n            op = _out - beg;                /* max distance in output */\n            if (dist > op) {                /* see if copy from window */\n              op = dist - op;               /* distance back in window */\n              if (op > whave) {\n                if (state.sane) {\n                  strm.msg = 'invalid distance too far back';\n                  state.mode = BAD;\n                  break top;\n                }\n\n// (!) This block is disabled in zlib defaults,\n// don't enable it for binary compatibility\n//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR\n//                if (len <= op - whave) {\n//                  do {\n//                    output[_out++] = 0;\n//                  } while (--len);\n//                  continue top;\n//                }\n//                len -= op - whave;\n//                do {\n//                  output[_out++] = 0;\n//                } while (--op > whave);\n//                if (op === 0) {\n//                  from = _out - dist;\n//                  do {\n//                    output[_out++] = output[from++];\n//                  } while (--len);\n//                  continue top;\n//                }\n//#endif\n              }\n              from = 0; // window index\n              from_source = s_window;\n              if (wnext === 0) {           /* very common case */\n                from += wsize - op;\n                if (op < len) {         /* some from window */\n                  len -= op;\n                  do {\n                    output[_out++] = s_window[from++];\n                  } while (--op);\n                  from = _out - dist;  /* rest from output */\n                  from_source = output;\n                }\n              }\n              else if (wnext < op) {      /* wrap around window */\n                from += wsize + wnext - op;\n                op -= wnext;\n                if (op < len) {         /* some from end of window */\n                  len -= op;\n                  do {\n                    output[_out++] = s_window[from++];\n                  } while (--op);\n                  from = 0;\n                  if (wnext < len) {  /* some from start of window */\n                    op = wnext;\n                    len -= op;\n                    do {\n                      output[_out++] = s_window[from++];\n                    } while (--op);\n                    from = _out - dist;      /* rest from output */\n                    from_source = output;\n                  }\n                }\n              }\n              else {                      /* contiguous in window */\n                from += wnext - op;\n                if (op < len) {         /* some from window */\n                  len -= op;\n                  do {\n                    output[_out++] = s_window[from++];\n                  } while (--op);\n                  from = _out - dist;  /* rest from output */\n                  from_source = output;\n                }\n              }\n              while (len > 2) {\n                output[_out++] = from_source[from++];\n                output[_out++] = from_source[from++];\n                output[_out++] = from_source[from++];\n                len -= 3;\n              }\n              if (len) {\n                output[_out++] = from_source[from++];\n                if (len > 1) {\n                  output[_out++] = from_source[from++];\n                }\n              }\n            }\n            else {\n              from = _out - dist;          /* copy direct from output */\n              do {                        /* minimum length is three */\n                output[_out++] = output[from++];\n                output[_out++] = output[from++];\n                output[_out++] = output[from++];\n                len -= 3;\n              } while (len > 2);\n              if (len) {\n                output[_out++] = output[from++];\n                if (len > 1) {\n                  output[_out++] = output[from++];\n                }\n              }\n            }\n          }\n          else if ((op & 64) === 0) {          /* 2nd level distance code */\n            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];\n            continue dodist;\n          }\n          else {\n            strm.msg = 'invalid distance code';\n            state.mode = BAD;\n            break top;\n          }\n\n          break; // need to emulate goto via \"continue\"\n        }\n      }\n      else if ((op & 64) === 0) {              /* 2nd level length code */\n        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];\n        continue dolen;\n      }\n      else if (op & 32) {                     /* end-of-block */\n        //Tracevv((stderr, \"inflate:         end of block\\n\"));\n        state.mode = TYPE;\n        break top;\n      }\n      else {\n        strm.msg = 'invalid literal/length code';\n        state.mode = BAD;\n        break top;\n      }\n\n      break; // need to emulate goto via \"continue\"\n    }\n  } while (_in < last && _out < end);\n\n  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */\n  len = bits >> 3;\n  _in -= len;\n  bits -= len << 3;\n  hold &= (1 << bits) - 1;\n\n  /* update state and return */\n  strm.next_in = _in;\n  strm.next_out = _out;\n  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));\n  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));\n  state.hold = hold;\n  state.bits = bits;\n  return;\n};\n\n\n/***/ }),\n/* 57 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nvar utils = __webpack_require__(12);\n\nvar MAXBITS = 15;\nvar ENOUGH_LENS = 852;\nvar ENOUGH_DISTS = 592;\n//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);\n\nvar CODES = 0;\nvar LENS = 1;\nvar DISTS = 2;\n\nvar lbase = [ /* Length codes 257..285 base */\n  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,\n  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0\n];\n\nvar lext = [ /* Length codes 257..285 extra */\n  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,\n  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78\n];\n\nvar dbase = [ /* Distance codes 0..29 base */\n  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,\n  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,\n  8193, 12289, 16385, 24577, 0, 0\n];\n\nvar dext = [ /* Distance codes 0..29 extra */\n  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,\n  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,\n  28, 28, 29, 29, 64, 64\n];\n\nmodule.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)\n{\n  var bits = opts.bits;\n      //here = opts.here; /* table entry for duplication */\n\n  var len = 0;               /* a code's length in bits */\n  var sym = 0;               /* index of code symbols */\n  var min = 0, max = 0;          /* minimum and maximum code lengths */\n  var root = 0;              /* number of index bits for root table */\n  var curr = 0;              /* number of index bits for current table */\n  var drop = 0;              /* code bits to drop for sub-table */\n  var left = 0;                   /* number of prefix codes available */\n  var used = 0;              /* code entries in table used */\n  var huff = 0;              /* Huffman code */\n  var incr;              /* for incrementing code, index */\n  var fill;              /* index for replicating entries */\n  var low;               /* low bits for current root entry */\n  var mask;              /* mask for low root bits */\n  var next;             /* next available space in table */\n  var base = null;     /* base value table to use */\n  var base_index = 0;\n//  var shoextra;    /* extra bits table to use */\n  var end;                    /* use base and extra for symbol > end */\n  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */\n  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */\n  var extra = null;\n  var extra_index = 0;\n\n  var here_bits, here_op, here_val;\n\n  /*\n   Process a set of code lengths to create a canonical Huffman code.  The\n   code lengths are lens[0..codes-1].  Each length corresponds to the\n   symbols 0..codes-1.  The Huffman code is generated by first sorting the\n   symbols by length from short to long, and retaining the symbol order\n   for codes with equal lengths.  Then the code starts with all zero bits\n   for the first code of the shortest length, and the codes are integer\n   increments for the same length, and zeros are appended as the length\n   increases.  For the deflate format, these bits are stored backwards\n   from their more natural integer increment ordering, and so when the\n   decoding tables are built in the large loop below, the integer codes\n   are incremented backwards.\n\n   This routine assumes, but does not check, that all of the entries in\n   lens[] are in the range 0..MAXBITS.  The caller must assure this.\n   1..MAXBITS is interpreted as that code length.  zero means that that\n   symbol does not occur in this code.\n\n   The codes are sorted by computing a count of codes for each length,\n   creating from that a table of starting indices for each length in the\n   sorted table, and then entering the symbols in order in the sorted\n   table.  The sorted table is work[], with that space being provided by\n   the caller.\n\n   The length counts are used for other purposes as well, i.e. finding\n   the minimum and maximum length codes, determining if there are any\n   codes at all, checking for a valid set of lengths, and looking ahead\n   at length counts to determine sub-table sizes when building the\n   decoding tables.\n   */\n\n  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */\n  for (len = 0; len <= MAXBITS; len++) {\n    count[len] = 0;\n  }\n  for (sym = 0; sym < codes; sym++) {\n    count[lens[lens_index + sym]]++;\n  }\n\n  /* bound code lengths, force root to be within code lengths */\n  root = bits;\n  for (max = MAXBITS; max >= 1; max--) {\n    if (count[max] !== 0) { break; }\n  }\n  if (root > max) {\n    root = max;\n  }\n  if (max === 0) {                     /* no symbols to code at all */\n    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */\n    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;\n    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;\n    table[table_index++] = (1 << 24) | (64 << 16) | 0;\n\n\n    //table.op[opts.table_index] = 64;\n    //table.bits[opts.table_index] = 1;\n    //table.val[opts.table_index++] = 0;\n    table[table_index++] = (1 << 24) | (64 << 16) | 0;\n\n    opts.bits = 1;\n    return 0;     /* no symbols, but wait for decoding to report error */\n  }\n  for (min = 1; min < max; min++) {\n    if (count[min] !== 0) { break; }\n  }\n  if (root < min) {\n    root = min;\n  }\n\n  /* check for an over-subscribed or incomplete set of lengths */\n  left = 1;\n  for (len = 1; len <= MAXBITS; len++) {\n    left <<= 1;\n    left -= count[len];\n    if (left < 0) {\n      return -1;\n    }        /* over-subscribed */\n  }\n  if (left > 0 && (type === CODES || max !== 1)) {\n    return -1;                      /* incomplete set */\n  }\n\n  /* generate offsets into symbol table for each length for sorting */\n  offs[1] = 0;\n  for (len = 1; len < MAXBITS; len++) {\n    offs[len + 1] = offs[len] + count[len];\n  }\n\n  /* sort symbols by length, by symbol order within each length */\n  for (sym = 0; sym < codes; sym++) {\n    if (lens[lens_index + sym] !== 0) {\n      work[offs[lens[lens_index + sym]]++] = sym;\n    }\n  }\n\n  /*\n   Create and fill in decoding tables.  In this loop, the table being\n   filled is at next and has curr index bits.  The code being used is huff\n   with length len.  That code is converted to an index by dropping drop\n   bits off of the bottom.  For codes where len is less than drop + curr,\n   those top drop + curr - len bits are incremented through all values to\n   fill the table with replicated entries.\n\n   root is the number of index bits for the root table.  When len exceeds\n   root, sub-tables are created pointed to by the root entry with an index\n   of the low root bits of huff.  This is saved in low to check for when a\n   new sub-table should be started.  drop is zero when the root table is\n   being filled, and drop is root when sub-tables are being filled.\n\n   When a new sub-table is needed, it is necessary to look ahead in the\n   code lengths to determine what size sub-table is needed.  The length\n   counts are used for this, and so count[] is decremented as codes are\n   entered in the tables.\n\n   used keeps track of how many table entries have been allocated from the\n   provided *table space.  It is checked for LENS and DIST tables against\n   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in\n   the initial root table size constants.  See the comments in inftrees.h\n   for more information.\n\n   sym increments through all symbols, and the loop terminates when\n   all codes of length max, i.e. all codes, have been processed.  This\n   routine permits incomplete codes, so another loop after this one fills\n   in the rest of the decoding tables with invalid code markers.\n   */\n\n  /* set up for code type */\n  // poor man optimization - use if-else instead of switch,\n  // to avoid deopts in old v8\n  if (type === CODES) {\n    base = extra = work;    /* dummy value--not used */\n    end = 19;\n\n  } else if (type === LENS) {\n    base = lbase;\n    base_index -= 257;\n    extra = lext;\n    extra_index -= 257;\n    end = 256;\n\n  } else {                    /* DISTS */\n    base = dbase;\n    extra = dext;\n    end = -1;\n  }\n\n  /* initialize opts for loop */\n  huff = 0;                   /* starting code */\n  sym = 0;                    /* starting code symbol */\n  len = min;                  /* starting code length */\n  next = table_index;              /* current table to fill in */\n  curr = root;                /* current table index bits */\n  drop = 0;                   /* current bits to drop from code for index */\n  low = -1;                   /* trigger new sub-table when len > root */\n  used = 1 << root;          /* use root table entries */\n  mask = used - 1;            /* mask for comparing low */\n\n  /* check available table space */\n  if ((type === LENS && used > ENOUGH_LENS) ||\n    (type === DISTS && used > ENOUGH_DISTS)) {\n    return 1;\n  }\n\n  /* process all codes and make table entries */\n  for (;;) {\n    /* create table entry */\n    here_bits = len - drop;\n    if (work[sym] < end) {\n      here_op = 0;\n      here_val = work[sym];\n    }\n    else if (work[sym] > end) {\n      here_op = extra[extra_index + work[sym]];\n      here_val = base[base_index + work[sym]];\n    }\n    else {\n      here_op = 32 + 64;         /* end of block */\n      here_val = 0;\n    }\n\n    /* replicate for those indices with low len bits equal to huff */\n    incr = 1 << (len - drop);\n    fill = 1 << curr;\n    min = fill;                 /* save offset to next table */\n    do {\n      fill -= incr;\n      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;\n    } while (fill !== 0);\n\n    /* backwards increment the len-bit code huff */\n    incr = 1 << (len - 1);\n    while (huff & incr) {\n      incr >>= 1;\n    }\n    if (incr !== 0) {\n      huff &= incr - 1;\n      huff += incr;\n    } else {\n      huff = 0;\n    }\n\n    /* go to next symbol, update count, len */\n    sym++;\n    if (--count[len] === 0) {\n      if (len === max) { break; }\n      len = lens[lens_index + work[sym]];\n    }\n\n    /* create new sub-table if needed */\n    if (len > root && (huff & mask) !== low) {\n      /* if first time, transition to sub-tables */\n      if (drop === 0) {\n        drop = root;\n      }\n\n      /* increment past last table */\n      next += min;            /* here min is 1 << curr */\n\n      /* determine length of next table */\n      curr = len - drop;\n      left = 1 << curr;\n      while (curr + drop < max) {\n        left -= count[curr + drop];\n        if (left <= 0) { break; }\n        curr++;\n        left <<= 1;\n      }\n\n      /* check for enough space */\n      used += 1 << curr;\n      if ((type === LENS && used > ENOUGH_LENS) ||\n        (type === DISTS && used > ENOUGH_DISTS)) {\n        return 1;\n      }\n\n      /* point entry in root table to sub-table */\n      low = huff & mask;\n      /*table.op[low] = curr;\n      table.bits[low] = root;\n      table.val[low] = next - opts.table_index;*/\n      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;\n    }\n  }\n\n  /* fill in remaining table entry if code is incomplete (guaranteed to have\n   at most one remaining entry, since if the code is incomplete, the\n   maximum code length that was allowed to get this far is one bit) */\n  if (huff !== 0) {\n    //table.op[next + huff] = 64;            /* invalid code marker */\n    //table.bits[next + huff] = len - drop;\n    //table.val[next + huff] = 0;\n    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;\n  }\n\n  /* set return parameters */\n  //opts.table_index += used;\n  opts.bits = root;\n  return 0;\n};\n\n\n/***/ }),\n/* 58 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// String encode/decode helpers\n\n\n\nvar utils = __webpack_require__(12);\n\n\n// Quick check if we can use fast array to bin string conversion\n//\n// - apply(Array) can fail on Android 2.2\n// - apply(Uint8Array) can fail on iOS 5.1 Safari\n//\nvar STR_APPLY_OK = true;\nvar STR_APPLY_UIA_OK = true;\n\ntry { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }\ntry { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }\n\n\n// Table with utf8 lengths (calculated by first byte of sequence)\n// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,\n// because max possible codepoint is 0x10ffff\nvar _utf8len = new utils.Buf8(256);\nfor (var q = 0; q < 256; q++) {\n  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);\n}\n_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start\n\n\n// convert string to array (typed, when possible)\nexports.string2buf = function (str) {\n  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;\n\n  // count binary size\n  for (m_pos = 0; m_pos < str_len; m_pos++) {\n    c = str.charCodeAt(m_pos);\n    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {\n      c2 = str.charCodeAt(m_pos + 1);\n      if ((c2 & 0xfc00) === 0xdc00) {\n        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);\n        m_pos++;\n      }\n    }\n    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;\n  }\n\n  // allocate buffer\n  buf = new utils.Buf8(buf_len);\n\n  // convert\n  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {\n    c = str.charCodeAt(m_pos);\n    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {\n      c2 = str.charCodeAt(m_pos + 1);\n      if ((c2 & 0xfc00) === 0xdc00) {\n        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);\n        m_pos++;\n      }\n    }\n    if (c < 0x80) {\n      /* one byte */\n      buf[i++] = c;\n    } else if (c < 0x800) {\n      /* two bytes */\n      buf[i++] = 0xC0 | (c >>> 6);\n      buf[i++] = 0x80 | (c & 0x3f);\n    } else if (c < 0x10000) {\n      /* three bytes */\n      buf[i++] = 0xE0 | (c >>> 12);\n      buf[i++] = 0x80 | (c >>> 6 & 0x3f);\n      buf[i++] = 0x80 | (c & 0x3f);\n    } else {\n      /* four bytes */\n      buf[i++] = 0xf0 | (c >>> 18);\n      buf[i++] = 0x80 | (c >>> 12 & 0x3f);\n      buf[i++] = 0x80 | (c >>> 6 & 0x3f);\n      buf[i++] = 0x80 | (c & 0x3f);\n    }\n  }\n\n  return buf;\n};\n\n// Helper (used in 2 places)\nfunction buf2binstring(buf, len) {\n  // On Chrome, the arguments in a function call that are allowed is `65534`.\n  // If the length of the buffer is smaller than that, we can use this optimization,\n  // otherwise we will take a slower path.\n  if (len < 65534) {\n    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {\n      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));\n    }\n  }\n\n  var result = '';\n  for (var i = 0; i < len; i++) {\n    result += String.fromCharCode(buf[i]);\n  }\n  return result;\n}\n\n\n// Convert byte array to binary string\nexports.buf2binstring = function (buf) {\n  return buf2binstring(buf, buf.length);\n};\n\n\n// Convert binary string (typed, when possible)\nexports.binstring2buf = function (str) {\n  var buf = new utils.Buf8(str.length);\n  for (var i = 0, len = buf.length; i < len; i++) {\n    buf[i] = str.charCodeAt(i);\n  }\n  return buf;\n};\n\n\n// convert array to string\nexports.buf2string = function (buf, max) {\n  var i, out, c, c_len;\n  var len = max || buf.length;\n\n  // Reserve max possible length (2 words per char)\n  // NB: by unknown reasons, Array is significantly faster for\n  //     String.fromCharCode.apply than Uint16Array.\n  var utf16buf = new Array(len * 2);\n\n  for (out = 0, i = 0; i < len;) {\n    c = buf[i++];\n    // quick process ascii\n    if (c < 0x80) { utf16buf[out++] = c; continue; }\n\n    c_len = _utf8len[c];\n    // skip 5 & 6 byte codes\n    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }\n\n    // apply mask on first byte\n    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;\n    // join the rest\n    while (c_len > 1 && i < len) {\n      c = (c << 6) | (buf[i++] & 0x3f);\n      c_len--;\n    }\n\n    // terminated by end of string?\n    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }\n\n    if (c < 0x10000) {\n      utf16buf[out++] = c;\n    } else {\n      c -= 0x10000;\n      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);\n      utf16buf[out++] = 0xdc00 | (c & 0x3ff);\n    }\n  }\n\n  return buf2binstring(utf16buf, out);\n};\n\n\n// Calculate max possible position in utf8 buffer,\n// that will not break sequence. If that's not possible\n// - (very small limits) return max size as is.\n//\n// buf[] - utf8 bytes array\n// max   - length limit (mandatory);\nexports.utf8border = function (buf, max) {\n  var pos;\n\n  max = max || buf.length;\n  if (max > buf.length) { max = buf.length; }\n\n  // go back from last position, until start of sequence found\n  pos = max - 1;\n  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }\n\n  // Very small and broken sequence,\n  // return max, because we should return something anyway.\n  if (pos < 0) { return max; }\n\n  // If we came to start of buffer - that means buffer is too small,\n  // return max too.\n  if (pos === 0) { return max; }\n\n  return (pos + _utf8len[buf[pos]] > max) ? pos : max;\n};\n\n\n/***/ }),\n/* 59 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nmodule.exports = {\n\n  /* Allowed flush values; see deflate() and inflate() below for details */\n  Z_NO_FLUSH:         0,\n  Z_PARTIAL_FLUSH:    1,\n  Z_SYNC_FLUSH:       2,\n  Z_FULL_FLUSH:       3,\n  Z_FINISH:           4,\n  Z_BLOCK:            5,\n  Z_TREES:            6,\n\n  /* Return codes for the compression/decompression functions. Negative values\n  * are errors, positive values are used for special but normal events.\n  */\n  Z_OK:               0,\n  Z_STREAM_END:       1,\n  Z_NEED_DICT:        2,\n  Z_ERRNO:           -1,\n  Z_STREAM_ERROR:    -2,\n  Z_DATA_ERROR:      -3,\n  //Z_MEM_ERROR:     -4,\n  Z_BUF_ERROR:       -5,\n  //Z_VERSION_ERROR: -6,\n\n  /* compression levels */\n  Z_NO_COMPRESSION:         0,\n  Z_BEST_SPEED:             1,\n  Z_BEST_COMPRESSION:       9,\n  Z_DEFAULT_COMPRESSION:   -1,\n\n\n  Z_FILTERED:               1,\n  Z_HUFFMAN_ONLY:           2,\n  Z_RLE:                    3,\n  Z_FIXED:                  4,\n  Z_DEFAULT_STRATEGY:       0,\n\n  /* Possible values of the data_type field (though see inflate()) */\n  Z_BINARY:                 0,\n  Z_TEXT:                   1,\n  //Z_ASCII:                1, // = Z_TEXT (deprecated)\n  Z_UNKNOWN:                2,\n\n  /* The deflate compression method */\n  Z_DEFLATED:               8\n  //Z_NULL:                 null // Use -1 or null inline, depending on var type\n};\n\n\n/***/ }),\n/* 60 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nmodule.exports = {\n  2:      'need dictionary',     /* Z_NEED_DICT       2  */\n  1:      'stream end',          /* Z_STREAM_END      1  */\n  0:      '',                    /* Z_OK              0  */\n  '-1':   'file error',          /* Z_ERRNO         (-1) */\n  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */\n  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */\n  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */\n  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */\n  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */\n};\n\n\n/***/ }),\n/* 61 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nfunction ZStream() {\n  /* next input byte */\n  this.input = null; // JS specific, because we have no pointers\n  this.next_in = 0;\n  /* number of bytes available at input */\n  this.avail_in = 0;\n  /* total number of input bytes read so far */\n  this.total_in = 0;\n  /* next output byte should be put there */\n  this.output = null; // JS specific, because we have no pointers\n  this.next_out = 0;\n  /* remaining free space at output */\n  this.avail_out = 0;\n  /* total number of bytes output so far */\n  this.total_out = 0;\n  /* last error message, NULL if no error */\n  this.msg = ''/*Z_NULL*/;\n  /* not visible by applications */\n  this.state = null;\n  /* best guess about the data type: binary or text */\n  this.data_type = 2/*Z_UNKNOWN*/;\n  /* adler32 value of the uncompressed data */\n  this.adler = 0;\n}\n\nmodule.exports = ZStream;\n\n\n/***/ }),\n/* 62 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nfunction GZheader() {\n  /* true if compressed data believed to be text */\n  this.text       = 0;\n  /* modification time */\n  this.time       = 0;\n  /* extra flags (not used when writing a gzip file) */\n  this.xflags     = 0;\n  /* operating system */\n  this.os         = 0;\n  /* pointer to extra field or Z_NULL if none */\n  this.extra      = null;\n  /* extra field length (valid if extra != Z_NULL) */\n  this.extra_len  = 0; // Actually, we don't need it in JS,\n                       // but leave for few code modifications\n\n  //\n  // Setup limits is not necessary because in js we should not preallocate memory\n  // for inflate use constant limit in 65536 bytes\n  //\n\n  /* space at extra (only when reading header) */\n  // this.extra_max  = 0;\n  /* pointer to zero-terminated file name or Z_NULL */\n  this.name       = '';\n  /* space at name (only when reading header) */\n  // this.name_max   = 0;\n  /* pointer to zero-terminated comment or Z_NULL */\n  this.comment    = '';\n  /* space at comment (only when reading header) */\n  // this.comm_max   = 0;\n  /* true if there was or will be a header crc */\n  this.hcrc       = 0;\n  /* true when done reading gzip header (not used when writing a gzip file) */\n  this.done       = false;\n}\n\nmodule.exports = GZheader;\n\n\n/***/ }),\n/* 63 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\n/**\n * This is the common logic for both the Node.js and web browser\n * implementations of `debug()`.\n */\n\nfunction setup(env) {\n\tcreateDebug.debug = createDebug;\n\tcreateDebug.default = createDebug;\n\tcreateDebug.coerce = coerce;\n\tcreateDebug.disable = disable;\n\tcreateDebug.enable = enable;\n\tcreateDebug.enabled = enabled;\n\tcreateDebug.humanize = __webpack_require__(64);\n\n\tObject.keys(env).forEach(key => {\n\t\tcreateDebug[key] = env[key];\n\t});\n\n\t/**\n\t* Active `debug` instances.\n\t*/\n\tcreateDebug.instances = [];\n\n\t/**\n\t* The currently active debug mode names, and names to skip.\n\t*/\n\n\tcreateDebug.names = [];\n\tcreateDebug.skips = [];\n\n\t/**\n\t* Map of special \"%n\" handling functions, for the debug \"format\" argument.\n\t*\n\t* Valid key names are a single, lower or upper-case letter, i.e. \"n\" and \"N\".\n\t*/\n\tcreateDebug.formatters = {};\n\n\t/**\n\t* Selects a color for a debug namespace\n\t* @param {String} namespace The namespace string for the for the debug instance to be colored\n\t* @return {Number|String} An ANSI color code for the given namespace\n\t* @api private\n\t*/\n\tfunction selectColor(namespace) {\n\t\tlet hash = 0;\n\n\t\tfor (let i = 0; i < namespace.length; i++) {\n\t\t\thash = ((hash << 5) - hash) + namespace.charCodeAt(i);\n\t\t\thash |= 0; // Convert to 32bit integer\n\t\t}\n\n\t\treturn createDebug.colors[Math.abs(hash) % createDebug.colors.length];\n\t}\n\tcreateDebug.selectColor = selectColor;\n\n\t/**\n\t* Create a debugger with the given `namespace`.\n\t*\n\t* @param {String} namespace\n\t* @return {Function}\n\t* @api public\n\t*/\n\tfunction createDebug(namespace) {\n\t\tlet prevTime;\n\n\t\tfunction debug(...args) {\n\t\t\t// Disabled?\n\t\t\tif (!debug.enabled) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst self = debug;\n\n\t\t\t// Set `diff` timestamp\n\t\t\tconst curr = Number(new Date());\n\t\t\tconst ms = curr - (prevTime || curr);\n\t\t\tself.diff = ms;\n\t\t\tself.prev = prevTime;\n\t\t\tself.curr = curr;\n\t\t\tprevTime = curr;\n\n\t\t\targs[0] = createDebug.coerce(args[0]);\n\n\t\t\tif (typeof args[0] !== 'string') {\n\t\t\t\t// Anything else let's inspect with %O\n\t\t\t\targs.unshift('%O');\n\t\t\t}\n\n\t\t\t// Apply any `formatters` transformations\n\t\t\tlet index = 0;\n\t\t\targs[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {\n\t\t\t\t// If we encounter an escaped % then don't increase the array index\n\t\t\t\tif (match === '%%') {\n\t\t\t\t\treturn match;\n\t\t\t\t}\n\t\t\t\tindex++;\n\t\t\t\tconst formatter = createDebug.formatters[format];\n\t\t\t\tif (typeof formatter === 'function') {\n\t\t\t\t\tconst val = args[index];\n\t\t\t\t\tmatch = formatter.call(self, val);\n\n\t\t\t\t\t// Now we need to remove `args[index]` since it's inlined in the `format`\n\t\t\t\t\targs.splice(index, 1);\n\t\t\t\t\tindex--;\n\t\t\t\t}\n\t\t\t\treturn match;\n\t\t\t});\n\n\t\t\t// Apply env-specific formatting (colors, etc.)\n\t\t\tcreateDebug.formatArgs.call(self, args);\n\n\t\t\tconst logFn = self.log || createDebug.log;\n\t\t\tlogFn.apply(self, args);\n\t\t}\n\n\t\tdebug.namespace = namespace;\n\t\tdebug.enabled = createDebug.enabled(namespace);\n\t\tdebug.useColors = createDebug.useColors();\n\t\tdebug.color = selectColor(namespace);\n\t\tdebug.destroy = destroy;\n\t\tdebug.extend = extend;\n\t\t// Debug.formatArgs = formatArgs;\n\t\t// debug.rawLog = rawLog;\n\n\t\t// env-specific initialization logic for debug instances\n\t\tif (typeof createDebug.init === 'function') {\n\t\t\tcreateDebug.init(debug);\n\t\t}\n\n\t\tcreateDebug.instances.push(debug);\n\n\t\treturn debug;\n\t}\n\n\tfunction destroy() {\n\t\tconst index = createDebug.instances.indexOf(this);\n\t\tif (index !== -1) {\n\t\t\tcreateDebug.instances.splice(index, 1);\n\t\t\treturn true;\n\t\t}\n\t\treturn false;\n\t}\n\n\tfunction extend(namespace, delimiter) {\n\t\tconst newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);\n\t\tnewDebug.log = this.log;\n\t\treturn newDebug;\n\t}\n\n\t/**\n\t* Enables a debug mode by namespaces. This can include modes\n\t* separated by a colon and wildcards.\n\t*\n\t* @param {String} namespaces\n\t* @api public\n\t*/\n\tfunction enable(namespaces) {\n\t\tcreateDebug.save(namespaces);\n\n\t\tcreateDebug.names = [];\n\t\tcreateDebug.skips = [];\n\n\t\tlet i;\n\t\tconst split = (typeof namespaces === 'string' ? namespaces : '').split(/[\\s,]+/);\n\t\tconst len = split.length;\n\n\t\tfor (i = 0; i < len; i++) {\n\t\t\tif (!split[i]) {\n\t\t\t\t// ignore empty strings\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tnamespaces = split[i].replace(/\\*/g, '.*?');\n\n\t\t\tif (namespaces[0] === '-') {\n\t\t\t\tcreateDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));\n\t\t\t} else {\n\t\t\t\tcreateDebug.names.push(new RegExp('^' + namespaces + '$'));\n\t\t\t}\n\t\t}\n\n\t\tfor (i = 0; i < createDebug.instances.length; i++) {\n\t\t\tconst instance = createDebug.instances[i];\n\t\t\tinstance.enabled = createDebug.enabled(instance.namespace);\n\t\t}\n\t}\n\n\t/**\n\t* Disable debug output.\n\t*\n\t* @return {String} namespaces\n\t* @api public\n\t*/\n\tfunction disable() {\n\t\tconst namespaces = [\n\t\t\t...createDebug.names.map(toNamespace),\n\t\t\t...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)\n\t\t].join(',');\n\t\tcreateDebug.enable('');\n\t\treturn namespaces;\n\t}\n\n\t/**\n\t* Returns true if the given mode name is enabled, false otherwise.\n\t*\n\t* @param {String} name\n\t* @return {Boolean}\n\t* @api public\n\t*/\n\tfunction enabled(name) {\n\t\tif (name[name.length - 1] === '*') {\n\t\t\treturn true;\n\t\t}\n\n\t\tlet i;\n\t\tlet len;\n\n\t\tfor (i = 0, len = createDebug.skips.length; i < len; i++) {\n\t\t\tif (createDebug.skips[i].test(name)) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\tfor (i = 0, len = createDebug.names.length; i < len; i++) {\n\t\t\tif (createDebug.names[i].test(name)) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\n\t\treturn false;\n\t}\n\n\t/**\n\t* Convert regexp to namespace\n\t*\n\t* @param {RegExp} regxep\n\t* @return {String} namespace\n\t* @api private\n\t*/\n\tfunction toNamespace(regexp) {\n\t\treturn regexp.toString()\n\t\t\t.substring(2, regexp.toString().length - 2)\n\t\t\t.replace(/\\.\\*\\?$/, '*');\n\t}\n\n\t/**\n\t* Coerce `val`.\n\t*\n\t* @param {Mixed} val\n\t* @return {Mixed}\n\t* @api private\n\t*/\n\tfunction coerce(val) {\n\t\tif (val instanceof Error) {\n\t\t\treturn val.stack || val.message;\n\t\t}\n\t\treturn val;\n\t}\n\n\tcreateDebug.enable(createDebug.load());\n\n\treturn createDebug;\n}\n\nmodule.exports = setup;\n\n\n/***/ }),\n/* 64 */\n/***/ (function(module, exports) {\n\n/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar w = d * 7;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options) {\n  options = options || {};\n  var type = typeof val;\n  if (type === 'string' && val.length > 0) {\n    return parse(val);\n  } else if (type === 'number' && isFinite(val)) {\n    return options.long ? fmtLong(val) : fmtShort(val);\n  }\n  throw new Error(\n    'val is not a non-empty string or a valid number. val=' +\n      JSON.stringify(val)\n  );\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  str = String(str);\n  if (str.length > 100) {\n    return;\n  }\n  var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(\n    str\n  );\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'yrs':\n    case 'yr':\n    case 'y':\n      return n * y;\n    case 'weeks':\n    case 'week':\n    case 'w':\n      return n * w;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'hrs':\n    case 'hr':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'mins':\n    case 'min':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 'secs':\n    case 'sec':\n    case 's':\n      return n * s;\n    case 'milliseconds':\n    case 'millisecond':\n    case 'msecs':\n    case 'msec':\n    case 'ms':\n      return n;\n    default:\n      return undefined;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtShort(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (msAbs >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (msAbs >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (msAbs >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtLong(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return plural(ms, msAbs, d, 'day');\n  }\n  if (msAbs >= h) {\n    return plural(ms, msAbs, h, 'hour');\n  }\n  if (msAbs >= m) {\n    return plural(ms, msAbs, m, 'minute');\n  }\n  if (msAbs >= s) {\n    return plural(ms, msAbs, s, 'second');\n  }\n  return ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, msAbs, n, name) {\n  var isPlural = msAbs >= n * 1.5;\n  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');\n}\n\n\n/***/ }),\n/* 65 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */\n;(function(root) {\n\n\t/** Detect free variables */\n\tvar freeExports =  true && exports &&\n\t\t!exports.nodeType && exports;\n\tvar freeModule =  true && module &&\n\t\t!module.nodeType && module;\n\tvar freeGlobal = typeof global == 'object' && global;\n\tif (\n\t\tfreeGlobal.global === freeGlobal ||\n\t\tfreeGlobal.window === freeGlobal ||\n\t\tfreeGlobal.self === freeGlobal\n\t) {\n\t\troot = freeGlobal;\n\t}\n\n\t/**\n\t * The `punycode` object.\n\t * @name punycode\n\t * @type Object\n\t */\n\tvar punycode,\n\n\t/** Highest positive signed 32-bit float value */\n\tmaxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1\n\n\t/** Bootstring parameters */\n\tbase = 36,\n\ttMin = 1,\n\ttMax = 26,\n\tskew = 38,\n\tdamp = 700,\n\tinitialBias = 72,\n\tinitialN = 128, // 0x80\n\tdelimiter = '-', // '\\x2D'\n\n\t/** Regular expressions */\n\tregexPunycode = /^xn--/,\n\tregexNonASCII = /[^\\x20-\\x7E]/, // unprintable ASCII chars + non-ASCII chars\n\tregexSeparators = /[\\x2E\\u3002\\uFF0E\\uFF61]/g, // RFC 3490 separators\n\n\t/** Error messages */\n\terrors = {\n\t\t'overflow': 'Overflow: input needs wider integers to process',\n\t\t'not-basic': 'Illegal input >= 0x80 (not a basic code point)',\n\t\t'invalid-input': 'Invalid input'\n\t},\n\n\t/** Convenience shortcuts */\n\tbaseMinusTMin = base - tMin,\n\tfloor = Math.floor,\n\tstringFromCharCode = String.fromCharCode,\n\n\t/** Temporary variable */\n\tkey;\n\n\t/*--------------------------------------------------------------------------*/\n\n\t/**\n\t * A generic error utility function.\n\t * @private\n\t * @param {String} type The error type.\n\t * @returns {Error} Throws a `RangeError` with the applicable error message.\n\t */\n\tfunction error(type) {\n\t\tthrow new RangeError(errors[type]);\n\t}\n\n\t/**\n\t * A generic `Array#map` utility function.\n\t * @private\n\t * @param {Array} array The array to iterate over.\n\t * @param {Function} callback The function that gets called for every array\n\t * item.\n\t * @returns {Array} A new array of values returned by the callback function.\n\t */\n\tfunction map(array, fn) {\n\t\tvar length = array.length;\n\t\tvar result = [];\n\t\twhile (length--) {\n\t\t\tresult[length] = fn(array[length]);\n\t\t}\n\t\treturn result;\n\t}\n\n\t/**\n\t * A simple `Array#map`-like wrapper to work with domain name strings or email\n\t * addresses.\n\t * @private\n\t * @param {String} domain The domain name or email address.\n\t * @param {Function} callback The function that gets called for every\n\t * character.\n\t * @returns {Array} A new string of characters returned by the callback\n\t * function.\n\t */\n\tfunction mapDomain(string, fn) {\n\t\tvar parts = string.split('@');\n\t\tvar result = '';\n\t\tif (parts.length > 1) {\n\t\t\t// In email addresses, only the domain name should be punycoded. Leave\n\t\t\t// the local part (i.e. everything up to `@`) intact.\n\t\t\tresult = parts[0] + '@';\n\t\t\tstring = parts[1];\n\t\t}\n\t\t// Avoid `split(regex)` for IE8 compatibility. See #17.\n\t\tstring = string.replace(regexSeparators, '\\x2E');\n\t\tvar labels = string.split('.');\n\t\tvar encoded = map(labels, fn).join('.');\n\t\treturn result + encoded;\n\t}\n\n\t/**\n\t * Creates an array containing the numeric code points of each Unicode\n\t * character in the string. While JavaScript uses UCS-2 internally,\n\t * this function will convert a pair of surrogate halves (each of which\n\t * UCS-2 exposes as separate characters) into a single code point,\n\t * matching UTF-16.\n\t * @see `punycode.ucs2.encode`\n\t * @see <https://mathiasbynens.be/notes/javascript-encoding>\n\t * @memberOf punycode.ucs2\n\t * @name decode\n\t * @param {String} string The Unicode input string (UCS-2).\n\t * @returns {Array} The new array of code points.\n\t */\n\tfunction ucs2decode(string) {\n\t\tvar output = [],\n\t\t    counter = 0,\n\t\t    length = string.length,\n\t\t    value,\n\t\t    extra;\n\t\twhile (counter < length) {\n\t\t\tvalue = string.charCodeAt(counter++);\n\t\t\tif (value >= 0xD800 && value <= 0xDBFF && counter < length) {\n\t\t\t\t// high surrogate, and there is a next character\n\t\t\t\textra = string.charCodeAt(counter++);\n\t\t\t\tif ((extra & 0xFC00) == 0xDC00) { // low surrogate\n\t\t\t\t\toutput.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);\n\t\t\t\t} else {\n\t\t\t\t\t// unmatched surrogate; only append this code unit, in case the next\n\t\t\t\t\t// code unit is the high surrogate of a surrogate pair\n\t\t\t\t\toutput.push(value);\n\t\t\t\t\tcounter--;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\toutput.push(value);\n\t\t\t}\n\t\t}\n\t\treturn output;\n\t}\n\n\t/**\n\t * Creates a string based on an array of numeric code points.\n\t * @see `punycode.ucs2.decode`\n\t * @memberOf punycode.ucs2\n\t * @name encode\n\t * @param {Array} codePoints The array of numeric code points.\n\t * @returns {String} The new Unicode string (UCS-2).\n\t */\n\tfunction ucs2encode(array) {\n\t\treturn map(array, function(value) {\n\t\t\tvar output = '';\n\t\t\tif (value > 0xFFFF) {\n\t\t\t\tvalue -= 0x10000;\n\t\t\t\toutput += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);\n\t\t\t\tvalue = 0xDC00 | value & 0x3FF;\n\t\t\t}\n\t\t\toutput += stringFromCharCode(value);\n\t\t\treturn output;\n\t\t}).join('');\n\t}\n\n\t/**\n\t * Converts a basic code point into a digit/integer.\n\t * @see `digitToBasic()`\n\t * @private\n\t * @param {Number} codePoint The basic numeric code point value.\n\t * @returns {Number} The numeric value of a basic code point (for use in\n\t * representing integers) in the range `0` to `base - 1`, or `base` if\n\t * the code point does not represent a value.\n\t */\n\tfunction basicToDigit(codePoint) {\n\t\tif (codePoint - 48 < 10) {\n\t\t\treturn codePoint - 22;\n\t\t}\n\t\tif (codePoint - 65 < 26) {\n\t\t\treturn codePoint - 65;\n\t\t}\n\t\tif (codePoint - 97 < 26) {\n\t\t\treturn codePoint - 97;\n\t\t}\n\t\treturn base;\n\t}\n\n\t/**\n\t * Converts a digit/integer into a basic code point.\n\t * @see `basicToDigit()`\n\t * @private\n\t * @param {Number} digit The numeric value of a basic code point.\n\t * @returns {Number} The basic code point whose value (when used for\n\t * representing integers) is `digit`, which needs to be in the range\n\t * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is\n\t * used; else, the lowercase form is used. The behavior is undefined\n\t * if `flag` is non-zero and `digit` has no uppercase form.\n\t */\n\tfunction digitToBasic(digit, flag) {\n\t\t//  0..25 map to ASCII a..z or A..Z\n\t\t// 26..35 map to ASCII 0..9\n\t\treturn digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);\n\t}\n\n\t/**\n\t * Bias adaptation function as per section 3.4 of RFC 3492.\n\t * https://tools.ietf.org/html/rfc3492#section-3.4\n\t * @private\n\t */\n\tfunction adapt(delta, numPoints, firstTime) {\n\t\tvar k = 0;\n\t\tdelta = firstTime ? floor(delta / damp) : delta >> 1;\n\t\tdelta += floor(delta / numPoints);\n\t\tfor (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {\n\t\t\tdelta = floor(delta / baseMinusTMin);\n\t\t}\n\t\treturn floor(k + (baseMinusTMin + 1) * delta / (delta + skew));\n\t}\n\n\t/**\n\t * Converts a Punycode string of ASCII-only symbols to a string of Unicode\n\t * symbols.\n\t * @memberOf punycode\n\t * @param {String} input The Punycode string of ASCII-only symbols.\n\t * @returns {String} The resulting string of Unicode symbols.\n\t */\n\tfunction decode(input) {\n\t\t// Don't use UCS-2\n\t\tvar output = [],\n\t\t    inputLength = input.length,\n\t\t    out,\n\t\t    i = 0,\n\t\t    n = initialN,\n\t\t    bias = initialBias,\n\t\t    basic,\n\t\t    j,\n\t\t    index,\n\t\t    oldi,\n\t\t    w,\n\t\t    k,\n\t\t    digit,\n\t\t    t,\n\t\t    /** Cached calculation results */\n\t\t    baseMinusT;\n\n\t\t// Handle the basic code points: let `basic` be the number of input code\n\t\t// points before the last delimiter, or `0` if there is none, then copy\n\t\t// the first basic code points to the output.\n\n\t\tbasic = input.lastIndexOf(delimiter);\n\t\tif (basic < 0) {\n\t\t\tbasic = 0;\n\t\t}\n\n\t\tfor (j = 0; j < basic; ++j) {\n\t\t\t// if it's not a basic code point\n\t\t\tif (input.charCodeAt(j) >= 0x80) {\n\t\t\t\terror('not-basic');\n\t\t\t}\n\t\t\toutput.push(input.charCodeAt(j));\n\t\t}\n\n\t\t// Main decoding loop: start just after the last delimiter if any basic code\n\t\t// points were copied; start at the beginning otherwise.\n\n\t\tfor (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {\n\n\t\t\t// `index` is the index of the next character to be consumed.\n\t\t\t// Decode a generalized variable-length integer into `delta`,\n\t\t\t// which gets added to `i`. The overflow checking is easier\n\t\t\t// if we increase `i` as we go, then subtract off its starting\n\t\t\t// value at the end to obtain `delta`.\n\t\t\tfor (oldi = i, w = 1, k = base; /* no condition */; k += base) {\n\n\t\t\t\tif (index >= inputLength) {\n\t\t\t\t\terror('invalid-input');\n\t\t\t\t}\n\n\t\t\t\tdigit = basicToDigit(input.charCodeAt(index++));\n\n\t\t\t\tif (digit >= base || digit > floor((maxInt - i) / w)) {\n\t\t\t\t\terror('overflow');\n\t\t\t\t}\n\n\t\t\t\ti += digit * w;\n\t\t\t\tt = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n\n\t\t\t\tif (digit < t) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\tbaseMinusT = base - t;\n\t\t\t\tif (w > floor(maxInt / baseMinusT)) {\n\t\t\t\t\terror('overflow');\n\t\t\t\t}\n\n\t\t\t\tw *= baseMinusT;\n\n\t\t\t}\n\n\t\t\tout = output.length + 1;\n\t\t\tbias = adapt(i - oldi, out, oldi == 0);\n\n\t\t\t// `i` was supposed to wrap around from `out` to `0`,\n\t\t\t// incrementing `n` each time, so we'll fix that now:\n\t\t\tif (floor(i / out) > maxInt - n) {\n\t\t\t\terror('overflow');\n\t\t\t}\n\n\t\t\tn += floor(i / out);\n\t\t\ti %= out;\n\n\t\t\t// Insert `n` at position `i` of the output\n\t\t\toutput.splice(i++, 0, n);\n\n\t\t}\n\n\t\treturn ucs2encode(output);\n\t}\n\n\t/**\n\t * Converts a string of Unicode symbols (e.g. a domain name label) to a\n\t * Punycode string of ASCII-only symbols.\n\t * @memberOf punycode\n\t * @param {String} input The string of Unicode symbols.\n\t * @returns {String} The resulting Punycode string of ASCII-only symbols.\n\t */\n\tfunction encode(input) {\n\t\tvar n,\n\t\t    delta,\n\t\t    handledCPCount,\n\t\t    basicLength,\n\t\t    bias,\n\t\t    j,\n\t\t    m,\n\t\t    q,\n\t\t    k,\n\t\t    t,\n\t\t    currentValue,\n\t\t    output = [],\n\t\t    /** `inputLength` will hold the number of code points in `input`. */\n\t\t    inputLength,\n\t\t    /** Cached calculation results */\n\t\t    handledCPCountPlusOne,\n\t\t    baseMinusT,\n\t\t    qMinusT;\n\n\t\t// Convert the input in UCS-2 to Unicode\n\t\tinput = ucs2decode(input);\n\n\t\t// Cache the length\n\t\tinputLength = input.length;\n\n\t\t// Initialize the state\n\t\tn = initialN;\n\t\tdelta = 0;\n\t\tbias = initialBias;\n\n\t\t// Handle the basic code points\n\t\tfor (j = 0; j < inputLength; ++j) {\n\t\t\tcurrentValue = input[j];\n\t\t\tif (currentValue < 0x80) {\n\t\t\t\toutput.push(stringFromCharCode(currentValue));\n\t\t\t}\n\t\t}\n\n\t\thandledCPCount = basicLength = output.length;\n\n\t\t// `handledCPCount` is the number of code points that have been handled;\n\t\t// `basicLength` is the number of basic code points.\n\n\t\t// Finish the basic string - if it is not empty - with a delimiter\n\t\tif (basicLength) {\n\t\t\toutput.push(delimiter);\n\t\t}\n\n\t\t// Main encoding loop:\n\t\twhile (handledCPCount < inputLength) {\n\n\t\t\t// All non-basic code points < n have been handled already. Find the next\n\t\t\t// larger one:\n\t\t\tfor (m = maxInt, j = 0; j < inputLength; ++j) {\n\t\t\t\tcurrentValue = input[j];\n\t\t\t\tif (currentValue >= n && currentValue < m) {\n\t\t\t\t\tm = currentValue;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,\n\t\t\t// but guard against overflow\n\t\t\thandledCPCountPlusOne = handledCPCount + 1;\n\t\t\tif (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {\n\t\t\t\terror('overflow');\n\t\t\t}\n\n\t\t\tdelta += (m - n) * handledCPCountPlusOne;\n\t\t\tn = m;\n\n\t\t\tfor (j = 0; j < inputLength; ++j) {\n\t\t\t\tcurrentValue = input[j];\n\n\t\t\t\tif (currentValue < n && ++delta > maxInt) {\n\t\t\t\t\terror('overflow');\n\t\t\t\t}\n\n\t\t\t\tif (currentValue == n) {\n\t\t\t\t\t// Represent delta as a generalized variable-length integer\n\t\t\t\t\tfor (q = delta, k = base; /* no condition */; k += base) {\n\t\t\t\t\t\tt = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n\t\t\t\t\t\tif (q < t) {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tqMinusT = q - t;\n\t\t\t\t\t\tbaseMinusT = base - t;\n\t\t\t\t\t\toutput.push(\n\t\t\t\t\t\t\tstringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))\n\t\t\t\t\t\t);\n\t\t\t\t\t\tq = floor(qMinusT / baseMinusT);\n\t\t\t\t\t}\n\n\t\t\t\t\toutput.push(stringFromCharCode(digitToBasic(q, 0)));\n\t\t\t\t\tbias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);\n\t\t\t\t\tdelta = 0;\n\t\t\t\t\t++handledCPCount;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t++delta;\n\t\t\t++n;\n\n\t\t}\n\t\treturn output.join('');\n\t}\n\n\t/**\n\t * Converts a Punycode string representing a domain name or an email address\n\t * to Unicode. Only the Punycoded parts of the input will be converted, i.e.\n\t * it doesn't matter if you call it on a string that has already been\n\t * converted to Unicode.\n\t * @memberOf punycode\n\t * @param {String} input The Punycoded domain name or email address to\n\t * convert to Unicode.\n\t * @returns {String} The Unicode representation of the given Punycode\n\t * string.\n\t */\n\tfunction toUnicode(input) {\n\t\treturn mapDomain(input, function(string) {\n\t\t\treturn regexPunycode.test(string)\n\t\t\t\t? decode(string.slice(4).toLowerCase())\n\t\t\t\t: string;\n\t\t});\n\t}\n\n\t/**\n\t * Converts a Unicode string representing a domain name or an email address to\n\t * Punycode. Only the non-ASCII parts of the domain name will be converted,\n\t * i.e. it doesn't matter if you call it with a domain that's already in\n\t * ASCII.\n\t * @memberOf punycode\n\t * @param {String} input The domain name or email address to convert, as a\n\t * Unicode string.\n\t * @returns {String} The Punycode representation of the given domain name or\n\t * email address.\n\t */\n\tfunction toASCII(input) {\n\t\treturn mapDomain(input, function(string) {\n\t\t\treturn regexNonASCII.test(string)\n\t\t\t\t? 'xn--' + encode(string)\n\t\t\t\t: string;\n\t\t});\n\t}\n\n\t/*--------------------------------------------------------------------------*/\n\n\t/** Define the public API */\n\tpunycode = {\n\t\t/**\n\t\t * A string representing the current Punycode.js version number.\n\t\t * @memberOf punycode\n\t\t * @type String\n\t\t */\n\t\t'version': '1.4.1',\n\t\t/**\n\t\t * An object of methods to convert from JavaScript's internal character\n\t\t * representation (UCS-2) to Unicode code points, and back.\n\t\t * @see <https://mathiasbynens.be/notes/javascript-encoding>\n\t\t * @memberOf punycode\n\t\t * @type Object\n\t\t */\n\t\t'ucs2': {\n\t\t\t'decode': ucs2decode,\n\t\t\t'encode': ucs2encode\n\t\t},\n\t\t'decode': decode,\n\t\t'encode': encode,\n\t\t'toASCII': toASCII,\n\t\t'toUnicode': toUnicode\n\t};\n\n\t/** Expose `punycode` */\n\t// Some AMD build optimizers, like r.js, check for specific condition patterns\n\t// like the following:\n\tif (\n\t\ttrue\n\t) {\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n\t\t\treturn punycode;\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n\n}(this));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)(module), __webpack_require__(11)))\n\n/***/ }),\n/* 66 */\n/***/ (function(module, exports) {\n\nmodule.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n/***/ }),\n/* 67 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nmodule.exports = {\n  isString: function(arg) {\n    return typeof(arg) === 'string';\n  },\n  isObject: function(arg) {\n    return typeof(arg) === 'object' && arg !== null;\n  },\n  isNull: function(arg) {\n    return arg === null;\n  },\n  isNullOrUndefined: function(arg) {\n    return arg == null;\n  }\n};\n\n\n/***/ }),\n/* 68 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nexports.decode = exports.parse = __webpack_require__(69);\nexports.encode = exports.stringify = __webpack_require__(70);\n\n\n/***/ }),\n/* 69 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\n\n/***/ }),\n/* 70 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return map(objectKeys(obj), function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (isArray(obj[k])) {\n        return map(obj[k], function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nfunction map (xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n  return res;\n};\n\n\n/***/ }),\n/* 71 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js\nvar toConsumableArray = __webpack_require__(27);\nvar toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toArray.js\nvar toArray = __webpack_require__(28);\nvar toArray_default = /*#__PURE__*/__webpack_require__.n(toArray);\n\n// EXTERNAL MODULE: ./node_modules/txml/tXml.js\nvar tXml = __webpack_require__(29);\nvar tXml_default = /*#__PURE__*/__webpack_require__.n(tXml);\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/globals.js\nconst fieldTagNames = {\n  // TIFF Baseline\n  0x013B: 'Artist',\n  0x0102: 'BitsPerSample',\n  0x0109: 'CellLength',\n  0x0108: 'CellWidth',\n  0x0140: 'ColorMap',\n  0x0103: 'Compression',\n  0x8298: 'Copyright',\n  0x0132: 'DateTime',\n  0x0152: 'ExtraSamples',\n  0x010A: 'FillOrder',\n  0x0121: 'FreeByteCounts',\n  0x0120: 'FreeOffsets',\n  0x0123: 'GrayResponseCurve',\n  0x0122: 'GrayResponseUnit',\n  0x013C: 'HostComputer',\n  0x010E: 'ImageDescription',\n  0x0101: 'ImageLength',\n  0x0100: 'ImageWidth',\n  0x010F: 'Make',\n  0x0119: 'MaxSampleValue',\n  0x0118: 'MinSampleValue',\n  0x0110: 'Model',\n  0x00FE: 'NewSubfileType',\n  0x0112: 'Orientation',\n  0x0106: 'PhotometricInterpretation',\n  0x011C: 'PlanarConfiguration',\n  0x0128: 'ResolutionUnit',\n  0x0116: 'RowsPerStrip',\n  0x0115: 'SamplesPerPixel',\n  0x0131: 'Software',\n  0x0117: 'StripByteCounts',\n  0x0111: 'StripOffsets',\n  0x00FF: 'SubfileType',\n  0x0107: 'Threshholding',\n  0x011A: 'XResolution',\n  0x011B: 'YResolution',\n\n  // TIFF Extended\n  0x0146: 'BadFaxLines',\n  0x0147: 'CleanFaxData',\n  0x0157: 'ClipPath',\n  0x0148: 'ConsecutiveBadFaxLines',\n  0x01B1: 'Decode',\n  0x01B2: 'DefaultImageColor',\n  0x010D: 'DocumentName',\n  0x0150: 'DotRange',\n  0x0141: 'HalftoneHints',\n  0x015A: 'Indexed',\n  0x015B: 'JPEGTables',\n  0x011D: 'PageName',\n  0x0129: 'PageNumber',\n  0x013D: 'Predictor',\n  0x013F: 'PrimaryChromaticities',\n  0x0214: 'ReferenceBlackWhite',\n  0x0153: 'SampleFormat',\n  0x0154: 'SMinSampleValue',\n  0x0155: 'SMaxSampleValue',\n  0x022F: 'StripRowCounts',\n  0x014A: 'SubIFDs',\n  0x0124: 'T4Options',\n  0x0125: 'T6Options',\n  0x0145: 'TileByteCounts',\n  0x0143: 'TileLength',\n  0x0144: 'TileOffsets',\n  0x0142: 'TileWidth',\n  0x012D: 'TransferFunction',\n  0x013E: 'WhitePoint',\n  0x0158: 'XClipPathUnits',\n  0x011E: 'XPosition',\n  0x0211: 'YCbCrCoefficients',\n  0x0213: 'YCbCrPositioning',\n  0x0212: 'YCbCrSubSampling',\n  0x0159: 'YClipPathUnits',\n  0x011F: 'YPosition',\n\n  // EXIF\n  0x9202: 'ApertureValue',\n  0xA001: 'ColorSpace',\n  0x9004: 'DateTimeDigitized',\n  0x9003: 'DateTimeOriginal',\n  0x8769: 'Exif IFD',\n  0x9000: 'ExifVersion',\n  0x829A: 'ExposureTime',\n  0xA300: 'FileSource',\n  0x9209: 'Flash',\n  0xA000: 'FlashpixVersion',\n  0x829D: 'FNumber',\n  0xA420: 'ImageUniqueID',\n  0x9208: 'LightSource',\n  0x927C: 'MakerNote',\n  0x9201: 'ShutterSpeedValue',\n  0x9286: 'UserComment',\n\n  // IPTC\n  0x83BB: 'IPTC',\n\n  // ICC\n  0x8773: 'ICC Profile',\n\n  // XMP\n  0x02BC: 'XMP',\n\n  // GDAL\n  0xA480: 'GDAL_METADATA',\n  0xA481: 'GDAL_NODATA',\n\n  // Photoshop\n  0x8649: 'Photoshop',\n\n  // GeoTiff\n  0x830E: 'ModelPixelScale',\n  0x8482: 'ModelTiepoint',\n  0x85D8: 'ModelTransformation',\n  0x87AF: 'GeoKeyDirectory',\n  0x87B0: 'GeoDoubleParams',\n  0x87B1: 'GeoAsciiParams',\n};\n\nconst fieldTags = {};\nfor (const key in fieldTagNames) {\n  if (fieldTagNames.hasOwnProperty(key)) {\n    fieldTags[fieldTagNames[key]] = parseInt(key, 10);\n  }\n}\n\nconst fieldTagTypes = {\n  256: 'SHORT',\n  257: 'SHORT',\n  258: 'SHORT',\n  259: 'SHORT',\n  262: 'SHORT',\n  273: 'LONG',\n  274: 'SHORT',\n  277: 'SHORT',\n  278: 'LONG',\n  279: 'LONG',\n  282: 'RATIONAL',\n  283: 'RATIONAL',\n  284: 'SHORT',\n  286: 'SHORT',\n  287: 'RATIONAL',\n  296: 'SHORT',\n  305: 'ASCII',\n  306: 'ASCII',\n  338: 'SHORT',\n  339: 'SHORT',\n  513: 'LONG',\n  514: 'LONG',\n  1024: 'SHORT',\n  1025: 'SHORT',\n  2048: 'SHORT',\n  2049: 'ASCII',\n  33550: 'DOUBLE',\n  33922: 'DOUBLE',\n  34665: 'LONG',\n  34735: 'SHORT',\n  34737: 'ASCII',\n  42113: 'ASCII',\n};\n\nconst arrayFields = [\n  fieldTags.BitsPerSample,\n  fieldTags.ExtraSamples,\n  fieldTags.SampleFormat,\n  fieldTags.StripByteCounts,\n  fieldTags.StripOffsets,\n  fieldTags.StripRowCounts,\n  fieldTags.TileByteCounts,\n  fieldTags.TileOffsets,\n];\n\nconst fieldTypeNames = {\n  0x0001: 'BYTE',\n  0x0002: 'ASCII',\n  0x0003: 'SHORT',\n  0x0004: 'LONG',\n  0x0005: 'RATIONAL',\n  0x0006: 'SBYTE',\n  0x0007: 'UNDEFINED',\n  0x0008: 'SSHORT',\n  0x0009: 'SLONG',\n  0x000A: 'SRATIONAL',\n  0x000B: 'FLOAT',\n  0x000C: 'DOUBLE',\n  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html\n  0x000D: 'IFD',\n  // introduced by BigTIFF\n  0x0010: 'LONG8',\n  0x0011: 'SLONG8',\n  0x0012: 'IFD8',\n};\n\nconst fieldTypes = {};\nfor (const key in fieldTypeNames) {\n  if (fieldTypeNames.hasOwnProperty(key)) {\n    fieldTypes[fieldTypeNames[key]] = parseInt(key, 10);\n  }\n}\n\nconst photometricInterpretations = {\n  WhiteIsZero: 0,\n  BlackIsZero: 1,\n  RGB: 2,\n  Palette: 3,\n  TransparencyMask: 4,\n  CMYK: 5,\n  YCbCr: 6,\n\n  CIELab: 8,\n  ICCLab: 9,\n};\n\nconst ExtraSamplesValues = {\n  Unspecified: 0,\n  Assocalpha: 1,\n  Unassalpha: 2,\n};\n\n\nconst geoKeyNames = {\n  1024: 'GTModelTypeGeoKey',\n  1025: 'GTRasterTypeGeoKey',\n  1026: 'GTCitationGeoKey',\n  2048: 'GeographicTypeGeoKey',\n  2049: 'GeogCitationGeoKey',\n  2050: 'GeogGeodeticDatumGeoKey',\n  2051: 'GeogPrimeMeridianGeoKey',\n  2052: 'GeogLinearUnitsGeoKey',\n  2053: 'GeogLinearUnitSizeGeoKey',\n  2054: 'GeogAngularUnitsGeoKey',\n  2055: 'GeogAngularUnitSizeGeoKey',\n  2056: 'GeogEllipsoidGeoKey',\n  2057: 'GeogSemiMajorAxisGeoKey',\n  2058: 'GeogSemiMinorAxisGeoKey',\n  2059: 'GeogInvFlatteningGeoKey',\n  2060: 'GeogAzimuthUnitsGeoKey',\n  2061: 'GeogPrimeMeridianLongGeoKey',\n  2062: 'GeogTOWGS84GeoKey',\n  3072: 'ProjectedCSTypeGeoKey',\n  3073: 'PCSCitationGeoKey',\n  3074: 'ProjectionGeoKey',\n  3075: 'ProjCoordTransGeoKey',\n  3076: 'ProjLinearUnitsGeoKey',\n  3077: 'ProjLinearUnitSizeGeoKey',\n  3078: 'ProjStdParallel1GeoKey',\n  3079: 'ProjStdParallel2GeoKey',\n  3080: 'ProjNatOriginLongGeoKey',\n  3081: 'ProjNatOriginLatGeoKey',\n  3082: 'ProjFalseEastingGeoKey',\n  3083: 'ProjFalseNorthingGeoKey',\n  3084: 'ProjFalseOriginLongGeoKey',\n  3085: 'ProjFalseOriginLatGeoKey',\n  3086: 'ProjFalseOriginEastingGeoKey',\n  3087: 'ProjFalseOriginNorthingGeoKey',\n  3088: 'ProjCenterLongGeoKey',\n  3089: 'ProjCenterLatGeoKey',\n  3090: 'ProjCenterEastingGeoKey',\n  3091: 'ProjCenterNorthingGeoKey',\n  3092: 'ProjScaleAtNatOriginGeoKey',\n  3093: 'ProjScaleAtCenterGeoKey',\n  3094: 'ProjAzimuthAngleGeoKey',\n  3095: 'ProjStraightVertPoleLongGeoKey',\n  3096: 'ProjRectifiedGridAngleGeoKey',\n  4096: 'VerticalCSTypeGeoKey',\n  4097: 'VerticalCitationGeoKey',\n  4098: 'VerticalDatumGeoKey',\n  4099: 'VerticalUnitsGeoKey',\n};\n\nconst globals_geoKeys = {};\nfor (const key in geoKeyNames) {\n  if (geoKeyNames.hasOwnProperty(key)) {\n    globals_geoKeys[geoKeyNames[key]] = parseInt(key, 10);\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/rgb.js\nfunction fromWhiteIsZero(raster, max) {\n  const { width, height } = raster;\n  const rgbRaster = new Uint8Array(width * height * 3);\n  let value;\n  for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {\n    value = 256 - (raster[i] / max * 256);\n    rgbRaster[j] = value;\n    rgbRaster[j + 1] = value;\n    rgbRaster[j + 2] = value;\n  }\n  return rgbRaster;\n}\n\nfunction fromBlackIsZero(raster, max) {\n  const { width, height } = raster;\n  const rgbRaster = new Uint8Array(width * height * 3);\n  let value;\n  for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {\n    value = raster[i] / max * 256;\n    rgbRaster[j] = value;\n    rgbRaster[j + 1] = value;\n    rgbRaster[j + 2] = value;\n  }\n  return rgbRaster;\n}\n\nfunction fromPalette(raster, colorMap) {\n  const { width, height } = raster;\n  const rgbRaster = new Uint8Array(width * height * 3);\n  const greenOffset = colorMap.length / 3;\n  const blueOffset = colorMap.length / 3 * 2;\n  for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {\n    const mapIndex = raster[i];\n    rgbRaster[j] = colorMap[mapIndex] / 65536 * 256;\n    rgbRaster[j + 1] = colorMap[mapIndex + greenOffset] / 65536 * 256;\n    rgbRaster[j + 2] = colorMap[mapIndex + blueOffset] / 65536 * 256;\n  }\n  return rgbRaster;\n}\n\nfunction fromCMYK(cmykRaster) {\n  const { width, height } = cmykRaster;\n  const rgbRaster = new Uint8Array(width * height * 3);\n  for (let i = 0, j = 0; i < cmykRaster.length; i += 4, j += 3) {\n    const c = cmykRaster[i];\n    const m = cmykRaster[i + 1];\n    const y = cmykRaster[i + 2];\n    const k = cmykRaster[i + 3];\n\n    rgbRaster[j] = 255 * ((255 - c) / 256) * ((255 - k) / 256);\n    rgbRaster[j + 1] = 255 * ((255 - m) / 256) * ((255 - k) / 256);\n    rgbRaster[j + 2] = 255 * ((255 - y) / 256) * ((255 - k) / 256);\n  }\n  return rgbRaster;\n}\n\nfunction fromYCbCr(yCbCrRaster) {\n  const { width, height } = yCbCrRaster;\n  const rgbRaster = new Uint8ClampedArray(width * height * 3);\n  for (let i = 0, j = 0; i < yCbCrRaster.length; i += 3, j += 3) {\n    const y = yCbCrRaster[i];\n    const cb = yCbCrRaster[i + 1];\n    const cr = yCbCrRaster[i + 2];\n\n    rgbRaster[j] = (y + (1.40200 * (cr - 0x80)));\n    rgbRaster[j + 1] = (y - (0.34414 * (cb - 0x80)) - (0.71414 * (cr - 0x80)));\n    rgbRaster[j + 2] = (y + (1.77200 * (cb - 0x80)));\n  }\n  return rgbRaster;\n}\n\nconst Xn = 0.95047;\nconst Yn = 1.00000;\nconst Zn = 1.08883;\n\n// from https://github.com/antimatter15/rgb-lab/blob/master/color.js\n\nfunction fromCIELab(cieLabRaster) {\n  const { width, height } = cieLabRaster;\n  const rgbRaster = new Uint8Array(width * height * 3);\n\n  for (let i = 0, j = 0; i < cieLabRaster.length; i += 3, j += 3) {\n    const L = cieLabRaster[i + 0];\n    const a_ = cieLabRaster[i + 1] << 24 >> 24; // conversion from uint8 to int8\n    const b_ = cieLabRaster[i + 2] << 24 >> 24; // same\n\n    let y = (L + 16) / 116;\n    let x = (a_ / 500) + y;\n    let z = y - (b_ / 200);\n    let r;\n    let g;\n    let b;\n\n    x = Xn * ((x * x * x > 0.008856) ? x * x * x : (x - (16 / 116)) / 7.787);\n    y = Yn * ((y * y * y > 0.008856) ? y * y * y : (y - (16 / 116)) / 7.787);\n    z = Zn * ((z * z * z > 0.008856) ? z * z * z : (z - (16 / 116)) / 7.787);\n\n    r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);\n    g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);\n    b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);\n\n    r = (r > 0.0031308) ? ((1.055 * (r ** (1 / 2.4))) - 0.055) : 12.92 * r;\n    g = (g > 0.0031308) ? ((1.055 * (g ** (1 / 2.4))) - 0.055) : 12.92 * g;\n    b = (b > 0.0031308) ? ((1.055 * (b ** (1 / 2.4))) - 0.055) : 12.92 * b;\n\n    rgbRaster[j] = Math.max(0, Math.min(1, r)) * 255;\n    rgbRaster[j + 1] = Math.max(0, Math.min(1, g)) * 255;\n    rgbRaster[j + 2] = Math.max(0, Math.min(1, b)) * 255;\n  }\n  return rgbRaster;\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/predictor.js\n\nfunction decodeRowAcc(row, stride) {\n  let length = row.length - stride;\n  let offset = 0;\n  do {\n    for (let i = stride; i > 0; i--) {\n      row[offset + stride] += row[offset];\n      offset++;\n    }\n\n    length -= stride;\n  } while (length > 0);\n}\n\nfunction decodeRowFloatingPoint(row, stride, bytesPerSample) {\n  let index = 0;\n  let count = row.length;\n  const wc = count / bytesPerSample;\n\n  while (count > stride) {\n    for (let i = stride; i > 0; --i) {\n      row[index + stride] += row[index];\n      ++index;\n    }\n    count -= stride;\n  }\n\n  const copy = row.slice();\n  for (let i = 0; i < wc; ++i) {\n    for (let b = 0; b < bytesPerSample; ++b) {\n      row[(bytesPerSample * i) + b] = copy[((bytesPerSample - b - 1) * wc) + i];\n    }\n  }\n}\n\nfunction applyPredictor(block, predictor, width, height, bitsPerSample,\n  planarConfiguration) {\n  if (!predictor || predictor === 1) {\n    return block;\n  }\n\n  for (let i = 0; i < bitsPerSample.length; ++i) {\n    if (bitsPerSample[i] % 8 !== 0) {\n      throw new Error('When decoding with predictor, only multiple of 8 bits are supported.');\n    }\n    if (bitsPerSample[i] !== bitsPerSample[0]) {\n      throw new Error('When decoding with predictor, all samples must have the same size.');\n    }\n  }\n\n  const bytesPerSample = bitsPerSample[0] / 8;\n  const stride = planarConfiguration === 2 ? 1 : bitsPerSample.length;\n\n  for (let i = 0; i < height; ++i) {\n    // Last strip will be truncated if height % stripHeight != 0\n    if (i * stride * width * bytesPerSample >= block.byteLength) {\n      break;\n    }\n    let row;\n    if (predictor === 2) { // horizontal prediction\n      switch (bitsPerSample[0]) {\n        case 8:\n          row = new Uint8Array(\n            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,\n          );\n          break;\n        case 16:\n          row = new Uint16Array(\n            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 2,\n          );\n          break;\n        case 32:\n          row = new Uint32Array(\n            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 4,\n          );\n          break;\n        default:\n          throw new Error(`Predictor 2 not allowed with ${bitsPerSample[0]} bits per sample.`);\n      }\n      decodeRowAcc(row, stride, bytesPerSample);\n    } else if (predictor === 3) { // horizontal floating point\n      row = new Uint8Array(\n        block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,\n      );\n      decodeRowFloatingPoint(row, stride, bytesPerSample);\n    }\n  }\n  return block;\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/basedecoder.js\n\n\nclass basedecoder_BaseDecoder {\n  decode(fileDirectory, buffer) {\n    const decoded = this.decodeBlock(buffer);\n    const predictor = fileDirectory.Predictor || 1;\n    if (predictor !== 1) {\n      const isTiled = !fileDirectory.StripOffsets;\n      const tileWidth = isTiled ? fileDirectory.TileWidth : fileDirectory.ImageWidth;\n      const tileHeight = isTiled ? fileDirectory.TileLength : (\n        fileDirectory.RowsPerStrip || fileDirectory.ImageLength\n      );\n      return applyPredictor(\n        decoded, predictor, tileWidth, tileHeight, fileDirectory.BitsPerSample,\n        fileDirectory.PlanarConfiguration,\n      );\n    }\n    return decoded;\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/raw.js\n\n\n\nclass raw_RawDecoder extends basedecoder_BaseDecoder {\n  decodeBlock(buffer) {\n    return buffer;\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/lzw.js\n\n\n\nconst MIN_BITS = 9;\nconst CLEAR_CODE = 256; // clear code\nconst EOI_CODE = 257; // end of information\nconst MAX_BYTELENGTH = 12;\n\nfunction getByte(array, position, length) {\n  const d = position % 8;\n  const a = Math.floor(position / 8);\n  const de = 8 - d;\n  const ef = (position + length) - ((a + 1) * 8);\n  let fg = (8 * (a + 2)) - (position + length);\n  const dg = ((a + 2) * 8) - position;\n  fg = Math.max(0, fg);\n  if (a >= array.length) {\n    console.warn('ran off the end of the buffer before finding EOI_CODE (end on input code)');\n    return EOI_CODE;\n  }\n  let chunk1 = array[a] & ((2 ** (8 - d)) - 1);\n  chunk1 <<= (length - de);\n  let chunks = chunk1;\n  if (a + 1 < array.length) {\n    let chunk2 = array[a + 1] >>> fg;\n    chunk2 <<= Math.max(0, (length - dg));\n    chunks += chunk2;\n  }\n  if (ef > 8 && a + 2 < array.length) {\n    const hi = ((a + 3) * 8) - (position + length);\n    const chunk3 = array[a + 2] >>> hi;\n    chunks += chunk3;\n  }\n  return chunks;\n}\n\nfunction appendReversed(dest, source) {\n  for (let i = source.length - 1; i >= 0; i--) {\n    dest.push(source[i]);\n  }\n  return dest;\n}\n\nfunction decompress(input) {\n  const dictionaryIndex = new Uint16Array(4093);\n  const dictionaryChar = new Uint8Array(4093);\n  for (let i = 0; i <= 257; i++) {\n    dictionaryIndex[i] = 4096;\n    dictionaryChar[i] = i;\n  }\n  let dictionaryLength = 258;\n  let byteLength = MIN_BITS;\n  let position = 0;\n\n  function initDictionary() {\n    dictionaryLength = 258;\n    byteLength = MIN_BITS;\n  }\n  function getNext(array) {\n    const byte = getByte(array, position, byteLength);\n    position += byteLength;\n    return byte;\n  }\n  function addToDictionary(i, c) {\n    dictionaryChar[dictionaryLength] = c;\n    dictionaryIndex[dictionaryLength] = i;\n    dictionaryLength++;\n    return dictionaryLength - 1;\n  }\n  function getDictionaryReversed(n) {\n    const rev = [];\n    for (let i = n; i !== 4096; i = dictionaryIndex[i]) {\n      rev.push(dictionaryChar[i]);\n    }\n    return rev;\n  }\n\n  const result = [];\n  initDictionary();\n  const array = new Uint8Array(input);\n  let code = getNext(array);\n  let oldCode;\n  while (code !== EOI_CODE) {\n    if (code === CLEAR_CODE) {\n      initDictionary();\n      code = getNext(array);\n      while (code === CLEAR_CODE) {\n        code = getNext(array);\n      }\n\n      if (code === EOI_CODE) {\n        break;\n      } else if (code > CLEAR_CODE) {\n        throw new Error(`corrupted code at scanline ${code}`);\n      } else {\n        const val = getDictionaryReversed(code);\n        appendReversed(result, val);\n        oldCode = code;\n      }\n    } else if (code < dictionaryLength) {\n      const val = getDictionaryReversed(code);\n      appendReversed(result, val);\n      addToDictionary(oldCode, val[val.length - 1]);\n      oldCode = code;\n    } else {\n      const oldVal = getDictionaryReversed(oldCode);\n      if (!oldVal) {\n        throw new Error(`Bogus entry. Not in dictionary, ${oldCode} / ${dictionaryLength}, position: ${position}`);\n      }\n      appendReversed(result, oldVal);\n      result.push(oldVal[oldVal.length - 1]);\n      addToDictionary(oldCode, oldVal[oldVal.length - 1]);\n      oldCode = code;\n    }\n\n    if (dictionaryLength + 1 >= (2 ** byteLength)) {\n      if (byteLength === MAX_BYTELENGTH) {\n        oldCode = undefined;\n      } else {\n        byteLength++;\n      }\n    }\n    code = getNext(array);\n  }\n  return new Uint8Array(result);\n}\n\nclass lzw_LZWDecoder extends basedecoder_BaseDecoder {\n  decodeBlock(buffer) {\n    return decompress(buffer, false).buffer;\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/jpeg.js\n\n\n/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /\n/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */\n/*\n   Copyright 2011 notmasteryet\n   Licensed under the Apache License, Version 2.0 (the \"License\");\n   you may not use this file except in compliance with the License.\n   You may obtain a copy of the License at\n       http://www.apache.org/licenses/LICENSE-2.0\n   Unless required by applicable law or agreed to in writing, software\n   distributed under the License is distributed on an \"AS IS\" BASIS,\n   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n   See the License for the specific language governing permissions and\n   limitations under the License.\n*/\n\n// - The JPEG specification can be found in the ITU CCITT Recommendation T.81\n//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)\n// - The JFIF specification can be found in the JPEG File Interchange Format\n//   (www.w3.org/Graphics/JPEG/jfif3.pdf)\n// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters\n//   in PostScript Level 2, Technical Note #5116\n//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)\n\n\nconst dctZigZag = new Int32Array([\n  0,\n  1, 8,\n  16, 9, 2,\n  3, 10, 17, 24,\n  32, 25, 18, 11, 4,\n  5, 12, 19, 26, 33, 40,\n  48, 41, 34, 27, 20, 13, 6,\n  7, 14, 21, 28, 35, 42, 49, 56,\n  57, 50, 43, 36, 29, 22, 15,\n  23, 30, 37, 44, 51, 58,\n  59, 52, 45, 38, 31,\n  39, 46, 53, 60,\n  61, 54, 47,\n  55, 62,\n  63,\n]);\n\nconst dctCos1 = 4017; // cos(pi/16)\nconst dctSin1 = 799; // sin(pi/16)\nconst dctCos3 = 3406; // cos(3*pi/16)\nconst dctSin3 = 2276; // sin(3*pi/16)\nconst dctCos6 = 1567; // cos(6*pi/16)\nconst dctSin6 = 3784; // sin(6*pi/16)\nconst dctSqrt2 = 5793; // sqrt(2)\nconst dctSqrt1d2 = 2896;// sqrt(2) / 2\n\nfunction buildHuffmanTable(codeLengths, values) {\n  let k = 0;\n  const code = [];\n  let length = 16;\n  while (length > 0 && !codeLengths[length - 1]) {\n    --length;\n  }\n  code.push({ children: [], index: 0 });\n\n  let p = code[0];\n  let q;\n  for (let i = 0; i < length; i++) {\n    for (let j = 0; j < codeLengths[i]; j++) {\n      p = code.pop();\n      p.children[p.index] = values[k];\n      while (p.index > 0) {\n        p = code.pop();\n      }\n      p.index++;\n      code.push(p);\n      while (code.length <= i) {\n        code.push(q = { children: [], index: 0 });\n        p.children[p.index] = q.children;\n        p = q;\n      }\n      k++;\n    }\n    if (i + 1 < length) {\n      // p here points to last code\n      code.push(q = { children: [], index: 0 });\n      p.children[p.index] = q.children;\n      p = q;\n    }\n  }\n  return code[0].children;\n}\n\nfunction decodeScan(data, initialOffset,\n  frame, components, resetInterval,\n  spectralStart, spectralEnd,\n  successivePrev, successive) {\n  const { mcusPerLine, progressive } = frame;\n\n  const startOffset = initialOffset;\n  let offset = initialOffset;\n  let bitsData = 0;\n  let bitsCount = 0;\n  function readBit() {\n    if (bitsCount > 0) {\n      bitsCount--;\n      return (bitsData >> bitsCount) & 1;\n    }\n    bitsData = data[offset++];\n    if (bitsData === 0xFF) {\n      const nextByte = data[offset++];\n      if (nextByte) {\n        throw new Error(`unexpected marker: ${((bitsData << 8) | nextByte).toString(16)}`);\n      }\n      // unstuff 0\n    }\n    bitsCount = 7;\n    return bitsData >>> 7;\n  }\n  function decodeHuffman(tree) {\n    let node = tree;\n    let bit;\n    while ((bit = readBit()) !== null) { // eslint-disable-line no-cond-assign\n      node = node[bit];\n      if (typeof node === 'number') {\n        return node;\n      }\n      if (typeof node !== 'object') {\n        throw new Error('invalid huffman sequence');\n      }\n    }\n    return null;\n  }\n  function receive(initialLength) {\n    let length = initialLength;\n    let n = 0;\n    while (length > 0) {\n      const bit = readBit();\n      if (bit === null) {\n        return undefined;\n      }\n      n = (n << 1) | bit;\n      --length;\n    }\n    return n;\n  }\n  function receiveAndExtend(length) {\n    const n = receive(length);\n    if (n >= 1 << (length - 1)) {\n      return n;\n    }\n    return n + (-1 << length) + 1;\n  }\n  function decodeBaseline(component, zz) {\n    const t = decodeHuffman(component.huffmanTableDC);\n    const diff = t === 0 ? 0 : receiveAndExtend(t);\n    component.pred += diff;\n    zz[0] = component.pred;\n    let k = 1;\n    while (k < 64) {\n      const rs = decodeHuffman(component.huffmanTableAC);\n      const s = rs & 15;\n      const r = rs >> 4;\n      if (s === 0) {\n        if (r < 15) {\n          break;\n        }\n        k += 16;\n      } else {\n        k += r;\n        const z = dctZigZag[k];\n        zz[z] = receiveAndExtend(s);\n        k++;\n      }\n    }\n  }\n  function decodeDCFirst(component, zz) {\n    const t = decodeHuffman(component.huffmanTableDC);\n    const diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);\n    component.pred += diff;\n    zz[0] = component.pred;\n  }\n  function decodeDCSuccessive(component, zz) {\n    zz[0] |= readBit() << successive;\n  }\n  let eobrun = 0;\n  function decodeACFirst(component, zz) {\n    if (eobrun > 0) {\n      eobrun--;\n      return;\n    }\n    let k = spectralStart;\n    const e = spectralEnd;\n    while (k <= e) {\n      const rs = decodeHuffman(component.huffmanTableAC);\n      const s = rs & 15;\n      const r = rs >> 4;\n      if (s === 0) {\n        if (r < 15) {\n          eobrun = receive(r) + (1 << r) - 1;\n          break;\n        }\n        k += 16;\n      } else {\n        k += r;\n        const z = dctZigZag[k];\n        zz[z] = receiveAndExtend(s) * (1 << successive);\n        k++;\n      }\n    }\n  }\n  let successiveACState = 0;\n  let successiveACNextValue;\n  function decodeACSuccessive(component, zz) {\n    let k = spectralStart;\n    const e = spectralEnd;\n    let r = 0;\n    while (k <= e) {\n      const z = dctZigZag[k];\n      const direction = zz[z] < 0 ? -1 : 1;\n      switch (successiveACState) {\n        case 0: { // initial state\n          const rs = decodeHuffman(component.huffmanTableAC);\n          const s = rs & 15;\n          r = rs >> 4;\n          if (s === 0) {\n            if (r < 15) {\n              eobrun = receive(r) + (1 << r);\n              successiveACState = 4;\n            } else {\n              r = 16;\n              successiveACState = 1;\n            }\n          } else {\n            if (s !== 1) {\n              throw new Error('invalid ACn encoding');\n            }\n            successiveACNextValue = receiveAndExtend(s);\n            successiveACState = r ? 2 : 3;\n          }\n          continue; // eslint-disable-line no-continue\n        }\n        case 1: // skipping r zero items\n        case 2:\n          if (zz[z]) {\n            zz[z] += (readBit() << successive) * direction;\n          } else {\n            r--;\n            if (r === 0) {\n              successiveACState = successiveACState === 2 ? 3 : 0;\n            }\n          }\n          break;\n        case 3: // set value for a zero item\n          if (zz[z]) {\n            zz[z] += (readBit() << successive) * direction;\n          } else {\n            zz[z] = successiveACNextValue << successive;\n            successiveACState = 0;\n          }\n          break;\n        case 4: // eob\n          if (zz[z]) {\n            zz[z] += (readBit() << successive) * direction;\n          }\n          break;\n        default:\n          break;\n      }\n      k++;\n    }\n    if (successiveACState === 4) {\n      eobrun--;\n      if (eobrun === 0) {\n        successiveACState = 0;\n      }\n    }\n  }\n  function decodeMcu(component, decodeFunction, mcu, row, col) {\n    const mcuRow = (mcu / mcusPerLine) | 0;\n    const mcuCol = mcu % mcusPerLine;\n    const blockRow = (mcuRow * component.v) + row;\n    const blockCol = (mcuCol * component.h) + col;\n    decodeFunction(component, component.blocks[blockRow][blockCol]);\n  }\n  function decodeBlock(component, decodeFunction, mcu) {\n    const blockRow = (mcu / component.blocksPerLine) | 0;\n    const blockCol = mcu % component.blocksPerLine;\n    decodeFunction(component, component.blocks[blockRow][blockCol]);\n  }\n\n  const componentsLength = components.length;\n  let component;\n  let i;\n  let j;\n  let k;\n  let n;\n  let decodeFn;\n  if (progressive) {\n    if (spectralStart === 0) {\n      decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;\n    } else {\n      decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;\n    }\n  } else {\n    decodeFn = decodeBaseline;\n  }\n\n  let mcu = 0;\n  let marker;\n  let mcuExpected;\n  if (componentsLength === 1) {\n    mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;\n  } else {\n    mcuExpected = mcusPerLine * frame.mcusPerColumn;\n  }\n\n  const usedResetInterval = resetInterval || mcuExpected;\n\n  while (mcu < mcuExpected) {\n    // reset interval stuff\n    for (i = 0; i < componentsLength; i++) {\n      components[i].pred = 0;\n    }\n    eobrun = 0;\n\n    if (componentsLength === 1) {\n      component = components[0];\n      for (n = 0; n < usedResetInterval; n++) {\n        decodeBlock(component, decodeFn, mcu);\n        mcu++;\n      }\n    } else {\n      for (n = 0; n < usedResetInterval; n++) {\n        for (i = 0; i < componentsLength; i++) {\n          component = components[i];\n          const { h, v } = component;\n          for (j = 0; j < v; j++) {\n            for (k = 0; k < h; k++) {\n              decodeMcu(component, decodeFn, mcu, j, k);\n            }\n          }\n        }\n        mcu++;\n\n        // If we've reached our expected MCU's, stop decoding\n        if (mcu === mcuExpected) {\n          break;\n        }\n      }\n    }\n\n    // find marker\n    bitsCount = 0;\n    marker = (data[offset] << 8) | data[offset + 1];\n    if (marker < 0xFF00) {\n      throw new Error('marker was not found');\n    }\n\n    if (marker >= 0xFFD0 && marker <= 0xFFD7) { // RSTx\n      offset += 2;\n    } else {\n      break;\n    }\n  }\n\n  return offset - startOffset;\n}\n\nfunction buildComponentData(frame, component) {\n  const lines = [];\n  const { blocksPerLine, blocksPerColumn } = component;\n  const samplesPerLine = blocksPerLine << 3;\n  const R = new Int32Array(64);\n  const r = new Uint8Array(64);\n\n  // A port of poppler's IDCT method which in turn is taken from:\n  //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,\n  //   \"Practical Fast 1-D DCT Algorithms with 11 Multiplications\",\n  //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,\n  //   988-991.\n  function quantizeAndInverse(zz, dataOut, dataIn) {\n    const qt = component.quantizationTable;\n    let v0;\n    let v1;\n    let v2;\n    let v3;\n    let v4;\n    let v5;\n    let v6;\n    let v7;\n    let t;\n    const p = dataIn;\n    let i;\n\n    // dequant\n    for (i = 0; i < 64; i++) {\n      p[i] = zz[i] * qt[i];\n    }\n\n    // inverse DCT on rows\n    for (i = 0; i < 8; ++i) {\n      const row = 8 * i;\n\n      // check for all-zero AC coefficients\n      if (p[1 + row] === 0 && p[2 + row] === 0 && p[3 + row] === 0\n        && p[4 + row] === 0 && p[5 + row] === 0 && p[6 + row] === 0\n        && p[7 + row] === 0) {\n        t = ((dctSqrt2 * p[0 + row]) + 512) >> 10;\n        p[0 + row] = t;\n        p[1 + row] = t;\n        p[2 + row] = t;\n        p[3 + row] = t;\n        p[4 + row] = t;\n        p[5 + row] = t;\n        p[6 + row] = t;\n        p[7 + row] = t;\n        continue; // eslint-disable-line no-continue\n      }\n\n      // stage 4\n      v0 = ((dctSqrt2 * p[0 + row]) + 128) >> 8;\n      v1 = ((dctSqrt2 * p[4 + row]) + 128) >> 8;\n      v2 = p[2 + row];\n      v3 = p[6 + row];\n      v4 = ((dctSqrt1d2 * (p[1 + row] - p[7 + row])) + 128) >> 8;\n      v7 = ((dctSqrt1d2 * (p[1 + row] + p[7 + row])) + 128) >> 8;\n      v5 = p[3 + row] << 4;\n      v6 = p[5 + row] << 4;\n\n      // stage 3\n      t = (v0 - v1 + 1) >> 1;\n      v0 = (v0 + v1 + 1) >> 1;\n      v1 = t;\n      t = ((v2 * dctSin6) + (v3 * dctCos6) + 128) >> 8;\n      v2 = ((v2 * dctCos6) - (v3 * dctSin6) + 128) >> 8;\n      v3 = t;\n      t = (v4 - v6 + 1) >> 1;\n      v4 = (v4 + v6 + 1) >> 1;\n      v6 = t;\n      t = (v7 + v5 + 1) >> 1;\n      v5 = (v7 - v5 + 1) >> 1;\n      v7 = t;\n\n      // stage 2\n      t = (v0 - v3 + 1) >> 1;\n      v0 = (v0 + v3 + 1) >> 1;\n      v3 = t;\n      t = (v1 - v2 + 1) >> 1;\n      v1 = (v1 + v2 + 1) >> 1;\n      v2 = t;\n      t = ((v4 * dctSin3) + (v7 * dctCos3) + 2048) >> 12;\n      v4 = ((v4 * dctCos3) - (v7 * dctSin3) + 2048) >> 12;\n      v7 = t;\n      t = ((v5 * dctSin1) + (v6 * dctCos1) + 2048) >> 12;\n      v5 = ((v5 * dctCos1) - (v6 * dctSin1) + 2048) >> 12;\n      v6 = t;\n\n      // stage 1\n      p[0 + row] = v0 + v7;\n      p[7 + row] = v0 - v7;\n      p[1 + row] = v1 + v6;\n      p[6 + row] = v1 - v6;\n      p[2 + row] = v2 + v5;\n      p[5 + row] = v2 - v5;\n      p[3 + row] = v3 + v4;\n      p[4 + row] = v3 - v4;\n    }\n\n    // inverse DCT on columns\n    for (i = 0; i < 8; ++i) {\n      const col = i;\n\n      // check for all-zero AC coefficients\n      if (p[(1 * 8) + col] === 0 && p[(2 * 8) + col] === 0 && p[(3 * 8) + col] === 0\n        && p[(4 * 8) + col] === 0 && p[(5 * 8) + col] === 0 && p[(6 * 8) + col] === 0\n        && p[(7 * 8) + col] === 0) {\n        t = ((dctSqrt2 * dataIn[i + 0]) + 8192) >> 14;\n        p[(0 * 8) + col] = t;\n        p[(1 * 8) + col] = t;\n        p[(2 * 8) + col] = t;\n        p[(3 * 8) + col] = t;\n        p[(4 * 8) + col] = t;\n        p[(5 * 8) + col] = t;\n        p[(6 * 8) + col] = t;\n        p[(7 * 8) + col] = t;\n        continue; // eslint-disable-line no-continue\n      }\n\n      // stage 4\n      v0 = ((dctSqrt2 * p[(0 * 8) + col]) + 2048) >> 12;\n      v1 = ((dctSqrt2 * p[(4 * 8) + col]) + 2048) >> 12;\n      v2 = p[(2 * 8) + col];\n      v3 = p[(6 * 8) + col];\n      v4 = ((dctSqrt1d2 * (p[(1 * 8) + col] - p[(7 * 8) + col])) + 2048) >> 12;\n      v7 = ((dctSqrt1d2 * (p[(1 * 8) + col] + p[(7 * 8) + col])) + 2048) >> 12;\n      v5 = p[(3 * 8) + col];\n      v6 = p[(5 * 8) + col];\n\n      // stage 3\n      t = (v0 - v1 + 1) >> 1;\n      v0 = (v0 + v1 + 1) >> 1;\n      v1 = t;\n      t = ((v2 * dctSin6) + (v3 * dctCos6) + 2048) >> 12;\n      v2 = ((v2 * dctCos6) - (v3 * dctSin6) + 2048) >> 12;\n      v3 = t;\n      t = (v4 - v6 + 1) >> 1;\n      v4 = (v4 + v6 + 1) >> 1;\n      v6 = t;\n      t = (v7 + v5 + 1) >> 1;\n      v5 = (v7 - v5 + 1) >> 1;\n      v7 = t;\n\n      // stage 2\n      t = (v0 - v3 + 1) >> 1;\n      v0 = (v0 + v3 + 1) >> 1;\n      v3 = t;\n      t = (v1 - v2 + 1) >> 1;\n      v1 = (v1 + v2 + 1) >> 1;\n      v2 = t;\n      t = ((v4 * dctSin3) + (v7 * dctCos3) + 2048) >> 12;\n      v4 = ((v4 * dctCos3) - (v7 * dctSin3) + 2048) >> 12;\n      v7 = t;\n      t = ((v5 * dctSin1) + (v6 * dctCos1) + 2048) >> 12;\n      v5 = ((v5 * dctCos1) - (v6 * dctSin1) + 2048) >> 12;\n      v6 = t;\n\n      // stage 1\n      p[(0 * 8) + col] = v0 + v7;\n      p[(7 * 8) + col] = v0 - v7;\n      p[(1 * 8) + col] = v1 + v6;\n      p[(6 * 8) + col] = v1 - v6;\n      p[(2 * 8) + col] = v2 + v5;\n      p[(5 * 8) + col] = v2 - v5;\n      p[(3 * 8) + col] = v3 + v4;\n      p[(4 * 8) + col] = v3 - v4;\n    }\n\n    // convert to 8-bit integers\n    for (i = 0; i < 64; ++i) {\n      const sample = 128 + ((p[i] + 8) >> 4);\n      if (sample < 0) {\n        dataOut[i] = 0;\n      } else if (sample > 0XFF) {\n        dataOut[i] = 0xFF;\n      } else {\n        dataOut[i] = sample;\n      }\n    }\n  }\n\n  for (let blockRow = 0; blockRow < blocksPerColumn; blockRow++) {\n    const scanLine = blockRow << 3;\n    for (let i = 0; i < 8; i++) {\n      lines.push(new Uint8Array(samplesPerLine));\n    }\n    for (let blockCol = 0; blockCol < blocksPerLine; blockCol++) {\n      quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);\n\n      let offset = 0;\n      const sample = blockCol << 3;\n      for (let j = 0; j < 8; j++) {\n        const line = lines[scanLine + j];\n        for (let i = 0; i < 8; i++) {\n          line[sample + i] = r[offset++];\n        }\n      }\n    }\n  }\n  return lines;\n}\n\nclass JpegStreamReader {\n  constructor() {\n    this.jfif = null;\n    this.adobe = null;\n\n    this.quantizationTables = [];\n    this.huffmanTablesAC = [];\n    this.huffmanTablesDC = [];\n    this.resetFrames();\n  }\n\n  resetFrames() {\n    this.frames = [];\n  }\n\n  parse(data) {\n    let offset = 0;\n    // const { length } = data;\n    function readUint16() {\n      const value = (data[offset] << 8) | data[offset + 1];\n      offset += 2;\n      return value;\n    }\n    function readDataBlock() {\n      const length = readUint16();\n      const array = data.subarray(offset, offset + length - 2);\n      offset += array.length;\n      return array;\n    }\n    function prepareComponents(frame) {\n      let maxH = 0;\n      let maxV = 0;\n      let component;\n      let componentId;\n      for (componentId in frame.components) {\n        if (frame.components.hasOwnProperty(componentId)) {\n          component = frame.components[componentId];\n          if (maxH < component.h) {\n            maxH = component.h;\n          }\n          if (maxV < component.v) {\n            maxV = component.v;\n          }\n        }\n      }\n      const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);\n      const mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);\n      for (componentId in frame.components) {\n        if (frame.components.hasOwnProperty(componentId)) {\n          component = frame.components[componentId];\n          const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);\n          const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / maxV);\n          const blocksPerLineForMcu = mcusPerLine * component.h;\n          const blocksPerColumnForMcu = mcusPerColumn * component.v;\n          const blocks = [];\n          for (let i = 0; i < blocksPerColumnForMcu; i++) {\n            const row = [];\n            for (let j = 0; j < blocksPerLineForMcu; j++) {\n              row.push(new Int32Array(64));\n            }\n            blocks.push(row);\n          }\n          component.blocksPerLine = blocksPerLine;\n          component.blocksPerColumn = blocksPerColumn;\n          component.blocks = blocks;\n        }\n      }\n      frame.maxH = maxH;\n      frame.maxV = maxV;\n      frame.mcusPerLine = mcusPerLine;\n      frame.mcusPerColumn = mcusPerColumn;\n    }\n\n    let fileMarker = readUint16();\n    if (fileMarker !== 0xFFD8) { // SOI (Start of Image)\n      throw new Error('SOI not found');\n    }\n\n    fileMarker = readUint16();\n    while (fileMarker !== 0xFFD9) { // EOI (End of image)\n      switch (fileMarker) {\n        case 0xFF00: break;\n        case 0xFFE0: // APP0 (Application Specific)\n        case 0xFFE1: // APP1\n        case 0xFFE2: // APP2\n        case 0xFFE3: // APP3\n        case 0xFFE4: // APP4\n        case 0xFFE5: // APP5\n        case 0xFFE6: // APP6\n        case 0xFFE7: // APP7\n        case 0xFFE8: // APP8\n        case 0xFFE9: // APP9\n        case 0xFFEA: // APP10\n        case 0xFFEB: // APP11\n        case 0xFFEC: // APP12\n        case 0xFFED: // APP13\n        case 0xFFEE: // APP14\n        case 0xFFEF: // APP15\n        case 0xFFFE: { // COM (Comment)\n          const appData = readDataBlock();\n\n          if (fileMarker === 0xFFE0) {\n            if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49\n              && appData[3] === 0x46 && appData[4] === 0) { // 'JFIF\\x00'\n              this.jfif = {\n                version: { major: appData[5], minor: appData[6] },\n                densityUnits: appData[7],\n                xDensity: (appData[8] << 8) | appData[9],\n                yDensity: (appData[10] << 8) | appData[11],\n                thumbWidth: appData[12],\n                thumbHeight: appData[13],\n                thumbData: appData.subarray(14, 14 + (3 * appData[12] * appData[13])),\n              };\n            }\n          }\n          // TODO APP1 - Exif\n          if (fileMarker === 0xFFEE) {\n            if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F\n              && appData[3] === 0x62 && appData[4] === 0x65 && appData[5] === 0) { // 'Adobe\\x00'\n              this.adobe = {\n                version: appData[6],\n                flags0: (appData[7] << 8) | appData[8],\n                flags1: (appData[9] << 8) | appData[10],\n                transformCode: appData[11],\n              };\n            }\n          }\n          break;\n        }\n\n        case 0xFFDB: { // DQT (Define Quantization Tables)\n          const quantizationTablesLength = readUint16();\n          const quantizationTablesEnd = quantizationTablesLength + offset - 2;\n          while (offset < quantizationTablesEnd) {\n            const quantizationTableSpec = data[offset++];\n            const tableData = new Int32Array(64);\n            if ((quantizationTableSpec >> 4) === 0) { // 8 bit values\n              for (let j = 0; j < 64; j++) {\n                const z = dctZigZag[j];\n                tableData[z] = data[offset++];\n              }\n            } else if ((quantizationTableSpec >> 4) === 1) { // 16 bit\n              for (let j = 0; j < 64; j++) {\n                const z = dctZigZag[j];\n                tableData[z] = readUint16();\n              }\n            } else {\n              throw new Error('DQT: invalid table spec');\n            }\n            this.quantizationTables[quantizationTableSpec & 15] = tableData;\n          }\n          break;\n        }\n\n        case 0xFFC0: // SOF0 (Start of Frame, Baseline DCT)\n        case 0xFFC1: // SOF1 (Start of Frame, Extended DCT)\n        case 0xFFC2: { // SOF2 (Start of Frame, Progressive DCT)\n          readUint16(); // skip data length\n          const frame = {\n            extended: (fileMarker === 0xFFC1),\n            progressive: (fileMarker === 0xFFC2),\n            precision: data[offset++],\n            scanLines: readUint16(),\n            samplesPerLine: readUint16(),\n            components: {},\n            componentsOrder: [],\n          };\n\n          const componentsCount = data[offset++];\n          let componentId;\n          // let maxH = 0;\n          // let maxV = 0;\n          for (let i = 0; i < componentsCount; i++) {\n            componentId = data[offset];\n            const h = data[offset + 1] >> 4;\n            const v = data[offset + 1] & 15;\n            const qId = data[offset + 2];\n            frame.componentsOrder.push(componentId);\n            frame.components[componentId] = {\n              h,\n              v,\n              quantizationIdx: qId,\n            };\n            offset += 3;\n          }\n          prepareComponents(frame);\n          this.frames.push(frame);\n          break;\n        }\n\n        case 0xFFC4: { // DHT (Define Huffman Tables)\n          const huffmanLength = readUint16();\n          for (let i = 2; i < huffmanLength;) {\n            const huffmanTableSpec = data[offset++];\n            const codeLengths = new Uint8Array(16);\n            let codeLengthSum = 0;\n            for (let j = 0; j < 16; j++, offset++) {\n              codeLengths[j] = data[offset];\n              codeLengthSum += codeLengths[j];\n            }\n            const huffmanValues = new Uint8Array(codeLengthSum);\n            for (let j = 0; j < codeLengthSum; j++, offset++) {\n              huffmanValues[j] = data[offset];\n            }\n            i += 17 + codeLengthSum;\n\n            if ((huffmanTableSpec >> 4) === 0) {\n              this.huffmanTablesDC[huffmanTableSpec & 15] = buildHuffmanTable(\n                codeLengths, huffmanValues,\n              );\n            } else {\n              this.huffmanTablesAC[huffmanTableSpec & 15] = buildHuffmanTable(\n                codeLengths, huffmanValues,\n              );\n            }\n          }\n          break;\n        }\n\n        case 0xFFDD: // DRI (Define Restart Interval)\n          readUint16(); // skip data length\n          this.resetInterval = readUint16();\n          break;\n\n        case 0xFFDA: { // SOS (Start of Scan)\n          readUint16(); // skip length\n          const selectorsCount = data[offset++];\n          const components = [];\n          const frame = this.frames[0];\n          for (let i = 0; i < selectorsCount; i++) {\n            const component = frame.components[data[offset++]];\n            const tableSpec = data[offset++];\n            component.huffmanTableDC = this.huffmanTablesDC[tableSpec >> 4];\n            component.huffmanTableAC = this.huffmanTablesAC[tableSpec & 15];\n            components.push(component);\n          }\n          const spectralStart = data[offset++];\n          const spectralEnd = data[offset++];\n          const successiveApproximation = data[offset++];\n          const processed = decodeScan(data, offset,\n            frame, components, this.resetInterval,\n            spectralStart, spectralEnd,\n            successiveApproximation >> 4, successiveApproximation & 15);\n          offset += processed;\n          break;\n        }\n\n        case 0xFFFF: // Fill bytes\n          if (data[offset] !== 0xFF) { // Avoid skipping a valid marker.\n            offset--;\n          }\n          break;\n\n        default:\n          if (data[offset - 3] === 0xFF\n            && data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {\n            // could be incorrect encoding -- last 0xFF byte of the previous\n            // block was eaten by the encoder\n            offset -= 3;\n            break;\n          }\n          throw new Error(`unknown JPEG marker ${fileMarker.toString(16)}`);\n      }\n      fileMarker = readUint16();\n    }\n  }\n\n  getResult() {\n    const { frames } = this;\n    if (this.frames.length === 0) {\n      throw new Error('no frames were decoded');\n    } else if (this.frames.length > 1) {\n      console.warn('more than one frame is not supported');\n    }\n\n    // set each frame's components quantization table\n    for (let i = 0; i < this.frames.length; i++) {\n      const cp = this.frames[i].components;\n      for (const j of Object.keys(cp)) {\n        cp[j].quantizationTable = this.quantizationTables[cp[j].quantizationIdx];\n        delete cp[j].quantizationIdx;\n      }\n    }\n\n    const frame = frames[0];\n    const { components, componentsOrder } = frame;\n    const outComponents = [];\n    const width = frame.samplesPerLine;\n    const height = frame.scanLines;\n\n    for (let i = 0; i < componentsOrder.length; i++) {\n      const component = components[componentsOrder[i]];\n      outComponents.push({\n        lines: buildComponentData(frame, component),\n        scaleX: component.h / frame.maxH,\n        scaleY: component.v / frame.maxV,\n      });\n    }\n\n    const out = new Uint8Array(width * height * outComponents.length);\n    let oi = 0;\n    for (let y = 0; y < height; ++y) {\n      for (let x = 0; x < width; ++x) {\n        for (let i = 0; i < outComponents.length; ++i) {\n          const component = outComponents[i];\n          out[oi] = component.lines[0 | y * component.scaleY][0 | x * component.scaleX];\n          ++oi;\n        }\n      }\n    }\n    return out;\n  }\n}\n\nclass jpeg_JpegDecoder extends basedecoder_BaseDecoder {\n  constructor(fileDirectory) {\n    super();\n    this.reader = new JpegStreamReader();\n    if (fileDirectory.JPEGTables) {\n      this.reader.parse(fileDirectory.JPEGTables);\n    }\n  }\n\n  decodeBlock(buffer) {\n    this.reader.resetFrames();\n    this.reader.parse(new Uint8Array(buffer));\n    return this.reader.getResult().buffer;\n  }\n}\n\n// EXTERNAL MODULE: ./node_modules/pako/lib/inflate.js\nvar inflate = __webpack_require__(30);\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/deflate.js\n\n\n\nclass deflate_DeflateDecoder extends basedecoder_BaseDecoder {\n  decodeBlock(buffer) {\n    return Object(inflate[\"inflate\"])(new Uint8Array(buffer)).buffer;\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/packbits.js\n\n\n\nclass packbits_PackbitsDecoder extends basedecoder_BaseDecoder {\n  decodeBlock(buffer) {\n    const dataView = new DataView(buffer);\n    const out = [];\n\n    for (let i = 0; i < buffer.byteLength; ++i) {\n      let header = dataView.getInt8(i);\n      if (header < 0) {\n        const next = dataView.getUint8(i + 1);\n        header = -header;\n        for (let j = 0; j <= header; ++j) {\n          out.push(next);\n        }\n        i += 1;\n      } else {\n        for (let j = 0; j <= header; ++j) {\n          out.push(dataView.getUint8(i + j + 1));\n        }\n        i += header + 1;\n      }\n    }\n    return new Uint8Array(out).buffer;\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/index.js\n\n\n\n\n\n\nfunction getDecoder(fileDirectory) {\n  switch (fileDirectory.Compression) {\n    case undefined:\n    case 1: // no compression\n      return new raw_RawDecoder();\n    case 5: // LZW\n      return new lzw_LZWDecoder();\n    case 6: // JPEG\n      throw new Error('old style JPEG compression is not supported.');\n    case 7: // JPEG\n      return new jpeg_JpegDecoder(fileDirectory);\n    case 8: // Deflate as recognized by Adobe\n    case 32946: // Deflate GDAL default\n      return new deflate_DeflateDecoder();\n    case 32773: // packbits\n      return new packbits_PackbitsDecoder();\n    default:\n      throw new Error(`Unknown compression method identifier: ${fileDirectory.Compression}`);\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/resample.js\n/**\n * @module resample\n */\n\nfunction copyNewSize(array, width, height, samplesPerPixel = 1) {\n  return new (Object.getPrototypeOf(array).constructor)(width * height * samplesPerPixel);\n}\n\n/**\n * Resample the input arrays using nearest neighbor value selection.\n * @param {TypedArray[]} valueArrays The input arrays to resample\n * @param {number} inWidth The width of the input rasters\n * @param {number} inHeight The height of the input rasters\n * @param {number} outWidth The desired width of the output rasters\n * @param {number} outHeight The desired height of the output rasters\n * @returns {TypedArray[]} The resampled rasters\n */\nfunction resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight) {\n  const relX = inWidth / outWidth;\n  const relY = inHeight / outHeight;\n  return valueArrays.map((array) => {\n    const newArray = copyNewSize(array, outWidth, outHeight);\n    for (let y = 0; y < outHeight; ++y) {\n      const cy = Math.min(Math.round(relY * y), inHeight - 1);\n      for (let x = 0; x < outWidth; ++x) {\n        const cx = Math.min(Math.round(relX * x), inWidth - 1);\n        const value = array[(cy * inWidth) + cx];\n        newArray[(y * outWidth) + x] = value;\n      }\n    }\n    return newArray;\n  });\n}\n\n// simple linear interpolation, code from:\n// https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support\nfunction lerp(v0, v1, t) {\n  return ((1 - t) * v0) + (t * v1);\n}\n\n/**\n * Resample the input arrays using bilinear interpolation.\n * @param {TypedArray[]} valueArrays The input arrays to resample\n * @param {number} inWidth The width of the input rasters\n * @param {number} inHeight The height of the input rasters\n * @param {number} outWidth The desired width of the output rasters\n * @param {number} outHeight The desired height of the output rasters\n * @returns {TypedArray[]} The resampled rasters\n */\nfunction resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight) {\n  const relX = inWidth / outWidth;\n  const relY = inHeight / outHeight;\n\n  return valueArrays.map((array) => {\n    const newArray = copyNewSize(array, outWidth, outHeight);\n    for (let y = 0; y < outHeight; ++y) {\n      const rawY = relY * y;\n\n      const yl = Math.floor(rawY);\n      const yh = Math.min(Math.ceil(rawY), (inHeight - 1));\n\n      for (let x = 0; x < outWidth; ++x) {\n        const rawX = relX * x;\n        const tx = rawX % 1;\n\n        const xl = Math.floor(rawX);\n        const xh = Math.min(Math.ceil(rawX), (inWidth - 1));\n\n        const ll = array[(yl * inWidth) + xl];\n        const hl = array[(yl * inWidth) + xh];\n        const lh = array[(yh * inWidth) + xl];\n        const hh = array[(yh * inWidth) + xh];\n\n        const value = lerp(\n          lerp(ll, hl, tx),\n          lerp(lh, hh, tx),\n          rawY % 1,\n        );\n        newArray[(y * outWidth) + x] = value;\n      }\n    }\n    return newArray;\n  });\n}\n\n/**\n * Resample the input arrays using the selected resampling method.\n * @param {TypedArray[]} valueArrays The input arrays to resample\n * @param {number} inWidth The width of the input rasters\n * @param {number} inHeight The height of the input rasters\n * @param {number} outWidth The desired width of the output rasters\n * @param {number} outHeight The desired height of the output rasters\n * @param {string} [method = 'nearest'] The desired resampling method\n * @returns {TypedArray[]} The resampled rasters\n */\nfunction resample(valueArrays, inWidth, inHeight, outWidth, outHeight, method = 'nearest') {\n  switch (method.toLowerCase()) {\n    case 'nearest':\n      return resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight);\n    case 'bilinear':\n    case 'linear':\n      return resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight);\n    default:\n      throw new Error(`Unsupported resampling method: '${method}'`);\n  }\n}\n\n/**\n * Resample the pixel interleaved input array using nearest neighbor value selection.\n * @param {TypedArray} valueArrays The input arrays to resample\n * @param {number} inWidth The width of the input rasters\n * @param {number} inHeight The height of the input rasters\n * @param {number} outWidth The desired width of the output rasters\n * @param {number} outHeight The desired height of the output rasters\n * @param {number} samples The number of samples per pixel for pixel\n *                         interleaved data\n * @returns {TypedArray} The resampled raster\n */\nfunction resampleNearestInterleaved(\n  valueArray, inWidth, inHeight, outWidth, outHeight, samples) {\n  const relX = inWidth / outWidth;\n  const relY = inHeight / outHeight;\n\n  const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);\n  for (let y = 0; y < outHeight; ++y) {\n    const cy = Math.min(Math.round(relY * y), inHeight - 1);\n    for (let x = 0; x < outWidth; ++x) {\n      const cx = Math.min(Math.round(relX * x), inWidth - 1);\n      for (let i = 0; i < samples; ++i) {\n        const value = valueArray[(cy * inWidth * samples) + (cx * samples) + i];\n        newArray[(y * outWidth * samples) + (x * samples) + i] = value;\n      }\n    }\n  }\n  return newArray;\n}\n\n/**\n * Resample the pixel interleaved input array using bilinear interpolation.\n * @param {TypedArray} valueArrays The input arrays to resample\n * @param {number} inWidth The width of the input rasters\n * @param {number} inHeight The height of the input rasters\n * @param {number} outWidth The desired width of the output rasters\n * @param {number} outHeight The desired height of the output rasters\n * @param {number} samples The number of samples per pixel for pixel\n *                         interleaved data\n * @returns {TypedArray} The resampled raster\n */\nfunction resampleBilinearInterleaved(\n  valueArray, inWidth, inHeight, outWidth, outHeight, samples) {\n  const relX = inWidth / outWidth;\n  const relY = inHeight / outHeight;\n  const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);\n  for (let y = 0; y < outHeight; ++y) {\n    const rawY = relY * y;\n\n    const yl = Math.floor(rawY);\n    const yh = Math.min(Math.ceil(rawY), (inHeight - 1));\n\n    for (let x = 0; x < outWidth; ++x) {\n      const rawX = relX * x;\n      const tx = rawX % 1;\n\n      const xl = Math.floor(rawX);\n      const xh = Math.min(Math.ceil(rawX), (inWidth - 1));\n\n      for (let i = 0; i < samples; ++i) {\n        const ll = valueArray[(yl * inWidth * samples) + (xl * samples) + i];\n        const hl = valueArray[(yl * inWidth * samples) + (xh * samples) + i];\n        const lh = valueArray[(yh * inWidth * samples) + (xl * samples) + i];\n        const hh = valueArray[(yh * inWidth * samples) + (xh * samples) + i];\n\n        const value = lerp(\n          lerp(ll, hl, tx),\n          lerp(lh, hh, tx),\n          rawY % 1,\n        );\n        newArray[(y * outWidth * samples) + (x * samples) + i] = value;\n      }\n    }\n  }\n  return newArray;\n}\n\n/**\n * Resample the pixel interleaved input array using the selected resampling method.\n * @param {TypedArray} valueArray The input array to resample\n * @param {number} inWidth The width of the input rasters\n * @param {number} inHeight The height of the input rasters\n * @param {number} outWidth The desired width of the output rasters\n * @param {number} outHeight The desired height of the output rasters\n * @param {number} samples The number of samples per pixel for pixel\n *                                 interleaved data\n * @param {string} [method = 'nearest'] The desired resampling method\n * @returns {TypedArray} The resampled rasters\n */\nfunction resampleInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples, method = 'nearest') {\n  switch (method.toLowerCase()) {\n    case 'nearest':\n      return resampleNearestInterleaved(\n        valueArray, inWidth, inHeight, outWidth, outHeight, samples,\n      );\n    case 'bilinear':\n    case 'linear':\n      return resampleBilinearInterleaved(\n        valueArray, inWidth, inHeight, outWidth, outHeight, samples,\n      );\n    default:\n      throw new Error(`Unsupported resampling method: '${method}'`);\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/geotiffimage.js\n/* eslint max-len: [\"error\", { \"code\": 120 }] */\n\n\n\n\n\n\n\nfunction sum(array, start, end) {\n  let s = 0;\n  for (let i = start; i < end; ++i) {\n    s += array[i];\n  }\n  return s;\n}\n\nfunction arrayForType(format, bitsPerSample, size) {\n  switch (format) {\n    case 1: // unsigned integer data\n      switch (bitsPerSample) {\n        case 8:\n          return new Uint8Array(size);\n        case 16:\n          return new Uint16Array(size);\n        case 32:\n          return new Uint32Array(size);\n        default:\n          break;\n      }\n      break;\n    case 2: // twos complement signed integer data\n      switch (bitsPerSample) {\n        case 8:\n          return new Int8Array(size);\n        case 16:\n          return new Int16Array(size);\n        case 32:\n          return new Int32Array(size);\n        default:\n          break;\n      }\n      break;\n    case 3: // floating point data\n      switch (bitsPerSample) {\n        case 32:\n          return new Float32Array(size);\n        case 64:\n          return new Float64Array(size);\n        default:\n          break;\n      }\n      break;\n    default:\n      break;\n  }\n  throw Error('Unsupported data format/bitsPerSample');\n}\n\n/**\n * GeoTIFF sub-file image.\n */\nclass geotiffimage_GeoTIFFImage {\n  /**\n   * @constructor\n   * @param {Object} fileDirectory The parsed file directory\n   * @param {Object} geoKeys The parsed geo-keys\n   * @param {DataView} dataView The DataView for the underlying file.\n   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian\n   * @param {Boolean} cache Whether or not decoded tiles shall be cached\n   * @param {Source} source The datasource to read from\n   */\n  constructor(fileDirectory, geoKeys, dataView, littleEndian, cache, source) {\n    this.fileDirectory = fileDirectory;\n    this.geoKeys = geoKeys;\n    this.dataView = dataView;\n    this.littleEndian = littleEndian;\n    this.tiles = cache ? {} : null;\n    this.isTiled = !fileDirectory.StripOffsets;\n    const planarConfiguration = fileDirectory.PlanarConfiguration;\n    this.planarConfiguration = (typeof planarConfiguration === 'undefined') ? 1 : planarConfiguration;\n    if (this.planarConfiguration !== 1 && this.planarConfiguration !== 2) {\n      throw new Error('Invalid planar configuration.');\n    }\n\n    this.source = source;\n  }\n\n  /**\n   * Returns the associated parsed file directory.\n   * @returns {Object} the parsed file directory\n   */\n  getFileDirectory() {\n    return this.fileDirectory;\n  }\n\n  /**\n   * Returns the associated parsed geo keys.\n   * @returns {Object} the parsed geo keys\n   */\n  getGeoKeys() {\n    return this.geoKeys;\n  }\n\n  /**\n   * Returns the width of the image.\n   * @returns {Number} the width of the image\n   */\n  getWidth() {\n    return this.fileDirectory.ImageWidth;\n  }\n\n  /**\n   * Returns the height of the image.\n   * @returns {Number} the height of the image\n   */\n  getHeight() {\n    return this.fileDirectory.ImageLength;\n  }\n\n  /**\n   * Returns the number of samples per pixel.\n   * @returns {Number} the number of samples per pixel\n   */\n  getSamplesPerPixel() {\n    return this.fileDirectory.SamplesPerPixel;\n  }\n\n  /**\n   * Returns the width of each tile.\n   * @returns {Number} the width of each tile\n   */\n  getTileWidth() {\n    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();\n  }\n\n  /**\n   * Returns the height of each tile.\n   * @returns {Number} the height of each tile\n   */\n  getTileHeight() {\n    if (this.isTiled) {\n      return this.fileDirectory.TileLength;\n    }\n    if (typeof this.fileDirectory.RowsPerStrip !== 'undefined') {\n      return Math.min(this.fileDirectory.RowsPerStrip, this.getHeight());\n    }\n    return this.getHeight();\n  }\n\n  /**\n   * Calculates the number of bytes for each pixel across all samples. Only full\n   * bytes are supported, an exception is thrown when this is not the case.\n   * @returns {Number} the bytes per pixel\n   */\n  getBytesPerPixel() {\n    let bitsPerSample = 0;\n    for (let i = 0; i < this.fileDirectory.BitsPerSample.length; ++i) {\n      const bits = this.fileDirectory.BitsPerSample[i];\n      if ((bits % 8) !== 0) {\n        throw new Error(`Sample bit-width of ${bits} is not supported.`);\n      } else if (bits !== this.fileDirectory.BitsPerSample[0]) {\n        throw new Error('Differing size of samples in a pixel are not supported.');\n      }\n      bitsPerSample += bits;\n    }\n    return bitsPerSample / 8;\n  }\n\n  getSampleByteSize(i) {\n    if (i >= this.fileDirectory.BitsPerSample.length) {\n      throw new RangeError(`Sample index ${i} is out of range.`);\n    }\n    const bits = this.fileDirectory.BitsPerSample[i];\n    if ((bits % 8) !== 0) {\n      throw new Error(`Sample bit-width of ${bits} is not supported.`);\n    }\n    return (bits / 8);\n  }\n\n  getReaderForSample(sampleIndex) {\n    const format = this.fileDirectory.SampleFormat\n      ? this.fileDirectory.SampleFormat[sampleIndex] : 1;\n    const bitsPerSample = this.fileDirectory.BitsPerSample[sampleIndex];\n    switch (format) {\n      case 1: // unsigned integer data\n        switch (bitsPerSample) {\n          case 8:\n            return DataView.prototype.getUint8;\n          case 16:\n            return DataView.prototype.getUint16;\n          case 32:\n            return DataView.prototype.getUint32;\n          default:\n            break;\n        }\n        break;\n      case 2: // twos complement signed integer data\n        switch (bitsPerSample) {\n          case 8:\n            return DataView.prototype.getInt8;\n          case 16:\n            return DataView.prototype.getInt16;\n          case 32:\n            return DataView.prototype.getInt32;\n          default:\n            break;\n        }\n        break;\n      case 3:\n        switch (bitsPerSample) {\n          case 32:\n            return DataView.prototype.getFloat32;\n          case 64:\n            return DataView.prototype.getFloat64;\n          default:\n            break;\n        }\n        break;\n      default:\n        break;\n    }\n    throw Error('Unsupported data format/bitsPerSample');\n  }\n\n  getArrayForSample(sampleIndex, size) {\n    const format = this.fileDirectory.SampleFormat\n      ? this.fileDirectory.SampleFormat[sampleIndex] : 1;\n    const bitsPerSample = this.fileDirectory.BitsPerSample[sampleIndex];\n    return arrayForType(format, bitsPerSample, size);\n  }\n\n  /**\n   * Returns the decoded strip or tile.\n   * @param {Number} x the strip or tile x-offset\n   * @param {Number} y the tile y-offset (0 for stripped images)\n   * @param {Number} sample the sample to get for separated samples\n   * @param {Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool\n   * @returns {Promise.<ArrayBuffer>}\n   */\n  async getTileOrStrip(x, y, sample, poolOrDecoder) {\n    const numTilesPerRow = Math.ceil(this.getWidth() / this.getTileWidth());\n    const numTilesPerCol = Math.ceil(this.getHeight() / this.getTileHeight());\n    let index;\n    const { tiles } = this;\n    if (this.planarConfiguration === 1) {\n      index = (y * numTilesPerRow) + x;\n    } else if (this.planarConfiguration === 2) {\n      index = (sample * numTilesPerRow * numTilesPerCol) + (y * numTilesPerRow) + x;\n    }\n\n    let offset;\n    let byteCount;\n    if (this.isTiled) {\n      offset = this.fileDirectory.TileOffsets[index];\n      byteCount = this.fileDirectory.TileByteCounts[index];\n    } else {\n      offset = this.fileDirectory.StripOffsets[index];\n      byteCount = this.fileDirectory.StripByteCounts[index];\n    }\n    const slice = await this.source.fetch(offset, byteCount);\n\n    // either use the provided pool or decoder to decode the data\n    let request;\n    if (tiles === null) {\n      request = poolOrDecoder.decode(this.fileDirectory, slice);\n    } else if (!tiles[index]) {\n      request = poolOrDecoder.decode(this.fileDirectory, slice);\n      tiles[index] = request;\n    }\n    return { x, y, sample, data: await request };\n  }\n\n  /**\n   * Internal read function.\n   * @private\n   * @param {Array} imageWindow The image window in pixel coordinates\n   * @param {Array} samples The selected samples (0-based indices)\n   * @param {TypedArray[]|TypedArray} valueArrays The array(s) to write into\n   * @param {Boolean} interleave Whether or not to write in an interleaved manner\n   * @param {Pool} pool The decoder pool\n   * @returns {Promise<TypedArray[]>|Promise<TypedArray>}\n   */\n  async _readRaster(imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod) {\n    const tileWidth = this.getTileWidth();\n    const tileHeight = this.getTileHeight();\n\n    const minXTile = Math.max(Math.floor(imageWindow[0] / tileWidth), 0);\n    const maxXTile = Math.min(\n      Math.ceil(imageWindow[2] / tileWidth),\n      Math.ceil(this.getWidth() / this.getTileWidth()),\n    );\n    const minYTile = Math.max(Math.floor(imageWindow[1] / tileHeight), 0);\n    const maxYTile = Math.min(\n      Math.ceil(imageWindow[3] / tileHeight),\n      Math.ceil(this.getHeight() / this.getTileHeight()),\n    );\n    const windowWidth = imageWindow[2] - imageWindow[0];\n\n    let bytesPerPixel = this.getBytesPerPixel();\n\n    const srcSampleOffsets = [];\n    const sampleReaders = [];\n    for (let i = 0; i < samples.length; ++i) {\n      if (this.planarConfiguration === 1) {\n        srcSampleOffsets.push(sum(this.fileDirectory.BitsPerSample, 0, samples[i]) / 8);\n      } else {\n        srcSampleOffsets.push(0);\n      }\n      sampleReaders.push(this.getReaderForSample(samples[i]));\n    }\n\n    const promises = [];\n    const { littleEndian } = this;\n\n    for (let yTile = minYTile; yTile < maxYTile; ++yTile) {\n      for (let xTile = minXTile; xTile < maxXTile; ++xTile) {\n        for (let sampleIndex = 0; sampleIndex < samples.length; ++sampleIndex) {\n          const si = sampleIndex;\n          const sample = samples[sampleIndex];\n          if (this.planarConfiguration === 2) {\n            bytesPerPixel = this.getSampleByteSize(sample);\n          }\n          const promise = this.getTileOrStrip(xTile, yTile, sample, poolOrDecoder);\n          promises.push(promise);\n          promise.then((tile) => {\n            const buffer = tile.data;\n            const dataView = new DataView(buffer);\n            const firstLine = tile.y * tileHeight;\n            const firstCol = tile.x * tileWidth;\n            const lastLine = (tile.y + 1) * tileHeight;\n            const lastCol = (tile.x + 1) * tileWidth;\n            const reader = sampleReaders[si];\n\n            const ymax = Math.min(tileHeight, tileHeight - (lastLine - imageWindow[3]));\n            const xmax = Math.min(tileWidth, tileWidth - (lastCol - imageWindow[2]));\n\n            for (let y = Math.max(0, imageWindow[1] - firstLine); y < ymax; ++y) {\n              for (let x = Math.max(0, imageWindow[0] - firstCol); x < xmax; ++x) {\n                const pixelOffset = ((y * tileWidth) + x) * bytesPerPixel;\n                const value = reader.call(\n                  dataView, pixelOffset + srcSampleOffsets[si], littleEndian,\n                );\n                let windowCoordinate;\n                if (interleave) {\n                  windowCoordinate = ((y + firstLine - imageWindow[1]) * windowWidth * samples.length)\n                    + ((x + firstCol - imageWindow[0]) * samples.length)\n                    + si;\n                  valueArrays[windowCoordinate] = value;\n                } else {\n                  windowCoordinate = (\n                    (y + firstLine - imageWindow[1]) * windowWidth\n                  ) + x + firstCol - imageWindow[0];\n                  valueArrays[si][windowCoordinate] = value;\n                }\n              }\n            }\n          });\n        }\n      }\n    }\n    await Promise.all(promises);\n\n    if ((width && (imageWindow[2] - imageWindow[0]) !== width)\n        || (height && (imageWindow[3] - imageWindow[1]) !== height)) {\n      let resampled;\n      if (interleave) {\n        resampled = resampleInterleaved(\n          valueArrays,\n          imageWindow[2] - imageWindow[0],\n          imageWindow[3] - imageWindow[1],\n          width, height,\n          samples.length,\n          resampleMethod,\n        );\n      } else {\n        resampled = resample(\n          valueArrays,\n          imageWindow[2] - imageWindow[0],\n          imageWindow[3] - imageWindow[1],\n          width, height,\n          resampleMethod,\n        );\n      }\n      resampled.width = width;\n      resampled.height = height;\n      return resampled;\n    }\n\n    valueArrays.width = width || imageWindow[2] - imageWindow[0];\n    valueArrays.height = height || imageWindow[3] - imageWindow[1];\n\n    return valueArrays;\n  }\n\n  /**\n   * Reads raster data from the image. This function reads all selected samples\n   * into separate arrays of the correct type for that sample or into a single\n   * combined array when `interleave` is set. When provided, only a subset\n   * of the raster is read for each sample.\n   *\n   * @param {Object} [options={}] optional parameters\n   * @param {Array} [options.window=whole image] the subset to read data from.\n   * @param {Array} [options.samples=all samples] the selection of samples to read from.\n   * @param {Boolean} [options.interleave=false] whether the data shall be read\n   *                                             in one single array or separate\n   *                                             arrays.\n   * @param {Number} [options.pool=null] The optional decoder pool to use.\n   * @param {number} [options.width] The desired width of the output. When the width is\n   *                                 not the same as the images, resampling will be\n   *                                 performed.\n   * @param {number} [options.height] The desired height of the output. When the width\n   *                                  is not the same as the images, resampling will\n   *                                  be performed.\n   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.\n   * @param {number|number[]} [options.fillValue] The value to use for parts of the image\n   *                                              outside of the images extent. When\n   *                                              multiple samples are requested, an\n   *                                              array of fill values can be passed.\n   * @returns {Promise.<(TypedArray|TypedArray[])>} the decoded arrays as a promise\n   */\n  async readRasters({\n    window: wnd, samples = [], interleave, pool = null,\n    width, height, resampleMethod, fillValue,\n  } = {}) {\n    const imageWindow = wnd || [0, 0, this.getWidth(), this.getHeight()];\n\n    // check parameters\n    if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {\n      throw new Error('Invalid subsets');\n    }\n\n    const imageWindowWidth = imageWindow[2] - imageWindow[0];\n    const imageWindowHeight = imageWindow[3] - imageWindow[1];\n    const numPixels = imageWindowWidth * imageWindowHeight;\n\n    if (!samples || !samples.length) {\n      for (let i = 0; i < this.fileDirectory.SamplesPerPixel; ++i) {\n        samples.push(i);\n      }\n    } else {\n      for (let i = 0; i < samples.length; ++i) {\n        if (samples[i] >= this.fileDirectory.SamplesPerPixel) {\n          return Promise.reject(new RangeError(`Invalid sample index '${samples[i]}'.`));\n        }\n      }\n    }\n    let valueArrays;\n    if (interleave) {\n      const format = this.fileDirectory.SampleFormat\n        ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1;\n      const bitsPerSample = Math.max.apply(null, this.fileDirectory.BitsPerSample);\n      valueArrays = arrayForType(format, bitsPerSample, numPixels * samples.length);\n      if (fillValue) {\n        valueArrays.fill(fillValue);\n      }\n    } else {\n      valueArrays = [];\n      for (let i = 0; i < samples.length; ++i) {\n        const valueArray = this.getArrayForSample(samples[i], numPixels);\n        if (Array.isArray(fillValue) && i < fillValue.length) {\n          valueArray.fill(fillValue[i]);\n        } else if (fillValue && !Array.isArray(fillValue)) {\n          valueArray.fill(fillValue);\n        }\n        valueArrays.push(valueArray);\n      }\n    }\n\n    const poolOrDecoder = pool || getDecoder(this.fileDirectory);\n\n    const result = await this._readRaster(\n      imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod,\n    );\n    return result;\n  }\n\n  /**\n   * Reads raster data from the image as RGB. The result is always an\n   * interleaved typed array.\n   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.\n   * When no other method is applicable, the first sample is used to produce a\n   * greayscale image.\n   * When provided, only a subset of the raster is read for each sample.\n   *\n   * @param {Object} [options] optional parameters\n   * @param {Array} [options.window=whole image] the subset to read data from.\n   * @param {Number} [pool=null] The optional decoder pool to use.\n   * @param {number} [width] The desired width of the output. When the width is no the\n   *                         same as the images, resampling will be performed.\n   * @param {number} [height] The desired height of the output. When the width is no the\n   *                          same as the images, resampling will be performed.\n   * @param {string} [resampleMethod='nearest'] The desired resampling method.\n   * @param {bool} [enableAlpha=false] Enable reading alpha channel if present.\n   * @returns {Promise.<TypedArray|TypedArray[]>} the RGB array as a Promise\n   */\n  async readRGB({ window, pool = null, width, height, resampleMethod, enableAlpha = false } = {}) {\n    const imageWindow = window || [0, 0, this.getWidth(), this.getHeight()];\n\n    // check parameters\n    if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {\n      throw new Error('Invalid subsets');\n    }\n\n    const pi = this.fileDirectory.PhotometricInterpretation;\n\n    if (pi === photometricInterpretations.RGB) {\n      let s = [0, 1, 2];\n      if ((!(this.fileDirectory.ExtraSamples === ExtraSamplesValues.Unspecified)) && enableAlpha) {\n        s = [];\n        for (let i = 0; i < this.fileDirectory.BitsPerSample.length; i += 1) {\n          s.push(i);\n        }\n      }\n      return this.readRasters({\n        window,\n        interleave: true,\n        samples: s,\n        pool,\n        width,\n        height,\n      });\n    }\n\n    let samples;\n    switch (pi) {\n      case photometricInterpretations.WhiteIsZero:\n      case photometricInterpretations.BlackIsZero:\n      case photometricInterpretations.Palette:\n        samples = [0];\n        break;\n      case photometricInterpretations.CMYK:\n        samples = [0, 1, 2, 3];\n        break;\n      case photometricInterpretations.YCbCr:\n      case photometricInterpretations.CIELab:\n        samples = [0, 1, 2];\n        break;\n      default:\n        throw new Error('Invalid or unsupported photometric interpretation.');\n    }\n\n    const subOptions = {\n      window: imageWindow,\n      interleave: true,\n      samples,\n      pool,\n      width,\n      height,\n      resampleMethod,\n    };\n    const { fileDirectory } = this;\n    const raster = await this.readRasters(subOptions);\n\n    const max = 2 ** this.fileDirectory.BitsPerSample[0];\n    let data;\n    switch (pi) {\n      case photometricInterpretations.WhiteIsZero:\n        data = fromWhiteIsZero(raster, max);\n        break;\n      case photometricInterpretations.BlackIsZero:\n        data = fromBlackIsZero(raster, max);\n        break;\n      case photometricInterpretations.Palette:\n        data = fromPalette(raster, fileDirectory.ColorMap);\n        break;\n      case photometricInterpretations.CMYK:\n        data = fromCMYK(raster);\n        break;\n      case photometricInterpretations.YCbCr:\n        data = fromYCbCr(raster);\n        break;\n      case photometricInterpretations.CIELab:\n        data = fromCIELab(raster);\n        break;\n      default:\n        throw new Error('Unsupported photometric interpretation.');\n    }\n    data.width = raster.width;\n    data.height = raster.height;\n    return data;\n  }\n\n  /**\n   * Returns an array of tiepoints.\n   * @returns {Object[]}\n   */\n  getTiePoints() {\n    if (!this.fileDirectory.ModelTiepoint) {\n      return [];\n    }\n\n    const tiePoints = [];\n    for (let i = 0; i < this.fileDirectory.ModelTiepoint.length; i += 6) {\n      tiePoints.push({\n        i: this.fileDirectory.ModelTiepoint[i],\n        j: this.fileDirectory.ModelTiepoint[i + 1],\n        k: this.fileDirectory.ModelTiepoint[i + 2],\n        x: this.fileDirectory.ModelTiepoint[i + 3],\n        y: this.fileDirectory.ModelTiepoint[i + 4],\n        z: this.fileDirectory.ModelTiepoint[i + 5],\n      });\n    }\n    return tiePoints;\n  }\n\n  /**\n   * Returns the parsed GDAL metadata items.\n   *\n   * If sample is passed to null, dataset-level metadata will be returned.\n   * Otherwise only metadata specific to the provided sample will be returned.\n   *\n   * @param {Number} [sample=null] The sample index.\n   * @returns {Object}\n   */\n  getGDALMetadata(sample = null) {\n    const metadata = {};\n    if (!this.fileDirectory.GDAL_METADATA) {\n      return null;\n    }\n    const string = this.fileDirectory.GDAL_METADATA;\n    const xmlDom = tXml_default()(string.substring(0, string.length - 1));\n\n    if (!xmlDom[0].tagName) {\n      throw new Error('Failed to parse GDAL metadata XML.');\n    }\n\n    const root = xmlDom[0];\n    if (root.tagName !== 'GDALMetadata') {\n      throw new Error('Unexpected GDAL metadata XML tag.');\n    }\n\n    let items = root.children\n      .filter((child) => child.tagName === 'Item');\n\n    if (sample) {\n      items = items.filter((item) => Number(item.attributes.sample) === sample);\n    }\n\n    for (let i = 0; i < items.length; ++i) {\n      const item = items[i];\n      metadata[item.attributes.name] = item.children[0];\n    }\n    return metadata;\n  }\n\n  /**\n   * Returns the GDAL nodata value\n   * @returns {Number} or null\n   */\n  getGDALNoData() {\n    if (!this.fileDirectory.GDAL_NODATA) {\n      return null;\n    }\n    const string = this.fileDirectory.GDAL_NODATA;\n    return Number(string.substring(0, string.length - 1));\n  }\n\n  /**\n   * Returns the image origin as a XYZ-vector. When the image has no affine\n   * transformation, then an exception is thrown.\n   * @returns {Array} The origin as a vector\n   */\n  getOrigin() {\n    const tiePoints = this.fileDirectory.ModelTiepoint;\n    const modelTransformation = this.fileDirectory.ModelTransformation;\n    if (tiePoints && tiePoints.length === 6) {\n      return [\n        tiePoints[3],\n        tiePoints[4],\n        tiePoints[5],\n      ];\n    }\n    if (modelTransformation) {\n      return [\n        modelTransformation[3],\n        modelTransformation[7],\n        modelTransformation[11],\n      ];\n    }\n    throw new Error('The image does not have an affine transformation.');\n  }\n\n  /**\n   * Returns the image resolution as a XYZ-vector. When the image has no affine\n   * transformation, then an exception is thrown.\n   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from\n   *                                             in cases when the current image does not have the\n   *                                             required tags on its own.\n   * @returns {Array} The resolution as a vector\n   */\n  getResolution(referenceImage = null) {\n    const modelPixelScale = this.fileDirectory.ModelPixelScale;\n    const modelTransformation = this.fileDirectory.ModelTransformation;\n\n    if (modelPixelScale) {\n      return [\n        modelPixelScale[0],\n        -modelPixelScale[1],\n        modelPixelScale[2],\n      ];\n    }\n    if (modelTransformation) {\n      return [\n        modelTransformation[0],\n        modelTransformation[5],\n        modelTransformation[10],\n      ];\n    }\n\n    if (referenceImage) {\n      const [refResX, refResY, refResZ] = referenceImage.getResolution();\n      return [\n        refResX * referenceImage.getWidth() / this.getWidth(),\n        refResY * referenceImage.getHeight() / this.getHeight(),\n        refResZ * referenceImage.getWidth() / this.getWidth(),\n      ];\n    }\n\n    throw new Error('The image does not have an affine transformation.');\n  }\n\n  /**\n   * Returns whether or not the pixels of the image depict an area (or point).\n   * @returns {Boolean} Whether the pixels are a point\n   */\n  pixelIsArea() {\n    return this.geoKeys.GTRasterTypeGeoKey === 1;\n  }\n\n  /**\n   * Returns the image bounding box as an array of 4 values: min-x, min-y,\n   * max-x and max-y. When the image has no affine transformation, then an\n   * exception is thrown.\n   * @returns {Array} The bounding box\n   */\n  getBoundingBox() {\n    const origin = this.getOrigin();\n    const resolution = this.getResolution();\n\n    const x1 = origin[0];\n    const y1 = origin[1];\n\n    const x2 = x1 + (resolution[0] * this.getWidth());\n    const y2 = y1 + (resolution[1] * this.getHeight());\n\n    return [\n      Math.min(x1, x2),\n      Math.min(y1, y2),\n      Math.max(x1, x2),\n      Math.max(y1, y2),\n    ];\n  }\n}\n\n/* harmony default export */ var geotiffimage = (geotiffimage_GeoTIFFImage);\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/dataview64.js\nclass DataView64 {\n  constructor(arrayBuffer) {\n    this._dataView = new DataView(arrayBuffer);\n  }\n\n  get buffer() {\n    return this._dataView.buffer;\n  }\n\n  getUint64(offset, littleEndian) {\n    const left = this.getUint32(offset, littleEndian);\n    const right = this.getUint32(offset + 4, littleEndian);\n    let combined;\n    if (littleEndian) {\n      combined = left + 2 ** 32 * right;\n      if (!Number.isSafeInteger(combined)) {\n        throw new Error(\n          `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`\n        );\n      }\n      return combined;\n    }\n    combined = 2 ** 32 * left + right;\n    if (!Number.isSafeInteger(combined)) {\n      throw new Error(\n        `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`\n      );\n    }\n\n    return combined;\n  }\n\n  // adapted from https://stackoverflow.com/a/55338384/8060591\n  getInt64(offset, littleEndian) {\n    let value = 0;\n    const isNegative =\n      (this._dataView.getUint8(offset + (littleEndian ? 7 : 0)) & 0x80) > 0;\n    let carrying = true;\n    for (let i = 0; i < 8; i++) {\n      let byte = this._dataView.getUint8(offset + (littleEndian ? i : 7 - i));\n      if (isNegative) {\n        if (carrying) {\n          if (byte !== 0x00) {\n            byte = ~(byte - 1) & 0xff;\n            carrying = false;\n          }\n        } else {\n          byte = ~byte & 0xff;\n        }\n      }\n      value += byte * 256 ** i;\n    }\n    if (isNegative) {\n      value = -value;\n    }\n    return value;\n  }\n\n  getUint8(offset, littleEndian) {\n    return this._dataView.getUint8(offset, littleEndian);\n  }\n\n  getInt8(offset, littleEndian) {\n    return this._dataView.getInt8(offset, littleEndian);\n  }\n\n  getUint16(offset, littleEndian) {\n    return this._dataView.getUint16(offset, littleEndian);\n  }\n\n  getInt16(offset, littleEndian) {\n    return this._dataView.getInt16(offset, littleEndian);\n  }\n\n  getUint32(offset, littleEndian) {\n    return this._dataView.getUint32(offset, littleEndian);\n  }\n\n  getInt32(offset, littleEndian) {\n    return this._dataView.getInt32(offset, littleEndian);\n  }\n\n  getFloat32(offset, littleEndian) {\n    return this._dataView.getFloat32(offset, littleEndian);\n  }\n\n  getFloat64(offset, littleEndian) {\n    return this._dataView.getFloat64(offset, littleEndian);\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/dataslice.js\nclass DataSlice {\n  constructor(arrayBuffer, sliceOffset, littleEndian, bigTiff) {\n    this._dataView = new DataView(arrayBuffer);\n    this._sliceOffset = sliceOffset;\n    this._littleEndian = littleEndian;\n    this._bigTiff = bigTiff;\n  }\n\n  get sliceOffset() {\n    return this._sliceOffset;\n  }\n\n  get sliceTop() {\n    return this._sliceOffset + this.buffer.byteLength;\n  }\n\n  get littleEndian() {\n    return this._littleEndian;\n  }\n\n  get bigTiff() {\n    return this._bigTiff;\n  }\n\n  get buffer() {\n    return this._dataView.buffer;\n  }\n\n  covers(offset, length) {\n    return this.sliceOffset <= offset && this.sliceTop >= offset + length;\n  }\n\n  readUint8(offset) {\n    return this._dataView.getUint8(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readInt8(offset) {\n    return this._dataView.getInt8(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readUint16(offset) {\n    return this._dataView.getUint16(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readInt16(offset) {\n    return this._dataView.getInt16(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readUint32(offset) {\n    return this._dataView.getUint32(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readInt32(offset) {\n    return this._dataView.getInt32(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readFloat32(offset) {\n    return this._dataView.getFloat32(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readFloat64(offset) {\n    return this._dataView.getFloat64(\n      offset - this._sliceOffset, this._littleEndian,\n    );\n  }\n\n  readUint64(offset) {\n    const left = this.readUint32(offset);\n    const right = this.readUint32(offset + 4);\n    let combined;\n    if (this._littleEndian) {\n      combined = left + 2 ** 32 * right;\n      if (!Number.isSafeInteger(combined)) {\n        throw new Error(\n          `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`,\n        );\n      }\n      return combined;\n    }\n    combined = 2 ** 32 * left + right;\n    if (!Number.isSafeInteger(combined)) {\n      throw new Error(\n        `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`,\n      );\n    }\n\n    return combined;\n  }\n\n  // adapted from https://stackoverflow.com/a/55338384/8060591\n  readInt64(offset) {\n    let value = 0;\n    const isNegative =\n      (this._dataView.getUint8(offset + (this._littleEndian ? 7 : 0)) & 0x80) >\n      0;\n    let carrying = true;\n    for (let i = 0; i < 8; i++) {\n      let byte = this._dataView.getUint8(\n        offset + (this._littleEndian ? i : 7 - i)\n      );\n      if (isNegative) {\n        if (carrying) {\n          if (byte !== 0x00) {\n            byte = ~(byte - 1) & 0xff;\n            carrying = false;\n          }\n        } else {\n          byte = ~byte & 0xff;\n        }\n      }\n      value += byte * 256 ** i;\n    }\n    if (isNegative) {\n      value = -value;\n    }\n    return value\n  }\n\n  readOffset(offset) {\n    if (this._bigTiff) {\n      return this.readUint64(offset);\n    }\n    return this.readUint32(offset);\n  }\n}\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/get-bundle-url.browser.js\n// Source: <https://github.com/parcel-bundler/parcel/blob/master/packages/core/parcel-bundler/src/builtins/bundle-url.js>\nlet bundleURL;\nfunction getBundleURLCached() {\n    if (!bundleURL) {\n        bundleURL = getBundleURL();\n    }\n    return bundleURL;\n}\nfunction getBundleURL() {\n    // Attempt to find the URL of the current script and use that as the base URL\n    try {\n        throw new Error;\n    }\n    catch (err) {\n        const matches = (\"\" + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\\/\\/[^)\\n]+/g);\n        if (matches) {\n            return getBaseURL(matches[0]);\n        }\n    }\n    return \"/\";\n}\nfunction getBaseURL(url) {\n    return (\"\" + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\\/\\/.+)?\\/[^/]+(?:\\?.*)?$/, '$1') + '/';\n}\n\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/implementation.browser.js\n// tslint:disable max-classes-per-file\n\nconst defaultPoolSize = typeof navigator !== \"undefined\" && navigator.hardwareConcurrency\n    ? navigator.hardwareConcurrency\n    : 4;\nconst isAbsoluteURL = (value) => /^(file|https?:)?\\/\\//i.test(value);\nfunction createSourceBlobURL(code) {\n    const blob = new Blob([code], { type: \"application/javascript\" });\n    return URL.createObjectURL(blob);\n}\nfunction selectWorkerImplementation() {\n    if (typeof Worker === \"undefined\") {\n        // Might happen on Safari, for instance\n        // The idea is to only fail if the constructor is actually used\n        return class NoWebWorker {\n            constructor() {\n                throw Error(\"No web worker implementation available. You might have tried to spawn a worker within a worker in a browser that doesn't support workers in workers.\");\n            }\n        };\n    }\n    return class WebWorker extends Worker {\n        constructor(url, options) {\n            if (typeof url === \"string\" && options && options._baseURL) {\n                url = new URL(url, options._baseURL);\n            }\n            else if (typeof url === \"string\" && !isAbsoluteURL(url) && getBundleURLCached().match(/^file:\\/\\//i)) {\n                url = new URL(url, getBundleURLCached().replace(/\\/[^\\/]+$/, \"/\"));\n                url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`);\n            }\n            if (typeof url === \"string\" && isAbsoluteURL(url)) {\n                // Create source code blob loading JS file via `importScripts()`\n                // to circumvent worker CORS restrictions\n                url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`);\n            }\n            super(url, options);\n        }\n    };\n}\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/index.js\n\n\n\n\n/** Worker implementation. Either web worker or a node.js Worker class. */\nconst master_Worker = selectWorkerImplementation();\n\n// EXTERNAL MODULE: ./node_modules/debug/src/browser.js\nvar browser = __webpack_require__(3);\nvar browser_default = /*#__PURE__*/__webpack_require__.n(browser);\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/subject.js\nvar subject = __webpack_require__(31);\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/multicast.js + 1 modules\nvar multicast = __webpack_require__(73);\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/observable.js + 1 modules\nvar observable = __webpack_require__(8);\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/ponyfills.js\n// Based on <https://github.com/es-shims/Promise.allSettled/blob/master/implementation.js>\nfunction allSettled(values) {\n    return Promise.all(values.map(item => {\n        const onFulfill = (value) => {\n            return { status: 'fulfilled', value };\n        };\n        const onReject = (reason) => {\n            return { status: 'rejected', reason };\n        };\n        const itemPromise = Promise.resolve(item);\n        try {\n            return itemPromise.then(onFulfill, onReject);\n        }\n        catch (error) {\n            return Promise.reject(error);\n        }\n    }));\n}\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/pool-types.js\n/** Pool event type. Specifies the type of each `PoolEvent`. */\nvar PoolEventType;\n(function (PoolEventType) {\n    PoolEventType[\"initialized\"] = \"initialized\";\n    PoolEventType[\"taskCanceled\"] = \"taskCanceled\";\n    PoolEventType[\"taskCompleted\"] = \"taskCompleted\";\n    PoolEventType[\"taskFailed\"] = \"taskFailed\";\n    PoolEventType[\"taskQueued\"] = \"taskQueued\";\n    PoolEventType[\"taskQueueDrained\"] = \"taskQueueDrained\";\n    PoolEventType[\"taskStart\"] = \"taskStart\";\n    PoolEventType[\"terminated\"] = \"terminated\";\n})(PoolEventType || (PoolEventType = {}));\n\n// EXTERNAL MODULE: ./node_modules/threads/dist-esm/symbols.js\nvar symbols = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/thread.js\n\nfunction fail(message) {\n    throw Error(message);\n}\n/** Thread utility functions. Use them to manage or inspect a `spawn()`-ed thread. */\nconst Thread = {\n    /** Return an observable that can be used to subscribe to all errors happening in the thread. */\n    errors(thread) {\n        return thread[symbols[\"a\" /* $errors */]] || fail(\"Error observable not found. Make sure to pass a thread instance as returned by the spawn() promise.\");\n    },\n    /** Return an observable that can be used to subscribe to internal events happening in the thread. Useful for debugging. */\n    events(thread) {\n        return thread[symbols[\"b\" /* $events */]] || fail(\"Events observable not found. Make sure to pass a thread instance as returned by the spawn() promise.\");\n    },\n    /** Terminate a thread. Remember to terminate every thread when you are done using it. */\n    terminate(thread) {\n        return thread[symbols[\"c\" /* $terminate */]]();\n    }\n};\n\n// CONCATENATED MODULE: ./node_modules/threads/dist-esm/master/pool.js\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nlet nextPoolID = 1;\nfunction createArray(size) {\n    const array = [];\n    for (let index = 0; index < size; index++) {\n        array.push(index);\n    }\n    return array;\n}\nfunction delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\nfunction flatMap(array, mapper) {\n    return array.reduce((flattened, element) => [...flattened, ...mapper(element)], []);\n}\nfunction slugify(text) {\n    return text.replace(/\\W/g, \" \").trim().replace(/\\s+/g, \"-\");\n}\nfunction spawnWorkers(spawnWorker, count) {\n    return createArray(count).map(() => ({\n        init: spawnWorker(),\n        runningTasks: []\n    }));\n}\nclass pool_WorkerPool {\n    constructor(spawnWorker, optionsOrSize) {\n        this.eventSubject = new subject[\"a\" /* default */]();\n        this.initErrors = [];\n        this.isClosing = false;\n        this.nextTaskID = 1;\n        this.taskQueue = [];\n        const options = typeof optionsOrSize === \"number\"\n            ? { size: optionsOrSize }\n            : optionsOrSize || {};\n        const { size = defaultPoolSize } = options;\n        this.debug = browser_default()(`threads:pool:${slugify(options.name || String(nextPoolID++))}`);\n        this.options = options;\n        this.workers = spawnWorkers(spawnWorker, size);\n        this.eventObservable = Object(multicast[\"a\" /* default */])(observable[\"a\" /* default */].from(this.eventSubject));\n        Promise.all(this.workers.map(worker => worker.init)).then(() => this.eventSubject.next({\n            type: PoolEventType.initialized,\n            size: this.workers.length\n        }), error => {\n            this.debug(\"Error while initializing pool worker:\", error);\n            this.eventSubject.error(error);\n            this.initErrors.push(error);\n        });\n    }\n    findIdlingWorker() {\n        const { concurrency = 1 } = this.options;\n        return this.workers.find(worker => worker.runningTasks.length < concurrency);\n    }\n    runPoolTask(worker, task) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const workerID = this.workers.indexOf(worker) + 1;\n            this.debug(`Running task #${task.id} on worker #${workerID}...`);\n            this.eventSubject.next({\n                type: PoolEventType.taskStart,\n                taskID: task.id,\n                workerID\n            });\n            try {\n                const returnValue = yield task.run(yield worker.init);\n                this.debug(`Task #${task.id} completed successfully`);\n                this.eventSubject.next({\n                    type: PoolEventType.taskCompleted,\n                    returnValue,\n                    taskID: task.id,\n                    workerID\n                });\n            }\n            catch (error) {\n                this.debug(`Task #${task.id} failed`);\n                this.eventSubject.next({\n                    type: PoolEventType.taskFailed,\n                    taskID: task.id,\n                    error,\n                    workerID\n                });\n            }\n        });\n    }\n    run(worker, task) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const runPromise = (() => __awaiter(this, void 0, void 0, function* () {\n                const removeTaskFromWorkersRunningTasks = () => {\n                    worker.runningTasks = worker.runningTasks.filter(someRunPromise => someRunPromise !== runPromise);\n                };\n                // Defer task execution by one tick to give handlers time to subscribe\n                yield delay(0);\n                try {\n                    yield this.runPoolTask(worker, task);\n                }\n                finally {\n                    removeTaskFromWorkersRunningTasks();\n                    if (!this.isClosing) {\n                        this.scheduleWork();\n                    }\n                }\n            }))();\n            worker.runningTasks.push(runPromise);\n        });\n    }\n    scheduleWork() {\n        this.debug(`Attempt de-queueing a task in order to run it...`);\n        const availableWorker = this.findIdlingWorker();\n        if (!availableWorker)\n            return;\n        const nextTask = this.taskQueue.shift();\n        if (!nextTask) {\n            this.debug(`Task queue is empty`);\n            this.eventSubject.next({ type: PoolEventType.taskQueueDrained });\n            return;\n        }\n        this.run(availableWorker, nextTask);\n    }\n    taskCompletion(taskID) {\n        return new Promise((resolve, reject) => {\n            const eventSubscription = this.events().subscribe(event => {\n                if (event.type === PoolEventType.taskCompleted && event.taskID === taskID) {\n                    eventSubscription.unsubscribe();\n                    resolve(event.returnValue);\n                }\n                else if (event.type === PoolEventType.taskFailed && event.taskID === taskID) {\n                    eventSubscription.unsubscribe();\n                    reject(event.error);\n                }\n                else if (event.type === PoolEventType.terminated) {\n                    eventSubscription.unsubscribe();\n                    reject(Error(\"Pool has been terminated before task was run.\"));\n                }\n            });\n        });\n    }\n    settled(allowResolvingImmediately = false) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const getCurrentlyRunningTasks = () => flatMap(this.workers, worker => worker.runningTasks);\n            const taskFailures = [];\n            const failureSubscription = this.eventObservable.subscribe(event => {\n                if (event.type === PoolEventType.taskFailed) {\n                    taskFailures.push(event.error);\n                }\n            });\n            if (this.initErrors.length > 0) {\n                return Promise.reject(this.initErrors[0]);\n            }\n            if (allowResolvingImmediately && this.taskQueue.length === 0) {\n                yield allSettled(getCurrentlyRunningTasks());\n                return taskFailures;\n            }\n            yield new Promise((resolve, reject) => {\n                const subscription = this.eventObservable.subscribe({\n                    next(event) {\n                        if (event.type === PoolEventType.taskQueueDrained) {\n                            subscription.unsubscribe();\n                            resolve();\n                        }\n                    },\n                    error: reject // make a pool-wide error reject the completed() result promise\n                });\n            });\n            yield allSettled(getCurrentlyRunningTasks());\n            failureSubscription.unsubscribe();\n            return taskFailures;\n        });\n    }\n    completed(allowResolvingImmediately = false) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const settlementPromise = this.settled(allowResolvingImmediately);\n            const earlyExitPromise = new Promise((resolve, reject) => {\n                const subscription = this.eventObservable.subscribe({\n                    next(event) {\n                        if (event.type === PoolEventType.taskQueueDrained) {\n                            subscription.unsubscribe();\n                            resolve(settlementPromise);\n                        }\n                        else if (event.type === PoolEventType.taskFailed) {\n                            subscription.unsubscribe();\n                            reject(event.error);\n                        }\n                    },\n                    error: reject // make a pool-wide error reject the completed() result promise\n                });\n            });\n            const errors = yield Promise.race([\n                settlementPromise,\n                earlyExitPromise\n            ]);\n            if (errors.length > 0) {\n                throw errors[0];\n            }\n        });\n    }\n    events() {\n        return this.eventObservable;\n    }\n    queue(taskFunction) {\n        const { maxQueuedJobs = Infinity } = this.options;\n        if (this.isClosing) {\n            throw Error(`Cannot schedule pool tasks after terminate() has been called.`);\n        }\n        if (this.initErrors.length > 0) {\n            throw this.initErrors[0];\n        }\n        const taskCompleted = () => this.taskCompletion(task.id);\n        let taskCompletionDotThen;\n        const task = {\n            id: this.nextTaskID++,\n            run: taskFunction,\n            cancel: () => {\n                if (this.taskQueue.indexOf(task) === -1)\n                    return;\n                this.taskQueue = this.taskQueue.filter(someTask => someTask !== task);\n                this.eventSubject.next({\n                    type: PoolEventType.taskCanceled,\n                    taskID: task.id\n                });\n            },\n            get then() {\n                if (!taskCompletionDotThen) {\n                    const promise = taskCompleted();\n                    taskCompletionDotThen = promise.then.bind(promise);\n                }\n                return taskCompletionDotThen;\n            }\n        };\n        if (this.taskQueue.length >= maxQueuedJobs) {\n            throw Error(\"Maximum number of pool tasks queued. Refusing to queue another one.\\n\" +\n                \"This usually happens for one of two reasons: We are either at peak \" +\n                \"workload right now or some tasks just won't finish, thus blocking the pool.\");\n        }\n        this.debug(`Queueing task #${task.id}...`);\n        this.taskQueue.push(task);\n        this.eventSubject.next({\n            type: PoolEventType.taskQueued,\n            taskID: task.id\n        });\n        this.scheduleWork();\n        return task;\n    }\n    terminate(force) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.isClosing = true;\n            if (!force) {\n                yield this.completed(true);\n            }\n            this.eventSubject.next({\n                type: PoolEventType.terminated,\n                remainingQueue: [...this.taskQueue]\n            });\n            this.eventSubject.complete();\n            yield Promise.all(this.workers.map((worker) => __awaiter(this, void 0, void 0, function* () { return Thread.terminate(yield worker.init); })));\n        });\n    }\n}\npool_WorkerPool.EventType = PoolEventType;\n/**\n * Thread pool constructor. Creates a new pool and spawns its worker threads.\n */\nfunction PoolConstructor(spawnWorker, optionsOrSize) {\n    // The function exists only so we don't need to use `new` to create a pool (we still can, though).\n    // If the Pool is a class or not is an implementation detail that should not concern the user.\n    return new pool_WorkerPool(spawnWorker, optionsOrSize);\n}\nPoolConstructor.EventType = PoolEventType;\n/**\n * Thread pool constructor. Creates a new pool and spawns its worker threads.\n */\nconst pool_Pool = PoolConstructor;\n\n// EXTERNAL MODULE: ./node_modules/threads/dist-esm/master/spawn.js\nvar spawn = __webpack_require__(26);\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/pool.js\n\n\nconst pool_defaultPoolSize = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : null;\n\n/**\n * @module pool\n */\n\n/**\n * Pool for workers to decode chunks of the images.\n */\nclass src_pool_Pool {\n  /**\n   * @constructor\n   * @param {Number} size The size of the pool. Defaults to the number of CPUs\n   *                      available. When this parameter is `null` or 0, then the\n   *                      decoding will be done in the main thread.\n   */\n  constructor(size = pool_defaultPoolSize) {\n    const worker = new master_Worker('./decoder.worker.js');\n    this.pool = pool_Pool(() => Object(spawn[\"a\" /* spawn */])(worker), size);\n  }\n\n  /**\n   * Decode the given block of bytes with the set compression method.\n   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.\n   * @returns {Promise.<ArrayBuffer>} the decoded result as a `Promise`\n   */\n  async decode(fileDirectory, buffer) {\n    return new Promise((resolve, reject) => {\n      this.pool.queue(async (decode) => {\n        try {\n          const data = await decode(fileDirectory, buffer);\n          resolve(data);\n        } catch (err) {\n          reject(err);\n        }\n      });\n    });\n  }\n\n  destroy() {\n    this.pool.terminate(true);\n  }\n}\n\n/* harmony default export */ var src_pool = (src_pool_Pool);\n\n// EXTERNAL MODULE: ./node_modules/node-libs-browser/mock/empty.js\nvar empty = __webpack_require__(0);\nvar empty_default = /*#__PURE__*/__webpack_require__.n(empty);\n\n// EXTERNAL MODULE: ./node_modules/https-browserify/index.js\nvar https_browserify = __webpack_require__(34);\nvar https_browserify_default = /*#__PURE__*/__webpack_require__.n(https_browserify);\n\n// EXTERNAL MODULE: ./node_modules/url/url.js\nvar url_url = __webpack_require__(15);\nvar url_default = /*#__PURE__*/__webpack_require__.n(url_url);\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/source.js\n\n\n\n\n\n\n\nfunction readRangeFromBlocks(blocks, rangeOffset, rangeLength) {\n  const rangeTop = rangeOffset + rangeLength;\n  const rangeData = new ArrayBuffer(rangeLength);\n  const rangeView = new Uint8Array(rangeData);\n\n  for (const block of blocks) {\n    const delta = block.offset - rangeOffset;\n    const topDelta = block.top - rangeTop;\n    let blockInnerOffset = 0;\n    let rangeInnerOffset = 0;\n    let usedBlockLength;\n\n    if (delta < 0) {\n      blockInnerOffset = -delta;\n    } else if (delta > 0) {\n      rangeInnerOffset = delta;\n    }\n\n    if (topDelta < 0) {\n      usedBlockLength = block.length - blockInnerOffset;\n    } else if (topDelta > 0) {\n      usedBlockLength = rangeTop - block.offset - blockInnerOffset;\n    }\n\n    const blockView = new Uint8Array(block.data, blockInnerOffset, usedBlockLength);\n    rangeView.set(blockView, rangeInnerOffset);\n  }\n\n  return rangeData;\n}\n\n/**\n * Interface for Source objects.\n * @interface Source\n */\n\n/**\n * @function Source#fetch\n * @summary The main method to retrieve the data from the source.\n * @param {number} offset The offset to read from in the source\n * @param {number} length The requested number of bytes\n */\n\n/**\n * @typedef {object} Block\n * @property {ArrayBuffer} data The actual data of the block.\n * @property {number} offset The actual offset of the block within the file.\n * @property {number} length The actual size of the block in bytes.\n */\n\n/**\n * Callback type for sources to request patches of data.\n * @callback requestCallback\n * @async\n * @param {number} offset The offset within the file.\n * @param {number} length The desired length of data to be read.\n * @returns {Promise<Block>} The block of data.\n */\n\n/**\n * @module source\n */\n\n/*\n * Split a list of identifiers to form groups of coherent ones\n */\nfunction getCoherentBlockGroups(blockIds) {\n  if (blockIds.length === 0) {\n    return [];\n  }\n\n  const groups = [];\n  let current = [];\n  groups.push(current);\n\n  for (let i = 0; i < blockIds.length; ++i) {\n    if (i === 0 || blockIds[i] === blockIds[i - 1] + 1) {\n      current.push(blockIds[i]);\n    } else {\n      current = [blockIds[i]];\n      groups.push(current);\n    }\n  }\n  return groups;\n}\n\n\n/*\n * Promisified wrapper around 'setTimeout' to allow 'await'\n */\nasync function wait(milliseconds) {\n  return new Promise((resolve) => setTimeout(resolve, milliseconds));\n}\n\n/**\n * BlockedSource - an abstraction of (remote) files.\n * @implements Source\n */\nclass BlockedSource {\n  /**\n   * @param {requestCallback} retrievalFunction Callback function to request data\n   * @param {object} options Additional options\n   * @param {object} options.blockSize Size of blocks to be fetched\n   */\n  constructor(retrievalFunction, { blockSize = 65536 } = {}) {\n    this.retrievalFunction = retrievalFunction;\n    this.blockSize = blockSize;\n\n    // currently running block requests\n    this.blockRequests = new Map();\n\n    // already retrieved blocks\n    this.blocks = new Map();\n\n    // block ids waiting for a batched request. Either a Set or null\n    this.blockIdsAwaitingRequest = null;\n  }\n\n  /**\n   * Fetch a subset of the file.\n   * @param {number} offset The offset within the file to read from.\n   * @param {number} length The length in bytes to read from.\n   * @returns {ArrayBuffer} The subset of the file.\n   */\n  async fetch(offset, length, immediate = false) {\n    const top = offset + length;\n\n    // calculate what blocks intersect the specified range (offset + length)\n    // determine what blocks are already stored or beeing requested\n    const firstBlockOffset = Math.floor(offset / this.blockSize) * this.blockSize;\n    const allBlockIds = [];\n    const missingBlockIds = [];\n    const blockRequests = [];\n\n    for (let current = firstBlockOffset; current < top; current += this.blockSize) {\n      const blockId = Math.floor(current / this.blockSize);\n      if (!this.blocks.has(blockId) && !this.blockRequests.has(blockId)) {\n        missingBlockIds.push(blockId);\n      }\n      if (this.blockRequests.has(blockId)) {\n        blockRequests.push(this.blockRequests.get(blockId));\n      }\n      allBlockIds.push(blockId);\n    }\n\n    // determine whether there are already blocks in the queue to be requested\n    // if so, add the missing blocks to this list\n    if (!this.blockIdsAwaitingRequest) {\n      this.blockIdsAwaitingRequest = new Set(missingBlockIds);\n    } else {\n      for (let i = 0; i < missingBlockIds.length; ++i) {\n        const id = missingBlockIds[i];\n        this.blockIdsAwaitingRequest.add(id);\n      }\n    }\n\n    // in immediate mode, we don't want to wait for possible additional requests coming in\n    if (!immediate) {\n      await wait();\n    }\n\n    // determine if we are the thread to start the requests.\n    if (this.blockIdsAwaitingRequest) {\n      // get all coherent blocks as groups to be requested in a single request\n      const groups = getCoherentBlockGroups(\n        Array.from(this.blockIdsAwaitingRequest).sort(),\n      );\n\n      // iterate over all blocks\n      for (const group of groups) {\n        // fetch a group as in a single request\n        const request = this.requestData(\n          group[0] * this.blockSize, group.length * this.blockSize,\n        );\n\n        // for each block in the request, make a small 'splitter',\n        // i.e: wait for the request to finish, then cut out the bytes for\n        // that block and store it there.\n        // we keep that as a promise in 'blockRequests' to allow waiting on\n        // a single block.\n        for (let i = 0; i < group.length; ++i) {\n          const id = group[i];\n          this.blockRequests.set(id, (async () => {\n            const response = await request;\n            const o = i * this.blockSize;\n            const t = Math.min(o + this.blockSize, response.data.byteLength);\n            const data = response.data.slice(o, t);\n            this.blockRequests.delete(id);\n            this.blocks.set(id, {\n              data,\n              offset: response.offset + o,\n              length: data.byteLength,\n              top: response.offset + t,\n            });\n          })());\n        }\n      }\n      this.blockIdsAwaitingRequest = null;\n    }\n\n    // get a list of currently running requests for the blocks still missing\n    const missingRequests = [];\n    for (const blockId of missingBlockIds) {\n      if (this.blockRequests.has(blockId)) {\n        missingRequests.push(this.blockRequests.get(blockId));\n      }\n    }\n\n    // wait for all missing requests to finish\n    await Promise.all(missingRequests);\n    await Promise.all(blockRequests);\n\n    // now get all blocks for the request and return a summary buffer\n    const blocks = allBlockIds.map((id) => this.blocks.get(id));\n    return readRangeFromBlocks(blocks, offset, length);\n  }\n\n  async requestData(requestedOffset, requestedLength) {\n    const response = await this.retrievalFunction(requestedOffset, requestedLength);\n    if (!response.length) {\n      response.length = response.data.byteLength;\n    } else if (response.length !== response.data.byteLength) {\n      response.data = response.data.slice(0, response.length);\n    }\n    response.top = response.offset + response.length;\n    return response;\n  }\n}\n\n/**\n * Create a new source to read from a remote file using the\n * [fetch]{@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API} API.\n * @param {string} url The URL to send requests to.\n * @param {Object} [options] Additional options.\n * @param {Number} [options.blockSize] The block size to use.\n * @param {object} [options.headers] Additional headers to be sent to the server.\n * @returns The constructed source\n */\nfunction makeFetchSource(url, { headers = {}, blockSize } = {}) {\n  return new BlockedSource(async (offset, length) => {\n    const response = await fetch(url, {\n      headers: {\n        ...headers, Range: `bytes=${offset}-${offset + length - 1}`,\n      },\n    });\n\n    // check the response was okay and if the server actually understands range requests\n    if (!response.ok) {\n      throw new Error('Error fetching data.');\n    } else if (response.status === 206) {\n      const data = response.arrayBuffer\n        ? await response.arrayBuffer() : (await response.buffer()).buffer;\n      return {\n        data,\n        offset,\n        length,\n      };\n    } else {\n      const data = response.arrayBuffer\n        ? await response.arrayBuffer() : (await response.buffer()).buffer;\n      return {\n        data,\n        offset: 0,\n        length: data.byteLength,\n      };\n    }\n  }, { blockSize });\n}\n\n/**\n * Create a new source to read from a remote file using the\n * [XHR]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest} API.\n * @param {string} url The URL to send requests to.\n * @param {Object} [options] Additional options.\n * @param {Number} [options.blockSize] The block size to use.\n * @param {object} [options.headers] Additional headers to be sent to the server.\n * @returns The constructed source\n */\nfunction makeXHRSource(url, { headers = {}, blockSize } = {}) {\n  return new BlockedSource(async (offset, length) => {\n    return new Promise((resolve, reject) => {\n      const request = new XMLHttpRequest();\n      request.open('GET', url);\n      request.responseType = 'arraybuffer';\n      const requestHeaders = { ...headers, Range: `bytes=${offset}-${offset + length - 1}` };\n      for (const [key, value] of Object.entries(requestHeaders)) {\n        request.setRequestHeader(key, value);\n      }\n\n      request.onload = () => {\n        const data = request.response;\n        if (request.status === 206) {\n          resolve({\n            data,\n            offset,\n            length,\n          });\n        } else {\n          resolve({\n            data,\n            offset: 0,\n            length: data.byteLength,\n          });\n        }\n      };\n      request.onerror = reject;\n      request.send();\n    });\n  }, { blockSize });\n}\n\n/**\n * Create a new source to read from a remote file using the node\n * [http]{@link https://nodejs.org/api/http.html} API.\n * @param {string} url The URL to send requests to.\n * @param {Object} [options] Additional options.\n * @param {Number} [options.blockSize] The block size to use.\n * @param {object} [options.headers] Additional headers to be sent to the server.\n */\nfunction makeHttpSource(url, { headers = {}, blockSize } = {}) {\n  return new BlockedSource(async (offset, length) => new Promise((resolve, reject) => {\n    const parsed = url_default.a.parse(url);\n    const request = (parsed.protocol === 'http:' ? empty_default.a : https_browserify_default.a).get(\n      { ...parsed,\n        headers: {\n          ...headers, Range: `bytes=${offset}-${offset + length - 1}`,\n        } }, (result) => {\n        const chunks = [];\n        // collect chunks\n        result.on('data', (chunk) => {\n          chunks.push(chunk);\n        });\n\n        // concatenate all chunks and resolve the promise with the resulting buffer\n        result.on('end', () => {\n          const data = empty[\"Buffer\"].concat(chunks).buffer;\n          resolve({\n            data,\n            offset,\n            length: data.byteLength,\n          });\n        });\n      },\n    );\n    request.on('error', reject);\n  }), { blockSize });\n}\n\n/**\n * Create a new source to read from a remote file. Uses either XHR, fetch or nodes http API.\n * @param {string} url The URL to send requests to.\n * @param {Object} [options] Additional options.\n * @param {Boolean} [options.forceXHR] Force the usage of XMLHttpRequest.\n * @param {Number} [options.blockSize] The block size to use.\n * @param {object} [options.headers] Additional headers to be sent to the server.\n * @returns The constructed source\n */\nfunction makeRemoteSource(url, options) {\n  const { forceXHR } = options;\n  if (typeof fetch === 'function' && !forceXHR) {\n    return makeFetchSource(url, options);\n  }\n  if (typeof XMLHttpRequest !== 'undefined') {\n    return makeXHRSource(url, options);\n  }\n  if (empty_default.a.get) {\n    return makeHttpSource(url, options);\n  }\n  throw new Error('No remote source available');\n}\n\n/**\n * Create a new source to read from a local\n * [ArrayBuffer]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer}.\n * @param {ArrayBuffer} arrayBuffer The ArrayBuffer to parse the GeoTIFF from.\n * @returns The constructed source\n */\nfunction makeBufferSource(arrayBuffer) {\n  return {\n    async fetch(offset, length) {\n      return arrayBuffer.slice(offset, offset + length);\n    },\n  };\n}\n\nfunction closeAsync(fd) {\n  return new Promise((resolve, reject) => {\n    Object(empty[\"close\"])(fd, err => {\n      if (err) {\n        reject(err)\n      } else {\n        resolve()\n      }\n    });\n  });\n}\n\nfunction openAsync(path, flags, mode = undefined) {\n  return new Promise((resolve, reject) => {\n    Object(empty[\"open\"])(path, flags, mode, (err, fd) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(fd);\n      }\n    });\n  });\n}\n\nfunction readAsync(...args) {\n  return new Promise((resolve, reject) => {\n    Object(empty[\"read\"])(...args, (err, bytesRead, buffer) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve({ bytesRead, buffer });\n      }\n    });\n  });\n}\n\n/**\n * Creates a new source using the node filesystem API.\n * @param {string} path The path to the file in the local filesystem.\n * @returns The constructed source\n */\nfunction makeFileSource(path) {\n  const fileOpen = openAsync(path, 'r');\n\n  return {\n    async fetch(offset, length) {\n      const fd = await fileOpen;\n      const { buffer } = await readAsync(fd, empty[\"Buffer\"].alloc(length), 0, length, offset);\n      return buffer.buffer;\n    },\n    async close() {\n      const fd = await fileOpen;\n      return await closeAsync(fd);\n    },\n  };\n}\n\n/**\n * Create a new source from a given file/blob.\n * @param {Blob} file The file or blob to read from.\n * @returns The constructed source\n */\nfunction makeFileReaderSource(file) {\n  return {\n    async fetch(offset, length) {\n      return new Promise((resolve, reject) => {\n        const blob = file.slice(offset, offset + length);\n        const reader = new FileReader();\n        reader.onload = (event) => resolve(event.target.result);\n        reader.onerror = reject;\n        reader.readAsArrayBuffer(blob);\n      });\n    },\n  };\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/utils.js\nfunction utils_assign(target, source) {\n  for (const key in source) {\n    if (source.hasOwnProperty(key)) {\n      target[key] = source[key];\n    }\n  }\n}\n\nfunction chunk(iterable, length) {\n  const results = [];\n  const lengthOfIterable = iterable.length;\n  for (let i = 0; i < lengthOfIterable; i += length) {\n    const chunked = [];\n    for (let ci = i; ci < i + length; ci++) {\n      chunked.push(iterable[ci]);\n    }\n    results.push(chunked);\n  }\n  return results;\n}\n\nfunction endsWith(string, expectedEnding) {\n  if (string.length < expectedEnding.length) {\n    return false;\n  }\n  const actualEnding = string.substr(string.length - expectedEnding.length);\n  return actualEnding === expectedEnding;\n}\n\nfunction forEach(iterable, func) {\n  const { length } = iterable;\n  for (let i = 0; i < length; i++) {\n    func(iterable[i], i);\n  }\n}\n\nfunction invert(oldObj) {\n  const newObj = {};\n  for (const key in oldObj) {\n    if (oldObj.hasOwnProperty(key)) {\n      const value = oldObj[key];\n      newObj[value] = key;\n    }\n  }\n  return newObj;\n}\n\nfunction range(n) {\n  const results = [];\n  for (let i = 0; i < n; i++) {\n    results.push(i);\n  }\n  return results;\n}\n\nfunction times(numTimes, func) {\n  const results = [];\n  for (let i = 0; i < numTimes; i++) {\n    results.push(func(i));\n  }\n  return results;\n}\n\nfunction utils_toArray(iterable) {\n  const results = [];\n  const { length } = iterable;\n  for (let i = 0; i < length; i++) {\n    results.push(iterable[i]);\n  }\n  return results;\n}\n\nfunction toArrayRecursively(input) {\n  if (input.length) {\n    return utils_toArray(input).map(toArrayRecursively);\n  }\n  return input;\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/geotiffwriter.js\n/*\n  Some parts of this file are based on UTIF.js,\n  which was released under the MIT License.\n  You can view that here:\n  https://github.com/photopea/UTIF.js/blob/master/LICENSE\n*/\n\n\n\nconst tagName2Code = invert(fieldTagNames);\nconst geoKeyName2Code = invert(geoKeyNames);\nconst name2code = {};\nutils_assign(name2code, tagName2Code);\nutils_assign(name2code, geoKeyName2Code);\nconst typeName2byte = invert(fieldTypeNames);\n\n// config variables\nconst numBytesInIfd = 1000;\n\nconst _binBE = {\n  nextZero: (data, o) => {\n    let oincr = o;\n    while (data[oincr] !== 0) {\n      oincr++;\n    }\n    return oincr;\n  },\n  readUshort: (buff, p) => {\n    return (buff[p] << 8) | buff[p + 1];\n  },\n  readShort: (buff, p) => {\n    const a = _binBE.ui8;\n    a[0] = buff[p + 1];\n    a[1] = buff[p + 0];\n    return _binBE.i16[0];\n  },\n  readInt: (buff, p) => {\n    const a = _binBE.ui8;\n    a[0] = buff[p + 3];\n    a[1] = buff[p + 2];\n    a[2] = buff[p + 1];\n    a[3] = buff[p + 0];\n    return _binBE.i32[0];\n  },\n  readUint: (buff, p) => {\n    const a = _binBE.ui8;\n    a[0] = buff[p + 3];\n    a[1] = buff[p + 2];\n    a[2] = buff[p + 1];\n    a[3] = buff[p + 0];\n    return _binBE.ui32[0];\n  },\n  readASCII: (buff, p, l) => {\n    return l.map((i) => String.fromCharCode(buff[p + i])).join('');\n  },\n  readFloat: (buff, p) => {\n    const a = _binBE.ui8;\n    times(4, (i) => {\n      a[i] = buff[p + 3 - i];\n    });\n    return _binBE.fl32[0];\n  },\n  readDouble: (buff, p) => {\n    const a = _binBE.ui8;\n    times(8, (i) => {\n      a[i] = buff[p + 7 - i];\n    });\n    return _binBE.fl64[0];\n  },\n  writeUshort: (buff, p, n) => {\n    buff[p] = (n >> 8) & 255;\n    buff[p + 1] = n & 255;\n  },\n  writeUint: (buff, p, n) => {\n    buff[p] = (n >> 24) & 255;\n    buff[p + 1] = (n >> 16) & 255;\n    buff[p + 2] = (n >> 8) & 255;\n    buff[p + 3] = (n >> 0) & 255;\n  },\n  writeASCII: (buff, p, s) => {\n    times(s.length, (i) => {\n      buff[p + i] = s.charCodeAt(i);\n    });\n  },\n  ui8: new Uint8Array(8),\n};\n\n_binBE.fl64 = new Float64Array(_binBE.ui8.buffer);\n\n_binBE.writeDouble = (buff, p, n) => {\n  _binBE.fl64[0] = n;\n  times(8, (i) => {\n    buff[p + i] = _binBE.ui8[7 - i];\n  });\n};\n\n\nconst _writeIFD = (bin, data, _offset, ifd) => {\n  let offset = _offset;\n\n  const keys = Object.keys(ifd).filter((key) => {\n    return key !== undefined && key !== null && key !== 'undefined';\n  });\n\n  bin.writeUshort(data, offset, keys.length);\n  offset += 2;\n\n  let eoff = offset + (12 * keys.length) + 4;\n\n  for (const key of keys) {\n    let tag = null;\n    if (typeof key === 'number') {\n      tag = key;\n    } else if (typeof key === 'string') {\n      tag = parseInt(key, 10);\n    }\n\n    const typeName = fieldTagTypes[tag];\n    const typeNum = typeName2byte[typeName];\n\n    if (typeName == null || typeName === undefined || typeof typeName === 'undefined') {\n      throw new Error(`unknown type of tag: ${tag}`);\n    }\n\n    let val = ifd[key];\n\n    if (typeof val === 'undefined') {\n      throw new Error(`failed to get value for key ${key}`);\n    }\n\n    // ASCIIZ format with trailing 0 character\n    // http://www.fileformat.info/format/tiff/corion.htm\n    // https://stackoverflow.com/questions/7783044/whats-the-difference-between-asciiz-vs-ascii\n    if (typeName === 'ASCII' && typeof val === 'string' && endsWith(val, '\\u0000') === false) {\n      val += '\\u0000';\n    }\n\n    const num = val.length;\n\n    bin.writeUshort(data, offset, tag);\n    offset += 2;\n\n    bin.writeUshort(data, offset, typeNum);\n    offset += 2;\n\n    bin.writeUint(data, offset, num);\n    offset += 4;\n\n    let dlen = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][typeNum] * num;\n    let toff = offset;\n\n    if (dlen > 4) {\n      bin.writeUint(data, offset, eoff);\n      toff = eoff;\n    }\n\n    if (typeName === 'ASCII') {\n      bin.writeASCII(data, toff, val);\n    } else if (typeName === 'SHORT') {\n      times(num, (i) => {\n        bin.writeUshort(data, toff + (2 * i), val[i]);\n      });\n    } else if (typeName === 'LONG') {\n      times(num, (i) => {\n        bin.writeUint(data, toff + (4 * i), val[i]);\n      });\n    } else if (typeName === 'RATIONAL') {\n      times(num, (i) => {\n        bin.writeUint(data, toff + (8 * i), Math.round(val[i] * 10000));\n        bin.writeUint(data, toff + (8 * i) + 4, 10000);\n      });\n    } else if (typeName === 'DOUBLE') {\n      times(num, (i) => {\n        bin.writeDouble(data, toff + (8 * i), val[i]);\n      });\n    }\n\n    if (dlen > 4) {\n      dlen += (dlen & 1);\n      eoff += dlen;\n    }\n\n    offset += 4;\n  }\n\n  return [offset, eoff];\n};\n\nconst encodeIfds = (ifds) => {\n  const data = new Uint8Array(numBytesInIfd);\n  let offset = 4;\n  const bin = _binBE;\n\n  // set big-endian byte-order\n  // https://en.wikipedia.org/wiki/TIFF#Byte_order\n  data[0] = 77;\n  data[1] = 77;\n\n  // set format-version number\n  // https://en.wikipedia.org/wiki/TIFF#Byte_order\n  data[3] = 42;\n\n  let ifdo = 8;\n\n  bin.writeUint(data, offset, ifdo);\n\n  offset += 4;\n\n  ifds.forEach((ifd, i) => {\n    const noffs = _writeIFD(bin, data, ifdo, ifd);\n    ifdo = noffs[1];\n    if (i < ifds.length - 1) {\n      bin.writeUint(data, noffs[0], ifdo);\n    }\n  });\n\n  if (data.slice) {\n    return data.slice(0, ifdo).buffer;\n  }\n\n  // node hasn't implemented slice on Uint8Array yet\n  const result = new Uint8Array(ifdo);\n  for (let i = 0; i < ifdo; i++) {\n    result[i] = data[i];\n  }\n  return result.buffer;\n};\n\nconst encodeImage = (values, width, height, metadata) => {\n  if (height === undefined || height === null) {\n    throw new Error(`you passed into encodeImage a width of type ${height}`);\n  }\n\n  if (width === undefined || width === null) {\n    throw new Error(`you passed into encodeImage a width of type ${width}`);\n  }\n\n  const ifd = {\n    256: [width], // ImageWidth\n    257: [height], // ImageLength\n    273: [numBytesInIfd], // strips offset\n    278: [height], // RowsPerStrip\n    305: 'geotiff.js', // no array for ASCII(Z)\n  };\n\n  if (metadata) {\n    for (const i in metadata) {\n      if (metadata.hasOwnProperty(i)) {\n        ifd[i] = metadata[i];\n      }\n    }\n  }\n\n  const prfx = new Uint8Array(encodeIfds([ifd]));\n\n  const img = new Uint8Array(values);\n\n  const samplesPerPixel = ifd[277];\n\n  const data = new Uint8Array(numBytesInIfd + (width * height * samplesPerPixel));\n  times(prfx.length, (i) => {\n    data[i] = prfx[i];\n  });\n  forEach(img, (value, i) => {\n    data[numBytesInIfd + i] = value;\n  });\n\n  return data.buffer;\n};\n\nconst convertToTids = (input) => {\n  const result = {};\n  for (const key in input) {\n    if (key !== 'StripOffsets') {\n      if (!name2code[key]) {\n        console.error(key, 'not in name2code:', Object.keys(name2code));\n      }\n      result[name2code[key]] = input[key];\n    }\n  }\n  return result;\n};\n\nconst geotiffwriter_toArray = (input) => {\n  if (Array.isArray(input)) {\n    return input;\n  }\n  return [input];\n};\n\nconst metadataDefaults = [\n  ['Compression', 1], // no compression\n  ['PlanarConfiguration', 1],\n  ['XPosition', 0],\n  ['YPosition', 0],\n  ['ResolutionUnit', 1], // Code 1 for actual pixel count or 2 for pixels per inch.\n  ['ExtraSamples', 0], // should this be an array??\n  ['GeoAsciiParams', 'WGS 84\\u0000'],\n  ['ModelTiepoint', [0, 0, 0, -180, 90, 0]], // raster fits whole globe\n  ['GTModelTypeGeoKey', 2],\n  ['GTRasterTypeGeoKey', 1],\n  ['GeographicTypeGeoKey', 4326],\n  ['GeogCitationGeoKey', 'WGS 84'],\n];\n\nfunction writeGeotiff(data, metadata) {\n  const isFlattened = typeof data[0] === 'number';\n\n  let height;\n  let numBands;\n  let width;\n  let flattenedValues;\n\n  if (isFlattened) {\n    height = metadata.height || metadata.ImageLength;\n    width = metadata.width || metadata.ImageWidth;\n    numBands = data.length / (height * width);\n    flattenedValues = data;\n  } else {\n    numBands = data.length;\n    height = data[0].length;\n    width = data[0][0].length;\n    flattenedValues = [];\n    times(height, (rowIndex) => {\n      times(width, (columnIndex) => {\n        times(numBands, (bandIndex) => {\n          flattenedValues.push(data[bandIndex][rowIndex][columnIndex]);\n        });\n      });\n    });\n  }\n\n  metadata.ImageLength = height;\n  delete metadata.height;\n  metadata.ImageWidth = width;\n  delete metadata.width;\n\n  // consult https://www.loc.gov/preservation/digital/formats/content/tiff_tags.shtml\n\n  if (!metadata.BitsPerSample) {\n    metadata.BitsPerSample = times(numBands, () => 8);\n  }\n\n  metadataDefaults.forEach((tag) => {\n    const key = tag[0];\n    if (!metadata[key]) {\n      const value = tag[1];\n      metadata[key] = value;\n    }\n  });\n\n  // The color space of the image data.\n  // 1=black is zero and 2=RGB.\n  if (!metadata.PhotometricInterpretation) {\n    metadata.PhotometricInterpretation = metadata.BitsPerSample.length === 3 ? 2 : 1;\n  }\n\n  // The number of components per pixel.\n  if (!metadata.SamplesPerPixel) {\n    metadata.SamplesPerPixel = [numBands];\n  }\n\n  if (!metadata.StripByteCounts) {\n    // we are only writing one strip\n    metadata.StripByteCounts = [numBands * height * width];\n  }\n\n  if (!metadata.ModelPixelScale) {\n    // assumes raster takes up exactly the whole globe\n    metadata.ModelPixelScale = [360 / width, 180 / height, 0];\n  }\n\n  if (!metadata.SampleFormat) {\n    metadata.SampleFormat = times(numBands, () => 1);\n  }\n\n\n  const geoKeys = Object.keys(metadata)\n    .filter((key) => endsWith(key, 'GeoKey'))\n    .sort((a, b) => name2code[a] - name2code[b]);\n\n  if (!metadata.GeoKeyDirectory) {\n    const NumberOfKeys = geoKeys.length;\n\n    const GeoKeyDirectory = [1, 1, 0, NumberOfKeys];\n    geoKeys.forEach((geoKey) => {\n      const KeyID = Number(name2code[geoKey]);\n      GeoKeyDirectory.push(KeyID);\n\n      let Count;\n      let TIFFTagLocation;\n      let valueOffset;\n      if (fieldTagTypes[KeyID] === 'SHORT') {\n        Count = 1;\n        TIFFTagLocation = 0;\n        valueOffset = metadata[geoKey];\n      } else if (geoKey === 'GeogCitationGeoKey') {\n        Count = metadata.GeoAsciiParams.length;\n        TIFFTagLocation = Number(name2code.GeoAsciiParams);\n        valueOffset = 0;\n      } else {\n        console.log(`[geotiff.js] couldn't get TIFFTagLocation for ${geoKey}`);\n      }\n      GeoKeyDirectory.push(TIFFTagLocation);\n      GeoKeyDirectory.push(Count);\n      GeoKeyDirectory.push(valueOffset);\n    });\n    metadata.GeoKeyDirectory = GeoKeyDirectory;\n  }\n\n  // delete GeoKeys from metadata, because stored in GeoKeyDirectory tag\n  for (const geoKey in geoKeys) {\n    if (geoKeys.hasOwnProperty(geoKey)) {\n      delete metadata[geoKey];\n    }\n  }\n\n  [\n    'Compression',\n    'ExtraSamples',\n    'GeographicTypeGeoKey',\n    'GTModelTypeGeoKey',\n    'GTRasterTypeGeoKey',\n    'ImageLength', // synonym of ImageHeight\n    'ImageWidth',\n    'PhotometricInterpretation',\n    'PlanarConfiguration',\n    'ResolutionUnit',\n    'SamplesPerPixel',\n    'XPosition',\n    'YPosition',\n  ].forEach((name) => {\n    if (metadata[name]) {\n      metadata[name] = geotiffwriter_toArray(metadata[name]);\n    }\n  });\n\n\n  const encodedMetadata = convertToTids(metadata);\n\n  const outputImage = encodeImage(flattenedValues, width, height, encodedMetadata);\n\n  return outputImage;\n}\n\n// CONCATENATED MODULE: ./node_modules/geotiff/src/geotiff.js\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getFieldTypeLength(fieldType) {\n  switch (fieldType) {\n    case fieldTypes.BYTE: case fieldTypes.ASCII: case fieldTypes.SBYTE: case fieldTypes.UNDEFINED:\n      return 1;\n    case fieldTypes.SHORT: case fieldTypes.SSHORT:\n      return 2;\n    case fieldTypes.LONG: case fieldTypes.SLONG: case fieldTypes.FLOAT: case fieldTypes.IFD:\n      return 4;\n    case fieldTypes.RATIONAL: case fieldTypes.SRATIONAL: case fieldTypes.DOUBLE:\n    case fieldTypes.LONG8: case fieldTypes.SLONG8: case fieldTypes.IFD8:\n      return 8;\n    default:\n      throw new RangeError(`Invalid field type: ${fieldType}`);\n  }\n}\n\nfunction parseGeoKeyDirectory(fileDirectory) {\n  const rawGeoKeyDirectory = fileDirectory.GeoKeyDirectory;\n  if (!rawGeoKeyDirectory) {\n    return null;\n  }\n\n  const geoKeyDirectory = {};\n  for (let i = 4; i <= rawGeoKeyDirectory[3] * 4; i += 4) {\n    const key = geoKeyNames[rawGeoKeyDirectory[i]];\n    const location = (rawGeoKeyDirectory[i + 1])\n      ? (fieldTagNames[rawGeoKeyDirectory[i + 1]]) : null;\n    const count = rawGeoKeyDirectory[i + 2];\n    const offset = rawGeoKeyDirectory[i + 3];\n\n    let value = null;\n    if (!location) {\n      value = offset;\n    } else {\n      value = fileDirectory[location];\n      if (typeof value === 'undefined' || value === null) {\n        throw new Error(`Could not get value of geoKey '${key}'.`);\n      } else if (typeof value === 'string') {\n        value = value.substring(offset, offset + count - 1);\n      } else if (value.subarray) {\n        value = value.subarray(offset, offset + count);\n        if (count === 1) {\n          value = value[0];\n        }\n      }\n    }\n    geoKeyDirectory[key] = value;\n  }\n  return geoKeyDirectory;\n}\n\nfunction getValues(dataSlice, fieldType, count, offset) {\n  let values = null;\n  let readMethod = null;\n  const fieldTypeLength = getFieldTypeLength(fieldType);\n\n  switch (fieldType) {\n    case fieldTypes.BYTE: case fieldTypes.ASCII: case fieldTypes.UNDEFINED:\n      values = new Uint8Array(count); readMethod = dataSlice.readUint8;\n      break;\n    case fieldTypes.SBYTE:\n      values = new Int8Array(count); readMethod = dataSlice.readInt8;\n      break;\n    case fieldTypes.SHORT:\n      values = new Uint16Array(count); readMethod = dataSlice.readUint16;\n      break;\n    case fieldTypes.SSHORT:\n      values = new Int16Array(count); readMethod = dataSlice.readInt16;\n      break;\n    case fieldTypes.LONG: case fieldTypes.IFD:\n      values = new Uint32Array(count); readMethod = dataSlice.readUint32;\n      break;\n    case fieldTypes.SLONG:\n      values = new Int32Array(count); readMethod = dataSlice.readInt32;\n      break;\n    case fieldTypes.LONG8: case fieldTypes.IFD8:\n      values = new Array(count); readMethod = dataSlice.readUint64;\n      break;\n    case fieldTypes.SLONG8:\n      values = new Array(count); readMethod = dataSlice.readInt64;\n      break;\n    case fieldTypes.RATIONAL:\n      values = new Uint32Array(count * 2); readMethod = dataSlice.readUint32;\n      break;\n    case fieldTypes.SRATIONAL:\n      values = new Int32Array(count * 2); readMethod = dataSlice.readInt32;\n      break;\n    case fieldTypes.FLOAT:\n      values = new Float32Array(count); readMethod = dataSlice.readFloat32;\n      break;\n    case fieldTypes.DOUBLE:\n      values = new Float64Array(count); readMethod = dataSlice.readFloat64;\n      break;\n    default:\n      throw new RangeError(`Invalid field type: ${fieldType}`);\n  }\n\n  // normal fields\n  if (!(fieldType === fieldTypes.RATIONAL || fieldType === fieldTypes.SRATIONAL)) {\n    for (let i = 0; i < count; ++i) {\n      values[i] = readMethod.call(\n        dataSlice, offset + (i * fieldTypeLength),\n      );\n    }\n  } else { // RATIONAL or SRATIONAL\n    for (let i = 0; i < count; i += 2) {\n      values[i] = readMethod.call(\n        dataSlice, offset + (i * fieldTypeLength),\n      );\n      values[i + 1] = readMethod.call(\n        dataSlice, offset + ((i * fieldTypeLength) + 4),\n      );\n    }\n  }\n\n  if (fieldType === fieldTypes.ASCII) {\n    return String.fromCharCode.apply(null, values);\n  }\n  return values;\n}\n\n/**\n * Data class to store the parsed file directory, geo key directory and\n * offset to the next IFD\n */\nclass ImageFileDirectory {\n  constructor(fileDirectory, geoKeyDirectory, nextIFDByteOffset) {\n    this.fileDirectory = fileDirectory;\n    this.geoKeyDirectory = geoKeyDirectory;\n    this.nextIFDByteOffset = nextIFDByteOffset;\n  }\n}\n\n/**\n * Error class for cases when an IFD index was requested, that does not exist\n * in the file.\n */\nclass GeoTIFFImageIndexError extends Error {\n  constructor(index) {\n    super(`No image at index ${index}`);\n    this.index = index;\n  }\n}\n\n\nclass GeoTIFFBase {\n  /**\n   * (experimental) Reads raster data from the best fitting image. This function uses\n   * the image with the lowest resolution that is still a higher resolution than the\n   * requested resolution.\n   * When specified, the `bbox` option is translated to the `window` option and the\n   * `resX` and `resY` to `width` and `height` respectively.\n   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected\n   * image is called and the result returned.\n   * @see GeoTIFFImage.readRasters\n   * @param {Object} [options={}] optional parameters\n   * @param {Array} [options.window=whole image] the subset to read data from.\n   * @param {Array} [options.bbox=whole image] the subset to read data from in\n   *                                           geographical coordinates.\n   * @param {Array} [options.samples=all samples] the selection of samples to read from.\n   * @param {Boolean} [options.interleave=false] whether the data shall be read\n   *                                             in one single array or separate\n   *                                             arrays.\n   * @param {Number} [options.pool=null] The optional decoder pool to use.\n   * @param {Number} [options.width] The desired width of the output. When the width is not the\n   *                                 same as the images, resampling will be performed.\n   * @param {Number} [options.height] The desired height of the output. When the width is not the\n   *                                  same as the images, resampling will be performed.\n   * @param {String} [options.resampleMethod='nearest'] The desired resampling method.\n   * @param {Number|Number[]} [options.fillValue] The value to use for parts of the image\n   *                                              outside of the images extent. When multiple\n   *                                              samples are requested, an array of fill values\n   *                                              can be passed.\n   * @returns {Promise.<(TypedArray|TypedArray[])>} the decoded arrays as a promise\n   */\n  async readRasters(options = {}) {\n    const { window: imageWindow, width, height } = options;\n    let { resX, resY, bbox } = options;\n\n    const firstImage = await this.getImage();\n    let usedImage = firstImage;\n    const imageCount = await this.getImageCount();\n    const imgBBox = firstImage.getBoundingBox();\n\n    if (imageWindow && bbox) {\n      throw new Error('Both \"bbox\" and \"window\" passed.');\n    }\n\n    // if width/height is passed, transform it to resolution\n    if (width || height) {\n      // if we have an image window (pixel coordinates), transform it to a BBox\n      // using the origin/resolution of the first image.\n      if (imageWindow) {\n        const [oX, oY] = firstImage.getOrigin();\n        const [rX, rY] = firstImage.getResolution();\n\n        bbox = [\n          oX + (imageWindow[0] * rX),\n          oY + (imageWindow[1] * rY),\n          oX + (imageWindow[2] * rX),\n          oY + (imageWindow[3] * rY),\n        ];\n      }\n\n      // if we have a bbox (or calculated one)\n\n      const usedBBox = bbox || imgBBox;\n\n      if (width) {\n        if (resX) {\n          throw new Error('Both width and resX passed');\n        }\n        resX = (usedBBox[2] - usedBBox[0]) / width;\n      }\n      if (height) {\n        if (resY) {\n          throw new Error('Both width and resY passed');\n        }\n        resY = (usedBBox[3] - usedBBox[1]) / height;\n      }\n    }\n\n    // if resolution is set or calculated, try to get the image with the worst acceptable resolution\n    if (resX || resY) {\n      const allImages = [];\n      for (let i = 0; i < imageCount; ++i) {\n        const image = await this.getImage(i);\n        const { SubfileType: subfileType, NewSubfileType: newSubfileType } = image.fileDirectory;\n        if (i === 0 || subfileType === 2 || newSubfileType & 1) {\n          allImages.push(image);\n        }\n      }\n\n      allImages.sort((a, b) => a.getWidth() - b.getWidth());\n      for (let i = 0; i < allImages.length; ++i) {\n        const image = allImages[i];\n        const imgResX = (imgBBox[2] - imgBBox[0]) / image.getWidth();\n        const imgResY = (imgBBox[3] - imgBBox[1]) / image.getHeight();\n\n        usedImage = image;\n        if ((resX && resX > imgResX) || (resY && resY > imgResY)) {\n          break;\n        }\n      }\n    }\n\n    let wnd = imageWindow;\n    if (bbox) {\n      const [oX, oY] = firstImage.getOrigin();\n      const [imageResX, imageResY] = usedImage.getResolution(firstImage);\n\n      wnd = [\n        Math.round((bbox[0] - oX) / imageResX),\n        Math.round((bbox[1] - oY) / imageResY),\n        Math.round((bbox[2] - oX) / imageResX),\n        Math.round((bbox[3] - oY) / imageResY),\n      ];\n      wnd = [\n        Math.min(wnd[0], wnd[2]),\n        Math.min(wnd[1], wnd[3]),\n        Math.max(wnd[0], wnd[2]),\n        Math.max(wnd[1], wnd[3]),\n      ];\n    }\n\n    return usedImage.readRasters({ ...options, window: wnd });\n  }\n}\n\n\n/**\n * The abstraction for a whole GeoTIFF file.\n * @augments GeoTIFFBase\n */\nclass geotiff_GeoTIFF extends GeoTIFFBase {\n  /**\n   * @constructor\n   * @param {Source} source The datasource to read from.\n   * @param {Boolean} littleEndian Whether the image uses little endian.\n   * @param {Boolean} bigTiff Whether the image uses bigTIFF conventions.\n   * @param {Number} firstIFDOffset The numeric byte-offset from the start of the image\n   *                                to the first IFD.\n   * @param {Object} [options] further options.\n   * @param {Boolean} [options.cache=false] whether or not decoded tiles shall be cached.\n   */\n  constructor(source, littleEndian, bigTiff, firstIFDOffset, options = {}) {\n    super();\n    this.source = source;\n    this.littleEndian = littleEndian;\n    this.bigTiff = bigTiff;\n    this.firstIFDOffset = firstIFDOffset;\n    this.cache = options.cache || false;\n    this.ifdRequests = [];\n    this.ghostValues = null;\n  }\n\n  async getSlice(offset, size) {\n    const fallbackSize = this.bigTiff ? 4048 : 1024;\n    return new DataSlice(\n      await this.source.fetch(\n        offset, typeof size !== 'undefined' ? size : fallbackSize,\n      ), offset, this.littleEndian, this.bigTiff,\n    );\n  }\n\n  /**\n   * Instructs to parse an image file directory at the given file offset.\n   * As there is no way to ensure that a location is indeed the start of an IFD,\n   * this function must be called with caution (e.g only using the IFD offsets from\n   * the headers or other IFDs).\n   * @param {number} offset the offset to parse the IFD at\n   * @returns {ImageFileDirectory} the parsed IFD\n   */\n  async parseFileDirectoryAt(offset) {\n    const entrySize = this.bigTiff ? 20 : 12;\n    const offsetSize = this.bigTiff ? 8 : 2;\n\n    let dataSlice = await this.getSlice(offset);\n    const numDirEntries = this.bigTiff ?\n      dataSlice.readUint64(offset) :\n      dataSlice.readUint16(offset);\n\n    // if the slice does not cover the whole IFD, request a bigger slice, where the\n    // whole IFD fits: num of entries + n x tag length + offset to next IFD\n    const byteSize = (numDirEntries * entrySize) + (this.bigTiff ? 16 : 6);\n    if (!dataSlice.covers(offset, byteSize)) {\n      dataSlice = await this.getSlice(offset, byteSize);\n    }\n\n    const fileDirectory = {};\n\n    // loop over the IFD and create a file directory object\n    let i = offset + (this.bigTiff ? 8 : 2);\n    for (let entryCount = 0; entryCount < numDirEntries; i += entrySize, ++entryCount) {\n      const fieldTag = dataSlice.readUint16(i);\n      const fieldType = dataSlice.readUint16(i + 2);\n      const typeCount = this.bigTiff ?\n        dataSlice.readUint64(i + 4) :\n        dataSlice.readUint32(i + 4);\n\n      let fieldValues;\n      let value;\n      const fieldTypeLength = getFieldTypeLength(fieldType);\n      const valueOffset = i + (this.bigTiff ? 12 : 8);\n\n      // check whether the value is directly encoded in the tag or refers to a\n      // different external byte range\n      if (fieldTypeLength * typeCount <= (this.bigTiff ? 8 : 4)) {\n        fieldValues = getValues(dataSlice, fieldType, typeCount, valueOffset);\n      } else {\n        // resolve the reference to the actual byte range\n        const actualOffset = dataSlice.readOffset(valueOffset);\n        const length = getFieldTypeLength(fieldType) * typeCount;\n\n        // check, whether we actually cover the referenced byte range; if not,\n        // request a new slice of bytes to read from it\n        if (dataSlice.covers(actualOffset, length)) {\n          fieldValues = getValues(dataSlice, fieldType, typeCount, actualOffset);\n        } else {\n          const fieldDataSlice = await this.getSlice(actualOffset, length);\n          fieldValues = getValues(fieldDataSlice, fieldType, typeCount, actualOffset);\n        }\n      }\n\n      // unpack single values from the array\n      if (typeCount === 1 && arrayFields.indexOf(fieldTag) === -1 &&\n        !(fieldType === fieldTypes.RATIONAL || fieldType === fieldTypes.SRATIONAL)) {\n        value = fieldValues[0];\n      } else {\n        value = fieldValues;\n      }\n\n      // write the tags value to the file directly\n      fileDirectory[fieldTagNames[fieldTag]] = value;\n    }\n    const geoKeyDirectory = parseGeoKeyDirectory(fileDirectory);\n    const nextIFDByteOffset = dataSlice.readOffset(\n      offset + offsetSize + (entrySize * numDirEntries),\n    );\n\n    return new ImageFileDirectory(\n      fileDirectory,\n      geoKeyDirectory,\n      nextIFDByteOffset,\n    );\n  }\n\n  async requestIFD(index) {\n    // see if we already have that IFD index requested.\n    if (this.ifdRequests[index]) {\n      // attach to an already requested IFD\n      return this.ifdRequests[index];\n    } else if (index === 0) {\n      // special case for index 0\n      this.ifdRequests[index] = this.parseFileDirectoryAt(this.firstIFDOffset);\n      return this.ifdRequests[index];\n    } else if (!this.ifdRequests[index - 1]) {\n      // if the previous IFD was not yet loaded, load that one first\n      // this is the recursive call.\n      try {\n        this.ifdRequests[index - 1] = this.requestIFD(index - 1);\n      } catch (e) {\n        // if the previous one already was an index error, rethrow\n        // with the current index\n        if (e instanceof GeoTIFFImageIndexError) {\n          throw new GeoTIFFImageIndexError(index);\n        }\n        // rethrow anything else\n        throw e;\n      }\n    }\n    // if the previous IFD was loaded, we can finally fetch the one we are interested in.\n    // we need to wrap this in an IIFE, otherwise this.ifdRequests[index] would be delayed\n    this.ifdRequests[index] = (async () => {\n      const previousIfd = await this.ifdRequests[index - 1];\n      if (previousIfd.nextIFDByteOffset === 0) {\n        throw new GeoTIFFImageIndexError(index);\n      }\n      return this.parseFileDirectoryAt(previousIfd.nextIFDByteOffset);\n    })();\n    return this.ifdRequests[index];\n  }\n\n  /**\n   * Get the n-th internal subfile of an image. By default, the first is returned.\n   *\n   * @param {Number} [index=0] the index of the image to return.\n   * @returns {GeoTIFFImage} the image at the given index\n   */\n  async getImage(index = 0) {\n    const ifd = await this.requestIFD(index);\n    return new geotiffimage(\n      ifd.fileDirectory, ifd.geoKeyDirectory,\n      this.dataView, this.littleEndian, this.cache, this.source,\n    );\n  }\n\n  /**\n   * Returns the count of the internal subfiles.\n   *\n   * @returns {Number} the number of internal subfile images\n   */\n  async getImageCount() {\n    let index = 0;\n    if (this.ifdRequests.length > 0) {\n      // optimization: if we already have the last IFD loaded,\n      // we know the final size.\n      const lastIFD = await this.ifdRequests[this.ifdRequests.length - 1];\n      if (lastIFD.nextIFDByteOffset === 0) {\n        return this.ifdRequests.length;\n      }\n      // otherwise we can at least start later in the list.\n      index = this.ifdRequests.length;\n    }\n\n    // loop until we run out of IFDs\n    let hasNext = true;\n    while (hasNext) {\n      try {\n        await this.requestIFD(index);\n        ++index;\n      } catch (e) {\n        if (e instanceof GeoTIFFImageIndexError) {\n          hasNext = false;\n        } else {\n          throw e;\n        }\n      }\n    }\n    return index;\n  }\n\n  /**\n   * Get the values of the COG ghost area as a parsed map.\n   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference\n   * @returns {Object} the parsed ghost area or null, if no such area was found\n   */\n  async getGhostValues() {\n    const offset = this.bigTiff ? 16 : 8;\n    if (this.ghostValues) {\n      return this.ghostValues;\n    }\n    const detectionString = 'GDAL_STRUCTURAL_METADATA_SIZE=';\n    const heuristicAreaSize = detectionString.length + 100;\n    let slice = await this.getSlice(offset, heuristicAreaSize);\n    if (detectionString === getValues(slice, fieldTypes.ASCII, detectionString.length, offset)) {\n      const valuesString = getValues(slice, fieldTypes.ASCII, heuristicAreaSize, offset);\n      const firstLine = valuesString.split('\\n')[0];\n      const metadataSize = Number(firstLine.split('=')[1].split(' ')[0]) + firstLine.length;\n      if (metadataSize > heuristicAreaSize) {\n        slice = await this.getSlice(offset, metadataSize);\n      }\n      const fullString = getValues(slice, fieldTypes.ASCII, metadataSize, offset);\n      this.ghostValues = {};\n      fullString\n        .split('\\n')\n        .filter(line => line.length > 0)\n        .map(line => line.split('='))\n        .forEach(([key, value]) => {\n          this.ghostValues[key] = value;\n        });\n    }\n    return this.ghostValues;\n  }\n\n  /**\n   * Parse a (Geo)TIFF file from the given source.\n   *\n   * @param {source~Source} source The source of data to parse from.\n   * @param {object} options Additional options.\n   */\n  static async fromSource(source, options) {\n    const headerData = await source.fetch(0, 1024);\n    const dataView = new DataView64(headerData);\n\n    const BOM = dataView.getUint16(0, 0);\n    let littleEndian;\n    if (BOM === 0x4949) {\n      littleEndian = true;\n    } else if (BOM === 0x4D4D) {\n      littleEndian = false;\n    } else {\n      throw new TypeError('Invalid byte order value.');\n    }\n\n    const magicNumber = dataView.getUint16(2, littleEndian);\n    let bigTiff;\n    if (magicNumber === 42) {\n      bigTiff = false;\n    } else if (magicNumber === 43) {\n      bigTiff = true;\n      const offsetByteSize = dataView.getUint16(4, littleEndian);\n      if (offsetByteSize !== 8) {\n        throw new Error('Unsupported offset byte-size.');\n      }\n    } else {\n      throw new TypeError('Invalid magic number.');\n    }\n\n    const firstIFDOffset = bigTiff\n      ? dataView.getUint64(8, littleEndian)\n      : dataView.getUint32(4, littleEndian);\n    return new geotiff_GeoTIFF(source, littleEndian, bigTiff, firstIFDOffset, options);\n  }\n\n  /**\n   * Closes the underlying file buffer\n   * N.B. After the GeoTIFF has been completely processed it needs\n   * to be closed but only if it has been constructed from a file.\n   */\n  close() {\n    if (typeof this.source.close === 'function') {\n      return this.source.close();\n    }\n    return false;\n  }\n}\n\n\n/* harmony default export */ var geotiff = (geotiff_GeoTIFF);\n\n/**\n * Wrapper for GeoTIFF files that have external overviews.\n * @augments GeoTIFFBase\n */\nclass geotiff_MultiGeoTIFF extends GeoTIFFBase {\n  /**\n   * Construct a new MultiGeoTIFF from a main and several overview files.\n   * @param {GeoTIFF} mainFile The main GeoTIFF file.\n   * @param {GeoTIFF[]} overviewFiles An array of overview files.\n   */\n  constructor(mainFile, overviewFiles) {\n    super();\n    this.mainFile = mainFile;\n    this.overviewFiles = overviewFiles;\n    this.imageFiles = [mainFile].concat(overviewFiles);\n\n    this.fileDirectoriesPerFile = null;\n    this.fileDirectoriesPerFileParsing = null;\n    this.imageCount = null;\n  }\n\n  async parseFileDirectoriesPerFile() {\n    const requests = [this.mainFile.parseFileDirectories()]\n      .concat(this.overviewFiles.map((file) => file.parseFileDirectories()));\n\n    this.fileDirectoriesPerFile = await Promise.all(requests);\n    return this.fileDirectoriesPerFile;\n  }\n\n  /**\n   * Get the n-th internal subfile of an image. By default, the first is returned.\n   *\n   * @param {Number} [index=0] the index of the image to return.\n   * @returns {GeoTIFFImage} the image at the given index\n   */\n  async getImage(index = 0) {\n    if (!this.fileDirectoriesPerFile) {\n      if (!this.fileDirectoriesPerFileParsing) {\n        this.fileDirectoriesPerFileParsing = this.parseFileDirectoriesPerFile();\n      }\n      this.fileDirectoriesPerFile = await this.fileDirectoriesPerFileParsing;\n    }\n\n    let relativeIndex = index;\n    for (let i = 0; i < this.fileDirectoriesPerFile.length; ++i) {\n      const fileDirectories = this.fileDirectoriesPerFile[i];\n      if (relativeIndex < fileDirectories.length) {\n        const file = this.imageFiles[i];\n        return new geotiffimage(\n          fileDirectories[relativeIndex][0], fileDirectories[relativeIndex][1],\n          file.dataView, file.littleEndian, file.cache, file.source,\n        );\n      }\n      relativeIndex -= fileDirectories.length;\n    }\n    throw new RangeError('Invalid image index');\n  }\n\n  /**\n   * Returns the count of the internal subfiles.\n   *\n   * @returns {Number} the number of internal subfile images\n   */\n  async getImageCount() {\n    if (!this.fileDirectoriesPerFile) {\n      if (!this.fileDirectoriesPerFileParsing) {\n        this.fileDirectoriesPerFileParsing = this.parseFileDirectoriesPerFile();\n      }\n      this.fileDirectoriesPerFile = await this.fileDirectoriesPerFileParsing;\n    }\n    return this.fileDirectoriesPerFile.reduce((count, ifds) => count + ifds.length, 0);\n  }\n}\n\n\n\n/**\n * Creates a new GeoTIFF from a remote URL.\n * @param {string} url The URL to access the image from\n * @param {object} [options] Additional options to pass to the source.\n *                           See {@link makeRemoteSource} for details.\n * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.\n */\nasync function fromUrl(url, options = {}) {\n  return geotiff_GeoTIFF.fromSource(makeRemoteSource(url, options));\n}\n\n/**\n * Construct a new GeoTIFF from an\n * [ArrayBuffer]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer}.\n * @param {ArrayBuffer} arrayBuffer The data to read the file from.\n * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.\n */\nasync function fromArrayBuffer(arrayBuffer) {\n  return geotiff_GeoTIFF.fromSource(makeBufferSource(arrayBuffer));\n}\n\n/**\n * Construct a GeoTIFF from a local file path. This uses the node\n * [filesystem API]{@link https://nodejs.org/api/fs.html} and is\n * not available on browsers.\n *\n * N.B. After the GeoTIFF has been completely processed it needs\n * to be closed but only if it has been constructed from a file.\n * @param {string} path The file path to read from.\n * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.\n */\nasync function fromFile(path) {\n  return geotiff_GeoTIFF.fromSource(makeFileSource(path));\n}\n\n/**\n * Construct a GeoTIFF from an HTML\n * [Blob]{@link https://developer.mozilla.org/en-US/docs/Web/API/Blob} or\n * [File]{@link https://developer.mozilla.org/en-US/docs/Web/API/File}\n * object.\n * @param {Blob|File} blob The Blob or File object to read from.\n * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.\n */\nasync function fromBlob(blob) {\n  return geotiff_GeoTIFF.fromSource(makeFileReaderSource(blob));\n}\n\n/**\n * Construct a MultiGeoTIFF from the given URLs.\n * @param {string} mainUrl The URL for the main file.\n * @param {string[]} overviewUrls An array of URLs for the overview images.\n * @param {object} [options] Additional options to pass to the source.\n *                           See [makeRemoteSource]{@link module:source.makeRemoteSource}\n *                           for details.\n * @returns {Promise.<MultiGeoTIFF>} The resulting MultiGeoTIFF file.\n */\nasync function fromUrls(mainUrl, overviewUrls = [], options = {}) {\n  const mainFile = await geotiff_GeoTIFF.fromSource(makeRemoteSource(mainUrl, options));\n  const overviewFiles = await Promise.all(\n    overviewUrls.map((url) => geotiff_GeoTIFF.fromSource(makeRemoteSource(url, options))),\n  );\n\n  return new geotiff_MultiGeoTIFF(mainFile, overviewFiles);\n}\n\n/**\n * Main creating function for GeoTIFF files.\n * @param {(Array)} array of pixel values\n * @returns {metadata} metadata\n */\nasync function writeArrayBuffer(values, metadata) {\n  return writeGeotiff(values, metadata);\n}\n\n\n\n// CONCATENATED MODULE: ./src/loaders/decoder.js\n\nfunction getTiffDecoder(fileDirectory) {\n  return getDecoder(fileDirectory);\n}\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/loaders/viv.worker.js\n\n\n\n/* eslint-disable no-restricted-globals */\n\n\nfunction decode(self, fileDirectory, buffer) {\n  var decoder = getTiffDecoder(fileDirectory);\n  var result = decoder.decode(fileDirectory, buffer);\n  self.postMessage([result], [result]);\n}\n\nif (typeof self !== 'undefined') {\n  self.addEventListener('message', function (event) {\n    var _event$data = toArray_default()(event.data),\n        name = _event$data[0],\n        args = _event$data.slice(1);\n\n    switch (name) {\n      case 'decode':\n        decode.apply(void 0, [self].concat(toConsumableArray_default()(args)));\n        break;\n\n      default:\n        break;\n    }\n  });\n}\n\n/***/ }),\n/* 72 */,\n/* 73 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/observable.js + 1 modules\nvar observable = __webpack_require__(8);\n\n// EXTERNAL MODULE: ./node_modules/observable-fns/dist.esm/subject.js\nvar dist_esm_subject = __webpack_require__(31);\n\n// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/unsubscribe.js\n/**\n * Unsubscribe from a subscription returned by something that looks like an observable,\n * but is not necessarily our observable implementation.\n */\nfunction unsubscribe(subscription) {\n    if (typeof subscription === \"function\") {\n        subscription();\n    }\n    else if (subscription && typeof subscription.unsubscribe === \"function\") {\n        subscription.unsubscribe();\n    }\n}\n/* harmony default export */ var dist_esm_unsubscribe = (unsubscribe);\n\n// CONCATENATED MODULE: ./node_modules/observable-fns/dist.esm/multicast.js\n\n\n\n// TODO: Subject already creates additional observables \"under the hood\",\n//       now we introduce even more. A true native MulticastObservable\n//       would be preferable.\n/**\n * Takes a \"cold\" observable and returns a wrapping \"hot\" observable that\n * proxies the input observable's values and errors.\n *\n * An observable is called \"cold\" when its initialization function is run\n * for each new subscriber. This is how observable-fns's `Observable`\n * implementation works.\n *\n * A hot observable is an observable where new subscribers subscribe to\n * the upcoming values of an already-initialiazed observable.\n *\n * The multicast observable will lazily subscribe to the source observable\n * once it has its first own subscriber and will unsubscribe from the\n * source observable when its last own subscriber unsubscribed.\n */\nfunction multicast(coldObservable) {\n    const subject = new dist_esm_subject[\"a\" /* default */]();\n    let sourceSubscription;\n    let subscriberCount = 0;\n    return new observable[\"a\" /* default */](observer => {\n        // Init source subscription lazily\n        if (!sourceSubscription) {\n            sourceSubscription = coldObservable.subscribe(subject);\n        }\n        // Pipe all events from `subject` into this observable\n        const subscription = subject.subscribe(observer);\n        subscriberCount++;\n        return () => {\n            subscriberCount--;\n            subscription.unsubscribe();\n            // Close source subscription once last subscriber has unsubscribed\n            if (subscriberCount === 0) {\n                dist_esm_unsubscribe(sourceSubscription);\n                sourceSubscription = undefined;\n            }\n        };\n    });\n}\n/* harmony default export */ var dist_esm_multicast = __webpack_exports__[\"a\"] = (multicast);\n\n\n/***/ })\n/******/ ]);\n//# sourceMappingURL=75188d89c7f80fae946e.decoder.worker.js.map", null);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("fast-xml-parser");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DTYPE_VALUES", function() { return /* reexport */ DTYPE_VALUES; });
__webpack_require__.d(__webpack_exports__, "MAX_SLIDERS_AND_CHANNELS", function() { return /* reexport */ MAX_SLIDERS_AND_CHANNELS; });
__webpack_require__.d(__webpack_exports__, "ScaleBarLayer", function() { return /* reexport */ ScaleBarLayer_ScaleBarLayer; });
__webpack_require__.d(__webpack_exports__, "VivViewerLayer", function() { return /* reexport */ layers_VivViewerLayer; });
__webpack_require__.d(__webpack_exports__, "VivViewer", function() { return /* reexport */ VivViewer_VivViewer; });
__webpack_require__.d(__webpack_exports__, "VivView", function() { return /* reexport */ VivView_VivView; });
__webpack_require__.d(__webpack_exports__, "OverviewView", function() { return /* reexport */ OverviewView_OverviewView; });
__webpack_require__.d(__webpack_exports__, "PictureInPictureViewer", function() { return /* reexport */ viewers_PictureInPictureViewer; });
__webpack_require__.d(__webpack_exports__, "SideBySideView", function() { return /* reexport */ SideBySideView_SideBySideView; });
__webpack_require__.d(__webpack_exports__, "getChannelStats", function() { return /* reexport */ getChannelStats; });
__webpack_require__.d(__webpack_exports__, "SideBySideViewer", function() { return /* reexport */ viewers_SideBySideViewer; });
__webpack_require__.d(__webpack_exports__, "DetailView", function() { return /* reexport */ DetailView_DetailView; });
__webpack_require__.d(__webpack_exports__, "StaticImageLayer", function() { return /* reexport */ StaticImageLayer_StaticImageLayer; });
__webpack_require__.d(__webpack_exports__, "ZarrLoader", function() { return /* reexport */ zarrLoader_ZarrLoader; });
__webpack_require__.d(__webpack_exports__, "OMETiffLoader", function() { return /* reexport */ OMETiffLoader_OMETiffLoader; });
__webpack_require__.d(__webpack_exports__, "createOMETiffLoader", function() { return /* reexport */ createOMETiffLoader; });
__webpack_require__.d(__webpack_exports__, "createZarrLoader", function() { return /* reexport */ createZarrLoader; });
__webpack_require__.d(__webpack_exports__, "OMEZarrReader", function() { return /* reexport */ omeZarrReader; });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(1);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@deck.gl/core"
var core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@babel/runtime/helpers/get"
var get_ = __webpack_require__(16);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@deck.gl/geo-layers"
var geo_layers_ = __webpack_require__(22);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(13);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@luma.gl/constants"
var constants_ = __webpack_require__(6);
var constants_default = /*#__PURE__*/__webpack_require__.n(constants_);

// EXTERNAL MODULE: external "@luma.gl/core"
var external_luma_gl_core_ = __webpack_require__(17);

// CONCATENATED MODULE: ./src/layers/XRLayer/xr-layer-vertex.glsl
/* harmony default export */ var xr_layer_vertex = ("#version 300 es\n#define GLSLIFY 1\n#define SHADER_NAME xr-layer-vertex-shader\n\nin vec2 texCoords;\nin vec3 positions;\nin vec3 positions64Low;\nin vec3 instancePickingColors;\n\nout vec2 vTexCoord;\n\nvoid main(void) {\n  geometry.worldPosition = positions;\n  geometry.uv = texCoords;\n  geometry.pickingColor = instancePickingColors;\n  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vTexCoord = texCoords;\n  vec4 color = vec4(0.0);\n  DECKGL_FILTER_COLOR(color, geometry);\n}\n");
// CONCATENATED MODULE: ./src/layers/XRLayer/xr-layer-fragment-colormap.glsl
/* harmony default export */ var xr_layer_fragment_colormap = ("#version 300 es\n#define SHADER_NAME xr-layer-fragment-shader\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n#define GLSLIFY 1\n\nvec4 jet (float x_17) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.5137254901960784,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0.23529411764705882,0.6666666666666666,1);\n  const float e2 = 0.375;\n  const vec4 v2 = vec4(0.0196078431372549,1,1,1);\n  const float e3 = 0.625;\n  const vec4 v3 = vec4(1,1,0,1);\n  const float e4 = 0.875;\n  const vec4 v4 = vec4(0.9803921568627451,0,0,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.5019607843137255,0,0,1);\n  float a0 = smoothstep(e0,e1,x_17);\n  float a1 = smoothstep(e1,e2,x_17);\n  float a2 = smoothstep(e2,e3,x_17);\n  float a3 = smoothstep(e3,e4,x_17);\n  float a4 = smoothstep(e4,e5,x_17);\n  return max(mix(v0,v1,a0)*step(e0,x_17)*step(x_17,e1),\n    max(mix(v1,v2,a1)*step(e1,x_17)*step(x_17,e2),\n    max(mix(v2,v3,a2)*step(e2,x_17)*step(x_17,e3),\n    max(mix(v3,v4,a3)*step(e3,x_17)*step(x_17,e4),mix(v4,v5,a4)*step(e4,x_17)*step(x_17,e5)\n  ))));\n}\n\nvec4 hsv (float x_12) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,0,1);\n  const float e1 = 0.169;\n  const vec4 v1 = vec4(0.9921568627450981,1,0.00784313725490196,1);\n  const float e2 = 0.173;\n  const vec4 v2 = vec4(0.9686274509803922,1,0.00784313725490196,1);\n  const float e3 = 0.337;\n  const vec4 v3 = vec4(0,0.9882352941176471,0.01568627450980392,1);\n  const float e4 = 0.341;\n  const vec4 v4 = vec4(0,0.9882352941176471,0.0392156862745098,1);\n  const float e5 = 0.506;\n  const vec4 v5 = vec4(0.00392156862745098,0.9764705882352941,1,1);\n  const float e6 = 0.671;\n  const vec4 v6 = vec4(0.00784313725490196,0,0.9921568627450981,1);\n  const float e7 = 0.675;\n  const vec4 v7 = vec4(0.03137254901960784,0,0.9921568627450981,1);\n  const float e8 = 0.839;\n  const vec4 v8 = vec4(1,0,0.984313725490196,1);\n  const float e9 = 0.843;\n  const vec4 v9 = vec4(1,0,0.9607843137254902,1);\n  const float e10 = 1.0;\n  const vec4 v10 = vec4(1,0,0.023529411764705882,1);\n  float a0 = smoothstep(e0,e1,x_12);\n  float a1 = smoothstep(e1,e2,x_12);\n  float a2 = smoothstep(e2,e3,x_12);\n  float a3 = smoothstep(e3,e4,x_12);\n  float a4 = smoothstep(e4,e5,x_12);\n  float a5 = smoothstep(e5,e6,x_12);\n  float a6 = smoothstep(e6,e7,x_12);\n  float a7 = smoothstep(e7,e8,x_12);\n  float a8 = smoothstep(e8,e9,x_12);\n  float a9 = smoothstep(e9,e10,x_12);\n  return max(mix(v0,v1,a0)*step(e0,x_12)*step(x_12,e1),\n    max(mix(v1,v2,a1)*step(e1,x_12)*step(x_12,e2),\n    max(mix(v2,v3,a2)*step(e2,x_12)*step(x_12,e3),\n    max(mix(v3,v4,a3)*step(e3,x_12)*step(x_12,e4),\n    max(mix(v4,v5,a4)*step(e4,x_12)*step(x_12,e5),\n    max(mix(v5,v6,a5)*step(e5,x_12)*step(x_12,e6),\n    max(mix(v6,v7,a6)*step(e6,x_12)*step(x_12,e7),\n    max(mix(v7,v8,a7)*step(e7,x_12)*step(x_12,e8),\n    max(mix(v8,v9,a8)*step(e8,x_12)*step(x_12,e9),mix(v9,v10,a9)*step(e9,x_12)*step(x_12,e10)\n  )))))))));\n}\n\nvec4 hot (float x_18) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.3;\n  const vec4 v1 = vec4(0.9019607843137255,0,0,1);\n  const float e2 = 0.6;\n  const vec4 v2 = vec4(1,0.8235294117647058,0,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_18);\n  float a1 = smoothstep(e1,e2,x_18);\n  float a2 = smoothstep(e2,e3,x_18);\n  return max(mix(v0,v1,a0)*step(e0,x_18)*step(x_18,e1),\n    max(mix(v1,v2,a1)*step(e1,x_18)*step(x_18,e2),mix(v2,v3,a2)*step(e2,x_18)*step(x_18,e3)\n  ));\n}\n\nvec4 cool (float x_16) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.4549019607843137,0,0.8549019607843137,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3843137254901961,0.2901960784313726,0.9294117647058824,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.26666666666666666,0.5725490196078431,0.9058823529411765,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0,0.8,0.7725490196078432,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0,0.9686274509803922,0.5725490196078431,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0,1,0.34509803921568627,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.1568627450980392,1,0.03137254901960784,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5764705882352941,1,0,1);\n  float a0 = smoothstep(e0,e1,x_16);\n  float a1 = smoothstep(e1,e2,x_16);\n  float a2 = smoothstep(e2,e3,x_16);\n  float a3 = smoothstep(e3,e4,x_16);\n  float a4 = smoothstep(e4,e5,x_16);\n  float a5 = smoothstep(e5,e6,x_16);\n  float a6 = smoothstep(e6,e7,x_16);\n  float a7 = smoothstep(e7,e8,x_16);\n  return max(mix(v0,v1,a0)*step(e0,x_16)*step(x_16,e1),\n    max(mix(v1,v2,a1)*step(e1,x_16)*step(x_16,e2),\n    max(mix(v2,v3,a2)*step(e2,x_16)*step(x_16,e3),\n    max(mix(v3,v4,a3)*step(e3,x_16)*step(x_16,e4),\n    max(mix(v4,v5,a4)*step(e4,x_16)*step(x_16,e5),\n    max(mix(v5,v6,a5)*step(e5,x_16)*step(x_16,e6),\n    max(mix(v6,v7,a6)*step(e6,x_16)*step(x_16,e7),mix(v7,v8,a7)*step(e7,x_16)*step(x_16,e8)\n  )))))));\n}\n\nvec4 spring (float x_24) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_24);\n  return mix(v0,v1,a0)*step(e0,x_24)*step(x_24,e1);\n}\n\nvec4 summer (float x_25) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0.5019607843137255,0.4,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0.4,1);\n  float a0 = smoothstep(e0,e1,x_25);\n  return mix(v0,v1,a0)*step(e0,x_25)*step(x_25,e1);\n}\n\nvec4 autumn (float x_10) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_10);\n  return mix(v0,v1,a0)*step(e0,x_10)*step(x_10,e1);\n}\n\nvec4 winter (float x_5) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(0,1,0.5019607843137255,1);\n  float a0 = smoothstep(e0,e1,x_5);\n  return mix(v0,v1,a0)*step(e0,x_5)*step(x_5,e1);\n}\n\nvec4 bone (float x_15) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.376;\n  const vec4 v1 = vec4(0.32941176470588235,0.32941176470588235,0.4549019607843137,1);\n  const float e2 = 0.753;\n  const vec4 v2 = vec4(0.6627450980392157,0.7843137254901961,0.7843137254901961,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_15);\n  float a1 = smoothstep(e1,e2,x_15);\n  float a2 = smoothstep(e2,e3,x_15);\n  return max(mix(v0,v1,a0)*step(e0,x_15)*step(x_15,e1),\n    max(mix(v1,v2,a1)*step(e1,x_15)*step(x_15,e2),mix(v2,v3,a2)*step(e2,x_15)*step(x_15,e3)\n  ));\n}\n\nvec4 copper (float x_13) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.804;\n  const vec4 v1 = vec4(1,0.6274509803921569,0.4,1);\n  const float e2 = 1.0;\n  const vec4 v2 = vec4(1,0.7803921568627451,0.4980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_13);\n  float a1 = smoothstep(e1,e2,x_13);\n  return max(mix(v0,v1,a0)*step(e0,x_13)*step(x_13,e1),mix(v1,v2,a1)*step(e1,x_13)*step(x_13,e2)\n  );\n}\n\nvec4 greys (float x_34) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_34);\n  return mix(v0,v1,a0)*step(e0,x_34)*step(x_34,e1);\n}\n\nvec4 yignbu (float x_32) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.03137254901960784,0.11372549019607843,0.34509803921568627,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0.1450980392156863,0.20392156862745098,0.5803921568627451,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.13333333333333333,0.3686274509803922,0.6588235294117647,1);\n  const float e3 = 0.375;\n  const vec4 v3 = vec4(0.11372549019607843,0.5686274509803921,0.7529411764705882,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.2549019607843137,0.7137254901960784,0.7686274509803922,1);\n  const float e5 = 0.625;\n  const vec4 v5 = vec4(0.4980392156862745,0.803921568627451,0.7333333333333333,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.7803921568627451,0.9137254901960784,0.7058823529411765,1);\n  const float e7 = 0.875;\n  const vec4 v7 = vec4(0.9294117647058824,0.9725490196078431,0.8509803921568627,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(1,1,0.8509803921568627,1);\n  float a0 = smoothstep(e0,e1,x_32);\n  float a1 = smoothstep(e1,e2,x_32);\n  float a2 = smoothstep(e2,e3,x_32);\n  float a3 = smoothstep(e3,e4,x_32);\n  float a4 = smoothstep(e4,e5,x_32);\n  float a5 = smoothstep(e5,e6,x_32);\n  float a6 = smoothstep(e6,e7,x_32);\n  float a7 = smoothstep(e7,e8,x_32);\n  return max(mix(v0,v1,a0)*step(e0,x_32)*step(x_32,e1),\n    max(mix(v1,v2,a1)*step(e1,x_32)*step(x_32,e2),\n    max(mix(v2,v3,a2)*step(e2,x_32)*step(x_32,e3),\n    max(mix(v3,v4,a3)*step(e3,x_32)*step(x_32,e4),\n    max(mix(v4,v5,a4)*step(e4,x_32)*step(x_32,e5),\n    max(mix(v5,v6,a5)*step(e5,x_32)*step(x_32,e6),\n    max(mix(v6,v7,a6)*step(e6,x_32)*step(x_32,e7),mix(v7,v8,a7)*step(e7,x_32)*step(x_32,e8)\n  )))))));\n}\n\nvec4 greens (float x_4) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0.26666666666666666,0.10588235294117647,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0.42745098039215684,0.17254901960784313,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.13725490196078433,0.5450980392156862,0.27058823529411763,1);\n  const float e3 = 0.375;\n  const vec4 v3 = vec4(0.2549019607843137,0.6705882352941176,0.36470588235294116,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.4549019607843137,0.7686274509803922,0.4627450980392157,1);\n  const float e5 = 0.625;\n  const vec4 v5 = vec4(0.6313725490196078,0.8509803921568627,0.6078431372549019,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.7803921568627451,0.9137254901960784,0.7529411764705882,1);\n  const float e7 = 0.875;\n  const vec4 v7 = vec4(0.8980392156862745,0.9607843137254902,0.8784313725490196,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9686274509803922,0.9882352941176471,0.9607843137254902,1);\n  float a0 = smoothstep(e0,e1,x_4);\n  float a1 = smoothstep(e1,e2,x_4);\n  float a2 = smoothstep(e2,e3,x_4);\n  float a3 = smoothstep(e3,e4,x_4);\n  float a4 = smoothstep(e4,e5,x_4);\n  float a5 = smoothstep(e5,e6,x_4);\n  float a6 = smoothstep(e6,e7,x_4);\n  float a7 = smoothstep(e7,e8,x_4);\n  return max(mix(v0,v1,a0)*step(e0,x_4)*step(x_4,e1),\n    max(mix(v1,v2,a1)*step(e1,x_4)*step(x_4,e2),\n    max(mix(v2,v3,a2)*step(e2,x_4)*step(x_4,e3),\n    max(mix(v3,v4,a3)*step(e3,x_4)*step(x_4,e4),\n    max(mix(v4,v5,a4)*step(e4,x_4)*step(x_4,e5),\n    max(mix(v5,v6,a5)*step(e5,x_4)*step(x_4,e6),\n    max(mix(v6,v7,a6)*step(e6,x_4)*step(x_4,e7),mix(v7,v8,a7)*step(e7,x_4)*step(x_4,e8)\n  )))))));\n}\n\nvec4 yiorrd (float x_41) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.5019607843137255,0,0.14901960784313725,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0.7411764705882353,0,0.14901960784313725,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.8901960784313725,0.10196078431372549,0.10980392156862745,1);\n  const float e3 = 0.375;\n  const vec4 v3 = vec4(0.9882352941176471,0.3058823529411765,0.16470588235294117,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.9921568627450981,0.5529411764705883,0.23529411764705882,1);\n  const float e5 = 0.625;\n  const vec4 v5 = vec4(0.996078431372549,0.6980392156862745,0.2980392156862745,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.996078431372549,0.8509803921568627,0.4627450980392157,1);\n  const float e7 = 0.875;\n  const vec4 v7 = vec4(1,0.9294117647058824,0.6274509803921569,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(1,1,0.8,1);\n  float a0 = smoothstep(e0,e1,x_41);\n  float a1 = smoothstep(e1,e2,x_41);\n  float a2 = smoothstep(e2,e3,x_41);\n  float a3 = smoothstep(e3,e4,x_41);\n  float a4 = smoothstep(e4,e5,x_41);\n  float a5 = smoothstep(e5,e6,x_41);\n  float a6 = smoothstep(e6,e7,x_41);\n  float a7 = smoothstep(e7,e8,x_41);\n  return max(mix(v0,v1,a0)*step(e0,x_41)*step(x_41,e1),\n    max(mix(v1,v2,a1)*step(e1,x_41)*step(x_41,e2),\n    max(mix(v2,v3,a2)*step(e2,x_41)*step(x_41,e3),\n    max(mix(v3,v4,a3)*step(e3,x_41)*step(x_41,e4),\n    max(mix(v4,v5,a4)*step(e4,x_41)*step(x_41,e5),\n    max(mix(v5,v6,a5)*step(e5,x_41)*step(x_41,e6),\n    max(mix(v6,v7,a6)*step(e6,x_41)*step(x_41,e7),mix(v7,v8,a7)*step(e7,x_41)*step(x_41,e8)\n  )))))));\n}\n\nvec4 bluered (float x_23) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,0,0,1);\n  float a0 = smoothstep(e0,e1,x_23);\n  return mix(v0,v1,a0)*step(e0,x_23)*step(x_23,e1);\n}\n\nvec4 rdbu (float x_42) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.0196078431372549,0.0392156862745098,0.6745098039215687,1);\n  const float e1 = 0.35;\n  const vec4 v1 = vec4(0.41568627450980394,0.5372549019607843,0.9686274509803922,1);\n  const float e2 = 0.5;\n  const vec4 v2 = vec4(0.7450980392156863,0.7450980392156863,0.7450980392156863,1);\n  const float e3 = 0.6;\n  const vec4 v3 = vec4(0.8627450980392157,0.6666666666666666,0.5176470588235295,1);\n  const float e4 = 0.7;\n  const vec4 v4 = vec4(0.9019607843137255,0.5686274509803921,0.35294117647058826,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.6980392156862745,0.0392156862745098,0.10980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_42);\n  float a1 = smoothstep(e1,e2,x_42);\n  float a2 = smoothstep(e2,e3,x_42);\n  float a3 = smoothstep(e3,e4,x_42);\n  float a4 = smoothstep(e4,e5,x_42);\n  return max(mix(v0,v1,a0)*step(e0,x_42)*step(x_42,e1),\n    max(mix(v1,v2,a1)*step(e1,x_42)*step(x_42,e2),\n    max(mix(v2,v3,a2)*step(e2,x_42)*step(x_42,e3),\n    max(mix(v3,v4,a3)*step(e3,x_42)*step(x_42,e4),mix(v4,v5,a4)*step(e4,x_42)*step(x_42,e5)\n  ))));\n}\n\nvec4 picnic (float x_1) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 0.1;\n  const vec4 v1 = vec4(0.2,0.6,1,1);\n  const float e2 = 0.2;\n  const vec4 v2 = vec4(0.4,0.8,1,1);\n  const float e3 = 0.3;\n  const vec4 v3 = vec4(0.6,0.8,1,1);\n  const float e4 = 0.4;\n  const vec4 v4 = vec4(0.8,0.8,1,1);\n  const float e5 = 0.5;\n  const vec4 v5 = vec4(1,1,1,1);\n  const float e6 = 0.6;\n  const vec4 v6 = vec4(1,0.8,1,1);\n  const float e7 = 0.7;\n  const vec4 v7 = vec4(1,0.6,1,1);\n  const float e8 = 0.8;\n  const vec4 v8 = vec4(1,0.4,0.8,1);\n  const float e9 = 0.9;\n  const vec4 v9 = vec4(1,0.4,0.4,1);\n  const float e10 = 1.0;\n  const vec4 v10 = vec4(1,0,0,1);\n  float a0 = smoothstep(e0,e1,x_1);\n  float a1 = smoothstep(e1,e2,x_1);\n  float a2 = smoothstep(e2,e3,x_1);\n  float a3 = smoothstep(e3,e4,x_1);\n  float a4 = smoothstep(e4,e5,x_1);\n  float a5 = smoothstep(e5,e6,x_1);\n  float a6 = smoothstep(e6,e7,x_1);\n  float a7 = smoothstep(e7,e8,x_1);\n  float a8 = smoothstep(e8,e9,x_1);\n  float a9 = smoothstep(e9,e10,x_1);\n  return max(mix(v0,v1,a0)*step(e0,x_1)*step(x_1,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1)*step(x_1,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1)*step(x_1,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1)*step(x_1,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1)*step(x_1,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1)*step(x_1,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1)*step(x_1,e7),\n    max(mix(v7,v8,a7)*step(e7,x_1)*step(x_1,e8),\n    max(mix(v8,v9,a8)*step(e8,x_1)*step(x_1,e9),mix(v9,v10,a9)*step(e9,x_1)*step(x_1,e10)\n  )))))))));\n}\n\nvec4 rainbow (float x_21) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.5882352941176471,0,0.35294117647058826,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0,0.7843137254901961,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0,0.09803921568627451,1,1);\n  const float e3 = 0.375;\n  const vec4 v3 = vec4(0,0.596078431372549,1,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.17254901960784313,1,0.5882352941176471,1);\n  const float e5 = 0.625;\n  const vec4 v5 = vec4(0.592156862745098,1,0,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(1,0.9176470588235294,0,1);\n  const float e7 = 0.875;\n  const vec4 v7 = vec4(1,0.43529411764705883,0,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(1,0,0,1);\n  float a0 = smoothstep(e0,e1,x_21);\n  float a1 = smoothstep(e1,e2,x_21);\n  float a2 = smoothstep(e2,e3,x_21);\n  float a3 = smoothstep(e3,e4,x_21);\n  float a4 = smoothstep(e4,e5,x_21);\n  float a5 = smoothstep(e5,e6,x_21);\n  float a6 = smoothstep(e6,e7,x_21);\n  float a7 = smoothstep(e7,e8,x_21);\n  return max(mix(v0,v1,a0)*step(e0,x_21)*step(x_21,e1),\n    max(mix(v1,v2,a1)*step(e1,x_21)*step(x_21,e2),\n    max(mix(v2,v3,a2)*step(e2,x_21)*step(x_21,e3),\n    max(mix(v3,v4,a3)*step(e3,x_21)*step(x_21,e4),\n    max(mix(v4,v5,a4)*step(e4,x_21)*step(x_21,e5),\n    max(mix(v5,v6,a5)*step(e5,x_21)*step(x_21,e6),\n    max(mix(v6,v7,a6)*step(e6,x_21)*step(x_21,e7),mix(v7,v8,a7)*step(e7,x_21)*step(x_21,e8)\n  )))))));\n}\n\nvec4 portland (float x_31) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.047058823529411764,0.2,0.5137254901960784,1);\n  const float e1 = 0.25;\n  const vec4 v1 = vec4(0.0392156862745098,0.5333333333333333,0.7294117647058823,1);\n  const float e2 = 0.5;\n  const vec4 v2 = vec4(0.9490196078431372,0.8274509803921568,0.2196078431372549,1);\n  const float e3 = 0.75;\n  const vec4 v3 = vec4(0.9490196078431372,0.5607843137254902,0.2196078431372549,1);\n  const float e4 = 1.0;\n  const vec4 v4 = vec4(0.8509803921568627,0.11764705882352941,0.11764705882352941,1);\n  float a0 = smoothstep(e0,e1,x_31);\n  float a1 = smoothstep(e1,e2,x_31);\n  float a2 = smoothstep(e2,e3,x_31);\n  float a3 = smoothstep(e3,e4,x_31);\n  return max(mix(v0,v1,a0)*step(e0,x_31)*step(x_31,e1),\n    max(mix(v1,v2,a1)*step(e1,x_31)*step(x_31,e2),\n    max(mix(v2,v3,a2)*step(e2,x_31)*step(x_31,e3),mix(v3,v4,a3)*step(e3,x_31)*step(x_31,e4)\n  )));\n}\n\nvec4 blackbody (float x_38) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.2;\n  const vec4 v1 = vec4(0.9019607843137255,0,0,1);\n  const float e2 = 0.4;\n  const vec4 v2 = vec4(0.9019607843137255,0.8235294117647058,0,1);\n  const float e3 = 0.7;\n  const vec4 v3 = vec4(1,1,1,1);\n  const float e4 = 1.0;\n  const vec4 v4 = vec4(0.6274509803921569,0.7843137254901961,1,1);\n  float a0 = smoothstep(e0,e1,x_38);\n  float a1 = smoothstep(e1,e2,x_38);\n  float a2 = smoothstep(e2,e3,x_38);\n  float a3 = smoothstep(e3,e4,x_38);\n  return max(mix(v0,v1,a0)*step(e0,x_38)*step(x_38,e1),\n    max(mix(v1,v2,a1)*step(e1,x_38)*step(x_38,e2),\n    max(mix(v2,v3,a2)*step(e2,x_38)*step(x_38,e3),mix(v3,v4,a3)*step(e3,x_38)*step(x_38,e4)\n  )));\n}\n\nvec4 earth (float x_0) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.5098039215686274,1);\n  const float e1 = 0.1;\n  const vec4 v1 = vec4(0,0.7058823529411765,0.7058823529411765,1);\n  const float e2 = 0.2;\n  const vec4 v2 = vec4(0.1568627450980392,0.8235294117647058,0.1568627450980392,1);\n  const float e3 = 0.4;\n  const vec4 v3 = vec4(0.9019607843137255,0.9019607843137255,0.19607843137254902,1);\n  const float e4 = 0.6;\n  const vec4 v4 = vec4(0.47058823529411764,0.27450980392156865,0.0784313725490196,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_0);\n  float a1 = smoothstep(e1,e2,x_0);\n  float a2 = smoothstep(e2,e3,x_0);\n  float a3 = smoothstep(e3,e4,x_0);\n  float a4 = smoothstep(e4,e5,x_0);\n  return max(mix(v0,v1,a0)*step(e0,x_0)*step(x_0,e1),\n    max(mix(v1,v2,a1)*step(e1,x_0)*step(x_0,e2),\n    max(mix(v2,v3,a2)*step(e2,x_0)*step(x_0,e3),\n    max(mix(v3,v4,a3)*step(e3,x_0)*step(x_0,e4),mix(v4,v5,a4)*step(e4,x_0)*step(x_0,e5)\n  ))));\n}\n\nvec4 electric (float x_9) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.15;\n  const vec4 v1 = vec4(0.11764705882352941,0,0.39215686274509803,1);\n  const float e2 = 0.4;\n  const vec4 v2 = vec4(0.47058823529411764,0,0.39215686274509803,1);\n  const float e3 = 0.6;\n  const vec4 v3 = vec4(0.6274509803921569,0.35294117647058826,0,1);\n  const float e4 = 0.8;\n  const vec4 v4 = vec4(0.9019607843137255,0.7843137254901961,0,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(1,0.9803921568627451,0.8627450980392157,1);\n  float a0 = smoothstep(e0,e1,x_9);\n  float a1 = smoothstep(e1,e2,x_9);\n  float a2 = smoothstep(e2,e3,x_9);\n  float a3 = smoothstep(e3,e4,x_9);\n  float a4 = smoothstep(e4,e5,x_9);\n  return max(mix(v0,v1,a0)*step(e0,x_9)*step(x_9,e1),\n    max(mix(v1,v2,a1)*step(e1,x_9)*step(x_9,e2),\n    max(mix(v2,v3,a2)*step(e2,x_9)*step(x_9,e3),\n    max(mix(v3,v4,a3)*step(e3,x_9)*step(x_9,e4),mix(v4,v5,a4)*step(e4,x_9)*step(x_9,e5)\n  ))));\n}\n\nvec4 alpha (float x_29) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,1,1,0);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_29);\n  return mix(v0,v1,a0)*step(e0,x_29)*step(x_29,e1);\n}\n\nvec4 viridis (float x_30) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.26666666666666666,0.00392156862745098,0.32941176470588235,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.2784313725490196,0.17254901960784313,0.47843137254901963,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.23137254901960785,0.3176470588235294,0.5450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.17254901960784313,0.44313725490196076,0.5568627450980392,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.12941176470588237,0.5647058823529412,0.5529411764705883,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.15294117647058825,0.6784313725490196,0.5058823529411764,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.3607843137254902,0.7843137254901961,0.38823529411764707,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6666666666666666,0.8627450980392157,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.9058823529411765,0.1450980392156863,1);\n  float a0 = smoothstep(e0,e1,x_30);\n  float a1 = smoothstep(e1,e2,x_30);\n  float a2 = smoothstep(e2,e3,x_30);\n  float a3 = smoothstep(e3,e4,x_30);\n  float a4 = smoothstep(e4,e5,x_30);\n  float a5 = smoothstep(e5,e6,x_30);\n  float a6 = smoothstep(e6,e7,x_30);\n  float a7 = smoothstep(e7,e8,x_30);\n  return max(mix(v0,v1,a0)*step(e0,x_30)*step(x_30,e1),\n    max(mix(v1,v2,a1)*step(e1,x_30)*step(x_30,e2),\n    max(mix(v2,v3,a2)*step(e2,x_30)*step(x_30,e3),\n    max(mix(v3,v4,a3)*step(e3,x_30)*step(x_30,e4),\n    max(mix(v4,v5,a4)*step(e4,x_30)*step(x_30,e5),\n    max(mix(v5,v6,a5)*step(e5,x_30)*step(x_30,e6),\n    max(mix(v6,v7,a6)*step(e6,x_30)*step(x_30,e7),mix(v7,v8,a7)*step(e7,x_30)*step(x_30,e8)\n  )))))));\n}\n\nvec4 inferno (float x_22) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.12156862745098039,0.047058823529411764,0.2823529411764706,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3333333333333333,0.058823529411764705,0.42745098039215684,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5333333333333333,0.13333333333333333,0.41568627450980394,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7294117647058823,0.21176470588235294,0.3333333333333333,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8901960784313725,0.34901960784313724,0.2,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9764705882352941,0.5490196078431373,0.0392156862745098,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.788235294117647,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,1,0.6431372549019608,1);\n  float a0 = smoothstep(e0,e1,x_22);\n  float a1 = smoothstep(e1,e2,x_22);\n  float a2 = smoothstep(e2,e3,x_22);\n  float a3 = smoothstep(e3,e4,x_22);\n  float a4 = smoothstep(e4,e5,x_22);\n  float a5 = smoothstep(e5,e6,x_22);\n  float a6 = smoothstep(e6,e7,x_22);\n  float a7 = smoothstep(e7,e8,x_22);\n  return max(mix(v0,v1,a0)*step(e0,x_22)*step(x_22,e1),\n    max(mix(v1,v2,a1)*step(e1,x_22)*step(x_22,e2),\n    max(mix(v2,v3,a2)*step(e2,x_22)*step(x_22,e3),\n    max(mix(v3,v4,a3)*step(e3,x_22)*step(x_22,e4),\n    max(mix(v4,v5,a4)*step(e4,x_22)*step(x_22,e5),\n    max(mix(v5,v6,a5)*step(e5,x_22)*step(x_22,e6),\n    max(mix(v6,v7,a6)*step(e6,x_22)*step(x_22,e7),mix(v7,v8,a7)*step(e7,x_22)*step(x_22,e8)\n  )))))));\n}\n\nvec4 magma (float x_43) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.10980392156862745,0.06274509803921569,0.26666666666666666,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.30980392156862746,0.07058823529411765,0.4823529411764706,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5058823529411764,0.1450980392156863,0.5058823529411764,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7098039215686275,0.21176470588235294,0.47843137254901963,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.3137254901960784,0.39215686274509803,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.984313725490196,0.5294117647058824,0.3803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.996078431372549,0.7607843137254902,0.5294117647058824,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,0.9921568627450981,0.7490196078431373,1);\n  float a0 = smoothstep(e0,e1,x_43);\n  float a1 = smoothstep(e1,e2,x_43);\n  float a2 = smoothstep(e2,e3,x_43);\n  float a3 = smoothstep(e3,e4,x_43);\n  float a4 = smoothstep(e4,e5,x_43);\n  float a5 = smoothstep(e5,e6,x_43);\n  float a6 = smoothstep(e6,e7,x_43);\n  float a7 = smoothstep(e7,e8,x_43);\n  return max(mix(v0,v1,a0)*step(e0,x_43)*step(x_43,e1),\n    max(mix(v1,v2,a1)*step(e1,x_43)*step(x_43,e2),\n    max(mix(v2,v3,a2)*step(e2,x_43)*step(x_43,e3),\n    max(mix(v3,v4,a3)*step(e3,x_43)*step(x_43,e4),\n    max(mix(v4,v5,a4)*step(e4,x_43)*step(x_43,e5),\n    max(mix(v5,v6,a5)*step(e5,x_43)*step(x_43,e6),\n    max(mix(v6,v7,a6)*step(e6,x_43)*step(x_43,e7),mix(v7,v8,a7)*step(e7,x_43)*step(x_43,e8)\n  )))))));\n}\n\nvec4 plasma (float x_33) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.050980392156862744,0.03137254901960784,0.5294117647058824,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.29411764705882354,0.011764705882352941,0.6313725490196078,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.49019607843137253,0.011764705882352941,0.6588235294117647,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6588235294117647,0.13333333333333333,0.5882352941176471,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.796078431372549,0.27450980392156865,0.4745098039215686,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.4196078431372549,0.36470588235294116,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9725490196078431,0.5803921568627451,0.2549019607843137,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9921568627450981,0.7647058823529411,0.1568627450980392,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9411764705882353,0.9764705882352941,0.12941176470588237,1);\n  float a0 = smoothstep(e0,e1,x_33);\n  float a1 = smoothstep(e1,e2,x_33);\n  float a2 = smoothstep(e2,e3,x_33);\n  float a3 = smoothstep(e3,e4,x_33);\n  float a4 = smoothstep(e4,e5,x_33);\n  float a5 = smoothstep(e5,e6,x_33);\n  float a6 = smoothstep(e6,e7,x_33);\n  float a7 = smoothstep(e7,e8,x_33);\n  return max(mix(v0,v1,a0)*step(e0,x_33)*step(x_33,e1),\n    max(mix(v1,v2,a1)*step(e1,x_33)*step(x_33,e2),\n    max(mix(v2,v3,a2)*step(e2,x_33)*step(x_33,e3),\n    max(mix(v3,v4,a3)*step(e3,x_33)*step(x_33,e4),\n    max(mix(v4,v5,a4)*step(e4,x_33)*step(x_33,e5),\n    max(mix(v5,v6,a5)*step(e5,x_33)*step(x_33,e6),\n    max(mix(v6,v7,a6)*step(e6,x_33)*step(x_33,e7),mix(v7,v8,a7)*step(e7,x_33)*step(x_33,e8)\n  )))))));\n}\n\nvec4 warm (float x_3) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.6745098039215687,0,0.7333333333333333,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.8588235294117647,0,0.6666666666666666,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(1,0,0.5098039215686274,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(1,0.24705882352941178,0.2901960784313726,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(1,0.4823529411764706,0,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9176470588235294,0.6901960784313725,0,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.7450980392156863,0.8941176470588236,0,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5764705882352941,1,0,1);\n  float a0 = smoothstep(e0,e1,x_3);\n  float a1 = smoothstep(e1,e2,x_3);\n  float a2 = smoothstep(e2,e3,x_3);\n  float a3 = smoothstep(e3,e4,x_3);\n  float a4 = smoothstep(e4,e5,x_3);\n  float a5 = smoothstep(e5,e6,x_3);\n  float a6 = smoothstep(e6,e7,x_3);\n  float a7 = smoothstep(e7,e8,x_3);\n  return max(mix(v0,v1,a0)*step(e0,x_3)*step(x_3,e1),\n    max(mix(v1,v2,a1)*step(e1,x_3)*step(x_3,e2),\n    max(mix(v2,v3,a2)*step(e2,x_3)*step(x_3,e3),\n    max(mix(v3,v4,a3)*step(e3,x_3)*step(x_3,e4),\n    max(mix(v4,v5,a4)*step(e4,x_3)*step(x_3,e5),\n    max(mix(v5,v6,a5)*step(e5,x_3)*step(x_3,e6),\n    max(mix(v6,v7,a6)*step(e6,x_3)*step(x_3,e7),mix(v7,v8,a7)*step(e7,x_3)*step(x_3,e8)\n  )))))));\n}\n\nvec4 rainbow_soft_3159362690 (float x_36) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.1;\n  const vec4 v1 = vec4(0.7803921568627451,0,0.7058823529411765,1);\n  const float e2 = 0.2;\n  const vec4 v2 = vec4(1,0,0.4745098039215686,1);\n  const float e3 = 0.3;\n  const vec4 v3 = vec4(1,0.4235294117647059,0,1);\n  const float e4 = 0.4;\n  const vec4 v4 = vec4(0.8705882352941177,0.7607843137254902,0,1);\n  const float e5 = 0.5;\n  const vec4 v5 = vec4(0.5882352941176471,1,0,1);\n  const float e6 = 0.6;\n  const vec4 v6 = vec4(0,1,0.21568627450980393,1);\n  const float e7 = 0.7;\n  const vec4 v7 = vec4(0,0.9647058823529412,0.5882352941176471,1);\n  const float e8 = 0.8;\n  const vec4 v8 = vec4(0.19607843137254902,0.6549019607843137,0.8705882352941177,1);\n  const float e9 = 0.9;\n  const vec4 v9 = vec4(0.403921568627451,0.2,0.9215686274509803,1);\n  const float e10 = 1.0;\n  const vec4 v10 = vec4(0.48627450980392156,0,0.7294117647058823,1);\n  float a0 = smoothstep(e0,e1,x_36);\n  float a1 = smoothstep(e1,e2,x_36);\n  float a2 = smoothstep(e2,e3,x_36);\n  float a3 = smoothstep(e3,e4,x_36);\n  float a4 = smoothstep(e4,e5,x_36);\n  float a5 = smoothstep(e5,e6,x_36);\n  float a6 = smoothstep(e6,e7,x_36);\n  float a7 = smoothstep(e7,e8,x_36);\n  float a8 = smoothstep(e8,e9,x_36);\n  float a9 = smoothstep(e9,e10,x_36);\n  return max(mix(v0,v1,a0)*step(e0,x_36)*step(x_36,e1),\n    max(mix(v1,v2,a1)*step(e1,x_36)*step(x_36,e2),\n    max(mix(v2,v3,a2)*step(e2,x_36)*step(x_36,e3),\n    max(mix(v3,v4,a3)*step(e3,x_36)*step(x_36,e4),\n    max(mix(v4,v5,a4)*step(e4,x_36)*step(x_36,e5),\n    max(mix(v5,v6,a5)*step(e5,x_36)*step(x_36,e6),\n    max(mix(v6,v7,a6)*step(e6,x_36)*step(x_36,e7),\n    max(mix(v7,v8,a7)*step(e7,x_36)*step(x_36,e8),\n    max(mix(v8,v9,a8)*step(e8,x_36)*step(x_36,e9),mix(v9,v10,a9)*step(e9,x_36)*step(x_36,e10)\n  )))))))));\n}\n\nvec4 bathymetry (float x_14) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.1568627450980392,0.10196078431372549,0.17254901960784313,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.23137254901960785,0.19215686274509805,0.35294117647058826,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.25098039215686274,0.2980392156862745,0.5450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.24705882352941178,0.43137254901960786,0.592156862745098,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.2823529411764706,0.5568627450980392,0.6196078431372549,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.3333333333333333,0.6823529411764706,0.6392156862745098,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.47058823529411764,0.807843137254902,0.6392156862745098,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.7333333333333333,0.9019607843137255,0.6745098039215687,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.996078431372549,0.8,1);\n  float a0 = smoothstep(e0,e1,x_14);\n  float a1 = smoothstep(e1,e2,x_14);\n  float a2 = smoothstep(e2,e3,x_14);\n  float a3 = smoothstep(e3,e4,x_14);\n  float a4 = smoothstep(e4,e5,x_14);\n  float a5 = smoothstep(e5,e6,x_14);\n  float a6 = smoothstep(e6,e7,x_14);\n  float a7 = smoothstep(e7,e8,x_14);\n  return max(mix(v0,v1,a0)*step(e0,x_14)*step(x_14,e1),\n    max(mix(v1,v2,a1)*step(e1,x_14)*step(x_14,e2),\n    max(mix(v2,v3,a2)*step(e2,x_14)*step(x_14,e3),\n    max(mix(v3,v4,a3)*step(e3,x_14)*step(x_14,e4),\n    max(mix(v4,v5,a4)*step(e4,x_14)*step(x_14,e5),\n    max(mix(v5,v6,a5)*step(e5,x_14)*step(x_14,e6),\n    max(mix(v6,v7,a6)*step(e6,x_14)*step(x_14,e7),mix(v7,v8,a7)*step(e7,x_14)*step(x_14,e8)\n  )))))));\n}\n\nvec4 cdom (float x_7) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.1843137254901961,0.058823529411764705,0.24313725490196078,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.3411764705882353,0.09019607843137255,0.33725490196078434,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.5098039215686274,0.10980392156862745,0.38823529411764707,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6705882352941176,0.1607843137254902,0.3764705882352941,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.807843137254902,0.2627450980392157,0.33725490196078434,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.9019607843137255,0.41568627450980394,0.32941176470588235,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9490196078431372,0.5843137254901961,0.403921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.7568627450980392,0.5294117647058824,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.996078431372549,0.9294117647058824,0.6901960784313725,1);\n  float a0 = smoothstep(e0,e1,x_7);\n  float a1 = smoothstep(e1,e2,x_7);\n  float a2 = smoothstep(e2,e3,x_7);\n  float a3 = smoothstep(e3,e4,x_7);\n  float a4 = smoothstep(e4,e5,x_7);\n  float a5 = smoothstep(e5,e6,x_7);\n  float a6 = smoothstep(e6,e7,x_7);\n  float a7 = smoothstep(e7,e8,x_7);\n  return max(mix(v0,v1,a0)*step(e0,x_7)*step(x_7,e1),\n    max(mix(v1,v2,a1)*step(e1,x_7)*step(x_7,e2),\n    max(mix(v2,v3,a2)*step(e2,x_7)*step(x_7,e3),\n    max(mix(v3,v4,a3)*step(e3,x_7)*step(x_7,e4),\n    max(mix(v4,v5,a4)*step(e4,x_7)*step(x_7,e5),\n    max(mix(v5,v6,a5)*step(e5,x_7)*step(x_7,e6),\n    max(mix(v6,v7,a6)*step(e6,x_7)*step(x_7,e7),mix(v7,v8,a7)*step(e7,x_7)*step(x_7,e8)\n  )))))));\n}\n\nvec4 chlorophyll (float x_6) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.07058823529411765,0.1411764705882353,0.0784313725490196,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.09803921568627451,0.24705882352941178,0.1607843137254902,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.09411764705882353,0.3568627450980392,0.23137254901960785,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.050980392156862744,0.4666666666666667,0.2823529411764706,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.07058823529411765,0.5803921568627451,0.3137254901960784,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.3137254901960784,0.6784313725490196,0.34901960784313724,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5176470588235295,0.7686274509803922,0.47843137254901963,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6862745098039216,0.8666666666666667,0.6352941176470588,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.8431372549019608,0.9764705882352941,0.8156862745098039,1);\n  float a0 = smoothstep(e0,e1,x_6);\n  float a1 = smoothstep(e1,e2,x_6);\n  float a2 = smoothstep(e2,e3,x_6);\n  float a3 = smoothstep(e3,e4,x_6);\n  float a4 = smoothstep(e4,e5,x_6);\n  float a5 = smoothstep(e5,e6,x_6);\n  float a6 = smoothstep(e6,e7,x_6);\n  float a7 = smoothstep(e7,e8,x_6);\n  return max(mix(v0,v1,a0)*step(e0,x_6)*step(x_6,e1),\n    max(mix(v1,v2,a1)*step(e1,x_6)*step(x_6,e2),\n    max(mix(v2,v3,a2)*step(e2,x_6)*step(x_6,e3),\n    max(mix(v3,v4,a3)*step(e3,x_6)*step(x_6,e4),\n    max(mix(v4,v5,a4)*step(e4,x_6)*step(x_6,e5),\n    max(mix(v5,v6,a5)*step(e5,x_6)*step(x_6,e6),\n    max(mix(v6,v7,a6)*step(e6,x_6)*step(x_6,e7),mix(v7,v8,a7)*step(e7,x_6)*step(x_6,e8)\n  )))))));\n}\n\nvec4 density (float x_19) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.21176470588235294,0.054901960784313725,0.1411764705882353,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.34901960784313724,0.09019607843137255,0.3137254901960784,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.43137254901960786,0.17647058823529413,0.5176470588235295,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.47058823529411764,0.30196078431372547,0.6980392156862745,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.47058823529411764,0.44313725490196076,0.8352941176470589,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.45098039215686275,0.592156862745098,0.8941176470588236,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5254901960784314,0.7254901960784313,0.8901960784313725,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6941176470588235,0.8392156862745098,0.8901960784313725,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9019607843137255,0.9450980392156862,0.9450980392156862,1);\n  float a0 = smoothstep(e0,e1,x_19);\n  float a1 = smoothstep(e1,e2,x_19);\n  float a2 = smoothstep(e2,e3,x_19);\n  float a3 = smoothstep(e3,e4,x_19);\n  float a4 = smoothstep(e4,e5,x_19);\n  float a5 = smoothstep(e5,e6,x_19);\n  float a6 = smoothstep(e6,e7,x_19);\n  float a7 = smoothstep(e7,e8,x_19);\n  return max(mix(v0,v1,a0)*step(e0,x_19)*step(x_19,e1),\n    max(mix(v1,v2,a1)*step(e1,x_19)*step(x_19,e2),\n    max(mix(v2,v3,a2)*step(e2,x_19)*step(x_19,e3),\n    max(mix(v3,v4,a3)*step(e3,x_19)*step(x_19,e4),\n    max(mix(v4,v5,a4)*step(e4,x_19)*step(x_19,e5),\n    max(mix(v5,v6,a5)*step(e5,x_19)*step(x_19,e6),\n    max(mix(v6,v7,a6)*step(e6,x_19)*step(x_19,e7),mix(v7,v8,a7)*step(e7,x_19)*step(x_19,e8)\n  )))))));\n}\n\nvec4 freesurface_blue_3154355989 (float x_35) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.11764705882352941,0.01568627450980392,0.43137254901960786,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.1843137254901961,0.054901960784313725,0.6901960784313725,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.1607843137254902,0.17647058823529413,0.9254901960784314,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.09803921568627451,0.38823529411764707,0.8313725490196079,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.26666666666666666,0.5137254901960784,0.7843137254901961,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.4470588235294118,0.611764705882353,0.7725490196078432,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.615686274509804,0.7098039215686275,0.796078431372549,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.7843137254901961,0.8156862745098039,0.8470588235294118,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9450980392156862,0.9294117647058824,0.9254901960784314,1);\n  float a0 = smoothstep(e0,e1,x_35);\n  float a1 = smoothstep(e1,e2,x_35);\n  float a2 = smoothstep(e2,e3,x_35);\n  float a3 = smoothstep(e3,e4,x_35);\n  float a4 = smoothstep(e4,e5,x_35);\n  float a5 = smoothstep(e5,e6,x_35);\n  float a6 = smoothstep(e6,e7,x_35);\n  float a7 = smoothstep(e7,e8,x_35);\n  return max(mix(v0,v1,a0)*step(e0,x_35)*step(x_35,e1),\n    max(mix(v1,v2,a1)*step(e1,x_35)*step(x_35,e2),\n    max(mix(v2,v3,a2)*step(e2,x_35)*step(x_35,e3),\n    max(mix(v3,v4,a3)*step(e3,x_35)*step(x_35,e4),\n    max(mix(v4,v5,a4)*step(e4,x_35)*step(x_35,e5),\n    max(mix(v5,v6,a5)*step(e5,x_35)*step(x_35,e6),\n    max(mix(v6,v7,a6)*step(e6,x_35)*step(x_35,e7),mix(v7,v8,a7)*step(e7,x_35)*step(x_35,e8)\n  )))))));\n}\n\nvec4 freesurface_red_1679163293 (float x_20) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.23529411764705882,0.03529411764705882,0.07058823529411765,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.39215686274509803,0.06666666666666667,0.10588235294117647,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.5568627450980392,0.0784313725490196,0.11372549019607843,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6941176470588235,0.16862745098039217,0.10588235294117647,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7529411764705882,0.3411764705882353,0.24705882352941178,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.803921568627451,0.49019607843137253,0.4117647058823529,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.8470588235294118,0.6352941176470588,0.5803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.8901960784313725,0.7803921568627451,0.7568627450980392,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9450980392156862,0.9294117647058824,0.9254901960784314,1);\n  float a0 = smoothstep(e0,e1,x_20);\n  float a1 = smoothstep(e1,e2,x_20);\n  float a2 = smoothstep(e2,e3,x_20);\n  float a3 = smoothstep(e3,e4,x_20);\n  float a4 = smoothstep(e4,e5,x_20);\n  float a5 = smoothstep(e5,e6,x_20);\n  float a6 = smoothstep(e6,e7,x_20);\n  float a7 = smoothstep(e7,e8,x_20);\n  return max(mix(v0,v1,a0)*step(e0,x_20)*step(x_20,e1),\n    max(mix(v1,v2,a1)*step(e1,x_20)*step(x_20,e2),\n    max(mix(v2,v3,a2)*step(e2,x_20)*step(x_20,e3),\n    max(mix(v3,v4,a3)*step(e3,x_20)*step(x_20,e4),\n    max(mix(v4,v5,a4)*step(e4,x_20)*step(x_20,e5),\n    max(mix(v5,v6,a5)*step(e5,x_20)*step(x_20,e6),\n    max(mix(v6,v7,a6)*step(e6,x_20)*step(x_20,e7),mix(v7,v8,a7)*step(e7,x_20)*step(x_20,e8)\n  )))))));\n}\n\nvec4 oxygen (float x_11) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.25098039215686274,0.0196078431372549,0.0196078431372549,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.41568627450980394,0.023529411764705882,0.058823529411764705,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.5647058823529412,0.10196078431372549,0.027450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6588235294117647,0.25098039215686274,0.011764705882352941,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7372549019607844,0.39215686274509803,0.01568627450980392,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.807843137254902,0.5333333333333333,0.043137254901960784,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.8627450980392157,0.6823529411764706,0.09803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9058823529411765,0.8431372549019608,0.17254901960784313,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9725490196078431,0.996078431372549,0.4117647058823529,1);\n  float a0 = smoothstep(e0,e1,x_11);\n  float a1 = smoothstep(e1,e2,x_11);\n  float a2 = smoothstep(e2,e3,x_11);\n  float a3 = smoothstep(e3,e4,x_11);\n  float a4 = smoothstep(e4,e5,x_11);\n  float a5 = smoothstep(e5,e6,x_11);\n  float a6 = smoothstep(e6,e7,x_11);\n  float a7 = smoothstep(e7,e8,x_11);\n  return max(mix(v0,v1,a0)*step(e0,x_11)*step(x_11,e1),\n    max(mix(v1,v2,a1)*step(e1,x_11)*step(x_11,e2),\n    max(mix(v2,v3,a2)*step(e2,x_11)*step(x_11,e3),\n    max(mix(v3,v4,a3)*step(e3,x_11)*step(x_11,e4),\n    max(mix(v4,v5,a4)*step(e4,x_11)*step(x_11,e5),\n    max(mix(v5,v6,a5)*step(e5,x_11)*step(x_11,e6),\n    max(mix(v6,v7,a6)*step(e6,x_11)*step(x_11,e7),mix(v7,v8,a7)*step(e7,x_11)*step(x_11,e8)\n  )))))));\n}\n\nvec4 par (float x_28) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.2,0.0784313725490196,0.09411764705882353,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.35294117647058826,0.12549019607843137,0.13725490196078433,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.5058823529411764,0.17254901960784313,0.13333333333333333,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6235294117647059,0.26666666666666666,0.09803921568627451,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7137254901960784,0.38823529411764707,0.07450980392156863,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.7803921568627451,0.5254901960784314,0.08627450980392157,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.8313725490196079,0.6705882352941176,0.13725490196078433,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.8666666666666667,0.8235294117647058,0.21176470588235294,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.8823529411764706,0.9921568627450981,0.29411764705882354,1);\n  float a0 = smoothstep(e0,e1,x_28);\n  float a1 = smoothstep(e1,e2,x_28);\n  float a2 = smoothstep(e2,e3,x_28);\n  float a3 = smoothstep(e3,e4,x_28);\n  float a4 = smoothstep(e4,e5,x_28);\n  float a5 = smoothstep(e5,e6,x_28);\n  float a6 = smoothstep(e6,e7,x_28);\n  float a7 = smoothstep(e7,e8,x_28);\n  return max(mix(v0,v1,a0)*step(e0,x_28)*step(x_28,e1),\n    max(mix(v1,v2,a1)*step(e1,x_28)*step(x_28,e2),\n    max(mix(v2,v3,a2)*step(e2,x_28)*step(x_28,e3),\n    max(mix(v3,v4,a3)*step(e3,x_28)*step(x_28,e4),\n    max(mix(v4,v5,a4)*step(e4,x_28)*step(x_28,e5),\n    max(mix(v5,v6,a5)*step(e5,x_28)*step(x_28,e6),\n    max(mix(v6,v7,a6)*step(e6,x_28)*step(x_28,e7),mix(v7,v8,a7)*step(e7,x_28)*step(x_28,e8)\n  )))))));\n}\n\nvec4 phase (float x_39) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.5686274509803921,0.4117647058823529,0.07058823529411765,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.7215686274509804,0.2784313725490196,0.14901960784313725,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.7294117647058823,0.22745098039215686,0.45098039215686275,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6274509803921569,0.2784313725490196,0.7254901960784313,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.43137254901960786,0.3803921568627451,0.8549019607843137,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.19607843137254902,0.4823529411764706,0.6431372549019608,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.12156862745098039,0.5137254901960784,0.43137254901960786,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.30196078431372547,0.5058823529411764,0.13333333333333333,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5686274509803921,0.4117647058823529,0.07058823529411765,1);\n  float a0 = smoothstep(e0,e1,x_39);\n  float a1 = smoothstep(e1,e2,x_39);\n  float a2 = smoothstep(e2,e3,x_39);\n  float a3 = smoothstep(e3,e4,x_39);\n  float a4 = smoothstep(e4,e5,x_39);\n  float a5 = smoothstep(e5,e6,x_39);\n  float a6 = smoothstep(e6,e7,x_39);\n  float a7 = smoothstep(e7,e8,x_39);\n  return max(mix(v0,v1,a0)*step(e0,x_39)*step(x_39,e1),\n    max(mix(v1,v2,a1)*step(e1,x_39)*step(x_39,e2),\n    max(mix(v2,v3,a2)*step(e2,x_39)*step(x_39,e3),\n    max(mix(v3,v4,a3)*step(e3,x_39)*step(x_39,e4),\n    max(mix(v4,v5,a4)*step(e4,x_39)*step(x_39,e5),\n    max(mix(v5,v6,a5)*step(e5,x_39)*step(x_39,e6),\n    max(mix(v6,v7,a6)*step(e6,x_39)*step(x_39,e7),mix(v7,v8,a7)*step(e7,x_39)*step(x_39,e8)\n  )))))));\n}\n\nvec4 salinity (float x_26) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.16470588235294117,0.09411764705882353,0.4235294117647059,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.12941176470588237,0.19607843137254902,0.6352941176470588,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.058823529411764705,0.35294117647058826,0.5686274509803921,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.1568627450980392,0.4627450980392157,0.5372549019607843,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.23137254901960785,0.5725490196078431,0.5294117647058824,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.30980392156862746,0.6862745098039216,0.49411764705882355,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.47058823529411764,0.796078431372549,0.40784313725490196,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.7568627450980392,0.8666666666666667,0.39215686274509803,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.9372549019607843,0.6039215686274509,1);\n  float a0 = smoothstep(e0,e1,x_26);\n  float a1 = smoothstep(e1,e2,x_26);\n  float a2 = smoothstep(e2,e3,x_26);\n  float a3 = smoothstep(e3,e4,x_26);\n  float a4 = smoothstep(e4,e5,x_26);\n  float a5 = smoothstep(e5,e6,x_26);\n  float a6 = smoothstep(e6,e7,x_26);\n  float a7 = smoothstep(e7,e8,x_26);\n  return max(mix(v0,v1,a0)*step(e0,x_26)*step(x_26,e1),\n    max(mix(v1,v2,a1)*step(e1,x_26)*step(x_26,e2),\n    max(mix(v2,v3,a2)*step(e2,x_26)*step(x_26,e3),\n    max(mix(v3,v4,a3)*step(e3,x_26)*step(x_26,e4),\n    max(mix(v4,v5,a4)*step(e4,x_26)*step(x_26,e5),\n    max(mix(v5,v6,a5)*step(e5,x_26)*step(x_26,e6),\n    max(mix(v6,v7,a6)*step(e6,x_26)*step(x_26,e7),mix(v7,v8,a7)*step(e7,x_26)*step(x_26,e8)\n  )))))));\n}\n\nvec4 temperature (float x_8) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.01568627450980392,0.13725490196078433,0.2,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.09019607843137255,0.2,0.47843137254901963,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3333333333333333,0.23137254901960785,0.615686274509804,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5058823529411764,0.30980392156862746,0.5607843137254902,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.6862745098039216,0.37254901960784315,0.5098039215686274,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8705882352941177,0.4392156862745098,0.396078431372549,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9764705882352941,0.5725490196078431,0.25882352941176473,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.7686274509803922,0.2549019607843137,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9098039215686274,0.9803921568627451,0.3568627450980392,1);\n  float a0 = smoothstep(e0,e1,x_8);\n  float a1 = smoothstep(e1,e2,x_8);\n  float a2 = smoothstep(e2,e3,x_8);\n  float a3 = smoothstep(e3,e4,x_8);\n  float a4 = smoothstep(e4,e5,x_8);\n  float a5 = smoothstep(e5,e6,x_8);\n  float a6 = smoothstep(e6,e7,x_8);\n  float a7 = smoothstep(e7,e8,x_8);\n  return max(mix(v0,v1,a0)*step(e0,x_8)*step(x_8,e1),\n    max(mix(v1,v2,a1)*step(e1,x_8)*step(x_8,e2),\n    max(mix(v2,v3,a2)*step(e2,x_8)*step(x_8,e3),\n    max(mix(v3,v4,a3)*step(e3,x_8)*step(x_8,e4),\n    max(mix(v4,v5,a4)*step(e4,x_8)*step(x_8,e5),\n    max(mix(v5,v6,a5)*step(e5,x_8)*step(x_8,e6),\n    max(mix(v6,v7,a6)*step(e6,x_8)*step(x_8,e7),mix(v7,v8,a7)*step(e7,x_8)*step(x_8,e8)\n  )))))));\n}\n\nvec4 turbidity (float x_40) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.13333333333333333,0.12156862745098039,0.10588235294117647,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.2549019607843137,0.19607843137254902,0.1607843137254902,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3843137254901961,0.27058823529411763,0.20392156862745098,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5137254901960784,0.34901960784313724,0.2235294117647059,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.6313725490196078,0.4392156862745098,0.23137254901960785,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.7254901960784313,0.5490196078431373,0.25882352941176473,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.792156862745098,0.6823529411764706,0.34509803921568627,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.8470588235294118,0.8196078431372549,0.49411764705882355,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9137254901960784,0.9647058823529412,0.6705882352941176,1);\n  float a0 = smoothstep(e0,e1,x_40);\n  float a1 = smoothstep(e1,e2,x_40);\n  float a2 = smoothstep(e2,e3,x_40);\n  float a3 = smoothstep(e3,e4,x_40);\n  float a4 = smoothstep(e4,e5,x_40);\n  float a5 = smoothstep(e5,e6,x_40);\n  float a6 = smoothstep(e6,e7,x_40);\n  float a7 = smoothstep(e7,e8,x_40);\n  return max(mix(v0,v1,a0)*step(e0,x_40)*step(x_40,e1),\n    max(mix(v1,v2,a1)*step(e1,x_40)*step(x_40,e2),\n    max(mix(v2,v3,a2)*step(e2,x_40)*step(x_40,e3),\n    max(mix(v3,v4,a3)*step(e3,x_40)*step(x_40,e4),\n    max(mix(v4,v5,a4)*step(e4,x_40)*step(x_40,e5),\n    max(mix(v5,v6,a5)*step(e5,x_40)*step(x_40,e6),\n    max(mix(v6,v7,a6)*step(e6,x_40)*step(x_40,e7),mix(v7,v8,a7)*step(e7,x_40)*step(x_40,e8)\n  )))))));\n}\n\nvec4 velocity_blue_297387650 (float x_2) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.06666666666666667,0.12549019607843137,0.25098039215686274,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.13725490196078433,0.20392156862745098,0.4549019607843137,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.11372549019607843,0.3176470588235294,0.611764705882353,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.12156862745098039,0.44313725490196076,0.6352941176470588,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.19607843137254902,0.5647058823529412,0.6627450980392157,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.3411764705882353,0.6784313725490196,0.6901960784313725,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5843137254901961,0.7686274509803922,0.7411764705882353,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.796078431372549,0.8666666666666667,0.8274509803921568,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.996078431372549,0.984313725490196,0.9019607843137255,1);\n  float a0 = smoothstep(e0,e1,x_2);\n  float a1 = smoothstep(e1,e2,x_2);\n  float a2 = smoothstep(e2,e3,x_2);\n  float a3 = smoothstep(e3,e4,x_2);\n  float a4 = smoothstep(e4,e5,x_2);\n  float a5 = smoothstep(e5,e6,x_2);\n  float a6 = smoothstep(e6,e7,x_2);\n  float a7 = smoothstep(e7,e8,x_2);\n  return max(mix(v0,v1,a0)*step(e0,x_2)*step(x_2,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2)*step(x_2,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2)*step(x_2,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2)*step(x_2,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2)*step(x_2,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2)*step(x_2,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2)*step(x_2,e7),mix(v7,v8,a7)*step(e7,x_2)*step(x_2,e8)\n  )))))));\n}\n\nvec4 velocity_green_2558432129 (float x_27) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.09019607843137255,0.13725490196078433,0.07450980392156863,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.09411764705882353,0.25098039215686274,0.14901960784313725,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.043137254901960784,0.37254901960784315,0.17647058823529413,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.15294117647058825,0.4823529411764706,0.13725490196078433,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.37254901960784315,0.5725490196078431,0.047058823529411764,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.596078431372549,0.6470588235294118,0.07058823529411765,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.788235294117647,0.7294117647058823,0.27058823529411763,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9137254901960784,0.8470588235294118,0.5372549019607843,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(1,0.9921568627450981,0.803921568627451,1);\n  float a0 = smoothstep(e0,e1,x_27);\n  float a1 = smoothstep(e1,e2,x_27);\n  float a2 = smoothstep(e2,e3,x_27);\n  float a3 = smoothstep(e3,e4,x_27);\n  float a4 = smoothstep(e4,e5,x_27);\n  float a5 = smoothstep(e5,e6,x_27);\n  float a6 = smoothstep(e6,e7,x_27);\n  float a7 = smoothstep(e7,e8,x_27);\n  return max(mix(v0,v1,a0)*step(e0,x_27)*step(x_27,e1),\n    max(mix(v1,v2,a1)*step(e1,x_27)*step(x_27,e2),\n    max(mix(v2,v3,a2)*step(e2,x_27)*step(x_27,e3),\n    max(mix(v3,v4,a3)*step(e3,x_27)*step(x_27,e4),\n    max(mix(v4,v5,a4)*step(e4,x_27)*step(x_27,e5),\n    max(mix(v5,v6,a5)*step(e5,x_27)*step(x_27,e6),\n    max(mix(v6,v7,a6)*step(e6,x_27)*step(x_27,e7),mix(v7,v8,a7)*step(e7,x_27)*step(x_27,e8)\n  )))))));\n}\n\nvec4 cubehelix (float x_37) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.07;\n  const vec4 v1 = vec4(0.08627450980392157,0.0196078431372549,0.23137254901960785,1);\n  const float e2 = 0.13;\n  const vec4 v2 = vec4(0.23529411764705882,0.01568627450980392,0.4117647058823529,1);\n  const float e3 = 0.2;\n  const vec4 v3 = vec4(0.42745098039215684,0.00392156862745098,0.5294117647058824,1);\n  const float e4 = 0.27;\n  const vec4 v4 = vec4(0.6313725490196078,0,0.5764705882352941,1);\n  const float e5 = 0.33;\n  const vec4 v5 = vec4(0.8235294117647058,0.00784313725490196,0.5568627450980392,1);\n  const float e6 = 0.4;\n  const vec4 v6 = vec4(0.984313725490196,0.043137254901960784,0.4823529411764706,1);\n  const float e7 = 0.47;\n  const vec4 v7 = vec4(1,0.11372549019607843,0.3803921568627451,1);\n  const float e8 = 0.53;\n  const vec4 v8 = vec4(1,0.21176470588235294,0.27058823529411763,1);\n  const float e9 = 0.6;\n  const vec4 v9 = vec4(1,0.3333333333333333,0.1803921568627451,1);\n  const float e10 = 0.67;\n  const vec4 v10 = vec4(1,0.47058823529411764,0.13333333333333333,1);\n  const float e11 = 0.73;\n  const vec4 v11 = vec4(1,0.615686274509804,0.1450980392156863,1);\n  const float e12 = 0.8;\n  const vec4 v12 = vec4(0.9450980392156862,0.7490196078431373,0.2235294117647059,1);\n  const float e13 = 0.87;\n  const vec4 v13 = vec4(0.8784313725490196,0.8627450980392157,0.36470588235294116,1);\n  const float e14 = 0.93;\n  const vec4 v14 = vec4(0.8549019607843137,0.9450980392156862,0.5568627450980392,1);\n  const float e15 = 1.0;\n  const vec4 v15 = vec4(0.8901960784313725,0.9921568627450981,0.7764705882352941,1);\n  float a0 = smoothstep(e0,e1,x_37);\n  float a1 = smoothstep(e1,e2,x_37);\n  float a2 = smoothstep(e2,e3,x_37);\n  float a3 = smoothstep(e3,e4,x_37);\n  float a4 = smoothstep(e4,e5,x_37);\n  float a5 = smoothstep(e5,e6,x_37);\n  float a6 = smoothstep(e6,e7,x_37);\n  float a7 = smoothstep(e7,e8,x_37);\n  float a8 = smoothstep(e8,e9,x_37);\n  float a9 = smoothstep(e9,e10,x_37);\n  float a10 = smoothstep(e10,e11,x_37);\n  float a11 = smoothstep(e11,e12,x_37);\n  float a12 = smoothstep(e12,e13,x_37);\n  float a13 = smoothstep(e13,e14,x_37);\n  float a14 = smoothstep(e14,e15,x_37);\n  return max(mix(v0,v1,a0)*step(e0,x_37)*step(x_37,e1),\n    max(mix(v1,v2,a1)*step(e1,x_37)*step(x_37,e2),\n    max(mix(v2,v3,a2)*step(e2,x_37)*step(x_37,e3),\n    max(mix(v3,v4,a3)*step(e3,x_37)*step(x_37,e4),\n    max(mix(v4,v5,a4)*step(e4,x_37)*step(x_37,e5),\n    max(mix(v5,v6,a5)*step(e5,x_37)*step(x_37,e6),\n    max(mix(v6,v7,a6)*step(e6,x_37)*step(x_37,e7),\n    max(mix(v7,v8,a7)*step(e7,x_37)*step(x_37,e8),\n    max(mix(v8,v9,a8)*step(e8,x_37)*step(x_37,e9),\n    max(mix(v9,v10,a9)*step(e9,x_37)*step(x_37,e10),\n    max(mix(v10,v11,a10)*step(e10,x_37)*step(x_37,e11),\n    max(mix(v11,v12,a11)*step(e11,x_37)*step(x_37,e12),\n    max(mix(v12,v13,a12)*step(e12,x_37)*step(x_37,e13),\n    max(mix(v13,v14,a13)*step(e13,x_37)*step(x_37,e14),mix(v14,v15,a14)*step(e14,x_37)*step(x_37,e15)\n  ))))))))))))));\n}\n\n// our texture\nuniform usampler2D channel0;\nuniform usampler2D channel1;\nuniform usampler2D channel2;\nuniform usampler2D channel3;\nuniform usampler2D channel4;\nuniform usampler2D channel5;\n\n// range\nuniform vec2 sliderValues[6];\n\n// opacity\nuniform float opacity;\nuniform float divisor;\n\nin vec2 vTexCoord;\n\nout vec4 color;\n\nvoid main() {\n  float intensityValue0 = (float(texture(channel0, vTexCoord).r) - sliderValues[0][0]) / sliderValues[0][1];\n  float intensityValue1 = (float(texture(channel1, vTexCoord).r) - sliderValues[1][0]) / sliderValues[1][1];\n  float intensityValue2 = (float(texture(channel2, vTexCoord).r) - sliderValues[2][0]) / sliderValues[2][1];\n  float intensityValue3 = (float(texture(channel3, vTexCoord).r) - sliderValues[3][0]) / sliderValues[3][1];\n  float intensityValue4 = (float(texture(channel4, vTexCoord).r) - sliderValues[4][0]) / sliderValues[4][1];\n  float intensityValue5 = (float(texture(channel5, vTexCoord).r) - sliderValues[5][0]) / sliderValues[5][1];\n\n  float intensityArray[6] = float[6](intensityValue0, intensityValue1, intensityValue2, intensityValue3, intensityValue4, intensityValue5);\n  float intensityCombo = 0.0;\n  for(int i = 0; i < 6; i++) {\n    intensityCombo += max(0.0,intensityArray[i]);\n  }\n  color = vec4(colormapFunction(min(1.0,intensityCombo)).xyz, opacity);\n}\n");
// CONCATENATED MODULE: ./src/layers/XRLayer/xr-layer-fragment.glsl
/* harmony default export */ var xr_layer_fragment = ("#version 300 es\n#define SHADER_NAME xr-layer-fragment-shader\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n#define GLSLIFY 1\n\n// our texture\nuniform usampler2D channel0;\nuniform usampler2D channel1;\nuniform usampler2D channel2;\nuniform usampler2D channel3;\nuniform usampler2D channel4;\nuniform usampler2D channel5;\n\n// range\nuniform vec2 sliderValues[6];\n\n// color\nuniform vec3 colorValues[6];\n\n// opacity\nuniform float opacity;\n\nin vec2 vTexCoord;\n\nout vec4 color;\n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvec3 rgb2hsv(vec3 rgb) {\n \tfloat Cmax = max(rgb.r, max(rgb.g, rgb.b));\n \tfloat Cmin = min(rgb.r, min(rgb.g, rgb.b));\n \tfloat delta = Cmax - Cmin;\n\n \tvec3 hsv = vec3(0., 0., Cmax);\n\n \tif (Cmax > Cmin) {\n \t\thsv.y = delta / Cmax;\n\n \t\tif (rgb.r == Cmax) {\n      hsv.x = (rgb.g - rgb.b) / delta;\n    }\n \t\telse {\n \t\t\tif (rgb.g == Cmax){\n        hsv.x = 2. + (rgb.b - rgb.r) / delta;\n      }\n \t\t\telse {\n        hsv.x = 4. + (rgb.r - rgb.g) / delta;\n      }\n \t\t}\n \t\thsv.x = fract(hsv.x / 6.);\n \t}\n \treturn hsv;\n }\n\nvoid main() {\n  float intensityValue0 = (float(texture(channel0, vTexCoord).r) - sliderValues[0][0]) / sliderValues[0][1];\n  float intensityValue1 = (float(texture(channel1, vTexCoord).r) - sliderValues[1][0]) / sliderValues[1][1];\n  float intensityValue2 = (float(texture(channel2, vTexCoord).r) - sliderValues[2][0]) / sliderValues[2][1];\n  float intensityValue3 = (float(texture(channel3, vTexCoord).r) - sliderValues[3][0]) / sliderValues[3][1];\n  float intensityValue4 = (float(texture(channel4, vTexCoord).r) - sliderValues[4][0]) / sliderValues[4][1];\n  float intensityValue5 = (float(texture(channel5, vTexCoord).r) - sliderValues[5][0]) / sliderValues[5][1];\n\n  vec3 rgbCombo = vec3(0.0);\n  vec3 hsvCombo = vec3(0.0);\n  float intensityArray[6] = float[6](intensityValue0, intensityValue1, intensityValue2, intensityValue3, intensityValue4, intensityValue5);\n\n  for(int i = 0; i < 6; i++) {\n    hsvCombo = rgb2hsv(vec3(colorValues[i]));\n    hsvCombo = vec3(hsvCombo.xy, max(0.0,intensityArray[i]));\n    rgbCombo += hsv2rgb(hsvCombo);\n  }\n\n  color = vec4(rgbCombo, opacity);\n  geometry.uv = vTexCoord;\n  DECKGL_FILTER_COLOR(color, geometry);\n}\n");
// CONCATENATED MODULE: ./src/constants.js

var MAX_COLOR_INTENSITY = 255;
var DEFAULT_COLOR_OFF = [0, 0, 0];
var MAX_SLIDERS_AND_CHANNELS = 6;
var DTYPE_VALUES = {
  '<u1': {
    format: constants_default.a.R8UI,
    dataFormat: constants_default.a.RED_INTEGER,
    type: constants_default.a.UNSIGNED_BYTE,
    max: Math.pow(2, 8) - 1,
    TypedArray: Uint8Array
  },
  '<u2': {
    format: constants_default.a.R16UI,
    dataFormat: constants_default.a.RED_INTEGER,
    type: constants_default.a.UNSIGNED_SHORT,
    max: Math.pow(2, 16) - 1,
    TypedArray: Uint16Array
  },
  '<u4': {
    format: constants_default.a.R32UI,
    dataFormat: constants_default.a.RED_INTEGER,
    type: constants_default.a.UNSIGNED_INT,
    max: Math.pow(2, 32) - 1,
    TypedArray: Uint32Array
  },
  '<f4': {
    format: constants_default.a.R32F,
    dataFormat: constants_default.a.RED,
    type: constants_default.a.FLOAT,
    max: Math.pow(2, 31) - 1,
    TypedArray: Float32Array
  }
};
// CONCATENATED MODULE: ./src/layers/utils.js


function range(len) {
  return toConsumableArray_default()(Array(len).keys());
}
function padWithDefault(arr, defaultValue, padWidth) {
  for (var i = 0; i < padWidth; i += 1) {
    arr.push(defaultValue);
  }

  return arr;
}
function padColorsAndSliders(_ref) {
  var sliderValues = _ref.sliderValues,
      colorValues = _ref.colorValues,
      channelIsOn = _ref.channelIsOn,
      domain = _ref.domain,
      dtype = _ref.dtype;
  var lengths = [sliderValues.length, colorValues.length];

  if (lengths.every(function (l) {
    return l !== lengths[0];
  })) {
    throw Error('Inconsistent number of slider values and colors provided');
  }

  var colors = colorValues.map(function (color, i) {
    return channelIsOn[i] ? color.map(function (c) {
      return c / MAX_COLOR_INTENSITY;
    }) : DEFAULT_COLOR_OFF;
  });
  var maxSliderValue = domain && domain[1] || DTYPE_VALUES[dtype].max;
  var sliders = sliderValues.map(function (slider, i) {
    return channelIsOn[i] ? slider : [maxSliderValue, maxSliderValue];
  }); // Need to pad sliders and colors with default values (required by shader)

  var padSize = MAX_SLIDERS_AND_CHANNELS - colors.length;

  if (padSize < 0) {
    throw Error("".concat(lengths, " channels passed in, but only 6 are allowed."));
  }

  var paddedColorValues = padWithDefault(colors, DEFAULT_COLOR_OFF, padSize);
  var paddedSliderValues = padWithDefault(sliders, [maxSliderValue, maxSliderValue], padSize);
  var paddedColorsAndSliders = {
    paddedSliderValues: paddedSliderValues.reduce(function (acc, val) {
      return acc.concat(val);
    }, []),
    // flatten for use on shaders
    paddedColorValues: paddedColorValues.reduce(function (acc, val) {
      return acc.concat(val);
    }, [])
  };
  return paddedColorsAndSliders;
}
// CONCATENATED MODULE: ./src/layers/XRLayer/XRLayer.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable prefer-destructuring */
// A lot of this codes inherits paradigms form DeckGL that
// we live in place for now, hence some of the not-destructuring








var defaultProps = {
  pickable: true,
  coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
  channelData: {
    type: 'array',
    value: {},
    async: true
  },
  bounds: {
    type: 'array',
    value: [0, 0, 1, 1],
    compare: true
  },
  colorValues: {
    type: 'array',
    value: [],
    compare: true
  },
  sliderValues: {
    type: 'array',
    value: [],
    compare: true
  },
  channelIsOn: {
    type: 'array',
    value: [],
    compare: true
  },
  opacity: {
    type: 'number',
    value: 1,
    compare: true
  },
  dtype: {
    type: 'string',
    value: '<u2',
    compare: true
  },
  colormap: {
    type: 'string',
    value: '',
    compare: true
  }
};
/**
 * This layer serves as the workhorse of the project, handling all the rendering.  Much of it is
 * adapted from BitmapLayer in DeckGL.
 * XR = eXtended Range i.e more than the standard 8-bit RGBA data format
 * (16/32 bit floats/ints/uints with more than 3/4 channels).
 */

var XRLayer_XRLayer = /*#__PURE__*/function (_Layer) {
  inherits_default()(XRLayer, _Layer);

  var _super = _createSuper(XRLayer);

  function XRLayer() {
    classCallCheck_default()(this, XRLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(XRLayer, [{
    key: "getShaders",

    /**
     * This function chooses a shader (colormapping or not) and
     * replaces `usampler` with `sampler` if the data is not an unsigned integer
     */
    value: function getShaders() {
      var _this$props = this.props,
          colormap = _this$props.colormap,
          dtype = _this$props.dtype;
      var fragmentShaderColormap = colormap ? xr_layer_fragment_colormap.replace('colormapFunction', colormap) : xr_layer_fragment;
      var fragmentShaderDtype = dtype === '<f4' ? fragmentShaderColormap.replace(/usampler/g, 'sampler') : fragmentShaderColormap;
      return get_default()(getPrototypeOf_default()(XRLayer.prototype), "getShaders", this).call(this, {
        vs: xr_layer_vertex,
        fs: fragmentShaderDtype,
        modules: [core_["project32"], core_["picking"]]
      });
    }
    /**
     * This function initializes the internal state.
     */

  }, {
    key: "initializeState",
    value: function initializeState() {
      var attributeManager = this.getAttributeManager();
      attributeManager.add({
        positions: {
          size: 3,
          type: constants_default.a.DOUBLE,
          fp64: this.use64bitPositions(),
          update: this.calculatePositions,
          noAlloc: true
        }
      });
      this.setState({
        numInstances: 1,
        positions: new Float64Array(12)
      });
    }
    /**
     * This function finalizes state by clearing all textures from the WebGL context
     */

  }, {
    key: "finalizeState",
    value: function finalizeState() {
      get_default()(getPrototypeOf_default()(XRLayer.prototype), "finalizeState", this).call(this);

      if (this.state.textures) {
        Object.values(this.state.textures).forEach(function (tex) {
          return tex && tex["delete"]();
        });
      }
    }
    /**
     * This function updates state by retriggering model creation (shader compilation and attribute binding)
     * and loading any textures that need be loading.
     */

  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;

      // setup model first
      if (changeFlags.extensionsChanged || props.colormap !== oldProps.colormap) {
        var gl = this.context.gl;

        if (this.state.model) {
          this.state.model["delete"]();
        }

        this.setState({
          model: this._getModel(gl)
        });
        this.getAttributeManager().invalidateAll();
      }

      if (props.channelData !== oldProps.channelData) {
        this.loadTexture(props.channelData);
      }

      var attributeManager = this.getAttributeManager();

      if (props.bounds !== oldProps.bounds) {
        attributeManager.invalidate('positions');
      }
    }
    /**
     * This function creates the luma.gl model.
     */

  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      if (!gl) {
        return null;
      }
      /*
         0,0 --- 1,0
          |       |
         0,1 --- 1,1
       */


      return new external_luma_gl_core_["Model"](gl, _objectSpread(_objectSpread({}, this.getShaders()), {}, {
        id: this.props.id,
        geometry: new external_luma_gl_core_["Geometry"]({
          drawMode: constants_default.a.TRIANGLE_FAN,
          vertexCount: 4,
          attributes: {
            texCoords: new Float32Array([0, 1, 0, 0, 1, 0, 1, 1])
          }
        }),
        isInstanced: false
      }));
    }
    /**
     * This function generates view positions for use as a vec3 in the shader
     */

  }, {
    key: "calculatePositions",
    value: function calculatePositions(attributes) {
      var positions = this.state.positions;
      var bounds = this.props.bounds; // bounds as [minX, minY, maxX, maxY]

      /*
        (minX0, maxY3) ---- (maxX2, maxY3)
               |                  |
               |                  |
               |                  |
        (minX0, minY1) ---- (maxX2, minY1)
      */

      positions[0] = bounds[0];
      positions[1] = bounds[1];
      positions[2] = 0;
      positions[3] = bounds[0];
      positions[4] = bounds[3];
      positions[5] = 0;
      positions[6] = bounds[2];
      positions[7] = bounds[3];
      positions[8] = 0;
      positions[9] = bounds[2];
      positions[10] = bounds[1];
      positions[11] = 0; // eslint-disable-next-line  no-param-reassign

      attributes.value = positions;
    }
    /**
     * This function runs the shaders and draws to the canvas
     */

  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var _this$state = this.state,
          textures = _this$state.textures,
          model = _this$state.model;

      if (textures && model) {
        var _this$props2 = this.props,
            sliderValues = _this$props2.sliderValues,
            colorValues = _this$props2.colorValues,
            opacity = _this$props2.opacity,
            domain = _this$props2.domain,
            dtype = _this$props2.dtype,
            channelIsOn = _this$props2.channelIsOn; // Check number of textures not null.

        var numTextures = Object.values(textures).filter(function (t) {
          return t;
        }).length; // Slider values and color values can come in before textures since their data is async.
        // Thus we pad based on the number of textures bound.

        var _padColorsAndSliders = padColorsAndSliders({
          sliderValues: sliderValues.slice(0, numTextures),
          colorValues: colorValues.slice(0, numTextures),
          channelIsOn: channelIsOn.slice(0, numTextures),
          domain: domain,
          dtype: dtype
        }),
            paddedSliderValues = _padColorsAndSliders.paddedSliderValues,
            paddedColorValues = _padColorsAndSliders.paddedColorValues;

        model.setUniforms(_objectSpread(_objectSpread({}, uniforms), {}, {
          colorValues: paddedColorValues,
          sliderValues: paddedSliderValues,
          opacity: opacity
        }, textures)).draw();
      }
    }
    /**
     * This function loads all textures from incoming resolved promises/data from the loaders by calling `dataToTexture`
     */

  }, {
    key: "loadTexture",
    value: function loadTexture(channelData) {
      var _this = this;

      var textures = {
        channel0: null,
        channel1: null,
        channel2: null,
        channel3: null,
        channel4: null,
        channel5: null
      };

      if (this.state.textures) {
        Object.values(this.state.textures).forEach(function (tex) {
          return tex && tex["delete"]();
        });
      }

      if (channelData && Object.keys(channelData).length > 0 && channelData.data) {
        channelData.data.forEach(function (d, i) {
          textures["channel".concat(i)] = _this.dataToTexture(d, channelData.width, channelData.height);
        }, this);
        this.setState({
          textures: textures
        });
      }
    }
    /**
     * This function creates textures from the data
     */

  }, {
    key: "dataToTexture",
    value: function dataToTexture(data, width, height) {
      var _parameters;

      var dtype = this.props.dtype;
      var _DTYPE_VALUES$dtype = DTYPE_VALUES[dtype],
          format = _DTYPE_VALUES$dtype.format,
          dataFormat = _DTYPE_VALUES$dtype.dataFormat,
          type = _DTYPE_VALUES$dtype.type;
      var texture = new external_luma_gl_core_["Texture2D"](this.context.gl, {
        width: width,
        height: height,
        data: data,
        // we don't want or need mimaps
        mipmaps: false,
        parameters: (_parameters = {}, defineProperty_default()(_parameters, constants_default.a.TEXTURE_MIN_FILTER, constants_default.a.NEAREST), defineProperty_default()(_parameters, constants_default.a.TEXTURE_MAG_FILTER, constants_default.a.NEAREST), defineProperty_default()(_parameters, constants_default.a.TEXTURE_WRAP_S, constants_default.a.CLAMP_TO_EDGE), defineProperty_default()(_parameters, constants_default.a.TEXTURE_WRAP_T, constants_default.a.CLAMP_TO_EDGE), _parameters),
        format: format,
        dataFormat: dataFormat,
        type: type
      });
      return texture;
    }
  }]);

  return XRLayer;
}(core_["Layer"]);


XRLayer_XRLayer.layerName = 'XRLayer';
XRLayer_XRLayer.defaultProps = defaultProps;
// CONCATENATED MODULE: ./src/layers/XRLayer/index.js

/* harmony default export */ var layers_XRLayer = (XRLayer_XRLayer);
// CONCATENATED MODULE: ./src/layers/VivViewerLayer/utils.js


function utils_range(len) {
  return toConsumableArray_default()(Array(len).keys());
}
function renderSubLayers(props) {
  var _props$tile$bbox = props.tile.bbox,
      left = _props$tile$bbox.left,
      top = _props$tile$bbox.top,
      right = _props$tile$bbox.right,
      bottom = _props$tile$bbox.bottom;
  var colorValues = props.colorValues,
      sliderValues = props.sliderValues,
      channelIsOn = props.channelIsOn,
      visible = props.visible,
      opacity = props.opacity,
      data = props.data,
      colormap = props.colormap,
      dtype = props.dtype,
      id = props.id,
      onHover = props.onHover,
      pickable = props.pickable; // Only render in positive coorinate system

  if ([left, top, right, bottom].some(function (v) {
    return v < 0;
  })) {
    return null;
  }

  var xrl = new layers_XRLayer({
    id: "XRLayer-".concat(left, "-").concat(top, "-").concat(right, "-").concat(bottom, "-").concat(id),
    bounds: [left, bottom, right, top],
    channelData: data,
    pickable: pickable,
    // Uncomment to help debugging - shades the tile being hovered over.
    // autoHighlight: true,
    // highlightColor: [80, 80, 80, 50],
    data: null,
    sliderValues: sliderValues,
    colorValues: colorValues,
    channelIsOn: channelIsOn,
    opacity: opacity,
    visible: visible,
    dtype: dtype,
    colormap: colormap,
    onHover: onHover
  });
  return xrl;
}
// CONCATENATED MODULE: ./src/layers/VivViewerLayer/VivViewerLayerBase.js








function VivViewerLayerBase_createSuper(Derived) { var hasNativeReflectConstruct = VivViewerLayerBase_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function VivViewerLayerBase_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function VivViewerLayerBase_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VivViewerLayerBase_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VivViewerLayerBase_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VivViewerLayerBase_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var VivViewerLayerBase_defaultProps = VivViewerLayerBase_objectSpread(VivViewerLayerBase_objectSpread({}, geo_layers_["TileLayer"].defaultProps), {}, {
  pickable: true,
  coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
  sliderValues: {
    type: 'array',
    value: [],
    compare: true
  },
  colorValues: {
    type: 'array',
    value: [],
    compare: true
  },
  channelIsOn: {
    type: 'array',
    value: [],
    compare: true
  },
  minZoom: {
    type: 'number',
    value: 0,
    compare: true
  },
  maxZoom: {
    type: 'number',
    value: 0,
    compare: true
  },
  renderSubLayers: {
    type: 'function',
    value: renderSubLayers,
    compare: false
  },
  opacity: {
    type: 'number',
    value: 1,
    compare: true
  },
  colormap: {
    type: 'string',
    value: '',
    compare: true
  },
  dtype: {
    type: 'string',
    value: '<u2',
    compare: true
  },
  domain: {
    type: 'array',
    value: [],
    compare: true
  },
  viewportId: {
    type: 'string',
    value: '',
    compare: true
  }
});
/**
 * This layer serves as a proxy of sorts to the rendering done in renderSubLayers, reacting to viewport changes in a custom manner.
 */


var VivViewerLayerBase_VivViewerLayerBase = /*#__PURE__*/function (_TileLayer) {
  inherits_default()(VivViewerLayerBase, _TileLayer);

  var _super = VivViewerLayerBase_createSuper(VivViewerLayerBase);

  function VivViewerLayerBase() {
    classCallCheck_default()(this, VivViewerLayerBase);

    return _super.apply(this, arguments);
  }

  createClass_default()(VivViewerLayerBase, [{
    key: "_updateTileset",

    /**
     * This function allows us to controls which viewport gets to update the Tileset2D.
     * This is a uniquely TileLayer issue since it updates based on viewport updates thanks
     * to its ability to handle zoom-pan loading.  Essentially, with a picture-in-picture,
     * this prevents it from detecting the update of some other viewport that is unwanted.
     */
    value: function _updateTileset() {
      if (!this.props.viewportId) {
        get_default()(getPrototypeOf_default()(VivViewerLayerBase.prototype), "_updateTileset", this).call(this);
      }

      if (this.props.viewportId && this.context.viewport.id === this.props.viewportId || // I don't know why, but DeckGL doesn't recognize multiple views on the first pass
      // so we force update on the first pass by checking if there is a viewport in the tileset.
      !this.state.tileset._viewport) {
        get_default()(getPrototypeOf_default()(VivViewerLayerBase.prototype), "_updateTileset", this).call(this);
      }
    }
  }]);

  return VivViewerLayerBase;
}(geo_layers_["TileLayer"]);


VivViewerLayerBase_VivViewerLayerBase.layerName = 'VivViewerLayerBase';
VivViewerLayerBase_VivViewerLayerBase.defaultProps = VivViewerLayerBase_defaultProps;
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "quickselect"
var external_quickselect_ = __webpack_require__(18);
var external_quickselect_default = /*#__PURE__*/__webpack_require__.n(external_quickselect_);

// CONCATENATED MODULE: ./src/loaders/utils.js



function isInTileBounds(_ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      width = _ref.width,
      height = _ref.height,
      tileSize = _ref.tileSize,
      numLevels = _ref.numLevels;
  var xInBounds = x < Math.ceil(width / (tileSize * Math.pow(2, z))) && x >= 0;
  var yInBounds = y < Math.ceil(height / (tileSize * Math.pow(2, z))) && y >= 0;
  var zInBounds = z >= 0 && z < numLevels;
  return xInBounds && yInBounds && zInBounds;
}
function guessRgb(shape) {
  var lastDimSize = shape[shape.length - 1];
  return shape.length > 2 && (lastDimSize === 3 || lastDimSize === 4);
}
/**
 * Pads TypedArray on right and bottom with zeros out to target width
 * and target height respectively.
 * @param {Object} tile { data: TypedArray, width: number, height: number}
 * @param {Object} targetWidth number
 * @param {Object} targetHeight number
 * @returns {TypedArray} TypedArray
 */

function padTileWithZeros(tile, targetWidth, targetHeight) {
  var data = tile.data,
      width = tile.width,
      height = tile.height; // Create new TypedArray with same constructor as source

  var padded = new data.constructor(targetWidth * targetHeight); // Take strips (rows) from original tile data and fill padded tile using
  // multiples of the tileSize as the offset.

  for (var i = 0; i < height; i += 1) {
    var offset = i * width;
    var strip = data.subarray(offset, offset + width);
    padded.set(strip, i * targetWidth);
  }

  return padded;
}
/**
 * Flips the bytes of TypedArray in place. Used to flipendianess
 * Adapted from https://github.com/zbjornson/node-bswap/blob/master/bswap.js
 * @param {TypedArray} src
 * @returns {void}
 */

function byteSwapInplace(src) {
  var b = src.BYTES_PER_ELEMENT;
  var flipper = new Uint8Array(src.buffer, src.byteOffset, src.length * b);
  var numFlips = b / 2;
  var endByteIndex = b - 1;
  var t = 0;

  for (var i = 0; i < flipper.length; i += b) {
    for (var j = 0; j < numFlips; j += 1) {
      t = flipper[i + j];
      flipper[i + j] = flipper[i + endByteIndex - j];
      flipper[i + endByteIndex - j] = t;
    }
  }
}
/**
 * Returns actual image stats for static imagery and an estimate via a downsampled version of image pyramids.
 * This is helpful for generating histograms of your channel data, or scaling your sliders down to a reasonable range.
 * @param {Object} args
 * @param {Object} args.loader A valid loader object.
 * @param {Array} args.loaderSelection Array of valid dimension selections
 * @returns {Array} List of { mean, domain, sd, data, q1, q3 } objects.
 */

function getChannelStats(_x) {
  return _getChannelStats.apply(this, arguments);
}

function _getChannelStats() {
  _getChannelStats = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref2) {
    var loader, loaderSelection, z, rasters, data, channelStats;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loader = _ref2.loader, loaderSelection = _ref2.loaderSelection;
            z = loader.isPyramid ? loader.numLevels - 1 : 0;
            _context.next = 4;
            return loader.getRaster({
              z: z,
              loaderSelection: loaderSelection
            });

          case 4:
            rasters = _context.sent;
            data = rasters.data;
            channelStats = data.map(function (arr) {
              var len = arr.length;
              var min = Infinity;
              var max = -Infinity;
              var total = 0; // Range (min/max).
              // eslint-disable-next-line no-plusplus

              while (len--) {
                if (arr[len] < min) {
                  min = arr[len];
                }

                if (arr[len] > max) {
                  max = arr[len];
                }

                total += arr[len];
              } // Mean.


              var mean = total / arr.length; // Standard Deviation.

              len = arr.length;
              var sumSquared = 0; // eslint-disable-next-line no-plusplus

              while (len--) {
                sumSquared += Math.pow(arr[len] - mean, 2);
              }

              var sd = Math.pow(sumSquared / arr.length, 0.5); // Median, and quartiles via quickselect: https://en.wikipedia.org/wiki/Quickselect.
              // Odd number lengths should round down the index.

              var mid = Math.floor(arr.length / 2);
              var firstQuartileLocation = Math.floor(arr.length / 4);
              var thirdQuartileLocation = 3 * Math.floor(arr.length / 4);
              external_quickselect_default()(arr, mid);
              var median = arr[mid];
              external_quickselect_default()(arr, firstQuartileLocation, 0, mid);
              var q1 = arr[firstQuartileLocation];
              external_quickselect_default()(arr, thirdQuartileLocation, mid, arr.length - 1);
              var q3 = arr[thirdQuartileLocation];
              return {
                mean: mean,
                sd: sd,
                q1: q1,
                q3: q3,
                median: median,
                data: arr,
                domain: [min, max]
              };
            });
            return _context.abrupt("return", channelStats);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getChannelStats.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/layers/StaticImageLayer.js









function StaticImageLayer_createSuper(Derived) { var hasNativeReflectConstruct = StaticImageLayer_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function StaticImageLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var StaticImageLayer_defaultProps = {
  pickable: true,
  coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
  sliderValues: {
    type: 'array',
    value: [],
    compare: true
  },
  channelIsOn: {
    type: 'array',
    value: [],
    compare: true
  },
  colorValues: {
    type: 'array',
    value: [],
    compare: true
  },
  loaderSelection: {
    type: 'array',
    value: [],
    compare: true
  },
  colormap: {
    type: 'string',
    value: '',
    compare: true
  },
  domain: {
    type: 'array',
    value: [],
    compare: true
  },
  translate: {
    type: 'array',
    value: [0, 0],
    compare: true
  },
  scale: {
    type: 'number',
    value: 1,
    compare: true
  },
  loader: {
    type: 'object',
    value: {
      getRaster: function () {
        var _getRaster = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", {
                    data: [],
                    height: 0,
                    width: 0
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getRaster() {
          return _getRaster.apply(this, arguments);
        }

        return getRaster;
      }(),
      dtype: '<u2'
    },
    compare: true
  },
  z: {
    type: 'number',
    value: 0,
    compare: true
  }
};

function scaleBounds(_ref) {
  var width = _ref.width,
      height = _ref.height,
      translate = _ref.translate,
      scale = _ref.scale;

  var _translate = slicedToArray_default()(translate, 2),
      left = _translate[0],
      top = _translate[1];

  var right = width * scale + left;
  var bottom = height * scale + top;
  return [left, bottom, right, top];
}
/*
 * For some reason data of uneven length fails to be converted to a texture (Issue #144).
 * Here we pad the width of tile by one if the data is uneven in length, which seemingly
 * fixes the rendering. This is not ideal since padding the tile makes a copy of underlying
 * buffer, but without digging deeper into the WebGL it is a reasonable fix.
 */


function padEven(data, width, height) {
  var targetWidth = width * height % 2 === 0 ? width : width + 1;
  var padded = data.map(function (d) {
    return padTileWithZeros({
      data: d,
      width: width,
      height: height
    }, targetWidth, height);
  });
  return {
    data: padded,
    width: targetWidth,
    height: height
  };
}
/**
 * This layer wraps XRLayer and generates a static image
 * @param {Object} props
 * @param {Array} props.sliderValues List of [begin, end] values to control each channel's ramp function.
 * @param {Array} props.colorValues List of [r, g, b] values for each channel.
 * @param {Array} props.channelIsOn List of boolean values for each channel for whether or not it is visible.
 * @param {number} props.opacity Opacity of the layer.
 * @param {string} props.colormap String indicating a colormap (default: '').  The full list of options is here: https://github.com/glslify/glsl-colormap#glsl-colormap
 * @param {Array} props.domain Override for the possible max/min values (i.e something different than 65535 for uint16/'<u2').
 * @param {string} props.viewportId Id for the current view.
 * @param {Array} props.translate Translate transformation to be applied to the bounds after scaling.
 * @param {number} props.scale Scaling factor for this layer to be used against the dimensions of the loader's `getRaster`.
 * @param {Object} props.loader Loader to be used for fetching data.  It must implement/return `getRaster` and `dtype`.
 * @param {String} props.onHover Hook function from deck.gl to handle hover objects.
 */


var StaticImageLayer_StaticImageLayer = /*#__PURE__*/function (_CompositeLayer) {
  inherits_default()(StaticImageLayer, _CompositeLayer);

  var _super = StaticImageLayer_createSuper(StaticImageLayer);

  function StaticImageLayer() {
    classCallCheck_default()(this, StaticImageLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(StaticImageLayer, [{
    key: "initializeState",
    value: function initializeState() {
      var _this = this;

      var _this$props = this.props,
          loader = _this$props.loader,
          z = _this$props.z,
          loaderSelection = _this$props.loaderSelection;
      loader.getRaster({
        z: z,
        loaderSelection: loaderSelection
      }).then(function (_ref2) {
        var data = _ref2.data,
            width = _ref2.width,
            height = _ref2.height;

        _this.setState(padEven(data, width, height));
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref3) {
      var _this2 = this;

      var changeFlags = _ref3.changeFlags,
          props = _ref3.props,
          oldProps = _ref3.oldProps;
      var propsChanged = changeFlags.propsChanged;
      var loaderChanged = typeof propsChanged === 'string' && propsChanged.includes('props.loader');
      var loaderSelectionChanged = props.loaderSelection !== oldProps.loaderSelection;

      if (loaderChanged || loaderSelectionChanged) {
        // Only fetch new data to render if loader has changed
        var _this$props2 = this.props,
            loader = _this$props2.loader,
            z = _this$props2.z,
            loaderSelection = _this$props2.loaderSelection;
        loader.getRaster({
          z: z,
          loaderSelection: loaderSelection
        }).then(function (_ref4) {
          var data = _ref4.data,
              width = _ref4.width,
              height = _ref4.height;

          _this2.setState(padEven(data, width, height));
        });
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref5) {
      var info = _ref5.info,
          sourceLayer = _ref5.sourceLayer;
      // eslint-disable-next-line no-param-reassign
      info.sourceLayer = sourceLayer; // eslint-disable-next-line no-param-reassign

      info.tile = sourceLayer.props.tile;
      return info;
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props3 = this.props,
          loader = _this$props3.loader,
          visible = _this$props3.visible,
          opacity = _this$props3.opacity,
          colormap = _this$props3.colormap,
          sliderValues = _this$props3.sliderValues,
          colorValues = _this$props3.colorValues,
          channelIsOn = _this$props3.channelIsOn,
          translate = _this$props3.translate,
          scale = _this$props3.scale,
          z = _this$props3.z,
          domain = _this$props3.domain,
          pickable = _this$props3.pickable,
          id = _this$props3.id;
      var dtype = loader.dtype;
      var _this$state = this.state,
          data = _this$state.data,
          width = _this$state.width,
          height = _this$state.height;
      if (!(width && height)) return null;
      var bounds = scaleBounds({
        width: width,
        height: height,
        translate: translate,
        scale: scale
      });
      return new layers_XRLayer({
        channelData: Promise.resolve({
          data: data,
          width: width,
          height: height
        }),
        pickable: pickable,
        bounds: bounds,
        sliderValues: sliderValues,
        colorValues: colorValues,
        channelIsOn: channelIsOn,
        domain: domain,
        id: "XR-Static-Layer-".concat(0, "-", height, "-").concat(width, "-", 0, "-").concat(z, "-").concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        opacity: opacity,
        visible: visible,
        dtype: dtype,
        colormap: colormap
      });
    }
  }]);

  return StaticImageLayer;
}(core_["CompositeLayer"]);


StaticImageLayer_StaticImageLayer.layerName = 'StaticImageLayer';
StaticImageLayer_StaticImageLayer.defaultProps = StaticImageLayer_defaultProps;
// CONCATENATED MODULE: ./src/layers/VivViewerLayer/VivViewerLayer.js








function VivViewerLayer_createSuper(Derived) { var hasNativeReflectConstruct = VivViewerLayer_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function VivViewerLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var VivViewerLayer_defaultProps = {
  pickable: true,
  onHover: {
    type: 'function',
    value: null,
    compare: false
  }
};
/**
 * This layer generates a VivViewerLayer (tiled) and a StaticImageLayer (background for the tiled layer)
 * @param {Object} props
 * @param {Array} props.sliderValues List of [begin, end] values to control each channel's ramp function.
 * @param {Array} props.colorValues List of [r, g, b] values for each channel.
 * @param {Array} props.channelIsOn List of boolean values for each channel for whether or not it is visible.
 * @param {number} props.opacity Opacity of the layer.
 * @param {string} props.colormap String indicating a colormap (default: '').  The full list of options is here: https://github.com/glslify/glsl-colormap#glsl-colormap
 * @param {Array} props.domain Override for the possible max/min values (i.e something different than 65535 for uint16/'<u2').
 * @param {string} props.viewportId Id for the current view.
 * @param {Object} props.loader Loader to be used for fetching data.  It must implement/return `getTile`, `dtype`, `numLevels`, and `tileSize`, and `getRaster`.
 * @param {Array} props.loaderSelection Selection to be used for fetching data.
 * @param {String} props.id Unique identifier for this layer.
 * @param {String} props.onTileError Custom override for handle tile fetching errors.
 * @param {String} props.onHover Hook function from deck.gl to handle hover objects.
 */

var VivViewerLayer_VivViewerLayer = /*#__PURE__*/function (_CompositeLayer) {
  inherits_default()(VivViewerLayer, _CompositeLayer);

  var _super = VivViewerLayer_createSuper(VivViewerLayer);

  function VivViewerLayer() {
    classCallCheck_default()(this, VivViewerLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(VivViewerLayer, [{
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          loader = _this$props.loader,
          sliderValues = _this$props.sliderValues,
          colorValues = _this$props.colorValues,
          channelIsOn = _this$props.channelIsOn,
          loaderSelection = _this$props.loaderSelection,
          domain = _this$props.domain,
          opacity = _this$props.opacity,
          colormap = _this$props.colormap,
          viewportId = _this$props.viewportId,
          onTileError = _this$props.onTileError,
          onHover = _this$props.onHover,
          pickable = _this$props.pickable,
          id = _this$props.id;
      var tileSize = loader.tileSize,
          numLevels = loader.numLevels,
          dtype = loader.dtype;

      var getTileData = /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref) {
          var x, y, z, tile;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  x = _ref.x, y = _ref.y, z = _ref.z;
                  _context.next = 3;
                  return loader.getTile({
                    x: x,
                    y: y,
                    z: -z,
                    loaderSelection: loaderSelection
                  });

                case 3:
                  tile = _context.sent;

                  if (tile) {
                    if (tile.width !== tileSize || tile.height !== tileSize) {
                      console.warn("Tile data  { width: ".concat(tile.width, ", height: ").concat(tile.height, " } does not match tilesize: ").concat(tileSize));
                    }
                  }

                  return _context.abrupt("return", tile);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function getTileData(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      var tiledLayer = new VivViewerLayerBase_VivViewerLayerBase({
        id: "Tiled-Image-".concat(id),
        getTileData: getTileData,
        dtype: dtype,
        tileSize: tileSize,
        minZoom: -(numLevels - 1),
        colorValues: colorValues,
        sliderValues: sliderValues,
        channelIsOn: channelIsOn,
        domain: domain,
        // We want a no-overlap caching strategy with an opacity < 1 to prevent
        // multiple rendered sublayers (some of which have been cached) from overlapping
        refinementStrategy: opacity === 1 ? 'best-available' : 'no-overlap',
        // TileLayer checks `changeFlags.updateTriggersChanged.getTileData` to see if tile cache
        // needs to be re-created. We want to trigger this behavior if the loader changes.
        // https://github.com/uber/deck.gl/blob/3f67ea6dfd09a4d74122f93903cb6b819dd88d52/modules/geo-layers/src/tile-layer/tile-layer.js#L50
        updateTriggers: {
          getTileData: [loader, loaderSelection]
        },
        onTileError: onTileError || loader.onTileError,
        opacity: opacity,
        colormap: colormap,
        viewportId: viewportId,
        onHover: onHover,
        pickable: pickable
      }); // This gives us a background image and also solves the current
      // minZoom funny business.  We don't use it for the background if we have an opacity
      // paramteter set to anything but 1, but we always use it for situations where
      // we are zoomed out too far.

      var implementsGetRaster = typeof loader.getRaster === 'function';
      var baseLayer = implementsGetRaster && new StaticImageLayer_StaticImageLayer(this.props, {
        id: "Background-Image-".concat(id),
        scale: Math.pow(2, numLevels - 1),
        visible: opacity === 1 || -numLevels > this.context.viewport.zoom && (!viewportId || this.context.viewport.id === viewportId),
        z: numLevels - 1,
        pickable: true,
        onHover: onHover
      });
      var layers = [baseLayer, tiledLayer];
      return layers;
    }
  }]);

  return VivViewerLayer;
}(core_["CompositeLayer"]);


VivViewerLayer_VivViewerLayer.layerName = 'VivViewerLayer';
VivViewerLayer_VivViewerLayer.defaultProps = VivViewerLayer_defaultProps;
// CONCATENATED MODULE: ./src/layers/VivViewerLayer/index.js

/* harmony default export */ var layers_VivViewerLayer = (VivViewerLayer_VivViewerLayer);
// EXTERNAL MODULE: external "@deck.gl/layers"
var layers_ = __webpack_require__(11);

// CONCATENATED MODULE: ./src/layers/OverviewLayer.js








function OverviewLayer_createSuper(Derived) { var hasNativeReflectConstruct = OverviewLayer_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function OverviewLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var OverviewLayer_defaultProps = {
  pickable: true,
  loader: {
    type: 'object',
    value: {
      getRaster: function () {
        var _getRaster = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", {
                    data: [],
                    height: 0,
                    width: 0
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getRaster() {
          return _getRaster.apply(this, arguments);
        }

        return getRaster;
      }(),
      getRasterSize: function getRasterSize() {
        return {
          height: 0,
          width: 0
        };
      },
      dtype: '<u2'
    },
    compare: true
  },
  id: {
    type: 'string',
    value: '',
    compare: true
  },
  boundingBox: {
    type: 'array',
    value: [[0, 0], [0, 1], [1, 1], [1, 0]],
    compare: true
  },
  boundingBoxColor: {
    type: 'array',
    value: [255, 0, 0],
    compare: true
  },
  boundingBoxOutlineWidth: {
    type: 'number',
    value: 50,
    compare: true
  },
  viewportOutlineColor: {
    type: 'array',
    value: [255, 190, 0],
    compare: true
  },
  viewportOutlineWidth: {
    type: 'number',
    value: 400,
    compare: true
  },
  overviewScale: {
    type: 'number',
    value: 1,
    compare: true
  }
};
/**
 * This layer wraps a StaticImageLayer as an overview, as well as a bounding box of the detail view and a polygon boundary for the view
 * @param {Object} props
 * @param {Array} props.sliderValues List of [begin, end] values to control each channel's ramp function.
 * @param {Array} props.colorValues List of [r, g, b] values for each channel.
 * @param {Array} props.channelIsOn List of boolean values for each channel for whether or not it is visible.
 * @param {number} props.opacity Opacity of the layer.
 * @param {string} props.colormap String indicating a colormap (default: '').  The full list of options is here: https://github.com/glslify/glsl-colormap#glsl-colormap
 * @param {Array} props.domain Override for the possible max/min values (i.e something different than 65535 for uint16/'<u2').
 * @param {Object} props.loader Loader to be used for fetching data.  It must implement/return `getRaster` and `dtype`.
 * @param {Array} props.boundingBoxColor [r, g, b] color of the bounding box (default: [255, 0, 0]).
 * @param {number} props.boundingBoxOutlineWidth Width of the bounding box (default: 50).
 * @param {Array} props.viewportOutlineColor [r, g, b] color of the outline (default: [255, 190, 0]).
 * @param {number} props.viewportOutlineWidth Viewport outline width (default: 400).
 */

var OverviewLayer_OverviewLayer = /*#__PURE__*/function (_CompositeLayer) {
  inherits_default()(OverviewLayer, _CompositeLayer);

  var _super = OverviewLayer_createSuper(OverviewLayer);

  function OverviewLayer() {
    classCallCheck_default()(this, OverviewLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(OverviewLayer, [{
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          loader = _this$props.loader,
          id = _this$props.id,
          boundingBox = _this$props.boundingBox,
          boundingBoxColor = _this$props.boundingBoxColor,
          boundingBoxOutlineWidth = _this$props.boundingBoxOutlineWidth,
          viewportOutlineColor = _this$props.viewportOutlineColor,
          viewportOutlineWidth = _this$props.viewportOutlineWidth,
          overviewScale = _this$props.overviewScale;
      var numLevels = loader.numLevels;

      var _loader$getRasterSize = loader.getRasterSize({
        z: 0
      }),
          width = _loader$getRasterSize.width,
          height = _loader$getRasterSize.height;

      var overview = new StaticImageLayer_StaticImageLayer(this.props, {
        id: "viewport-".concat(id),
        scale: Math.pow(2, numLevels - 1) * overviewScale,
        z: numLevels - 1
      });
      var boundingBoxOutline = new layers_["PolygonLayer"]({
        id: "bounding-box-overview-".concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [boundingBox],
        getPolygon: function getPolygon(f) {
          return f;
        },
        filled: false,
        stroked: true,
        getLineColor: boundingBoxColor,
        getLineWidth: boundingBoxOutlineWidth
      });
      var viewportOutline = new layers_["PolygonLayer"]({
        id: "viewport-outline-".concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [[[0, 0], [width * overviewScale, 0], [width * overviewScale, height * overviewScale], [0, height * overviewScale]]],
        getPolygon: function getPolygon(f) {
          return f;
        },
        filled: false,
        stroked: true,
        getLineColor: viewportOutlineColor,
        getLineWidth: viewportOutlineWidth
      });
      var layers = [overview, boundingBoxOutline, viewportOutline];
      return layers;
    }
  }]);

  return OverviewLayer;
}(core_["CompositeLayer"]);


OverviewLayer_OverviewLayer.layerName = 'OverviewLayer';
OverviewLayer_OverviewLayer.defaultProps = OverviewLayer_defaultProps;
// CONCATENATED MODULE: ./src/views/utils.js

function getVivId(id) {
  return "-#".concat(id, "#");
}
/**
 * Create a boudning box from a viewport based on passed-in viewState.
 * @param {viewState} Object The viewState for a certain viewport.
 * @returns {View} The DeckGL View for this viewport.
 */

function makeBoundingBox(viewState) {
  var viewport = new core_["OrthographicView"]().makeViewport({
    // From the current `detail` viewState, we need its projection matrix (actually the inverse).
    viewState: viewState,
    height: viewState.height,
    width: viewState.width
  }); // Use the inverse of the projection matrix to map screen to the view space.

  return [viewport.unproject([0, 0]), viewport.unproject([viewport.width, 0]), viewport.unproject([viewport.width, viewport.height]), viewport.unproject([0, viewport.height])];
}
// CONCATENATED MODULE: ./src/layers/ScaleBarLayer.js








function ScaleBarLayer_createSuper(Derived) { var hasNativeReflectConstruct = ScaleBarLayer_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ScaleBarLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






function getPosition(boundingBox, position, length) {
  var viewLength = boundingBox[2][0] - boundingBox[0][0];

  switch (position) {
    case 'bottom-right':
      {
        var yCoord = boundingBox[2][1] - (boundingBox[2][1] - boundingBox[0][1]) * length;
        var xLeftCoord = boundingBox[2][0] - viewLength * length;
        return [yCoord, xLeftCoord];
      }

    case 'top-right':
      {
        var _yCoord = (boundingBox[2][1] - boundingBox[0][1]) * length;

        var _xLeftCoord = boundingBox[2][0] - viewLength * length;

        return [_yCoord, _xLeftCoord];
      }

    case 'top-left':
      {
        var _yCoord2 = (boundingBox[2][1] - boundingBox[0][1]) * length;

        var _xLeftCoord2 = viewLength * length;

        return [_yCoord2, _xLeftCoord2];
      }

    case 'bottom-left':
      {
        var _yCoord3 = boundingBox[2][1] - (boundingBox[2][1] - boundingBox[0][1]) * length;

        var _xLeftCoord3 = viewLength * length;

        return [_yCoord3, _xLeftCoord3];
      }

    default:
      {
        throw new Error("Position ".concat(position, " not found"));
      }
  }
}

var ScaleBarLayer_defaultProps = {
  pickable: true,
  viewState: {
    type: 'object',
    value: {
      zoom: 0,
      target: [0, 0, 0]
    },
    compare: true
  },
  unit: {
    type: 'string',
    value: '',
    compare: true
  },
  size: {
    type: 'number',
    value: 1,
    compare: true
  },
  position: {
    type: 'string',
    value: 'bottom-right',
    compare: true
  },
  length: {
    type: 'number',
    value: 0.085,
    compare: true
  }
};
/**
 * This layer creates a scale bar using three LineLayers and a TextLayer.
 * Looks like: |--------| made up of three LineLayers (left tick, right tick, center length bar) and a bottom TextLayer
 * @param {Object} props
 * @param {String} props.unit Physical unit size per pixel at full resolution.
 * @param {Number} props.size Physical size of a pixel.
 * @param {Array} props.boundingBox Boudning box of the view in which this should render.
 * @param {id} props.id Id from the parent layer.
 * @param {ViewState} props.viewState The current viewState for the desired view.  We cannot internally use this.context.viewport because it is one frame behind:
 * https://github.com/visgl/deck.gl/issues/4504
 * @param {ViewState} props.length Value from 0 to 1 representing the portion of the view to be used for the length part of the scale bar.
 */

var ScaleBarLayer_ScaleBarLayer = /*#__PURE__*/function (_CompositeLayer) {
  inherits_default()(ScaleBarLayer, _CompositeLayer);

  var _super = ScaleBarLayer_createSuper(ScaleBarLayer);

  function ScaleBarLayer() {
    classCallCheck_default()(this, ScaleBarLayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(ScaleBarLayer, [{
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          id = _this$props.id,
          unit = _this$props.unit,
          size = _this$props.size,
          position = _this$props.position,
          viewState = _this$props.viewState,
          length = _this$props.length;
      var boundingBox = makeBoundingBox(viewState);
      var zoom = viewState.zoom;
      var viewLength = boundingBox[2][0] - boundingBox[0][0];
      var barLength = viewLength * 0.05; // This is a good heuristic for stopping the bar tick marks from getting too small
      // and/or the text squishing up into the bar.

      var barHeight = Math.max(Math.pow(2, -zoom + 1.5), (boundingBox[2][1] - boundingBox[0][1]) * 0.007);
      var numUnits = barLength * size;

      var _getPosition = getPosition(boundingBox, position, length),
          _getPosition2 = slicedToArray_default()(_getPosition, 2),
          yCoord = _getPosition2[0],
          xLeftCoord = _getPosition2[1];

      var lengthBar = new layers_["LineLayer"]({
        id: "scale-bar-length-".concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [[[xLeftCoord, yCoord], [xLeftCoord + barLength, yCoord]]],
        getSourcePosition: function getSourcePosition(d) {
          return d[0];
        },
        getTargetPosition: function getTargetPosition(d) {
          return d[1];
        },
        getWidth: 2,
        getColor: [220, 220, 220]
      });
      var tickBoundsLeft = new layers_["LineLayer"]({
        id: "scale-bar-height-left-".concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [[[xLeftCoord, yCoord - barHeight], [xLeftCoord, yCoord + barHeight]]],
        getSourcePosition: function getSourcePosition(d) {
          return d[0];
        },
        getTargetPosition: function getTargetPosition(d) {
          return d[1];
        },
        getWidth: 2,
        getColor: [220, 220, 220]
      });
      var tickBoundsRight = new layers_["LineLayer"]({
        id: "scale-bar-height-right-".concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [[[xLeftCoord + barLength, yCoord - barHeight], [xLeftCoord + barLength, yCoord + barHeight]]],
        getSourcePosition: function getSourcePosition(d) {
          return d[0];
        },
        getTargetPosition: function getTargetPosition(d) {
          return d[1];
        },
        getWidth: 2,
        getColor: [220, 220, 220]
      });
      var textLayer = new layers_["TextLayer"]({
        id: "units-label-layer-".concat(id),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [{
          text: String(numUnits).slice(0, 5) + unit,
          position: [xLeftCoord + barLength * 0.5, yCoord + barHeight * 4]
        }],
        getColor: [220, 220, 220, 255],
        getSize: 11,
        sizeUnits: 'meters',
        sizeScale: Math.pow(2, -zoom),
        characterSet: [].concat(toConsumableArray_default()(unit.split('')), toConsumableArray_default()(range(10).map(function (i) {
          return String(i);
        })), ['.'])
      });
      return [lengthBar, tickBoundsLeft, tickBoundsRight, textLayer];
    }
  }]);

  return ScaleBarLayer;
}(core_["CompositeLayer"]);


ScaleBarLayer_ScaleBarLayer.layerName = 'ScaleBarLayer';
ScaleBarLayer_ScaleBarLayer.defaultProps = ScaleBarLayer_defaultProps;
// CONCATENATED MODULE: ./src/layers/index.js




// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(19);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(12);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@deck.gl/react"
var react_ = __webpack_require__(24);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);

// CONCATENATED MODULE: ./src/viewers/VivViewer.js








function VivViewer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VivViewer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VivViewer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VivViewer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function VivViewer_createSuper(Derived) { var hasNativeReflectConstruct = VivViewer_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function VivViewer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // Taken from https://stackoverflow.com/a/31732310/8060591

function isSafari() {
  return navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') === -1 && navigator.userAgent.indexOf('FxiOS') === -1;
}
/**
 * This component handles rendering the various views within the DeckGL contenxt.
 * @param {Object} props
 * @param {Array} props.layerProps  Props for the layers in each view.
 * @param {Array} props.randomize Whether or not to randomize which view goes first (for dynamic rendering).
 * @param {VivView} props.views Various VivViews to render.
 * */


var VivViewer_VivViewer = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(VivViewer, _PureComponent);

  var _super = VivViewer_createSuper(VivViewer);

  function VivViewer(props) {
    var _this;

    classCallCheck_default()(this, VivViewer);

    _this = _super.call(this, props);
    _this.state = {
      viewStates: {}
    };
    var viewStates = _this.state.viewStates;
    var _this$props = _this.props,
        views = _this$props.views,
        viewStateHook = _this$props.viewStateHook;
    views.forEach(function (view) {
      viewStates[view.id] = view.filterViewState({
        viewState: view.initialViewState
      });
    });
    _this._onViewStateChange = _this._onViewStateChange.bind(assertThisInitialized_default()(_this));
    _this._viewStateHook = viewStateHook;
    _this.layerFilter = _this.layerFilter.bind(assertThisInitialized_default()(_this));
    _this.onHover = _this.onHover.bind(assertThisInitialized_default()(_this));
    _this.deck = external_react_default.a.createRef();
    var hoverHooks = _this.props.hoverHooks;
    var initVivView = hoverHooks.initVivView;

    if (initVivView) {
      initVivView({
        deck: _this.deck
      });
    }

    return _this;
  }
  /**
   * This prevents only the `draw` call of a layer from firing,
   * but not other layer lifecycle methods.  Nonetheless, it is
   * still useful.
   * @param {Layer} layer Layer being updated.
   * @param {Viewport} viewport Viewport being updated.
   * @returns {boolean} Whether or not this layer should be drawn in this viewport.
   */
  // eslint-disable-next-line class-methods-use-this


  createClass_default()(VivViewer, [{
    key: "layerFilter",
    value: function layerFilter(_ref) {
      var layer = _ref.layer,
          viewport = _ref.viewport;
      return layer.id.includes(getVivId(viewport.id));
    }
    /**
     * This updates the viewState as a callback to the viewport changing in DeckGL
     * (hence the need for storing viewState in state).
     */

  }, {
    key: "_onViewStateChange",
    value: function _onViewStateChange(_ref2) {
      var _this2 = this;

      var viewId = _ref2.viewId,
          viewState = _ref2.viewState,
          oldViewState = _ref2.oldViewState;
      // Save the view state and trigger rerender.
      var views = this.props.views;
      this.setState(function (prevState) {
        var viewStates = {};
        views.forEach(function (view) {
          var currentViewState = prevState.viewStates[view.id];
          viewStates[view.id] = view.filterViewState({
            viewState: VivViewer_objectSpread(VivViewer_objectSpread({}, viewState), {}, {
              id: viewId
            }),
            oldViewState: oldViewState,
            currentViewState: currentViewState
          });
        });

        if (_this2._viewStateHook) {
          _this2._viewStateHook(viewId, viewState, oldViewState);
        }

        return {
          viewStates: viewStates
        };
      });
    }
    /**
     * This updates the viewStates' height and width with the newest height and
     * width on any call where the viewStates changes (i.e resize events),
     * using the previous state (falling back on the view's initial state) for target x and y, zoom level etc.
     */

  }, {
    key: "onHover",
    // eslint-disable-next-line consistent-return
    value: function onHover(_ref3) {
      var sourceLayer = _ref3.sourceLayer,
          coordinate = _ref3.coordinate,
          layer = _ref3.layer;

      if (!coordinate) {
        return null;
      }

      var hoverHooks = this.props.hoverHooks;

      if (!hoverHooks) {
        return null;
      }

      var handleValue = hoverHooks.handleValue;

      if (!handleValue) {
        return null;
      }

      var _sourceLayer$props = sourceLayer.props,
          channelData = _sourceLayer$props.channelData,
          bounds = _sourceLayer$props.bounds;

      if (!channelData) {
        return null;
      }

      var data = channelData.data,
          width = channelData.width;

      if (!data) {
        return null;
      }

      var dataCoords; // This is currently a work-around for: https://github.com/visgl/deck.gl/pull/4526.
      // Once this is fixed we can make something more robust.

      if (sourceLayer.id.includes('Background')) {
        var numLevels = layer.props.loader.numLevels; // The zoomed out layer needs to use the fixed zoom at which it is rendered (i.e numLevels - 1).

        var layerZoomScale = Math.max(1, Math.pow(2, Math.floor(numLevels - 1)));
        dataCoords = [Math.floor((coordinate[0] - bounds[0]) / layerZoomScale), Math.floor((coordinate[1] - bounds[3]) / layerZoomScale)];
      } else {
        // Using floor means that as we zoom out, we are scaling by the zoom just passed, not the one coming.
        var zoom = layer.context.viewport.zoom;

        var _layerZoomScale = Math.max(1, Math.pow(2, Math.floor(-zoom)));

        dataCoords = [Math.floor((coordinate[0] - bounds[0]) / _layerZoomScale), Math.floor((coordinate[1] - bounds[3]) / _layerZoomScale)];
      }

      var hoverData = data.map(function (d) {
        return d[dataCoords[1] * width + dataCoords[0]];
      });
      handleValue(hoverData);
    }
    /**
     * This renders the layers in the DeckGL context.
     */

  }, {
    key: "_renderLayers",
    value: function _renderLayers() {
      var onHover = this.onHover;
      var viewStates = this.state.viewStates;
      var _this$props2 = this.props,
          views = _this$props2.views,
          layerProps = _this$props2.layerProps;
      return views.map(function (view, i) {
        return view.getLayers({
          viewStates: viewStates,
          props: VivViewer_objectSpread(VivViewer_objectSpread({}, layerProps[i]), {}, {
            onHover: onHover
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      /* eslint-disable react/destructuring-assignment */
      var _this$props3 = this.props,
          views = _this$props3.views,
          randomize = _this$props3.randomize;
      var viewStates = this.state.viewStates;
      var deckGLViews = views.map(function (view) {
        return view.getDeckGlView();
      }); // DeckGL seems to use the first view more than the second for updates
      // so this forces it to use the others more evenly.  This isn't perfect,
      // but I am not sure what else to do.  The DeckGL render hooks don't help,
      // but maybe useEffect() would help?  I couldn't work it out as
      // The issue is that I'm not sure how React would distinguish between forced updates
      // from permuting the views array and "real" updates like zoom/pan.
      // I tried keeping a counter but I couldn't figure out resetting it
      // without triggering a re-render.

      if (randomize) {
        var random = Math.random();
        var holdFirstElement = deckGLViews[0]; // weight has to go to 1.5 because we use Math.round().

        var randomWieghted = random * 1.49;
        var randomizedIndex = Math.round(randomWieghted * (views.length - 1));
        deckGLViews[0] = deckGLViews[randomizedIndex];
        deckGLViews[randomizedIndex] = holdFirstElement;
      }

      return !isSafari() ? /*#__PURE__*/external_react_default.a.createElement(react_default.a, {
        ref: this.deck,
        glOptions: {
          webgl2: true
        },
        layerFilter: this.layerFilter,
        layers: this._renderLayers(),
        onViewStateChange: this._onViewStateChange,
        views: deckGLViews,
        viewState: viewStates,
        getCursor: function getCursor(_ref4) {
          var isDragging = _ref4.isDragging;
          return isDragging ? 'grabbing' : 'crosshair';
        }
      }) : /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "viv-error"
      }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Safari does not support WebGL2, which Viv requires. Please use Chrome or Firefox."));
      /* eslint-disable react/destructuring-assignment */
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var views = props.views; // Update internal viewState on view changes as well as height and width changes.
      // Maybe we should add x/y too?

      if (views.some(function (view) {
        return !prevState.viewStates[view.id] || view.initialViewState.height !== prevState.viewStates[view.id].height || view.initialViewState.width !== prevState.viewStates[view.id].width;
      })) {
        var viewStates = {};
        views.forEach(function (view) {
          var _view$initialViewStat = view.initialViewState,
              height = _view$initialViewStat.height,
              width = _view$initialViewStat.width;
          var currentViewState = prevState.viewStates[view.id];
          viewStates[view.id] = view.filterViewState({
            viewState: VivViewer_objectSpread(VivViewer_objectSpread({}, currentViewState || view.initialViewState), {}, {
              height: height,
              width: width,
              id: view.id
            })
          });
        });
        return {
          viewStates: viewStates
        };
      }

      return prevState;
    }
  }]);

  return VivViewer;
}(external_react_["PureComponent"]);


// CONCATENATED MODULE: ./src/views/VivView.js


// eslint-disable-next-line max-classes-per-file

/**
 * This class generates a layer and a view for use in the VivViewer
 * @param {Object} args
 * @param {Object} args.viewState ViewState object
 * @param {string} args.id Id for the current view
 * @param {number} args.x X (top-left) location on the screen for the current view
 * @param {number} args.y Y (top-left) location on the screen for the current view
 */

var VivView_VivView = /*#__PURE__*/function () {
  function VivView(_ref) {
    var initialViewState = _ref.initialViewState,
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$controller = _ref.controller,
        controller = _ref$controller === void 0 ? true : _ref$controller;

    classCallCheck_default()(this, VivView);

    var height = initialViewState.height,
        width = initialViewState.width,
        id = initialViewState.id;
    this.width = width;
    this.height = height;
    this.initialViewState = initialViewState;
    this.id = id;
    this.x = x;
    this.y = y;
    this.controller = controller;
  }
  /**
   * Create a DeckGL view based on this class.
   * @returns {View} The DeckGL View for this class.
   */


  createClass_default()(VivView, [{
    key: "getDeckGlView",
    value: function getDeckGlView() {
      var height = this.height,
          width = this.width,
          id = this.id,
          x = this.x,
          y = this.y,
          controller = this.controller;
      return new core_["OrthographicView"]({
        id: id,
        controller: controller,
        height: height,
        width: width,
        x: x,
        y: y
      });
    }
    /**
     * Create a viewState for this class, checking the id to make sure this class and veiwState match.
     * @param {Object} args
     * @param {ViewState} args.ViewState ViewState object.
     * @returns {ViewState} ViewState for this class (or null by default if the ids do not match).
     */

  }, {
    key: "filterViewState",
    value: function filterViewState(_ref2) {
      var viewState = _ref2.viewState;
      var id = this.id;
      return viewState.id === id ? viewState : null;
    }
    /**
     * Create a layer for this instance.
     * @param {Object} args
     * @param {ViewState} args.viewStates ViewStates for all current views.
     * @param {number} args.props Props for this instance.
     * @returns {Layer} Instance of a layer.
     */
    // eslint-disable-next-line class-methods-use-this,no-unused-vars

  }, {
    key: "getLayers",
    value: function getLayers(_ref3) {
      var viewStates = _ref3.viewStates,
          props = _ref3.props;
    }
  }]);

  return VivView;
}();


// CONCATENATED MODULE: ./src/views/DetailView.js






function DetailView_createSuper(Derived) { var hasNativeReflectConstruct = DetailView_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function DetailView_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/**
 * This class generates a VivViewerLayer and a view for use in the VivViewer as a detailed view.
 * */

var DetailView_DetailView = /*#__PURE__*/function (_VivView) {
  inherits_default()(DetailView, _VivView);

  var _super = DetailView_createSuper(DetailView);

  function DetailView() {
    classCallCheck_default()(this, DetailView);

    return _super.apply(this, arguments);
  }

  createClass_default()(DetailView, [{
    key: "getLayers",
    value: function getLayers(_ref) {
      var props = _ref.props,
          viewStates = _ref.viewStates;
      var loader = props.loader;
      var id = this.id;
      var layerViewState = viewStates[id];
      var layers = [];
      var detailLayer = loader.isPyramid ? new layers_VivViewerLayer(props, {
        id: "".concat(loader.type).concat(getVivId(id)),
        viewportId: id
      }) : new StaticImageLayer_StaticImageLayer(props, {
        id: "".concat(loader.type).concat(getVivId(id)),
        viewportId: id
      });
      layers.push(detailLayer);
      var physicalSizes = loader.physicalSizes;

      if (physicalSizes) {
        var x = physicalSizes.x;
        var unit = x.unit,
            value = x.value;

        if (unit && value) {
          layers.push(new ScaleBarLayer_ScaleBarLayer({
            id: getVivId(id),
            loader: loader,
            unit: unit,
            size: value,
            viewState: layerViewState
          }));
        }
      }

      return layers;
    }
  }]);

  return DetailView;
}(VivView_VivView);


// CONCATENATED MODULE: ./src/views/OverviewView.js







function OverviewView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function OverviewView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { OverviewView_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { OverviewView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function OverviewView_createSuper(Derived) { var hasNativeReflectConstruct = OverviewView_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function OverviewView_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * This class generates a OverviewLayer and a view for use in the VivViewer as an overview to a Detailview (they must be used in conjection)
 * @param {Object} args
 * @param {Object} args.viewState ViewState object.
 * @param {Object} props.loader Loader to be used for inferring zoom level and fetching data.  It must have the properies `dtype`, `numLevels`, and `tileSize` and implement `getTile` and `getRaster`.
 * @param {number} args.detailHeight Height of the detail view.
 * @param {number} args.detailWidth Width of the detail view.
 * @param {number} args.scale Scale of this viewport relative to the detail. Default is .2.
 * @param {number} args.margin Margin to be offset from the the corner of the other viewport. Default is 25.
 * @param {string} args.position Location of the viewport - one of "bottom-right", "top-right", "top-left", "bottom-left."  Default is 'bottom-right'.
 * @param {number} args.minimumWidth Absolute lower bound for how small the viewport should scale. Default is 150.
 * @param {number} args.maximumWidth Absolute upper bound for how large the viewport should scale. Default is 350.
 * */

var OverviewView_OverviewView = /*#__PURE__*/function (_VivView) {
  inherits_default()(OverviewView, _VivView);

  var _super = OverviewView_createSuper(OverviewView);

  function OverviewView(_ref) {
    var _this;

    var initialViewState = _ref.initialViewState,
        loader = _ref.loader,
        detailHeight = _ref.detailHeight,
        detailWidth = _ref.detailWidth,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 0.2 : _ref$scale,
        _ref$margin = _ref.margin,
        margin = _ref$margin === void 0 ? 25 : _ref$margin,
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? 'bottom-right' : _ref$position,
        _ref$minimumWidth = _ref.minimumWidth,
        minimumWidth = _ref$minimumWidth === void 0 ? 150 : _ref$minimumWidth,
        _ref$maximumWidth = _ref.maximumWidth,
        maximumWidth = _ref$maximumWidth === void 0 ? 350 : _ref$maximumWidth;

    classCallCheck_default()(this, OverviewView);

    _this = _super.call(this, {
      initialViewState: initialViewState
    });
    _this.margin = margin;
    _this.loader = loader;
    _this.position = position;
    _this.detailHeight = detailHeight;
    _this.detailWidth = detailWidth;

    _this._setHeightWidthScale({
      detailWidth: detailWidth,
      scale: scale,
      minimumWidth: minimumWidth,
      maximumWidth: maximumWidth
    });

    _this._setXY();

    return _this;
  }
  /**
   * Set the image-pixel scale and height and width based on detail view.
   */


  createClass_default()(OverviewView, [{
    key: "_setHeightWidthScale",
    value: function _setHeightWidthScale(_ref2) {
      var detailWidth = _ref2.detailWidth,
          scale = _ref2.scale,
          minimumWidth = _ref2.minimumWidth,
          maximumWidth = _ref2.maximumWidth;
      var loader = this.loader;
      var numLevels = loader.numLevels;

      var _loader$getRasterSize = loader.getRasterSize({
        z: 0
      }),
          rasterWidth = _loader$getRasterSize.width,
          rasterHeight = _loader$getRasterSize.height;

      var heightWidthRatio = rasterHeight / rasterWidth;
      this.width = Math.min(maximumWidth, Math.max(detailWidth * scale, minimumWidth));
      this.height = this.width * heightWidthRatio;
      this.scale = Math.pow(2, numLevels - 1) / rasterWidth * this.width;
      this._imageWidth = rasterWidth;
      this._imageHeight = rasterHeight;
    }
    /**
     * Set the x and y (top left corner) of this overview relative to the detail.
     */

  }, {
    key: "_setXY",
    value: function _setXY() {
      var height = this.height,
          width = this.width,
          margin = this.margin,
          position = this.position,
          detailWidth = this.detailWidth,
          detailHeight = this.detailHeight;

      switch (position) {
        case 'bottom-right':
          {
            this.x = detailWidth - width - margin;
            this.y = detailHeight - height - margin;
            break;
          }

        case 'top-right':
          {
            this.x = detailWidth - width - margin;
            this.y = margin;
            break;
          }

        case 'top-left':
          {
            this.x = margin;
            this.y = margin;
            break;
          }

        case 'bottom-left':
          {
            this.x = margin;
            this.y = detailHeight - height - margin;
            break;
          }

        default:
          {
            throw new Error("overviewLocation prop needs to be one of ['bottom-right', 'top-right', 'top-left', 'bottom-left']");
          }
      }
    }
  }, {
    key: "getDeckGlView",
    value: function getDeckGlView() {
      var x = this.x,
          y = this.y,
          id = this.id,
          height = this.height,
          width = this.width;
      return new core_["OrthographicView"]({
        id: id,
        controller: false,
        height: height,
        width: width,
        x: x,
        y: y,
        clear: true
      });
    }
  }, {
    key: "filterViewState",
    value: function filterViewState(_ref3) {
      var viewState = _ref3.viewState;
      // Scale the view as the overviewScale changes with screen resizing - basically, do not react to any view state changes.
      var _imageWidth = this._imageWidth,
          _imageHeight = this._imageHeight,
          scale = this.scale,
          id = this.id,
          loader = this.loader,
          height = this.height,
          width = this.width;
      var numLevels = loader.numLevels;
      return OverviewView_objectSpread(OverviewView_objectSpread({}, viewState), {}, {
        height: height,
        width: width,
        id: id,
        target: [_imageWidth * scale / 2, _imageHeight * scale / 2, 0],
        zoom: -(numLevels - 1)
      });
    }
  }, {
    key: "getLayers",
    value: function getLayers(_ref4) {
      var viewStates = _ref4.viewStates,
          props = _ref4.props;
      var detail = viewStates.detail;

      if (!detail) {
        throw new Error('Overview requires a viewState with id detail');
      }

      var id = this.id,
          scale = this.scale,
          loader = this.loader; // Scale the bounding box.

      var boundingBox = makeBoundingBox(detail).map(function (coords) {
        return coords.map(function (e) {
          return e * scale;
        });
      });
      var overviewLayer = new OverviewLayer_OverviewLayer(props, {
        id: "".concat(loader.type).concat(getVivId(id)),
        boundingBox: boundingBox,
        overviewScale: scale
      });
      return [overviewLayer];
    }
  }]);

  return OverviewView;
}(VivView_VivView);


// CONCATENATED MODULE: ./src/views/SideBySideView.js







function SideBySideView_createSuper(Derived) { var hasNativeReflectConstruct = SideBySideView_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SideBySideView_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






/**
 * This class generates a VivViewerLayer and a view for use in the SideBySideViewer.
 * It is linked with its other views as controlled by `linkedIds`, `zoomLock`, and `panLock` parameters.
 * @param {Object} args
 * @param {Object} args.viewState ViewState object
 * @param {string} args.id Id for the current view
 * @param {number} args.x X (top-left) location on the screen for the current view
 * @param {number} args.y Y (top-left) location on the screen for the current view
 * @param {Array} args.linkedIds Ids of the other views to which this could be locked via zoom/pan.
 * @param {Boolean} args.panLock Whether or not we lock pan.
 * @param {Boolean} args.zoomLock Whether or not we lock zoom.
 * @param {Array} args.viewportOutlineColor Outline color of the border (default [255, 255, 255])
 * @param {number} args.viewportOutlineWidth Default outline width (default 10)
 * */

var SideBySideView_SideBySideView = /*#__PURE__*/function (_VivView) {
  inherits_default()(SideBySideView, _VivView);

  var _super = SideBySideView_createSuper(SideBySideView);

  function SideBySideView(_ref) {
    var _this;

    var initialViewState = _ref.initialViewState,
        x = _ref.x,
        y = _ref.y,
        _ref$linkedIds = _ref.linkedIds,
        linkedIds = _ref$linkedIds === void 0 ? [] : _ref$linkedIds,
        _ref$panLock = _ref.panLock,
        panLock = _ref$panLock === void 0 ? true : _ref$panLock,
        _ref$zoomLock = _ref.zoomLock,
        zoomLock = _ref$zoomLock === void 0 ? true : _ref$zoomLock,
        _ref$viewportOutlineC = _ref.viewportOutlineColor,
        viewportOutlineColor = _ref$viewportOutlineC === void 0 ? [255, 255, 255] : _ref$viewportOutlineC,
        _ref$viewportOutlineW = _ref.viewportOutlineWidth,
        viewportOutlineWidth = _ref$viewportOutlineW === void 0 ? 10 : _ref$viewportOutlineW;

    classCallCheck_default()(this, SideBySideView);

    _this = _super.call(this, {
      initialViewState: initialViewState,
      x: x,
      y: y
    });
    _this.linkedIds = linkedIds;
    _this.panLock = panLock;
    _this.zoomLock = zoomLock;
    _this.viewportOutlineColor = viewportOutlineColor;
    _this.viewportOutlineWidth = viewportOutlineWidth;
    return _this;
  }

  createClass_default()(SideBySideView, [{
    key: "filterViewState",
    value: function filterViewState(_ref2) {
      var viewState = _ref2.viewState,
          oldViewState = _ref2.oldViewState,
          currentViewState = _ref2.currentViewState;
      var viewStateId = viewState.id;
      var id = this.id,
          linkedIds = this.linkedIds,
          panLock = this.panLock,
          zoomLock = this.zoomLock;

      if (oldViewState && linkedIds.indexOf(viewStateId) !== -1 && (zoomLock || panLock)) {
        var thisViewState = {
          height: currentViewState.height,
          width: currentViewState.width,
          target: [],
          zoom: null
        };

        var _currentViewState$tar = slicedToArray_default()(currentViewState.target, 2),
            currentX = _currentViewState$tar[0],
            currentY = _currentViewState$tar[1];

        if (zoomLock) {
          var dZoom = viewState.zoom - oldViewState.zoom;
          thisViewState.zoom = currentViewState.zoom + dZoom;
        } else {
          thisViewState.zoom = currentViewState.zoom;
        }

        if (panLock) {
          var _oldViewState$target = slicedToArray_default()(oldViewState.target, 2),
              oldX = _oldViewState$target[0],
              oldY = _oldViewState$target[1];

          var _viewState$target = slicedToArray_default()(viewState.target, 2),
              newX = _viewState$target[0],
              newY = _viewState$target[1];

          var dx = newX - oldX;
          var dy = newY - oldY;
          thisViewState.target.push(currentX + dx);
          thisViewState.target.push(currentY + dy);
        } else {
          thisViewState.target.push(currentX);
          thisViewState.target.push(currentY);
        }

        return {
          id: id,
          target: thisViewState.target,
          zoom: thisViewState.zoom,
          height: thisViewState.height,
          width: thisViewState.width
        };
      }

      return viewState.id === id ? {
        id: id,
        target: viewState.target,
        zoom: viewState.zoom,
        height: viewState.height,
        width: viewState.width
      } : {
        id: id,
        target: currentViewState.target,
        zoom: currentViewState.zoom,
        height: currentViewState.height,
        width: currentViewState.width
      };
    }
  }, {
    key: "getLayers",
    value: function getLayers(_ref3) {
      var props = _ref3.props,
          viewStates = _ref3.viewStates;
      var loader = props.loader;
      var id = this.id,
          viewportOutlineColor = this.viewportOutlineColor,
          viewportOutlineWidth = this.viewportOutlineWidth;
      var layerViewState = viewStates[id];
      var boundingBox = makeBoundingBox(layerViewState);
      var layers = [];
      var detailLayer = loader.isPyramid ? new layers_VivViewerLayer(props, {
        id: "".concat(loader.type).concat(getVivId(id)),
        viewportId: id
      }) : new StaticImageLayer_StaticImageLayer(props, {
        id: "".concat(loader.type).concat(getVivId(id)),
        viewportId: id
      });
      layers.push(detailLayer);
      var border = new layers_["PolygonLayer"]({
        id: "viewport-outline-".concat(loader.type).concat(getVivId(id)),
        coordinateSystem: core_["COORDINATE_SYSTEM"].CARTESIAN,
        data: [boundingBox],
        getPolygon: function getPolygon(f) {
          return f;
        },
        filled: false,
        stroked: true,
        getLineColor: viewportOutlineColor,
        getLineWidth: viewportOutlineWidth * Math.pow(2, -layerViewState.zoom)
      });
      layers.push(border);
      var physicalSizes = loader.physicalSizes;

      if (physicalSizes) {
        var x = physicalSizes.x;
        var unit = x.unit,
            value = x.value;

        if (unit && value) {
          layers.push(new ScaleBarLayer_ScaleBarLayer({
            id: getVivId(id),
            loader: loader,
            unit: unit,
            size: value,
            viewState: layerViewState
          }));
        }
      }

      return layers;
    }
  }]);

  return SideBySideView;
}(VivView_VivView);


// CONCATENATED MODULE: ./src/views/index.js




// CONCATENATED MODULE: ./src/viewers/PictureInPictureViewer.js


function PictureInPictureViewer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PictureInPictureViewer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PictureInPictureViewer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PictureInPictureViewer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * This component provides a component for an overview-detail VivViewer of an image (i.e picture-in-picture).
 * @param {Object} props
 * @param {Array} props.sliderValues List of [begin, end] values to control each channel's ramp function.
 * @param {Array} props.colorValues List of [r, g, b] values for each channel.
 * @param {Array} props.channelIsOn List of boolean values for each channel for whether or not it is visible.
 * @param {string} props.colormap String indicating a colormap (default: '').  The full list of options is here: https://github.com/glslify/glsl-colormap#glsl-colormap
 * @param {Object} props.loader Loader to be used for fetching data.  It must have the properies `dtype`, `numLevels`, and `tileSize` and implement `getTile` and `getRaster`.
 * @param {Array} props.loaderSelection Selection to be used for fetching data.
 * @param {Object} props.overview Allows you to pass settings into the OverviewView: { scale, margin, position, minimumWidth, maximumWidth,
 * boundingBoxColor, boundingBoxOutlineWidth, viewportOutlineColor, viewportOutlineWidth}.
 * @param {Boolean} props.overviewOn Whether or not to show the OverviewView.
 * @param {Object} props.hoverHooks Object including the allowable hooks - right now only accepting a function with key handleValue like { handleValue: (valueArray) => {} }
 */

var PictureInPictureViewer_PictureInPictureViewer = function PictureInPictureViewer(props) {
  var loader = props.loader,
      sliderValues = props.sliderValues,
      colorValues = props.colorValues,
      channelIsOn = props.channelIsOn,
      initialViewState = props.initialViewState,
      colormap = props.colormap,
      overview = props.overview,
      overviewOn = props.overviewOn,
      loaderSelection = props.loaderSelection,
      hoverHooks = props.hoverHooks,
      viewStateHook = props.viewStateHook,
      controller = props.controller;

  var detailViewState = PictureInPictureViewer_objectSpread(PictureInPictureViewer_objectSpread({}, initialViewState), {}, {
    id: 'detail'
  });

  var detailView = new DetailView_DetailView({
    initialViewState: detailViewState,
    controller: controller
  });
  var layerConfig = {
    loader: loader,
    sliderValues: sliderValues,
    colorValues: colorValues,
    channelIsOn: channelIsOn,
    loaderSelection: loaderSelection,
    colormap: colormap
  };
  var views = [detailView];
  var layerProps = [layerConfig];

  if (overviewOn && loader) {
    var overviewViewState = PictureInPictureViewer_objectSpread(PictureInPictureViewer_objectSpread({}, initialViewState), {}, {
      id: 'overview'
    });

    var overviewView = new OverviewView_OverviewView(PictureInPictureViewer_objectSpread({
      initialViewState: overviewViewState,
      loader: loader,
      detailHeight: initialViewState.height,
      detailWidth: initialViewState.width
    }, overview));
    views.push(overviewView);
    layerProps.push(layerConfig);
  }

  if (!loader) return null;
  return /*#__PURE__*/external_react_default.a.createElement(VivViewer_VivViewer, {
    viewStateHook: viewStateHook,
    layerProps: layerProps,
    views: views,
    hoverHooks: hoverHooks
  });
};

/* harmony default export */ var viewers_PictureInPictureViewer = (PictureInPictureViewer_PictureInPictureViewer);
// CONCATENATED MODULE: ./src/viewers/SideBySideViewer.js


function SideBySideViewer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SideBySideViewer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SideBySideViewer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SideBySideViewer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * This component provides a side-by-side VivViewer with linked zoom/pan.
 * @param {Object} props
 * @param {Array} props.sliderValues List of [begin, end] values to control each channel's ramp function.
 * @param {Array} props.colorValues List of [r, g, b] values for each channel.
 * @param {Array} props.channelIsOn List of boolean values for each channel for whether or not it is visible.
 * @param {string} props.colormap String indicating a colormap (default: '').  The full list of options is here: https://github.com/glslify/glsl-colormap#glsl-colormap
 * @param {Object} props.loader Loader to be used for fetching data.  It must have the properies `dtype`, `numLevels`, and `tileSize` and implement `getTile` and `getRaster`.
 * @param {Array} props.loaderSelection Selection to be used for fetching data.
 * @param {Boolean} props.zoomLock Whether or not lock the zooms of the two views.
 * @param {Boolean} props.panLock Whether or not lock the pans of the two views.
 */

var SideBySideViewer_SideBySideViewer = function SideBySideViewer(props) {
  var loader = props.loader,
      sliderValues = props.sliderValues,
      colorValues = props.colorValues,
      channelIsOn = props.channelIsOn,
      initialViewState = props.initialViewState,
      colormap = props.colormap,
      panLock = props.panLock,
      loaderSelection = props.loaderSelection,
      zoomLock = props.zoomLock;
  var detailViewLeft = new SideBySideView_SideBySideView({
    initialViewState: SideBySideViewer_objectSpread(SideBySideViewer_objectSpread({}, initialViewState), {}, {
      id: 'left'
    }),
    linkedIds: ['right'],
    panLock: panLock,
    zoomLock: zoomLock
  });
  var detailViewRight = new SideBySideView_SideBySideView({
    initialViewState: SideBySideViewer_objectSpread(SideBySideViewer_objectSpread({}, initialViewState), {}, {
      id: 'right'
    }),
    x: initialViewState.width,
    linkedIds: ['left'],
    panLock: panLock,
    zoomLock: zoomLock
  });
  var layerConfig = {
    loader: loader,
    sliderValues: sliderValues,
    colorValues: colorValues,
    channelIsOn: channelIsOn,
    loaderSelection: loaderSelection,
    colormap: colormap
  };
  var views = [detailViewRight, detailViewLeft];
  var layerProps = [layerConfig, layerConfig];
  return loader ? /*#__PURE__*/external_react_default.a.createElement(VivViewer_VivViewer, {
    layerProps: layerProps,
    views: views,
    randomize: true
  }) : null;
};

/* harmony default export */ var viewers_SideBySideViewer = (SideBySideViewer_SideBySideViewer);
// CONCATENATED MODULE: ./src/viewers/index.js



// EXTERNAL MODULE: external "zarr"
var external_zarr_ = __webpack_require__(15);

// EXTERNAL MODULE: external "txml"
var external_txml_ = __webpack_require__(25);
var external_txml_default = /*#__PURE__*/__webpack_require__.n(external_txml_);

// CONCATENATED MODULE: ./node_modules/geotiff/src/globals.js
const fieldTagNames = {
  // TIFF Baseline
  0x013B: 'Artist',
  0x0102: 'BitsPerSample',
  0x0109: 'CellLength',
  0x0108: 'CellWidth',
  0x0140: 'ColorMap',
  0x0103: 'Compression',
  0x8298: 'Copyright',
  0x0132: 'DateTime',
  0x0152: 'ExtraSamples',
  0x010A: 'FillOrder',
  0x0121: 'FreeByteCounts',
  0x0120: 'FreeOffsets',
  0x0123: 'GrayResponseCurve',
  0x0122: 'GrayResponseUnit',
  0x013C: 'HostComputer',
  0x010E: 'ImageDescription',
  0x0101: 'ImageLength',
  0x0100: 'ImageWidth',
  0x010F: 'Make',
  0x0119: 'MaxSampleValue',
  0x0118: 'MinSampleValue',
  0x0110: 'Model',
  0x00FE: 'NewSubfileType',
  0x0112: 'Orientation',
  0x0106: 'PhotometricInterpretation',
  0x011C: 'PlanarConfiguration',
  0x0128: 'ResolutionUnit',
  0x0116: 'RowsPerStrip',
  0x0115: 'SamplesPerPixel',
  0x0131: 'Software',
  0x0117: 'StripByteCounts',
  0x0111: 'StripOffsets',
  0x00FF: 'SubfileType',
  0x0107: 'Threshholding',
  0x011A: 'XResolution',
  0x011B: 'YResolution',

  // TIFF Extended
  0x0146: 'BadFaxLines',
  0x0147: 'CleanFaxData',
  0x0157: 'ClipPath',
  0x0148: 'ConsecutiveBadFaxLines',
  0x01B1: 'Decode',
  0x01B2: 'DefaultImageColor',
  0x010D: 'DocumentName',
  0x0150: 'DotRange',
  0x0141: 'HalftoneHints',
  0x015A: 'Indexed',
  0x015B: 'JPEGTables',
  0x011D: 'PageName',
  0x0129: 'PageNumber',
  0x013D: 'Predictor',
  0x013F: 'PrimaryChromaticities',
  0x0214: 'ReferenceBlackWhite',
  0x0153: 'SampleFormat',
  0x0154: 'SMinSampleValue',
  0x0155: 'SMaxSampleValue',
  0x022F: 'StripRowCounts',
  0x014A: 'SubIFDs',
  0x0124: 'T4Options',
  0x0125: 'T6Options',
  0x0145: 'TileByteCounts',
  0x0143: 'TileLength',
  0x0144: 'TileOffsets',
  0x0142: 'TileWidth',
  0x012D: 'TransferFunction',
  0x013E: 'WhitePoint',
  0x0158: 'XClipPathUnits',
  0x011E: 'XPosition',
  0x0211: 'YCbCrCoefficients',
  0x0213: 'YCbCrPositioning',
  0x0212: 'YCbCrSubSampling',
  0x0159: 'YClipPathUnits',
  0x011F: 'YPosition',

  // EXIF
  0x9202: 'ApertureValue',
  0xA001: 'ColorSpace',
  0x9004: 'DateTimeDigitized',
  0x9003: 'DateTimeOriginal',
  0x8769: 'Exif IFD',
  0x9000: 'ExifVersion',
  0x829A: 'ExposureTime',
  0xA300: 'FileSource',
  0x9209: 'Flash',
  0xA000: 'FlashpixVersion',
  0x829D: 'FNumber',
  0xA420: 'ImageUniqueID',
  0x9208: 'LightSource',
  0x927C: 'MakerNote',
  0x9201: 'ShutterSpeedValue',
  0x9286: 'UserComment',

  // IPTC
  0x83BB: 'IPTC',

  // ICC
  0x8773: 'ICC Profile',

  // XMP
  0x02BC: 'XMP',

  // GDAL
  0xA480: 'GDAL_METADATA',
  0xA481: 'GDAL_NODATA',

  // Photoshop
  0x8649: 'Photoshop',

  // GeoTiff
  0x830E: 'ModelPixelScale',
  0x8482: 'ModelTiepoint',
  0x85D8: 'ModelTransformation',
  0x87AF: 'GeoKeyDirectory',
  0x87B0: 'GeoDoubleParams',
  0x87B1: 'GeoAsciiParams',
};

const fieldTags = {};
for (const key in fieldTagNames) {
  if (fieldTagNames.hasOwnProperty(key)) {
    fieldTags[fieldTagNames[key]] = parseInt(key, 10);
  }
}

const fieldTagTypes = {
  256: 'SHORT',
  257: 'SHORT',
  258: 'SHORT',
  259: 'SHORT',
  262: 'SHORT',
  273: 'LONG',
  274: 'SHORT',
  277: 'SHORT',
  278: 'LONG',
  279: 'LONG',
  282: 'RATIONAL',
  283: 'RATIONAL',
  284: 'SHORT',
  286: 'SHORT',
  287: 'RATIONAL',
  296: 'SHORT',
  305: 'ASCII',
  306: 'ASCII',
  338: 'SHORT',
  339: 'SHORT',
  513: 'LONG',
  514: 'LONG',
  1024: 'SHORT',
  1025: 'SHORT',
  2048: 'SHORT',
  2049: 'ASCII',
  33550: 'DOUBLE',
  33922: 'DOUBLE',
  34665: 'LONG',
  34735: 'SHORT',
  34737: 'ASCII',
  42113: 'ASCII',
};

const arrayFields = [
  fieldTags.BitsPerSample,
  fieldTags.ExtraSamples,
  fieldTags.SampleFormat,
  fieldTags.StripByteCounts,
  fieldTags.StripOffsets,
  fieldTags.StripRowCounts,
  fieldTags.TileByteCounts,
  fieldTags.TileOffsets,
];

const fieldTypeNames = {
  0x0001: 'BYTE',
  0x0002: 'ASCII',
  0x0003: 'SHORT',
  0x0004: 'LONG',
  0x0005: 'RATIONAL',
  0x0006: 'SBYTE',
  0x0007: 'UNDEFINED',
  0x0008: 'SSHORT',
  0x0009: 'SLONG',
  0x000A: 'SRATIONAL',
  0x000B: 'FLOAT',
  0x000C: 'DOUBLE',
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  0x000D: 'IFD',
  // introduced by BigTIFF
  0x0010: 'LONG8',
  0x0011: 'SLONG8',
  0x0012: 'IFD8',
};

const fieldTypes = {};
for (const key in fieldTypeNames) {
  if (fieldTypeNames.hasOwnProperty(key)) {
    fieldTypes[fieldTypeNames[key]] = parseInt(key, 10);
  }
}

const photometricInterpretations = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,

  CIELab: 8,
  ICCLab: 9,
};

const ExtraSamplesValues = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2,
};


const geoKeyNames = {
  1024: 'GTModelTypeGeoKey',
  1025: 'GTRasterTypeGeoKey',
  1026: 'GTCitationGeoKey',
  2048: 'GeographicTypeGeoKey',
  2049: 'GeogCitationGeoKey',
  2050: 'GeogGeodeticDatumGeoKey',
  2051: 'GeogPrimeMeridianGeoKey',
  2052: 'GeogLinearUnitsGeoKey',
  2053: 'GeogLinearUnitSizeGeoKey',
  2054: 'GeogAngularUnitsGeoKey',
  2055: 'GeogAngularUnitSizeGeoKey',
  2056: 'GeogEllipsoidGeoKey',
  2057: 'GeogSemiMajorAxisGeoKey',
  2058: 'GeogSemiMinorAxisGeoKey',
  2059: 'GeogInvFlatteningGeoKey',
  2060: 'GeogAzimuthUnitsGeoKey',
  2061: 'GeogPrimeMeridianLongGeoKey',
  2062: 'GeogTOWGS84GeoKey',
  3072: 'ProjectedCSTypeGeoKey',
  3073: 'PCSCitationGeoKey',
  3074: 'ProjectionGeoKey',
  3075: 'ProjCoordTransGeoKey',
  3076: 'ProjLinearUnitsGeoKey',
  3077: 'ProjLinearUnitSizeGeoKey',
  3078: 'ProjStdParallel1GeoKey',
  3079: 'ProjStdParallel2GeoKey',
  3080: 'ProjNatOriginLongGeoKey',
  3081: 'ProjNatOriginLatGeoKey',
  3082: 'ProjFalseEastingGeoKey',
  3083: 'ProjFalseNorthingGeoKey',
  3084: 'ProjFalseOriginLongGeoKey',
  3085: 'ProjFalseOriginLatGeoKey',
  3086: 'ProjFalseOriginEastingGeoKey',
  3087: 'ProjFalseOriginNorthingGeoKey',
  3088: 'ProjCenterLongGeoKey',
  3089: 'ProjCenterLatGeoKey',
  3090: 'ProjCenterEastingGeoKey',
  3091: 'ProjCenterNorthingGeoKey',
  3092: 'ProjScaleAtNatOriginGeoKey',
  3093: 'ProjScaleAtCenterGeoKey',
  3094: 'ProjAzimuthAngleGeoKey',
  3095: 'ProjStraightVertPoleLongGeoKey',
  3096: 'ProjRectifiedGridAngleGeoKey',
  4096: 'VerticalCSTypeGeoKey',
  4097: 'VerticalCitationGeoKey',
  4098: 'VerticalDatumGeoKey',
  4099: 'VerticalUnitsGeoKey',
};

const globals_geoKeys = {};
for (const key in geoKeyNames) {
  if (geoKeyNames.hasOwnProperty(key)) {
    globals_geoKeys[geoKeyNames[key]] = parseInt(key, 10);
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/rgb.js
function fromWhiteIsZero(raster, max) {
  const { width, height } = raster;
  const rgbRaster = new Uint8Array(width * height * 3);
  let value;
  for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {
    value = 256 - (raster[i] / max * 256);
    rgbRaster[j] = value;
    rgbRaster[j + 1] = value;
    rgbRaster[j + 2] = value;
  }
  return rgbRaster;
}

function fromBlackIsZero(raster, max) {
  const { width, height } = raster;
  const rgbRaster = new Uint8Array(width * height * 3);
  let value;
  for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {
    value = raster[i] / max * 256;
    rgbRaster[j] = value;
    rgbRaster[j + 1] = value;
    rgbRaster[j + 2] = value;
  }
  return rgbRaster;
}

function fromPalette(raster, colorMap) {
  const { width, height } = raster;
  const rgbRaster = new Uint8Array(width * height * 3);
  const greenOffset = colorMap.length / 3;
  const blueOffset = colorMap.length / 3 * 2;
  for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {
    const mapIndex = raster[i];
    rgbRaster[j] = colorMap[mapIndex] / 65536 * 256;
    rgbRaster[j + 1] = colorMap[mapIndex + greenOffset] / 65536 * 256;
    rgbRaster[j + 2] = colorMap[mapIndex + blueOffset] / 65536 * 256;
  }
  return rgbRaster;
}

function fromCMYK(cmykRaster) {
  const { width, height } = cmykRaster;
  const rgbRaster = new Uint8Array(width * height * 3);
  for (let i = 0, j = 0; i < cmykRaster.length; i += 4, j += 3) {
    const c = cmykRaster[i];
    const m = cmykRaster[i + 1];
    const y = cmykRaster[i + 2];
    const k = cmykRaster[i + 3];

    rgbRaster[j] = 255 * ((255 - c) / 256) * ((255 - k) / 256);
    rgbRaster[j + 1] = 255 * ((255 - m) / 256) * ((255 - k) / 256);
    rgbRaster[j + 2] = 255 * ((255 - y) / 256) * ((255 - k) / 256);
  }
  return rgbRaster;
}

function fromYCbCr(yCbCrRaster) {
  const { width, height } = yCbCrRaster;
  const rgbRaster = new Uint8ClampedArray(width * height * 3);
  for (let i = 0, j = 0; i < yCbCrRaster.length; i += 3, j += 3) {
    const y = yCbCrRaster[i];
    const cb = yCbCrRaster[i + 1];
    const cr = yCbCrRaster[i + 2];

    rgbRaster[j] = (y + (1.40200 * (cr - 0x80)));
    rgbRaster[j + 1] = (y - (0.34414 * (cb - 0x80)) - (0.71414 * (cr - 0x80)));
    rgbRaster[j + 2] = (y + (1.77200 * (cb - 0x80)));
  }
  return rgbRaster;
}

const Xn = 0.95047;
const Yn = 1.00000;
const Zn = 1.08883;

// from https://github.com/antimatter15/rgb-lab/blob/master/color.js

function fromCIELab(cieLabRaster) {
  const { width, height } = cieLabRaster;
  const rgbRaster = new Uint8Array(width * height * 3);

  for (let i = 0, j = 0; i < cieLabRaster.length; i += 3, j += 3) {
    const L = cieLabRaster[i + 0];
    const a_ = cieLabRaster[i + 1] << 24 >> 24; // conversion from uint8 to int8
    const b_ = cieLabRaster[i + 2] << 24 >> 24; // same

    let y = (L + 16) / 116;
    let x = (a_ / 500) + y;
    let z = y - (b_ / 200);
    let r;
    let g;
    let b;

    x = Xn * ((x * x * x > 0.008856) ? x * x * x : (x - (16 / 116)) / 7.787);
    y = Yn * ((y * y * y > 0.008856) ? y * y * y : (y - (16 / 116)) / 7.787);
    z = Zn * ((z * z * z > 0.008856) ? z * z * z : (z - (16 / 116)) / 7.787);

    r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
    g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
    b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

    r = (r > 0.0031308) ? ((1.055 * (r ** (1 / 2.4))) - 0.055) : 12.92 * r;
    g = (g > 0.0031308) ? ((1.055 * (g ** (1 / 2.4))) - 0.055) : 12.92 * g;
    b = (b > 0.0031308) ? ((1.055 * (b ** (1 / 2.4))) - 0.055) : 12.92 * b;

    rgbRaster[j] = Math.max(0, Math.min(1, r)) * 255;
    rgbRaster[j + 1] = Math.max(0, Math.min(1, g)) * 255;
    rgbRaster[j + 2] = Math.max(0, Math.min(1, b)) * 255;
  }
  return rgbRaster;
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/predictor.js

function decodeRowAcc(row, stride) {
  let length = row.length - stride;
  let offset = 0;
  do {
    for (let i = stride; i > 0; i--) {
      row[offset + stride] += row[offset];
      offset++;
    }

    length -= stride;
  } while (length > 0);
}

function decodeRowFloatingPoint(row, stride, bytesPerSample) {
  let index = 0;
  let count = row.length;
  const wc = count / bytesPerSample;

  while (count > stride) {
    for (let i = stride; i > 0; --i) {
      row[index + stride] += row[index];
      ++index;
    }
    count -= stride;
  }

  const copy = row.slice();
  for (let i = 0; i < wc; ++i) {
    for (let b = 0; b < bytesPerSample; ++b) {
      row[(bytesPerSample * i) + b] = copy[((bytesPerSample - b - 1) * wc) + i];
    }
  }
}

function applyPredictor(block, predictor, width, height, bitsPerSample,
  planarConfiguration) {
  if (!predictor || predictor === 1) {
    return block;
  }

  for (let i = 0; i < bitsPerSample.length; ++i) {
    if (bitsPerSample[i] % 8 !== 0) {
      throw new Error('When decoding with predictor, only multiple of 8 bits are supported.');
    }
    if (bitsPerSample[i] !== bitsPerSample[0]) {
      throw new Error('When decoding with predictor, all samples must have the same size.');
    }
  }

  const bytesPerSample = bitsPerSample[0] / 8;
  const stride = planarConfiguration === 2 ? 1 : bitsPerSample.length;

  for (let i = 0; i < height; ++i) {
    // Last strip will be truncated if height % stripHeight != 0
    if (i * stride * width * bytesPerSample >= block.byteLength) {
      break;
    }
    let row;
    if (predictor === 2) { // horizontal prediction
      switch (bitsPerSample[0]) {
        case 8:
          row = new Uint8Array(
            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,
          );
          break;
        case 16:
          row = new Uint16Array(
            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 2,
          );
          break;
        case 32:
          row = new Uint32Array(
            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 4,
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${bitsPerSample[0]} bits per sample.`);
      }
      decodeRowAcc(row, stride, bytesPerSample);
    } else if (predictor === 3) { // horizontal floating point
      row = new Uint8Array(
        block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,
      );
      decodeRowFloatingPoint(row, stride, bytesPerSample);
    }
  }
  return block;
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/basedecoder.js


class basedecoder_BaseDecoder {
  decode(fileDirectory, buffer) {
    const decoded = this.decodeBlock(buffer);
    const predictor = fileDirectory.Predictor || 1;
    if (predictor !== 1) {
      const isTiled = !fileDirectory.StripOffsets;
      const tileWidth = isTiled ? fileDirectory.TileWidth : fileDirectory.ImageWidth;
      const tileHeight = isTiled ? fileDirectory.TileLength : (
        fileDirectory.RowsPerStrip || fileDirectory.ImageLength
      );
      return applyPredictor(
        decoded, predictor, tileWidth, tileHeight, fileDirectory.BitsPerSample,
        fileDirectory.PlanarConfiguration,
      );
    }
    return decoded;
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/raw.js



class raw_RawDecoder extends basedecoder_BaseDecoder {
  decodeBlock(buffer) {
    return buffer;
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/lzw.js



const MIN_BITS = 9;
const CLEAR_CODE = 256; // clear code
const EOI_CODE = 257; // end of information
const MAX_BYTELENGTH = 12;

function getByte(array, position, length) {
  const d = position % 8;
  const a = Math.floor(position / 8);
  const de = 8 - d;
  const ef = (position + length) - ((a + 1) * 8);
  let fg = (8 * (a + 2)) - (position + length);
  const dg = ((a + 2) * 8) - position;
  fg = Math.max(0, fg);
  if (a >= array.length) {
    console.warn('ran off the end of the buffer before finding EOI_CODE (end on input code)');
    return EOI_CODE;
  }
  let chunk1 = array[a] & ((2 ** (8 - d)) - 1);
  chunk1 <<= (length - de);
  let chunks = chunk1;
  if (a + 1 < array.length) {
    let chunk2 = array[a + 1] >>> fg;
    chunk2 <<= Math.max(0, (length - dg));
    chunks += chunk2;
  }
  if (ef > 8 && a + 2 < array.length) {
    const hi = ((a + 3) * 8) - (position + length);
    const chunk3 = array[a + 2] >>> hi;
    chunks += chunk3;
  }
  return chunks;
}

function appendReversed(dest, source) {
  for (let i = source.length - 1; i >= 0; i--) {
    dest.push(source[i]);
  }
  return dest;
}

function decompress(input) {
  const dictionaryIndex = new Uint16Array(4093);
  const dictionaryChar = new Uint8Array(4093);
  for (let i = 0; i <= 257; i++) {
    dictionaryIndex[i] = 4096;
    dictionaryChar[i] = i;
  }
  let dictionaryLength = 258;
  let byteLength = MIN_BITS;
  let position = 0;

  function initDictionary() {
    dictionaryLength = 258;
    byteLength = MIN_BITS;
  }
  function getNext(array) {
    const byte = getByte(array, position, byteLength);
    position += byteLength;
    return byte;
  }
  function addToDictionary(i, c) {
    dictionaryChar[dictionaryLength] = c;
    dictionaryIndex[dictionaryLength] = i;
    dictionaryLength++;
    return dictionaryLength - 1;
  }
  function getDictionaryReversed(n) {
    const rev = [];
    for (let i = n; i !== 4096; i = dictionaryIndex[i]) {
      rev.push(dictionaryChar[i]);
    }
    return rev;
  }

  const result = [];
  initDictionary();
  const array = new Uint8Array(input);
  let code = getNext(array);
  let oldCode;
  while (code !== EOI_CODE) {
    if (code === CLEAR_CODE) {
      initDictionary();
      code = getNext(array);
      while (code === CLEAR_CODE) {
        code = getNext(array);
      }

      if (code === EOI_CODE) {
        break;
      } else if (code > CLEAR_CODE) {
        throw new Error(`corrupted code at scanline ${code}`);
      } else {
        const val = getDictionaryReversed(code);
        appendReversed(result, val);
        oldCode = code;
      }
    } else if (code < dictionaryLength) {
      const val = getDictionaryReversed(code);
      appendReversed(result, val);
      addToDictionary(oldCode, val[val.length - 1]);
      oldCode = code;
    } else {
      const oldVal = getDictionaryReversed(oldCode);
      if (!oldVal) {
        throw new Error(`Bogus entry. Not in dictionary, ${oldCode} / ${dictionaryLength}, position: ${position}`);
      }
      appendReversed(result, oldVal);
      result.push(oldVal[oldVal.length - 1]);
      addToDictionary(oldCode, oldVal[oldVal.length - 1]);
      oldCode = code;
    }

    if (dictionaryLength + 1 >= (2 ** byteLength)) {
      if (byteLength === MAX_BYTELENGTH) {
        oldCode = undefined;
      } else {
        byteLength++;
      }
    }
    code = getNext(array);
  }
  return new Uint8Array(result);
}

class lzw_LZWDecoder extends basedecoder_BaseDecoder {
  decodeBlock(buffer) {
    return decompress(buffer, false).buffer;
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/jpeg.js


/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
   Copyright 2011 notmasteryet
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// - The JPEG specification can be found in the ITU CCITT Recommendation T.81
//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)
// - The JFIF specification can be found in the JPEG File Interchange Format
//   (www.w3.org/Graphics/JPEG/jfif3.pdf)
// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters
//   in PostScript Level 2, Technical Note #5116
//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)


const dctZigZag = new Int32Array([
  0,
  1, 8,
  16, 9, 2,
  3, 10, 17, 24,
  32, 25, 18, 11, 4,
  5, 12, 19, 26, 33, 40,
  48, 41, 34, 27, 20, 13, 6,
  7, 14, 21, 28, 35, 42, 49, 56,
  57, 50, 43, 36, 29, 22, 15,
  23, 30, 37, 44, 51, 58,
  59, 52, 45, 38, 31,
  39, 46, 53, 60,
  61, 54, 47,
  55, 62,
  63,
]);

const dctCos1 = 4017; // cos(pi/16)
const dctSin1 = 799; // sin(pi/16)
const dctCos3 = 3406; // cos(3*pi/16)
const dctSin3 = 2276; // sin(3*pi/16)
const dctCos6 = 1567; // cos(6*pi/16)
const dctSin6 = 3784; // sin(6*pi/16)
const dctSqrt2 = 5793; // sqrt(2)
const dctSqrt1d2 = 2896;// sqrt(2) / 2

function buildHuffmanTable(codeLengths, values) {
  let k = 0;
  const code = [];
  let length = 16;
  while (length > 0 && !codeLengths[length - 1]) {
    --length;
  }
  code.push({ children: [], index: 0 });

  let p = code[0];
  let q;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < codeLengths[i]; j++) {
      p = code.pop();
      p.children[p.index] = values[k];
      while (p.index > 0) {
        p = code.pop();
      }
      p.index++;
      code.push(p);
      while (code.length <= i) {
        code.push(q = { children: [], index: 0 });
        p.children[p.index] = q.children;
        p = q;
      }
      k++;
    }
    if (i + 1 < length) {
      // p here points to last code
      code.push(q = { children: [], index: 0 });
      p.children[p.index] = q.children;
      p = q;
    }
  }
  return code[0].children;
}

function decodeScan(data, initialOffset,
  frame, components, resetInterval,
  spectralStart, spectralEnd,
  successivePrev, successive) {
  const { mcusPerLine, progressive } = frame;

  const startOffset = initialOffset;
  let offset = initialOffset;
  let bitsData = 0;
  let bitsCount = 0;
  function readBit() {
    if (bitsCount > 0) {
      bitsCount--;
      return (bitsData >> bitsCount) & 1;
    }
    bitsData = data[offset++];
    if (bitsData === 0xFF) {
      const nextByte = data[offset++];
      if (nextByte) {
        throw new Error(`unexpected marker: ${((bitsData << 8) | nextByte).toString(16)}`);
      }
      // unstuff 0
    }
    bitsCount = 7;
    return bitsData >>> 7;
  }
  function decodeHuffman(tree) {
    let node = tree;
    let bit;
    while ((bit = readBit()) !== null) { // eslint-disable-line no-cond-assign
      node = node[bit];
      if (typeof node === 'number') {
        return node;
      }
      if (typeof node !== 'object') {
        throw new Error('invalid huffman sequence');
      }
    }
    return null;
  }
  function receive(initialLength) {
    let length = initialLength;
    let n = 0;
    while (length > 0) {
      const bit = readBit();
      if (bit === null) {
        return undefined;
      }
      n = (n << 1) | bit;
      --length;
    }
    return n;
  }
  function receiveAndExtend(length) {
    const n = receive(length);
    if (n >= 1 << (length - 1)) {
      return n;
    }
    return n + (-1 << length) + 1;
  }
  function decodeBaseline(component, zz) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : receiveAndExtend(t);
    component.pred += diff;
    zz[0] = component.pred;
    let k = 1;
    while (k < 64) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15;
      const r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          break;
        }
        k += 16;
      } else {
        k += r;
        const z = dctZigZag[k];
        zz[z] = receiveAndExtend(s);
        k++;
      }
    }
  }
  function decodeDCFirst(component, zz) {
    const t = decodeHuffman(component.huffmanTableDC);
    const diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
    component.pred += diff;
    zz[0] = component.pred;
  }
  function decodeDCSuccessive(component, zz) {
    zz[0] |= readBit() << successive;
  }
  let eobrun = 0;
  function decodeACFirst(component, zz) {
    if (eobrun > 0) {
      eobrun--;
      return;
    }
    let k = spectralStart;
    const e = spectralEnd;
    while (k <= e) {
      const rs = decodeHuffman(component.huffmanTableAC);
      const s = rs & 15;
      const r = rs >> 4;
      if (s === 0) {
        if (r < 15) {
          eobrun = receive(r) + (1 << r) - 1;
          break;
        }
        k += 16;
      } else {
        k += r;
        const z = dctZigZag[k];
        zz[z] = receiveAndExtend(s) * (1 << successive);
        k++;
      }
    }
  }
  let successiveACState = 0;
  let successiveACNextValue;
  function decodeACSuccessive(component, zz) {
    let k = spectralStart;
    const e = spectralEnd;
    let r = 0;
    while (k <= e) {
      const z = dctZigZag[k];
      const direction = zz[z] < 0 ? -1 : 1;
      switch (successiveACState) {
        case 0: { // initial state
          const rs = decodeHuffman(component.huffmanTableAC);
          const s = rs & 15;
          r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              eobrun = receive(r) + (1 << r);
              successiveACState = 4;
            } else {
              r = 16;
              successiveACState = 1;
            }
          } else {
            if (s !== 1) {
              throw new Error('invalid ACn encoding');
            }
            successiveACNextValue = receiveAndExtend(s);
            successiveACState = r ? 2 : 3;
          }
          continue; // eslint-disable-line no-continue
        }
        case 1: // skipping r zero items
        case 2:
          if (zz[z]) {
            zz[z] += (readBit() << successive) * direction;
          } else {
            r--;
            if (r === 0) {
              successiveACState = successiveACState === 2 ? 3 : 0;
            }
          }
          break;
        case 3: // set value for a zero item
          if (zz[z]) {
            zz[z] += (readBit() << successive) * direction;
          } else {
            zz[z] = successiveACNextValue << successive;
            successiveACState = 0;
          }
          break;
        case 4: // eob
          if (zz[z]) {
            zz[z] += (readBit() << successive) * direction;
          }
          break;
        default:
          break;
      }
      k++;
    }
    if (successiveACState === 4) {
      eobrun--;
      if (eobrun === 0) {
        successiveACState = 0;
      }
    }
  }
  function decodeMcu(component, decodeFunction, mcu, row, col) {
    const mcuRow = (mcu / mcusPerLine) | 0;
    const mcuCol = mcu % mcusPerLine;
    const blockRow = (mcuRow * component.v) + row;
    const blockCol = (mcuCol * component.h) + col;
    decodeFunction(component, component.blocks[blockRow][blockCol]);
  }
  function decodeBlock(component, decodeFunction, mcu) {
    const blockRow = (mcu / component.blocksPerLine) | 0;
    const blockCol = mcu % component.blocksPerLine;
    decodeFunction(component, component.blocks[blockRow][blockCol]);
  }

  const componentsLength = components.length;
  let component;
  let i;
  let j;
  let k;
  let n;
  let decodeFn;
  if (progressive) {
    if (spectralStart === 0) {
      decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
    } else {
      decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    }
  } else {
    decodeFn = decodeBaseline;
  }

  let mcu = 0;
  let marker;
  let mcuExpected;
  if (componentsLength === 1) {
    mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
  } else {
    mcuExpected = mcusPerLine * frame.mcusPerColumn;
  }

  const usedResetInterval = resetInterval || mcuExpected;

  while (mcu < mcuExpected) {
    // reset interval stuff
    for (i = 0; i < componentsLength; i++) {
      components[i].pred = 0;
    }
    eobrun = 0;

    if (componentsLength === 1) {
      component = components[0];
      for (n = 0; n < usedResetInterval; n++) {
        decodeBlock(component, decodeFn, mcu);
        mcu++;
      }
    } else {
      for (n = 0; n < usedResetInterval; n++) {
        for (i = 0; i < componentsLength; i++) {
          component = components[i];
          const { h, v } = component;
          for (j = 0; j < v; j++) {
            for (k = 0; k < h; k++) {
              decodeMcu(component, decodeFn, mcu, j, k);
            }
          }
        }
        mcu++;

        // If we've reached our expected MCU's, stop decoding
        if (mcu === mcuExpected) {
          break;
        }
      }
    }

    // find marker
    bitsCount = 0;
    marker = (data[offset] << 8) | data[offset + 1];
    if (marker < 0xFF00) {
      throw new Error('marker was not found');
    }

    if (marker >= 0xFFD0 && marker <= 0xFFD7) { // RSTx
      offset += 2;
    } else {
      break;
    }
  }

  return offset - startOffset;
}

function buildComponentData(frame, component) {
  const lines = [];
  const { blocksPerLine, blocksPerColumn } = component;
  const samplesPerLine = blocksPerLine << 3;
  const R = new Int32Array(64);
  const r = new Uint8Array(64);

  // A port of poppler's IDCT method which in turn is taken from:
  //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
  //   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
  //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
  //   988-991.
  function quantizeAndInverse(zz, dataOut, dataIn) {
    const qt = component.quantizationTable;
    let v0;
    let v1;
    let v2;
    let v3;
    let v4;
    let v5;
    let v6;
    let v7;
    let t;
    const p = dataIn;
    let i;

    // dequant
    for (i = 0; i < 64; i++) {
      p[i] = zz[i] * qt[i];
    }

    // inverse DCT on rows
    for (i = 0; i < 8; ++i) {
      const row = 8 * i;

      // check for all-zero AC coefficients
      if (p[1 + row] === 0 && p[2 + row] === 0 && p[3 + row] === 0
        && p[4 + row] === 0 && p[5 + row] === 0 && p[6 + row] === 0
        && p[7 + row] === 0) {
        t = ((dctSqrt2 * p[0 + row]) + 512) >> 10;
        p[0 + row] = t;
        p[1 + row] = t;
        p[2 + row] = t;
        p[3 + row] = t;
        p[4 + row] = t;
        p[5 + row] = t;
        p[6 + row] = t;
        p[7 + row] = t;
        continue; // eslint-disable-line no-continue
      }

      // stage 4
      v0 = ((dctSqrt2 * p[0 + row]) + 128) >> 8;
      v1 = ((dctSqrt2 * p[4 + row]) + 128) >> 8;
      v2 = p[2 + row];
      v3 = p[6 + row];
      v4 = ((dctSqrt1d2 * (p[1 + row] - p[7 + row])) + 128) >> 8;
      v7 = ((dctSqrt1d2 * (p[1 + row] + p[7 + row])) + 128) >> 8;
      v5 = p[3 + row] << 4;
      v6 = p[5 + row] << 4;

      // stage 3
      t = (v0 - v1 + 1) >> 1;
      v0 = (v0 + v1 + 1) >> 1;
      v1 = t;
      t = ((v2 * dctSin6) + (v3 * dctCos6) + 128) >> 8;
      v2 = ((v2 * dctCos6) - (v3 * dctSin6) + 128) >> 8;
      v3 = t;
      t = (v4 - v6 + 1) >> 1;
      v4 = (v4 + v6 + 1) >> 1;
      v6 = t;
      t = (v7 + v5 + 1) >> 1;
      v5 = (v7 - v5 + 1) >> 1;
      v7 = t;

      // stage 2
      t = (v0 - v3 + 1) >> 1;
      v0 = (v0 + v3 + 1) >> 1;
      v3 = t;
      t = (v1 - v2 + 1) >> 1;
      v1 = (v1 + v2 + 1) >> 1;
      v2 = t;
      t = ((v4 * dctSin3) + (v7 * dctCos3) + 2048) >> 12;
      v4 = ((v4 * dctCos3) - (v7 * dctSin3) + 2048) >> 12;
      v7 = t;
      t = ((v5 * dctSin1) + (v6 * dctCos1) + 2048) >> 12;
      v5 = ((v5 * dctCos1) - (v6 * dctSin1) + 2048) >> 12;
      v6 = t;

      // stage 1
      p[0 + row] = v0 + v7;
      p[7 + row] = v0 - v7;
      p[1 + row] = v1 + v6;
      p[6 + row] = v1 - v6;
      p[2 + row] = v2 + v5;
      p[5 + row] = v2 - v5;
      p[3 + row] = v3 + v4;
      p[4 + row] = v3 - v4;
    }

    // inverse DCT on columns
    for (i = 0; i < 8; ++i) {
      const col = i;

      // check for all-zero AC coefficients
      if (p[(1 * 8) + col] === 0 && p[(2 * 8) + col] === 0 && p[(3 * 8) + col] === 0
        && p[(4 * 8) + col] === 0 && p[(5 * 8) + col] === 0 && p[(6 * 8) + col] === 0
        && p[(7 * 8) + col] === 0) {
        t = ((dctSqrt2 * dataIn[i + 0]) + 8192) >> 14;
        p[(0 * 8) + col] = t;
        p[(1 * 8) + col] = t;
        p[(2 * 8) + col] = t;
        p[(3 * 8) + col] = t;
        p[(4 * 8) + col] = t;
        p[(5 * 8) + col] = t;
        p[(6 * 8) + col] = t;
        p[(7 * 8) + col] = t;
        continue; // eslint-disable-line no-continue
      }

      // stage 4
      v0 = ((dctSqrt2 * p[(0 * 8) + col]) + 2048) >> 12;
      v1 = ((dctSqrt2 * p[(4 * 8) + col]) + 2048) >> 12;
      v2 = p[(2 * 8) + col];
      v3 = p[(6 * 8) + col];
      v4 = ((dctSqrt1d2 * (p[(1 * 8) + col] - p[(7 * 8) + col])) + 2048) >> 12;
      v7 = ((dctSqrt1d2 * (p[(1 * 8) + col] + p[(7 * 8) + col])) + 2048) >> 12;
      v5 = p[(3 * 8) + col];
      v6 = p[(5 * 8) + col];

      // stage 3
      t = (v0 - v1 + 1) >> 1;
      v0 = (v0 + v1 + 1) >> 1;
      v1 = t;
      t = ((v2 * dctSin6) + (v3 * dctCos6) + 2048) >> 12;
      v2 = ((v2 * dctCos6) - (v3 * dctSin6) + 2048) >> 12;
      v3 = t;
      t = (v4 - v6 + 1) >> 1;
      v4 = (v4 + v6 + 1) >> 1;
      v6 = t;
      t = (v7 + v5 + 1) >> 1;
      v5 = (v7 - v5 + 1) >> 1;
      v7 = t;

      // stage 2
      t = (v0 - v3 + 1) >> 1;
      v0 = (v0 + v3 + 1) >> 1;
      v3 = t;
      t = (v1 - v2 + 1) >> 1;
      v1 = (v1 + v2 + 1) >> 1;
      v2 = t;
      t = ((v4 * dctSin3) + (v7 * dctCos3) + 2048) >> 12;
      v4 = ((v4 * dctCos3) - (v7 * dctSin3) + 2048) >> 12;
      v7 = t;
      t = ((v5 * dctSin1) + (v6 * dctCos1) + 2048) >> 12;
      v5 = ((v5 * dctCos1) - (v6 * dctSin1) + 2048) >> 12;
      v6 = t;

      // stage 1
      p[(0 * 8) + col] = v0 + v7;
      p[(7 * 8) + col] = v0 - v7;
      p[(1 * 8) + col] = v1 + v6;
      p[(6 * 8) + col] = v1 - v6;
      p[(2 * 8) + col] = v2 + v5;
      p[(5 * 8) + col] = v2 - v5;
      p[(3 * 8) + col] = v3 + v4;
      p[(4 * 8) + col] = v3 - v4;
    }

    // convert to 8-bit integers
    for (i = 0; i < 64; ++i) {
      const sample = 128 + ((p[i] + 8) >> 4);
      if (sample < 0) {
        dataOut[i] = 0;
      } else if (sample > 0XFF) {
        dataOut[i] = 0xFF;
      } else {
        dataOut[i] = sample;
      }
    }
  }

  for (let blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
    const scanLine = blockRow << 3;
    for (let i = 0; i < 8; i++) {
      lines.push(new Uint8Array(samplesPerLine));
    }
    for (let blockCol = 0; blockCol < blocksPerLine; blockCol++) {
      quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);

      let offset = 0;
      const sample = blockCol << 3;
      for (let j = 0; j < 8; j++) {
        const line = lines[scanLine + j];
        for (let i = 0; i < 8; i++) {
          line[sample + i] = r[offset++];
        }
      }
    }
  }
  return lines;
}

class JpegStreamReader {
  constructor() {
    this.jfif = null;
    this.adobe = null;

    this.quantizationTables = [];
    this.huffmanTablesAC = [];
    this.huffmanTablesDC = [];
    this.resetFrames();
  }

  resetFrames() {
    this.frames = [];
  }

  parse(data) {
    let offset = 0;
    // const { length } = data;
    function readUint16() {
      const value = (data[offset] << 8) | data[offset + 1];
      offset += 2;
      return value;
    }
    function readDataBlock() {
      const length = readUint16();
      const array = data.subarray(offset, offset + length - 2);
      offset += array.length;
      return array;
    }
    function prepareComponents(frame) {
      let maxH = 0;
      let maxV = 0;
      let component;
      let componentId;
      for (componentId in frame.components) {
        if (frame.components.hasOwnProperty(componentId)) {
          component = frame.components[componentId];
          if (maxH < component.h) {
            maxH = component.h;
          }
          if (maxV < component.v) {
            maxV = component.v;
          }
        }
      }
      const mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
      const mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
      for (componentId in frame.components) {
        if (frame.components.hasOwnProperty(componentId)) {
          component = frame.components[componentId];
          const blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
          const blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / maxV);
          const blocksPerLineForMcu = mcusPerLine * component.h;
          const blocksPerColumnForMcu = mcusPerColumn * component.v;
          const blocks = [];
          for (let i = 0; i < blocksPerColumnForMcu; i++) {
            const row = [];
            for (let j = 0; j < blocksPerLineForMcu; j++) {
              row.push(new Int32Array(64));
            }
            blocks.push(row);
          }
          component.blocksPerLine = blocksPerLine;
          component.blocksPerColumn = blocksPerColumn;
          component.blocks = blocks;
        }
      }
      frame.maxH = maxH;
      frame.maxV = maxV;
      frame.mcusPerLine = mcusPerLine;
      frame.mcusPerColumn = mcusPerColumn;
    }

    let fileMarker = readUint16();
    if (fileMarker !== 0xFFD8) { // SOI (Start of Image)
      throw new Error('SOI not found');
    }

    fileMarker = readUint16();
    while (fileMarker !== 0xFFD9) { // EOI (End of image)
      switch (fileMarker) {
        case 0xFF00: break;
        case 0xFFE0: // APP0 (Application Specific)
        case 0xFFE1: // APP1
        case 0xFFE2: // APP2
        case 0xFFE3: // APP3
        case 0xFFE4: // APP4
        case 0xFFE5: // APP5
        case 0xFFE6: // APP6
        case 0xFFE7: // APP7
        case 0xFFE8: // APP8
        case 0xFFE9: // APP9
        case 0xFFEA: // APP10
        case 0xFFEB: // APP11
        case 0xFFEC: // APP12
        case 0xFFED: // APP13
        case 0xFFEE: // APP14
        case 0xFFEF: // APP15
        case 0xFFFE: { // COM (Comment)
          const appData = readDataBlock();

          if (fileMarker === 0xFFE0) {
            if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49
              && appData[3] === 0x46 && appData[4] === 0) { // 'JFIF\x00'
              this.jfif = {
                version: { major: appData[5], minor: appData[6] },
                densityUnits: appData[7],
                xDensity: (appData[8] << 8) | appData[9],
                yDensity: (appData[10] << 8) | appData[11],
                thumbWidth: appData[12],
                thumbHeight: appData[13],
                thumbData: appData.subarray(14, 14 + (3 * appData[12] * appData[13])),
              };
            }
          }
          // TODO APP1 - Exif
          if (fileMarker === 0xFFEE) {
            if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F
              && appData[3] === 0x62 && appData[4] === 0x65 && appData[5] === 0) { // 'Adobe\x00'
              this.adobe = {
                version: appData[6],
                flags0: (appData[7] << 8) | appData[8],
                flags1: (appData[9] << 8) | appData[10],
                transformCode: appData[11],
              };
            }
          }
          break;
        }

        case 0xFFDB: { // DQT (Define Quantization Tables)
          const quantizationTablesLength = readUint16();
          const quantizationTablesEnd = quantizationTablesLength + offset - 2;
          while (offset < quantizationTablesEnd) {
            const quantizationTableSpec = data[offset++];
            const tableData = new Int32Array(64);
            if ((quantizationTableSpec >> 4) === 0) { // 8 bit values
              for (let j = 0; j < 64; j++) {
                const z = dctZigZag[j];
                tableData[z] = data[offset++];
              }
            } else if ((quantizationTableSpec >> 4) === 1) { // 16 bit
              for (let j = 0; j < 64; j++) {
                const z = dctZigZag[j];
                tableData[z] = readUint16();
              }
            } else {
              throw new Error('DQT: invalid table spec');
            }
            this.quantizationTables[quantizationTableSpec & 15] = tableData;
          }
          break;
        }

        case 0xFFC0: // SOF0 (Start of Frame, Baseline DCT)
        case 0xFFC1: // SOF1 (Start of Frame, Extended DCT)
        case 0xFFC2: { // SOF2 (Start of Frame, Progressive DCT)
          readUint16(); // skip data length
          const frame = {
            extended: (fileMarker === 0xFFC1),
            progressive: (fileMarker === 0xFFC2),
            precision: data[offset++],
            scanLines: readUint16(),
            samplesPerLine: readUint16(),
            components: {},
            componentsOrder: [],
          };

          const componentsCount = data[offset++];
          let componentId;
          // let maxH = 0;
          // let maxV = 0;
          for (let i = 0; i < componentsCount; i++) {
            componentId = data[offset];
            const h = data[offset + 1] >> 4;
            const v = data[offset + 1] & 15;
            const qId = data[offset + 2];
            frame.componentsOrder.push(componentId);
            frame.components[componentId] = {
              h,
              v,
              quantizationIdx: qId,
            };
            offset += 3;
          }
          prepareComponents(frame);
          this.frames.push(frame);
          break;
        }

        case 0xFFC4: { // DHT (Define Huffman Tables)
          const huffmanLength = readUint16();
          for (let i = 2; i < huffmanLength;) {
            const huffmanTableSpec = data[offset++];
            const codeLengths = new Uint8Array(16);
            let codeLengthSum = 0;
            for (let j = 0; j < 16; j++, offset++) {
              codeLengths[j] = data[offset];
              codeLengthSum += codeLengths[j];
            }
            const huffmanValues = new Uint8Array(codeLengthSum);
            for (let j = 0; j < codeLengthSum; j++, offset++) {
              huffmanValues[j] = data[offset];
            }
            i += 17 + codeLengthSum;

            if ((huffmanTableSpec >> 4) === 0) {
              this.huffmanTablesDC[huffmanTableSpec & 15] = buildHuffmanTable(
                codeLengths, huffmanValues,
              );
            } else {
              this.huffmanTablesAC[huffmanTableSpec & 15] = buildHuffmanTable(
                codeLengths, huffmanValues,
              );
            }
          }
          break;
        }

        case 0xFFDD: // DRI (Define Restart Interval)
          readUint16(); // skip data length
          this.resetInterval = readUint16();
          break;

        case 0xFFDA: { // SOS (Start of Scan)
          readUint16(); // skip length
          const selectorsCount = data[offset++];
          const components = [];
          const frame = this.frames[0];
          for (let i = 0; i < selectorsCount; i++) {
            const component = frame.components[data[offset++]];
            const tableSpec = data[offset++];
            component.huffmanTableDC = this.huffmanTablesDC[tableSpec >> 4];
            component.huffmanTableAC = this.huffmanTablesAC[tableSpec & 15];
            components.push(component);
          }
          const spectralStart = data[offset++];
          const spectralEnd = data[offset++];
          const successiveApproximation = data[offset++];
          const processed = decodeScan(data, offset,
            frame, components, this.resetInterval,
            spectralStart, spectralEnd,
            successiveApproximation >> 4, successiveApproximation & 15);
          offset += processed;
          break;
        }

        case 0xFFFF: // Fill bytes
          if (data[offset] !== 0xFF) { // Avoid skipping a valid marker.
            offset--;
          }
          break;

        default:
          if (data[offset - 3] === 0xFF
            && data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
            // could be incorrect encoding -- last 0xFF byte of the previous
            // block was eaten by the encoder
            offset -= 3;
            break;
          }
          throw new Error(`unknown JPEG marker ${fileMarker.toString(16)}`);
      }
      fileMarker = readUint16();
    }
  }

  getResult() {
    const { frames } = this;
    if (this.frames.length === 0) {
      throw new Error('no frames were decoded');
    } else if (this.frames.length > 1) {
      console.warn('more than one frame is not supported');
    }

    // set each frame's components quantization table
    for (let i = 0; i < this.frames.length; i++) {
      const cp = this.frames[i].components;
      for (const j of Object.keys(cp)) {
        cp[j].quantizationTable = this.quantizationTables[cp[j].quantizationIdx];
        delete cp[j].quantizationIdx;
      }
    }

    const frame = frames[0];
    const { components, componentsOrder } = frame;
    const outComponents = [];
    const width = frame.samplesPerLine;
    const height = frame.scanLines;

    for (let i = 0; i < componentsOrder.length; i++) {
      const component = components[componentsOrder[i]];
      outComponents.push({
        lines: buildComponentData(frame, component),
        scaleX: component.h / frame.maxH,
        scaleY: component.v / frame.maxV,
      });
    }

    const out = new Uint8Array(width * height * outComponents.length);
    let oi = 0;
    for (let y = 0; y < height; ++y) {
      for (let x = 0; x < width; ++x) {
        for (let i = 0; i < outComponents.length; ++i) {
          const component = outComponents[i];
          out[oi] = component.lines[0 | y * component.scaleY][0 | x * component.scaleX];
          ++oi;
        }
      }
    }
    return out;
  }
}

class jpeg_JpegDecoder extends basedecoder_BaseDecoder {
  constructor(fileDirectory) {
    super();
    this.reader = new JpegStreamReader();
    if (fileDirectory.JPEGTables) {
      this.reader.parse(fileDirectory.JPEGTables);
    }
  }

  decodeBlock(buffer) {
    this.reader.resetFrames();
    this.reader.parse(new Uint8Array(buffer));
    return this.reader.getResult().buffer;
  }
}

// EXTERNAL MODULE: external "pako/lib/inflate"
var inflate_ = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/deflate.js



class deflate_DeflateDecoder extends basedecoder_BaseDecoder {
  decodeBlock(buffer) {
    return Object(inflate_["inflate"])(new Uint8Array(buffer)).buffer;
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/packbits.js



class packbits_PackbitsDecoder extends basedecoder_BaseDecoder {
  decodeBlock(buffer) {
    const dataView = new DataView(buffer);
    const out = [];

    for (let i = 0; i < buffer.byteLength; ++i) {
      let header = dataView.getInt8(i);
      if (header < 0) {
        const next = dataView.getUint8(i + 1);
        header = -header;
        for (let j = 0; j <= header; ++j) {
          out.push(next);
        }
        i += 1;
      } else {
        for (let j = 0; j <= header; ++j) {
          out.push(dataView.getUint8(i + j + 1));
        }
        i += header + 1;
      }
    }
    return new Uint8Array(out).buffer;
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/compression/index.js






function getDecoder(fileDirectory) {
  switch (fileDirectory.Compression) {
    case undefined:
    case 1: // no compression
      return new raw_RawDecoder();
    case 5: // LZW
      return new lzw_LZWDecoder();
    case 6: // JPEG
      throw new Error('old style JPEG compression is not supported.');
    case 7: // JPEG
      return new jpeg_JpegDecoder(fileDirectory);
    case 8: // Deflate as recognized by Adobe
    case 32946: // Deflate GDAL default
      return new deflate_DeflateDecoder();
    case 32773: // packbits
      return new packbits_PackbitsDecoder();
    default:
      throw new Error(`Unknown compression method identifier: ${fileDirectory.Compression}`);
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/resample.js
/**
 * @module resample
 */

function copyNewSize(array, width, height, samplesPerPixel = 1) {
  return new (Object.getPrototypeOf(array).constructor)(width * height * samplesPerPixel);
}

/**
 * Resample the input arrays using nearest neighbor value selection.
 * @param {TypedArray[]} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @returns {TypedArray[]} The resampled rasters
 */
function resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;
  return valueArrays.map((array) => {
    const newArray = copyNewSize(array, outWidth, outHeight);
    for (let y = 0; y < outHeight; ++y) {
      const cy = Math.min(Math.round(relY * y), inHeight - 1);
      for (let x = 0; x < outWidth; ++x) {
        const cx = Math.min(Math.round(relX * x), inWidth - 1);
        const value = array[(cy * inWidth) + cx];
        newArray[(y * outWidth) + x] = value;
      }
    }
    return newArray;
  });
}

// simple linear interpolation, code from:
// https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support
function lerp(v0, v1, t) {
  return ((1 - t) * v0) + (t * v1);
}

/**
 * Resample the input arrays using bilinear interpolation.
 * @param {TypedArray[]} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @returns {TypedArray[]} The resampled rasters
 */
function resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;

  return valueArrays.map((array) => {
    const newArray = copyNewSize(array, outWidth, outHeight);
    for (let y = 0; y < outHeight; ++y) {
      const rawY = relY * y;

      const yl = Math.floor(rawY);
      const yh = Math.min(Math.ceil(rawY), (inHeight - 1));

      for (let x = 0; x < outWidth; ++x) {
        const rawX = relX * x;
        const tx = rawX % 1;

        const xl = Math.floor(rawX);
        const xh = Math.min(Math.ceil(rawX), (inWidth - 1));

        const ll = array[(yl * inWidth) + xl];
        const hl = array[(yl * inWidth) + xh];
        const lh = array[(yh * inWidth) + xl];
        const hh = array[(yh * inWidth) + xh];

        const value = lerp(
          lerp(ll, hl, tx),
          lerp(lh, hh, tx),
          rawY % 1,
        );
        newArray[(y * outWidth) + x] = value;
      }
    }
    return newArray;
  });
}

/**
 * Resample the input arrays using the selected resampling method.
 * @param {TypedArray[]} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {string} [method = 'nearest'] The desired resampling method
 * @returns {TypedArray[]} The resampled rasters
 */
function resample(valueArrays, inWidth, inHeight, outWidth, outHeight, method = 'nearest') {
  switch (method.toLowerCase()) {
    case 'nearest':
      return resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight);
    case 'bilinear':
    case 'linear':
      return resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight);
    default:
      throw new Error(`Unsupported resampling method: '${method}'`);
  }
}

/**
 * Resample the pixel interleaved input array using nearest neighbor value selection.
 * @param {TypedArray} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {number} samples The number of samples per pixel for pixel
 *                         interleaved data
 * @returns {TypedArray} The resampled raster
 */
function resampleNearestInterleaved(
  valueArray, inWidth, inHeight, outWidth, outHeight, samples) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;

  const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);
  for (let y = 0; y < outHeight; ++y) {
    const cy = Math.min(Math.round(relY * y), inHeight - 1);
    for (let x = 0; x < outWidth; ++x) {
      const cx = Math.min(Math.round(relX * x), inWidth - 1);
      for (let i = 0; i < samples; ++i) {
        const value = valueArray[(cy * inWidth * samples) + (cx * samples) + i];
        newArray[(y * outWidth * samples) + (x * samples) + i] = value;
      }
    }
  }
  return newArray;
}

/**
 * Resample the pixel interleaved input array using bilinear interpolation.
 * @param {TypedArray} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {number} samples The number of samples per pixel for pixel
 *                         interleaved data
 * @returns {TypedArray} The resampled raster
 */
function resampleBilinearInterleaved(
  valueArray, inWidth, inHeight, outWidth, outHeight, samples) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;
  const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);
  for (let y = 0; y < outHeight; ++y) {
    const rawY = relY * y;

    const yl = Math.floor(rawY);
    const yh = Math.min(Math.ceil(rawY), (inHeight - 1));

    for (let x = 0; x < outWidth; ++x) {
      const rawX = relX * x;
      const tx = rawX % 1;

      const xl = Math.floor(rawX);
      const xh = Math.min(Math.ceil(rawX), (inWidth - 1));

      for (let i = 0; i < samples; ++i) {
        const ll = valueArray[(yl * inWidth * samples) + (xl * samples) + i];
        const hl = valueArray[(yl * inWidth * samples) + (xh * samples) + i];
        const lh = valueArray[(yh * inWidth * samples) + (xl * samples) + i];
        const hh = valueArray[(yh * inWidth * samples) + (xh * samples) + i];

        const value = lerp(
          lerp(ll, hl, tx),
          lerp(lh, hh, tx),
          rawY % 1,
        );
        newArray[(y * outWidth * samples) + (x * samples) + i] = value;
      }
    }
  }
  return newArray;
}

/**
 * Resample the pixel interleaved input array using the selected resampling method.
 * @param {TypedArray} valueArray The input array to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {number} samples The number of samples per pixel for pixel
 *                                 interleaved data
 * @param {string} [method = 'nearest'] The desired resampling method
 * @returns {TypedArray} The resampled rasters
 */
function resampleInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples, method = 'nearest') {
  switch (method.toLowerCase()) {
    case 'nearest':
      return resampleNearestInterleaved(
        valueArray, inWidth, inHeight, outWidth, outHeight, samples,
      );
    case 'bilinear':
    case 'linear':
      return resampleBilinearInterleaved(
        valueArray, inWidth, inHeight, outWidth, outHeight, samples,
      );
    default:
      throw new Error(`Unsupported resampling method: '${method}'`);
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/geotiffimage.js
/* eslint max-len: ["error", { "code": 120 }] */







function sum(array, start, end) {
  let s = 0;
  for (let i = start; i < end; ++i) {
    s += array[i];
  }
  return s;
}

function arrayForType(format, bitsPerSample, size) {
  switch (format) {
    case 1: // unsigned integer data
      switch (bitsPerSample) {
        case 8:
          return new Uint8Array(size);
        case 16:
          return new Uint16Array(size);
        case 32:
          return new Uint32Array(size);
        default:
          break;
      }
      break;
    case 2: // twos complement signed integer data
      switch (bitsPerSample) {
        case 8:
          return new Int8Array(size);
        case 16:
          return new Int16Array(size);
        case 32:
          return new Int32Array(size);
        default:
          break;
      }
      break;
    case 3: // floating point data
      switch (bitsPerSample) {
        case 32:
          return new Float32Array(size);
        case 64:
          return new Float64Array(size);
        default:
          break;
      }
      break;
    default:
      break;
  }
  throw Error('Unsupported data format/bitsPerSample');
}

/**
 * GeoTIFF sub-file image.
 */
class geotiffimage_GeoTIFFImage {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {Source} source The datasource to read from
   */
  constructor(fileDirectory, geoKeys, dataView, littleEndian, cache, source) {
    this.fileDirectory = fileDirectory;
    this.geoKeys = geoKeys;
    this.dataView = dataView;
    this.littleEndian = littleEndian;
    this.tiles = cache ? {} : null;
    this.isTiled = !fileDirectory.StripOffsets;
    const planarConfiguration = fileDirectory.PlanarConfiguration;
    this.planarConfiguration = (typeof planarConfiguration === 'undefined') ? 1 : planarConfiguration;
    if (this.planarConfiguration !== 1 && this.planarConfiguration !== 2) {
      throw new Error('Invalid planar configuration.');
    }

    this.source = source;
  }

  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }

  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }

  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }

  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }

  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return this.fileDirectory.SamplesPerPixel;
  }

  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }

  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    if (this.isTiled) {
      return this.fileDirectory.TileLength;
    }
    if (typeof this.fileDirectory.RowsPerStrip !== 'undefined') {
      return Math.min(this.fileDirectory.RowsPerStrip, this.getHeight());
    }
    return this.getHeight();
  }

  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let bitsPerSample = 0;
    for (let i = 0; i < this.fileDirectory.BitsPerSample.length; ++i) {
      const bits = this.fileDirectory.BitsPerSample[i];
      if ((bits % 8) !== 0) {
        throw new Error(`Sample bit-width of ${bits} is not supported.`);
      } else if (bits !== this.fileDirectory.BitsPerSample[0]) {
        throw new Error('Differing size of samples in a pixel are not supported.');
      }
      bitsPerSample += bits;
    }
    return bitsPerSample / 8;
  }

  getSampleByteSize(i) {
    if (i >= this.fileDirectory.BitsPerSample.length) {
      throw new RangeError(`Sample index ${i} is out of range.`);
    }
    const bits = this.fileDirectory.BitsPerSample[i];
    if ((bits % 8) !== 0) {
      throw new Error(`Sample bit-width of ${bits} is not supported.`);
    }
    return (bits / 8);
  }

  getReaderForSample(sampleIndex) {
    const format = this.fileDirectory.SampleFormat
      ? this.fileDirectory.SampleFormat[sampleIndex] : 1;
    const bitsPerSample = this.fileDirectory.BitsPerSample[sampleIndex];
    switch (format) {
      case 1: // unsigned integer data
        switch (bitsPerSample) {
          case 8:
            return DataView.prototype.getUint8;
          case 16:
            return DataView.prototype.getUint16;
          case 32:
            return DataView.prototype.getUint32;
          default:
            break;
        }
        break;
      case 2: // twos complement signed integer data
        switch (bitsPerSample) {
          case 8:
            return DataView.prototype.getInt8;
          case 16:
            return DataView.prototype.getInt16;
          case 32:
            return DataView.prototype.getInt32;
          default:
            break;
        }
        break;
      case 3:
        switch (bitsPerSample) {
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
          default:
            break;
        }
        break;
      default:
        break;
    }
    throw Error('Unsupported data format/bitsPerSample');
  }

  getArrayForSample(sampleIndex, size) {
    const format = this.fileDirectory.SampleFormat
      ? this.fileDirectory.SampleFormat[sampleIndex] : 1;
    const bitsPerSample = this.fileDirectory.BitsPerSample[sampleIndex];
    return arrayForType(format, bitsPerSample, size);
  }

  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(x, y, sample, poolOrDecoder) {
    const numTilesPerRow = Math.ceil(this.getWidth() / this.getTileWidth());
    const numTilesPerCol = Math.ceil(this.getHeight() / this.getTileHeight());
    let index;
    const { tiles } = this;
    if (this.planarConfiguration === 1) {
      index = (y * numTilesPerRow) + x;
    } else if (this.planarConfiguration === 2) {
      index = (sample * numTilesPerRow * numTilesPerCol) + (y * numTilesPerRow) + x;
    }

    let offset;
    let byteCount;
    if (this.isTiled) {
      offset = this.fileDirectory.TileOffsets[index];
      byteCount = this.fileDirectory.TileByteCounts[index];
    } else {
      offset = this.fileDirectory.StripOffsets[index];
      byteCount = this.fileDirectory.StripByteCounts[index];
    }
    const slice = await this.source.fetch(offset, byteCount);

    // either use the provided pool or decoder to decode the data
    let request;
    if (tiles === null) {
      request = poolOrDecoder.decode(this.fileDirectory, slice);
    } else if (!tiles[index]) {
      request = poolOrDecoder.decode(this.fileDirectory, slice);
      tiles[index] = request;
    }
    return { x, y, sample, data: await request };
  }

  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray[]|TypedArray} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {Pool} pool The decoder pool
   * @returns {Promise<TypedArray[]>|Promise<TypedArray>}
   */
  async _readRaster(imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod) {
    const tileWidth = this.getTileWidth();
    const tileHeight = this.getTileHeight();

    const minXTile = Math.max(Math.floor(imageWindow[0] / tileWidth), 0);
    const maxXTile = Math.min(
      Math.ceil(imageWindow[2] / tileWidth),
      Math.ceil(this.getWidth() / this.getTileWidth()),
    );
    const minYTile = Math.max(Math.floor(imageWindow[1] / tileHeight), 0);
    const maxYTile = Math.min(
      Math.ceil(imageWindow[3] / tileHeight),
      Math.ceil(this.getHeight() / this.getTileHeight()),
    );
    const windowWidth = imageWindow[2] - imageWindow[0];

    let bytesPerPixel = this.getBytesPerPixel();

    const srcSampleOffsets = [];
    const sampleReaders = [];
    for (let i = 0; i < samples.length; ++i) {
      if (this.planarConfiguration === 1) {
        srcSampleOffsets.push(sum(this.fileDirectory.BitsPerSample, 0, samples[i]) / 8);
      } else {
        srcSampleOffsets.push(0);
      }
      sampleReaders.push(this.getReaderForSample(samples[i]));
    }

    const promises = [];
    const { littleEndian } = this;

    for (let yTile = minYTile; yTile < maxYTile; ++yTile) {
      for (let xTile = minXTile; xTile < maxXTile; ++xTile) {
        for (let sampleIndex = 0; sampleIndex < samples.length; ++sampleIndex) {
          const si = sampleIndex;
          const sample = samples[sampleIndex];
          if (this.planarConfiguration === 2) {
            bytesPerPixel = this.getSampleByteSize(sample);
          }
          const promise = this.getTileOrStrip(xTile, yTile, sample, poolOrDecoder);
          promises.push(promise);
          promise.then((tile) => {
            const buffer = tile.data;
            const dataView = new DataView(buffer);
            const firstLine = tile.y * tileHeight;
            const firstCol = tile.x * tileWidth;
            const lastLine = (tile.y + 1) * tileHeight;
            const lastCol = (tile.x + 1) * tileWidth;
            const reader = sampleReaders[si];

            const ymax = Math.min(tileHeight, tileHeight - (lastLine - imageWindow[3]));
            const xmax = Math.min(tileWidth, tileWidth - (lastCol - imageWindow[2]));

            for (let y = Math.max(0, imageWindow[1] - firstLine); y < ymax; ++y) {
              for (let x = Math.max(0, imageWindow[0] - firstCol); x < xmax; ++x) {
                const pixelOffset = ((y * tileWidth) + x) * bytesPerPixel;
                const value = reader.call(
                  dataView, pixelOffset + srcSampleOffsets[si], littleEndian,
                );
                let windowCoordinate;
                if (interleave) {
                  windowCoordinate = ((y + firstLine - imageWindow[1]) * windowWidth * samples.length)
                    + ((x + firstCol - imageWindow[0]) * samples.length)
                    + si;
                  valueArrays[windowCoordinate] = value;
                } else {
                  windowCoordinate = (
                    (y + firstLine - imageWindow[1]) * windowWidth
                  ) + x + firstCol - imageWindow[0];
                  valueArrays[si][windowCoordinate] = value;
                }
              }
            }
          });
        }
      }
    }
    await Promise.all(promises);

    if ((width && (imageWindow[2] - imageWindow[0]) !== width)
        || (height && (imageWindow[3] - imageWindow[1]) !== height)) {
      let resampled;
      if (interleave) {
        resampled = resampleInterleaved(
          valueArrays,
          imageWindow[2] - imageWindow[0],
          imageWindow[3] - imageWindow[1],
          width, height,
          samples.length,
          resampleMethod,
        );
      } else {
        resampled = resample(
          valueArrays,
          imageWindow[2] - imageWindow[0],
          imageWindow[3] - imageWindow[1],
          width, height,
          resampleMethod,
        );
      }
      resampled.width = width;
      resampled.height = height;
      return resampled;
    }

    valueArrays.width = width || imageWindow[2] - imageWindow[0];
    valueArrays.height = height || imageWindow[3] - imageWindow[1];

    return valueArrays;
  }

  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {Object} [options={}] optional parameters
   * @param {Array} [options.window=whole image] the subset to read data from.
   * @param {Array} [options.samples=all samples] the selection of samples to read from.
   * @param {Boolean} [options.interleave=false] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {Number} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is
   *                                 not the same as the images, resampling will be
   *                                 performed.
   * @param {number} [options.height] The desired height of the output. When the width
   *                                  is not the same as the images, resampling will
   *                                  be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {number|number[]} [options.fillValue] The value to use for parts of the image
   *                                              outside of the images extent. When
   *                                              multiple samples are requested, an
   *                                              array of fill values can be passed.
   * @returns {Promise.<(TypedArray|TypedArray[])>} the decoded arrays as a promise
   */
  async readRasters({
    window: wnd, samples = [], interleave, pool = null,
    width, height, resampleMethod, fillValue,
  } = {}) {
    const imageWindow = wnd || [0, 0, this.getWidth(), this.getHeight()];

    // check parameters
    if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {
      throw new Error('Invalid subsets');
    }

    const imageWindowWidth = imageWindow[2] - imageWindow[0];
    const imageWindowHeight = imageWindow[3] - imageWindow[1];
    const numPixels = imageWindowWidth * imageWindowHeight;

    if (!samples || !samples.length) {
      for (let i = 0; i < this.fileDirectory.SamplesPerPixel; ++i) {
        samples.push(i);
      }
    } else {
      for (let i = 0; i < samples.length; ++i) {
        if (samples[i] >= this.fileDirectory.SamplesPerPixel) {
          return Promise.reject(new RangeError(`Invalid sample index '${samples[i]}'.`));
        }
      }
    }
    let valueArrays;
    if (interleave) {
      const format = this.fileDirectory.SampleFormat
        ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1;
      const bitsPerSample = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      valueArrays = arrayForType(format, bitsPerSample, numPixels * samples.length);
      if (fillValue) {
        valueArrays.fill(fillValue);
      }
    } else {
      valueArrays = [];
      for (let i = 0; i < samples.length; ++i) {
        const valueArray = this.getArrayForSample(samples[i], numPixels);
        if (Array.isArray(fillValue) && i < fillValue.length) {
          valueArray.fill(fillValue[i]);
        } else if (fillValue && !Array.isArray(fillValue)) {
          valueArray.fill(fillValue);
        }
        valueArrays.push(valueArray);
      }
    }

    const poolOrDecoder = pool || getDecoder(this.fileDirectory);

    const result = await this._readRaster(
      imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod,
    );
    return result;
  }

  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * greayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array} [options.window=whole image] the subset to read data from.
   * @param {Number} [pool=null] The optional decoder pool to use.
   * @param {number} [width] The desired width of the output. When the width is no the
   *                         same as the images, resampling will be performed.
   * @param {number} [height] The desired height of the output. When the width is no the
   *                          same as the images, resampling will be performed.
   * @param {string} [resampleMethod='nearest'] The desired resampling method.
   * @param {bool} [enableAlpha=false] Enable reading alpha channel if present.
   * @returns {Promise.<TypedArray|TypedArray[]>} the RGB array as a Promise
   */
  async readRGB({ window, pool = null, width, height, resampleMethod, enableAlpha = false } = {}) {
    const imageWindow = window || [0, 0, this.getWidth(), this.getHeight()];

    // check parameters
    if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {
      throw new Error('Invalid subsets');
    }

    const pi = this.fileDirectory.PhotometricInterpretation;

    if (pi === photometricInterpretations.RGB) {
      let s = [0, 1, 2];
      if ((!(this.fileDirectory.ExtraSamples === ExtraSamplesValues.Unspecified)) && enableAlpha) {
        s = [];
        for (let i = 0; i < this.fileDirectory.BitsPerSample.length; i += 1) {
          s.push(i);
        }
      }
      return this.readRasters({
        window,
        interleave: true,
        samples: s,
        pool,
        width,
        height,
      });
    }

    let samples;
    switch (pi) {
      case photometricInterpretations.WhiteIsZero:
      case photometricInterpretations.BlackIsZero:
      case photometricInterpretations.Palette:
        samples = [0];
        break;
      case photometricInterpretations.CMYK:
        samples = [0, 1, 2, 3];
        break;
      case photometricInterpretations.YCbCr:
      case photometricInterpretations.CIELab:
        samples = [0, 1, 2];
        break;
      default:
        throw new Error('Invalid or unsupported photometric interpretation.');
    }

    const subOptions = {
      window: imageWindow,
      interleave: true,
      samples,
      pool,
      width,
      height,
      resampleMethod,
    };
    const { fileDirectory } = this;
    const raster = await this.readRasters(subOptions);

    const max = 2 ** this.fileDirectory.BitsPerSample[0];
    let data;
    switch (pi) {
      case photometricInterpretations.WhiteIsZero:
        data = fromWhiteIsZero(raster, max);
        break;
      case photometricInterpretations.BlackIsZero:
        data = fromBlackIsZero(raster, max);
        break;
      case photometricInterpretations.Palette:
        data = fromPalette(raster, fileDirectory.ColorMap);
        break;
      case photometricInterpretations.CMYK:
        data = fromCMYK(raster);
        break;
      case photometricInterpretations.YCbCr:
        data = fromYCbCr(raster);
        break;
      case photometricInterpretations.CIELab:
        data = fromCIELab(raster);
        break;
      default:
        throw new Error('Unsupported photometric interpretation.');
    }
    data.width = raster.width;
    data.height = raster.height;
    return data;
  }

  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint) {
      return [];
    }

    const tiePoints = [];
    for (let i = 0; i < this.fileDirectory.ModelTiepoint.length; i += 6) {
      tiePoints.push({
        i: this.fileDirectory.ModelTiepoint[i],
        j: this.fileDirectory.ModelTiepoint[i + 1],
        k: this.fileDirectory.ModelTiepoint[i + 2],
        x: this.fileDirectory.ModelTiepoint[i + 3],
        y: this.fileDirectory.ModelTiepoint[i + 4],
        z: this.fileDirectory.ModelTiepoint[i + 5],
      });
    }
    return tiePoints;
  }

  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {Number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(sample = null) {
    const metadata = {};
    if (!this.fileDirectory.GDAL_METADATA) {
      return null;
    }
    const string = this.fileDirectory.GDAL_METADATA;
    const xmlDom = external_txml_default()(string.substring(0, string.length - 1));

    if (!xmlDom[0].tagName) {
      throw new Error('Failed to parse GDAL metadata XML.');
    }

    const root = xmlDom[0];
    if (root.tagName !== 'GDALMetadata') {
      throw new Error('Unexpected GDAL metadata XML tag.');
    }

    let items = root.children
      .filter((child) => child.tagName === 'Item');

    if (sample) {
      items = items.filter((item) => Number(item.attributes.sample) === sample);
    }

    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      metadata[item.attributes.name] = item.children[0];
    }
    return metadata;
  }

  /**
   * Returns the GDAL nodata value
   * @returns {Number} or null
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA) {
      return null;
    }
    const string = this.fileDirectory.GDAL_NODATA;
    return Number(string.substring(0, string.length - 1));
  }

  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array} The origin as a vector
   */
  getOrigin() {
    const tiePoints = this.fileDirectory.ModelTiepoint;
    const modelTransformation = this.fileDirectory.ModelTransformation;
    if (tiePoints && tiePoints.length === 6) {
      return [
        tiePoints[3],
        tiePoints[4],
        tiePoints[5],
      ];
    }
    if (modelTransformation) {
      return [
        modelTransformation[3],
        modelTransformation[7],
        modelTransformation[11],
      ];
    }
    throw new Error('The image does not have an affine transformation.');
  }

  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array} The resolution as a vector
   */
  getResolution(referenceImage = null) {
    const modelPixelScale = this.fileDirectory.ModelPixelScale;
    const modelTransformation = this.fileDirectory.ModelTransformation;

    if (modelPixelScale) {
      return [
        modelPixelScale[0],
        -modelPixelScale[1],
        modelPixelScale[2],
      ];
    }
    if (modelTransformation) {
      return [
        modelTransformation[0],
        modelTransformation[5],
        modelTransformation[10],
      ];
    }

    if (referenceImage) {
      const [refResX, refResY, refResZ] = referenceImage.getResolution();
      return [
        refResX * referenceImage.getWidth() / this.getWidth(),
        refResY * referenceImage.getHeight() / this.getHeight(),
        refResZ * referenceImage.getWidth() / this.getWidth(),
      ];
    }

    throw new Error('The image does not have an affine transformation.');
  }

  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }

  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @returns {Array} The bounding box
   */
  getBoundingBox() {
    const origin = this.getOrigin();
    const resolution = this.getResolution();

    const x1 = origin[0];
    const y1 = origin[1];

    const x2 = x1 + (resolution[0] * this.getWidth());
    const y2 = y1 + (resolution[1] * this.getHeight());

    return [
      Math.min(x1, x2),
      Math.min(y1, y2),
      Math.max(x1, x2),
      Math.max(y1, y2),
    ];
  }
}

/* harmony default export */ var geotiffimage = (geotiffimage_GeoTIFFImage);

// CONCATENATED MODULE: ./node_modules/geotiff/src/dataview64.js
class DataView64 {
  constructor(arrayBuffer) {
    this._dataView = new DataView(arrayBuffer);
  }

  get buffer() {
    return this._dataView.buffer;
  }

  getUint64(offset, littleEndian) {
    const left = this.getUint32(offset, littleEndian);
    const right = this.getUint32(offset + 4, littleEndian);
    let combined;
    if (littleEndian) {
      combined = left + 2 ** 32 * right;
      if (!Number.isSafeInteger(combined)) {
        throw new Error(
          `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      }
      return combined;
    }
    combined = 2 ** 32 * left + right;
    if (!Number.isSafeInteger(combined)) {
      throw new Error(
        `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    }

    return combined;
  }

  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(offset, littleEndian) {
    let value = 0;
    const isNegative =
      (this._dataView.getUint8(offset + (littleEndian ? 7 : 0)) & 0x80) > 0;
    let carrying = true;
    for (let i = 0; i < 8; i++) {
      let byte = this._dataView.getUint8(offset + (littleEndian ? i : 7 - i));
      if (isNegative) {
        if (carrying) {
          if (byte !== 0x00) {
            byte = ~(byte - 1) & 0xff;
            carrying = false;
          }
        } else {
          byte = ~byte & 0xff;
        }
      }
      value += byte * 256 ** i;
    }
    if (isNegative) {
      value = -value;
    }
    return value;
  }

  getUint8(offset, littleEndian) {
    return this._dataView.getUint8(offset, littleEndian);
  }

  getInt8(offset, littleEndian) {
    return this._dataView.getInt8(offset, littleEndian);
  }

  getUint16(offset, littleEndian) {
    return this._dataView.getUint16(offset, littleEndian);
  }

  getInt16(offset, littleEndian) {
    return this._dataView.getInt16(offset, littleEndian);
  }

  getUint32(offset, littleEndian) {
    return this._dataView.getUint32(offset, littleEndian);
  }

  getInt32(offset, littleEndian) {
    return this._dataView.getInt32(offset, littleEndian);
  }

  getFloat32(offset, littleEndian) {
    return this._dataView.getFloat32(offset, littleEndian);
  }

  getFloat64(offset, littleEndian) {
    return this._dataView.getFloat64(offset, littleEndian);
  }
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/dataslice.js
class DataSlice {
  constructor(arrayBuffer, sliceOffset, littleEndian, bigTiff) {
    this._dataView = new DataView(arrayBuffer);
    this._sliceOffset = sliceOffset;
    this._littleEndian = littleEndian;
    this._bigTiff = bigTiff;
  }

  get sliceOffset() {
    return this._sliceOffset;
  }

  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }

  get littleEndian() {
    return this._littleEndian;
  }

  get bigTiff() {
    return this._bigTiff;
  }

  get buffer() {
    return this._dataView.buffer;
  }

  covers(offset, length) {
    return this.sliceOffset <= offset && this.sliceTop >= offset + length;
  }

  readUint8(offset) {
    return this._dataView.getUint8(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readInt8(offset) {
    return this._dataView.getInt8(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readUint16(offset) {
    return this._dataView.getUint16(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readInt16(offset) {
    return this._dataView.getInt16(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readUint32(offset) {
    return this._dataView.getUint32(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readInt32(offset) {
    return this._dataView.getInt32(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readFloat32(offset) {
    return this._dataView.getFloat32(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readFloat64(offset) {
    return this._dataView.getFloat64(
      offset - this._sliceOffset, this._littleEndian,
    );
  }

  readUint64(offset) {
    const left = this.readUint32(offset);
    const right = this.readUint32(offset + 4);
    let combined;
    if (this._littleEndian) {
      combined = left + 2 ** 32 * right;
      if (!Number.isSafeInteger(combined)) {
        throw new Error(
          `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`,
        );
      }
      return combined;
    }
    combined = 2 ** 32 * left + right;
    if (!Number.isSafeInteger(combined)) {
      throw new Error(
        `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`,
      );
    }

    return combined;
  }

  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(offset) {
    let value = 0;
    const isNegative =
      (this._dataView.getUint8(offset + (this._littleEndian ? 7 : 0)) & 0x80) >
      0;
    let carrying = true;
    for (let i = 0; i < 8; i++) {
      let byte = this._dataView.getUint8(
        offset + (this._littleEndian ? i : 7 - i)
      );
      if (isNegative) {
        if (carrying) {
          if (byte !== 0x00) {
            byte = ~(byte - 1) & 0xff;
            carrying = false;
          }
        } else {
          byte = ~byte & 0xff;
        }
      }
      value += byte * 256 ** i;
    }
    if (isNegative) {
      value = -value;
    }
    return value
  }

  readOffset(offset) {
    if (this._bigTiff) {
      return this.readUint64(offset);
    }
    return this.readUint32(offset);
  }
}

// EXTERNAL MODULE: external "threads"
var external_threads_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/geotiff/src/pool.js


const defaultPoolSize = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : null;

/**
 * @module pool
 */

/**
 * Pool for workers to decode chunks of the images.
 */
class pool_Pool {
  /**
   * @constructor
   * @param {Number} size The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   */
  constructor(size = defaultPoolSize) {
    const worker = new external_threads_["Worker"]('./decoder.worker.js');
    this.pool = Object(external_threads_["Pool"])(() => Object(external_threads_["spawn"])(worker), size);
  }

  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise.<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(fileDirectory, buffer) {
    return new Promise((resolve, reject) => {
      this.pool.queue(async (decode) => {
        try {
          const data = await decode(fileDirectory, buffer);
          resolve(data);
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  destroy() {
    this.pool.terminate(true);
  }
}

/* harmony default export */ var src_pool = (pool_Pool);

// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/node-libs-browser/mock/empty.js
var empty = __webpack_require__(14);
var empty_default = /*#__PURE__*/__webpack_require__.n(empty);

// EXTERNAL MODULE: ./node_modules/https-browserify/index.js
var https_browserify = __webpack_require__(27);
var https_browserify_default = /*#__PURE__*/__webpack_require__.n(https_browserify);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(21);
var external_url_default = /*#__PURE__*/__webpack_require__.n(external_url_);

// CONCATENATED MODULE: ./node_modules/geotiff/src/source.js







function readRangeFromBlocks(blocks, rangeOffset, rangeLength) {
  const rangeTop = rangeOffset + rangeLength;
  const rangeData = new ArrayBuffer(rangeLength);
  const rangeView = new Uint8Array(rangeData);

  for (const block of blocks) {
    const delta = block.offset - rangeOffset;
    const topDelta = block.top - rangeTop;
    let blockInnerOffset = 0;
    let rangeInnerOffset = 0;
    let usedBlockLength;

    if (delta < 0) {
      blockInnerOffset = -delta;
    } else if (delta > 0) {
      rangeInnerOffset = delta;
    }

    if (topDelta < 0) {
      usedBlockLength = block.length - blockInnerOffset;
    } else if (topDelta > 0) {
      usedBlockLength = rangeTop - block.offset - blockInnerOffset;
    }

    const blockView = new Uint8Array(block.data, blockInnerOffset, usedBlockLength);
    rangeView.set(blockView, rangeInnerOffset);
  }

  return rangeData;
}

/**
 * Interface for Source objects.
 * @interface Source
 */

/**
 * @function Source#fetch
 * @summary The main method to retrieve the data from the source.
 * @param {number} offset The offset to read from in the source
 * @param {number} length The requested number of bytes
 */

/**
 * @typedef {object} Block
 * @property {ArrayBuffer} data The actual data of the block.
 * @property {number} offset The actual offset of the block within the file.
 * @property {number} length The actual size of the block in bytes.
 */

/**
 * Callback type for sources to request patches of data.
 * @callback requestCallback
 * @async
 * @param {number} offset The offset within the file.
 * @param {number} length The desired length of data to be read.
 * @returns {Promise<Block>} The block of data.
 */

/**
 * @module source
 */

/*
 * Split a list of identifiers to form groups of coherent ones
 */
function getCoherentBlockGroups(blockIds) {
  if (blockIds.length === 0) {
    return [];
  }

  const groups = [];
  let current = [];
  groups.push(current);

  for (let i = 0; i < blockIds.length; ++i) {
    if (i === 0 || blockIds[i] === blockIds[i - 1] + 1) {
      current.push(blockIds[i]);
    } else {
      current = [blockIds[i]];
      groups.push(current);
    }
  }
  return groups;
}


/*
 * Promisified wrapper around 'setTimeout' to allow 'await'
 */
async function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * BlockedSource - an abstraction of (remote) files.
 * @implements Source
 */
class BlockedSource {
  /**
   * @param {requestCallback} retrievalFunction Callback function to request data
   * @param {object} options Additional options
   * @param {object} options.blockSize Size of blocks to be fetched
   */
  constructor(retrievalFunction, { blockSize = 65536 } = {}) {
    this.retrievalFunction = retrievalFunction;
    this.blockSize = blockSize;

    // currently running block requests
    this.blockRequests = new Map();

    // already retrieved blocks
    this.blocks = new Map();

    // block ids waiting for a batched request. Either a Set or null
    this.blockIdsAwaitingRequest = null;
  }

  /**
   * Fetch a subset of the file.
   * @param {number} offset The offset within the file to read from.
   * @param {number} length The length in bytes to read from.
   * @returns {ArrayBuffer} The subset of the file.
   */
  async fetch(offset, length, immediate = false) {
    const top = offset + length;

    // calculate what blocks intersect the specified range (offset + length)
    // determine what blocks are already stored or beeing requested
    const firstBlockOffset = Math.floor(offset / this.blockSize) * this.blockSize;
    const allBlockIds = [];
    const missingBlockIds = [];
    const blockRequests = [];

    for (let current = firstBlockOffset; current < top; current += this.blockSize) {
      const blockId = Math.floor(current / this.blockSize);
      if (!this.blocks.has(blockId) && !this.blockRequests.has(blockId)) {
        missingBlockIds.push(blockId);
      }
      if (this.blockRequests.has(blockId)) {
        blockRequests.push(this.blockRequests.get(blockId));
      }
      allBlockIds.push(blockId);
    }

    // determine whether there are already blocks in the queue to be requested
    // if so, add the missing blocks to this list
    if (!this.blockIdsAwaitingRequest) {
      this.blockIdsAwaitingRequest = new Set(missingBlockIds);
    } else {
      for (let i = 0; i < missingBlockIds.length; ++i) {
        const id = missingBlockIds[i];
        this.blockIdsAwaitingRequest.add(id);
      }
    }

    // in immediate mode, we don't want to wait for possible additional requests coming in
    if (!immediate) {
      await wait();
    }

    // determine if we are the thread to start the requests.
    if (this.blockIdsAwaitingRequest) {
      // get all coherent blocks as groups to be requested in a single request
      const groups = getCoherentBlockGroups(
        Array.from(this.blockIdsAwaitingRequest).sort(),
      );

      // iterate over all blocks
      for (const group of groups) {
        // fetch a group as in a single request
        const request = this.requestData(
          group[0] * this.blockSize, group.length * this.blockSize,
        );

        // for each block in the request, make a small 'splitter',
        // i.e: wait for the request to finish, then cut out the bytes for
        // that block and store it there.
        // we keep that as a promise in 'blockRequests' to allow waiting on
        // a single block.
        for (let i = 0; i < group.length; ++i) {
          const id = group[i];
          this.blockRequests.set(id, (async () => {
            const response = await request;
            const o = i * this.blockSize;
            const t = Math.min(o + this.blockSize, response.data.byteLength);
            const data = response.data.slice(o, t);
            this.blockRequests.delete(id);
            this.blocks.set(id, {
              data,
              offset: response.offset + o,
              length: data.byteLength,
              top: response.offset + t,
            });
          })());
        }
      }
      this.blockIdsAwaitingRequest = null;
    }

    // get a list of currently running requests for the blocks still missing
    const missingRequests = [];
    for (const blockId of missingBlockIds) {
      if (this.blockRequests.has(blockId)) {
        missingRequests.push(this.blockRequests.get(blockId));
      }
    }

    // wait for all missing requests to finish
    await Promise.all(missingRequests);
    await Promise.all(blockRequests);

    // now get all blocks for the request and return a summary buffer
    const blocks = allBlockIds.map((id) => this.blocks.get(id));
    return readRangeFromBlocks(blocks, offset, length);
  }

  async requestData(requestedOffset, requestedLength) {
    const response = await this.retrievalFunction(requestedOffset, requestedLength);
    if (!response.length) {
      response.length = response.data.byteLength;
    } else if (response.length !== response.data.byteLength) {
      response.data = response.data.slice(0, response.length);
    }
    response.top = response.offset + response.length;
    return response;
  }
}

/**
 * Create a new source to read from a remote file using the
 * [fetch]{@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API} API.
 * @param {string} url The URL to send requests to.
 * @param {Object} [options] Additional options.
 * @param {Number} [options.blockSize] The block size to use.
 * @param {object} [options.headers] Additional headers to be sent to the server.
 * @returns The constructed source
 */
function makeFetchSource(url, { headers = {}, blockSize } = {}) {
  return new BlockedSource(async (offset, length) => {
    const response = await fetch(url, {
      headers: {
        ...headers, Range: `bytes=${offset}-${offset + length - 1}`,
      },
    });

    // check the response was okay and if the server actually understands range requests
    if (!response.ok) {
      throw new Error('Error fetching data.');
    } else if (response.status === 206) {
      const data = response.arrayBuffer
        ? await response.arrayBuffer() : (await response.buffer()).buffer;
      return {
        data,
        offset,
        length,
      };
    } else {
      const data = response.arrayBuffer
        ? await response.arrayBuffer() : (await response.buffer()).buffer;
      return {
        data,
        offset: 0,
        length: data.byteLength,
      };
    }
  }, { blockSize });
}

/**
 * Create a new source to read from a remote file using the
 * [XHR]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest} API.
 * @param {string} url The URL to send requests to.
 * @param {Object} [options] Additional options.
 * @param {Number} [options.blockSize] The block size to use.
 * @param {object} [options.headers] Additional headers to be sent to the server.
 * @returns The constructed source
 */
function makeXHRSource(url, { headers = {}, blockSize } = {}) {
  return new BlockedSource(async (offset, length) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'arraybuffer';
      const requestHeaders = { ...headers, Range: `bytes=${offset}-${offset + length - 1}` };
      for (const [key, value] of Object.entries(requestHeaders)) {
        request.setRequestHeader(key, value);
      }

      request.onload = () => {
        const data = request.response;
        if (request.status === 206) {
          resolve({
            data,
            offset,
            length,
          });
        } else {
          resolve({
            data,
            offset: 0,
            length: data.byteLength,
          });
        }
      };
      request.onerror = reject;
      request.send();
    });
  }, { blockSize });
}

/**
 * Create a new source to read from a remote file using the node
 * [http]{@link https://nodejs.org/api/http.html} API.
 * @param {string} url The URL to send requests to.
 * @param {Object} [options] Additional options.
 * @param {Number} [options.blockSize] The block size to use.
 * @param {object} [options.headers] Additional headers to be sent to the server.
 */
function makeHttpSource(url, { headers = {}, blockSize } = {}) {
  return new BlockedSource(async (offset, length) => new Promise((resolve, reject) => {
    const parsed = external_url_default.a.parse(url);
    const request = (parsed.protocol === 'http:' ? empty_default.a : https_browserify_default.a).get(
      { ...parsed,
        headers: {
          ...headers, Range: `bytes=${offset}-${offset + length - 1}`,
        } }, (result) => {
        const chunks = [];
        // collect chunks
        result.on('data', (chunk) => {
          chunks.push(chunk);
        });

        // concatenate all chunks and resolve the promise with the resulting buffer
        result.on('end', () => {
          const data = external_buffer_["Buffer"].concat(chunks).buffer;
          resolve({
            data,
            offset,
            length: data.byteLength,
          });
        });
      },
    );
    request.on('error', reject);
  }), { blockSize });
}

/**
 * Create a new source to read from a remote file. Uses either XHR, fetch or nodes http API.
 * @param {string} url The URL to send requests to.
 * @param {Object} [options] Additional options.
 * @param {Boolean} [options.forceXHR] Force the usage of XMLHttpRequest.
 * @param {Number} [options.blockSize] The block size to use.
 * @param {object} [options.headers] Additional headers to be sent to the server.
 * @returns The constructed source
 */
function makeRemoteSource(url, options) {
  const { forceXHR } = options;
  if (typeof fetch === 'function' && !forceXHR) {
    return makeFetchSource(url, options);
  }
  if (typeof XMLHttpRequest !== 'undefined') {
    return makeXHRSource(url, options);
  }
  if (empty_default.a.get) {
    return makeHttpSource(url, options);
  }
  throw new Error('No remote source available');
}

/**
 * Create a new source to read from a local
 * [ArrayBuffer]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer}.
 * @param {ArrayBuffer} arrayBuffer The ArrayBuffer to parse the GeoTIFF from.
 * @returns The constructed source
 */
function makeBufferSource(arrayBuffer) {
  return {
    async fetch(offset, length) {
      return arrayBuffer.slice(offset, offset + length);
    },
  };
}

function closeAsync(fd) {
  return new Promise((resolve, reject) => {
    Object(empty["close"])(fd, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    });
  });
}

function openAsync(path, flags, mode = undefined) {
  return new Promise((resolve, reject) => {
    Object(empty["open"])(path, flags, mode, (err, fd) => {
      if (err) {
        reject(err);
      } else {
        resolve(fd);
      }
    });
  });
}

function readAsync(...args) {
  return new Promise((resolve, reject) => {
    Object(empty["read"])(...args, (err, bytesRead, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve({ bytesRead, buffer });
      }
    });
  });
}

/**
 * Creates a new source using the node filesystem API.
 * @param {string} path The path to the file in the local filesystem.
 * @returns The constructed source
 */
function makeFileSource(path) {
  const fileOpen = openAsync(path, 'r');

  return {
    async fetch(offset, length) {
      const fd = await fileOpen;
      const { buffer } = await readAsync(fd, external_buffer_["Buffer"].alloc(length), 0, length, offset);
      return buffer.buffer;
    },
    async close() {
      const fd = await fileOpen;
      return await closeAsync(fd);
    },
  };
}

/**
 * Create a new source from a given file/blob.
 * @param {Blob} file The file or blob to read from.
 * @returns The constructed source
 */
function makeFileReaderSource(file) {
  return {
    async fetch(offset, length) {
      return new Promise((resolve, reject) => {
        const blob = file.slice(offset, offset + length);
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      });
    },
  };
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/utils.js
function utils_assign(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}

function chunk(iterable, length) {
  const results = [];
  const lengthOfIterable = iterable.length;
  for (let i = 0; i < lengthOfIterable; i += length) {
    const chunked = [];
    for (let ci = i; ci < i + length; ci++) {
      chunked.push(iterable[ci]);
    }
    results.push(chunked);
  }
  return results;
}

function endsWith(string, expectedEnding) {
  if (string.length < expectedEnding.length) {
    return false;
  }
  const actualEnding = string.substr(string.length - expectedEnding.length);
  return actualEnding === expectedEnding;
}

function forEach(iterable, func) {
  const { length } = iterable;
  for (let i = 0; i < length; i++) {
    func(iterable[i], i);
  }
}

function invert(oldObj) {
  const newObj = {};
  for (const key in oldObj) {
    if (oldObj.hasOwnProperty(key)) {
      const value = oldObj[key];
      newObj[value] = key;
    }
  }
  return newObj;
}

function src_utils_range(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(i);
  }
  return results;
}

function times(numTimes, func) {
  const results = [];
  for (let i = 0; i < numTimes; i++) {
    results.push(func(i));
  }
  return results;
}

function toArray(iterable) {
  const results = [];
  const { length } = iterable;
  for (let i = 0; i < length; i++) {
    results.push(iterable[i]);
  }
  return results;
}

function toArrayRecursively(input) {
  if (input.length) {
    return toArray(input).map(toArrayRecursively);
  }
  return input;
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/geotiffwriter.js
/*
  Some parts of this file are based on UTIF.js,
  which was released under the MIT License.
  You can view that here:
  https://github.com/photopea/UTIF.js/blob/master/LICENSE
*/



const tagName2Code = invert(fieldTagNames);
const geoKeyName2Code = invert(geoKeyNames);
const name2code = {};
utils_assign(name2code, tagName2Code);
utils_assign(name2code, geoKeyName2Code);
const typeName2byte = invert(fieldTypeNames);

// config variables
const numBytesInIfd = 1000;

const _binBE = {
  nextZero: (data, o) => {
    let oincr = o;
    while (data[oincr] !== 0) {
      oincr++;
    }
    return oincr;
  },
  readUshort: (buff, p) => {
    return (buff[p] << 8) | buff[p + 1];
  },
  readShort: (buff, p) => {
    const a = _binBE.ui8;
    a[0] = buff[p + 1];
    a[1] = buff[p + 0];
    return _binBE.i16[0];
  },
  readInt: (buff, p) => {
    const a = _binBE.ui8;
    a[0] = buff[p + 3];
    a[1] = buff[p + 2];
    a[2] = buff[p + 1];
    a[3] = buff[p + 0];
    return _binBE.i32[0];
  },
  readUint: (buff, p) => {
    const a = _binBE.ui8;
    a[0] = buff[p + 3];
    a[1] = buff[p + 2];
    a[2] = buff[p + 1];
    a[3] = buff[p + 0];
    return _binBE.ui32[0];
  },
  readASCII: (buff, p, l) => {
    return l.map((i) => String.fromCharCode(buff[p + i])).join('');
  },
  readFloat: (buff, p) => {
    const a = _binBE.ui8;
    times(4, (i) => {
      a[i] = buff[p + 3 - i];
    });
    return _binBE.fl32[0];
  },
  readDouble: (buff, p) => {
    const a = _binBE.ui8;
    times(8, (i) => {
      a[i] = buff[p + 7 - i];
    });
    return _binBE.fl64[0];
  },
  writeUshort: (buff, p, n) => {
    buff[p] = (n >> 8) & 255;
    buff[p + 1] = n & 255;
  },
  writeUint: (buff, p, n) => {
    buff[p] = (n >> 24) & 255;
    buff[p + 1] = (n >> 16) & 255;
    buff[p + 2] = (n >> 8) & 255;
    buff[p + 3] = (n >> 0) & 255;
  },
  writeASCII: (buff, p, s) => {
    times(s.length, (i) => {
      buff[p + i] = s.charCodeAt(i);
    });
  },
  ui8: new Uint8Array(8),
};

_binBE.fl64 = new Float64Array(_binBE.ui8.buffer);

_binBE.writeDouble = (buff, p, n) => {
  _binBE.fl64[0] = n;
  times(8, (i) => {
    buff[p + i] = _binBE.ui8[7 - i];
  });
};


const _writeIFD = (bin, data, _offset, ifd) => {
  let offset = _offset;

  const keys = Object.keys(ifd).filter((key) => {
    return key !== undefined && key !== null && key !== 'undefined';
  });

  bin.writeUshort(data, offset, keys.length);
  offset += 2;

  let eoff = offset + (12 * keys.length) + 4;

  for (const key of keys) {
    let tag = null;
    if (typeof key === 'number') {
      tag = key;
    } else if (typeof key === 'string') {
      tag = parseInt(key, 10);
    }

    const typeName = fieldTagTypes[tag];
    const typeNum = typeName2byte[typeName];

    if (typeName == null || typeName === undefined || typeof typeName === 'undefined') {
      throw new Error(`unknown type of tag: ${tag}`);
    }

    let val = ifd[key];

    if (typeof val === 'undefined') {
      throw new Error(`failed to get value for key ${key}`);
    }

    // ASCIIZ format with trailing 0 character
    // http://www.fileformat.info/format/tiff/corion.htm
    // https://stackoverflow.com/questions/7783044/whats-the-difference-between-asciiz-vs-ascii
    if (typeName === 'ASCII' && typeof val === 'string' && endsWith(val, '\u0000') === false) {
      val += '\u0000';
    }

    const num = val.length;

    bin.writeUshort(data, offset, tag);
    offset += 2;

    bin.writeUshort(data, offset, typeNum);
    offset += 2;

    bin.writeUint(data, offset, num);
    offset += 4;

    let dlen = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][typeNum] * num;
    let toff = offset;

    if (dlen > 4) {
      bin.writeUint(data, offset, eoff);
      toff = eoff;
    }

    if (typeName === 'ASCII') {
      bin.writeASCII(data, toff, val);
    } else if (typeName === 'SHORT') {
      times(num, (i) => {
        bin.writeUshort(data, toff + (2 * i), val[i]);
      });
    } else if (typeName === 'LONG') {
      times(num, (i) => {
        bin.writeUint(data, toff + (4 * i), val[i]);
      });
    } else if (typeName === 'RATIONAL') {
      times(num, (i) => {
        bin.writeUint(data, toff + (8 * i), Math.round(val[i] * 10000));
        bin.writeUint(data, toff + (8 * i) + 4, 10000);
      });
    } else if (typeName === 'DOUBLE') {
      times(num, (i) => {
        bin.writeDouble(data, toff + (8 * i), val[i]);
      });
    }

    if (dlen > 4) {
      dlen += (dlen & 1);
      eoff += dlen;
    }

    offset += 4;
  }

  return [offset, eoff];
};

const encodeIfds = (ifds) => {
  const data = new Uint8Array(numBytesInIfd);
  let offset = 4;
  const bin = _binBE;

  // set big-endian byte-order
  // https://en.wikipedia.org/wiki/TIFF#Byte_order
  data[0] = 77;
  data[1] = 77;

  // set format-version number
  // https://en.wikipedia.org/wiki/TIFF#Byte_order
  data[3] = 42;

  let ifdo = 8;

  bin.writeUint(data, offset, ifdo);

  offset += 4;

  ifds.forEach((ifd, i) => {
    const noffs = _writeIFD(bin, data, ifdo, ifd);
    ifdo = noffs[1];
    if (i < ifds.length - 1) {
      bin.writeUint(data, noffs[0], ifdo);
    }
  });

  if (data.slice) {
    return data.slice(0, ifdo).buffer;
  }

  // node hasn't implemented slice on Uint8Array yet
  const result = new Uint8Array(ifdo);
  for (let i = 0; i < ifdo; i++) {
    result[i] = data[i];
  }
  return result.buffer;
};

const encodeImage = (values, width, height, metadata) => {
  if (height === undefined || height === null) {
    throw new Error(`you passed into encodeImage a width of type ${height}`);
  }

  if (width === undefined || width === null) {
    throw new Error(`you passed into encodeImage a width of type ${width}`);
  }

  const ifd = {
    256: [width], // ImageWidth
    257: [height], // ImageLength
    273: [numBytesInIfd], // strips offset
    278: [height], // RowsPerStrip
    305: 'geotiff.js', // no array for ASCII(Z)
  };

  if (metadata) {
    for (const i in metadata) {
      if (metadata.hasOwnProperty(i)) {
        ifd[i] = metadata[i];
      }
    }
  }

  const prfx = new Uint8Array(encodeIfds([ifd]));

  const img = new Uint8Array(values);

  const samplesPerPixel = ifd[277];

  const data = new Uint8Array(numBytesInIfd + (width * height * samplesPerPixel));
  times(prfx.length, (i) => {
    data[i] = prfx[i];
  });
  forEach(img, (value, i) => {
    data[numBytesInIfd + i] = value;
  });

  return data.buffer;
};

const convertToTids = (input) => {
  const result = {};
  for (const key in input) {
    if (key !== 'StripOffsets') {
      if (!name2code[key]) {
        console.error(key, 'not in name2code:', Object.keys(name2code));
      }
      result[name2code[key]] = input[key];
    }
  }
  return result;
};

const geotiffwriter_toArray = (input) => {
  if (Array.isArray(input)) {
    return input;
  }
  return [input];
};

const metadataDefaults = [
  ['Compression', 1], // no compression
  ['PlanarConfiguration', 1],
  ['XPosition', 0],
  ['YPosition', 0],
  ['ResolutionUnit', 1], // Code 1 for actual pixel count or 2 for pixels per inch.
  ['ExtraSamples', 0], // should this be an array??
  ['GeoAsciiParams', 'WGS 84\u0000'],
  ['ModelTiepoint', [0, 0, 0, -180, 90, 0]], // raster fits whole globe
  ['GTModelTypeGeoKey', 2],
  ['GTRasterTypeGeoKey', 1],
  ['GeographicTypeGeoKey', 4326],
  ['GeogCitationGeoKey', 'WGS 84'],
];

function writeGeotiff(data, metadata) {
  const isFlattened = typeof data[0] === 'number';

  let height;
  let numBands;
  let width;
  let flattenedValues;

  if (isFlattened) {
    height = metadata.height || metadata.ImageLength;
    width = metadata.width || metadata.ImageWidth;
    numBands = data.length / (height * width);
    flattenedValues = data;
  } else {
    numBands = data.length;
    height = data[0].length;
    width = data[0][0].length;
    flattenedValues = [];
    times(height, (rowIndex) => {
      times(width, (columnIndex) => {
        times(numBands, (bandIndex) => {
          flattenedValues.push(data[bandIndex][rowIndex][columnIndex]);
        });
      });
    });
  }

  metadata.ImageLength = height;
  delete metadata.height;
  metadata.ImageWidth = width;
  delete metadata.width;

  // consult https://www.loc.gov/preservation/digital/formats/content/tiff_tags.shtml

  if (!metadata.BitsPerSample) {
    metadata.BitsPerSample = times(numBands, () => 8);
  }

  metadataDefaults.forEach((tag) => {
    const key = tag[0];
    if (!metadata[key]) {
      const value = tag[1];
      metadata[key] = value;
    }
  });

  // The color space of the image data.
  // 1=black is zero and 2=RGB.
  if (!metadata.PhotometricInterpretation) {
    metadata.PhotometricInterpretation = metadata.BitsPerSample.length === 3 ? 2 : 1;
  }

  // The number of components per pixel.
  if (!metadata.SamplesPerPixel) {
    metadata.SamplesPerPixel = [numBands];
  }

  if (!metadata.StripByteCounts) {
    // we are only writing one strip
    metadata.StripByteCounts = [numBands * height * width];
  }

  if (!metadata.ModelPixelScale) {
    // assumes raster takes up exactly the whole globe
    metadata.ModelPixelScale = [360 / width, 180 / height, 0];
  }

  if (!metadata.SampleFormat) {
    metadata.SampleFormat = times(numBands, () => 1);
  }


  const geoKeys = Object.keys(metadata)
    .filter((key) => endsWith(key, 'GeoKey'))
    .sort((a, b) => name2code[a] - name2code[b]);

  if (!metadata.GeoKeyDirectory) {
    const NumberOfKeys = geoKeys.length;

    const GeoKeyDirectory = [1, 1, 0, NumberOfKeys];
    geoKeys.forEach((geoKey) => {
      const KeyID = Number(name2code[geoKey]);
      GeoKeyDirectory.push(KeyID);

      let Count;
      let TIFFTagLocation;
      let valueOffset;
      if (fieldTagTypes[KeyID] === 'SHORT') {
        Count = 1;
        TIFFTagLocation = 0;
        valueOffset = metadata[geoKey];
      } else if (geoKey === 'GeogCitationGeoKey') {
        Count = metadata.GeoAsciiParams.length;
        TIFFTagLocation = Number(name2code.GeoAsciiParams);
        valueOffset = 0;
      } else {
        console.log(`[geotiff.js] couldn't get TIFFTagLocation for ${geoKey}`);
      }
      GeoKeyDirectory.push(TIFFTagLocation);
      GeoKeyDirectory.push(Count);
      GeoKeyDirectory.push(valueOffset);
    });
    metadata.GeoKeyDirectory = GeoKeyDirectory;
  }

  // delete GeoKeys from metadata, because stored in GeoKeyDirectory tag
  for (const geoKey in geoKeys) {
    if (geoKeys.hasOwnProperty(geoKey)) {
      delete metadata[geoKey];
    }
  }

  [
    'Compression',
    'ExtraSamples',
    'GeographicTypeGeoKey',
    'GTModelTypeGeoKey',
    'GTRasterTypeGeoKey',
    'ImageLength', // synonym of ImageHeight
    'ImageWidth',
    'PhotometricInterpretation',
    'PlanarConfiguration',
    'ResolutionUnit',
    'SamplesPerPixel',
    'XPosition',
    'YPosition',
  ].forEach((name) => {
    if (metadata[name]) {
      metadata[name] = geotiffwriter_toArray(metadata[name]);
    }
  });


  const encodedMetadata = convertToTids(metadata);

  const outputImage = encodeImage(flattenedValues, width, height, encodedMetadata);

  return outputImage;
}

// CONCATENATED MODULE: ./node_modules/geotiff/src/geotiff.js















function getFieldTypeLength(fieldType) {
  switch (fieldType) {
    case fieldTypes.BYTE: case fieldTypes.ASCII: case fieldTypes.SBYTE: case fieldTypes.UNDEFINED:
      return 1;
    case fieldTypes.SHORT: case fieldTypes.SSHORT:
      return 2;
    case fieldTypes.LONG: case fieldTypes.SLONG: case fieldTypes.FLOAT: case fieldTypes.IFD:
      return 4;
    case fieldTypes.RATIONAL: case fieldTypes.SRATIONAL: case fieldTypes.DOUBLE:
    case fieldTypes.LONG8: case fieldTypes.SLONG8: case fieldTypes.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${fieldType}`);
  }
}

function parseGeoKeyDirectory(fileDirectory) {
  const rawGeoKeyDirectory = fileDirectory.GeoKeyDirectory;
  if (!rawGeoKeyDirectory) {
    return null;
  }

  const geoKeyDirectory = {};
  for (let i = 4; i <= rawGeoKeyDirectory[3] * 4; i += 4) {
    const key = geoKeyNames[rawGeoKeyDirectory[i]];
    const location = (rawGeoKeyDirectory[i + 1])
      ? (fieldTagNames[rawGeoKeyDirectory[i + 1]]) : null;
    const count = rawGeoKeyDirectory[i + 2];
    const offset = rawGeoKeyDirectory[i + 3];

    let value = null;
    if (!location) {
      value = offset;
    } else {
      value = fileDirectory[location];
      if (typeof value === 'undefined' || value === null) {
        throw new Error(`Could not get value of geoKey '${key}'.`);
      } else if (typeof value === 'string') {
        value = value.substring(offset, offset + count - 1);
      } else if (value.subarray) {
        value = value.subarray(offset, offset + count);
        if (count === 1) {
          value = value[0];
        }
      }
    }
    geoKeyDirectory[key] = value;
  }
  return geoKeyDirectory;
}

function getValues(dataSlice, fieldType, count, offset) {
  let values = null;
  let readMethod = null;
  const fieldTypeLength = getFieldTypeLength(fieldType);

  switch (fieldType) {
    case fieldTypes.BYTE: case fieldTypes.ASCII: case fieldTypes.UNDEFINED:
      values = new Uint8Array(count); readMethod = dataSlice.readUint8;
      break;
    case fieldTypes.SBYTE:
      values = new Int8Array(count); readMethod = dataSlice.readInt8;
      break;
    case fieldTypes.SHORT:
      values = new Uint16Array(count); readMethod = dataSlice.readUint16;
      break;
    case fieldTypes.SSHORT:
      values = new Int16Array(count); readMethod = dataSlice.readInt16;
      break;
    case fieldTypes.LONG: case fieldTypes.IFD:
      values = new Uint32Array(count); readMethod = dataSlice.readUint32;
      break;
    case fieldTypes.SLONG:
      values = new Int32Array(count); readMethod = dataSlice.readInt32;
      break;
    case fieldTypes.LONG8: case fieldTypes.IFD8:
      values = new Array(count); readMethod = dataSlice.readUint64;
      break;
    case fieldTypes.SLONG8:
      values = new Array(count); readMethod = dataSlice.readInt64;
      break;
    case fieldTypes.RATIONAL:
      values = new Uint32Array(count * 2); readMethod = dataSlice.readUint32;
      break;
    case fieldTypes.SRATIONAL:
      values = new Int32Array(count * 2); readMethod = dataSlice.readInt32;
      break;
    case fieldTypes.FLOAT:
      values = new Float32Array(count); readMethod = dataSlice.readFloat32;
      break;
    case fieldTypes.DOUBLE:
      values = new Float64Array(count); readMethod = dataSlice.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${fieldType}`);
  }

  // normal fields
  if (!(fieldType === fieldTypes.RATIONAL || fieldType === fieldTypes.SRATIONAL)) {
    for (let i = 0; i < count; ++i) {
      values[i] = readMethod.call(
        dataSlice, offset + (i * fieldTypeLength),
      );
    }
  } else { // RATIONAL or SRATIONAL
    for (let i = 0; i < count; i += 2) {
      values[i] = readMethod.call(
        dataSlice, offset + (i * fieldTypeLength),
      );
      values[i + 1] = readMethod.call(
        dataSlice, offset + ((i * fieldTypeLength) + 4),
      );
    }
  }

  if (fieldType === fieldTypes.ASCII) {
    return String.fromCharCode.apply(null, values);
  }
  return values;
}

/**
 * Data class to store the parsed file directory, geo key directory and
 * offset to the next IFD
 */
class ImageFileDirectory {
  constructor(fileDirectory, geoKeyDirectory, nextIFDByteOffset) {
    this.fileDirectory = fileDirectory;
    this.geoKeyDirectory = geoKeyDirectory;
    this.nextIFDByteOffset = nextIFDByteOffset;
  }
}

/**
 * Error class for cases when an IFD index was requested, that does not exist
 * in the file.
 */
class GeoTIFFImageIndexError extends Error {
  constructor(index) {
    super(`No image at index ${index}`);
    this.index = index;
  }
}


class GeoTIFFBase {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {Object} [options={}] optional parameters
   * @param {Array} [options.window=whole image] the subset to read data from.
   * @param {Array} [options.bbox=whole image] the subset to read data from in
   *                                           geographical coordinates.
   * @param {Array} [options.samples=all samples] the selection of samples to read from.
   * @param {Boolean} [options.interleave=false] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {Number} [options.pool=null] The optional decoder pool to use.
   * @param {Number} [options.width] The desired width of the output. When the width is not the
   *                                 same as the images, resampling will be performed.
   * @param {Number} [options.height] The desired height of the output. When the width is not the
   *                                  same as the images, resampling will be performed.
   * @param {String} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {Number|Number[]} [options.fillValue] The value to use for parts of the image
   *                                              outside of the images extent. When multiple
   *                                              samples are requested, an array of fill values
   *                                              can be passed.
   * @returns {Promise.<(TypedArray|TypedArray[])>} the decoded arrays as a promise
   */
  async readRasters(options = {}) {
    const { window: imageWindow, width, height } = options;
    let { resX, resY, bbox } = options;

    const firstImage = await this.getImage();
    let usedImage = firstImage;
    const imageCount = await this.getImageCount();
    const imgBBox = firstImage.getBoundingBox();

    if (imageWindow && bbox) {
      throw new Error('Both "bbox" and "window" passed.');
    }

    // if width/height is passed, transform it to resolution
    if (width || height) {
      // if we have an image window (pixel coordinates), transform it to a BBox
      // using the origin/resolution of the first image.
      if (imageWindow) {
        const [oX, oY] = firstImage.getOrigin();
        const [rX, rY] = firstImage.getResolution();

        bbox = [
          oX + (imageWindow[0] * rX),
          oY + (imageWindow[1] * rY),
          oX + (imageWindow[2] * rX),
          oY + (imageWindow[3] * rY),
        ];
      }

      // if we have a bbox (or calculated one)

      const usedBBox = bbox || imgBBox;

      if (width) {
        if (resX) {
          throw new Error('Both width and resX passed');
        }
        resX = (usedBBox[2] - usedBBox[0]) / width;
      }
      if (height) {
        if (resY) {
          throw new Error('Both width and resY passed');
        }
        resY = (usedBBox[3] - usedBBox[1]) / height;
      }
    }

    // if resolution is set or calculated, try to get the image with the worst acceptable resolution
    if (resX || resY) {
      const allImages = [];
      for (let i = 0; i < imageCount; ++i) {
        const image = await this.getImage(i);
        const { SubfileType: subfileType, NewSubfileType: newSubfileType } = image.fileDirectory;
        if (i === 0 || subfileType === 2 || newSubfileType & 1) {
          allImages.push(image);
        }
      }

      allImages.sort((a, b) => a.getWidth() - b.getWidth());
      for (let i = 0; i < allImages.length; ++i) {
        const image = allImages[i];
        const imgResX = (imgBBox[2] - imgBBox[0]) / image.getWidth();
        const imgResY = (imgBBox[3] - imgBBox[1]) / image.getHeight();

        usedImage = image;
        if ((resX && resX > imgResX) || (resY && resY > imgResY)) {
          break;
        }
      }
    }

    let wnd = imageWindow;
    if (bbox) {
      const [oX, oY] = firstImage.getOrigin();
      const [imageResX, imageResY] = usedImage.getResolution(firstImage);

      wnd = [
        Math.round((bbox[0] - oX) / imageResX),
        Math.round((bbox[1] - oY) / imageResY),
        Math.round((bbox[2] - oX) / imageResX),
        Math.round((bbox[3] - oY) / imageResY),
      ];
      wnd = [
        Math.min(wnd[0], wnd[2]),
        Math.min(wnd[1], wnd[3]),
        Math.max(wnd[0], wnd[2]),
        Math.max(wnd[1], wnd[3]),
      ];
    }

    return usedImage.readRasters({ ...options, window: wnd });
  }
}


/**
 * The abstraction for a whole GeoTIFF file.
 * @augments GeoTIFFBase
 */
class geotiff_GeoTIFF extends GeoTIFFBase {
  /**
   * @constructor
   * @param {Source} source The datasource to read from.
   * @param {Boolean} littleEndian Whether the image uses little endian.
   * @param {Boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {Number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {Object} [options] further options.
   * @param {Boolean} [options.cache=false] whether or not decoded tiles shall be cached.
   */
  constructor(source, littleEndian, bigTiff, firstIFDOffset, options = {}) {
    super();
    this.source = source;
    this.littleEndian = littleEndian;
    this.bigTiff = bigTiff;
    this.firstIFDOffset = firstIFDOffset;
    this.cache = options.cache || false;
    this.ifdRequests = [];
    this.ghostValues = null;
  }

  async getSlice(offset, size) {
    const fallbackSize = this.bigTiff ? 4048 : 1024;
    return new DataSlice(
      await this.source.fetch(
        offset, typeof size !== 'undefined' ? size : fallbackSize,
      ), offset, this.littleEndian, this.bigTiff,
    );
  }

  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {ImageFileDirectory} the parsed IFD
   */
  async parseFileDirectoryAt(offset) {
    const entrySize = this.bigTiff ? 20 : 12;
    const offsetSize = this.bigTiff ? 8 : 2;

    let dataSlice = await this.getSlice(offset);
    const numDirEntries = this.bigTiff ?
      dataSlice.readUint64(offset) :
      dataSlice.readUint16(offset);

    // if the slice does not cover the whole IFD, request a bigger slice, where the
    // whole IFD fits: num of entries + n x tag length + offset to next IFD
    const byteSize = (numDirEntries * entrySize) + (this.bigTiff ? 16 : 6);
    if (!dataSlice.covers(offset, byteSize)) {
      dataSlice = await this.getSlice(offset, byteSize);
    }

    const fileDirectory = {};

    // loop over the IFD and create a file directory object
    let i = offset + (this.bigTiff ? 8 : 2);
    for (let entryCount = 0; entryCount < numDirEntries; i += entrySize, ++entryCount) {
      const fieldTag = dataSlice.readUint16(i);
      const fieldType = dataSlice.readUint16(i + 2);
      const typeCount = this.bigTiff ?
        dataSlice.readUint64(i + 4) :
        dataSlice.readUint32(i + 4);

      let fieldValues;
      let value;
      const fieldTypeLength = getFieldTypeLength(fieldType);
      const valueOffset = i + (this.bigTiff ? 12 : 8);

      // check whether the value is directly encoded in the tag or refers to a
      // different external byte range
      if (fieldTypeLength * typeCount <= (this.bigTiff ? 8 : 4)) {
        fieldValues = getValues(dataSlice, fieldType, typeCount, valueOffset);
      } else {
        // resolve the reference to the actual byte range
        const actualOffset = dataSlice.readOffset(valueOffset);
        const length = getFieldTypeLength(fieldType) * typeCount;

        // check, whether we actually cover the referenced byte range; if not,
        // request a new slice of bytes to read from it
        if (dataSlice.covers(actualOffset, length)) {
          fieldValues = getValues(dataSlice, fieldType, typeCount, actualOffset);
        } else {
          const fieldDataSlice = await this.getSlice(actualOffset, length);
          fieldValues = getValues(fieldDataSlice, fieldType, typeCount, actualOffset);
        }
      }

      // unpack single values from the array
      if (typeCount === 1 && arrayFields.indexOf(fieldTag) === -1 &&
        !(fieldType === fieldTypes.RATIONAL || fieldType === fieldTypes.SRATIONAL)) {
        value = fieldValues[0];
      } else {
        value = fieldValues;
      }

      // write the tags value to the file directly
      fileDirectory[fieldTagNames[fieldTag]] = value;
    }
    const geoKeyDirectory = parseGeoKeyDirectory(fileDirectory);
    const nextIFDByteOffset = dataSlice.readOffset(
      offset + offsetSize + (entrySize * numDirEntries),
    );

    return new ImageFileDirectory(
      fileDirectory,
      geoKeyDirectory,
      nextIFDByteOffset,
    );
  }

  async requestIFD(index) {
    // see if we already have that IFD index requested.
    if (this.ifdRequests[index]) {
      // attach to an already requested IFD
      return this.ifdRequests[index];
    } else if (index === 0) {
      // special case for index 0
      this.ifdRequests[index] = this.parseFileDirectoryAt(this.firstIFDOffset);
      return this.ifdRequests[index];
    } else if (!this.ifdRequests[index - 1]) {
      // if the previous IFD was not yet loaded, load that one first
      // this is the recursive call.
      try {
        this.ifdRequests[index - 1] = this.requestIFD(index - 1);
      } catch (e) {
        // if the previous one already was an index error, rethrow
        // with the current index
        if (e instanceof GeoTIFFImageIndexError) {
          throw new GeoTIFFImageIndexError(index);
        }
        // rethrow anything else
        throw e;
      }
    }
    // if the previous IFD was loaded, we can finally fetch the one we are interested in.
    // we need to wrap this in an IIFE, otherwise this.ifdRequests[index] would be delayed
    this.ifdRequests[index] = (async () => {
      const previousIfd = await this.ifdRequests[index - 1];
      if (previousIfd.nextIFDByteOffset === 0) {
        throw new GeoTIFFImageIndexError(index);
      }
      return this.parseFileDirectoryAt(previousIfd.nextIFDByteOffset);
    })();
    return this.ifdRequests[index];
  }

  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {Number} [index=0] the index of the image to return.
   * @returns {GeoTIFFImage} the image at the given index
   */
  async getImage(index = 0) {
    const ifd = await this.requestIFD(index);
    return new geotiffimage(
      ifd.fileDirectory, ifd.geoKeyDirectory,
      this.dataView, this.littleEndian, this.cache, this.source,
    );
  }

  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Number} the number of internal subfile images
   */
  async getImageCount() {
    let index = 0;
    if (this.ifdRequests.length > 0) {
      // optimization: if we already have the last IFD loaded,
      // we know the final size.
      const lastIFD = await this.ifdRequests[this.ifdRequests.length - 1];
      if (lastIFD.nextIFDByteOffset === 0) {
        return this.ifdRequests.length;
      }
      // otherwise we can at least start later in the list.
      index = this.ifdRequests.length;
    }

    // loop until we run out of IFDs
    let hasNext = true;
    while (hasNext) {
      try {
        await this.requestIFD(index);
        ++index;
      } catch (e) {
        if (e instanceof GeoTIFFImageIndexError) {
          hasNext = false;
        } else {
          throw e;
        }
      }
    }
    return index;
  }

  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Object} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const offset = this.bigTiff ? 16 : 8;
    if (this.ghostValues) {
      return this.ghostValues;
    }
    const detectionString = 'GDAL_STRUCTURAL_METADATA_SIZE=';
    const heuristicAreaSize = detectionString.length + 100;
    let slice = await this.getSlice(offset, heuristicAreaSize);
    if (detectionString === getValues(slice, fieldTypes.ASCII, detectionString.length, offset)) {
      const valuesString = getValues(slice, fieldTypes.ASCII, heuristicAreaSize, offset);
      const firstLine = valuesString.split('\n')[0];
      const metadataSize = Number(firstLine.split('=')[1].split(' ')[0]) + firstLine.length;
      if (metadataSize > heuristicAreaSize) {
        slice = await this.getSlice(offset, metadataSize);
      }
      const fullString = getValues(slice, fieldTypes.ASCII, metadataSize, offset);
      this.ghostValues = {};
      fullString
        .split('\n')
        .filter(line => line.length > 0)
        .map(line => line.split('='))
        .forEach(([key, value]) => {
          this.ghostValues[key] = value;
        });
    }
    return this.ghostValues;
  }

  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {source~Source} source The source of data to parse from.
   * @param {object} options Additional options.
   */
  static async fromSource(source, options) {
    const headerData = await source.fetch(0, 1024);
    const dataView = new DataView64(headerData);

    const BOM = dataView.getUint16(0, 0);
    let littleEndian;
    if (BOM === 0x4949) {
      littleEndian = true;
    } else if (BOM === 0x4D4D) {
      littleEndian = false;
    } else {
      throw new TypeError('Invalid byte order value.');
    }

    const magicNumber = dataView.getUint16(2, littleEndian);
    let bigTiff;
    if (magicNumber === 42) {
      bigTiff = false;
    } else if (magicNumber === 43) {
      bigTiff = true;
      const offsetByteSize = dataView.getUint16(4, littleEndian);
      if (offsetByteSize !== 8) {
        throw new Error('Unsupported offset byte-size.');
      }
    } else {
      throw new TypeError('Invalid magic number.');
    }

    const firstIFDOffset = bigTiff
      ? dataView.getUint64(8, littleEndian)
      : dataView.getUint32(4, littleEndian);
    return new geotiff_GeoTIFF(source, littleEndian, bigTiff, firstIFDOffset, options);
  }

  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    if (typeof this.source.close === 'function') {
      return this.source.close();
    }
    return false;
  }
}


/* harmony default export */ var geotiff = (geotiff_GeoTIFF);

/**
 * Wrapper for GeoTIFF files that have external overviews.
 * @augments GeoTIFFBase
 */
class geotiff_MultiGeoTIFF extends GeoTIFFBase {
  /**
   * Construct a new MultiGeoTIFF from a main and several overview files.
   * @param {GeoTIFF} mainFile The main GeoTIFF file.
   * @param {GeoTIFF[]} overviewFiles An array of overview files.
   */
  constructor(mainFile, overviewFiles) {
    super();
    this.mainFile = mainFile;
    this.overviewFiles = overviewFiles;
    this.imageFiles = [mainFile].concat(overviewFiles);

    this.fileDirectoriesPerFile = null;
    this.fileDirectoriesPerFileParsing = null;
    this.imageCount = null;
  }

  async parseFileDirectoriesPerFile() {
    const requests = [this.mainFile.parseFileDirectories()]
      .concat(this.overviewFiles.map((file) => file.parseFileDirectories()));

    this.fileDirectoriesPerFile = await Promise.all(requests);
    return this.fileDirectoriesPerFile;
  }

  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {Number} [index=0] the index of the image to return.
   * @returns {GeoTIFFImage} the image at the given index
   */
  async getImage(index = 0) {
    if (!this.fileDirectoriesPerFile) {
      if (!this.fileDirectoriesPerFileParsing) {
        this.fileDirectoriesPerFileParsing = this.parseFileDirectoriesPerFile();
      }
      this.fileDirectoriesPerFile = await this.fileDirectoriesPerFileParsing;
    }

    let relativeIndex = index;
    for (let i = 0; i < this.fileDirectoriesPerFile.length; ++i) {
      const fileDirectories = this.fileDirectoriesPerFile[i];
      if (relativeIndex < fileDirectories.length) {
        const file = this.imageFiles[i];
        return new geotiffimage(
          fileDirectories[relativeIndex][0], fileDirectories[relativeIndex][1],
          file.dataView, file.littleEndian, file.cache, file.source,
        );
      }
      relativeIndex -= fileDirectories.length;
    }
    throw new RangeError('Invalid image index');
  }

  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Number} the number of internal subfile images
   */
  async getImageCount() {
    if (!this.fileDirectoriesPerFile) {
      if (!this.fileDirectoriesPerFileParsing) {
        this.fileDirectoriesPerFileParsing = this.parseFileDirectoriesPerFile();
      }
      this.fileDirectoriesPerFile = await this.fileDirectoriesPerFileParsing;
    }
    return this.fileDirectoriesPerFile.reduce((count, ifds) => count + ifds.length, 0);
  }
}



/**
 * Creates a new GeoTIFF from a remote URL.
 * @param {string} url The URL to access the image from
 * @param {object} [options] Additional options to pass to the source.
 *                           See {@link makeRemoteSource} for details.
 * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.
 */
async function geotiff_fromUrl(url, options = {}) {
  return geotiff_GeoTIFF.fromSource(makeRemoteSource(url, options));
}

/**
 * Construct a new GeoTIFF from an
 * [ArrayBuffer]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer}.
 * @param {ArrayBuffer} arrayBuffer The data to read the file from.
 * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromArrayBuffer(arrayBuffer) {
  return geotiff_GeoTIFF.fromSource(makeBufferSource(arrayBuffer));
}

/**
 * Construct a GeoTIFF from a local file path. This uses the node
 * [filesystem API]{@link https://nodejs.org/api/fs.html} and is
 * not available on browsers.
 *
 * N.B. After the GeoTIFF has been completely processed it needs
 * to be closed but only if it has been constructed from a file.
 * @param {string} path The file path to read from.
 * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromFile(path) {
  return geotiff_GeoTIFF.fromSource(makeFileSource(path));
}

/**
 * Construct a GeoTIFF from an HTML
 * [Blob]{@link https://developer.mozilla.org/en-US/docs/Web/API/Blob} or
 * [File]{@link https://developer.mozilla.org/en-US/docs/Web/API/File}
 * object.
 * @param {Blob|File} blob The Blob or File object to read from.
 * @returns {Promise.<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromBlob(blob) {
  return geotiff_GeoTIFF.fromSource(makeFileReaderSource(blob));
}

/**
 * Construct a MultiGeoTIFF from the given URLs.
 * @param {string} mainUrl The URL for the main file.
 * @param {string[]} overviewUrls An array of URLs for the overview images.
 * @param {object} [options] Additional options to pass to the source.
 *                           See [makeRemoteSource]{@link module:source.makeRemoteSource}
 *                           for details.
 * @returns {Promise.<MultiGeoTIFF>} The resulting MultiGeoTIFF file.
 */
async function fromUrls(mainUrl, overviewUrls = [], options = {}) {
  const mainFile = await geotiff_GeoTIFF.fromSource(makeRemoteSource(mainUrl, options));
  const overviewFiles = await Promise.all(
    overviewUrls.map((url) => geotiff_GeoTIFF.fromSource(makeRemoteSource(url, options))),
  );

  return new geotiff_MultiGeoTIFF(mainFile, overviewFiles);
}

/**
 * Main creating function for GeoTIFF files.
 * @param {(Array)} array of pixel values
 * @returns {metadata} metadata
 */
async function writeArrayBuffer(values, metadata) {
  return writeGeotiff(values, metadata);
}



// EXTERNAL MODULE: ./src/loaders/viv.worker.js
var viv_worker = __webpack_require__(28);
var viv_worker_default = /*#__PURE__*/__webpack_require__.n(viv_worker);

// CONCATENATED MODULE: ./src/loaders/Pool.js




// eslint-disable-next-line import/no-webpack-loader-syntax

var Pool_defaultPoolSize = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : null;
/**
 * Pool for workers to decode chunks of the images.
 * This is a line-for-line copy of GeoTIFFs old implementation: https://github.com/geotiffjs/geotiff.js/blob/v1.0.0-beta.6/src/pool.js
 */

var Pool_Pool = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {Number} size The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   */
  function Pool() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Pool_defaultPoolSize;

    classCallCheck_default()(this, Pool);

    this.workers = [];
    this.idleWorkers = [];
    this.waitQueue = [];
    this.decoder = null; // eslint-disable-next-line no-plusplus

    for (var i = 0; i < size; ++i) {
      var w = new viv_worker_default.a();
      this.workers.push(w);
      this.idleWorkers.push(w);
    }
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise.<ArrayBuffer>} the decoded result as a `Promise`
   */


  createClass_default()(Pool, [{
    key: "decode",
    value: function () {
      var _decode = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(fileDirectory, buffer) {
        var _this = this;

        var currentWorker;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.waitForWorker();

              case 2:
                currentWorker = _context.sent;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  currentWorker.onmessage = function (event) {
                    // this.workers.push(currentWorker);
                    _this.finishTask(currentWorker);

                    resolve(event.data[0]);
                  };

                  currentWorker.onerror = function (error) {
                    // this.workers.push(currentWorker);
                    _this.finishTask(currentWorker);

                    reject(error);
                  };

                  currentWorker.postMessage(['decode', fileDirectory, buffer], [buffer]);
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function decode(_x, _x2) {
        return _decode.apply(this, arguments);
      }

      return decode;
    }()
  }, {
    key: "waitForWorker",
    value: function () {
      var _waitForWorker = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var idleWorker, waiter, promise;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                idleWorker = this.idleWorkers.pop();

                if (!idleWorker) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", idleWorker);

              case 3:
                waiter = {};
                promise = new Promise(function (resolve) {
                  waiter.resolve = resolve;
                });
                this.waitQueue.push(waiter);
                return _context2.abrupt("return", promise);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function waitForWorker() {
        return _waitForWorker.apply(this, arguments);
      }

      return waitForWorker;
    }()
  }, {
    key: "finishTask",
    value: function () {
      var _finishTask = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(currentWorker) {
        var waiter;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                waiter = this.waitQueue.pop();

                if (waiter) {
                  waiter.resolve(currentWorker);
                } else {
                  this.idleWorkers.push(currentWorker);
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function finishTask(_x3) {
        return _finishTask.apply(this, arguments);
      }

      return finishTask;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      // eslint-disable-next-line no-plusplus
      for (var i = 0; i < this.workers.length; ++i) {
        this.workers[i].terminate();
      }
    }
  }]);

  return Pool;
}();


// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(29);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// CONCATENATED MODULE: ./src/loaders/zarrLoader.js









/**
 * This class serves as a wrapper for fetching zarr data from a file server.
 * */

var zarrLoader_ZarrLoader = /*#__PURE__*/function () {
  function ZarrLoader(_ref) {
    var _this = this;

    var data = _ref.data,
        dimensions = _ref.dimensions,
        isRgb = _ref.isRgb,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 1 : _ref$scale,
        _ref$translate = _ref.translate,
        translate = _ref$translate === void 0 ? {
      x: 0,
      y: 0
    } : _ref$translate;

    classCallCheck_default()(this, ZarrLoader);

    var base;

    if (Array.isArray(data)) {
      var _data = slicedToArray_default()(data, 1);

      base = _data[0];
      this.numLevels = data.length;
    } else {
      base = data;
      this.numLevels = 1;
    }

    this.type = 'zarr';
    this.scale = scale;
    this.translate = translate;
    this.isRgb = isRgb || guessRgb(base.shape);
    this.dimensions = dimensions;
    this._data = data;
    this._dimIndices = new Map();
    dimensions.forEach(function (_ref2, i) {
      var field = _ref2.field;
      return _this._dimIndices.set(field, i);
    });
    var _base = base,
        dtype = _base.dtype,
        chunks = _base.chunks;
    /* TODO: Use better dtype convention in DTYPE_LOOKUP.
     *
     * This convension should probably _not_ describe endianness,
     * since endianness is resolved when decoding the source arrayBuffers
     * into TypedArrays. The dtype of the zarr array describes the dtype of the
     * source but this is different from how the bytes end up being represented in
     * memory client-side.
     */

    this.dtype = dtype.includes('>') ? "<".concat(dtype.slice(1)) : dtype;
    this.tileSize = chunks[this._dimIndices.get('x')];
  }

  createClass_default()(ZarrLoader, [{
    key: "getTile",

    /**
     * Returns image tiles at tile-position (x, y) at pyramidal level z.
     * @param {number} x positive integer
     * @param {number} y positive integer
     * @param {number} z positive integer (0 === highest zoom level)
     * @param {Array} loaderSelection, Array of valid dimension selections
     * @returns {Object} data: TypedArray[], width: number (tileSize), height: number (tileSize)
     */
    value: function () {
      var _getTile = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(_ref3) {
        var _this2 = this;

        var x, y, z, _ref3$loaderSelection, loaderSelection, source, _map, _map2, xIndex, yIndex, dataRequests, data;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                x = _ref3.x, y = _ref3.y, z = _ref3.z, _ref3$loaderSelection = _ref3.loaderSelection, loaderSelection = _ref3$loaderSelection === void 0 ? [] : _ref3$loaderSelection;
                source = this._getSource(z);
                _map = ['x', 'y'].map(function (k) {
                  return _this2._dimIndices.get(k);
                }), _map2 = slicedToArray_default()(_map, 2), xIndex = _map2[0], yIndex = _map2[1];
                dataRequests = loaderSelection.map( /*#__PURE__*/function () {
                  var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(sel) {
                    var chunkKey, _yield$source$getRawC, data, _yield$source$getRawC2, height, width;

                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            chunkKey = _this2._serializeSelection(sel);
                            chunkKey[yIndex] = y;
                            chunkKey[xIndex] = x;
                            _context.next = 5;
                            return source.getRawChunk(chunkKey);

                          case 5:
                            _yield$source$getRawC = _context.sent;
                            data = _yield$source$getRawC.data;
                            _yield$source$getRawC2 = slicedToArray_default()(_yield$source$getRawC.shape, 2);
                            height = _yield$source$getRawC2[0];
                            width = _yield$source$getRawC2[1];

                            if (!(height < _this2.tileSize || width < _this2.tileSize)) {
                              _context.next = 12;
                              break;
                            }

                            return _context.abrupt("return", padTileWithZeros({
                              data: data,
                              width: width,
                              height: height
                            }, _this2.tileSize, _this2.tileSize));

                          case 12:
                            return _context.abrupt("return", data);

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _context2.next = 6;
                return Promise.all(dataRequests);

              case 6:
                data = _context2.sent;
                return _context2.abrupt("return", {
                  data: data,
                  width: this.tileSize,
                  height: this.tileSize
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTile(_x) {
        return _getTile.apply(this, arguments);
      }

      return getTile;
    }()
    /**
     * Returns full image panes (at level z if pyramid)
     * @param {number} z positive integer (0 === highest zoom level)
     * @param {Array} loaderSelection, Array of valid dimension selections
     * @returns {Object} data: TypedArray[], width: number, height: number
     */

  }, {
    key: "getRaster",
    value: function () {
      var _getRaster = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(_ref5) {
        var _this3 = this;

        var z, _ref5$loaderSelection, loaderSelection, source, _map3, _map4, xIndex, yIndex, dataRequests, data, shape;

        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                z = _ref5.z, _ref5$loaderSelection = _ref5.loaderSelection, loaderSelection = _ref5$loaderSelection === void 0 ? [] : _ref5$loaderSelection;
                source = this._getSource(z);
                _map3 = ['x', 'y'].map(function (k) {
                  return _this3._dimIndices.get(k);
                }), _map4 = slicedToArray_default()(_map3, 2), xIndex = _map4[0], yIndex = _map4[1];
                dataRequests = loaderSelection.map( /*#__PURE__*/function () {
                  var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(sel) {
                    var chunkKey, _yield$source$getRaw, data;

                    return regenerator_default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            chunkKey = _this3._serializeSelection(sel);
                            chunkKey[yIndex] = null;
                            chunkKey[xIndex] = null;

                            if (_this3.isRgb) {
                              chunkKey[chunkKey.length - 1] = null;
                            }

                            _context3.next = 6;
                            return source.getRaw(chunkKey);

                          case 6:
                            _yield$source$getRaw = _context3.sent;
                            data = _yield$source$getRaw.data;
                            return _context3.abrupt("return", data);

                          case 9:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x4) {
                    return _ref6.apply(this, arguments);
                  };
                }());
                _context4.next = 6;
                return Promise.all(dataRequests);

              case 6:
                data = _context4.sent;
                shape = source.shape;
                return _context4.abrupt("return", {
                  data: data,
                  width: shape[xIndex],
                  height: shape[yIndex]
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getRaster(_x3) {
        return _getRaster.apply(this, arguments);
      }

      return getRaster;
    }()
    /**
     * Handles `onTileError` within deck.gl
     * @param {Error} err Error thrown in tile layer
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "onTileError",
    value: function onTileError(err) {
      if (!(err instanceof external_zarr_["BoundsCheckError"])) {
        // Rethrow error if something other than tile being requested is out of bounds.
        throw err;
      }
    }
    /**
     * Returns image width and height (at pyramid level z) without fetching data
     * @param {number} z positive integer (0 === highest zoom level)
     * @returns {Object} width: number, height: number
     */

  }, {
    key: "getRasterSize",
    value: function getRasterSize(_ref7) {
      var _this4 = this;

      var z = _ref7.z;

      var _this$_getSource = this._getSource(z),
          shape = _this$_getSource.shape;

      var _map5 = ['y', 'x'].map(function (k) {
        return shape[_this4._dimIndices.get(k)];
      }),
          _map6 = slicedToArray_default()(_map5, 2),
          height = _map6[0],
          width = _map6[1];

      return {
        height: height,
        width: width
      };
    }
    /**
     * Get the metadata associated with a Zarr image layer, in a human-readable format.
     * @returns {Object} Metadata keys mapped to values.
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return {};
    }
  }, {
    key: "_getSource",
    value: function _getSource(z) {
      return typeof z === 'number' && this.isPyramid ? this._data[z] : this._data;
    }
    /**
     * Returns valid zarr.js selection for ZarrArray.getRaw or ZarrArray.getRawChunk
     * @param {Object} selection valid dimension selection
     * @returns {Array} Array of indicies
     *
     * Valid dimension selections include:
     *   - Direct zarr.js selection: [1, 0, 0, 0]
     *   - Named selection object: { channel: 0, time: 2 } or { channel: "DAPI", time: 2 }
     */

  }, {
    key: "_serializeSelection",
    value: function _serializeSelection(selection) {
      var _this5 = this;

      // Just return copy if array-like zarr.js selection
      if (Array.isArray(selection)) return toConsumableArray_default()(selection);
      var serialized = Array(this.dimensions.length).fill(0);
      Object.entries(selection).forEach(function (_ref8) {
        var _ref9 = slicedToArray_default()(_ref8, 2),
            dimName = _ref9[0],
            value = _ref9[1];

        if (!_this5._dimIndices.has(dimName)) {
          throw Error("Dimension \"".concat(dimName, "\" does not exist on loader.\n           Must be one of \"").concat(_this5.dimensions.map(function (d) {
            return d.field;
          }), ".\""));
        }

        var dimIndex = _this5._dimIndices.get(dimName);

        switch (typeof_default()(value)) {
          case 'number':
            {
              // ex. { channel: 0 }
              serialized[dimIndex] = value;
              break;
            }

          case 'string':
            {
              var _this5$dimensions$dim = _this5.dimensions[dimIndex],
                  values = _this5$dimensions$dim.values,
                  type = _this5$dimensions$dim.type;

              if (type === 'nominal' || type === 'ordinal') {
                // ex. { channel: 'DAPI' }
                serialized[dimIndex] = values.indexOf(value);
                break;
              } else {
                // { z: 'DAPI' }
                throw Error("Cannot use selection \"".concat(value, "\" for dimension \"").concat(dimName, "\" with type \"").concat(type, "\"."));
              }
            }

          default:
            {
              throw Error("Named selection must be a string or number. Got ".concat(value, " for ").concat(dimName, "."));
            }
        }
      });
      return serialized;
    }
  }, {
    key: "isPyramid",
    get: function get() {
      return Array.isArray(this._data);
    }
  }, {
    key: "base",
    get: function get() {
      return this.isPyramid ? this._data[0] : this._data;
    }
  }]);

  return ZarrLoader;
}();


// EXTERNAL MODULE: external "fast-xml-parser"
var external_fast_xml_parser_ = __webpack_require__(30);
var external_fast_xml_parser_default = /*#__PURE__*/__webpack_require__.n(external_fast_xml_parser_);

// CONCATENATED MODULE: ./src/loaders/omeXML.js



/* eslint-disable radix */


var omeXML_OMEXML = /*#__PURE__*/function () {
  function OMEXML(omexmlString) {
    classCallCheck_default()(this, OMEXML);

    var options = {
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      trimValues: true,
      allowBooleanAttributes: true
    };
    this.metadataOMEXML = external_fast_xml_parser_default.a.parse(omexmlString, options).OME;

    var _ref = this.metadataOMEXML.Image.length ? this.metadataOMEXML.Image[0] : this.metadataOMEXML.Image,
        Pixels = _ref.Pixels;

    this._Pixels = Pixels;
    this.SizeZ = Number.parseInt(Pixels['@_SizeZ']);
    this.SizeT = Number.parseInt(Pixels['@_SizeT']);
    this.SizeC = Number.parseInt(Pixels['@_SizeC']);
    this.SizeX = Number.parseInt(Pixels['@_SizeX']);
    this.SizeY = Number.parseInt(Pixels['@_SizeY']);
    this.DimensionOrder = Pixels['@_DimensionOrder'];
    this.Type = Pixels['@_Type'];
    var PhysicalSizeYUnit = Pixels['@_PhysicalSizeYUnit']; // This µ character is not well handled - I got odd behavior but this solves it.
    // There was a prepended character so now I just look for µm to be included
    // and use only µm if it is found.

    this.PhysicalSizeYUnit = PhysicalSizeYUnit && PhysicalSizeYUnit.includes('µm') ? 'µm' : PhysicalSizeYUnit;
    var PhysicalSizeXUnit = Pixels['@_PhysicalSizeXUnit'];
    this.PhysicalSizeXUnit = PhysicalSizeXUnit && PhysicalSizeXUnit.includes('µm') ? 'µm' : PhysicalSizeXUnit;
    this.PhysicalSizeY = Pixels['@_PhysicalSizeY'];
    this.PhysicalSizeX = Pixels['@_PhysicalSizeX'];
  }

  createClass_default()(OMEXML, [{
    key: "getChannelNames",
    value: function getChannelNames() {
      var Channel = this._Pixels.Channel;
      return Array.isArray(Channel) ? Channel.map(function (channel) {
        return channel['@_Name'];
      }) : [Channel['@_Name']];
    }
  }, {
    key: "getNumberOfImages",
    value: function getNumberOfImages() {
      return this.metadataOMEXML.Image.length || 0;
    }
  }]);

  return OMEXML;
}();


// CONCATENATED MODULE: ./src/loaders/OMETiffLoader.js






function OMETiffLoader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function OMETiffLoader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { OMETiffLoader_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { OMETiffLoader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var DTYPE_LOOKUP = {
  uint8: '<u1',
  uint16: '<u2',
  uint32: '<u4',
  float32: '<f4'
};
/**
 * This class serves as a wrapper for fetching tiff data from a file server.
 * @param {Object} args
 * @param {Object} args.tiff geotiffjs tiff object.
 * @param {Object} args.pool Pool that implements a `decode` function.
 * @param {Object} args.firstImage First image (geotiff Image object) in the tiff (containing base-resolution data).
 * @param {String} args.omexmlString Raw OMEXML as a string.
 * @param {Array} args.offsets The offsets of each IFD in the tiff.
 * */

var OMETiffLoader_OMETiffLoader = /*#__PURE__*/function () {
  function OMETiffLoader(_ref) {
    var tiff = _ref.tiff,
        pool = _ref.pool,
        firstImage = _ref.firstImage,
        omexmlString = _ref.omexmlString,
        offsets = _ref.offsets;

    classCallCheck_default()(this, OMETiffLoader);

    this.pool = pool;
    this.tiff = tiff;
    this.type = 'ome-tiff'; // get first image's description, which contains OMEXML

    this.omexml = new omeXML_OMEXML(omexmlString);
    this.physicalSizes = {
      x: {
        value: this.omexml.PhysicalSizeX,
        unit: this.omexml.PhysicalSizeXUnit
      },
      y: {
        value: this.omexml.PhysicalSizeY,
        unit: this.omexml.PhysicalSizeYUnit
      }
    };
    this.software = firstImage.fileDirectory.Software;
    this.offsets = offsets || [];
    this.channelNames = this.omexml.getChannelNames();
    this.width = this.omexml.SizeX;
    this.height = this.omexml.SizeY;
    this.tileSize = firstImage.getTileWidth();
    var SubIFDs = firstImage.fileDirectory.SubIFDs; // These subIFDs are going to take some tuning to get right.
    // This works with the current bioformats6 pipeline.
    // Related to: https://github.com/hubmapconsortium/vitessce-image-viewer/issues/144

    this.numLevels = this.omexml.getNumberOfImages() || SubIFDs && SubIFDs.length - 1;
    this.isBioFormats6Pyramid = SubIFDs;
    this.isPyramid = this.numLevels > 1; // The omexml specification only allows for these - zarr is more flexible so this
    // is for unifying the two loaders in upstream applications.

    this.dimensions = [{
      field: 'channel',
      type: 'nominal',
      values: this.channelNames
    }, {
      field: 'z',
      type: 'ordinal',
      values: range(this.omexml.SizeZ)
    }, {
      field: 'time',
      type: 'ordinal',
      values: range(this.omexml.SizeT)
    }, {
      field: 'x',
      type: 'quantitative',
      values: null
    }, {
      field: 'y',
      type: 'quantitative',
      values: null
    }]; // We use zarr's internal format.  It encodes endiannes, but we leave it little for now
    // since javascript is little endian.

    this.dtype = DTYPE_LOOKUP[this.omexml.Type];
  }
  /**
   * Returns an IFD index for a given loader selection.
   * @param {number} z Z axis selection.
   * @param {number} time Time axis selection.
   * @param {String} channel Channel axis selection.
   * @returns {number} IFD index.
   */


  createClass_default()(OMETiffLoader, [{
    key: "_getIFDIndex",
    value: function _getIFDIndex(_ref2) {
      var _ref2$z = _ref2.z,
          z = _ref2$z === void 0 ? 0 : _ref2$z,
          channel = _ref2.channel,
          _ref2$time = _ref2.time,
          time = _ref2$time === void 0 ? 0 : _ref2$time;
      var channelIndex; // Without names, enforce a numeric channel indexing scheme

      if (this.channelNames.every(function (v) {
        return !v;
      })) {
        console.warn('No channel names found in OMEXML.  Please be sure to use numeric indexing.');
        channelIndex = channel;
      } else if (typeof channel === 'string') {
        channelIndex = this.channelNames.indexOf(channel);
      } else if (typeof channel === 'number') {
        channelIndex = channel;
      } else {
        throw new Error('Channel selection must be numeric index or string');
      }

      var _this$omexml = this.omexml,
          SizeZ = _this$omexml.SizeZ,
          SizeT = _this$omexml.SizeT,
          SizeC = _this$omexml.SizeC,
          DimensionOrder = _this$omexml.DimensionOrder;

      switch (DimensionOrder) {
        case 'XYZCT':
          {
            return time * SizeZ * SizeC + channelIndex * SizeZ + z;
          }

        case 'XYZTC':
          {
            return channelIndex * SizeZ * SizeT + time * SizeZ + z;
          }

        case 'XYCTZ':
          {
            return z * SizeC * SizeT + time * SizeC + channelIndex;
          }

        case 'XYCZT':
          {
            return time * SizeC * SizeZ + z * SizeC + channelIndex;
          }

        case 'XYTCZ':
          {
            return z * SizeT * SizeC + channelIndex * SizeT + time;
          }

        case 'XYTZC':
          {
            return channelIndex * SizeT * SizeZ + z * SizeT + time;
          }

        default:
          {
            throw new Error('Dimension order is required for OMETIFF');
          }
      }
    }
    /**
     * Handles `onTileError` within deck.gl
     * @param {Error} err Error thrown in tile layer
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "onTileError",
    value: function onTileError(err) {
      console.error(err);
    }
    /**
     * Returns image tiles at tile-position (x, y) at pyramidal level z.
     * @param {number} x positive integer
     * @param {number} y positive integer
     * @param {number} z positive integer (0 === highest zoom level)
     * @param {Array} loaderSelection, Array of number Arrays specifying channel selections
     * @returns {Object} data: TypedArray[], width: number (tileSize), height: number (tileSize).
     * Default is `{data: [], width: tileSize, height: tileSize}`.
     */

  }, {
    key: "getTile",
    value: function () {
      var _getTile = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(_ref3) {
        var _this = this;

        var x, y, z, _ref3$loaderSelection, loaderSelection, tiff, isBioFormats6Pyramid, omexml, tileSize, SizeZ, SizeT, SizeC, pyramidOffset, image, tileRequests, tiles;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                x = _ref3.x, y = _ref3.y, z = _ref3.z, _ref3$loaderSelection = _ref3.loaderSelection, loaderSelection = _ref3$loaderSelection === void 0 ? [] : _ref3$loaderSelection;

                if (this._tileInBounds({
                  x: x,
                  y: y,
                  z: z
                })) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", null);

              case 3:
                tiff = this.tiff, isBioFormats6Pyramid = this.isBioFormats6Pyramid, omexml = this.omexml, tileSize = this.tileSize;
                SizeZ = omexml.SizeZ, SizeT = omexml.SizeT, SizeC = omexml.SizeC;
                pyramidOffset = z * SizeZ * SizeT * SizeC;
                tileRequests = loaderSelection.map( /*#__PURE__*/function () {
                  var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(sel) {
                    var index, pyramidIndex, parentImage;
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            index = _this._getIFDIndex(sel);
                            pyramidIndex = pyramidOffset + index; // We need to put the request for parsing the file directory into this array.
                            // This allows us to get tiff pages directly based on offset without parsing everything.

                            if (isBioFormats6Pyramid) {
                              _context.next = 6;
                              break;
                            }

                            _this._parseIFD(pyramidIndex);

                            _context.next = 11;
                            break;

                          case 6:
                            // Pyramids with large z-stacks + large numbers of channels could get slow
                            // so we allow for offsets for the lowest-resolution images ("parentImage").
                            _this._parseIFD(index);

                            _context.next = 9;
                            return tiff.getImage(index);

                          case 9:
                            parentImage = _context.sent;

                            if (z !== 0) {
                              tiff.ifdRequests[pyramidIndex] = tiff.parseFileDirectoryAt(parentImage.fileDirectory.SubIFDs[z - 1]);
                            }

                          case 11:
                            _context.next = 13;
                            return tiff.getImage(pyramidIndex);

                          case 13:
                            image = _context.sent;
                            return _context.abrupt("return", _this._getChannel({
                              image: image,
                              x: x,
                              y: y
                            }));

                          case 15:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _context2.next = 9;
                return Promise.all(tileRequests);

              case 9:
                tiles = _context2.sent;
                return _context2.abrupt("return", {
                  data: tiles,
                  width: tileSize,
                  height: tileSize
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTile(_x) {
        return _getTile.apply(this, arguments);
      }

      return getTile;
    }()
    /**
     * Returns full image panes (at level z if pyramid)
     * @param {number} z positive integer (0 === highest zoom level)
     * @param {Array} loaderSelection, Array of number Arrays specifying channel selections
     * @returns {Object} data: TypedArray[], width: number, height: number
      * Default is `{data: [], width, height}`.
      */

  }, {
    key: "getRaster",
    value: function () {
      var _getRaster = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(_ref5) {
        var _this2 = this;

        var z, loaderSelection, tiff, omexml, isBioFormats6Pyramid, pool, SizeZ, SizeT, SizeC, rasters, image, width, height;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                z = _ref5.z, loaderSelection = _ref5.loaderSelection;
                tiff = this.tiff, omexml = this.omexml, isBioFormats6Pyramid = this.isBioFormats6Pyramid, pool = this.pool;
                SizeZ = omexml.SizeZ, SizeT = omexml.SizeT, SizeC = omexml.SizeC;
                _context4.next = 5;
                return Promise.all(loaderSelection.map( /*#__PURE__*/function () {
                  var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(sel) {
                    var index, pyramidIndex, parentImage, image, raster;
                    return regenerator_default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            index = _this2._getIFDIndex(sel);
                            pyramidIndex = z * SizeZ * SizeT * SizeC + index; // We need to put the request for parsing the file directory into this array.
                            // This allows us to get tiff pages directly based on offset without parsing everything.

                            if (isBioFormats6Pyramid) {
                              _context3.next = 6;
                              break;
                            }

                            _this2._parseIFD(pyramidIndex);

                            _context3.next = 11;
                            break;

                          case 6:
                            // Pyramids with large z-stacks + large numbers of channels could get slow
                            // so we allow for offsets for the initial images ("parentImage").
                            _this2._parseIFD(index);

                            _context3.next = 9;
                            return tiff.getImage(index);

                          case 9:
                            parentImage = _context3.sent;

                            if (z !== 0) {
                              tiff.ifdRequests[pyramidIndex] = tiff.parseFileDirectoryAt(parentImage.fileDirectory.SubIFDs[z - 1]);
                            }

                          case 11:
                            _context3.next = 13;
                            return tiff.getImage(pyramidIndex);

                          case 13:
                            image = _context3.sent;
                            _context3.next = 16;
                            return image.readRasters({
                              pool: pool
                            });

                          case 16:
                            raster = _context3.sent;
                            return _context3.abrupt("return", raster[0]);

                          case 18:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x4) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 5:
                rasters = _context4.sent;

                if (!(!loaderSelection || loaderSelection.length === 0)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", OMETiffLoader_objectSpread({
                  data: []
                }, this.getRasterSize({
                  z: z
                })));

              case 8:
                _context4.next = 10;
                return tiff.getImage(z * SizeZ * SizeT * SizeC + this._getIFDIndex(loaderSelection[0]));

              case 10:
                image = _context4.sent;
                width = image.getWidth();
                height = image.getHeight();
                return _context4.abrupt("return", {
                  data: rasters,
                  width: width,
                  height: height
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getRaster(_x3) {
        return _getRaster.apply(this, arguments);
      }

      return getRaster;
    }()
    /**
     * Returns image width and height (at pyramid level z) without fetching data.
     * This information is inferrable from the provided omexml.
     * This is only used by the OverviewLayer for inferring the box size.
     * It is NOT the actual pixel-size but rather the image size
     * without any padding.
     * @param {number} z positive integer (0 === highest zoom level)
     * @returns {Object} width: number, height: number
     */

  }, {
    key: "getRasterSize",
    value: function getRasterSize(_ref7) {
      var z = _ref7.z;
      var width = this.width,
          height = this.height;
      /* eslint-disable no-bitwise */

      return {
        height: height >> z,
        width: width >> z
      };
      /* eslint-disable no-bitwise */
    }
    /**
     * Get the metadata associated with an OMETiff image layer, in a human-readable format.
     * @returns {Object} Metadata keys mapped to values.
     */

  }, {
    key: "getMetadata",
    value: function getMetadata() {
      var omexml = this.omexml;
      var _omexml$metadataOMEXM = omexml.metadataOMEXML,
          AcquisitionDate = _omexml$metadataOMEXM.Image.AcquisitionDate,
          StructuredAnnotations = _omexml$metadataOMEXM.StructuredAnnotations,
          SizeX = omexml.SizeX,
          SizeY = omexml.SizeY,
          SizeZ = omexml.SizeZ,
          SizeT = omexml.SizeT,
          SizeC = omexml.SizeC,
          Type = omexml.Type,
          PhysicalSizeX = omexml.PhysicalSizeX,
          PhysicalSizeXUnit = omexml.PhysicalSizeXUnit,
          PhysicalSizeY = omexml.PhysicalSizeY,
          PhysicalSizeYUnit = omexml.PhysicalSizeYUnit,
          PhysicalSizeZ = omexml.PhysicalSizeZ,
          PhysicalSizeZUnit = omexml.PhysicalSizeZUnit;
      var physicalSizeAndUnitX = PhysicalSizeX && PhysicalSizeXUnit ? "".concat(PhysicalSizeX, " (").concat(PhysicalSizeXUnit, ")") : '-';
      var physicalSizeAndUnitY = PhysicalSizeY && PhysicalSizeYUnit ? "".concat(PhysicalSizeY, " (").concat(PhysicalSizeYUnit, ")") : '-';
      var physicalSizeAndUnitZ = PhysicalSizeZ && PhysicalSizeZUnit ? "".concat(PhysicalSizeZ, " (").concat(PhysicalSizeZUnit, ")") : '-';
      var roiCount;

      if (StructuredAnnotations) {
        var MapAnnotation = StructuredAnnotations.MapAnnotation;
        roiCount = MapAnnotation && MapAnnotation.Value ? Object.entries(MapAnnotation.Value).length : 0;
      }

      return {
        'Acquisition Date': AcquisitionDate,
        'Dimensions (XY)': "".concat(SizeX, " x ").concat(SizeY),
        'Pixels Type': Type,
        'Pixels Size (XYZ)': "".concat(physicalSizeAndUnitX, " x ").concat(physicalSizeAndUnitY, " x ").concat(physicalSizeAndUnitZ),
        'Z-sections/Timepoints': "".concat(SizeZ, " x ").concat(SizeT),
        Channels: SizeC,
        'ROI Count': roiCount
      };
    }
  }, {
    key: "_getChannel",
    value: function () {
      var _getChannel2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5(_ref8) {
        var image, x, y, dtype, TypedArray, tile, data, width, height;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                image = _ref8.image, x = _ref8.x, y = _ref8.y;
                dtype = this.dtype;
                TypedArray = DTYPE_VALUES[dtype].TypedArray;
                _context5.next = 5;
                return image.getTileOrStrip(x, y, 0, this.pool);

              case 5:
                tile = _context5.sent;
                data = new TypedArray(tile.data);
                /*
                 * The endianness of JavaScript TypedArrays are determined by the endianness
                 * of the end-users' hardware. Nearly all desktop computers are x86 (little endian),
                 * so we flip bytes in place for big-endian buffers. This is substantially faster than using
                 * the DataView API.
                 */

                if (!image.littleEndian) {
                  byteSwapInplace(data);
                } // If the tile data is not (tileSize x tileSize), pad the data with zeros


                if (!(data.length < this.tileSize * this.tileSize)) {
                  _context5.next = 12;
                  break;
                }

                width = Math.min(this.tileSize, image.getWidth() - x * this.tileSize);
                height = data.length / width;
                return _context5.abrupt("return", padTileWithZeros({
                  data: data,
                  width: width,
                  height: height
                }, this.tileSize, this.tileSize));

              case 12:
                return _context5.abrupt("return", data);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _getChannel(_x5) {
        return _getChannel2.apply(this, arguments);
      }

      return _getChannel;
    }()
  }, {
    key: "_tileInBounds",
    value: function _tileInBounds(_ref9) {
      var x = _ref9.x,
          y = _ref9.y,
          z = _ref9.z;
      var width = this.width,
          height = this.height,
          tileSize = this.tileSize,
          numLevels = this.numLevels;
      return isInTileBounds({
        x: x,
        y: y,
        z: z,
        width: width,
        height: height,
        tileSize: tileSize,
        numLevels: numLevels
      });
    }
  }, {
    key: "_parseIFD",
    value: function _parseIFD(index) {
      var tiff = this.tiff,
          offsets = this.offsets;

      if (offsets.length > 0) {
        tiff.ifdRequests[index] = tiff.parseFileDirectoryAt(offsets[index]);
      }
    }
  }]);

  return OMETiffLoader;
}();


// CONCATENATED MODULE: ./src/loaders/omeZarrReader.js







function getJson(_x, _x2) {
  return _getJson.apply(this, arguments);
}
/**
 * This class attempts to be a javascript implementation of ome-zarr-py
 * https://github.com/ome/ome-zarr-py/blob/master/ome_zarr.py
 * @param {String} zarrPath url to root zarr store
 * @param {Object} rootAttrs metadata for zarr array
 * */


function _getJson() {
  _getJson = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(path, key) {
    var res, json;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(path).concat(key));

          case 2:
            res = _context3.sent;

            if (!(res.status === 404)) {
              _context3.next = 5;
              break;
            }

            throw Error("Key '".concat(key, "' does not exist on zarr store."));

          case 5:
            _context3.next = 7;
            return res.json();

          case 7:
            json = _context3.sent;
            return _context3.abrupt("return", json);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getJson.apply(this, arguments);
}

var omeZarrReader_OMEZarrReader = /*#__PURE__*/function () {
  function OMEZarrReader(zarrPath, rootAttrs) {
    classCallCheck_default()(this, OMEZarrReader);

    this.zarrPath = zarrPath;
    this.rootAttrs = rootAttrs;

    if (!('omero' in rootAttrs)) {
      throw Error('Remote zarr is not ome-zarr format.');
    }

    this.imageData = rootAttrs.omero;
  }
  /**
   * Returns OMEZarrReader instance.
   * @param {String} url root zarr store
   * @returns {OMEZarrReader} OME reader for zarr store
   */


  createClass_default()(OMEZarrReader, [{
    key: "loadOMEZarr",

    /**
     * Returns ZarrLoader as well as omero image metadata object.
     * @returns {Object} { loader: ZarrLoader, metadata: Object }
     */
    value: function () {
      var _loadOMEZarr = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this = this;

        var resolutions, datasets, promises, pyramid, data, dimensions;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resolutions = ['0']; // TODO: could be first alphanumeric dataset on err

                if ('multiscales' in this.rootAttrs) {
                  datasets = this.rootAttrs.multiscales[0].datasets;
                  resolutions = datasets.map(function (d) {
                    return d.path;
                  });
                }

                promises = resolutions.map(function (r) {
                  return Object(external_zarr_["openArray"])({
                    store: _this.zarrPath,
                    path: r
                  });
                });
                _context.next = 5;
                return Promise.all(promises);

              case 5:
                pyramid = _context.sent;
                data = pyramid.length > 1 ? pyramid : pyramid[0];
                dimensions = ['t', 'c', 'z', 'y', 'x'].map(function (field) {
                  return {
                    field: field
                  };
                });
                return _context.abrupt("return", {
                  loader: new zarrLoader_ZarrLoader({
                    data: data,
                    dimensions: dimensions
                  }),
                  metadata: this.imageData
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadOMEZarr() {
        return _loadOMEZarr.apply(this, arguments);
      }

      return loadOMEZarr;
    }()
  }], [{
    key: "fromUrl",
    value: function () {
      var _fromUrl = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(url) {
        var zarrPath, rootAttrs, meta, enc;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof url === 'string')) {
                  _context2.next = 7;
                  break;
                }

                zarrPath = url.endsWith('/') ? url : "".concat(url, "/");
                _context2.next = 4;
                return getJson(zarrPath, '.zattrs');

              case 4:
                rootAttrs = _context2.sent;
                _context2.next = 13;
                break;

              case 7:
                zarrPath = url;
                _context2.next = 10;
                return url.getItem('.zattrs');

              case 10:
                meta = _context2.sent;
                enc = new TextDecoder("utf-8");
                rootAttrs = JSON.parse(enc.decode(new Uint8Array(meta)));

              case 13:
                return _context2.abrupt("return", new OMEZarrReader(zarrPath, rootAttrs));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fromUrl(_x3) {
        return _fromUrl.apply(this, arguments);
      }

      return fromUrl;
    }()
  }]);

  return OMEZarrReader;
}();

/* harmony default export */ var omeZarrReader = (omeZarrReader_OMEZarrReader);
// CONCATENATED MODULE: ./src/loaders/index.js









function createZarrLoader(_x) {
  return _createZarrLoader.apply(this, arguments);
}
/**
 * This function wraps creating a ome-tiff loader.
 * @param {Object} args
 * @param {String} args.url URL from which to fetch the tiff.
 * @param {Array} args.offsets List of IFD offsets.
 * @param {Object} args.headers Object containing headers to be passed to all fetch requests.
 */

function _createZarrLoader() {
  _createZarrLoader = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref) {
    var url, dimensions, isPyramid, isRgb, scale, translate, data, metadata, metadataUrl, response, md, meta, enc, _md, paths;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, dimensions = _ref.dimensions, isPyramid = _ref.isPyramid, isRgb = _ref.isRgb, scale = _ref.scale, translate = _ref.translate;

            if (!isPyramid) {
              _context.next = 25;
              break;
            }

            if (!(typeof url === 'string')) {
              _context.next = 13;
              break;
            }

            metadataUrl = "".concat(url).concat(url.slice(-1) === '/' ? '' : '/', ".zmetadata");
            _context.next = 6;
            return fetch(metadataUrl);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            md = _context.sent;
            metadata = md.metadata;
            _context.next = 19;
            break;

          case 13:
            _context.next = 15;
            return url.getItem('.zmetadata');

          case 15:
            meta = _context.sent;
            enc = new TextDecoder("utf-8");
            _md = JSON.parse(enc.decode(new Uint8Array(meta)));
            metadata = _md.metadata;

          case 19:
            paths = Object.keys(metadata).filter(function (metaKey) {
              return metaKey.includes('.zarray');
            }).map(function (arrMetaKeys) {
              return arrMetaKeys.slice(0, -7);
            });
            _context.next = 22;
            return Promise.all(paths.map(function (path) {
              return Object(external_zarr_["openArray"])({
                store: url,
                path: path
              });
            }));

          case 22:
            data = _context.sent;
            _context.next = 28;
            break;

          case 25:
            _context.next = 27;
            return Object(external_zarr_["openArray"])({
              store: url
            });

          case 27:
            data = _context.sent;

          case 28:
            return _context.abrupt("return", new zarrLoader_ZarrLoader({
              data: data,
              dimensions: dimensions,
              scale: scale,
              translate: translate,
              isRgb: isRgb
            }));

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createZarrLoader.apply(this, arguments);
}

function createOMETiffLoader(_x2) {
  return _createOMETiffLoader.apply(this, arguments);
}

function _createOMETiffLoader() {
  _createOMETiffLoader = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(_ref2) {
    var url, _ref2$offsets, offsets, _ref2$headers, headers, tiff, firstImage, pool, omexmlString;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _ref2.url, _ref2$offsets = _ref2.offsets, offsets = _ref2$offsets === void 0 ? [] : _ref2$offsets, _ref2$headers = _ref2.headers, headers = _ref2$headers === void 0 ? {} : _ref2$headers;
            _context2.next = 3;
            return geotiff_fromUrl(url, headers);

          case 3:
            tiff = _context2.sent;
            _context2.next = 6;
            return tiff.getImage(0);

          case 6:
            firstImage = _context2.sent;
            pool = new Pool_Pool();
            omexmlString = firstImage.fileDirectory.ImageDescription;
            return _context2.abrupt("return", new OMETiffLoader_OMETiffLoader({
              tiff: tiff,
              pool: pool,
              firstImage: firstImage,
              omexmlString: omexmlString,
              offsets: offsets
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createOMETiffLoader.apply(this, arguments);
}


// CONCATENATED MODULE: ./src/index.js







/***/ })
/******/ ]);
//# sourceMappingURL=bundle.es.js.map