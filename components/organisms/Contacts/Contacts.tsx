"use client";
import React, { useState, useEffect } from "react";
import styles from "./Contacts.module.scss";
import Image from "next/image";

interface TableRow {
  id: number;
  name: string;
  contactInfo: {
    img: string;
    address: string;
    phone: string;
    mail: string;
    weekdaysWorkTime: string;
    weekendWorkTike: string;
  };
}
//@FIXME need find how thruly rotate table
export const Contacts = () => {
  const initialData: TableRow[] = [
    {
      id: 1,
      name: "Lisbon Coffee Salon",
      contactInfo: {
        img: "",
        address: "",
        phone: "",
        mail: "",
        weekdaysWorkTime: "",
        weekendWorkTike: "",
      },
    },
    {
      id: 2,
      name: "Berlin Coffee Roastery",
      contactInfo: {
        img: "",
        address: "",
        phone: "",
        mail: "",
        weekdaysWorkTime: "",
        weekendWorkTike: "",
      },
    },
    {
      id: 3,
      name: "Amsterdam Coffee Shop",
      contactInfo: {
        img: "",
        address: "",
        phone: "",
        mail: "",
        weekdaysWorkTime: "",
        weekendWorkTike: "",
      },
    },
    {
      id: 4,
      name: "Amsterdam Centre Coffee",
      contactInfo: {
        img: "",
        address: "",
        phone: "",
        mail: "",
        weekdaysWorkTime: "",
        weekendWorkTike: "",
      },
    },
  ];

  const [data, setData] = useState(initialData);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      setExpandedRows([data[0].id]);
    }
  }, [data]);

  const toggleRow = (id: number) => {
    if (expandedRows.includes(id)) {
      if (expandedRows.length === 1) {
        return;
      }
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([id]);
    }
  };

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsContent}>
        <table className={styles.horizontalTable}>
          <tbody>
            {data.map((row) => (
              <React.Fragment key={row.id}>
                <tr onClick={() => toggleRow(row.id)}>
                  <td>
                    <p className={styles.columnName}>{row.name}</p>
                  </td>
                </tr>
                {expandedRows.includes(row.id) && (
                  <tr>
                    <td colSpan={2} className={styles.infoContainer}>
                      <div className={styles.rotateWrapper}>
                        <div
                          className={`${styles.rotate} ${styles.infoRotate}`}
                        >
                          <Image
                            className={styles.infoImage}
                            src={"/images/contact-1.png"}
                            alt={""}
                            width={1920}
                            height={1080}
                          />
                        </div>
                      </div>
                    </td>
                    <td colSpan={4}>
                      <div className={styles.infoRotate}>
                        <p>title</p>
                        <p>address</p>
                        <p>phone</p>
                        <p>mail</p>
                        <p>workday</p>
                        <p>weekend work day</p>
                        <button>contact us</button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
