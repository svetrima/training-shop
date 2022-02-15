import React from 'react';
import './Navbar.css';
import Phone from './assets/phone.png';
import Clock from './assets/clock.png';
import Location from './assets/location.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import pinterest from './assets/pinterest.png';



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

        </nav>

    )
}

export default Navbar