"use client";
import React, { useEffect, useState } from "react";
import styles from "./ReserveTable.module.scss";
import { Selector } from "@/components/molecules";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const ReserveTable = () => {
  const [reservation, setReservation] = useState<React.ReactNode>();

  const handleReservationChange = (
    newReservation: React.SetStateAction<any>
  ) => {
    setReservation(newReservation);
  };

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
        <div className={styles.reserveContainer}>
          <div className={styles.reserveContent}>
            <p className={styles.reserveTitle}>Reserve you table</p>
            <Selector onReservationChange={handleReservationChange} />
            {reservation && (
              <p className={styles.reserveDescriprion}>
                the table was booked on {/* @ts-ignore */}
                {reservation?.date +
                  " " +
                  //  @ts-ignore
                  reservation?.time +
                  ", for " +
                  //  @ts-ignore
                  reservation?.numberOfPeople +
                  " person "}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
