import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, ScrollView } from 'react-native'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { Feather } from '@expo/vector-icons'

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={phongvuLogo} />
          <Text style={styles.subtitle}>Xin chào, Nam!</Text>
        </View>
        <Feather name='shopping-cart' size={25} color="#1434C3" style={styles.cart} />
      </View>
      <View style={styles.searchBar}>
        <Feather name='search' size={15} color="#1434C3" />
        <Text style={styles.subtitle}>Bạn cần tìm mua gì?</Text>
      </View>
      <ScrollView style={styles.body}>
        {/* <FlatList
          data={introUrl}
          renderItem={introItem}
          keyExtractor={(item) => item.id}
        /> */}
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
  searchBar: {
    flex: 1 / 9,
    backgroundColor: '#F1FDFD',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  body: {
    flex: 7 / 9
  },
  upperImage: {
    position: 'absolute',
    top: -15,
    left: -15,
  },
  title: {
    color: '#1434C3',
    fontWeight: '500'
  },
  subtitle: {
    color: '#1434C3',
    fontWeight: '200',
    marginTop: 5
  },
  introItem: {
    width: 280,
    height: 130,
    borderRadius: 20
  }
})
