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

import backgroundImage from '../../assets/background.png'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { TextInput, RadioButton } from 'react-native-paper'

export default function ConfirmProfile () {
  const [checked, setChecked] = useState('male')

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Thông tin cơ bản</Text>
        </View>

        <View style={styles.form}>
          <TextInput placeholder="Họ và tên" style={styles.input}/>
          <TextInput placeholder="Ngày sinh" style={styles.input}/>
          <View style={styles.gender}>
            <Text>Giới tính</Text>
            <View style={styles.gender}>
              <RadioButton
                value="male"
                status={ checked === 'male' ? 'checked' : 'unchecked' }
                color="#1536C3"
                onPress={() => setChecked('male')}
              />
              <Text>Nam</Text>
            </View>
            <View style={styles.gender}>
              <RadioButton
                value="female"
                status={ checked === 'female' ? 'checked' : 'unchecked' }
                color="#1536C3"
                onPress={() => setChecked('female')}
              />
              <Text>Nữ</Text>
            </View>
          </View>
          <TextInput placeholder="Email" keyboardType="email-address" style={styles.input}/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.text}>Tiếp tục</Text>
          </TouchableOpacity>
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
    flex: 2 / 9,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 24,
    color: '#1536C3',
    fontWeight: 'bold',
    marginBottom: 10
  },
  form: {
    flex: 5 / 9,
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center'
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
