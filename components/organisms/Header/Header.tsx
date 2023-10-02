import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "public/logo-black-1.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTopBlackContent}>
        <p className={styles.headerTopText}>
          Welcome to Early Birds. We ship every Tuesday and Thursday. Free
          shipping above €25 in The Netherlands.
        </p>
      </div>

      <div className={styles.headerMenuContainer}>
        <div className={styles.headerMenuContent}>
          <div className={styles.headerMenuLinks}>
            <Link className={styles.headerLink} href={"#"}>
              Home
            </Link>
            <Link className={styles.headerLink} href={"#"}>
              Pages
            </Link>
            <Link className={styles.headerLink} href={"#"}>
              Shop
            </Link>
            <Link className={styles.headerLink} href={"#"}>
              Blog
            </Link>
          </div>

          <div className={styles.headerLogo}>
            <Image
              width={165}
              height={40}
              src={logo}
              alt={"early birgs coffe"}
            />
          </div>

          <div> cart search logo2</div>
        </div>
      </div>
    </div>
  );
};
