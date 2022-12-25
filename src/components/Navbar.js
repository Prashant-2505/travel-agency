import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menuitem } from './MenuItem'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>TRAVELLERS</h1>

                <ul className="nav-menu">
                    {Menuitem.map((item, index) => {
                        return (
                            <li key ={index}>
                                <a className={item.cName} href={item.url}><ion-icon  name={item.icon}></ion-icon>{item.title}</a>
                            </li>
                        )
                    })}

                    <button>Sign-up</button>
                </ul>
          
            </nav>
        )
    }
}
