import { taskController } from "./controllers/task-controller.js";
import { buildRoutePath } from "./utils/build-route-path.js";

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: taskController.findAll,
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: taskController.create,
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: taskController.update,
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: taskController.complete,
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: taskController.delete,
  },
];
