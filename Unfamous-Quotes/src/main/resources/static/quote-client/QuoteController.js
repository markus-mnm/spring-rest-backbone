
define(function(require) {
	var QuoteList = require('./QuoteList');
	var QuoteListView = require('./QuoteListView');
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
		console.log("READY 2");

		var quoteList= new QuoteList();
		new QuoteListView({model:quoteList});
		new QuoteAppView({model:quoteList});;
	});

});
