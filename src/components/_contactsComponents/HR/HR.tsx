import React from "react";
import axios from "axios";

import Title from "../../ui/Title/Title";
import HRCard from "../../ui/HRCard/HRCard";

import { PersonType } from "../../../@types/types";
import { url } from "../../../constants/url";

import styles from "./HR.module.scss";

const HR: React.FC = () => {
  const [headList, setHeadList] = React.useState<PersonType[]>([
    {
      name: "",
      surname: "",
      fathers_name: "",
      email: "",
      where_knew: "",
      telegram: "",
      from_hse: true,
      university: "",
      faculty: null,
      event: "",
      event_id: 0,
    },
  ]);

  React.useEffect(() => {
    const fetchHeads = async () => {
      const { data } = await axios.get<PersonType[]>(`${url}/events/api/head/`);
      setHeadList(data);
    };

    try {
      fetchHeads();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className={styles.section}>
      <Title>руководство</Title>
      <div className={styles.list}>
        {headList.map((item) => (
          <HRCard key={item.telegram} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HR;
