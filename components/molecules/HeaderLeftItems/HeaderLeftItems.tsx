import React from "react";
import styles from "./HeaderLeftItems.module.scss";
import Link from "next/link";

export const HeaderLeftItems = () => {
  return (
    <div className={styles.headerMenuLinks}>
      <Link className={styles.headerLink} href={"#home"}>
        Home
      </Link>
      <Link className={styles.headerLink} href={"#pages"}>
        Pages
      </Link>
      <Link className={styles.headerLink} href={"#shop"}>
        Shop
      </Link>
      <Link className={styles.headerLink} href={"#blog"}>
        Blog
      </Link>
    </div>
  );
};
