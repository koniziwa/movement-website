import { Link } from "react-router-dom";

import { EventObject } from "../../../redux/eventSlice/types";

import { url } from "../../../constants/url";

import styles from "./ProjectItem.module.scss";

const ProjectItem: React.FC<EventObject> = ({
  id,
  name,
  short_description,
  logo_url,
  partners_event,
  category,
}) => {
  return (
    <div className={styles.card}>
      <img src={url + logo_url} alt={name} />
      <h3>{name}</h3>
      <p>{short_description}</p>
      <div>
        {partners_event && <span>партнёрское</span>}
        {category.split(" ").map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <Link to={"/event/" + id}>
        <button>Подробнее</button>
      </Link>
    </div>
  );
};

export default ProjectItem;
