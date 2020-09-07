import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'

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
      </View>
    </SafeAreaView>
  )
}
