"use client";

import React from "react";
import styles from "./HeaderLeftItems.module.scss";
import Link from "next/link";
import { useResize } from "@/libs";

export const HeaderLeftItems = () => {
  const { isScreenLg } = useResize();

  return isScreenLg ? (
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
  ) : null;
};
