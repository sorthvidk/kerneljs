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
 * @param {Object} data A json object containing text strings to be added to markup with data attributes data-text=key
 * @param {String} mount if a mount is provided the view automatically mount to the given point
 */
class View {

	constructor({el = null, content = null, events = null, displayName = 'View', data = null, mount = null }) { //class constructor
		this.instanceId = Utils.getCuid();
		this.initUpdate = false;
		this.events = events;
		this.data = data;
		this.mountPoint = mount;

		if ( typeof el == "string" ) {
			this.rootEl = Emmet(el);
			this.el = this.rootEl.childNodes[0];
		}
		else if (el instanceof NodeList && el.length === 0 ) {
			throw new Error("View el is empty NodeList!");
		}
		else {
			this.el = DOM.elementProxy(el);
		}
		this.eventListeners = [];
		this.delegateEvents();
		this.update();
		Log.fn(displayName+' ' + this.instanceId + ' created');
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
				elements = [this.el];
			}


			[...elements].map( (element) => {
				Log.db("delegateEvents element",element);
				this.eventListeners.push({element:element, eventName:eventName, eventHandler:eventHandler});
				Utils.on(element, eventName, eventHandler.bind(this));
			});
		}
	}

	/**
	* A "public" function, updates all data-text data attributes
	*/
	update() {
		if(!this.data) return;
			Object.keys(this.data).forEach((item)=>{
			let el = DOM.find(this.el,'[data-text='+ item +']')[0];
			if(el && this.data[item]) {
				let textNode = null;
				el.childNodes.forEach((childNode) => {
					if(childNode.nodeType===3) {
						textNode = { exist: childNode.nodeType===3, el: childNode };
					}
				});
				if(!textNode) {
					el.insertBefore(document.createTextNode(this.data[item]), el.firstChild);
				} else if(textNode && textNode.exist){
					textNode.el.textContent = this.data[item];
				} else {
					throw new Error("Can't update view! somethings wrong in selecting textNodes!")
				}
			}
		});
		View.emitter.trigger('view:update', this);
	}

	/**
	* A "private" function, which removes all event listeners
	*/
	undelegateEvents() {
		this.eventListeners.forEach((listener)=>{
			Utils.off(listener.element, listener.eventName, listener.eventHandler.bind(this));
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
