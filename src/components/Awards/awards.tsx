'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { SwiperItem } from '@/Interfaces/swiper.interface';

type Awards = {
    options: SwiperItem[];
}

const Awards: FC<Awards> = ({ options }) => {
    return (
        <section className="awards-section">
            <h2>Awards</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                scrollbar={{
                    draggable: true,
                    hide: false,
                }}
                modules={[Scrollbar, Navigation, Pagination]}
                className="awards-swiper"
                breakpoints={{
                    1000: {
                        slidesPerView: 2.5
                    },
                    700: {
                        slidesPerView: 2
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
            >
                {options.map(awards => (
                    <SwiperSlide key={awards.id} className="awards-slide">
                        <div className='awards-pic'>
                            <img src={awards.img} alt={awards.title}/>
                        </div>
                        
                        <div className="awards-info">
                            <h3>{awards.title}</h3>
                            <p>{awards.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Awards;