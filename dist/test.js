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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _log = __webpack_require__(2);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _view = __webpack_require__(1);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _dom = __webpack_require__(4);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _utils = __webpack_require__(3);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _emmet = __webpack_require__(5);
	
	var _emmet2 = _interopRequireDefault(_emmet);
	
	var _popmotion = __webpack_require__(80);
	
	var motion = _interopRequireWildcard(_popmotion);
	
	var _es6EventEmitter = __webpack_require__(7);
	
	var _es6EventEmitter2 = _interopRequireDefault(_es6EventEmitter);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //https://popmotion.io/
	
	// import { View } from '../dist/kernel';
	// import { DOM } from '../dist/kernel';
	// import { Utils } from '../dist/kernel';
	// import { Log } from '../dist/kernel';
	
	window.emitter = new _es6EventEmitter2.default();
	
	var Overlay = function (_View) {
		_inherits(Overlay, _View);
	
		function Overlay(settings) {
			_classCallCheck(this, Overlay);
	
			settings.events = {
				'click': 'onClick'
			};
			settings.displayName = 'Overlay';
			settings.el = 'div.overlay.overlay--modal';
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, settings));
	
			_this.bodyRef = _dom2.default.find('body');
	
			_view2.default.emitter.on('modal:close', _this.close.bind(_this));
			return _this;
		}
	
		_createClass(Overlay, [{
			key: 'render',
			value: function render(mountPoint) {
				_get(Object.getPrototypeOf(Overlay.prototype), 'render', this).call(this, mountPoint);
				this.addClass('is-active');
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				if (e.target != this.el) {
					return false;
				}
				_view2.default.emitter.trigger('overlay:clicked', e);
				this.close();
			}
		}, {
			key: 'close',
			value: function close(e) {
				_dom2.default.removeClass(this.bodyRef, 'is-fixed');
				_dom2.default.removeClass(this.bodyRef, 'is-blurred');
				this.remove();
			}
		}]);
	
		return Overlay;
	}(_view2.default);
	
	var ModalBox = function (_View2) {
		_inherits(ModalBox, _View2);
	
		function ModalBox(settings) {
			_classCallCheck(this, ModalBox);
	
			settings.events = {
				'click .js--close-modal': 'onClose'
			};
			settings.displayName = 'ModalBox';
			settings.el = 'div.modal.' + settings.cssClasses + '>a.button.button--icon.has-icon.js--close-modal[href=""]>span.icon[data-text="close"]^div.modal__content.js--modal-content';
			settings.data = { close: '×' };
	
			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalBox).call(this, settings));
	
			_this2.content = settings.content;
	
			_this2.overlay = new Overlay({ isFixed: true, fixBody: settings.fixBody });
	
			_view2.default.emitter.on('overlay:clicked', _this2.close.bind(_this2));
			return _this2;
		}
	
		_createClass(ModalBox, [{
			key: 'render',
			value: function render() {
				this.find('.js--modal-content')[0].innerHTML = this.content;
				this.overlay.render('body');
				this.overlay.append(this.el);
				_view2.default.emitter.trigger('modalbox:rendered', this);
			}
		}, {
			key: 'onClose',
			value: function onClose(e) {
				e.stopPropagation();
				_view2.default.emitter.trigger('modal:close');
				this.close();
			}
		}, {
			key: 'close',
			value: function close() {
				this.remove();
			}
		}]);
	
		return ModalBox;
	}(_view2.default);
	
	var Box = function (_View3) {
		_inherits(Box, _View3);
	
		function Box(settings) {
			_classCallCheck(this, Box);
	
			settings.events = {
				'click .js--button-1': 'onClick',
				'click .js--button-2': 'onClick2',
				'click .js--button-3': 'onClick3',
				'click .js--button-4': 'onClick4',
				'click .js--button-5': 'onClick5',
				'mouseenter': 'onMouseEnter'
			};
	
			var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Box).call(this, settings));
	
			_this3.active = false;
			var buttons = _this3.find('.button');
			_dom2.default.addClass(buttons, 'is-active');
			return _this3;
		}
	
		_createClass(Box, [{
			key: 'onMouseEnter',
			value: function onMouseEnter(e) {
				_log2.default.fn('Box | onMouseEnter', this.instanceId, "this.active=" + this.active);
				this.toggleClass('is-hovered', this.active);
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
				_utils2.default.scrollTo(boxes[2], 2000);
			}
		}, {
			key: 'onClick2',
			value: function onClick2(e) {
				e.preventDefault();
				boxes[1].remove();
			}
		}, {
			key: 'onClick3',
			value: function onClick3(e) {
				this.active = !this.active;
				e.preventDefault();
				_view2.default.emitter.trigger('view:action', this);
			}
		}, {
			key: 'onClick4',
			value: function onClick4(e) {
				e.preventDefault();
				this.modal = new ModalBox({ content: '<div>We did it!</div>', cssClasses: 'modal--success', fixBody: true });
				this.modal.render();
			}
		}, {
			key: 'onClick5',
			value: function onClick5(e) {
				e.preventDefault();
				_log2.default.fn("onClick4");
				_utils2.default.scrollTo(boxes[0], 2000);
			}
		}]);
	
		return Box;
	}(_view2.default);
	
	var boxes = _utils2.default.viewFactory('.box', Box, { displayName: 'Lars' });
	
	var Move = function (_View4) {
		_inherits(Move, _View4);
	
		function Move(settings) {
			_classCallCheck(this, Move);
	
			settings = settings || {};
	
			Object.assign(settings, {
				events: {
					'click .move': 'onClick'
				},
				displayName: 'Cookie-accept',
				el: 'div.move[data-text="text"]',
				data: {
					text: 'move box'
				},
				mount: 'body'
			});
	
			//Log.db(motion);
	
			var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Move).call(this, settings));
	
			_this4.movement = motion.tween({
				yoyo: 6,
				values: {
					x: {
						to: -200
					},
					y: {
						to: -200
					}
				},
				onFrame: function onFrame(state) {}, //console.log('x: ', state.x) },
				onStart: function onStart(e) {} //console.log(e) }
			});
	
			return _this4;
		}
	
		_createClass(Move, [{
			key: 'onClick',
			value: function onClick(e) {
				this.movement.on(this.el).start();
			}
		}]);
	
		return Move;
	}(_view2.default);
	
	var Table = function (_View5) {
		_inherits(Table, _View5);
	
		function Table(settings) {
			_classCallCheck(this, Table);
	
			settings.events = {
				'click .js--button': 'onClick',
				'mouseenter': 'onMouseEnter'
			};
			settings.displayName = 'Table';
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, settings));
		}
	
		_createClass(Table, [{
			key: 'onMouseEnter',
			value: function onMouseEnter(e) {
				_log2.default.fn('Table | onMouseEnter');
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_log2.default.db("cookie", _utils2.default.cookie.get('cookietest'));
				e.preventDefault();
			}
		}, {
			key: 'render',
			value: function render() {
				_dom2.default.append(_dom2.default.find('body'), this.el);
			}
		}]);
	
		return Table;
	}(_view2.default);
	
	var CookieAccept = function (_View6) {
		_inherits(CookieAccept, _View6);
	
		function CookieAccept() {
			var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
			_classCallCheck(this, CookieAccept);
	
			settings = settings || {};
	
			Object.assign(settings, {
				events: {
					'click .js--button': 'onClick',
					'mouseenter': 'onMouseEnter'
				},
				displayName: 'Cookie-accept',
				el: 'div.section-header>span.heading[data-text="heading"]>div.test^span.section-text[data-text="text"]',
				data: {
					heading: 'heading text ',
					text: 'cookie kasse'
	
				},
				mount: '.container'
			});
	
			var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(CookieAccept).call(this, settings));
	
			_view2.default.emitter.on("view:action", _this6.onAction.bind(_this6));
			return _this6;
		}
	
		_createClass(CookieAccept, [{
			key: 'onAction',
			value: function onAction(e) {
				_log2.default.fn("onAction", this, e);
			}
		}, {
			key: 'onMouseEnter',
			value: function onMouseEnter(e) {
				_log2.default.fn('Table | onMouseEnter');
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_log2.default.db("cookie", _utils2.default.cookie.get('cookietest'));
				e.preventDefault();
				this.update();
			}
		}]);
	
		return CookieAccept;
	}(_view2.default);
	
	//TESTS
	
	var cookie = new CookieAccept();
	var move = new Move();
	
	var table1 = new Table({ el: _dom2.default.find('#table')[0] });
	var table2 = new Table({ el: 'div.table-test.class2.class3>a.js--button{TEST cookie}' });
	table2.render();
	
	_log2.default.db(table1.hasClass('table'));
	_log2.default.db(table1.hasClass('abe'));
	_log2.default.db(table1.addClass('abe').hasClass('abe'));
	_log2.default.db(table1.removeClass('abe').hasClass('abe'));
	
	var section = _dom2.default.closest(table1, 'section');
	_log2.default.db("section", section);
	_dom2.default.addClass(section, 'extra-class');
	
	_log2.default.db('TEST getUrlParms', _utils2.default.getUrlParms('t'));
	_log2.default.db('TEST getHeight', _utils2.default.getHeight(table1));
	_log2.default.db('TEST isElementInViewport', _utils2.default.isElementInViewport(boxes[2]));
	_log2.default.db('TEST cumulativeOffset', _utils2.default.cumulativeOffset(boxes[2]));
	
	_utils2.default.cookie.set({ cookieValue: 23459875934857, cookieName: 'cookietest' });

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
	
	var _event = __webpack_require__(6);
	
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
			var _ref$el = _ref.el;
			var el = _ref$el === undefined ? null : _ref$el;
			var _ref$content = _ref.content;
			var content = _ref$content === undefined ? null : _ref$content;
			var _ref$events = _ref.events;
			var events = _ref$events === undefined ? null : _ref$events;
			var _ref$displayName = _ref.displayName;
			var displayName = _ref$displayName === undefined ? 'View' : _ref$displayName;
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
						//wrapping this.el in array
						elements = [target];
					}
	
					_log2.default.db("delegateEvents elements", elements);
	
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
	  * A "public" function, updates all data-text data attributes TODO: write an accutal update of existing textNodes..
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
				var mountPoint = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
				if (mountPoint) this.mountPoint = mountPoint;
				if (!this.visible) {
					if (this.mountPoint) {
						var nodes = Array.prototype.slice.call(this.el.childNodes);
						_dom2.default.append(_dom2.default.find(this.mountPoint), this.el);
						this.el = nodes[0];
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventEmitter = undefined;
	
	var _es6EventEmitter = __webpack_require__(7);
	
	var _es6EventEmitter2 = _interopRequireDefault(_es6EventEmitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EventEmitter = exports.EventEmitter = new _es6EventEmitter2.default(); //https://www.npmjs.com/package/es6-event-emitter

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(8);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _weakMap = __webpack_require__(28);
	
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(10);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
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
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
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
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(14).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(62);
	module.exports = __webpack_require__(15).WeakMap;

/***/ },
/* 30 */
/***/ function(module, exports) {



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	var global        = __webpack_require__(14)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(35)
	  , TO_STRING_TAG = __webpack_require__(59)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(33)
	  , step             = __webpack_require__(34)
	  , Iterators        = __webpack_require__(35)
	  , toIObject        = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(40)(Array, 'Array', function(iterated, kind){
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
/* 33 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(39);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(42)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(43)
	  , Iterators      = __webpack_require__(35)
	  , $iterCreate    = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(58)
	  , getPrototypeOf = __webpack_require__(60)
	  , ITERATOR       = __webpack_require__(59)('iterator')
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
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 43 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(45)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(58)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(59)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(56)
	  , IE_PROTO    = __webpack_require__(53)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(47);
	
	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(56);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(43)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(49)(false)
	  , IE_PROTO     = __webpack_require__(53)('IE_PROTO');
	
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(50)
	  , toIndex   = __webpack_require__(52);
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(51)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(51)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(54)('keys')
	  , uid    = __webpack_require__(55);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(14)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14).document && document.documentElement;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(43)
	  , TAG = __webpack_require__(59)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(54)('wks')
	  , uid        = __webpack_require__(55)
	  , Symbol     = __webpack_require__(14).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(43)
	  , toObject    = __webpack_require__(61)
	  , IE_PROTO    = __webpack_require__(53)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(39);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(63)(0)
	  , redefine     = __webpack_require__(42)
	  , meta         = __webpack_require__(67)
	  , assign       = __webpack_require__(68)
	  , weak         = __webpack_require__(71)
	  , isObject     = __webpack_require__(21)
	  , has          = __webpack_require__(43)
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
	var $WeakMap = module.exports = __webpack_require__(79)('WeakMap', wrapper, methods, weak, true, true);
	
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(16)
	  , IObject  = __webpack_require__(37)
	  , toObject = __webpack_require__(61)
	  , toLength = __webpack_require__(50)
	  , asc      = __webpack_require__(64);
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(65);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , isArray  = __webpack_require__(66)
	  , SPECIES  = __webpack_require__(59)('species');
	
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(55)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(43)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(47)
	  , gOPS     = __webpack_require__(69)
	  , pIE      = __webpack_require__(70)
	  , toObject = __webpack_require__(61)
	  , IObject  = __webpack_require__(37)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(24)(function(){
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
/* 69 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 70 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(72)
	  , getWeak           = __webpack_require__(67).getWeak
	  , anObject          = __webpack_require__(20)
	  , isObject          = __webpack_require__(21)
	  , anInstance        = __webpack_require__(73)
	  , forOf             = __webpack_require__(74)
	  , createArrayMethod = __webpack_require__(63)
	  , $has              = __webpack_require__(43)
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(16)
	  , call        = __webpack_require__(75)
	  , isArrayIter = __webpack_require__(76)
	  , anObject    = __webpack_require__(20)
	  , toLength    = __webpack_require__(50)
	  , getIterFn   = __webpack_require__(77)
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(20);
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(35)
	  , ITERATOR   = __webpack_require__(59)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(78)
	  , ITERATOR  = __webpack_require__(59)('iterator')
	  , Iterators = __webpack_require__(35);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(38)
	  , TAG = __webpack_require__(59)('toStringTag')
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(14)
	  , $export        = __webpack_require__(13)
	  , meta           = __webpack_require__(67)
	  , fails          = __webpack_require__(24)
	  , hide           = __webpack_require__(18)
	  , redefineAll    = __webpack_require__(72)
	  , forOf          = __webpack_require__(74)
	  , anInstance     = __webpack_require__(73)
	  , isObject       = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(58)
	  , dP             = __webpack_require__(19).f
	  , each           = __webpack_require__(63)(0)
	  , DESCRIPTORS    = __webpack_require__(23);
	
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

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Action = exports.transformers = exports.valueType = exports.setGlobalDilation = exports.utils = exports.calc = exports.detectFlow = exports.easing = exports.svgPath = exports.svg = exports.object = exports.css = exports.attr = exports.createAdapter = exports.timeline = exports.stagger = exports.task = exports.input = exports.track = exports.physics = exports.tween = exports.flow = undefined;
	
	var _timer = __webpack_require__(81);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Action = __webpack_require__(83);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Flow = __webpack_require__(119);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	var _Tween = __webpack_require__(121);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(125);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(126);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Task = __webpack_require__(84);
	
	var _Task2 = _interopRequireDefault(_Task);
	
	var _Input = __webpack_require__(128);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(129);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(130);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter = __webpack_require__(101);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	var _attrAdapter = __webpack_require__(116);
	
	var _attrAdapter2 = _interopRequireDefault(_attrAdapter);
	
	var _cssAdapter = __webpack_require__(102);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _objectAdapter = __webpack_require__(100);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _svgAdapter = __webpack_require__(113);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(117);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	var _presetEasing = __webpack_require__(122);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _getFlow = __webpack_require__(131);
	
	var _getFlow2 = _interopRequireDefault(_getFlow);
	
	var _calc2 = __webpack_require__(88);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(82);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(106);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(105);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _color = __webpack_require__(90);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(96);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(95);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(94);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _px = __webpack_require__(109);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(91);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(107);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(108);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _unit = __webpack_require__(97);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _transformers2 = __webpack_require__(132);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export factory functions
	var flow = exports.flow = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return new (Function.prototype.bind.apply(_Flow2.default, [null].concat(args)))();
	}; // Import classes - long term goal to move towards composition
	var tween = exports.tween = function (props) {
	  return new _Tween2.default(props);
	};
	var physics = exports.physics = function (props) {
	  return new _Physics2.default(props);
	};
	var track = exports.track = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
	};
	var input = exports.input = function () {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
	};
	var task = exports.task = function () {
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }
	
	  return new (Function.prototype.bind.apply(_Task2.default, [null].concat(args)))();
	};
	exports.stagger = _stagger3.default;
	exports.timeline = _timeline3.default;
	
	// Adapters
	
	exports.createAdapter = _adapter2.default;
	exports.attr = _attrAdapter2.default;
	exports.css = _cssAdapter2.default;
	exports.object = _objectAdapter2.default;
	exports.svg = _svgAdapter2.default;
	exports.svgPath = _svgPathAdapter2.default;
	
	// Easing
	
	exports.easing = _presetEasing2.default;
	var detectFlow = exports.detectFlow = _getFlow2.default;
	
	// Utils
	exports.calc = _calc;
	exports.utils = _utils;
	
	// Value types
	
	var valueType = exports.valueType = { alpha: _alpha2.default, angle: _angle2.default, color: _color2.default, complex: _complex2.default, hex: _hex2.default, hsl: _hsl2.default, px: _px2.default, rgb: _rgb2.default, scale: _scale2.default, shadow: _shadow2.default, unit: _unit2.default };
	
	// Transformers
	exports.transformers = _transformers;
	
	/*
	  Returns a version of the Action bound to a Flow
	
	  We're adding `on` here because Flow extends Action,
	  otherwise creating a circular modular dependency. Future
	  refactoring, ie moving to a compositional model will
	  remove the need for us to do this here.
	*/
	
	_Action2.default.prototype.on = function (element) {
	  if (!element.connect) {
	    element = (0, _getFlow2.default)(element);
	  }
	
	  return element.connect(this);
	};
	
	exports.Action = _Action2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsic2V0R2xvYmFsRGlsYXRpb24iLCJmbG93IiwiYXJncyIsInR3ZWVuIiwicHJvcHMiLCJwaHlzaWNzIiwidHJhY2siLCJpbnB1dCIsInRhc2siLCJzdGFnZ2VyIiwidGltZWxpbmUiLCJjcmVhdGVBZGFwdGVyIiwiYXR0ciIsImNzcyIsIm9iamVjdCIsInN2ZyIsInN2Z1BhdGgiLCJlYXNpbmciLCJkZXRlY3RGbG93IiwiY2FsYyIsInV0aWxzIiwidmFsdWVUeXBlIiwiYWxwaGEiLCJhbmdsZSIsImNvbG9yIiwiY29tcGxleCIsImhleCIsImhzbCIsInB4IiwicmdiIiwic2NhbGUiLCJzaGFkb3ciLCJ1bml0IiwidHJhbnNmb3JtZXJzIiwicHJvdG90eXBlIiwib24iLCJlbGVtZW50IiwiY29ubmVjdCIsIkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1NBLGlCOzs7O0FBbENUOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7QUFTQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUF2Q0E7QUFDTyxJQUFNQyxzQkFBTztBQUFBLG9DQUFJQyxJQUFKO0FBQUlBLFFBQUo7QUFBQTs7QUFBQSwwRUFBeUJBLElBQXpCO0FBQUEsQ0FBYixDLENBVlA7QUFXTyxJQUFNQyx3QkFBUSxVQUFDQyxLQUFEO0FBQUEsU0FBVyxvQkFBVUEsS0FBVixDQUFYO0FBQUEsQ0FBZDtBQUNBLElBQU1DLDRCQUFVLFVBQUNELEtBQUQ7QUFBQSxTQUFXLHNCQUFZQSxLQUFaLENBQVg7QUFBQSxDQUFoQjtBQUNBLElBQU1FLHdCQUFRO0FBQUEscUNBQUlKLElBQUo7QUFBSUEsUUFBSjtBQUFBOztBQUFBLDJFQUEwQkEsSUFBMUI7QUFBQSxDQUFkO0FBQ0EsSUFBTUssd0JBQVE7QUFBQSxxQ0FBSUwsSUFBSjtBQUFJQSxRQUFKO0FBQUE7O0FBQUEsMkVBQTBCQSxJQUExQjtBQUFBLENBQWQ7QUFDQSxJQUFNTSxzQkFBTztBQUFBLHFDQUFJTixJQUFKO0FBQUlBLFFBQUo7QUFBQTs7QUFBQSwwRUFBeUJBLElBQXpCO0FBQUEsQ0FBYjtRQUNBTyxPO1FBQ0FDLFE7O0FBRVA7O1FBQ09DLGE7UUFDQUMsSTtRQUNBQyxHO1FBQ0FDLE07UUFDQUMsRztRQUNBQyxPOztBQUVQOztRQUNPQyxNO0FBRUEsSUFBTUMsbURBQU47O0FBRVA7UUFDWUMsSTtRQUNBQyxLOztBQUdaOztBQVlPLElBQU1DLGdDQUFZLEVBQUVDLHNCQUFGLEVBQVNDLHNCQUFULEVBQWdCQyxzQkFBaEIsRUFBdUJDLDBCQUF2QixFQUFnQ0Msa0JBQWhDLEVBQXFDQyxrQkFBckMsRUFBMENDLGdCQUExQyxFQUE4Q0Msa0JBQTlDLEVBQW1EQyxzQkFBbkQsRUFBMERDLHdCQUExRCxFQUFrRUMsb0JBQWxFLEVBQWxCOztBQUVQO1FBQ1lDLFk7O0FBRVo7Ozs7Ozs7OztBQVFBLGlCQUFPQyxTQUFQLENBQWlCQyxFQUFqQixHQUFzQixVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZDLE1BQUksQ0FBQ0EsUUFBUUMsT0FBYixFQUFzQjtBQUNwQkQsY0FBVSx1QkFBUUEsT0FBUixDQUFWO0FBQ0Q7O0FBRUQsU0FBT0EsUUFBUUMsT0FBUixDQUFnQixJQUFoQixDQUFQO0FBQ0QsQ0FORDs7UUFRU0MsTSIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBGbG93IGZyb20gJy4vYWN0aW9ucy9GbG93JztcbmltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2svVGFzayc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dC9JbnB1dCc7XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4uYXJncykgPT4gbmV3IEZsb3coLi4uYXJncyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgdGFzayA9ICguLi5hcmdzKSA9PiBuZXcgVGFzayguLi5hcmdzKTtcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gQWRhcHRlcnNcbmV4cG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hZGFwdGVyJztcbmV4cG9ydCBhdHRyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzcyBmcm9tICcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuZXhwb3J0IG9iamVjdCBmcm9tICcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInO1xuZXhwb3J0IHN2ZyBmcm9tICcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCBnZXRGbG93IGZyb20gJy4vYWN0aW9ucy9mbG93L2dldC1mbG93JztcbmV4cG9ydCBjb25zdCBkZXRlY3RGbG93ID0gZ2V0RmxvdztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2luYy91dGlscyc7XG5leHBvcnQgeyBzZXRHbG9iYWxEaWxhdGlvbiB9IGZyb20gJy4vdGFzay90aW1lcic7XG5cbi8vIFZhbHVlIHR5cGVzXG5pbXBvcnQgYWxwaGEgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYW5nbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IGhleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5pbXBvcnQgaHNsIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmltcG9ydCBweCBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4JztcbmltcG9ydCByZ2IgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgdW5pdCBmcm9tICcuL3ZhbHVlLXR5cGVzL3VuaXQnO1xuZXhwb3J0IGNvbnN0IHZhbHVlVHlwZSA9IHsgYWxwaGEsIGFuZ2xlLCBjb2xvciwgY29tcGxleCwgaGV4LCBoc2wsIHB4LCByZ2IsIHNjYWxlLCBzaGFkb3csIHVuaXQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuLypcbiAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgb3RoZXJ3aXNlIGNyZWF0aW5nIGEgY2lyY3VsYXIgbW9kdWxhciBkZXBlbmRlbmN5LiBGdXR1cmVcbiAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5BY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LmNvbm5lY3QpIHtcbiAgICBlbGVtZW50ID0gZ2V0RmxvdyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59O1xuXG5leHBvcnQgeyBBY3Rpb24gfTsiXX0=

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(82);
	
	var MAX_ELAPSED = 33;
	
	var current = 0;
	var elapsed = 16.7;
	var dilation = 1;
	
	exports.default = {
	  update: function (framestamp) {
	    elapsed = Math.max(Math.min(framestamp - current, MAX_ELAPSED), 1) * dilation;
	    current = framestamp;
	  },
	
	  start: function () {
	    return current = (0, _utils.currentTime)();
	  },
	
	  getElapsed: function () {
	    return elapsed;
	  }
	};
	var setGlobalDilation = exports.setGlobalDilation = function (newDilation) {
	  return dilation = newDilation;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbIk1BWF9FTEFQU0VEIiwiY3VycmVudCIsImVsYXBzZWQiLCJkaWxhdGlvbiIsInVwZGF0ZSIsImZyYW1lc3RhbXAiLCJNYXRoIiwibWF4IiwibWluIiwic3RhcnQiLCJnZXRFbGFwc2VkIiwic2V0R2xvYmFsRGlsYXRpb24iLCJuZXdEaWxhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxjQUFjLEVBQXBCOztBQUVBLElBQUlDLFVBQVUsQ0FBZDtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQUlDLFdBQVcsQ0FBZjs7a0JBRWU7QUFDYkMsVUFBUSxVQUFDQyxVQUFELEVBQWdCO0FBQ3RCSCxjQUFVSSxLQUFLQyxHQUFMLENBQVNELEtBQUtFLEdBQUwsQ0FBU0gsYUFBYUosT0FBdEIsRUFBK0JELFdBQS9CLENBQVQsRUFBc0QsQ0FBdEQsSUFBMkRHLFFBQXJFO0FBQ0FGLGNBQVVJLFVBQVY7QUFDRCxHQUpZOztBQU1iSSxTQUFPO0FBQUEsV0FBTVIsVUFBVSx5QkFBaEI7QUFBQSxHQU5NOztBQVFiUyxjQUFZO0FBQUEsV0FBTVIsT0FBTjtBQUFBO0FBUkMsQztBQVdSLElBQU1TLGdEQUFvQixVQUFDQyxXQUFEO0FBQUEsU0FBaUJULFdBQVdTLFdBQTVCO0FBQUEsQ0FBMUIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyZW50VGltZSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IE1BWF9FTEFQU0VEID0gMzM7XG5cbmxldCBjdXJyZW50ID0gMDtcbmxldCBlbGFwc2VkID0gMTYuNztcbmxldCBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICB9LFxuXG4gIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICBnZXRFbGFwc2VkOiAoKSA9PiBlbGFwc2VkXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsRGlsYXRpb24gPSAobmV3RGlsYXRpb24pID0+IGRpbGF0aW9uID0gbmV3RGlsYXRpb247Il19

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
	var REPLACE_TEMPLATE = '$1-$2';
	var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now;
	
	/*
	  Get var type as string
	  
	  @param: Variable to test
	  @return [string]: Returns, for instance 'Object' if [object Object]
	*/
	var varType = function (variable) {
	  return Object.prototype.toString.call(variable).slice(8, -1);
	};
	
	/*
	  Convert camelCase to dash-case
	
	  @param [string]
	  @return [string]
	*/
	var camelToDash = exports.camelToDash = function (string) {
	  return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
	};
	
	var createDelimited = exports.createDelimited = function (values, terms, delimiter, chop) {
	  var numTerms = terms.length;
	  var combined = '';
	
	  for (var i = 0; i < numTerms; i++) {
	    var term = terms[i];
	    if (values.hasOwnProperty(term)) {
	      combined += values[term] + delimiter;
	    }
	  }
	
	  if (chop) {
	    combined = combined.slice(0, -chop);
	  }
	
	  return combined;
	};
	
	/*
	  Create a function string
	
	  '20px', 'translate' -> 'translate(20px)'
	
	  @param [string]
	  @param [string]
	  @return [string]
	*/
	var createFunctionString = exports.createFunctionString = function (value, prefix) {
	  return prefix + '(' + value + ')';
	};
	
	/*
	  Generate current timestamp
	  
	  @return [timestamp]: Current UNIX timestamp
	*/
	var currentTime = exports.currentTime = HAS_PERFORMANCE_NOW ? function () {
	  return performance.now();
	} : function () {
	  return new Date().getTime();
	};
	
	/*
	  Split a value into a value/unit object
	  
	    "200px" -> { value: 200, unit: "px" }
	    
	  @param [string]: Value to split
	  @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = exports.findValueAndUnit = function (value) {
	  if (value.match) {
	    var splitValue = value.match(/(-?\d*\.?\d*)(.*)/);
	
	    return {
	      value: parseFloat(splitValue[1]),
	      unit: splitValue[2]
	    };
	  } else {
	    return { value: value };
	  }
	};
	
	/*
	  Split color string into map of color properties
	
	  "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]
	
	  { Red: 255... }
	*/
	var getColorValues = exports.getColorValues = function (value, colorTerms) {
	  var numColorTerms = colorTerms.length;
	  var colorValues = {};
	  var colors = splitCommaDelimited(getValueFromFunctionString(value));
	
	  for (var i = 0; i < numColorTerms; i++) {
	    colorValues[colorTerms[i]] = colors[i] !== undefined ? colors[i] : 1;
	  }
	
	  return colorValues;
	};
	
	/*
	  Get value from function string
	
	  "translateX(20px)" -> "20px"
	*/
	var getValueFromFunctionString = exports.getValueFromFunctionString = function (value) {
	  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};
	
	/*
	  Check if two objects have changed from each other
	  
	  @param [object]: Input A
	  @param [object]: Input B
	  @return [boolean]: True if different
	*/
	var hasChanged = exports.hasChanged = function (a, b) {
	  var changed = false;
	
	  for (var key in a) {
	    if (a.hasOwnProperty(key)) {
	      if (hasProperty(b, key)) {
	        if (a[key] !== b[key]) {
	          changed = true;
	        }
	      } else {
	        changed = true;
	      }
	    }
	  }
	
	  return changed;
	};
	
	/*
	  Check if object has property and it isn't undefined
	
	  @param [object]
	  @param [string]
	  @return [boolean]
	*/
	var hasProperty = exports.hasProperty = function (object, propertyName) {
	  return object.hasOwnProperty(propertyName) && object[propertyName] !== undefined;
	};
	
	/*
	  Is utils var an array ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if utils.varType === 'Array'
	*/
	var isArray = exports.isArray = function (arr) {
	  return varType(arr) === 'Array';
	};
	
	/*
	  Is utils var a function ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if utils.varType === 'Function'
	*/
	var isFunc = exports.isFunc = function (obj) {
	  return varType(obj) === 'Function';
	};
	
	/*
	  Is utils var a number?
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof === 'number'
	*/
	var isNum = exports.isNum = function (num) {
	  return typeof num === 'number';
	};
	
	/*
	  Is utils var an object?
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof === 'object'
	*/
	var isObj = exports.isObj = function (obj) {
	  return typeof obj === 'object';
	};
	
	/*
	  Is utils a relative value assignment?
	  
	  @param [string]: Variable to test
	  @return [boolean]: If utils looks like a relative value assignment
	*/
	var isRelativeValue = exports.isRelativeValue = function (value) {
	  return value && value.indexOf && value.indexOf('=') > 0 ? true : false;
	};
	
	/*
	  Is utils var a string ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof str === 'string'
	*/
	var isString = exports.isString = function (str) {
	  return typeof str === 'string';
	};
	
	/*
	  @param [string || NodeList]:
	    If string, treated as selector.
	    If not, treated as preexisting NodeList
	
	  @return [Array]
	*/
	var selectDom = exports.selectDom = function (selector) {
	  var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
	  return nodes.length ? [].slice.call(nodes) : [].push(nodes);
	};
	
	/*
	  Split comma-delimited string
	
	  "foo,bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitCommaDelimited = exports.splitCommaDelimited = function (value) {
	  return isString(value) ? value.split(/,\s*/) : [value];
	};
	
	/*
	  Split space-delimited string
	
	  "foo bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitSpaceDelimited = exports.splitSpaceDelimited = function (value) {
	  return isString(value) ? value.split(' ') : [value];
	};
	
	/*
	  Convert number to x decimal places
	
	  @param [number]
	  @param [number]
	  @return [number]
	*/
	var toDecimal = exports.toDecimal = function (num) {
	  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	  precision = Math.pow(10, precision);
	  return Math.round(num * precision) / precision;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsiQ0FNRUxfQ0FTRV9QQVRURVJOIiwiUkVQTEFDRV9URU1QTEFURSIsIkhBU19QRVJGT1JNQU5DRV9OT1ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsInZhclR5cGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ2YXJpYWJsZSIsInNsaWNlIiwiY2FtZWxUb0Rhc2giLCJzdHJpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjcmVhdGVEZWxpbWl0ZWQiLCJ2YWx1ZXMiLCJ0ZXJtcyIsImRlbGltaXRlciIsImNob3AiLCJudW1UZXJtcyIsImxlbmd0aCIsImNvbWJpbmVkIiwiaSIsInRlcm0iLCJoYXNPd25Qcm9wZXJ0eSIsImNyZWF0ZUZ1bmN0aW9uU3RyaW5nIiwidmFsdWUiLCJwcmVmaXgiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZmluZFZhbHVlQW5kVW5pdCIsIm1hdGNoIiwic3BsaXRWYWx1ZSIsInBhcnNlRmxvYXQiLCJ1bml0IiwiZ2V0Q29sb3JWYWx1ZXMiLCJjb2xvclRlcm1zIiwibnVtQ29sb3JUZXJtcyIsImNvbG9yVmFsdWVzIiwiY29sb3JzIiwic3BsaXRDb21tYURlbGltaXRlZCIsImdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nIiwidW5kZWZpbmVkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImxhc3RJbmRleE9mIiwiaGFzQ2hhbmdlZCIsImEiLCJiIiwiY2hhbmdlZCIsImtleSIsImhhc1Byb3BlcnR5Iiwib2JqZWN0IiwicHJvcGVydHlOYW1lIiwiaXNBcnJheSIsImFyciIsImlzRnVuYyIsIm9iaiIsImlzTnVtIiwibnVtIiwiaXNPYmoiLCJpc1JlbGF0aXZlVmFsdWUiLCJpc1N0cmluZyIsInN0ciIsInNlbGVjdERvbSIsInNlbGVjdG9yIiwibm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwic3BsaXQiLCJzcGxpdFNwYWNlRGVsaW1pdGVkIiwidG9EZWNpbWFsIiwicHJlY2lzaW9uIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxxQkFBcUIsaUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLE9BQXpCO0FBQ0EsSUFBTUMsc0JBQXVCLE9BQU9DLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0NBLFlBQVlDLEdBQS9FOztBQUVBOzs7Ozs7QUFNQSxJQUFNQyxVQUFVO0FBQUEsU0FBWUMsT0FBT0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCQyxRQUEvQixFQUF5Q0MsS0FBekMsQ0FBK0MsQ0FBL0MsRUFBa0QsQ0FBQyxDQUFuRCxDQUFaO0FBQUEsQ0FBaEI7O0FBRUE7Ozs7OztBQU1PLElBQU1DLG9DQUFjLFVBQUNDLE1BQUQ7QUFBQSxTQUFZQSxPQUFPQyxPQUFQLENBQWVkLGtCQUFmLEVBQW1DQyxnQkFBbkMsRUFBcURjLFdBQXJELEVBQVo7QUFBQSxDQUFwQjs7QUFFQSxJQUFNQyw0Q0FBa0IsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQWdCQyxTQUFoQixFQUEyQkMsSUFBM0IsRUFBb0M7QUFDakUsTUFBTUMsV0FBV0gsTUFBTUksTUFBdkI7QUFDQSxNQUFJQyxXQUFXLEVBQWY7O0FBRUEsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFFBQXBCLEVBQThCRyxHQUE5QixFQUFtQztBQUNqQyxRQUFNQyxPQUFPUCxNQUFNTSxDQUFOLENBQWI7QUFDQSxRQUFJUCxPQUFPUyxjQUFQLENBQXNCRCxJQUF0QixDQUFKLEVBQWlDO0FBQy9CRixrQkFBWU4sT0FBT1EsSUFBUCxJQUFlTixTQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUMsSUFBSixFQUFVO0FBQ1JHLGVBQVdBLFNBQVNaLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLENBQUNTLElBQW5CLENBQVg7QUFDRDs7QUFFRCxTQUFPRyxRQUFQO0FBQ0QsQ0FoQk07O0FBa0JQOzs7Ozs7Ozs7QUFTTyxJQUFNSSxzREFBdUIsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FBc0JBLE1BQXRCLFNBQWdDRCxLQUFoQztBQUFBLENBQTdCOztBQUVQOzs7OztBQUtPLElBQU1FLG9DQUFjNUIsc0JBQXNCO0FBQUEsU0FBTUMsWUFBWUMsR0FBWixFQUFOO0FBQUEsQ0FBdEIsR0FBZ0Q7QUFBQSxTQUFNLElBQUkyQixJQUFKLEdBQVdDLE9BQVgsRUFBTjtBQUFBLENBQXBFOztBQUVQOzs7Ozs7OztBQVFPLElBQU1DLDhDQUFtQixVQUFDTCxLQUFELEVBQVc7QUFDekMsTUFBSUEsTUFBTU0sS0FBVixFQUFpQjtBQUNmLFFBQU1DLGFBQWFQLE1BQU1NLEtBQU4sQ0FBWSxtQkFBWixDQUFuQjs7QUFFQSxXQUFPO0FBQ0xOLGFBQU9RLFdBQVdELFdBQVcsQ0FBWCxDQUFYLENBREY7QUFFTEUsWUFBT0YsV0FBVyxDQUFYO0FBRkYsS0FBUDtBQUlELEdBUEQsTUFPTztBQUNMLFdBQU8sRUFBRVAsWUFBRixFQUFQO0FBQ0Q7QUFDRixDQVhNOztBQWFQOzs7Ozs7O0FBT08sSUFBTVUsMENBQWlCLFVBQUNWLEtBQUQsRUFBUVcsVUFBUixFQUF1QjtBQUNuRCxNQUFNQyxnQkFBZ0JELFdBQVdqQixNQUFqQztBQUNBLE1BQU1tQixjQUFjLEVBQXBCO0FBQ0EsTUFBTUMsU0FBU0Msb0JBQW9CQywyQkFBMkJoQixLQUEzQixDQUFwQixDQUFmOztBQUVBLE9BQUssSUFBSUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0IsYUFBcEIsRUFBbUNoQixHQUFuQyxFQUF3QztBQUN0Q2lCLGdCQUFZRixXQUFXZixDQUFYLENBQVosSUFBOEJrQixPQUFPbEIsQ0FBUCxNQUFjcUIsU0FBZixHQUE0QkgsT0FBT2xCLENBQVAsQ0FBNUIsR0FBd0MsQ0FBckU7QUFDRDs7QUFFRCxTQUFPaUIsV0FBUDtBQUNELENBVk07O0FBWVA7Ozs7O0FBS08sSUFBTUcsa0VBQTZCLFVBQUNoQixLQUFEO0FBQUEsU0FBV0EsTUFBTWtCLFNBQU4sQ0FBZ0JsQixNQUFNbUIsT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBckMsRUFBd0NuQixNQUFNb0IsV0FBTixDQUFrQixHQUFsQixDQUF4QyxDQUFYO0FBQUEsQ0FBbkM7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNQyxrQ0FBYSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQyxNQUFJQyxVQUFVLEtBQWQ7O0FBRUEsT0FBSyxJQUFJQyxHQUFULElBQWdCSCxDQUFoQixFQUFtQjtBQUNqQixRQUFJQSxFQUFFeEIsY0FBRixDQUFpQjJCLEdBQWpCLENBQUosRUFBMkI7QUFDekIsVUFBSUMsWUFBWUgsQ0FBWixFQUFlRSxHQUFmLENBQUosRUFBeUI7QUFDdkIsWUFBSUgsRUFBRUcsR0FBRixNQUFXRixFQUFFRSxHQUFGLENBQWYsRUFBdUI7QUFDckJELG9CQUFVLElBQVY7QUFDRDtBQUNGLE9BSkQsTUFJTztBQUNMQSxrQkFBVSxJQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU9BLE9BQVA7QUFDRCxDQWhCTTs7QUFrQlA7Ozs7Ozs7QUFPTyxJQUFNRSxvQ0FBYyxVQUFDQyxNQUFELEVBQVNDLFlBQVQ7QUFBQSxTQUEwQkQsT0FBTzdCLGNBQVAsQ0FBc0I4QixZQUF0QixLQUF1Q0QsT0FBT0MsWUFBUCxNQUF5QlgsU0FBMUY7QUFBQSxDQUFwQjs7QUFFUDs7Ozs7O0FBTU8sSUFBTVksNEJBQVUsVUFBQ0MsR0FBRDtBQUFBLFNBQVNyRCxRQUFRcUQsR0FBUixNQUFpQixPQUExQjtBQUFBLENBQWhCOztBQUVQOzs7Ozs7QUFNTyxJQUFNQywwQkFBUyxVQUFDQyxHQUFEO0FBQUEsU0FBU3ZELFFBQVF1RCxHQUFSLE1BQWlCLFVBQTFCO0FBQUEsQ0FBZjs7QUFFUDs7Ozs7O0FBTU8sSUFBTUMsd0JBQVEsVUFBQ0MsR0FBRDtBQUFBLFNBQVMsT0FBT0EsR0FBUCxLQUFlLFFBQXhCO0FBQUEsQ0FBZDs7QUFFUDs7Ozs7O0FBTU8sSUFBTUMsd0JBQVEsVUFBQ0gsR0FBRDtBQUFBLFNBQVMsT0FBT0EsR0FBUCxLQUFlLFFBQXhCO0FBQUEsQ0FBZDs7QUFFUDs7Ozs7O0FBTU8sSUFBTUksNENBQWtCLFVBQUNwQyxLQUFEO0FBQUEsU0FBWUEsU0FBU0EsTUFBTW1CLE9BQWYsSUFBMEJuQixNQUFNbUIsT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBaEQsR0FBcUQsSUFBckQsR0FBNEQsS0FBdkU7QUFBQSxDQUF4Qjs7QUFFUDs7Ozs7O0FBTU8sSUFBTWtCLDhCQUFXLFVBQUNDLEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWpCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUMsZ0NBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3JDLE1BQU1DLFFBQVMsT0FBT0QsUUFBUCxLQUFvQixRQUFyQixHQUFpQ0UsU0FBU0MsZ0JBQVQsQ0FBMEJILFFBQTFCLENBQWpDLEdBQXVFQSxRQUFyRjtBQUNBLFNBQVFDLE1BQU0vQyxNQUFQLEdBQWlCLEdBQUdYLEtBQUgsQ0FBU0YsSUFBVCxDQUFjNEQsS0FBZCxDQUFqQixHQUF3QyxHQUFHRyxJQUFILENBQVFILEtBQVIsQ0FBL0M7QUFDRCxDQUhNOztBQUtQOzs7Ozs7OztBQVFPLElBQU0xQixvREFBc0IsVUFBQ2YsS0FBRDtBQUFBLFNBQVdxQyxTQUFTckMsS0FBVCxJQUFrQkEsTUFBTTZDLEtBQU4sQ0FBWSxNQUFaLENBQWxCLEdBQXdDLENBQUM3QyxLQUFELENBQW5EO0FBQUEsQ0FBNUI7O0FBRVA7Ozs7Ozs7O0FBUU8sSUFBTThDLG9EQUFzQixVQUFDOUMsS0FBRDtBQUFBLFNBQVdxQyxTQUFTckMsS0FBVCxJQUFrQkEsTUFBTTZDLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUM3QyxLQUFELENBQWhEO0FBQUEsQ0FBNUI7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNK0MsZ0NBQVksVUFBQ2IsR0FBRCxFQUF3QjtBQUFBLE1BQWxCYyxTQUFrQix5REFBTixDQUFNOztBQUMvQ0EsdUJBQVksRUFBWixFQUFrQkEsU0FBbEI7QUFDQSxTQUFPQyxLQUFLQyxLQUFMLENBQVdoQixNQUFNYyxTQUFqQixJQUE4QkEsU0FBckM7QUFDRCxDQUhNIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gIGNvbnN0IG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICBsZXQgY29tYmluZWQgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICBjb25zdCB0ZXJtID0gdGVybXNbaV07XG4gICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaG9wKSB7XG4gICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlLCBwcmVmaXgpID0+IGAke3ByZWZpeH0oJHt2YWx1ZX0pYDtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgOiAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuLypcbiAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgXG4gICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmV4cG9ydCBjb25zdCBmaW5kVmFsdWVBbmRVbml0ID0gKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgIHVuaXQ6ICBzcGxpdFZhbHVlWzJdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xuICB9XG59O1xuXG4vKlxuICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gIGNvbnN0IG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgY29uc3QgY29sb3JWYWx1ZXMgPSB7fTtcbiAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgfVxuXG4gIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qXG4gIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAoYSwgYikgPT4ge1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGtleSBpbiBhKSB7XG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbmV4cG9ydCBjb25zdCBoYXNQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5TmFtZSkgPT4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xuZXhwb3J0IGNvbnN0IGlzRnVuYyA9IChvYmopID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbmV4cG9ydCBjb25zdCBpc051bSA9IChudW0pID0+IHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xuZXhwb3J0IGNvbnN0IGlzUmVsYXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCkgPyB0cnVlIDogZmFsc2U7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuLypcbiAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICBAcmV0dXJuIFtBcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc2VsZWN0RG9tID0gKHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgcmV0dXJuIChub2Rlcy5sZW5ndGgpID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5leHBvcnQgY29uc3QgdG9EZWNpbWFsID0gKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(84);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _calc = __webpack_require__(88);
	
	var _utils = __webpack_require__(82);
	
	var _detect = __webpack_require__(89);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _numericalValues = __webpack_require__(98);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	var _detectAdapter = __webpack_require__(99);
	
	var _detectAdapter2 = _interopRequireDefault(_detectAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	var defaultRenderer = function (_ref) {
	  var state = _ref.state;
	  var adapter = _ref.adapter;
	  var adapterData = _ref.adapterData;
	  var element = _ref.element;
	  return adapter(element, state, adapterData);
	};
	
	var convertIfShouldBeNumber = function (value) {
	  return !isNaN(value) ? parseFloat(value) : value;
	};
	
	var Action = function (_Task) {
	  _inherits(Action, _Task);
	
	  function Action() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Action);
	
	    props.state = {};
	    props.valueKeys = [];
	    props.parentKeys = [];
	    return _possibleConstructorReturn(this, _Task.call(this, props));
	  }
	
	  /*
	    # Set Action properties
	    ## Set user-defined Action properties
	     @param [object]
	    @return [Action]
	  */
	
	
	  Action.prototype.set = function set() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    this.values = this.values || {};
	
	    var values = props.values;
	
	    var propsToSet = _objectWithoutProperties(props, ['values']);
	
	    var inheritable = {};
	
	    // Set non-consumed properties
	    _Task.prototype.set.call(this, propsToSet);
	
	    // Detect correct `adapter` if none exists and `element` is being set
	    if (this.element) {
	      if (!this.adapter) {
	        // Ducktypish check for Adapter
	        this.adapter = (0, _detectAdapter2.default)(this.element);
	
	        if (this.adapter.getElementData) {
	          this.adapterData = this.adapter.getElementData(this.element);
	        }
	      }
	
	      if (!this.onRender) {
	        this.onRender = defaultRenderer;
	      }
	    }
	
	    // Prime an object to inherit from, with only `value` properties
	    for (var key in this.defaultValue) {
	      if (this.defaultValue.hasOwnProperty(key)) {
	        if (propsToSet.hasOwnProperty(key)) {
	          inheritable[key] = propsToSet[key];
	        } else if (this[key] !== undefined) {
	          inheritable[key] = this[key];
	        }
	      }
	    }
	
	    // Update existing values with inheritable properties
	    for (var _key in this.values) {
	      if (this.values.hasOwnProperty(_key)) {
	        this.values[_key] = _extends({}, this.values[_key], inheritable);
	      }
	    }
	
	    // Update
	    if (values) {
	      this.setValues(values, inheritable);
	
	      // Precompute number of value key and parent keys to avoid per-frame measurement
	      this.numValueKeys = this.valueKeys.length;
	      this.numParentKeys = this.parentKeys.length;
	    }
	
	    return this;
	  };
	
	  Action.prototype.setValues = function setValues(values, inherit) {
	    // Iterate over all incoming values and set
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        var hasChildren = false;
	        var children = {};
	
	        // Merge into existing value or create new
	        var valueAlreadyExists = this.values[key] !== undefined;
	        var newValue = valueAlreadyExists ? _extends({}, this.values[key]) : _extends({}, inherit);
	
	        // If values is not an object, assign value to default prop
	        if (!(0, _utils.isObj)(values[key])) {
	          newValue[this.defaultValueProp] = values[key];
	        } else {
	          newValue = _extends({}, newValue, values[key]);
	        }
	
	        // If we've got an adapter, get the current value
	        if (newValue.current === undefined) {
	          if (this.adapter) {
	            newValue.current = convertIfShouldBeNumber(this.adapter.get(this.element, key));
	          }
	        }
	
	        if (newValue.from === undefined && this.adapter) {
	          newValue.from = newValue.current;
	        }
	
	        // Apply default value properties
	        if (!valueAlreadyExists) {
	          newValue = _extends({}, this.defaultValue, newValue);
	        }
	
	        // If we don't have a value type and we do have an Adapter, check for type with value key
	        if (!newValue.type && this.adapter && this.adapter.checkValueType) {
	          newValue.type = this.adapter.checkValueType(key);
	        }
	
	        // If we still don't have a value type and this is the first time we've set this value, check numerical values for strings and test
	        if (!newValue.type && !this.values[key]) {
	          newValue.type = (0, _detect2.default)(newValue);
	        }
	
	        // If we have a value type, handle. This is my least favourite part of Popmotion, so... enjoy.
	        if (newValue.type) {
	          for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	            var propName = _numericalValues2.default[i];
	            var valueProp = newValue[propName];
	
	            // If this prop is a string and we have a splitter, split
	            if (newValue.type.hasOwnProperty('split')) {
	              var splitProp = (0, _utils.isString)(valueProp) ? newValue.type.split(valueProp) : {};
	
	              for (var splitKey in splitProp) {
	                if (splitProp.hasOwnProperty(splitKey)) {
	                  var combinedKey = key + splitKey;
	
	                  // If we don't have a child value for this key, make one
	                  if (!children[combinedKey]) {
	                    var defaultValue = newValue.type.defaultProps && newValue.type.defaultProps[splitKey] ? newValue.type.defaultProps[splitKey] : newValue.type.defaultProps || {};
	
	                    children[combinedKey] = _extends({}, newValue, defaultValue, {
	                      parent: key,
	                      childKey: splitKey
	                    });
	
	                    delete children[combinedKey].type;
	                  }
	
	                  hasChildren = true;
	                  children[combinedKey][propName] = parseFloat(splitProp[splitKey]);
	                }
	              }
	
	              // If we have a template function, generate
	              if (!newValue.template && newValue.type.template && (0, _utils.isString)(valueProp)) {
	                newValue.template = newValue.type.template(valueProp);
	              }
	            } else if (newValue.type.defaultProps) {
	              newValue = _extends({}, newValue.type.defaultProps, newValue);
	
	              // This is a bit of a hack - this entire function is a hack. Sorry future self. I look forward to scrapping the lot of it.
	              if (newValue.type.defaultProps.type) {
	                newValue.type = newValue.type.defaultProps.type;
	              }
	            }
	
	            if (valueProp !== undefined && newValue.type.parse) {
	              newValue[propName] = newValue.type.parse(valueProp, newValue);
	            }
	          }
	        } // End value type nonsense
	
	        // Set `prev` to `current` for first frame after set
	        newValue.prev = newValue.current;
	
	        // If this value doesn't have children, add to valueKeys
	        if (!hasChildren) {
	          if (this.valueKeys.indexOf(key) === -1) {
	            this.valueKeys.push(key);
	          }
	
	          // Or add to parentKeys
	        } else {
	          newValue.children = newValue.children || {};
	
	          if (this.parentKeys.indexOf(key) === -1) {
	            this.parentKeys.push(key);
	          }
	
	          this.setValues(children);
	        }
	
	        this.values[key] = newValue;
	      }
	    }
	  };
	
	  /*
	    Decide whether this Action will render on next frame
	     @param [Action]
	    @param [number]
	    @param [number]
	    @return [boolean]: Return true to render
	  */
	
	
	  Action.prototype.willRender = function willRender(action, frameStamp, elapsed) {
	    var hasChanged = false;
	
	    // Check if base values have updated 
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	
	      // Run transform function (if present)
	      if (value.transform) {
	        value.current = value.transform(value.current, key, this);
	      }
	
	      // Cap minimum
	      if ((0, _utils.isNum)(value.min)) {
	        value.current = Math.max(value.current, value.min);
	      }
	
	      // Cap maximum
	      if ((0, _utils.isNum)(value.max)) {
	        value.current = Math.min(value.current, value.max);
	      }
	
	      // Round number
	      if (value.round) {
	        value.current = Math.round(value.current);
	      }
	
	      value.frameChange = value.current - value.prev;
	
	      // Update velocity
	      if (!this.calculatesVelocity) {
	        value.velocity = (0, _calc.speedPerSecond)(value.frameChange, elapsed);
	      }
	
	      // If this value has changed
	      if (value.prev !== value.current) {
	        hasChanged = true;
	        value.prev = value.current;
	      }
	
	      // Append unit
	      var valueForState = value.type && value.type.serialize ? value.type.serialize(value.current, value) : value.current;
	
	      // Add to state if this is not a child vaue
	      if (!value.parent) {
	        this.state[key] = valueForState;
	      } else {
	        this.values[value.parent].children[value.childKey] = valueForState;
	      }
	    }
	
	    // Update parent values
	    for (var _i = 0; _i < this.numParentKeys; _i++) {
	      var _key2 = this.parentKeys[_i];
	      var _value = this.values[_key2];
	
	      _value.current = _value.type.combine(_value.children, _value.template);
	
	      this.state[_key2] = _value.current;
	    }
	
	    if (this.onFrame) {
	      this.onFrame(this.state, this);
	    }
	
	    return this.onCleanup ? true : hasChanged;
	  };
	
	  Action.prototype.inherit = function inherit() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var values = props.values;
	
	    var propsToSet = _objectWithoutProperties(props, ['values']);
	
	    var newAction = _Task.prototype.inherit.call(this, propsToSet);
	
	    if (values) {
	      newAction.set({ values: values });
	    }
	
	    return newAction;
	  };
	
	  Action.prototype.pause = function pause() {
	    _Task.prototype.stop.call(this);
	    return this;
	  };
	
	  Action.prototype.resume = function resume() {
	    _Task.prototype.start.call(this);
	    return this;
	  };
	
	  Action.prototype.toggle = function toggle() {
	    return this.isActive ? this.pause() : this.resume();
	  };
	
	  Action.prototype.start = function start() {
	    var values = this.values;
	    _Task.prototype.start.call(this);
	
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        values[key].prev = values[key].origin = values[key].current;
	      }
	    }
	
	    return this;
	  };
	
	  Action.extendDefaultValue = function extendDefaultValue(props) {
	    return _extends({}, this.prototype.defaultValue, props);
	  };
	
	  Action.extendDefaultProps = function extendDefaultProps(props) {
	    return _extends({}, this.prototype.defaultProps, props);
	  };
	
	  return Action;
	}(_Task3.default);
	
	Action.prototype.defaultValueProp = 'current';
	Action.prototype.defaultValue = {
	  velocity: 0,
	  round: false,
	  min: undefined,
	  max: undefined,
	  transform: undefined
	};
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6WyJOVU1fTlVNRVJJQ0FMX1ZBTFVFUyIsImxlbmd0aCIsImRlZmF1bHRSZW5kZXJlciIsInN0YXRlIiwiYWRhcHRlciIsImFkYXB0ZXJEYXRhIiwiZWxlbWVudCIsImNvbnZlcnRJZlNob3VsZEJlTnVtYmVyIiwidmFsdWUiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJBY3Rpb24iLCJwcm9wcyIsInZhbHVlS2V5cyIsInBhcmVudEtleXMiLCJzZXQiLCJ2YWx1ZXMiLCJwcm9wc1RvU2V0IiwiaW5oZXJpdGFibGUiLCJnZXRFbGVtZW50RGF0YSIsIm9uUmVuZGVyIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZXMiLCJudW1WYWx1ZUtleXMiLCJudW1QYXJlbnRLZXlzIiwiaW5oZXJpdCIsImhhc0NoaWxkcmVuIiwiY2hpbGRyZW4iLCJ2YWx1ZUFscmVhZHlFeGlzdHMiLCJuZXdWYWx1ZSIsImRlZmF1bHRWYWx1ZVByb3AiLCJjdXJyZW50IiwiZ2V0IiwiZnJvbSIsInR5cGUiLCJjaGVja1ZhbHVlVHlwZSIsImkiLCJwcm9wTmFtZSIsInZhbHVlUHJvcCIsInNwbGl0UHJvcCIsInNwbGl0Iiwic3BsaXRLZXkiLCJjb21iaW5lZEtleSIsImRlZmF1bHRQcm9wcyIsInBhcmVudCIsImNoaWxkS2V5IiwidGVtcGxhdGUiLCJwYXJzZSIsInByZXYiLCJpbmRleE9mIiwicHVzaCIsIndpbGxSZW5kZXIiLCJhY3Rpb24iLCJmcmFtZVN0YW1wIiwiZWxhcHNlZCIsImhhc0NoYW5nZWQiLCJ0cmFuc2Zvcm0iLCJtaW4iLCJNYXRoIiwibWF4Iiwicm91bmQiLCJmcmFtZUNoYW5nZSIsImNhbGN1bGF0ZXNWZWxvY2l0eSIsInZlbG9jaXR5IiwidmFsdWVGb3JTdGF0ZSIsInNlcmlhbGl6ZSIsImNvbWJpbmUiLCJvbkZyYW1lIiwib25DbGVhbnVwIiwibmV3QWN0aW9uIiwicGF1c2UiLCJzdG9wIiwicmVzdW1lIiwic3RhcnQiLCJ0b2dnbGUiLCJpc0FjdGl2ZSIsIm9yaWdpbiIsImV4dGVuZERlZmF1bHRWYWx1ZSIsInByb3RvdHlwZSIsImV4dGVuZERlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLDBCQUFpQkMsTUFBOUM7O0FBRUEsSUFBTUMsa0JBQWtCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsTUFBbUJDLFdBQW5CLFFBQW1CQSxXQUFuQjtBQUFBLE1BQWdDQyxPQUFoQyxRQUFnQ0EsT0FBaEM7QUFBQSxTQUE4Q0YsUUFBUUUsT0FBUixFQUFpQkgsS0FBakIsRUFBd0JFLFdBQXhCLENBQTlDO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUUsMEJBQTBCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXLENBQUNDLE1BQU1ELEtBQU4sQ0FBRCxHQUFnQkUsV0FBV0YsS0FBWCxDQUFoQixHQUFvQ0EsS0FBL0M7QUFBQSxDQUFoQzs7SUFFTUcsTTtZQUFBQSxNOztBQUNKLFdBRElBLE1BQ0osR0FBd0I7QUFBQSxRQUFaQyxLQUFZLHlEQUFKLEVBQUk7O0FBQUEsMEJBRHBCRCxNQUNvQjs7QUFDdEJDLFVBQU1ULEtBQU4sR0FBYyxFQUFkO0FBQ0FTLFVBQU1DLFNBQU4sR0FBa0IsRUFBbEI7QUFDQUQsVUFBTUUsVUFBTixHQUFtQixFQUFuQjtBQUhzQiw0Q0FJdEIsaUJBQU1GLEtBQU4sQ0FKc0I7QUFLdkI7O0FBRUQ7Ozs7Ozs7O0FBUklELFEsV0FlSkksRyxrQkFBZ0I7QUFBQSxRQUFaSCxLQUFZLHlEQUFKLEVBQUk7O0FBQ2QsU0FBS0ksTUFBTCxHQUFjLEtBQUtBLE1BQUwsSUFBZSxFQUE3Qjs7QUFEYyxRQUdOQSxNQUhNLEdBR29CSixLQUhwQixDQUdOSSxN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OUJzQyxPQUFLdEMsU0FKeUI7QUFLOUJtQyxhQUFXbkM7QUFMbUIsQ0FBaEM7O2tCQVFlYixNIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2svVGFzayc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiwgaXNTdHJpbmcgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IGRldGVjdFZhbHVlVHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9kZXRlY3QnO1xuaW1wb3J0IE5VTUVSSUNBTF9WQUxVRVMgZnJvbSAnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnO1xuaW1wb3J0IGRldGVjdEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2RldGVjdC1hZGFwdGVyJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuY29uc3QgZGVmYXVsdFJlbmRlcmVyID0gKHsgc3RhdGUsIGFkYXB0ZXIsIGFkYXB0ZXJEYXRhLCBlbGVtZW50IH0pID0+IGFkYXB0ZXIoZWxlbWVudCwgc3RhdGUsIGFkYXB0ZXJEYXRhKTtcblxuY29uc3QgY29udmVydElmU2hvdWxkQmVOdW1iZXIgPSAodmFsdWUpID0+ICFpc05hTih2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xuXG5jbGFzcyBBY3Rpb24gZXh0ZW5kcyBUYXNrIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgcHJvcHMucGFyZW50S2V5cyA9IFtdO1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8qXG4gICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICovXG4gIHNldChwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgIGNvbnN0IHsgdmFsdWVzLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgLy8gRGV0ZWN0IGNvcnJlY3QgYGFkYXB0ZXJgIGlmIG5vbmUgZXhpc3RzIGFuZCBgZWxlbWVudGAgaXMgYmVpbmcgc2V0XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBkZXRlY3RBZGFwdGVyKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub25SZW5kZXIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHsgLi4udGhpcy52YWx1ZXNba2V5XSwgLi4uaW5oZXJpdGFibGUgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgIC8vIE1lcmdlIGludG8gZXhpc3RpbmcgdmFsdWUgb3IgY3JlYXRlIG5ld1xuICAgICAgICBjb25zdCB2YWx1ZUFscmVhZHlFeGlzdHMgPSB0aGlzLnZhbHVlc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IHsgLi4udGhpcy52YWx1ZXNba2V5XSB9IDogeyAuLi5pbmhlcml0IH07XG5cbiAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgaWYgKCFpc09iaih2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi52YWx1ZXNba2V5XSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyKHRoaXMuYWRhcHRlci5nZXQodGhpcy5lbGVtZW50LCBrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghdmFsdWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSd2ZSBzZXQgdGhpcyB2YWx1ZSwgY2hlY2sgbnVtZXJpY2FsIHZhbHVlcyBmb3Igc3RyaW5ncyBhbmQgdGVzdFxuICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gZGV0ZWN0VmFsdWVUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICBjb25zdCBzcGxpdFByb3AgPSBpc1N0cmluZyh2YWx1ZVByb3ApID8gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApIDoge307XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NvbWJpbmVkS2V5XS50eXBlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gcGFyc2VGbG9hdChzcGxpdFByb3Bbc3BsaXRLZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiBpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLCAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrIC0gdGhpcyBlbnRpcmUgZnVuY3Rpb24gaXMgYSBoYWNrLiBTb3JyeSBmdXR1cmUgc2VsZi4gSSBsb29rIGZvcndhcmQgdG8gc2NyYXBwaW5nIHRoZSBsb3Qgb2YgaXQuXG4gICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLnR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBmb3IgZmlyc3QgZnJhbWUgYWZ0ZXIgc2V0XG4gICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICovXG4gIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZCBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICBpZiAoaXNOdW0odmFsdWUubWluKSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZS5jdXJyZW50LCB2YWx1ZS5tYXgpO1xuICAgICAgfVxuXG4gICAgICAvLyBSb3VuZCBudW1iZXJcbiAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUpID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnR5cGUuY29tYmluZSh2YWx1ZS5jaGlsZHJlbiwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICB9XG5cbiAgaW5oZXJpdChwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuICAgIGNvbnN0IG5ld0FjdGlvbiA9IHN1cGVyLmluaGVyaXQocHJvcHNUb1NldCk7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdBY3Rpb247XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRWYWx1ZShwcm9wcykge1xuICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgLi4ucHJvcHMgfTtcbiAgfVxuXG4gIHN0YXRpYyBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMsIC4uLnByb3BzIH07XG4gIH1cbn1cblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gIHZlbG9jaXR5OiAwLFxuICByb3VuZDogZmFsc2UsXG4gIG1pbjogdW5kZWZpbmVkLFxuICBtYXg6IHVuZGVmaW5lZCxcbiAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _loop = __webpack_require__(85);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                            Base Task class for creating a task on the main render loop.
	                                                                                                                                                          */
	
	
	function cleanup() {
	  this.onCleanup = undefined;
	  loop.deactivate(this.id);
	}
	
	function activate() {
	  this.onCleanup = cleanup;
	}
	
	var Task = function () {
	  function Task(props) {
	    _classCallCheck(this, Task);
	
	    this.id = loop.getTaskId();
	    this.isActive = false;
	
	    if (this.defaultProps) {
	      for (var key in this.defaultProps) {
	        if (this.defaultProps.hasOwnProperty(key)) {
	          this[key] = this.defaultProps[key];
	        }
	      }
	    }
	
	    this.set(props);
	  }
	
	  Task.prototype.set = function set(props) {
	    for (var key in props) {
	      if (props.hasOwnProperty(key)) {
	        this[key] = props[key];
	      }
	    }
	
	    return this;
	  };
	
	  Task.prototype.start = function start() {
	    loop.activate(this.id, this);
	
	    this.onActivateLoop = this.onCleanup = undefined;
	    this.isComplete = false;
	
	    if (this.onStart) {
	      this.onStart(this);
	    }
	
	    return this;
	  };
	
	  Task.prototype.stop = function stop() {
	    loop.deactivate(this.id);
	
	    if (this.onStop) {
	      this.onStop(this);
	    }
	
	    return this;
	  };
	
	  Task.prototype.once = function once() {
	    loop.activate(this.id, this);
	    this.onCleanup = undefined;
	    this.onActivateLoop = activate;
	
	    return this;
	  };
	
	  Task.prototype.complete = function complete() {
	    this.stop();
	
	    if (this.onComplete) {
	      this.onComplete(this);
	    }
	  };
	
	  /*
	    # Extend this Process with new properties
	    ## Returns new instance of this Process's `prototype` with existing and new properties
	     @param [object] (optional)
	    @return [Process]
	  */
	
	
	  Task.prototype.inherit = function inherit(props) {
	    var id = this.id;
	
	    var inheritedProps = _objectWithoutProperties(this, ['id']);
	
	    return new this.constructor(_extends({}, inheritedProps, props));
	  };
	
	  return Task;
	}();
	
	exports.default = Task;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOlsibG9vcCIsImNsZWFudXAiLCJvbkNsZWFudXAiLCJ1bmRlZmluZWQiLCJkZWFjdGl2YXRlIiwiaWQiLCJhY3RpdmF0ZSIsIlRhc2siLCJwcm9wcyIsImdldFRhc2tJZCIsImlzQWN0aXZlIiwiZGVmYXVsdFByb3BzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzZXQiLCJzdGFydCIsIm9uQWN0aXZhdGVMb29wIiwiaXNDb21wbGV0ZSIsIm9uU3RhcnQiLCJzdG9wIiwib25TdG9wIiwib25jZSIsImNvbXBsZXRlIiwib25Db21wbGV0ZSIsImluaGVyaXQiLCJpbmhlcml0ZWRQcm9wcyIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7SUFBWUEsSTs7Ozs7OzBKQUhaOzs7OztBQUtBLFNBQVNDLE9BQVQsR0FBbUI7QUFDakIsT0FBS0MsU0FBTCxHQUFpQkMsU0FBakI7QUFDQUgsT0FBS0ksVUFBTCxDQUFnQixLQUFLQyxFQUFyQjtBQUNEOztBQUVELFNBQVNDLFFBQVQsR0FBb0I7QUFDbEIsT0FBS0osU0FBTCxHQUFpQkQsT0FBakI7QUFDRDs7SUFFb0JNLEk7QUFDbkIsV0FEbUJBLElBQ25CLENBQVlDLEtBQVosRUFBbUI7QUFBQSwwQkFEQUQsSUFDQTs7QUFDakIsU0FBS0YsRUFBTCxHQUFVTCxLQUFLUyxTQUFMLEVBQVY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCOztBQUVBLFFBQUksS0FBS0MsWUFBVCxFQUF1QjtBQUNyQixXQUFLLElBQUlDLEdBQVQsSUFBZ0IsS0FBS0QsWUFBckIsRUFBbUM7QUFDakMsWUFBSSxLQUFLQSxZQUFMLENBQWtCRSxjQUFsQixDQUFpQ0QsR0FBakMsQ0FBSixFQUEyQztBQUN6QyxlQUFLQSxHQUFMLElBQVksS0FBS0QsWUFBTCxDQUFrQkMsR0FBbEIsQ0FBWjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFLRSxHQUFMLENBQVNOLEtBQVQ7QUFDRDs7QUFka0JELE0sV0FnQm5CTyxHLGdCQUFJTixLLEVBQU87QUFDVCxTQUFLLElBQUlJLEdBQVQsSUFBZ0JKLEtBQWhCLEVBQXVCO0FBQ3JCLFVBQUlBLE1BQU1LLGNBQU4sQ0FBcUJELEdBQXJCLENBQUosRUFBK0I7QUFDN0IsYUFBS0EsR0FBTCxJQUFZSixNQUFNSSxHQUFOLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU8sSUFBUDtBQUNELEc7O0FBeEJrQkwsTSxXQTBCbkJRLEssb0JBQVE7QUFDTmYsU0FBS00sUUFBTCxDQUFjLEtBQUtELEVBQW5CLEVBQXVCLElBQXZCOztBQUVBLFNBQUtXLGNBQUwsR0FBc0IsS0FBS2QsU0FBTCxHQUFpQkMsU0FBdkM7QUFDQSxTQUFLYyxVQUFMLEdBQWtCLEtBQWxCOztBQUVBLFFBQUksS0FBS0MsT0FBVCxFQUFrQjtBQUNoQixXQUFLQSxPQUFMLENBQWEsSUFBYjtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEc7O0FBckNrQlgsTSxXQXVDbkJZLEksbUJBQU87QUFDTG5CLFNBQUtJLFVBQUwsQ0FBZ0IsS0FBS0MsRUFBckI7O0FBRUEsUUFBSSxLQUFLZSxNQUFULEVBQWlCO0FBQ2YsV0FBS0EsTUFBTCxDQUFZLElBQVo7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHOztBQS9Da0JiLE0sV0FpRG5CYyxJLG1CQUFPO0FBQ0xyQixTQUFLTSxRQUFMLENBQWMsS0FBS0QsRUFBbkIsRUFBdUIsSUFBdkI7QUFDQSxTQUFLSCxTQUFMLEdBQWlCQyxTQUFqQjtBQUNBLFNBQUthLGNBQUwsR0FBc0JWLFFBQXRCOztBQUVBLFdBQU8sSUFBUDtBQUNELEc7O0FBdkRrQkMsTSxXQXlEbkJlLFEsdUJBQVc7QUFDVCxTQUFLSCxJQUFMOztBQUVBLFFBQUksS0FBS0ksVUFBVCxFQUFxQjtBQUNuQixXQUFLQSxVQUFMLENBQWdCLElBQWhCO0FBQ0Q7QUFDRixHOztBQUVEOzs7Ozs7OztBQWpFbUJoQixNLFdBd0VuQmlCLE8sb0JBQVFoQixLLEVBQU87QUFBQSxRQUNMSCxFQURLLEdBQ3FCLElBRHJCLENBQ0xBLEVBREs7O0FBQUEsUUFDRW9CLGNBREYsNEJBQ3FCLElBRHJCOztBQUViLFdBQU8sSUFBSSxLQUFLQyxXQUFULGNBQTBCRCxjQUExQixFQUE2Q2pCLEtBQTdDLEVBQVA7QUFDRCxHOztTQTNFa0JELEk7OztrQkFBQUEsSSIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQmFzZSBUYXNrIGNsYXNzIGZvciBjcmVhdGluZyBhIHRhc2sgb24gdGhlIG1haW4gcmVuZGVyIGxvb3AuXG4qL1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5mdW5jdGlvbiBjbGVhbnVwKCkge1xuICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgdGhpcy5vbkNsZWFudXAgPSBjbGVhbnVwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldChwcm9wcyk7XG4gIH1cblxuICBzZXQocHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgXG4gICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uY2UoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAqL1xuICBpbmhlcml0KHByb3BzKSB7XG4gICAgY29uc3QgeyBpZCwgLi4uaW5oZXJpdGVkUHJvcHMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHsgLi4uaW5oZXJpdGVkUHJvcHMsIC4uLnByb3BzIH0pO1xuICB9XG59Il19

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getTaskId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(81);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(86);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(87);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var taskStepOrder = [{ name: 'onFrameStart' }, { name: 'onUpdate' }, { name: 'willRender', decideRender: true }, { name: 'onPreRender', isRender: true }, { name: 'onRender', isRender: true }, { name: 'onPostRender', isRender: true }, { name: 'onFrameEnd' }, { name: 'onCleanup' }]; /*
	                                                                                                                                                                                                                                                                                            Core render loop
	                                                                                                                                                                                                                                                                                          
	                                                                                                                                                                                                                                                                                            Some decicisons here have been taken in the name of performance. All hail performance.
	                                                                                                                                                                                                                                                                                            (It turns out microoptimisations do matter when you have 16ms)
	                                                                                                                                                                                                                                                                                          */
	
	var numTaskSteps = taskStepOrder.length;
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
	/*
	  [timestamp]: Frame timestamp
	  [int]: Time since last frame
	*/
	function fireAll(frameStamp, elapsed) {
	  var activeIds = _manager2.default.getActiveIds();
	  var activeTaskCount = activeIds.length;
	
	  for (var i = 0; i < numTaskSteps; i++) {
	    var step = taskStepOrder[i];
	
	    for (var i2 = 0; i2 < activeTaskCount; i2++) {
	      var task = _manager2.default.activeTasks[activeIds[i2]];
	      var result = false;
	
	      // Check if this task has this step, or if it's a render step that we're rendering this frame
	      if (task && task[step.name] && (!step.isRender || step.isRender && task._renderThisFrame === true)) {
	        result = task[step.name].call(task, task, frameStamp, elapsed);
	      }
	
	      // If this is a decide render step and it returns `false`, set willRender to false
	      if (step.decideRender) {
	        task._renderThisFrame = task[step.name] && result !== true ? false : true;
	      }
	    }
	  }
	
	  return _manager2.default.getNonBackgroundRunningCount();
	}
	
	// Function to fire every frame
	function frame(frameStamp) {
	  _timer2.default.update(frameStamp);
	  isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
	
	  if (isRunning) {
	    (0, _tick2.default)(frame);
	  }
	}
	
	// Start loop
	function start() {
	  if (!isRunning) {
	    _timer2.default.start();
	    isRunning = true;
	    (0, _tick2.default)(frame);
	  }
	}
	
	// Exports
	var getTaskId = exports.getTaskId = _manager2.default.getTaskId;
	
	/*
	  [int]: task ID to activate
	  [task]: task to activate
	*/
	function activate(id, task) {
	  _manager2.default.activate(id, task);
	
	  if (!isRunning) {
	    start();
	  }
	}
	
	/*
	  [int]: task ID to deactivate
	*/
	var deactivate = exports.deactivate = _manager2.default.deactivate;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL2xvb3AuanMiXSwibmFtZXMiOlsiYWN0aXZhdGUiLCJ0YXNrU3RlcE9yZGVyIiwibmFtZSIsImRlY2lkZVJlbmRlciIsImlzUmVuZGVyIiwibnVtVGFza1N0ZXBzIiwibGVuZ3RoIiwiaXNSdW5uaW5nIiwiZmlyZUFsbCIsImZyYW1lU3RhbXAiLCJlbGFwc2VkIiwiYWN0aXZlSWRzIiwiZ2V0QWN0aXZlSWRzIiwiYWN0aXZlVGFza0NvdW50IiwiaSIsInN0ZXAiLCJpMiIsInRhc2siLCJhY3RpdmVUYXNrcyIsInJlc3VsdCIsIl9yZW5kZXJUaGlzRnJhbWUiLCJjYWxsIiwiZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCIsImZyYW1lIiwidXBkYXRlIiwiZ2V0RWxhcHNlZCIsInN0YXJ0IiwiZ2V0VGFza0lkIiwiaWQiLCJkZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7O1FBaUZnQkEsUSxHQUFBQSxROztBQTNFaEI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxnQkFBZ0IsQ0FDcEIsRUFBRUMsTUFBTSxjQUFSLEVBRG9CLEVBRXBCLEVBQUVBLE1BQU0sVUFBUixFQUZvQixFQUdwQixFQUFFQSxNQUFNLFlBQVIsRUFBc0JDLGNBQWMsSUFBcEMsRUFIb0IsRUFJcEIsRUFBRUQsTUFBTSxhQUFSLEVBQXVCRSxVQUFVLElBQWpDLEVBSm9CLEVBS3BCLEVBQUVGLE1BQU0sVUFBUixFQUFvQkUsVUFBVSxJQUE5QixFQUxvQixFQU1wQixFQUFFRixNQUFNLGNBQVIsRUFBd0JFLFVBQVUsSUFBbEMsRUFOb0IsRUFPcEIsRUFBRUYsTUFBTSxZQUFSLEVBUG9CLEVBUXBCLEVBQUVBLE1BQU0sV0FBUixFQVJvQixDQUF0QixDLENBVkE7Ozs7Ozs7QUFvQkEsSUFBTUcsZUFBZUosY0FBY0ssTUFBbkM7O0FBRUE7QUFDQSxJQUFJQyxZQUFZLEtBQWhCOztBQUVBOzs7O0FBSUEsU0FBU0MsT0FBVCxDQUFpQkMsVUFBakIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQU1DLFlBQVksa0JBQVFDLFlBQVIsRUFBbEI7QUFDQSxNQUFNQyxrQkFBa0JGLFVBQVVMLE1BQWxDOztBQUVBLE9BQUssSUFBSVEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVCxZQUFwQixFQUFrQ1MsR0FBbEMsRUFBdUM7QUFDckMsUUFBTUMsT0FBT2QsY0FBY2EsQ0FBZCxDQUFiOztBQUVBLFNBQUssSUFBSUUsS0FBSyxDQUFkLEVBQWlCQSxLQUFLSCxlQUF0QixFQUF1Q0csSUFBdkMsRUFBNkM7QUFDM0MsVUFBTUMsT0FBTyxrQkFBUUMsV0FBUixDQUFvQlAsVUFBVUssRUFBVixDQUFwQixDQUFiO0FBQ0EsVUFBSUcsU0FBUyxLQUFiOztBQUVBO0FBQ0EsVUFBSUYsUUFBUUEsS0FBS0YsS0FBS2IsSUFBVixDQUFSLEtBQTRCLENBQUNhLEtBQUtYLFFBQU4sSUFBbUJXLEtBQUtYLFFBQUwsSUFBaUJhLEtBQUtHLGdCQUFMLEtBQTBCLElBQTFGLENBQUosRUFBc0c7QUFDcEdELGlCQUFTRixLQUFLRixLQUFLYixJQUFWLEVBQWdCbUIsSUFBaEIsQ0FBcUJKLElBQXJCLEVBQTJCQSxJQUEzQixFQUFpQ1IsVUFBakMsRUFBNkNDLE9BQTdDLENBQVQ7QUFDRDs7QUFFRDtBQUNBLFVBQUlLLEtBQUtaLFlBQVQsRUFBdUI7QUFDckJjLGFBQUtHLGdCQUFMLEdBQXlCSCxLQUFLRixLQUFLYixJQUFWLEtBQW1CaUIsV0FBVyxJQUEvQixHQUF1QyxLQUF2QyxHQUErQyxJQUF2RTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLGtCQUFRRyw0QkFBUixFQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTQyxLQUFULENBQWVkLFVBQWYsRUFBMkI7QUFDekIsa0JBQU1lLE1BQU4sQ0FBYWYsVUFBYjtBQUNBRixjQUFZQyxRQUFRQyxVQUFSLEVBQW9CLGdCQUFNZ0IsVUFBTixFQUFwQixDQUFaOztBQUVBLE1BQUlsQixTQUFKLEVBQWU7QUFDYix3QkFBS2dCLEtBQUw7QUFDRDtBQUNGOztBQUVEO0FBQ0EsU0FBU0csS0FBVCxHQUFpQjtBQUNmLE1BQUksQ0FBQ25CLFNBQUwsRUFBZ0I7QUFDZCxvQkFBTW1CLEtBQU47QUFDQW5CLGdCQUFZLElBQVo7QUFDQSx3QkFBS2dCLEtBQUw7QUFDRDtBQUNGOztBQUVEO0FBQ08sSUFBTUksZ0NBQVksa0JBQVFBLFNBQTFCOztBQUVQOzs7O0FBSU8sU0FBUzNCLFFBQVQsQ0FBa0I0QixFQUFsQixFQUFzQlgsSUFBdEIsRUFBNEI7QUFDakMsb0JBQVFqQixRQUFSLENBQWlCNEIsRUFBakIsRUFBcUJYLElBQXJCOztBQUVBLE1BQUksQ0FBQ1YsU0FBTCxFQUFnQjtBQUNkbUI7QUFDRDtBQUNGOztBQUVEOzs7QUFHTyxJQUFNRyxrQ0FBYSxrQkFBUUEsVUFBM0IiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvcmUgcmVuZGVyIGxvb3BcblxuICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCB0YXNrU3RlcE9yZGVyID0gW1xuICB7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sXG4gIHsgbmFtZTogJ29uVXBkYXRlJyB9LFxuICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LFxuICB7IG5hbWU6ICdvbkNsZWFudXAnIH1cbl07XG5jb25zdCBudW1UYXNrU3RlcHMgPSB0YXNrU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICBjb25zdCBhY3RpdmVJZHMgPSBtYW5hZ2VyLmdldEFjdGl2ZUlkcygpO1xuICBjb25zdCBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBtYW5hZ2VyLmFjdGl2ZVRhc2tzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHRhc2sgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgIGlmICh0YXNrICYmIHRhc2tbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgKHN0ZXAuaXNSZW5kZXIgJiYgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSAodGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hbmFnZXIuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gIHRpbWVyLnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gIGlmIChpc1J1bm5pbmcpIHtcbiAgICB0aWNrKGZyYW1lKTtcbiAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICB0aW1lci5zdGFydCgpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgdGljayhmcmFtZSk7XG4gIH1cbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGNvbnN0IGdldFRhc2tJZCA9IG1hbmFnZXIuZ2V0VGFza0lkO1xuXG4vKlxuICBbaW50XTogdGFzayBJRCB0byBhY3RpdmF0ZVxuICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgbWFuYWdlci5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICBzdGFydCgpO1xuICB9XG59XG5cbi8qXG4gIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG5leHBvcnQgY29uc3QgZGVhY3RpdmF0ZSA9IG1hbmFnZXIuZGVhY3RpdmF0ZTsiXX0=

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Detect and load an appropriate clock setting for the environment
	*/
	
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var tick = void 0;
	
	if (hasRAF) {
	  tick = function (callback) {
	    return window.requestAnimationFrame(callback);
	  };
	} else {
	  (function () {
	    /*
	      requestAnimationFrame polyfill
	      
	      For IE8/9 Flinstones and non-browser environments
	       Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
	      
	      http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	      http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	       
	      requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	       
	      MIT license
	    */
	    var lastTime = 0;
	
	    tick = function (callback) {
	      var currentTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
	
	      lastTime = currentTime + timeToCall;
	
	      setTimeout(function () {
	        return callback(lastTime);
	      }, timeToCall);
	    };
	  })();
	}
	
	exports.default = tick;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOlsiaGFzUkFGIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGljayIsImNhbGxiYWNrIiwibGFzdFRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztBQUlBLElBQU1BLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT0MscUJBQXpDLEdBQWtFLElBQWxFLEdBQXlFLEtBQXhGOztBQUVBLElBQUlDLGFBQUo7O0FBRUEsSUFBSUgsTUFBSixFQUFZO0FBQ1ZHLFNBQU8sVUFBQ0MsUUFBRDtBQUFBLFdBQWNILE9BQU9DLHFCQUFQLENBQTZCRSxRQUE3QixDQUFkO0FBQUEsR0FBUDtBQUVELENBSEQsTUFHTztBQUFBO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUFjQSxRQUFJQyxXQUFXLENBQWY7O0FBRUFGLFdBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFVBQU1FLGNBQWMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXBCO0FBQ0EsVUFBTUMsYUFBYUMsS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNTCxjQUFjRCxRQUFwQixDQUFaLENBQW5COztBQUVBQSxpQkFBV0MsY0FBY0csVUFBekI7O0FBRUFHLGlCQUFXO0FBQUEsZUFBTVIsU0FBU0MsUUFBVCxDQUFOO0FBQUEsT0FBWCxFQUFxQ0ksVUFBckM7QUFDRCxLQVBEO0FBakJLO0FBeUJOOztrQkFFY04sSSIsImZpbGUiOiJ0aWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICB0aWNrID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	// [int]: Incremented for each new running task
	var currentTaskId = 0;
	
	// [int]: Number of all running taskes
	var totalRunningCount = 0;
	
	// [int]: Number of running taskes excluding background taskes
	var nonBackgroundRunningCount = 0;
	
	// [array]: Array of running task IDs
	var runningIds = [];
	
	// [object]: Map of running taskes
	var activeTasks = {};
	
	// [array]: Array of task IDs queued for activation
	var activateQueue = [];
	
	// [array]: Array of task IDs queued for deactivation
	var deactivateQueue = [];
	
	/*
	  Update activate/deactivate queues
	
	  @param [number]
	  @param [array]
	  @param [array]
	*/
	var updateQueues = function (id, inList, outList) {
	  var inPosition = inList.indexOf(id);
	  var outPosition = outList.indexOf(id);
	
	  if (inPosition === -1) {
	    inList.push(id);
	  }
	
	  if (outPosition > -1) {
	    outList.splice(outPosition, 1);
	  }
	};
	
	/*
	  Update running
	
	  [boolean]: `true` to add
	  [boolean]: `true` if lazy
	*/
	var updateRunningCount = function (add, isLazy) {
	  var modify = add ? 1 : -1;
	
	  totalRunningCount += modify;
	
	  if (!isLazy) {
	    nonBackgroundRunningCount += modify;
	  }
	};
	
	exports.default = {
	  activeTasks: activeTasks,
	
	  // Activate a task
	  activate: function (id, task) {
	    activeTasks[id] = task;
	    task.isActive = true;
	    updateQueues(id, activateQueue, deactivateQueue);
	
	    if (task.onActivate) {
	      task.onActivate(task);
	    }
	
	    if (task.onActivateOnce) {
	      task.onActivateOnce(task);
	    }
	  },
	
	  // Deactivate a task
	  deactivate: function (id) {
	    var task = activeTasks[id];
	
	    if (task) {
	      updateQueues(id, deactivateQueue, activateQueue);
	      task.isActive = false;
	
	      if (task.onDeactivate) {
	        task.onDeactivate(task);
	      }
	    }
	  },
	
	  // Number background taskes
	  getNonBackgroundRunningCount: function () {
	    return nonBackgroundRunningCount;
	  },
	
	  // Increment current task ID and return
	  getTaskId: function () {
	    return currentTaskId++;
	  },
	
	  // Resolve activate/deactivate taskes and return active ids
	  getActiveIds: function () {
	    /*
	      task deactivate queue
	    */
	    var deactivateQueueLength = deactivateQueue.length;
	
	    for (var i = 0; i < deactivateQueueLength; i++) {
	      var id = deactivateQueue[i];
	      var activeIdIndex = runningIds.indexOf(id);
	      var task = activeTasks[id];
	
	      // If this is a running task, deactivate
	      if (activeIdIndex > -1) {
	        runningIds.splice(activeIdIndex, 1);
	        updateRunningCount(false, task.isLazy);
	        delete activeTasks[id];
	      }
	    }
	
	    /*
	      Empty deactivate queue. We use `Array.splice` because it doesn't
	      works on the original array so we don't have to garbage collect anything
	    */
	    deactivateQueue.splice(0, deactivateQueueLength);
	
	    /*
	      task activate queue
	    */
	    var activateQueueLength = activateQueue.length;
	
	    for (var _i = 0; _i < activateQueueLength; _i++) {
	      var _id = activateQueue[_i];
	      var _activeIdIndex = runningIds.indexOf(_id);
	      var _task = activeTasks[_id];
	
	      if (_task && _task.onActivateLoop) {
	        _task.onActivateLoop();
	      }
	
	      // If task isn't already running, activate
	      if (_activeIdIndex === -1 && _task) {
	        if (_task.isPriority) {
	          runningIds.unshift(_id);
	        } else {
	          runningIds.push(_id);
	        }
	
	        updateRunningCount(true, _task.isLazy);
	      }
	    }
	
	    activateQueue.splice(0, activateQueueLength);
	
	    return runningIds;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL21hbmFnZXIuanMiXSwibmFtZXMiOlsiY3VycmVudFRhc2tJZCIsInRvdGFsUnVubmluZ0NvdW50Iiwibm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCIsInJ1bm5pbmdJZHMiLCJhY3RpdmVUYXNrcyIsImFjdGl2YXRlUXVldWUiLCJkZWFjdGl2YXRlUXVldWUiLCJ1cGRhdGVRdWV1ZXMiLCJpZCIsImluTGlzdCIsIm91dExpc3QiLCJpblBvc2l0aW9uIiwiaW5kZXhPZiIsIm91dFBvc2l0aW9uIiwicHVzaCIsInNwbGljZSIsInVwZGF0ZVJ1bm5pbmdDb3VudCIsImFkZCIsImlzTGF6eSIsIm1vZGlmeSIsImFjdGl2YXRlIiwidGFzayIsImlzQWN0aXZlIiwib25BY3RpdmF0ZSIsIm9uQWN0aXZhdGVPbmNlIiwiZGVhY3RpdmF0ZSIsIm9uRGVhY3RpdmF0ZSIsImdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQiLCJnZXRUYXNrSWQiLCJnZXRBY3RpdmVJZHMiLCJkZWFjdGl2YXRlUXVldWVMZW5ndGgiLCJsZW5ndGgiLCJpIiwiYWN0aXZlSWRJbmRleCIsImFjdGl2YXRlUXVldWVMZW5ndGgiLCJvbkFjdGl2YXRlTG9vcCIsImlzUHJpb3JpdHkiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBLElBQUlBLGdCQUFnQixDQUFwQjs7QUFFQTtBQUNBLElBQUlDLG9CQUFvQixDQUF4Qjs7QUFFQTtBQUNBLElBQUlDLDRCQUE0QixDQUFoQzs7QUFFQTtBQUNBLElBQU1DLGFBQWEsRUFBbkI7O0FBRUE7QUFDQSxJQUFNQyxjQUFjLEVBQXBCOztBQUVBO0FBQ0EsSUFBTUMsZ0JBQWdCLEVBQXRCOztBQUVBO0FBQ0EsSUFBTUMsa0JBQWtCLEVBQXhCOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUMsZUFBZSxVQUFDQyxFQUFELEVBQUtDLE1BQUwsRUFBYUMsT0FBYixFQUF5QjtBQUM1QyxNQUFNQyxhQUFhRixPQUFPRyxPQUFQ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QUFpQztBQUMvQmQsY0FBS2MsY0FBTDtBQUNEOztBQUVEO0FBQ0EsVUFBSUYsbUJBQWtCLENBQUMsQ0FBbkIsSUFBd0JaLEtBQTVCLEVBQWtDO0FBQ2hDLFlBQUlBLE1BQUtlLFVBQVQsRUFBcUI7QUFDbkJqQyxxQkFBV2tDLE9BQVgsQ0FBbUI3QixHQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMTCxxQkFBV1csSUFBWCxDQUFnQk4sR0FBaEI7QUFDRDs7QUFFRFEsMkJBQW1CLElBQW5CLEVBQXlCSyxNQUFLSCxNQUE5QjtBQUNEO0FBQ0Y7O0FBRURiLGtCQUFjVSxNQUFkLENBQXFCLENBQXJCLEVBQXdCbUIsbUJBQXhCOztBQUVBLFdBQU8vQixVQUFQO0FBQ0Q7QUE3RlksQyIsImZpbGUiOiJtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbmxldCBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xuY29uc3QgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbYXJyYXldXG4gIEBwYXJhbSBbYXJyYXldXG4qL1xuY29uc3QgdXBkYXRlUXVldWVzID0gKGlkLCBpbkxpc3QsIG91dExpc3QpID0+IHtcbiAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgfVxuXG4gIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICB9XG59O1xuXG4vKlxuICBVcGRhdGUgcnVubmluZ1xuXG4gIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuY29uc3QgdXBkYXRlUnVubmluZ0NvdW50ID0gKGFkZCwgaXNMYXp5KSA9PiB7XG4gIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgaWYgKCFpc0xhenkpIHtcbiAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVUYXNrcyxcblxuICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgYWN0aXZhdGU6IChpZCwgdGFzaykgPT4ge1xuICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgIH1cblxuICAgIGlmICh0YXNrLm9uQWN0aXZhdGVPbmNlKSB7XG4gICAgICB0YXNrLm9uQWN0aXZhdGVPbmNlKHRhc2spO1xuICAgIH1cbiAgfSxcblxuICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICBkZWFjdGl2YXRlOiAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogKCkgPT4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCxcblxuICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgZ2V0VGFza0lkOiAoKSA9PiBjdXJyZW50VGFza0lkKyssXG5cbiAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHRhc2tlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgLypcbiAgICAgIHRhc2sgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyB0YXNrLCBkZWFjdGl2YXRlXG4gICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHRhc2suaXNMYXp5KTtcbiAgICAgICAgZGVsZXRlIGFjdGl2ZVRhc2tzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAvKlxuICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgY29uc3QgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgaWYgKHRhc2sgJiYgdGFzay5vbkFjdGl2YXRlTG9vcCkge1xuICAgICAgICB0YXNrLm9uQWN0aXZhdGVMb29wKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHRhc2spIHtcbiAgICAgICAgaWYgKHRhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCB0YXNrLmlzTGF6eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICByZXR1cm4gcnVubmluZ0lkcztcbiAgfVxufTtcbiJdfQ==

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.ease = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(82);
	
	var ZERO_POINT = {
	  x: 0,
	  y: 0,
	  z: 0
	};
	
	var distance1D = function (a, b) {
	  return Math.abs(a - b);
	};
	
	/*
	  Angle between points
	  
	  Translates the hypothetical line so that the 'from' coordinates
	  are at 0,0
	  
	  @param [object]: X and Y coordinates of from point
	  @param [object]: X and Y cordinates of to point
	  @return [radian]: Angle between the two points in radians
	*/
	var angle = exports.angle = function (a) {
	  var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
	  return radiansToDegrees(Math.atan2(a.x - b.x, a.y - b.y));
	};
	
	/*
	  Convert degrees to radians
	  
	  @param [number]: Value in degrees
	  @return [number]: Value in radians
	*/
	var degreesToRadians = exports.degreesToRadians = function (degrees) {
	  return degrees * Math.PI / 180;
	};
	
	/*
	  Dilate
	  
	  Change the progression between a and b according to dilation.
	  
	  So dilation = 0.5 would change
	  
	  a --------- b
	  
	  to
	  
	  a ---- b
	  
	  @param [number]: Previous value
	  @param [number]: Current value
	  @param [number]: Dilate progress by x
	  @return [number]: Previous value plus the dilated difference
	*/
	var dilate = exports.dilate = function (a, b, dilation) {
	  return a + (b - a) * dilation;
	};
	
	/*
	  Distance
	  
	  Returns the distance between two n dimensional points.
	  
	  @param [object/number]: x and y or just x of point A
	  @param [object/number]: (optional): x and y or just x of point B
	  @return [number]: The distance between the two points
	*/
	var distance = exports.distance = function (a) {
	  var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
	
	  // 1D dimensions
	  if ((0, _utils.isNum)(a)) {
	    return distance1D(a, b);
	
	    // Multi-dimensional
	  } else {
	    var xDelta = distance1D(a.x, b.x);
	    var yDelta = distance1D(a.y, b.y);
	    var zDelta = (0, _utils.isNum)(a.z) ? distance1D(a.z, b.z) : 0;
	
	    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
	  }
	};
	
	/*
	  Ease value within ranged parameters
	  
	  @param [number]: Progress between 0 and 1
	  @param [number]: Value of 0 progress
	  @param [number]: Value of 1 progress
	  @param [string || function]: Name of preset easing
	    to use or generated easing function
	  @return [number]: Value of eased progress in range
	*/
	var ease = exports.ease = function (progress, from, to, ease) {
	  var progressLimited = restrict(progress, 0, 1);
	  var easedProgress = ease(progressLimited);
	
	  return getValueFromProgress(easedProgress, from, to);
	};
	
	/*
	  Hypotenuse
	  
	  Returns the hypotenuse, side C, given the lengths of sides A and B.
	  
	  @param [number]: Length of A
	  @param [number]: Length of B
	  @return [number]: Length of C
	*/
	var hypotenuse = exports.hypotenuse = function (a, b) {
	  return Math.sqrt(a * a + b * b);
	};
	
	/*
	  Value in range from progress
	  
	  Given a lower limit and an upper limit, we return the value within
	  that range as expressed by progress (a number from 0-1)
	  
	  @param [number]: The progress between lower and upper limits expressed 0-1
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @return [number]: Value as calculated from progress within range (not limited within range)
	*/
	var getValueFromProgress = exports.getValueFromProgress = function (progress, from, to) {
	  return -progress * from + progress * to + from;
	};
	
	/*
	  Progress within given range
	  
	  Given a lower limit and an upper limit, we return the progress
	  (expressed as a number 0-1) represented by the given value, and
	  limit that progress to within 0-1.
	  
	  @param [number]: Value to find progress within given range
	  @param [number]: Lower limit 
	  @param [number]: Upper limit
	  @return [number]: Progress of value within range as expressed 0-1
	*/
	var getProgressFromValue = exports.getProgressFromValue = function (value, from, to) {
	  return (value - from) / (to - from);
	};
	
	/*
	  Offset between two objects of numbers
	
	  If property is found in b not present in a, it will return `0` for that prop.
	  
	  @param [Point]: First object
	  @param [Point]: Second object
	  @return [Offset]: Distance metrics between two points
	*/
	var offset = exports.offset = function (a, b) {
	  var offset = {};
	
	  for (var key in b) {
	    if (b.hasOwnProperty(key)) {
	      offset[key] = (0, _utils.hasProperty)(a, key) ? b[key] - a[key] : 0;
	    }
	  }
	
	  return offset;
	};
	
	/*
	  Point from angle and distance
	  
	  @param [object]: 2D point of origin
	  @param [number]: Angle from origin
	  @param [number]: Distance from origin
	  @return [object]: Calculated 2D point
	*/
	var pointFromAngleAndDistance = exports.pointFromAngleAndDistance = function (origin, angle, distance) {
	  angle = degreesToRadians(angle);
	
	  return {
	    x: distance * Math.cos(angle) + origin.x,
	    y: distance * Math.sin(angle) + origin.y
	  };
	};
	
	/*
	  Convert radians to degrees
	  
	  @param [number]: Value in radians
	  @return [number]: Value in degrees
	*/
	var radiansToDegrees = exports.radiansToDegrees = function (radians) {
	  return radians * 180 / Math.PI;
	};
	
	/*
	  Return random number between range
	  
	  @param [number] (optional): Output minimum
	  @param [number] (optional): Output maximum
	  @return [number]: Random number within range, or 0 and 1 if none provided
	*/
	var random = exports.random = function () {
	  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	  return Math.random() * (max - min) + min;
	};
	
	/*
	  Calculate relative value
	  
	  Takes the operator and value from a string, ie "+=5", and applies
	  to the current value to resolve a new target.
	  
	  @param [number]: Current value
	  @param [string]: Relative value
	  @return [number]: New value
	*/
	var relativeValue = exports.relativeValue = function (current, relative) {
	  var newValue = current;
	  var equation = relative.split('=');
	  var operator = equation[0];
	
	  var _findValueAndUnit = (0, _utils.findValueAndUnit)(equation[1]);
	
	  var unit = _findValueAndUnit.unit;
	  var value = _findValueAndUnit.value;
	
	
	  value = parseFloat(value);
	
	  switch (operator) {
	    case '+':
	      newValue += value;
	      break;
	    case '-':
	      newValue -= value;
	      break;
	    case '*':
	      newValue *= value;
	      break;
	    case '/':
	      newValue /= value;
	      break;
	  }
	
	  if (unit) {
	    newValue += unit;
	  }
	
	  return newValue;
	};
	
	/*
	  Restrict value to range
	  
	  Return value within the range of lowerLimit and upperLimit
	  
	  @param [number]: Value to keep within range
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @return [number]: Value as limited within given range
	*/
	var restrict = exports.restrict = function (value, min, max) {
	  return Math.max(Math.min(value, max), min);
	};
	
	/*
	  Framerate-independent smoothing
	
	  @param [number]: New value
	  @param [number]: Old value
	  @param [number]: Frame duration
	  @param [number] (optional): Smoothing (0 is none)
	*/
	var smooth = exports.smooth = function (newValue, oldValue, duration) {
	  var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  return (0, _utils.toDecimal)(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
	};
	
	/*
	  Convert x per second to per frame velocity based on fps
	  
	  @param [number]: Unit per second
	  @param [number]: Frame duration in ms
	*/
	var speedPerFrame = exports.speedPerFrame = function (xps, frameDuration) {
	  return (0, _utils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
	};
	
	/*
	  Convert velocity into velicity per second
	  
	  @param [number]: Unit per frame
	  @param [number]: Frame duration in ms
	*/
	var speedPerSecond = exports.speedPerSecond = function (velocity, frameDuration) {
	  return velocity * (1000 / frameDuration);
	};
	
	/*
	  Create stepped version of 0-1 progress
	  
	  @param [number]: Current value
	  @param [int]: Number of steps
	  @return [number]: Stepped value
	*/
	var stepProgress = exports.stepProgress = function (progress, steps) {
	  var segment = 1 / (steps - 1);
	  var target = 1 - 1 / steps;
	  var progressOfTarget = Math.min(progress / target, 1);
	
	  return Math.floor(progressOfTarget / segment) * segment;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiTWF0aCIsImFicyIsImFuZ2xlIiwicmFkaWFuc1RvRGVncmVlcyIsImF0YW4yIiwiZGVncmVlc1RvUmFkaWFucyIsImRlZ3JlZXMiLCJQSSIsImRpbGF0ZSIsImRpbGF0aW9uIiwiZGlzdGFuY2UiLCJ4RGVsdGEiLCJ5RGVsdGEiLCJ6RGVsdGEiLCJzcXJ0IiwiZWFzZSIsInByb2dyZXNzIiwiZnJvbSIsInRvIiwicHJvZ3Jlc3NMaW1pdGVkIiwicmVzdHJpY3QiLCJlYXNlZFByb2dyZXNzIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJoeXBvdGVudXNlIiwiZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUiLCJ2YWx1ZSIsIm9mZnNldCIsImtleSIsImhhc093blByb3BlcnR5IiwicG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSIsIm9yaWdpbiIsImNvcyIsInNpbiIsInJhZGlhbnMiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJyZWxhdGl2ZVZhbHVlIiwiY3VycmVudCIsInJlbGF0aXZlIiwibmV3VmFsdWUiLCJlcXVhdGlvbiIsInNwbGl0Iiwib3BlcmF0b3IiLCJ1bml0IiwicGFyc2VGbG9hdCIsInNtb290aCIsIm9sZFZhbHVlIiwiZHVyYXRpb24iLCJzbW9vdGhpbmciLCJzcGVlZFBlckZyYW1lIiwieHBzIiwiZnJhbWVEdXJhdGlvbiIsInNwZWVkUGVyU2Vjb25kIiwidmVsb2NpdHkiLCJzdGVwUHJvZ3Jlc3MiLCJzdGVwcyIsInNlZ21lbnQiLCJ0YXJnZXQiLCJwcm9ncmVzc09mVGFyZ2V0IiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBT0EsSUFBTUEsYUFBYTtBQUNqQkMsS0FBRyxDQURjO0FBRWpCQyxLQUFHLENBRmM7QUFHakJDLEtBQUc7QUFIYyxDQUFuQjs7QUFNQSxJQUFNQyxhQUFhLFVBQUND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U0FBNkJFLFlBQVksT0FBT0YsYUFBbkIsQ0FBN0I7QUFBQSxDQUF2Qjs7QUFFUDs7Ozs7OztBQU9PLElBQU1HLHNDQUFlLFVBQUN2QyxRQUFELEVBQVd3QyxLQUFYLEVBQXFCO0FBQy9DLE1BQU1DLFVBQVUsS0FBS0QsUUFBUSxDQUFiLENBQWhCO0FBQ0EsTUFBTUUsU0FBUyxJQUFLLElBQUlGLEtBQXhCO0FBQ0EsTUFBTUcsbUJBQW1CM0QsS0FBS21DLEdBQUwsQ0FBU25CLFdBQVcwQyxNQUFwQixFQUE0QixDQUE1QixDQUF6Qjs7QUFFQSxTQUFPMUQsS0FBSzRELEtBQUwsQ0FBV0QsbUJBQW1CRixPQUE5QixJQUF5Q0EsT0FBaEQ7QUFDRCxDQU5NIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBoYXNQcm9wZXJ0eSxcbiAgaXNOdW0sXG4gIGZpbmRWYWx1ZUFuZFVuaXQsXG4gIHRvRGVjaW1hbFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxuY29uc3QgZGlzdGFuY2UxRCA9IChhLCBiKSA9PiBNYXRoLmFicyhhIC0gYik7XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlcykgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xuZXhwb3J0IGNvbnN0IGRpbGF0ZSA9IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoaXNOdW0oYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgfVxufTtcblxuLypcbiAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5leHBvcnQgY29uc3QgZWFzZSA9IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuIFxuLypcbiAgSHlwb3RlbnVzZVxuICBcbiAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xuZXhwb3J0IGNvbnN0IGh5cG90ZW51c2UgPSAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICBcbiAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoYSwgYikgPT4ge1xuICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICBmb3IgKGxldCBrZXkgaW4gYikge1xuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbmV4cG9ydCBjb25zdCBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSA9PiB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gIFxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLypcbiAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gIFxuICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHJlbGF0aXZlVmFsdWUgPSAoY3VycmVudCwgcmVsYXRpdmUpID0+IHtcbiAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcbiAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICBjb25zdCBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuICBsZXQgeyB1bml0LCB2YWx1ZSB9ID0gZmluZFZhbHVlQW5kVW5pdChlcXVhdGlvblsxXSk7XG5cbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gIGNhc2UgJysnOlxuICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICctJzpcbiAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnKic6XG4gICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJy8nOlxuICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgIGJyZWFrO1xuICB9XG4gIFxuICBpZiAodW5pdCkge1xuICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICBcbiAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG5leHBvcnQgY29uc3QgcmVzdHJpY3QgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(90);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(96);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(97);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _utils = __webpack_require__(82);
	
	var _numericalValues = __webpack_require__(98);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	exports.default = function (value) {
	  for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	    var valueProp = value[_numericalValues2.default[i]];
	    if ((0, _utils.isString)(valueProp)) {
	      if (_color2.default.test(valueProp)) {
	        return _color2.default;
	      } else if (_complex2.default.test(valueProp)) {
	        return _complex2.default;
	      } else if (_unit2.default.test(valueProp)) {
	        return _unit2.default;
	      }
	    }
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOlsiTlVNX05VTUVSSUNBTF9WQUxVRVMiLCJsZW5ndGgiLCJ2YWx1ZSIsImkiLCJ2YWx1ZVByb3AiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHVCQUF1QiwwQkFBaUJDLE1BQTlDOztrQkFFZSxVQUFDQyxLQUFELEVBQVc7QUFDeEIsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILG9CQUFwQixFQUEwQ0csR0FBMUMsRUFBK0M7QUFDN0MsUUFBTUMsWUFBWUYsTUFBTSwwQkFBaUJDLENBQWpCLENBQU4sQ0FBbEI7QUFDQSxRQUFJLHFCQUFTQyxTQUFULENBQUosRUFBeUI7QUFDdkIsVUFBSSxnQkFBVUMsSUFBVixDQUFlRCxTQUFmLENBQUosRUFBK0I7QUFDN0I7QUFDRCxPQUZELE1BRU8sSUFBSSxrQkFBWUMsSUFBWixDQUFpQkQsU0FBakIsQ0FBSixFQUFpQztBQUN0QztBQUNELE9BRk0sTUFFQSxJQUFJLGVBQVNDLElBQVQsQ0FBY0QsU0FBZCxDQUFKLEVBQThCO0FBQ25DO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQyIsImZpbGUiOiJkZXRlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCB1bml0VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy91bml0JztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBOVU1FUklDQUxfVkFMVUVTIGZyb20gJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlUHJvcCA9IHZhbHVlW05VTUVSSUNBTF9WQUxVRVNbaV1dO1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICBpZiAoY29sb3JUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICByZXR1cm4gY29sb3JUeXBlO1xuICAgICAgfSBlbHNlIGlmIChjb21wbGV4VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXhUeXBlO1xuICAgICAgfSBlbHNlIGlmICh1bml0VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIHVuaXRUeXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsiXX0=

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _rgb = __webpack_require__(91);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(94);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(95);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var colorTypes = [_rgb2.default, _hsl2.default, _hex2.default];
	var numColorTypes = colorTypes.length;
	
	exports.default = {
	  defaultProps: _extends({}, _rgb2.default.defaultProps, _hsl2.default.defaultProps),
	
	  test: function (value) {
	    return _rgb2.default.test(value) || _hex2.default.test(value) || _hsl2.default.test(value);
	  },
	
	  split: function (value) {
	    for (var i = 0; i < numColorTypes; i++) {
	      if (colorTypes[i].test(value)) {
	        return colorTypes[i].split(value);
	      }
	    }
	  },
	
	  combine: function (values) {
	    return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6WyJjb2xvclR5cGVzIiwibnVtQ29sb3JUeXBlcyIsImxlbmd0aCIsImRlZmF1bHRQcm9wcyIsInRlc3QiLCJ2YWx1ZSIsInNwbGl0IiwiaSIsImNvbWJpbmUiLCJ2YWx1ZXMiLCJSZWQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSw2Q0FBbkI7QUFDQSxJQUFNQyxnQkFBZ0JELFdBQVdFLE1BQWpDOztrQkFFZTtBQUNiQyw2QkFBbUIsY0FBSUEsWUFBdkIsRUFBd0MsY0FBSUEsWUFBNUMsQ0FEYTs7QUFHYkMsUUFBTSxVQUFDQyxLQUFEO0FBQUEsV0FBVyxjQUFJRCxJQUFKLENBQVNDLEtBQVQsS0FBbUIsY0FBSUQsSUFBSixDQUFTQyxLQUFULENBQW5CLElBQXNDLGNBQUlELElBQUosQ0FBU0MsS0FBVCxDQUFqRDtBQUFBLEdBSE87O0FBS2JDLFNBQU8sVUFBQ0QsS0FBRCxFQUFXO0FBQ2hCLFNBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTixhQUFwQixFQUFtQ00sR0FBbkMsRUFBd0M7QUFDdEMsVUFBSVAsV0FBV08sQ0FBWCxFQUFjSCxJQUFkLENBQW1CQyxLQUFuQixDQUFKLEVBQStCO0FBQzdCLGVBQU9MLFdBQVdPLENBQVgsRUFBY0QsS0FBZCxDQUFvQkQsS0FBcEIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixHQVhZOztBQWFiRyxXQUFTLFVBQUNDLE1BQUQ7QUFBQSxXQUFhQSxPQUFPQyxHQUFQLEtBQWVDLFNBQWhCLEdBQTZCLGNBQUlILE9BQUosQ0FBWUMsTUFBWixDQUE3QixHQUFtRCxjQUFJRCxPQUFKLENBQVlDLE1BQVosQ0FBL0Q7QUFBQTtBQWJJLEMiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcbmltcG9ydCBoc2wgZnJvbSAnLi9oc2wnO1xuaW1wb3J0IGhleCBmcm9tICcuL2hleCc7XG5cbmNvbnN0IGNvbG9yVHlwZXMgPSBbcmdiLCBoc2wsIGhleF07XG5jb25zdCBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+IHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpLFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(82);
	
	var _dictionary = __webpack_require__(92);
	
	var _defaultProps = __webpack_require__(93);
	
	exports.default = {
	  defaultProps: {
	    Red: _defaultProps.rgb,
	    Green: _defaultProps.rgb,
	    Blue: _defaultProps.rgb,
	    Alpha: _defaultProps.opacity
	  },
	
	  test: function (value) {
	    return value && value.indexOf('rgb') > -1;
	  },
	
	  split: function (value) {
	    return (0, _utils.getColorValues)(value, _dictionary.rgb);
	  },
	
	  combine: function (values) {
	    return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiUmVkIiwiR3JlZW4iLCJCbHVlIiwiQWxwaGEiLCJ0ZXN0IiwidmFsdWUiLCJpbmRleE9mIiwic3BsaXQiLCJjb21iaW5lIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O2tCQUVlO0FBQ2JBLGdCQUFjO0FBQ1pDLDBCQURZO0FBRVpDLDRCQUZZO0FBR1pDLDJCQUhZO0FBSVpDO0FBSlksR0FERDs7QUFRYkMsUUFBTSxVQUFDQyxLQUFEO0FBQUEsV0FBWUEsU0FBU0EsTUFBTUMsT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUE3QztBQUFBLEdBUk87O0FBVWJDLFNBQU8sVUFBQ0YsS0FBRDtBQUFBLFdBQVcsMkJBQWVBLEtBQWYsa0JBQVg7QUFBQSxHQVZNOztBQVliRyxXQUFTLFVBQUNDLE1BQUQ7QUFBQSxXQUFZLGlDQUFxQiw0QkFBZ0JBLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRSxDQUFaO0FBQUE7QUFaSSxDIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgY3JlYXRlRnVuY3Rpb25TdHJpbmcsIGdldENvbG9yVmFsdWVzIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IHJnYiBhcyByZ2JUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyByZ2IgYXMgZGVmYXVsdFJHQiwgb3BhY2l0eSBhcyBkZWZhdWx0T3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgUmVkOiBkZWZhdWx0UkdCLFxuICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgQWxwaGE6IGRlZmF1bHRPcGFjaXR5XG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHJnYlRlcm1zKSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var X = 'X';
	var Y = 'Y';
	var ALPHA = 'Alpha';
	
	var axes = exports.axes = [X, Y, 'Z'];
	var rgb = exports.rgb = ['Red', 'Green', 'Blue', ALPHA];
	var hsl = exports.hsl = ['Hue', 'Saturation', 'Lightness', ALPHA];
	var positions = exports.positions = ['Top', 'Right', 'Bottom', 'Left'];
	var shadow = exports.shadow = [X, Y, 'Radius', 'Spread', 'Color'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbIlgiLCJZIiwiQUxQSEEiLCJheGVzIiwicmdiIiwiaHNsIiwicG9zaXRpb25zIiwic2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxJQUFJLEdBQVY7QUFDQSxJQUFNQyxJQUFJLEdBQVY7QUFDQSxJQUFNQyxRQUFRLE9BQWQ7O0FBRU8sSUFBTUMsc0JBQU8sQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQU8sR0FBUCxDQUFiO0FBQ0EsSUFBTUcsb0JBQU0sQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixNQUFqQixFQUF5QkYsS0FBekIsQ0FBWjtBQUNBLElBQU1HLG9CQUFNLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsV0FBdEIsRUFBbUNILEtBQW5DLENBQVo7QUFDQSxJQUFNSSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQWxCO0FBQ0EsSUFBTUMsMEJBQVMsQ0FBQ1AsQ0FBRCxFQUFJQyxDQUFKLEVBQU8sUUFBUCxFQUFpQixRQUFqQixFQUEyQixPQUEzQixDQUFmIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var rgb = exports.rgb = {
	  min: 0,
	  max: 255,
	  round: true
	};
	
	var opacity = exports.opacity = {
	  min: 0,
	  max: 1
	};
	
	var percent = exports.percent = {
	  min: 0,
	  max: 100,
	  unit: '%'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbInJnYiIsIm1pbiIsIm1heCIsInJvdW5kIiwib3BhY2l0eSIsInBlcmNlbnQiLCJ1bml0Il0sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNQSxvQkFBTTtBQUNqQkMsT0FBSyxDQURZO0FBRWpCQyxPQUFLLEdBRlk7QUFHakJDLFNBQU87QUFIVSxDQUFaOztBQU1BLElBQU1DLDRCQUFVO0FBQ3JCSCxPQUFLLENBRGdCO0FBRXJCQyxPQUFLO0FBRmdCLENBQWhCOztBQUtBLElBQU1HLDRCQUFVO0FBQ3JCSixPQUFLLENBRGdCO0FBRXJCQyxPQUFLLEdBRmdCO0FBR3JCSSxRQUFNO0FBSGUsQ0FBaEIiLCJmaWxlIjoiZGVmYXVsdC1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZ2IgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAyNTUsXG4gIHJvdW5kOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3Qgb3BhY2l0eSA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDFcbn07XG5cbmV4cG9ydCBjb25zdCBwZXJjZW50ID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICB1bml0OiAnJSdcbn07Il19

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(93);
	
	var _dictionary = __webpack_require__(92);
	
	var _utils = __webpack_require__(82);
	
	exports.default = {
	  defaultProps: {
	    Hue: {
	      min: 0,
	      max: 360
	    },
	    Saturation: _defaultProps.percent,
	    Lightness: _defaultProps.percent,
	    Alpha: _defaultProps.opacity
	  },
	
	  test: function (value) {
	    return value && value.indexOf('hsl') > -1;
	  },
	
	  split: function (value) {
	    return (0, _utils.getColorValues)(value, _dictionary.hsl);
	  },
	
	  combine: function (values) {
	    return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.hsl, ', ', 2), 'hsla');
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiSHVlIiwibWluIiwibWF4IiwiU2F0dXJhdGlvbiIsIkxpZ2h0bmVzcyIsIkFscGhhIiwidGVzdCIsInZhbHVlIiwiaW5kZXhPZiIsInNwbGl0IiwiY29tYmluZSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiQSxnQkFBYztBQUNaQyxTQUFLO0FBQ0hDLFdBQUssQ0FERjtBQUVIQyxXQUFLO0FBRkYsS0FETztBQUtaQyxxQ0FMWTtBQU1aQyxvQ0FOWTtBQU9aQztBQVBZLEdBREQ7O0FBV2JDLFFBQU0sVUFBQ0MsS0FBRDtBQUFBLFdBQVlBLFNBQVNBLE1BQU1DLE9BQU4sQ0FBYyxLQUFkLElBQXVCLENBQUMsQ0FBN0M7QUFBQSxHQVhPOztBQWFiQyxTQUFPLFVBQUNGLEtBQUQ7QUFBQSxXQUFXLDJCQUFlQSxLQUFmLGtCQUFYO0FBQUEsR0FiTTs7QUFlYkcsV0FBUyxVQUFDQyxNQUFEO0FBQUEsV0FBWSxpQ0FBcUIsNEJBQWdCQSxNQUFoQixtQkFBa0MsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBckIsRUFBaUUsTUFBakUsQ0FBWjtBQUFBO0FBZkksQyIsImZpbGUiOiJoc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgSHVlOiB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDM2MFxuICAgIH0sXG4gICAgU2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgQWxwaGE6IG9wYWNpdHlcbiAgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgaHNsVGVybXMpLFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(91);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  defaultProps: _rgb2.default.defaultProps,
	
	  test: function (value) {
	    return value && value.indexOf('#') > -1;
	  },
	
	  split: function (value) {
	    var r = void 0,
	        g = void 0,
	        b = void 0;
	
	    // If we have 6 characters, ie #FF0000
	    if (value.length > 4) {
	      r = value.substr(1, 2);
	      g = value.substr(3, 2);
	      b = value.substr(5, 2);
	
	      // Or we have 3 characters, ie #F00
	    } else {
	      r = value.substr(1, 1);
	      g = value.substr(2, 1);
	      b = value.substr(3, 1);
	      r += r;
	      g += g;
	      b += b;
	    }
	
	    return {
	      Red: parseInt(r, 16),
	      Green: parseInt(g, 16),
	      Blue: parseInt(b, 16),
	      Alpha: 1
	    };
	  },
	
	  combine: function (values) {
	    return _rgb2.default.combine(values);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwidGVzdCIsInZhbHVlIiwiaW5kZXhPZiIsInNwbGl0IiwiciIsImciLCJiIiwibGVuZ3RoIiwic3Vic3RyIiwiUmVkIiwicGFyc2VJbnQiLCJHcmVlbiIsIkJsdWUiLCJBbHBoYSIsImNvbWJpbmUiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2JBLGdCQUFjLGNBQUlBLFlBREw7O0FBR2JDLFFBQU0sVUFBQ0MsS0FBRDtBQUFBLFdBQVlBLFNBQVNBLE1BQU1DLE9BQU4sQ0FBYyxHQUFkLElBQXFCLENBQUMsQ0FBM0M7QUFBQSxHQUhPOztBQUtiQyxTQUFPLFVBQUNGLEtBQUQsRUFBVztBQUNoQixRQUFJRyxVQUFKO0FBQUEsUUFBT0MsVUFBUDtBQUFBLFFBQVVDLFVBQVY7O0FBRUE7QUFDQSxRQUFJTCxNQUFNTSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEJILFVBQUlILE1BQU1PLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7QUFDQUgsVUFBSUosTUFBTU8sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSjtBQUNBRixVQUFJTCxNQUFNTyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKOztBQUVGO0FBQ0MsS0FORCxNQU1PO0FBQ0xKLFVBQUlILE1BQU1PLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7QUFDQUgsVUFBSUosTUFBTU8sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSjtBQUNBRixVQUFJTCxNQUFNTyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKO0FBQ0FKLFdBQUtBLENBQUw7QUFDQUMsV0FBS0EsQ0FBTDtBQUNBQyxXQUFLQSxDQUFMO0FBQ0Q7O0FBRUQsV0FBTztBQUNMRyxXQUFLQyxTQUFTTixDQUFULEVBQVksRUFBWixDQURBO0FBRUxPLGFBQU9ELFNBQVNMLENBQVQsRUFBWSxFQUFaLENBRkY7QUFHTE8sWUFBTUYsU0FBU0osQ0FBVCxFQUFZLEVBQVosQ0FIRDtBQUlMTyxhQUFPO0FBSkYsS0FBUDtBQU1ELEdBOUJZOztBQWdDYkMsV0FBUyxVQUFDQyxNQUFEO0FBQUEsV0FBWSxjQUFJRCxPQUFKLENBQVlDLE1BQVosQ0FBWjtBQUFBO0FBaENJLEMiLCJmaWxlIjoiaGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgbGV0IHIsIGcsIGI7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICByICs9IHI7XG4gICAgICBnICs9IGc7XG4gICAgICBiICs9IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgIEFscGhhOiAxXG4gICAgfTtcbiAgfSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(82);
	
	var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
	var generateToken = function (token) {
	  return '${' + token + '}';
	};
	
	exports.default = {
	
	  test: function (value) {
	    var matches = value.match(FLOAT_REGEX);
	    return (0, _utils.isArray)(matches) && matches.length > 1;
	  },
	
	  template: function (value) {
	    var counter = 0;
	    return value.replace(FLOAT_REGEX, function () {
	      return generateToken(counter++);
	    });
	  },
	
	  split: function (value) {
	    var splitValue = {};
	
	    value.match(FLOAT_REGEX).forEach(function (value, i) {
	      return splitValue[i] = value;
	    });
	
	    return splitValue;
	  },
	
	  combine: function (values, template) {
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        template = template.replace(generateToken(key), values[key]);
	      }
	    }
	
	    return template;
	  }
	
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbIkZMT0FUX1JFR0VYIiwiZ2VuZXJhdGVUb2tlbiIsInRva2VuIiwidGVzdCIsInZhbHVlIiwibWF0Y2hlcyIsIm1hdGNoIiwibGVuZ3RoIiwidGVtcGxhdGUiLCJjb3VudGVyIiwicmVwbGFjZSIsInNwbGl0Iiwic3BsaXRWYWx1ZSIsImZvckVhY2giLCJpIiwiY29tYmluZSIsInZhbHVlcyIsImtleSIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTUEsY0FBYyxrQkFBcEI7QUFDQSxJQUFNQyxnQkFBZ0IsVUFBQ0MsS0FBRDtBQUFBLFNBQVcsT0FBT0EsS0FBUCxHQUFlLEdBQTFCO0FBQUEsQ0FBdEI7O2tCQUVlOztBQUViQyxRQUFNLFVBQUNDLEtBQUQsRUFBVztBQUNmLFFBQU1DLFVBQVVELE1BQU1FLEtBQU4sQ0FBWU4sV0FBWixDQUFoQjtBQUNBLFdBQVEsb0JBQVFLLE9BQVIsS0FBb0JBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBN0M7QUFDRCxHQUxZOztBQU9iQyxZQUFVLFVBQUNKLEtBQUQsRUFBVztBQUNuQixRQUFJSyxVQUFVLENBQWQ7QUFDQSxXQUFPTCxNQUFNTSxPQUFOLENBQWNWLFdBQWQsRUFBMkI7QUFBQSxhQUFNQyxjQUFjUSxTQUFkLENBQU47QUFBQSxLQUEzQixDQUFQO0FBQ0QsR0FWWTs7QUFZYkUsU0FBTyxVQUFDUCxLQUFELEVBQVc7QUFDaEIsUUFBTVEsYUFBYSxFQUFuQjs7QUFFQVIsVUFBTUUsS0FBTixDQUFZTixXQUFaLEVBQXlCYSxPQUF6QixDQUFpQyxVQUFDVCxLQUFELEVBQVFVLENBQVI7QUFBQSxhQUFjRixXQUFXRSxDQUFYLElBQWdCVixLQUE5QjtBQUFBLEtBQWpDOztBQUVBLFdBQU9RLFVBQVA7QUFDRCxHQWxCWTs7QUFvQmJHLFdBQVMsVUFBQ0MsTUFBRCxFQUFTUixRQUFULEVBQXNCO0FBQzdCLFNBQUssSUFBSVMsR0FBVCxJQUFnQkQsTUFBaEIsRUFBd0I7QUFDdEIsVUFBSUEsT0FBT0UsY0FBUCxDQUFzQkQsR0FBdEIsQ0FBSixFQUFnQztBQUM5QlQsbUJBQVdBLFNBQVNFLE9BQVQsQ0FBaUJULGNBQWNnQixHQUFkLENBQWpCLEVBQXFDRCxPQUFPQyxHQUFQLENBQXJDLENBQVg7QUFDRDtBQUNGOztBQUVELFdBQU9ULFFBQVA7QUFDRDs7QUE1QlksQyIsImZpbGUiOiJjb21wbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xuY29uc3QgZ2VuZXJhdGVUb2tlbiA9ICh0b2tlbikgPT4gJyR7JyArIHRva2VuICsgJ30nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgdGVzdDogKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgfSxcblxuICB0ZW1wbGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICB9LFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG5cbiAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHNwbGl0VmFsdWVbaV0gPSB2YWx1ZSk7XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgfSxcblxuICBjb21iaW5lOiAodmFsdWVzLCB0ZW1wbGF0ZSkgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbn07Il19

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(82);
	
	exports.default = {
	  test: function (unparsed) {
	    var _findValueAndUnit = (0, _utils.findValueAndUnit)(unparsed);
	
	    var value = _findValueAndUnit.value;
	
	    return (0, _utils.isNum)(value) && !isNaN(value) ? true : false;
	  },
	
	  parse: function (unparsed, parent) {
	    var _findValueAndUnit2 = (0, _utils.findValueAndUnit)(unparsed);
	
	    var value = _findValueAndUnit2.value;
	    var unit = _findValueAndUnit2.unit;
	
	
	    if (unit && unit !== unit) {
	      parent.unit = unit;
	    }
	
	    return value;
	  },
	
	  serialize: function (parsed, parent) {
	    return parsed + (parent.unit || '');
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJ1bnBhcnNlZCIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZSIsInBhcmVudCIsInVuaXQiLCJzZXJpYWxpemUiLCJwYXJzZWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYkEsUUFBTSxVQUFVQyxRQUFWLEVBQW9CO0FBQUEsNEJBQ04sNkJBQWlCQSxRQUFqQixDQURNOztBQUFBLFFBQ2hCQyxLQURnQixxQkFDaEJBLEtBRGdCOztBQUV4QixXQUFRLGtCQUFNQSxLQUFOLEtBQWdCLENBQUNDLE1BQU1ELEtBQU4sQ0FBbEIsR0FBa0MsSUFBbEMsR0FBeUMsS0FBaEQ7QUFDRCxHQUpZOztBQU1iRSxTQUFPLFVBQVVILFFBQVYsRUFBb0JJLE1BQXBCLEVBQTRCO0FBQUEsNkJBQ1QsNkJBQWlCSixRQUFqQixDQURTOztBQUFBLFFBQ3pCQyxLQUR5QixzQkFDekJBLEtBRHlCO0FBQUEsUUFDbEJJLElBRGtCLHNCQUNsQkEsSUFEa0I7OztBQUdqQyxRQUFJQSxRQUFRQSxTQUFTQSxJQUFyQixFQUEyQjtBQUN6QkQsYUFBT0MsSUFBUCxHQUFjQSxJQUFkO0FBQ0Q7O0FBRUQsV0FBT0osS0FBUDtBQUNELEdBZFk7O0FBZ0JiSyxhQUFXLFVBQUNDLE1BQUQsRUFBU0gsTUFBVDtBQUFBLFdBQW9CRyxVQUFVSCxPQUFPQyxJQUFQLElBQWUsRUFBekIsQ0FBcEI7QUFBQTtBQWhCRSxDIiwiZmlsZSI6InVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc051bSwgZmluZFZhbHVlQW5kVW5pdCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG4gICAgcmV0dXJuIChpc051bSh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlKSkgPyB0cnVlIDogZmFsc2U7XG4gIH0sXG5cbiAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG5cbiAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuXG4gIHNlcmlhbGl6ZTogKHBhcnNlZCwgcGFyZW50KSA9PiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpXG59O1xuIl19

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQixDIiwiZmlsZSI6Im51bWVyaWNhbC12YWx1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICd2ZWxvY2l0eSddOyJdfQ==

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectAdapter = __webpack_require__(100);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _cssAdapter = __webpack_require__(102);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(113);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(117);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (element) {
	  var detectedAdapter = _objectAdapter2.default;
	
	  // If HTMLElement load CSS
	  if (element instanceof HTMLElement || element.tagName === 'svg') {
	    detectedAdapter = _cssAdapter2.default;
	
	    // Or SVG
	  } else if (element instanceof SVGElement) {
	    if (element.tagName === 'path') {
	      detectedAdapter = _svgPathAdapter2.default;
	    } else {
	      detectedAdapter = _svgAdapter2.default;
	    }
	  }
	
	  return detectedAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOlsiZWxlbWVudCIsImRldGVjdGVkQWRhcHRlciIsIkhUTUxFbGVtZW50IiwidGFnTmFtZSIsIlNWR0VsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLFVBQUNBLE9BQUQsRUFBYTtBQUMxQixNQUFJQyx5Q0FBSjs7QUFFQTtBQUNBLE1BQUlELG1CQUFtQkUsV0FBbkIsSUFBa0NGLFFBQVFHLE9BQVIsS0FBb0IsS0FBMUQsRUFBaUU7QUFDL0RGOztBQUVGO0FBQ0MsR0FKRCxNQUlPLElBQUlELG1CQUFtQkksVUFBdkIsRUFBbUM7QUFDeEMsUUFBSUosUUFBUUcsT0FBUixLQUFvQixNQUF4QixFQUFnQztBQUM5QkY7QUFDRCxLQUZELE1BRU87QUFDTEE7QUFDRDtBQUNGOztBQUVELFNBQU9BLGVBQVA7QUFDRCxDIiwiZmlsZSI6ImRldGVjdC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9iamVjdEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9vYmplY3QtYWRhcHRlcic7XG5pbXBvcnQgY3NzQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmdBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gIGxldCBkZXRlY3RlZEFkYXB0ZXIgPSBvYmplY3RBZGFwdGVyO1xuXG4gIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgIGRldGVjdGVkQWRhcHRlciA9IGNzc0FkYXB0ZXI7XG5cbiAgLy8gT3IgU1ZHXG4gIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z1BhdGhBZGFwdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdBZGFwdGVyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXRlY3RlZEFkYXB0ZXI7XG59O1xuIl19

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _adapter = __webpack_require__(101);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: function (object, key) {
	    return object[key];
	  },
	  setter: function (object, props) {
	    for (var key in props) {
	      if (props.hasOwnProperty(key)) {
	        object[key] = props[key];
	      }
	    }
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbImdldHRlciIsIm9iamVjdCIsImtleSIsInNldHRlciIsInByb3BzIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQzNCQSxVQUFRLFVBQUNDLE1BQUQsRUFBU0MsR0FBVDtBQUFBLFdBQWlCRCxPQUFPQyxHQUFQLENBQWpCO0FBQUEsR0FEbUI7QUFFM0JDLFVBQVEsVUFBQ0YsTUFBRCxFQUFTRyxLQUFULEVBQW1CO0FBQ3pCLFNBQUssSUFBSUYsR0FBVCxJQUFnQkUsS0FBaEIsRUFBdUI7QUFDckIsVUFBSUEsTUFBTUMsY0FBTixDQUFxQkgsR0FBckIsQ0FBSixFQUErQjtBQUM3QkQsZUFBT0MsR0FBUCxJQUFjRSxNQUFNRixHQUFOLENBQWQ7QUFDRDtBQUNGO0FBQ0Y7QUFSMEIsQ0FBZCxDIiwiZmlsZSI6Im9iamVjdC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gIGdldHRlcjogKG9iamVjdCwga2V5KSA9PiBvYmplY3Rba2V5XSxcbiAgc2V0dGVyOiAob2JqZWN0LCBwcm9wcykgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	/*
	  Override `getter` and `setter` to reimplement the interface for new element types.
	
	  Set `.stateMap` as an object key/value map to translate incoming keys to
	  API-specific keys. For instance, { x: 'translateX' }. 
	
	  Set `.valueTypeMap` as an object key/value map to return a value type with
	  `getValueType(key)` (key will be mapped according to `stateMap`)
	*/
	
	var mapKey = function (key, map) {
	  return map ? map[key] || key : key;
	};
	
	exports.default = function (options) {
	  /*
	    Adapter is setter function
	     @param [object]: Object to set properties on
	    @param [object]: Key/value properties to set
	  */
	  var adapter = function (element, props, data) {
	    if (options.stateMap) {
	      // Translate props
	      for (var key in props) {
	        if (props.hasOwnProperty(key)) {
	          var mappedKey = mapKey(key, options.stateMap);
	
	          if (mappedKey !== key) {
	            props[mappedKey] = props[key];
	            delete props[key];
	          }
	        }
	      }
	    }
	
	    return options.setter(element, props, data);
	  };
	
	  adapter.get = function (element, key) {
	    return options.getter(element, mapKey(key, options.stateMap));
	  };
	  adapter.checkValueType = function (key) {
	    return options.valueTypeMap ? options.valueTypeMap[mapKey(key, options.stateMap)] : false;
	  };
	  adapter.getElementData = options.getElementData;
	
	  return adapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOlsibWFwS2V5Iiwia2V5IiwibWFwIiwib3B0aW9ucyIsImFkYXB0ZXIiLCJlbGVtZW50IiwicHJvcHMiLCJkYXRhIiwic3RhdGVNYXAiLCJoYXNPd25Qcm9wZXJ0eSIsIm1hcHBlZEtleSIsInNldHRlciIsImdldCIsImdldHRlciIsImNoZWNrVmFsdWVUeXBlIiwidmFsdWVUeXBlTWFwIiwiZ2V0RWxlbWVudERhdGEiXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7O0FBVUEsSUFBTUEsU0FBUyxVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxTQUFjQSxNQUFNQSxJQUFJRCxHQUFKLEtBQVlBLEdBQWxCLEdBQXdCQSxHQUF0QztBQUFBLENBQWY7O2tCQUVlLFVBQUNFLE9BQUQsRUFBYTtBQUMxQjs7Ozs7QUFNQSxNQUFNQyxVQUFVLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBMEI7QUFDeEMsUUFBSUosUUFBUUssUUFBWixFQUFzQjtBQUNwQjtBQUNBLFdBQUssSUFBSVAsR0FBVCxJQUFnQkssS0FBaEIsRUFBdUI7QUFDckIsWUFBSUEsTUFBTUcsY0FBTixDQUFxQlIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixjQUFNUyxZQUFZVixPQUFPQyxHQUFQLEVBQVlFLFFBQVFLLFFBQXBCLENBQWxCOztBQUVBLGNBQUlFLGNBQWNULEdBQWxCLEVBQXVCO0FBQ3JCSyxrQkFBTUksU0FBTixJQUFtQkosTUFBTUwsR0FBTixDQUFuQjtBQUNBLG1CQUFPSyxNQUFNTCxHQUFOLENBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPRSxRQUFRUSxNQUFSLENBQWVOLE9BQWYsRUFBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixDQUFQO0FBQ0QsR0FoQkQ7O0FBa0JBSCxVQUFRUSxHQUFSLEdBQWMsVUFBQ1AsT0FBRCxFQUFVSixHQUFWO0FBQUEsV0FBa0JFLFFBQVFVLE1BQVIsQ0FBZVIsT0FBZixFQUF3QkwsT0FBT0MsR0FBUCxFQUFZRSxRQUFRSyxRQUFwQixDQUF4QixDQUFsQjtBQUFBLEdBQWQ7QUFDQUosVUFBUVUsY0FBUixHQUF5QixVQUFDYixHQUFEO0FBQUEsV0FBU0UsUUFBUVksWUFBUixHQUF1QlosUUFBUVksWUFBUixDQUFxQmYsT0FBT0MsR0FBUCxFQUFZRSxRQUFRSyxRQUFwQixDQUFyQixDQUF2QixHQUE2RSxLQUF0RjtBQUFBLEdBQXpCO0FBQ0FKLFVBQVFZLGNBQVIsR0FBeUJiLFFBQVFhLGNBQWpDOztBQUVBLFNBQU9aLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gIFNldCBgLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbmNvbnN0IG1hcEtleSA9IChrZXksIG1hcCkgPT4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucykgPT4ge1xuICAvKlxuICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBzZXQgcHJvcGVydGllcyBvblxuICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICovXG4gIGNvbnN0IGFkYXB0ZXIgPSAoZWxlbWVudCwgcHJvcHMsIGRhdGEpID0+IHtcbiAgICBpZiAob3B0aW9ucy5zdGF0ZU1hcCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuc2V0dGVyKGVsZW1lbnQsIHByb3BzLCBkYXRhKTtcbiAgfTtcblxuICBhZGFwdGVyLmdldCA9IChlbGVtZW50LCBrZXkpID0+IG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IChrZXkpID0+IG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gIGFkYXB0ZXIuZ2V0RWxlbWVudERhdGEgPSBvcHRpb25zLmdldEVsZW1lbnREYXRhO1xuXG4gIHJldHVybiBhZGFwdGVyO1xufTsiXX0=

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(103);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(104);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(110);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(112);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(111);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _adapter = __webpack_require__(101);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: function (element, key) {
	    return !_transformProps2.default[key] ? window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] : _valueTypeMap2.default[key].defaultProps.current || 0;
	  },
	  setter: function (element, props) {
	    return element.style.cssText += (0, _build2.default)(props);
	  },
	  valueTypeMap: _valueTypeMap2.default,
	  stateMap: _stateMap2.default
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbImdldHRlciIsImVsZW1lbnQiLCJrZXkiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZGVmYXVsdFByb3BzIiwiY3VycmVudCIsInNldHRlciIsInByb3BzIiwic3R5bGUiLCJjc3NUZXh0IiwidmFsdWVUeXBlTWFwIiwic3RhdGVNYXAiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSx1QkFBYztBQUMzQkEsVUFBUSxVQUFDQyxPQUFELEVBQVVDLEdBQVYsRUFBa0I7QUFDeEIsV0FBUSxDQUFDLHlCQUFlQSxHQUFmLENBQUYsR0FDTEMsT0FBT0MsZ0JBQVAsQ0FBd0JILE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDLHdCQUFTQyxHQUFULENBQXZDLENBREssR0FFTCx1QkFBYUEsR0FBYixFQUFrQkcsWUFBbEIsQ0FBK0JDLE9BQS9CLElBQTBDLENBRjVDO0FBR0QsR0FMMEI7QUFNM0JDLFVBQVEsVUFBQ04sT0FBRCxFQUFVTyxLQUFWO0FBQUEsV0FBb0JQLFFBQVFRLEtBQVIsQ0FBY0MsT0FBZCxJQUF5QixxQkFBb0JGLEtBQXBCLENBQTdDO0FBQUEsR0FObUI7QUFPM0JHLHNDQVAyQjtBQVEzQkM7QUFSMkIsQ0FBZCxDIiwiZmlsZSI6ImNzcy1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vY3NzL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBidWlsZFByb3BlcnR5U3RyaW5nIGZyb20gJy4vY3NzL2J1aWxkJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL2Nzcy9wcmVmaXhlcic7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICBnZXR0ZXI6IChlbGVtZW50LCBrZXkpID0+IHtcbiAgICByZXR1cm4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/XG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXSA6XG4gICAgICB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xuICB9LFxuICBzZXR0ZXI6IChlbGVtZW50LCBwcm9wcykgPT4gZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGJ1aWxkUHJvcGVydHlTdHJpbmcocHJvcHMpLFxuICB2YWx1ZVR5cGVNYXAsXG4gIHN0YXRlTWFwXG59KTtcblxuIl19

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var TRANSLATE = 'translate';
	
	exports.default = {
	  x: TRANSLATE + 'X',
	  y: TRANSLATE + 'Y',
	  z: TRANSLATE + 'Z'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOlsiVFJBTlNMQVRFIiwieCIsInkiLCJ6Il0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxZQUFZLFdBQWxCOztrQkFFZTtBQUNiQyxLQUFHRCxZQUFZLEdBREY7QUFFYkUsS0FBR0YsWUFBWSxHQUZGO0FBR2JHLEtBQUdILFlBQVk7QUFIRixDIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(105);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(106);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(90);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(107);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(108);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _px = __webpack_require__(109);
	
	var _px2 = _interopRequireDefault(_px);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  // Color props
	  color: _color2.default,
	  backgroundColor: _color2.default,
	  outlineColor: _color2.default,
	  fill: _color2.default,
	  stroke: _color2.default,
	
	  // Border props
	  borderColor: _color2.default,
	  borderTopColor: _color2.default,
	  borderRightColor: _color2.default,
	  borderBottomColor: _color2.default,
	  borderLeftColor: _color2.default,
	  borderRadius: _px2.default,
	
	  // Positioning
	  width: _px2.default,
	  height: _px2.default,
	
	  // Shadows
	  textShadow: _shadow2.default,
	  boxShadow: _shadow2.default,
	
	  // Transform properties
	  rotate: _angle2.default,
	  rotateX: _angle2.default,
	  rotateY: _angle2.default,
	  rotateZ: _angle2.default,
	  scale: _scale2.default,
	  scaleX: _scale2.default,
	  scaleY: _scale2.default,
	  scaleZ: _scale2.default,
	  skewX: _angle2.default,
	  skewY: _angle2.default,
	  distance: _px2.default,
	  translateX: _px2.default,
	  translateY: _px2.default,
	  translateZ: _px2.default,
	  perspective: _px2.default,
	  opacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6WyJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmVDb2xvciIsImZpbGwiLCJzdHJva2UiLCJib3JkZXJDb2xvciIsImJvcmRlclRvcENvbG9yIiwiYm9yZGVyUmlnaHRDb2xvciIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyTGVmdENvbG9yIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0U2hhZG93IiwiYm94U2hhZG93Iiwicm90YXRlIiwicm90YXRlWCIsInJvdGF0ZVkiLCJyb3RhdGVaIiwic2NhbGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZVoiLCJza2V3WCIsInNrZXdZIiwiZGlzdGFuY2UiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVoiLCJwZXJzcGVjdGl2ZSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiO0FBQ0FBLHdCQUZhO0FBR2JDLGtDQUhhO0FBSWJDLCtCQUphO0FBS2JDLHVCQUxhO0FBTWJDLHlCQU5hOztBQVFiO0FBQ0FDLDhCQVRhO0FBVWJDLGlDQVZhO0FBV2JDLG1DQVhhO0FBWWJDLG9DQVphO0FBYWJDLGtDQWJhO0FBY2JDLDRCQWRhOztBQWdCYjtBQUNBQyxxQkFqQmE7QUFrQmJDLHNCQWxCYTs7QUFvQmI7QUFDQUMsOEJBckJhO0FBc0JiQyw2QkF0QmE7O0FBd0JiO0FBQ0FDLHlCQXpCYTtBQTBCYkMsMEJBMUJhO0FBMkJiQywwQkEzQmE7QUE0QmJDLDBCQTVCYTtBQTZCYkMsd0JBN0JhO0FBOEJiQyx5QkE5QmE7QUErQmJDLHlCQS9CYTtBQWdDYkMseUJBaENhO0FBaUNiQyx3QkFqQ2E7QUFrQ2JDLHdCQWxDYTtBQW1DYkMsd0JBbkNhO0FBb0NiQywwQkFwQ2E7QUFxQ2JDLDBCQXJDYTtBQXNDYkMsMEJBdENhO0FBdUNiQywyQkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5nbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHB4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsXG5cbiAgLy8gU2hhZG93c1xuICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogYW5nbGUsXG4gIHJvdGF0ZVg6IGFuZ2xlLFxuICByb3RhdGVZOiBhbmdsZSxcbiAgcm90YXRlWjogYW5nbGUsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGFuZ2xlLFxuICBza2V3WTogYW5nbGUsXG4gIGRpc3RhbmNlOiBweCxcbiAgdHJhbnNsYXRlWDogcHgsXG4gIHRyYW5zbGF0ZVk6IHB4LFxuICB0cmFuc2xhdGVaOiBweCxcbiAgcGVyc3BlY3RpdmU6IHB4LFxuICBvcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(97);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  defaultProps: {
	    unit: 'deg',
	    type: _unit2.default
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJ1bml0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsZ0JBQWM7QUFDWkMsVUFBTSxLQURNO0FBRVpDO0FBRlk7QUFERCxDIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgdW5pdDogJ2RlZycsXG4gICAgdHlwZTogdW5pdFR5cGVcbiAgfVxufTsiXX0=

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(93);
	
	exports.default = {
	  defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYkE7QUFEYSxDIiwiZmlsZSI6ImFscGhhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiBvcGFjaXR5XG59OyJdfQ==

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	  defaultProps: {
	    current: 1
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDYkEsZ0JBQWM7QUFDWkMsYUFBUztBQURHO0FBREQsQyIsImZpbGUiOiJzY2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgY3VycmVudDogMVxuICB9XG59OyJdfQ==

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _color = __webpack_require__(90);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(109);
	
	var _dictionary = __webpack_require__(92);
	
	var _utils = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shadowWithoutColorTerms = _dictionary.shadow.slice(0, 4);
	
	exports.default = {
	  defaultProps: _extends({}, _color2.default.defaultProps, {
	    X: _px.defaultProps,
	    Y: _px.defaultProps,
	    Radius: _px.defaultProps,
	    Spread: _px.defaultProps
	  }),
	
	  split: function (value) {
	    var bits = (0, _utils.splitSpaceDelimited)(value);
	    var hasReachedColor = false;
	    var colorProp = '';
	    var splitValue = {};
	
	    bits.forEach(function (bit, i) {
	      // If we've reached the color props, append to color string
	      if (hasReachedColor || _color2.default.test(bit)) {
	        hasReachedColor = true;
	        colorProp += bit;
	
	        // Else process shadow value
	      } else {
	        splitValue[_dictionary.shadow[i]] = bit;
	      }
	    });
	
	    var splitColorProps = _color2.default.split(colorProp);
	
	    return _extends({}, splitValue, { splitColorProps: splitColorProps });
	  },
	
	  combine: function (values) {
	    return (0, _utils.createDelimited)(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOlsic2hhZG93V2l0aG91dENvbG9yVGVybXMiLCJzbGljZSIsImRlZmF1bHRQcm9wcyIsIlgiLCJZIiwiUmFkaXVzIiwiU3ByZWFkIiwic3BsaXQiLCJ2YWx1ZSIsImJpdHMiLCJoYXNSZWFjaGVkQ29sb3IiLCJjb2xvclByb3AiLCJzcGxpdFZhbHVlIiwiZm9yRWFjaCIsImJpdCIsImkiLCJ0ZXN0Iiwic3BsaXRDb2xvclByb3BzIiwiY29tYmluZSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLDBCQUEwQixtQkFBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFoQzs7a0JBRWU7QUFDYkMsNkJBQ0ssZ0JBQU1BLFlBRFg7QUFFRUMsdUJBRkY7QUFHRUMsdUJBSEY7QUFJRUMsNEJBSkY7QUFLRUM7QUFMRixJQURhOztBQVNiQyxTQUFPLFVBQUNDLEtBQUQsRUFBVztBQUNoQixRQUFNQyxPQUFPLGdDQUFvQkQsS0FBcEIsQ0FBYjtBQUNBLFFBQUlFLGtCQUFrQixLQUF0QjtBQUNBLFFBQUlDLFlBQVksRUFBaEI7QUFDQSxRQUFJQyxhQUFhLEVBQWpCOztBQUVBSCxTQUFLSSxPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDdkI7QUFDQSxVQUFJTCxtQkFBbUIsZ0JBQU1NLElBQU4sQ0FBV0YsR0FBWCxDQUF2QixFQUF3QztBQUN0Q0osMEJBQWtCLElBQWxCO0FBQ0FDLHFCQUFhRyxHQUFiOztBQUVGO0FBQ0MsT0FMRCxNQUtPO0FBQ0xGLG1CQUFXLG1CQUFZRyxDQUFaLENBQVgsSUFBNkJELEdBQTdCO0FBQ0Q7QUFDRixLQVZEOztBQVlBLFFBQU1HLGtCQUFrQixnQkFBTVYsS0FBTixDQUFZSSxTQUFaLENBQXhCOztBQUVBLHdCQUFZQyxVQUFaLElBQXdCSyxnQ0FBeEI7QUFDRCxHQTlCWTs7QUFnQ2JDLFdBQVMsVUFBQ0MsTUFBRDtBQUFBLFdBQVksNEJBQWdCQSxNQUFoQixFQUF3Qm5CLHVCQUF4QixFQUFpRCxHQUFqRCxJQUF3RCxnQkFBTWtCLE9BQU4sQ0FBY0MsTUFBZCxDQUFwRTtBQUFBO0FBaENJLEMiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgWDogcHhEZWZhdWx0UHJvcHMsXG4gICAgWTogcHhEZWZhdWx0UHJvcHMsXG4gICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICBTcHJlYWQ6IHB4RGVmYXVsdFByb3BzXG4gIH0sXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICBsZXQgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgbGV0IGNvbG9yUHJvcCA9ICcnO1xuICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICBiaXRzLmZvckVhY2goKGJpdCwgaSkgPT4ge1xuICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdChiaXQpKSB7XG4gICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgIGNvbG9yUHJvcCArPSBiaXQ7XG5cbiAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwbGl0VmFsdWVbc2hhZG93VGVybXNbaV1dID0gYml0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgIHJldHVybiB7IC4uLnNwbGl0VmFsdWUsIHNwbGl0Q29sb3JQcm9wcyB9O1xuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _unit = __webpack_require__(97);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  defaultProps: {
	    unit: 'px',
	    type: _unit2.default
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJ1bml0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsZ0JBQWM7QUFDWkMsVUFBTSxJQURNO0FBRVpDO0FBRlk7QUFERCxDIiwiZmlsZSI6InB4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgdW5pdDogJ3B4JyxcbiAgICB0eXBlOiB1bml0VHlwZVxuICB9XG59OyJdfQ==

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(111);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(112);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE_Z = 'translateZ';
	
	exports.default = function (state, disableHardwareAcceleration) {
	  var propertyString = '';
	  var transformString = '';
	  var transformHasZ = false;
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      var value = state[key];
	
	      if (_transformProps2.default[key]) {
	        transformString += key + '(' + value + ') ';
	        transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
	      } else {
	        propertyString += ';' + (0, _prefixer2.default)(key, true) + ':' + value;
	      }
	    }
	  }
	
	  if (transformString !== '') {
	    if (!transformHasZ && !disableHardwareAcceleration) {
	      transformString += TRANSLATE_Z + '(0px)';
	    }
	
	    propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
	  }
	
	  return propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6WyJUUkFOU0xBVEVfWiIsInN0YXRlIiwiZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIiwicHJvcGVydHlTdHJpbmciLCJ0cmFuc2Zvcm1TdHJpbmciLCJ0cmFuc2Zvcm1IYXNaIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsWUFBcEI7O2tCQUVlLFVBQUNDLEtBQUQsRUFBUUMsMkJBQVIsRUFBd0M7QUFDckQsTUFBSUMsaUJBQWlCLEVBQXJCO0FBQ0EsTUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsTUFBSUMsZ0JBQWdCLEtBQXBCOztBQUVBLE9BQUssSUFBSUMsR0FBVCxJQUFnQkwsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTU0sY0FBTixDQUFxQkQsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFNRSxRQUFRUCxNQUFNSyxHQUFOLENBQWQ7O0FBRUEsVUFBSSx5QkFBZUEsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCRiwyQkFBbUJFLE1BQU0sR0FBTixHQUFZRSxLQUFaLEdBQW9CLElBQXZDO0FBQ0FILHdCQUFpQkMsUUFBUU4sV0FBVCxHQUF3QixJQUF4QixHQUErQkssYUFBL0M7QUFFRCxPQUpELE1BSU87QUFDTEYsMEJBQWtCLE1BQU0sd0JBQVNHLEdBQVQsRUFBYyxJQUFkLENBQU4sR0FBNEIsR0FBNUIsR0FBa0NFLEtBQXBEO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUlKLG9CQUFvQixFQUF4QixFQUE0QjtBQUMxQixRQUFJLENBQUNDLGFBQUQsSUFBa0IsQ0FBQ0gsMkJBQXZCLEVBQW9EO0FBQ2xERSx5QkFBbUJKLGNBQWMsT0FBakM7QUFDRDs7QUFFREcsc0JBQWtCLE1BQU0sd0JBQVMsV0FBVCxFQUFzQixJQUF0QixDQUFOLEdBQW9DLEdBQXBDLEdBQTBDQyxlQUE1RDtBQUNEOztBQUVELFNBQU9ELGNBQVA7QUFDRCxDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihrZXksIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59OyJdfQ==

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(92);
	
	var transformProps = {};
	
	var SCALE = 'scale';
	var ROTATE = 'rotate';
	var TRANSFORM_PERSPECTIVE = 'transformPerspective';
	var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];
	
	transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;
	
	TERMS.forEach(function (term) {
	  return _dictionary.axes.forEach(function (axis) {
	    return transformProps[term + axis] = true;
	  });
	});
	
	exports.default = transformProps;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOlsidHJhbnNmb3JtUHJvcHMiLCJTQ0FMRSIsIlJPVEFURSIsIlRSQU5TRk9STV9QRVJTUEVDVElWRSIsIlRFUk1TIiwiZm9yRWFjaCIsInRlcm0iLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBSUEsaUJBQWlCLEVBQXJCOztBQUVBLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNQyxRQUFRLENBQUMsV0FBRCxFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QixNQUE3QixFQUFxQ0MscUJBQXJDLENBQWQ7O0FBRUFILGVBQWVFLE1BQWYsSUFBeUJGLGVBQWVDLEtBQWYsSUFBd0JELGVBQWVHLHFCQUFmLElBQXdDLElBQXpGOztBQUVBQyxNQUFNQyxPQUFOLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFNBQVUsaUJBQUtELE9BQUwsQ0FBYSxVQUFDRSxJQUFEO0FBQUEsV0FBVVAsZUFBZU0sT0FBT0MsSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZVAsYyIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGVzIH0gZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG5jb25zdCBTQ0FMRSA9ICdzY2FsZSc7XG5jb25zdCBST1RBVEUgPSAncm90YXRlJztcbmNvbnN0IFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG5jb25zdCBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goKHRlcm0pID0+IGF4ZXMuZm9yRWFjaCgoYXhpcykgPT4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZSkpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1Qcm9wczsiXX0=

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(82);
	
	var camelCache = {};
	var dashCache = {};
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var testElement = void 0;
	
	/*
	  Test style property for prefixed version
	  
	  @param [string]: Style property
	  @return [string]: Cached property name
	*/
	var testPrefix = function (key) {
	  testElement = testElement || document.createElement('div');
	
	  for (var i = 0; i < numPrefixes; i++) {
	    var prefix = prefixes[i];
	    var noPrefix = prefix === '';
	    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	    if (prefixedPropertyName in testElement.style) {
	      camelCache[key] = prefixedPropertyName;
	      dashCache[key] = '' + (noPrefix ? '' : '-') + (0, _utils.camelToDash)(prefixedPropertyName);
	    }
	  }
	};
	
	exports.default = function (key, asDashCase) {
	  var cache = asDashCase ? dashCache : camelCache;
	
	  if (!cache[key]) {
	    testPrefix(key);
	  }
	
	  return cache[key];
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6WyJjYW1lbENhY2hlIiwiZGFzaENhY2hlIiwicHJlZml4ZXMiLCJudW1QcmVmaXhlcyIsImxlbmd0aCIsInRlc3RFbGVtZW50IiwidGVzdFByZWZpeCIsImtleSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJwcmVmaXgiLCJub1ByZWZpeCIsInByZWZpeGVkUHJvcGVydHlOYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInN0eWxlIiwiYXNEYXNoQ2FzZSIsImNhY2hlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxFQUFuQjtBQUNBLElBQU1DLFlBQVksRUFBbEI7QUFDQSxJQUFNQyxXQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBakI7QUFDQSxJQUFNQyxjQUFjRCxTQUFTRSxNQUE3QjtBQUNBLElBQUlDLG9CQUFKOztBQUVBOzs7Ozs7QUFNQSxJQUFNQyxhQUFhLFVBQUNDLEdBQUQsRUFBUztBQUMxQkYsZ0JBQWNBLGVBQWVHLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7O0FBRUEsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLFdBQXBCLEVBQWlDTyxHQUFqQyxFQUFzQztBQUNwQyxRQUFNQyxTQUFTVCxTQUFTUSxDQUFULENBQWY7QUFDQSxRQUFNRSxXQUFZRCxXQUFXLEVBQTdCO0FBQ0EsUUFBTUUsdUJBQXVCRCxXQUFXTCxHQUFYLEdBQWlCSSxTQUFTSixJQUFJTyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEVBQVQsR0FBdUNSLElBQUlTLEtBQUosQ0FBVSxDQUFWLENBQXJGOztBQUVBLFFBQUlILHdCQUF3QlIsWUFBWVksS0FBeEMsRUFBK0M7QUFDN0NqQixpQkFBV08sR0FBWCxJQUFrQk0sb0JBQWxCO0FBQ0FaLGdCQUFVTSxHQUFWLFVBQXFCSyxXQUFXLEVBQVgsR0FBZ0IsR0FBckMsSUFBNEMsd0JBQVlDLG9CQUFaLENBQTVDO0FBQ0Q7QUFDRjtBQUNGLENBYkQ7O2tCQWVlLFVBQUNOLEdBQUQsRUFBTVcsVUFBTixFQUFxQjtBQUNsQyxNQUFNQyxRQUFRRCxhQUFhakIsU0FBYixHQUF5QkQsVUFBdkM7O0FBRUEsTUFBSSxDQUFDbUIsTUFBTVosR0FBTixDQUFMLEVBQWlCO0FBQ2ZELGVBQVdDLEdBQVg7QUFDRDs7QUFFRCxTQUFPWSxNQUFNWixHQUFOLENBQVA7QUFDRCxDIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBjYW1lbENhY2hlID0ge307XG5jb25zdCBkYXNoQ2FjaGUgPSB7fTtcbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG5jb25zdCBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbmxldCB0ZXN0RWxlbWVudDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3Qgbm9QcmVmaXggPSAocHJlZml4ID09PSAnJyk7XG4gICAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9IGAkeyhub1ByZWZpeCA/ICcnIDogJy0nKX0ke2NhbWVsVG9EYXNoKHByZWZpeGVkUHJvcGVydHlOYW1lKX1gO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGtleSwgYXNEYXNoQ2FzZSkgPT4ge1xuICBjb25zdCBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbiJdfQ==

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getElementData = exports.setter = exports.getter = undefined;
	
	var _stateMap = __webpack_require__(103);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(114);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _transformProps = __webpack_require__(111);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _build = __webpack_require__(115);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(116);
	
	var _adapter = __webpack_require__(101);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	  return !_transformProps2.default[key] ? (0, _attrAdapter.getter)(element, key) : _valueTypeMap2.default[key] && _valueTypeMap2.default[key].defaultProps ? _valueTypeMap2.default[key].defaultProps.current : 0;
	};
	var setter = exports.setter = function (element, props, data) {
	  return (0, _attrAdapter.setter)(element, (0, _build2.default)(props, data));
	};
	var getElementData = exports.getElementData = function (element) {
	  var bBox = element.getBBox();
	  return {
	    x: bBox.x,
	    y: bBox.y,
	    width: bBox.width,
	    height: bBox.height
	  };
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getElementData: getElementData });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbImdldHRlciIsImVsZW1lbnQiLCJrZXkiLCJkZWZhdWx0UHJvcHMiLCJjdXJyZW50Iiwic2V0dGVyIiwicHJvcHMiLCJkYXRhIiwiZ2V0RWxlbWVudERhdGEiLCJiQm94IiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzdGF0ZU1hcCIsInZhbHVlVHlwZU1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSwwQkFBUyxVQUFDQyxPQUFELEVBQVVDLEdBQVY7QUFBQSxTQUFtQixDQUFDLHlCQUFlQSxHQUFmLENBQUYsR0FBeUIseUJBQVdELE9BQVgsRUFBb0JDLEdBQXBCLENBQXpCLEdBQXFELHVCQUFhQSxHQUFiLEtBQXFCLHVCQUFhQSxHQUFiLEVBQWtCQyxZQUF4QyxHQUF3RCx1QkFBYUQsR0FBYixFQUFrQkMsWUFBbEIsQ0FBK0JDLE9BQXZGLEdBQWlHLENBQXZLO0FBQUEsQ0FBZjtBQUNBLElBQU1DLDBCQUFTLFVBQUNKLE9BQUQsRUFBVUssS0FBVixFQUFpQkMsSUFBakI7QUFBQSxTQUEwQix5QkFBV04sT0FBWCxFQUFvQixxQkFBTUssS0FBTixFQUFhQyxJQUFiLENBQXBCLENBQTFCO0FBQUEsQ0FBZjtBQUNBLElBQU1DLDBDQUFpQixVQUFDUCxPQUFELEVBQWE7QUFDekMsTUFBTVEsT0FBT1IsUUFBUVMsT0FBUixFQUFiO0FBQ0EsU0FBTztBQUNMQyxPQUFHRixLQUFLRSxDQURIO0FBRUxDLE9BQUdILEtBQUtHLENBRkg7QUFHTEMsV0FBT0osS0FBS0ksS0FIUDtBQUlMQyxZQUFRTCxLQUFLSztBQUpSLEdBQVA7QUFNRCxDQVJNOztrQkFVUSx1QkFBYyxFQUFFZCxjQUFGLEVBQVVLLGNBQVYsRUFBa0JVLDRCQUFsQixFQUE0QkMsb0NBQTVCLEVBQTBDUiw4QkFBMUMsRUFBZCxDIiwiZmlsZSI6InN2Zy1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcbmltcG9ydCB7IGdldHRlciBhcyBhdHRyR2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBnZXR0ZXIgPSAoZWxlbWVudCwga2V5KSA9PiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID8gYXR0ckdldHRlcihlbGVtZW50LCBrZXkpIDogKHZhbHVlVHlwZU1hcFtrZXldICYmIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG5leHBvcnQgY29uc3Qgc2V0dGVyID0gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSA9PiBhdHRyU2V0dGVyKGVsZW1lbnQsIGJ1aWxkKHByb3BzLCBkYXRhKSk7XG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudERhdGEgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gIHJldHVybiB7XG4gICAgeDogYkJveC54LFxuICAgIHk6IGJCb3gueSxcbiAgICB3aWR0aDogYkJveC53aWR0aCwgXG4gICAgaGVpZ2h0OiBiQm94LmhlaWdodFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7IGdldHRlciwgc2V0dGVyLCBzdGF0ZU1hcCwgdmFsdWVUeXBlTWFwLCBnZXRFbGVtZW50RGF0YSB9KTtcbiJdfQ==

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(106);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(90);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(96);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(107);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  fill: _color2.default,
	  stroke: _color2.default,
	  scale: _scale2.default,
	  scaleX: _scale2.default,
	  scaleY: _scale2.default,
	  d: _complex2.default,
	  points: _complex2.default,
	  opacity: _alpha2.default,
	  fillOpacity: _alpha2.default,
	  strokeOpacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6WyJmaWxsIiwic3Ryb2tlIiwic2NhbGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJkIiwicG9pbnRzIiwib3BhY2l0eSIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlT3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsdUJBRGE7QUFFYkMseUJBRmE7QUFHYkMsd0JBSGE7QUFJYkMseUJBSmE7QUFLYkMseUJBTGE7QUFNYkMsc0JBTmE7QUFPYkMsMkJBUGE7QUFRYkMsMEJBUmE7QUFTYkMsOEJBVGE7QUFVYkM7QUFWYSxDIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlsbDogY29sb3IsXG4gIHN0cm9rZTogY29sb3IsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgZDogY29tcGxleCxcbiAgcG9pbnRzOiBjb21wbGV4LFxuICBvcGFjaXR5OiBhbHBoYSxcbiAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(82);
	
	var _transformProps = __webpack_require__(111);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ZERO_NOT_ZERO = 0.0001;
	
	function build(state, data) {
	  var hasTransform = false;
	  var props = {};
	  var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
	  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
	  var transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
	  var transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
	  var scaleTransformX = -transformOriginX * (scale * 1);
	  var scaleTransformY = -transformOriginY * (scaleY * 1);
	  var scaleReplaceX = transformOriginX / scale;
	  var scaleReplaceY = transformOriginY / scaleY;
	  var transform = {
	    translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
	    scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
	    rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
	    skewX: 'skewX(' + state.skewX + ') ',
	    skewY: 'skewY(' + state.skewY + ') '
	  };
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      if (_transformProps2.default[key]) {
	        hasTransform = true;
	      } else {
	        props[(0, _utils.camelToDash)(key)] = state[key];
	      }
	    }
	  }
	
	  if (hasTransform) {
	    props.transform = '';
	
	    for (var _key in transform) {
	      if (transform.hasOwnProperty(_key)) {
	        var defaultValue = _key === 'scale' ? '1' : '0';
	        props.transform += transform[_key].replace(/undefined/g, defaultValue);
	      }
	    }
	  }
	
	  return props;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6WyJidWlsZCIsIlpFUk9fTk9UX1pFUk8iLCJzdGF0ZSIsImRhdGEiLCJoYXNUcmFuc2Zvcm0iLCJwcm9wcyIsInNjYWxlIiwidW5kZWZpbmVkIiwic2NhbGVYIiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luWCIsIndpZHRoIiwib3JpZ2luWCIsIngiLCJ0cmFuc2Zvcm1PcmlnaW5ZIiwiaGVpZ2h0Iiwib3JpZ2luWSIsInkiLCJzY2FsZVRyYW5zZm9ybVgiLCJzY2FsZVRyYW5zZm9ybVkiLCJzY2FsZVJlcGxhY2VYIiwic2NhbGVSZXBsYWNlWSIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwicm90YXRlIiwic2tld1giLCJza2V3WSIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdFZhbHVlIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7O2tCQUt3QkEsSzs7QUFMeEI7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLGdCQUFnQixNQUF0Qjs7QUFFZSxTQUFTRCxLQUFULENBQWVFLEtBQWYsRUFBc0JDLElBQXRCLEVBQTRCO0FBQ3pDLE1BQUlDLGVBQWUsS0FBbkI7QUFDQSxNQUFNQyxRQUFRLEVBQWQ7QUFDQSxNQUFNQyxRQUFRSixNQUFNSSxLQUFOLEtBQWdCQyxTQUFoQixHQUE0QkwsTUFBTUksS0FBTixJQUFlTCxhQUEzQyxHQUEyREMsTUFBTU0sTUFBTixJQUFnQixDQUF6RjtBQUNBLE1BQU1DLFNBQVNQLE1BQU1PLE1BQU4sS0FBaUJGLFNBQWpCLEdBQTZCTCxNQUFNTyxNQUFOLElBQWdCUixhQUE3QyxHQUE2REssU0FBUyxDQUFyRjtBQUNBLE1BQU1JLG1CQUFtQlAsS0FBS1EsS0FBTCxJQUFjLENBQUNULE1BQU1VLE9BQU4sSUFBaUIsRUFBbEIsSUFBd0IsR0FBdEMsSUFBNkNULEtBQUtVLENBQTNFO0FBQ0EsTUFBTUMsbUJBQW1CWCxLQUFLWSxNQUFMLElBQWUsQ0FBQ2IsTUFBTWMsT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF2QyxJQUE4Q2IsS0FBS2MsQ0FBNUU7QUFDQSxNQUFNQyxrQkFBa0IsQ0FBRVIsZ0JBQUYsSUFBc0JKLFFBQVEsQ0FBOUIsQ0FBeEI7QUFDQSxNQUFNYSxrQkFBa0IsQ0FBRUwsZ0JBQUYsSUFBc0JMLFNBQVMsQ0FBL0IsQ0FBeEI7QUFDQSxNQUFNVyxnQkFBZ0JWLG1CQUFtQkosS0FBekM7QUFDQSxNQUFNZSxnQkFBZ0JQLG1CQUFtQkwsTUFBekM7QUFDQSxNQUFNYSxZQUFZO0FBQ2hCQyw4QkFBd0JyQixNQUFNc0IsVUFBOUIsVUFBNkN0QixNQUFNdUIsVUFBbkQsT0FEZ0I7QUFFaEJuQiwwQkFBb0JZLGVBQXBCLFVBQXdDQyxlQUF4QyxnQkFBa0ViLEtBQWxFLFVBQTRFRyxNQUE1RSxvQkFBaUdXLGFBQWpHLFVBQW1IQyxhQUFuSCxPQUZnQjtBQUdoQkssd0JBQWtCeEIsTUFBTXdCLE1BQXhCLFVBQW1DaEIsZ0JBQW5DLFVBQXdESSxnQkFBeEQsT0FIZ0I7QUFJaEJhLHNCQUFnQnpCLE1BQU15QixLQUF0QixPQUpnQjtBQUtoQkMsc0JBQWdCMUIsTUFBTTBCLEtBQXRCO0FBTGdCLEdBQWxCOztBQVFBLE9BQUssSUFBSUMsR0FBVCxJQUFnQjNCLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUlBLE1BQU00QixjQUFOLENBQXFCRCxHQUFyQixDQUFKLEVBQStCO0FBQzdCLFVBQUkseUJBQWVBLEdBQWYsQ0FBSixFQUF5QjtBQUN2QnpCLHVCQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTEMsY0FBTSx3QkFBWXdCLEdBQVosQ0FBTixJQUEwQjNCLE1BQU0yQixHQUFOLENBQTFCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUl6QixZQUFKLEVBQWtCO0FBQ2hCQyxVQUFNaUIsU0FBTixHQUFrQixFQUFsQjs7QUFFQSxTQUFLLElBQUlPLElBQVQsSUFBZ0JQLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUlBLFVBQVVRLGNBQVYsQ0FBeUJELElBQXpCLENBQUosRUFBbUM7QUFDakMsWUFBTUUsZUFBZ0JGLFNBQVEsT0FBVCxHQUFvQixHQUFwQixHQUEwQixHQUEvQztBQUNBeEIsY0FBTWlCLFNBQU4sSUFBbUJBLFVBQVVPLElBQVYsRUFBZUcsT0FBZixDQUF1QixZQUF2QixFQUFxQ0QsWUFBckMsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBTzFCLEtBQVA7QUFDRCIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgbGV0IGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICBjb25zdCBwcm9wcyA9IHt9O1xuICBjb25zdCBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIGNvbnN0IHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIGNvbnN0IHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgY29uc3Qgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgY29uc3Qgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgcm90YXRlOiBgcm90YXRlKCR7c3RhdGUucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgIHNrZXdZOiBgc2tld1koJHtzdGF0ZS5za2V3WX0pIGBcbiAgfTtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzW2NhbWVsVG9EYXNoKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gKGtleSA9PT0gJ3NjYWxlJykgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59Il19

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = exports.getter = undefined;
	
	var _adapter = __webpack_require__(101);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	  return element.getAttribute(key);
	};
	var setter = exports.setter = function (element, props) {
	  for (var key in props) {
	    if (props.hasOwnProperty(key)) {
	      element.setAttribute(key, props[key]);
	    }
	  }
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6WyJnZXR0ZXIiLCJlbGVtZW50Iiwia2V5IiwiZ2V0QXR0cmlidXRlIiwic2V0dGVyIiwicHJvcHMiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWO0FBQUEsU0FBa0JELFFBQVFFLFlBQVIsQ0FBcUJELEdBQXJCLENBQWxCO0FBQUEsQ0FBZjtBQUNBLElBQU1FLDBCQUFTLFVBQUNILE9BQUQsRUFBVUksS0FBVixFQUFvQjtBQUN4QyxPQUFLLElBQUlILEdBQVQsSUFBZ0JHLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUlBLE1BQU1DLGNBQU4sQ0FBcUJKLEdBQXJCLENBQUosRUFBK0I7QUFDN0JELGNBQVFNLFlBQVIsQ0FBcUJMLEdBQXJCLEVBQTBCRyxNQUFNSCxHQUFOLENBQTFCO0FBQ0Q7QUFDRjtBQUNGLENBTk07O2tCQVFRLHVCQUFjLEVBQUVGLGNBQUYsRUFBVUksY0FBVixFQUFkLEMiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IGdldHRlciA9IChlbGVtZW50LCBrZXkpID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG5leHBvcnQgY29uc3Qgc2V0dGVyID0gKGVsZW1lbnQsIHByb3BzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7IGdldHRlciwgc2V0dGVyIH0pO1xuIl19

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _build = __webpack_require__(118);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(103);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(113);
	
	var _adapter = __webpack_require__(101);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: _svgAdapter.getter,
	  setter: function (element, props, opts) {
	    var pathLength = opts ? opts.pathLength : 0;
	    return (0, _svgAdapter.setter)(element, (0, _build2.default)(props, pathLength), opts);
	  },
	  stateMap: _stateMap2.default,
	  getElementData: function (element) {
	    return _extends({ pathLength: element.getTotalLength() }, (0, _svgAdapter.getElementData)(element));
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOlsiZ2V0dGVyIiwic2V0dGVyIiwiZWxlbWVudCIsInByb3BzIiwib3B0cyIsInBhdGhMZW5ndGgiLCJzdGF0ZU1hcCIsImdldEVsZW1lbnREYXRhIiwiZ2V0VG90YWxMZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQzNCQSw0QkFEMkI7QUFFM0JDLFVBQVEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUEwQjtBQUNoQyxRQUFNQyxhQUFhRCxPQUFPQSxLQUFLQyxVQUFaLEdBQXlCLENBQTVDO0FBQ0EsV0FBTyx3QkFBT0gsT0FBUCxFQUFnQixxQkFBTUMsS0FBTixFQUFhRSxVQUFiLENBQWhCLEVBQTBDRCxJQUExQyxDQUFQO0FBQ0QsR0FMMEI7QUFNM0JFLDhCQU4yQjtBQU8zQkMsa0JBQWdCLFVBQUNMLE9BQUQ7QUFBQSxzQkFBZ0JHLFlBQVlILFFBQVFNLGNBQVIsRUFBNUIsSUFBeUQsZ0NBQWVOLE9BQWYsQ0FBekQ7QUFBQTtBQVBXLENBQWQsQyIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciwgZ2V0RWxlbWVudERhdGEgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICBnZXR0ZXIsXG4gIHNldHRlcjogKGVsZW1lbnQsIHByb3BzLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgIHJldHVybiBzZXR0ZXIoZWxlbWVudCwgYnVpbGQocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgfSxcbiAgc3RhdGVNYXAsXG4gIGdldEVsZW1lbnREYXRhOiAoZWxlbWVudCkgPT4gKHsgcGF0aExlbmd0aDogZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpLCAuLi5nZXRFbGVtZW50RGF0YShlbGVtZW50KSB9KVxufSk7XG4iXX0=

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Convert percentage to pixels
	  
	  @param [number]: Percentage of total length
	  @param [number]: Total length
	*/
	var percentToPixels = function (percent, length) {
	  return parseFloat(percent) / 100 * length + 'px';
	};
	
	exports.default = function (state, length) {
	  var styles = {};
	  var dashArrayStyles = {
	    length: 0,
	    spacing: length + 'px'
	  };
	  var hasDashArray = false;
	
	  for (var key in state) {
	    if (state.hasOwnProperty(key)) {
	      var value = state[key];
	
	      switch (key) {
	        case 'length':
	        case 'spacing':
	          hasDashArray = true;
	          dashArrayStyles[key] = percentToPixels(value, length);
	          break;
	        case 'offset':
	          styles['stroke-dashoffset'] = percentToPixels(-value, length);
	          break;
	        default:
	          styles[key] = value;
	      }
	    }
	  }
	
	  if (hasDashArray) {
	    styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
	  }
	
	  return styles;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbInBlcmNlbnRUb1BpeGVscyIsInBlcmNlbnQiLCJsZW5ndGgiLCJwYXJzZUZsb2F0Iiwic3RhdGUiLCJzdHlsZXMiLCJkYXNoQXJyYXlTdHlsZXMiLCJzcGFjaW5nIiwiaGFzRGFzaEFycmF5Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztBQU1BLElBQU1BLGtCQUFrQixVQUFDQyxPQUFELEVBQVVDLE1BQVY7QUFBQSxTQUFzQkMsV0FBV0YsT0FBWCxJQUFzQixHQUF2QixHQUE4QkMsTUFBOUIsR0FBdUMsSUFBNUQ7QUFBQSxDQUF4Qjs7a0JBRWUsVUFBQ0UsS0FBRCxFQUFRRixNQUFSLEVBQW1CO0FBQ2hDLE1BQU1HLFNBQVMsRUFBZjtBQUNBLE1BQU1DLGtCQUFrQjtBQUN0QkosWUFBUSxDQURjO0FBRXRCSyxhQUFTTCxTQUFTO0FBRkksR0FBeEI7QUFJQSxNQUFJTSxlQUFlLEtBQW5COztBQUVBLE9BQUssSUFBSUMsR0FBVCxJQUFnQkwsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTU0sY0FBTixDQUFxQkQsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFNRSxRQUFRUCxNQUFNSyxHQUFOLENBQWQ7O0FBRUEsY0FBUUEsR0FBUjtBQUNBLGFBQUssUUFBTDtBQUNBLGFBQUssU0FBTDtBQUNFRCx5QkFBZSxJQUFmO0FBQ0FGLDBCQUFnQkcsR0FBaEIsSUFBdUJULGdCQUFnQlcsS0FBaEIsRUFBdUJULE1BQXZCLENBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRUcsaUJBQU8sbUJBQVAsSUFBOEJMLGdCQUFnQixDQUFDVyxLQUFqQixFQUF3QlQsTUFBeEIsQ0FBOUI7QUFDQTtBQUNGO0FBQ0VHLGlCQUFPSSxHQUFQLElBQWNFLEtBQWQ7QUFWRjtBQVlEO0FBQ0Y7O0FBRUQsTUFBSUgsWUFBSixFQUFrQjtBQUNoQkgsV0FBTyxrQkFBUCxJQUE2QkMsZ0JBQWdCSixNQUFoQixHQUF5QixHQUF6QixHQUErQkksZ0JBQWdCQyxPQUE1RTtBQUNEOztBQUVELFNBQU9GLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbmNvbnN0IHBlcmNlbnRUb1BpeGVscyA9IChwZXJjZW50LCBsZW5ndGgpID0+IChwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgbGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHt9O1xuICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTsiXX0=

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(83);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(120);
	
	var _generateBlendCurve2 = _interopRequireDefault(_generateBlendCurve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  Methods and properties to add to bound Actions
	*/
	var boundOnStart = function (action) {
	  return action.flow.activateAction(action.id, action);
	};
	var boundOnStop = function (action) {
	  return action.flow.deactivateAction(action.id);
	};
	var boundProps = function (flow) {
	  return {
	    flow: flow,
	    isPriority: true,
	    onActivate: boundOnStart,
	    onDeactivate: boundOnStop
	  };
	};
	
	var Flow = function (_Action) {
	  _inherits(Flow, _Action);
	
	  function Flow(props) {
	    _classCallCheck(this, Flow);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	    _this.activeActions = {};
	    _this.numActiveActions = 0;
	    return _this;
	  }
	
	  Flow.prototype.set = function set(props) {
	    _Action.prototype.set.call(this, props);
	
	    this.once();
	
	    return this;
	  };
	
	  /*
	    Bind Action to Actor
	  */
	
	
	  Flow.prototype.connect = function connect(action) {
	    var inheritedAction = action.inherit();
	    var newValues = {};
	    var hasNewValues = false;
	
	    // Create values on actor that don't exist
	    for (var key in inheritedAction.values) {
	      if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
	        newValues[key] = {};
	        hasNewValues = true;
	      }
	    }
	
	    if (hasNewValues) {
	      this.set({ values: newValues });
	    }
	
	    inheritedAction.parentId = action.id;
	
	    return inheritedAction.set(boundProps(this, inheritedAction));
	  };
	
	  /*
	    Start Actor
	     If Action is provided, bind it to this Actor and start
	     @param (optional) [Action]
	  */
	
	
	  Flow.prototype.start = function start() {
	    _Action.prototype.start.call(this);
	
	    for (var key in this.activeActions) {
	      if (this.activeActions.hasOwnProperty(key)) {
	        var action = this.activeActions[key];
	        if (!action.isActive) {
	          action.start();
	        }
	      }
	    }
	
	    return this;
	  };
	
	  Flow.prototype.stop = function stop() {
	    _Action.prototype.stop.call(this);
	
	    for (var key in this.activeActions) {
	      if (this.activeActions.hasOwnProperty(key)) {
	        this.activeActions[key].stop();
	      }
	    }
	
	    return this;
	  };
	
	  Flow.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	      var driver = value.numDrivers ? this.activeActions[value.drivers[0]] : false;
	      var newCurrent = value.numDrivers ? driver.values[key].current : value.current;
	
	      /**
	       * TODO: replace with blend tree resolver
	       * Additive motion
	       * Bezier tween blend
	       */
	      if (value.blendCurve) {
	        newCurrent = value.blendCurve();
	      }
	
	      value.current = newCurrent;
	    }
	
	    return _Action.prototype.willRender.call(this, actor, frameStamp, elapsed);
	  };
	
	  /*
	    Add active actions
	     @param [number]
	    @param [Action]
	  */
	
	
	  Flow.prototype.activateAction = function activateAction(id, action) {
	    this.activeActions[id] = action;
	    this.numActiveActions++;
	
	    for (var i = 0; i < action.numValueKeys; i++) {
	      var key = action.valueKeys[i];
	      var actionValue = action.values[key];
	      var value = this.values[key];
	
	      // If we're blending this action, and there's on already in progress
	      if (action.blend && value.numDrivers && !value.blendCurve && value.drivers[0].prototype === action.prototype) {
	        value.blendCurve = (0, _generateBlendCurve2.default)(this.activeActions[value.drivers[0]], action, value, key);
	      } else if (!action.isScrubbing) {
	        value.blendCurve = undefined;
	
	        // Pass Actor value properties to Action
	        if (actionValue.velocity === 0) {
	          actionValue.velocity = value.velocity;
	        }
	
	        if (actionValue.from === undefined) {
	          actionValue.from = actionValue.current = value.current;
	        }
	      }
	
	      value.drivers = [id];
	      value.numDrivers = value.drivers.length;
	    }
	
	    if (this.numActiveActions) {
	      _Action.prototype.start.call(this);
	    }
	  };
	
	  /*
	    Remove active actions
	     @param [number]
	  */
	
	
	  Flow.prototype.deactivateAction = function deactivateAction(id) {
	    var action = this.activeActions[id];
	
	    if (action) {
	      for (var i = 0; i < action.numValueKeys; i++) {
	        var key = action.valueKeys[i];
	        var value = this.values[key];
	        var driverIndex = value.drivers.indexOf(id);
	
	        if (driverIndex !== -1) {
	          value.drivers.splice(driverIndex, 1);
	          value.numDrivers--;
	        }
	      }
	
	      delete this.activeActions[id];
	      this.numActiveActions--;
	    }
	
	    if (!this.numActiveActions && this.isActive) {
	      _Action.prototype.stop.call(this);
	    }
	  };
	
	  return Flow;
	}(_Action3.default);
	
	Flow.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  drivers: [],
	  numDrivers: 0
	});
	
	exports.default = Flow;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0Zsb3cuanMiXSwibmFtZXMiOlsiYm91bmRPblN0YXJ0IiwiYWN0aW9uIiwiZmxvdyIsImFjdGl2YXRlQWN0aW9uIiwiaWQiLCJib3VuZE9uU3RvcCIsImRlYWN0aXZhdGVBY3Rpb24iLCJib3VuZFByb3BzIiwiaXNQcmlvcml0eSIsIm9uQWN0aXZhdGUiLCJvbkRlYWN0aXZhdGUiLCJGbG93IiwicHJvcHMiLCJhY3RpdmVBY3Rpb25zIiwibnVtQWN0aXZlQWN0aW9ucyIsInNldCIsIm9uY2UiLCJjb25uZWN0IiwiaW5oZXJpdGVkQWN0aW9uIiwiaW5oZXJpdCIsIm5ld1ZhbHVlcyIsImhhc05ld1ZhbHVlcyIsImtleSIsInZhbHVlcyIsImhhc093blByb3BlcnR5IiwicGFyZW50SWQiLCJzdGFydCIsImlzQWN0aXZlIiwic3RvcCIsIndpbGxSZW5kZXIiLCJhY3RvciIsImZyYW1lU3RhbXAiLCJlbGFwc2VkIiwiaSIsIm51bVZhbHVlS2V5cyIsInZhbHVlS2V5cyIsInZhbHVlIiwiZHJpdmVyIiwibnVtRHJpdmVycyIsImRyaXZlcnMiLCJuZXdDdXJyZW50IiwiY3VycmVudCIsImJsZW5kQ3VydmUiLCJhY3Rpb25WYWx1ZSIsImJsZW5kIiwicHJvdG90eXBlIiwiaXNTY3J1YmJpbmciLCJ1bmRlZmluZWQiLCJ2ZWxvY2l0eSIsImZyb20iLCJsZW5ndGgiLCJkcml2ZXJJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJkZWZhdWx0VmFsdWUiLCJleHRlbmREZWZhdWx0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0FBR0EsSUFBTUEsZUFBZSxVQUFDQyxNQUFEO0FBQUEsU0FBWUEsT0FBT0MsSUFBUCxDQUFZQyxjQUFaLENBQTJCRixPQUFPRyxFQUFsQyxFQUFzQ0gsTUFBdEMsQ0FBWjtBQUFBLENBQXJCO0FBQ0EsSUFBTUksY0FBYyxVQUFDSixNQUFEO0FBQUEsU0FBWUEs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VCxFQUFuQixDQUFQO0FBQ0EsV0FBS1UsZ0JBQUw7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBS0EsZ0JBQU4sSUFBMEIsS0FBS2EsUUFBbkMsRUFBNkM7QUFDM0Msd0JBQU1DLElBQU47QUFDRDtBQUNGLEc7O1NBbktHakIsSTs7O0FBc0tOQSxLQUFLa0MsU0FBTCxDQUFlUyxZQUFmLEdBQThCLGlCQUFPQyxrQkFBUCxDQUEwQjtBQUN0RGhCLFdBQVMsRUFENkM7QUFFdERELGNBQVk7QUFGMEMsQ0FBMUIsQ0FBOUI7O2tCQUtlM0IsSSIsImZpbGUiOiJGbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgZ2VuZXJhdGVCbGVuZEN1cnZlIGZyb20gJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZSc7XG5cbi8qXG4gIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG5jb25zdCBib3VuZE9uU3RhcnQgPSAoYWN0aW9uKSA9PiBhY3Rpb24uZmxvdy5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5jb25zdCBib3VuZE9uU3RvcCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbmNvbnN0IGJvdW5kUHJvcHMgPSAoZmxvdykgPT4gKHtcbiAgZmxvdyxcbiAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgb25BY3RpdmF0ZTogYm91bmRPblN0YXJ0LFxuICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG59KTtcblxuY2xhc3MgRmxvdyBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gIH1cblxuICBzZXQocHJvcHMpIHtcbiAgICBzdXBlci5zZXQocHJvcHMpO1xuXG4gICAgdGhpcy5vbmNlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qXG4gICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgKi9cbiAgY29ubmVjdChhY3Rpb24pIHtcbiAgICBjb25zdCBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IHt9O1xuICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgfVxuXG4gICAgaW5oZXJpdGVkQWN0aW9uLnBhcmVudElkID0gYWN0aW9uLmlkO1xuXG4gICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgfVxuXG4gIC8qXG4gICAgU3RhcnQgQWN0b3JcblxuICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgKi9cbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICBjb25zdCBkcml2ZXIgPSB2YWx1ZS5udW1Ecml2ZXJzID8gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dIDogZmFsc2U7XG4gICAgICBsZXQgbmV3Q3VycmVudCA9IHZhbHVlLm51bURyaXZlcnMgPyBkcml2ZXIudmFsdWVzW2tleV0uY3VycmVudCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogVE9ETzogcmVwbGFjZSB3aXRoIGJsZW5kIHRyZWUgcmVzb2x2ZXJcbiAgICAgICAqIEFkZGl0aXZlIG1vdGlvblxuICAgICAgICogQmV6aWVyIHR3ZWVuIGJsZW5kXG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZS5ibGVuZEN1cnZlKSB7XG4gICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgfVxuXG4gIC8qXG4gICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW0FjdGlvbl1cbiAgKi9cbiAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzICYmICF2YWx1ZS5ibGVuZEN1cnZlICYmICh2YWx1ZS5kcml2ZXJzWzBdLnByb3RvdHlwZSA9PT0gYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IGdlbmVyYXRlQmxlbmRDdXJ2ZSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgIGlmIChhY3Rpb25WYWx1ZS52ZWxvY2l0eSA9PT0gMCkge1xuICAgICAgICAgIGFjdGlvblZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAqL1xuICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgY29uc3QgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgc3VwZXIuc3RvcCgpO1xuICAgIH1cbiAgfVxufVxuXG5GbG93LnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZHJpdmVyczogW10sXG4gIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGbG93O1xuIl19

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(88);
	
	var BLEND_ACCURACY = 60;
	
	exports.default = function (outAction, inAction, flowValue, key) {
	  var outValue = outAction.values[key];
	
	  if (outAction.elapsed === undefined || !outValue) {
	    return;
	  }
	
	  var inValue = inAction.values[key];
	  var outTotalDuration = outValue.delay + outValue.duration;
	  var timeUntilOutEnd = Math.min(outTotalDuration - outAction.elapsed, inValue.delay + inValue.duration);
	  var inPositionAtOutEnd = (0, _calc.ease)((0, _calc.restrict)((0, _calc.getProgressFromValue)(timeUntilOutEnd, 0, inValue.delay + inValue.duration), 0, 1), inValue.from, inValue.to, inValue.ease);
	  var inBiggerThanOutAtStart = inValue.from > outValue.current;
	  var inBiggerThanOutAtEnd = inPositionAtOutEnd > outValue.to;
	  var tweensIntersect = inBiggerThanOutAtStart !== inBiggerThanOutAtEnd;
	
	  var blendCurve = [[0, outValue.current], [timeUntilOutEnd, inPositionAtOutEnd]];
	
	  // If tweens intersect, resolve tweens at a resolution to find exactly where
	  if (tweensIntersect) {
	    var timeStepToTest = timeUntilOutEnd / BLEND_ACCURACY;
	    var foundP1 = false;
	    var foundP2 = false;
	
	    for (var i = 0; i <= BLEND_ACCURACY; i++) {
	      var timeStep = i * timeStepToTest;
	      var outAtTime = (0, _calc.ease)((0, _calc.getProgressFromValue)(outAction.elapsed + timeStep, outValue.delay, outValue.duration), outValue.from, outValue.to, outValue.ease);
	      var inAtTime = (0, _calc.ease)((0, _calc.getProgressFromValue)(inAction.elapsed + timeStep, inValue.delay, inValue.duration), inValue.from, inValue.to, inValue.ease);
	
	      if (!foundP1 && (inBiggerThanOutAtStart && inAtTime < outAtTime || !inBiggerThanOutAtStart && inAtTime > outAtTime)) {
	        blendCurve.splice(1, 0, [timeStep, inAtTime]);
	        foundP1 = true;
	      }
	
	      if (foundP1 && (inBiggerThanOutAtStart && inAtTime < outValue.current || !inBiggerThanOutAtStart && inAtTime > outValue.current)) {
	        blendCurve[2] = [timeStep, inAtTime];
	        foundP2 = true;
	      }
	
	      if (foundP2) {
	        break;
	      }
	    }
	  }
	
	  if (blendCurve.length === 2) {
	    // Pass between tweens using incoming easing if just two points
	    return function () {
	      var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[1][0]), 0, 1);
	
	      if (blendProgress === 1) {
	        flowValue.blendCurve = undefined;
	      }
	
	      return (0, _calc.ease)(blendProgress, outValue.current, inValue.current, inValue.ease);
	    };
	  } else {
	    // Pass between tweens using bezier interpolation
	    return function () {
	      var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[2][0]), 0, 1);
	      var aP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[0][1], blendCurve[1][1]);
	      var bP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[1][1], blendCurve[2][1]);
	
	      if (blendProgress === 1) {
	        flowValue.blendCurve = undefined;
	        return inValue.current;
	      }
	
	      return (0, _calc.getValueFromProgress)(blendProgress, aP, bP);
	    };
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOlsiQkxFTkRfQUNDVVJBQ1kiLCJvdXRBY3Rpb24iLCJpbkFjdGlvbiIsImZsb3dWYWx1ZSIsImtleSIsIm91dFZhbHVlIiwidmFsdWVzIiwiZWxhcHNlZCIsInVuZGVmaW5lZCIsImluVmFsdWUiLCJvdXRUb3RhbER1cmF0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsInRpbWVVbnRpbE91dEVuZCIsIk1hdGgiLCJtaW4iLCJpblBvc2l0aW9uQXRPdXRFbmQiLCJmcm9tIiwidG8iLCJlYXNlIiwiaW5CaWdnZXJUaGFuT3V0QXRTdGFydCIsImN1cnJlbnQiLCJpbkJpZ2dlclRoYW5PdXRBdEVuZCIsInR3ZWVuc0ludGVyc2VjdCIsImJsZW5kQ3VydmUiLCJ0aW1lU3RlcFRvVGVzdCIsImZvdW5kUDEiLCJmb3VuZFAyIiwiaSIsInRpbWVTdGVwIiwib3V0QXRUaW1lIiwiaW5BdFRpbWUiLCJzcGxpY2UiLCJsZW5ndGgiLCJibGVuZFByb2dyZXNzIiwiYVAiLCJiUCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU1BLGlCQUFpQixFQUF2Qjs7a0JBRWUsVUFBQ0MsU0FBRCxFQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQ0MsR0FBakMsRUFBeUM7QUFDdEQsTUFBTUMsV0FBV0osVUFBVUssTUFBVixDQUFpQkYsR0FBakIsQ0FBakI7O0FBRUEsTUFBSUgsVUFBVU0sT0FBVixLQUFzQkMsU0FBdEIsSUFBbUMsQ0FBQ0gsUUFBeEMsRUFBa0Q7QUFDaEQ7QUFDRDs7QUFFRCxNQUFNSSxVQUFVUCxTQUFTSSxNQUFULENBQWdCRixHQUFoQixDQUFoQjtBQUNBLE1BQU1NLG1CQUFtQkwsU0FBU00sS0FBVCxHQUFpQk4sU0FBU08sUUFBbkQ7QUFDQSxNQUFNQyxrQkFBa0JDLEtBQUtDLEdBQUwsQ0FBU0wsbUJBQW1CVCxVQUFVTSxPQUF0QyxFQUErQ0Us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O0FBQ1gsVUFBTWUsZ0JBQWdCLG9CQUFTLGdDQUFxQmhDLFNBQVNLLE9BQTlCLEVBQXVDaUIsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF2QyxFQUF5REEsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF6RCxDQUFULEVBQXFGLENBQXJGLEVBQXdGLENBQXhGLENBQXRCO0FBQ0EsVUFBTVcsS0FBSyxnQ0FBcUJELGFBQXJCLEVBQW9DVixXQUFXLENBQVgsRUFBYyxDQUFkLENBQXBDLEVBQXNEQSxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXRELENBQVg7QUFDQSxVQUFNWSxLQUFLLGdDQUFxQkYsYUFBckIsRUFBb0NWLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBcEMsRUFBc0RBLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBdEQsQ0FBWDs7QUFFQSxVQUFJVSxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIvQixrQkFBVXFCLFVBQVYsR0FBdUJoQixTQUF2QjtBQUNBLGVBQU9DLFFBQVFZLE9BQWY7QUFDRDs7QUFFRCxhQUFPLGdDQUFxQmEsYUFBckIsRUFBb0NDLEVBQXBDLEVBQXdDQyxFQUF4QyxDQUFQO0FBQ0QsS0FYRDtBQVlEO0FBQ0YsQyIsImZpbGUiOiJnZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgZWFzZSwgcmVzdHJpY3QgfSBmcm9tICcuLi8uLi9pbmMvY2FsYyc7XG5cbmNvbnN0IEJMRU5EX0FDQ1VSQUNZID0gNjA7XG5cbmV4cG9ydCBkZWZhdWx0IChvdXRBY3Rpb24sIGluQWN0aW9uLCBmbG93VmFsdWUsIGtleSkgPT4ge1xuICBjb25zdCBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gIGNvbnN0IG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICBjb25zdCB0aW1lVW50aWxPdXRFbmQgPSBNYXRoLm1pbihvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKTtcbiAgY29uc3QgaW5Qb3NpdGlvbkF0T3V0RW5kID0gZWFzZShyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgY29uc3QgaW5CaWdnZXJUaGFuT3V0QXRTdGFydCA9IGluVmFsdWUuZnJvbSA+IG91dFZhbHVlLmN1cnJlbnQ7XG4gIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gIGNvbnN0IHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gIGNvbnN0IGJsZW5kQ3VydmUgPSBbWzAsIG91dFZhbHVlLmN1cnJlbnRdLCBbdGltZVVudGlsT3V0RW5kLCBpblBvc2l0aW9uQXRPdXRFbmRdXTtcblxuICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICBjb25zdCB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgY29uc3Qgb3V0QXRUaW1lID0gZWFzZShnZXRQcm9ncmVzc0Zyb21WYWx1ZShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICBjb25zdCBpbkF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICBpZiAoIWZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lKSB8fCAoIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSkge1xuICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMSAmJiAoKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRWYWx1ZS5jdXJyZW50KSB8fCAoIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkpIHtcbiAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBpbmNvbWluZyBlYXNpbmcgaWYganVzdCB0d28gcG9pbnRzXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSk7XG5cbiAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWFzZShibGVuZFByb2dyZXNzLCBvdXRWYWx1ZS5jdXJyZW50LCBpblZhbHVlLmN1cnJlbnQsIGluVmFsdWUuZWFzZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGJsZW5kUHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgIH07XG4gIH1cbn07XG4iXX0=

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(83);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(122);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(82);
	
	var _calc = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var COUNT = 'Count';
	var NEXT_STEPS = {
	  loop: 'restart',
	  yoyo: 'reverse',
	  flip: 'flipValues'
	};
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.start = function start() {
	    this.elapsed = 0;
	    this.flipCount = this.yoyoCount = this.loopCount = 0;
	    this.isScrubbing = false;
	
	    // Set default `from` if none set
	    if (!this.flow) {
	      for (var i = 0; i < this.numValueKeys; i++) {
	        var key = this.valueKeys[i];
	        var value = this.values[key];
	        if (value.from === undefined) {
	          value.from = 0;
	        }
	      }
	    }
	
	    return _Action.prototype.start.call(this);
	  };
	
	  Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
	    var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	    this.ended = true;
	
	    if (!this.isScrubbing) {
	      this.elapsed += elapsed * this.dilate * this.playDirection;
	    }
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	
	      var progress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(this.elapsed - value.delay, 0, value.duration), 0, 1);
	
	      // Mark Tween as NOT ended if still in progress
	      if (progress !== progressTarget) {
	        this.ended = false;
	      }
	
	      // Step progress if we're stepping
	      if (value.steps) {
	        progress = (0, _calc.stepProgress)(progress, value.steps);
	      }
	
	      // Ease progress
	      value.current = (0, _calc.ease)(progress, value.from, value.to, value.ease);
	    }
	  };
	
	  Tween.prototype.onFrameEnd = function onFrameEnd() {
	    if (this.ended) {
	      var stepTaken = false;
	
	      for (var key in NEXT_STEPS) {
	        if (NEXT_STEPS.hasOwnProperty(key)) {
	          if ((0, _utils.isNum)(this[key]) && this[key] > this[key + COUNT]) {
	            this[key + COUNT]++;
	            stepTaken = true;
	            this[NEXT_STEPS[key]]();
	          }
	        }
	      }
	
	      if (!stepTaken) {
	        this.complete();
	      }
	    }
	  };
	
	  Tween.prototype.flipValues = function flipValues() {
	    var values = this.values;
	
	    this.elapsed = this.duration - this.elapsed;
	
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        var value = values[key];
	        var _ref = [value.from, value.to];
	        value.to = _ref[0];
	        value.from = _ref[1];
	      }
	    }
	
	    return this;
	  };
	
	  Tween.prototype.reverse = function reverse() {
	    this.playDirection *= -1;
	    return this;
	  };
	
	  Tween.prototype.restart = function restart() {
	    this.elapsed = this.playDirection === 1 ? 0 : this.duration;
	    this.started = (0, _utils.currentTime)();
	    return this;
	  };
	
	  Tween.prototype.seek = function seek(progress) {
	    this.seekTime(this.duration * progress);
	    return this;
	  };
	
	  Tween.prototype.seekTime = function seekTime(elapsed) {
	    if (!this.isActive || this.isScrubbing) {
	      this.once();
	      this.isScrubbing = true;
	    }
	
	    this.elapsed = elapsed;
	
	    return this;
	  };
	
	  return Tween;
	}(_Action3.default);
	
	Tween.prototype.defaultValueProp = 'to';
	Tween.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  delay: 0,
	  duration: 300,
	  ease: _presetEasing2.default.easeOut,
	  elapsed: 0,
	  steps: 0,
	  to: 0,
	  round: false
	});
	Tween.prototype.defaultProps = _Action3.default.extendDefaultProps({
	  blend: false,
	  dilate: 1,
	  loop: 0,
	  yoyo: 0,
	  flip: 0,
	  loopCount: 0,
	  yoyoCount: 0,
	  flipCount: 0,
	  playDirection: 1,
	  isScrubbing: false,
	  ended: false,
	  elapsed: 0
	});
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbIkNPVU5UIiwiTkVYVF9TVEVQUyIsImxvb3AiLCJ5b3lvIiwiZmxpcCIsIlR3ZWVuIiwic3RhcnQiLCJlbGFwc2VkIiwiZmxpcENvdW50IiwieW95b0NvdW50IiwibG9vcENvdW50IiwiaXNTY3J1YmJpbmciLCJmbG93IiwiaSIsIm51bVZhbHVlS2V5cyIsImtleSIsInZhbHVlS2V5cyIsInZhbHVlIiwidmFsdWVzIiwiZnJvbSIsInVuZGVmaW5lZCIsIm9uVXBkYXRlIiwidHdlZW4iLCJmcmFtZVN0YW1wIiwicHJvZ3Jlc3NUYXJnZXQiLCJwbGF5RGlyZWN0aW9uIiwiZW5kZWQiLCJkaWxhdGUiLCJwcm9ncmVzcyIsImRlbGF5IiwiZHVyYXRpb24iLCJzdGVwcyIsImN1cnJlbnQiLCJ0byIsImVhc2UiLCJvbkZyYW1lRW5kIiwic3RlcFRha2VuIiwiaGFzT3duUHJvcGVydHkiLCJjb21wbGV0ZSIsImZsaXBWYWx1ZXMiLCJyZXZlcnNlIiwicmVzdGFydCIsInN0YXJ0ZWQiLCJzZWVrIiwic2Vla1RpbWUiLCJpc0FjdGl2ZSIsIm9uY2UiLCJwcm90b3R5cGUiLCJkZWZhdWx0VmFsdWVQcm9wIiwiZGVmYXVsdFZhbHVlIiwiZXh0ZW5kRGVmYXVsdFZhbHVlIiwiZWFzZU91dCIsInJvdW5kIiwiZGVmYXVsdFByb3BzIiwiZXh0ZW5kRGVmYXVsdFByb3BzIiwiYmxlbmQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLE9BQWQ7QUFDQSxJQUFNQyxhQUFhO0FBQ2pCQyxRQUFNLFNBRFc7QUFFakJDLFFBQU0sU0FGVztBQUdqQkMsUUFBTTtBQUhXLENBQW5COztJQU1NQyxLO1lBQUFBLEs7O1dBQUFBLEs7MEJBQUFBLEs7Ozs7O0FBQUFBLE8sV0FDSkMsSyxvQkFBUTtBQUNOLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FB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O0FBTXZERSxNQUFJLENBTm1EO0FBT3ZEbUIsU0FBTztBQVBnRCxDQUExQixDQUEvQjtBQVNBL0MsTUFBTTBDLFNBQU4sQ0FBZ0JNLFlBQWhCLEdBQStCLGlCQUFPQyxrQkFBUCxDQUEwQjtBQUN2REMsU0FBTyxLQURnRDtBQUV2RDVCLFVBQVEsQ0FGK0M7QUFHdkR6QixRQUFNLENBSGlEO0FBSXZEQyxRQUFNLENBSmlEO0FBS3ZEQyxRQUFNLENBTGlEO0FBTXZETSxhQUFXLENBTjRDO0FBT3ZERCxhQUFXLENBUDRDO0FBUXZERCxhQUFXLENBUjRDO0FBU3ZEaUIsaUJBQWUsQ0FUd0M7QUFVdkRkLGVBQWEsS0FWMEM7QUFXdkRlLFNBQU8sS0FYZ0Q7QUFZdkRuQixXQUFTO0FBWjhDLENBQTFCLENBQS9COztrQkFlZUYsSyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lLCBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyBlYXNlLCByZXN0cmljdCwgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIHN0ZXBQcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogJ3Jlc3RhcnQnLFxuICB5b3lvOiAncmV2ZXJzZScsXG4gIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgdGhpcy5pc1NjcnViYmluZyA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgYGZyb21gIGlmIG5vbmUgc2V0XG4gICAgaWYgKCF0aGlzLmZsb3cpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICBpZiAodmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWUuZnJvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc3RhcnQoKTtcbiAgfVxuXG4gIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuXG4gICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgIH1cblxuICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICB9XG4gIH1cblxuICBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoaXNOdW0odGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZsaXBWYWx1ZXMoKSB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgIHRoaXMub25jZSgpO1xuICAgICAgdGhpcy5pc1NjcnViYmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3RvJztcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICBlbGFwc2VkOiAwLFxuICBzdGVwczogMCxcbiAgdG86IDAsXG4gIHJvdW5kOiBmYWxzZVxufSk7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gQWN0aW9uLmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gIGJsZW5kOiBmYWxzZSxcbiAgZGlsYXRlOiAxLFxuICBsb29wOiAwLFxuICB5b3lvOiAwLFxuICBmbGlwOiAwLFxuICBsb29wQ291bnQ6IDAsXG4gIHlveW9Db3VudDogMCxcbiAgZmxpcENvdW50OiAwLFxuICBwbGF5RGlyZWN0aW9uOiAxLFxuICBpc1NjcnViYmluZzogZmFsc2UsXG4gIGVuZGVkOiBmYWxzZSxcbiAgZWxhcHNlZDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWVuO1xuIl19

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(123);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(124);
	
	var _createBezier2 = _interopRequireDefault(_createBezier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Values
	/*
	  Easing functions
	  ----------------------------------------
	  
	  Generates and provides easing functions based on baseFunction definitions
	  
	  A call to easingFunction.get('functionName') returns a function that can be passed:
	    @param [number]: Progress 0-1
	    @param [number] (optional): Amp modifier, only accepted in some easing functions
	                  and is used to adjust overall strength
	    @return [number]: Eased progress
	    
	  We can generate new functions by sending an easing function through easingFunction.extend(name, method).
	  Which will make nameIn, nameOut and nameInOut functions available to use.
	    
	  Easing functions from Robert Penner
	  http://www.robertpenner.com/easing/
	    
	  Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
	  https://github.com/gre/bezier-easing/blob/master/index.js  
	  https://github.com/gre/bezier-easing/blob/master/LICENSE
	
	  Anticipate easing created by Elliot Gino
	  https://twitter.com/ElliotGeno
	*/
	// Imports
	var DEFAULT_BACK_STRENGTH = 1.525;
	var DEFAULT_POW_STRENGTH = 2;
	
	/*
	  Each of these base functions is an easeIn
	  
	  On init, we use .mirror and .reverse to generate easeInOut and
	  easeOut functions respectively.
	*/
	var baseEasing = {
	  ease: function (progress) {
	    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_POW_STRENGTH : arguments[1];
	    return Math.pow(progress, strength);
	  },
	  circ: function (progress) {
	    return 1 - Math.sin(Math.acos(progress));
	  },
	  back: function (progress) {
	    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
	    return progress * progress * ((strength + 1) * progress - strength);
	  }
	};
	
	// Utility functions
	var generatePowerEasing = function (strength) {
	  return function (progress) {
	    return baseEasing.ease(progress, strength);
	  };
	};
	
	['cubic', 'quart', 'quint'].forEach(function (easingName, i) {
	  return baseEasing[easingName] = generatePowerEasing(i + 3);
	});
	
	// Generate in/out/inOut variations
	for (var key in baseEasing) {
	  if (baseEasing.hasOwnProperty(key)) {
	    var easingFunction = (0, _createEasing2.default)(baseEasing[key]);
	    baseEasing[key + 'In'] = easingFunction.in;
	    baseEasing[key + 'Out'] = easingFunction.out;
	    baseEasing[key + 'InOut'] = easingFunction.inOut;
	  }
	}
	
	baseEasing.linear = function (progress) {
	  return progress;
	};
	baseEasing.anticipate = function (progress) {
	  var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
	  return (progress *= 2) < 1 ? 0.5 * baseEasing.backIn(progress, strength) : 0.5 * (2 - Math.pow(2, -10 * (progress - 1)));
	};
	
	baseEasing.createVariations = _createEasing2.default;
	baseEasing.cubicBezier = _createBezier2.default;
	baseEasing.modify = function (easing) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return function (progress) {
	    return easing.apply(undefined, [progress].concat(args));
	  };
	};
	
	exports.default = baseEasing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfQkFDS19TVFJFTkdUSCIsIkRFRkFVTFRfUE9XX1NUUkVOR1RIIiwiYmFzZUVhc2luZyIsImVhc2UiLCJwcm9ncmVzcyIsInN0cmVuZ3RoIiwiY2lyYyIsIk1hdGgiLCJzaW4iLCJhY29zIiwiYmFjayIsImdlbmVyYXRlUG93ZXJFYXNpbmciLCJmb3JFYWNoIiwiZWFzaW5nTmFtZSIsImkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImVhc2luZ0Z1bmN0aW9uIiwiaW4iLCJvdXQiLCJpbk91dCIsImxpbmVhciIsImFudGljaXBhdGUiLCJiYWNrSW4iLCJwb3ciLCJjcmVhdGVWYXJpYXRpb25zIiwiY3ViaWNCZXppZXIiLCJtb2RpZnkiLCJlYXNpbmciLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7O0FBMEJBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBS0EsSUFBTUEsd0JBQXdCLEtBQTlCO0FBQ0EsSUFBTUMsdUJBQXVCLENBQTdCOztBQUVBOzs7Ozs7QUFNQSxJQUFNQyxhQUFhO0FBQ2pCQyxRQUFNLFVBQUNDLFFBQUQ7QUFBQSxRQUFXQyxRQUFYLHlEQUFzQkosb0JBQXRCO0FBQUEsb0JBQStDRyxRQUEvQyxFQUEyREMsUUFBM0Q7QUFBQSxHQURXO0FBRWpCQyxRQUFNO0FBQUEsV0FBWSxJQUFJQyxLQUFLQyxHQUFMLENBQVNELEtBQUtFLElBQUwsQ0FBVUwsUUFBVixDQUFULENBQWhCO0FBQUEsR0FGVztBQUdqQk0sUUFBTSxVQUFDTixRQUFEO0FBQUEsUUFBV0MsUUFBWCx5REFBc0JMLHFCQUF0QjtBQUFBLFdBQWlESSxXQUFXQSxRQUFaLElBQXlCLENBQUNDLFdBQVcsQ0FBWixJQUFpQkQsUUFBakIsR0FBNEJDLFFBQXJELENBQWhEO0FBQUE7QUFIVyxDQUFuQjs7QUFNQTtBQUNBLElBQU1NLHNCQUFzQixVQUFDTixRQUFEO0FBQUEsU0FBYyxVQUFDRCxRQUFEO0FBQUEsV0FBY0YsV0FBV0MsSUFBWCxDQUFnQkMsUUFBaEIsRUFBMEJDLFFBQTFCLENBQWQ7QUFBQSxHQUFkO0FBQUEsQ0FBNUI7O0FBRUEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0Qk8sT0FBNUIsQ0FBb0MsVUFBQ0MsVUFBRCxFQUFhQyxDQUFiO0FBQUEsU0FBbUJaLFdBQVdXLFVBQVgsSUFBeUJGLG9CQUFvQkcsSUFBSSxDQUF4QixDQUE1QztBQUFBLENBQXBDOztBQUVBO0FBQ0EsS0FBSyxJQUFJQyxHQUFULElBQWdCYixVQUFoQixFQUE0QjtBQUMxQixNQUFJQSxXQUFXYyxjQUFYLENBQTBCRCxHQUExQixDQUFKLEVBQW9DO0FBQ2xDLFFBQU1FLGlCQUFpQiw0QkFBcUJmLFdBQVdhLEdBQVgsQ0FBckIsQ0FBdkI7QUFDQWIsZUFBY2EsR0FBZCxXQUF5QkUsZUFBZUMsRUFBeEM7QUFDQWhCLGVBQWNhLEdBQWQsWUFBMEJFLGVBQWVFLEdBQXpDO0FBQ0FqQixlQUFjYSxHQUFkLGNBQTRCRSxlQUFlRyxLQUEzQztBQUNEO0FBQ0Y7O0FBRURsQixXQUFXbUIsTUFBWCxHQUFvQjtBQUFBLFNBQVlqQixRQUFaO0FBQUEsQ0FBcEI7QUFDQUYsV0FBV29CLFVBQVgsR0FBd0IsVUFBQ2xCLFFBQUQ7QUFBQSxNQUFXQyxRQUFYLHlEQUFzQkwscUJBQXRCO0FBQUEsU0FDckIsQ0FBQ0ksWUFBVSxDQUFYLElBQWdCLENBQWpCLEdBQXNCLE1BQU1GLFdBQVdxQixNQUFYLENBQWtCbkIsUUFBbEIsRUFBNEJDLFFBQTVCLENBQTVCLEdBQXFFLE9BQU8sSUFBSUUsS0FBS2lCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU9wQixXQUFXLENBQWxCLENBQVosQ0FBWCxDQUQvQztBQUFBLENBQXhCOztBQUdBRixXQUFXdUIsZ0JBQVg7QUFDQXZCLFdBQVd3QixXQUFYO0FBQ0F4QixXQUFXeUIsTUFBWCxHQUFvQixVQUFDQyxNQUFEO0FBQUEsb0NBQVlDLElBQVo7QUFBWUEsUUFBWjtBQUFBOztBQUFBLFNBQXFCLFVBQUN6QixRQUFEO0FBQUEsV0FBY3dCLHlCQUFPeEIsUUFBUCxTQUFvQnlCLElBQXBCLEVBQWQ7QUFBQSxHQUFyQjtBQUFBLENBQXBCOztrQkFFZTNCLFUiLCJmaWxlIjoicHJlc2V0LWVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEVhc2luZyBmdW5jdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICBcbiAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgXG4gIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICBcbiAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICBcbiAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICBcbiAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmNvbnN0IGJhc2VFYXNpbmcgPSB7XG4gIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgYmFjazogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aClcbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG5jb25zdCBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gKHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MpID0+IGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaCgoZWFzaW5nTmFtZSwgaSkgPT4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpKTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAobGV0IGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBjb25zdCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmNyZWF0ZVZhcmlhdGlvbnMgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = createEasingFunction;
	/*
	  Mirror easing
	  
	  Mirrors the provided easing function, used here for mirroring an
	  easeIn into an easeInOut
	  
	  @param [number]: Progress, from 0 - 1, of current shift
	  @param [function]: The easing function to mirror
	  @returns [number]: The easing-adjusted delta
	*/
	var mirrorEasing = function (method) {
	  return function (progress, strength) {
	    return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
	  };
	};
	
	/*
	  Reverse easing
	  
	  Reverses the output of the provided easing function, used for flipping easeIn
	  curve to an easeOut.
	  
	  @param [number]: Progress, from 0 - 1, of current shift
	  @param [function]: The easing function to reverse
	  @returns [number]: The easing-adjusted delta
	*/
	var reverseEasing = function (method) {
	  return function (progress, strength) {
	    return 1 - method(1 - progress, strength);
	  };
	};
	
	/*
	  Easing class
	
	  If provided easing function, returns easing function with 
	  in/out/inOut variations
	
	  If provided four arguments, returns new Bezier class instead.
	*/
	function createEasingFunction(method) {
	  var easingFunction = function (progress, strength) {
	    return method(progress, strength);
	  };
	
	  easingFunction.in = function (progress, strength) {
	    return method(progress, strength);
	  };
	  easingFunction.out = reverseEasing(method);
	  easingFunction.inOut = mirrorEasing(method);
	
	  return easingFunction;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVhc2luZ0Z1bmN0aW9uIiwibWlycm9yRWFzaW5nIiwibWV0aG9kIiwicHJvZ3Jlc3MiLCJzdHJlbmd0aCIsInJldmVyc2VFYXNpbmciLCJlYXNpbmdGdW5jdGlvbiIsImluIiwib3V0IiwiaW5PdXQiXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCQSxvQjtBQWhDeEI7Ozs7Ozs7Ozs7QUFVQSxJQUFNQyxlQUFlLFVBQUNDLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLFFBQUQsRUFBV0MsUUFBWDtBQUFBLFdBQXlCRCxZQUFZLEdBQWIsR0FBb0JELE9BQU8sSUFBSUMsUUFBWCxFQUFxQkMsUUFBckIsSUFBaUMsQ0FBckQsR0FBeUQsQ0FBQyxJQUFJRixPQUFPLEtBQUssSUFBSUMsUUFBVCxDQUFQLEVBQTJCQyxRQUEzQixDQUFMLElBQTZDLENBQTlIO0FBQUEsR0FBWjtBQUFBLENBQXJCOztBQUVBOzs7Ozs7Ozs7O0FBVUEsSUFBTUMsZ0JBQWdCLFVBQUNILE1BQUQ7QUFBQSxTQUFZLFVBQUNDLFFBQUQsRUFBV0MsUUFBWDtBQUFBLFdBQXdCLElBQUlGLE9BQU8sSUFBSUMsUUFBWCxFQUFxQkMsUUFBckIsQ0FBNUI7QUFBQSxHQUFaO0FBQUEsQ0FBdEI7O0FBRUE7Ozs7Ozs7O0FBUWUsU0FBU0osb0JBQVQsQ0FBOEJFLE1BQTlCLEVBQXNDO0FBQ25ELE1BQUlJLGlCQUFpQixVQUFDSCxRQUFELEVBQVdDLFFBQVg7QUFBQSxXQUF3QkYsT0FBT0MsUUFBUCxFQUFpQkMsUUFBakIsQ0FBeEI7QUFBQSxHQUFyQjs7QUFFQUUsaUJBQWVDLEVBQWYsR0FBb0IsVUFBQ0osUUFBRCxFQUFXQyxRQUFYO0FBQUEsV0FBd0JGLE9BQU9DLFFBQVAsRUFBaUJDLFFBQWpCLENBQXhCO0FBQUEsR0FBcEI7QUFDQUUsaUJBQWVFLEdBQWYsR0FBcUJILGNBQWNILE1BQWQsQ0FBckI7QUFDQUksaUJBQWVHLEtBQWYsR0FBdUJSLGFBQWFDLE1BQWIsQ0FBdkI7O0FBRUEsU0FBT0ksY0FBUDtBQUNEIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBNaXJyb3IgZWFzaW5nXG4gIFxuICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCBtaXJyb3JFYXNpbmcgPSAobWV0aG9kKSA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIFxuLypcbiAgUmV2ZXJzZSBlYXNpbmdcbiAgXG4gIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCByZXZlcnNlRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgRWFzaW5nIGNsYXNzXG5cbiAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgbGV0IGVhc2luZ0Z1bmN0aW9uID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbiAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbiJdfQ==

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = cubicBezier;
	/*
	  Bezier function generator
	    
	  Gaëtan Renaudeau's BezierEasing
	  https://github.com/gre/bezier-easing/blob/master/index.js  
	  https://github.com/gre/bezier-easing/blob/master/LICENSE
	  You're a hero
	  
	  Use
	  
	    var easeOut = new Bezier(.17,.67,.83,.67),
	      x = easeOut(0.5); // returns 0.627...
	*/
	
	// Constants
	var NEWTON_ITERATIONS = 8;
	var NEWTON_MIN_SLOPE = 0.001;
	var SUBDIVISION_PRECISION = 0.0000001;
	var SUBDIVISION_MAX_ITERATIONS = 10;
	var K_SPLINE_TABLE_SIZE = 11;
	var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
	var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
	
	// Helper methods
	var a = function (a1, a2) {
	  return 1.0 - 3.0 * a2 + 3.0 * a1;
	};
	var b = function (a1, a2) {
	  return 3.0 * a2 - 6.0 * a1;
	};
	var c = function (a1) {
	  return 3.0 * a1;
	};
	
	var getSlope = function (t, a1, a2) {
	  return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
	};
	
	var calcBezier = function (t, a1, a2) {
	  return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
	};
	
	/*
	  Create a cubic bezier resolver
	*/
	function cubicBezier(mX1, mY1, mX2, mY2) {
	  var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
	  var _precomputed = false;
	
	  var binarySubdivide = function (aX, aA, aB) {
	    var i = 0;
	    var currentX = void 0;
	    var currentT = void 0;
	
	    do {
	      currentT = aA + (aB - aA) / 2.0;
	      currentX = calcBezier(currentT, mX1, mX2) - aX;
	      if (currentX > 0.0) {
	        aB = currentT;
	      } else {
	        aA = currentT;
	      }
	    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	    return currentT;
	  };
	
	  var newtonRaphsonIterate = function (aX, aGuessT) {
	    var i = 0;
	    var currentSlope = 0;
	    var currentX = void 0;
	
	    for (; i < NEWTON_ITERATIONS; ++i) {
	      currentSlope = getSlope(aGuessT, mX1, mX2);
	
	      if (currentSlope === 0.0) {
	        return aGuessT;
	      }
	
	      currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	      aGuessT -= currentX / currentSlope;
	    }
	
	    return aGuessT;
	  };
	
	  var calcSampleValues = function () {
	    for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
	      sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
	    }
	  };
	
	  var getTForX = function (aX) {
	    var intervalStart = 0.0;
	    var currentSample = 1;
	    var lastSample = K_SPLINE_TABLE_SIZE - 1;
	    var dist = 0.0;
	    var guessForT = 0.0;
	    var initialSlope = 0.0;
	
	    for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
	      intervalStart += K_SAMPLE_STEP_SIZE;
	    }
	
	    --currentSample;
	
	    dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
	    guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
	
	    initialSlope = getSlope(guessForT, mX1, mX2);
	
	    // If slope is greater than min
	    if (initialSlope >= NEWTON_MIN_SLOPE) {
	      return newtonRaphsonIterate(aX, guessForT);
	      // Slope is equal to min
	    } else if (initialSlope === 0.0) {
	      return guessForT;
	      // Slope is less than min
	    } else {
	      return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
	    }
	  };
	
	  var precompute = function () {
	    _precomputed = true;
	    if (mX1 != mY1 || mX2 != mY2) {
	      calcSampleValues();
	    }
	  };
	
	  var resolver = function (aX) {
	    var returnValue = void 0;
	
	    if (!_precomputed) {
	      precompute();
	    }
	
	    // If linear gradient, return X as T
	    if (mX1 === mY1 && mX2 === mY2) {
	      returnValue = aX;
	
	      // If at start, return 0
	    } else if (aX === 0) {
	      returnValue = 0;
	
	      // If at end, return 1
	    } else if (aX === 1) {
	      returnValue = 1;
	    } else {
	      returnValue = calcBezier(getTForX(aX), mY1, mY2);
	    }
	
	    return returnValue;
	  };
	
	  return resolver;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbImN1YmljQmV6aWVyIiwiTkVXVE9OX0lURVJBVElPTlMiLCJORVdUT05fTUlOX1NMT1BFIiwiU1VCRElWSVNJT05fUFJFQ0lTSU9OIiwiU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMiLCJLX1NQTElORV9UQUJMRV9TSVpFIiwiS19TQU1QTEVfU1RFUF9TSVpFIiwiRkxPQVRfMzJfU1VQUE9SVEVEIiwiRmxvYXQzMkFycmF5IiwiYSIsImExIiwiYTIiLCJiIiwiYyIsImdldFNsb3BlIiwidCIsImNhbGNCZXppZXIiLCJtWDEiLCJtWTEiLCJtWDIiLCJtWTIiLCJzYW1wbGVWYWx1ZXMiLCJBcnJheSIsIl9wcmVjb21wdXRlZCIsImJpbmFyeVN1YmRpdmlkZSIsImFYIiwiYUEiLCJhQiIsImkiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiTWF0aCIsImFicyIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsImNhbGNTYW1wbGVWYWx1ZXMiLCJnZXRURm9yWCIsImludGVydmFsU3RhcnQiLCJjdXJyZW50U2FtcGxlIiwibGFzdFNhbXBsZSIsImRpc3QiLCJndWVzc0ZvclQiLCJpbml0aWFsU2xvcGUiLCJwcmVjb21wdXRlIiwicmVzb2x2ZXIiLCJyZXR1cm5WYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7O2tCQW1Dd0JBLFc7QUFuQ3hCOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0EsSUFBTUMsb0JBQW9CLENBQTFCO0FBQ0EsSUFBTUMsbUJBQW1CLEtBQXpCO0FBQ0EsSUFBTUMsd0JBQXdCLFNBQTlCO0FBQ0EsSUFBTUMsNkJBQTZCLEVBQW5DO0FBQ0EsSUFBTUMsc0JBQXNCLEVBQTVCO0FBQ0EsSUFBTUMscUJBQXFCLE9BQU9ELHNCQUFzQixHQUE3QixDQUEzQjtBQUNBLElBQU1FLHFCQUFzQixPQUFPQyxZQUFQLEtBQXdCLFdBQXBE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QixFQUE4QjtBQUM1QmdCO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1TLFdBQVcsVUFBQ3BCLEVBQUQsRUFBUTtBQUN2QixRQUFJcUIsb0JBQUo7O0FBRUEsUUFBSSxDQUFDdkIsWUFBTCxFQUFtQjtBQUNqQnFCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJM0IsUUFBUUMsR0FBUixJQUFlQyxRQUFRQyxHQUEzQixFQUFnQztBQUM5QjBCLG9CQUFjckIsRUFBZDs7QUFFRjtBQUNDLEtBSkQsTUFJTyxJQUFJQSxPQUFPLENBQVgsRUFBYztBQUNuQnFCLG9CQUFjLENBQWQ7O0FBRUY7QUFDQyxLQUpNLE1BSUEsSUFBSXJCLE9BQU8sQ0FBWCxFQUFjO0FBQ25CcUIsb0JBQWMsQ0FBZDtBQUVELEtBSE0sTUFHQTtBQUNMQSxvQkFBYzlCLFdBQVdxQixTQUFTWixFQUFULENBQVgsRUFBeUJQLEdBQXpCLEVBQThCRSxHQUE5QixDQUFkO0FBQ0Q7O0FBRUQsV0FBTzBCLFdBQVA7QUFDRCxHQXhCRDs7QUEwQkEsU0FBT0QsUUFBUDtBQUNEIiwiZmlsZSI6ImNyZWF0ZS1iZXppZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgXG4gIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gIFlvdSdyZSBhIGhlcm9cbiAgXG4gIFVzZVxuICBcbiAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xuY29uc3QgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xuY29uc3QgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xuY29uc3QgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xuY29uc3QgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbmNvbnN0IEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbmNvbnN0IEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbmNvbnN0IEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8vIEhlbHBlciBtZXRob2RzXG5jb25zdCBhID0gKGExLCBhMikgPT4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbmNvbnN0IGIgPSAoYTEsIGEyKSA9PiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuY29uc3QgYyA9IChhMSkgPT4gMy4wICogYTE7XG5cbmNvbnN0IGdldFNsb3BlID0gKHQsIGExLCBhMikgPT4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG5cbmNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG5cbi8qXG4gIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBjb25zdCBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICBsZXQgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYmluYXJ5U3ViZGl2aWRlID0gKGFYLCBhQSwgYUIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnRYO1xuICAgIGxldCBjdXJyZW50VDtcblxuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH07XG5cbiAgY29uc3QgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSAoYVgsIGFHdWVzc1QpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgbGV0IGN1cnJlbnRYO1xuXG4gICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICBcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH07XG5cbiAgY29uc3QgY2FsY1NhbXBsZVZhbHVlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRGb3JYID0gKGFYKSA9PiB7XG4gICAgbGV0IGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgbGV0IGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIGxldCBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgbGV0IGRpc3QgPSAwLjA7XG4gICAgbGV0IGd1ZXNzRm9yVCA9IDAuMDtcbiAgICBsZXQgaW5pdGlhbFNsb3BlID0gMC4wO1xuICAgICAgXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgfVxuICAgIFxuICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICBcbiAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgXG4gICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgXG4gICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlY29tcHV0ZSA9ICgpID0+IHtcbiAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzb2x2ZXIgPSAoYVgpID0+IHtcbiAgICBsZXQgcmV0dXJuVmFsdWU7XG5cbiAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgcHJlY29tcHV0ZSgpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICBcbiAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICBcbiAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIHJldHVybiByZXNvbHZlcjtcbn1cbiJdfQ==

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(83);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(88);
	
	var _utils = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Physics = function (_Action) {
	  _inherits(Physics, _Action);
	
	  function Physics() {
	    _classCallCheck(this, Physics);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));
	
	    _this.inactiveFrames = 0;
	    _this.calculatesVelocity = true;
	    return _this;
	  }
	
	  Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
	    this.hasChanged = false;
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	
	      // Apply acceleration
	      value.velocity += (0, _calc.speedPerFrame)(value.acceleration, elapsed);
	
	      // Apply friction
	      value.velocity *= Math.pow(1 - value.friction, elapsed / 100);
	
	      // Apply spring
	      if (value.spring && (0, _utils.isNum)(value.to)) {
	        var distanceToTarget = value.to - value.current;
	        value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
	      }
	
	      // Apply latest velocity
	      value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
	
	      // Detect bounce
	      if (value.min !== undefined && value.current < value.min || value.max !== undefined && value.current > value.max) {
	        value.velocity *= -value.bounce;
	      }
	
	      // Check if value has changed
	      if (Math.abs(value.velocity) >= value.stopSpeed) {
	        this.hasChanged = true;
	      }
	
	      if (value.spring && !this.hasChanged) {
	        value.current = value.to;
	      }
	    }
	  };
	
	  Physics.prototype.onFrameEnd = function onFrameEnd() {
	    if (this.maxInactiveFrames !== Infinity) {
	      this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;
	
	      if (this.inactiveFrames >= this.maxInactiveFrames) {
	        this.complete();
	      }
	    }
	  };
	
	  return Physics;
	}(_Action3.default);
	
	Physics.prototype.defaultValueProp = 'velocity';
	Physics.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  acceleration: 0, // [number]: Acceleration to apply to value, in units per second
	  bounce: 0, // [number]: Factor to multiply velocity by on bounce
	  spring: 0, // [number]: Spring strength during 'string'
	  stopSpeed: 0.001, // [number]: Stop simulation under this speed
	  friction: 0 // [number]: Friction to apply per frame, 0-1
	});
	Physics.prototype.defaultProps = _Action3.default.extendDefaultProps({
	  maxInactiveFrames: 3
	});
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsImFyZ3MiLCJpbmFjdGl2ZUZyYW1lcyIsImNhbGN1bGF0ZXNWZWxvY2l0eSIsIm9uVXBkYXRlIiwicGh5c2ljcyIsImZyYW1lU3RhbXAiLCJlbGFwc2VkIiwiaGFzQ2hhbmdlZCIsImkiLCJudW1WYWx1ZUtleXMiLCJrZXkiLCJ2YWx1ZUtleXMiLCJ2YWx1ZSIsInZhbHVlcyIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwiZnJpY3Rpb24iLCJzcHJpbmciLCJ0byIsImRpc3RhbmNlVG9UYXJnZXQiLCJjdXJyZW50IiwibWluIiwidW5kZWZpbmVkIiwibWF4IiwiYm91bmNlIiwiTWF0aCIsImFicyIsInN0b3BTcGVlZCIsIm9uRnJhbWVFbmQiLCJtYXhJbmFjdGl2ZUZyYW1lcyIsIkluZmluaXR5IiwiY29tcGxldGUiLCJwcm90b3R5cGUiLCJkZWZhdWx0VmFsdWVQcm9wIiwiZGVmYXVsdFZhbHVlIiwiZXh0ZW5kRGVmYXVsdFZhbHVlIiwiZGVmYXVsdFByb3BzIiwiZXh0ZW5kRGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPO1lBQUFBLE87O0FBQ0osV0FESUEsT0FDSixHQUFxQjtBQUFBLDBCQURqQkEsT0FDaUI7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlEQUNuQiwwQ0FBU0EsSUFBVCxFQURtQjs7QUFFbkIsVUFBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBSG1CO0FBSXBCOztBQUxHSCxTLFdBT0pJLFEscUJBQVNDLE8sRUFBU0MsVSxFQUFZQyxPLEVBQVM7QUFDckMsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLQyxZQUF6QixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUMsVUFBTUUsTUFBTSxLQUFLQyxTQUFMLENBQWVILENBQWYsQ0FBWjtBQUNBLFVBQU1JLFFBQVEsS0FBS0MsTUFBTCxDQUFZSCxHQUFaLENBQWQ7O0FBRUE7QUFDQUUsWUFBTUUsUUFBTixJQUFrQix5QkFBY0YsTUFBTUcsWUFBcEIsRUFBa0NULE9BQWxDLENBQWxCOztBQUVBO0FBQ0FNLFlBQU1FLFFBQU4sYUFBbUIsSUFBSUYsTUFBTUksUUFBN0IsRUFBMkNWLFVBQVUsR0FBckQ7O0FBRUE7QUFDQSxVQUFJTSxNQUFNSyxNQUFOLElBQWdCLGtCQUFNTCxNQUFNTSxFQUFaLENBQXBCLEVBQXFDO0FBQ25DLFlBQU1DLG1CQUFtQlAsTUFBTU0sRUFBTixHQUFXTixNQUFNUSxPQUExQztBQUNBUixjQUFNRSxRQUFOLElBQWtCSyxtQkFBbUIseUJBQWNQLE1BQU1LLE1BQXBCLEVBQTRCWCxPQUE1QixDQUFyQztBQUNEOztBQUVEO0FBQ0FNLFlBQU1RLE9BQU4sSUFBaUIseUJBQWNSLE1BQU1FLFFBQXBCLEVBQThCUixPQUE5QixDQUFqQjs7QUFFQTtBQUNBLFVBQUtNLE1BQU1TLEdBQU4sS0FBY0MsU0FBZCxJQUEyQlYsTUFBTVEsT0FBTixHQUFnQlIsTUFBTVMsR0FBbEQsSUFBMkRULE1BQU1XLEdBQU4sS0FBY0QsU0FBZCxJQUEyQlYsTUFBTVEsT0FBTixHQUFnQlIsTUFBTVcsR0FBaEgsRUFBc0g7QUFDcEhYLGNBQU1FLFFBQU4sSUFBa0IsQ0FBRUYsTUFBTVksTUFBMUI7QUFDRDs7QUFFRDtBQUNBLFVBQUlDLEtBQUtDLEdBQUwsQ0FBU2QsTUFBTUUsUUFBZixLQUE0QkYsTUFBTWUsU0FBdEMsRUFBaUQ7QUFDL0MsYUFBS3BCLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7QUFFRCxVQUFJSyxNQUFNSyxNQUFOLElBQWdCLENBQUMsS0FBS1YsVUFBMUIsRUFBc0M7QUFDcENLLGNBQU1RLE9BQU4sR0FBZ0JSLE1BQU1NLEVBQXRCO0FBQ0Q7QUFDRjtBQUNGLEc7O0FBM0NHbkIsUyxXQTZDSjZCLFUseUJBQWE7QUFDWCxRQUFJLEtBQUtDLGlCQUFMLEtBQTJCQyxRQUEvQixFQUF5QztBQUN2QyxXQUFLN0IsY0FBTCxHQUFzQixLQUFLTSxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUtOLGNBQUwsR0FBc0IsQ0FBbEU7O0FBRUEsVUFBSSxLQUFLQSxjQUFMLElBQXVCLEtBQUs0QixpQkFBaEMsRUFBbUQ7QUFDakQsYUFBS0UsUUFBTDtBQUNEO0FBQ0Y7QUFDRixHOztTQXJER2hDLE87OztBQXdETkEsUUFBUWlDLFNBQVIsQ0FBa0JDLGdCQUFsQixHQUFxQyxVQUFyQztBQUNBbEMsUUFBUWlDLFNBQVIsQ0FBa0JFLFlBQWxCLEdBQWlDLGlCQUFPQyxrQkFBUCxDQUEwQjtBQUN6RHBCLGdCQUFjLENBRDJDLEVBQ3hDO0FBQ2pCUyxVQUFRLENBRmlELEVBRTlDO0FBQ1hQLFVBQVEsQ0FIaUQsRUFHOUM7QUFDWFUsYUFBVyxLQUo4QyxFQUl2QztBQUNsQlgsWUFBVSxDQUwrQyxDQUs3QztBQUw2QyxDQUExQixDQUFqQztBQU9BakIsUUFBUWlDLFNBQVIsQ0FBa0JJLFlBQWxCLEdBQWlDLGlCQUFPQyxrQkFBUCxDQUEwQjtBQUN6RFIscUJBQW1CO0FBRHNDLENBQTFCLENBQWpDOztrQkFJZTlCLE8iLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gIH1cblxuICBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgIGlmICgodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbikgfHwgKHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpKSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IC0gdmFsdWUuYm91bmNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgaWYgKE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAhdGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLm1heEluYWN0aXZlRnJhbWVzICE9PSBJbmZpbml0eSkge1xuICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndmVsb2NpdHknO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGFjY2VsZXJhdGlvbjogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgc3RvcFNwZWVkOiAwLjAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzO1xuIl19

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Action2 = __webpack_require__(83);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(127);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  Scrape x/y coordinates from provided event
	
	  @param [event]
	  @return [object]
	*/
	var mouseEventToPoint = function (e) {
	  return {
	    x: e.pageX,
	    y: e.pageY
	  };
	};
	
	var touchEventToPoint = function (_ref) {
	  var changedTouches = _ref.changedTouches;
	  return {
	    x: changedTouches[0].clientX,
	    y: changedTouches[0].clientY
	  };
	};
	
	var createPointer = function (e, preventDefault) {
	  return e.touches ? new _Pointer2.default(touchEventToPoint(e), 'touchmove', touchEventToPoint, preventDefault) : new _Pointer2.default(mouseEventToPoint(e), 'mousemove', mouseEventToPoint, preventDefault);
	};
	
	var getActualEvent = function (e) {
	  return e.originalEvent || e;
	};
	
	var Track = function (_Action) {
	  _inherits(Track, _Action);
	
	  function Track() {
	    _classCallCheck(this, Track);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Track.prototype.start = function start(input) {
	    var preventDefault = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    _Action.prototype.start.call(this);
	
	    if (input) {
	      this.input = input.state ? input : createPointer(getActualEvent(input), preventDefault);
	    }
	
	    this.inputOffset = {};
	    this.inputOrigin = _extends({}, this.input.state);
	    this.input.start();
	
	    return this;
	  };
	
	  Track.prototype.stop = function stop() {
	    _Action.prototype.stop.call(this);
	    this.input.stop();
	
	    return this;
	  };
	
	  Track.prototype.onUpdate = function onUpdate(track, frameStamp, elapsed) {
	    this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	
	      if (this.inputOffset.hasOwnProperty(key)) {
	        var value = this.values[key];
	        var inputProp = value.hasOwnProperty('watch') ? value.watch : key;
	
	        if (value.direct) {
	          value.current = this.input.state[inputProp];
	        } else {
	          value.current = value.from + this.inputOffset[inputProp];
	        }
	
	        // Smooth value if we have smoothing
	        if (value.smooth) {
	          value.current = (0, _calc.smooth)(value.current, value.prev, elapsed, value.smooth);
	        }
	      }
	    }
	  };
	
	  return Track;
	}(_Action3.default);
	
	Track.prototype.defaultValueProp = 'watch';
	Track.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  direct: false,
	  from: 0
	});
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbIm1vdXNlRXZlbnRUb1BvaW50IiwiZSIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsInRvdWNoRXZlbnRUb1BvaW50IiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImNyZWF0ZVBvaW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRvdWNoZXMiLCJnZXRBY3R1YWxFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJUcmFjayIsInN0YXJ0IiwiaW5wdXQiLCJzdGF0ZSIsImlucHV0T2Zmc2V0IiwiaW5wdXRPcmlnaW4iLCJzdG9wIiwib25VcGRhdGUiLCJ0cmFjayIsImZyYW1lU3RhbXAiLCJlbGFwc2VkIiwiaSIsIm51bVZhbHVlS2V5cyIsImtleSIsInZhbHVlS2V5cyIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJ2YWx1ZXMiLCJpbnB1dFByb3AiLCJ3YXRjaCIsImRpcmVjdCIsImN1cnJlbnQiLCJmcm9tIiwic21vb3RoIiwicHJldiIsInByb3RvdHlwZSIsImRlZmF1bHRWYWx1ZVByb3AiLCJkZWZhdWx0VmFsdWUiLCJleHRlbmREZWZhdWx0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxvQkFBb0IsVUFBQ0MsQ0FBRDtBQUFBLFNBQVE7QUFDaENDLE9BQUdELEVBQUVFLEtBRDJCO0FBRWhDQyxPQUFHSCxFQUFFSTtBQUYyQixHQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsb0JBQW9CO0FBQUEsTUFBR0MsY0FBSCxRQUFHQSxjQUFIO0FBQUEsU0FBeUI7QUFDakRMLE9BQUdLLGVBQWUsQ0FBZixFQUFrQkMsT0FENEI7QUFFakRKLE9BQUdHLGVBQWUsQ0FBZixFQUFrQkU7QUFGNEIsR0FBekI7QUFBQSxDQUExQjs7QUFLQSxJQUFNQyxnQkFBZ0IsVUFBQ1QsQ0FBRCxFQUFJVSxjQUFKO0FBQUEsU0FBdUJWLEVBQUVXLE9BQUYsR0FDM0Msc0JBQVlOLGtCQUFrQkwsQ0FBbEIsQ0FBWixFQUFrQyxXQUFsQyxFQUErQ0ssaUJBQS9DLEVBQWtFSyxjQUFsRSxDQUQyQyxHQUUzQyxzQkFBWVgsa0JBQWtCQyxDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDRCxpQkFBL0MsRUFBa0VXLGNBQWxFLENBRm9CO0FBQUEsQ0FBdEI7O0FBSUEsSUFBTUUsaUJBQWlCLFVBQUNaLENBQUQ7QUFBQSxTQUFPQSxFQUFFYSxhQUFGLElBQW1CYixDQUExQjtBQUFBLENBQXZCOztJQUVNYyxLO1lBQUFBLEs7O1dBQUFBLEs7MEJBQUFBLEs7Ozs7O0FBQUFBLE8sV0FDSkMsSyxrQkFBTUMsSyxFQUE4QjtBQUFBLFFBQXZCTixjQUF1Qix5REFBTixJQUFNOztBQUNsQyxzQkFBTUssS0FBTjs7QUFFQSxRQUFJQyxLQUFKLEVBQVc7QUFDVCxXQUFLQSxLQUFMLEdBQWFBLE1BQU1DLEtBQU4sR0FBY0QsS0FBZCxHQUFzQlAsY0FBY0csZUFBZUksS0FBZixDQUFkLEVBQXFDTixjQUFyQyxDQUFuQztBQUNEOztBQUVELFNBQUtRLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxXQUFMLGdCQUF3QixLQUFLSCxLQUFMLENBQVdDLEtBQW5DO0FBQ0EsU0FBS0QsS0FBTCxDQUFXRCxLQUFYOztBQUVBLFdBQU8sSUFBUDtBQUNELEc7O0FBYkdELE8sV0FlSk0sSSxtQkFBTztBQUNMLHNCQUFNQSxJQUFOO0FBQ0EsU0FBS0osS0FBTCxDQUFXSSxJQUFYOztBQUVBLFdBQU8sSUFBUDtBQUNELEc7O0FBcEJHTixPLFdBc0JKTyxRLHFCQUFTQyxLLEVBQU9DLFUsRUFBWUMsTyxFQUFTO0FBQ25DLFNBQUtOLFdBQUwsR0FBbUIsa0JBQU8sS0FBS0MsV0FBWixFQUF5QixLQUFLSCxLQUFMLENBQVdDLEtBQXBDLENBQW5COztBQUVBLFNBQUssSUFBSVEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtDLFlBQXpCLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQyxVQUFNRSxNQUFNLEtBQUtDLFNBQUwsQ0FBZUgsQ0FBZixDQUFaOztBQUVBLFVBQUksS0FBS1AsV0FBTCxDQUFpQlcsY0FBakIsQ0FBZ0NGLEdBQWhDLENBQUosRUFBMEM7QUFDeEMsWUFBTUcsUUFBUSxLQUFLQyxNQUFMLENBQVlKLEdBQVosQ0FBZDtBQUNBLFlBQU1LLFlBQVlGLE1BQU1ELGNBQU4sQ0FBcUIsT0FBckIsSUFBZ0NDLE1BQU1HLEtBQXRDLEdBQThDTixHQUFoRTs7QUFFQSxZQUFJRyxNQUFNSSxNQUFWLEVBQWtCO0FBQ2hCSixnQkFBTUssT0FBTixHQUFnQixLQUFLbkIsS0FBTCxDQUFXQyxLQUFYLENBQWlCZSxTQUFqQixDQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMRixnQkFBTUssT0FBTixHQUFnQkwsTUFBTU0sSUFBTixHQUFhLEtBQUtsQixXQUFMLENBQWlCYyxTQUFqQixDQUE3QjtBQUNEOztBQUVEO0FBQ0EsWUFBSUYsTUFBTU8sTUFBVixFQUFrQjtBQUNoQlAsZ0JBQU1LLE9BQU4sR0FBZ0Isa0JBQU9MLE1BQU1LLE9BQWIsRUFBc0JMLE1BQU1RLElBQTVCLEVBQWtDZCxPQUFsQyxFQUEyQ00sTUFBTU8sTUFBakQsQ0FBaEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHOztTQTVDR3ZCLEs7OztBQStDTkEsTUFBTXlCLFNBQU4sQ0FBZ0JDLGdCQUFoQixHQUFtQyxPQUFuQztBQUNBMUIsTUFBTXlCLFNBQU4sQ0FBZ0JFLFlBQWhCLEdBQStCLGlCQUFPQyxrQkFBUCxDQUEwQjtBQUN2RFIsVUFBUSxLQUQrQztBQUV2REUsUUFBTTtBQUZpRCxDQUExQixDQUEvQjs7a0JBS2V0QixLIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgUG9pbnRlciBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IHNtb290aCwgb2Zmc2V0IH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG4vKlxuICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICBAcGFyYW0gW2V2ZW50XVxuICBAcmV0dXJuIFtvYmplY3RdXG4qL1xuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgeDogZS5wYWdlWCxcbiAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGNyZWF0ZVBvaW50ZXIgPSAoZSwgcHJldmVudERlZmF1bHQpID0+IGUudG91Y2hlcyA/XG4gIG5ldyBQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQsIHByZXZlbnREZWZhdWx0KSA6IFxuICBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50LCBwcmV2ZW50RGVmYXVsdCk7XG5cbmNvbnN0IGdldEFjdHVhbEV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuXG5jbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXJ0KGlucHV0LCBwcmV2ZW50RGVmYXVsdCA9IHRydWUpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7IC4uLnRoaXMuaW5wdXQuc3RhdGUgfTtcbiAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBvZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wID0gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3dhdGNoJykgPyB2YWx1ZS53YXRjaCA6IGtleTtcblxuICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVbaW5wdXRQcm9wXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUuZnJvbSArIHRoaXMuaW5wdXRPZmZzZXRbaW5wdXRQcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHNtb290aCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZGlyZWN0OiBmYWxzZSxcbiAgZnJvbTogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIl19

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(128);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pointer = function (_Input) {
	  _inherits(Pointer, _Input);
	
	  function Pointer(initialState, moveEvent, eventToPoint, preventDefault) {
	    _classCallCheck(this, Pointer);
	
	    var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));
	
	    _this.preventDefault = preventDefault;
	    _this.eventToPoint = eventToPoint;
	    _this.moveEvent = moveEvent;
	    _this.boundLatest = _this.latest.bind(_this);
	    return _this;
	  }
	
	  Pointer.prototype.latest = function latest(e) {
	    _Input.prototype.latest.call(this, this.eventToPoint(e));
	    if (this.preventDefault) {
	      e.preventDefault();
	    }
	  };
	
	  Pointer.prototype.start = function start() {
	    _Input.prototype.start.call(this);
	    document.documentElement.addEventListener(this.moveEvent, this.boundLatest);
	  };
	
	  Pointer.prototype.stop = function stop() {
	    _Input.prototype.stop.call(this);
	    document.documentElement.removeEventListener(this.moveEvent, this.boundLatest);
	  };
	
	  return Pointer;
	}(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbIlBvaW50ZXIiLCJpbml0aWFsU3RhdGUiLCJtb3ZlRXZlbnQiLCJldmVudFRvUG9pbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvdW5kTGF0ZXN0IiwibGF0ZXN0IiwiYmluZCIsImUiLCJzdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsTztZQUFBQSxPOztBQUNuQixXQURtQkEsT0FDbkIsQ0FBWUMsWUFBWixFQUEwQkMsU0FBMUIsRUFBcUNDLFlBQXJDLEVBQW1EQyxjQUFuRCxFQUFtRTtBQUFBLDBCQURoREosT0FDZ0Q7O0FBQUEsaURBQ2pFLGtCQUFNQyxZQUFOLENBRGlFOztBQUVqRSxVQUFLRyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFVBQUtELFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsVUFBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLRyxXQUFMLEdBQW1CLE1BQUtDLE1BQUwsQ0FBWUMsSUFBWixPQUFuQjtBQUxpRTtBQU1sRTs7QUFQa0JQLFMsV0FTbkJNLE0sbUJBQU9FLEMsRUFBRztBQUNSLHFCQUFNRixNQUFOLFlBQWEsS0FBS0gsWUFBTCxDQUFrQkssQ0FBbEIsQ0FBYjtBQUNBLFFBQUksS0FBS0osY0FBVCxFQUF5QjtBQUN2QkksUUFBRUosY0FBRjtBQUNEO0FBQ0YsRzs7QUFka0JKLFMsV0FnQm5CUyxLLG9CQUFRO0FBQ04scUJBQU1BLEtBQU47QUFDQUMsYUFBU0MsZUFBVCxDQUF5QkMsZ0JBQXpCLENBQTBDLEtBQUtWLFNBQS9DLEVBQTBELEtBQUtHLFdBQS9EO0FBQ0QsRzs7QUFuQmtCTCxTLFdBcUJuQmEsSSxtQkFBTztBQUNMLHFCQUFNQSxJQUFOO0FBQ0FILGFBQVNDLGVBQVQsQ0FBeUJHLG1CQUF6QixDQUE2QyxLQUFLWixTQUFsRCxFQUE2RCxLQUFLRyxXQUFsRTtBQUNELEc7O1NBeEJrQkwsTzs7O2tCQUFBQSxPIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQsIHByZXZlbnREZWZhdWx0KSB7XG4gICAgc3VwZXIoaW5pdGlhbFN0YXRlKTtcbiAgICB0aGlzLnByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQ7XG4gICAgdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgdGhpcy5ib3VuZExhdGVzdCA9IHRoaXMubGF0ZXN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBsYXRlc3QoZSkge1xuICAgIHN1cGVyLmxhdGVzdCh0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgaWYgKHRoaXMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfVxufVxuIl19

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(84);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _utils = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Task) {
	  _inherits(Input, _Task);
	
	  function Input(initialValues, poll) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, _Task.call(this));
	
	    _this.state = initialValues;
	
	    if ((0, _utils.isFunc)(poll)) {
	      _this.onFrameStart = function () {
	        return _this.latest(_this.poll());
	      };
	    }
	    return _this;
	  }
	
	  /*
	    Manually add latest values
	     @param [object]
	  */
	
	
	  Input.prototype.latest = function latest(props) {
	    this.state = _extends({}, this.state, props);
	  };
	
	  return Input;
	}(_Task3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsImluaXRpYWxWYWx1ZXMiLCJwb2xsIiwic3RhdGUiLCJvbkZyYW1lU3RhcnQiLCJsYXRlc3QiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSztZQUFBQSxLOztBQUNuQixXQURtQkEsS0FDbkIsQ0FBWUMsYUFBWixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQSwwQkFEZEYsS0FDYzs7QUFBQSxpREFDL0IsZ0JBRCtCOztBQUUvQixVQUFLRyxLQUFMLEdBQWFGLGFBQWI7O0FBRUEsUUFBSSxtQkFBT0MsSUFBUCxDQUFKLEVBQWtCO0FBQ2hCLFlBQUtFLFlBQUwsR0FBb0I7QUFBQSxlQUFNLE1BQUtDLE1BQUwsQ0FBWSxNQUFLSCxJQUFMLEVBQVosQ0FBTjtBQUFBLE9BQXBCO0FBQ0Q7QUFOOEI7QUFPaEM7O0FBRUQ7Ozs7OztBQVZtQkYsTyxXQWVuQkssTSxtQkFBT0MsSyxFQUFPO0FBQ1osU0FBS0gsS0FBTCxnQkFBa0IsS0FBS0EsS0FBdkIsRUFBaUNHLEtBQWpDO0FBQ0QsRzs7U0FqQmtCTixLOzs7a0JBQUFBLEsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuLi90YXNrL1Rhc2snO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICBpZiAoaXNGdW5jKHBvbGwpKSB7XG4gICAgICB0aGlzLm9uRnJhbWVTdGFydCA9ICgpID0+IHRoaXMubGF0ZXN0KHRoaXMucG9sbCgpKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgKi9cbiAgbGF0ZXN0KHByb3BzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4ucHJvcHMgfTtcbiAgfVxufVxuIl19

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _timeline = __webpack_require__(130);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _utils = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	exports.default = function (tweens, props) {
	  var propsIsDuration = (0, _utils.isNum)(props);
	  var interval = propsIsDuration ? props : props ? props.interval || DEFAULT_INTERVAL : DEFAULT_INTERVAL;
	  var at = 0;
	  var timelineDefinition = tweens.map(function (tween) {
	    var def = { tween: tween, at: at };
	    at += interval;
	    return def;
	  });
	
	  return (0, _timeline2.default)(timelineDefinition, props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0lOVEVSVkFMIiwidHdlZW5zIiwicHJvcHMiLCJwcm9wc0lzRHVyYXRpb24iLCJpbnRlcnZhbCIsImF0IiwidGltZWxpbmVEZWZpbml0aW9uIiwibWFwIiwidHdlZW4iLCJkZWYiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQXpCOztrQkFFZSxVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDaEMsTUFBTUMsa0JBQWtCLGtCQUFNRCxLQUFOLENBQXhCO0FBQ0EsTUFBTUUsV0FBV0Qsa0JBQWtCRCxLQUFsQixHQUEwQkEsUUFBUUEsTUFBTUUsUUFBTixJQUFrQkosZ0JBQTFCLEdBQTZDQSxnQkFBeEY7QUFDQSxNQUFJSyxLQUFLLENBQVQ7QUFDQSxNQUFNQyxxQkFBcUJMLE9BQU9NLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDL0MsUUFBTUMsTUFBTSxFQUFFRCxZQUFGLEVBQVNILE1BQVQsRUFBWjtBQUNBQSxVQUFNRCxRQUFOO0FBQ0EsV0FBT0ssR0FBUDtBQUNELEdBSjBCLENBQTNCOztBQU1BLFNBQU8sd0JBQVNILGtCQUFULEVBQTZCSixLQUE3QixDQUFQO0FBQ0QsQyIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVsaW5lIGZyb20gJy4vdGltZWxpbmUnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgKHR3ZWVucywgcHJvcHMpID0+IHtcbiAgY29uc3QgcHJvcHNJc0R1cmF0aW9uID0gaXNOdW0ocHJvcHMpO1xuICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNEdXJhdGlvbiA/IHByb3BzIDogcHJvcHMgPyBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMIDogREVGQVVMVF9JTlRFUlZBTDtcbiAgbGV0IGF0ID0gMDtcbiAgY29uc3QgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcCgodHdlZW4pID0+IHtcbiAgICBjb25zdCBkZWYgPSB7IHR3ZWVuLCBhdCB9O1xuICAgIGF0ICs9IGludGVydmFsO1xuICAgIHJldHVybiBkZWY7XG4gIH0pO1xuXG4gIHJldHVybiB0aW1lbGluZSh0aW1lbGluZURlZmluaXRpb24sIHByb3BzKTtcbn07Il19

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = timeline;
	
	var _Tween = __webpack_require__(121);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(122);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	  @param [array]
	    Sequential array of tweens, each item can be a tween or definition obj:
	
	    [
	      new Tween(),
	      stagger(),
	      timeline(),
	      {
	        tween: new Tween(),
	        at: 100,
	        offset: "+=100"
	      }
	    ]
	*/
	var analyze = function (defs) {
	  var timeline = [];
	  var numDefs = defs.length;
	  var currentPlayhead = 0;
	
	  var _loop = function (i) {
	    var def = defs[i];
	    var defIsObj = def.tween ? true : false;
	    var tween = defIsObj ? def.tween : def;
	
	    if (defIsObj) {
	      if (def.offset !== undefined) {
	        currentPlayhead = (0, _calc.relativeValue)(currentPlayhead, def.offset);
	      } else if (def.at !== undefined) {
	        currentPlayhead = def.at;
	      }
	    }
	
	    var duration = 0;
	    for (var key in tween.values) {
	      if (tween.values.hasOwnProperty(key)) {
	        var value = tween.values[key];
	        duration = Math.max(duration, value.duration);
	      }
	    }
	
	    timeline.push({
	      from: currentPlayhead,
	      duration: duration,
	      fire: function (time) {
	        return tween.seekTime(time);
	      }
	    });
	
	    currentPlayhead += duration;
	  };
	
	  for (var i = 0; i < numDefs; i++) {
	    _loop(i);
	  }
	
	  return { totalTime: currentPlayhead, timeline: timeline };
	};
	
	var setTweens = function (_ref) {
	  var timeline = _ref.timeline;
	  var timelineLength = _ref.timelineLength;
	  var values = _ref.values;
	  var duration = _ref.duration;
	
	  for (var i = 0; i < timelineLength; i++) {
	    var _tween = timeline[i];
	    var tweenTime = values.p.current * duration - _tween.from;
	
	    if (tweenTime >= -50 && tweenTime <= _tween.duration + 50) {
	      _tween.fire(tweenTime);
	    }
	  }
	};
	
	function timeline(def) {
	  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _analyze = analyze(def);
	
	  var totalTime = _analyze.totalTime;
	  var timeline = _analyze.timeline;
	
	
	  return new _Tween2.default(_extends({
	    ease: _presetEasing2.default.linear
	  }, props, {
	    duration: totalTime,
	    values: {
	      p: { from: 0, to: 1 }
	    },
	    timeline: timeline,
	    timelineLength: timeline.length,
	    onRender: setTweens
	  }));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOlsidGltZWxpbmUiLCJhbmFseXplIiwiZGVmcyIsIm51bURlZnMiLCJsZW5ndGgiLCJjdXJyZW50UGxheWhlYWQiLCJpIiwiZGVmIiwiZGVmSXNPYmoiLCJ0d2VlbiIsIm9mZnNldCIsInVuZGVmaW5lZCIsImF0IiwiZHVyYXRpb24iLCJrZXkiLCJ2YWx1ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiTWF0aCIsIm1heCIsInB1c2giLCJmcm9tIiwiZmlyZSIsInRpbWUiLCJzZWVrVGltZSIsInRvdGFsVGltZSIsInNldFR3ZWVucyIsInRpbWVsaW5lTGVuZ3RoIiwidHdlZW5UaW1lIiwicCIsImN1cnJlbnQiLCJwcm9wcyIsImVhc2UiLCJsaW5lYXIiLCJ0byIsIm9uUmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBb0V3QkEsUTs7QUFwRXhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxJQUFNQyxVQUFVLFVBQUNDLElBQUQsRUFBVTtBQUN4QixNQUFNRixXQUFXLEVBQWpCO0FBQ0EsTUFBTUcsVUFBVUQsS0FBS0UsTUFBckI7QUFDQSxNQUFJQyxrQkFBa0IsQ0FBdEI7O0FBSHdCLHdCQUtmQyxDQUxlO0FBTXRCLFFBQU1DLE1BQU1MLEtBQUtJLENBQUwsQ0FBWjtBQUNBLFFBQU1FLFdBQVdELElBQUlFLEtBQUosR0FBWSxJQUFaLEdBQW1CLEtBQXBDO0FBQ0EsUUFBTUEsUUFBU0QsUUFBRCxHQUFhRCxJQUFJRSxLQUFqQixHQUF5QkYsR0FBdkM7O0FBRUEsUUFBSUMsUUFBSixFQUFjO0FBQ1osVUFBSUQsSUFBSUcsTUFBSixLQUFlQyxTQUFuQixFQUE4QjtBQUM1Qk4sMEJBQWtCLHlCQUFjQSxlQUFkLEVBQStCRSxJQUFJRyxNQUFuQyxDQUFsQjtBQUNELE9BRkQsTUFFTyxJQUFJSCxJQUFJSyxFQUFKLEtBQVdELFNBQWYsRUFBMEI7QUFDL0JOLDBCQUFrQkUsSUFBSUssRUFBdEI7QUFDRDtBQUNGOztBQUVELFFBQUlDLFdBQVcsQ0FBZjtBQUNBLFNBQUssSUFBSUMsR0FBVCxJQUFnQkwsTUFBTU0sTUFBdEIsRUFBOEI7QUFDNUIsVUFBSU4sTUFBTU0sTUFBTixDQUFhQyxjQUFiLENBQTRCRixHQUE1QixDQUFKLEVBQXNDO0FBQ3BDLFlBQU1HLFFBQVFSLE1BQU1NLE1BQU4sQ0FBYUQsR0FBYixDQUFkO0FBQ0FELG1CQUFXSyxLQUFLQyxHQUFMLENBQVNOLFFBQVQsRUFBbUJJLE1BQU1KLFFBQXpCLENBQVg7QUFDRDtBQUNGOztBQUVEYixhQUFTb0IsSUFBVCxDQUFjO0FBQ1pDLFlBQU1oQixlQURNO0FBRVpRLGdCQUFVQSxRQUZFO0FBR1pTLFlBQU0sVUFBQ0MsSUFBRDtBQUFBLGVBQVVkLE1BQU1lLFFBQU4sQ0FBZUQsSUFBZixDQUFWO0FBQUE7QUFITSxLQUFkOztBQU1BbEIsdUJBQW1CUSxRQUFuQjtBQWhDc0I7O0FBS3hCLE9BQUssSUFBSVAsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxPQUFwQixFQUE2QkcsR0FBN0IsRUFBa0M7QUFBQSxVQUF6QkEsQ0FBeUI7QUE0QmpDOztBQUVELFNBQU8sRUFBRW1CLFdBQVdwQixlQUFiLEVBQThCTCxrQkFBOUIsRUFBUDtBQUNELENBcENEOztBQXNDQSxJQUFNMEIsWUFBWSxnQkFBb0Q7QUFBQSxNQUFqRDFCLFFBQWlELFFBQWpEQSxRQUFpRDtBQUFBLE1BQXZDMkIsY0FBdUMsUUFBdkNBLGNBQXVDO0FBQUEsTUFBdkJaLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZGLFFBQWUsUUFBZkEsUUFBZTs7QUFDcEUsT0FBSyxJQUFJUCxJQUFJLENBQWIsRUFBZ0JBLElBQUlxQixjQUFwQixFQUFvQ3JCLEdBQXBDLEVBQXlDO0FBQ3ZDLFFBQU1HLFNBQVFULFNBQVNNLENBQVQsQ0FBZDtBQUNBLFFBQU1zQixZQUFhYixPQUFPYyxDQUFQLENBQVNDLE9BQVQsR0FBbUJqQixRQUFwQixHQUFnQ0osT0FBTVksSUFBeEQ7O0FBRUEsUUFBSU8sYUFBYSxDQUFDLEVBQWQsSUFBb0JBLGFBQWFuQixPQUFNSSxRQUFOLEdBQWlCLEVBQXRELEVBQTBEO0FBQ3hESixhQUFNYSxJQUFOLENBQVdNLFNBQVg7QUFDRDtBQUNGO0FBQ0YsQ0FURDs7QUFXZSxTQUFTNUIsUUFBVCxDQUFrQk8sR0FBbEIsRUFBbUM7QUFBQSxNQUFad0IsS0FBWSx5REFBSixFQUFJOztBQUFBLGlCQUNoQjlCLFFBQVFNLEdBQVIsQ0FEZ0I7O0FBQUEsTUFDeENrQixTQUR3QyxZQUN4Q0EsU0FEd0M7QUFBQSxNQUM3QnpCLFFBRDZCLFlBQzdCQSxRQUQ2Qjs7O0FBR2hELFNBQU87QUFDTGdDLFVBQU0sdUJBQU9DO0FBRFIsS0FFRkYsS0FGRTtBQUdMbEIsY0FBVVksU0FITDtBQUlMVixZQUFRO0FBQ05jLFNBQUcsRUFBRVIsTUFBTSxDQUFSLEVBQVdhLElBQUksQ0FBZjtBQURHLEtBSkg7QUFPTGxDLGNBQVVBLFFBUEw7QUFRTDJCLG9CQUFnQjNCLFNBQVNJLE1BUnBCO0FBU0wrQixjQUFVVDtBQVRMLEtBQVA7QUFXRCIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyByZWxhdGl2ZVZhbHVlIH0gZnJvbSAnLi9jYWxjJztcblxuLypcbiAgQHBhcmFtIFthcnJheV1cbiAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgW1xuICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICBzdGFnZ2VyKCksXG4gICAgICB0aW1lbGluZSgpLFxuICAgICAge1xuICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgIGF0OiAxMDAsXG4gICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICB9XG4gICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICBjb25zdCBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB0d2VlbiA9IChkZWZJc09iaikgPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFBsYXloZWFkID0gcmVsYXRpdmVWYWx1ZShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpO1xuICAgICAgfSBlbHNlIGlmIChkZWYuYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UGxheWhlYWQgPSBkZWYuYXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICBmb3IgKGxldCBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZmlyZTogKHRpbWUpID0+IHR3ZWVuLnNlZWtUaW1lKHRpbWUpXG4gICAgfSk7XG5cbiAgICBjdXJyZW50UGxheWhlYWQgKz0gZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmUgfTtcbn07XG5cbmNvbnN0IHNldFR3ZWVucyA9ICh7IHRpbWVsaW5lLCB0aW1lbGluZUxlbmd0aCwgdmFsdWVzLCBkdXJhdGlvbiB9KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHR3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgY29uc3QgdHdlZW5UaW1lID0gKHZhbHVlcy5wLmN1cnJlbnQgKiBkdXJhdGlvbikgLSB0d2Vlbi5mcm9tO1xuXG4gICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IHR3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICBjb25zdCB7IHRvdGFsVGltZSwgdGltZWxpbmUgfSA9IGFuYWx5emUoZGVmKTtcblxuICByZXR1cm4gbmV3IFR3ZWVuKHtcbiAgICBlYXNlOiBlYXNpbmcubGluZWFyLFxuICAgIC4uLnByb3BzLFxuICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgdmFsdWVzOiB7XG4gICAgICBwOiB7IGZyb206IDAsIHRvOiAxIH1cbiAgICB9LFxuICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgfSk7XG59Il19

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Flow = __webpack_require__(119);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_flow';
	
	exports.default = function (element, adapter) {
	  if (element[SAVE_PROP]) {
	    return element[SAVE_PROP];
	  } else {
	    var flow = new _Flow2.default({ element: element, adapter: adapter });
	
	    // Bind adapter to element
	    Object.defineProperty(element, SAVE_PROP, {
	      enumerable: false,
	      writable: false,
	      value: flow
	    });
	
	    return flow;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOlsiU0FWRV9QUk9QIiwiZWxlbWVudCIsImFkYXB0ZXIiLCJmbG93IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLFdBQWxCOztrQkFFZSxVQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBc0I7QUFDbkMsTUFBSUQsUUFBUUQsU0FBUixDQUFKLEVBQXdCO0FBQ3RCLFdBQU9DLFFBQVFELFNBQVIsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1HLE9BQU8sbUJBQVMsRUFBRUYsZ0JBQUYsRUFBV0MsZ0JBQVgsRUFBVCxDQUFiOztBQUVBO0FBQ0FFLFdBQU9DLGNBQVAsQ0FBc0JKLE9BQXRCLEVBQStCRCxTQUEvQixFQUEwQztBQUN4Q00sa0JBQVksS0FENEI7QUFFeENDLGdCQUFVLEtBRjhCO0FBR3hDQyxhQUFPTDtBQUhpQyxLQUExQzs7QUFNQSxXQUFPQSxJQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6ImdldC1mbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsb3cgZnJvbSAnLi4vRmxvdyc7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCwgYWRhcHRlcikgPT4ge1xuICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmbG93ID0gbmV3IEZsb3coeyBlbGVtZW50LCBhZGFwdGVyIH0pO1xuXG4gICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmbG93XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxvdztcbiAgfVxufTtcblxuXG4iXX0=

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.chain = exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(88);
	
	var createMapper = exports.createMapper = function (input, output) {
	  var mapLength = input.length;
	  var finalIndex = mapLength - 1;
	
	  return function (value) {
	    // If value outside minimum input range, quickly return
	    if (value <= input[0]) {
	      return output[0];
	    }
	
	    // If value outside maximum input range, quickly return
	    if (value >= input[finalIndex]) {
	      return output[finalIndex];
	    }
	
	    // If within overall input range, find specific range
	    for (var i = 1; i < mapLength; i++) {
	      if (value < input[i] || i === finalIndex) {
	        var progressInRange = (0, _calc.getProgressFromValue)(value, input[i - 1], input[i]);
	        return (0, _calc.getValueFromProgress)(progressInRange, output[i - 1], output[i]);
	      }
	    }
	  };
	};
	
	var circularMotion = exports.circularMotion = function (v, key, _ref) {
	  var values = _ref.values;
	
	  var originX = values.originX ? values.originX.current : 0;
	  var originY = values.originY ? values.originY.current : 0;
	
	  return (0, _calc.pointFromAngleAndDistance)({
	    x: originX,
	    y: originY
	  }, values.angle.current, values.distance.current)[key];
	};
	
	/*
	  Combine transformers into one function that calls every
	  transformer in the array and returns the result
	
	  @param [array]
	  @return [function]
	*/
	var chain = exports.chain = function (transformers) {
	  var numTransformers = transformers.length;
	  var i = 0;
	
	  /*
	    @param [number]
	    @param [string]
	    @param [Action]
	    @return [number]
	  */
	  return function (v, key, a) {
	    for (i = 0; i < numTransformers; i++) {
	      v = transformers[i](v, key, a);
	    }
	
	    return v;
	  };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1hcHBlciIsImlucHV0Iiwib3V0cHV0IiwibWFwTGVuZ3RoIiwibGVuZ3RoIiwiZmluYWxJbmRleCIsInZhbHVlIiwiaSIsInByb2dyZXNzSW5SYW5nZSIsImNpcmN1bGFyTW90aW9uIiwidiIsImtleSIsInZhbHVlcyIsIm9yaWdpblgiLCJjdXJyZW50Iiwib3JpZ2luWSIsIngiLCJ5IiwiYW5nbGUiLCJkaXN0YW5jZSIsImNoYWluIiwidHJhbnNmb3JtZXJzIiwibnVtVHJhbnNmb3JtZXJzIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxzQ0FBZSxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDN0MsTUFBTUMsWUFBWUYsTUFBTUcsTUFBeEI7QUFDQSxNQUFNQyxhQUFhRixZQUFZLENBQS9COztBQUVBLFNBQU8sVUFBQ0csS0FBRCxFQUFXO0FBQ2hCO0FBQ0EsUUFBSUEsU0FBU0wsTUFBTSxDQUFOLENBQWIsRUFBdUI7QUFDckIsYUFBT0MsT0FBTyxDQUFQLENBQVA7QUFDRDs7QUFFRDtBQUNBLFFBQUlJLFNBQVNMLE1BQU1JLFVBQU4sQ0FBYixFQUFnQztBQUM5QixhQUFPSCxPQUFPRyxVQUFQLENBQVA7QUFDRDs7QUFFRDtBQUNBLFNBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixTQUFwQixFQUErQkksR0FBL0IsRUFBb0M7QUFDbEMsVUFBSUQsUUFBUUwsTUFBTU0sQ0FBTixDQUFSLElBQW9CQSxNQUFNRixVQUE5QixFQUEwQztBQUN4QyxZQUFNRyxrQkFBa0IsZ0NBQXFCRixLQUFyQixFQUE0QkwsTUFBTU0sSUFBSSxDQUFWLENBQTVCLEVBQTBDTixNQUFNTSxDQUFOLENBQTFDLENBQXhCO0FBQ0EsZUFBTyxnQ0FBcUJDLGVBQXJCLEVBQXNDTixPQUFPSyxJQUFJLENBQVgsQ0FBdEMsRUFBcURMLE9BQU9LLENBQVAsQ0FBckQsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixHQWxCRDtBQW1CRCxDQXZCTTs7QUF5QkEsSUFBTUUsMENBQWlCLFVBQUNDLENBQUQsRUFBSUMsR0FBSixRQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDcEQsTUFBTUMsVUFBV0QsT0FBT0MsT0FBUixHQUFtQkQsT0FBT0MsT0FBUCxDQUFlQyxPQUFsQyxHQUE0QyxDQUE1RDtBQUNBLE1BQU1DLFVBQVdILE9BQU9HLE9BQVIsR0FBbUJILE9BQU9HLE9BQVAsQ0FBZUQsT0FBbEMsR0FBNEMsQ0FBNUQ7O0FBRUEsU0FBTyxxQ0FBMEI7QUFDL0JFLE9BQUdILE9BRDRCO0FBRS9CSSxPQUFHRjtBQUY0QixHQUExQixFQUdKSCxPQUFPTSxLQUFQLENBQWFKLE9BSFQsRUFHa0JGLE9BQU9PLFFBQVAsQ0FBZ0JMLE9BSGxDLEVBRzJDSCxHQUgzQyxDQUFQO0FBSUQsQ0FSTTs7QUFVUDs7Ozs7OztBQU9PLElBQU1TLHdCQUFRLFVBQUNDLFlBQUQsRUFBa0I7QUFDckMsTUFBTUMsa0JBQWtCRCxhQUFhakIsTUFBckM7QUFDQSxNQUFJRyxJQUFJLENBQVI7O0FBRUE7Ozs7OztBQU1BLFNBQU8sVUFBQ0csQ0FBRCxFQUFJQyxHQUFKLEVBQVNZLENBQVQsRUFBZTtBQUNwQixTQUFLaEIsSUFBSSxDQUFULEVBQVlBLElBQUllLGVBQWhCLEVBQWlDZixHQUFqQyxFQUFzQztBQUNwQ0csVUFBSVcsYUFBYWQsQ0FBYixFQUFnQkcsQ0FBaEIsRUFBbUJDLEdBQW5CLEVBQXdCWSxDQUF4QixDQUFKO0FBQ0Q7O0FBRUQsV0FBT2IsQ0FBUDtBQUNELEdBTkQ7QUFPRCxDQWpCTSIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXBwZXIgPSAoaW5wdXQsIG91dHB1dCkgPT4ge1xuICBjb25zdCBtYXBMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSBtYXBMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHZhbHVlIDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodmFsdWUgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgLy8gSWYgd2l0aGluIG92ZXJhbGwgaW5wdXQgcmFuZ2UsIGZpbmQgc3BlY2lmaWMgcmFuZ2VcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWUgPCBpbnB1dFtpXSB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKHZhbHVlLCBpbnB1dFtpIC0gMV0sIGlucHV0W2ldKTtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKHByb2dyZXNzSW5SYW5nZSwgb3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2lyY3VsYXJNb3Rpb24gPSAodiwga2V5LCB7IHZhbHVlcyB9KSA9PiB7XG4gIGNvbnN0IG9yaWdpblggPSAodmFsdWVzLm9yaWdpblgpID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gIGNvbnN0IG9yaWdpblkgPSAodmFsdWVzLm9yaWdpblkpID8gdmFsdWVzLm9yaWdpblkuY3VycmVudCA6IDA7XG5cbiAgcmV0dXJuIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2Uoe1xuICAgIHg6IG9yaWdpblgsXG4gICAgeTogb3JpZ2luWSBcbiAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xufTtcblxuLypcbiAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gIEBwYXJhbSBbYXJyYXldXG4gIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9ICh0cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIC8qXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgQHJldHVybiBbbnVtYmVyXVxuICAqL1xuICByZXR1cm4gKHYsIGtleSwgYSkgPT4ge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTsiXX0=

/***/ }
/******/ ])
});
;
//# sourceMappingURL=test.js.map