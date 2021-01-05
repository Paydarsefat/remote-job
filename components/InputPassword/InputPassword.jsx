import { css } from '@emotion/css'
import Input from '../Input/Input'

const InputPassword = ({ placeholder }) => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Input type={'password'} placeholder={placeholder} />
    </div>
  )
}

export default InputPassword
