import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';
import '../../pages/Product/Product.css';
import 'swiper/css/navigation';
import 'swiper/css';
import './Slider.css';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../Components/List/ProductsData';


const SliderProduct = ({ typeProducts }) => {
    //const [firstSwiper, setFirstSwiper] = useState(null);
    //const [secondSwiper, setSecondSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params = useParams();
    const productId = params.id;
    const images = [...new Set(PRODUCTS[typeProducts].filter((el) => el.id === productId).map(({ images }) => images.map(({ url }) => url)).flat())];
    console.log(images)

    return (
        <div className='gallery_block layouts-2-columns' data-test-id='product-slider'>

            <div className='gallery_block__choose'>
                <div className='paginaition layouts-2-columns'>
                    <div className='chevron chevron_up'>2</div>
                    <div className='chevron chevron_down'>2</div>
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        navigation={{ prevEl: '.chevron_down', nextEl: '.chevron_up' }}
                        direction={'vertical'}
                        slidesPerView={4}
                        spaceBetween={30}
                        onSwiper={setThumbsSwiper}
                        className='swipers'>
                        {
                            images.map((el) => {
                                return <SwiperSlide key={el.id}> <img src={`https://training.cleverland.by/shop${el}`} alt='img_left' /></SwiperSlide>
                            })
                        }
                       {/*     <SwiperSlide><img src={mediumActive} alt='active' /></SwiperSlide>
                        <SwiperSlide ><img src={medium1} alt='medium1' /></SwiperSlide>
                        <SwiperSlide ><img src={medium2} alt='medium2' /></SwiperSlide>
                        <SwiperSlide> <img src={medium3} alt='medium3' /></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>*/}
                    </Swiper>
                </div>

            </div>
            <div className='gallery_block__preview'>
                <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    className='swipers'>
                    {
                        images.map((el) => {
                            return <SwiperSlide key={el.id}> <img src={`https://training.cleverland.by/shop${el}`} alt='img_main' /></SwiperSlide>
                        })
                    }
                    {/* 
                    <SwiperSlide><img src={full} alt='full' /></SwiperSlide>
                    <SwiperSlide><img src={full} alt='full' /></SwiperSlide>
                    <SwiperSlide><img src={full} alt='full' /></SwiperSlide>*/}
                </Swiper>
            </div>
        </div>
    )
}

export default SliderProduct