import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList} from "react-native";
import MyButton from "../components/Button";
import { storageService } from "../service/storage/storegeService";

export default function HomeScreen () {

    const navigate = useNavigation()

    const [tasks, setTasks] = useState([])

  useEffect( () => {
    getItens()
    
  }, [])

    const getItens = async () => {
        const myTasks = await storageService.getItem("tasks")
        setTasks(myTasks)
    }   
  
    return (
        <View>

            {
                tasks.map((task, index) => {
                    return (
                        <View key={index}>
                    <Text>{task.description}</Text>
                    </View>
                    )
                })
            }

       
            <MyButton 
            onPress={() => {
                navigate.navigate("tarefa")
            }}
            color={"green"}
            label={"Registre sua tarefa"}
            width={150}
            height={30}
            TextColor={"black"}
            marginTop={20}
            marginLeft={2}
            padding={5}
            borderRadius={10}
            />
           
        </View>

            
    )
    
}
