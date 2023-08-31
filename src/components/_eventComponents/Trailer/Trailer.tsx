import Title from "../../ui/Title/Title";

import styles from "./Trailer.module.scss";

type TrailerProps = {
  trailerURL: string;
};

const Trailer: React.FC<TrailerProps> = ({ trailerURL }) => {
  return (
    <section className={styles.section}>
      <Title>трейлер</Title>
      <div>
        <iframe
          title={trailerURL}
          src={trailerURL}
          width="80%"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Trailer;
