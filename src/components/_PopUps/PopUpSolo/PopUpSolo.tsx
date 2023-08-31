import React from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

import { PersonType } from "../../../@types/types";

import { soloInputFields } from "../../../constants/inputFields";
import { whereKnew } from "../../../constants/whereKnew";
import { url } from "../../../constants/url";

import styles from "./PopUpSolo.module.scss";

type PopUpSoloProps = {
  setActive: (isActive: boolean) => void;
  id: number;
};

interface SoloForm {
  name: string;
  telegram: string;
  email: string;
  faculty: string;
  university: string;
  id: number;
}

const PopUpSolo: React.FC<PopUpSoloProps> = ({ setActive, id }) => {
  const [isInHSE, setInHSE] = React.useState<boolean>(true);
  const [activeWhere, setActiveWhere] = React.useState<number>(3);

  const { register, handleSubmit } = useForm<SoloForm>({
    defaultValues: { id },
  });

  const submit: SubmitHandler<SoloForm> = ({
    name,
    telegram,
    email,
    faculty,
    university,
    id,
  }) => {
    const info: PersonType = {
      name: name.split(" ")[0],
      surname: name.split(" ")[1],
      fathers_name: name.split(" ")[2],
      email,
      faculty,
      university: isInHSE ? "ВШЭ" : university,
      telegram,
      event_id: id,
      event: `${url}/events/api/event/${id}/`,
      where_knew: whereKnew[activeWhere],
      from_hse: isInHSE,
    };

    axios
      .post(`${url}/events/api/person/`, info)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={styles.wrapper} onClick={() => setActive(false)}>
      <form
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(submit)}
      >
        <img
          onClick={() => setActive(false)}
          src="/img/close.svg"
          alt="close"
        />
        {soloInputFields.map((inputField) => (
          <input
            key={inputField.type}
            id={inputField.type}
            type="text"
            placeholder={inputField.placeholder}
            {...register(inputField.type, { required: true })}
          />
        ))}
        <p>
          Ты учишься в Вышке?
          <span>
            <img
              src={
                isInHSE ? "/img/check-active.svg" : "/img/check-nonactive.svg"
              }
              alt="check"
              onClick={() => setInHSE((isInHSE) => !isInHSE)}
            />
            Да
          </span>
          <span>
            <img
              src={
                isInHSE ? "/img/check-nonactive.svg" : "/img/check-active.svg"
              }
              alt="check"
              onClick={() => setInHSE((isInHSE) => !isInHSE)}
            />
            Нет
          </span>
        </p>
        {isInHSE || (
          <input
            id="university"
            placeholder="Университет"
            type="university"
            {...register("university")}
          />
        )}
        <p>Откуда ты узнал о мероприятии?</p>
        <div className={styles.whereKnew}>
          {whereKnew.map((item, index) => (
            <div key={index} onClick={() => setActiveWhere(index)}>
              <img
                src={`/img/${
                  activeWhere === index ? "check-active" : "check-nonactive"
                }.svg`}
                alt="check"
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setActive(false)}>Отправить</button>
      </form>
    </div>
  );
};

export default PopUpSolo;
