import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text
} from 'react-native'

import backgroundImage from '../../assets/background.png'
import phongvuIcon from '../../assets/pv-icon.svg'
import phongvuLogo from '../../assets/pv-logo.svg'

export default function Welcome () {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.iconWrapper}>
          <Image source={phongvuIcon} />
        </View>
        <View style={styles.logoWrapper}>
          <Text style={styles.welcomeText}>Chào mừng đến với</Text>
          <Image source={phongvuLogo} />
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
    flex: 2,
    alignItems: 'flex-end',
    marginRight: -50
  },
  welcomeText: {
    color: '#1536C3',
    fontSize: 22
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: -50
  }
})
