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

  if (!description) {
    res.writeHead(400).end(
      JSON.stringify({
        error: "O campo 'description' é obrigatório.",
      }),
    );

    return false;
  }

  return true;
}
