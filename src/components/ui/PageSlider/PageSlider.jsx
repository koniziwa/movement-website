import styles from './PageSlider.module.scss';

export default function PageSlider() {
  return (
    <div className={styles.slider}>
      <img src="/img/slider-left.svg" alt="Slider" />
      <span>1 / 2</span>
      <img src="/img/slider-right.svg" alt="Slider" />
    </div>
  )
}
