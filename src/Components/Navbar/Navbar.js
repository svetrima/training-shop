import React from 'react';
import './Navbar.css';
import Phone from './assets/phone.png';
import Clock from './assets/clock.png';
import Location from './assets/location.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import pinterest from './assets/pinterest.png';
import Logo from './assets/CleverShop.png';
import Search from './assets/search.png';
import Globe from './assets/globe.png';
import User from './assets/user.png';
import Cart from './assets/shopping-bag.png';

import { Link } from 'react-router-dom';
import { NavMenu } from './NavLinkData';


function Navbar() {
    return (

        <nav className='nav_block'>

            <div className='nav_top wrapper layouts-2-columns'>
                <ul className='nav_top__list'>
                    <li><img src={Phone} alt="phone" />+375 29 100 20 30</li>
                    <li><img src={Location} alt="location" />Belarus, Gomel, Lange 17</li>
                    <li><img src={Clock} alt="clock" />All week 24/7</li>
                </ul>
                <ul class="nav_top__icon">
                    <li><a href='facebook.com'><img src={facebook} alt="fb" /></a></li>
                    <li><img src={twitter} alt="tw" /></li>
                    <li><img src={instagram} alt="inst" /></li>
                    <li><img src={pinterest} alt="pint" /></li>
                </ul>
            </div>
            <div className='nav_main wrapper'>

                <div className='nav_main__bars layouts-3-columns'>
                    <div className='logo' data-test-id='header-logo-link'>
                        <Link to='/'><img src={Logo} alt='CleverShop' /></Link>
                    </div>
                    <ul className="bars_item" data-test-id='menu'>
                        {NavMenu.map(({ id, name, path }) => (
                            <Link key={id} to={`/${path}`} className={'menu-item'} data-test-id={`menu-link-${path}`}>
                                <li>{name}</li></Link>
                        ))}
                    </ul>
                    <ul class="bars_icon">
                        <li><img src={Search} alt="search" /></li>
                        <li><img src={Globe} alt="globe" /></li>
                        <li><img src={User} alt="user" /></li>
                        <li><img src={Cart} alt="cart" /></li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Navbar