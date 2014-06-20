define(function(require) {
   var HAL = require('HAL');

   return HAL.Model.extend({
      initialize : function() {
         this.id = null;
         if (this.links && this.links.self && this.links.self.href) {
            this.id = this.links.self.href.substr(this.links.self.href.lastIndexOf('/') + 1);
         }
      }
   });
});