import React, { useState } from 'react'
import PhoneInput from 'react-native-phone-input'
import backgroundImage from '../../assets/background.png'
import Icon from '../components/Common/Icon'
import Logo from '../components/Common/Logo'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { actAddPhoneNumber } from '../actions'

function SignUp (props) {
  const [phoneNumber, setPhoneNumber] = useState('')
  /* eslint-disable no-unused-vars */
  const [countryCode, setCountryCode] = useState('')
  /* eslint-enable no-unused-vars */

  const onNavigatingOTPScreen = () => {
    props.onAddPhoneNumber(phoneNumber)
    props.navigation.navigate('ConfirmOTP')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>
        <View style={styles.formWrapper}>
          <PhoneInput
            ref={(ref) => setCountryCode(ref)}
            onChangePhoneNumber={(value) => setPhoneNumber(value)}
            value={phoneNumber}
            style={styles.phoneInput}
            initialCountry="vn"
            onSelectCountry={(iso2) => setCountryCode(iso2)}
            textProps={{ placeholder: 'Nhập số điện thoại' }}
            buttonTextStyle={styles.countryPickStyle}
            autoFormat={true}
          />
          <TouchableOpacity style={styles.button} onPress={onNavigatingOTPScreen}>
            <Text style={styles.text}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.upperImage}>
          <Icon />
        </View>
        <View style={styles.lowerImage}>
          <Icon />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  logoWrapper: {
    flex: 1 / 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    transform: [{
      scale: 2
    }],
    marginBottom: 100,
    elevation: 2,
    zIndex: 2
  },
  formWrapper: {
    flex: 3 / 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 2,
    zIndex: 2
  },
  phoneInput: {
    width: 300,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  countryPickStyle: {
    borderRightWidth: 2,
    borderRightColor: '#000'
  },
  button: {
    width: 300,
    height: 55,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: 'rgb(21, 54, 195)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    right: -25
  },
  lowerImage: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    elevation: 1,
    zIndex: 1
  }
})

const mapStateToProps = state => {
  return {
    userInformation: state.userInformation
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddPhoneNumber: (phoneNumber) => {
      dispatch(actAddPhoneNumber(phoneNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
