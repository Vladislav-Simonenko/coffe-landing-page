import React from "react";
import styles from "./HeaderTopBlock.module.scss";

export const HeaderTopBlock = () => {
  return (
    <div className={styles.headerTopBlackContent}>
      <p className={styles.headerTopText}>
        Welcome to Early Birds. We ship every Tuesday and Thursday. Free
        shipping above €25 in The Netherlands.
      </p>
    </div>
  );
};
