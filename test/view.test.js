import { expect } from 'chai';
import { assert } from 'chai';
import { View } from '../dist/kernel';
import { Utils } from '../dist/kernel';
import { DOM } from '../dist/kernel';
require('jsdom-global')();

class Box extends View {

	constructor(settings) {
		settings.events = {
			'click': 'onClick'
		};
		super(settings);
		this.active = false;
	}
	onClick(e) {
		e.preventDefault();
	}
}
let div = document.createElement('div');
div.classList.add('test-div');
document.body.appendChild(div);
//View tests
describe('KernelJS View', function(){
	describe('NodeJS DOM', function(){
		it('has document', function () {
		    var div = document.createElement('div');
		    expect(div.nodeName).eql('DIV')
		})
		it('instantiate a new view class will create an instance of View', function(){
			let testView = new View({el: div});
			expect(testView).to.be.instanceOf(View);
		})
		it('extend view class will still be an instance of View', function(){
			let testView = new Box({el: div});
			expect(testView).to.be.instanceOf(View);
		})
		it('new view class with el set as Element')
		it('new view class with el set as Emmet string')
		it('render view with mountpoint')
		it('add eventListners')
		it('add displayName')
		it('render view')
		it('set new state will update the view')
	})



});
