import React from 'react'
import { Image, StyleSheet } from 'react-native'

const IntroItem = (props) => {
  return (
    <Image
      source={props.item.url}
      style={styles.introItemImage}
    />
  )
}

const styles = StyleSheet.create({
  introItemImage: {
    width: 280,
    height: 150,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    resizeMode: 'contain'
  }
})

export default IntroItem
