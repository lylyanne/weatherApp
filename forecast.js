var https = require("https");

var apiKey = '05d887f0cbf54d9bf1494c75bebcf270';
var latitude = 7.8267;
var longitude = -122.423;
var url = "https://api.forecast.io/forecast/" + apiKey + "/" + latitude + "," + longitude;

//Print out current weather
function printCurrentWeather(weather) {
  console.log("Current weather is " + weather);
}

function get() {
var request = https.get(url, function(response) {
  var body = "";

  response.on('data', function (chunk) {
      body += chunk;
  });

  response.on("end", function () {
    try {
      var forecast = JSON.parse(body);
      printCurrentWeather(forecast.currently.summary);
    } catch(e) {
      console.log(e);
    }

  });
});
}

module.exports.get = get;
