import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoryHeader = (props) => {
  const { title } = props

  return (
    <View style={styles.flexRow}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity>
        <Text style={styles.seeMore}>
          {title !== 'Kết quả tìm kiếm' ? 'Xem thêm' : ''}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#1434C3',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    width: '65%',
    textTransform: 'uppercase'
  },
  seeMore: {
    marginTop: 30,
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#1434C3',
    fontWeight: '200'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
})

export default CategoryHeader
