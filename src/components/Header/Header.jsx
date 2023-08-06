import styles from './Header.module.scss';

const headerItems = ['Главная', 'Календарь', 'Проекты', 'О нас', 'Контакты'];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {headerItems.map((item, index) => (
            <li className={styles.listItem} key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
