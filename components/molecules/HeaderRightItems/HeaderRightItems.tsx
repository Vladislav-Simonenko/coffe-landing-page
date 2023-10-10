"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import secondSvgLogo from "public/logo-black-2.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderRightItems.module.scss";
import { BurgerMenu, Logo } from "@/components/atoms";

interface IHeaderRightItemsProps {
  isScreenLg: boolean;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderRightItems = (props: IHeaderRightItemsProps) => {
  const { isScreenLg, isOpen, setOpen } = props;

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={styles.headerRightBlock}>
      <React.Fragment>
        <Link className={styles.headerLink} href={"#"}>
          {!isScreenLg ? (
            <Image
              className={styles.headerIcon}
              src={"/shopping-cart-4.svg"}
              alt={"Seacrh"}
              width={100}
              height={100}
            />
          ) : (
            "Cart"
          )}
        </Link>
        <Link className={styles.headerLink} href={"#"}>
          {!isScreenLg ? (
            <Image
              className={styles.headerIcon}
              src={"/searching-bar.svg"}
              alt={"Seacrh"}
              width={100}
              height={100}
            />
          ) : (
            "Search"
          )}
        </Link>
        {!isScreenLg ? (
          <React.Fragment>
            <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
            {isOpen ? (
              <div className={styles.menuContainer}>
                <div className={styles.menuContainerTop}>
                  <div className={styles.menuContainerRoutes}>
                    <Logo src={"/logo-black-1.svg"} />
                    <div className={styles.menuBackgroundBlur}></div>
                    <div className={styles.linksBlock}>
                      <Link
                        onClick={closeModal}
                        className={styles.link}
                        href={"#home"}
                      >
                        Home
                      </Link>
                      <Link
                        onClick={closeModal}
                        className={styles.link}
                        href={"#pages"}
                      >
                        Pages
                      </Link>
                      <Link
                        onClick={closeModal}
                        className={styles.link}
                        href={"#shop"}
                      >
                        Shop
                      </Link>
                      <Link
                        onClick={closeModal}
                        className={styles.link}
                        href={"#blog"}
                      >
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
