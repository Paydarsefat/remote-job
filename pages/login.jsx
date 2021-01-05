import { jsx } from '@emotion/react'
import { css } from '@emotion/css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { LayoutAuth } from '../containers/LayoutAuth/LayoutAuth'
import InputEmail from '../components/InputEmail/InputEmail'
import InputPassword from '../components/InputPassword/InputPassword'
import Button from '../components/Button/Button'

export default function Login() {
  const color = 'white'
  const handelSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('handleSubmitClick')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Remote Jobs App | login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth>
        <form onSubmit={handelSubmit}>
          <InputEmail placeholder="ایمبل" />
          <InputPassword type="password" placeholder="پسورد" />
          <Button type="submit">ارسال</Button>
        </form>
      </LayoutAuth>
    </div>
  )
}
