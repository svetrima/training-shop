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
                                value={element.particularName} onClick={() => setFilter(element.particularName)} data-test-id={`clothes-${typeProducts}-${element.particularName}`}>{element.name}</span>;
                        })}
                    </div>
                </div>
                <div className='clothes' data-test-id={`clothes-${typeProducts}`}>
                    <div className='layouts-4-columns'>
                        {PRODUCTS[typeProducts].filter((el) => el.particulars[filter]).map(element => {
                            return <Link to={`/${element.category}/${element.id}`} className='cards-item' data-test-id={`clothes-card-${element.category}`}><div className='card'>
                                <img key={element.img} src={`https://training.cleverland.by/shop${element.images[0]?.url}`} alt={element.title} />
                                <div className='card_content'>
                                    <h4 className='card_item__title'>{element.name}</h4>
                                    <div className='card_item__description'>
                                        <span className='card_item__price'>&#36; {element.price}</span>
                                        <img key={element.rating} src={`../assets/${element.rating}.png`} alt='rating' /></div>
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