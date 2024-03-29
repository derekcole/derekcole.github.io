import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const about = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards"></div>
        <article className="about__card">

          <h5> Experience </h5>
          <small> 3+ Years Working </small>

        </article>

        <article className="about__card">

          <h5> Projects </h5>
          <small> 3+ Years Working </small>

        </article>

        <article className="about__card">

          <h5> Clients </h5>
          <small> 3+ Years Working </small>

        </article>
      </div> 

      <p>
        Yeet from stonehill oh yeah
      </p>
      <a href="#contact" className='btn btn-primary'>Contact</a>'
    </div>
    
    </section>
  )
}

export default about