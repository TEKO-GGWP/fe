import React from 'react'
import CartItem from '../components/cart/CartItem'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Feather } from '@expo/vector-icons'
import Icon from '../components/common/Icon'

const Cart = (props) => {
  /* eslint-disable no-unused-vars */

  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="chevron-left"
          size={30}
          color="#239FE6"
        />
        <Text style={styles.title}>Giỏ hàng</Text>
      </View>
      <ScrollView style={styles.body}>
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      <View style={styles.couponWrapper}>
        <TextInput
          editable
          style={styles.textInput}
          placeholder="Mã giảm giá"
        />
        <TouchableOpacity style={styles.couponButton}>
          <Text style={styles.couponText}>APPLY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkOutWrapper}>
        <View style={styles.checkOutText}>
          <Text style={styles.greyText}>Tạm tính</Text>
          <Text style={styles.greyText}>11280000</Text>
        </View>
        <View style={styles.checkOutText}>
          <Text style={styles.greyText}>Giảm giá</Text>
          <Text style={styles.greyText}>11280000</Text>
        </View>
        <View style={styles.checkOutText}>
          <Text style={styles.total}>Tổng tiền</Text>
          <Text style={styles.total}>11280000</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>THANH TOÁN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.upperImage}>
        <Icon />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1 / 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    elevation: 2,
    zIndex: 2
  },
  title: {
    color: 'rgb(21, 54, 195)',
    fontWeight: 'bold',
    fontSize: 24
  },
  body: {
    flex: 3 / 9,
    elevation: 2,
    zIndex: 2,
    backgroundColor: '#fff'
  },
  couponWrapper: {
    flex: 1 / 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    zIndex: 2,
    marginTop: 10
  },
  couponButton: {
    width: 70,
    height: 45,
    backgroundColor: '#51D2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  couponText: {
    color: '#1435C3'
  },
  textInput: {
    width: '60%',
    height: 45,
    color: '#707070',
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderColor: '#112DA8',
    borderWidth: 1,
    padding: 10
  },
  checkOutWrapper: {
    flex: 4 / 9,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    zIndex: 2
  },
  checkOutText: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  greyText: {
    color: '#B2BEC3'
  },
  total: {
    fontWeight: 'bold',
    color: '#1435C3',
    fontSize: 18,
    marginBottom: 5
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgb(21, 54, 195)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    left: -15,
    zIndex: 1,
    elevation: 1
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
