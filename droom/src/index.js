import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

const AppWithProvider =(
  <Provider store={store}> 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>  
) 

render(AppWithProvider,
document.getElementById('root')
)