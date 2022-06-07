import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexSet('flex-start', 'flex-start')};
  flex-wrap: wrap;
  margin-top: 80px;

  @media ${({ theme }) => theme.tablet} {
    padding: 0 2rem 2rem 2rem;
  }
`
