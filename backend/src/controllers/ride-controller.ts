import { Request, Response } from "express";
import * as service from "../services/ride-service";

export const calculateRide = async (req: Request, res: Response) => {
  const httpResponse = await service.calculateRideService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
