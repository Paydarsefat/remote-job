import { jsx, useTheme } from '@emotion/react'
import { css } from '@emotion/css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button'

export default function Home() {
  const theme = useTheme()
  const color = 'white'
  return (
    <div className={styles.container}>
      <Head>
        <title>Remote Jobs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button type="submit">Remote Job primary</Button>
        <Button>Remote Job secondary</Button>
      </main>
    </div>
  )
}
