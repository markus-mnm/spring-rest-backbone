var curl;
(function () {

	curl({
		main: 'quote',
		packages: {
			quote: { location: 'quote-client', main : 'QuoteController' },
			curl: { location: 'lib/curl/src/curl' },
			jquery: { location: 'lib/jquery/dist/jquery.min', main: '.' },
			Backbone: { location: 'lib/backbone-amd/backbone', main: '.' },
			underscore: { location: 'lib/lodash/lodash', main: '.' },
			bootstrap: { location: 'lib/bootstrap/bootstrap.min', main: '.' },			
			backbonehal: { location: 'lib/backbone-ha/backbone-hal', main: '.' }			
		}
	});

}());