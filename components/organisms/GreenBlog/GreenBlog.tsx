"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ActionButton } from "@/components/atoms";
import styles from "./GreenBlog.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const GreenBlog = () => {
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
        <div className={styles.greenBlogContainer}>
          <div className={styles.greenBlogContent}>
            <div className={styles.greenBlogImageContainer}>
              <Image
                className={styles.greenBlogImage}
                src={"/images/careers-1.png"}
                alt={"careers"}
                width={1920}
                height={1080}
              />
            </div>

            <div className={styles.greenBlogTextContent}>
              <p className={styles.greenBlogTitle}>{titleText}</p>
              <p className={styles.greenBlogDescription}>{descriptionText}</p>
              <ActionButton blackButton text={"VIEW MORE"} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GreenBlog;

const titleText = "Barista Schools & Careers";

const descriptionText =
  "We host courses covering everything from simple home brewing techniques to advanced latte art to allow you to learn the essential life skill of how to make truly great coffee.";
