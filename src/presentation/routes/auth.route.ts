import { Router } from "express";
import { login, sendOtp, signup } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/send-otp", sendOtp);

export default router;
