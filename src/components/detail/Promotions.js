import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
import Promotion from './Promotion'
/* eslint-disable react/prop-types */
export default function Promotions (props) {
  const { defaultPromotions, selectionPromotions } = props.data?.combination
  return (
    <View style={styles.container}>
      <View style={styles.promotions}>
        <Text>Chọn một trong những khuyến mãi sau</Text>
        {selectionPromotions?.map((item, index) => (
          <Promotion data={item} key={index} />
        ))}
      </View>
      <View style={styles.relatedPromotions}>
        <Text style={styles.relatedPromotionsTitle}> Khuyến mãi liên quan</Text>
        {defaultPromotions && defaultPromotions.map((item, index) =>
          <View key={index} style={styles.relatedPromotionsWrapper}>
            {item.benefit.items && item.benefit.items.map((e, i) =>
              <Text key={i}>
                - {e.name}
              </Text>
            )}
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
