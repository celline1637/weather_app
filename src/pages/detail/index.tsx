import { useParams } from 'react-router-dom'
import { useCityDetail } from '../../hooks/useCityDetail'

const Detail = () => {
  const { city_name } = useParams()
  const { weather } = useCityDetail(city_name)
  return (
    <>
      <div>{city_name}</div>
      <div>{weather?.id}</div>
      <div>{weather?.clouds.all}</div>
      <div>{weather?.weather[0].description}</div>
      <div>{weather?.weather[0].icon}</div>
    </>
  )
}

export default Detail
