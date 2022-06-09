import styled from 'styled-components'

export const Nav = styled.header`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  height: ${({ theme }) => theme.calcRem(80)};
  margin-top: ${({ theme }) => theme.calcRem(-80)};
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 15px rgb(0 0 0 / 20%);
`

export const Wrapper = styled.nav`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;
  max-width: 1240px;
`

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
`

export const MenuWrapper = styled.ul`
  display: none;

  @media ${({ theme }) => theme.tablet} {
    display: flex;
  }
`

export const Menu = styled.li`
  padding: 1rem;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    & > button {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const StyledLink = styled.a`
  padding: 0 1rem;
`
