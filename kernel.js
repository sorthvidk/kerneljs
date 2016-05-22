/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var View = __webpack_require__(1);
	var Utils = __webpack_require__(2);

	!function (root, factory) {
		'use strict';

		if (( false ? 'undefined' : _typeof(exports)) === 'object') {
			// CommonJS module
			module.exports = factory;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return factory;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}(window, {
		View: View,
		Utils: Utils
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Generic = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../core/generic\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../core/utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Log = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../core/log\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var View = Generic.extend({

		el: null,
		settings: null,
		events: null,

		constructor: function constructor(settings) {

			this.settings = settings;
			if (settings.el) {
				this.el = settings.el;
			} else if (settings.selector) this.el = Utils.find(settings.selector);else this.el = document.createElement();

			this.initialize();

			this.delegateEvents();
		},

		initialize: function initialize() {},

		delegateEvents: function delegateEvents() {

			for (var prop in this.events) {
				var eventName = prop.split(' ')[0];
				var eventSelector = prop.split(' ').slice(1);
				var eventHandler = this[this.events[prop]];
				this.each(eventSelector, function (elem) {
					this.on(elem, eventName, eventHandler.bind(this));
				}.bind(this));
			}
		},

		// DOM methods

		find: function find(selector) {
			return Utils.find(this.el, selector);
		},

		addClass: function addClass(className) {
			Utils.addClass(this.el, className);
		},

		hasClass: function hasClass(className) {
			return Utils.hasClass(this.el, className);
		},

		removeClass: function removeClass(className) {
			Utils.removeClass(this.el, className);
		},

		toggleClass: function toggleClass(className, test) {
			Utils.toggleClass(this.el, className, test);
		},

		on: function on(elem, eventName, eventHandler) {
			if (elem.addEventListener) {
				elem.addEventListener(eventName, eventHandler);
			} else {
				elem.attachEvent('on' + eventName, function () {
					handler.call(elem);
				});
			}
		},

		off: function off(elem, eventName, eventHandler) {
			if (elem.removeEventListener) elem.removeEventListener(eventName, eventHandler);else elem.detachEvent('on' + eventName, eventHandler);
		},

		each: function each(selector, fn) {
			var elements = Utils.find(this.el, selector);
			for (var i = 0; i < elements.length; i++) {
				fn(elements[i], i);
			}
		}
	});

	module.exports = View;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var Generic = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../core/generic\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Log = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../core/log\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Utils = Generic.extend({

		find: function find() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var result;
			if (typeof arguments[0] === "string") {
				result = document.querySelectorAll(arguments[0]);
			} else {
				result = arguments[0].querySelectorAll(arguments[1]);
			}
			return result;
		},

		hasClass: function hasClass(el, className) {
			if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		},

		addClass: function addClass(el, className) {
			if (el.classList) el.classList.add(className);else el.className += ' ' + className;
		},

		removeClass: function removeClass(el, className) {
			if (el.classList) return el.classList.remove(className);else return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		},

		toggleClass: function toggleClass(el, className, test) {
			if (typeof test != "undefined") {
				if (test) this.addClass(el, className);else this.removeClass(el, className);
			} else {
				if (el.classList) {
					el.classList.toggle(className);
				} else {
					var classes = el.className.split(' ');
					var existingIndex = classes.indexOf(className);

					if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);

					el.className = classes.join(' ');
				}
			}
		},

		isElementInViewport: function isElementInViewport(el) {
			if (!el) {
				return;
			}
			//special bonus for those using jQuery
			if (typeof jQuery === "function" && el instanceof jQuery) {
				el = el[0];
			}
			var rect = el.getBoundingClientRect();
			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			;
		},

		/*
	  * single element: createEl("div.class")
	  * multiple elements: createEl(["div.class", "div.class"])
	  *
	  */
		createEl: function createEl(sel) {
			var elem;
			if ((typeof sel === 'undefined' ? 'undefined' : _typeof(sel)) === "object") {
				for (var i = 0; i < sel.length; i++) {
					if (elem) {
						if (typeof sel[i] === "string") {
							elem.appendChild(build(sel[i]));
						} else if (_typeof(sel[i]) === "object") {
							elem.appendChild(sel[i]);
						}
					} else {
						elem = build(sel[i]);
					}
				}
			} else if ((typeof sel === 'undefined' ? 'undefined' : _typeof(sel)) === "object") {} else {
				elem = build(sel);
			}

			function build(s) {
				var selector = s.split(".");
				var el = document.createElement(selector[0]);
				var cl = selector[1] ? selector[1].split(" ") : 0;
				if (cl.length > 0) {
					for (var i = 0; i < cl.length; i++) {
						$(el).addClass(cl[i]);
					}
				}
				return el;
			}
			return elem;
		},

		getAccordionHeight: function getAccordionHeight(elem, className) {
			var height;
			if (elem instanceof jQuery) {
				elem = elem[0];
			}
			this.removeClass(elem, className);
			this.addClass(elem, "is--calculation-height");
			height = elem.getClientRects() ? elem.getClientRects()[0].height : elem.offsetHeight;
			this.removeClass(elem, "is--calculation-height");
			this.addClass(elem, className);
			return height;
		},

		getUrlParms: function getUrlParms(name, url) {
			var url = url || window.location.search;
			var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			    results = regex.exec(url);
			return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},

		scrollTo: function scrollTo(elem, scrollDuration) {
			var offset = elem.getClientRects()[0],
			    scrollStep = offset.top > window.scrollY ? -window.scrollY / (scrollDuration / 15) : window.scrollY / (scrollDuration / 15),
			    scrollInterval = setInterval(function () {
				if (elem.getClientRects()[0].top > window.innerHeight / 2) {
					window.scrollBy(0, scrollStep);
				} else {
					clearInterval(scrollInterval);
				}
			}, 15);
		},

		cumulativeOffset: function cumulativeOffset(element) {
			if (element instanceof jQuery) {
				element = element[0];
			}
			var top = 0,
			    left = 0;
			do {
				top += element.offsetTop || 0;
				left += element.offsetLeft || 0;
				element = element.offsetParent;
			} while (element);

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
			set: function set(cookieName, expireDays, cookieValue, domain, secure) {
				var expireDate = new Date();
				cookieValue = cookieValue || 1;
				domain = domain || settings.domain;
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
				"sScreen": 567,
				"mScreen": 768,
				"lScreen": 1024,
				"xlScreen": 1200,
				"xxlScreen": 1350,
				"xxxlScreen": 1500,
				"headerTools": 1800
			};
			return sizes[size];
		}
	});

	module.exports = new Utils();

/***/ }
/******/ ]);