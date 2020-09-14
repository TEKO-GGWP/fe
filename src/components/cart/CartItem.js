import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
// import {Picker} from '@react-native-community/picker';

import { connect } from 'react-redux'
const item = {
  id: '1',
  image: require('../../../assets/intro-home.png'),
  name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
  brand: 'ASUS',
  price: 17290000,
  discountRate: 1100000,
  discountedPrice: 16190000,
  isRemain: true
}
const CartItem = (props) => {
  /* eslint-disable no-unused-vars */

  /* eslint-enable no-unused-vars */
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}><Image source={item.image} style={styles.image} resizeMode='contain'></Image></View>
      <View style={styles.detail}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.brand}>Cung cấp bởi {item.brand}</Text>
        <Text style={styles.price}>{item.price}đ</Text>
        {item.discountedPrice ? <Text Text style={styles.discountedPrice}>{item.discountedPrice}đ</Text> : <></>}
        <View style={styles.amountWrapper}>
          {item.isRemain
            ? <Text style={styles.isRemain}>Còn hàng</Text>
            : <Text style={styles.isNotRemain}>Hết hàng</Text>
          }
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20
  },
  imageWrapper: {
    flex: 1,
    marginHorizontal: 10
  },
  image: {
    flex: 1,
    height: null,
    width: '100%'
  },
  detail: {
    flex: 2
  },
  title: {
    fontWeight: 'bold',
    color: '#1435C3',
    marginBottom: 10
  },
  brand: {
    color: '#B2BEC3',
    marginBottom: 10

  },
  price: {
    color: '#C31414',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginBottom: 5
  },
  discountedPrice: {
    color: '#C31414',
    marginBottom: 5

  },
  amountWrapper: {},
  isRemain: { color: '#14C32A' },
  isNotRemain: {}

})

const mapStateToProps = state => {
  return {
    userInformation: state.userInformation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserInformation: (userInformation) => {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
