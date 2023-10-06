"use client";

import React, { useState } from "react";
import styles from "./ReserveTable.module.scss";
import { Selector } from "@/components/molecules";

export const ReserveTable = () => {
  const [reservation, setReservation] = useState<React.ReactNode>();

  const handleReservationChange = (
    newReservation: React.SetStateAction<any>
  ) => {
    setReservation(newReservation);
  };

  return (
    <div className={styles.reserveContainer}>
      <div className={styles.reserveContent}>
        <p className={styles.reserveTitle}>Reserve you table</p>
        <Selector onReservationChange={handleReservationChange} />
        {reservation && (
          <p className={styles.reserveDescriprion}>
            the table was booked on{" "}
            {reservation?.date +
              " " +
              reservation?.time +
              ", for " +
              reservation?.numberOfPeople +
              " person "}
          </p>
        )}
      </div>
    </div>
  );
};
