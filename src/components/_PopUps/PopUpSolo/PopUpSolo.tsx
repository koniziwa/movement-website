import React from "react";

import Input from "../../ui/Input/Input";

import styles from "./PopUpSolo.module.scss";

type PopUpSoloProps = {
  setActive: (isActive: boolean) => void;
  id: number;
};

const PopUpSolo: React.FC<PopUpSoloProps> = ({ setActive, id }) => {
  return (
    <div className={styles.wrapper} onClick={() => setActive(false)}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <Input image="human-ico" placeholder="ФИО" />
        <Input image="telegram-ico" placeholder="@username" />
        <Input image="mail-ico" placeholder="user@hse.ru" />
      </div>
    </div>
  );
};

export default PopUpSolo;
