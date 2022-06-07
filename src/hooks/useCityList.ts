import { Pages } from './../types/pages'
import { City } from './../types/city'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { useEffect, useRef } from 'react'

export const useCityList = () => {
  const offset = useRef(12)
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
      hasMore: page * offset.current >= 1000 || page === null ? false : true,
    }
  }

  const { data, isLoading, isError, fetchNextPage, hasNextPage, refetch } =
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

  useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, isLoading, isError, fetchNextPage, hasNextPage }
}
