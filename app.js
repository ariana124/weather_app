const express = require("express");
const https = require("https");
const app = express();

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?zip=94603&appid=f6fad539d556a5c0b26ab209c1c2c3c0&units=imperial";
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            // Turns the data that's currently a string into a JSON object.
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp
            // The weather object is an array that contains 1 item which is why we access it using [0].
            const weatherDescription = weatherData.weather[0].description;
            const city = weatherData.name;

            // One method of sending data while only using one send().
            //const description = `The weather currently is ${weatherDescription}.`
            //res.send(`<h1 style="font-family: monospace;">The temperature in ${city} is ${temp} degrees fahrenheit. ${description}</h1>`);

            res.write(`<h1 style="font-family: monospace;">The temperature in ${city} is ${temp} degrees fahrenheit.</h1>`);
            res.write(`<h2 style="font-family: monospace;">The weather currently is ${weatherDescription}.</h2>`);
            res.send();

        })
    });

    //res.sendFile(__dirname + "/index.html");
});
