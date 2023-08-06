import styles from './Tile.module.scss';

export default function Tile({ children }) {
  return (
    <div className={styles.tile}>
      <p>{ children }</p>
    </div>
  )
}
