import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)


serviceWorkerRegistration.register();


reportWebVitals()
