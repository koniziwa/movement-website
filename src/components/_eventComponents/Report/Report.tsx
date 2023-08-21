import Title from "../../ui/Title/Title";

import styles from "./Report.module.scss";

type ReportProps = {
  videoURL: string;
};

const Report: React.FC<ReportProps> = ({ videoURL }) => {
  return (
    <section className={styles.section}>
      <Title>видеоотчёт</Title>
      <div>
        <iframe
          title={videoURL}
          src={videoURL}
          width="80%"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Report;
