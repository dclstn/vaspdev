import React, { Component } from 'react';

export class Button extends Component {
    
    render() {
        return (
            
            <button className="btn">
                <div className="text">
                    { this.props.children }
                </div>
            </button>
        )
    }
}

export default Button