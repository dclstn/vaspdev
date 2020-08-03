import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class DropDownItem extends Component {

    
    render() {

        return (
            <Link to={ this.props.link }>
                <a className="menu-item"> 
                    
                        <a href="#" className="icon">
                            <img className="small-icon" alt="lol" src={ this.props.icon }/>     
                        </a>
                        { this.props.children }
                </a>
            </Link>
        )
    }
}

export default DropDownItem