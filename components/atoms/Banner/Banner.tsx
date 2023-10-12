"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ScrollingEffect } from "@/components/organisms/ScrollingEffect/ScrollingEffect";

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
              duration: 0.2,
              delay: inView ? delay : 0,
            },
          });
          setAnimationStarted(true);
        }, 200);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  const delay = 0.2;

  return (
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
  );
};
