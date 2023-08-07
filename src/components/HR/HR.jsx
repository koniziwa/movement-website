import styles from './HR.module.scss';
import Title from '../ui/Title/Title';
import HRList from '../HRList/HRList';

export default function HR() {
  return (
    <section className={styles.section}>
      <Title>руководство</Title>
      <HRList />
    </section>
  )
}
