import React from 'react'
import style from './StatisticsCard.module.css'
const StatisticsCard = ({id,title, value}) => {
  return (
  
  <div className={style.card}>
<p>{value}</p>
<p>{title}</p>
 </div>
 
  )
}

export default StatisticsCard