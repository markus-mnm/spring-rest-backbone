define(function (require) {
    var $ = require('jquery');

	$(document).ready(function() {
		var QuoteList = require('./QuoteList');
		var QuoteListView = require('./QuoteListView');
		var QuoteAppView = require('./QuoteAppView');

		console.log("READY 3");

		var quoteList= new QuoteList();
		new QuoteListView({model:quoteList});
		new QuoteAppView({model:quoteList});
	});    
    
});

