import React from "react";
import styles from "./AdvantagesDivider.module.scss";

interface IAdvantagesDivider {
  data: { id: number; text: string }[];
}

export const AdvantagesDivider = (props: IAdvantagesDivider) => {
  const { data } = props;
  return (
    <div className={styles.dividerContainer}>
      {data.map((item, index) => (
        <p key={item.id}>
          {item.text}
          {index !== data.length - 1 ? (
            <span className={styles.divider}>|</span>
          ) : (
            ""
          )}
        </p>
      ))}
    </div>
  );
};
