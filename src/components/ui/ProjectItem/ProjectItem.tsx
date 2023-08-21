import { Link } from "react-router-dom";

import { EventObject } from "../../../redux/eventSlice/types";

import { url } from "../../../constants/url";

import styles from "./ProjectItem.module.scss";

const ProjectItem: React.FC<EventObject> = ({
  id,
  name,
  short_description,
  logo_url,
}) => {
  return (
    <div className={styles.card}>
      <img src={url + logo_url} alt={name} />
      <h3>{name}</h3>
      <p>{short_description}</p>
      <Link to={"/event/" + id}>
        <button>Подробнее</button>
      </Link>
    </div>
  );
};

export default ProjectItem;
