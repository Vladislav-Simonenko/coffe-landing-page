"use client";

import React, { useEffect, useState } from "react";
import styles from "./CoffeItem.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ICoffeItemProps {
  item: {
    id: number | string;
    title: string;
    description: string;
    price: string;
  };
  index: number;
}

export const CoffeItem = (props: ICoffeItemProps) => {
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
              delay: 0.1 * index,
            },
          });
          setAnimationStarted(true);
        }, 400);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  return (
    <div className={styles.coffeItemContainer}>
      <div className={styles.coffeItemContant} key={item.id}>
        <div className={styles.coffeItemLeftSideBlock}>
          <p className={styles.coffeItemTitle}>{item.title}</p>
          <p className={styles.coffeItemDescription}>{item.description}</p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          key={item?.id}
          className={styles.productListPopular}
          style={{
            position: "relative",
          }}
        >
          <div className={styles.CoffeItemRightSideBlock}>
            <p className={styles.coffeItemPrice}>{item.price}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
