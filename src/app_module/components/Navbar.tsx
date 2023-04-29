'use client'

import Link from 'next/link'
import React from 'react'

import styles from '@/app_module/scss/Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.header}>
      <h1>
        <Link href='/'>App</Link>
      </h1>
      <ul className={styles.nav}>
        <li>
          <Link href='/'>Navegar</Link>
        </li>
        <li>
          <Link href='/'>Navegar</Link>
        </li>
        <li>
          <Link href='/'>Navegar</Link>
        </li>
        <li>
          <Link href='/'>Navegar</Link>
        </li>
        <li>
          <Link href='/'>Navegar</Link>
        </li>
      </ul>
    </div>
  )
}
