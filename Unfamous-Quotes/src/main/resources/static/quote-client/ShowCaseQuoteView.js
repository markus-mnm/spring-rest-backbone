

define(function(require) {
	var backbone = require('backbone');
	var $ = require('jquery');
	
	return backbone.View.extend({

	  el : $("#quote-app"),
      
	  nextQuoteNumber : 1,
	  
      initialize: function() {
          this.listenTo(this.model, 'add', this.change);
          this.listenTo(this.model, 'reset', this.change);
          this.listenTo(this.model, 'all', this.change);
    	  this.showQuote(this.nextQuoteNumber);
      },
	  
      findNextQuoteNumber: function(currentQuoteNumber) {
    	  return currentQuoteNumber + 1;
      },
	  
      showQuote: function(currentQuoteNumber) {
    	  return ;
      },
      
      change: function() {   	  
    	  this.nextQuoteNumber = this.findNextQuoteNumber(this.nextQuoteNumber);
      }      
      
	});
	
	
	
	
});
