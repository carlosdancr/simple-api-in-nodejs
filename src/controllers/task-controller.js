import { TaskModel } from "../models/task-model.js";
import { validateTaskBody } from "../utils/validate-task-body.js";

const taskModel = new TaskModel();

export class TaskController {
  getAll(req, res) {
    const { searchTerm } = req.query;

    const tasks = taskModel.findAll(searchTerm);

    return res.writeHead(200).end(JSON.stringify(tasks));
  }

  create(req, res) {
    if (!validateTaskBody(req, res)) {
      return;
    }

    const { title, description } = req.body;

    const newTask = taskModel.create({ title, description });

    return res.writeHead(201).end(JSON.stringify(newTask));
  }

  update(req, res) {
    if (!validateTaskBody(req, res)) {
      return;
    }

    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTask = taskModel.update(id, { title, description });

    if (!updatedTask) {
      return res.writeHead(404).end(
        JSON.stringify({
          error: "Tarefa não encontrada.",
        }),
      );
    }

    return res.writeHead(200).end(JSON.stringify(updatedTask));
  }
}
