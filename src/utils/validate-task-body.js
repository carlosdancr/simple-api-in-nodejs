import { ValidationError } from "../errors.js";

export function validateTaskBody({ title, description }) {
  if (!title) {
    throw new ValidationError({
      message: "O campo 'title' é obrigatório.",
    });
  }

  if (typeof title !== "string") {
    throw new ValidationError({
      message: "O campo 'title' deve ser uma string.",
    });
  }

  if (!description) {
    throw new ValidationError({
      message: "O campo 'description' é obrigatório.",
    });
  }

  if (typeof description !== "string") {
    throw new ValidationError({
      message: "O campo 'description' deve ser uma string.",
    });
  }
}
