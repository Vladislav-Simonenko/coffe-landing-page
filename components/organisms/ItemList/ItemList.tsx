"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "@/components/atoms";
import styles from "./ItemList.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface IDataProps {
  data: {
    id: number;
    img: string;
    name: string;
    price: string;
    text: string;
    label?: boolean | undefined;
    onlyImage?: boolean;
  }[];
}

export const ItemList = (props: IDataProps) => {
  const { data } = props;
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
    <div id="shop" className={styles.productListContainer}>
      <div className={styles.productListContent}>
        {data.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
