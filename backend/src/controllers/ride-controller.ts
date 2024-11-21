import { Request, Response } from "express";
import * as service from "../services/ride-service";

export const calculateRide = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.calculateRideService(bodyValue);
  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const getRideById = async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customer_id);
  const driverId = String(req.query.driver_id);
  const httpResponse = await service.getRideByIdService(customerId, driverId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
