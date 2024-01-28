import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";



export function Select({
  label,
  options,
  selected,
  setSelected,
}) {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selected}
          onValueChange={(itemValue) => setSelected(itemValue)}
        >
          <Picker.Item label={label} value="" />
          {options.map((option) => (
            <Picker.Item
              key={option.id + ""}
              label={option.value}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const getStyles = () => {
  return StyleSheet.create({
    container: {
      width:139,
      height:150,
      marginLeft: 5,
      marginBottom: 1,
      marginTop: 50,
      marginRight:95,
      

    },
    
    pickerContainer: {
      borderRadius: 9,
      width: "100",
      height: 45,
      backgroundColor:"#5D3FD3",
      
      
      
    },
    label: {
      fontSize: 16,
      fontWeight: "500",
      backgroundColor : "#CBC3E3",
      width: 100,
      height: 30,
      marginTop:10,
      padding:5,
     

    },
    picker: {
      width: "100%",
      height: "100%",
      color: "#E5E4E2",
      textAlign:"center",
    },
  });
};
