import styles from './ProjectList.module.scss';
import ProjectItem from '../ui/ProjectItem/ProjectItem';


export default function ProjectList() {
  return (
    <div className={styles.list}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  )
}
