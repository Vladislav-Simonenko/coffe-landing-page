"use client";

import React from "react";
import styles from "./Rating.module.scss";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { CarouselRating, RatingStarsCounter } from "@/components/molecules";

export const Rating = () => {
  return (
    <div className={styles.ratingContainer}>
      <CarouselRating>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.ratingContent}>
              <div className={styles.ratingTopComments}>
                <div className={styles.ratingStars}>
                  <RatingStarsCounter rating={item.rating} maxRating={5} />
                </div>
                <div
                  className={styles.ratingComments}
                >{`\"${item.text}\"`}</div>
                <div className={styles.ratingAuthor}>{item.author}</div>
                <div className={styles.ratingDots}></div>
              </div>
              <div className={styles.ratingImageContainer}>
                <Image
                  className={styles.ratingImage}
                  src={item.productImg}
                  alt="ratingImgOne"
                  width={960}
                  height={878}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CarouselRating>
    </div>
  );
};

const data = [
  {
    id: 1,
    rating: 5,
    text: `Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer.`,
    author: "Henry Monro",
    productImg: "/images/rating-img-1.png",
  },
  {
    id: 2,
    rating: 3.45,
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, voluptate.`,
    author: "Autem Fugit",
    productImg: "/images/rating-img-2.png",
  },
  {
    id: 3,
    rating: 4.86,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, aliquam nemo laudantium nesciunt odit ut!`,
    author: "Dicta Optio",
    productImg: "/images/rating-img-3.png",
  },
];
