

define(function(require) {
	var Backbone = require('Backbone');

	return Backbone.Model.extend({
		urlRoot: 'http://localhost:8080/quotes',
		url: function() {
			return this.urlRoot + '/' + this.id;
		}
  	});
});