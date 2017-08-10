var Arrow = require('arrow');

var Forecast = Arrow.createModel('five-days-forecast', {
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
    connector: 'appc.weather'
});

module.exports = Forecast;