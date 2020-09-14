import thunk from 'redux-thunk'
import React, { useState } from 'react'
// import SignUpForm from './src/containers/SignUpForm'
// import SignUp from './src/containers/SignUp'
// import Home from './src/containers/Home'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import MainScreen from './src/containers/MainScreen'
// import search from './src/containers/search'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default function App () {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(true)
  /* eslint-enable no-unused-vars */
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
    // <search />
  )
}
