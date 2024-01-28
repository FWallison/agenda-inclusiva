import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList} from "react-native";
import MyButton from "../components/Button";

export default function HomeScreen () {

    const navigate = useNavigation()
    return (
        <View>

       
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
            <Text>{}</Text>
        </View>

            
    )
    
}
