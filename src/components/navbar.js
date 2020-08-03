import React, { Component } from 'react';
import NavItem from './navitem.js';
import DropDownMenu from './dropdownmenu.js';
import DropDownItem from './dropdownitem.js';
import DropDownItemInt from './dropdownitemint.js';
import Animated from '../components/animated.js'

import GithubLogo from './icons/github.svg';
import TwitterLogo from './icons/twitter.svg';
import DefaultLogo from './icons/user.svg';
import YoutubeLogo from './icons/youtube.svg';
import TwitchLogo from './icons/twitch.svg';
import CameraLogo from './icons/camera.svg';
import StarLogo from './icons/star.svg';
import ComputerLogo from './icons/computer.svg';

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <NavItem icon={ DefaultLogo } toggled="false">
                        <DropDownMenu>
                            <DropDownItem icon={ GithubLogo } link="https://github.com/dclstn">GitHub</DropDownItem>
                            <DropDownItem icon={ TwitterLogo } link="https://twitter.com/vasssp">Twitter</DropDownItem>
                            <DropDownItem icon={ TwitchLogo } link="https://www.twitch.tv/vasp">Twitch</DropDownItem>
                            <DropDownItem icon={ YoutubeLogo } link="https://www.youtube.com/channel/UCzWw-_uP1MWxDxbI7_13s2w?view_as=subscriber">Youtube</DropDownItem>
                        </DropDownMenu>
                    </NavItem>

                    <NavItem icon={ CameraLogo } toggled="false">
                        <DropDownMenu>
                            <DropDownItemInt icon={ DefaultLogo } link="/about">About</DropDownItemInt>
                            <DropDownItem icon={ StarLogo } link="https://streamlabs.com/vasp1">Donate</DropDownItem>
                            <DropDownItem icon={ TwitchLogo } link="https://www.twitch.tv/products/vasp/ticket">Subscribe</DropDownItem>
                            <DropDownItemInt icon={ ComputerLogo } link="/spec">PC Specification</DropDownItemInt>
                        </DropDownMenu>
                    </NavItem>
                </ul>
            </nav>
        )
    }
}

export default NavBar;