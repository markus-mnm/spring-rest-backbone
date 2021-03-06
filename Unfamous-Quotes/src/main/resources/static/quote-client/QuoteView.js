
define(function(require) {
	var backbone = require('backbone');
	var $ = require('jquery');
	var _ = require('underscore');

	return backbone.View.extend({
		
		tagName:  "div",
		className  : "row",

		events: {
	      "dblclick .quoteDetails"  : "edit",
	      "click span.glyphicon-edit" : "edit",
	      "click span.glyphicon-trash" : "clear",
	    },

		initialize: function() {
			this.template = _.template($('#quote-template').html());
			this.listenTo(this.model, 'change', this.render);
		    this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes));
			this.$el.addClass("font" + (this.model.id));
			return this;
		},
		
	    edit: function() {
			console.log("edit");
	    },
		
	    clear: function() {
	      var decision=confirm("Really? You really want to forever forget this precious artifact of human society? ");
	      if (decision) {
	    	  this.model.destroy();
	      }
	    }
	});
});
