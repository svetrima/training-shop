import React from 'react';
import './News.css';
import '../Header/Header.css'


function News() {
    return (
        <div className='news_block wrapper layouts-2-columns'>
            <div className='news_block__season'>
                <div className='news_block__banner banner'>
                    <h3>New Season</h3>
                    <p>lookbook collection</p>
                </div>
            </div>
            <div className='news_block__sale'>
                <div className='news_block__banner banner'>
                    <h3>sale</h3>
                    <p>Get UP to <span className='sales'>50% off</span></p>
                </div>
            </div>
        </div>
    );

}

export default News