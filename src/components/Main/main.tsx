import React from "react";
import { SwiperOption } from "@/Interfaces/swiper.interface";
import SwiperComponent from "../Swiper/swiper";
import ProductSwiperComponent from "../ProductSwiper/productSwiper";
import { ProductSwiperOption } from "@/Interfaces/productswiper.interface";
import ConceptSection from "./conceptSection";
import PackageSection from "./package";
import StatisticSection from "./statistic";
import PrivateSection from "./private";
import DigitalBankSection from "./digitalBank";



const products: ProductSwiperOption[] = [
  {
    id: 1,
    title: "Digital",
    description:
      "TBC ­Concept Digital Package is for those who engage in banking daily, enjoy nonbanking offers and products and prefer to manage their finances and transactions on their own, without a personal",
    img: "images/digital.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Premium",
    description:
      "TBC Concept Premium Package client relationship format offers Personal Banker's services, along with other banking and nonbanking benefits. Your Personal Banker's main goal is ",
    img: "images/premium.png", // Replace with actual image path
  },
  {
    id: 3,
    title: "360",
    description:
      "TBC Concept 360 package is tailored to those, who need even more financial tools, bigger array of opportunities and Personal Banker's support, along with banking and non-banking benefits.",
    img: "images/360.png", // Replace with actual image path
  },
];

const offers: SwiperOption[] = [
  {
    id: 1,
    title: "JAZZ FESTIVAL OFFERS",
    description: "IVERIA BEACH - Cashback 30%",
    img: "images/swiper1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "AUTO",
    description: "Tegeta Motors - 50% Discount",
    img: "images/swiper2.png", // Replace with actual image path
  },
  {
    id: 3,
    title: "AUTO JAZZ FESTIVAL OFFERS",
    description: "Tegeta Motors - Batumi",
    img: "images/swiper3.png", // Replace with actual image path
  },
  {
    id: 4,
    title: "LESIURE VISA JAZZ FESTIVAL OFFERS",
    description: "Le Meridien Batumi - 15% Discount",
    img: "images/swiper4.png", // Replace with actual image path
  },
  {
    id: 5,
    title: "LESIURE VISA JAZZ FESTIVAL OFFERS",
    description: "Colosseum Marina Hotel - 15% Discount",
    img: "images/swiper5.png", // Replace with actual image path
  },
];

const Main = () => {
  return (
    <div className="main">
      <ConceptSection/>
      <PackageSection/>
      <StatisticSection/>
      <SwiperComponent options={offers} />
      <DigitalBankSection/>
      <ProductSwiperComponent options={products} />
      <PrivateSection/>
    </div>
  );
};

export default Main;
