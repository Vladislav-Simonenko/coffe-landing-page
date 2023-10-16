import styles from "./Header.module.scss";
import {
  HeaderLeftItems,
  HeaderRightItems,
  HeaderTopBlock,
} from "@/components/molecules";
import { Logo } from "@/components/atoms";
import { useResize } from "@/libs";

export const Header = () => {
  //for fix first render

  return (
    <>
      {" "}
      <div className={styles.header}>
        <HeaderTopBlock
          text=" Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands."
          speed={50}
        />
        <div className={styles.headerMenuContainer}>
          <div className={styles.headerMenuContent}>
            {<HeaderLeftItems />}
            <Logo src={"/logo-black-1.svg"} />
          </div>
        </div>
      </div>{" "}
    </>
  );
};
