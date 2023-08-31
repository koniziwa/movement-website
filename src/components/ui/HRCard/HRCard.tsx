import React from "react";

import { PersonType } from "../../../@types/types";

import { url } from "../../../constants/url";

import styles from "./HRCard.module.scss";

const HRCard: React.FC<PersonType> = ({
  name,
  surname,
  telegram,
  position,
  photo_url,
}) => {
  return (
    <div className={styles.card}>
      <img src={url + photo_url} alt="HR Card" />
      <div>
        <a href={`https://t.me/${telegram.slice(1)}`} target="_blank">
          <p>{`tg: ${telegram}`}</p>
        </a>
        <p>{`${name} ${surname}`}</p>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default HRCard;
