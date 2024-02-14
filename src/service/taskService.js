import  storageService  from "./storage/storageService";



const salveTask = async (tasks) => {
  try {
    // Utilize await para aguardar a conclusão da operação assíncrona
    await storageService.setItem("tasks", tasks);
    console.log("Tarefa salva com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar a tarefa:", error);
  }
};

export const teskService = {
  salveTask
};
