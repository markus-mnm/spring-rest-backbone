

define(function(require) {
	var Backbone = require('Backbone');
	var $ = require('jquery');
	var QuoteView = require('./QuoteView');

	return Backbone.View.extend({
		
		
		el : $("#quote-app"),
		
	    events: {
	        "click .resetQuoteForm": "resetForm",
	        "click .addNew": "createNew",
	      },
	      
		addOne: function(quoteModel) {
			var view = new QuoteView({model: quoteModel});
			var viewRenderReturn = view.render();
			this.$("#quote-list").append(viewRenderReturn.el);
		},
		addAll: function() {
			this.model.each(
					this.addOne
					, this
					);
		},

	    render: function() {

	    },
		
      initialize: function() {
  		  console.log("quote app view initialse  2");
	      this.editQuoteText = this.$("#quoteForm #editQuoteText");
	      this.editQuoteSource = this.$("#quoteForm #editQuoteSource");
	      this.editQuoteTime = this.$("#quoteForm #editQuoteTime");
	      this.editQuoteSubmitter = this.$("#quoteForm #editQuoteSubmitter");
	      
      },
	  
	  createNew: function(todo) {
		  this.model.create({
        	  quoteText: this.editQuoteText.val(),
        	  quoteSource: this.editQuoteSource.val(),
        	  firstUttered: this.editQuoteTime.val(),
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
