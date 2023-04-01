import React from 'react'
import styles from './InstructionBlock.module.scss'
import { saveAs } from 'file-saver'

const InstructionBlock = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Инструкция</h1>
      <div className={styles.instruction}>
        <iframe
          src='https://www.youtube.com/embed/BfdpRYQJBLk'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className={styles.instructionVideo}
        ></iframe>
        <div className={styles.instructionInfo}>
          <p>
            <span>1</span>Скачайте лаунчер
          </p>
          <p>
            <span>2</span>Установите Fabric
          </p>
          <p>
            <span>3</span>Установите моды
          </p>
          <div className={styles.buttons}>
            <a
              className={styles.helpButton}
              href='https://t.me/LameCraftSupport'
            >
              Помощь
            </a>
            <button
              className={styles.helpButton}
              onClick={() => {
                saveAs('LameCraft.rar', 'LameCraft.rar')
              }}
            >
              Скачать
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructionBlock
