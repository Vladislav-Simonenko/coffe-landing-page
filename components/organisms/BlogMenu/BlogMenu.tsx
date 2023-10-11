"use client";
import React, { useEffect, useState } from "react";
import styles from "./BlogMenu.module.scss";
import { MenuItemBlog } from "@/components/molecules";
import { ActionButton } from "@/components/atoms";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const BlogMenu = () => {
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
              duration: 0.3,
              delay: inView ? delay : 0,
            },
          });
          setAnimationStarted(true);
        }, 300);
      };
      startAnimation();
    }
  }, [inView, controls, animationStarted]);

  const delay = 0.3;

  return (
    <div ref={ref}>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, x: -5000 }}
        transition={{ delay: inView ? 0.8 : 0, type: "ease-in" }}
      >
        <div id="blog" className={styles.foodMenuContainer}>
          <div className={styles.foodMenuContent}>
            <div className={styles.foodMenuCover}>
              <p className={styles.foodMenuText}>
                Recent blog posts Explore
                <span className={styles.foodMenuCircle}> now. </span>
              </p>
              <ActionButton blackButton text={"Read all news"} />
            </div>

            <div className={styles.foodMenuProposal}>
              {data.map((item, index) => (
                <MenuItemBlog key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const data = [
  {
    id: 1,
    date: "3.08.2023",
    type: "cortado",
    title: "Make sure your coffee is as fresh as it can be.",
    img: "/images/blog-1.png",
  },
  {
    id: 2,
    date: "12.04.2023",
    type: "cortado",
    title: "The Best Coffee Advent Calendars of this year.",
    img: "/images/blog-2.png",
  },
  {
    id: 3,
    date: "25.06.2023",
    type: "cortado,",
    title: "The Most Common Way People Drink Noir Café.",
    img: "/images/blog-3.png",
  },
  {
    id: 4,
    date: "17.01.2023",
    type: "cortado",
    title: "Coffee Beans Prepared In Four Different Ways.",
    img: "/images/blog-4.png",
  },
  {
    id: 5,
    date: "1.10.2023",
    type: "cortado",
    title: "The Baristan Kettle is a Beacon for Preparation.",
    img: "/images/blog-5.png",
  },
  {
    id: 6,
    date: "13.09.2023",
    type: "cortado",
    title: "The World’s Best Coffee Tours: Brasil, Columbi.",
    img: "/images/blog-6.png",
  },
];
