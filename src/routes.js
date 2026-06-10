import { TaskController } from "./controllers/task-controller.js";

const taskController = new TaskController();

export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: taskController.getAll,
  },
  {
    method: "POST",
    path: "/tasks",
    handler: taskController.create,
  },
];
