import React, { useEffect } from 'react'
import IntroItem from '../components/IntroItem'
import Interest from '../components/Interest'
import Category from '../components/Category'
import Icon from '../components/common/Icon'
import Logo from '../components/common/Logo'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { introUrl } from '../data/sample'
import { connect } from 'react-redux'
import { actFetchHotDealRequest, actFetchItChoiceRequest, actFetchOfficerChoiceRequest, actFetchPhongVuChoiceRequest } from '../actions'

const Home = (props) => {
  const handleGoTop = () => {
    this.scroll.scrollTo({
      y: 0,
      animated: true
    })
  }
  const { category } = props
  useEffect(() => {
    props.onFetchItChoice()
    props.onFetchHotDeal()
    props.onFetchPhongVuChoice()
    props.onFetchOfficerChoice()
  }, [])
  const onNavigatingToCartScreen = () => {
    props.navigation.navigate('Cart')
  }
  const onNavigatingToDetailScreen = (data) => {
    props.navigation.navigate('Detail', { product: data })
  }

  const onNavigatingToSearchScreen = () => {
    props.navigation.navigate('Search')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.logo}>
            <Logo />
          </View>
          <Text style={styles.subtitle}>
            Xin chào, {props.userInformation.name ? props.userInformation.name : 'Anonymous'}!
          </Text>
        </View>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={onNavigatingToSearchScreen}>
            <Feather
              name='search'
              size={25}
              color="#1434C3"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onNavigatingToCartScreen}>
            <Feather
              name='shopping-cart'
              size={25}
              color="#1434C3"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.body}
        ref={(c) => { this.scroll = c }}>
        <FlatList
          data={introUrl}
          renderItem={item => <IntroItem item={item.item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Interest />
        {category.map((item) => <Category item={item} key={item.id} onPress={onNavigatingToDetailScreen} showDiscounted={true} />)}
        <TouchableOpacity style={styles.goTopButton} onPress={() => handleGoTop()}>
          <Text style={styles.goTopText}>Quay lại đầu trang</Text>
          <Feather
            name='chevron-up'
            size={30}
            color="#1434C3"
          />
        </TouchableOpacity>
        <View style={styles.footer}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <Text style={styles.footerText}>
            © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ / GPĐKKD số
            0304998358 do Sở KHĐT TP.HCM cấp
          </Text>
          <Text style={styles.footerText}>Sponsored by Teko.vn</Text>
        </View>
      </ScrollView>
      <View style={styles.upperImage}>
        <Icon />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1 / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    elevation: 2,
    zIndex: 2
  },
  logo: {
    marginTop: 15,
    marginBottom: 5
  },
  iconBox: {
    flexDirection: 'row'
  },
  headerIcon: {
    marginTop: 15,
    marginLeft: 20
  },
  body: {
    flex: 8 / 9,
    elevation: 2,
    zIndex: 2,
    backgroundColor: 'white'
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    left: -15,
    zIndex: 1,
    elevation: 1
  },
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
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

const mapStateToProps = state => {
  const { hotDeal, itChoice, phongVuChoice, officerChoice } = state
  return {
    userInformation: state.userInformation,
    category: [
      hotDeal,
      itChoice,
      phongVuChoice,
      officerChoice
    ]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => { dispatch() },
    onFetchProductById: (sku) => { dispatch() },
    onFetchHotDeal: () => { dispatch(actFetchHotDealRequest()) },
    onFetchPhongVuChoice: () => { dispatch(actFetchPhongVuChoiceRequest()) },
    onFetchOfficerChoice: () => { dispatch(actFetchOfficerChoiceRequest()) },
    onFetchItChoice: () => { dispatch(actFetchItChoiceRequest()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
