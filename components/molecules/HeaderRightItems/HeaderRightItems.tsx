import React from "react";
import secondSvgLogo from "public/logo-black-2.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderRightItems.module.scss";

export const HeaderRightItems = () => {
  return (
    <div className={styles.headerRightBlock}>
      <Link className={styles.headerLink} href={"#"}>
        Cart
      </Link>
      <Link className={styles.headerLink} href={"#"}>
        Search
      </Link>
      <div className={styles.headerRightBlockLogo}>
        <Image width={165} height={40} src={secondSvgLogo} alt={"star"} />
      </div>
    </div>
  );
};
