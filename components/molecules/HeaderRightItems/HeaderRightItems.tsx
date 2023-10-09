"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import secondSvgLogo from "public/logo-black-2.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderRightItems.module.scss";
import { BurgerMenu, Logo } from "@/components/atoms";
import svgLogo from "public/logo-black-1.svg";

interface IHeaderRightItemsProps {
  isScreenLg: boolean;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderRightItems = (props: IHeaderRightItemsProps) => {
  const { isScreenLg, isOpen, setOpen } = props;

  return (
    <div className={styles.headerRightBlock}>
      <React.Fragment>
        <Link className={styles.headerLink} href={"#"}>
          Cart
        </Link>
        <Link className={styles.headerLink} href={"#"}>
          Search
        </Link>
        {!isScreenLg ? (
          <React.Fragment>
            <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
            {isOpen ? (
              <div className={styles.menuContainer}>
                <div className={styles.menuContainerTop}>
                  <div className={styles.menuContainerRoutes}>
                    <Logo src={svgLogo} />
                    <div className={styles.menuBackgroundBlur}></div>
                    <div className={styles.linksBlock}>
                      <Link className={styles.link} href={"#"}>
                        Home
                      </Link>
                      <Link className={styles.link} href={"#"}>
                        Pages
                      </Link>
                      <Link className={styles.link} href={"#"}>
                        Shop
                      </Link>
                      <Link className={styles.link} href={"#"}>
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ) : (
          <div className={styles.headerRightBlockLogo}>
            <Image width={165} height={40} src={secondSvgLogo} alt={"star"} />
          </div>
        )}
      </React.Fragment>
    </div>
  );
};
