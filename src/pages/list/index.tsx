import { useCityList, useIntersectionObserver } from '../../hooks'
import { ErrorBlock } from '../../components'
import CityCard from './components/City'
import * as S from './style'

const List = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useCityList()

  const observeElement = () => {
    if (!hasNextPage) return
    fetchNextPage()
  }

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting) {
      observeElement()
      observer.observe(entry.target)
    }
  }

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    onIntersect,
  })

  const list = data?.pages.map((page) => page.items).flat()

  if (isError)
    return <ErrorBlock message="json 서버가 켜져있는지 확인해주세요 :)" />

  return (
    <S.Wrapper>
      {list?.map((el, i) => (
        <CityCard
          key={el.id}
          ref={list?.length === i + 1 ? setTarget : null}
          info={el}
        />
      ))}
      {isLoading && <div>Loading...</div>}
    </S.Wrapper>
  )
}

export default List
