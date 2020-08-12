# Weather App

A simple weather web application that displays the current weather in downtown Oakland using the OpenWeather Current Weather Data [API](https://openweathermap.org/api).

## Installation

```
git clone https://github.com/ariana124/weather_app.git
```

Check to make sure you have node installed using:

```
node -v
```

If you don't have node installed, download it [here](https://nodejs.org/en/download/).

Once you have this repository cloned and node installed run the command:

```
npm install
```

After running this command you should have a folder labeled `node_modules` in the repository.

## Running the Application

After installing the npm packages with the prior command, you can now use the command:

```
nodemon app.js
```

Nodemon is a package that automatically restarts your server when you make and save any changes to the `calculator.js` file. It's a lot more convenient than saving the file, quitting the current session with `Ctrl + C`, and running `node calcultor.js` everytime you make a change and save the file.

Your server should now be running on port 3000, so now you can type `localhost:3000` into your web browser to see the current weather in downtown Oakland, CA.
