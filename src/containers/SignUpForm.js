import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  Picker
} from 'react-native'
// import {Picker} from '@react-native-community/picker';
import backgroundImage from '../../assets/background.png'
import phongvuIcon from '../../assets/pv-icon.png'
import phongvuLogo from '../../assets/pv-logo.png'
import { RadioButton } from 'react-native-paper'
import * as VIETNAM_DATA from '../data/vietnam_provinces_cities.json'
export default function SignUpForm () {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    isMale: true,
    dob: '01-01-2020',
    city: 'none',
    district: ''
  })
  const [cities, setCities] = useState([])
  useEffect(() => {
    const tempCities = []
    Object.keys(VIETNAM_DATA).map(key => {
      tempCities.push({ value: key, name: VIETNAM_DATA[key].name })
    })
    setCities(tempCities)
  }, [])
  console.log(cities)
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      >
        <View style={styles.iconWrapper}>
          <Image source={phongvuIcon} />
        </View>
        <View style={styles.logoWrapper}>
          <Image source={phongvuLogo} />
        </View>
        <View style={styles.formWrapper}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="grey"
            autoCapitalize="none"
            style={styles.phoneInput}
            onChangeText={name =>
              setUserProfile({ ...userProfile, name })
            }
          />
          <View style={styles.radioButtonWrapper}>
            <Text>Gender</Text>
            <RadioButton
              value="Male"
              status={
                userProfile.isMale ? 'checked' : 'unchecked'
              }
              onPress={() =>
                setUserProfile({ ...userProfile, isMale: true })
              }
            />
            <Text>Male</Text>
            <RadioButton
              value="Female"
              status={
                !userProfile.isMale ? 'checked' : 'unchecked'
              }
              onPress={() =>
                setUserProfile({
                  ...userProfile,
                  isMale: false
                })
              }
            />
            <Text>Female</Text>
          </View>
          <TextInput
            placeholder="Date of Birth"
            autoCapitalize="none"
            placeholderTextColor="grey"
            style={styles.phoneInput}
            onChangeText={email =>
              setUserProfile({ ...userProfile, email })
            }
          />
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="grey"
            style={styles.phoneInput}
            onChangeText={email =>
              setUserProfile({ ...userProfile, email })
            }
          />
          <Picker
            selectedValue={userProfile.city}
            style={styles.pickerWrapper }
            prompt="City"
            onValueChange={(city, i) =>
              setUserProfile({ ...userProfile, city })
            }
          >
            <Picker.Item label="City" value="none" />
            {cities.slice(0, 62).map((city, index) => (
              <Picker.Item
                key={index}
                label={city.name}
                value={city.value}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.footer}>
          <Image source={phongvuIcon} />
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
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  phoneInput: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
    width: 250,
    height: 35,
    borderRadius: 17,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  pickerWrapper: {
    height: 50,
    width: 250
  },
  radioButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  footer: {
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: -50
  }
})
