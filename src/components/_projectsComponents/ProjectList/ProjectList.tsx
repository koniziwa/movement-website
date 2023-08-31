import { useSelector } from "react-redux";
import { selectEvents } from "../../../redux/eventSlice/selectors";
import { selectFilter } from "../../../redux/filterSlice/selectors";

import { getEventsByCategories } from "../../../utils/getEventsByCategories";

import ProjectItem from "../../ui/ProjectItem/ProjectItem";

import styles from "./ProjectList.module.scss";

const ProjectList: React.FC = () => {
  const { items } = useSelector(selectEvents);
  const { activeCategories } = useSelector(selectFilter);

  const events = getEventsByCategories(items, activeCategories).map((event) => (
    <ProjectItem key={event.id} {...event} />
  ));

  return <ul className={styles.list}>{events}</ul>;
};

export default ProjectList;
