import styles from './Input.module.scss';

export default function Input() {
  return (
    <input className={styles.input} type="text" placeholder="ФИО" />
  )
}
