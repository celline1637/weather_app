import * as S from './style'

interface propsType {
  message: string
}

export const ErrorBlock = ({ message }: propsType) => {
  return <S.Wrapper>{message}</S.Wrapper>
}
