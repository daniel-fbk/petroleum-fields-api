import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Petroleum Fields API",
      version: "1.0.0",
      description: "REST API for managing petroleum field data",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        Field: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Johan Sverdrup",
            },
            region: {
              type: "string",
              example: "North Sea",
            },
            block: {
              type: "string",
              example: "16/2-3",
            },
            operator: {
              type: "string",
              example: "Equinor",
            },
            partners: {
              type: "string",
              nullable: true,
              example: "Aker BP, Petoro",
            },
            status: {
              type: "string",
              description: "Production status",
              example: "producing",
            },
            discovery_year: {
              type: "integer",
              example: 2010,
            },
            onstream_date: {
              type: "string",
              format: "date",
              example: "2019-09-30",
            },
            abandonment_date: {
              type: "string",
              format: "date",
              nullable: true,
              example: null,
            },
            reservoir: {
              type: "string",
              example: "Utsira High",
            },
            water_depth: {
              type: "number",
              example: 115,
            },
            latitude: {
              type: "number",
              example: 59.5,
            },
            longitude: {
              type: "number",
              example: 3.5,
            },
            field_type: {
              type: "string",
              example: "oil & gas",
            },
          },
          required: [
            "name",
            "region",
            "block",
            "operator",
            "status",
            "discovery_year",
            "onstream_date",
            "field_type",
          ],
        },
      },
    },
  },
  apis: ["./src/routes/fields.routes.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
