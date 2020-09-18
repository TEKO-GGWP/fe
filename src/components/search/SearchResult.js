import React from 'react'
import {
  View,
  StyleSheet,
  Text, Image
} from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../CategoryItem'

const SearchResult = (props) => {
  const { count, search, result } = props
  return (
    <View>
      <View style={styles.totalResultContainer}>
        <Text>Có tổng cộng {result.length} kết quả tìm kiếm cho </Text>
        <Text style={styles.totalSearchText}>{search}</Text>
      </View>
      <View style={styles.categoryContainer}>
        {count !== 0
          ? <FlatList
            data={result}
            renderItem={
              item => <CategoryItem
                item={item.item}
                showDiscounted={true}
                // onPress={onPress}
                width="48%"
              />
            }
            keyExtractor={(_item, index) => String(index)}
            numColumns={2}
            columnWrapperStyle={styles.categoryItemContainer}
          />
          : <View>
            <Text style={styles.title}>Kết quả tìm kiếm</Text>
            <View style={styles.totalResultContainer}>
              <Text>Ý bạn là</Text>
              <Text style={styles.suggestText}> Laptop </Text>
              <Text>?</Text>
            </View>
            <Image source={require('../../../assets/no-result.png')} style={styles.image} />
            <Text style={styles.greyText}>Xin lỗi, không có sản phẩm nào phù hợp với từ khóa của bạn</Text>
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  totalResultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  totalSearchText: {
    color: '#FB1212'
  },
  categoryContainer: {
    marginBottom: 10
  },
  suggestText: {
    color: '#FC4141',
    fontStyle: 'italic'
  },
  title: {
    color: '#1434C3',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    width: '65%',
    textTransform: 'uppercase'
  },
  greyText: {
    color: 'grey',
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250,
    opacity: 0.2,
    alignSelf: 'center',
    marginTop: 20
  }
})
const mapStateToProps = state => {
  return {
    result: state.searchResult
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchProductsByName: (keyword) => { dispatch(actFetchProductsByNameRequest(keyword)) }
//   }
// }

export default connect(mapStateToProps)(SearchResult)
