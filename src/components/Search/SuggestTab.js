import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet, Text, FlatList
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const data = [
  {
    id: 1,
    name: 'Macbook'
  },
  {
    id: 2,
    name: 'Laptop'
  },
  {
    id: 3,
    name: 'Dell'
  },
  {
    id: 4,
    name: 'SSD'
  },
  {
    id: 5,
    name: 'Chuột'
  }
]

export default function SuggestTab (props) {
  const { handleSearch } = props

  const Item = (props) => {
    const { name } = props

    return (
      <TouchableOpacity
        style={styles.suggestTab}
        onPress={() => handleSearch(name)}
      >
        <Text style={styles.subtitle}>{name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.suggestTabContainer}>
      <FlatList
        data={data}
        renderItem={item => <Item name={item.item.name}/>}
        keyExtractor={item => `${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.suggestTab}>
        <Feather
          name='plus'
          size={16}
          color='#1434C3'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
  },
  suggestTabContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  suggestTab: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    borderRadius: 20
  }
})
