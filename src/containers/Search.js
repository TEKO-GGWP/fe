import React, { useState } from 'react'
import SearchBar from '../components/search/SearchBar'
import History from '../components/search/History'
import Catalogue from '../components/search/Catalogue'
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet, Text
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Suggest from '../components/search/Suggest'
import Category from '../components/Category'
import SuggestTab from '../components/search/SuggestTab'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const data = [
  {
    name: 'Kết quả tìm kiếm',
    item: [
      {
        id: '1',
        image: require('../../assets/intro-home.png'),
        name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
        price: 17290000,
        discountRate: 1100000,
        discountedPrice: 16190000,
        gifts: [require('../../assets/intro-home.png'), require('../../assets/intro-home.png'), require('../../assets/intro-home.png')]
      },
      {
        id: '2',
        image: require('../../assets/intro-home.png'),
        name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
        price: 17290000,
        discountRate: 1100000,
        discountedPrice: 16190000,
        gifts: [require('../../assets/intro-home.png'), require('../../assets/intro-home.png'), require('../../assets/intro-home.png')]
      },
      {
        id: '3',
        image: require('../../assets/intro-home.png'),
        name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
        price: 17290000,
        discountRate: 1100000,
        discountedPrice: 16190000,
        gifts: [require('../../assets/intro-home.png'), require('../../assets/intro-home.png'), require('../../assets/intro-home.png')]
      },
      {
        id: '4',
        image: require('../../assets/intro-home.png'),
        name: 'Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6" FHD/i5 Core)',
        price: 15290000,
        discountRate: 1100000,
        discountedPrice: 16190000,
        gifts: [require('../../assets/intro-home.png'), require('../../assets/intro-home.png'), require('../../assets/intro-home.png')]
      }
    ]
  }
]

export default function Search () {
  const [search, setSearch] = useState('')

  const handleSearch = (text) => {
    setSearch(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="chevron-left"
          size={30}
          color="#239FE6"
        />
        <TouchableOpacity>
          <Feather
            name="shopping-cart"
            size={30}
            color="#239FE6"
          />
        </TouchableOpacity>
      </View>
      <SearchBar search={search} handleSearch={(text) => handleSearch(text)}/>
      {search
        ? <View style={styles.body}>
          <SuggestTab handleSearch={handleSearch}/>
          <Text>Có tổng cộng 1000 kết quả tìm kiếm cho Laptop</Text>
          <View style={{ height: heightPercentageToDP('50%') }}>
            <Category item={data[0]} showDiscounted={true} />
          </View>
        </View>
        : <View style={styles.body}>
          <History />
          <Catalogue />
          <Suggest />
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    color: '#1434C3',
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
  },
  header: {
    flex: 1 / 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  body: {
    flex: 9 / 11,
    marginLeft: 10,
    marginRight: 10
  },
  suggestTabContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  suggestTab: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    borderRadius: 20
  }
})
