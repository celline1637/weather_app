import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  ${({ theme }) => theme.posCenter()};
`
export const Img = styled.img`
  width: 100px;
`

export const Row = styled.div`
  ${({ theme }) => theme.flexSet()};
  gap: 0.4rem;
`
