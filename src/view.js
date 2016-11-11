var Generic = require('../src/generic'),
	Utils = require('../src/utils'),
	Log = require('../src/log');


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
		this.settings = settings || {};
		if ( this.settings.el ) {
			this.el = settings.el;
		}
		else if ( this.settings.selector ) {
			this.el = Utils.find(settings.selector);
		}
		else {
			var selector = this.className.length > 0 ? 'div'+'.'+this.className : 'div' ;
			this.el = Utils.createEl(selector);
			if ( this.settings.content ) {
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

			// is the target specified with a selector, or is this.el implied?
			var target = eventSplit.length > 1 ? prop.split(' ').slice(1) : this.el;

			var eventHandler = this[this.events[prop]];

			// is the target already an element or a selector?
			var elements;
			if ( typeof target == "string" ){
				elements = Utils.find(this.el, target);
			}
			else if ( target.length ) {
				elements = Utils.find(this.el, target[0]);
			}
			else {
				elements = [target];
			}

			var elementCount = elements.length;
			for ( var i=0; i<elementCount; i++) {
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
	}
});

module.exports = View;
