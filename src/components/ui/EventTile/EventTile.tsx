import styles from './EventTile.module.scss'

const EventTile: React.FC = () => {
  return (
    <div className={styles.eventTile}>
      <h3>Дело в пионерском галстуке | Детектив</h3>
      <p>13 февраля</p>
      <hr />
      <span>Открыта регистрация</span>
    </div>
  )
}

export default EventTile
