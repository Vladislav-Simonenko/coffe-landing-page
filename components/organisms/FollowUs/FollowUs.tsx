"use client";

import React, { useEffect, useState } from "react";
import styles from "./FollowUs.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const FollowUs = () => {
  const staggerDuration = 0.3;
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
        <div className={styles.followUsContainer}>
          <div className={styles.followUsContent}>
            {coffeDataItem.map((item, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
              });

              return (
                <motion.div
                  ref={ref}
                  className={styles.followUsImageContainer}
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{
                    duration: 1,
                    delay: inView ? index * staggerDuration : 0,
                  }}
                >
                  <Image
                    className={styles.followUsImage}
                    src={item.img}
                    alt={""}
                    width={1920}
                    height={1080}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const coffeDataItem = [
  {
    id: 1,
    img: "/images/follow-us-1.png",
  },
  {
    id: 2,
    img: "/images/follow-us-2.png",
  },
  {
    id: 3,
    img: "/images/follow-us-3.png",
  },
  {
    id: 4,
    img: "/images/follow-us-4.png",
  },
  {
    id: 5,
    img: "/images/follow-us-5.png",
  },
  {
    id: 6,
    img: "/images/follow-us-6.png",
  },
  {
    id: 7,
    img: "/images/follow-us-7.png",
  },
  {
    id: 8,
    img: "/images/follow-us-8.png",
  },
  {
    id: 9,
    img: "/images/follow-us-9.png",
  },
  {
    id: 10,
    img: "/images/follow-us-10.png",
  },
];
