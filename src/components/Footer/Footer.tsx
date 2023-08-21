import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src="/img/movement-long-logo.svg" alt="Movement-logo" />
        <div>
          <a
            href="https://vk.com/movement_hse"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/vk.svg" alt="VK-icon" className={styles.icon} />
          </a>
          <a href="https://t.me/hse_movement" target="_blank" rel="noreferrer">
            <img
              src="/img/telegram.svg"
              alt="Telegram-icon"
              className={styles.icon}
            />
          </a>
        </div>
        <div>
          <span>movement@hse.ru</span>
          <p>ул. Таллинская, 34, Москва, 123592</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
