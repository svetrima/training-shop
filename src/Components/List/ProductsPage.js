import React from 'react';
import { PRODUCTS } from './ProductsData';
import { Link } from 'react-router-dom';


const ProductsPage = ({ typeProducts }) => {
    return (
        <div className='clothes' data-test-id={`clothes-${typeProducts}`}>
            <div className="layouts-4-columns cards_women">
                {PRODUCTS[typeProducts].map(element => {
                    return <Link to={`/${element.category}/${element.id}`} className='cards-item' data-test-id={`clothes-card-${element.category}`}><div className='card'>
                        <img key={element.img} src={`https://training.cleverland.by/shop${element.images[0]?.url}`}  alt={element.title} />
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
    );
}

export default ProductsPage