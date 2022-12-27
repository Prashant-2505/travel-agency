import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menuitem } from './MenuItem'
import './Navbar.css'

export default class Navbar extends Component {
    // here we declare a state intialy false; means its intial show menu sahrp 
    state = {clicked: false}

    // in handleclick event we set the state
    handelclick = ()=>
    {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>TRAVELERS</h1>

                <div className="menu-icon" onClick={this.handelclick}>
                {/* its a if else condition if we clicked if close sahrp icon is there then show menu sharp else menu sharp icon is there then show close sharp */}
                {/* if we clicked then it check currently stae is waht ,, it is false means it will else condtion icon */}
                    <ion-icon name={this.state.clicked?"close-sharp":"menu-sharp"}></ion-icon> 
                </div>

                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                    {Menuitem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}

                    <button>Sign-up</button>
                </ul>

            </nav>
        )
    }
}

// close-sharp