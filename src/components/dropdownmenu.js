import React, { Component } from 'react';

export class DropDownMenu extends Component {
    
    render() {
        return (
            <div className="drop-down">
                { this.props.children }
            </div>
        )
    }
}

export default DropDownMenu