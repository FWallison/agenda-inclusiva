import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View, Text } from 'react-native';
import MyButton from '../Button';
import { format } from 'date-fns';

export default function Calender({ onDateChange }) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    const formattedDate = format(currentDate, 'dd/MM/yyyy');
    onDateChange(formattedDate);
    console.log(formattedDate);
    console.log(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const formattedDate = format(date, 'dd/MM/yyyy');

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="date"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          dateFormat="shortdate"
        />
      )}

      <MyButton
        onPress={showDatePicker}
        color="#CBC3E3"
        label="calendario"
        width={100}
        height={40}
        padding={10}
        borderRadius={10}
      />

      {formattedDate && <Text>Data selecionada: {formattedDate}</Text>}
    </View>
  );
}
