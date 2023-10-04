import React from "react";
import styles from "./MenuItem.module.scss";
import { ActionButton } from "@/components/atoms";
import arrow from "public/slider-arrow.svg";

interface IMenuItemProps {
  item: { id: number; title: string; description: string };
}

export const MenuItem = (props: IMenuItemProps) => {
  const { item } = props;
  return (
    <div className={styles.menuItemContainer}>
      <div className={styles.menuItemContant} key={item.id}>
        <p className={styles.menuItemTitle}>{item.title}</p>
        <p className={styles.menuItemDesc}>{item.description}</p>
      </div>
      <React.Fragment>
        <ActionButton text={"view more"} img={arrow} />
      </React.Fragment>
    </div>
  );
};
