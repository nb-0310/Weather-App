import React from 'react'
import cloud from '../../public/Assets/cloudIcon1.svg'

const BriefWeather = ({ data, icon }) => {
  const d = new Date (data['date'] * 1000)
  const date = d.toLocaleDateString ()

  return (
    <div className='ml-[20px] w-[300px] bg-black opacity-50 rounded-2xl text-white py-[10px] pl-[50px] pr-[60px] leading-none'>
      <p className='font-poppins text-[35px] opacity-100 font-medium text-white'>{data['name']}</p>
      <p className='font-josefin text-[75px] font-normal mt-2'>{Math.floor (data['temp'] - 273.15)}°C</p>
      <div className='flex w-full justify-between'>
        <img src={icon} width="55px" height="35px" className=' transition-all ease-in delay-100' />
        <h1 className='font-poppins font-normal text-[35px]'>{data['weather']}</h1>
      </div>
      <h1 className=' text-orange-400 text-[25px] font-josefin font-normal text-right mt-2'>{date}</h1>
    </div>
  )
}

export default BriefWeather