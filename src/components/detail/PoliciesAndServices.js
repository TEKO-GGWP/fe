
import React from './node_modules/react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
/* eslint-disable react/prop-types */
export default function PoliciesAndServices () {
  return (
    <View style={styles.container}>
      <Text>Sản phẩm được miễn phí giao hàng</Text>
      <View style={styles.mainContainer}>
        <View style={styles.policiesWrapper}>
          <Text style={styles.title}>Chính sách bán hàng</Text>
          <Text style={styles.content}>Cam kết hàng chính hãng 100%.</Text>
          <Text style={styles.content}>Miễn phí giao hàng từ 500K.</Text>
          <Text style={styles.content}>Đổi trả miễn phí trong 10 ngày.</Text>
        </View>
        <View style={styles.servicesWrapper}>
          <Text style={styles.title}>Dịch vụ khác</Text>
          <Text style={styles.content}>Sửa chữa đồng giá 150.000đ.</Text>
          <Text style={styles.content}>Vệ sinh máy tính, laptop.</Text>
          <Text style={styles.content}>Bảo hành tại nhà.</Text>
          <TouchableOpacity>
            <Text style={styles.contentButton}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  servicesWrapper: {
    marginVertical: 5,
    marginLeft: 5
  },
  policiesWrapper: {
    marginVertical: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  content: {
    fontSize: 12
  },
  contentButton: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#3883FD'
  }
})
