import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import CarouselSlide from '../components/detail/CarouselSlide'
import Specifications from '../components/detail/Specifications'
import Promotions from '../components/detail/Promotions'

import * as SAMPLE_PRODUCTS from '../data/sample_detail_products.json'
import PoliciesAndServices from '../components/detail/PoliciesAndServices'
import SameBrandList from '../components/detail/SameBrandList'
import { connect } from 'react-redux'
import { actAddToCart, actFetchProductByIdRequest } from '../actions'
const DATA = [
  {
    name: 'Image 1',
    path: require('../../assets/s531fa/1.png')
  },
  {
    name: 'Image 2',
    path: require('../../assets/s531fa/2.png')
  },
  {
    name: 'Image 3',
    path: require('../../assets/s531fa/3.png')
  },
  {
    name: 'Image 4',
    path: require('../../assets/s531fa/4.png')
  },
  {
    name: 'Image 5',
    path: require('../../assets/s531fa/5.png')
  },
  {
    name: 'Image 6',
    path: require('../../assets/s531fa/6.png')
  },
  {
    name: 'Image 7',
    path: require('../../assets/s531fa/7.png')
  }
]
const Detail = (props) => {
  useEffect(() => {
    props.onFetchProductById(1)
  }, [])
  console.log(props.product)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CarouselSlide data={DATA} />
        <Specifications data={SAMPLE_PRODUCTS} />
        <Promotions data={SAMPLE_PRODUCTS} />
        <PoliciesAndServices />
        <SameBrandList data={SAMPLE_PRODUCTS.same_brand_products} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: -50
  }
})
const mapStateToProps = state => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      actAddToCart(product)
    },
    onFetchProductById: (id) => {
      actFetchProductByIdRequest(id)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
