import React from 'react'
import { ForecastTtypes } from './types/types'

type ForecastAllProps = {

  weatherData: ForecastTtypes,

}

const ForecastAll = ( { weatherData }: ForecastAllProps ): JSX.Element => {

  return (

    <div>Forecast</div>

  )
}

export default ForecastAll