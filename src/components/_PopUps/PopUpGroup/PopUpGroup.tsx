import React from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

import { TeamType } from "../../../@types/types";

import { groupInputFields } from "../../../constants/inputFields";
import { whereKnew } from "../../../constants/whereKnew";
import { url } from "../../../constants/url";

import styles from "./PopUpGroup.module.scss";

type PopUpGroupProps = {
  setActive: (isActive: boolean) => void;
  id: number;
  amount_of_members: number;
};

interface GroupForm {
  name: string;
  command: string;
  members: string;
  telegram: string;
  email: string;
  id: number;
}

const PopUpGroup: React.FC<PopUpGroupProps> = ({
  setActive,
  id,
  amount_of_members,
}) => {
  const [isInHSE, setInHSE] = React.useState<boolean>(true);
  const [activeWhere, setActiveWhere] = React.useState<number>(3);

  const { register, handleSubmit } = useForm<GroupForm>({
    defaultValues: { id },
  });

  const submit: SubmitHandler<GroupForm> = ({
    name,
    telegram,
    email,
    id,
    command,
    members,
  }) => {
    const info: TeamType = {
      name: command,
      captain: name,
      members,
      email,
      telegram,
      event: `${url}/events/api/event/${id}/`,
      event_id: id,
      where_knew: whereKnew[activeWhere],
      amount_of_members,
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
        {groupInputFields.map((inputField) => (
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
        <p>Откуда вы узнали о мероприятии?</p>
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

export default PopUpGroup;
