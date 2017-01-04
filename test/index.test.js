var expect = require('chai').expect;
var kernel = require ('../dist/kernel');


var global = require("global")
var document = require("global/document")
var window = require("global/window")

console.log(document);
var Utils = kernel.Utils;
var Dom = kernel.DOM;

//View tests
describe('KernelJS', function(){
	describe('Each function', function(){

		it('if a string is passed find the element in >>this<<', function(){

			expect(Utils.each([])).to.be.true;
		})
	})


});
