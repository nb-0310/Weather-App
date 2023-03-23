import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import API_KEY from '../APIkey'
import BriefWeather from './BriefWeather'
import DetailedWeather from './DetailedWeather'

const WeatherParent = ({ searchTerm, getUIData, icon }) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`

  const [apiData, setApiData] = useState()
  let error = false

  useEffect(() => {
    if (searchTerm) {
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          setApiData(data)
        })
        .catch((err) => {
          error = true
          console.error(err)
        })
    }
  }, [searchTerm])
  
  if (error) return (
    <div className='text-red-700 text-lg font-poppins'>City not found!</div>
  )

  if (!apiData) return (
    <div></div>
  )

  const Weather = {
    'id': apiData.weather[0].id,
    'name': apiData.name,
    'temp': apiData.main.temp,
    'weather': apiData.weather[0].main,
    'date': apiData.dt,
    'feels like': apiData.main.feels_like,
    'humidity': apiData.main.humidity,
    'visibility': apiData.visibility,
    'wind speed': apiData.wind.speed * 3.6,
    'pressure': apiData.main.pressure
  }

  if (apiData && Weather['id']) getUIData (Weather['id'])

  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center sm:justify-between h-[70vh] sm:h-auto'>
      <BriefWeather data={Weather} icon = {icon} />
      <DetailedWeather data={Weather} />
    </div>
  )
}

WeatherParent.propTypes = {
  searchTerm: PropTypes.string,
  getUIData: PropTypes.func
}

export default WeatherParent