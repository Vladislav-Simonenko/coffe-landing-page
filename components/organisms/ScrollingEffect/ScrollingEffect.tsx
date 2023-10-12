import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ScrollingEffect = ({ children }: any): JSX.Element => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start({
      opacity: inView ? 1 : 0, // Прозрачность
      y: inView ? 0 : 100, // Сдвиг по вертикали
    });
  }, [controls, inView]);

  // Обработчик события скролла
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        ScrollY: {scrollY}
      </div>
    </div>
  );
};
