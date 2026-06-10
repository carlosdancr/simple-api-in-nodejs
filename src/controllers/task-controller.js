import { TaskModel } from "../models/task-model.js";

const taskModel = new TaskModel();

export class TaskController {
  getAll(req, res) {
    const { searchTerm } = req.query;

    const tasks = taskModel.findAll(searchTerm);

    return res.writeHead(200).end(JSON.stringify(tasks));
  }

  create(req, res) {
    const { title, description } = req.body;

    if (!title) {
      return res.writeHead(400).end(
        JSON.stringify({
          error: "O campo 'title' é obrigatório.",
        }),
      );
    }

    if (!description) {
      return res.writeHead(400).end(
        JSON.stringify({
          error: "O campo 'description' é obrigatório.",
        }),
      );
    }

    const task = taskModel.create({ title, description });

    return res.writeHead(201).end(JSON.stringify(task));
  }
}
