(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Utils = exports.DOM = exports.View = exports.Log = undefined;
	
	var _view = __webpack_require__(1);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _dom = __webpack_require__(4);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _utils = __webpack_require__(3);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Log = _log2.default;
	exports.View = _view2.default;
	exports.DOM = _dom2.default;
	exports.Utils = _utils2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _utils = __webpack_require__(3);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _dom = __webpack_require__(4);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _emmet = __webpack_require__(5);
	
	var _emmet2 = _interopRequireDefault(_emmet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * View is the standard sorthvid content container class. All parameters are wrapped in ES6 object syntax.
	 * @param {Element} el The associated DOMelement OR a string shorthand for generating an element
	 * @param {String} content Optional string HTML content to be injected into a generated element
	 * @param {Object} events A json object containing the events for the instance
	 * @param {String} displayName A huma readable name for the View
	 */
	
	var View = function () {
		function View(_ref) {
			var _ref$el = _ref.el;
			var el = _ref$el === undefined ? null : _ref$el;
			var _ref$content = _ref.content;
			var content = _ref$content === undefined ? null : _ref$content;
			var _ref$events = _ref.events;
			var events = _ref$events === undefined ? null : _ref$events;
			var _ref$displayName = _ref.displayName;
			var displayName = _ref$displayName === undefined ? 'View' : _ref$displayName;
			var _ref$templ = _ref.templ;
			var templ = _ref$templ === undefined ? null : _ref$templ;
			var _ref$data = _ref.data;
			var data = _ref$data === undefined ? null : _ref$data;
			var _ref$mount = _ref.mount;
			var mount = _ref$mount === undefined ? null : _ref$mount;
	
			_classCallCheck(this, View);
	
			//class constructor
	
			this.instanceId = _utils2.default.getCuid();
			this.events = events;
			this.data = data;
			this.mountPoint = mount;
	
			if (typeof el == "string") {
				this.el = (0, _emmet2.default)(el);
			} else {
				this.el = el;
			}
			this.eventListeners = [];
			this.delegateEvents();
			this.update();
			_log2.default.fn(displayName + ' ' + this.instanceId + ' created');
			if (this.mountPoint) {
				this.render();
			}
		}
	
		_createClass(View, [{
			key: 'delegateEvents',
			value: function delegateEvents() {
				var _this = this;
	
				if (this.eventListeners.length > 0) throw new Error("Event listeners have already been delegated!");
	
				var _loop = function _loop(prop) {
					var eventSplit = prop.split(' ');
					var eventName = eventSplit[0];
	
					// is the target specified with a selector, or is this.el implied?
					var target = eventSplit.length > 1 ? eventSplit[1] : _this.el;
	
					var eventHandler = _this[_this.events[prop]];
	
					// is the target already an element or a selector?
					var elements = void 0;
					if (typeof target == "string") {
						elements = _dom2.default.find(_this.el, target);
					} else if (target.length && target != _this.el) {
						elements = _dom2.default.find(_this.el, target[0]);
					} else {
						//wrapping this.el in array
						elements = [target];
					}
					elements.forEach(function (element) {
						_this.eventListeners.push({ element: element, eventName: eventName, eventHandler: eventHandler });
						_utils2.default.on(element, eventName, eventHandler.bind(_this));
					});
				};
	
				for (var prop in this.events) {
					_loop(prop);
				}
			}
	
			/*
	  * A "public" function, update all data-tmpl data attributes
	  */
	
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;
	
				if (!this.data) return;
				Object.keys(this.data).forEach(function (item) {
					var el = _dom2.default.find(_this2.el, '[data-text=' + item + ']')[0];
					if (el && _this2.data[item]) {
						el.insertBefore(document.createTextNode(_this2.data[item]), el.firstChild);
					}
				});
			}
	
			/*
	  * A "private" function, which removes all event listeners
	  */
	
		}, {
			key: 'undelegateEvents',
			value: function undelegateEvents() {
				var _this3 = this;
	
				this.eventListeners.forEach(function (listener) {
					_utils2.default.off(listener.element, listener.eventName, listener.eventHandler.bind(_this3));
				});
				return true;
			}
	
			/*
	  * A "public" function, which removes the view's el from the DOM
	  * Sets the View's visible property to false
	  */
	
		}, {
			key: 'remove',
			value: function remove() {
				if (this.undelegateEvents()) {
					this.visible = false;
					_dom2.default.remove(this.el);
				}
			}
	
			/**
	  * A "public" function, which re-inserts the view's el into the DOM
	  * Sets the View's visible property to true
	  **/
	
		}, {
			key: 'render',
			value: function render() {
				var mountPoint = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
				if (!this.visible) {
					if (mountPoint) _dom2.default.append(_dom2.default.find(mountPoint), this.el);else if (this.mountPoint) _dom2.default.append(_dom2.default.find(this.mountPoint), this.el);else throw new Error("Can't render! No mountpoint found!");
					this.visible = true;
				}
				return this;
			}
		}, {
			key: 'append',
			value: function append(docFragment) {
				_dom2.default.append(this.el, docFragment);
			}
	
			/**
	   * Wrappers for DOM manipulation methods always using this.el as the origin
	   **/
	
		}, {
			key: 'find',
			value: function find(selector) {
				var result = _dom2.default.find(this.el, selector);
				return result;
			}
		}, {
			key: 'addClass',
			value: function addClass(className) {
				_dom2.default.addClass(this.el, className);
				return this;
			}
		}, {
			key: 'hasClass',
			value: function hasClass(className) {
				return _dom2.default.hasClass(this.el, className);
			}
		}, {
			key: 'removeClass',
			value: function removeClass(className) {
				_dom2.default.removeClass(this.el, className);
				return this;
			}
		}, {
			key: 'toggleClass',
			value: function toggleClass(className, test) {
				_dom2.default.toggleClass(this.el, className, test);
			}
		}, {
			key: 'closest',
			value: function closest(selector) {
				return _dom2.default.closest(this.el, selector);
			}
		}]);
	
		return View;
	}();
	
	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var type = {
		disabled: "disabled",
		debug: "debugging",
		func: "function",
		data: "raw data",
		error: "!ERROR!"
	},
	    allowedTypes = [type.debug, type.func, type.data, type.error];
	
	/**
	 * Logging wrapper for debugging
	 * @param {args} - A list of parameters, where the first parameter can be a type as specified in the "type" object 
	 */
	
	var Log = {
	
		write: function write() {
			if (window.nolog) return false;
	
			var typeFound = false;
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			for (var i = 0; i < allowedTypes.length; i++) {
				if (allowedTypes[i] === args[0]) typeFound = true;
			}
	
			if (typeFound) args[0] = "[" + args[0] + "] || ";
	
			if (console) {
				if (console.log) {
					if (console.log.apply) {
						console.log.apply(console, args);
					} else {
						console.log(args);
					} // nicer display in some browsers
				}
			}
		},
	
		/*
	 * Auxilliary functions for easy access
	 * db - "debug", used for signifying, that the logged text is a general debugging statement
	 * dt - "data", used for signifying, that the logged text is raw data
	 * fn - "function", used for signifying, that the text is logged when a function is invoked
	 */
		db: function db() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}
	
			this.write(type.debug, args);
		},
		dt: function dt() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}
	
			this.write(type.data, args);
		},
		fn: function fn() {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}
	
			this.write(type.func, args);
		},
		er: function er() {
			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}
	
			this.write(type.error, args);
		}
	
	};
	
	exports.default = Log;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _dom = __webpack_require__(4);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _view = __webpack_require__(1);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	Math.easeInOutQuad = function (t, b, c, d) {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t + b;
		}
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	};
	
	Math.easeInCubic = function (t, b, c, d) {
		var tc = (t /= d) * t * t;
		return b + c * tc;
	};
	
	Math.inOutQuintic = function (t, b, c, d) {
		var ts = (t /= d) * t,
		    tc = ts * t;
		return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
	};
	
	Math.easeOutExpo = function (t, b, c, d) {
		return c * (-Math.pow(2, -10 * t / d) + 1) + b;
	};
	
	/**
	 * Utils is a collection of sorthvid auxilliary methods
	 */
	var Utils = {
	
		/**
	  * Creates all Views for a chosen Class
	  * @param {String} selector - selector for which elements to associate with Views
	  * @param {Class} viewClass - a reference to the class from which Views will be instantiated
	  */
		viewFactory: function viewFactory(selector, viewClass, settings) {
			var elements = _dom2.default.find(selector);
			var views = [];
			[].concat(_toConsumableArray(elements)).map(function (el) {
				var defaults = { el: el };
				Object.assign(defaults, settings);
				_log2.default.db("defaults", defaults);
				views.push(new viewClass(defaults));
			});
			return views;
		},
	
		/**
	  * A vanilla implementation of each
	  **/
		each: function each(target, fn) {
			var elements;
	
			if (typeof target == "string") {
				elements = this.find(target);
			} else if (target.length || target instanceof NodeList) {
				elements = target;
			} else if (target instanceof Element) {
				elements = [target];
			}
			if (elements.length === 0 || !(elements instanceof NodeList)) {
				return false;
			}
	
			for (var i = 0; i < elements.length; i++) {
				fn(elements[i], i);
			}
		},
	
		/**
	  * Attaches an event listener
	  * @param {Element} elem - the associated DOMelement
	  * @param {String} eventName - the event string
	  * @param {Function} eventHandler - the handler function
	  */
		on: function on(el, eventName, eventHandler) {
			var elem = el instanceof _view2.default ? el.el : el;
			if (elem.addEventListener) {
				elem.addEventListener(eventName, eventHandler);
			} else {
				elem.attachEvent('on' + eventName, function () {
					eventHandler.call(elem);
				});
			}
		},
	
		/**
	  * Removes an event listener
	  * @param {Element} elem - the associated DOMelement
	  * @param {String} eventName - the event string
	  * @param {Function} eventHandler - the handler function
	  */
		off: function off(el, eventName, eventHandler) {
			var elem = el instanceof _view2.default ? el.el : el;
			if (elem.removeEventListener) elem.removeEventListener(eventName, eventHandler);else elem.detachEvent('on' + eventName, eventHandler);
		},
	
		/**
	  * Checks if the element is within the viewport
	  * @param {Element} el - the DOMelement in question
	  */
		isElementInViewport: function isElementInViewport(el) {
			var elem = el instanceof _view2.default ? el.el : el;
			if (!elem) {
				return;
			}
			var rect = elem.getBoundingClientRect();
			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			;
		},
	
		/**
	  * Vanilla way of sniffing element height
	  * @param {Element} elem - the DOMelement in question
	  */
		getHeight: function getHeight(el) {
			var elem = el instanceof _view2.default ? el.el : el;
	
			var style = window.getComputedStyle(elem),
			    savedProps = {
				display: style.display,
				position: style.position,
				visibility: style.visibility,
				maxHeight: style.maxHeight.replace('px', '').replace('%', '')
			},
			    wantedHeight = 0;
	
			// if its not hidden we just return normal height
			if (savedProps.display !== 'none' && savedProps.maxHeight !== '0') {
				return elem.offsetHeight;
			}
	
			// the element is hidden so:
			// making the el block so we can meassure its height but still be hidden
			elem.style.position = 'absolute';
			elem.style.visibility = 'hidden';
			elem.style.display = 'block';
	
			wantedHeight = elem.offsetHeight;
	
			// reverting to the original values
			elem.style.display = savedProps.display;
			elem.style.position = savedProps.position;
			elem.style.visibility = savedProps.visibility;
	
			return wantedHeight;
		},
	
		/**
	  * Get url parameter
	  * @param {String} name - the variable name
	  * @param {String} url - a way to override the default root of the url parameter
	  */
		getUrlParms: function getUrlParms(name, url) {
			var url = url || window.location.search;
			var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			    results = regex.exec(url);
			return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},
	
		/**
	  * Vanilla site scroll animation
	  * @param {Element} elem - the DOMelement to scroll to
	  * @param {Number} scrollDuration - duration of the animation
	  */
		scrollTo: function scrollTo(el, scrollDuration) {
			var elem = el instanceof _view2.default ? el.el : el;
			// because it's so fucking difficult to detect the scrolling element, just move them all
			function move(amount) {
				document.documentElement.scrollTop = amount;
				document.body.parentNode.scrollTop = amount;
				document.body.scrollTop = amount;
			}
			function position() {
				return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
			}
	
			var requestAnimFrame = function () {
				return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};
			}();
	
			var start = position(),
			    change = elem.getClientRects()[0].top - start,
			    currentTime = 0,
			    increment = 20,
			    duration = typeof scrollDuration === 'undefined' ? 500 : scrollDuration;
	
			var animateScroll = function () {
				// increment the time
				currentTime += increment;
				// find the value with the quadratic in-out easing function
				var val = Math.easeOutExpo(currentTime, start, change, duration);
				// move the document.body
				move(val);
				// do the animation unless its over
				_log2.default.db(currentTime, duration);
				if (currentTime < duration) {
					requestAnimFrame(animateScroll);
				}
			}.bind(this);
	
			animateScroll();
		},
	
		cumulativeOffset: function cumulativeOffset(el) {
			var elem = el instanceof _view2.default ? el.el : el;
	
			var top = 0,
			    left = 0;
	
			do {
				top += elem.offsetTop || 0;
				left += elem.offsetLeft || 0;
				elem = elem.offsetParent;
			} while (elem);
	
			return {
				top: top,
				left: left
			};
		},
	
		cookie: {
			get: function get(cookieName) {
				if (document.cookie.length <= 0) {
					return null;
				}
				var start = document.cookie.indexOf(cookieName + "=");
				if (start >= 0) {
					start = start + cookieName.length + 1;
					var end = document.cookie.indexOf(";", start);
					if (end < 0) {
						end = document.cookie.length;
					}
					return unescape(document.cookie.substring(start, end));
				}
			},
	
			set: function set(_ref) {
				var _ref$cookieName = _ref.cookieName;
				var cookieName = _ref$cookieName === undefined ? null : _ref$cookieName;
				var _ref$cookieValue = _ref.cookieValue;
				var cookieValue = _ref$cookieValue === undefined ? null : _ref$cookieValue;
				var _ref$expireDays = _ref.expireDays;
				var expireDays = _ref$expireDays === undefined ? 30 : _ref$expireDays;
	
				var expireDate = new Date();
				cookieValue = cookieValue || 1;
				expireDate.setDate(expireDate.getDate() + expireDays);
				var cookieValue = escape(cookieValue) + (expireDays == null ? "" : "; path=/; expires=" + expireDate.toUTCString());
				document.cookie = cookieName + "=" + cookieValue;
			},
	
			setMinutes: function setMinutes(cookieName, expireMinutes, cookieValue, domain, secure) {
				var expireDate = new Date();
				cookieValue = cookieValue || 1;
				domain = domain || settings.domain;
				expireDate.setTime(expireDate.getTime() + 30 * 1000 * 2 * expireMinutes);
				//expireDate.setDate(expireDate.getDate() + expireDays);
				var cookieValue = escape(cookieValue) + (expireMinutes == null ? "" : "; path=/; expires=" + expireDate.toUTCString());
				document.cookie = cookieName + "=" + cookieValue;
			},
			remove: function remove(cookieName, path, domain, secure) {
				document.cookie = escape(cookieName) + "=null; EXPIRES=" + new Date(0).toGMTString() + (path ? "; PATH=" + path : "") + (domain ? "; DOMAIN=" + domain : "") + (secure ? "; SECURE" : "");
			}
		},
	
		keyCodeMap: {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			esc: 27,
			enter: 13,
			space: 32,
			cmd: 91,
			alt: 18,
			ctrl: 17,
			shift: 16,
			right_cmd: 93,
			bckspc: 8
		},
	
		getCuid: function getCuid() {
			return Math.random().toString().substring(2, 7);
		},
	
		screenSize: function screenSize(size) {
			var sizes = {
				"xsScreen": 567,
				"sScreen": 768,
				"mScreen": 1024,
				"lScreen": 1152,
				"xlScreen": 1280,
				"xxlScreen": 1440,
				"xxxlScreen": 1680
			};
			return sizes[size];
		}
	
	};
	
	exports.default = Utils;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _view = __webpack_require__(1);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _utils = __webpack_require__(3);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var DOM = {
	
		elementProxy: function elementProxy(el) {
			if (el instanceof _view2.default) {
				return el.el;
			} else if (el instanceof HTMLElement || !el.length) {
				return el;
			} else if (el instanceof NodeList) {
				return el[0];
			} else {
				throw new Error("Element neither View, HTMLElement nor NodeList. el: " + el);
			}
		},
	
		listProxy: function listProxy(el) {
			if (el instanceof _view2.default) {
				return [el.el];
			} else if (el instanceof NodeList) {
				return el;
			} else if (el instanceof HTMLElement || !el.length) {
				return [el];
			} else {
				throw new Error("Element neither View, HTMLElement nor NodeList. el: " + el);
			}
		},
		/*
	  * DOM methods - common jQuery functions with vanilla JS
	  */
	
		find: function find(arg0, arg1) {
			var result;
			if (typeof arg1 == "undefined") {
				result = document.querySelectorAll(arg0);
			} else {
				result = arg0.querySelectorAll(arg1);
			}
			return result;
		},
	
		closest: function closest(el, query) {
	
			var searchOrigin = el,
			    result,
			    compareFunction,
			    strippedQuery;
	
			if (searchOrigin instanceof _view2.default) searchOrigin = searchOrigin.el;else searchOrigin = this.elementProxy(searchOrigin);
	
			if (query.indexOf('.') > -1) {
				strippedQuery = query.split('.')[1];
				compareFunction = function compareFunction(_el) {
					return typeof _el.className == "string" ? _el.className.indexOf(strippedQuery) > -1 : null;
				};
			} else if (query.indexOf('#') > -1) {
				strippedQuery = query.split('#')[1];
				compareFunction = function compareFunction(_el) {
					return _el.id ? _el.id === strippedQuery : null;
				};
			} else {
				strippedQuery = query;
				compareFunction = function compareFunction(_el) {
					return _el.tagName ? _el.tagName.toLowerCase() === strippedQuery : null;
				};
			}
	
			result = closestRecursion(searchOrigin, compareFunction);
	
			function closestRecursion(el, fn) {
				if (!(el instanceof Element)) return false;
				return el && (fn(el) ? el : closestRecursion(el.parentNode, fn));
			}
	
			return result;
		},
	
		append: function append(el, child) {
			var element = this.elementProxy(el);
			_log2.default.fn("DOM append", element, child);
			element.appendChild(child);
		},
	
		remove: function remove(el) {
			var element = this.elementProxy(el);
			var parent = element.parentNode;
			try {
				parent.removeChild(element);
			} catch (e) {}
		},
	
		hasClass: function hasClass(el, className) {
			var element = this.elementProxy(el);
			if (className.length === 0) return false;
			if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
		},
	
		addClass: function addClass(el, className) {
			var elements = this.listProxy(el);
			[].concat(_toConsumableArray(elements)).map(function (element) {
				if (className.length === 0) return false;
				if (element.classList) element.classList.add(className);else element.className += ' ' + className;
			});
		},
	
		removeClass: function removeClass(el, className) {
			var elements = this.listProxy(el);
			[].concat(_toConsumableArray(elements)).map(function (element) {
				if (className.length === 0) return false;
				if (element.classList) return element.classList.remove(className);else return element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			});
		},
	
		toggleClass: function toggleClass(el, className, test) {
			var _this = this;
	
			if (className.length === 0) return false;
	
			var elements = this.listProxy(el);
			[].concat(_toConsumableArray(elements)).map(function (element) {
				if (typeof test != "undefined") {
					if (test) _this.addClass(element, className);else _this.removeClass(element, className);
				} else {
					if (element.classList) {
						element.classList.toggle(className);
					} else {
						var classes = element.className.split(' ');
						var existingIndex = classes.indexOf(className);
	
						if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);
	
						element.className = classes.join(' ');
					}
				}
			});
		}
	};
	exports.default = DOM;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var emmetUtils = {
	
		'#': function _(id) {
			this.id = id;
		},
		'.': function _(cls) {
			var list = this.getAttribute('class') || '';
			list = list + (list ? ' ' : '') + cls;
			if (list.length) {
				this.setAttribute('class', list);
			}
		},
		'[': function _(attrs) {
			attrs = attrs.substr(0, attrs.length - 1).match(/(?:[^\s"]+|"[^"]*")+/g);
			for (var i = 0, m = attrs.length; i < m; i++) {
				var attr = attrs[i].split('=');
				this.setAttribute(attr[0], (attr[1] || '').replace(/"/g, ''));
			}
		},
		'>': function _(tag) {
			if (tag) {
				var el = document.createElement(tag);
				this.appendChild(el);
				return el;
			}
			return this;
		},
		'+': function _(tag, root) {
			return emmetUtils['>'].call(this.parentNode || root, tag);
		},
		'*': function _(count) {
			var parent = this.parentNode,
			    els = [this];
			for (var i = 1; i < count; i++) {
				els.push(this.cloneNode(true));
				parent.appendChild(els[i]);
			}
			//TODO: numbering for els
			return els;
		},
		'^': function _(tag, root) {
			return emmetUtils['+'].call(this.parentNode || root, tag, root);
		},
		'{': function _(text) {
			this.appendChild(document.createTextNode(text.substr(0, text.length - 1)));
		}
	};
	
	var emmetRE = function emmetRE() {
		var m = Object.keys(emmetUtils).join('');
		var regex = '[a-z' + m + ']{0,1}(?:"[^"]*"|[^"' + m + ']){0,}';
		return new RegExp(regex, 'g');
	};
	
	var emmet = function emmet(code) {
	
		var parts = code.match(emmetRE()).filter(Boolean),
		    root = document.createDocumentFragment(),
		    el = document.createElement(parts[0]);
		root.appendChild(el);
		for (var i = 1, m = parts.length; i < m; i++) {
			var part = parts[i];
			el = emmetUtils[part.charAt(0)].call(el, part.substr(1), root) || el;
		}
		//add.insert(node, root, ref); NEEDS TO BE HANDLED
		return root;
	};
	
	exports.default = emmet;
	
	// (function(document, _) {
	//     "use strict";

	//     var add = _.fn.add;
	//     add.create = function(node, code, ref) {
	//         var parts = code.match(add.emmetRE()).filter(Boolean),
	//             root = document.createDocumentFragment(),
	//             el = document.createElement(parts[0]);
	//         root.appendChild(el);
	//         for (var i=1,m=parts.length; i<m; i++) {
	//             var part = parts[i];
	//             el = add.emmet[part.charAt(0)].call(el, part.substr(1), root) || el;
	//         }
	//         add.insert(node, root, ref);
	//         return el;
	//     };
	//     add.emmetRE = function() {
	//         var m = Object.keys(add.emmet).join('');
	//         var regex = '[a-z'+m+']{0,1}(?:"[^"]*"|[^"'+m+']){0,}';
	//         return new RegExp(regex, 'g');
	//     };
	//     add.emmet = {
	//         '#': function(id) {
	//             this.id = id;
	//         },
	//         '.': function(cls) {
	//             var list = this.getAttribute('class') || '';
	//             list = list + (list ? ' ' : '') + cls;
	//             if (list.length) {
	//                 this.setAttribute('class', list);
	//             }
	//         },
	//         '[': function(attrs) {
	//             attrs = attrs.substr(0, attrs.length-1).match(/(?:[^\s"]+|"[^"]*")+/g);
	//             for (var i=0,m=attrs.length; i<m; i++) {
	//                 var attr = attrs[i].split('=');
	//                 this.setAttribute(attr[0], (attr[1] || '').replace(/"/g, ''));
	//             }
	//         },
	//         '>': function(tag) {
	//             if (tag) {
	//                 var el = document.createElement(tag);
	//                 this.appendChild(el);
	//                 return el;
	//             }
	//             return this;
	//         },
	//         '+': function(tag, root) {
	//             return add.emmet['>'].call(this.parentNode || root, tag);
	//         },
	//         '*': function(count) {
	//             var parent = this.parentNode,
	//                 els = [this];
	//             for (var i=1; i<count; i++) {
	//                 els.push(this.cloneNode(true));
	//                 parent.appendChild(els[i]);
	//             }
	//             //TODO: numbering for els
	//             return els;
	//         },
	//         '^': function(tag, root) {
	//             return add.emmet['+'].call(this.parentNode || root, tag, root);
	//         },
	//         '{': function(text) {
	//             this.appendChild(document.createTextNode(text.substr(0, text.length-1)));
	//         }
	//     };

	// })(document, document.documentElement._);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=kernel.js.map