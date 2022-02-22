import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper';
import { useState } from 'react';
import mediumActive from '../../pages/Product/assets/medium_active.png';
import medium1 from '../../pages/Product/assets/medium_1.png';
import medium2 from '../../pages/Product/assets/medium_2.png';
import medium3 from '../../pages/Product/assets/medium_3.png';
import full from '../../pages/Product/assets/full.png';
import '../../pages/Product/Product.css';
import 'swiper/css/navigation';
import 'swiper/css';
import './Slider.css';


function SliderProduct() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null)
    return (
        <div className='gallery_block layouts-2-columns' data-test-id='product-slider'>

            <div className='gallery_block__choose'>
                <div className='paginaition layouts-2-columns'>
                    <div className='chevron chevron_up'></div>
                    <div className='chevron chevron_down'></div>
                    <Swiper
                        modules={[Navigation, Controller]}
                        navigation={{ prevEl: '.chevron_down', nextEl: '.chevron_up' }}
                        direction={'vertical'}
                        slidesPerView={4}
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                        className='swipers'>
                        <SwiperSlide><img src={mediumActive} alt='active' /></SwiperSlide>
                        <SwiperSlide className='vertical_slides'><img src={medium1} alt='medium1' /></SwiperSlide>
                        <SwiperSlide className='vertical_slides'><img src={medium2} alt='medium2' /></SwiperSlide>
                        <SwiperSlide> <img src={medium3} alt='medium3' /></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>

            </div>
            <div className='gallery_block__preview'>
                <Swiper
                    modules={[Navigation, Controller]}
                    navigation={true}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    className='swipers'>
                    <SwiperSlide><img src={full} alt='full' /></SwiperSlide>
                    <SwiperSlide><img src={full} alt='full' /></SwiperSlide>
                    <SwiperSlide><img src={full} alt='full' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SliderProduct