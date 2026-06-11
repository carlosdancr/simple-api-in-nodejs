export function withErrorHandler(handler) {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (err) {
      return res.writeHead(err.statusCode).end(JSON.stringify(err));
    }
  };
}
