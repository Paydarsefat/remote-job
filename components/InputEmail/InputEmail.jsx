import { jsx } from '@emotion/react'
import { css } from '@emotion/css'
import Input from '../Input/Input'

const InputEmail = ({ placeholder }) => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Input type={'email'} placeholder={placeholder} />
    </div>
  )
}

export default InputEmail
