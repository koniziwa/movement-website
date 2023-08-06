import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src="/img/logo.svg" alt="Movement-logo" className={styles.movement_logo}/>
        <div className={styles.icons}>
          <img src="/img/vk.svg" alt="VK-icon" className={styles.icon}/>
          <img src="/img/telegram.svg" alt="Telegram-icon" className={styles.icon}/>
        </div>
        <div className={styles.information}>
          <span className={styles.mail}>movement@hse.ru</span>
          <p className={styles.address}>ул. Таллинская, 34, Москва, 123592</p>
        </div>
      </div>
    </footer>
  )
}
