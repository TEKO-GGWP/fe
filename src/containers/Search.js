import React, { useState } from 'react'
import SearchBar from '../components/search/SearchBar'
import History from '../components/search/History'
import Catalogue from '../components/search/Catalogue'
import Suggest from '../components/search/Suggest'
import SuggestTab from '../components/search/SuggestTab'
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import SearchResult from '../components/search/SearchResult'

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
          <SearchResult count={0} search={search} />
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
  }
})
