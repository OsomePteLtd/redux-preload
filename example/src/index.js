import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import storeInstance from './store/store'
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
)
