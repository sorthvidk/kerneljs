//https://www.npmjs.com/package/es6-event-emitter
import View from './view';
import Emitter from 'es6-event-emitter';

class _Events extends Emitter {
	constructor() {
		super();

	}
	/**
	 * Attaches an event listener
	 * @param {Element} elem - the associated DOMelement
	 * @param {String} eventName - the event string
	 * @param {Function} eventHandler - the handler function
	*/
	addEvent(el, eventName, eventHandler) {
		var elem = el instanceof View ? el.el : el;
		if (elem.addEventListener) {
			elem.addEventListener(eventName, eventHandler, false);
		} else {
			elem.attachEvent('on' + eventName, function(){
			  eventHandler.call(elem);
			});
		}
	}
	/**
	 * Removes an event listener
	 * @param {Element} elem - the associated DOMelement
	 * @param {String} eventName - the event string
	 * @param {Function} eventHandler - the handler function
	 */
	removeEvent(el, eventName, eventHandler) {
		var elem = el instanceof View ? el.el : el;
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, eventHandler, false);
		} else {
			elem.detachEvent('on' + eventName, eventHandler);
		}
	}
	/**
	 * trigger custom events
	 * @param {Element} el - the DOMelement in question
	 * @param {String} type - type the custom event name
	 * @param {Object} details - details object
	 */
	triggerEvent(el, type, detail) {
		var e;
		if(window.CustomEvent) {
			e = new CustomEvent(type, { bubbles: true, cancelable: true, detail: detail });
		} else {
			e = document.createEvent('Event');
			e.initEvent(_name, true, true, { detail: detail });
			e.detail = detail;
		}
		el.dispatchEvent(event);
	}
}

export let Events = new _Events();

