import React, { Component } from 'react';
import NavItem from './navitem.js';
import DropDownMenu from './dropdownmenu.js';
import DropDownItem from './dropdownitem.js';

import GithubLogo from './icons/038-github.svg';
import TwitterLogo from './icons/043-twitter.svg';
import DefaultLogo from './icons/user.svg';
import YoutubeLogo from './icons/011-youtube.svg';
import TwitchLogo from './icons/twitch1.svg';

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
                </ul>
            </nav>
        )
    }
}

export default NavBar;