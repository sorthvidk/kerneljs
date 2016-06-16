'use strict';

var _log,
	type = {
		disabled:"disabled",
		debug:"debugging",
		func:"function",
		data:"raw data",
		error:"!ERROR!"
	},
	_db,
	_fn,
	_dt,
	_er;

var allowedTypes = [
	type.debug, type.func, type.data, type.error
];

/**
 * Logging wrapper for debugging
 * @param {args} - A list of parameters, where the first parameter can be a type as specified in the "type" object 
 */	

_log = (function (undefined) {
	var Log = Error;

	Log.prototype.write = function (args) {
		if ( window.nolog ) return false;

		var typeFound = false;
		for (var i=0;i<allowedTypes.length;i++){
			if ( allowedTypes[i] === args[0] ) typeFound = true;
		}

		if ( typeFound ) args[0] = "["+args[0]+"] || ";

		var suffix = {
			'@': (this.lineNumber ? this.fileName + ':' + this.lineNumber + ':1': extractLineNumberFromStack(this.stack))
		};

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
		Log().write(Array.prototype.slice.call(arguments, 0)); // turn into proper array
	};

})();



/**
 * Log is the standard sorthvid log wrapper. It exposes four methods:
 * db - "debug", used for signifying, that the logged text is a general debugging statement
 * dt - "data", used for signifying, that the logged text is raw data
 * fn - "function", used for signifying, that the text is logged when a function is invoked
 * log - the full function where type can be specified manually or left out
 */

_db = function(args) { _log(type.debug, Array.prototype.slice.call(arguments, 0)); };
_dt = function(args) { _log(type.data, Array.prototype.slice.call(arguments, 0)); };
_fn = function(args) { _log(type.func, Array.prototype.slice.call(arguments, 0)); };
_er = function(args) { _log(type.error, Array.prototype.slice.call(arguments, 0)); };

module.exports = {db:_db, dt:_dt, fn:_fn, er:_er, log:_log};