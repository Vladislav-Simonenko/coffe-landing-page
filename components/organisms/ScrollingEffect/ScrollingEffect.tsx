import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useReducedMotion,
  useScroll,
} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

export const ScrollingEffect = ({
  children,
  offset = 100,
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 200, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className="scrolling-effect">
      {children}
    </motion.div>
  );
};
