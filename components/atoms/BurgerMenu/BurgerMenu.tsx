import React, { Dispatch, SetStateAction } from "react";
import Hamburger from "hamburger-react";
import styles from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu = (props: IBurgerMenuProps) => {
  const { isOpen, setOpen } = props;
  return (
    <div className={styles.burgerMenuContainer}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};
