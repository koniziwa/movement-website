import styles from './PageNotFound.module.scss';

export default function PageNotFound() {
  return (
    <main className={styles.main}>
      <img src="/img/404.svg" alt="404" />
      <p>Такого мероприятия мы ещё не придумали(</p>
      <button>Перейти на главную</button>
    </main>
  )
}
