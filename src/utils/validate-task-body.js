export function validateTaskBody(req, res) {
  const { title, description } = req.body;

  if (!title) {
    res.writeHead(400).end(
      JSON.stringify({
        error: "O campo 'title' é obrigatório.",
      }),
    );

    return false;
  }

  if (typeof title !== "string") {
    return res.writeHead(400).end(
      JSON.stringify({
        error: "O campo 'title' deve ser uma string.",
      }),
    );
  }

  if (!description) {
    res.writeHead(400).end(
      JSON.stringify({
        error: "O campo 'description' é obrigatório.",
      }),
    );

    return false;
  }

  if (typeof description !== "string") {
    return res.writeHead(400).end(
      JSON.stringify({
        error: "O campo 'description' deve ser uma string.",
      }),
    );
  }

  return true;
}
