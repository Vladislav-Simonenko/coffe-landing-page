"use client";
import React from "react";
import styles from "./CarouselCard.module.scss";
import "swiper/scss";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface ICarouselCardProps {
  children: React.ReactChild[];
}

export const CarouselCard = (props: ICarouselCardProps) => {
  const { children } = props;

  return (
    <Swiper
      className={styles.swiper}
      slidesPerView={1}
      navigation={true}
      loop={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  );
};
