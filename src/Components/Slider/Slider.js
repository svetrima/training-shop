import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import slid from '../Header/assets/header_main.jpg';
import '../Header/Header.css'



function Slider() {

    return (
        <div className='slider'>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                className="swiper" data-test-id='main-slider'>
                <SwiperSlide className='slides'>
                    <img src={slid} alt={slid} />
                    <div className='main_block__banner banner'>
                        <p>banner</p>
                        <h2>your title text</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <img src={slid} alt={slid} />
                    <div className='main_block__banner banner'>
                        <p>banner</p>
                        <h2>your title text</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <img src={slid} alt={slid} />
                    <div className='main_block__banner banner'>
                        <p>banner</p>
                        <h2>your title text</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    )

}

export default Slider