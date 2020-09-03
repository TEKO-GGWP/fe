import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import * as SAMPLE_PRODUCT from '../../data/sample_detail_product.json'
export default function CarouselSlide (props) {
  /* eslint-disable react/prop-types */
  const { data } = props
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Image
          style={{ flex: 1, width: null, height: null }}
          source={item.path}
          resizeMode="cover"
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout={'default'}
      />
      <Text style={styles.title}>{SAMPLE_PRODUCT.title}</Text>
      <Text style={styles.brandWrapper}>
        By <Text style={styles.brand}>{SAMPLE_PRODUCT.brand}</Text>
        <Text> | SKU: {SAMPLE_PRODUCT.SKU}</Text>
      </Text>
      <Text style={styles.remain}>
        Chỉ còn {SAMPLE_PRODUCT.remain} sản phẩm
      </Text>
      <Text style={styles.price}>{SAMPLE_PRODUCT.price}</Text>
    </View>
  )
}

/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    color: '#C31414',
    fontWeight: '500',
    fontSize: 16
  },
  remain: {
    color: 'red'
  },
  brandWrapper: {
    color: '#707070'
  },
  brand: {
    color: '#1434C3',
    fontWeight: '500'
  }
})
