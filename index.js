var Kernel =  {
	View: require('./src/view'),
	Utils: require('./src/utils'),
	Log: require('./src/log')
}
module.exports = Kernel;

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
