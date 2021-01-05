mport { css } from '@emotion/css'
import Input from '../Input/Input'

const InputText = ({ placeholder }) => {
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Input type={'text'} placeholder={placeholder} />
    </div>
  )
}

export default InputText
