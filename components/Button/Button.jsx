import { jsx } from '@emotion/react'
import { css } from '@emotion/css'

const Button = ({ children, type = 'button' }) => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <button type={type}>{children}</button>
    </div>
  )
}

export default Button
