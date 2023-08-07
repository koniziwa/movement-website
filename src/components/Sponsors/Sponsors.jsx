import styles from './Sponsos.module.scss';
import Title from '../ui/Title/Title';

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <Title>с нами сотрудничали</Title>
      <div className={styles.loop}>
        <img src="/img/sponsors/cofix.jpg" alt="Cofix" />
      </div>
    </section>
  )
}
