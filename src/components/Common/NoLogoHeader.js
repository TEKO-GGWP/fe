import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function NoLogoHeader (props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Feather
          name="chevron-left"
          size={30}
          color="#239FE6"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onAddingToCart(props.data)}>
        <Feather
          name="shopping-cart"
          size={30}
          color="#239FE6"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1 / 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
})
