import styles from './Info.module.scss'

export default function Info() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <p>
        Movement — студенческая организация на базе НИУ ВШЭ.<br /><br />
        Мы наполняем движением рутинные будни студентов 
        и создаем яркие запоминающиеся мероприятия!
        </p>
        <div className={styles.photos}>
          <img src="/img/photo_1.jpg" alt="Mero" className={styles.firstImage}/>
          <img src="/img/photo_2.jpg" alt="Mero" className={styles.secondImage}/>
        </div>
      </div>
    </section>
  )
}
