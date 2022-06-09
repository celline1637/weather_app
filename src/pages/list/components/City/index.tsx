import { forwardRef } from 'react'
import { useNavigateTo } from '../../../../hooks'
import { City as CityTypes } from '../../../../types'
import * as S from './style'
interface propTypes {
  info: CityTypes
}

const CityCard = forwardRef<HTMLDivElement, propTypes>(({ info }, ref) => {
  const { goTo } = useNavigateTo()
  const { name } = info

  const handleClick = () => {
    goTo(`/city/${name}`)
    window.scrollTo(0, 0)
  }

  return (
    <S.Wrapper ref={ref} onClick={handleClick}>
      {name}
    </S.Wrapper>
  )
})

export default CityCard
