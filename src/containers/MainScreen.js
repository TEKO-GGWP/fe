import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import SignUp from './SignUp'
import SignUpForm from './SignUpForm'
import Home from './Home'
import Cart from './Cart'
import Detail from './Detail'
import ConfirmOTP from './ConfirmOTP'
import Search from './Search'

const Stack = createStackNavigator()
const MainScreen = (props) => {
  /* eslint-disable no-unused-vars */
  const [isAuthorized, setIsAuthorized] = useState(false)
  /* eslint-enable no-unused-vars */

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@isAuthorized')
      if (value === null || !value) {
        setIsAuthorized('false')
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData().then(r => console.log('Get isAuthorized data successful')).catch(e => console.log(e))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthorized === 'true' ? <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            : <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />}
          <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpForm" component={SignUpForm} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
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
