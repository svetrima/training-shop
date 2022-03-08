import React from 'react';
import { useState } from 'react';
import { cardsFilterData } from './CardsFilterData';
import classNames from "classnames";
import { PRODUCTS } from './ProductsData';
import { Link } from 'react-router-dom';

const Filter = ({ typeProducts }) => {
    const [filter, setFilter] = useState(cardsFilterData[0].particularName);

    return (
        <>
            <div className='cards'>
                <div className='cards_content layouts-2-columns'>
                    <h3 className='cards_title'>{typeProducts}'s</h3>
                    <div className='cards_filter'>
                        {cardsFilterData.map(element => {
                            return <span
                                className={classNames('filter_tab', { 'filter_tab__show': element.particularName === filter })}
                                value={element.particularName} onClick={() => setFilter(element.particularName)} key={element.id} data-test-id={`clothes-${typeProducts}-${element.particularName}`}>{element.name}</span>;
                        })}
                    </div>
                </div>
                <div className='clothes' data-test-id={`clothes-${typeProducts}`}>
                    <div className='layouts-4-columns'>
                        {PRODUCTS[typeProducts].filter((el) => el.particulars[filter]).map(element => {
                            return <Link to={`/${element.category}/${element.id}`} className='cards-item' data-test-id={`clothes-card-${element.category}`}><div className='card'>
                                <img key={element.id} src={`https://training.cleverland.by/shop${element.images[0]?.url}`} alt={element.title} />
                                <div className='card_content'>
                                    <div className={classNames('discount', { 'discount_active': element.discount })}>
                                        <span>{element.discount}</span>
                                    </div>
                                    <h4 className='card_item__title'>{element.name}</h4>
                                    <div className='card_item__description'>
                                        <div className='price'>
                                            <span className='card_item__price'>&#36; {element.discount ? `${(element.price + (element.price / 100) * parseInt(element.discount, 10)).toFixed(2)}` : element.price}
                                            </span>
                                            <span className={classNames('discount_price', { 'discount_price__active': element.discount })}>
                                                {element.discount ? `$ ${element.price}` : null}
                                            </span>
                                        </div>
                                        <img key={element.rating} src={`../assets/${element.rating}.png`} alt={element.rating} /></div>
                                </div>
                            </div>
                            </Link>
                        })}
                    </div>
                </div>
                <div className='cards_btn'>
                    <button className='cards_btn__full'><span>see all</span></button>
                </div>
            </div>
        </>
    );

}

export default Filter