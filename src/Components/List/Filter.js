import React from 'react';
import { useState } from 'react';
import { cardsFilterData } from './CardsFilterData';
import classNames from "classnames";

const Filter = () => {
    const [filter, setFilter] = useState(cardsFilterData[0]);

    return (
        <div className='cards_filter'>
            {cardsFilterData.map(element => {
                return <span className={classNames('filter_tab', { 'filter_tab__show': element.particularName === filter })} value={element.particularName} onClick={() => setFilter(element.particularName)} >{element.name}</span>;
            })}
        </div>
    );

}

export default Filter