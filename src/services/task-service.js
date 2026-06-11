import { randomUUID } from "node:crypto";

import { taskRepository } from "../repositories/task-repository.js";
import { validateTaskBody } from "../utils/validate-task-body.js";
import { NotFoundError } from "../errors.js";

class TaskService {
  findAll(searchTerm) {
    const filters = searchTerm
      ? { title: searchTerm, description: searchTerm }
      : {};

    const tasks = taskRepository.findAll(filters);

    return tasks;
  }

  create({ title, description }) {
    validateTaskBody({ title, description });

    const newTask = {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    taskRepository.create(newTask);

    return newTask;
  }

  update(id, { title, description }) {
    validateTaskBody({ title, description });

    const existingTask = taskRepository.findById(id);

    if (!existingTask) {
      throw new NotFoundError({ message: "Tarefa não encontrada." });
    }

    const updatedTask = {
      ...existingTask,
      title,
      description,
      updated_at: new Date().toISOString(),
    };

    taskRepository.update(id, updatedTask);

    return updatedTask;
  }

  complete(id) {
    const existingTask = taskRepository.findById(id);

    if (!existingTask) {
      throw new NotFoundError({ message: "Tarefa não encontrada." });
    }

    const updatedTask = {
      ...existingTask,
      completed_at:
        existingTask.completed_at === null ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    taskRepository.update(id, updatedTask);

    return updatedTask;
  }

  delete(id) {
    const existingTask = taskRepository.findById(id);

    if (!existingTask) {
      throw new NotFoundError({ message: "Tarefa não encontrada." });
    }

    taskRepository.delete(id);

    return existingTask;
  }
}

export const taskService = new TaskService();
