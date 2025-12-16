import express from "express";

import { getFields, getField, createField } from "./database.js";

const app = express();

app.get("/fields", async (req, res) => {
  const fields = await getFields();
  res.send(fields);
});

app.get("/fields/:id", async (req, res) => {
  const id = req.params.id;
  const field = await getField(id);
  res.send(field);
});

app.post("/fields", async (req, res) => {
  const {
    name,
    region,
    block,
    operator,
    partners,
    status,
    discovery_year,
    onstream_date,
    abandonment_date,
    reservoir,
    water_depth,
    latitude,
    longitude,
    field_type,
  } = req.body;
  const field = await createField(
    name,
    region,
    block,
    operator,
    partners,
    status,
    discovery_year,
    onstream_date,
    abandonment_date,
    reservoir,
    water_depth,
    latitude,
    longitude,
    field_type
  );
  res.status(201).send(field);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
