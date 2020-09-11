import React, { useEffect, useState } from 'react'
import backgroundImage from '../../assets/background.png'
import Icon from '../components/Common/Icon'
import Logo from '../components/Common/Logo'
import AsyncStorage from '@react-native-community/async-storage'
import {
  ImageBackground,
  Picker,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
// import {Picker} from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper'
import * as VIETNAM_DATA from '../data/vietnam_provinces_cities.json'

import { connect } from 'react-redux'
import { actAddUserInformation } from '../actions'

function SignUpForm (props) {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    isMale: true,
    dob: '01-01-2020',
    city: 'none',
    district: 'none'
  })
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@isAuthorized', value)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const tempCities = []
    Object.keys(VIETNAM_DATA).map(key => {
      tempCities.push({
        value: key,
        name: VIETNAM_DATA[key].name
      })
    })
    setCities(tempCities)
  }, [])

  const onCityValueChange = city => {
    setUserProfile({
      ...userProfile,
      city
    })
    const tempDistricts = []
    Object.keys(VIETNAM_DATA[city].cities).map(key => {
      tempDistricts.push({
        value: key,
        name: VIETNAM_DATA[city].cities[key]
      })
    })
    setDistricts(tempDistricts)
  }
  /* eslint-disable no-unused-vars */
  const changeGenderProfile = (isMale) => {
    setUserProfile({ ...userProfile, isMale })
  }
  const sendUserProfile = () => {
    props.onAddUserInformation(userProfile)
    storeData(true)
    props.navigation.navigate('Home')
  }
  /* eslint-enable no-unused-vars */
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {/* <View style={styles.iconWrapper}>
          <Icon />
        </View> */}
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Thông tin cơ bản</Text>
          <TextInput
            placeholder="Họ và tên"
            placeholderTextColor="#707070"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={name =>
              setUserProfile({
                ...userProfile,
                name
              })
            }
          />
          <TextInput
            placeholder="Ngày sinh"
            autoCapitalize="none"
            placeholderTextColor="#707070"
            style={styles.textInput}
            onChangeText={dob =>
              setUserProfile({
                ...userProfile,
                dob
              })
            }
          />
          <View style={styles.radioButtonsListWrapper}>
            <Text style={styles.description}>Giới tính</Text>
            <View style={styles.radioButtonWrapper}>
              <RadioButton
                value="Male"
                status={
                  userProfile.isMale ? 'checked' : 'unchecked'
                }
                color="rgb(21, 54, 195)"
                onPress={() =>
                  setUserProfile({
                    ...userProfile,
                    isMale: true
                  })
                }
              />
              <Text style={styles.description}>Nam</Text>
            </View>
            <View style={styles.radioButtonWrapper}>
              <RadioButton
                value="Female"
                color="rgb(21, 54, 195)"
                status={
                  !userProfile.isMale
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                  setUserProfile({
                    ...userProfile,
                    isMale: false
                  })
                }
              />
              <Text style={styles.description}>Nữ</Text>
            </View>
          </View>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#707070"
            style={styles.textInput}
            onChangeText={email =>
              setUserProfile({
                ...userProfile,
                email
              })
            }
          />
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={userProfile.city}
              style={styles.picker}
              prompt="City"
              onValueChange={city => onCityValueChange(city)}
            >
              <Picker.Item label="Tỉnh Thành phố" value="none"/>
              {cities !== 'undefined' &&
              cities
                .slice(0, cities.length - 1)
                .map((city, index) => (
                  <Picker.Item
                    key={index}
                    label={city.name}
                    value={city.value}
                  />
                ))}
            </Picker>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={userProfile.district}
              style={styles.picker}
              prompt="District"
              onValueChange={district =>
                setUserProfile({
                  ...userProfile,
                  district
                })
              }
            >
              <Picker.Item label="Quận/ Huyện" value="none"/>
              {districts !== 'undefined' &&
              districts
                .slice(0, districts.length - 1)
                .map((district, index) => (
                  <Picker.Item
                    key={index}
                    label={district.name}
                    value={district.value}
                  />
                ))}
            </Picker>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.text}
              onPress={() => console.log(userProfile)}
            >
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <View style={styles.logoImage}>
            <Logo />
          </View>
        </View>
        <View style={styles.lowerImage}>
          <Icon />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  formWrapper: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    elevation: 2,
    zIndex: 2
  },
  logoWrapper: {
    flex: 0.5,
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    // flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    resizeMode: 'contain',
    height: '15%',
    elevation: 2,
    zIndex: 2
  },
  iconImage: {
    alignSelf: 'flex-start',
    marginBottom: -50
  },
  textInput: {
    color: '#707070',
    fontSize: 15,
    fontWeight: '500',
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  picker: {
    color: '#707070'
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    marginVertical: 5,
    height: 50,
    width: '80%',
    borderRadius: 10
  },
  radioButtonsListWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5
  },
  radioButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  countryPickStyle: {
    borderRightWidth: 2,
    borderRightColor: '#000'
  },
  button: {
    width: 200,
    height: 55,
    borderRadius: 17,
    marginTop: 20,
    backgroundColor: 'rgb(21, 54, 195)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
  description: {
    fontSize: 15,
    color: '#707070',
    fontWeight: '500'
  },
  title: {
    marginVertical: 10,
    color: 'rgb(21, 54, 195)',
    fontWeight: 'bold',
    fontSize: 24
  },
  lowerImage: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    elevation: 1,
    zIndex: 1
  }
})

const mapStateToProps = state => {
  return {
    userInformation: state.userInformation
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddUserInformation: (userInformation) => {
      dispatch(actAddUserInformation(userInformation))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
