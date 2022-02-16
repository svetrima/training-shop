import React from 'react';
import { women } from './CatalogWomen';
import { Link } from 'react-router-dom';

function Women() {
    const productType = ['men', 'women'];
  return (
    <div className = 'clothes' data-test-id ={`clothes-${productType[1]}`}>
    <div className="layouts-4-columns cards_women">
    {women.map(element => {
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

export default Women