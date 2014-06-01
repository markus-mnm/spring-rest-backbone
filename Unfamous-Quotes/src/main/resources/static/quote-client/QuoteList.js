
define(function(require) {
	var QuoteModel = require('./QuoteModel');
	var HAL = require('HAL');

	return HAL.Collection.extend({
		model : QuoteModel,
		url : '/quotes',
	    itemRel : 'quotes'
	});

});
