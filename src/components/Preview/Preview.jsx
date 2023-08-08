import styles from './Preview.module.scss';
import Title from '../ui/Title/Title';

export default function Preview() {
  return (
    <div className={styles.wrapper}>
      <Title>о нас</Title>
      <div className={styles.container}>
        <div className={styles.elements}>
          <img className={styles.text} src="/img/movement-text.svg" alt="Movement" />
          <img className={styles.icons} src="/img/icons.svg" alt="Icons" />
        </div>
        <img className={styles.photo} src="/img/photo.jpg" alt="Movement" />
      </div>
    </div>
  )
}
