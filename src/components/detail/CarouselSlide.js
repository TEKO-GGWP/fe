import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import * as SAMPLE_PRODUCTS from '../../data/sample_detail_products.json'
export default function CarouselSlide (props) {
  /* eslint-disable react/prop-types */
  const { data } = props
  const renderItem = ({ item }) => {
    return (
      <View
        style={styles.renderItemWrapper}
      >
        <Image
          style={styles.renderItemImg}
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
        style={styles.carousel}
      />
      <Text style={styles.title}>{SAMPLE_PRODUCTS.title}</Text>
      <Text style={styles.brandWrapper}>
        By <Text style={styles.brand}>{SAMPLE_PRODUCTS.brand}</Text>
        <Text> | SKU: {SAMPLE_PRODUCTS.SKU}</Text>
      </Text>
      <Text style={styles.remain}>
        Chỉ còn {SAMPLE_PRODUCTS.remain} sản phẩm
      </Text>
      <Text style={styles.price}>{SAMPLE_PRODUCTS.price}</Text>
    </View>
  )
}

/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,
    alignItems: 'center',
    marginVertical: 50
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10
  },
  price: {
    color: '#C31414',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'flex-start'
  },
  remain: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: 10
  },
  brandWrapper: {
    color: '#707070',
    alignSelf: 'flex-start'
  },
  brand: {
    color: '#1434C3',
    fontWeight: '500'
  },
  renderItemWrapper: { flex: 1 },
  renderItemImg: { flex: 1, width: null, height: null },
  carousel: {
  }
})
