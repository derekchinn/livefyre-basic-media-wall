require.config({
	paths : {
		jquery : 'lib/jquery/jquery',
		underscore : 'lib/underscore/underscore',
		backbone : 'lib/backbone/backbone',
		mustache : 'lib/mustache/mustache',
		text : 'lib/requirejs-text/text',
//		fyre : 'http://zor.labs-t402.fyre.co/wjs/v3.0/javascripts/livefyre',
		fyre : 'http://zor.labs.fyre.co/wjs/v3.0/javascripts/livefyre',
		isotope : 'lib/isotope/jquery.isotope'
	},
	packages : [{
		name : 'streamhub-backbone',
		location : 'lib/streamhub-backbone'
	},{
        name: 'streamhub-isotope',
        location: 'lib/streamhub-isotope'
    }],
	shim : {
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		underscore : {
			exports : '_'
		},
		jquery : {
			exports : '$'
		},
		fyre : {
			exports : 'fyre'
		},
		isotope: {
            deps: ['jquery']
        }
	}
});