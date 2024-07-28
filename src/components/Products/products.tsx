'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { SwiperItem } from '@/Interfaces/swiper.interface';

type ProductSwiperProps = {
    options: SwiperItem[];
}

const ProductSwiperComponent: FC<ProductSwiperProps> = ({ options }) => {
    return (
        <section className="offer-section">
            <h2>Products</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                scrollbar={{
                    draggable: true,
                    hide: false,
                }}
                modules={[Scrollbar, Navigation, Pagination]}
                className="offer-swiper"
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
                {options.map(product => (
                    <SwiperSlide key={product.id} className="offer-slide">
                        <img src={product.img} alt={product.title} />
                        <div className="offer-info">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ProductSwiperComponent;