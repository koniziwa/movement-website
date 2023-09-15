import React from "react";
import { useSelector } from "react-redux";
import { selectEvents } from "../../../redux/eventSlice/selectors";

import { getEventPages } from "../../../utils/getEventPages";
import { getEventsByYear } from "../../../utils/getEventsByYear";

import EventTile from "../../ui/EventTile/EventTile";

import styles from "./EventList.module.scss";

type EventListProps = {
  year: number;
};

const EventList: React.FC<EventListProps> = ({ year }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { items } = useSelector(selectEvents);
  const eventsByYear = getEventsByYear(items, year);
  const eventPages = getEventPages(eventsByYear);

  const handleClickSlider = (i: number) => {
    if (currentPage + i === 0) {
      setCurrentPage(eventPages);
    } else if (currentPage + i > eventPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev + i);
    }
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [year]);

  const events = eventsByYear
    .filter((_, index) => {
      return index >= (currentPage - 1) * 3 && index < currentPage * 3;
    })
    .map((obj) => <EventTile key={obj.name} {...obj} />);

  return (
    <div className={styles.container}>
      <div className={styles.eventList}>{events}</div>
      {eventPages > 1 && (
        <div className={styles.slider}>
          <img
            onClick={() => handleClickSlider(-1)}
            src="/img/slider-left.svg"
            alt="Slider"
          />
          <span>{`${currentPage} / ${eventPages}`}</span>
          <img
            onClick={() => handleClickSlider(1)}
            src="/img/slider-right.svg"
            alt="Slider"
          />
        </div>
      )}
    </div>
  );
};

export default EventList;
