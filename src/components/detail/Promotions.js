import React from './node_modules/react'
import { StyleSheet, View, Text } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
import Promotion from './Promotion'
/* eslint-disable react/prop-types */
export default function Promotions (props) {
  const { promotions } = props.data
  return (
    <View style={styles.container}>
      <View style={styles.promotions}>
        <Text>Chọn một trong những khuyến mãi sau</Text>
        {promotions.map((item, index) => (
          <Promotion data={item} key={index} />
        ))}
      </View>
      <View style={styles.relatedPromotions}>
        <Text style={styles.relatedPromotionsTitle}> Khuyến mãi liên quan</Text>
        {props.data.related_promotions.map((item, index) =>
          <View key={index} style={styles.relatedPromotionsWrapper}>
            <Text>
              - {item.content}
            </Text>
          </View>
        )
        }
      </View>
    </View >
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  promotions: {},
  relatedPromotions: {
    borderColor: '#F1FDFD',
    borderWidth: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10
  },
  relatedPromotionsTitle: {
    fontWeight: '700'
  }
})
