"use client";

import React, { useEffect, useState } from "react";
import styles from "./MenuItem.module.scss";
import { ActionButton } from "@/components/atoms";
import arrow from "public/slider-arrow.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface IMenuItemProps {
  item: { id: number; title: string; description: string };
  index: number;
}

export const MenuItem = (props: IMenuItemProps) => {
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
              delay: inView ? 0.2 * index : 0,
            },
          });
          setAnimationStarted(true);
        }, 500);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  const maxDelay = 0.1;
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
      <div className={styles.menuItemContainer}>
        <div className={styles.menuItemContant} key={item.id}>
          <p className={styles.menuItemTitle}>{item.title}</p>
          <p className={styles.menuItemDesc}>{item.description}</p>
        </div>
        <React.Fragment>
          <ActionButton text={"view more"} img={arrow} />
        </React.Fragment>
      </div>
    </motion.div>
  );
};
