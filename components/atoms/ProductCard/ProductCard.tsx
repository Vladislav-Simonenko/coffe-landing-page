"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProductCard {
  item: {
    id: number;
    img: string;
    name: string;
    price: string;
    text: string;
    label?: boolean;
    onlyImage?: boolean;
  };
  index: number;
}

export const ProductCard = (props: IProductCard) => {
  const { item, index } = props;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (inView && !animationStarted) {
      const startAnimation = async () => {
        setTimeout(async () => {
          await controls.start({
            opacity: 1,
            transition: {
              duration: 1,
              delay: inView ? index : 0,
            },
          });
          setAnimationStarted(true);
        }, 400);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  const maxDelay = 0.4;
  const delay = Math.min(index * 1000, maxDelay);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      key={item?.id}
      className={styles.productListPopular}
      style={{
        position: "relative",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={styles.productImageContainer}>
        <Image
          className={
            item.onlyImage ? styles.productImageOnly : styles.productImage
          }
          src={item?.img}
          alt={item?.name}
          width={1920}
          height={82}
        />
      </div>
      <div>
        <p className={styles.productName}>{item?.name}</p>
        <p className={styles.productPrice}>{item?.price}</p>
        {item.label ? (
          <div
            className={`${styles.productLabel} ${
              styles[item.text.toLocaleLowerCase()]
            }`}
          >
            {item?.text}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};
