import React from "react";
import { ProductCard } from "@/components/atoms";
import styles from "./ItemList.module.scss";

interface IDataProps {
  data: {
    id: number;
    img: string;
    name: string;
    price: string;
    text: string;
    label?: boolean | undefined;
    onlyImage?: boolean;
  }[];
}

export const ItemList = (props: IDataProps) => {
  const { data } = props;

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListContent}>
        {data.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};
