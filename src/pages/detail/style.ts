import styled from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => theme.flexColumnSet()};
  gap: 1rem;
  width: 70%;
  margin: 0 auto;
  padding-top: 5rem;
`

export const CityName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`

export const Img = styled.img`
  width: 26%;
  margin: 1rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blue}; ;
`

export const CurrentTemp = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey200};
  border-radius: 4px;
`
export const AdditionalInfo = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  gap: 0.8rem;
  padding: 1.6rem;
`
