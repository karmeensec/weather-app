import { useState } from 'react'
import './App.css'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {FiCornerRightDown} from 'react-icons/fi'

function App() {

  return (

    <main className='relative bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center w-full h-[100vh]'>
        
        <section className='fixed top-0 left-50 w-full h-full flex items-center justify-center flex-col p-4 md:px-10 lg:p-24 md:max-w-[700px] lg:h-[500px]'>
            
            <TiWeatherPartlySunny className='text-8xl text-blue-50 ' />

            <h1 className='text-5xl font-bold text-blue-50 text-center my-2'>Weather <span className='font-medium text-6xl'>Forecast</span> </h1>

            <p className='flex items-center justify-center text-2xl font-medium text-blue-100 p-4'>Enter your location below <span className='ml-2 text-3xl'> <FiCornerRightDown /> </span>  </p>

            <input type='text' value={''} className='px-24 py-2 my-2 bg-white opacity-10 border-solid border-2 border-blue-100 rounded-md outline-none text-blue-50 shadow-inner' />

            <button className='py-2 px-10 my-4 bg-blue-50 text-xl font-medium border-solid border-2 border-blue-200 rounded-md  transition duration-150 ease-out md:ease-in hover:scale-105'>Search</button>

        </section>

    </main>

  )
}

export default App
