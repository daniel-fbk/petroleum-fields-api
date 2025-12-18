import express from "express";
import fs from "fs";
import yaml from "js-yaml";
import swaggerUi from "swagger-ui-express";
import fieldsRouter from "./routes/fields.routes.js";
import HttpException from "./utils/HttpException.js";
import logger from "./utils/logger.js";

const app = express();

// Middleware
app.use(express.json());

// Load Swagger YAML
const swaggerDocument = yaml.load(fs.readFileSync("./docs/swagger.yaml", "utf8"));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API root
app.get("/api", (req, res) => {
  res.status(200).json({
    name: "Petroleum Fields API",
    version: "1.0.0",
    docs: "/api/docs",
  });
});

// Routes
app.use("/api/fields", fieldsRouter);

// 404 handler
app.use((req, res, next) => {
  next(new HttpException(404, "Page not found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Something went wrong",
  });
});

export default app;
