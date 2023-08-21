import { useNavigate } from "react-router";

import Title from "../../ui/Title/Title";
import Posters from "../Posters/Posters";

import styles from "./RecentProjects.module.scss";

const RecentProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.recentProjects}>
      <Title>наши проекты</Title>
      <Posters />
      <button onClick={() => navigate("/projects")}>Все проекты</button>
    </section>
  );
};

export default RecentProjects;
