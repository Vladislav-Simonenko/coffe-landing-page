"use client";

import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./CarouselRating.module.scss";
import styles from "./CarouselRating.module.scss";

interface ICarouselRatingProps {
  children: React.ReactChild[];
}

export const CarouselRating = (props: ICarouselRatingProps) => {
  const { children } = props;
  const pagination = {
    clickable: true,
    renderBullet: () => {
      return '<span class="swiper-pagination-bullet">' + "</span>";
    },
  };

  return (
    <Swiper
      className={styles.swiper}
      slidesPerView={1}
      loop={true}
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  );
};
