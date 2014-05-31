
define(function(require) {
	var Backbone = require('Backbone');
	var QuoteModel = require('./QuoteModel');

	return Backbone.Collection.extend({
		model : QuoteModel,
		url : '/quotes',
		parse : function(response) {
			return response._embedded.quotes;
		} 
	});
	
	
});
