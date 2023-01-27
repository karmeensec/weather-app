import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { ForecastTtypes, OptionTypes } from './types'
import Weather from './Weather'

const limit = 5; 

function App(): JSX.Element {

  const [name, setName] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  const [cityData, setCityData] = useState<OptionTypes | null>(null);
  const [forecast, setForecast] = useState<ForecastTtypes | null>(null);



   const getSearchNames =  function(value: string) {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=${limit}&appid=${import.meta.env.VITE_REACT_API_KEY}`).then(res=> res.json()).then((data)=> setOptions(data));

  }


  const InputFieldChange = function(e: ChangeEvent<HTMLInputElement>) {

    const value = e.target.value.trim();

    setName(value);

    if (value === '') return;

    getSearchNames(value);

  }

  const OptionFieldSelect = function(opt: OptionTypes) {

    setCityData(opt);

  }

  const getWeatherData = (opt: OptionTypes) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${opt.lat}&lon=${opt.lon}&units=metric&appid=${import.meta.env.VITE_REACT_API_KEY}`).then(res => res.json()).then((data)=> console.log(data));

  }
  

  const SubmitCity = function() {

    if (!cityData) return;

    getWeatherData(cityData);

  }




  useEffect( ()=> {

    if (cityData) {

      setName(cityData.name);
      setOptions([]);

    }

  },  [cityData]);



  return (

    <main className='relative bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center w-full h-[100vh]'>
        
        {forecast ? ('Forecast') :( <Weather name = {name} options = {options} InputFieldChange = {InputFieldChange} SubmitCity = {SubmitCity} OptionFieldSelect = {OptionFieldSelect} /> ) }

    </main>

  )
}

export default App
