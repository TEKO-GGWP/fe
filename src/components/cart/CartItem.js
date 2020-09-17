import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { actAddQuantity, actRemoveFromCart, actSubtractQuantity } from '../../actions'

const CartItem = (props) => {
  const { key, data } = props
  const [, onChangeQuantity] = useState(0)
  return (
    <View style={styles.container} key={key}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: data?.images?.[0].url }} style={styles.image} resizeMode='contain' />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{data?.displayName}</Text>
        <Text style={styles.brand}>Cung cấp bởi {data?.tech_specifications?.['Thương hiệu']}</Text>
        {(data.price.sellPrice - data.price.supplierSalePrice > 0)
          ? (
            <>
              <Text Text style={styles.discountedPrice}>{data.price.supplierSalePrice}đ</Text>
              <Text style={{
                ...styles.price,
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid'
              }}>{data.price.sellPrice}đ</Text>
            </>
          )
          : <Text style={styles.price}>{data.price.sellPrice}đ</Text>
        }
        <View style={styles.amountWrapper}>
          {data.totalAvailable
            ? <Text style={styles.isRemain}>Còn hàng</Text>
            : <Text style={styles.isNotRemain}>Hết hàng</Text>
          }
          <View style={styles.amountButtonWrapper}>
            <TouchableOpacity style={styles.amountButton} onPress={() => { props.onSubtractingQuantity(data.sku); onChangeQuantity(data.quantity) }}>
              <Feather
                name="minus"
                size={16}
                color="#14C32A"
              />
            </TouchableOpacity>
            <Text style={styles.amount}>{data.quantity}</Text>
            <TouchableOpacity style={styles.amountButton} onPress={() => { props.onAddingQuantity(data.sku); onChangeQuantity(data.quantity) }}>
              <Feather
                name="plus"
                size={16}
                color="#14C32A"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => props.onRemovingFromCart(data.sku)}>
        <Feather
          name="x"
          size={24}
          color="black"
          style={styles.removeIcon}
        />
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 15,
    paddingTop: 10
  },
  imageWrapper: {
    flex: 1,
    marginHorizontal: 10
  },
  image: {
    flex: 1,
    height: null,
    width: '100%',
    resizeMode: 'contain'
  },
  detail: {
    flex: 2
  },
  title: {
    fontWeight: 'bold',
    color: '#1435C3',
    marginBottom: 5
  },
  brand: {
    color: '#B2BEC3',
    marginBottom: 5
  },
  price: {
    color: '#C31414',

    marginBottom: 10
  },
  discountedPrice: {
    color: '#C31414',
    marginBottom: 5

  },
  amountWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  isRemain: {
    color: '#14C32A'
  },
  isNotRemain: {
    color: 'red'
  },
  amountButtonWrapper: {
    flexDirection: 'row'
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: '#DFE6E9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  amount: {
    color: '#14C32A',
    width: 30,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  removeIcon: {
    marginRight: 10,
    marginLeft: 10
  }

})

const mapStateToProps = state => {
  return {
    userInformation: state.userInformation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddingQuantity: (sku) => {
      dispatch(actAddQuantity(sku))
    },
    onSubtractingQuantity: (sku) => {
      dispatch(actSubtractQuantity(sku))
    },
    onRemovingFromCart: (sku) => {
      dispatch(actRemoveFromCart(sku))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
