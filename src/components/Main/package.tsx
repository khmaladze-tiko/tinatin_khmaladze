'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { SwiperItem } from '@/Interfaces/swiper.interface';
import { Icons } from "../Icons";



const PackageSection = () => {
  return (

    <div className="package-sec">
      <div className="package-title">
        <h2>Select a Package</h2>
      </div>
      <div className="package-flex">
        <div className="package-cards">
          <div className="package-digital">
            <div className="package-content">
                <h3 >Digital</h3>
                <a>
                <Icons.arrow />
                <p>READ MORE</p>
                </a>
            </div>
          </div>
          <div className="package-premium">
            <div className="package-content">
                <h3>Premium</h3>
                <a>
                <Icons.arrow />
                <p>READ MORE</p>
                </a>
            </div>
          </div>
        </div>
        <div className="package-last">
            <div className="package-content">
                <h3>360</h3>
                <a>
                    <Icons.arrow />
                    <p>READ MORE</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
