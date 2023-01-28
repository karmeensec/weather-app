export type OptionTypes = {
    
    name: string,
    lat: number,
    lon: number,

}

export type ForecastTtypes = {

    name: string,
    country: string,
    sunrise: number,
    sunset: number,

    list: [{ dt: number,
         clouds: {all: number},
          main: { feels_like: number, humidity: number, pressure: number, temp: number, temp_max: number, temp_min: number },
           weather: [{description: string, icon: string, main: string}],
            wind: {speed: number, deg: number, gust: number},
             pop: number,
              visibility: number }]

}