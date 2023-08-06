import styles from './Tiles.module.scss';
import Tile from '../ui/Tile/Tile';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

export default function Tiles() {
  return (
    <div className={styles.tiles}>
      {months.map((month, index) => (
        <Tile key={index}>{month}</Tile>
      ))}
    </div>
  )
}
