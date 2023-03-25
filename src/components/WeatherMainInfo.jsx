import React from 'react'
import style from './weatherMainInfo.module.css'

export const WeatherMainInfo = ({weather}) => {
  return (
    <div className={style.mainInfo}>
      <div className={style.city} >{weather?.location.name}</div>
      <div className={style.country} >{weather?.location.country}</div>
      <div className={style.row}>
        <div>
          {/* ? -> propiedad opcional por que puede ser null */}
          <img src={`http:${weather?.current.condition.icon}`}
            width='128'
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div className={style.condition} >{weather?.current.condition.text}</div>
          <div className={style.current} >{weather?.current.temp_c}°</div>
        </div>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158951.13209079232!2d${weather?.location.lon}9!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1677966000039!5m2!1ses!2sco`}
        width="600"
        height="450"
        style={ {border:0} }
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      {console.log()}
    </div>
  )
}
