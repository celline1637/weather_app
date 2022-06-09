import SearchBar from '../searchBar'
import * as S from './style'

const Nav = () => {
  return (
    <S.Nav>
      <S.Wrapper>
        <S.StyledLink href="/">
          <S.Logo>도시의 날씨</S.Logo>
        </S.StyledLink>
        <SearchBar />
        <S.MenuWrapper>
          <S.Menu>
            <S.StyledLink>둘러보기</S.StyledLink>
          </S.Menu>
          <S.Menu>
            <S.StyledLink>로그인</S.StyledLink>
          </S.Menu>
        </S.MenuWrapper>
      </S.Wrapper>
    </S.Nav>
  )
}

export default Nav
