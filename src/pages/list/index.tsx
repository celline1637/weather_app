import { useCityList } from '../../hooks/useCityList'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { useNavigateTo } from '../../hooks/useNavigateTo'
import City from './components/City'
import * as S from './style'

const List = () => {
  const { goTo } = useNavigateTo()
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

  return (
    <S.Wrapper>
      {list?.map((el, i) => (
        <City
          key={el.id}
          ref={list?.length === i + 1 ? setTarget : null}
          info={el}
          onClick={() => {
            goTo(`/city/${el.name}`)
            window.scrollTo(0, 0)
          }}
        />
      ))}
    </S.Wrapper>
  )
}

export default List
