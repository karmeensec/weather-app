import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {FiCornerRightDown} from 'react-icons/fi'
import { OptionTypes } from './types'

const limit = 5; 

function App(): JSX.Element {

  const [name, setName] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  const [cityData, setCityData] = useState<OptionTypes | null>(null);



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

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${opt.lat}&lon=${opt.lon}&units=metric&appid=${import.meta.env.VITE_REACT_API_KEY}`).then(res => res.json()).then((data)=> console.log(data));

  }



  useEffect( ()=> {

    if (cityData) {

      setName(cityData.name);
      setOptions([]);
      setName('');

    }

  },  [cityData]);



  return (

    <main className='relative bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center w-full h-[100vh]'>
        
        <section className='fixed top-0 left-50 w-full h-full flex items-center justify-center flex-col p-4 md:px-10 lg:p-24 md:max-w-[700px] lg:h-[500px]'>
            
            <TiWeatherPartlySunny className='text-8xl text-blue-50 ' />

            <h1 className='text-5xl font-bold text-blue-50 text-center my-2'>Weather <span className='font-medium text-6xl'>Forecast</span> </h1>

            <p className='flex items-center justify-center text-2xl font-medium text-blue-100 p-4'>Enter your location below <span className='ml-2 text-3xl'> <FiCornerRightDown /> </span>  </p>

            <div className='relative flex align-center justify-center flex-column'>

              <div className='flex flex-col items-center justify-center'>
                <input type='text' value={name} className='w-80 sm:w-48 md:w-48 lg:w-96 py-2 my-2 bg-blue-50 text-2xl text-gray-900 border-solid border-2 border-blue-100 rounded-md outline-none text-blue-50 shadow-inner' onChange={InputFieldChange} />

                <button className='py-2 px-10 my-4 bg-blue-50 text-xl font-medium border-solid  border-t-[3px] border-gray-700 rounded-md  transition duration-150 ease-out md:ease-in hover:scale-105 hover:border-l-[3px] hover:border-r-[3px]' >Search</button> 
              </div>


              <ul className='w-96 h-50 lg:w-96  md:w-48 min-[320px]:w-80 absolute top-14 bg-transparent backdrop-blur-2xl rounded-md'>
                {options.map((opt: OptionTypes, i: number) => {
                    return <li key={opt.name + '-' + i}>
                      <button className='w-full cursor-pointer text-2xl font-medium text-blue-100 px-4 py-2 hover:bg-slate-200 hover:text-slate-800 hover:backdrop-blur-md' onClick={ ()=> OptionFieldSelect(opt) }>{opt.name}</button>
                    </li>
                })}
              </ul>

            </div>

        </section>

    </main>

  )
}

export default App
