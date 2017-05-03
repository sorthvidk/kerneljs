# KernelJS #
KernelJS is sorthvid's main view class used for small progressive enhanced web projects. Where HTML is already present at render time. 

## Download ##
Kerneljsorthvid is under MIT license and supports modern environments. All use in production environments is at own risk. 

### Install

```js
npm install --save kerneljsorthvid
```

## Consume it as an ES2015 module ##

```js
import { View } from 'kerneljsorthvid';

let Box extends View {
	constructor(options){
		options.events = {
			'click':'onClick'
		}

		options.displayName = 'Box';
		super(options);
	}
	onClick() {
		console.log('you clicked the box');
	}
}

new Box({el: document.querySelector('.box')})

```

## Events ##
KernelJS uses a small ES6 eventEmitter as event system. Thanks to [es6-event-emitter](https://github.com/JFusco/es6-event-emitter) for great work. 

The event system can be accessed through the View as a static method. Or through a ES6 modules import.

```js
import {Events} from kerneljsorthvid;
import {View} from kerneljsorthvid;

Events.trigger('box:update', {a: "value"});

//or

View.Events.trigger('box:update', {a: "value"});

```

In addition we added a few extra methods in order to tailor html events.

* addEvent
* removeEvent
* triggerEvent

### addEvent(element, eventName, eventHandler) ###
Adds eventListner. Be aware that binding context to eventhandler only can happen once.

@args:
* element: {HTMLElement} - element to add eventListner to
* eventName: {String} - event name ex. ("click")
* eventHandler: {func} - callback function

```js
import {Events} from 'kerneljsorthvid';

Events.addEvent(document.querySelector('.box'), 'click', ()=>{ 
	//doStuff
});
```

### removeEvent(element, eventName, eventHandler) ###
Remove eventListner. Be aware that binding context to eventhandler only can happen once.

@args:
* element: {HTMLElement} - element to add eventListner to
* eventName: {String} - event name ex. ("click")
* eventHandler: {func} - callback function

```js
import Events from 'kerneljsorthvid';

Events.removeEvent(document.querySelector('.box'), 'click', ()=>{ 
	//doStuff
});
```

### triggerEvent(element, eventName, detail) ###
Usefull if you need to communicate with other frameworks through HTMLElements etc.

@args:
* element: {HTMLElement} - element to add eventListner to
* eventName: {String} - event name ex. ("click")
* detail: {Object} - events envelope

```js
import Events from 'kerneljsorthvid';

Events.triggerEvent(document.querySelector('.box'), 'custom:dostuff', ()=>{ 
	//doStuff
});
```


## DOM - Utility functions for selecting, looping etc. 
We added a few wellknown functions from jQuery thanks to [you Might Not Need Jquery](http://youmightnotneedjquery.com/) for inspiration.

* find 
* closest
* append
* remove
* hasClass
* addClass
* removeClass
* toggleClass

### find(arg1, arg2) ###
Proxies querySelectorAll, allways returns an element list (Array). 

@args:
* selector: String
* context: HTMLElement to use as search context
```js
import DOM from 'kerneljsorthvid';

DOM.find('.box', DOM.find('.header'));
// -> all .box in .header
```

### closest(element, selector) ###
Finds closest element from another elements position in the DOM tree.

@args:
* element: View Instance / HTMLElement
* selector: String

```js
import DOM from 'kerneljsorthvid';

var box = new Box({el: document.querySelector('.box')})

DOM.closest(box, 'article');
// -> closest <article> from the .box position in the dom tree. 
```

### append ###
Append 

## Emmet templates ##

## Browser support ##
Internet Explorer 10+
Chrome latest
Safari latest
Firefox latest
Opera latest

## Comming releases ##
* 3.0.0: remove emmet and replace with literal string templates.   
* 2.1.0: Update event system, Automatic attachment of transitionEvents
* 2.0.3: proper documentation

## Changelog ##
* 2.0.1: fixed small bugs
* 2.0.0: converted to ES6
* 1.0.0: first version 

## Todo ##
* Add covering unit test

## Auto-generated JS Documentation ##
See [documentation](documentation/js) for the project

