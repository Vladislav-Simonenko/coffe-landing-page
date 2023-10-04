import React from "react";
import { ProductCard } from "@/components/atoms";
import styles from "./ProductList.module.scss";

export const ProductList = () => {
  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListContent}>
        {coffeData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};
const coffeData = [
  {
    id: 1,
    img: "/images/product-3.png",
    name: "French Roast",
    price: "$37.00",
    text: "",
    label: false,
  },
  {
    id: 2,
    img: "/images/product-4.png",
    name: "Decaf Espresso",
    price: "$41.00",
    text: "New",
    label: true,
  },
  {
    id: 3,
    img: "/images/product-5.png",
    name: "Costa Rica",
    price: "$36.00",
    text: "",
    label: false,
  },
  {
    id: 4,
    img: "/images/product-6.png",
    name: "Decaf French Roast Santa",
    price: "$45.00",
    text: "Sold",
    label: true,
  },
];
