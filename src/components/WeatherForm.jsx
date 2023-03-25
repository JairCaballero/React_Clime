import React,{ useState } from 'react'
import style from './weatherform.module.css'

export const WeatherForm = ({ onChangeCity }) => {

  const [city, setCity] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    onChangeCity(city)
  }

  function onChange(e) {
    const val = e.target.value
    val ? setCity(val) : ''
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <input type="text" onChange={onChange} className={style.input} />
    </form>
  )
}
