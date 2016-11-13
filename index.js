import View from './src/es6view';
import Dom from './src/es6dom';
import Utils from './src/es6utils';
import Log from './src/log';

const Kernel = {
	View: View,
	Dom: Dom,
	Utils: Utils,
}

export default Kernel;



//exports.View = require('./src/view');
//exports.utils = require('./src/utils');
//exports.Log = require('./src/log');
//exports._ = require('underscore');




// !function (root, factory){
// 	'use strict';
// 	if (typeof exports === 'object') {
// 		// CommonJS module
// 		module.exports = factory;
// 	} else if (typeof define === 'function' && define.amd) {
// 		// AMD. Register as an anonymous module.
// 		define(function ()
// 		{
// 			return factory;
// 		});
// 	}
// }(window, {
// 	View: View,
// 	Utils: Utils
// });
