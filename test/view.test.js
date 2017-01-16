var expect = require('chai').expect;
var assert = require('chai').assert;
import { View } from '../dist/kernel';
import { Utils } from '../dist/kernel';
import { DOM } from '../dist/kernel';
//var jsdom = require('mocha-jsdom');
require('jsdom-global')();
//var global = require("global");
//var document = require("global/document");
//var window = require("global/window");

var el = document.createElement('div');
			el.classList.add("box");

//Utils tests
describe('KernelJS View', function(){
	describe('NodeJS DOM', function(){
		it('has document', function () {

		    var div = document.createElement('div')
		    expect(div.nodeName).eql('DIV')
		})
	})



});
