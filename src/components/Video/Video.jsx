import styles from './Video.module.scss';

export default function Video() {
  return (
    <section className={styles.section}>
      <img className={styles.logo} src="/img/movement.svg" alt="Movement" />
      <img className={styles.image} src="/img/video.jpg" alt="Background" />
    </section>
  )
}
