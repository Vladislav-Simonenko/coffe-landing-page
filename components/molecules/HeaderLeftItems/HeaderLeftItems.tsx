import React from "react";
import styles from "./HeaderLeftItems.module.scss";
import Link from "next/link";

export const HeaderLeftItems = () => {
  return (
    <div className={styles.headerMenuLinks}>
      <Link className={styles.headerLink} href={"#"}>
        Home
      </Link>
      <Link className={styles.headerLink} href={"#"}>
        Pages
      </Link>
      <Link className={styles.headerLink} href={"#"}>
        Shop
      </Link>
      <Link className={styles.headerLink} href={"#"}>
        Blog
      </Link>
    </div>
  );
};
