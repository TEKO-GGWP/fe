import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground
} from 'react-native'

import { DATA } from '../data/search_catalogue'

const CatalogueItem = (item) => {
  const { name, img } = item.item

  return (
    <View style={styles.catalogueItem}>
      <ImageBackground
        source={img}
        style={styles.catalogueBgr}
        imageStyle={styles.catalogueImg}
      >
        <Text style={[styles.subtitle, styles.catalogueText]}>{name}</Text>
      </ImageBackground>
    </View>
  )
}

export default function Catalogue () {
  return (
    <View style={styles.catalogue}>
      <Text style={styles.title}>Catalogue</Text>
      <FlatList
        data={DATA}
        renderItem={item => <CatalogueItem item={item.item} />}
        keyExtractor={item => `${item.id}`}
        horizontal={true}
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
  catalogue: {
    flex: 2 / 7
  },
  catalogueItem: {
    width: 100,
    height: 100,
    padding: 5,
    marginTop: 10
  },
  catalogueBgr: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  catalogueImg: {
    borderRadius: 15
  },
  catalogueText: {
    textAlign: 'center',
    fontSize: 12
  }
})
