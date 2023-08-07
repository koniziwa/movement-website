import styles from './Header.module.scss';
import React from 'react';

import { Link } from "react-router-dom";

const headerItems = ['Главная', 'Календарь', 'Проекты', 'О нас', 'Контакты'];
const pages = ['/', '/', 'projects', 'about', 'contacts'];

export default function Header() {

  const [menuActive, setMenuActive] = React.useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {headerItems.map((item, index) => (
            <Link to={pages[index]} className={styles.link} key={index}>
              <li className={styles.listItem}>{item}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}
