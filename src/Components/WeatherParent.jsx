import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import API_KEY from '../APIkey'
import BriefWeather from './BriefWeather'
import DetailedWeather from './DetailedWeather'

const WeatherParent = ({ searchTerm, getUIData }) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`

  const [apiData, setApiData] = useState()
  const [err, setErr] = useState(false)

  useEffect(() => {
    setErr (false)
    if (searchTerm) {
      fetch(url)
        .then(res => {
          if (res.ok) {
            setErr (false)
            console.log (res)
            return res.json()
          } else {
            setErr (true)
          }
        })
        .then((data) => {
          setApiData(data)
          console.log (data)
        })
        .catch((e) => {
          setErr (true)
        })
    }

  }, [searchTerm, url])

  if (err === true) {
    return (
      <div className='absolute left-10 top-20 font-poppins'>
        <h1 className='text-3xl font-bold text-red-400'>City Not Found! &#128557;</h1>
        <p className='text-lg text-white'>Please enter a valid nity name</p>
      </div>
    )
  }

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
      <BriefWeather data={Weather} />
      <DetailedWeather data={Weather} />
    </div>
  )
}

WeatherParent.propTypes = {
  searchTerm: PropTypes.string,
  getUIData: PropTypes.func
}

export default WeatherParent