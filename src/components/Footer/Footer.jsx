import './Footer.css'
import React from 'react'

import { Social, Number } from '../Contacts'

const Footer = () => {

    const handleClick = () => {
        copyNumber()
    }

    const copyNumber = () => {
        Number.map((item, index) => {
            navigator.clipboard.writeText(item.title)
        })
    }

    return (
        <div className='footer' id='contacts'>
            <h2>Se gostou do meu trabalho, e tem interesse em contratar meus serviços, entre em contado comigo em alguma dessas redes sociais:</h2>
            <div className="footer-social">
                {Social.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="_blank">
                            <i className={item.icon}></i>
                            {item.title}
                        </a>
                    )
                })}
            </div>
            {Number.map((item, index) => {
                return (
                    <div key={index} className="footer-number">
                        <a href={item.url} target="_blank">
                            <i className={item.icon}></i>
                            {item.title}
                        </a>
                        <button onClick={handleClick}>
                            <i className='fa fa-copy'></i>
                            <p>Copiar número</p>
                        </button>
                    </div>
                )
            })}
        </div>
  )
}

export default Footer