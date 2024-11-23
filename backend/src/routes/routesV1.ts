import { Router } from "express";
import * as RideControler from "../controllers/ride-controller";

const router = Router();

router.post("/ride/estimate", RideControler.rideEstimate);
router.post("/ride/confirm", RideControler.rideConfirm);
router.get("/ride/:customer_id", RideControler.getRideById);

export default router;
