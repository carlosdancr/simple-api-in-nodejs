export function validateTaskBody({ title, description }) {
  if (!title) {
    throw new Error("O campo 'title' é obrigatório.");
  }

  if (typeof title !== "string") {
    throw new Error("O campo 'title' deve ser uma string.");
  }

  if (!description) {
    throw new Error("O campo 'description' é obrigatório.");
  }

  if (typeof description !== "string") {
    throw new Error("O campo 'description' deve ser uma string.");
  }
}
