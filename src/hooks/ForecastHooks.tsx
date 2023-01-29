import React, { ChangeEvent, useEffect, useState } from 'react'
import { OptionTypes, ForecastTtypes } from '../types/types';


const limit = 5; 

const ForecastHooks = () => {

  const [name, setName] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  const [cityData, setCityData] = useState<OptionTypes | null>(null);
  const [forecast, setForecast] = useState<ForecastTtypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


   const getSearchNames =  function(value: string) {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=${limit}&appid=${import.meta.env.VITE_REACT_API_KEY}`).then(res=> res.json()).then((data)=> setOptions(data));

  }


  const InputFieldChange = function(e: ChangeEvent<HTMLInputElement>) {

    const value = e.target.value;

    setName(value);

    if (value === '') return;

    getSearchNames(value);

  }

  const OptionFieldSelect = function(opt: OptionTypes) {

    setCityData(opt);

  }

  const getWeatherData = (opt: OptionTypes) => {
    setLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${opt.lat}&lon=${opt.lon}&units=metric&appid=${import.meta.env.VITE_REACT_API_KEY}`)
    .then(res => res.json()).then((data)=> {

      const forecastData = {...data.city, list: data.list.slice(0, 16) };

      setForecast(forecastData);
      setLoading(false);

    }).catch((err) => { 
      console.error(err); 
      setLoading(true); 
    });

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


  return {

    name, options, forecast, InputFieldChange, SubmitCity, OptionFieldSelect, loading

  }


}

export default ForecastHooks