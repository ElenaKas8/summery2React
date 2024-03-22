import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <header className={style.header}>
      <div className='wrapper_1'>
        <p>ROBO.SCHOOL</p>
       <nav>
        <ul>
            <li>О школе</li>
            <li>Тренеры</li>
            <li>Стоимость</li>
        </ul>
       </nav>
       <p>+38 050 123 45 67</p>
       </div>
    </header>
  )
}

export default Header