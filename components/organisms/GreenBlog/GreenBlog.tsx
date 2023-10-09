import React from "react";
import Image from "next/image";
import { ActionButton } from "@/components/atoms";
import styles from "./GreenBlog.module.scss";

const GreenBlog = () => {
  return (
    <div className={styles.greenBlogContainer}>
      <div className={styles.greenBlogContent}>
        <div className={styles.greenBlogImageContainer}>
          <Image
            className={styles.greenBlogImage}
            src={"/images/careers-1.png"}
            alt={"careers"}
            width={1920}
            height={1080}
          />
        </div>

        <div className={styles.greenBlogTextContent}>
          <p className={styles.greenBlogTitle}>{titleText}</p>
          <p className={styles.greenBlogDescription}>{descriptionText}</p>
          <ActionButton blackButton text={"VIEW MORE"} />
        </div>
      </div>
    </div>
  );
};

export default GreenBlog;

const titleText = "Barista Schools & Careers";

const descriptionText =
  "We host courses covering everything from simple home brewing techniques to advanced latte art to allow you to learn the essential life skill of how to make truly great coffee.";
