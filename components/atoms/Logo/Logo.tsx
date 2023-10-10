import React from "react";
import styles from "./Logo.module.scss";
import Image from "next/image";

interface ILogoProps {
  src: string;
}

export const Logo = (props: ILogoProps) => {
  const { src } = props;

  return (
    <Image
      className={styles.headerLogo}
      width={165}
      height={40}
      src={src}
      alt={"early birgs coffe"}
    />
  );
};
