import AsyncStorage from "@react-native-async-storage/async-storage";


export const storage = AsyncStorage

export const assyncStorageService = {
  getItem: async (key) => {
    const value = await storage.getItem(key)
    return value ? JSON.parse(value) : null
  },
  setItem: async (key, value) => {
    try {
      await storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },
  removeItem: async (key) => {
    storage.removeItem(key);
  },

  
  removeTaskById: async (key, taskId) => {
    let tasks = await storageService.getItem(key);
    if (tasks) {
      tasks = tasks.filter((task) => task.id !== taskId);
      await storageService.setItem(key, tasks);
    }
  },
};
