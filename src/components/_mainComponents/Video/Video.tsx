import React from "react";

import { useResize } from "../../../hooks/useResize";

import { screenWidth } from "../../../constants/screenWidth";

import styles from "./Video.module.scss";

const Video: React.FC = () => {
  const width = useResize();
  const { mobile } = screenWidth;
  const [isMobileWidth, setMobileWidth] = React.useState<boolean>(
    width <= mobile
  );

  React.useEffect(() => {
    setMobileWidth(width <= mobile);
  }, [width]);

  return (
    <section className={styles.section}>
      {isMobileWidth ? (
        <img src="/img/movement-default-logo.svg" alt="Movement-logo" />
      ) : (
        <video src="/img/" autoPlay muted />
      )}
    </section>
  );
};

export default Video;
