import React from 'react';
import './Footer.css';
import '../../index.css';
import facebook from '../Navbar/assets/facebook.png';
import twitter from '../Navbar/assets/twitter.png';
import instagram from '../Navbar/assets/instagram.png';
import pinterest from '../Navbar/assets/pinterest.png';

function Footer() {
    return (
        <footer className='footer' data-test-id='footer'>
            <div className='footer_block__top'>
                <div className='layouts-3-columns wrapper'>
                    <h3 className='form_title'>be in touch with us:</h3>
                    <div className='form'>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                        <button className='footer_btn btn'>join us</button>
                    </div>
                    <div className='social_links'>
                        <ul class="nav_top__icon">
                            <li><img src={facebook} alt="fb" /></li>
                            <li><img src={twitter} alt="tw" /></li>
                            <li><img src={instagram} alt="inst" /></li>
                            <li><img src={pinterest} alt="pint" /></li>
                        </ul>
                    </div>
                </div>
            </div>


        </footer>

    );

}

export default Footer;
