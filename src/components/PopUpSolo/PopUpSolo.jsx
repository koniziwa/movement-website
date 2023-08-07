import styles from './PopUpSolo.module.scss';
import Input from '../ui/Input/Input';

const points = ['Рассказали друзья', 'Увидел группу в VK', 'Увидел постер / афишу', 'Увидел на сайте'];

export default function PopUpSolo() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.popUp}>
        <div className={styles.popUpInputs}>
          <Input />
        </div>
        <div className={styles.popUpChecks}>
          
        </div>
      </div>
    </>
  )
}
