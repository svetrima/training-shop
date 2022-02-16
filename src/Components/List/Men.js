import React from 'react';
import { men } from './CatalogMen';
import { Link } from 'react-router-dom';

function Men() {
    const productType = ['men', 'women'];
    return (
        <div className = 'clothes' data-test-id ={`clothes-${productType[0]}`}>
        <div className="layouts-4-columns cards_men">
            {men.map(element => {
                return <Link to={`/${element.category}/${element.id}`} className='cards-item' data-test-id={`clothes-card-${element.category}`}><div className='card'>
                    <img key={element.img} src={element.img} alt={element.title} />
                    <div className='card_content'>
                        <h4 className='card_item__title'>{element.title}</h4>
                        <div className='card_item__description'>
                            <span className='card_item__price'>{element.price}</span>
                            <img key={element.rating} src={element.rating} alt='rating' /></div>
                    </div>
                </div>
                </Link>
            })}
        </div>
        </div>
    );

}

export default Men