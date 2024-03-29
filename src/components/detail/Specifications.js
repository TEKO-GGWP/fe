import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
// import * as SAMPLE_PRODUCT from '../../sample_detail_product.json'
import { DataTable } from 'react-native-paper'
/* eslint-disable react/prop-types */
export default function Specifications (props) {
  // eslint-disable-next-line camelcase
  const { tech_specifications } = props.data
  return (
    <View style={styles.container}>
      <Text style={styles.specsTitle}>Thông số kỹ thuật</Text>
      <DataTable>
        {Object.keys(tech_specifications).map((key, index) => (
          <DataTable.Row
            key={index}
            style={index % 2 ? styles.evenRow : styles.oddRow}
          >
            <DataTable.Cell style={styles.leftCell}>
              <Text style={styles.leftCellContent}>
                {key}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.rightCell} >
              <Text numberOfLines={2} style={styles.rightCellContent}>
                {tech_specifications[key]}
              </Text>
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
  specsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 10
  },
  oddRow: {
    flex: 1,
    flexWrap: 'wrap'
  },
  evenRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F6F6F6'
  },
  leftCell: {
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10
  },
  rightCell: {
    flex: 2,
    flexWrap: 'wrap'
  },
  leftCellContent: {
  }

})
