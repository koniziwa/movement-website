import styles from './DateSlider.module.scss';

export default function DateSlider() {
  return (
    <div className={styles.slider}>
      <img src="/img/slider-left.svg" alt="Slider" />
      <span>2023</span>
      <img src="/img/slider-right.svg" alt="Slider" />
    </div>
  )
}
