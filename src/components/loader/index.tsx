import { useEffect, useState } from 'react'
import * as S from './style'

export const Loader = () => {
  const [imageIdx, setImageIdx] = useState(0)

  const IMG = [
    'http://openweathermap.org/img/w/01d.png',
    'http://openweathermap.org/img/w/02d.png',
    'http://openweathermap.org/img/w/09d.png',
    'http://openweathermap.org/img/w/03d.png',
    'http://openweathermap.org/img/w/11d.png',
    'http://openweathermap.org/img/w/13d.png',
  ]

  const changeimageIdx = () => {
    setImageIdx((prev) => (prev < IMG.length - 1 ? prev + 1 : 0))
  }
  
  useEffect(() => {
    const timer = setInterval(changeimageIdx, 1000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Loader>
      {IMG.map((el, i) => (
        <S.IconWrapper key={i} isShow={imageIdx === i} idx={i}>
          <img alt="icon" src={el} />
        </S.IconWrapper>
      ))}
    </S.Loader>
  )
}
