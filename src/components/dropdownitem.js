import React, { Component } from 'react';


export class DropDownItem extends Component {

    
    render() {

        let link = 'https://vasp.dev/' + this.props.icon;
        return (
            <a href={ this.props.link } className="menu-item">
                <a href="#" className="icon">
                    <img className="small-icon" src={ this.props.icon }/>     
                </a>
                { this.props.children }
            </a>
        )
    }
}

export default DropDownItem