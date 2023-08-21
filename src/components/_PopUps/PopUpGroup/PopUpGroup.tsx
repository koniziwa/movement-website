import React from "react";

import Input from "../../ui/Input/Input";

import styles from "./PopUpGroup.module.scss";

type PopUpGroupProps = {
  setActive: (isActive: boolean) => void;
  id: number;
};

const PopUpGroup: React.FC<PopUpGroupProps> = ({ setActive, id }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input image="human-ico" placeholder="ФИО капитана команды" />
        <Input image="people-ico" placeholder="Название команды" />
        <Input image="telegram-ico" placeholder="@username" />
        <Input image="email-ico" placeholder="user@hse.ru" />
      </div>
    </div>
  );
};

export default PopUpGroup;
