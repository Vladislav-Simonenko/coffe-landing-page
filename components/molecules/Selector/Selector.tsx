"use client";

import { ActionButton, Select } from "@/components/atoms";
import React, { useEffect, useState } from "react";
import styles from "./Selector.module.scss";
import { generateNumbersArray, generateRandomFreeTime } from "@/libs";

export interface Reservation {
  date: string;
  time: string;
  numberOfPeople: string;
}

interface ISelectorProps {
  onReservationChange: (reservation: Reservation | null) => void;
}

export const Selector = (props: ISelectorProps) => {
  const { onReservationChange } = props;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState("");
  const [freeTime, setFreeTime] = useState<{ id: number; time: string }[]>([]);
  const [number, setNumber] = useState<{ id: number; time: string }[]>([]);

  useEffect(() => {
    const generatedFreeTime = generateRandomFreeTime();
    setFreeTime(generatedFreeTime as any);
  }, []);

  useEffect(() => {
    const generateGuests = generateNumbersArray();
    setNumber(generateGuests as any);
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleNumberOfPeopleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedNumberOfPeople(event.target.value);
  };

  const handleReservationSubmit = () => {
    if (selectedDate && selectedTime && selectedNumberOfPeople) {
      const reservation: Reservation = {
        date: selectedDate,
        time: selectedTime,
        numberOfPeople: selectedNumberOfPeople,
      };
      onReservationChange(reservation);
    } else {
      onReservationChange(null);
    }
  };

  return (
    <div className={styles.selectorContainer}>
      <input
        className={styles.inputStyles}
        type="date"
        id="date-select"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <Select
        text={"Choose a time"}
        stringId={"time-select"}
        selectedValue={selectedTime}
        handleChange={handleTimeChange}
        data={freeTime}
      />
      <Select
        text={"Select the number of people"}
        stringId={"people-select"}
        selectedValue={selectedNumberOfPeople}
        handleChange={handleNumberOfPeopleChange}
        data={number}
        bigParty
      />

      <ActionButton
        onClick={handleReservationSubmit}
        text={"Book a table"}
        blackButton
      />
    </div>
  );
};
