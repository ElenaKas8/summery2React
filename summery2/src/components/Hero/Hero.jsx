import React from 'react'
import style from './Hero.module.css'
import Button from '../Button/Button'
import img from './../../assets/images/hero_img.png';



const Hero = () => {
  return (
    <div className={style.hero}>
    <div className='wrapper_2'>
        <h1>ROBO.SCHOOL</h1>
        <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
        <Button />
     </div>
        <div>
        <img src={img} alt={'hero'}/>
        </div>
           
    </div>
  )
}


  
export default Hero