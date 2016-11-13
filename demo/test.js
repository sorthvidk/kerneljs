import View from '../src/es6view';
//const { View, Dom } = Kernel;
//import Log from '../dist/kernel';

//const Kernel = require('../dist/kernel');

//const Utils = Kernel.utils;
console.log(View);

/**
* View is the standard sorthvid content container class
* @param el The associated DOMelement
* @param settings The instance property values parsed into the constructor
* @param events A json object containing the events for the instance
**/
const defaults = {
	el: '.box',
	events: {
		'click .btn': 'onClick',
		'mouseenter': 'onMouseEnter'
	},
	displayName: 'Box-example',

}

class Boxes extends View {

	constructor(settings) { // ES6 features Default Parameters
		let defaults = {
			el: '.box',
			events: {
				'click .btn': 'onClick',
				'mouseenter': 'onMouseEnter'
			},
			displayName: 'Box-example'
		}

		super(defaults) //call the parent method with super
		console.log(settings, this);

	}
	onMouseEnter(e) {
		console.log(e);
	}

	onClick(e) {
		e.preventDefault();
		console.log(e);
	}

	get area() { //calculated attribute getter
		return this.calcArea();

	}
	static calcArea() {
		return this.height * this.width;
	}
}

let s = new Boxes(5);

// s.sayName(); // => Hi, I am a Square.
// console.log(s); // => 25

//console.log(new Square().area); // => 100


/*
view:
	delegate events




*/




