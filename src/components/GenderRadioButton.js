import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
// import {Picker} from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper'
export default function GenderRadioButton (props) {
  /* eslint-disable no-unused-vars */
  const { isMale, onChangeGender } = props
  /* eslint-enable no-unused-vars */
  return (
    <View style={styles.radioButtonsListWrapper}>
      <Text style={styles.description}>Giới tính</Text>
      <View style={styles.radioButtonWrapper}>
        <RadioButton
          value="Male"
          status={isMale ? 'checked' : 'unchecked'}
          color="rgb(21, 54, 195)"
          onPress={() => onChangeGender(true)}
        />
        <Text style={styles.description}>Nam</Text>
      </View>
      <View style={styles.radioButtonWrapper}>
        <RadioButton
          value="Female"
          color="rgb(21, 54, 195)"
          status={!isMale ? 'checked' : 'unchecked'}
          onPress={() => onChangeGender(false)}
        />
        <Text style={styles.description}>Nữ</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
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
  description: {
    fontSize: 18,
    color: '#707070',
    fontWeight: '500'
  }
})
