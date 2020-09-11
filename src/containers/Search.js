import React, { useState, useEffect } from 'react'
import SearchBar from '../components/Search/SearchBar'
import History from '../components/History'
import Catalogue from '../components/Catalogue'
import CategoryItem from '../components/CategoryItem'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { category } from '../data/sample'

export default function Search () {
  const [suggestList, setSuggestList] = useState([])
  const [suggestPage, setSuggestPage] = useState(0)

  useEffect(() => {
    getSuggestList(0)
  }, [])

  const getSuggestList = (start) => {
    const arr = []
    for (let i = start; i < start + 2; i++) {
      console.log(i)
      arr.push(category[0].item[i])
    }
    setSuggestList(arr)
  }

  const handleNextSuggestPage = () => {
    const start = (suggestPage + 1) * 2
    getSuggestList(start)
    setSuggestPage(suggestPage + 1)
  }

  const handlePreviousSuggestPage = () => {
    const start = (suggestPage - 1) * 2
    getSuggestList(start)
    setSuggestPage(suggestPage - 1)
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
      <SearchBar />
      <View style={styles.body}>
        <History />
        <Catalogue />
        <View style={styles.suggest}>
          <Text style={styles.title}>Gợi ý dành riêng cho bạn</Text>
          <View style={styles.suggestBody}>
            <TouchableOpacity
              onPress={() => handlePreviousSuggestPage()}
              delayPressIn={1500}
            >
              <Feather
                name="chevron-left"
                size={40}
                style={ suggestPage < 1 ? styles.hide : '' }
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', width: '75%' }}>
              {suggestList.map((item, i) => item ? <CategoryItem key={i} item={item} showDiscounted={false} width='50%' /> : null)}
            </View>
            <TouchableOpacity
              onPress={() => handleNextSuggestPage()}
              delayPressIn={1500}
            >
              <Feather
                name="chevron-right"
                size={40}
                style={ suggestPage > 1 ? styles.hide : '' }
              />
            </TouchableOpacity>
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
  hide: {
    opacity: 0,
    height: 0
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
  history: {
    flex: 2 / 7
  },
  catalogue: {
    flex: 1 / 7
  },
  suggest: {
    flex: 4 / 7
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
