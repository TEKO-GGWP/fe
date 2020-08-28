import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
<<<<<<< HEAD
import SignUpForm from './src/containers/SignUpForm'
=======
import SignUp from './src/containers/SignUp'
import Home from './src/containers/Home'
>>>>>>> 72adb0ab8a2b7e9ade7c97add5f41d535b209848
export default function App () {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(false)
  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      {isAuthorized ? <Home /> : <SignUp />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
