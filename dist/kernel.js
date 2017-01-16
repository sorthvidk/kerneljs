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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Utils = exports.DOM = exports.View = exports.Log = undefined;
	
	var _view = __webpack_require__(2);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _dom = __webpack_require__(5);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _utils = __webpack_require__(4);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _log = __webpack_require__(3);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Log = _log2.default;
	exports.View = _view2.default;
	exports.DOM = _dom2.default;
	exports.Utils = _utils2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _log = __webpack_require__(3);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _utils = __webpack_require__(4);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _dom = __webpack_require__(5);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _emmet = __webpack_require__(6);
	
	var _emmet2 = _interopRequireDefault(_emmet);
	
	var _event = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * $0 is the standard sorthvid content container class. All parameters are wrapped in ES6 object syntax.
	 * @param {Element} el The associated DOMelement OR a string shorthand for generating an element
	 * @param {String} content Optional string HTML content to be injected into a generated element
	 * @param {Object} events A json object containing the events for the instance
	 * @param {String} displayName A huma readable name for the View
	 * @param {Object} data A json object containing text strings to be added to markup with data attributes data-text=key
	 * @param {String} mount if a mount is provided the view automatically mount to the given point
	 */
	var View = function () {
		function View(_ref) {
			var _ref$el = _ref.el,
			    el = _ref$el === undefined ? null : _ref$el,
			    _ref$content = _ref.content,
			    content = _ref$content === undefined ? null : _ref$content,
			    _ref$events = _ref.events,
			    events = _ref$events === undefined ? null : _ref$events,
			    _ref$displayName = _ref.displayName,
			    displayName = _ref$displayName === undefined ? 'View' : _ref$displayName,
			    _ref$data = _ref.data,
			    data = _ref$data === undefined ? null : _ref$data,
			    _ref$mount = _ref.mount,
			    mount = _ref$mount === undefined ? null : _ref$mount;
	
			_classCallCheck(this, View);
	
			//class constructor
			this.instanceId = _utils2.default.getCuid();
			this.initUpdate = false;
			this.events = events;
			this.data = data;
			this.mountPoint = mount;
	
			if (typeof el == "string") {
				this.rootEl = (0, _emmet2.default)(el);
				this.el = this.rootEl.childNodes[0];
			} else if (el instanceof NodeList && el.length === 0) {
				throw new Error("View el is empty NodeList!");
			} else {
				this.el = _dom2.default.elementProxy(el);
			}
			this.eventListeners = [];
			this.delegateEvents();
			this.update();
			if (this.mountPoint) {
				this.render();
			}
		}
	
		/**
	 * delegating HTML events
	 */
	
	
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
						elements = [_this.el];
					}
	
					[].concat(_toConsumableArray(elements)).map(function (element) {
						_this.eventListeners.push({ element: element, eventName: eventName, eventHandler: eventHandler });
						_utils2.default.on(element, eventName, eventHandler.bind(_this));
					});
				};
	
				for (var prop in this.events) {
					_loop(prop);
				}
			}
	
			/**
	  * A "public" function, updates all data-text data attributes
	  */
	
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;
	
				if (!this.data) return;
				Object.keys(this.data).forEach(function (item) {
					var el = _dom2.default.find(_this2.el.parentNode, '[data-text=' + item + ']')[0];
					if (el && _this2.data[item]) {
						var textNode = null;
						_utils2.default.each(el.childNodes, function (childNode) {
							if (childNode.nodeType === 3) {
								textNode = { exist: childNode.nodeType === 3, el: childNode };
							}
						});
						if (!textNode) {
							el.insertBefore(document.createTextNode(_this2.data[item]), el.firstChild);
						} else if (textNode && textNode.exist) {
							textNode.el.textContent = _this2.data[item];
						} else {
							throw new Error("Can't update view! somethings wrong in selecting textNodes!");
						}
					}
				});
				View.emitter.trigger('view:update', this);
			}
	
			/**
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
	
			/**
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
	  * @param {String} mountPoint string containing a valid class or id selector
	  */
	
		}, {
			key: 'render',
			value: function render() {
				var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
				if (mountPoint) this.mountPoint = mountPoint;
				if (!this.visible) {
					if (this.mountPoint) {
						_dom2.default.append(_dom2.default.find(this.mountPoint), this.el);
						this.visible = true;
					} else throw new Error("Can't render! No mountpoint found!");
				}
				return this;
			}
			/**
	  * A "public" function, which append a given elem/docFragtion into this.el
	  */
	
		}, {
			key: 'append',
			value: function append(elem) {
				_dom2.default.append(this.el, elem);
			}
	
			/**
	  * Wrappers for DOM manipulation methods always using this.el as the origin
	  */
	
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
		}], [{
			key: 'emitter',
			get: function get() {
				return _event.EventEmitter;
			}
		}]);
	
		return View;
	}();
	
	exports.default = View;

/***/ },
/* 3 */
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
	 * @parm {Function} db - "debug", used for signifying, that the logged text is a general debugging statement
	 * @parm {Function} dt - "data", used for signifying, that the logged text is raw data
	 * @parm {Function} fn - "function", used for signifying, that the text is logged when a function is invoked
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _log = __webpack_require__(3);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _dom = __webpack_require__(5);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _view = __webpack_require__(2);
	
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
	 */
		each: function each(target, fn) {
			var elements;
			if (!target || target.length === 0) return undefined;
			if (!fn) return target;
			if (typeof target == "string") {
				elements = _dom2.default.find(target);
			} else if (target.length || target instanceof NodeList) {
				elements = target;
			} else if (target instanceof Element) {
				elements = [target];
			}
			if (elements.length === 0) {
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
				elem.addEventListener(eventName, eventHandler, false);
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
			if (elem.removeEventListener) {
				elem.removeEventListener(eventName, eventHandler, false);
			} else {
				elem.detachEvent('on' + eventName, eventHandler);
			}
		},
	
		/**
	  * trigger custom events
	  * @param {Element} el - the DOMelement in question
	  * @param {String} type - type the custom event name
	  * @param {Object} details - details object
	  */
		trigger: function trigger(el, type, detail) {
			var event = new CustomEvent(type, { 'detail': detail ? detail : {} });
			el.dispatchEvent(event);
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
				//Log.db(currentTime,duration)
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
				var _ref$cookieName = _ref.cookieName,
				    cookieName = _ref$cookieName === undefined ? null : _ref$cookieName,
				    _ref$cookieValue = _ref.cookieValue,
				    cookieValue = _ref$cookieValue === undefined ? null : _ref$cookieValue,
				    _ref$expireDays = _ref.expireDays,
				    expireDays = _ref$expireDays === undefined ? 30 : _ref$expireDays;
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _log = __webpack_require__(3);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _view = __webpack_require__(2);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _utils = __webpack_require__(4);
	
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
			_log2.default.fn("DOM append", element.childNodes, child.childNodes);
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
/* 6 */
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
		//return Array.prototype.slice.call(root.childNodes)[0];
		return root;
	};
	exports.default = emmet;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventEmitter = undefined;
	
	var _es6EventEmitter = __webpack_require__(8);
	
	var _es6EventEmitter2 = _interopRequireDefault(_es6EventEmitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EventEmitter = exports.EventEmitter = new _es6EventEmitter2.default(); //https://www.npmjs.com/package/es6-event-emitter

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(9);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(10);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _weakMap = __webpack_require__(29);
	
	var _weakMap2 = _interopRequireDefault(_weakMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = new _weakMap2.default();
	
	var Emitter = function () {
		function Emitter() {
			(0, _classCallCheck3.default)(this, Emitter);
	
			emitter.set(this, {
				events: {}
			});
	
			this.eventLength = 0;
		}
	
		(0, _createClass3.default)(Emitter, [{
			key: 'on',
			value: function on(event, cb) {
				if (typeof cb === 'undefined') {
					throw new Error('You must provide a callback method.');
				}
	
				if (typeof cb !== 'function') {
					throw new TypeError('Listener must be a function');
				}
	
				this.events[event] = this.events[event] || [];
				this.events[event].push(cb);
	
				this.eventLength++;
	
				return this;
			}
		}, {
			key: 'off',
			value: function off(event, cb) {
				if (typeof cb === 'undefined') {
					throw new Error('You must provide a callback method.');
				}
	
				if (typeof cb !== 'function') {
					throw new TypeError('Listener must be a function');
				}
	
				if (typeof this.events[event] === 'undefined') {
					throw new Error('Event not found - the event you provided is: ' + event);
				}
	
				var listeners = this.events[event];
	
				listeners.forEach(function (v, i) {
					if (v === cb) {
						listeners.splice(i, 1);
					}
				});
	
				if (listeners.length === 0) {
					delete this.events[event];
	
					this.eventLength--;
				}
	
				return this;
			}
		}, {
			key: 'trigger',
			value: function trigger(event) {
				var _this = this;
	
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}
	
				if (typeof event === 'undefined') {
					throw new Error('You must provide an event to trigger.');
				}
	
				var listeners = this.events[event];
	
				if (typeof listeners !== 'undefined') {
					listeners = listeners.slice(0);
	
					listeners.forEach(function (v) {
						v.apply(_this, args);
					});
				}
	
				return this;
			}
		}, {
			key: 'events',
			get: function get() {
				return emitter.get(this).events;
			}
		}]);
		return Emitter;
	}();
	
	exports.default = Emitter;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(11);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', {defineProperty: __webpack_require__(20).f});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(63);
	module.exports = __webpack_require__(16).WeakMap;

/***/ },
/* 31 */
/***/ function(module, exports) {



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	var global        = __webpack_require__(15)
	  , hide          = __webpack_require__(19)
	  , Iterators     = __webpack_require__(36)
	  , TO_STRING_TAG = __webpack_require__(60)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(34)
	  , step             = __webpack_require__(35)
	  , Iterators        = __webpack_require__(36)
	  , toIObject        = __webpack_require__(37);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(41)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38)
	  , defined = __webpack_require__(40);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(42)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(43)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(44)
	  , Iterators      = __webpack_require__(36)
	  , $iterCreate    = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(59)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(60)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 44 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(59)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(60)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(21)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(57)
	  , IE_PROTO    = __webpack_require__(54)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(58).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(48);
	
	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(57);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(44)
	  , toIObject    = __webpack_require__(37)
	  , arrayIndexOf = __webpack_require__(50)(false)
	  , IE_PROTO     = __webpack_require__(54)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37)
	  , toLength  = __webpack_require__(51)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(52)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(55)('keys')
	  , uid    = __webpack_require__(56);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f
	  , has = __webpack_require__(44)
	  , TAG = __webpack_require__(60)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(55)('wks')
	  , uid        = __webpack_require__(56)
	  , Symbol     = __webpack_require__(15).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(44)
	  , toObject    = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(54)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(40);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(64)(0)
	  , redefine     = __webpack_require__(43)
	  , meta         = __webpack_require__(68)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(72)
	  , isObject     = __webpack_require__(22)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(80)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(17)
	  , IObject  = __webpack_require__(38)
	  , toObject = __webpack_require__(62)
	  , toLength = __webpack_require__(51)
	  , asc      = __webpack_require__(65);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(66);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , isArray  = __webpack_require__(67)
	  , SPECIES  = __webpack_require__(60)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(39);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(56)('meta')
	  , isObject = __webpack_require__(22)
	  , has      = __webpack_require__(44)
	  , setDesc  = __webpack_require__(20).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(25)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(70)
	  , pIE      = __webpack_require__(71)
	  , toObject = __webpack_require__(62)
	  , IObject  = __webpack_require__(38)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(25)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(73)
	  , getWeak           = __webpack_require__(68).getWeak
	  , anObject          = __webpack_require__(21)
	  , isObject          = __webpack_require__(22)
	  , anInstance        = __webpack_require__(74)
	  , forOf             = __webpack_require__(75)
	  , createArrayMethod = __webpack_require__(64)
	  , $has              = __webpack_require__(44)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(19);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(17)
	  , call        = __webpack_require__(76)
	  , isArrayIter = __webpack_require__(77)
	  , anObject    = __webpack_require__(21)
	  , toLength    = __webpack_require__(51)
	  , getIterFn   = __webpack_require__(78)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(21);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(36)
	  , ITERATOR   = __webpack_require__(60)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(79)
	  , ITERATOR  = __webpack_require__(60)('iterator')
	  , Iterators = __webpack_require__(36);
	module.exports = __webpack_require__(16).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(39)
	  , TAG = __webpack_require__(60)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(15)
	  , $export        = __webpack_require__(14)
	  , meta           = __webpack_require__(68)
	  , fails          = __webpack_require__(25)
	  , hide           = __webpack_require__(19)
	  , redefineAll    = __webpack_require__(73)
	  , forOf          = __webpack_require__(75)
	  , anInstance     = __webpack_require__(74)
	  , isObject       = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(59)
	  , dP             = __webpack_require__(20).f
	  , each           = __webpack_require__(64)(0)
	  , DESCRIPTORS    = __webpack_require__(24);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=kernel.js.map