import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 60vw;
  margin-left: auto;
  margin-right: 1rem;
  @media ${({ theme }) => theme.tablet} {
    width: 300px;
    margin-right: auto;
    margin-left: 1rem;
  }
`
export const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0.9rem;
  background-color: ${({ theme }) => theme.colors.grey100};
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.grey200};
`
