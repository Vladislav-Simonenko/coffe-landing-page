import React from "react";
import styles from "./ActionButton.module.scss";
import Image from "next/image";

interface IActionButtonProps {
  text: string;
  img?: string;
  blackButton?: boolean;
  onClick?: () => void;
}

export const ActionButton = (props: IActionButtonProps) => {
  const { text, img, blackButton, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={
        blackButton ? styles.actionBlackButton : styles.actionButtonContainer
      }
    >
      {text} {img && <Image src={img} alt={""} />}
    </button>
  );
};
