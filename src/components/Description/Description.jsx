import styles from './Description.module.scss';

export default function Description() {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <h1>Дело в пионерском галстуке | Детектив</h1>
        <p>Совсем скоро состоится ежегодное мероприятие Movement — Детектив!<br /><br />В этом году мы предлагаем распутать вам «Дело в пионерском галстуке» Movement ждёт всех: от преданных поклонников детектива до тех, кто не раскрыл ещё ни одного дела.</p>
        <h3>
          Статус мероприятия:
          <span>скоро состоится</span>
        </h3>
        <button>Регистрация</button>
      </div>
      <img src="/img/mero_logo.jpg" alt="Logotype" />      .
    </section>
  )
}
