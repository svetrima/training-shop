import React from 'react';
import Men from './Men';
import './List.css';
import '../../index.css';
import Filter from './Filter';

function List() {
    return (
        <div className='wrapper'>
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
