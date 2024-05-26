import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState, useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import img_1 from '../assets/img/banner/1.png'
import img_2 from '../assets/img/banner/2.png'
import img_3 from '../assets/img/banner/3.png'
import img_4 from '../assets/img/banner/4.png'

export default function Slider() {
    const banner = [img_1, img_2, img_3, img_4];
    return (
        <div className='position-absolute top-0 start-0 w-100 h-100 z-n1'>
            <Swiper
                className='testimonial-slider'
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                effect={'fadeOut'}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                navigation={false}
                loop={true}
                modules={[Pagination, Autoplay, EffectFade]}
            >
                {banner.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="banner-img w-100 h-100 position-relative z-1">
                            <img className='w-100 h-100 object-fit-cover position-absolute top-0 start-0' src={item} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
