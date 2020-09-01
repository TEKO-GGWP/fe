import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import { introUrl, category } from '../data/sample'
import NumberFormat from 'react-number-format';

const IntroItem = ({ item }) => {
  return (
    <Image source={item.url} style={styles.introItem}/>
  )
}

const CategoryHeader = ({ title, url }) => {
  return (
    <View style={styles.flexRow}>
      <Text style={[styles.title, styles.upperCase]}>{title}</Text>
      <TouchableOpacity>
        <Text style={[styles.subtitle, styles.upperCase]}>Xem thêm</Text>
      </TouchableOpacity>
    </View>
  )
}

const CategoryItem = ({ item }) => {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.itemImageContainer}>
        <Image
          source={item.image}
          style={styles.itemImage}
        />
      </View>
      <Text
        numberOfLines={2}
        style={styles.itemName}
      >
        {item.name}
      </Text>
      <View style={styles.priceContainer}>
        <NumberFormat
          value={item.price}
          displayType={'text'}
          thousandSeparator={true}
          suffix={'đ'}
          renderText={
            value => <Text style={styles.itemPrice}>{value}</Text>
          }
        />
        <Feather name="truck" color="lightgreen" />
      </View>
      <View style={styles.flexRow}>
        <View>
          <Text>Giảm ngay</Text>
          <NumberFormat
            value={item.discountRate}
            displayType={'text'}
            thousandSeparator={true}
            suffix={'đ'}
            renderText={
              value => <Text>{value}</Text>
            }
          />
        </View>
        <View>
          <Text style={styles.saleText}>Chỉ còn</Text>
          <NumberFormat
            value={item.discountedPrice}
            displayType={'text'}
            thousandSeparator={true}
            suffix={'đ'}
            renderText={
              value => <Text>{value}</Text>
            }
          />
        </View>
      </View>
      <View style={styles.flexRow}>
        <Text>Tặng ngay</Text>
        {item.gifts.map((item, i) => <Image source={item} key={`gift${i}`} style={styles.itemGifts} />)}
      </View>
    </View>
  )
}

const Category = ({ item }) => {
  return (
    <View>
      <CategoryHeader title={item.name} url={null}/>
      <FlatList
        data={item.item}
        renderItem={item => <CategoryItem item={item.item} />}
        keyExtractor={item => item.id}
        numColumns= {2}
      />
    </View>
  )
}

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={phongvuLogo}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>Xin chào, Nam!</Text>
        </View>
        <TouchableOpacity>
          <Feather
            name='shopping-cart'
            size={25}
            color="#1434C3"
            style={styles.cart}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <Feather name='search' size={15} color="#1434C3" />
        <TextInput
          style={[styles.subtitle, styles.searchInput]}
          placeholder="Bạn cần tìm mua gì?"
          underlineColor='transparent'
          underlineColorAndroid='transparent'
          autoCorrect={false}
        >
        </TextInput>
      </View>
      <ScrollView style={styles.body}>
        <FlatList
          data={introUrl}
          renderItem={item => <IntroItem item={item.item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
        {category.map((item) => <Category item={item} key={item.id}/>)}
      </ScrollView>
      <View style={styles.upperImage}>
        <Image source={phongvuIcon} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  upperCase: {
    textTransform: 'uppercase'
  },
  header: {
    flex: 1 / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    marginBottom: 5
  },
  searchBar: {
    flex: 1 / 9,
    backgroundColor: '#F1FDFD',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 15,
    marginRight: 15
  },
  searchInput: {
    backgroundColor: 'transparent'
  },
  body: {
    flex: 7 / 9
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    left: -15
  },
  title: {
    color: '#1434C3',
    fontWeight: '500'
  },
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
  },
  introItem: {
    width: 280,
    height: 150,
    // borderRadius: 20,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  categoryItem: {
    width: '50%'
  },
  itemImageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemImage: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'cover'
  },
  itemName: {
    padding: 10
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemPrice: {
    fontWeight: '500',
    marginRight: 5,
    marginLeft: 10
  },
  itemGifts: {
    width: 30,
    height: 20
  },
  saleText: {
    textAlign: 'right'
  }
})
