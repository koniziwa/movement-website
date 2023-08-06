import styles from './Calendar.module.scss';
import Title from '../ui/Title/Title';
import DateSlider from '../ui/DateSlider/DateSlider';
import Tiles from '../Tiles/Tiles';
import EventList from '../EventList/EventList';

export default function Calendar() {
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
