import styles from './Video.module.scss'
import axios from 'axios'

const Video: React.FC = () => {
  return (
    <section className={styles.section}>
      <img className={styles.logo} src="/img/movement.svg" alt="Movement" />
      <video className={styles.video} src="" autoPlay muted />
    </section>
  )
}

export default Video;
