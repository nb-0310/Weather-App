import React from 'react'
import PropTypes from 'prop-types'

const DetailedWeather = ({ data }) => {
  return (
    <div className='flex justify-between items-center sm:mr-[20px] py-3 sm:py-3 w-[300px] sm:w-[400px] bg-black opacity-30 sm:opacity-50 rounded-2xl text-white sm:py-[5px] pl-[50px] pr-[60px]'> 
        <div className='flex justify-start flex-col'>
            <h1 className='text-white sm:text-[25px] font-normal font-poppins'>Feels Like</h1>
            <h1 className='text-white sm:text-[25px] font-normal font-poppins'>Humidity</h1>
            <h1 className='text-white sm:text-[25px] font-normal font-poppins'>Wind Speed</h1>
            <h1 className='text-white sm:text-[25px] font-normal font-poppins'>Visibility</h1>
            <h1 className='text-white sm:text-[25px] font-normal font-poppins'>Pressure</h1>
        </div>
        <div className='flex justify-end flex-col text-right'>
            <h1 className='sm:text-[25px] font-normal font-poppins text-orange-400'>{Math.floor (data['feels like'] - 273.15)} °C</h1>
            <h1 className='sm:text-[25px] font-normal font-poppins text-orange-400'>{data['humidity']} %</h1>
            <h1 className='sm:text-[25px] font-normal font-poppins text-orange-400'>{Math.floor(data['wind speed'])} KM/H</h1>
            <h1 className='sm:text-[25px] font-normal font-poppins text-orange-400'>{Math.floor(data['visibility']) / 1000} KM</h1>
            <h1 className='sm:text-[25px] font-normal font-poppins text-orange-400'>{data['pressure']} hPa</h1>
        </div>
    </div>
  )
}

DetailedWeather.propTypes = {
    data: PropTypes.object
}

export default DetailedWeather