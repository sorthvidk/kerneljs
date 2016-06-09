var Generic = require('../core/generic'),
	Utils = require('../core/utils'),
	Log = require('../core/log');


/**
 * View is the standard sorthvid content container class
 * @param el The associated DOMelement
 * @param settings The instance property values parsed into the constructor
 * @param events A json object containing the events for the instance
 */

var View = Generic.extend({
  	
  	viewName:'View',
  	className:'',
  	el:null,
  	settings:null,
  	events:null,
  	parent:null,
  	visible:true,
  	instanceId:true,

	/**
	 * @param settings The View parameters. Must contain an "el" DOMelement or a "selector" string, so a DOMelement can be associated
	 * @constructor
	 */
	constructor: function(settings) {
		this.instanceId = Utils.getCuid();
		this.settings = settings;
		if ( settings.el ) {
			this.el = settings.el;
		}
		else if ( settings.selector ) {
			this.el = Utils.find(settings.selector);
		}
		else {
			var selector = this.className.length > 0 ? 'div'+'.'+this.className : 'div' ;
			this.el = Utils.createEl(selector);
			if ( settings.content ) {
				this.el.innerHTML = settings.content;
			}
		}


		this.initialize();

		this.delegateEvents();
	},

	initialize: function() {
	},

	/**
	 * A "private" function, which attaches event listeners to triggers specified in "events" field
	 **/
	delegateEvents:function() {
		//Log.fn(this.viewName+" | delegateEvents")

		for (var prop in this.events) {
			var eventSplit = prop.split(' ');
			var eventName = eventSplit[0];
			
			var eventSelector = eventSplit.length > 1 ? prop.split(' ').slice(1) : this.el;
			
			var eventHandler = this[this.events[prop]];

			this.each(eventSelector,function(elem){
				this.on(elem, eventName, eventHandler.bind(this));
			}.bind(this));
		}
	},

	/**
	 * Attaches an event listener
	 * @param {Element} elem - the associated DOMelement
	 * @param {String} eventName - the event string
	 * @param {Function} eventHandler - the handler function
	 */
	on: function(elem, eventName, eventHandler) {
		Utils.on(elem, eventName, eventHandler);
	},

	/**
	 * Removes an event listener
	 * @param {Element} elem - the associated DOMelement
	 * @param {String} eventName - the event string
	 * @param {Function} eventHandler - the handler function
	 */
	off: function(elem, eventName, eventHandler) {
		Utils.off(elem, eventName, eventHandler);
	},


	/**
	 * A "public" function, which removes the view's el from the DOM
	 * Sets the View's visible property to false
	 **/
	remove: function() {
		this.visible = false;
		Utils.remove(this.el);
	},

	/**
	 * A "public" function, which re-inserts the view's el into the DOM
	 * Sets the View's visible property to true
	 **/
	render: function() {
		if ( !this.visible ) {
			this.parent.appendChild(el);
			this.visible = true;
		}
		return this;
	},

	append:function(elem) {
		Utils.append(this.el, elem);		
	},

	/**
	 * Wrappers for Utils DOM manipulation methods always using this.el as the origin
	 **/
  	find: function(selector){
  		var result = Utils.find(this.el, selector);
  		if ( result instanceof NodeList && result.length == 1) {
			return result[0];
		}
		else {
			return result;
		}
	},
	closestByClass: function(className){
		return Utils.closestByClass(this.el, className);
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

	/**
	 * A vanilla implementation of each
	 **/
	each:function(selector, fn) {
		var elements = selector instanceof NodeList || selector instanceof Element ? selector : Utils.find(this.el, selector);
		
		if ( elements.length ){
			for (var i = 0; i < elements.length; i++) {
				fn(elements[i], i);
			}
		}
		else {
			fn(elements, i);
		}
	}
});

module.exports = View;