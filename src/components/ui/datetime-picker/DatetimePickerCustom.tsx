import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {formatDate} from '../../../utils/utils';

interface MyProps {
  name: string;
  handleChange(
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ): void;
}
const DatetimePickerCustom = (props: MyProps) => {
  const {handleChange, name} = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    let formattedDate = formatDate(date);
    handleChange(name, formattedDate);

    hideDatePicker();
  };

  return (
    <View>
      <Button mode="contained" onPress={showDatePicker} style={styles.btn}>
        <Icon name="eye" size={20} /> Choose your date of birth
      </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: 15,
    marginTop: 15,
  },
});
export default DatetimePickerCustom;
