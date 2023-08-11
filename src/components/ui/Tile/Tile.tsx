import styles from './Tile.module.scss'

type TileProps = {
  children: string
}

const Tile: React.FC<TileProps> = ({ children }) => {
  return (
    <div className={styles.tile}>
      <p>{ children }</p>
    </div>
  )
}

export default Tile
