var expect = require('chai').expect;
var assert = require('chai').assert;
var kernel = require ('../dist/kernel');

//var jsdom = require('mocha-jsdom');
require('jsdom-global')();
//var global = require("global");
//var document = require("global/document");
//var window = require("global/window");

var el = document.createElement('div');
			el.classList.add("box");

var Utils = kernel.Utils;
var Dom = kernel.DOM;
var Events = kernel.Events;
//Utils tests
describe('KernelJS Utils', function(){
	describe('NodeJS DOM', function(){
		it('has document', function () {

		    var div = document.createElement('div')
		    expect(div.nodeName).eql('DIV')
		})
	})
	describe('Each function', function(){
		it('return undefined when called on empty array', function(){
			expect(Utils.each([])).to.be.undefined;
		})
		it('returns the array if handler is undefinded', function(){
			assert.isArray(Utils.each(['1', '2']));
		})
		it('finds element in DOM if called with a string as target', function(){
			var checker = [];
			var el = document.createElement('div');
			el.classList.add("box");
			document.body.appendChild(el);
			var myFunc = function(el){ checker.push(el) }
			Utils.each('.box', myFunc);
			expect(checker.length).equal(1);
		})
		it('iterate and execute handler func. if called with nodeList', function(){
			var checker = [];
			for (var i=0; i<2; i++) {
				var el = document.createElement('div');
				el.classList.add("box");
				document.body.appendChild(el);
			}
			var myFunc = function(el){ checker.push(el) }
			Utils.each(document.querySelectorAll('.box'), myFunc);
			expect(checker.length).equal(3);
		})
		it('if called with an element iterate over that single element', function(){
			var checker = [];
			var el = document.createElement('div');
			var myFunc = function(el){ checker.push(el) }
			Utils.each(el, myFunc);
			expect(checker.length).equal(1);
		})
	})
	describe('Events', function(){
		var el = document.createElement('div');
		var handler = function(e){ checker=e }
		it('on - attach dom event returns undefined', function(){
			expect(Events.addEvent(el, 'click', function(){ })).to.be.undefined;
		})
		it('on - eventListner execute handler', function(){
			var checker = false;
			Events.addEvnet(el, 'click', function(){ checker = true; })
			el.click();
			expect(checker).to.be.true;
		})
		it('trigger - trigger custom event return undefinded', function(){
			expect(Events.triggerEvent(el, 'click')).to.be.undefined;
		})
		it('trigger - trigger custom event is heard', function(){
			var checker;
			Events.addEvent(el, 'click', function(e){ checker=e });
			Events.triggerEvent(el, 'click', true);
			expect(checker.type).equal('click');
		})
		it('off - remove eventListner', function(){
			var checker;
			Events.addEvent(el, 'click', handler);
			Events.removeEvent(el, 'click', handler);
			Events.triggerEvent(el, 'click', true);
			expect(checker).to.be.undefined;
		})
	});


});
