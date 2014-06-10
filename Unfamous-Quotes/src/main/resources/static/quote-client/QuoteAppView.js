

define(function(require) {
	var backbone = require('backbone');
	var $ = require('jquery');

	return backbone.View.extend({
		
		
		el : $("#quote-app"),
		
	    events: {
	        "click .resetQuoteForm": "resetForm",
	        "click .addNew": "createNew",
	      },
	      
		
      initialize: function() {
	      this.editQuoteText = this.$("#quoteForm #editQuoteText");
	      this.editQuoteSource = this.$("#quoteForm #editQuoteSource");
	      this.editQuoteTime = this.$("#quoteForm #editQuoteTime");
	      this.editQuoteSubmitter = this.$("#quoteForm #editQuoteSubmitter");
	      
      },
	  
	  createNew: function() {
		  this.model.create({
        	  quoteText: this.editQuoteText.val(),
        	  quoteSource: this.editQuoteSource.val(),
        	  firstDocumentedOccurence: this.editQuoteTime.val(),
        	  submitter: this.editQuoteSubmitter.val(),
          });
		  this.resetForm();
      },
	  
      resetForm: function(todo) {
	      this.editQuoteText.val('');
	      this.editQuoteSource.val('');
	      this.editQuoteTime.val('');
	      this.editQuoteSubmitter.val('');
      }
	    
	});
	
	
	
	
});
