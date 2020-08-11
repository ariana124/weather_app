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
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    });

    res.sendFile(__dirname + "/index.html");
});
