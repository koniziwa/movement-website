import React from "react";

import { fetchEvents } from "../../redux/eventSlice/asyncActions";
import { useAppDispatch } from "../../redux/store";

import Title from "../../components/ui/Title/Title";
import ProjectList from "../../components/_projectsComponents/ProjectList/ProjectList";
import Filter from "../../components/_projectsComponents/Filter/Filter";

import styles from "./Projects.module.scss";

const Projects: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <main className={styles.main}>
      <Title>проекты</Title>
      <section className={styles.container}>
        <Filter />
        <ProjectList />
      </section>
    </main>
  );
};

export default Projects;
