import React from 'react'
import './header.css'
import ME from '../../assets/me.jpg'
import HeaderSocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5> Hello I'm</h5>
      <h1 id="name"> Derek Cole</h1>
      <h5 className="text-light">Fullstack developer</h5>
      <HeaderSocials/>

      <div className="me">
      <img src={ME} alt="picture of me"/>
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header