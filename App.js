import thunk from 'redux-thunk'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import MainScreen from './src/containers/MainScreen'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default function App () {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(true)
  /* eslint-enable no-unused-vars */
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}
