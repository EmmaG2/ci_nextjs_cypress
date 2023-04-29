import { CardsContainer } from '@/app_module/components/CardsContainer'
import styles from '@/app_module/scss/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <CardsContainer />
    </main>
  )
}
