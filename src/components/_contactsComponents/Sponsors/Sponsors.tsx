import React from "react";
import axios from "axios";

import Title from "../../ui/Title/Title";

import { PhotoType, AlbumType } from "../../../@types/types";

import { url } from "../../../constants/url";

import styles from "./Sponsors.module.scss";

const Sponsors: React.FC = () => {
  const [sponsorsList, setSponsorsList] = React.useState<string[]>([""]);

  React.useEffect(() => {
    const fetchSponsors = async () => {
      const { data } = await axios.get<AlbumType>(
        `${url}/events/api/photoalbum/6/`
      );
      setSponsorsList(data.photos);
    };

    try {
      fetchSponsors();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className={styles.sponsors}>
      <Title>с нами сотрудничали</Title>
      <div className={styles.loop}>
        <div>
          {sponsorsList.map((imageUrl) => (
            <img key={imageUrl} src={url + imageUrl} alt={imageUrl} />
          ))}
        </div>
        <div>
          {sponsorsList.map((imageUrl) => (
            <img key={imageUrl} src={url + imageUrl} alt={imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
