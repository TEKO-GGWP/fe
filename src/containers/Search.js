import React, { useState } from 'react'
import NoLogoHeader from '../components/common/NoLogoHeader'
import SearchBar from '../components/search/SearchBar'
import History from '../components/search/History'
import Catalogue from '../components/search/Catalogue'
import Suggest from '../components/search/Suggest'
import SuggestTab from '../components/search/SuggestTab'
import SearchResult from '../components/search/SearchResult'
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native'

export default function Search (props) {
  const [search, setSearch] = useState('')

  const handleSearch = (text) => {
    setSearch(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <NoLogoHeader navigation={props.navigation}/>
      <SearchBar search={search} handleSearch={(text) => handleSearch(text)} />
      {search
        ? <View style={styles.body}>
          <SuggestTab handleSearch={handleSearch} />
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
  body: {
    flex: 9 / 11,
    marginLeft: 10,
    marginRight: 10
  }
})
