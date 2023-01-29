import './App.css'
import ForecastAll from './ForecastAll';
import ForecastHooks from './hooks/ForecastHooks';
import Loading from './Loading';
import Weather from './Weather'



function App(): JSX.Element {

  const {name, options, forecast, InputFieldChange, SubmitCity, OptionFieldSelect, loading} = ForecastHooks();

  return (

    <main className='relative bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center w-full h-full'>
        
        {forecast ? <ForecastAll weatherData = {forecast} /> :( <><Loading loading = {loading} /><Weather name={name} options={options} InputFieldChange={InputFieldChange} SubmitCity={SubmitCity} OptionFieldSelect={OptionFieldSelect} /></> ) }

    </main>

  )
}

export default App
