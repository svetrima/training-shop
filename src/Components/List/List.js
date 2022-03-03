import React from 'react';
import Filter from './Filter';
import './List.css';
import '../../index.css';

const List = ({ typeProducts, filter }) => {
    return (
        <div className='wrapper'>
            <Filter typeProducts='women' />
            <Filter typeProducts='men' />
        </div>
    );
}

export default List;
