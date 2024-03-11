import storageService from "./storage/storegeService";

const salveTask = async (tasks) => {
  try {
    await storageService.setItem("tasks", tasks);
    console.log("Tarefa salva com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar a tarefa:", error);
  }
};

export const teskService = {
  salveTask,
};
