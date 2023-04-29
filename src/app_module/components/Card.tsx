'use client'
import React, { FC } from 'react'

import styles from '@/app_module/scss/Card.module.scss'

const handleMouseMove = (e: any) => {
  const { currentTarget: target } = e

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

  target.style.setProperty('--mouse-x', `${x}px`)
  target.style.setProperty('--mouse-y', `${y}px`)
}

interface Props {
  title: string
  content: string
}

export const Card: FC<Props> = ({ title, content }) => {
  return (
    <div
      onMouseMoveCapture={(e) => handleMouseMove(e)}
      className={styles.card}
    >
      <div className={styles['card_border']}></div>
      <div className={styles['card_content']}>
        <h1 className={styles.text}>{title}</h1>
        <span className={styles.text}>{content}</span>
      </div>
    </div>
  )
}
