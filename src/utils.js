import Log from './log';
import DOM from './dom';
import View from './view';


Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
	return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
  var tc = (t/=d)*t*t;
  return b+c*(tc);
};

Math.inOutQuintic = function(t, b, c, d) {
  var ts = (t/=d)*t,
  tc = ts*t;
  return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};

Math.easeOutExpo = function (t, b, c, d) {
	return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
};


/**
 * Utils is a collection of sorthvid auxilliary methods
 */
const Utils = {

	/**
	 * Creates all Views for a chosen Class
	 * @param {String} selector - selector for which elements to associate with Views
	 * @param {Class} viewClass - a reference to the class from which Views will be instantiated
	 */
	viewFactory: function(selector, viewClass, settings) {
		var elements = DOM.find(selector);
		var views = [];
		[...elements].map((el) => {
			let defaults = {el:el};
			Object.assign(defaults,settings);
			Log.db("defaults",defaults)
			views.push( new viewClass( defaults ) );
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
	on: function(el, eventName, eventHandler) {
		var elem = el instanceof View ? el.el : el;
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
	off: function(el, eventName, eventHandler) {
		var elem = el instanceof View ? el.el : el;
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
		var elem = el instanceof View ? el.el : el;
		if (!elem) {
			return
		}
		var rect = elem.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		);
	},

	/**
	 * Vanilla way of sniffing element height
	 * @param {Element} elem - the DOMelement in question
	 */
	getHeight: function(el) {
		var elem = el instanceof View ? el.el : el;

		var style = window.getComputedStyle(elem),
			savedProps = {
				display: style.display,
				position: style.position,
				visibility: style.visibility,
				maxHeight: style.maxHeight.replace('px', '').replace('%', '')
			},
			wantedHeight = 0;


		// if its not hidden we just return normal height
		if(savedProps.display !== 'none' && savedProps.maxHeight !== '0') {
			return elem.offsetHeight;
		}

		// the element is hidden so:
		// making the el block so we can meassure its height but still be hidden
		elem.style.position   = 'absolute';
		elem.style.visibility = 'hidden';
		elem.style.display    = 'block';

		wantedHeight = elem.offsetHeight;

		// reverting to the original values
		elem.style.display    = savedProps.display;
		elem.style.position   = savedProps.position;
		elem.style.visibility = savedProps.visibility;

		return wantedHeight;
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
	scrollTo: function(el, scrollDuration) {
		var elem = el instanceof View ? el.el : el;
		// because it's so fucking difficult to detect the scrolling element, just move them all
		function move(amount) {
			document.documentElement.scrollTop = amount;
			document.body.parentNode.scrollTop = amount;
			document.body.scrollTop = amount;
		}
		function position() {
			return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
		}

		var requestAnimFrame = (function(){
			return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
		})();

		var start = position(),
			change = elem.getClientRects()[0].top - start,
			currentTime = 0,
			increment = 20,
			duration = (typeof(scrollDuration) === 'undefined') ? 500 : scrollDuration;

		var animateScroll = function() {
			// increment the time
			currentTime += increment;
			// find the value with the quadratic in-out easing function
			var val = Math.easeOutExpo(currentTime, start, change, duration);
			// move the document.body
			move(val);
			// do the animation unless its over
			//Log.db(currentTime,duration)
			if (currentTime < duration) {
				requestAnimFrame(animateScroll);
			}
		}.bind(this);

		animateScroll();
	},

	cumulativeOffset: function(el) {
		var elem = el instanceof View ? el.el : el;

		var top = 0,
			left = 0;

		do {
			top += elem.offsetTop || 0;
			left += elem.offsetLeft || 0;
			elem = elem.offsetParent;
		} while (elem);

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

		set: function({cookieName = null, cookieValue = null, expireDays = 30}) {
			var expireDate = new Date();
			cookieValue = cookieValue || 1;
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
	},

};

export default Utils;
