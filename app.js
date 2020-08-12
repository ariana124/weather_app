const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

// Necessary code in order to use the body parser.
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    
    const query = req.body.zipCode;
    const apiKey = "f6fad539d556a5c0b26ab209c1c2c3c0";
    const unit = "imperial";
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${query}&appid=${apiKey}&units=${unit}`;
    
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            // Turns the data that's currently a string into a JSON object.
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            // The weather object is an array that contains 1 item which is why we access it using [0].
            const weatherDescription = weatherData.weather[0].description;
            const city = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
            res.write(`<h1 style="font-family: monospace;">The temperature in ${city} is ${temp} degrees fahrenheit.</h1>`);
            res.write(`<h2 style="font-family: monospace;">The weather currently is ${weatherDescription}.</h2>`);
            res.write(`<img src="${imageURL}">`);
            res.send();
        })
    });
});
