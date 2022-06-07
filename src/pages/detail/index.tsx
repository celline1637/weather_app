import { useParams } from 'react-router-dom'
import { Loader } from '../../components/loader'
import { useCityDetail } from '../../hooks/useCityDetail'
import * as S from './style'

const Detail = () => {
  const { city_name } = useParams()
  const { weather, isWeatherLoading } = useCityDetail(city_name)
  return isWeatherLoading ? (
    <Loader />
  ) : (
    <S.Wrapper>
      <div>
        {weather?.name} / {weather?.sys.country}
      </div>
      <div>{weather?.weather[0].main}</div>
      <S.Img
        src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
        alt="날씨 이미지"
      />
      <div>{weather?.main.temp}°</div>
      <div>{weather?.weather[0].description}</div>
      <div>
        최저 {weather?.main.temp_min}° / 최고 {weather?.main.temp_max}°
      </div>
      <S.Row>
        <div>
          <p>현재 습도</p>
          <p> {weather?.main.humidity} %</p>
        </div>
        <div>
          <p>바람</p>
          <p>{weather?.wind.speed} m/s</p>
        </div>
        <div>
          <p>구름</p>
          <p>{weather?.clouds.all} %</p>
        </div>
      </S.Row>
    </S.Wrapper>
  )
}

export default Detail
