"use client";
import React from "react";
import styles from "./FollowUs.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const FollowUs = () => {
  const staggerDuration = 0.3; 
  
  return (
    <div className={styles.followUsContainer}>
      <div className={styles.followUsContent}>
        {coffeDataItem.map((item, index) => {
          return (
            <motion.div
              className={styles.followUsImageContainer}
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * staggerDuration }}
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
