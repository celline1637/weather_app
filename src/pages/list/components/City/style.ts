import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  border-radius: 0.3rem;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey100};
    transform: scale(1.03);
    transition: transform 0.2s ease;
    cursor: pointer;
  }
`
