import React from 'react'
import { ForecastTtypes } from './types/types'
import {WiCelsius} from 'react-icons/wi'
import {VscCircleOutline} from 'react-icons/vsc'

type ForecastAllProps = {

  weatherData: ForecastTtypes,

}

const ForecastAll = ( { weatherData }: ForecastAllProps ): JSX.Element => {

  const todayWeather = weatherData.list[0];

  return (

    <div className='w-full h-full bg-slate-400 bg-opacity-10 md:max-w-[1300px] backdrop-blur-lg drop-shadow-lg m-4 py-4 md:py-4'>

        <section className='text-center border-b-2 border-slate-600 rounded-md py-4'>

          <h1 className='text-5xl font-bold text-blue-50'> {weatherData.name}, <span className='font-extrabold'> {weatherData.country} </span> </h1>

          <h2 className='text-3xl font-semibold text-blue-50 my-2 flex justify-center items-center'> {Math.round(todayWeather.main.temp) } <WiCelsius /> </h2>

          <p className='text-2xl font-medium text-blue-50 my-2 flex justify-center items-center'>  {todayWeather.weather[0].main} <VscCircleOutline /> {todayWeather.weather[0].description} </p>
          
          <div className='flex justify-center items-center'>
            <img className='text-2xl mx-auto' src={`https://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`} alt={`weather-icon-${todayWeather.weather[0].description}`} />
          </div>
          
          <p className='text-2xl font-medium text-blue-50 my-2 flex justify-center items-center'> Max: {Math.ceil(todayWeather.main.temp_max )} <WiCelsius />  Min: {Math.floor(todayWeather.main.temp_min)} <WiCelsius /> </p>

        </section>


        <section className='flex overflow-x-scroll my-4 py-4 text-2xl font-bold text-blue-50 shadow-2xl border-t-2 border-slate-600  border-b-2  rounded-md '>

           {weatherData.list.map((weather, i) => {

                return <div key={i} className = 'inline-block text-center flex-shrink-0'>

                      <p> { i === 0 ? 'Now' :  (new Date(weather.dt * 1000).getHours()).toString().concat(':00') } </p>
                      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather-icon-${weather.weather[0].description}`} />
                      <p className='flex justify-center items-center'>{Math.ceil(todayWeather.main.temp_max )} <WiCelsius /></p>

                </div>

           })} 

        </section>


        <section>

           

        </section>


    </div>

  )
}

export default ForecastAll