import { forwardRef } from 'react'
import { City as CityTypes } from '../../../../types/city'
import * as S from './style'

interface propTypes {
  info: CityTypes
  onClick?: React.MouseEventHandler
}

const City = forwardRef<HTMLDivElement, propTypes>(({ info, onClick }, ref) => {
  const { name } = info
  return (
    <S.Wrapper ref={ref} onClick={onClick}>
      {name}
    </S.Wrapper>
  )
})

export default City
