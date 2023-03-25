import React from 'react'
import style from './loading.module.css'

export const Loading = () => {
  return (
    <div className={style.loadingContainer} >
      <div className={style.loading} >
        <div></div>
      </div>
    </div>
  )
}
