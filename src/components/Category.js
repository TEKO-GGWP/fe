import React from 'react'
import { FlatList, View } from 'react-native'

import CategoryHeader from './CategoryHeader'
import CategoryItem from './CategoryItem'

const Category = (props) => {
  const { item, showDiscounted, onPress } = props
  return (
    <View>
      <CategoryHeader
        title={item.name}
        url={null}
      />
      <FlatList
        data={item.item}
        renderItem={item => <CategoryItem item={item.item} showDiscounted={showDiscounted} onPress={onPress} width='50%' />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default Category
