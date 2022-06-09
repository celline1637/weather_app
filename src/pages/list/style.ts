import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${({ theme }) => theme.tablet} {
    padding: 0 2rem 2rem 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
