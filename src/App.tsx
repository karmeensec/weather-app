import './App.css'
import ForecastHooks from './hooks/ForecastHooks';
import Weather from './Weather'



function App(): JSX.Element {

  const {name, options, forecast, InputFieldChange, SubmitCity, OptionFieldSelect} = ForecastHooks();


  return (

    <main className='relative bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center w-full h-[100vh]'>
        
        {forecast ? ('Forecast') :( <Weather name = {name} options = {options} InputFieldChange = {InputFieldChange} SubmitCity = {SubmitCity} OptionFieldSelect = {OptionFieldSelect} /> ) }

    </main>

  )
}

export default App
