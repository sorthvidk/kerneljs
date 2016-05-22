var Generic = require('./generic'),
	Utils = require('./utils'),
	Log = require('./log');

var View = Generic.extend({

  	el:null,
  	settings:null,
  	events:null,

	constructor: function(settings) {

		this.settings = settings || {};
		if ( this.settings.el ) {
			this.el = this.settings.el;
		}
		else if( this.settings.selector ) this.el = Utils.find(this.settings.selector);
		else this.el = document.createElement("div");

		this.initialize();

		this.delegateEvents();
	},

	initialize: function() {
	},

	delegateEvents:function() {

		for (var prop in this.events) {
			var eventName = prop.split(' ')[0];
			var eventSelector = prop.split(' ').slice(1);
			var eventHandler = this[this.events[prop]];
			this.each(eventSelector,function(elem){
				this.on(elem, eventName,eventHandler.bind(this));
			}.bind(this));
		}
	},

	// DOM methods

  	find: function(selector){
  		return Utils.find(this.el, selector);
	},

	addClass: function(className) {
		Utils.addClass(this.el, className);
	},

	hasClass: function(className) {
		return Utils.hasClass(this.el, className);
	},

	removeClass: function(className) {
		Utils.removeClass(this.el, className);
	},

	toggleClass: function(className, test) {
		Utils.toggleClass(this.el, className, test);
	},

	on: function(elem, eventName, eventHandler) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, eventHandler);
		} else {
			elem.attachEvent('on' + eventName, function(){
			  handler.call(elem);
			});
		}
	},

	off: function(elem, eventName, eventHandler) {
		if (elem.removeEventListener)
			elem.removeEventListener(eventName, eventHandler);
		else
			elem.detachEvent('on' + eventName, eventHandler);
	},

	each:function(selector, fn) {
		var elements = Utils.find(this.el, selector);
		for (var i = 0; i < elements.length; i++) {
			fn(elements[i], i);
		}
	}
});

module.exports = View;
