import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
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
          source={{ uri: item?.url }}
          resizeMode="cover"
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Carousel
        data={data?.images}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout={'default'}
        style={styles.carousel}
      />
      <Text style={styles.title}>{data?.name}</Text>
      <Text style={styles.brandWrapper}>
        By <Text style={styles.brand}>{data?.tech_specifications?.['Thương hiệu']}</Text>
        <Text> | SKU: {data?.sku}</Text>
      </Text>
      <Text style={styles.remain}>
        Chỉ còn {data?.totalAvailable} sản phẩm
      </Text>
      <Text style={styles.price}>{data?.price?.supplierSalePrice}</Text>
    </View>
  )
}

/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    alignItems: 'center'
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
  renderItemWrapper: {
    flex: 1
  },
  renderItemImg: {
    flex: 1,
    width: null,
    height: null
  },
  carousel: {
  }
})
