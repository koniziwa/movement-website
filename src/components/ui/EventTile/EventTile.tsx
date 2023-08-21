import { Link } from "react-router-dom";

import { EventObject } from "../../../redux/eventSlice/types";

import { dateToView } from "../../../utils/dateToView";

import styles from "./EventTile.module.scss";

const EventTile: React.FC<EventObject> = ({
  id,
  name,
  start_date,
  end_date,
  status,
}) => {
  return (
    <Link to={"/event/" + id}>
      <div className={styles.eventTile}>
        <h3>{name}</h3>
        <p>
          {start_date === end_date
            ? dateToView(start_date)
            : `${dateToView(start_date)} - ${dateToView(end_date)}`}
        </p>
        <hr />
        <span className={status === "прошло" ? styles.red : styles.green}>
          {status}
        </span>
      </div>
    </Link>
  );
};

export default EventTile;
