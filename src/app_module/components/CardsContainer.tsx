import React from 'react'
import { Card } from './Card'

import styles from '@/app_module/scss/CardsContainer.module.scss'

const cards = [
  { title: 'Hola', content: 'Esta es una tarjeta' },
  { title: 'Lobby', content: 'Haz click para ir a la página principal' },
  { title: 'Hola', content: 'Esta es una tarjeta' },
  { title: 'Lobby', content: 'Haz click para ir a la página principal' },
  { title: 'Hola', content: 'Esta es una tarjeta' },
  { title: 'Lobby', content: 'Haz click para ir a la página principal' },
]

export const CardsContainer = () => {
  return (
    <div className={styles.cards}>
      {cards.map((i, j) => (
        <Card
          key={j}
          title={i.title}
          content={i.content}
        />
      ))}
    </div>
  )
}
