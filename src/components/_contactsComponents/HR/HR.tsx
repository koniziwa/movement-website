import React from "react";
import axios from "axios";

import Title from "../../ui/Title/Title";
import HRCard from "../../ui/HRCard/HRCard";

import { Person } from "../../../@types/types";

import styles from "./HR.module.scss";

const HR: React.FC = () => {
  const [headList, setHeadList] = React.useState<Person[]>([
    {
      id: 0,
      name: "",
      surname: "",
      fathers_name: "",
      email: "",
      where_knew: "",
      telegram: "",
    },
  ]);

  React.useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/events/api/head/")
        .then((response) => setHeadList(response.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className={styles.section}>
      <Title>руководство</Title>
      <div className={styles.list}>
        {headList.map((item) => (
          <HRCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HR;
