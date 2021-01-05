import { jsx } from '@emotion/react'
import { css } from '@emotion/css'

export const LayoutAuth = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2em;
        height: 100vh;
      `}
    >
      <img
        src="logo.jpg"
        className={css`
          width: 200px;
        `}
      />
      <div
        className={css`
          font-size: 32px;
        `}
      >
        ورود
      </div>
      {children}
    </div>
  )
}
