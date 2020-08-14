# Weather App

A simple weather web application that displays the current weather in a city depending on the zip code using the OpenWeather Current Weather Data [API](https://openweathermap.org/api).

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

## Generating an API Key

In order to use my application you need to have an API key from the OpenWeather website. You can click this [link](https://home.openweathermap.org/users/sign_in) that will take you to their sign in page if you have an account already, but if you don't then you have to create one.

After successfully creating an account you'll have to navigate to the API keys menu as shown below.

![Account Menu](/screenshots/signedin.png)

By default when you create your account you have an API key already generated for you, as displayed on the left. However, if you accidentally upload your API key to a public respository (like me... whoops), you can easily generate a new key with a new name on the right.

![Generate API Key](/screenshots/generate-key.png)

Make sure to copy your key so that you'll be able to use it for the next step.

## Using Your API Key

Alrighty now that you have an API key, it's time to actually use it.

Assuming you have this github repository already cloned, within the file `app.js` on line 21, there's a variable called `apiKey` that's currently set as an empty string. 

![Empty Key Slot](/screenshots/empty-key-slot.png)

Within the quotes just paste your API key, save the file, and you're now set up to run the app!

![Pasting the API Key](/screenshots/api-key.png)

## Running the Application

After installing the npm packages with the prior command, you can now use the command:

```
nodemon app.js
```

Nodemon is a package that automatically restarts your server when you make and save any changes to the `app.js` file. It's a lot more convenient than saving the file, quitting the current session with `Ctrl + C`, and running `app.js` everytime you make a change and save the file.

Your server should now be running on port 3000, so now you can type `localhost:3000` into your web browser and then enter in your zip code to get your current weather.

## Usage

![Home](/screenshots/home.png)

![Input](/screenshots/input.png)

![Output](/screenshots/output.png)
