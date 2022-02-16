import React from 'react';
import Men from './Men';
import Women from './Women';
import './List.css';
import '../../index.css';
import Filter from './Filter';

function List() {
    return (

        <div className='wrapper'>
            <div className='cards'>
                <div className='cards_content layouts-2-columns'>
                    <h3 className='cards_title'>women's</h3>
                    <Filter />
                </div></div>
            <Women />
            <div className='cards_btn'>
                <button className='cards_btn__full'><span>see all</span></button>
            </div>

            <div className='cards'>
                <div className='cards_content layouts-2-columns'>
                    <h3 className='cards_title'>men's</h3>
                    <Filter />
                </div></div>
            <Men />
            <div className='cards_btn'>
                <button className='cards_btn__full'><span>see all</span></button>
            </div>
        </div>

    );
}

export default List;
