import React from 'react'
import { TextInput } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function SearchBar (props) {
  const { search, handleSearch } = props

  const handleRemoveSearchAll = () => {
    handleSearch('')
  }

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={
          [
            styles.subtitle,
            styles.searchInput
          ]
        }
        placeholder="Bạn cần tìm mua gì?"
        underlineColor='white'
        underlineColorAndroid='white'
        autoCorrect={false}
        spellCheck={false}
        onChangeText={handleSearch}
        value={search}
      />
      {search
        ? <Feather
          name='x'
          size={20}
          color="#1434C3"
          style={styles.searchIcon}
          onPress={() => handleRemoveSearchAll()}
        />
        : <Feather
          name='search'
          size={20}
          color="#1434C3"
          style={styles.searchIcon}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
  },
  searchBar: {
    flex: 1 / 11,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    marginLeft: 10,
    marginRight: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: 40
  },
  searchInput: {
    backgroundColor: 'transparent',
    width: '80%'
  },
  searchIcon: {
    marginRight: 20
  }
})
