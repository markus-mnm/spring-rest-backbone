define(function (require) {
    var $ = require('jquery');

	$(document).ready(function() {
		var QuoteList = require('./QuoteList');
		var QuoteListView = require('./QuoteListView');
		var QuoteAppView = require('./QuoteAppView');
		var ShowCaseQuoteView = require('./ShowCaseQuoteView');

		var quoteList= new QuoteList();
		new QuoteListView({model:quoteList});
		new QuoteAppView({model:quoteList});
		new ShowCaseQuoteView({model:quoteList});;
	});    
    
});

