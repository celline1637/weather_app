import { Navigate, useRoutes } from 'react-router-dom'
import { Layout } from './components/layout'
import Detail from './pages/detail'
import List from './pages/list'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/city/list" />,
    },
    {
      element: <Layout />,
      path: '/city',
      children: [
        { path: 'list', element: <List /> },
        { path: ':city_pk', element: <Detail /> },
      ],
    },
  ])

  return routes
}

export default Routes
