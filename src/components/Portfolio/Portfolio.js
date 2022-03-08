import React from 'react'
import './Portfolio.css'

import Tools from '../Tools'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
            <div className='portfolio-title'>
                <h1>My <strong>Portfolio</strong></h1>
                <h2>Selecione uma ferramenta:</h2>
            </div>
            <div className='portfolio-tools'>
                {Tools.map((item, index) => {
                    return (
                        <button className='tool-btn' style={{background: item.color}}>
                            <i className={item.icon} />
                        </button>
                    )
                })}
            </div>
    </div>
  )
}

export default Portfolio