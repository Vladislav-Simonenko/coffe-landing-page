import React from "react";
import Image from "next/image";
import styles from "./CoffeMenuList.module.scss";
import { CoffeItem } from "@/components/molecules";

export const CoffeMenuList = () => {
  return (
    <div className={styles.coffeMenuContainer}>
      <div className={styles.coffeMenuContant}>
        <div className={styles.coffeMenuList}>
          <CoffeItem data={coffeDataItem} />
        </div>

        <div className={styles.coffeMenuImageContainer}>
          <Image
            className={styles.coffeMenuImage}
            src={"/images/menu-image-wrap-1.png"}
            alt={""}
            width={1920}
            height={1080}
          />
          <p className={styles.coffeMenuImageText}>Our Coffee</p>
        </div>
      </div>
    </div>
  );
};

const coffeDataItem = [
  {
    id: 1,
    title: "Caffe Latte",
    description: "Fresh brewed coffee",
    price: "5.00$",
  },
  {
    id: 2,
    title: "Cappucino",
    description: "Espresso and milk",
    price: "7.00$",
  },
  {
    id: 3,
    title: "Ice Coffee",
    description: "Cold brewed espresso",
    price: "4.00$",
  },
  {
    id: 4,
    title: "Mocha",
    description: "Espresso, mocha sauce, milk",
    price: "7.00$",
  },
  {
    id: 5,
    title: "Espresso",
    description: "Rich espresso with milk",
    price: "4.00$",
  },
];
