import React, { useState } from 'react'
import { Button, View } from 'react-native'
import DatePicker from 'react-native-date-picker'



export default () => {

  
  
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View>
      <Button title="escolha" onPress={() => setOpen(true)} />
      <DatePicker
        mode='date'
        modal = 'false'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
  
}

