var Arrow = require('arrow'),
	request = require('request');

var WeatherAPI = Arrow.API.extend({
	group: 'openweathermap',
	path: '/api/openweathermap',
	method: 'GET',
	description: 'openweathermap api',
	model: 'five-days-forecast',
	before: 'pre_example',
	after: 'post_example',

	action: function (req, resp, next) {

		let url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Sofia&units=metric&cnt=5&APPID=fed306720840c6a287cdb2eedac37ed7',
			model = req.model

		let options = {
			url,
			method: "GET",
			json: true
		};

		request(options, function callback(error, response, body) {
			var instance = model.instance(body, true);

			return resp.send(instance, null, next);
		});
	}
});

module.exports = WeatherAPI;