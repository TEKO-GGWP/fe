
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
/* eslint-disable react/prop-types */
const renderSameBrandItem = (props) => {
  const { item } = props
  return (
    <TouchableOpacity style={styles.sameBrandItemWrapper}>
      <Image source={require('../../../assets/Rectangle47.png')} />
      <View style={{
        flex: 1
      }}>
        <Text style={styles.sameBrandItemName}>{item.name}</Text>
        <Text style={styles.sameBrandItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default function SameBrandList (props) {
  const { data, index } = props
  return (
    <View style={styles.container} key={index}>
      <View style={styles.titleWrapper}>
        <Text style={styles.brandName}>Cùng thương hiệu ASUS</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllButton}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderSameBrandItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sameBrandItemWrapper: {
    flex: 1,
    marginHorizontal: 7
  },
  sameBrandItemName: {
    flex: 1,
    flexShrink: 1,
    fontSize: 11
  },
  sameBrandItemPrice: {
    fontSize: 11,
    fontWeight: 'bold'
  }
})
