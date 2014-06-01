
define(function(require) {
	var backbone = require('backbone');
	var $ = require('jquery');
	var _ = require('underscore');
	var QuoteView = require('./QuoteView');

	return backbone.View.extend({

		el : $("#quote-app"),
	      
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

          this.listenTo(this.model, 'add', this.addOne);
          this.listenTo(this.model, 'reset', this.addAll);
          this.listenTo(this.model, 'all', this.render);

          this.model.fetch();
      }
	});
	/*
		
		tagName:  "li",
//		el: '.left-nav',
//	    tagName: 'ul',
//	    className: 'nav nav-list lists-nav',
	    
		initialize: function() {
			this.template = _.template($('#item-template').html());
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		events: {
			"click a.destroy" : "clear",
			"keypress .edit"  : "updateOnEnter",
			"blur .edit"      : "close"
		},
		
		render: function(){
			this.$el.html(this.template(this.model.attributes));
			this.input = this.$('.edit');
			return this;
		},
		
		edit: function() {
			this.$el.addClass(editing);
			this.input.focus();
		},
		
		close: function() {
			var value = this.input.val();
			if (!value) {
				this.clear();
			} else {
				this.model.save({title:value});
				this.$el.removeClass("editing");
			}
		},

		updateOnEnter: function(e) {
			if (e.keyCode == 13) this.close();
		},
		
		clear: function() {
			this.model.destroy();
		}
		
	});
	*/
});
