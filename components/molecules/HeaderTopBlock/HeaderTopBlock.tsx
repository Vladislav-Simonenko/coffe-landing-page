"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./HeaderTopBlock.module.scss";

interface TypingTextProps {
  text: string;
  speed?: number;
}
export const HeaderTopBlock = (props: TypingTextProps) => {
  const { text, speed } = props;
  const [visibleText, setVisibleText] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [animationComplete, setAnimationComplete] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
      setTimeout(() => {
        animateText();
      }, 500);
    }
  }, [inView, controls]);

  const animateText = () => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setVisibleText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);

        const blinkTimer = setInterval(() => {
          setBlinkVisible((prevVisible) => !prevVisible);
        }, 500);

        setTimeout(() => {
          clearInterval(blinkTimer);
          setAnimationComplete(true);
        }, 3000);
      }
    }, speed);
  };

  const endTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.headerTopBlackContent}>
      <motion.div
        style={{
          position: "relative",
        }}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <p className={styles.headerTopText}>
          {visibleText}
          {!animationComplete ? (
            <motion.span
              initial="hidden"
              animate={blinkVisible ? "visible" : "hidden"}
              variants={endTextVariants}
              style={{
                position: "absolute",
              }}
            >
              |
            </motion.span>
          ) : null}
        </p>
      </motion.div>
    </div>
  );
};
