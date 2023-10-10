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

  const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

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
        setAnimationComplete(true);
      }
    }, speed);
  };

  useInterval(() => {
    setAnimationComplete((prevComplete) => !prevComplete);
  }, 500);

  const endTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.headerTopBlackContent}>
      <p className={styles.headerTopText}>
        <motion.div
          style={{
            position: "relative",
          }}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
        >
          {visibleText}
          {animationComplete && (
            <motion.span
              initial="hidden"
              animate="visible"
              variants={endTextVariants}
              style={{
                position: "absolute",
              }}
            >
              |
            </motion.span>
          )}
        </motion.div>
      </p>
    </div>
  );
};
