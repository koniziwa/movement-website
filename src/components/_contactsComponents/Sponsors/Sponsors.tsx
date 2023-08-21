import React from "react";
import axios from "axios";

import Title from "../../ui/Title/Title";

import { sponsorObject } from "../../../@types/types";

import { url } from "../../../constants/url";

import styles from "./Sponsors.module.scss";

const Sponsors: React.FC = () => {
  const [sponsorsList, setSponsorsList] = React.useState<sponsorObject[]>([
    {
      id: 0,
      name: "",
      logo: "",
      logo_url: "",
      site_link: "",
    },
  ]);

  React.useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/events/api/sponsor/")
        .then((response) => setSponsorsList(response.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className={styles.sponsors}>
      <Title>с нами сотрудничали</Title>
      <div className={styles.loop}>
        <div>
          {sponsorsList.map((item) => (
            <img key={item.id} src={url + item.logo_url} alt={item.name} />
          ))}
        </div>
        <div>
          {sponsorsList.map((item) => (
            <img key={item.id} src={url + item.logo_url} alt={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
