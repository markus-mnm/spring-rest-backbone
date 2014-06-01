var curl;
(function () {

	curl({
		main: 'quote',
		packages: {
			quote: { location: 'quote-client', main : 'QuoteController' },
			curl: { location: 'lib/curl/src/curl' },
			jquery: { location: 'lib/jquery/dist/jquery.min', main: '.' },
			backbone: { location: 'lib/backbone-amd/backbone-min', main: '.' },
			underscore: { location: 'lib/lodash/lodash.min', main: '.' },
			bootstrap: { location: 'lib/bootstrap/bootstrap.min', main: '.' },			
			HAL: { location: 'lib/HAL/backbone-hal', main: '.' }			
		}
	});

}());