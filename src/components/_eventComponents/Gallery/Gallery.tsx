import React from "react";
import axios from "axios";

import { url } from "../../../constants/url";

import styles from "./Gallery.module.scss";

type GalleryProps = {
  photoAlbum: string;
};

const Gallery: React.FC<GalleryProps> = ({ photoAlbum }) => {
  const [photoList, setPhotoList] = React.useState<string[]>();

  React.useEffect(() => {
    async function fetchPhotos() {
      try {
        const { data } = await axios.get(photoAlbum);
        setPhotoList(data.photos);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <section className={styles.section}>
      <div>
        {photoList?.map((item, index) => (
          <img key={index} src={url + item} alt="Event Photo" />
        ))}
      </div>
      <div>
        {photoList?.map((item, index) => (
          <img key={index} src={url + item} alt="Event Photo" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
