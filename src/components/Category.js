import React from 'react'
import { FlatList, View } from 'react-native'

import CategoryHeader from './CategoryHeader'
import CategoryItem from './CategoryItem'

const Category = ({ item }) => {
  return (
    <View>
      <CategoryHeader
        title={item.name}
        url={null}
      />
      <FlatList
        data={item.item}
        renderItem={item => <CategoryItem item={item.item}/>}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default Category
