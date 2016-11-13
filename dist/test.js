/******/ (function(modules) { // webpackBootstrap
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _kernel = __webpack_require__(8);
	
	var Kernel = _interopRequireWildcard(_kernel);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var View = Kernel.View,
	    Dom = Kernel.Dom;
	//import Log from '../dist/kernel';
	
	//const Kernel = require('../dist/kernel');
	
	//const Utils = Kernel.utils;
	
	console.log();
	
	/**
	* View is the standard sorthvid content container class
	* @param el The associated DOMelement
	* @param settings The instance property values parsed into the constructor
	* @param events A json object containing the events for the instance
	**/
	
	// class Boxes extends View {
	// 	constructor(settings) { // ES6 features Default Parameters
	// 		const defaults = {
	// 			className: 'test'
	// 		}
	// 		super(defaults) //call the parent method with super
	// 		this.name = 'new box dd';
	// 		this.className = 'box class'
	
	// 	}
	
	// 	static defaults() {
	// 		return {
	// 			className: 'test'
	// 		}
	// 	}
	
	// 	get area() { //calculated attribute getter
	// 		return this.calcArea();
	
	// 	}
	// 	static calcArea() {
	// 		return this.height * this.width;
	// 	}
	// }
	
	// let s = new Boxes(5);
	
	// s.sayName(); // => Hi, I am a Square.
	// console.log(s); // => 25
	
	//console.log(new Square().area); // => 100
	
	
	/*
	view:
		delegate events




	*/

/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/******/(function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};
		/******/
		/******/ // The require function
		/******/function __webpack_require__(moduleId) {
			/******/
			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;
			/******/
			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };
			/******/
			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/ // Flag the module as loaded
			/******/module.loaded = true;
			/******/
			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}
		/******/
		/******/
		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;
		/******/
		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;
		/******/
		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "/dist";
		/******/
		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	})(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
	
		var _es6view = __webpack_require__(1);
	
		Object.defineProperty(exports, 'View', {
			enumerable: true,
			get: function get() {
				return _interopRequireDefault(_es6view).default;
			}
		});
	
		var _es6utils = __webpack_require__(6);
	
		Object.defineProperty(exports, 'Utils', {
			enumerable: true,
			get: function get() {
				return _interopRequireDefault(_es6utils).default;
			}
		});
	
		var _log = __webpack_require__(2);
	
		Object.defineProperty(exports, 'Log', {
			enumerable: true,
			get: function get() {
				return _interopRequireDefault(_log).default;
			}
		});
	
		var _es6dom = __webpack_require__(7);
	
		Object.defineProperty(exports, 'Dom', {
			enumerable: true,
			get: function get() {
				return _interopRequireDefault(_es6dom).default;
			}
		});
	
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
	
		/***/
	},
	/* 1 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = undefined;
	
		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();
	
		var _log = __webpack_require__(2);
	
		var _log2 = _interopRequireDefault(_log);
	
		var _utils = __webpack_require__(3);
	
		var _utils2 = _interopRequireDefault(_utils);
	
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
	
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		/**
	  * View is the standard sorthvid content container class
	  * @param el The associated DOMelement
	  * @param settings The instance property values parsed into the constructor
	  * @param events A json object containing the events for the instance
	  */
	
		var View = function () {
			_createClass(View, [{
				key: 'defaultProps',
				value: function defaultProps(props) {
					this.instanceId = _utils2.default.getCuid();
					this.className = props.className ? props.className : '';
					this.name = props.name ? props.name : 'New view instance';
				}
			}]);
	
			function View(settings, defaults) {
				_classCallCheck(this, View);
	
				//class constructor
				this.defaultProps(defaults);
				console.log(settings, defaults);
			}
	
			_createClass(View, [{
				key: 'sayName',
				value: function sayName() {
					//class method
					console.log('Hi, I am a', this.name + '.');
				}
			}]);
	
			return View;
		}();
	
		exports.default = View;
	
		// var View = Generic.extend({
	
		//   	viewName:'View',
		//   	className:'',
		//   	el:null,
		//   	settings:null,
		//   	events:null,
		//   	parent:null,
		//   	visible:true,
		//   	instanceId:true,
	
		// 	/**
		// 	 * @param settings The View parameters. Must contain an "el" DOMelement or a "selector" string, so a DOMelement can be associated
		// 	 * @constructor
		// 	 */
		// 	constructor: function(settings) {
		// 		this.instanceId = Utils.getCuid();
		// 		this.settings = settings || {};
		// 		if ( this.settings.el ) {
		// 			this.el = settings.el;
		// 		}
		// 		else if ( this.settings.selector ) {
		// 			this.el = Utils.find(settings.selector);
		// 		}
		// 		else {
		// 			var selector = this.className.length > 0 ? 'div'+'.'+this.className : 'div' ;
		// 			this.el = Utils.createEl(selector);
		// 			if ( this.settings.content ) {
		// 				this.el.innerHTML = settings.content;
		// 			}
		// 		}
	
	
		// 		this.initialize();
	
		// 		this.delegateEvents();
		// 	},
	
		// 	initialize: function() {
		// 	},
	
		// 	/**
		// 	 * A "private" function, which attaches event listeners to triggers specified in "events" field
		// 	 **/
		// 	delegateEvents:function() {
		// 		//Log.fn(this.viewName+" | delegateEvents")
	
		// 		for (var prop in this.events) {
		// 			var eventSplit = prop.split(' ');
		// 			var eventName = eventSplit[0];
	
		// 			// is the target specified with a selector, or is this.el implied?
		// 			var target = eventSplit.length > 1 ? prop.split(' ').slice(1) : this.el;
	
		// 			var eventHandler = this[this.events[prop]];
	
		// 			// is the target already an element or a selector?
		// 			var elements;
		// 			if ( typeof target == "string" ){
		// 				elements = Utils.find(this.el, target);
		// 			}
		// 			else if ( target.length ) {
		// 				elements = Utils.find(this.el, target[0]);
		// 			}
		// 			else {
		// 				elements = [target];
		// 			}
	
		// 			var elementCount = elements.length;
		// 			for ( var i=0; i<elementCount; i++) {
		// 				this.on(elements[i], eventName, eventHandler.bind(this));
		// 			}
		// 		}
		// 	},
	
		// 	*
		// 	 * Attaches an event listener
		// 	 * @param {Element} elem - the associated DOMelement
		// 	 * @param {String} eventName - the event string
		// 	 * @param {Function} eventHandler - the handler function
	
		// 	on: function(elem, eventName, eventHandler) {
		// 		Utils.on(elem, eventName, eventHandler);
		// 	},
	
		// 	/**
		// 	 * Removes an event listener
		// 	 * @param {Element} elem - the associated DOMelement
		// 	 * @param {String} eventName - the event string
		// 	 * @param {Function} eventHandler - the handler function
		// 	 */
		// 	off: function(elem, eventName, eventHandler) {
		// 		Utils.off(elem, eventName, eventHandler);
		// 	},
	
	
		// 	/**
		// 	 * A "public" function, which removes the view's el from the DOM
		// 	 * Sets the View's visible property to false
		// 	 **/
		// 	remove: function() {
		// 		this.visible = false;
		// 		Utils.remove(this.el);
		// 	},
	
		// 	/**
		// 	 * A "public" function, which re-inserts the view's el into the DOM
		// 	 * Sets the View's visible property to true
		// 	 **/
		// 	render: function() {
		// 		if ( !this.visible ) {
		// 			this.parent.appendChild(el);
		// 			this.visible = true;
		// 		}
		// 		return this;
		// 	},
	
		// 	append:function(elem) {
		// 		Utils.append(this.el, elem);
		// 	},
	
		// 	/**
		// 	 * Wrappers for Utils DOM manipulation methods always using this.el as the origin
		// 	 **/
		//   	find: function(selector){
		//   		var result = Utils.find(this.el, selector);
		//   		if ( result instanceof NodeList && result.length == 1) {
		// 			return result[0];
		// 		}
		// 		else {
		// 			return result;
		// 		}
		// 	},
		// 	closestByClass: function(className){
		// 		return Utils.closestByClass(this.el, className);
		// 	},
		// 	addClass: function(className) {
		// 		Utils.addClass(this.el, className);
		// 	},
	
		// 	hasClass: function(className) {
		// 		return Utils.hasClass(this.el, className);
		// 	},
	
		// 	removeClass: function(className) {
		// 		Utils.removeClass(this.el, className);
		// 	},
	
		// 	toggleClass: function(className, test) {
		// 		Utils.toggleClass(this.el, className, test);
		// 	}
		// });
	
		module.exports = View;
	
		/***/
	},
	/* 2 */
	/***/function (module, exports) {
	
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
	
		/***/
	},
	/* 3 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};
	
		var Generic = __webpack_require__(4),
		    Log = __webpack_require__(2);
	
		/**
	  * Utils is a collection of sorthvid auxilliary methods
	  */
		var Utils = Generic.extend({
	
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
				if ((typeof sel === 'undefined' ? 'undefined' : _typeof(sel)) === "object") {
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
				} else if ((typeof sel === 'undefined' ? 'undefined' : _typeof(sel)) === "object") {} else {
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
		});
	
		module.exports = new Utils();
	
		/***/
	},
	/* 4 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		/*
	 	Generic.js, version 1.1a
	 	Copyright 2006-2010, Dean Edwards
	 	License: http://www.opensource.org/licenses/mit-license.php
	 */
	
		var EventEmitter = __webpack_require__(5),
		    Log = __webpack_require__(2);
	
		var Generic = function Generic() {};
	
		Generic.extend = function (_instance, _static) {
			// subclass
			var extend = Generic.prototype.extend;
	
			// build the prototype
			Generic._prototyping = true;
			var proto = new this();
			extend.call(proto, _instance);
	
			proto.base = function () {
				// call this method from any other method to invoke that method's ancestor
			};
	
			delete Generic._prototyping;
	
			// create the wrapper for the constructor function
			//var constructor = proto.constructor.valueOf(); //-dean
			var constructor = proto.constructor;
			var klass = proto.constructor = function () {
				if (!Generic._prototyping) {
					if (this._constructing || this.constructor == klass) {
						// instantiation
						this._constructing = true;
						constructor.apply(this, arguments);
						delete this._constructing;
					} else if (arguments[0] != null) {
						// casting
						return (arguments[0].extend || extend).call(arguments[0], proto);
					}
				}
			};
	
			// build the class interface
			klass.ancestor = this;
			klass.extend = this.extend;
			klass.forEach = this.forEach;
			klass.implement = this.implement;
			klass.prototype = proto;
			klass.toString = this.toString;
			klass.valueOf = function (type) {
				//return (type == "object") ? klass : constructor; //-dean
				return type == "object" ? klass : constructor.valueOf();
			};
			extend.call(klass, _static);
			// class initialisation
			if (typeof klass.init == "function") klass.init();
			return klass;
		};
	
		Generic.prototype = {
			extend: function extend(source, value) {
				//console.log("arguments.length",arguments.length)
				if (arguments.length > 1) {
					// extending with a name/value pair
					var ancestor = this[source];
					if (ancestor && typeof value == "function" && ( // overriding a method?
					// the valueOf() comparison is to avoid circular references
					!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) && /\bbase\b/.test(value)) {
						// get the underlying method
						var method = value.valueOf();
						// override
						value = function value() {
							var previous = this.base || Generic.prototype.base;
							this.base = ancestor;
							//var returnValue = method.apply(this, arguments); //JPL: IE8 fails here
							this.base = previous;
							//return returnValue; //JPL: IE8 fails here
						};
						// point to the underlying method
						value.valueOf = function (type) {
							return type == "object" ? value : method;
						};
						value.toString = Generic.toString;
					}
					this[source] = value;
				} else if (source) {
					// extending with an object literal
					var extend = Generic.prototype.extend;
					// if this object has a customised extend method then use it
					if (!Generic._prototyping && typeof this != "function") {
						extend = this.extend || extend;
					}
					var proto = { toSource: null };
					// do the "toString" and other methods manually
					var hidden = ["constructor", "toString", "valueOf"];
					// if we are prototyping then include the constructor
					var i = Generic._prototyping ? 0 : 1;
					while (key = hidden[i++]) {
						if (source[key] != proto[key]) {
							extend.call(this, key, source[key]);
						}
					}
					// copy each of the source object's properties to this object
					for (var key in source) {
						if (!proto[key]) extend.call(this, key, source[key]);
					}
				}
				return this;
			}
		};
	
		// initialise
		Generic = Generic.extend({
			constructor: function constructor() {
				this.extend(arguments[0]);
			},
			eventEmitter: new EventEmitter()
		}, {
			ancestor: Object,
			version: "1.1",
	
			forEach: function forEach(object, block, context) {
				for (var key in object) {
					if (this.prototype[key] === undefined) {
						block.call(context, object[key], key, object);
					}
				}
			},
	
			implement: function implement() {
				for (var i = 0; i < arguments.length; i++) {
					if (typeof arguments[i] == "function") {
						// if it's a function, call it
						arguments[i](this.prototype);
					} else {
						// add the interface using the extend method
						this.prototype.extend(arguments[i]);
					}
				}
				return this;
			},
	
			toString: function toString() {
				return String(this.valueOf());
			}
		});
	
		module.exports = Generic;
	
		/***/
	},
	/* 5 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		var has = Object.prototype.hasOwnProperty;
	
		//
		// We store our EE objects in a plain object whose properties are event names.
		// If `Object.create(null)` is not supported we prefix the event names with a
		// `~` to make sure that the built-in object properties are not overridden or
		// used as an attack vector.
		// We also assume that `Object.create(null)` is available when the event name
		// is an ES6 Symbol.
		//
		var prefix = typeof Object.create !== 'function' ? '~' : false;
	
		/**
	  * Representation of a single EventEmitter function.
	  *
	  * @param {Function} fn Event handler to be called.
	  * @param {Mixed} context Context for function execution.
	  * @param {Boolean} [once=false] Only emit once
	  * @api private
	  */
		function EE(fn, context, once) {
			this.fn = fn;
			this.context = context;
			this.once = once || false;
		}
	
		/**
	  * Minimal EventEmitter interface that is molded against the Node.js
	  * EventEmitter interface.
	  *
	  * @constructor
	  * @api public
	  */
		function EventEmitter() {} /* Nothing to set */
	
		/**
	  * Hold the assigned EventEmitters by name.
	  *
	  * @type {Object}
	  * @private
	  */
		EventEmitter.prototype._events = undefined;
	
		/**
	  * Return an array listing the events for which the emitter has registered
	  * listeners.
	  *
	  * @returns {Array}
	  * @api public
	  */
		EventEmitter.prototype.eventNames = function eventNames() {
			var events = this._events,
			    names = [],
			    name;
	
			if (!events) return names;
	
			for (name in events) {
				if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
			}
	
			if (Object.getOwnPropertySymbols) {
				return names.concat(Object.getOwnPropertySymbols(events));
			}
	
			return names;
		};
	
		/**
	  * Return a list of assigned event listeners.
	  *
	  * @param {String} event The events that should be listed.
	  * @param {Boolean} exists We only need to know if there are listeners.
	  * @returns {Array|Boolean}
	  * @api public
	  */
		EventEmitter.prototype.listeners = function listeners(event, exists) {
			var evt = prefix ? prefix + event : event,
			    available = this._events && this._events[evt];
	
			if (exists) return !!available;
			if (!available) return [];
			if (available.fn) return [available.fn];
	
			for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
				ee[i] = available[i].fn;
			}
	
			return ee;
		};
	
		/**
	  * Emit an event to all registered event listeners.
	  *
	  * @param {String} event The name of the event.
	  * @returns {Boolean} Indication if we've emitted an event.
	  * @api public
	  */
		EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
			var evt = prefix ? prefix + event : event;
	
			if (!this._events || !this._events[evt]) return false;
	
			var listeners = this._events[evt],
			    len = arguments.length,
			    args,
			    i;
	
			if ('function' === typeof listeners.fn) {
				if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
				switch (len) {
					case 1:
						return listeners.fn.call(listeners.context), true;
					case 2:
						return listeners.fn.call(listeners.context, a1), true;
					case 3:
						return listeners.fn.call(listeners.context, a1, a2), true;
					case 4:
						return listeners.fn.call(listeners.context, a1, a2, a3), true;
					case 5:
						return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
					case 6:
						return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
				}
	
				for (i = 1, args = new Array(len - 1); i < len; i++) {
					args[i - 1] = arguments[i];
				}
	
				listeners.fn.apply(listeners.context, args);
			} else {
				var length = listeners.length,
				    j;
	
				for (i = 0; i < length; i++) {
					if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
					switch (len) {
						case 1:
							listeners[i].fn.call(listeners[i].context);break;
						case 2:
							listeners[i].fn.call(listeners[i].context, a1);break;
						case 3:
							listeners[i].fn.call(listeners[i].context, a1, a2);break;
						default:
							if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
								args[j - 1] = arguments[j];
							}
	
							listeners[i].fn.apply(listeners[i].context, args);
					}
				}
			}
	
			return true;
		};
	
		/**
	  * Register a new EventListener for the given event.
	  *
	  * @param {String} event Name of the event.
	  * @param {Function} fn Callback function.
	  * @param {Mixed} [context=this] The context of the function.
	  * @api public
	  */
		EventEmitter.prototype.on = function on(event, fn, context) {
			var listener = new EE(fn, context || this),
			    evt = prefix ? prefix + event : event;
	
			if (!this._events) this._events = prefix ? {} : Object.create(null);
			if (!this._events[evt]) this._events[evt] = listener;else {
				if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
			}
	
			return this;
		};
	
		/**
	  * Add an EventListener that's only called once.
	  *
	  * @param {String} event Name of the event.
	  * @param {Function} fn Callback function.
	  * @param {Mixed} [context=this] The context of the function.
	  * @api public
	  */
		EventEmitter.prototype.once = function once(event, fn, context) {
			var listener = new EE(fn, context || this, true),
			    evt = prefix ? prefix + event : event;
	
			if (!this._events) this._events = prefix ? {} : Object.create(null);
			if (!this._events[evt]) this._events[evt] = listener;else {
				if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
			}
	
			return this;
		};
	
		/**
	  * Remove event listeners.
	  *
	  * @param {String} event The event we want to remove.
	  * @param {Function} fn The listener that we need to find.
	  * @param {Mixed} context Only remove listeners matching this context.
	  * @param {Boolean} once Only remove once listeners.
	  * @api public
	  */
		EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
			var evt = prefix ? prefix + event : event;
	
			if (!this._events || !this._events[evt]) return this;
	
			var listeners = this._events[evt],
			    events = [];
	
			if (fn) {
				if (listeners.fn) {
					if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
						events.push(listeners);
					}
				} else {
					for (var i = 0, length = listeners.length; i < length; i++) {
						if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
							events.push(listeners[i]);
						}
					}
				}
			}
	
			//
			// Reset the array, or remove it completely if we have no more listeners.
			//
			if (events.length) {
				this._events[evt] = events.length === 1 ? events[0] : events;
			} else {
				delete this._events[evt];
			}
	
			return this;
		};
	
		/**
	  * Remove all listeners or only the listeners for the specified event.
	  *
	  * @param {String} event The event want to remove all listeners for.
	  * @api public
	  */
		EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
			if (!this._events) return this;
	
			if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);
	
			return this;
		};
	
		//
		// Alias methods names because people roll like that.
		//
		EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
		EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
		//
		// This function doesn't apply anymore.
		//
		EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
			return this;
		};
	
		//
		// Expose the prefix.
		//
		EventEmitter.prefixed = prefix;
	
		//
		// Expose the module.
		//
		if (true) {
			module.exports = EventEmitter;
		}
	
		/***/
	},
	/* 6 */
	/***/function (module, exports) {
	
		"use strict";
	
		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};
	
		/**
	  * Utils is a collection of sorthvid auxilliary methods
	  */
		var Utils = function Utils() {
			return {
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
		};
	
		module.exports = new Utils();
	
		/***/
	},
	/* 7 */
	/***/function (module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var DOM = exports.DOM = {
	
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
	
		/***/
	}
	/******/]);
	//# sourceMappingURL=kernel.js.map

/***/ }

/******/ });
//# sourceMappingURL=test.js.map