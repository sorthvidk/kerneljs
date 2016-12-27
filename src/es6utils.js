import DOM from './es6dom';

/**
 * Utils is a collection of sorthvid auxilliary methods
 */
const Utils = {
	
	/**
	 * Creates all Views for a chosen Class
	 * @param {String} selector - selector for which elements to associate with Views
	 * @param {Class} viewClass - a reference to the class from which Views will be instantiated
	 */
	viewFactory: function(selector, viewClass) {
		var elements = DOM.find(selector);
		var views = [];
		[...elements].map((el) => {
			views.push( new viewClass( {el:el} ) );
		});
		return views;
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
						elem.appendChild(this.buildEl(sel[i]));
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
		var cl = selector.splice(1);
		console.log("cl",cl)
		console.log("el",el)
		if (cl.length > 0) {
			for (var i = 0; i < cl.length; i++) {
				DOM.addClass(el, cl[i]);
			}
		}
		return el;
	},

	/**
	 * Vanilla way of sniffing element height
	 * @param {Element} elem - the DOMelement in question
	 */
	getHeight: function(el) {
		var el_style      = window.getComputedStyle(el),
			el_display    = el_style.display,
			el_position   = el_style.position,
			el_visibility = el_style.visibility,
			el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

			wanted_height = 0;


		// if its not hidden we just return normal height
		if(el_display !== 'none' && el_max_height !== '0') {
			return el.offsetHeight;
		}

		// the element is hidden so:
		// making the el block so we can meassure its height but still be hidden
		el.style.position   = 'absolute';
		el.style.visibility = 'hidden';
		el.style.display    = 'block';

		wanted_height     = el.offsetHeight;

		// reverting to the original values
		el.style.display    = el_display;
		el.style.position   = el_position;
		el.style.visibility = el_visibility;

		return wanted_height;
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
};

export default Utils;
