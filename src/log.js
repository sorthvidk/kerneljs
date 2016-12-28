const type = {
		disabled:"disabled",
		debug:"debugging",
		func:"function",
		data:"raw data",
		error:"!ERROR!"
	},
	allowedTypes = [
		type.debug, type.func, type.data, type.error
	];

/**
 * Logging wrapper for debugging
 * @param {args} - A list of parameters, where the first parameter can be a type as specified in the "type" object 
 */	

const Log = {

	write: function(...args) {
		if ( window.nolog ) return false;

		var typeFound = false;
		for (let i=0;i<allowedTypes.length;i++){
			if ( allowedTypes[i] === args[0] ) typeFound = true;
		}

		if ( typeFound ) args[0] = "["+args[0]+"] || ";

		if ( console ){
			if (console.log) {
				if (console.log.apply) { console.log.apply(console, args); } 
				else { console.log(args); } // nicer display in some browsers
			}
		}
	},

	/*
	* Auxilliary functions for easy access
	* db - "debug", used for signifying, that the logged text is a general debugging statement
	* dt - "data", used for signifying, that the logged text is raw data
	* fn - "function", used for signifying, that the text is logged when a function is invoked
	*/	
	db: function(...args) {
		this.write(type.debug, args); 
	},	
	dt: function(...args) { 
		this.write(type.data, args); 
	},
	fn: function(...args) { 
		this.write(type.func, args); 
	},
	er: function(...args) { 
		this.write(type.error, args); 
	}
	
}



export default Log;