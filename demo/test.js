import View from '../src/es6view';

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
		console.log(this.displayName, this);
	}
	onMouseEnter(e) {
		console.log(e);
	}

	onClick(e) {
		e.preventDefault();
		console.log(e);
	}
}
class Table extends View {

	constructor(settings) { // ES6 features Default Parameters
		let defaults = {
			el: '.table',
			events: {
				'click .one': 'onClick',
				'mouseenter': 'onMouseEnter'
			},
			displayName: 'Table-example'
		}
		super(defaults) //call the parent method with super
		console.log(this.displayName, this);
	}
	onMouseEnter(e) {
		console.log(e);
	}

	onClick(e) {
		e.preventDefault();
		console.log(e);
		this.remove();
	}
}

let s = new Boxes(5);
let a = new Table(5);

// s.sayName(); // => Hi, I am a Square.
// console.log(s); // => 25

//console.log(new Square().area); // => 100


/*
view:
	delegate events




*/




