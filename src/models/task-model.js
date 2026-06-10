import { randomUUID } from "node:crypto";

import { Database } from "../database.js";

const database = new Database();

export class TaskModel {
  findAll() {
    const tasks = database.select("tasks");

    return tasks;
  }

  create(data) {
    const { title, description } = data;

    const task = {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    database.insert("tasks", task);

    return task;
  }
}
