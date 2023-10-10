"use client";

import styles from "./Header.module.scss";
import {
  HeaderLeftItems,
  HeaderRightItems,
  HeaderTopBlock,
} from "@/components/molecules";
import { Logo } from "@/components/atoms";
import { useResize } from "@/libs";
import { useEffect, useState } from "react";

export const Header = () => {
  const { isScreenLg } = useResize();
  const [isOpen, setOpen] = useState(false);

  //for fix first render
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className={styles.header}>
        <HeaderTopBlock
          text=" Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands."
          speed={80}
        />
        <div className={styles.headerMenuContainer}>
          <div className={styles.headerMenuContent}>
            {isScreenLg ? <HeaderLeftItems /> : null}
            <Logo src={"/logo-black-1.svg"} />
            <HeaderRightItems
              isOpen={isOpen}
              setOpen={setOpen}
              isScreenLg={isScreenLg}
            />
          </div>
        </div>
      </div>
    )
  );
};
