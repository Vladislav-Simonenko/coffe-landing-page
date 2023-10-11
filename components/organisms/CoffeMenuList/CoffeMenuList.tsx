"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CoffeMenuList.module.scss";
import { CoffeItem } from "@/components/molecules";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const CoffeMenuList = () => {
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
    <div ref={ref}>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, x: -5000 }}
        transition={{ delay: inView ? 0.8 : 0, type: "ease-in" }}
      >
        <div className={styles.coffeMenuContainer}>
          <div className={styles.coffeMenuContant}>
            <div className={styles.coffeMenuList}>
              {coffeDataItem.map((item, index) => (
                <CoffeItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className={styles.coffeMenuImageContainer}>
              <Image
                className={styles.coffeMenuImage}
                src={"/images/menu-image-wrap-1.png"}
                alt={""}
                width={1920}
                height={1080}
              />
              <p className={styles.coffeMenuImageText}>Our Coffee</p>
            </div>
          </div>
        </div>
      </motion.div>{" "}
    </div>
  );
};

const coffeDataItem = [
  {
    id: 1,
    title: "Caffe Latte",
    description: "Fresh brewed coffee",
    price: "5.00$",
  },
  {
    id: 2,
    title: "Cappucino",
    description: "Espresso and milk",
    price: "7.00$",
  },
  {
    id: 3,
    title: "Ice Coffee",
    description: "Cold brewed espresso",
    price: "4.00$",
  },
  {
    id: 4,
    title: "Mocha",
    description: "Espresso, mocha sauce, milk",
    price: "7.00$",
  },
  {
    id: 5,
    title: "Espresso",
    description: "Rich espresso with milk",
    price: "4.00$",
  },
];
