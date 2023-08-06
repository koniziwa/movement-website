import styles from './EventList.module.scss';
import EventTile from '../ui/EventTile/EventTile';
import PageSlider from '../ui/PageSlider/PageSlider';

export default function EventList() {

  return (
    <div className={styles.container}>
      <div className={styles.eventList}>
        <EventTile />
        <EventTile />
        <EventTile />
        <EventTile />
      </div>
      <PageSlider />
    </div>
  )
}
