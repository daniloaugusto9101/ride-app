import express, { Request, Response } from "express";
import * as RideControler from "./controllers/ride-controller";

function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", RideControler.calculateRide);

  return app;
}

export default createApp;
