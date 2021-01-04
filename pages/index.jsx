import { jsx } from '@emotion/react'
import { css } from '@emotion/css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const color = 'white'
  return (
    <div className={styles.container}>
      <Head>
        <title>Remote Jobs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          className={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          Remote Job
        </div>
        <div
          className={css`
            margin-top: 10px;
            padding: 32px;
            background-color: green;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          Remote Job
        </div>
      </main>
    </div>
  )
}
