import React from "react";
import styles from "./RatingStarsCounter.module.scss";
import Image from "next/image";

interface IRatingProps {
  rating: number;
  maxRating: number;
}

export const RatingStarsCounter = (props: IRatingProps) => {
  const { rating, maxRating } = props;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    let starClass = styles.star;

    stars.push(
      <span key={i} className={starClass}>
        {i <= rating ? (
          <>
            <Image src={"/star.svg"} alt="" width={25} height={25} />
          </>
        ) : i - 1 < rating && i > rating ? (
          <div className={styles.halfStarContainer}>
            <Image
              className={styles.halfStar}
              src={"/star.svg"}
              alt=""
              width={25}
              height={25}
            />
            <div className={styles.halfStarWhiteBlock}></div>
          </div>
        ) : (
          ""
        )}
      </span>
    );
  }

  return <div className={styles.rating}>{stars}</div>;
};
