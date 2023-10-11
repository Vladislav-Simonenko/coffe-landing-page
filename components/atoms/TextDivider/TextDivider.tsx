"use client";
import React, { useEffect, useState } from "react";
import styles from "./TextDivider.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
interface ITextDivider {
  text: string;
}

export const TextDivider = (props: ITextDivider) => {
  const { text } = props;
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
        <div className={styles.dividerContainer}>
          <p className={styles.dividerText}>{text}</p>
        </div>
      </motion.div>
    </div>
  );
};
