import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput
} from 'react-native'
import { Feather } from '@expo/vector-icons'

// const historyItem = (val) => {
//   return (
//     <View>
//       <Text>{val}</Text>
//     </View>
//   )
// }

// const historyList = () => {
//   return (
//   )
// }

export default function Search () {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.searchBar}>
          <Feather
            name='search'
            size={15}
            color="#1434C3"
          />
          <TextInput
            style={
              [
                styles.subtitle,
                styles.searchInput
              ]
            }
            placeholder="Bạn cần tìm mua gì?"
            underlineColor='transparent'
            underlineColorAndroid='transparent'
            autoCorrect={false}
          >
          </TextInput>
        </View>
        <Text>Lịch sử tìm kiếm</Text>
        <TouchableOpacity>
          <Text>Xóa hết</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Catalogue</Text>
        <FlatList />
      </View>
      <View>
        <Text>Gợi ý dành riêng cho bạn</Text>
        <Feather
          name="chevron-left"
          size={40}
        />
        <Feather
          name="chevron-right"
          size={40}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1 / 9,
    backgroundColor: '#F1FDFD',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 5,
    marginRight: 5
  }
})
