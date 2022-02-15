import React from 'react'

function Filter() {
    const cardsFilter = ['new arrivals', 'specials', 'bestsellers', 'most viewed', 'featured products'];
    return (
        <div className='cards_filter'>
            {cardsFilter.map(element => {
                return <span className='filter_tab'>{element}</span>;
            })}

        </div>
    );

}

export default Filter