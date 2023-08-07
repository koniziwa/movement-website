import styles from './ProjectItem.module.scss';

export default function ProjectItem() {
  return (
    <div className={styles.card}>
      <img src="/img/mero_logo.jpg" alt="Mero" />
      <h3>Дело в пионерском галстуке | Детектив</h3>
      <p>«Ласточка»… в честь беззаботной красивой птицы, был назван наш пионерский лагерь. Много пионеров, счастливых вожатых и всего одна тайна.</p>
      <button>Подробнее</button>
    </div>
  )
}
