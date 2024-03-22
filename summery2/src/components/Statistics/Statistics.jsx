import React from 'react'
import style from './Statistics.module.css'
import StatisticsContainer from '../StatisticsContainer/StatisticsContainer'
const Statistics = () => {
  return (
    <section className={style.statistics}>
<p>
    <span>Robo School–</span>это учреждение для формирования кадрового педагогического резерва в сфере робототехникии программирования
</p>
<StatisticsContainer />
    </section>
  )
}

export default Statistics