
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'
import CategoryItem from '../CategoryItem'

export default function SuggestDetail (props) {
  const { data, index, name } = props
  return (
    <View style={styles.container} key={index}>
      <View style={styles.titleWrapper}>
        <Text style={styles.brandName}>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllButton}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sameBrandItemWrapper}>
        <FlatList
          data={data}
          renderItem={item => <CategoryItem item={item.item} width={200} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  sameBrandItemWrapper: {
    flex: 1,
    marginBottom: 50
  },
  sameBrandItemName: {
    flex: 1,
    flexShrink: 1,
    fontSize: 11
  },
  sameBrandItemPrice: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  brandName: {
    fontWeight: 'bold',
    fontSize: 18,
    width: '65%'
  },
  seeAllButton: {
    color: 'grey'
  }
})
