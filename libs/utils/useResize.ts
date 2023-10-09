"use client";

import { useState, useEffect } from "react";

const SCREEN_SM = 321;
const SCREEN_MD = 601;
const SCREEN_LG = 961;
const SCREEN_XL = 1025;
const SCREEN_XXL = 1400;

export const useResize = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window ? window.innerWidth : 1376
  );

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
