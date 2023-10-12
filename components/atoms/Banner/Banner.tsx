"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ScrollingEffect } from "@/components/organisms/ScrollingEffect/ScrollingEffect";

interface IBannerProps {
  text: string;
  img: string;
}

export const Banner = (props: IBannerProps) => {
  const { text, img } = props;

  return (
    <div id="pages" className={styles.bannerContainer}>
      <Image
        className={styles.bannerImage}
        width={1920}
        height={1080}
        src={img}
        alt={""}
      />
      <p className={styles.bannerText}>{text}</p>
    </div>
  );
};
