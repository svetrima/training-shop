import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { PRODUCTS } from '../../Components/List/ProductsData';
import 'swiper/css/navigation';
import 'swiper/css';
import './Slider.css';

function SliderRelated({typeProducts}) {
    return (
        <div className='gallery_related'>
            <div className='gallery_related__title layouts-2-columns'>
                <h2>related products</h2>
                <div className='paginaition layouts-2-columns'>
                    <div className='chevron chevron_prev'></div>
                    <div className='chevron chevron_next'></div>
                </div>

            </div>
            <div className='gallery_related__block layouts-4-columns' data-test-id='related-slider'>
                <Swiper
                    modules={[Navigation]}
                    navigation={{ prevEl: '.chevron_prev', nextEl: '.chevron_next' }}
                    slidesPerView={4}
                    spaceBetween={10}
                    breakpoints = {{
                        340: {
                            slidesPerView : 1
                        },
                        560: {
                            slidesPerView : 2
                        },
                        900: {
                            slidesPerView : 3,
                            spaceBetween : 10
                        },
                        1230: {
                            slidesPerView : 4,
                            spaceBetween : 15
                        },
                    }}
                    className='swipers'>
                    {PRODUCTS[typeProducts].map(element => {
                        return <SwiperSlide><Link to={`/${element.category}/${element.id}`} className='cards-item'><div className='card'>
                            <img key={element.id} src={`https://training.cleverland.by/shop${element.images[0]?.url}`}  alt={element.title} />
                            <div className='card_content'>
                                <h4 className='card_item__title'>{element.name}</h4>
                                <div className='card_item__description'>
                                    <span className='card_item__price'>$ {element.price}</span>
                                    <img key={element.rating} src={element.rating} alt={element.rating} /></div>
                            </div>
                        </div>
                        </Link></SwiperSlide>
                    })}
                </Swiper>
            </div>

        </div>
    )
}

export default SliderRelated