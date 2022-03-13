import React from 'react'
import './Portfolio.css'

import Tools from '../Tools'
import Projects from '../Projects'

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
                <div className="tools-conteiner">
                    <div className='portfolio-title'>
                        <h1>My <strong>Portfolio</strong></h1>
                        <h2>Selecione uma ferramenta:</h2>
                    </div>
                    <div className='portfolio-tools'>
                        {Tools.map((item, index) => {
                            return (
                                <button key={index} className='tool-btn' style={{background: item.color}}>
                                    <i className={item.icon} />
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="projects-conteiner">
                    {Projects.map((item, index) => {
                        return (
                            <div key={index} className="project-wrap">
                                <img src={item.src} alt={item.title} className="project-image" />
                                <h2>{item.title}</h2>
                                <div className="project-inside">
                                    <i className={item.icon}></i>
                                    <a href={item.code} target="_blank"><i className="fa fa-code"></i>Código</a>
                                    <a href={item.url} target="_blank"><i className="fa fa-globe"></i>Site</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
  )
}

export default Portfolio