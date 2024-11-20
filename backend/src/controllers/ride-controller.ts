import { Request, Response } from "express";

export const calculateRide = (req: Request, res: Response) => {
  res.status(200).json({
    player: "Danasd adadilo",
  });
};
