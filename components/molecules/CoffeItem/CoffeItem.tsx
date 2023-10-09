import React from "react";
import styles from "./CoffeItem.module.scss";

interface ICoffeItemProps {
  data: {
    id: number | string;
    title: string;
    description: string;
    price: string;
  }[];
}

export const CoffeItem = (props: ICoffeItemProps) => {
  const { data } = props;

  return (
    <div className={styles.coffeItemContainer}>
      {data.map((item) => {
        return (
          <div className={styles.coffeItemContant} key={item.id}>
            <div className={styles.coffeItemLeftSideBlock}>
              <p className={styles.coffeItemTitle}>{item.title}</p>
              <p className={styles.coffeItemDescription}>{item.description}</p>
            </div>
            <div className={styles.CoffeItemRightSideBlock}>
              <p className={styles.coffeItemPrice}>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
