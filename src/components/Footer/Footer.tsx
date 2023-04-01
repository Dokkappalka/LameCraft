import React from 'react'
import styles from './Footer.module.scss'
import twitch from '../../assets/twitch.png'
import telegram from '../../assets/telegram.png'
import discrod from '../../assets/discord.png'
import cn from 'classnames'

const Footer = () => {
  return (
    <div className={styles.contaier}>
      <p className={styles.title}>LameCraft</p>
      <div className={styles.buttons}>
        <a
          className={cn(
            styles.twitch,
            'dark:bg-[#e2e2e21e] dark:border-[#e2e2e21e]'
          )}
          href='https://twitch.tv/hoolym4n'
        >
          <img src={twitch} alt='twitch' />
        </a>
        <a
          className={cn(
            styles.tg,
            'dark:bg-[#e2e2e21e] dark:border-[#e2e2e21e]'
          )}
          href='https://t.me/lamecraft'
        >
          <img src={telegram} alt='telegram' />
        </a>
        <a
          className={cn(
            styles.ds,
            'dark:bg-[#e2e2e21e] dark:border-[#e2e2e21e]'
          )}
          href='https://discord.gg/y5679X8xa2'
        >
          <img src={discrod} alt='discord' />
        </a>
      </div>
      <a
        className={styles.end}
        href='https://www.youtube.com/watch?v=kKDhRcnwaC4'
      >
        Made by Dokkappalka && Designed by dolore
      </a>
    </div>
  )
}

export default Footer
