import { jsx, useTheme } from '@emotion/react'
import { css } from '@emotion/css'

const Button = ({ children, type = 'button', ...props }) => {
  const theme = useTheme()
  console.log(props)
  return (
    <div
      className={css`
        width: 100%;
        margin: 5px;
      `}
    >
      <button
        className={css`
          padding: 10px;
          font-size: ${theme.typography.btnNormal.fontSize};
          border-radius: 4px;
          background-color: ${type == 'submit'
            ? theme.colors.primary
            : theme.colors.secondary};
          &:hover {
            color: ${theme.colors.color};
          }
        `}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
