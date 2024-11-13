const express = require("express");
const { ruruHTML } = require("ruru/server");
const app = express();
const { connectSql } = require("./config/mysql");
const { makeTable } = require("./models/Users");
const { createHandler } = require("graphql-http/lib/use/express");
const { schema } = require("./services/graphql-schema");
const PORT = 3000;

app.get("/", (req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.use(
  "/graphql",
  createHandler({
    schema,
  })
);

app.listen(PORT, () => {
  connectSql();
  makeTable();
  console.log("Servidor rodando na porta localhost:3000");
});
