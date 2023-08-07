import styles from './Projects.module.scss';

import Title from "../../components/ui/Title/Title"
import Filter from '../../components/Filter/Filter';
import ProjectList from '../../components/ProjectList/ProjectList';

export default function Projects() {
  return (
    <main className={styles.main}>
      <Title>проекты</Title>
      <section className={styles.container}>
        <Filter />
        <ProjectList />
      </section>
    </main>
  )
}
