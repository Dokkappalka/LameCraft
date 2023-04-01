import React from 'react'
import styles from './Border.module.scss'
import line from '../../assets/xdLine.svg'
import fragment from '../../assets/fragment.png'
import lineWhite from '../../assets/xdLineWhite.svg'
import { useAppSelector } from '../../hooks/redux'

const Border = () => {
  const { isDarkTheme } = useAppSelector((state) => state.MainReducer)
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <img src={isDarkTheme ? lineWhite : line} className={styles.line} />
        <img src={fragment} className={styles.fragment} />
        <img src={isDarkTheme ? lineWhite : line} className={styles.line} />
      </div>
    </div>
  )
}

export default Border
