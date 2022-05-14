import { GlobalStyle } from './styles/global';
import {AppRoutes} from './routes'

import {AppProvider} from './hooks'

function App() {

  return (
    <AppProvider>
      <GlobalStyle />
      <AppRoutes />
    </AppProvider>
  )
}

export default App
