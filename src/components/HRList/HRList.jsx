import styles from  './HRList.module.scss';
import HRCard from '../ui/HRCard/HRCard';

export default function HRList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <HRCard />
        <HRCard />
        <HRCard />
      </div>
    </div>
  )
}
