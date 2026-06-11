import { randomUUID } from "node:crypto";

import { Database } from "../database.js";

const database = new Database();

export class TaskModel {
  findAll(searchTerm) {
    const tasks = database.select(
      "tasks",
      searchTerm ? { title: searchTerm, description: searchTerm } : null,
    );

    return tasks;
  }

  findById(id) {
    const task = database.select("tasks").find((task) => task.id === id);

    return task;
  }

  create(data) {
    const { title, description } = data;

    const newTask = {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    database.insert("tasks", newTask);

    return newTask;
  }

  update(id, data) {
    const existingTask = this.findById(id);

    if (!existingTask) {
      return null;
    }

    const { title, description } = data;

    const updatedTask = {
      ...existingTask,
      title,
      description,
      updated_at: new Date().toISOString(),
    };

    database.update("tasks", id, updatedTask);

    return updatedTask;
  }

  delete(id) {
    const existingTask = this.findById(id);

    if (!existingTask) {
      return null;
    }

    database.delete("tasks", id);

    return existingTask;
  }
}
