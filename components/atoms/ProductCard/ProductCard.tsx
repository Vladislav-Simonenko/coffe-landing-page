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
    onlyImage?: boolean;
  };
  index: number;
}

export const ProductCard = (props: IProductCard) => {
  const { item } = props;

  return (
    <div className={styles.productListPopular}>
      <div className={styles.productImageContainer}>
        <Image
          className={
            item.onlyImage ? styles.productImageOnly : styles.productImage
          }
          src={item?.img}
          alt={item?.name}
          width={1920}
          height={82}
        />
      </div>
      <div>
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
    </div>
  );
};
