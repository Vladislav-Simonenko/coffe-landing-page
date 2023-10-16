import React from "react";
import styles from "./TextDivider.module.scss";
interface ITextDivider {
  text: string;
}

export const TextDivider = (props: ITextDivider) => {
  const { text } = props;

  return (
    <div className={styles.dividerContainer}>
      <p className={styles.dividerText}>{text}</p>
    </div>
  );
};
