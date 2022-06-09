import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function headersocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/derekcole0/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/derekcole" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/dcellyy/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headersocials