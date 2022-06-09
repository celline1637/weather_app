import { useQuery } from 'react-query'
import axios from 'axios'
import { Weather } from './../types'

export const useCityDetail = (name: string | undefined) => {
  const getWeather = async () => {
    const res = await axios.get<Weather>(
      `${process.env.REACT_APP_WEATHER_URL}`,
      {
        params: {
          appid: process.env.REACT_APP_KEY,
          q: name,
          lang: 'kr',
          units: 'metric',
        },
      }
    )
    return res.data
  }

  const { isLoading, isError, data } = useQuery<Weather>(
    ['weather', name],
    getWeather,
    {
      enabled: name ? true : false,
    }
  )

  return {
    isWeatherLoading: isLoading,
    isWeatherError: isError,
    weather: data,
  }
}
