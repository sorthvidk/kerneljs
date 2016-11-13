const DOM = {

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
	closestByClass: function(el, className) {
		return this.closest(el, function(_el){ return typeof _el.className == "string" ? _el.className.indexOf(className) > -1 : null;
		});
	},
	closestByTag: function(el, tagName) {
		return this.closest(el, function(_el){ return _el.tagName ? _el.tagName === tagName : null; });
	},
	closestByID: function(el, id) {
		return this.closest(el, function(_el){ return _el.id ? _el.id === id : null; });
	},
	closest: function(el, fn) {
		if ( !(el instanceof Element)) return false;
		return el && (fn(el) ? el : this.closest(el.parentNode, fn));
	},
	append:function(el,child){
		var elem = el;

		if ( typeof el == "string") {
			elem = this.find(el);
		}
		if (elem.length) {
			elem = elem[0];
		}
		elem.appendChild(child);
	},

	remove:function(el) {
		var parent = el.parentNode;
		try {parent.removeChild(el);}
		catch (e){  }
	},

	hasClass: function(el, className) {
		if (className.length === 0) return false;
		if (el.classList)
			return el.classList.contains(className);
		else
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	},

	addClass: function(el, className) {
		if (className.length === 0) return false;
		if (el.classList)
			el.classList.add(className);
		else
			el.className += ' ' + className;
	},

	removeClass: function(el, className) {
		if (className.length === 0) return false;
		if (el.classList)
			return el.classList.remove(className);
		else
			return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	},

	toggleClass: function(el, className, test) {
		if (className.length === 0) return false;
		if (typeof test != "undefined") {
			if ( test ) this.addClass(el, className);
			else this.removeClass(el, className);
		}
		else {
			if (el.classList) {
				el.classList.toggle(className);
			} else {
				var classes = el.className.split(' ');
				var existingIndex = classes.indexOf(className);

				if (existingIndex >= 0)
					classes.splice(existingIndex, 1);
				else
					classes.push(className);

				el.className = classes.join(' ');
			}
		}
	}
}
export default DOM;
