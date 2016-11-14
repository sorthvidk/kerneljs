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
	
	var _es6view = __webpack_require__(1);
	
	var _es6view2 = _interopRequireDefault(_es6view);
	
	var _es6dom = __webpack_require__(4);
	
	var _es6dom2 = _interopRequireDefault(_es6dom);
	
	var _es6utils = __webpack_require__(3);
	
	var _es6utils2 = _interopRequireDefault(_es6utils);
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Kernel = {
		View: _es6view2.default,
		Dom: _es6dom2.default,
		Utils: _es6utils2.default
	};
	
	exports.default = Kernel;
	
	//exports.View = require('./src/view');
	//exports.utils = require('./src/utils');
	//exports.Log = require('./src/log');
	//exports._ = require('underscore');
	
	
	// !function (root, factory){
	// 	'use strict';
	// 	if (typeof exports === 'object') {
	// 		// CommonJS module
	// 		module.exports = factory;
	// 	} else if (typeof define === 'function' && define.amd) {
	// 		// AMD. Register as an anonymous module.
	// 		define(function ()
	// 		{
	// 			return factory;
	// 		});
	// 	}
	// }(window, {
	// 	View: View,
	// 	Utils: Utils
	// });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _es6utils = __webpack_require__(3);
	
	var _es6utils2 = _interopRequireDefault(_es6utils);
	
	var _es6dom = __webpack_require__(4);
	
	var _es6dom2 = _interopRequireDefault(_es6dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * View is the standard sorthvid content container class
	 * @param el The associated DOMelement
	 * @param settings The instance property values parsed into the constructor
	 * @param events A json object containing the events for the instance
	 */
	
	//var props = { className = '', displayName = 'New View instance', el = null, events = null };
	
	
	var View = function () {
		function View(_ref) {
			var _ref$className = _ref.className,
			    className = _ref$className === undefined ? '' : _ref$className,
			    _ref$el = _ref.el,
			    el = _ref$el === undefined ? null : _ref$el,
			    _ref$content = _ref.content,
			    content = _ref$content === undefined ? null : _ref$content,
			    _ref$events = _ref.events,
			    events = _ref$events === undefined ? null : _ref$events;
	
			_classCallCheck(this, View);
	
			//class constructor
	
			this.instanceId = _es6utils2.default.getCuid();
			this.events = events;
	
			if (el && typeof el == 'string') {
				this.el = _es6dom2.default.find(el)[0];
			} else if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) == 'object') {
				this.el = el;
			} else {
				var select = className.length > 0 ? 'div' + '.' + className : 'div';
				this.el = _es6utils2.default.createEl(select);
				if (content) {
					this.el.innerHTML = content;
				}
			}
			//Object.assign(this.el, DOM);
	
			this.delegateEvents();
		}
	
		_createClass(View, [{
			key: 'delegateEvents',
			value: function delegateEvents() {
				var _this = this;
	
				var _loop = function _loop(prop) {
					var eventSplit = prop.split(' ');
					var eventName = eventSplit[0];
	
					// is the target specified with a selector, or is this.el implied?
					var target = eventSplit.length > 1 ? eventSplit[1] : _this.el;
	
					var eventHandler = _this[_this.events[prop]];
	
					// is the target already an element or a selector?
					var elements = void 0;
					if (typeof target == "string") {
						elements = _es6dom2.default.find(_this.el, target);
					} else if (target.length && target != _this.el) {
						elements = _es6dom2.default.find(_this.el, target[0]);
					} else {
						elements = [target];
					}
	
					elements.forEach(function (a) {
						_this.on(a, eventName, eventHandler.bind(_this));
					});
				};
	
				for (var prop in this.events) {
					_loop(prop);
				}
			}
	
			/*
	  * Attaches an event listener
	  * @param {Element} elem - the associated DOMelement
	  * @param {String} eventName - the event string
	  * @param {Function} eventHandler - the handler function
	  */
	
		}, {
			key: 'on',
			value: function on(elem, eventName, eventHandler) {
				_es6utils2.default.on(elem, eventName, eventHandler);
			}
	
			/*
	  * Removes an event listener
	  * @param {Element} elem - the associated DOMelement
	  * @param {String} eventName - the event string
	  * @param {Function} eventHandler - the handler function
	  */
	
		}, {
			key: 'off',
			value: function off(elem, eventName, eventHandler) {
				_es6utils2.default.off(elem, eventName, eventHandler);
			}
	
			/*
	  * A "public" function, which removes the view's el from the DOM
	  * Sets the View's visible property to false
	  */
	
		}, {
			key: 'remove',
			value: function remove() {
				this.visible = false;
				_es6dom2.default.remove(this.el);
			}
	
			/**
	  * A "public" function, which re-inserts the view's el into the DOM
	  * Sets the View's visible property to true
	  **/
	
		}, {
			key: 'render',
			value: function render() {
				if (!this.visible) {
					this.parent.appendChild(this.el);
					this.visible = true;
				}
				return this;
			}
		}, {
			key: 'append',
			value: function append(elem) {
				_es6dom2.default.append(this.el, elem);
			}
	
			/**
	   * Wrappers for Utils DOM manipulation methods always using this.el as the origin
	   **/
	
		}, {
			key: 'find',
			value: function find(selector) {
				var result = _es6dom2.default.find(this.el, selector);
				if (result instanceof NodeList && result.length == 1) {
					return result[0];
				} else {
					return result;
				}
			}
		}, {
			key: 'closestByClass',
			value: function closestByClass(className) {
				return _es6dom2.default.closestByClass(this.el, className);
			}
		}, {
			key: 'addClass',
			value: function addClass(className) {
				_es6dom2.default.addClass(this.el, className);
			}
		}, {
			key: 'hasClass',
			value: function hasClass(className) {
				return _es6dom2.default.hasClass(this.el, className);
			}
		}, {
			key: 'removeClass',
			value: function removeClass(className) {
				_es6dom2.default.removeClass(this.el, className);
			}
		}, {
			key: 'toggleClass',
			value: function toggleClass(className, test) {
				_es6dom2.default.toggleClass(this.el, className, test);
			}
		}]);
	
		return View;
	}();
	
	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _log,
	    type = {
		disabled: "disabled",
		debug: "debugging",
		func: "function",
		data: "raw data",
		error: "!ERROR!"
	},
	    _db,
	    _fn,
	    _dt,
	    _er;
	
	var allowedTypes = [type.debug, type.func, type.data, type.error];
	
	/**
	 * Logging wrapper for debugging
	 * @param {args} - A list of parameters, where the first parameter can be a type as specified in the "type" object 
	 */
	
	_log = function (undefined) {
		var Log = Error;
	
		Log.prototype.write = function (args) {
			if (window.nolog) return false;
	
			var typeFound = false;
			for (var i = 0; i < allowedTypes.length; i++) {
				if (allowedTypes[i] === args[0]) typeFound = true;
			}
	
			if (typeFound) args[0] = "[" + args[0] + "] || ";
	
			var suffix = {
				'@': this.lineNumber ? this.fileName + ':' + this.lineNumber + ':1' : extractLineNumberFromStack(this.stack)
			};
	
			args = args.concat([suffix]);
	
			if (console) {
				if (console.log) {
					if (console.log.apply) {
						console.log.apply(console, args);
					} else {
						console.log(args);
					} // nicer display in some browsers
				}
			}
		};
	
		var extractLineNumberFromStack = function extractLineNumberFromStack(stack) {
			if (!stack || stack == '') {
				return false;
			}
			var line = stack.split('\n')[2];
			if (!line) return false;
			if (!line.indexOf) return false;
			line = line.indexOf(' (') >= 0 ? line.split(' (')[1].substring(0, line.length - 1) : line.split('at ')[1];
			return line;
		};
	
		return function (params) {
			Log().write(Array.prototype.slice.call(arguments, 0)); // turn into proper array
		};
	}();
	
	/**
	 * Log is the standard sorthvid log wrapper. It exposes four methods:
	 * db - "debug", used for signifying, that the logged text is a general debugging statement
	 * dt - "data", used for signifying, that the logged text is raw data
	 * fn - "function", used for signifying, that the text is logged when a function is invoked
	 * log - the full function where type can be specified manually or left out
	 */
	
	_db = function _db(args) {
		_log(type.debug, Array.prototype.slice.call(arguments, 0));
	};
	_dt = function _dt(args) {
		_log(type.data, Array.prototype.slice.call(arguments, 0));
	};
	_fn = function _fn(args) {
		_log(type.func, Array.prototype.slice.call(arguments, 0));
	};
	_er = function _er(args) {
		_log(type.error, Array.prototype.slice.call(arguments, 0));
	};
	
	module.exports = { db: _db, dt: _dt, fn: _fn, er: _er, log: _log };

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Utils is a collection of sorthvid auxilliary methods
	 */
	var Utils = {
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
		closestByClass: function closestByClass(el, className) {
			return this.closest(el, function (_el) {
				return typeof _el.className == "string" ? _el.className.indexOf(className) > -1 : null;
			});
		},
		closestByTag: function closestByTag(el, tagName) {
			return this.closest(el, function (_el) {
				return _el.tagName ? _el.tagName === tagName : null;
			});
		},
		closestByID: function closestByID(el, id) {
			return this.closest(el, function (_el) {
				return _el.id ? _el.id === id : null;
			});
		},
		closest: function closest(el, fn) {
			if (!(el instanceof Element)) return false;
			return el && (fn(el) ? el : this.closest(el.parentNode, fn));
		},
		append: function append(el, child) {
			var elem = el;
	
			if (typeof el == "string") {
				elem = this.find(el);
			}
			if (elem.length) {
				elem = elem[0];
			}
			elem.appendChild(child);
		},
	
		remove: function remove(el) {
			var parent = el.parentNode;
			try {
				parent.removeChild(el);
			} catch (e) {}
		},
	
		hasClass: function hasClass(el, className) {
			if (className.length === 0) return false;
			if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		},
	
		addClass: function addClass(el, className) {
			if (className.length === 0) return false;
			if (el.classList) el.classList.add(className);else el.className += ' ' + className;
		},
	
		removeClass: function removeClass(el, className) {
			if (className.length === 0) return false;
			if (el.classList) return el.classList.remove(className);else return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		},
	
		toggleClass: function toggleClass(el, className, test) {
			if (className.length === 0) return false;
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
		on: function on(elem, eventName, eventHandler) {
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
		off: function off(elem, eventName, eventHandler) {
			if (elem.removeEventListener) elem.removeEventListener(eventName, eventHandler);else elem.detachEvent('on' + eventName, eventHandler);
		},
	
		/**
	  * Checks if the element is within the viewport
	  * @param {Element} el - the DOMelement in question
	  */
		isElementInViewport: function isElementInViewport(el) {
			if (!el) {
				return;
			}
			var rect = el.getBoundingClientRect();
			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			;
		},
	
		/*
	  * single element: createEl("div.class")
	  * multiple elements: createEl(["div.class", "div.class"])
	  */
		createEl: function createEl(sel) {
			var elem;
			if ((typeof sel === "undefined" ? "undefined" : _typeof(sel)) === "object") {
				for (var i = 0; i < sel.length; i++) {
					if (elem) {
						if (typeof sel[i] === "string") {
							elem.appendChild(build(sel[i]));
						} else if (_typeof(sel[i]) === "object") {
							elem.appendChild(sel[i]);
						}
					} else {
						elem = this.buildEl(sel[i]);
					}
				}
			} else if ((typeof sel === "undefined" ? "undefined" : _typeof(sel)) === "object") {} else {
				elem = this.buildEl(sel);
			}
	
			return elem;
		},
	
		buildEl: function buildEl(s) {
			var selector = s.split(".");
			var el = document.createElement(selector[0]);
			var cl = selector[1] ? selector[1].split(" ") : 0;
			if (cl.length > 0) {
				for (var i = 0; i < cl.length; i++) {
					this.addClass(el, cl[i]);
				}
			}
			return el;
		},
	
		/**
	  * Vanilla way of sniffing accordion content height
	  * @param {Element} elem - the DOMelement in question
	  * @param {String} className - the class to add, when the accordion is ready
	  */
		getAccordionHeight: function getAccordionHeight(elem, className) {
			var height;
			this.removeClass(elem, className);
			this.addClass(elem, "is--calculation-height");
			height = elem.getClientRects() ? elem.getClientRects()[0].height : elem.offsetHeight;
			this.removeClass(elem, "is--calculation-height");
			this.addClass(elem, className);
			return height;
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
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var DOM = {
	
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
		closestByClass: function closestByClass(el, className) {
			return this.closest(el, function (_el) {
				return typeof _el.className == "string" ? _el.className.indexOf(className) > -1 : null;
			});
		},
		closestByTag: function closestByTag(el, tagName) {
			return this.closest(el, function (_el) {
				return _el.tagName ? _el.tagName === tagName : null;
			});
		},
		closestByID: function closestByID(el, id) {
			return this.closest(el, function (_el) {
				return _el.id ? _el.id === id : null;
			});
		},
		closest: function closest(el, fn) {
			if (!(el instanceof Element)) return false;
			return el && (fn(el) ? el : this.closest(el.parentNode, fn));
		},
		append: function append(el, child) {
			var elem = el;
	
			if (typeof el == "string") {
				elem = this.find(el);
			}
			if (elem.length) {
				elem = elem[0];
			}
			elem.appendChild(child);
		},
	
		remove: function remove(el) {
			var parent = el.parentNode;
			try {
				parent.removeChild(el);
			} catch (e) {}
		},
	
		hasClass: function hasClass(el, className) {
			if (className.length === 0) return false;
			if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		},
	
		addClass: function addClass(el, className) {
			if (className.length === 0) return false;
			if (el.classList) el.classList.add(className);else el.className += ' ' + className;
		},
	
		removeClass: function removeClass(el, className) {
			if (className.length === 0) return false;
			if (el.classList) return el.classList.remove(className);else return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		},
	
		toggleClass: function toggleClass(el, className, test) {
			if (className.length === 0) return false;
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
		}
	};
	exports.default = DOM;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=kernel.js.map