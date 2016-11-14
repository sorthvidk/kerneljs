import Log from './log';
import Utils from './es6utils';
import DOM from './es6dom';

/**
 * View is the standard sorthvid content container class
 * @param el The associated DOMelement
 * @param settings The instance property values parsed into the constructor
 * @param events A json object containing the events for the instance
 */

//var props = { className = '', displayName = 'New View instance', el = null, events = null };





class View {
	constructor({
		className = '',
		el = null,
		content = null,
		events = null }) { //class constructor

		this.instanceId = Utils.getCuid();
		this.events = events;


		if ( el && typeof el == 'string' ) {
			this.el = DOM.find(el)[0];
		}
		else if ( typeof el == 'object' ) {
			this.el = el;

		}
		else {
			let select = className.length > 0 ? 'div'+'.'+className : 'div' ;
			this.el = Utils.createEl(select);
			if ( content ) {
				this.el.innerHTML = content;
			}
		}
		//Object.assign(this.el, DOM);

		this.delegateEvents();
	}

		delegateEvents() {

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
				elements = [target];
			}

			elements.forEach((a)=>{
				this.on(a, eventName, eventHandler.bind(this));
			});
		}
	}

	/*
	* Attaches an event listener
	* @param {Element} elem - the associated DOMelement
	* @param {String} eventName - the event string
	* @param {Function} eventHandler - the handler function
	*/
	on(elem, eventName, eventHandler) {
		Utils.on(elem, eventName, eventHandler);
	}

	/*
	* Removes an event listener
	* @param {Element} elem - the associated DOMelement
	* @param {String} eventName - the event string
	* @param {Function} eventHandler - the handler function
	*/
	off(elem, eventName, eventHandler) {
		Utils.off(elem, eventName, eventHandler);
	}

	/*
	* A "public" function, which removes the view's el from the DOM
	* Sets the View's visible property to false
	*/
	remove() {
		this.visible = false;
		DOM.remove(this.el);
	}

	/**
	* A "public" function, which re-inserts the view's el into the DOM
	* Sets the View's visible property to true
	**/
	render() {
		if ( !this.visible ) {
			this.parent.appendChild(this.el);
			this.visible = true;
		}
		return this;
	}
	append(elem) {
		DOM.append(this.el, elem);
	}

	/**
	 * Wrappers for Utils DOM manipulation methods always using this.el as the origin
	 **/
  	find(selector) {
  		var result = DOM.find(this.el, selector);
  		if ( result instanceof NodeList && result.length == 1) {
			return result[0];
		}
		else {
			return result;
		}
	}

	closestByClass(className) {
		return DOM.closestByClass(this.el, className);
	}
	addClass(className) {
		DOM.addClass(this.el, className);
	}

	hasClass(className) {
		return DOM.hasClass(this.el, className);
	}

	removeClass(className) {
		DOM.removeClass(this.el, className);
	}

	toggleClass(className, test) {
		DOM.toggleClass(this.el, className, test);
	}
}

export default View;
