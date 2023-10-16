import React from "react";

import { EventObject } from "../../../redux/eventSlice/types";
import { url } from "../../../constants/url";
import { editString } from "../../../utils/editString";

import styles from "./Description.module.scss";

const Description: React.FC<EventObject> = ({
  name,
  long_description,
  logo_url,
  status,
  vk_url,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <h1>{name}</h1>
        <p>{editString(long_description)}</p>
        <h3>
          Статус мероприятия:
          <span className={status === "прошло" ? styles.red : styles.green}>
            {status}
          </span>
        </h3>

        <div>
          {vk_url && (
            <a href={vk_url} target="_blank" rel="noreferrer">
              <button>VK</button>
            </a>
          )}
        </div>
      </div>
      <img src={url + logo_url} alt="Logotype" />
    </section>
  );
};

export default Description;
