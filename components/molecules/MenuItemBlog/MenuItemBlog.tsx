import React from "react";
import styles from "./MenuItemBlog.module.scss";
import { ActionButton } from "@/components/atoms";
import arrow from "public/slider-arrow.svg";
import Image from "next/image";

interface IMenuItemProps {
  item: { id: number; date: string; type: string; title: string; img: string };
}

export const MenuItemBlog = (props: IMenuItemProps) => {
  const { item } = props;
  return (
    <div className={styles.menuItemContainer}>
      <Image
        className={styles.menuItemImage}
        src={item.img}
        alt={""}
        width={"1920"}
        height={"1080"}
      />
      <div className={styles.menuItemContent} key={item.id}>
        <div className={styles.menuItemHeader}>
          <div className={styles.menuItemHeaderInfo}>
            <p className={styles.menuItemDate}>{item.date}</p>
            {" | "}
            <p className={styles.menuItemType}>{item.type}</p>
          </div>
          <p className={styles.menuItemTitle}>{item.title}</p>
        </div>

        <ActionButton text={"Read more"} img={arrow} />
      </div>
    </div>
  );
};
