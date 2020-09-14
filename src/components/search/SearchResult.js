import React from 'react'
import Category from '../Category'
import {
  View,
  StyleSheet,
  Text, Image
} from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const data = {
  name: 'Kết quả tìm kiếm',
  item: [
    {
      id: '1',
      image: require('../../../assets/intro-home.png'),
      name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
      price: 17290000,
      discountRate: 1100000,
      discountedPrice: 16190000,
      gifts: [require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png')]
    },
    {
      id: '2',
      image: require('../../../assets/intro-home.png'),
      name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
      price: 17290000,
      discountRate: 1100000,
      discountedPrice: 16190000,
      gifts: [require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png')]
    },
    {
      id: '3',
      image: require('../../../assets/intro-home.png'),
      name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
      price: 17290000,
      discountRate: 1100000,
      discountedPrice: 16190000,
      gifts: [require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png')]
    },
    {
      id: '4',
      image: require('../../../assets/intro-home.png'),
      name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
      price: 15290000,
      discountRate: 1100000,
      discountedPrice: 16190000,
      gifts: [require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png'), require('../../../assets/intro-home.png')]
    }
  ]
}

export default function SearchResult (props) {
  const { count, search } = props

  return (
    <View>
      <View style={styles.totalResultContainer}>
        <Text>Có tổng cộng {count} kết quả tìm kiếm cho </Text>
        <Text style={styles.totalSearchText}>{search}</Text>
      </View>
      <View style={styles.categoryContainer}>
        {count !== 0
          ? <Category item={data} showDiscounted={true} />
          : <View>
            <Text style={styles.title}>Kết quả tìm kiếm</Text>
            <View style={styles.totalResultContainer}>
              <Text>Ý bạn là</Text>
              <Text style={styles.suggestText}> Laptop </Text>
              <Text>?</Text>
            </View>
            <Image source={require('../../../assets/no-result.png')} style={styles.image}/>
            <Text style={styles.greyText}>Xin lỗi, không có sản phẩm nào phù hợp với từ khóa của bạn</Text>
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  totalResultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  totalSearchText: {
    color: '#FB1212'
  },
  categoryContainer: {
    height: heightPercentageToDP('53%')
  },
  suggestText: {
    color: '#FC4141',
    fontStyle: 'italic'
  },
  title: {
    color: '#1434C3',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    width: '65%',
    textTransform: 'uppercase'
  },
  greyText: {
    color: 'grey',
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250,
    opacity: 0.2,
    alignSelf: 'center',
    marginTop: 20
  }
})
