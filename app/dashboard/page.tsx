import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Dashboard Page',
  description: 'Dashboard Page'
}

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Dashboard Page</h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        (This is a Protected Page)
      </h2>
    </div>
  )
}
