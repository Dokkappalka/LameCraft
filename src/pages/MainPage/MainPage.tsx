import React from 'react'
import DonateBlock from '../../components/DonateBlock/DonateBlock'
import InstructionBlock from '../../components/InstructionBlock/InstructionBlock'
import MainBlock from '../../components/MainBlock/MainBlock'
import MapBlock from '../../components/MapBlock/MapBlock'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div>
      <MapBlock />
      <DonateBlock />
      <InstructionBlock />
    </div>
  )
}

export default MainPage
