import { useIsFocused, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import MyButton from "../components/Button";
import MyList from "../components/List/MyList";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = () => {
  const navigate = useNavigation();
  const isFocused = useIsFocused();

  useFocusEffect(
    React.useCallback(() => {
      return () => null;
    }, [])
  );

  return (
    <View style={styles.container}>
      <MyList />

      <MyButton
        onPress={() => {
          navigate.navigate("tarefa");
        }}
        color={styles.button.backgroundColor}
        label={"Registre sua tarefa"}
        width={150}
        height={30}
        TextColor={styles.button.color}
        marginTop={2}
        marginLeft={2}
        padding={5}
        borderRadius={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "green",
    color: "black",
  },
});

export default HomeScreen;
