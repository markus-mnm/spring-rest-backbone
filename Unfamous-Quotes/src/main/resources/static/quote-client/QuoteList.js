define(function(require) {
   var QuoteModel = require('./QuoteModel');
   var HAL = require('HAL');

   return HAL.Collection.extend({
      model : QuoteModel,
      url : '/quotes',
      itemRel : 'quotes',

      initialize : function() {
         _.bindAll(this, 'nextQuoteModel', 'previousQuoteModel');
      },

      nextQuoteModel: function(quoteModel) {
         var index = this.indexOf(quoteModel);
         if ((index + 1) === this.length) {
            return this.first();
         }
         return this.at(index + 1);
      },

      previousQuoteModel : function(quoteModel) {
         var index = this.indexOf(quoteModel);
         if (index === 0) {
            return this.last();
         }
         return this.at(index - 1);
      }      
      
   });

});
