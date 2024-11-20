import { Request, Response } from "express";
import * as service from "../services/ride-service";

export const calculateRide = async (req: Request, res: Response) => {
  const data = await service.calculateRideSerive();
  res.status(200).json(data);
};
