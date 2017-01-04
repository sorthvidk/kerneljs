const emmetUtils = {

	'#': function(id) {
		this.id = id;
	},
	'.': function(cls) {
		var list = this.getAttribute('class') || '';
		list = list + (list ? ' ' : '') + cls;
		if (list.length) {
			this.setAttribute('class', list);
		}
	},
	'[': function(attrs) {
		attrs = attrs.substr(0, attrs.length-1).match(/(?:[^\s"]+|"[^"]*")+/g);
		for (var i=0,m=attrs.length; i<m; i++) {
			var attr = attrs[i].split('=');
			this.setAttribute(attr[0], (attr[1] || '').replace(/"/g, ''));
		}
	},
	'>': function(tag){
		if (tag) {
			var el = document.createElement(tag);
			this.appendChild(el);
			return el;
		}
		return this;
	},
	'+': function(tag, root) {
		return emmetUtils['>'].call(this.parentNode || root, tag);
	},
	'*': function(count) {
		var parent = this.parentNode,
			els = [this];
		for (var i=1; i<count; i++) {
			els.push(this.cloneNode(true));
			parent.appendChild(els[i]);
		}
		//TODO: numbering for els
		return els;
	},
	'^': function(tag, root) {
		return emmetUtils['+'].call(this.parentNode || root, tag, root);
	},
	'{': function(text) {
		this.appendChild(document.createTextNode(text.substr(0, text.length-1)));
	}
}

const emmetRE = function() {
	var m = Object.keys(emmetUtils).join('');
	var regex = '[a-z'+m+']{0,1}(?:"[^"]*"|[^"'+m+']){0,}';
	return new RegExp(regex, 'g');
}



let emmet = function(code) {

	let parts = code.match(emmetRE()).filter(Boolean),
	root = document.createDocumentFragment(),
	el = document.createElement(parts[0]);
	root.appendChild(el);
	for (var i=1,m=parts.length; i<m; i++) {
		var part = parts[i];
		el = emmetUtils[part.charAt(0)].call(el, part.substr(1), root) || el;
	}
	//return Array.prototype.slice.call(root.childNodes)[0];
	return root;
}
export default emmet;
