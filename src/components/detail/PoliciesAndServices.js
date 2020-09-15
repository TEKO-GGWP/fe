
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
/* eslint-disable react/prop-types */
export default function PoliciesAndServices () {
  return (
    <View style={styles.container}>
      <View style={styles.showFlex}>
        <Feather
          name="truck"
          color="lightgreen"
          style={styles.icon}
        />
        <Text style={{ color: 'lightgreen' }}>Sản phẩm được miễn phí giao hàng</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.policiesWrapper}>
          <Text style={styles.title}>Chính sách bán hàng</Text>
          <View style={styles.showFlex}>
            <Feather
              name="check-circle"
              color="#112DA8"
              style={styles.icon}
            />
            <Text style={styles.content}>Cam kết hàng chính hãng 100%.</Text>
          </View>
          <View style={styles.showFlex}>
            <Feather
              name="archive"
              color="#112DA8"
              style={styles.icon}
            />
            <Text style={styles.content}>Miễn phí giao hàng từ 500K.</Text>
          </View>
          <View style={styles.showFlex}>
            <Feather
              name="refresh-cw"
              color="#112DA8"
              style={styles.icon}
            />
            <Text style={styles.content}>Đổi trả miễn phí trong 10 ngày.</Text>
          </View>
        </View>
        <View style={styles.servicesWrapper}>
          <Text style={styles.title}>Dịch vụ khác</Text>
          <View style={styles.showFlex}>
            <Feather
              name="settings"
              color="#112DA8"
              style={styles.icon}
            />
            <Text style={styles.content}>Sửa chữa đồng giá 150.000đ.</Text>
          </View>
          <View style={styles.showFlex}>
            <Feather
              name="monitor"
              color="#112DA8"
              style={styles.icon}
            />
            <Text style={styles.content}>Vệ sinh máy tính, laptop.</Text>
          </View>
          <View style={styles.showFlex}>
            <Feather
              name="shield"
              color="#112DA8"
              style={styles.icon}
            />
            <Text style={styles.content}>Bảo hành tại nhà.</Text>
          </View>
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
    marginBottom: 30
  },
  showFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  icon: {
    marginRight: 10
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  servicesWrapper: {
    width: '45%',
    marginVertical: 5,
    marginLeft: 5
  },
  policiesWrapper: {
    width: '45%',
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
