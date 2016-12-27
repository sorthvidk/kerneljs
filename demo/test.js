import View from '../src/es6view';
import DOM from '../src/es6dom';
import Utils from '../src/es6utils';

class Box extends View {

	constructor(settings) {
		let defaults = {
			el:settings.el,
			events: {
				'click .js--button-1': 'onClick',
				'click .js--button-2': 'onClick2',
				'mouseenter': 'onMouseEnter'
			},
			className:'Box',
			displayName: 'Box-example'
		}
		super(defaults);
		var buttons = this.find('.button');
		DOM.addClass(buttons, 'is-active');
	}
	onMouseEnter(e) {
		console.log('onMouseEnter',this.instanceId);
	}
	onClick(e) {
		console.log('onClick',this.instanceId);
	}
	onClick2(e) {
		console.log('onClick2',this.instanceId);
	}
}

class Table extends View {

	constructor(settings) {
		let defaults = {
			content: settings.content,
			el: settings.el,
			events: {
				'click .js--button': 'onClick',
				'mouseenter': 'onMouseEnter'
			},
			displayName: 'Table-example'
		}
		super(defaults);

	}
	onMouseEnter(e) {
		console.log(e);
	}
	onClick(e) {
		e.preventDefault();
		this.remove();
	}
	render() {
		DOM.append( DOM.find('body'), this.el);
	}
}


//TESTS


let boxes = Utils.viewFactory('.box', Box);
let table1 = new Table({el: DOM.find('#table')[0] });
let table2 = new Table({el: 'div.table-test.class2.class3', content:'<a class="button">TEST ME</a>'});
table2.render();


console.log(table1.hasClass('table'));
console.log(table1.hasClass('abe'));
console.log(table1.addClass('abe').hasClass('abe'));
console.log(table1.removeClass('abe').hasClass('abe'));

var section = DOM.closest(table1,'section');
console.log("section", section);
DOM.addClass(section, 'extra-class');




