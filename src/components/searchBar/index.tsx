import React, { useRef } from 'react'
import { useNavigateTo } from '../../hooks'
import * as S from './style'

const SearchBar = () => {
  const { goTo } = useNavigateTo()
  const searchRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    goTo(`/city/${searchRef.current?.value}`)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Input ref={searchRef} type="text" placeholder="검색어를 입력하세요" />
    </S.Wrapper>
  )
}

export default SearchBar
