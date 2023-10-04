import Image from "next/image";
import React from "react";
import styles from "./Banner.module.scss";

interface IBannerProps {
  text: string;
  img: string;
}

export const Banner = (props: IBannerProps) => {
  const { text, img } = props;

  return (
    <div className={styles.bannerContainer}>
      <Image
        className={styles.bannerImage}
        width={1920}
        height={752}
        src={img}
        alt={""}
      />
      <p className={styles.bannerText}>{text}</p>
    </div>
  );
};
