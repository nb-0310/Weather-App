import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { IconContext } from '../App'

const BriefWeather = ({ data }) => {
  const d = new Date (data['date'] * 1000)
  const date = d.toLocaleDateString ()
  const icon = useContext(IconContext)

  return (
    <div className='sm:ml-[20px] w-[200px] sm:w-[300px] bg-black opacity-30 sm:opacity-50 rounded-2xl text-white py-[10px] pl-[50px] pr-[60px] leading-none'>
      <p className='font-poppins text-[20px] sm:text-[35px] opacity-100 font-medium text-white'>{data['name']}</p>
      <p className='font-josefin text-[50px] sm:text-[75px] font-normal mt-2'>{Math.floor (data['temp'] - 273.15)}°C</p>
      <div className='flex w-full justify-between'>
        <img src={icon} className='w-[35px] h-[20px] sm:w-[55px] sm:h-[35px] transition-all ease-in delay-100' />
        <h1 className='font-poppins font-normal text-[20px] sm:text-[35px]'>{data['weather']}</h1>
      </div>
      <h1 className=' text-orange-400 text-[20px] sm:text-[25px] font-josefin font-normal text-right mt-2'>{date}</h1>
    </div>
  )
}

BriefWeather.propTypes = {
  data: PropTypes.object,
  icon: PropTypes.img
}

export default BriefWeather