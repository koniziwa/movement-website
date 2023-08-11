import styles from './EventList.module.scss'

import EventTile from '../ui/EventTile/EventTile'
import PageSlider from '../ui/PageSlider/PageSlider'

const EventList: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.eventList}>
        <EventTile />
        <EventTile />
        <EventTile />
      </div>
      <PageSlider />
    </div>
  )
}

export default EventList
