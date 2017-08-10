var Arrow = require('arrow');

var ForecastRoute = Arrow.Router.extend({
	name: 'five-days-forecast',
	path: '/five-days-forecast',
	method: 'GET',
	description: 'openweathermap route',
	action: function (req, resp, next) {
		req.server.getAPI('api/openweathermap', 'GET')
			.execute({}, (err, result) => {
				
				if (err) {
					next(err);
				} else {
					let city = result.city;
					let list = result.list.map(value => {
						let time = new Date(value.dt * 1000).toLocaleDateString('en-GB', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
						});
						value.dt = time;

						return value;
					});



					resp.render('five-days-forecast', { city, list });
				}
			});
	}
});

module.exports = ForecastRoute;