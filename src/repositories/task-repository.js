import { database } from "../database.js";

class TaskRepository {
  findAll(filters) {
    return database.select("tasks", filters);
  }

  findById(id) {
    return database.select("tasks").find((task) => task.id === id);
  }

  create(data) {
    database.insert("tasks", data);
  }

  update(id, data) {
    database.update("tasks", id, data);
  }

  delete(id) {
    database.delete("tasks", id);
  }
}

export const taskRepository = new TaskRepository();
