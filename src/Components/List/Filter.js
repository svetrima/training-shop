import React from 'react';
import { useState } from 'react';
import { cardsFilterData } from './CardsFilterData';

const Filter =()=> {


    return (
        <div className='cards_filter'>
            {cardsFilterData.map(element => {
                
                 return <span className='filter_tab'>{element.name}</span>;
            })}

        </div>
    );

}

export default Filter