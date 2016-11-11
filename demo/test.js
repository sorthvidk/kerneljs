//import { View } from '../dist/kernel';

const Kernel = require('../dist/kernel');

const Utils = Kernel.utils;


//debugger;
let Box = Kernel.View.extend({
	initialize: function(){
		console.log("testddssssssssffs", this)
	}
})


!(function(){
	new Box();
})()



/**
* View is the standard sorthvid content container class
* @param el The associated DOMelement
* @param settings The instance property values parsed into the constructor
* @param events A json object containing the events for the instance
**/
class View {
	defaultProps() {
		this.instanceId = Utils.getCuid();
		this.className = '';
	  	this.name = 'view class';
	  	// el: null,
	  	// settings: null,
	  	// events: null,
	  	// parent: null,
	  	// visible: true,
	  	// instanceId: true
	}

	constructor(settings, defaults) { //class constructor
		this.defaultProps();
		console.log(settings, defaults)

	}

	sayName() { //class method
		console.log('Hi, I am a', this.name + '.');
	}
}

class Boxes extends View {
	constructor(settings) { // ES6 features Default Parameters
		const defaults = {
			className: 'test'
		}
		super(defaults) //call the parent method with super
		this.name = 'new box dd';
		this.className = 'box class'

	}

	static defaults() {
		return {
			className: 'test'
		}
	}

	get area() { //calculated attribute getter
		return this.calcArea();

	}
	static calcArea() {
		return this.height * this.width;
	}
}

let s = new Boxes(5);

s.sayName(); // => Hi, I am a Square.
console.log(s); // => 25

//console.log(new Square().area); // => 100


/*
view:
	delegate events




*/




