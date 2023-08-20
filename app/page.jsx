import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Link Overview</h1>
      <p className={styles.paragraph}>Next.js gives you a Link component that extends an HTML a element to 
        provider prefetching and client-side navigation.
      </p>
      <p className={styles.paragraph}>Prefetching allows you to preload a route before visiting the route. 
        Routes are automatically prefetched when the Link component becomes visible in a Viewport.
        We'll discuss prefetching more here in a sec.
      </p>
      <p className={styles.paragraph}>
        The link below is an example of how to use the Link component.
        </p>
      <Link href={'/props'}>
        Visit The Props Page
      </Link>
    </main>
  )
}
