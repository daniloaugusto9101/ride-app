import { Router } from "express";
import * as RideControler from "../controllers/ride-controller";

const router = Router();

router.get("/players", RideControler.calculateRide);

export default router;
