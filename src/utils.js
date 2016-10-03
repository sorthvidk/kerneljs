var Generic = require('../src/generic'),
	Log = require('../src/log');



/**
 * Utils is a collection of sorthvid auxilliary methods
 */
var Utils = Generic.extend({

	/*
	 * DOM methods - common jQuery functions with vanilla JS
	 */

	find: function(arg0, arg1){
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
	},


	/**
	 * A vanilla implementation of each
	 **/
	each:function(target, fn) {
		var elements;
		
		if ( typeof target == "string" ) {
			elements = this.find(target);
		}
		else if ( target.length || target instanceof NodeList ) {
			elements = target;
		}
		else if ( target instanceof Element ) {			
			elements = [target];
		}
		if ( elements.length === 0 || !(elements instanceof NodeList) ) {
			return false;
		}

		for (var i = 0; i < elements.length; i++) {
			fn(elements[i], i);
		}
	},

	/**
	 * Attaches an event listener
	 * @param {Element} elem - the associated DOMelement
	 * @param {String} eventName - the event string
	 * @param {Function} eventHandler - the handler function
	 */
	on: function(elem, eventName, eventHandler) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, eventHandler);
		} else {
			elem.attachEvent('on' + eventName, function(){
			  eventHandler.call(elem);
			});
		}
	},

	/**
	 * Removes an event listener
	 * @param {Element} elem - the associated DOMelement
	 * @param {String} eventName - the event string
	 * @param {Function} eventHandler - the handler function
	 */
	off: function(elem, eventName, eventHandler) {
		if (elem.removeEventListener)
			elem.removeEventListener(eventName, eventHandler);
		else
			elem.detachEvent('on' + eventName, eventHandler);		
	},


	/**
	 * Checks if the element is within the viewport
	 * @param {Element} el - the DOMelement in question
	 */
	isElementInViewport: function(el) {
		if (!el) {
			return
		}
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		);
	},

	/*
	 * single element: createEl("div.class")
	 * multiple elements: createEl(["div.class", "div.class"])
	 */
	createEl: function(sel) {
		var elem;
		if (typeof sel === "object") {
			for (var i = 0; i < sel.length; i++) {
				if (elem) {
					if (typeof sel[i] === "string") {
						elem.appendChild(build(sel[i]));
					} else if (typeof sel[i] === "object") {
						elem.appendChild(sel[i]);
					}
				} else {
					elem = this.buildEl(sel[i]);
				}
			}
		} else if (typeof sel === "object") {

		} else {
			elem = this.buildEl(sel);
		}
		
		return elem;
	},

	buildEl: function(s) {
		var selector = s.split(".");
		var el = document.createElement(selector[0]);
		var cl = selector[1] ? selector[1].split(" ") : 0;
		if (cl.length > 0) {
			for (var i = 0; i < cl.length; i++) {
				this.addClass(el, cl[i]);
			}
		}
		return el;
	},

	/**
	 * Vanilla way of sniffing accordion content height
	 * @param {Element} elem - the DOMelement in question
	 * @param {String} className - the class to add, when the accordion is ready
	 */
	getAccordionHeight: function(elem, className) {
		var height;
		this.removeClass(elem, className);
		this.addClass(elem, "is--calculation-height");
		height = elem.getClientRects() ? elem.getClientRects()[0].height : elem.offsetHeight;
		this.removeClass(elem, "is--calculation-height");
		this.addClass(elem, className);
		return height;
	},


	/**
	 * Get url parameter
	 * @param {String} name - the variable name
	 * @param {String} url - a way to override the default root of the url parameter
	 */	
	getUrlParms: function(name, url) {
		var url = url || window.location.search;
		var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(url);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},

	/**
	 * Vanilla site scroll animation
	 * @param {Element} elem - the DOMelement to scroll to
	 * @param {Number} scrollDuration - duration of the animation
	 */
	scrollTo: function(elem, scrollDuration) {
		var offset = elem.getClientRects()[0],
			scrollStep = offset.top > window.scrollY ? -window.scrollY / (scrollDuration / 15) : window.scrollY / (scrollDuration / 15),
			scrollInterval = setInterval(function() {
				if (elem.getClientRects()[0].top > window.innerHeight / 2) {
					window.scrollBy(0, scrollStep);
				} else {
					clearInterval(scrollInterval);
				}
			}, 15);
	},

	cumulativeOffset: function(element) {
		if (element instanceof jQuery) {
			element = element[0];
		}
		var top = 0,
			left = 0;
		do {
			top += element.offsetTop || 0;
			left += element.offsetLeft || 0;
			element = element.offsetParent;
		} while (element);

		return {
			top: top,
			left: left
		};
	},

	cookie: {
		get: function(cookieName) {
			if (document.cookie.length <= 0) {
				return null;
			}
			var start = document.cookie.indexOf(cookieName + "=");
			if (start >= 0) {
				start = start + cookieName.length + 1;
				var end = document.cookie.indexOf(";", start);
				if (end < 0) {
					end = document.cookie.length;
				}
				return unescape(document.cookie.substring(start, end));
			}
		},
		set: function(cookieName, expireDays, cookieValue, domain, secure) {
			var expireDate = new Date();
			cookieValue = cookieValue || 1;
			domain = domain || settings.domain;
			expireDate.setDate(expireDate.getDate() + expireDays);
			var cookieValue = escape(cookieValue) + ((expireDays == null) ? "" : "; path=/; expires=" + expireDate.toUTCString());
			document.cookie = cookieName + "=" + cookieValue;
		},
		setMinutes: function(cookieName, expireMinutes, cookieValue, domain, secure) {
			var expireDate = new Date();
			cookieValue = cookieValue || 1;
			domain = domain || settings.domain;
			expireDate.setTime(expireDate.getTime()+(30*1000*2*expireMinutes));
			//expireDate.setDate(expireDate.getDate() + expireDays);
			var cookieValue = escape(cookieValue) + ((expireMinutes == null) ? "" : "; path=/; expires=" + expireDate.toUTCString());
			document.cookie = cookieName + "=" + cookieValue;
		},
		remove: function(cookieName, path, domain, secure) {
			document.cookie = escape(cookieName) + "=null; EXPIRES=" + new Date(0).toGMTString() + (path ? "; PATH=" + path : "") + (domain ? "; DOMAIN=" + domain : "") + (secure ? "; SECURE" : "");
		}
	},

	keyCodeMap: {
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		esc: 27,
		enter: 13,
		space: 32,
		cmd: 91,
		alt: 18,
		ctrl: 17,
		shift: 16,
		right_cmd: 93,
		bckspc: 8
	},

	getCuid: function(){
		return Math.random().toString().substring(2,7);
	},

	screenSize: function(size){
		var sizes = {
			"xsScreen": 567,
			"sScreen": 768,
			"mScreen": 1024,
			"lScreen": 1152,
			"xlScreen": 1280,
			"xxlScreen": 1440,
			"xxxlScreen": 1680
		}
		return sizes[size];
	}
});

module.exports = new Utils();