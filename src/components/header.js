import React, { Component } from 'react';
import Logo from '../sleeping.png'
import './header.css';


export class Header extends Component {
    
    render() {
        return (
            
            <div className="header">
                <img src={ Logo } className="Logo" alt="Profile"></img>
                <div className="header-text">Vasp</div>
            </div>
        )
    }
}

export default Header