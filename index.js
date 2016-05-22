
var Kernel =  {
	View: require('./src/view'),
	Utils: require('./src/utils')
}


module.exports = Kernel;


var Box = Kernel.View.extend({
	initialize: function(){
		console.log("test", this.el)
	}
})


!(function(){
	new Box();
})();

console.log(Kernel);


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
