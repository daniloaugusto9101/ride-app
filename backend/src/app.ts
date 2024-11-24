import express, { NextFunction, Request, Response } from "express";
import router from "./routes/routesV1";
import cors from "cors";

function createApp() {
  const app = express();
  app.use(cors());

  app.use(express.json());

  app.use("/", router);

  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
      error_code: "INTERNAL_SERVER_ERROR",
      error_description: error.message,
    });
  });

  return app;
}

export default createApp;
