import React, { Component } from 'react';
export class DropDownItem extends Component {

    
    render() {

        return (
            <a href={ this.props.link } className="menu-item">
                <a href="#" className="icon">
                    <img className="small-icon" alt="lol" src={ this.props.icon }/>     
                </a>
                { this.props.children }
            </a>
        )
    }
}

export default DropDownItem