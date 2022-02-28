import React from 'react';
import ProductsPage from './ProductsPage';
import { productsData } from './ProductsData';
import Filter from './Filter';
import './List.css';
import '../../index.css';

const List = ({ typeProducts }) => {
    return (

        <div className='wrapper'>
            <div className='cards'>
                <div className='cards_content layouts-2-columns'>
                    <h3 className='cards_title'>Women's</h3>
                    <Filter />
                </div>
                <ProductsPage typeProducts='women' />
                <div className='cards_btn'>
                    <button className='cards_btn__full'><span>see all</span></button>
                </div>
            </div>
            <div className='cards'>
                <div className='cards_content layouts-2-columns'>
                    <h3 className='cards_title'>Men's</h3>
                    <Filter />
                </div>
                <ProductsPage typeProducts='men' />
                <div className='cards_btn'>
                    <button className='cards_btn__full'><span>see all</span></button>
                </div>
            </div>
        </div>
    );
}

export default List;
