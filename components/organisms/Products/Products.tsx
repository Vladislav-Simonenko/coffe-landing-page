"use client";
import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { ActionButton, ProductCard } from "@/components/atoms";
import arrow from "public/slider-arrow.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ScrollingEffect } from "../ScrollingEffect/ScrollingEffect";

export const Products = () => {
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
    <div className={styles.productListContainer}>
      <div className={styles.productListContant}>
        <div className={styles.productListInfo}>
          <p className={styles.infoTitle}>
            Our blends deliver on the promise of balance and consistency,
            <span className={styles.infoTitleCircle}> roasted to </span>
            maximize sweetness.
          </p>
          <p className={styles.infoDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            enim ut perferendis porro vitae vouptatum hic sequi consequuntur
            praesentium exercitationem odit, dolor, illum impedit quisquam
            repellat! Dolorem dolores tempora ipsum.
          </p>
          <ActionButton text={"view more"} img={arrow} />
        </div>
        {coffeData.map((item, index) => (
          <ProductCard item={item} key={item.id} index={index} />
        ))}
      </div>
    </div>
  );
};

const coffeData = [
  {
    id: 1,
    img: "/images/product-1.png",
    name: "Arabica Bekele",
    price: "$44.00",
    text: "",
    label: false,
  },
  {
    id: 2,
    img: "/images/product-2.png",
    name: "Robusta Santa",
    price: "$35.00",
    text: "",
    label: false,
  },
];
