import styles from "./Projects.module.scss";

import Title from "../../components/ui/Title/Title";
import Filter from "../../components/_projectsComponents/Filter/Filter";
import ProjectList from "../../components/_projectsComponents/ProjectList/ProjectList";

const Projects: React.FC = () => {
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
