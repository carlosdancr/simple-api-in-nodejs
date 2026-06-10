import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    return res.writeHead(200).end("OK");
  }

  return res.writeHead(404).end();
});

server.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
