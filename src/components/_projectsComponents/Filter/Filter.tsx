import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { fetchEvents } from "../../../redux/eventSlice/asyncActions";

import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isCheckActive, setCheckActive] = React.useState<boolean>(true);

  React.useEffect(() => {
    dispatch(fetchEvents());
    window.scrollTo(0, 0);
  }, []);

  const handleCheckButton = () => {
    setCheckActive(!isCheckActive);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterList}>
        <div className={styles.sortByName}>
          <span>Сортировать по</span>
          <button>
            <img src="" alt="" />
            <span>названию</span>
            <img src="" alt="" />
          </button>
        </div>
        <div className={styles.sortByCheck}>
          <img
            onClick={() => handleCheckButton()}
            src={
              isCheckActive
                ? "/img/check-active.svg"
                : "/img/check-nonactive.svg"
            }
            alt="Checkbox"
          />
          <span>Показывать прошедшие</span>
        </div>
        <div className={styles.sortByDate}>
          <button>25.09.20</button>
          <hr />
          <button>25.09.23</button>
        </div>
      </div>
      <button className={styles.resetBtn}>Сбросить</button>
    </div>
  );
};

export default Filter;
