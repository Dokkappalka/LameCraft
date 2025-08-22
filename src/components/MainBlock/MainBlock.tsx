import React, { useRef, useEffect } from 'react'
import styles from './MainBlock.module.scss'
import bigLogo from '../../assets/bigLogo.png'
import Border from '../Border/Border'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { MainSlice } from '../../store/reducers/MainSlice'
import cn from 'classnames'

const MainBlock = () => {
  const dispatch = useAppDispatch()
  const { mapEndRef } = useAppSelector((state) => state.MainReducer)
  const mainEndRef = useRef<HTMLDivElement>(null)
  const { setMainEndRef } = MainSlice.actions
  useEffect(() => {
    dispatch(setMainEndRef(mainEndRef.current))
  }, [])
  return (
    <div className={cn(styles.test, 'dark:from-[#212160] dark:to-theme-dark')}>
      <div className={styles.container}>
        <img src={bigLogo} alt='Lamecraft logo' className={styles.bigLogo} />
        <p className={styles.title}>
          Ира - писюн
        </p>
        <div className={styles.buttons}>
          <div>
            <button
              onClick={() => {
                mapEndRef?.scrollIntoView()
              }}
            >
              Погнали играть!
            </button>
            <button
              onClick={() => {
                mainEndRef.current?.scrollIntoView()
              }}
            >
              О сервере
            </button>
          </div>
          <div>
            <a href='https://t.me/lamecraft'>Telegram</a>
            <a href='https://t.me/LameCraftSupport'>Помощь</a>
          </div>
        </div>
      </div>
      <div className={styles.border} ref={mainEndRef}></div>
    </div>
  )
}

export default MainBlock
