import { buildRoutePath } from "./utils/build-route-path.js";
import { TaskController } from "./controllers/task-controller.js";

const taskController = new TaskController();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: taskController.getAll,
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: taskController.create,
  },
];
