// import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { View,  TextInput, StyleSheet, Alert } from "react-native";
import MyButton from "../components/Button";
import { Select } from "../components/form/Select";
import { storageService } from "../service/storage/storegeService";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useFocusEffect } from "@react-navigation/native";
import { assyncStorageService } from "../service/storage/assyncStorage";
import {useNavigation} from "@react-navigation/native";
import Calender from "../components/Calender";


export default function HomeScreen() {
  const navigate = useNavigation();

const [tesk, setTask] = useState({
    type: "",
    subject: "",
    description:"",
    id: uuidv4(),
    date: "",

 
  })
  
  useEffect(() => {
    
  }, []);
  
  const [selectedDate, setSelectedDate] = useState("");

 
    

  const salveTesk = async () => {
    if (!tesk.type) {
        Alert.alert("selecione um tipo de atividade")
    }
    if (!tesk.subject) {
      Alert.alert("selecione uma materia")
    if(!tesk.id){
      Alert.alert("fail")
    }
    if (!selectedDate) {
      Alert.alert("Selecione uma data");
      return;
    }
  }
    let tasks = await storageService.getItem("tasks")
    
    if (!tasks || !tasks.length || tasks.length < 0 ) {
        tasks = []
    
        let tesks = await storageService.getItem("tasks");

        if (tesks && tesks.length > 0) {
          tesks.forEach((task) => {
            const teskId = task.id;
            console.log("ID da tarefa:", teskId);
           
          });
        } else {
          console.log("Nenhuma tarefa encontrada");
        }
          }

    const newtasks = [
        ...tasks, tesk
    ]
    storageService.setItem("tasks",newtasks)
   Alert.alert("Tarefa salva")
   console.log("foi registrado")
   navigate.navigate("Inicio")
  }


  return (
    <View style={styles.continer}>
       <View style={styles.list}>
      
      <Select 
            label={"Atividade"}  
            options={[
              {
                  id: 1,
                  value: "Exercicio "
              },
              {
                  id: 2,
                  value: "Trabalho"
              },
              {
                  id: 3,
                  value: "Prova"
              },
              {
                  id: 4,
                  value: "Seminario"
              },
            
            ]}
            setSelected={(value) => {
              setTask({
                  ...tesk, type: value
              })
            }}
            selected={tesk.type || ""}
            />
   
      <Select 
            label={"Materia"}  
            options={[
              {
                  id: 1,
                  value: "Português"
              },
              {
                  id: 2,
                  value: "Matemática"
              },
              {
                  id: 3,
                  value: "Geografia"
              },
              {
                  id: 4,
                  value: "inglês"
              },
              {
                  id: 5,
                  value: "Historia"
              },
              {
                  id: 6,
                  value: "Biologia"
              },
              {
                  id: 7,
                  value: "Química"
              },
              {
                id: 8,
                value: "artes"
             }
              

            ]}
            setSelected={(value) => {
              setTask({
                  ...tesk, subject: value
              })
            }}
            selected={tesk.subject || ""}
            />
            </View>

            <TextInput placeholder="Descrição..." multiline selectionColor={"gray"}  style={styles.input} onChangeText={(text) => {
              setTask({
                  ...tesk, description: text
              })
            }}/>
           <Calender onDateChange={(onDateChange) => {
              setTask({
                  ...tesk, date: onDateChange
              })}} />
            <MyButton style={styles.buttom}
              onPress={
                salveTesk  
              }
              color={"#CBC3E3"}
              label={"Registrar"}
              width={250}
              height={40}
              TextColor={"black"}
              marginTop={10}
              marginLeft={"15%"}
              borderRadius={10}
              padding={10}
            />     
   </View>
  );

}
const styles = StyleSheet.create({
    input: {
      textAlign: "left",
      fontSize:15,
      width: "85%",
      height: "30%",
      marginTop: 0,
      marginBottom: 40,
      marginLeft:25,
      borderRadius: 10,
      paddingLeft:5,
      backgroundColor:"white",
      
  
    },
    continer:{
      flex :1,
      flexDirection :"column",


    },
    list:{
      flex :0.5,
      flexDirection :"row",
      width:"",
      height:"25%",
     


    },
  });
