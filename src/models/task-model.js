import { randomUUID } from "node:crypto";

import { Database } from "../database.js";

const database = new Database();

export class TaskModel {
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
  }
}
