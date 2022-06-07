import { useNavigate, To, NavigateOptions } from 'react-router-dom'

export const useNavigateTo = () => {
  const navigate = useNavigate()

  const goTo = (url: To, state?: NavigateOptions) => navigate(url, { state })

  const goBack = (stack?: number) => navigate(stack ?? -1)

  const goReplace = (url: To, state?: NavigateOptions) =>
    navigate(url, { state, replace: true })

  return { goTo, goBack, goReplace }
}
