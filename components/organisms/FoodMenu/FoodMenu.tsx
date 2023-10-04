import React from "react";
import styles from "./FoodMenu.module.scss";
import Image from "next/image";
import { MenuItem } from "@/components/molecules";

export const FoodMenu = () => {
  return (
    <div className={styles.foodMenuContainer}>
      <div className={styles.foodMenuContent}>
        <div className={styles.foodMenuCover}>
          <p className={styles.foodMenuText}>
            swing by our place <br /> we also
            <span className={styles.foodMenuCircle}> have food. </span>
          </p>
          <Image
            className={styles.foodMenuImage}
            src={"/food-menu.svg"}
            alt={"nuts"}
            width={50}
            height={50}
          />
        </div>

        <div className={styles.foodMenuProposal}>
          {foodMenuItems.map((item) => (
            <MenuItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const foodMenuItems = [
  {
    id: 1,
    title: "Delivery",
    description: "Vivamus hendrerit at sapien nec mattis. Quisque quis arcu",
  },
  {
    id: 2,
    title: "Wholesale",
    description: "Pellentesque in tempor lorem, vel porttitor est.",
  },
  {
    id: 3,
    title: "Consistency",
    description: "Aliquam ut arcu sodales, gravida quam vitae.",
  },
  {
    id: 4,
    title: "Quality",
    description: "Nam at sapien ligula. Morbi maximus scelerisque mi sed.",
  },
];
