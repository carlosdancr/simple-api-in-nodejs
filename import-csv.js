import fs from "node:fs";
import { parse } from "csv-parse";

const CSV_PATH = process.argv[2];

if (!CSV_PATH) {
  console.error(
    "Informe o caminho do arquivo CSV.\n\nExemplo:\n  node import-csv.js path/to/tasks.csv",
  );

  process.exit(1);
}

async function importCsv(filePath) {
  const parser = fs.createReadStream(filePath).pipe(
    parse({
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }),
  );

  for await (const record of parser) {
    const { title, description } = record;

    if (!title || !description) {
      console.warn(
        "Linha ignorada: os campos title e description são obrigatórios.",
        record,
      );

      continue;
    }

    try {
      const res = await fetch("http://localhost:3333/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        const text = await res.text();

        console.error(
          `Não foi possível importar a tarefa "${title}". Status: ${res.status}. Detalhes: ${text}`,
        );
      } else {
        const created = await res.json();

        console.log(
          `Tarefa importada com sucesso: "${created.title}" — ID: ${created.id}`,
        );
      }
    } catch (err) {
      console.error(
        `Não foi possível conectar à API ao importar a tarefa "${title}". Verifique se o servidor está rodando em http://localhost:3333. Detalhes: ${err.message}`,
      );
    }
  }
}

importCsv(CSV_PATH).catch((err) => {
  console.error("A importação foi interrompida por um erro inesperado.", err);

  process.exit(1);
});
