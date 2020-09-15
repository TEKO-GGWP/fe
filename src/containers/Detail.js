import React from 'react'
import CarouselSlide from '../components/detail/CarouselSlide'
import Specifications from '../components/detail/Specifications'
import Promotions from '../components/detail/Promotions'
import PoliciesAndServices from '../components/detail/PoliciesAndServices'
import SuggestDetail from '../components/detail/SuggestDetail'
import NoLogoHeader from '../components/common/NoLogoHeader'
import * as SAMPLE_PRODUCTS from '../data/sample_detail_products.json'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'
// import { Feather } from '@expo/vector-icons'

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
export default function Detail () {
  return (
    <SafeAreaView style={styles.container}>
      <NoLogoHeader />
      <ScrollView style={styles.body}>
        <CarouselSlide data={DATA} />
        <Specifications data={SAMPLE_PRODUCTS} />
        <Promotions data={SAMPLE_PRODUCTS} />
        <PoliciesAndServices />
        <SuggestDetail name="Cùng thương hiệu ASUS" data={SAMPLE_PRODUCTS.same_brand_products} />
        <SuggestDetail name="Sản phẩm tương tự" data={SAMPLE_PRODUCTS.same_brand_products} />
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
