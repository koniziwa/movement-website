import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectEvents } from "../../../redux/eventSlice/selectors";

import { getPastEvents } from "../../../utils/getPastEvents";

import { url } from "../../../constants/url";

import styles from "./Posters.module.scss";

const Posters: React.FC = () => {
  const { items } = useSelector(selectEvents);

  const posters = getPastEvents(items).map((obj) => (
    <Link to={"/event/" + obj.id}>
      <img key={obj.id} src={url + obj.poster_url} alt={obj.name} />
    </Link>
  ));

  return <div className={styles.posters}>{posters}</div>;
};

export default Posters;
