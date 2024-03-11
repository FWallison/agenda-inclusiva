import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { storageService } from "../../service/storage/storegeService";
import { useFocusEffect } from "@react-navigation/native";
import MyButton from "../Button";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const newsTask = await storageService.getItem("tasks");
    setTasks(newsTask);
  };

  const removeTask = async (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    await storageService.setItem("tasks", updatedTasks);
    setTasks(updatedTasks);
  };

  useFocusEffect(
    React.useCallback(() => {
      getTasks();
      return () => null;
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => removeTask(item.id)}
          >
            <Text style={styles.title}>{item.type}</Text>
            <View style={styles.info}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.data}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.90,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10,
  },
  item: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#3498db",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  subject: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  description: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
  data: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
});
