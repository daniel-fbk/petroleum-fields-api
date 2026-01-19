import dotenv from "dotenv";
import * as z from "zod";

dotenv.config();

// Define Zod schema
const appConfigSchema = z.object({
  DB_PORT: z.string().regex(/^[0-9]+$/),
  DB_HOST: z.string(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  LOG_LEVEL: z.string(),
});

// Parse and validate
const validatedConfig = appConfigSchema.safeParse(process.env);

if (!validatedConfig.success) {
  console.error("Invalid .env variables:", validatedConfig.error.errors);
  process.exit(1);
}

const appConfig = {
  PORT: parseInt(process.env.PORT || validatedConfig.data.PORT),
  DB_PORT: parseInt(validatedConfig.data.DB_PORT),
  DB_HOST: validatedConfig.data.DB_HOST,
  DB_NAME: validatedConfig.data.DB_NAME,
  DB_USER: validatedConfig.data.DB_USER,
  DB_PASSWORD: validatedConfig.data.DB_PASSWORD,
  LOG_LEVEL: validatedConfig.data.LOG_LEVEL,
};

export default appConfig;
