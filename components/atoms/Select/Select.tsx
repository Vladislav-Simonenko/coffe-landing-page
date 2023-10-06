import React from "react";
import styles from "./Select.module.scss";

interface ISelectProps {
  stringId: string;
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  data: { id: number; time: string }[];
  text: string;
  bigParty?: boolean;
}

export const Select = (props: ISelectProps) => {
  const { stringId, selectedValue, handleChange, data, text, bigParty } = props;
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.selectContent}
        id={stringId}
        value={selectedValue}
        onChange={handleChange}
      >
        <option className={styles.optionContainer} value="">
          {text}
        </option>
        {data.map((item) => {
          return (
            <option
              className={styles.optionContainer}
              key={item.id}
              value={item.time}
            >
              {item.time}
            </option>
          );
        })}
        {bigParty && (
          <option className={styles.optionContainer} value="21+">
            {"Big Party"}
          </option>
        )}
      </select>
    </div>
  );
};
