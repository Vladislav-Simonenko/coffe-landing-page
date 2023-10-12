"use client";
import React, { useEffect, useState } from "react";
import styles from "./ItemMenu.module.scss";
import Image from "next/image";
import { MenuItem } from "@/components/molecules";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const ItemMenu = () => {
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
    <div className={styles.foodMenuContainer}>
      <div className={styles.foodMenuContent}>
        <div className={styles.foodMenuCover}>
          <p className={styles.foodMenuText}>
            swing by our place <br /> we also
            <span className={styles.foodMenuCircle}> have food. </span>
          </p>
          <Image
            className={styles.foodMenuImage}
            src={"/food-menu.svg"}
            alt={"nuts"}
            width={50}
            height={50}
          />
        </div>

        <div className={styles.foodMenuProposal}>
          {foodMenuItems.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const foodMenuItems = [
  {
    id: 1,
    title: "Delivery",
    description: "Vivamus hendrerit at sapien nec mattis. Quisque quis arcu",
  },
  {
    id: 2,
    title: "Wholesale",
    description: "Pellentesque in tempor lorem, vel porttitor est.",
  },
  {
    id: 3,
    title: "Consistency",
    description: "Aliquam ut arcu sodales, gravida quam vitae.",
  },
  {
    id: 4,
    title: "Quality",
    description: "Nam at sapien ligula. Morbi maximus scelerisque mi sed.",
  },
];
