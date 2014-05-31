
define(function(require) {
	var QuoteModel = require('./QuoteModel');
	var QuoteList = require('./QuoteList');
	var QuoteView = require('./QuoteView');
//	var QuoteListView = require('./QuoteListView');
	var QuoteAppView = require('./QuoteAppView');
	var $ = require('jquery');

;

	$(document).ready(function() {
		
		
		// this works for http://localhost:8080/quote-index.html?1	
//		var model = new QuoteModel({ id: document.location.search.slice(1) });
//		model.fetch()
		
//		new QuoteView({
//			el: $('.quote').first(),
//			model: model
//		});

		var quoteList= new QuoteList();
		new QuoteAppView({model:quoteList});
	});

});
