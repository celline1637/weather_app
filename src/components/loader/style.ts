import styled from 'styled-components'

export const Loader = styled.div`
  ${({ theme }) => theme.posCenter()};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
export const IconWrapper = styled.div<{ idx: number; isShow: boolean }>`
  ${({ theme }) => theme.posCenter()};
  ${({ theme }) => theme.flexSet()};
  width: 140px;
  height: 140px;
  background-color: ${({ theme, idx }) => {
    switch (idx % 3) {
      case 0:
        return theme.colors.yellow
      case 1:
        return theme.colors.blue
      case 2:
        return theme.colors.pink
    }
  }};
  border-radius: 50%;
  opacity: ${({ isShow }) => (isShow ? '90%' : '0%')};
  transition: all 0.3s ease-in;

  & > img {
    width: 70%;
  }
`
