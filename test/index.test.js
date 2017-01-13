var expect = require('chai').expect;
var assert = require('chai').assert;
var kernel = require ('../dist/kernel');

//var jsdom = require('mocha-jsdom');
require('jsdom-global')();
//var global = require("global");
//var document = require("global/document");
//var window = require("global/window");


var Utils = kernel.Utils;
var Dom = kernel.DOM;
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
	})


});
