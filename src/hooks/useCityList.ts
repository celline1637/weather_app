import { useRef } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { City, Pages } from '../types'

export const useCityList = () => {
  const offset = useRef(20)

  const getPost = async (page: number) => {
    const res = await axios.get(`${process.env.REACT_APP_HOST}/city`, {
      params: {
        _page: page,
        _limit: offset.current,
      },
    })
    const items: City[] = res.data
    return {
      items,
      nextPage: page + 1,
      hasMore: page * offset.current >= 26035 || page === null ? false : true,
    }
  }

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Pages, Error>(
      ['city'],
      ({ pageParam = 1 }) => getPost(pageParam),
      {
        keepPreviousData: true,
        getNextPageParam: (lastPage, _pages) => {
          return lastPage.hasMore ? lastPage.nextPage : undefined
        },
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 1,
      }
    )

  return { data, isLoading, isError, fetchNextPage, hasNextPage }
}
