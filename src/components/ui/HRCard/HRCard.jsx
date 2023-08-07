import styles from './HRCard.module.scss';

export default function HRCard() {
  return (
    <div className={styles.card}>
      <img src="/img/img.jpg" alt="Card" />
      <div className={styles.description}>
        <p>Дарья Бутина</p>
        <span>Глава Movement</span>
      </div>
    </div>
  )
}
