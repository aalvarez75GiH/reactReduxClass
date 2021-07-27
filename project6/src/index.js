import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'


import App from './components/App'
import reducers from './reducers'


const container = document.getElementById('root')
ReactDOM.render(<App/>,container)