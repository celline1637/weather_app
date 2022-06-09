import { useParams } from 'react-router-dom'
import { Loader, ErrorBlock } from '../../components'
import { useCityDetail } from '../../hooks'
import * as S from './style'

const Detail = () => {
  const { city_name } = useParams()
  const { weather, isWeatherLoading, isWeatherError } = useCityDetail(city_name)

  if (isWeatherError) return <ErrorBlock message="없는 도시입니다." />

  return isWeatherLoading ? (
    <Loader />
  ) : (
    <S.Wrapper>
      <S.CityName>
        {weather?.name} / {weather?.sys.country}
      </S.CityName>
      <div>{weather?.weather[0].main}</div>
      <S.Img
        src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
        alt="날씨 이미지"
      />
      <S.CurrentTemp>{weather?.main.temp}°</S.CurrentTemp>
      <div>{weather?.weather[0].description}</div>
      <div>
        최저 {weather?.main.temp_min}° / 최고 {weather?.main.temp_max}°
      </div>
      <S.Row>
        <S.AdditionalInfo>
          <p>현재 습도</p>
          <p>{weather?.main.humidity} %</p>
        </S.AdditionalInfo>
        <S.AdditionalInfo>
          <p>바람</p>
          <p>{weather?.wind.speed} m/s</p>
        </S.AdditionalInfo>
        <S.AdditionalInfo>
          <p>구름</p>
          <p>{weather?.clouds.all} %</p>
        </S.AdditionalInfo>
      </S.Row>
    </S.Wrapper>
  )
}

export default Detail
