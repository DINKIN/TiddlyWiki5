/*\
title: $:/core/modules/filters/getIndex.js
type: application/javascript
module-type: filteroperator

returns the value at a given index of datatiddlers

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.getIndex = function(source,operator,options) {
	var data,title,results = [];
	if(operator.operand){
		source(function(tiddler,title) {
			title = tiddler ? tiddler.fields.title : title;
			data = options.wiki.parseTextReference(title,"",operator.operand,{});
			if(data) {
				results.push(data.source);
			}
		});
	}
	return results;
};

})();
