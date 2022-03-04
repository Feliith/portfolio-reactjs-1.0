import React, { Component } from 'react'
import './Navbar.css'
import { Social , Number } from '../Contacts'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <>
                <nav>
                    <div className="nav-logo">
                        <a href="/">Fe</a>
                    </div>
                    <div className="nav-contacts">
                        {Social.map((item, index) => {
                            return (
                                <a href={item.url} target="_blank" className="nav-contact">
                                    <i className={item.icon}></i>
                                </a>
                            )
                        })}
                    </div>
                    <div className="nav-number">
                        {Number.map((item, index) => {
                            return (
                                <>
                                    <a href={item.url} target="_blank" className="nav-contact">
                                        <i className={item.icon}></i>
                                    </a>
                                    <h2>{item.title}</h2>
                                </>
                            )
                        })}
                    </div>
                    <div className="nav-burger" onClick={this.handleClick}>
                        <i className='fa fa-bars'/>
                    </div>
                </nav>
                <div className={this.state.clicked ? 'sidebar' : 'sidebar hide'}>
                    <div className="side-close" onClick={this.handleClick}>
                        <i className='fa fa-times'/>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar