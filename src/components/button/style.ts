import { darken } from 'polished'
import styled, { css } from 'styled-components'

type propsType = {
  color?: string
  fontWeight?: string
  fullWidth?: boolean
  fontSize?: number
  outline?: boolean
  disabled?: boolean
  size?: number[]
  round?: boolean
}

const colorStyles = css<propsType>`
  ${({ theme, color, outline }) => {
    const selected = theme.colors[color ?? 'primary']
    return outline
      ? css`
          color: transparent ${selected};
          background: white;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `
      : css`
          border: none;
          background: ${selected};
          color: ${selected === '#FFF' ? 'black' : 'white'};
          &:not(:disabled):hover {
            background: ${darken(0.1, selected)};
          }
          &:not(:disabled):active {
            background: ${darken(0.1, selected)};
          }
        `
  }}
`

const fontWeightStyles = css<propsType>`
  ${({ fontWeight }) => {
    const selected = fontWeight
    return css`
      font-weight: ${selected};
    `
  }}
`

const fullWidthStyle = css<propsType>`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`

export const Button = styled.button<propsType>`
  ${({ theme }) => theme.flexSet()};
  width: max-content;
  padding: 14px 16px;
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: ${({ round }) => (round ? '20px' : '8px')};
  color: black;
  word-break: break-all;
  -webkit-tap-highlight-color: transparent;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  &:disabled {
    cursor: not-allowed !important;
  }
  ${({ size }) =>
    size &&
    css`
      padding: ${size[0]}px ${size[1]}px;
    `};

  ${colorStyles}
  ${fontWeightStyles}
  ${fullWidthStyle}
`
