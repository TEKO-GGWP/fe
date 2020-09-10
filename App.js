import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// import SignUpForm from './src/containers/SignUpForm'
import SignUp from './src/containers/SignUp'
import SignUpForm from './src/containers/SignUpForm'
import Home from './src/containers/Home'
import Detail from './src/containers/Detail'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ConfirmOTP from './src/containers/ConfirmOTP'

const Stack = createStackNavigator()
export default function App () {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(true)
  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      {/* {isAuthorized ? <Home /> : <SignUp />} */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="ConfirmProfile" component={ConfirmProfile} /> */}
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
