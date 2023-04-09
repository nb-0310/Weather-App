import { useState, useEffect, createContext } from 'react'
import './index.css'
import cloud1 from './Assets/cloudy1.jpg'
import cloudIcon1 from './Assets/cloudIcon1.svg'
import cloud2 from './Assets/cloudy2.jpg'
import cloudIcon2 from './Assets/cloudIcon2.svg'
import thunder from './Assets/thunderstorm.jpg'
import thunderIcon from './Assets/thunderIcon.svg'
import snow from './Assets/snowy.jpg'
import snowIcon from './Assets/snowIcon.svg'
import rain from './Assets/rainy.jpg'
import rainIcon from './Assets/rainIcon.svg'
import sunny from './Assets/sunny.png'
import sunnyIcon from './Assets/sunnyIcon.svg'
import fog from './Assets/foggy.jpg'
import fogIcon from './Assets/fogIcon.svg'
import wallpaper from '../public/wallpaper.jpg'
import Search from './Components/Search'
import WeatherParent from './Components/WeatherParent'
import Footer from './Components/Footer'

export const IconContext = createContext(null)

function App() {

  const [data, setData] = useState()
  const [ui, setUI] = useState()
  const [img, setImg] = useState(wallpaper)
  const [icon, setIcon] = useState(cloudIcon1)

  const recieveData = (data) => {
    setData (data)
  }

  const UIData = (data) => {
    setUI (data)
  }

  useEffect(() => {
    if (ui !== undefined) {
      if (ui >= 200 && ui <= 232) {
        setImg (thunder)
        setIcon (thunderIcon)
      } else if (ui >= 300 && ui <= 531) {
        setImg (rain)
        setIcon (rainIcon)
      } else if (ui >= 600 && ui <= 622) {
        setImg (snow)
        setIcon (snowIcon)
      } else if (ui >= 701 && ui <= 781) {
        setImg (fog)
        setIcon (fogIcon)
      } else if (ui == 800) {
        setImg (sunny)
        setIcon (sunnyIcon)
      } else if (ui == 801 || ui == 802) {
        setImg (cloud1)
        setIcon (cloudIcon1)
      } else if (ui == 803 || ui == 804) {
        setImg (cloud2)
        setIcon (cloudIcon2)
      } else {
        setImg (wallpaper)
      }
    }
  }, [ui])

  return (
    <div className="App w-full h-screen overflow-hidden">
      <img src={img} className=" w-full h-screen object-cover sm:object-cover absolute -z-20" />

      <Search getData = {recieveData} />

      <IconContext.Provider value = {icon}>
        <WeatherParent searchTerm = {data} getUIData = {UIData} icon = {icon} />
      </IconContext.Provider>

      <Footer />

    </div>
  )
}

export default App