"use client";

import React, { useEffect, useState } from "react";
import styles from "./MainContentSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import seal from "public/seal.svg";
import { CarouselCard } from "@/components/molecules";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const MainContentSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animationStarted, setAnimationStarted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView && !animationStarted) {
      const startAnimation = async () => {
        setTimeout(async () => {
          await controls.start({
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -50,
            transition: {
              duration: 1,
              delay: inView ? delay : 0,
            },
          });
          setAnimationStarted(true);
        }, 400);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  const delay = 0.4;

  return (
    <div ref={ref}>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, x: -50 }}
        transition={{ delay: inView ? 0.8 : 0, type: "ease-in" }}
      >
        <div className={styles.sliderContainer}>
          <CarouselCard>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.sliderContent}>
                  <div className={styles.sliderImage}>
                    <img src={item.img} />
                  </div>

                  <div className={styles.sliderTextBlock}>
                    <p className={styles.sliderText}>
                      {item.text?.firstWord}{" "}
                      <span>{item.text?.secondWord}</span>
                      <span>{item.text?.thirdWord}</span>
                      <Image
                        className={styles.sliderSeal}
                        src={seal}
                        alt={"seal"}
                      />
                      <span className={styles.sliderSubText}>{item.label}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </CarouselCard>
        </div>
      </motion.div>
    </div>
  );
};

const data = [
  {
    id: 1,
    img: "/images/coffe-slide-1.png",
    text: {
      firstWord: "enjoy",
      secondWord: "life sip",
      thirdWord: "by sip",
    },

    label: "with love!",
  },
  {
    id: 2,
    img: "/images/coffe-slide-2.png",
    text: {
      firstWord: "The aroma of coffee",
      secondWord: "the taste of life",
    },

    label: "with love!",
  },
  {
    id: 3,
    img: "/images/coffe-slide-3.png",
    text: {
      firstWord: "Lorem ipsum",
      secondWord: "dolor sit amet",
      thirdWord: "consectetur",
    },

    label: "adipisicing elit!",
  },
];
