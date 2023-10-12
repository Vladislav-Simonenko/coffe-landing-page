"use client";

import React, { useEffect, useState } from "react";
import styles from "./MenuItemBlog.module.scss";
import { ActionButton } from "@/components/atoms";
import arrow from "public/slider-arrow.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IMenuItemProps {
  item: { id: number; date: string; type: string; title: string; img: string };
  index: number;
}

export const MenuItemBlog = (props: IMenuItemProps) => {
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
              delay: inView ? index * 0.1 : 0,
            },
          });
          setAnimationStarted(true);
        }, 200);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  return (
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
      <div key={item.id} className={styles.menuItemContainer}>
        <Image
          className={styles.menuItemImage}
          src={item.img}
          alt={""}
          width={"1920"}
          height={"1080"}
        />
        <div className={styles.menuItemContent} key={item.id}>
          <div className={styles.menuItemHeader}>
            <div className={styles.menuItemHeaderInfo}>
              <p className={styles.menuItemDate}>{item.date}</p>
              {" | "}
              <p className={styles.menuItemType}>{item.type}</p>
            </div>
            <p className={styles.menuItemTitle}>{item.title}</p>
          </div>
          <ActionButton text={"Read more"} img={arrow} />
        </div>
      </div>
    </motion.div>
  );
};
