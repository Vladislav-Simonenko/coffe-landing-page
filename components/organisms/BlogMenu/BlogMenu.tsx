import React from "react";
import styles from "./BlogMenu.module.scss";
import { MenuItemBlog } from "@/components/molecules";
import { ActionButton } from "@/components/atoms";

export const BlogMenu = () => {
  return (
    <div className={styles.foodMenuContainer}>
      <div className={styles.foodMenuContent}>
        <div className={styles.foodMenuCover}>
          <p className={styles.foodMenuText}>
            Recent blog posts Explore
            <span className={styles.foodMenuCircle}> now. </span>
          </p>
          <ActionButton blackButton text={"Read all news"} />
        </div>

        <div className={styles.foodMenuProposal}>
          {data.map((item) => (
            <MenuItemBlog item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    date: "3.08.2023",
    type: "cortado",
    title: "Make sure your coffee is as fresh as it can be.",
    img: "/images/blog-1.png",
  },
  {
    id: 2,
    date: "12.04.2023",
    type: "cortado",
    title: "The Best Coffee Advent Calendars of this year.",
    img: "/images/blog-2.png",
  },
  {
    id: 3,
    date: "25.06.2023",
    type: "cortado,",
    title: "The Most Common Way People Drink Noir Café.",
    img: "/images/blog-3.png",
  },
  {
    id: 4,
    date: "17.01.2023",
    type: "cortado",
    title: "Coffee Beans Prepared In Four Different Ways.",
    img: "/images/blog-4.png",
  },
  {
    id: 5,
    date: "1.10.2023",
    type: "cortado",
    title: "The Baristan Kettle is a Beacon for Preparation.",
    img: "/images/blog-5.png",
  },
  {
    id: 6,
    date: "13.09.2023",
    type: "cortado",
    title: "The World’s Best Coffee Tours: Brasil, Columbi.",
    img: "/images/blog-6.png",
  },
];
