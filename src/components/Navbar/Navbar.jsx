import React, { useState } from 'react'
import './Navbar.css'
import { Social , Number } from '../Contacts'

const Navbar = () => {

    const [clicked, setClick] = useState(false)

    const handleClick = () => {
        setClick(!clicked)
    }

    const [scrolled, setScroll] = useState(false)

    const scrollNavbar = () => {
        if (window.scrollY > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', scrollNavbar)

    return (
        <>
            <nav className={scrolled ? 'on' : ''}>
                <div className="nav-logo">
                    <a href="/">Fe</a>
                </div>
                <div className="nav-contacts">
                    {Social.map((item, index) => {
                        return (
                            <a key={index} href={item.url} target="_blank" className="nav-contact">
                                <i className={item.icon}></i>
                            </a>
                        )
                    })}
                </div>
                <div className="nav-number">
                    {Number.map((item, index) => {
                        return (
                            <div key={index}>
                                <a href={item.url} target="_blank" className="nav-contact">
                                    <i className={item.icon}></i>
                                </a>
                                <h2>{item.title}</h2>
                            </div>
                        )
                    })}
                </div>
                <div className="nav-burger" onClick={handleClick}>
                    <i className='fa fa-bars'/>
                </div>
            </nav>
            <div className={clicked ? 'sidebar' : 'sidebar hide'}>
                <div className="side-close" onClick={handleClick}>
                    <i className='fa fa-times'/>
                </div>
            </div>
        </>
    )
}

export default Navbar