"use client";

import styles from "./Header.module.scss";
import svgLogo from "public/logo-black-1.svg";
import {
  HeaderLeftItems,
  HeaderRightItems,
  HeaderTopBlock,
} from "@/components/molecules";
import { Logo } from "@/components/atoms";
import { useResize } from "@/libs";
import { useState } from "react";

export const Header = () => {
  const { isScreenLg } = useResize();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.header}>
      <HeaderTopBlock />
      <div className={styles.headerMenuContainer}>
        <div className={styles.headerMenuContent}>
          {isScreenLg ? <HeaderLeftItems /> : <></>}
          <Logo src={svgLogo} />
          <HeaderRightItems
            isOpen={isOpen}
            setOpen={setOpen}
            isScreenLg={isScreenLg}
          />
        </div>
      </div>
    </div>
  );
};
