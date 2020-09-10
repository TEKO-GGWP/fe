import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import SearchBar from '../components/SearchBar'
import History from '../components/History'
import Catalogue from '../components/Catalogue'

export default function Search () {
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
      <SearchBar />
      <View style={styles.body}>
        <History />
        <Catalogue />
        <View style={styles.suggest}>
          <Text style={styles.title}>Gợi ý dành riêng cho bạn</Text>
          <View style={styles.suggestBody}>
            <Feather
              name="chevron-left"
              size={40}
            />
            <Feather
              name="chevron-right"
              size={40}
            />
          </View>
        </View>
      </View>
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
    flex: 1 / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  body: {
    flex: 8 / 10,
    marginLeft: 10,
    marginRight: 10
  },
  history: {
    flex: 2 / 7
  },
  catalogue: {
    flex: 2 / 7
  },
  suggest: {
    flex: 3 / 7
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 5
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#FAFAFA',
    borderRadius: 3
  },
  suggestBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  catalogueItem: {
    width: 100,
    height: 100,
    padding: 5,
    marginTop: 10
  },
  catalogueBgr: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  catalogueImg: {
    borderRadius: 15
  },
  catalogueText: {
    textAlign: 'center',
    fontSize: 12
  }
})
