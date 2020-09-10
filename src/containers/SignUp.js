import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import PhoneInput from 'react-native-phone-input'

import backgroundImage from '../../assets/background.png'
import phongvuIcon from '../../assets/pv-icon.svg'
import phongvuLogo from '../../assets/pv-logo.svg'

export default function SignUp () {
  const [phoneNumber, setPhoneNumber] = useState('')
  /* eslint-disable no-unused-vars */
  const [countryCode, setCountryCode] = useState('')
  /* eslint-enable no-unused-vars */

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.iconWrapper}>
          <Image source={phongvuIcon} />
        </View>
        <View style={styles.logoWrapper}>
          <Image source={phongvuLogo} />
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image source={phongvuIcon} />
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
  iconWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: -50
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  phoneInput: {
    width: 200,
    height: 35,
    borderRadius: 17,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  countryPickStyle: {
    borderRightWidth: 2,
    borderRightColor: '#000'
  },
  button: {
    width: 200,
    height: 35,
    borderRadius: 17,
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
  footer: {
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: -50
  }
})
