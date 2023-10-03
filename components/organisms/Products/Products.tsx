import React from "react";
import styles from "./Products.module.scss";
import { ActionButton } from "@/components/atoms";
import arrow from "public/slider-arrow.svg";
import product1 from "public/images/product-1.png";
import product2 from "public/images/product-2.png";
import Image from "next/image";

//@FIXME need refactor
export const Products = () => {
  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListContant}>
        <div className={styles.productListInfo}>
          <p className={styles.infoTitle}>
            Our blends deliver on the promise of balance and consistency,
            <span className={styles.infoTitleCircle}> roasted to </span>
            maximize sweetness.
          </p>
          <p className={styles.infoDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            enim ut perferendis porro vitae vouptatum hic sequi consequuntur
            praesentium exercitationem odit, dolor, illum impedit quisquam
            repellat! Dolorem dolores tempora ipsum.
          </p>
          <ActionButton text={"view more"} img={arrow} />
        </div>
        {coffeData.map((item) => (
          <div key={item.id} className={styles.productListPopular}>
            <Image className={styles.productImage} src={item.img} alt={""} />
            <p className={styles.productName}>{item.name}</p>
            <p className={styles.productPrice}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const coffeData = [
  {
    id: 1,
    img: product1,
    name: "Arabica Bekele",
    price: "$44.00",
  },
  {
    id: 2,
    img: product2,
    name: "Robusta Santa",
    price: "$35.00",
  },
];
