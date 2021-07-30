import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'


import App from './components/App'
import reducers from './reducers' //here, we are invoking the combined Reducers


const container = document.getElementById('root')
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    container)