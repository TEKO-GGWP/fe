import React, { useEffect } from 'react'
import CarouselSlide from '../components/detail/CarouselSlide'
import Specifications from '../components/detail/Specifications'
import Promotions from '../components/detail/Promotions'
import PoliciesAndServices from '../components/detail/PoliciesAndServices'
import SuggestDetail from '../components/detail/SuggestDetail'
import NoLogoHeader from '../components/common/NoLogoHeader'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { actAddToCart, actFetchSameBrandProductsRequest, actFetchSimilarProductsRequest } from '../actions'
// import { Button } from 'react-native-paper'
// import { Feather } from '@expo/vector-icons'

const Detail = (props) => {
  const { product } = props.route.params
  const { sameBrandProducts, similarProducts } = props
  useEffect(() => {
    props.onFetchSameBrandProduct()
    props.onFetchSimilarProduct()
  }, [])
  // const onAddToCart = () => {
  //   props.onAddToCart(product)
  // }
  const onNavigatingToDetailScreen = (data) => {
    props.navigation.navigate('Detail', { product: data })
  }
  return (
    <SafeAreaView style={styles.container}>
      <NoLogoHeader navigation={props.navigation} />
      <ScrollView style={styles.body}>
        <CarouselSlide data={product} />
        {/* <Button title="add to cart"
          onPress={onAddToCart} /> */}
        <Specifications data={product} />
        <Promotions data={product} />
        <PoliciesAndServices />
        <SuggestDetail name="Cùng thương hiệu ASUS" data={sameBrandProducts} onPress={onNavigatingToDetailScreen} />
        <SuggestDetail name="Sản phẩm tương tự" data={similarProducts} onPress={onNavigatingToDetailScreen} />
      </ScrollView>
      <View style={styles.footer}>
        {/* <View style={[styles.footerItem, styles.footerLeft]}>
          <Feather
            name="shopping-cart"
            size={30}
            color="#627DF5"
          />
        </View> */}
        <View style={[styles.footerItem, styles.footerRight]}>
          <Text style={styles.buyNow}>Mua ngay</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 10 / 11,
    marginHorizontal: 10,
    marginVertical: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: -50
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  phoneInput: {
    width: 200,
    height: 35,
    borderRadius: 17,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  countryPickStyle: {
    borderRightWidth: 2,
    borderRightColor: '#000'
  },
  button: {
    width: 200,
    height: 35,
    borderRadius: 17,
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
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerItem: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerLeft: {
    backgroundColor: 'white',
    borderColor: '#627DF5',
    borderWidth: 2
  },
  footerRight: {
    backgroundColor: '#627DF5'
  },
  buyNow: {
    textTransform: 'uppercase',
    color: 'white'
  }
})
const mapStateToProps = state => {
  return {
    product: state.product,
    similarProducts: state.similarProducts,
    sameBrandProducts: state.sameBrandProducts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product))
    },
    onFetchSameBrandProduct: () => {
      dispatch(actFetchSameBrandProductsRequest())
    },
    onFetchSimilarProduct: () => {
      dispatch(actFetchSimilarProductsRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
