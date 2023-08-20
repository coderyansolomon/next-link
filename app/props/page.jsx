import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Link Props</h1>
      <p  className={styles.paragraph}>
        The available props are: href, replace, scroll, and prefetch
      </p>
      <h2>1) Href Prop</h2>
      <p  className={styles.paragraph}>
        This is a required prop. It sets the path/url to navigate to: href='/someurl'.
        For dynamic routes, you can use template literals.
      </p>
      <Link href={`/props/${24}`} style={{marginBottom: '15px'}}>
        Dynamic Route
      </Link>
      <h2>2) Replace Prop</h2>
      <p  className={styles.paragraph}>
        When true, next/link will replace the current history rather than
        adding it to the browser's history stack. This defaults to false.
      </p>
      <Link style={{marginBottom: '15px'}} href={'/'}>
            Visit Overview
      </Link>
      <h2>3) Scroll Prop</h2>
      <p  className={styles.paragraph}>
        Scrolls to the top of a new route. When false, it doesn't scroll to the top
        of a page after navigation. Defaults to true. *Example - change margin
      </p>
      <Link  style={{marginBottom: '15px'}} href={'/'}>
            Visit overview
      </Link>
      <h2>4) Prefetch Prop</h2>
      <p  className={styles.paragraph}>
        When true (defaults to true) next.js will fetch the page in the background 
        when the link is within the viewport.
      </p>
    </main>
  )
}
