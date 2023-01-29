
# Weather App

Daily weather forecast information.


## Authors

- [@Kamilismayilzade](https://www.github.com/Kamilismayilzade)


## Documentation

Application created with [TypeScript](https://www.typescriptlang.org/) + [ReactJs](https://reactjs.org/) and [Vite](https://vitejs.dev/guide/).

[Tailwind CSS](https://tailwindcss.com/) is used for styling.

For data fetching [OpenWeatherMap API](https://react-icons.github.io/react-icons/) is used.

[React Icons](https://openweathermap.org/api) applied for customization. 

Learn More about [TypeScript Documentation ](https://www.typescriptlang.org/docs/) and [React Documentation ](https://beta.reactjs.org/) here.

Get familiar with [Tailwind CSS](https://tailwindcss.com/docs/installation) here.

Also take a look to the [OpenWeatherMap API Docs](https://openweathermap.org/forecast5).


## Features

- Weather forecasts for any county and city.
- Daily hourly temperatures.
- Daily maximum and minimum temperatures.
- Sunrise, Sunset, Wind, Pressure, Humidity, Precipitation,     Visibility, Feels like .etc
- Responsive Design 
- Loader


## OpenWeatherMap API

#### Get Forecast

```http
  api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}& appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key`, `lat`, `lon` | `number` | **Required**. Your API key, lat, lon |

#### Get Geocoding

```http
  http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `city`, `country`      | `string` | **Required**. |
| `limit` | `number` | **Optional**. |






## Badges


![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) 
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Blue 50 | ![#eff6ff](https://tailwindcss.com/docs/customizing-colors) #eff6ff |
| Slate 800 | ![#1e293b](https://tailwindcss.com/docs/customizing-colors) #1e293b |
| Slate 400  | ![#94a3b8](https://tailwindcss.com/docs/customizing-colors) #94a3b8 |
| Slate 200 | ![#e2e8f0](https://tailwindcss.com/docs/customizing-colors) #e2e8f0 |
| Gray 700 | ![#334155](https://tailwindcss.com/docs/customizing-colors) #334155 |
| Gray 900 | ![#111827](https://tailwindcss.com/docs/customizing-colors) #111827 |


## 🛠 Skills
Javascript, Typescript, React, HTML, CSS, Tailwind


## Run Locally

Clone the project

```bash
  git clone https://github.com/Kamilismayilzade/weather-app
```

Go to the project directory

```bash
  cd weather-app-typescript-react-api
```

Install dependencies

```bash
  npm install
  npm install react-icons --save
  npm install react-spinners


```

Install Dev Dependencies

```bash
  npm create vite@latest
  npm install typescript --save-dev
  npm install -D tailwindcss
  npx tailwindcss init
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPEN_WEATHER_MAP_API_KEY`




## Tech Stack

**Client:** React, TypeScript, TailwindCSS




## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Screenshots

![screencapture-localhost-5173-2023-01-29-10_55_39](https://user-images.githubusercontent.com/84046930/215347781-fd3c4c0a-4318-4381-b2e9-bf04dce381d5.png)

![screencapture-localhost-5173-2023-01-29-10_56_13](https://user-images.githubusercontent.com/84046930/215347789-b129784f-2dfc-4ca5-a428-b98a57264408.png)

![screencapture-localhost-5173-2023-01-29-10_57_31](https://user-images.githubusercontent.com/84046930/215347795-1f765f99-765c-4df1-bc86-0c228ddceafb.png)

![screencapture-localhost-5173-2023-01-29-10_57_53](https://user-images.githubusercontent.com/84046930/215347799-7c1e3635-5a4a-4d09-8d5d-893b35341f28.png)
