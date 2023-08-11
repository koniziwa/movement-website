import styles from './Tiles.module.scss'

import Tile from '../ui/Tile/Tile'

import { months } from '../../constants/months'

const Tiles: React.FC = () => {
  return (
    <div className={styles.tiles}>
      {months.map((month, index) => (
        <Tile key={index}>
          {month}
        </Tile>
      ))}
    </div>
  )
}

export default Tiles
