import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  Text
} from 'react-native'

import backgroundImage from '../../assets/background.png'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { TextInput } from 'react-native-paper'

const OPTDigit = () => {
  const digitContainer = Array.from(Array(4).keys()).map(index => {
    return (
      <View style={styles.digit} key={index}>
        <TextInput
          style={styles.digitInput}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
    )
  })
  return (
    <View style={styles.digitContainer}>
      {digitContainer}
    </View>
  )
}

export default function ConfirmOTP (props) {
  const onGoingToSignUpFormScreen = () => {
    props.navigation.navigate('SignUpForm')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Xác minh mã OTP</Text>
        </View>
        <Text style={styles.subTitle}>Vui lòng nhập mã số đã được gửi qua SMS</Text>
        <OPTDigit />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={onGoingToSignUpFormScreen}>
            <Text style={styles.text}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resend}>
          <Text style={styles.resendText}>Chưa nhận được mã? </Text>
          <Text style={styles.resendSubText}>Gửi lại</Text>
        </View>

        <View style={styles.footer}>
          <Image source={phongvuLogo} />
        </View>
        <View style={styles.upperImage}>
          <Image source={phongvuIcon} />
        </View>
        <View style={styles.lowerImage}>
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
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 3 / 9,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 24,
    color: '#1536C3',
    fontWeight: 'bold',
    marginBottom: 10
  },
  subTitle: {
    flex: 1 / 9,
    fontSize: 14,
    color: '#1536C3',
    marginBottom: 30
  },
  digitContainer: {
    flex: 1 / 9,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30
  },
  digit: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    borderColor: '#112DA8',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  digitInput: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    flex: 1 / 9
  },
  nextButton: {
    width: 300,
    height: 50,
    borderRadius: 25,
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
  resend: {
    flex: 2 / 9,
    flexDirection: 'row',
    marginTop: 10
  },
  resendText: {
    color: '#AFAFAF',
    fontSize: 14
  },
  resendSubText: {
    color: '#FB3737',
    fontSize: 14
  },
  footer: {
    flex: 1 / 9,
    justifyContent: 'flex-end',
    marginBottom: 15
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    right: -25
  },
  lowerImage: {
    position: 'absolute',
    bottom: -15,
    left: -15
  }
})
