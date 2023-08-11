import React from 'react'
import { Link } from "react-router-dom"

import { Spin as Hamburger } from 'hamburger-react'
import { useResize } from '../../hooks/useResize'

import { menuItems } from '../../constants/menuItems'
import { screenWidth } from '../../constants/screenWidth'

import styles from './Header.module.scss'


const Header: React.FC = () => {
  const { tablet } = screenWidth
  const width = useResize()

  const [isMenuActive, setMenuActive] = React.useState<boolean>(width > tablet)

  React.useEffect(() => {
    setMenuActive(() => width > tablet)
  }, [width])
 
  return (
    <header className={styles.header}>
      <nav>
        {isMenuActive && <ul>
          {menuItems.map((item, index) => (
            <Link 
              onClick={() => setMenuActive(() => width > tablet)}
              to={item.linkTo} 
              key={index}
              className={styles.link}
            >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>}
        {width <= tablet && <Hamburger toggled={isMenuActive} toggle={setMenuActive} rounded />}
      </nav>
    </header>
  )
}

export default Header
