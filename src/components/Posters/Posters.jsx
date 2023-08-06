import styles from './Posters.module.scss';

export default function Posters() {
  return (
    <div className={styles.posters}>
      <img className={styles.leftPoster} src="/img/poster-3.jpg" alt="subPoster" />
      <img className={styles.mainPoster} src="/img/poster-1.jpg" alt="MainPoster" />
      <img className={styles.rightPoster} src="/img/poster-2.jpg" alt="subPoster" />
    </div>
  )
}
