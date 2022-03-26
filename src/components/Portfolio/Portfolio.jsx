import React, { Component } from 'react'
import './Portfolio.css'

import Tools from '../Tools'
import Projects from '../Projects'

const initialState = 'html css js react'

class Portfolio extends Component {

    state = {
        tools: initialState,
    }

    setTools = (e) => {
        const tool = e.currentTarget.getAttribute('id')
        const active = e.currentTarget.getAttribute('class')
        this.setState({
            tools: active.includes('active') ? initialState : tool
        })
    }

    render() {
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
                                    <button 
                                    key={index} 
                                    className={item.id === this.state.tools ? 'tool-btn active' : 'tool-btn'} 
                                    id={item.id} 
                                    style={{background: item.color}} 
                                    onClick={this.setTools}>
                                        <i className={item.icon} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="projects-conteiner">
                        {Projects.map((item, index) => {
                            if (item.id.includes(this.state.tools) || this.state.tools.includes(item.id)) {
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
                            }
                        })}
                    </div>
            </div>
    )}
}

export default Portfolio