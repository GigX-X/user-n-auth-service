import { Router } from "express";
import {
  login,
  sendOtp,
  verifyOtpAndSignUp,
} from "../controllers/auth.controller";

const router = Router();

router.post("/send-otp", sendOtp);
router.post("/login", login);
router.post("/signup", verifyOtpAndSignUp);

export default router;
