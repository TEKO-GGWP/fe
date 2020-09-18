import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

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
        renderItem={
          item => <CategoryItem
            item={item.item}
            showDiscounted={showDiscounted}
            onPress={onPress}
            width="48%"
          />
        }
        keyExtractor={(_item, index) => String(index)}
        numColumns={2}
        columnWrapperStyle={styles.categoryItemContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryItemContainer: {
    justifyContent: 'space-around'
  }
})

export default Category
