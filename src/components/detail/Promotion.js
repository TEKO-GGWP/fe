import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
/* eslint-disable react/prop-types */
export default function Promotions (props) {
  const { data, index } = props
  const [checkbox, setCheckbox] = useState('unchecked')

  const handleClickCheckbox = () => {
    if (checkbox === 'unchecked') {
      setCheckbox('checked')
    } else {
      setCheckbox('unchecked')
    }
  }

  return (
    <View style={styles.container} key={index}>
      <View>
        <Text style={styles.price}>Giá: {data.price.sellPrice}</Text>
        <Text>Đã giảm thêm: <Text style={styles.sale}>{+data.price.supplierSalePrice - +data.price.sellPrice}</Text></Text>
      </View>
      <Checkbox color="#1434C3" status={checkbox} onPress={handleClickCheckbox} />
    </View>
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F1FDFD',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
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
