import { useSelector } from "react-redux";

import { selectEvents } from "../../../redux/eventSlice/selectors";

import ProjectItem from "../../ui/ProjectItem/ProjectItem";

import styles from "./ProjectList.module.scss";

const ProjectList: React.FC = () => {
  const { items } = useSelector(selectEvents);

  const events = items.map((obj) => <ProjectItem key={obj.id} {...obj} />);

  return <li className={styles.list}>{events}</li>;
};

export default ProjectList;
