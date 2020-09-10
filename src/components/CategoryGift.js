import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// eslint-disable-next-line react/prop-types
const CategoryGift = ({ gifts }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 11 }}>Tặng ngay</Text>
      {/* eslint-disable-next-line react/prop-types */}
      {gifts.map(
        (item, i) =>
          <Image
            source={item}
            key={`gift${i}`}
            style={styles.itemGifts}
          />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5
  },
  itemGifts: {
    width: 30,
    height: 20,
    marginLeft: 5,
    borderRadius: 2,
    borderColor: '#F1FDFD',
    borderWidth: 1
  }
})

export default CategoryGift
