'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { SwiperItem } from '@/Interfaces/swiper.interface';

type OffersProps = {
    options: SwiperItem[];
}

const Offers: FC<OffersProps> = ({ options }) => {
    return (
        <section className="offers-section">
            <h2>Offers</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                scrollbar={{
                    draggable: true,
                    hide: false,
                }}
                modules={[Scrollbar, Navigation, Pagination]}
                className="offers-swiper"
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
                {options.map(offer => (
                    <SwiperSlide key={offer.id} className="offer-slide">
                        <img src={offer.img} alt={offer.title}/>
                        <div className="offer-info">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Offers;