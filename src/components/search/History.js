import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { history } from '../../data/search_catalogue'
const HistoryItem = (props) => {
  const { item, index } = props
  const removeHistory = (history) => {
    history.splice(index, 1)
  }

  return (
    <View style={styles.historyItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => removeHistory(history)}>
        <Feather
          name="x"
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}

export default function History (props) {
  const { historyList } = props
  const removeAllHistory = () => {
    history.length = 0
  }

  return (
    <View style={styles.history}>
      <View style={styles.historyHeader}>
        <Text style={styles.title}>Lịch sử tìm kiếm</Text>
        <TouchableOpacity onPress={() => removeAllHistory()}>
          <Text
            style={styles.subtitle}
          >
            Xóa hết
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={historyList}
        renderItem={({ item, index }) => <HistoryItem item={item} index={index} />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#1434C3',
    fontSize: 16,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#1434C3',
    fontWeight: '200'
  },
  history: {
    flex: 2 / 7
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 5
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#FAFAFA',
    borderRadius: 3
  }
})
