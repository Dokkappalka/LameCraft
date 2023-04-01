import React from 'react'
import styles from './ErrorPage.module.scss'
import errorPic from '../../assets/404.png'

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <img src={errorPic} alt='Error' />
      <p>
        Что-то пошло не так... Попробуйте перезагрузить страницу или перезайти в
        браузер
      </p>
    </div>
  )
}

export default ErrorPage
