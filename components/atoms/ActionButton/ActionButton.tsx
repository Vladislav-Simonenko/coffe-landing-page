import React from "react";
import styles from "./ActionButton.module.scss";
import Image from "next/image";

interface IActionButtonProps {
  text: string;
  img?: string;
}

export const ActionButton = (props: IActionButtonProps) => {
  const { text, img } = props;
  return (
    <button className={styles.actionButtonContainer}>
      {text} {img && <Image src={img} alt={""} />}
    </button>
  );
};
