define(function(require) {
   var backbone = require('backbone');
   var $ = require('jquery');
   var _ = require('underscore');

   return backbone.View.extend({

      el : $("#quote-app"),

      currentQuoteModel : null,

      initialize : function() {
         this.listenTo(this.model, 'add', this.change);
         this.listenTo(this.model, 'reset', this.change);
         this.listenTo(this.model, 'all', this.change);
         this.template = _.template($('#quote-showcase-template').html());
      },

      showNextQuote : function() {
         var lastQuoteModel = this.currentQuoteModel;
         if (this.model.length === 0) {
            this.currentQuoteModel = null;
         } else {
            if (this.currentQuoteModel == null) {
               this.currentQuoteModel = this.model.first();
            } else {
               this.currentQuoteModel = this.model.nextQuoteModel(this.currentQuoteModel);
            }

            if (this.currentQuoteModel !== null) {
               this.renderQuoteModel(lastQuoteModel, this.currentQuoteModel);
               setTimeout(_.bind(this.showNextQuote, this), 8000);
            }
         }
      },

      renderQuoteModel : function(lastQuoteModel, newQuoteModel) {

         var newQuoteHtml = this.template(newQuoteModel.attributes);
         this.$(".presentation").fadeOut({
            duration : 2000
         }).promise().done(function() {
            $(".presentation").html(newQuoteHtml);
            if (lastQuoteModel !== null) {
               $(".presentation").removeClass("font" + lastQuoteModel.id);
            }
            $(".presentation").addClass("font" + newQuoteModel.id);
            $(".presentation").fadeIn({
               duration : 2000
            });
         });
      },

      change : function() {
         if (this.currentQuoteModel === null && this.model.length > 0) {
            this.showNextQuote();
         }
      }

   });

});
