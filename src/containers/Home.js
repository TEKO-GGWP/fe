import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import IntroItem from '../components/IntroItem'
import Interest from '../components/Interest'
import Category from '../components/Category'

import { category, introUrl } from '../data/sample'

import phongvuIcon from '../../assets/pv-icon.svg'
import phongvuLogo from '../../assets/pv-logo.svg'
import { connect } from 'react-redux'

function Home (props) {
  const handleGoTop = () => {
    this.scroll.scrollTo({
      y: 0,
      animated: true
    })
  }
  const onNavigatingToDetailScreen = (data) => {
    props.navigation.navigate('Detail')
  }
  console.log(props.userInformation)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{
          zIndex: 2,
          elevation: 2
        }}>
          <Image
            source={phongvuLogo}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>
            Xin chào, {props.userInformation.name}!
          </Text>
        </View>
        <TouchableOpacity >
          <Feather
            name='search'
            size={25}
            color="#1434C3"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Feather
            name='shopping-cart'
            size={25}
            color="#1434C3"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body} ref={(c) => {
        this.scroll = c
      }}>
        <FlatList
          data={introUrl}
          renderItem={item => <IntroItem item={item.item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
        <Interest />
        {category.map((item) => <Category item={item} key={item.id} onPress={onNavigatingToDetailScreen} />)}
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
          <Text style={styles.footerText}>
            © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ / GPĐKKD số
            0304998358 do Sở KHĐT TP.HCM cấp
          </Text>
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
  header: {
    flex: 1 / 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    marginTop: 15,
    marginBottom: 5,
    transform: [
      { scale: 0.8 },
      { translateX: -30 }
    ]
  },
  headerIcon: {
    marginTop: 15
  },
  searchInput: {
    backgroundColor: 'transparent'
  },
  body: {
    flex: 8 / 9
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
  return {
    userInformation: state.userInformation
  }
}

export default connect(mapStateToProps)(Home)
