import styles from './Preview.module.scss';
import Title from '../ui/Title/Title';

export default function Preview() {
  return (
    <div className={styles.wrapper}>
      <Title>о нас</Title>
      <div className={styles.container}>
        <div className={styles.elements}>
          <h1>Movement</h1>
          <img src="" alt="" />
        </div>
        <img className={styles.photo} src="/img/photo.jpg" alt="Movement" />
      </div>
    </div>
  )
}
