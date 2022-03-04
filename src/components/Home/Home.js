import React from 'react'
import './Home.css'

import bgVideo from '../../videos/background.mp4'
import Menu from '../Menu'

const Home = () => {
  return (
    <>
        <div className="home" id="home">
            <div className="home-bg">
                <video autoPlay loop muted src={bgVideo}></video>
            </div>

            <div className="home-menu">
                {Menu[0].map((item, index) => {
                    return (
                        <a href={item.to} className="menu-item">{item.title}</a>
                    )
                })}

                <a href="https://pt-br.reactjs.org/" target="_blank" className="react-icon">
                    <i className='fab fa-react' />
                </a>

                {Menu[1].map((item, index) => {
                    return (
                        <a href={item.to} className="menu-item">{item.title}</a>
                    )
                })}
            </div>

            <a href="https://pt-br.reactjs.org/" target="_blank" className="react-icon mobile">
                <i className='fab fa-react' />
            </a>

            <div className="home-text">
                <div className='text-shadow'></div>
                <h1>Welcome to my Portfolio!</h1>
                <p>Este é o meu <strong>Portfólio!</strong> Aqui você verá todos os meus projetos organizados pela ferramenta que eles foram feitos.</p>  
                <p>Arrasta pra cima e veja! ;)</p>
            </div>
        </div>
    </>
  )
}

export default Home