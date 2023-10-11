"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import secondSvgLogo from "public/logo-black-2.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderRightItems.module.scss";
import { BurgerMenu, Logo } from "@/components/atoms";
import { AnimatePresence, motion } from "framer-motion";
interface IHeaderRightItemsProps {
  isScreenLg: boolean;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderRightItems = (props: IHeaderRightItemsProps) => {
  const { isScreenLg, isOpen, setOpen } = props;
  const rotateDuration = 6;
  const rotation = 360;

  const rotationVariants = {
    initial: { rotate: 0 },
    animate: { rotate: rotation },
  };
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
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0, transform: "translateY(-100%)" }}
                  animate={{ opacity: 1, transform: "translateY(0%)" }}
                  exit={{ opacity: 0, transform: "translateY(-100%)" }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className={styles.menuContainer}
                >
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
                </motion.div>
              ) : null}
            </AnimatePresence>
          </React.Fragment>
        ) : (
          <div className={styles.headerRightBlockLogo}>
            <motion.div
              initial="initial"
              animate="animate"
              variants={rotationVariants}
              transition={{
                duration: rotateDuration,
                ease: "linear",
              }}
            >
              <Image width={165} height={40} src={secondSvgLogo} alt={"star"} />
            </motion.div>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};
