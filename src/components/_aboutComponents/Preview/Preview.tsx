import Title from "../../ui/Title/Title";

import styles from "./Preview.module.scss";

const Preview: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Title>о нас</Title>
      <div className={styles.container}>
        <div>
          <img src="/img/movement-text.svg" alt="Movement" />
          <img src="/img/icons.svg" alt="Icons" />
        </div>
        <img className={styles.photo} src="/img/movement.jpg" alt="Movement" />
      </div>
    </div>
  );
};

export default Preview;
