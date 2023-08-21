import styles from './Info.module.scss'

const Info: React.FC = () => {
  return (
    <section className={styles.section}>
      <p>
      Movement — студенческая организация на базе НИУ ВШЭ.<br /><br />
      Мы наполняем движением рутинные будни студентов 
      и создаем яркие запоминающиеся мероприятия!
      </p>
      <div>
        <img src="/img/photo-1.jpg" alt="Event"/>
        <img src="/img/photo-2.jpg" alt="Event"/>
      </div>
    </section>
  )
}

export default Info
