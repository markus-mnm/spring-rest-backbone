

define(function(require) {
	var Backbone = require('Backbone');
	var $ = require('jquery');
	var _ = require('underscore');
	var QuoteView = require('./QuoteView');

	return Backbone.View.extend({
		
		
		el : $("#quote-app"),
		
//	    events: {
//	        "keypress #new-todo":  "createOnEnter",
//	        "click #clear-completed": "clearCompleted"
//	      },
	      
		addOne: function(quoteModel) {
			console.log(quoteModel);
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

//          this.input = this.$("#new-todo");
//
          this.listenTo(this.model, 'add', this.addOne);
          this.listenTo(this.model, 'reset', this.addAll);
          this.listenTo(this.model, 'all', this.render);
//
//          this.footer = this.$('footer');
//          this.main = $('#main');

          this.model.fetch();
      }
	});
});
