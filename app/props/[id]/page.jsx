import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function DynamicProps({params}) {
  return (
    <main className={styles.main}>
      <h1>Dynamic Page</h1>
      <p className={styles.paragraph}>
        My id is: {params.id}
      </p>
      <Link href={'/props'}>
        Visit The Props Page
      </Link>
    </main>
  )
}
