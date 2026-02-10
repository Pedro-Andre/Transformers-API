import express from "express";
import router from "./routes";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  console.log("server rodando");

  return app;
}

export default createApp;
