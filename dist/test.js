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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Kernel = __webpack_require__(7);
	
	//debugger;
	var Box = Kernel.View.extend({
		initialize: function initialize() {
			console.log("testddsssss", this);
		}
	});
	
	!function () {
		new Box();
	}();

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
			var a = factory();
			for (var i in a) {
				((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
			}
		}
	})(undefined, function () {
		return (/******/function (modules) {
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
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var Kernel = {
					View: __webpack_require__(1),
					Utils: __webpack_require__(5),
					Log: __webpack_require__(4)
				};
				exports.View = __webpack_require__(1);
				exports.utils = __webpack_require__(5);
				exports.Log = __webpack_require__(4);
				exports._ = __webpack_require__(6);
	
				//debugger;
				var Box = Kernel.View.extend({
					initialize: function initialize() {
						console.log("testddsss", this);
					}
				});
	
				!function () {
					new Box();
				}();
	
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
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var Generic = __webpack_require__(2),
				    Utils = __webpack_require__(5),
				    Log = __webpack_require__(4);
	
				/**
	    * View is the standard sorthvid content container class
	    * @param el The associated DOMelement
	    * @param settings The instance property values parsed into the constructor
	    * @param events A json object containing the events for the instance
	    */
	
				var View = Generic.extend({
	
					viewName: 'View',
					className: '',
					el: null,
					settings: null,
					events: null,
					parent: null,
					visible: true,
					instanceId: true,
	
					/**
	     * @param settings The View parameters. Must contain an "el" DOMelement or a "selector" string, so a DOMelement can be associated
	     * @constructor
	     */
					constructor: function constructor(settings) {
						this.instanceId = Utils.getCuid();
						this.settings = settings || {};
						if (this.settings.el) {
							this.el = settings.el;
						} else if (this.settings.selector) {
							this.el = Utils.find(settings.selector);
						} else {
							var selector = this.className.length > 0 ? 'div' + '.' + this.className : 'div';
							this.el = Utils.createEl(selector);
							if (this.settings.content) {
								this.el.innerHTML = settings.content;
							}
						}
	
						this.initialize();
	
						this.delegateEvents();
					},
	
					initialize: function initialize() {},
	
					/**
	     * A "private" function, which attaches event listeners to triggers specified in "events" field
	     **/
					delegateEvents: function delegateEvents() {
						//Log.fn(this.viewName+" | delegateEvents")
	
						for (var prop in this.events) {
							var eventSplit = prop.split(' ');
							var eventName = eventSplit[0];
	
							// is the target specified with a selector, or is this.el implied?
							var target = eventSplit.length > 1 ? prop.split(' ').slice(1) : this.el;
	
							var eventHandler = this[this.events[prop]];
	
							// is the target already an element or a selector?
							var elements;
							if (typeof target == "string") {
								elements = Utils.find(this.el, target);
							} else if (target.length) {
								elements = Utils.find(this.el, target[0]);
							} else {
								elements = [target];
							}
	
							var elementCount = elements.length;
							for (var i = 0; i < elementCount; i++) {
								this.on(elements[i], eventName, eventHandler.bind(this));
							}
						}
					},
	
					/**
	     * Attaches an event listener
	     * @param {Element} elem - the associated DOMelement
	     * @param {String} eventName - the event string
	     * @param {Function} eventHandler - the handler function
	     */
					on: function on(elem, eventName, eventHandler) {
						Utils.on(elem, eventName, eventHandler);
					},
	
					/**
	     * Removes an event listener
	     * @param {Element} elem - the associated DOMelement
	     * @param {String} eventName - the event string
	     * @param {Function} eventHandler - the handler function
	     */
					off: function off(elem, eventName, eventHandler) {
						Utils.off(elem, eventName, eventHandler);
					},
	
					/**
	     * A "public" function, which removes the view's el from the DOM
	     * Sets the View's visible property to false
	     **/
					remove: function remove() {
						this.visible = false;
						Utils.remove(this.el);
					},
	
					/**
	     * A "public" function, which re-inserts the view's el into the DOM
	     * Sets the View's visible property to true
	     **/
					render: function render() {
						if (!this.visible) {
							this.parent.appendChild(el);
							this.visible = true;
						}
						return this;
					},
	
					append: function append(elem) {
						Utils.append(this.el, elem);
					},
	
					/**
	     * Wrappers for Utils DOM manipulation methods always using this.el as the origin
	     **/
					find: function find(selector) {
						var result = Utils.find(this.el, selector);
						if (result instanceof NodeList && result.length == 1) {
							return result[0];
						} else {
							return result;
						}
					},
					closestByClass: function closestByClass(className) {
						return Utils.closestByClass(this.el, className);
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
					}
				});
	
				module.exports = View;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				/*
	   	Generic.js, version 1.1a
	   	Copyright 2006-2010, Dean Edwards
	   	License: http://www.opensource.org/licenses/mit-license.php
	   */
	
				var EventEmitter = __webpack_require__(3),
				    Log = __webpack_require__(4);
	
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
			/* 3 */
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
			/* 4 */
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
			/* 5 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				var Generic = __webpack_require__(2),
				    Log = __webpack_require__(4);
	
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
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; //     Underscore.js 1.8.3
				//     http://underscorejs.org
				//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
				//     Underscore may be freely distributed under the MIT license.
	
				(function () {
	
					// Baseline setup
					// --------------
	
					// Establish the root object, `window` in the browser, or `exports` on the server.
					var root = this;
	
					// Save the previous value of the `_` variable.
					var previousUnderscore = root._;
	
					// Save bytes in the minified (but not gzipped) version:
					var ArrayProto = Array.prototype,
					    ObjProto = Object.prototype,
					    FuncProto = Function.prototype;
	
					// Create quick reference variables for speed access to core prototypes.
					var push = ArrayProto.push,
					    slice = ArrayProto.slice,
					    toString = ObjProto.toString,
					    hasOwnProperty = ObjProto.hasOwnProperty;
	
					// All **ECMAScript 5** native function implementations that we hope to use
					// are declared here.
					var nativeIsArray = Array.isArray,
					    nativeKeys = Object.keys,
					    nativeBind = FuncProto.bind,
					    nativeCreate = Object.create;
	
					// Naked function reference for surrogate-prototype-swapping.
					var Ctor = function Ctor() {};
	
					// Create a safe reference to the Underscore object for use below.
					var _ = function _(obj) {
						if (obj instanceof _) return obj;
						if (!(this instanceof _)) return new _(obj);
						this._wrapped = obj;
					};
	
					// Export the Underscore object for **Node.js**, with
					// backwards-compatibility for the old `require()` API. If we're in
					// the browser, add `_` as a global object.
					if (true) {
						if (typeof module !== 'undefined' && module.exports) {
							exports = module.exports = _;
						}
						exports._ = _;
					} else {
						root._ = _;
					}
	
					// Current version.
					_.VERSION = '1.8.3';
	
					// Internal function that returns an efficient (for current engines) version
					// of the passed-in callback, to be repeatedly applied in other Underscore
					// functions.
					var optimizeCb = function optimizeCb(func, context, argCount) {
						if (context === void 0) return func;
						switch (argCount == null ? 3 : argCount) {
							case 1:
								return function (value) {
									return func.call(context, value);
								};
							case 2:
								return function (value, other) {
									return func.call(context, value, other);
								};
							case 3:
								return function (value, index, collection) {
									return func.call(context, value, index, collection);
								};
							case 4:
								return function (accumulator, value, index, collection) {
									return func.call(context, accumulator, value, index, collection);
								};
						}
						return function () {
							return func.apply(context, arguments);
						};
					};
	
					// A mostly-internal function to generate callbacks that can be applied
					// to each element in a collection, returning the desired result — either
					// identity, an arbitrary callback, a property matcher, or a property accessor.
					var cb = function cb(value, context, argCount) {
						if (value == null) return _.identity;
						if (_.isFunction(value)) return optimizeCb(value, context, argCount);
						if (_.isObject(value)) return _.matcher(value);
						return _.property(value);
					};
					_.iteratee = function (value, context) {
						return cb(value, context, Infinity);
					};
	
					// An internal function for creating assigner functions.
					var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
						return function (obj) {
							var length = arguments.length;
							if (length < 2 || obj == null) return obj;
							for (var index = 1; index < length; index++) {
								var source = arguments[index],
								    keys = keysFunc(source),
								    l = keys.length;
								for (var i = 0; i < l; i++) {
									var key = keys[i];
									if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
								}
							}
							return obj;
						};
					};
	
					// An internal function for creating a new object that inherits from another.
					var baseCreate = function baseCreate(prototype) {
						if (!_.isObject(prototype)) return {};
						if (nativeCreate) return nativeCreate(prototype);
						Ctor.prototype = prototype;
						var result = new Ctor();
						Ctor.prototype = null;
						return result;
					};
	
					var property = function property(key) {
						return function (obj) {
							return obj == null ? void 0 : obj[key];
						};
					};
	
					// Helper for collection methods to determine whether a collection
					// should be iterated as an array or as an object
					// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
					// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
					var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
					var getLength = property('length');
					var isArrayLike = function isArrayLike(collection) {
						var length = getLength(collection);
						return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
					};
	
					// Collection Functions
					// --------------------
	
					// The cornerstone, an `each` implementation, aka `forEach`.
					// Handles raw objects in addition to array-likes. Treats all
					// sparse array-likes as if they were dense.
					_.each = _.forEach = function (obj, iteratee, context) {
						iteratee = optimizeCb(iteratee, context);
						var i, length;
						if (isArrayLike(obj)) {
							for (i = 0, length = obj.length; i < length; i++) {
								iteratee(obj[i], i, obj);
							}
						} else {
							var keys = _.keys(obj);
							for (i = 0, length = keys.length; i < length; i++) {
								iteratee(obj[keys[i]], keys[i], obj);
							}
						}
						return obj;
					};
	
					// Return the results of applying the iteratee to each element.
					_.map = _.collect = function (obj, iteratee, context) {
						iteratee = cb(iteratee, context);
						var keys = !isArrayLike(obj) && _.keys(obj),
						    length = (keys || obj).length,
						    results = Array(length);
						for (var index = 0; index < length; index++) {
							var currentKey = keys ? keys[index] : index;
							results[index] = iteratee(obj[currentKey], currentKey, obj);
						}
						return results;
					};
	
					// Create a reducing function iterating left or right.
					function createReduce(dir) {
						// Optimized iterator function as using arguments.length
						// in the main function will deoptimize the, see #1991.
						function iterator(obj, iteratee, memo, keys, index, length) {
							for (; index >= 0 && index < length; index += dir) {
								var currentKey = keys ? keys[index] : index;
								memo = iteratee(memo, obj[currentKey], currentKey, obj);
							}
							return memo;
						}
	
						return function (obj, iteratee, memo, context) {
							iteratee = optimizeCb(iteratee, context, 4);
							var keys = !isArrayLike(obj) && _.keys(obj),
							    length = (keys || obj).length,
							    index = dir > 0 ? 0 : length - 1;
							// Determine the initial value if none is provided.
							if (arguments.length < 3) {
								memo = obj[keys ? keys[index] : index];
								index += dir;
							}
							return iterator(obj, iteratee, memo, keys, index, length);
						};
					}
	
					// **Reduce** builds up a single result from a list of values, aka `inject`,
					// or `foldl`.
					_.reduce = _.foldl = _.inject = createReduce(1);
	
					// The right-associative version of reduce, also known as `foldr`.
					_.reduceRight = _.foldr = createReduce(-1);
	
					// Return the first value which passes a truth test. Aliased as `detect`.
					_.find = _.detect = function (obj, predicate, context) {
						var key;
						if (isArrayLike(obj)) {
							key = _.findIndex(obj, predicate, context);
						} else {
							key = _.findKey(obj, predicate, context);
						}
						if (key !== void 0 && key !== -1) return obj[key];
					};
	
					// Return all the elements that pass a truth test.
					// Aliased as `select`.
					_.filter = _.select = function (obj, predicate, context) {
						var results = [];
						predicate = cb(predicate, context);
						_.each(obj, function (value, index, list) {
							if (predicate(value, index, list)) results.push(value);
						});
						return results;
					};
	
					// Return all the elements for which a truth test fails.
					_.reject = function (obj, predicate, context) {
						return _.filter(obj, _.negate(cb(predicate)), context);
					};
	
					// Determine whether all of the elements match a truth test.
					// Aliased as `all`.
					_.every = _.all = function (obj, predicate, context) {
						predicate = cb(predicate, context);
						var keys = !isArrayLike(obj) && _.keys(obj),
						    length = (keys || obj).length;
						for (var index = 0; index < length; index++) {
							var currentKey = keys ? keys[index] : index;
							if (!predicate(obj[currentKey], currentKey, obj)) return false;
						}
						return true;
					};
	
					// Determine if at least one element in the object matches a truth test.
					// Aliased as `any`.
					_.some = _.any = function (obj, predicate, context) {
						predicate = cb(predicate, context);
						var keys = !isArrayLike(obj) && _.keys(obj),
						    length = (keys || obj).length;
						for (var index = 0; index < length; index++) {
							var currentKey = keys ? keys[index] : index;
							if (predicate(obj[currentKey], currentKey, obj)) return true;
						}
						return false;
					};
	
					// Determine if the array or object contains a given item (using `===`).
					// Aliased as `includes` and `include`.
					_.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
						if (!isArrayLike(obj)) obj = _.values(obj);
						if (typeof fromIndex != 'number' || guard) fromIndex = 0;
						return _.indexOf(obj, item, fromIndex) >= 0;
					};
	
					// Invoke a method (with arguments) on every item in a collection.
					_.invoke = function (obj, method) {
						var args = slice.call(arguments, 2);
						var isFunc = _.isFunction(method);
						return _.map(obj, function (value) {
							var func = isFunc ? method : value[method];
							return func == null ? func : func.apply(value, args);
						});
					};
	
					// Convenience version of a common use case of `map`: fetching a property.
					_.pluck = function (obj, key) {
						return _.map(obj, _.property(key));
					};
	
					// Convenience version of a common use case of `filter`: selecting only objects
					// containing specific `key:value` pairs.
					_.where = function (obj, attrs) {
						return _.filter(obj, _.matcher(attrs));
					};
	
					// Convenience version of a common use case of `find`: getting the first object
					// containing specific `key:value` pairs.
					_.findWhere = function (obj, attrs) {
						return _.find(obj, _.matcher(attrs));
					};
	
					// Return the maximum element (or element-based computation).
					_.max = function (obj, iteratee, context) {
						var result = -Infinity,
						    lastComputed = -Infinity,
						    value,
						    computed;
						if (iteratee == null && obj != null) {
							obj = isArrayLike(obj) ? obj : _.values(obj);
							for (var i = 0, length = obj.length; i < length; i++) {
								value = obj[i];
								if (value > result) {
									result = value;
								}
							}
						} else {
							iteratee = cb(iteratee, context);
							_.each(obj, function (value, index, list) {
								computed = iteratee(value, index, list);
								if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
									result = value;
									lastComputed = computed;
								}
							});
						}
						return result;
					};
	
					// Return the minimum element (or element-based computation).
					_.min = function (obj, iteratee, context) {
						var result = Infinity,
						    lastComputed = Infinity,
						    value,
						    computed;
						if (iteratee == null && obj != null) {
							obj = isArrayLike(obj) ? obj : _.values(obj);
							for (var i = 0, length = obj.length; i < length; i++) {
								value = obj[i];
								if (value < result) {
									result = value;
								}
							}
						} else {
							iteratee = cb(iteratee, context);
							_.each(obj, function (value, index, list) {
								computed = iteratee(value, index, list);
								if (computed < lastComputed || computed === Infinity && result === Infinity) {
									result = value;
									lastComputed = computed;
								}
							});
						}
						return result;
					};
	
					// Shuffle a collection, using the modern version of the
					// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
					_.shuffle = function (obj) {
						var set = isArrayLike(obj) ? obj : _.values(obj);
						var length = set.length;
						var shuffled = Array(length);
						for (var index = 0, rand; index < length; index++) {
							rand = _.random(0, index);
							if (rand !== index) shuffled[index] = shuffled[rand];
							shuffled[rand] = set[index];
						}
						return shuffled;
					};
	
					// Sample **n** random values from a collection.
					// If **n** is not specified, returns a single random element.
					// The internal `guard` argument allows it to work with `map`.
					_.sample = function (obj, n, guard) {
						if (n == null || guard) {
							if (!isArrayLike(obj)) obj = _.values(obj);
							return obj[_.random(obj.length - 1)];
						}
						return _.shuffle(obj).slice(0, Math.max(0, n));
					};
	
					// Sort the object's values by a criterion produced by an iteratee.
					_.sortBy = function (obj, iteratee, context) {
						iteratee = cb(iteratee, context);
						return _.pluck(_.map(obj, function (value, index, list) {
							return {
								value: value,
								index: index,
								criteria: iteratee(value, index, list)
							};
						}).sort(function (left, right) {
							var a = left.criteria;
							var b = right.criteria;
							if (a !== b) {
								if (a > b || a === void 0) return 1;
								if (a < b || b === void 0) return -1;
							}
							return left.index - right.index;
						}), 'value');
					};
	
					// An internal function used for aggregate "group by" operations.
					var group = function group(behavior) {
						return function (obj, iteratee, context) {
							var result = {};
							iteratee = cb(iteratee, context);
							_.each(obj, function (value, index) {
								var key = iteratee(value, index, obj);
								behavior(result, value, key);
							});
							return result;
						};
					};
	
					// Groups the object's values by a criterion. Pass either a string attribute
					// to group by, or a function that returns the criterion.
					_.groupBy = group(function (result, value, key) {
						if (_.has(result, key)) result[key].push(value);else result[key] = [value];
					});
	
					// Indexes the object's values by a criterion, similar to `groupBy`, but for
					// when you know that your index values will be unique.
					_.indexBy = group(function (result, value, key) {
						result[key] = value;
					});
	
					// Counts instances of an object that group by a certain criterion. Pass
					// either a string attribute to count by, or a function that returns the
					// criterion.
					_.countBy = group(function (result, value, key) {
						if (_.has(result, key)) result[key]++;else result[key] = 1;
					});
	
					// Safely create a real, live array from anything iterable.
					_.toArray = function (obj) {
						if (!obj) return [];
						if (_.isArray(obj)) return slice.call(obj);
						if (isArrayLike(obj)) return _.map(obj, _.identity);
						return _.values(obj);
					};
	
					// Return the number of elements in an object.
					_.size = function (obj) {
						if (obj == null) return 0;
						return isArrayLike(obj) ? obj.length : _.keys(obj).length;
					};
	
					// Split a collection into two arrays: one whose elements all satisfy the given
					// predicate, and one whose elements all do not satisfy the predicate.
					_.partition = function (obj, predicate, context) {
						predicate = cb(predicate, context);
						var pass = [],
						    fail = [];
						_.each(obj, function (value, key, obj) {
							(predicate(value, key, obj) ? pass : fail).push(value);
						});
						return [pass, fail];
					};
	
					// Array Functions
					// ---------------
	
					// Get the first element of an array. Passing **n** will return the first N
					// values in the array. Aliased as `head` and `take`. The **guard** check
					// allows it to work with `_.map`.
					_.first = _.head = _.take = function (array, n, guard) {
						if (array == null) return void 0;
						if (n == null || guard) return array[0];
						return _.initial(array, array.length - n);
					};
	
					// Returns everything but the last entry of the array. Especially useful on
					// the arguments object. Passing **n** will return all the values in
					// the array, excluding the last N.
					_.initial = function (array, n, guard) {
						return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
					};
	
					// Get the last element of an array. Passing **n** will return the last N
					// values in the array.
					_.last = function (array, n, guard) {
						if (array == null) return void 0;
						if (n == null || guard) return array[array.length - 1];
						return _.rest(array, Math.max(0, array.length - n));
					};
	
					// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
					// Especially useful on the arguments object. Passing an **n** will return
					// the rest N values in the array.
					_.rest = _.tail = _.drop = function (array, n, guard) {
						return slice.call(array, n == null || guard ? 1 : n);
					};
	
					// Trim out all falsy values from an array.
					_.compact = function (array) {
						return _.filter(array, _.identity);
					};
	
					// Internal implementation of a recursive `flatten` function.
					var flatten = function flatten(input, shallow, strict, startIndex) {
						var output = [],
						    idx = 0;
						for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
							var value = input[i];
							if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
								//flatten current level of array or arguments object
								if (!shallow) value = flatten(value, shallow, strict);
								var j = 0,
								    len = value.length;
								output.length += len;
								while (j < len) {
									output[idx++] = value[j++];
								}
							} else if (!strict) {
								output[idx++] = value;
							}
						}
						return output;
					};
	
					// Flatten out an array, either recursively (by default), or just one level.
					_.flatten = function (array, shallow) {
						return flatten(array, shallow, false);
					};
	
					// Return a version of the array that does not contain the specified value(s).
					_.without = function (array) {
						return _.difference(array, slice.call(arguments, 1));
					};
	
					// Produce a duplicate-free version of the array. If the array has already
					// been sorted, you have the option of using a faster algorithm.
					// Aliased as `unique`.
					_.uniq = _.unique = function (array, isSorted, iteratee, context) {
						if (!_.isBoolean(isSorted)) {
							context = iteratee;
							iteratee = isSorted;
							isSorted = false;
						}
						if (iteratee != null) iteratee = cb(iteratee, context);
						var result = [];
						var seen = [];
						for (var i = 0, length = getLength(array); i < length; i++) {
							var value = array[i],
							    computed = iteratee ? iteratee(value, i, array) : value;
							if (isSorted) {
								if (!i || seen !== computed) result.push(value);
								seen = computed;
							} else if (iteratee) {
								if (!_.contains(seen, computed)) {
									seen.push(computed);
									result.push(value);
								}
							} else if (!_.contains(result, value)) {
								result.push(value);
							}
						}
						return result;
					};
	
					// Produce an array that contains the union: each distinct element from all of
					// the passed-in arrays.
					_.union = function () {
						return _.uniq(flatten(arguments, true, true));
					};
	
					// Produce an array that contains every item shared between all the
					// passed-in arrays.
					_.intersection = function (array) {
						var result = [];
						var argsLength = arguments.length;
						for (var i = 0, length = getLength(array); i < length; i++) {
							var item = array[i];
							if (_.contains(result, item)) continue;
							for (var j = 1; j < argsLength; j++) {
								if (!_.contains(arguments[j], item)) break;
							}
							if (j === argsLength) result.push(item);
						}
						return result;
					};
	
					// Take the difference between one array and a number of other arrays.
					// Only the elements present in just the first array will remain.
					_.difference = function (array) {
						var rest = flatten(arguments, true, true, 1);
						return _.filter(array, function (value) {
							return !_.contains(rest, value);
						});
					};
	
					// Zip together multiple lists into a single array -- elements that share
					// an index go together.
					_.zip = function () {
						return _.unzip(arguments);
					};
	
					// Complement of _.zip. Unzip accepts an array of arrays and groups
					// each array's elements on shared indices
					_.unzip = function (array) {
						var length = array && _.max(array, getLength).length || 0;
						var result = Array(length);
	
						for (var index = 0; index < length; index++) {
							result[index] = _.pluck(array, index);
						}
						return result;
					};
	
					// Converts lists into objects. Pass either a single array of `[key, value]`
					// pairs, or two parallel arrays of the same length -- one of keys, and one of
					// the corresponding values.
					_.object = function (list, values) {
						var result = {};
						for (var i = 0, length = getLength(list); i < length; i++) {
							if (values) {
								result[list[i]] = values[i];
							} else {
								result[list[i][0]] = list[i][1];
							}
						}
						return result;
					};
	
					// Generator function to create the findIndex and findLastIndex functions
					function createPredicateIndexFinder(dir) {
						return function (array, predicate, context) {
							predicate = cb(predicate, context);
							var length = getLength(array);
							var index = dir > 0 ? 0 : length - 1;
							for (; index >= 0 && index < length; index += dir) {
								if (predicate(array[index], index, array)) return index;
							}
							return -1;
						};
					}
	
					// Returns the first index on an array-like that passes a predicate test
					_.findIndex = createPredicateIndexFinder(1);
					_.findLastIndex = createPredicateIndexFinder(-1);
	
					// Use a comparator function to figure out the smallest index at which
					// an object should be inserted so as to maintain order. Uses binary search.
					_.sortedIndex = function (array, obj, iteratee, context) {
						iteratee = cb(iteratee, context, 1);
						var value = iteratee(obj);
						var low = 0,
						    high = getLength(array);
						while (low < high) {
							var mid = Math.floor((low + high) / 2);
							if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
						}
						return low;
					};
	
					// Generator function to create the indexOf and lastIndexOf functions
					function createIndexFinder(dir, predicateFind, sortedIndex) {
						return function (array, item, idx) {
							var i = 0,
							    length = getLength(array);
							if (typeof idx == 'number') {
								if (dir > 0) {
									i = idx >= 0 ? idx : Math.max(idx + length, i);
								} else {
									length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
								}
							} else if (sortedIndex && idx && length) {
								idx = sortedIndex(array, item);
								return array[idx] === item ? idx : -1;
							}
							if (item !== item) {
								idx = predicateFind(slice.call(array, i, length), _.isNaN);
								return idx >= 0 ? idx + i : -1;
							}
							for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
								if (array[idx] === item) return idx;
							}
							return -1;
						};
					}
	
					// Return the position of the first occurrence of an item in an array,
					// or -1 if the item is not included in the array.
					// If the array is large and already in sort order, pass `true`
					// for **isSorted** to use binary search.
					_.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
					_.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
					// Generate an integer Array containing an arithmetic progression. A port of
					// the native Python `range()` function. See
					// [the Python documentation](http://docs.python.org/library/functions.html#range).
					_.range = function (start, stop, step) {
						if (stop == null) {
							stop = start || 0;
							start = 0;
						}
						step = step || 1;
	
						var length = Math.max(Math.ceil((stop - start) / step), 0);
						var range = Array(length);
	
						for (var idx = 0; idx < length; idx++, start += step) {
							range[idx] = start;
						}
	
						return range;
					};
	
					// Function (ahem) Functions
					// ------------------
	
					// Determines whether to execute a function as a constructor
					// or a normal function with the provided arguments
					var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
						if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
						var self = baseCreate(sourceFunc.prototype);
						var result = sourceFunc.apply(self, args);
						if (_.isObject(result)) return result;
						return self;
					};
	
					// Create a function bound to a given object (assigning `this`, and arguments,
					// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
					// available.
					_.bind = function (func, context) {
						if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
						if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
						var args = slice.call(arguments, 2);
						var bound = function bound() {
							return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
						};
						return bound;
					};
	
					// Partially apply a function by creating a version that has had some of its
					// arguments pre-filled, without changing its dynamic `this` context. _ acts
					// as a placeholder, allowing any combination of arguments to be pre-filled.
					_.partial = function (func) {
						var boundArgs = slice.call(arguments, 1);
						var bound = function bound() {
							var position = 0,
							    length = boundArgs.length;
							var args = Array(length);
							for (var i = 0; i < length; i++) {
								args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
							}
							while (position < arguments.length) {
								args.push(arguments[position++]);
							}return executeBound(func, bound, this, this, args);
						};
						return bound;
					};
	
					// Bind a number of an object's methods to that object. Remaining arguments
					// are the method names to be bound. Useful for ensuring that all callbacks
					// defined on an object belong to it.
					_.bindAll = function (obj) {
						var i,
						    length = arguments.length,
						    key;
						if (length <= 1) throw new Error('bindAll must be passed function names');
						for (i = 1; i < length; i++) {
							key = arguments[i];
							obj[key] = _.bind(obj[key], obj);
						}
						return obj;
					};
	
					// Memoize an expensive function by storing its results.
					_.memoize = function (func, hasher) {
						var memoize = function memoize(key) {
							var cache = memoize.cache;
							var address = '' + (hasher ? hasher.apply(this, arguments) : key);
							if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
							return cache[address];
						};
						memoize.cache = {};
						return memoize;
					};
	
					// Delays a function for the given number of milliseconds, and then calls
					// it with the arguments supplied.
					_.delay = function (func, wait) {
						var args = slice.call(arguments, 2);
						return setTimeout(function () {
							return func.apply(null, args);
						}, wait);
					};
	
					// Defers a function, scheduling it to run after the current call stack has
					// cleared.
					_.defer = _.partial(_.delay, _, 1);
	
					// Returns a function, that, when invoked, will only be triggered at most once
					// during a given window of time. Normally, the throttled function will run
					// as much as it can, without ever going more than once per `wait` duration;
					// but if you'd like to disable the execution on the leading edge, pass
					// `{leading: false}`. To disable execution on the trailing edge, ditto.
					_.throttle = function (func, wait, options) {
						var context, args, result;
						var timeout = null;
						var previous = 0;
						if (!options) options = {};
						var later = function later() {
							previous = options.leading === false ? 0 : _.now();
							timeout = null;
							result = func.apply(context, args);
							if (!timeout) context = args = null;
						};
						return function () {
							var now = _.now();
							if (!previous && options.leading === false) previous = now;
							var remaining = wait - (now - previous);
							context = this;
							args = arguments;
							if (remaining <= 0 || remaining > wait) {
								if (timeout) {
									clearTimeout(timeout);
									timeout = null;
								}
								previous = now;
								result = func.apply(context, args);
								if (!timeout) context = args = null;
							} else if (!timeout && options.trailing !== false) {
								timeout = setTimeout(later, remaining);
							}
							return result;
						};
					};
	
					// Returns a function, that, as long as it continues to be invoked, will not
					// be triggered. The function will be called after it stops being called for
					// N milliseconds. If `immediate` is passed, trigger the function on the
					// leading edge, instead of the trailing.
					_.debounce = function (func, wait, immediate) {
						var timeout, args, context, timestamp, result;
	
						var later = function later() {
							var last = _.now() - timestamp;
	
							if (last < wait && last >= 0) {
								timeout = setTimeout(later, wait - last);
							} else {
								timeout = null;
								if (!immediate) {
									result = func.apply(context, args);
									if (!timeout) context = args = null;
								}
							}
						};
	
						return function () {
							context = this;
							args = arguments;
							timestamp = _.now();
							var callNow = immediate && !timeout;
							if (!timeout) timeout = setTimeout(later, wait);
							if (callNow) {
								result = func.apply(context, args);
								context = args = null;
							}
	
							return result;
						};
					};
	
					// Returns the first function passed as an argument to the second,
					// allowing you to adjust arguments, run code before and after, and
					// conditionally execute the original function.
					_.wrap = function (func, wrapper) {
						return _.partial(wrapper, func);
					};
	
					// Returns a negated version of the passed-in predicate.
					_.negate = function (predicate) {
						return function () {
							return !predicate.apply(this, arguments);
						};
					};
	
					// Returns a function that is the composition of a list of functions, each
					// consuming the return value of the function that follows.
					_.compose = function () {
						var args = arguments;
						var start = args.length - 1;
						return function () {
							var i = start;
							var result = args[start].apply(this, arguments);
							while (i--) {
								result = args[i].call(this, result);
							}return result;
						};
					};
	
					// Returns a function that will only be executed on and after the Nth call.
					_.after = function (times, func) {
						return function () {
							if (--times < 1) {
								return func.apply(this, arguments);
							}
						};
					};
	
					// Returns a function that will only be executed up to (but not including) the Nth call.
					_.before = function (times, func) {
						var memo;
						return function () {
							if (--times > 0) {
								memo = func.apply(this, arguments);
							}
							if (times <= 1) func = null;
							return memo;
						};
					};
	
					// Returns a function that will be executed at most one time, no matter how
					// often you call it. Useful for lazy initialization.
					_.once = _.partial(_.before, 2);
	
					// Object Functions
					// ----------------
	
					// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
					var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
					var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
					function collectNonEnumProps(obj, keys) {
						var nonEnumIdx = nonEnumerableProps.length;
						var constructor = obj.constructor;
						var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
	
						// Constructor is a special case.
						var prop = 'constructor';
						if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
						while (nonEnumIdx--) {
							prop = nonEnumerableProps[nonEnumIdx];
							if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
								keys.push(prop);
							}
						}
					}
	
					// Retrieve the names of an object's own properties.
					// Delegates to **ECMAScript 5**'s native `Object.keys`
					_.keys = function (obj) {
						if (!_.isObject(obj)) return [];
						if (nativeKeys) return nativeKeys(obj);
						var keys = [];
						for (var key in obj) {
							if (_.has(obj, key)) keys.push(key);
						} // Ahem, IE < 9.
						if (hasEnumBug) collectNonEnumProps(obj, keys);
						return keys;
					};
	
					// Retrieve all the property names of an object.
					_.allKeys = function (obj) {
						if (!_.isObject(obj)) return [];
						var keys = [];
						for (var key in obj) {
							keys.push(key);
						} // Ahem, IE < 9.
						if (hasEnumBug) collectNonEnumProps(obj, keys);
						return keys;
					};
	
					// Retrieve the values of an object's properties.
					_.values = function (obj) {
						var keys = _.keys(obj);
						var length = keys.length;
						var values = Array(length);
						for (var i = 0; i < length; i++) {
							values[i] = obj[keys[i]];
						}
						return values;
					};
	
					// Returns the results of applying the iteratee to each element of the object
					// In contrast to _.map it returns an object
					_.mapObject = function (obj, iteratee, context) {
						iteratee = cb(iteratee, context);
						var keys = _.keys(obj),
						    length = keys.length,
						    results = {},
						    currentKey;
						for (var index = 0; index < length; index++) {
							currentKey = keys[index];
							results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
						}
						return results;
					};
	
					// Convert an object into a list of `[key, value]` pairs.
					_.pairs = function (obj) {
						var keys = _.keys(obj);
						var length = keys.length;
						var pairs = Array(length);
						for (var i = 0; i < length; i++) {
							pairs[i] = [keys[i], obj[keys[i]]];
						}
						return pairs;
					};
	
					// Invert the keys and values of an object. The values must be serializable.
					_.invert = function (obj) {
						var result = {};
						var keys = _.keys(obj);
						for (var i = 0, length = keys.length; i < length; i++) {
							result[obj[keys[i]]] = keys[i];
						}
						return result;
					};
	
					// Return a sorted list of the function names available on the object.
					// Aliased as `methods`
					_.functions = _.methods = function (obj) {
						var names = [];
						for (var key in obj) {
							if (_.isFunction(obj[key])) names.push(key);
						}
						return names.sort();
					};
	
					// Extend a given object with all the properties in passed-in object(s).
					_.extend = createAssigner(_.allKeys);
	
					// Assigns a given object with all the own properties in the passed-in object(s)
					// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
					_.extendOwn = _.assign = createAssigner(_.keys);
	
					// Returns the first key on an object that passes a predicate test
					_.findKey = function (obj, predicate, context) {
						predicate = cb(predicate, context);
						var keys = _.keys(obj),
						    key;
						for (var i = 0, length = keys.length; i < length; i++) {
							key = keys[i];
							if (predicate(obj[key], key, obj)) return key;
						}
					};
	
					// Return a copy of the object only containing the whitelisted properties.
					_.pick = function (object, oiteratee, context) {
						var result = {},
						    obj = object,
						    iteratee,
						    keys;
						if (obj == null) return result;
						if (_.isFunction(oiteratee)) {
							keys = _.allKeys(obj);
							iteratee = optimizeCb(oiteratee, context);
						} else {
							keys = flatten(arguments, false, false, 1);
							iteratee = function iteratee(value, key, obj) {
								return key in obj;
							};
							obj = Object(obj);
						}
						for (var i = 0, length = keys.length; i < length; i++) {
							var key = keys[i];
							var value = obj[key];
							if (iteratee(value, key, obj)) result[key] = value;
						}
						return result;
					};
	
					// Return a copy of the object without the blacklisted properties.
					_.omit = function (obj, iteratee, context) {
						if (_.isFunction(iteratee)) {
							iteratee = _.negate(iteratee);
						} else {
							var keys = _.map(flatten(arguments, false, false, 1), String);
							iteratee = function iteratee(value, key) {
								return !_.contains(keys, key);
							};
						}
						return _.pick(obj, iteratee, context);
					};
	
					// Fill in a given object with default properties.
					_.defaults = createAssigner(_.allKeys, true);
	
					// Creates an object that inherits from the given prototype object.
					// If additional properties are provided then they will be added to the
					// created object.
					_.create = function (prototype, props) {
						var result = baseCreate(prototype);
						if (props) _.extendOwn(result, props);
						return result;
					};
	
					// Create a (shallow-cloned) duplicate of an object.
					_.clone = function (obj) {
						if (!_.isObject(obj)) return obj;
						return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
					};
	
					// Invokes interceptor with the obj, and then returns obj.
					// The primary purpose of this method is to "tap into" a method chain, in
					// order to perform operations on intermediate results within the chain.
					_.tap = function (obj, interceptor) {
						interceptor(obj);
						return obj;
					};
	
					// Returns whether an object has a given set of `key:value` pairs.
					_.isMatch = function (object, attrs) {
						var keys = _.keys(attrs),
						    length = keys.length;
						if (object == null) return !length;
						var obj = Object(object);
						for (var i = 0; i < length; i++) {
							var key = keys[i];
							if (attrs[key] !== obj[key] || !(key in obj)) return false;
						}
						return true;
					};
	
					// Internal recursive comparison function for `isEqual`.
					var eq = function eq(a, b, aStack, bStack) {
						// Identical objects are equal. `0 === -0`, but they aren't identical.
						// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
						if (a === b) return a !== 0 || 1 / a === 1 / b;
						// A strict comparison is necessary because `null == undefined`.
						if (a == null || b == null) return a === b;
						// Unwrap any wrapped objects.
						if (a instanceof _) a = a._wrapped;
						if (b instanceof _) b = b._wrapped;
						// Compare `[[Class]]` names.
						var className = toString.call(a);
						if (className !== toString.call(b)) return false;
						switch (className) {
							// Strings, numbers, regular expressions, dates, and booleans are compared by value.
							case '[object RegExp]':
							// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
							case '[object String]':
								// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
								// equivalent to `new String("5")`.
								return '' + a === '' + b;
							case '[object Number]':
								// `NaN`s are equivalent, but non-reflexive.
								// Object(NaN) is equivalent to NaN
								if (+a !== +a) return +b !== +b;
								// An `egal` comparison is performed for other numeric values.
								return +a === 0 ? 1 / +a === 1 / b : +a === +b;
							case '[object Date]':
							case '[object Boolean]':
								// Coerce dates and booleans to numeric primitive values. Dates are compared by their
								// millisecond representations. Note that invalid dates with millisecond representations
								// of `NaN` are not equivalent.
								return +a === +b;
						}
	
						var areArrays = className === '[object Array]';
						if (!areArrays) {
							if ((typeof a === 'undefined' ? 'undefined' : _typeof2(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof2(b)) != 'object') return false;
	
							// Objects with different constructors are not equivalent, but `Object`s or `Array`s
							// from different frames are.
							var aCtor = a.constructor,
							    bCtor = b.constructor;
							if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
								return false;
							}
						}
						// Assume equality for cyclic structures. The algorithm for detecting cyclic
						// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
						// Initializing stack of traversed objects.
						// It's done here since we only need them for objects and arrays comparison.
						aStack = aStack || [];
						bStack = bStack || [];
						var length = aStack.length;
						while (length--) {
							// Linear search. Performance is inversely proportional to the number of
							// unique nested structures.
							if (aStack[length] === a) return bStack[length] === b;
						}
	
						// Add the first object to the stack of traversed objects.
						aStack.push(a);
						bStack.push(b);
	
						// Recursively compare objects and arrays.
						if (areArrays) {
							// Compare array lengths to determine if a deep comparison is necessary.
							length = a.length;
							if (length !== b.length) return false;
							// Deep compare the contents, ignoring non-numeric properties.
							while (length--) {
								if (!eq(a[length], b[length], aStack, bStack)) return false;
							}
						} else {
							// Deep compare objects.
							var keys = _.keys(a),
							    key;
							length = keys.length;
							// Ensure that both objects contain the same number of properties before comparing deep equality.
							if (_.keys(b).length !== length) return false;
							while (length--) {
								// Deep compare each member
								key = keys[length];
								if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
							}
						}
						// Remove the first object from the stack of traversed objects.
						aStack.pop();
						bStack.pop();
						return true;
					};
	
					// Perform a deep comparison to check if two objects are equal.
					_.isEqual = function (a, b) {
						return eq(a, b);
					};
	
					// Is a given array, string, or object empty?
					// An "empty" object has no enumerable own-properties.
					_.isEmpty = function (obj) {
						if (obj == null) return true;
						if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
						return _.keys(obj).length === 0;
					};
	
					// Is a given value a DOM element?
					_.isElement = function (obj) {
						return !!(obj && obj.nodeType === 1);
					};
	
					// Is a given value an array?
					// Delegates to ECMA5's native Array.isArray
					_.isArray = nativeIsArray || function (obj) {
						return toString.call(obj) === '[object Array]';
					};
	
					// Is a given variable an object?
					_.isObject = function (obj) {
						var type = typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
						return type === 'function' || type === 'object' && !!obj;
					};
	
					// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
					_.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
						_['is' + name] = function (obj) {
							return toString.call(obj) === '[object ' + name + ']';
						};
					});
	
					// Define a fallback version of the method in browsers (ahem, IE < 9), where
					// there isn't any inspectable "Arguments" type.
					if (!_.isArguments(arguments)) {
						_.isArguments = function (obj) {
							return _.has(obj, 'callee');
						};
					}
	
					// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
					// IE 11 (#1621), and in Safari 8 (#1929).
					if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof2(Int8Array)) != 'object') {
						_.isFunction = function (obj) {
							return typeof obj == 'function' || false;
						};
					}
	
					// Is a given object a finite number?
					_.isFinite = function (obj) {
						return isFinite(obj) && !isNaN(parseFloat(obj));
					};
	
					// Is the given value `NaN`? (NaN is the only number which does not equal itself).
					_.isNaN = function (obj) {
						return _.isNumber(obj) && obj !== +obj;
					};
	
					// Is a given value a boolean?
					_.isBoolean = function (obj) {
						return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
					};
	
					// Is a given value equal to null?
					_.isNull = function (obj) {
						return obj === null;
					};
	
					// Is a given variable undefined?
					_.isUndefined = function (obj) {
						return obj === void 0;
					};
	
					// Shortcut function for checking if an object has a given property directly
					// on itself (in other words, not on a prototype).
					_.has = function (obj, key) {
						return obj != null && hasOwnProperty.call(obj, key);
					};
	
					// Utility Functions
					// -----------------
	
					// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
					// previous owner. Returns a reference to the Underscore object.
					_.noConflict = function () {
						root._ = previousUnderscore;
						return this;
					};
	
					// Keep the identity function around for default iteratees.
					_.identity = function (value) {
						return value;
					};
	
					// Predicate-generating functions. Often useful outside of Underscore.
					_.constant = function (value) {
						return function () {
							return value;
						};
					};
	
					_.noop = function () {};
	
					_.property = property;
	
					// Generates a function for a given object that returns a given property.
					_.propertyOf = function (obj) {
						return obj == null ? function () {} : function (key) {
							return obj[key];
						};
					};
	
					// Returns a predicate for checking whether an object has a given set of
					// `key:value` pairs.
					_.matcher = _.matches = function (attrs) {
						attrs = _.extendOwn({}, attrs);
						return function (obj) {
							return _.isMatch(obj, attrs);
						};
					};
	
					// Run a function **n** times.
					_.times = function (n, iteratee, context) {
						var accum = Array(Math.max(0, n));
						iteratee = optimizeCb(iteratee, context, 1);
						for (var i = 0; i < n; i++) {
							accum[i] = iteratee(i);
						}return accum;
					};
	
					// Return a random integer between min and max (inclusive).
					_.random = function (min, max) {
						if (max == null) {
							max = min;
							min = 0;
						}
						return min + Math.floor(Math.random() * (max - min + 1));
					};
	
					// A (possibly faster) way to get the current timestamp as an integer.
					_.now = Date.now || function () {
						return new Date().getTime();
					};
	
					// List of HTML entities for escaping.
					var escapeMap = {
						'&': '&amp;',
						'<': '&lt;',
						'>': '&gt;',
						'"': '&quot;',
						"'": '&#x27;',
						'`': '&#x60;'
					};
					var unescapeMap = _.invert(escapeMap);
	
					// Functions for escaping and unescaping strings to/from HTML interpolation.
					var createEscaper = function createEscaper(map) {
						var escaper = function escaper(match) {
							return map[match];
						};
						// Regexes for identifying a key that needs to be escaped
						var source = '(?:' + _.keys(map).join('|') + ')';
						var testRegexp = RegExp(source);
						var replaceRegexp = RegExp(source, 'g');
						return function (string) {
							string = string == null ? '' : '' + string;
							return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
						};
					};
					_.escape = createEscaper(escapeMap);
					_.unescape = createEscaper(unescapeMap);
	
					// If the value of the named `property` is a function then invoke it with the
					// `object` as context; otherwise, return it.
					_.result = function (object, property, fallback) {
						var value = object == null ? void 0 : object[property];
						if (value === void 0) {
							value = fallback;
						}
						return _.isFunction(value) ? value.call(object) : value;
					};
	
					// Generate a unique integer id (unique within the entire client session).
					// Useful for temporary DOM ids.
					var idCounter = 0;
					_.uniqueId = function (prefix) {
						var id = ++idCounter + '';
						return prefix ? prefix + id : id;
					};
	
					// By default, Underscore uses ERB-style template delimiters, change the
					// following template settings to use alternative delimiters.
					_.templateSettings = {
						evaluate: /<%([\s\S]+?)%>/g,
						interpolate: /<%=([\s\S]+?)%>/g,
						escape: /<%-([\s\S]+?)%>/g
					};
	
					// When customizing `templateSettings`, if you don't want to define an
					// interpolation, evaluation or escaping regex, we need one that is
					// guaranteed not to match.
					var noMatch = /(.)^/;
	
					// Certain characters need to be escaped so that they can be put into a
					// string literal.
					var escapes = {
						"'": "'",
						'\\': '\\',
						'\r': 'r',
						'\n': 'n',
						'\u2028': 'u2028',
						'\u2029': 'u2029'
					};
	
					var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
					var escapeChar = function escapeChar(match) {
						return '\\' + escapes[match];
					};
	
					// JavaScript micro-templating, similar to John Resig's implementation.
					// Underscore templating handles arbitrary delimiters, preserves whitespace,
					// and correctly escapes quotes within interpolated code.
					// NB: `oldSettings` only exists for backwards compatibility.
					_.template = function (text, settings, oldSettings) {
						if (!settings && oldSettings) settings = oldSettings;
						settings = _.defaults({}, settings, _.templateSettings);
	
						// Combine delimiters into one regular expression via alternation.
						var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
	
						// Compile the template source, escaping string literals appropriately.
						var index = 0;
						var source = "__p+='";
						text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
							source += text.slice(index, offset).replace(escaper, escapeChar);
							index = offset + match.length;
	
							if (escape) {
								source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
							} else if (interpolate) {
								source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
							} else if (evaluate) {
								source += "';\n" + evaluate + "\n__p+='";
							}
	
							// Adobe VMs need the match returned to produce the correct offest.
							return match;
						});
						source += "';\n";
	
						// If a variable is not specified, place data values in local scope.
						if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
						source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
	
						try {
							var render = new Function(settings.variable || 'obj', '_', source);
						} catch (e) {
							e.source = source;
							throw e;
						}
	
						var template = function template(data) {
							return render.call(this, data, _);
						};
	
						// Provide the compiled source as a convenience for precompilation.
						var argument = settings.variable || 'obj';
						template.source = 'function(' + argument + '){\n' + source + '}';
	
						return template;
					};
	
					// Add a "chain" function. Start chaining a wrapped Underscore object.
					_.chain = function (obj) {
						var instance = _(obj);
						instance._chain = true;
						return instance;
					};
	
					// OOP
					// ---------------
					// If Underscore is called as a function, it returns a wrapped object that
					// can be used OO-style. This wrapper holds altered versions of all the
					// underscore functions. Wrapped objects may be chained.
	
					// Helper function to continue chaining intermediate results.
					var result = function result(instance, obj) {
						return instance._chain ? _(obj).chain() : obj;
					};
	
					// Add your own custom functions to the Underscore object.
					_.mixin = function (obj) {
						_.each(_.functions(obj), function (name) {
							var func = _[name] = obj[name];
							_.prototype[name] = function () {
								var args = [this._wrapped];
								push.apply(args, arguments);
								return result(this, func.apply(_, args));
							};
						});
					};
	
					// Add all of the Underscore functions to the wrapper object.
					_.mixin(_);
	
					// Add all mutator Array functions to the wrapper.
					_.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
						var method = ArrayProto[name];
						_.prototype[name] = function () {
							var obj = this._wrapped;
							method.apply(obj, arguments);
							if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
							return result(this, obj);
						};
					});
	
					// Add all accessor Array functions to the wrapper.
					_.each(['concat', 'join', 'slice'], function (name) {
						var method = ArrayProto[name];
						_.prototype[name] = function () {
							return result(this, method.apply(this._wrapped, arguments));
						};
					});
	
					// Extracts the result from a wrapped and chained object.
					_.prototype.value = function () {
						return this._wrapped;
					};
	
					// Provide unwrapping proxy for some methods used in engine operations
					// such as arithmetic and JSON stringification.
					_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
					_.prototype.toString = function () {
						return '' + this._wrapped;
					};
	
					// AMD registration happens at the end for compatibility with AMD loaders
					// that may not enforce next-turn semantics on modules. Even though general
					// practice for AMD registration is to be anonymous, underscore registers
					// as a named module because, like jQuery, it is a base library that is
					// popular enough to be bundled in a third party lib, but not be part of
					// an AMD load request. Those cases could generate an error when an
					// anonymous define() is called outside of a loader request.
					if (true) {
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return _;
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					}
				}).call(this);
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=kernel.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }

/******/ })
});
;
//# sourceMappingURL=test.js.map