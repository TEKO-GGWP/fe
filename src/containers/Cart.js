import React from 'react'
import {
  SafeAreaView,
  StyleSheet
} from 'react-native'
// import {Picker} from '@react-native-community/picker';

import { connect } from 'react-redux'
import CartItem from '../components/cart/CartItem'

const Cart = (props) => {
  /* eslint-disable no-unused-vars */

  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      <CartItem />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  formWrapper: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    elevation: 2,
    zIndex: 2
  },
  logoWrapper: {
    flex: 0.5,
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    // flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    resizeMode: 'contain',
    height: '15%',
    elevation: 2,
    zIndex: 2
  },
  iconImage: {
    alignSelf: 'flex-start',
    marginBottom: -50
  },
  textInput: {
    color: '#707070',
    fontSize: 15,
    fontWeight: '500',
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  picker: {
    color: '#707070'
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    marginVertical: 5,
    height: 50,
    width: '80%',
    borderRadius: 10
  },
  radioButtonsListWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5
  },
  radioButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  countryPickStyle: {
    borderRightWidth: 2,
    borderRightColor: '#000'
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: 'rgb(21, 54, 195)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
  description: {
    fontSize: 15,
    color: '#707070',
    fontWeight: '500'
  },
  title: {
    marginVertical: 10,
    color: 'rgb(21, 54, 195)',
    fontWeight: 'bold',
    fontSize: 24
  },
  lowerImage: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    elevation: 1,
    zIndex: 1
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
