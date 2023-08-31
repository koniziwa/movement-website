import React from "react";

import { EventObject } from "../../../redux/eventSlice/types";
import { url } from "../../../constants/url";
import { editString } from "../../../utils/editString";

import PopUpSolo from "../../_PopUps/PopUpSolo/PopUpSolo";
import PopUpGroup from "../../_PopUps/PopUpGroup/PopUpGroup";

import styles from "./Description.module.scss";

const Description: React.FC<EventObject> = ({
  id,
  name,
  long_description,
  logo_url,
  status,
  amount_of_members,
  registration_url,
  vk_url,
}) => {
  const [isFormActive, setFormActive] = React.useState<boolean>(false);

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
          {status === "открыта регистрация" ? (
            registration_url ? (
              <a href={registration_url} target="_blank" rel="noreferrer">
                <button>Регистрация</button>
              </a>
            ) : (
              <button onClick={() => setFormActive(true)}>Регистрация</button>
            )
          ) : (
            <></>
          )}
          {vk_url && (
            <a href={vk_url} target="_blank" rel="noreferrer">
              <button>VK</button>
            </a>
          )}
        </div>

        {isFormActive ? (
          amount_of_members > 1 ? (
            <PopUpGroup
              id={id}
              setActive={setFormActive}
              amount_of_members={amount_of_members}
            />
          ) : (
            <PopUpSolo id={id} setActive={setFormActive} />
          )
        ) : (
          <></>
        )}
      </div>
      <img src={url + logo_url} alt="Logotype" />
    </section>
  );
};

export default Description;
