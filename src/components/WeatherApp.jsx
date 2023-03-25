import React, { useState,useEffect } from 'react'
import { WeatherForm } from './WeatherForm'
import { WeatherMainInfo } from './WeatherMainInfo'
import styles from './weatherApp.module.css'
import { Loading } from './Loading'

export const WeatherApp = () => {

  const [weather, setWeather] = useState(null)

  useEffect ( () => {
    loadInfo()
  }, [])

  useEffect ( () => {
    // titulo de la pagina -> canvia el titulo
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  async function loadInfo (city = 'london') {
    try {
      //con create-react-app es asi -> process.env
      const url = import.meta.env.VITE_URL
      const key = import.meta.env.VITE_KEY
      const request = await fetch(`${url}key=${key}&q=${city}&aqi=no`)
      const json = await request.json()
      setTimeout(() => {
        setWeather(json)
      }, 2000);
    } catch (error) {
      console.error(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div className={styles.weatherContainer} >
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading /> }
    </div>
  )
}
