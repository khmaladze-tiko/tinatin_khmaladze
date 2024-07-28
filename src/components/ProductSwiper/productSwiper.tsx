'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { ProductSwiperOption } from '@/Interfaces/productswiper.interface';

type ProductSwiperProps = {
    options: ProductSwiperOption[];
}

const ProductSwiperComponent: FC<ProductSwiperProps> = ({ options }) => {
    return (
        <section className="product-section">
            <h2>Products</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                scrollbar={{
                    draggable: true,
                    hide: false,
                }}
                modules={[Scrollbar, Navigation, Pagination]}
                className="product-swiper"
            >
                {options.map(product => (
                    <SwiperSlide key={product.id} className="product-slide">
                        <img src={product.img} alt={product.title} />
                        <div className="product-info">
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