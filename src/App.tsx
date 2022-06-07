import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Routes from './Routes'
import GlobalStyle from './theme/globalStyles'
import theme from './theme/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
