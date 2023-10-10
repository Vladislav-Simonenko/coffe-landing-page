import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLocationBlock}>
          <div className={styles.footerLocationImageContainer}>
            <Image
              className={styles.footerLocationImage}
              src={"/footer-img-1.svg"}
              alt={""}
              width={1920}
              height={1080}
            />
          </div>

          <div className={styles.footerLocationText}>
            <p className={styles.footerLocationTitle}>Early Birds</p>
            <p className={styles.footerLocationDistrict}>
              Weteringstraat 48,1017 SP
            </p>
            <p className={styles.footerLocationCity}>Amsterdam</p>
            <p className={styles.footerLocationPhone}>Tel: 020-7718364</p>
          </div>
        </div>

        <div className={styles.footerLocationMenu}>
          <Link className={styles.link} href={"#home"}>
            My Account
          </Link>
          <Link className={styles.link} href={"#pages"}>
            Pages
          </Link>
          <Link className={styles.link} href={"#shop"}>
            Cart
          </Link>
          <Link className={styles.link} href={"#blog"}>
            Blog
          </Link>
        </div>

        <div className={styles.footerLocationSocial}>
          <p>facebook </p>
          <p>instagram </p>
          <p>twitter </p>
        </div>
      </div>
    </div>
  );
};
