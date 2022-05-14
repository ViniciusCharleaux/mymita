import { GlobalStyle } from './styles/global';
import {Routes} from './routes'

import {AppProvider} from './hooks'
import { useEffect } from 'react';

import {useAuth} from './hooks/auth'

function App() {

  
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  )
}

export default App
