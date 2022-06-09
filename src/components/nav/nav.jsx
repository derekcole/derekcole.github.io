import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'

function nav() {
  return (
    <nav>
      <a href="#contact"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineHome/></a>
      <a href="#experience"><AiOutlineHome/></a>
      <a href="#footer"><AiOutlineHome/></a>
    </nav>
  )
}

export default nav