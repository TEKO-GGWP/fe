import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
import { DataTable } from 'react-native-paper'
/* eslint-disable react/prop-types */
export default function Specifications (props) {
  const { specifications } = props.data
  return (
    <View style={styles.container}>
      <Text>Thông số kỹ thuật</Text>
      <DataTable>
        {Object.keys(specifications).map((key, index) => (
          <DataTable.Row
            key={index}
            style={index % 2 ? styles.evenRow : styles.oddRow}
          >
            <DataTable.Cell style={styles.cell}>
              {key}
            </DataTable.Cell>
            <DataTable.Cell style={styles.cell} >
              {specifications[key]}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  )
}
/* eslint-enable react/prop-types */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  evenRow: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6'
  },
  cell: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  }
})
