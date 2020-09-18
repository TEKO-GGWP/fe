import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// eslint-disable-next-line react/prop-types
const CategoryGift = ({ gifts }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 11 }}>Tặng ngay</Text>
      {/* eslint-disable-next-line react/prop-types */}
      <View style={styles.giftContainer}>
        {gifts.map(
          (item, id) =>
            id < 2
              ? <Image
                source={{ uri: item.url }}
                key={`gift${id}`}
                style={styles.itemGifts}
              />
              : null
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    flexWrap: 'wrap'
  },
  giftContainer: {
    flexDirection: 'row',
    width: '60%',
    flexWrap: 'wrap'
  },
  itemGifts: {
    width: 30,
    height: 30,
    marginLeft: 5,
    borderRadius: 2,
    borderColor: '#F1FDFD',
    borderWidth: 1
  }
})

export default CategoryGift
