'use strict';

var _log,
	type = {
		disabled:"disabled",
		debug:"debug",
		function:"function",
		data:"data"
	};
var allowedTypes = [
	type.debug, type.function, type.data
];

_log = (function (undefined) {
	var Log = Error;

	Log.prototype.write = function (args) {
		if ( window.nolog ) return false;
		var typeFound = false;
		for (var i=0;i<allowedTypes.length;i++){
			if ( allowedTypes[i] === args[0] ) typeFound = true;
		}

		if ( !typeFound ) return false;

		var suffix = {
			'@': (this.lineNumber ? this.fileName + ':' + this.lineNumber + ':1': extractLineNumberFromStack(this.stack))
		};

		args[0] = "["+args[0]+"] ||";
		args = args.concat([suffix]);

		if ( console ){
			if (console.log) {
				if (console.log.apply) { console.log.apply(console, args); } else { console.log(args); } // nicer display in some browsers
			}
		}
	};

	var extractLineNumberFromStack = function (stack) {
		if ( !stack || stack == '') {
			return false;
		}
		var line = stack.split('\n')[2];
		if ( !line ) return false;
		if ( !line.indexOf ) return false;
		line = (line.indexOf(' (') >= 0 ? line.split(' (')[1].substring(0, line.length - 1) : line.split('at ')[1]);
		return line;
	};

	return function (params) {
		var DEBUGMODE = true;

		if (typeof DEBUGMODE === typeof undefined || !DEBUGMODE) return;
		Log().write(Array.prototype.slice.call(arguments, 0)); // turn into proper array
	};

})();

module.exports = _log;