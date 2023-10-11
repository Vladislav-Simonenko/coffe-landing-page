"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface IBannerProps {
  text: string;
  img: string;
}

export const Banner = (props: IBannerProps) => {
  const { text, img } = props;
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
            x: inView ? 0 : -1000,
            transition: {
              duration: 0.3,
              delay: inView ? delay : 0,
            },
          });
          setAnimationStarted(true);
        }, 300);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  const delay = 0.3;

  return (
    <div ref={ref}>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, x: -5000 }}
        transition={{ delay: inView ? 0.8 : 0, type: "ease-in" }}
      >
        <div id="pages" className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            width={1920}
            height={1080}
            src={img}
            alt={""}
          />
          <p className={styles.bannerText}>{text}</p>
        </div>
      </motion.div>
    </div>
  );
};
