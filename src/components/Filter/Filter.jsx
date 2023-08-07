import styles from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filterList}>
        <div className={styles.sortByName}>
          <span>Сортировать по</span>
          <button>
            <img src="" alt="" />
            <span>названию</span>
            <img src="" alt="" />
          </button>
        </div>
        <div className={styles.sortByCheck}>
          <img src="" alt="" />
          <span>Показывать прошедшие</span>
        </div>
        <div className={styles.sortByDate}>
          <button>25.09.20</button>
          <hr />
          <button>25.09.23</button>
        </div>
      </div>
      <button className={styles.resetBtn}>Сбросить</button>
    </div>
  )
}
