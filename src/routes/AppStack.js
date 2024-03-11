import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ConfigScreen from "../screens/ConfigScreen";
import TeskScreen from "../screens/TeskScreen";
import ListScreen from "../screens/ListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppStack () {
  return (
    <Stack.Navigator initialRouteName="inicio">
      <Stack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: "Inicio",
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5D3FD3", 
          },
        }}
      />
      <Stack.Screen
        name="settings"
        component={ConfigScreen}
      />
      <Stack.Screen
        name="tarefa"
        component={TeskScreen}
        options={{
          title: "Registre sua tarefa",
          headerTitleAlign: "left",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5D3FD3", 
          },
        }}

        
        
      />
      <Stack.Screen
        name="lista"
        component={ListScreen}
        options={{
          headerTitleAlign: "left",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#5D3FD3", 
          },
        }}

        
        
      />
    </Stack.Navigator>
  );
}