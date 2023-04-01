import React, { useRef, useEffect } from 'react'
import Border from '../Border/Border'
import styles from './DonateBlock.module.scss'
import heart from '../../assets/heart.png'
import cn from 'classnames'
import { useAppDispatch } from '../../hooks/redux'
import { MainSlice } from '../../store/reducers/MainSlice'

const DonateBlock = () => {
  const dispatch = useAppDispatch()
  const { setDonateEndRef } = MainSlice.actions
  const endDonateRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    dispatch(setDonateEndRef(endDonateRef.current))
  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Донат</h1>
      <p className={styles.info}>
        В данном разделе вы можете приобрести проходку на сервер
      </p>
      <div className={cn(styles.donate, 'dark:bg-[#212160]')}>
        <h2 className={cn(styles.donateTitle, 'dark:text-theme-dark-text')}>
          Стандартная проходка
        </h2>
        <p className={styles.donateInfo}>
          Покупая данную проходку вы получаете полный доступ на сервер
        </p>
        <div className={styles.donateOffer}>
          <img src={heart} alt='heart' className={styles.heartImg} />
          <a href={'https://lamecraft.easydonate.ru'}>Купить</a>
          <p>250 рублей</p>
        </div>
      </div>
      <div ref={endDonateRef}>
        <Border />
      </div>
    </div>
  )
}

export default DonateBlock
