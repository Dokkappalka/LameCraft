import React from 'react'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { MainSlice } from './store/reducers/MainSlice'
import Modal from './components/Modal/Modal'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import cn from 'classnames'
import MainBlock from './components/MainBlock/MainBlock'
import Footer from './components/Footer/Footer'

function App() {
  const dispatch = useAppDispatch()
  const { isModalOpened, isDarkTheme } = useAppSelector(
    (state) => state.MainReducer
  )
  const { changeModalMode } = MainSlice.actions
  return (
    <div className={isDarkTheme ? 'dark' : ''}>
      <div className='dark:bg-theme-dark dark:text-bg-gray'>
        <Header />
        <MainBlock />
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Modal
          active={isModalOpened}
          setActive={() => {
            dispatch(changeModalMode(false))
          }}
        >
          <div
            className={cn(styles.modalContainer, 'dark:text-theme-dark-text')}
          >
            <h1 className={styles.loginTitle}>Авторизация</h1>
            <p className={styles.loginContent}>
              Данная функция находится в раработке. В ближайшее время появится
              возможность авторизоваться через Telegram.
            </p>
            <button
              className={cn(styles.loginButton, 'dark:text-[#212160]')}
              onClick={() => {
                dispatch(changeModalMode(false))
              }}
            >
              Понятно!
            </button>
          </div>
        </Modal>
        <Footer />
      </div>
    </div>
  )
}

export default App
