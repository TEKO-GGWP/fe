import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native'

import buildPcBackground from '../../assets/buildpc.png'
import itNews from '../../assets/tincongnghe.png'
import introBackground from '../../assets/intro-home.png'

const Interest = () => {
  return (
    <View>
      <Text style={styles.title}>
        Có thể bạn quan tâm
      </Text>
      <View style={styles.container}>
        <View style={styles.interestItem}>
          <ImageBackground
            source={buildPcBackground}
            style={styles.interestBgr}
            imageStyle={styles.interestImg}
          >
            {/* <Text style={styles.interestText}>Build PC</Text> */}
          </ImageBackground>
        </View>
        <View style={styles.interestItem}>
          <ImageBackground
            source={itNews}
            style={styles.interestBgr}
            imageStyle={styles.interestImg}
          >
            {/* <Text style={styles.interestText}>
              Tin Công Nghệ
            </Text> */}
          </ImageBackground>
        </View>
      </View>
      <View style={styles.interestBigItem}>
        <ImageBackground
          source={introBackground}
          style={styles.interestBgr}
          imageStyle={styles.interestImg}
        >
          {/* <Text style={styles.interestText}>
            Sản phẩm được yêu thích
          </Text> */}
        </ImageBackground>
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#1434C3',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    width: '60%',
    textTransform: 'uppercase',
    marginLeft: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  interestItem: {
    width: '49%',
    height: 200,
    marginTop: 30
  },
  interestBigItem: {
    width: '100%',
    height: 200,
    marginTop: 10,
    padding: 5
  },
  interestBgr: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  interestImg: {
    borderRadius: 15
  },
  interestText: {
    padding: 10,
    fontSize: 16,
    color: '#465EB1',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
})

export default Interest
