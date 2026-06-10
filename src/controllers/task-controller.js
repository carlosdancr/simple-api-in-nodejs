import { TaskModel } from "../models/task-model.js";

const taskModel = new TaskModel();

export class TaskController {
  create(req, res) {
    taskModel.create(req.body);

    res.writeHead(201).end();
  }
}
