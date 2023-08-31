import React from "react";
import { Link } from "react-router-dom";

import Title from "../../ui/Title/Title";

import { useSelector } from "react-redux";
import { selectEvents } from "../../../redux/eventSlice/selectors";

import { getPastEvents } from "../../../utils/getPastEvents";

import { url } from "../../../constants/url";

import styles from "./RecentProjects.module.scss";

const RecentProjects: React.FC = () => {
  const { items } = useSelector(selectEvents);

  const posters = getPastEvents(items).map((event) => (
    <Link key={event.id} to={`/event/${event.id}`}>
      <img src={url + event.poster_url} alt={event.name} />
    </Link>
  ));

  let a = posters[0];
  posters[0] = posters[1];
  posters[1] = a;

  return (
    <section className={styles.recentProjects}>
      <Title>наши проекты</Title>
      <div className={styles.posters}>{posters}</div>
      <Link to="/projects">
        <button>Все проекты</button>
      </Link>
    </section>
  );
};

export default RecentProjects;
