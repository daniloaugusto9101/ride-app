import { Router } from "express";
import * as RideControler from "../controllers/ride-controller";

const router = Router();

router.get("/ride/estimate", RideControler.calculateRide);

export default router;
