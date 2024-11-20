import { Request, Response } from "express";
import * as service from "../services/ride-service";
import { ok } from "../utils/http-helper";

export const calculateRide = async (req: Request, res: Response) => {
  const data = await service.calculateRideService();
  const reponse = await ok(data);
  res.status(reponse.statusCode).json(reponse.body);
};
