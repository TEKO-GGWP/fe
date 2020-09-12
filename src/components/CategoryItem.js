import React from 'react'
import CategoryGift from './CategoryGift'
import CategoryPrice from './CategoryPrice'
import {
  Image,
  StyleSheet,
  Text, View
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CategoryItem = (props) => {
  const { item, onPress, showDiscounted } = props
  return (
    <View style={styles.categoryItem}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.itemImageContainer}>
          <Image
            source={item.image}
            style={styles.itemImage}
          />
        </View>
        <Text
          numberOfLines={2}
          style={styles.itemName}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <CategoryPrice
          price={item.price}
          cls={styles.itemPrice}
        />
        <Feather
          name="truck"
          color="lightgreen"
        />
      </View>
      <View style={[styles.flexRow, { display: showDiscounted ? 'flex' : 'none' }]}>
        <View>
          <Text style={{ fontSize: 11 }}>
            Giảm ngay
          </Text>
          <CategoryPrice
            price={item.discountRate}
            cls={styles.saleText}
          />
        </View>
        <View>
          <Text style={styles.onlyCost}>
            Chỉ còn
          </Text>
          <CategoryPrice
            price={item.discountedPrice}
            cls={styles.saleText}
          />
        </View>
      </View>
      <View style={{ display: showDiscounted ? 'flex' : 'none' }}>
        {item.gifts.length > 0 && <CategoryGift gifts={item.gifts}/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryItem: {
    width: '50%'
  },
  itemImageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemImage: {
    flex: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    resizeMode: 'cover'
  },
  itemName: {
    padding: 5
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  itemPrice: {
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 5
  },
  onlyCost: {
    textAlign: 'right',
    fontSize: 11
  },
  saleText: {
    color: '#EF2741',
    fontWeight: 'bold',
    fontSize: 11
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
})
export default CategoryItem
