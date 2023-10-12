"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "./AdvantagesDivider.module.scss";
import { ScrollingEffect } from "@/components/organisms/ScrollingEffect/ScrollingEffect";

interface IAdvantagesDivider {
  data: { id: number; text: string }[];
}

export const AdvantagesDivider = (props: IAdvantagesDivider) => {
  const { data } = props;

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
    <div className={styles.dividerContainer}>
      {data.map((item, index) => (
        <p key={item.id}>
          {item.text}
          {index !== data.length - 1 ? (
            <span className={styles.divider}>|</span>
          ) : (
            ""
          )}
        </p>
      ))}
    </div>
  );
};
