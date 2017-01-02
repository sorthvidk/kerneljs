import Log from '../src/log';
import View from '../src/view';
import DOM from '../src/dom';
import Utils from '../src/utils';
import Emmet from '../src/emmet';

import * as motion from 'popmotion'; //https://popmotion.io/

// import { View } from '../dist/kernel';
// import { DOM } from '../dist/kernel';
// import { Utils } from '../dist/kernel';
// import { Log } from '../dist/kernel';

class Box extends View {

	constructor(settings) {
		settings.events = {
			'click .js--button-1': 'onClick',
			'click .js--button-2': 'onClick2',
			'click .js--button-3': 'onClick3',
			'click .js--button-4': 'onClick4',
			'mouseenter': 'onMouseEnter'
		};
		super(settings);
		this.active = false;
		var buttons = this.find('.button');
		DOM.addClass(buttons, 'is-active');
	}
	onMouseEnter(e) {
		Log.fn('Box | onMouseEnter',this.instanceId,"this.active="+this.active);
		this.toggleClass('is-hovered', this.active)
	}
	onClick(e) {
		e.preventDefault();
		Utils.scrollTo(boxes[2], 2000);
	}
	onClick2(e) {
		e.preventDefault();
		boxes[1].remove();
	}
	onClick3(e) {
		this.active = !this.active;
		e.preventDefault();
		this.EventEmitter.trigger('view:action', this);
	}
	onClick4(e) {
		e.preventDefault();
		Log.fn("onClick4")
		Utils.scrollTo(boxes[0], 2000);
	}
}

let boxes = Utils.viewFactory('.box', Box, {displayName:'Lars'});

class Move extends View {
	constructor(settings) {
		settings = settings || {};

		Object.assign(settings, {
			events: {
				'click .move': 'onClick'
			},
			displayName: 'Cookie-accept',
			el: 'div.move[data-text="text"]',
			data: {
				text: 'move box'

			},
			mount: 'body'
		})
		super(settings);
		//Log.db(motion);
		this.movement = motion.tween({
			yoyo: 6,
			values: {
		        x: {
		            to: 200
		        },
		        y: {
		        	to: -200
		        }
		    },
		    onFrame: (state) => { console.log('x: ', state.x) },
		    onStart: (e) => { console.log(e) }
		})

	}
	onClick(e) {
		this.movement.on(this.el).start();
	}
}

class Table extends View {

	constructor(settings) {
		settings.events = {
			'click .js--button': 'onClick',
			'mouseenter': 'onMouseEnter'
		}
		settings.displayName = 'Table';
		super(settings);
	}
	onMouseEnter(e) {
		Log.fn('Table | onMouseEnter');
	}
	onClick(e) {
		Log.db("cookie",Utils.cookie.get('cookietest'))
		e.preventDefault();
	}
	render() {
		DOM.append( DOM.find('body'), this.el);
	}
}

class CookieAccept extends View {

	constructor(settings = {}) {
		settings = settings || {};

		Object.assign(settings, {
			events: {
				'click .js--button': 'onClick',
				'mouseenter': 'onMouseEnter'
			},
			displayName: 'Cookie-accept',
			el: 'div.section-header>span.heading[data-text="heading"]>div.test^span.section-text[data-text="text"]',
			data: {
				heading: 'heading text ',
				text: 'cookie kasse'

			},
			mount: '.container'
		})
		super(settings);
		this.EventEmitter.on("view:action", this.onAction.bind(this));
	}
	onAction(e) {
		console.log(this, e);
	}
	onMouseEnter(e) {
		Log.fn('Table | onMouseEnter');
	}
	onClick(e) {
		Log.db("cookie",Utils.cookie.get('cookietest'))
		e.preventDefault();
		this.update()
	}
}


//TESTS

var cookie = new CookieAccept();
var move = new Move();


let table1 = new Table({el: DOM.find('#table')[0] });
let table2 = new Table({el: 'div.table-test.class2.class3>a.js--button{TEST cookie}'});
table2.render();


Log.db(table1.hasClass('table'));
Log.db(table1.hasClass('abe'));
Log.db(table1.addClass('abe').hasClass('abe'));
Log.db(table1.removeClass('abe').hasClass('abe'));

var section = DOM.closest(table1,'section');
Log.db("section", section);
DOM.addClass(section, 'extra-class');

Log.db('TEST getUrlParms', Utils.getUrlParms('t'));
Log.db('TEST getHeight', Utils.getHeight(table1) );
Log.db('TEST isElementInViewport', Utils.isElementInViewport(boxes[2]));
Log.db('TEST cumulativeOffset', Utils.cumulativeOffset(boxes[2]) );

Utils.cookie.set({cookieValue:23459875934857, cookieName:'cookietest'})
