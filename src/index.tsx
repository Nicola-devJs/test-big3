import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './core/redux/store'
import { Provider } from 'react-redux/es/exports'
import GlobalStyles from './assets/theme/globalStyle'
import { ThemeProvider } from 'styled-components'
import { appTheme } from './assets/theme/app-theme'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <Provider store={store}>
      <ThemeProvider theme={appTheme}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
         <GlobalStyles />
      </ThemeProvider>
   </Provider>
)
