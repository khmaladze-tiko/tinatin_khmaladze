import React from "react";
import { SwiperOption } from "@/Interfaces/swiper.interface";
import SwiperComponent from "../Swiper/swiper";

const offers: SwiperOption[] = [
    {
        id: 1,
        title: "JAZZ FESTIVAL OFFERS",
        description: "IVERIA BEACH - Cashback 30%",
        img: "images/swiper1.jpg"  // Replace with actual image path
    },
    {
        id: 2,
        title: "AUTO",
        description: "Tegeta Motors - 50% Discount",
        img: "images/swiper2.png"  // Replace with actual image path
    },
    {
        id: 3,
        title: "AUTO JAZZ FESTIVAL OFFERS",
        description: "Tegeta Motors - Batumi",
        img: "images/swiper3.png"  // Replace with actual image path
    },
    {
        id: 4,
        title: "LESIURE VISA JAZZ FESTIVAL OFFERS",
        description: "Le Meridien Batumi - 15% Discount",
        img: "images/swiper4.png"  // Replace with actual image path
    },
    {
        id: 5,
        title: "LESIURE VISA JAZZ FESTIVAL OFFERS",
        description: "Colosseum Marina Hotel - 15% Discount",
        img: "images/swiper5.png"  // Replace with actual image path
    }
];

const Main = () => {
    return (
        <div className="main">
            <SwiperComponent options={offers} />
        </div>
    )
}

export default Main;