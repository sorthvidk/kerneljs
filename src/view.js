import Log from './log';
import Utils from './utils';
import DOM from './dom';
import Emmet from './emmet';

/**
 * View is the standard sorthvid content container class. All parameters are wrapped in ES6 object syntax.
 * @param {Element} el The associated DOMelement OR a string shorthand for generating an element
 * @param {String} content Optional string HTML content to be injected into a generated element
 * @param {Object} events A json object containing the events for the instance
 * @param {String} displayName A huma readable name for the View
 */
class View {
	constructor({el = null, content = null, events = null, displayName = 'View', templ = null, data = null, mount = null }) { //class constructor

		this.instanceId = Utils.getCuid();
		this.events = events;
		this.data = data;
		this.mountPoint = mount;

		if ( typeof el == "string" ) {
			this.el = Emmet(el);
		}
		else {
			this.el = el;
		}
		this.eventListeners = [];
		this.delegateEvents();
		this.update();
		Log.fn(displayName+' ' + this.instanceId + ' created');
		if(this.mountPoint) {
			this.render();
		}
	}

	delegateEvents() {
		if ( this.assignedListeners.length > 0 ) throw new Error("Event listeners have already been delegated!");
		
		for (let prop in this.events) {
			let eventSplit = prop.split(' ');
			let eventName = eventSplit[0];

			// is the target specified with a selector, or is this.el implied?
			let target = eventSplit.length > 1 ? eventSplit[1] : this.el;

			let eventHandler = this[this.events[prop]];

			// is the target already an element or a selector?
			let elements;
			if ( typeof target == "string" ){
				elements = DOM.find(this.el, target);
			}
			else if ( target.length && target != this.el ) {
				elements = DOM.find(this.el, target[0]);
			}
			else {
				//wrapping this.el in array
				elements = [target];
			}
			elements.forEach((element)=>{
				this.assignedListeners.push({element:element, eventName:eventName, eventHandler:eventHandler});
				Utils.on(element, eventName, eventHandler.bind(this));
			});
		}
	}

	/*
	* A "public" function, update all data-tmpl data attributes
	*/
	update() {
		if(!this.data) return;
		Object.keys(this.data).forEach((item)=>{
			let el = DOM.find(this.el, '[data-text='+ item +']')[0];
			if(el && this.data[item]) {
				el.insertBefore(document.createTextNode(this.data[item]), el.firstChild);
			}
		});
	}


	/*
	* A "private" function, which removes all event listeners
	*/
	static undelegateEvents() {
		this.assignedListeners.forEach((listener)=>{
			Utils.off(listener.element, listener.eventName, listener.eventHandler.bind(this));
		});
		return true;
	}

	/*
	* A "public" function, which removes the view's el from the DOM
	* Sets the View's visible property to false
	*/
	remove() {
		if ( this.undelegateEvents() ) {
			this.visible = false;
			DOM.remove(this.el);
		}
	}

	/**
	* A "public" function, which re-inserts the view's el into the DOM
	* Sets the View's visible property to true
	**/
	render() {
		if ( !this.visible && this.mountPoint) {
			DOM.append( DOM.find(this.mountPoint), this.el);
			this.visible = true;
		}
		return this;
	}

	append(elem) {
		DOM.append(this.el, elem);
	}

	/**
	 * Wrappers for DOM manipulation methods always using this.el as the origin
	 **/
  	find(selector) {
  		var result = DOM.find(this.el, selector);
  		return result;
	}

	addClass(className) {
		DOM.addClass(this.el, className);
		return this;
	}

	hasClass(className) {
		return DOM.hasClass(this.el, className);
	}

	removeClass(className) {
		DOM.removeClass(this.el, className);
		return this;
	}

	toggleClass(className, test) {
		DOM.toggleClass(this.el, className, test);
	}

	closest(selector) {
		return DOM.closest(this.el, selector);
	}
}



export default View;
