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
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { actFetchProductsByNameRequest } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'

const Search = (props) => {
  const [search, setSearch] = useState('')
  const [historyList, setHistoryList] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const handleStateSearch = (text) => {
    setSearch(text)
  }
  const handleSearch = async () => {
    setIsSearching(true)
    await props.onFetchProductsByName(search)
    setIsSearching(false)
    setHistoryList(prev => [...prev, [search]])
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NoLogoHeader navigation={props.navigation} />
        <SearchBar search={search} handleStateSearch={(text) => handleStateSearch(text)} handleSearch={handleSearch} />
        {search
          ? (
            isSearching ? <ActivityIndicator size="large" />
              : <View style={styles.body}>
                <SuggestTab handleSearch={handleStateSearch} />
                <SearchResult count={2} search={search} />
              </View>
          )

          : <View style={styles.body}>
            <History historyList={historyList} />
            <Catalogue />
            <Suggest />
          </View>
        }
      </ScrollView>
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
const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductsByName: (keyword) => { dispatch(actFetchProductsByNameRequest(keyword)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
