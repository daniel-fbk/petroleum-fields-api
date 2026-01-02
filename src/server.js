import app from "./app.js";
import appConfig from "./config/config.js";

app.listen(appConfig.PORT, "localhost", () => {
  console.info(`Server running on port http://localhost:${appConfig.PORT}/api/docs`);
});
