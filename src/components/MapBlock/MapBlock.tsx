import React, { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { MainSlice } from '../../store/reducers/MainSlice'
import Border from '../Border/Border'
import styles from './MapBlock.module.scss'

const MapBlock = () => {
  const mapEndRef = useRef<HTMLDivElement>(null)
  const { setMapEndRef } = MainSlice.actions
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setMapEndRef(mapEndRef.current))
  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>О сервере</h1>
      <p className={styles.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut
        magnam harum officiis tempora eaque est dolores modi laudantium animi
        nobis ipsa totam porro, aperiam vitae iste. Harum hic labore facilis
        quod quis? Vel aperiam, minima optio neque quod, quasi porro reiciendis
        mollitia, itaque quia temporibus. Id vel facere qui?
      </p>
      <div className='flex justify-center'>
        <a href='https://t.me/lamecraft' className={styles.infoButton}>
          Подробнее
        </a>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src='http://map.lamecraft.xyz:9712/#'
          className={styles.map}
          title='Server map'
        ></iframe>
      </div>
      <div ref={mapEndRef}>
        <Border />
      </div>
    </div>
  )
}

export default MapBlock
