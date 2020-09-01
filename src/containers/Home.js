import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'

const introUrl = [
  {
    id: '1',
    url: require('../../assets/intro-home.png')
  },
  {
    id: '2',
    url: require('../../assets/intro-home.png')
  },
  {
    id: '3',
    url: require('../../assets/intro-home.png')
  }
]

const IntroItem = ({ item }) => {
  return (
    <Image source={item.url} style={styles.introItem}/>
  )
}

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={phongvuLogo} style={styles.logo}/>
          <Text style={styles.subtitle}>Xin chào, Nam!</Text>
        </View>
        <Feather name='shopping-cart' size={25} color="#1434C3" style={styles.cart} />
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
  }
})
