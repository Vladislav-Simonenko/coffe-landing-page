import styles from "./Header.module.scss";
import svgLogo from "public/logo-black-1.svg";

import {
  HeaderLeftItems,
  HeaderRightItems,
  HeaderTopBlock,
} from "@/components/molecules";
import { Logo } from "@/components/atoms";

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderTopBlock />

      <div className={styles.headerMenuContainer}>
        <div className={styles.headerMenuContent}>
          <HeaderLeftItems />

          <Logo src={svgLogo} />

          <HeaderRightItems />
        </div>
      </div>
    </div>
  );
};
