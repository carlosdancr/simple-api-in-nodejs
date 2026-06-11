import { taskService } from "../services/task-service.js";

class TaskController {
  findAll(req, res) {
    const { searchTerm } = req.query;

    const tasks = taskService.findAll(searchTerm);

    return res.writeHead(200).end(JSON.stringify(tasks));
  }

  create(req, res) {
    const newTask = taskService.create(req.body);

    return res.writeHead(201).end(JSON.stringify(newTask));
  }

  update(req, res) {
    const updatedTask = taskService.update(req.params.id, req.body);

    return res.writeHead(200).end(JSON.stringify(updatedTask));
  }

  complete(req, res) {
    const completedTask = taskService.complete(req.params.id);

    return res.writeHead(200).end(JSON.stringify(completedTask));
  }

  delete(req, res) {
    const deletedTask = taskService.delete(req.params.id);

    return res.writeHead(200).end(JSON.stringify(deletedTask));
  }
}

export const taskController = new TaskController();
