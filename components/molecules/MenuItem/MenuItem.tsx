"use client";

import React, { useEffect } from "react";
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

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 * delay },
      });
    }
  }, [inView, controls]);

  const maxDelay = 1;
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
