import React from 'react'
import './About.css'

import FelipeImg from '../../images/felipe.png'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-quote">
        <h2>Citação</h2> 
        <p><i className="fa fa-quote-left"/>Meu pequeno computador disse uma coisa tão engraçada esta manhã.<i className="fa fa-quote-right"/></p>
        <h2>- Alan Turing</h2>
      </div>

      <div className="about-image">
        <a href="https://www.instagram.com/feliith/" target="_blank">
          <img src={FelipeImg} alt="Felipe Robles" />
        </a>
      </div>

      <div className="about-text">
        <h2>Olá,</h2>
        <p>sou Felipe Robles, desenvolvedor Front-End iniciante. Estudando independente com sede de conhecimento e experiência. Sempre curioso em busca de aprender novas ferramentas e formas de utilizá-las.</p>
      </div>
    </div>
  )
}

export default About