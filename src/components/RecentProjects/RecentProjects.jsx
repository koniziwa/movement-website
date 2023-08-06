import styles from './RecentProjects.module.scss';
import Title from '../ui/Title/Title';
import Posters from '../Posters/Posters';

export default function RecentProjects() {
  return (
    <section className={styles.recentProjects}>
      <Title>наши проекты</Title>
      <div className={styles.container}>
        <img className={styles.slider} src="/img/slider-left-big.svg" alt="Slider" />
        <Posters />
        <img className={styles.slider} src="/img/slider-right-big.svg" alt="Slider" />
      </div>
      <button className={styles.button}>Все проекты</button>
    </section>
  )
}
