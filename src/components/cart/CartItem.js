import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'

const item = {
  id: '1',
  image: require('../../../assets/s531fa/1.png'),
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
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} resizeMode='contain' />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.brand}>Cung cấp bởi {item.brand}</Text>
        {item.discountedPrice
          ? <Text Text style={styles.discountedPrice}>{item.discountedPrice}đ</Text>
          : <></>
        }
        <Text style={styles.price}>{item.price}đ</Text>
        <View style={styles.amountWrapper}>
          {item.isRemain
            ? <Text style={styles.isRemain}>Còn hàng</Text>
            : <Text style={styles.isNotRemain}>Hết hàng</Text>
          }
          <View style={styles.amountButtonWrapper}>
            <TouchableOpacity style={styles.amountButton}>
              <Feather
                name="minus"
                size={16}
                color="#14C32A"
              />
            </TouchableOpacity>
            <Text style={styles.amount}>1</Text>
            <TouchableOpacity style={styles.amountButton}>
              <Feather
                name="plus"
                size={16}
                color="#14C32A"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity >
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
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
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
    onAddUserInformation: (userInformation) => {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
