import { jsx } from '@emotion/react'
import { css } from '@emotion/css'

const Input = ({ type, placeholder }) => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
