import styled from 'styled-components'

export const Wrapper = styled.form`
  margin-right: auto;
`
export const Input = styled.input`
  width: 250px;
  padding: 0.4rem 0.9rem;
  background-color: ${({ theme }) => theme.colors.grey100};
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.grey200};
`
