import express from "express";
import fs from "fs";
import yaml from "js-yaml";
import swaggerUi from "swagger-ui-express";

import fieldsRouter from "./routes/fields.routes.js";
import wellsRouter from "./routes/wells.routes.js";
import wellTypesRouter from "./routes/wellTypes.routes.js";
import wellSpecsRouter from "./routes/wellSpecs.routes.js";
import productionRouter from "./routes/production.routes.js";
import incidentsRouter from "./routes/incidents.routes.js";
import fieldMetricsRouter from "./routes/fieldMetrics.routes.js";
import equipmentRouter from "./routes/equipment.routes.js";
import equipmentMaintenance from "./routes/equipmentMaintenance.routes.js";

import HttpException from "./utils/HttpException.js";
import logger from "./utils/logger.js";

const app = express();

// Middleware
app.use(express.json());

const swaggerDocument = yaml.load(fs.readFileSync("./docs/swagger.yml", "utf8"));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get("/api", (req, res) => {
  res.status(200).json({
    name: "Petroleum Fields API",
    docs: "/api/docs",
  });
});

app.use("/api/fields", fieldsRouter);
app.use("/api/wells", wellsRouter);
app.use("/api/well-types", wellTypesRouter);
app.use("/api/well-specs", wellSpecsRouter);
app.use("/api/production", productionRouter);
app.use("/api/incidents", incidentsRouter);
app.use("/api/field-metrics", fieldMetricsRouter);
app.use("/api/equipment", equipmentRouter);
app.use("/api/equipment-maintenance", equipmentMaintenance);

// Error handling
app.use((req, res, next) => {
  next(new HttpException(404, "Page not found"));
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Something went wrong",
  });
});

export default app;
