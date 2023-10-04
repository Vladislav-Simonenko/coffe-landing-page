import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface IProductCard {
  item: {
    id: number;
    img: string;
    name: string;
    price: string;
    text: string;
    label?: boolean;
  };
}

export const ProductCard = (props: IProductCard) => {
  const { item } = props;

  return (
    <div key={item?.id} className={styles.productListPopular}>
      <Image
        className={styles.productImage}
        src={item?.img}
        alt={item?.name}
        width={1920}
        height={1080}
      />
      <p className={styles.productName}>{item?.name}</p>
      <p className={styles.productPrice}>{item?.price}</p>
      {item.label ? (
        <div
          className={`${styles.productLabel} ${
            styles[item.text.toLocaleLowerCase()]
          }`}
        >
          {item?.text}
        </div>
      ) : null}
    </div>
  );
};
