import { TaskController } from "./controllers/task-controller.js";

const taskController = new TaskController();

export const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler: taskController.create,
  },
];
