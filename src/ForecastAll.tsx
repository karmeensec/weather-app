import React from 'react'
import { ForecastTtypes } from './types/types'
import {WiBarometer, WiCelsius, WiHumidity, WiNightShowers, WiThermometer} from 'react-icons/wi'
import {VscCircleOutline} from 'react-icons/vsc'
import {GiSunrise, GiSunset, GiWindSlap} from 'react-icons/gi';
import { getHumidity, getPrecipitation, getPressure, getSunTime, getVisibility, getWindDirection } from './helper/helper';
import {MdOutlineVisibility} from 'react-icons/md'

type ForecastAllProps = {

  weatherData: ForecastTtypes,

}

const ForecastAll = ( { weatherData }: ForecastAllProps ): JSX.Element => {

  const todayWeather = weatherData.list[0];

  return (

    <div className='w-full h-full bg-slate-400 bg-opacity-10 md:max-w-[1400px] backdrop-blur-lg drop-shadow-lg shadow-xl m-4 py-4 md:py-4 border-2 border-slate-500 rounded-lg'>

        <section className='text-center border-b-2 border-slate-600 rounded-md py-4'>

          <h1 className='text-5xl font-bold text-blue-50'> {weatherData.name}, <span className='font-extrabold'> {weatherData.country} </span> </h1>

          <h2 className='text-3xl font-semibold text-blue-50 my-2 flex justify-center items-center'> {Math.round(todayWeather.main.temp) } <WiCelsius /> </h2>

          <p className='text-2xl font-medium text-blue-50 my-2 flex justify-center items-center'>  {todayWeather.weather[0].main} <VscCircleOutline /> {todayWeather.weather[0].description} </p>
          
          <div className='flex justify-center items-center'>
            <img className='text-2xl mx-auto' src={`https://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`} alt={`weather-icon-${todayWeather.weather[0].description}`} />
          </div>
          
          <p className='text-2xl font-medium text-blue-50 my-2 flex justify-center items-center'> Max: {Math.ceil(todayWeather.main.temp_max )} <WiCelsius />  Min: {Math.floor(todayWeather.main.temp_min)} <WiCelsius /> </p>

        </section>


        <section className='flex overflow-x-scroll my-4 py-8 text-2xl font-bold text-blue-50 shadow-2xl border-t-2 border-slate-600  border-b-2  rounded-md '>

           {weatherData.list.map((weather, i) => {

                return <div key={i} className = 'inline-block text-center flex-shrink-0'>

                      <p> { i === 0 ? 'Now' :  (new Date(weather.dt * 1000).getHours()).toString().concat(':00') } </p>
                      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather-icon-${weather.weather[0].description}`} />
                      <p className='flex justify-center items-center'>{Math.ceil(todayWeather.main.temp_max )} <WiCelsius /></p>

                </div>

           })} 

        </section>

            

        <section className='flex justify-center flex-wrap gap-8 text-2xl font-medium text-blue-50 border-t-2 border-slate-600 rounded-md'>

            <div className='flex flex-col items-center justify-center py-4 my-4 bg-slate-800 w-[200px] h-[100px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <GiSunrise /></span> 
                <span className='my-2'> {getSunTime(weatherData.sunrise)} </span>

            </div>

            <div className='flex flex-col items-center justify-center py-4 my-4 bg-slate-800 w-[200px] h-[100px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <GiSunset /></span> 
                <span className='my-2'> {getSunTime(weatherData.sunset)} </span>

            </div>

            <div className='flex gap-6 flex-wrap items-center justify-center py-4 my-4 bg-slate-800 w-[300px] h-[150px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <GiWindSlap /></span> 
                <h4 className='text-2xl font-medium text-blue-50'> Wind </h4>
                <p> {Math.round(todayWeather.wind.speed)} km\h </p>
                <p> {getWindDirection(Math.round(todayWeather.wind.deg))} </p>
                <p> Gusts: {todayWeather.wind.gust.toFixed(1)} km\h </p>

            </div>


            <div className='flex gap-4 flex-wrap items-center justify-center py-4 my-4 bg-slate-800 w-[300px] h-[100px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <WiThermometer /></span> 
                <h4 className='text-2xl font-medium text-blue-50 flex'> Feels like: &nbsp; {Math.round(todayWeather.main.feels_like)} <WiCelsius /> </h4>
                <p> {Math.round(todayWeather.main.feels_like) < Math.round(todayWeather.main.temp) ? 'Cold' : 'Warm' } </p>

            </div>

            <div className='flex gap-4 flex-wrap items-center justify-center py-4 my-4 bg-slate-800 w-[300px] h-[120px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <WiHumidity /></span> 
                <h4 className='text-2xl font-medium text-blue-50'> {todayWeather.main.humidity} % </h4>
                <p> {getHumidity(todayWeather.main.humidity)} </p>

            </div>

            <div className='flex gap-4 flex-wrap items-center justify-center py-4 my-4 bg-slate-800 w-[350px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <WiNightShowers /></span> 
                <h4 className='text-2xl font-medium text-blue-50'> Precipitation </h4>
                <p> {Math.round(todayWeather.pop * 1000)} % </p>
                <p> {getPrecipitation(todayWeather.pop)}</p>
                <p> Clouds at {todayWeather.clouds.all}  % </p>

            </div>


            <div className='flex gap-4 flex-wrap items-center justify-center py-4 my-4 bg-slate-800 w-[300px] h-[120px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <WiBarometer /></span> 
                <h4 className='text-2xl font-medium text-blue-50'> Pressure </h4>
                <p> {todayWeather.main.pressure} hPa </p>
                <p> {getPressure(todayWeather.main.pressure)} than standard</p>

            </div>

            <div className='flex gap-4 flex-wrap items-center justify-center py-4 my-4 bg-slate-800 w-[300px] h-[120px] backdrop-blur-lg drop-shadow-lg bg-opacity-10 rounded-md'>

                <span className='icon' style={{ fontSize: '2rem', color: '#eff6ff' }}> <MdOutlineVisibility /></span> 
                <h4 className='text-2xl font-medium text-blue-50'> Visibility </h4>
                <p> {(todayWeather.visibility / 1000).toFixed(1) } km </p>
                <p> {getVisibility(todayWeather.visibility)} </p>

            </div>

        </section>


    </div>

  )
}

export default ForecastAll