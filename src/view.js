import Log from './log';
import Utils from './utils';
import DOM from './dom';
import Emmet from './emmet';
import { EventEmitter } from './event';

/**
 * $0 is the standard sorthvid content container class. All parameters are wrapped in ES6 object syntax.
 * @param {Element} el The associated DOMelement OR a string shorthand for generating an element
 * @param {String} content Optional string HTML content to be injected into a generated element
 * @param {Object} events A json object containing the events for the instance
 * @param {String} displayName A huma readable name for the View
 * @param {Object} state A json object containing the state of the view. Text strings to be added to markup with data attributes data-text=key will be automatically updated when calling setState
 * @param {String} mount if a mount is provided the view automatically mount to the given point
 * @param {Function} setState function is copying new states into the local state Object.
 */
class View {

	constructor({el = null, content = null, events = null, displayName = 'View', state = null, mount = null }) { //class constructor
		this.instanceId = Utils.getCuid();
		this.initUpdate = false;
		this.events = events;
		this.state = state;
		this.mountPoint = mount;
		this.textNodes = {};

		if ( typeof el == "string" ) {
			this.rootEl = Emmet(el);
			this.el = this.rootEl.childNodes[0];
		}
		else if (el instanceof NodeList && el.length === 0 ) {
			throw new Error(this.displayName + " el is empty NodeList!");
		}
		else {
			this.el = DOM.elementProxy(el);
		}
		this.eventListeners = [];
		this.delegateEvents();
		this.initStateRefereces();
		if(this.mountPoint) {
			this.render();
		}
	}

	/**
	* delegating HTML events
	*/
	delegateEvents() {
		if ( this.eventListeners.length > 0 ) throw new Error("Event listeners have already been delegated!");
		for (let prop in this.events) {
			let eventSplit = prop.split(' ');
			let eventName = eventSplit[0];

			// is the target specified with a selector, or is this.el implied?
			let target = eventSplit.length > 1 ? eventSplit[1] : this.el;

			let eventHandler = this[this.events[prop]].bind(this);

			// is the target already an element or a selector?
			let elements;
			if ( typeof target == "string" ){
				elements = DOM.find(this.el, target);
			}
			else if ( target.length && target != this.el ) {
				elements = DOM.find(this.el, target[0]);
			}
			else {
				elements = [this.el];
			}


			[...elements].map( (element) => {
				this.eventListeners.push({element:element, eventName:eventName, eventHandler:eventHandler});
				Utils.on(element, eventName, eventHandler);
			});
		}
	}

	/**
	* A "private" function, creates references to textnodes in the view so they can be updated later on TODO: remove data attributes and handle wired behavious as single tags (input, br and hr).
	*/
	initStateRefereces() {
		if(!this.state) return;
		Object.keys(this.state).forEach((item)=>{
			let el = DOM.find(this.el.parentNode,'[data-text='+ item +']')[0];
			if(el && this.state[item]) {
				this.textNodes[item] = document.createTextNode(this.state[item]);
				el.insertBefore(this.textNodes[item], el.firstChild);
			}
		});
	}

	/**
	* A "private" function that updates all textNode references.
	*/

	updateStateReferecenses(){
		if(!this.state) return;
		Object.keys(this.state).forEach((item)=>{
			if(this.textNodes[item] && this.textNodes[item].textContent != this.state[item]) {
				this.textNodes[item].textContent = this.state[item];
			}
		});
		View.emitter.trigger('view:update', this.state);
	}

	/**
	* A "public" function that setState the view TODO: what if a tag doesn't exist? should probabaly run through initTextNodes and handle state as emmutables to ensure racconditions doesn't break anything.
	* @param {Object} data new data to update the view
	*/
	setState( state=null ){
		if(!state) return;
		this.state = Object.assign(this.state, state);
		//update textNodes
		this.updateStateReferecenses();
	}

	/**
	* A "private" function, which removes all event listeners
	*/
	undelegateEvents() {
		this.eventListeners.forEach((listener)=>{
			Utils.off(listener.element, listener.eventName, listener.eventHandler);
		});
		return true;
	}

	/**
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
	* @param {String} mountPoint string containing a valid class or id selector
	*/
	render(mountPoint = null) {
		if ( mountPoint ) this.mountPoint = mountPoint;
		if ( !this.visible ) {
			if ( this.mountPoint ) {
				DOM.append( DOM.find(this.mountPoint), this.el);
				this.visible = true;
			} else throw new Error("Can't render! No mountpoint found!")
		}
		return this;
	}
	/**
	* A "public" function, which append a given elem/docFragtion into this.el
	*/
	append(elem) {
		DOM.append(this.el, elem);
	}

	/**
	* Wrappers for DOM manipulation methods always using this.el as the origin
	*/
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

	static get emitter() {
		return EventEmitter;
	}

}



export default View;
