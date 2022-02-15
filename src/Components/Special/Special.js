import React from 'react';
import './Special.css';
import '../../index.css';


function Special() {
    return (
        <div className='special wrapper'>
            <div className='offer'>
                <h3>Special Offer</h3>
                <p>Subscribe And <span className='sales'>Get 10% Off</span></p>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <button className='offer_btn btn'>subscribe</button>

            </div>
            <div className='for_women'></div>
            <div className='for_men'></div>
        </div>
    );
}

export default Special