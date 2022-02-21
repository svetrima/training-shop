import React from 'react'
import './Header.css';
import exchange from './assets/refresh.png';
import delivery from './assets/truck.png';
import support from './assets/support.png';
import Slider from '../Slider/Slider';

function Header() {
    return (
        <header className='wrapper'>
            <div className='header_content layouts-2-columns' data-test-id='header'>
                <div className='main_block'>
                    <Slider />
                   {/* <div className='main_block__banner banner'>
                        <p>banner</p>
                        <h2>your title text</h2>
                    </div>*/}
                </div>
                <div className='sub_block layouts-2-columns'>
                    <div className='sub_block__women'>
                        <div className='sub_block__banner banner'>
                            <h3>women</h3>
                        </div>
                    </div>
                    <div className='sub_block__men'>
                        <div className='sub_block__banner banner'>
                            <h3>men</h3>
                        </div>
                    </div>
                    <div className='sub_block__accessories'>
                        <div className='sub_block__banner banner'>
                            <h3>accessories</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description_block layouts-3-columns'>

                <div className='description_block__content'>
                    <img src={delivery} alt='delivery' />
                    <div className='delivery'>
                        <h3>free shipping</h3>
                        <p>On all UA order or order above $100</p>
                    </div>
                </div>
                <div className='description_block__content'>

                    <img src={exchange} alt='exchange' />
                    <div className='exchange'>
                        <h3>30 days return</h3>
                        <p>Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div className='description_block__content'>

                    <img src={support} alt='support' />
                    <div className='support'>
                        <h3>support 24/7</h3>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header