import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity
} from 'react-native'
// import {Picker} from '@react-native-community/picker';
import backgroundImage from '../../assets/background.png'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import GenderRadioButton from '../components/GenderRadioButton'
import * as VIETNAM_DATA from '../data/vietnam_provinces_cities.json'
export default function SignUpForm () {
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
  useEffect(() => {
    const tempCities = []
    Object.keys(VIETNAM_DATA).map((key) => {
      tempCities.push({ value: key, name: VIETNAM_DATA[key].name })
    })
    setCities(tempCities)
  }, [])

  const onCityValueChange = (city) => {
    setUserProfile({ ...userProfile, city })
    const tempDistricts = []
    Object.keys(VIETNAM_DATA[city].cities).map((key) => {
      tempDistricts.push({
        value: key,
        name: VIETNAM_DATA[city].cities[key]
      })
    })
    setDistricts(tempDistricts)
  }
  const changeGenderProfile = (isMale) => {
    setUserProfile({ ...userProfile, isMale })
  }
  const sendUserProfile = () => {}
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.iconWrapper}>
          <Image source={phongvuIcon} />
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Thông tin cơ bản</Text>
          <TextInput
            placeholder="Họ và tên"
            placeholderTextColor="#707070"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(name) => setUserProfile({ ...userProfile, name })}
          />
          <TextInput
            placeholder="Ngày sinh"
            autoCapitalize="none"
            placeholderTextColor="#707070"
            style={styles.textInput}
            onChangeText={(dob) => setUserProfile({ ...userProfile, dob })}
          />
          <GenderRadioButton
            isMale={userProfile.isMale}
            onChangeGender={changeGenderProfile}
          />
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#707070"
            style={styles.textInput}
            onChangeText={(email) => setUserProfile({ ...userProfile, email })}
          />
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={userProfile.city}
              style={styles.picker}
              prompt="City"
              onValueChange={(city) => onCityValueChange(city)}
            >
              <Picker.Item label="Tỉnh Thành phố" value="none" />
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
              onValueChange={(district) =>
                setUserProfile({ ...userProfile, district })
              }
            >
              <Picker.Item label="Quận/Huyện" value="none" />
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
          <TouchableOpacity style={styles.button} onPress={sendUserProfile}>
            <Text style={styles.text}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image style={styles.logoImage} source={phongvuLogo} />
          <Image style={styles.iconImage} source={phongvuIcon} />
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
  iconWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: -50
  },
  formWrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoWrapper: {
    flex: 0.5,
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    resizeMode: 'contain',
    height: '15%'
  },
  iconImage: {
    alignSelf: 'flex-start',
    marginBottom: -50
  },
  textInput: {
    color: '#707070',
    fontSize: 18,
    fontWeight: '500',
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 17,
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
    borderRadius: 17
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
    height: 35,
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
    fontSize: 18,
    color: '#707070',
    fontWeight: '500'
  },
  title: {
    marginVertical: 10,
    color: 'rgb(21, 54, 195)',
    fontWeight: 'bold',
    fontSize: 24
  }
})
