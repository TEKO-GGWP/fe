import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// import SignUpForm from './src/containers/SignUpForm'
import SignUp from './src/containers/SignUp'
import Home from './src/containers/Home'
// import Search from './src/containers/Search'
export default function App () {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(true)
  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      {isAuthorized ? <Home /> : <SignUp />}
      {/* <Search /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
