import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
/* eslint-disable react/prop-types */
export default function Promotions (props) {
  const { data, index } = props
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.price}>Giá: {data.price}</Text>
      <Text>Đã giảm thêm: <Text style={styles.sale}>{data.sale}</Text></Text>
    </View>
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FDFD',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10
  },
  price: {
    color: '#C31414',
    fontWeight: '800',
    fontSize: 15
  },
  sale: {
    color: '#C31414',
    fontWeight: '500'
  }
})
