import React, { useState, useRef, useEffect } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import night from '../../assets/clearNight.svg'
import day from '../../assets/sunny.svg'
import menuImg from '../../assets/menu.svg'
import cn from 'classnames'
import lightMenuImg from '../../assets/lightMenu.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { MainSlice } from '../../store/reducers/MainSlice'

const MenuList = () => {
  const { mapEndRef, donateEndRef, mainEndRef } = useAppSelector(
    (state) => state.MainReducer
  )
  return (
    <>
      <p
        className='dark:border-b-[#202027]'
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        Главная
      </p>
      <p
        className='dark:border-b-[#202027]'
        onClick={() => {
          mainEndRef?.scrollIntoView()
        }}
      >
        О сервере
      </p>
      <p
        className='dark:border-b-[#202027]'
        onClick={() => {
          mapEndRef?.scrollIntoView()
        }}
      >
        Донат
      </p>
      <p
        className='dark:border-b-[#202027]'
        onClick={() => {
          donateEndRef?.scrollIntoView()
        }}
      >
        Инструкция
      </p>
    </>
  )
}

interface loginBtnTypes {
  btnStyles: string
}
const LoginButton = ({ btnStyles }: loginBtnTypes) => {
  const dispatch = useAppDispatch()
  const { changeModalMode } = MainSlice.actions
  return (
    <button
      className={btnStyles}
      onClick={() => {
        dispatch(changeModalMode(true))
      }}
    >
      Войти
    </button>
  )
}

const Header = () => {
  const { isDarkTheme } = useAppSelector((state) => state.MainReducer)
  const dispatch = useAppDispatch()
  const { changeDarkTheme } = MainSlice.actions
  const [menu, setMenu] = useState(true)
  const menuListRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onClick = (e: any) =>
      menuListRef.current &&
      (menuListRef.current.contains(e.target) || setMenu(true))
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return (
    <header className={cn(styles.header, 'dark:bg-theme-dark')}>
      <div className={styles.navContainer}>
        <img src={logo} alt='logo' className={styles.logo} height={80} width={80} />
        <div className={styles.nav}>
          <MenuList />
        </div>
        <div className={styles.login}>
          <button
            onClick={() => {
              dispatch(changeDarkTheme(!isDarkTheme))
            }}
            className={styles.nightButton}
          >
            <img src={isDarkTheme ? day : night} alt='Theme switch' />
          </button>
          <LoginButton btnStyles={cn(styles.loginButton, styles.adaptive)} />
          <button
            className={styles.menuButton}
            onClick={() => {
              setMenu((prev) => !prev)
            }}
            ref={menuListRef}
          >
            <img alt='Menu button' src={isDarkTheme ? lightMenuImg : menuImg} />
          </button>
          <div
            className={cn(styles.menuList, 'dark:bg-[#030311]', {
              [styles.hide]: menu,
            })}
          >
            <MenuList />
            <LoginButton btnStyles={styles.loginButton} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
