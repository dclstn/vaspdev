import React, { Component } from 'react';


export class NavItem extends Component {

    state = {
        toggled: this.props.toggled,
    }

    toggleDropdown = () => {
        const toggledIsOpen = this.state.toggled ? false : true
        this.setState({
            toggled: toggledIsOpen
        })

        console.log(this.state.toggled)
    }

    toggleDropdownOff = () => {
        this.setState({
            toggled: true,
        })

        console.log(this.state.toggled)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = (e) => {
        if(this.node.contains(e.target)) {
            return;
        }

        this.toggleDropdownOff();
    }

    
    render() {
        return (
           
            <li className="nav-item" ref={node => this.node = node}>
                <a href="#" className="icon-button" onClick={ this.toggleDropdown }>
                    <img className="small-icon" src={ this.props.icon }/>       
                </a>

                { !this.state.toggled && this.props.children }
            </li>
        )
    }
}

export default NavItem