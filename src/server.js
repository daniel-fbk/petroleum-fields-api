import app from "./app.js";
import appConfig from "./config/config.js";

app.listen(appConfig.PORT, () => {
  console.info(`Server running on ${appConfig.PORT}`);
});
