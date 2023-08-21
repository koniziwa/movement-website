import React from "react";

import Title from "../../ui/Title/Title";
import Tiles from "../Tiles/Tiles";
import EventList from "../EventList/EventList";

import { getCurrentDate } from "../../../utils/getCurrentDate";

import styles from "./Calendar.module.scss";

const Calendar: React.FC = () => {
  const year = Number(getCurrentDate().split("-")[0]);
  const [currentYear, setCurrentYear] = React.useState<number>(year);

  const handleClickSlider = (i: number) => {
    if (currentYear + i === 2018) {
      setCurrentYear(year);
    } else if (currentYear + i > year) {
      setCurrentYear(2019);
    } else {
      setCurrentYear((prev) => prev + i);
    }
  };

  return (
    <section className={styles.calendar}>
      <Title>календарь событий</Title>
      <div className={styles.slider}>
        <img
          onClick={() => handleClickSlider(-1)}
          src="/img/slider-left.svg"
          alt="Slider"
        />
        <span>{currentYear}</span>
        <img
          onClick={() => handleClickSlider(1)}
          src="/img/slider-right.svg"
          alt="Slider"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.gradients}>
          <img src="/img/gradients/gradient-pink.svg" alt="Pink Gradient" />
          <img src="/img/gradients/gradient-blue.svg" alt="Blue Gradient" />
          <img src="/img/gradients/gradient-red.svg" alt="Red Gradient" />
          <img src="/img/gradients/gradient-pink.svg" alt="Pink Gradient" />
        </div>
        <Tiles year={currentYear} />
        <EventList year={currentYear} />
      </div>
    </section>
  );
};

export default Calendar;
