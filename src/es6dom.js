import View from './es6view';
import Utils from './es6utils';


const DOM = {

	elementProxy:function(el) {
		if ( el instanceof HTMLElement || !el.length ) {
			return el;
		}
		else if ( el instanceof NodeList ) {
			return el[0];
		}
		else {
			throw new Error("Element neither HTMLElement nor NodeList. el: "+el);
		}
	},

	listProxy:function(el) {
		if ( el instanceof NodeList ) {
			return el;
		}
		else if ( el instanceof HTMLElement || !el.length ) {
			return [el];
		}
		else {
			throw new Error("Element neither HTMLElement nor NodeList. el: "+el);
		}
	},
	/*
	 * DOM methods - common jQuery functions with vanilla JS
	 */

	find: function(arg0, arg1) {
		var result;
		if ( typeof arg1 == "undefined" ) {
			result = document.querySelectorAll(arg0);
		}
		else {
			result = arg0.querySelectorAll(arg1);
		}
		return result;
	},

	closest: function(el, query) {

		var searchOrigin = el,
			result,
			compareFunction,
			strippedQuery;

		if (searchOrigin instanceof View) searchOrigin = searchOrigin.el;
		else searchOrigin = this.elementProxy(searchOrigin);

		if ( query.indexOf('.') > -1 ) {
			strippedQuery = query.split('.')[1];
			compareFunction = function(_el){return typeof _el.className == "string" ? _el.className.indexOf(strippedQuery) > -1 : null;};
		}
		else if ( query.indexOf('#') > -1 ) {
			strippedQuery = query.split('#')[1];
			compareFunction = function(_el) { return _el.id ? _el.id === strippedQuery : null; };
		}
		else {
			strippedQuery = query;
			compareFunction = function(_el) { return _el.tagName ? _el.tagName.toLowerCase() === strippedQuery : null; };
		}

		result = closestRecursion(searchOrigin, compareFunction);
		
		function closestRecursion(el, fn) {
			if ( !(el instanceof Element)) return false;
			return el && (fn(el) ? el : closestRecursion(el.parentNode, fn));
		}

		return result;
	},


	append:function(el,child){
		var element = this.elementProxy(el);
		element.appendChild(child);
	},

	remove:function(el) {
		var element = this.elementProxy(el);
		var parent = element.parentNode;
		try { parent.removeChild(element); }
		catch (e){  }
	},

	hasClass: function(el, className) {
		var element = this.elementProxy(el);
		if (className.length === 0) return false;
		if (element.classList)
			return element.classList.contains(className);
		else
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
	},

	addClass: function(el, className) {
		var elements = this.listProxy(el);
		Utils.each(elements,element=>{
			if (className.length === 0) return false;
			if (element.classList)
				element.classList.add(className);
			else
				element.className += ' ' + className;
		});
	},

	removeClass: function(el, className) {
		var elements = this.listProxy(el);
		Utils.each(elements, element=>{
			if (className.length === 0) return false;
			if (element.classList)
				return element.classList.remove(className);
			else
				return element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		});
	},

	toggleClass: function(el, className, test) {
		var elements = this.listProxy(el);
		Utils.each(elements, element=>{
			if (className.length === 0) return false;
			if (typeof test != "undefined") {
				if ( test ) this.addClass(element, className);
				else this.removeClass(element, className);
			}
			else {
				if (element.classList) {
					element.classList.toggle(className);
				} else {
					var classes = element.className.split(' ');
					var existingIndex = classes.indexOf(className);

					if (existingIndex >= 0)
						classes.splice(existingIndex, 1);
					else
						classes.push(className);

					element.className = classes.join(' ');
				}
			}
		});
	}
}
export default DOM;
