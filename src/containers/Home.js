import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { Feather } from '@expo/vector-icons'
// import { TextInput } from 'react-native-paper'
import { introUrl, category } from '../data/sample'
import NumberFormat from 'react-number-format'

const IntroItem = (item) => {
  item = item.item

  return (
    <Image
      source={item.url}
      style={styles.introItem}
    />
  )
}

const CategoryHeader = (item) => {
  const { title } = item

  return (
    <View style={styles.flexRow}>
      <Text
        style={
          [
            styles.title,
            styles.upperCase
          ]
        }
      >
        {title}
      </Text>
      <TouchableOpacity>
        <Text
          style={
            [
              styles.subtitle,
              styles.upperCase,
              styles.seeMore
            ]
          }
        >
          Xem thêm
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const CategoryGift = (item) => {
  const { gifts } = item

  return (
    <View
      style={
        [
          styles.flexRow,
          { justifyContent: 'flex-start' }
        ]
      }
    >
      <Text style={styles.font12}>Tặng ngay</Text>
      {gifts.map(
        (item, i) =>
          <Image
            source={item}
            key={`gift${i}`}
            style={styles.itemGifts}
          />
      )}
    </View>
  )
}

const CategoryPrice = (item) => {
  const { price, cls } = item

  return (
    <NumberFormat
      value={price}
      displayType={'text'}
      thousandSeparator={true}
      suffix={'₫'}
      renderText={
        value =>
          <Text style={cls}>{value}</Text>
      }
    />
  )
}

const CategoryItem = (item) => {
  item = item.item

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
        <CategoryPrice
          price={item.price}
          cls={styles.itemPrice}
        />
        <Feather
          name="truck"
          color="lightgreen"
        />
      </View>
      <View style={styles.flexRow}>
        <View>
          <Text style={styles.font12}>
            Giảm ngay
          </Text>
          <CategoryPrice
            price={item.discountRate}
            cls={styles.saleText}
          />
        </View>
        <View>
          <Text
            style={
              [
                styles.font12,
                styles.onlyCost
              ]
            }
          >
            Chỉ còn
          </Text>
          <CategoryPrice
            price={item.discountedPrice}
            cls={styles.saleText}
          />
        </View>
      </View>
      {item.gifts.length > 0
        ? <CategoryGift gifts={item.gifts} />
        : null
      }
    </View>
  )
}

const Category = (item) => {
  item = item.item

  return (
    <View>
      <CategoryHeader
        title={item.name}
        url={null}
      />
      <FlatList
        data={item.item}
        renderItem={item => <CategoryItem item={item.item} />}
        keyExtractor={item => item.id}
        numColumns= {2}
      />
    </View>
  )
}

const Interest = () => {
  return (
    <View>
      <Text
        style={
          [
            styles.title,
            styles.upperCase,
            { marginLeft: 5 }
          ]
        }
      >
        Có thể bạn quan tâm
      </Text>
      <View style={styles.flexRow}>
        <View style={styles.interestItem}>
          <ImageBackground
            source={require('../../assets/intro-home.png')}
            style={styles.interestBgr}
            imageStyle={styles.interestImg}
          >
            <Text style={[styles.interestText, styles.upperCase]}>Build PC</Text>
          </ImageBackground>
        </View>
        <View style={styles.interestItem}>
          <ImageBackground
            source={require('../../assets/intro-home.png')}
            style={styles.interestBgr}
            imageStyle={styles.interestImg}
          >
            <Text
              style={
                [
                  styles.interestText,
                  styles.upperCase
                ]
              }
            >
              Tin Công Nghệ
            </Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.interestBigItem}>
        <ImageBackground
          source={require('../../assets/intro-home.png')}
          style={styles.interestBgr}
          imageStyle={styles.interestImg}
        >
          <Text
            style={
              [
                styles.interestText,
                styles.upperCase,
                { textAlign: 'center' }
              ]
            }
          >
            Sản phẩm được yêu thích
          </Text>
        </ImageBackground>
      </View>
      <View>

      </View>
    </View>
  )
}

export default function Home () {
  const handleGoTop = () => {
    this.scroll.scrollTo({ y: 0, animated: true })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={phongvuLogo}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>
            Xin chào, Nam!
          </Text>
        </View>
        <TouchableOpacity>
          <Feather
            name='search'
            size={25}
            color="#1434C3"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name='shopping-cart'
            size={25}
            color="#1434C3"
            style={styles.cart}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.searchBar}>
        <Feather
          name='search'
          size={15}
          color="#1434C3"
        />
        <TextInput
          style={
            [
              styles.subtitle,
              styles.searchInput
            ]
          }
          placeholder="Bạn cần tìm mua gì?"
          underlineColor='transparent'
          underlineColorAndroid='transparent'
          autoCorrect={false}
        >
        </TextInput>
      </View> */}
      <ScrollView style={styles.body} ref={(c) => { this.scroll = c }}>
        <FlatList
          data={introUrl}
          renderItem={item => <IntroItem item={item.item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
        <Interest />
        {category.map((item) => <Category item={item} key={item.id}/>)}
        <TouchableOpacity style={styles.goTopButton} onPress={() => handleGoTop()}>
          <Text style={styles.goTopText}>Quay lại đầu trang</Text>
          <Feather
            name='chevron-up'
            size={30}
            color="#1434C3"
          />
        </TouchableOpacity>
        <View style={styles.footer}>
          <Image
            source={phongvuLogo}
            style={styles.logo}
          />
          <Text style={styles.footerText}>© 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ / GPĐKKD số 0304998358 do Sở KHĐT TP.HCM cấp</Text>
          <Text style={styles.footerText}>Sponsored by Teko.vn</Text>
        </View>
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
  // searchBar: {
  //   flex: 1 / 9,
  //   backgroundColor: '#F1FDFD',
  //   borderRadius: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingLeft: 20,
  //   marginLeft: 5,
  //   marginRight: 5
  // },
  searchInput: {
    backgroundColor: 'transparent'
  },
  body: {
    flex: 8 / 9
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    left: -15
  },
  title: {
    color: '#1434C3',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    width: '70%'
  },
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
  },
  font12: {
    fontSize: 12
  },
  seeMore: {
    marginTop: 50,
    fontSize: 20
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
    padding: 5
  },
  interestItem: {
    width: '49%',
    height: 200,
    marginTop: 30
  },
  interestBigItem: {
    width: '100%',
    height: 200,
    marginTop: 10,
    padding: 5
  },
  interestBgr: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  interestImg: {
    borderRadius: 15
  },
  interestText: {
    padding: 10,
    fontSize: 16,
    color: '#465EB1',
    fontWeight: 'bold'
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
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    resizeMode: 'cover'
  },
  itemName: {
    padding: 5
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  itemPrice: {
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 5
  },
  itemGifts: {
    width: 30,
    height: 20,
    marginLeft: 5,
    borderRadius: 2,
    borderColor: '#F1FDFD',
    borderWidth: 1
  },
  onlyCost: {
    textAlign: 'right'
  },
  saleText: {
    color: '#EF2741',
    fontWeight: 'bold'
  },
  footer: {
    backgroundColor: '#E1F9FB',
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  footerText: {
    color: '#1C3DC5',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5
  },
  goTopText: {
    color: '#707070'
  },
  goTopButton: {
    alignItems: 'center',
    marginTop: 20
  }
})
