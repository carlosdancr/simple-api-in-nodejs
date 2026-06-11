import { taskService } from "../services/task-service.js";

class TaskController {
  findAll(req, res) {
    const { searchTerm } = req.query;

    const tasks = taskService.findAll(searchTerm);

    return res.writeHead(200).end(JSON.stringify(tasks));
  }

  create(req, res) {
    try {
      const newTask = taskService.create(req.body);

      return res.writeHead(201).end(JSON.stringify(newTask));
    } catch (err) {
      return res.writeHead(err.statusCode).end(JSON.stringify(err));
    }
  }

  update(req, res) {
    try {
      const updatedTask = taskService.update(req.params.id, req.body);

      return res.writeHead(200).end(JSON.stringify(updatedTask));
    } catch (err) {
      return res.writeHead(err.statusCode).end(JSON.stringify(err));
    }
  }

  complete(req, res) {
    try {
      const completedTask = taskService.complete(req.params.id);

      return res.writeHead(200).end(JSON.stringify(completedTask));
    } catch (err) {
      console.log(err);

      return res.writeHead(err.statusCode).end(JSON.stringify(err));
    }
  }

  delete(req, res) {
    try {
      const deletedTask = taskService.delete(req.params.id);

      return res.writeHead(200).end(JSON.stringify(deletedTask));
    } catch (err) {
      return res.writeHead(err.statusCode).end(JSON.stringify(err));
    }
  }
}

export const taskController = new TaskController();
