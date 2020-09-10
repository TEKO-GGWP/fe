import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// import SignUpForm from './SignUpForm'
import SignUp from './SignUp'
import SignUpForm from './SignUpForm'
import Home from './Home'
import Detail from './Detail'
import ConfirmOTP from './ConfirmOTP'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator()
const MainScreen = (props) => {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(false)
  /* eslint-enable no-unused-vars */

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@isAuthorized')
      if (value === null || !value) {
        setIsAuthorized(false)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthorized ? <Stack.Screen name="Home" component={Home} /> : <Stack.Screen name="SignUp" component={SignUp} />}
          <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} />
          <Stack.Screen name="Home" component={Home} />
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

const mapStateToProps = state => {
  return {
    userInformation: state.userInformation
  }
}

export default connect(mapStateToProps)(MainScreen)
