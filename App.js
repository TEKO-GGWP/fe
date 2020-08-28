import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import SignUp from './src/containers/SignUp'
import SignUpForm from './src/containers/SignUpForm'
import Home from './src/containers/Home'
export default function App () {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(false)
  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      {/* {isAuthorized ? <Home /> : <SignUp />} */}
      <SignUpForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
