import Title from '../ui/Title/Title'
import DateSlider from '../ui/DateSlider/DateSlider'
import Tiles from '../Tiles/Tiles'
import EventList from '../EventList/EventList'

import styles from './Calendar.module.scss'

const Calendar: React.FC = () => {
  return (
    <section className={styles.calendar}>
      <Title>календарь событий</Title>
      <DateSlider />
      <div className={styles.container}>
        <Tiles />
        <EventList />
      </div>
    </section>
  )
}

export default Calendar
