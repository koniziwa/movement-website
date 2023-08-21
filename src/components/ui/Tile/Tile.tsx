import styles from "./Tile.module.scss";

type TileProps = {
  active: boolean;
  children: string;
};

const Tile: React.FC<TileProps> = ({ children, active }) => {
  return (
    <div
      className={styles.tile + " " + (active ? styles.active : styles.default)}
    >
      <p>{children}</p>
    </div>
  );
};

export default Tile;
