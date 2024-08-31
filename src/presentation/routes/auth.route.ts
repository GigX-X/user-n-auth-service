import { Router } from "express";
import {
  login,
  sendOtp,
  verifyOtpAndSignUp,
} from "../controllers/auth.controller";

const router = Router();

router.post("/send-otp", sendOtp);
router.post("/signup", verifyOtpAndSignUp);
router.post("/login", login);

export default router;
