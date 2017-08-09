/**
 * NOTE: This file is simply for testing this connector and will not
 * be used or packaged with the actual connector when published.
 */
var Arrow = require('arrow'),
	server = new Arrow();

// TODO: Define a model that you can use when you run the connector locally for testing.
server.addModel(Arrow.Model.extend('tbray', {
	fields: {
		list: {
			dt: { type: Number },
			temp: {
				day: { type: Number },
				min: { type: Number },
				max: { type: Number }
			},
			weather: {
				description: { type: String }
			}
		},
		city: {
			name: { type: String },
			coord: {
				lat: { type: Number },
				lon: { type: Number }
			},
			country: { type: String }
		}
	},
	connector: 'appc.weather.connector'
}));

server.start();
