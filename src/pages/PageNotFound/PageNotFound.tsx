import { useNavigate } from "react-router-dom"

import styles from './PageNotFound.module.scss'

const PageNotFound: React.FC = () => {
  const navigate = useNavigate()

  const handleClickButton = () => {
    navigate('/')
  }

  return (
    <main className={styles.main}>
      <img src="/img/404.svg" alt="404" />
      <p>Такого мероприятия мы ещё не придумали(</p>
      <button
        onClick={() => handleClickButton()}
      >Перейти на главную</button>
    </main>
  )
}

export default PageNotFound
